import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import Icon from 'atom/Icon/Icon';
import { Temperature } from 'atom/WeatherData';
import styles from './DailyContent.scss';

export class DailyContent extends PureComponent {
  render() {
    const {
      temperature,
      iconCode,
      narrative,
      wxPhraseLong,
    } = this.props;

    return (
      <div className={styles.DailyContent}>
        <div className={styles.ConditionSummary}>
          <div className={styles.temperature}>
            <Temperature
              className={styles.temp}
              value={temperature}
            />
          </div>
          <div className={styles.Condition}>
            <Icon ariaLabel={wxPhraseLong} className={styles.weatherIcon} set="weather" skycode={iconCode} theme="full" />
          </div>
        </div>
        <p className={styles.narrative}>{narrative}</p>
      </div>
    );
  }
}

DailyContent.propTypes = {
  /**
   * Temperature field from SunV3DailyForecast daypart
   */
  temperature: PropTypes.number.isRequired,
  /**
   * iconCode field from SunV3DailyForecast daypart
   */
  iconCode: PropTypes.number.isRequired,
  /**
   * wxPhrase field from SunV3DailyForecast daypart; Used in accessible label
   */
  wxPhraseLong: PropTypes.string.isRequired,
  /**
   * narrative field from SunV3DailyForecast daypart
   */
  narrative: PropTypes.string.isRequired,
};

export default withStyles(styles)(DailyContent);
