import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash/omit';
import withStyles from 'isomorphic-style-loader/withStyles';
import Icon from 'atom/Icon/Icon';
import classnames from 'classnames';
import styles from './Disclosure.scss';

export class Disclosure extends Component {
  constructor(props) {
    super(props);
    // Setup ref for attaching handlers
    this.detailsRef = React.createRef();
    this.state = {
      open: props.open,
      prevOpenProp: props.open,
    };
  }

  // We need to use derived state to allow component to
  // be controlled by props and internal state.
  static getDerivedStateFromProps(props, state) {
    const {
      prevOpenProp,
    } = state;
    const { open: openProp } = props;

    return openProp !== prevOpenProp
      ? { open: openProp, prevOpenProp: openProp } : null;
  }

  componentDidMount() {
    const { current } = this.detailsRef;

    // Over-riding native disclosure handlers to prevent these
    // events from confusing our component events that manage state.
    current.addEventListener('click', e => e.preventDefault());
    current.addEventListener('keyup', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
      }
    });
    current.addEventListener('keydown', (event) => {
      // WAI spec says Enter and Space should activate disclosure. Otherwise,
      // leave the event alone so user can tab to next elements.
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.onToggle(event);
      }
    });
  }

  onToggle = (event) => {
    const { onToggle } = this.props;
    const { open } = this.state;
    const isOpen = !open;

    if (onToggle) onToggle({ isOpen, event });

    this.setState(
      { open: isOpen },
    );
  };

  renderSummaryContent() {
    const {
      title,
      summaryContent,
    } = this.props;
    const {
      open,
    } = this.state;

    return summaryContent || (
      <div className={styles.SummaryDefault}>
        {title}
        <Icon
          set="ui"
          name={open ? 'caret-up' : 'caret-down'}
          className={styles.SummaryIcon}
        />
      </div>
    );
  }

  render() {
    const {
      className,
      summaryClassName,
      hideBorderOnSummaryOpen,
      contentClassName,
      openClassName,
      title,
      children,
      theme,
      outerBorder,
      contentBgGray,
      ariaLabel,
      ...other
    } = this.props;
    const {
      open,
    } = this.state;
    const themeName = theme && `theme${theme.charAt(0).toUpperCase() + theme.slice(1)}`;
    const DisclosureClasses = classnames(
      styles.Disclosure,
      className,
      {
        [styles[themeName]]: theme,
        [styles.outerBorder]: outerBorder,
      }
    );
    const SummaryClasses = classnames(
      styles.Summary,
      summaryClassName,
      {
        [styles.hideBorderOnSummaryOpen]: hideBorderOnSummaryOpen,
        [openClassName]: open && openClassName,
      },
    );
    const DisclosureContentClasses = classnames(
      styles.DisclosureContent,
      contentClassName,
      {
        [styles.contentBgGray]: contentBgGray,
      }
    );
    // Remove 'open' from in-bound props so it doesn't
    // over-write the attribute managed by the component
    const otherProps = omit({ ...other }, ['open', 'summaryContent']);

    return (
      <details
        className={DisclosureClasses}
        open={open}
        {...otherProps}
        aria-label={ariaLabel || title}
      >
        <summary
          ref={this.detailsRef}
          className={SummaryClasses}
          role="button"
          onClick={this.onToggle}
          onKeyDown={this.onKeyDown}
          aria-expanded={open}
          tabIndex={0}
        >
          {this.renderSummaryContent()}
        </summary>
        <div
          className={DisclosureContentClasses}
        >
          {children}
        </div>
      </details>
    );
  }
}

Disclosure.propTypes = {
  /**
   * Provide the contents of your Disclosure
   */
  children: PropTypes.node.isRequired,

  /**
   * Theme name
   */
  theme: PropTypes.oneOf(['list', 'List']),

  /**
   * Adds outer border to list themed items; !!Requires a wrapper
   * around the list elements to determine first-child
   */
  outerBorder: PropTypes.bool,

  /**
   * Remove the border between Summary and Content sections when open,
   * only relevant to 'List' theme
   */
  hideBorderOnSummaryOpen: PropTypes.bool,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Specify an optional className to be applied to the summary
   */
  summaryClassName: PropTypes.string,

  /**
   * Specify an optional className to be applied to the content
   */
  contentClassName: PropTypes.string,

  /**
   * Apply gray background to content area
   */
  contentBgGray: PropTypes.bool,

  /**
   * The Summary text.
   */
  title: PropTypes.node,

  /**
   * Accessible label for the details element. If not defined, will
   * attempt to use title.
   */
  ariaLabel: PropTypes.string,

  /**
   * Optionally provide custom Summary content. Be sure to include
   * support for toggle state indicator.
   */
  summaryContent: PropTypes.element,

  /**
   * Component can optionally be controlled by parent via prop
   */
  open: PropTypes.bool,

  /**
   * Callback to be fired when the component is toggled.
   */
  onToggle: PropTypes.func,
};

Disclosure.defaultProps = {
  title: 'Summary',
  open: false,
};

export default withStyles(styles)(Disclosure);
