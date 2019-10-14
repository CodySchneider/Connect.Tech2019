import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import Icon from 'atom/Icon/Icon';
import styles from './Wind.scss';

export class Wind extends PureComponent {
  get unit() {
    const { units } = this.props;

    return (units === 'e' || units === 'h')
      ? 'mph' : 'km/h';
  }

  renderWindCardinalDirection() {
    const {
      windDirectionCardinal,
    } = this.props;

    return (
      <>
        {windDirectionCardinal && (
          <span>
            {`${windDirectionCardinal} `}
          </span>
        )}
      </>
    );
  }

  renderWindDirection() {
    const {
      windDirection,
      iconClassName,
    } = this.props;

    return (
      <Icon
        data-testid="WindDirectionIcon"
        className={iconClassName}
        style={{ transform: `rotate(${windDirection}deg)` }}
        set="current-conditions"
        name="wind-direction"
        theme="dark"
      />
    );
  }

  render() {
    const {
      windSpeed,
      windDirection,
      units,
      className,
    } = this.props;

    return (
      <span
        data-testid="Wind"
        className={`${styles.windWrapper} ${className}`}
      >
        {Number.isFinite(windDirection)
          ? this.renderWindDirection() : ''}
        {this.renderWindCardinalDirection()}
        {Number.isFinite(windSpeed) && units
          ? `${windSpeed} ${this.unit}` : '--'}
      </span>
    );
  }
}

Wind.propTypes = {
  /**
   * CSS Class
   */
  className: PropTypes.string,
  /**
   * windDirection value from SUN APIs
   */
  windDirection: PropTypes.number,
  /**
   * windDirectionCardinal value from SUN APIs
   */
  windDirectionCardinal: PropTypes.string,
  /**
   * windSpeed value from SUN APIs
   */
  windSpeed: PropTypes.number.isRequired,
  /**
   * Unit system to use to display Data
   */
  units: PropTypes.oneOf(['e', 'm', 'h']).isRequired,
};

export default withStyles(styles)(Wind);
