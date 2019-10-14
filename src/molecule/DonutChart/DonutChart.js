import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import mapValues from 'lodash/mapValues';
import withStyles from 'isomorphic-style-loader/withStyles';
import classnames from 'classnames';
import Icon from 'atom/Icon/Icon';
import colors from 'atom/ColorPalette/_ColorPalette.vars.scss';
import styles from './DonutChart.scss';

export class DonutChart extends PureComponent {
  strokeColorForValue(value) {
    const chartLevelColors = mapValues(colors.chartLevels, colorObject => colorObject.rgba);

    switch (true) {
      case (value >= 0 && value < 20):
        return chartLevelColors.none;
      case (value >= 20 && value < 40):
        return chartLevelColors.low;
      case (value >= 40 && value < 60):
        return chartLevelColors.moderate;
      case (value >= 60 && value < 80):
        return chartLevelColors.high;
      case (value >= 80):
        return chartLevelColors.veryHigh;
      default:
        return chartLevelColors.na;
    }
  }

  render() {
    const {
      value,
      diameter,
      strokeWidth,
      strokeColor,
      iconName,
      iconSet,
      className,
      displayValue,
      maxValue,
    } = this.props;

    const radius = diameter / 2;
    const circumference = 2 * Math.PI * radius;

    let strokeLength;

    if (maxValue) {
      strokeLength = (circumference / 100) * (value / maxValue * 100);
    } else {
      strokeLength = (circumference / 100) * value;
    }
    const strokeDasharray = (strokeLength + ' ' + circumference);

    const trackStyles = { strokeWidth };
    const indicatorStyles = {
      strokeWidth,
      strokeDasharray,
      stroke: strokeColor || this.strokeColorForValue(value),
    };
    const rotate = `rotate(90 ${radius} ${radius})`;

    return (
      <svg width={diameter} height={diameter} data-testid="DonutChart" className={classnames(styles.donutchart, className)}>
        <circle
          r={radius}
          cx={radius}
          cy={radius}
          transform={rotate}
          style={trackStyles}
          className={styles.track}
        />
        <circle
          r={radius}
          cx={radius}
          cy={radius}
          transform={rotate}
          style={indicatorStyles}
          className={styles.indicator}
        />
        {
          displayValue
            ? (
              <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                alignmentBaseline="middle"
                textAnchor="middle"
                className={styles.innerValue}
                data-testid="DonutChartValue"
              >
                {displayValue}
              </text>
            )
            : <Icon width={Math.floor(radius)} x={Math.floor(radius) / 2} name={iconName} set={iconSet} theme="dark" />
        }
      </svg>
    );
  }
}

DonutChart.propTypes = {
  /**
   * Specify the value. Will be used as a percentage if no maxValue is present
   */
  value: PropTypes.number,
  /**
   * Specify the diameter of the circle
   */
  diameter: PropTypes.number,
  /**
   * Specify the stroke width of the circle
   */
  strokeWidth: PropTypes.number,
  /**
   * Specify the stroke color of the circle
   */
  strokeColor: PropTypes.string,
  /**
   * Specify the name of the icon to display in the center of the circle
   */
  iconName: PropTypes.string,
  /**
   * Specify the set that the icon belongs to
   */
  iconSet: PropTypes.string,
  /**
   * Pass through CSS class
   */
  className: PropTypes.string,
  /**
   * Display the provided value instead of an icon. This does not have to be the same as 'value'
   */
  displayValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Specify a max value for the range. If no maxValue is provided, it's assumed the maxValue is 100%
   */
  maxValue: PropTypes.number,
};

DonutChart.defaultProps = {
  strokeWidth: 10,
  diameter: 60,
  iconSet: 'lifestyle',
  value: 0,
};

export default withStyles(styles)(DonutChart);
