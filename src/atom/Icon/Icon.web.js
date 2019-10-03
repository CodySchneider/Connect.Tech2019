import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import classnames from 'classnames';
import { createLogger } from '@wxu/logger';
import { skycodeLookup } from 'skycode';
import styles from './Icon.scss';

const logger = createLogger('Icon.web');

async function loadSVG(set, name) {
  try {
    const res = await import(/* webpackChunkName: "Icon" */ `./svg/${set}/${name}.svg`);

    return res.default;
  } catch (e) {
    logger.warn(e);
    const res = await import(/* webpackChunkName: "Icon" */'./svg/weather/na.svg');

    return res.default;
  }
}
export class Icon extends Component {
  state = {
    SvgIcon: null,
  }

  componentWillMount() {
    const { set } = this.props;
    const { iconName } = this;

    this.setIcon(set, iconName);
  }

  componentWillReceiveProps(nextProps) {
    const iconName = nextProps.name || skycodeLookup(nextProps.skycode);

    this.setIcon(nextProps.set, iconName);
  }

  async setIcon(set, name) {
    const SvgIcon = await loadSVG(set, name);

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
      styles.icon,
      styles[iconName] || styles[name] || '',
      styles[`${theme}Theme`] || '',
      className,
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

    // If the SvgIcon exists (eventually), return the Icon. This solves the scenario
    // for client side interacted icons and not just purely rehydrated icons.
    if (SvgIcon) {
      return (
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

    // https://github.com/facebook/react/issues/10923#issuecomment-338715787
    // Hack where React does not manipulate tree of a dangerouslySetInnerHTML node
    // on client, even if it is wrong. This prevents the flicker of icons.
    return <svg viewBox="0 0 24 24" className={this.classNames} dangerouslySetInnerHTML={{ __html: '' }} />;
  }
}

Icon.propTypes = {
  set: PropTypes.string.isRequired,
  name: PropTypes.string,
  ariaLabel: PropTypes.string,
  skycode: PropTypes.number,
  theme: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
};

Icon.defaultProps = {
  name: '',
  skycode: null,
  theme: '',
  className: '',
  width: null,
  x: null,
  y: null,
};

export default withStyles(styles)(Icon);
