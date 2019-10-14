import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import classnames from 'classnames';
import { skycodeLookup } from 'skycode';
import styles from './Icon.scss';

function loadSVG(set, name) {
  /* eslint-disable global-require */
  try {
    return require(`./svg/${set}/${name}.svg`);
  } catch (e) {
    // logger.warn(e);
    return require('./svg/weather/na.svg');
  }
  /* eslint-enable global-require */
}

export class Icon extends Component {
  state = {
    SvgIcon: null,
  }

  componentWillMount() {
    const { set } = this.props;
    const { iconName } = this;

    const SvgIcon = loadSVG(set, iconName);

    this.setState({ SvgIcon });
  }

  componentWillReceiveProps(nextProps) {
    const iconName = nextProps.name || skycodeLookup(nextProps.skycode);

    const SvgIcon = loadSVG(nextProps.set, iconName);

    this.setState({ SvgIcon });
  }

  get iconName() {
    const { name, skycode } = this.props;

    if (skycode !== null) {
      return skycodeLookup(skycode) || 'na';
    }

    return name;
  }

  get classNames() {
    const { theme = '', name, className } = this.props;
    const { iconName = '' } = this;

    return classnames(
      className,
      styles.icon,
      styles[iconName] || styles[name] || '',
      styles[`${theme}Theme`] || '',
    );
  }

  render() {
    const { SvgIcon } = this.state;
    const {
      width,
      x,
      y,
      ariaLabel,
      ...other
    } = this.props;

    return SvgIcon && (
      <SvgIcon
        {...other}
        data-testid="Icon"
        aria-label={ariaLabel}
        className={this.classNames}
        width={width}
        x={x}
        y={y}
      />
    );
  }
}

Icon.propTypes = {
  /**
   * The set is the folder that your icon SVG is located
   */
  set: PropTypes.string.isRequired,
  /**
   * File name of your SVG
   */
  name: PropTypes.string,
  /**
   * If there is no associated visible label, provide this prop for screen reader accessibility
   */
  ariaLabel: PropTypes.string,
  /**
   * From SUN APIs. WxIcon only
   */
  skycode: PropTypes.number,
  /**
   * Determines color of your icon
   */
  theme: PropTypes.oneOf(['action', 'dark', 'light', 'gray', 'full']),
  /**
   * Pass through class
   */
  className: PropTypes.string,
  /**
   * Width of the icon
   */
  width: PropTypes.number,
  /**
   * TODO: What is this for?
   */
  x: PropTypes.number,
  /**
   * TODO: What is this for?
   */
  y: PropTypes.number,
};

Icon.defaultProps = {
  skycode: null,
};

export default withStyles(styles)(Icon);
