import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isUndefined from 'lodash/isUndefined';
import withStyles from 'isomorphic-style-loader/withStyles';
import classnames from 'classnames';
import Icon from 'atom/Icon/Icon';
import {
  Temperature,
  Percentage,
} from 'atom/WeatherData';
import { TranslationsContext } from 'translations/TranslationsContext';
import styles from './DetailsSummary.scss';

export class DetailsSummary extends PureComponent {
  getDaypartName() {
    const { daypartName } = this.props;
    const t = this.context;

    if (daypartName === 'today' || daypartName === 'tonight') {
      return t('wxu-general', daypartName);
    }

    return daypartName;
  }

  render() {
    const {
      daypartName,
      temperature,
      temperatureMax,
      temperatureMin,
      iconCode,
      wxPhraseLong,
      precipChance,
      fadeOnOpen,
    } = this.props;

    return (
      <div className={classnames(styles.DetailsSummary, { [styles.fadeOnOpen]: fadeOnOpen })}>
        <h3 className={styles.daypartName}>{daypartName}</h3>
        <div className={styles.temperature}>
          {!isUndefined(temperatureMax)
            ? <Temperature className={styles.highTempValue} value={temperatureMax} />
            : null
          }
          {!isUndefined(temperature)
            ? <Temperature className={styles.tempValue} value={temperature} />
            : null
          }
          {!isUndefined(temperatureMin) ? (
            <span className={styles.lowTempValue}>
              /
              <Temperature value={temperatureMin} />
            </span>
          ) : null}
        </div>
        <div className={styles.condition}>
          <Icon ariaLabel={wxPhraseLong} className={styles.wxIcon} set="weather" skycode={iconCode} theme="full" />
        </div>
        <div className={styles.precip}>
          <Icon className={styles.precipIcon} set="heads-up" name="precip-rain-single" />
          <Percentage className={styles.precipChance} value={precipChance} />
        </div>
      </div>
    );
  }
}

DetailsSummary.contextType = TranslationsContext;
DetailsSummary.propTypes = {
  /**
   * Value of daypartName field from SunV3DailyForecast or formatted timestamp from SunV3HourlyForecast
   */
  daypartName: PropTypes.string.isRequired,
  /**
   * Value of temperature field from SunV3HourlyForecast
   */
  temperature: PropTypes.number,
  /**
   * Value of temperatureMax field from SunV3DailyForecast
   */
  temperatureMax: PropTypes.number,
  /**
   * Value of temperatureMin field from SunV3DailyForecast
   */
  temperatureMin: PropTypes.number,
  /**
   * Value of iconCode field from SunV3DailyForecast or SunV3HourlyForecast
   */
  iconCode: PropTypes.number,
  /**
   * Value of wxPhraseLong field from SunV3DailyForecast or SunV3HourlyForecast
   */
  wxPhraseLong: PropTypes.string.isRequired,
  /**
   * Value of precipChance field from SunV3DailyForecast or SunV3HourlyForecast
   */
  precipChance: PropTypes.number.isRequired,
  /**
   * Data should appear faded when the containing Disclosure component is open
   */
  fadeOnOpen: PropTypes.bool,
};

export default withStyles(styles)(DetailsSummary);
