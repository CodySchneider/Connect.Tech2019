import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import classnames from 'classnames';
import withStyles from 'isomorphic-style-loader/withStyles';
import { inViewport } from 'inViewport';
import {
  LAZYLOAD_OFFSET,
} from './constants';
import styles from './Image.scss';

// Can't import this from constants or docgen poops the bed
export const IMAGE_BREAKPOINTS = [
  80,
  160,
  240,
  320,
  480,
  640,
  800,
  980,
];

export class Image extends PureComponent {
  // Use scroll handler when no IntersectionObserver available
  scrollEventHandler = throttle(() => {
    const { src } = this.props;
    const { current } = this.imageRef;
    const inViewportOptions = {
      offset: {
        top: LAZYLOAD_OFFSET,
        right: LAZYLOAD_OFFSET,
        bottom: LAZYLOAD_OFFSET,
        left: LAZYLOAD_OFFSET,
      },
    };

    if (inViewport(current, inViewportOptions)) {
      requestAnimationFrame(() => {
        this.setState({
          loadedSrc: src,
        });
        document.removeEventListener('scroll', this.scrollEventHandler);
      });
    }
  }, 200);

  // Use resize handler to grab width for sizes attribute and fallback src
  resizeEventHandler = throttle(() => {
    const { current } = this.imageRef;

    if (current) {
      requestAnimationFrame(() => {
        this.setState({
          domWidth: current.getBoundingClientRect().width,
        });
      });
    }
  }, 200);

  constructor(props) {
    super(props);
    // Error messaging for fun and profit
    if (__DEV__) {
      if (typeof props.ratio !== 'string') {
        throw new Error('You need to provide a blessed aspect ratio of ["16:9", "4:3", "1:1"]');
      }
      if (!props.lazy && !props.width && (props.srcSet !== false && !props.sizes)) {
        throw new Error('If you are not lazy loading, you need to provide width and sizes props for your image srcset.');
      }
    }

    // Setup ref for attaching handlers
    this.imageRef = React.createRef();
    this.state = {
      loadedSrc: null, // Updated when lazy loaded images come into view
      loadedSrcset: null, // Updated when lazy loaded images come into view
      domWidth: undefined, // Calculated onMount and onResize
    };
  }

  componentDidMount() {
    const { current } = this.imageRef;
    const {
      lazy,
    } = this.props;

    if (lazy) {
      // Setup intersection observer if possible
      if (window && window.IntersectionObserver) {
        this.IntersectionObserver = new IntersectionObserver(this.intersectionObserverHandler, { rootMargin: `${LAZYLOAD_OFFSET}px ${LAZYLOAD_OFFSET}px` });
      }
      this.setState({
        domWidth: current.getBoundingClientRect().width,
      });
    }
    // Attach handlers for loading images
    this.enableHandlers();
  }

  componentDidUpdate(prevProps) {
    const {
      src,
    } = this.props;

    // Re-enable handlers if the src changes for some reason, specifically
    // changing image size in Storybook
    if (src !== prevProps.src) {
      this.enableHandlers();
    }
  }

  componentWillUnmount() {
    const { current } = this.imageRef;
    const {
      sizes,
      srcSet,
    } = this.props;


    // Detach handlers
    if (this.IntersectionObserver) {
      this.IntersectionObserver.unobserve(current);
    } else {
      document.removeEventListener('scroll', this.scrollEventHandler);
    }

    if (!sizes && (srcSet !== false)) {
      window.removeEventListener('resize', this.resizeEventHandler);
    }

  }

  get baseImageUrl() {
    const {
      src,
    } = this.props;

    // Encode image src in case there are spaces or other special characters in filename
    const uriEncodedSrc = encodeURI(src);

    // Convert deprecated DSX URLs to Fastly domain (s.w-x.co)
    let fastlyUrl = uriEncodedSrc.replace(/dsx\.weather\.com/gi, 's.w-x.co');

    // Use HTTPS for all the things
    fastlyUrl = fastlyUrl.replace('http:', 'https:');

    // Strip off any query params in the provided src prop so that we can use Fastly params instead
    const queryParamIndex = fastlyUrl.indexOf('?');

    return (queryParamIndex > -1) ? fastlyUrl.slice(0, queryParamIndex) : fastlyUrl;
  }

  get isGIF() {
    const {
      src,
    } = this.props;

    return src && src.includes('.gif');
  }

  // We want all image URLs to share the same general Fastly options unless over-ridden in props
  get imageUrlWithOptions() {
    const {
      ratio,
      format,
      autoWebP,
      quality,
    } = this.props;

    // If some weirdo wants to pump an animated GIF through here, I suppose
    // we should let them, but make sure to include ratio for later sizing
    if (this.isGIF) return `${this.baseImageUrl}?crop=${ratio}`;

    // We probably want to force format to Progressive JPG for compression, but can be over-ridden
    const imageFormat = `&format=${format}`;

    // Fastly supports automatic WebP, use it unless disabled via props
    const enableWebP = (autoWebP !== false) ? '&auto=webp' : '';

    // Fastly default compression is 85, use default compression setting or value from props
    const compressionQuality = `&quality=${quality}`;

    return `${this.baseImageUrl}?crop=${ratio}${imageFormat}${enableWebP}${compressionQuality}`;
  }

  // Convert IMAGE_BREAKPOINTS array to string for DOM injection.
  get defaultSrcset() {
    return IMAGE_BREAKPOINTS.map(
      breakpointWidth => `${this.imageUrlWithOptions}&width=${breakpointWidth} ${breakpointWidth}w`
    ).toString();
  }

  get srcSet() {
    const {
      lazy,
      srcSet,
    } = this.props;
    const {
      loadedSrcset,
    } = this.state;

    // Check to see if srcSet has been disabled via false value in prop or a GIF is being used
    if (srcSet !== false && !this.isGIF) {
      // For lazy loading use loadedSrcset provided by IntersectionObserver, otherwise
      // for SSR use srcSet from props or the default.
      return lazy ? loadedSrcset : srcSet || this.defaultSrcset;
    }
    return false;
  }

  // Default source used in both rendered and noscript fallback image as well as data-src attribute for Taboola
  get defaultSrc() {
    return `${this.imageUrlWithOptions}${this.currentBreakpoint ? `&width=${this.currentBreakpoint}` : ''}`;
  }

  // Src should be returned when the image is meant to render
  get src() {
    const {
      lazy,
      placeholder,
      ratio,
    } = this.props;
    const {
      loadedSrc,
    } = this.state;

    // For placeholders use compressed image
    if (placeholder && !loadedSrc) {
      return `${this.baseImageUrl}?crop=${ratio}&format=jpg&auto=webp&quality=30&width=160`;
    }

    return lazy ? loadedSrc : this.defaultSrc;
  }

  get sizes() {
    const {
      lazy,
      sizes,
      srcSet,
    } = this.props;
    const {
      domWidth,
    } = this.state;

    // If its a GIF or srcSet has been disabled via props, we don't need sizes
    if (srcSet === false || this.isGIF) return false;

    // If lazy loading we can use rendered element width for sizes attribute. We
    // still allow for manual over-ride when sizes is explicitly provided as a prop.
    // If not lazy loading, sizes attribute MUST to be provided as a
    // prop so the correct image can be prefetched based on server rendered HTML.
    return lazy ? sizes || (domWidth && `${domWidth}px`) : sizes;
  }

  // This is used to calculate padding for intrinsic ratio
  get aspectRatioDecimal() {
    const {
      ratio,
    } = this.props;
    const ratioParts = ratio.split(':');
    const [
      numerator,
      denominator,
    ] = ratioParts;

    return numerator / denominator;
  }

  // Find the closest standard image width so we don't nail cutting service with zillions of random image sizes.
  get currentBreakpoint() {
    const {
      width,
    } = this.props;
    const {
      domWidth,
    } = this.state;
    // Use props.width before calculated domWidth to allow for manual over-ride
    const currentWidth = width || domWidth;

    return IMAGE_BREAKPOINTS.reduce((prev, curr) => (
      Math.abs(curr - currentWidth) < Math.abs(prev - currentWidth) ? curr : prev
    ));
  }

  // Conditionally enable handlers based on browser support
  // TODO: For some reason the first scroll event results in this call taking ~50ms which is > 10x longer than
  // every subsequent call. Need to investigate root cause when I have more time.
  enableHandlers = () => {
    const {
      lazy,
      sizes,
      srcSet,
    } = this.props;
    const { current } = this.imageRef;

    // If no sizes are provided, we'll need to re-calculate sizes attribute on window resize,
    // if srcSet has been disabled we won't need sizes.
    if (!sizes && (srcSet !== false)) {
      window.addEventListener('resize', this.resizeEventHandler);
    }

    // We need to enable IntersectionObserver when lazy loading
    if (lazy) {
      if (this.IntersectionObserver) {
        this.IntersectionObserver.observe(current);
      } else {
        // For browsers without Intersection Observer (IE11)
        document.addEventListener('scroll', this.scrollEventHandler);
        document.dispatchEvent(new Event('scroll'));
      }
    }
  }

  // Update state with loadedSrc on intersection
  intersectionObserverHandler = (entries) => {
    const {
      srcSet,
    } = this.props;
    const { current } = this.imageRef;
    const loadedSrc = `${this.imageUrlWithOptions}&width=${this.currentBreakpoint}`;

    if (entries[0].isIntersecting) {
      requestAnimationFrame(() => {
        this.setState({
          loadedSrc,
          loadedSrcset: srcSet || this.defaultSrcset,
        });
        this.IntersectionObserver.unobserve(current);
      });
    }
  }

  render() {
    const {
      className,
      imgClassName,
      rounded,
      alt,
      gradient,
    } = this.props;
    const optionalImgProps = {
      alt: alt || '',
      sizes: this.sizes !== false ? this.sizes : undefined,
      srcSet: this.srcSet !== false ? this.srcSet : undefined,
    };

    return (
      <div className={classnames(
        {
          [styles.rounded]: rounded,
          [styles.gradient]: gradient,
        },

      )}
      >
        <div
          className={classnames(
            styles.intrinsicRatioRoot,
            className,
            { [styles.rounded]: rounded },
          )}
          style={{
          // For dynamic intrinsic ratios
            paddingTop: `${(1 / this.aspectRatioDecimal) * 100}%`,
          }}
        >
          <img
            ref={this.imageRef}
            className={classnames(
              imgClassName,
              styles.intrinsicRatioElement,
              { [styles.rounded]: rounded },
            )}
            src={this.src}
            // Taboola uses data-src attribute for crawling lazy-loaded images
            data-src={this.defaultSrc}
            {...optionalImgProps}
          />
          <noscript
            dangerouslySetInnerHTML={{ __html: `<img class="${classnames(imgClassName, styles.intrinsicRatioElement, { [styles.rounded]: rounded })}" alt="${alt}" src="${this.defaultSrc}" />` }}
          />
        </div>
      </div>
    );
  }
}

Image.propTypes = {
  /**
   * Aspect ratio of the image.
   */
  ratio: PropTypes.oneOf([
    '2.85:1', // promo driver one-off
    '16:9',
    '4:3',
    '1:1',
  ]),
  /**
   * Url of the image. This can be just the Base Url. If any deprecated DSX style query
   * params or domain are provided, they will be stripped and replaced with Fastly values.
   */
  src: PropTypes.string.isRequired,
  /**
   * Alt text should be provided for non presentational images. Thumbnails
   * where alt text would duplicate an adjacent heading should not include
   * an alt value.
   */
  alt: PropTypes.string,
  /**
   * Pass through class for component root
   */
  className: PropTypes.string,
  /**
   * Pass through class for image element
   */
  imgClassName: PropTypes.string,
  /**
   * Lazy loading is true by default, so this needs to be set to false for any above the
   * fold images. Images that aren't lazy loaded need width and sizes props.
   */
  lazy: PropTypes.bool,
  /**
   * The srcSet prop can be set to false to disable srcSet. You can also provide a custom srcSet
   * if the default srcset doesn't fit your needs. Please consider the caching implications if you
   * choose to use custom image cuts.
   */
  srcSet: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  /**
   * This sizes prop needs to be provided for non-lazy loaded images. Lazy images automatically calculate
   * this value based on their actual width.
   * https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes
   */
  sizes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  /**
   * The width prop needs to be provided for non-lazy images. It is needed for the fallback src used by
   * browsers which don't support srcset. It is also required if the srcSet is disabled in order
   * to generate the Fastly Url with the correct width. Any width provided will automatically snap to the
   * closest available IMAGE_BREAKPOINT width, but will fail PropType validation.
   */
  width: PropTypes.oneOf(IMAGE_BREAKPOINTS),
  /**
   * Use a Low Quality Image Placeholder for lazy loaded images. The placeholder Url is automatically generated.
   * This should really only be enabled for large images as smaller thumbnails should load before the placeholder
   * would even be seen.
   */
  placeholder: PropTypes.bool,
  /**
   * This option adds a CSS class to display the image with rounded corners
   */
  rounded: PropTypes.bool,
  /**
   * Global Fastly configuration over-ride
   * https://docs.fastly.com/api/imageopto/format
   */
  format: PropTypes.string,
  /**
   * Global Fastly configuration over-ride
   * https://docs.fastly.com/api/imageopto/auto
   */
  autoWebP: PropTypes.bool,
  /**
   * Global Fastly configuration over-ride
   * https://docs.fastly.com/api/imageopto/quality
   */
  quality: PropTypes.number,
  /**
   * This option adds a CSS class to display the image with a gradient overlay.
   */
  gradient: PropTypes.bool,

};

Image.defaultProps = {
  lazy: true,
  ratio: '16:9',
  format: 'pjpg',
  autoWebP: true,
  quality: 60,
};

export default withStyles(styles)(Image);
