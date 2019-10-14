import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Icon from 'atom/Icon/Icon';
import PropTypes from 'prop-types';
import styles from './Pressure.scss';

const UP_CODE = 1;
const DOWN_CODE = 2;

export class Pressure extends PureComponent {
  getFormattedPressure = () => {
    const {
      pressureAltimeter,
      pressureMeanSeaLevel,
      units,
    } = this.props;
    const pressureValue = (pressureAltimeter > 0 || pressureMeanSeaLevel > 0)
      && (pressureAltimeter || pressureMeanSeaLevel);
    const useEnglish = units === 'e';
    const unit = useEnglish ? 'in' : 'mb';

    return pressureValue
      ? `${useEnglish ? pressureValue.toFixed(2) : pressureValue.toFixed(1)} ${unit}`
      : null;
  };

  getPressureIcon = () => {
    const { pressureTendencyCode, iconClassName } = this.props;
    const direction = this.arrowDirection(pressureTendencyCode);

    return direction
      ? (
        <Icon
          set="ui"
          name={`arrow-${direction}`}
          className={iconClassName}
        />
      )
      : null;
  };

  arrowDirection(code) {
    switch (code) {
      case UP_CODE:
        return 'up';
      case DOWN_CODE:
        return 'down';
      default:
        return '';
    }
  }

  render() {
    const {
      className,
    } = this.props;
    const formattedPressure = this.getFormattedPressure();

    return (
      <span
        data-testid="PressureValue"
        className={`${styles.pressureWrapper} ${className}`}
      >
        {formattedPressure
          ? (
            <>
              {this.getPressureIcon()}
              {formattedPressure}
            </>
          )
          : <>--</>
        }
      </span>
    );
  }
}

Pressure.propTypes = {
  /**
   * CSS Class
   */
  className: PropTypes.string,
  /**
   * pressureAltimeter value from SUN APIs, can be displayed with 'in' or 'mb' as units
   */
  pressureAltimeter: PropTypes.number,
  /**
   * pressureMeanSeaLevel value from SUN APIs, can be displayed with 'in' or 'mb' as units. V3Observation
   * should be forced to 'm' units.
   */
  pressureMeanSeaLevel: PropTypes.number,
  /**
   * Barometer trending direction provided by vt1observation API
   */
  pressureTendencyCode: PropTypes.oneOf([0, 1, 2]),
  /**
   * Unit system to use to display Data
   */
  units: PropTypes.oneOf(['e', 'm', 'h']).isRequired,
};

export default withStyles(styles)(Pressure);
