import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'isomorphic-style-loader/withStyles';
import isUndefined from 'lodash/isUndefined';
import { TranslationsContext } from 'translations/TranslationsContext';
import Icon from 'atom/Icon/Icon';
import {
  Temperature,
  Wind,
  Percentage,
  Pressure,
  Visibility,
  UVIndex,
} from 'atom/WeatherData';

import styles from './DetailsTable.scss';

class DetailsTable extends PureComponent {
  render() {
    const {
      units,
      temperatureFeelsLike,
      windDirectionCardinal,
      windSpeed,
      precipChance,
      precipType,
      relativeHumidity,
      pressureMeanSeaLevel,
      pressureTendencyCode,
      uvIndex,
      visibility,
      sunriseTimeLocal,
      sunsetTimeLocal,
      moonriseTimeLocal,
      moonsetTimeLocal,
    } = this.props;
    const t = this.context;

    return (
      <ul
        className={classnames(styles.DetailsTable, styles.border)}
      >
        { !isUndefined(temperatureFeelsLike) ? (
          <li className={styles.listItem}>
            <Icon className={styles.icon} set="current-conditions" name="feels-like" />
            <div className={styles.field}>
              <span className={styles.label}>{t('wxu-weather-data', 'feelsLike')}</span>
              <Temperature
                className={styles.value}
                value={temperatureFeelsLike}
              />
            </div>
          </li>
        ) : null }
        { !isUndefined(windSpeed) ? (
          <li className={styles.listItem}>
            <Icon className={styles.icon} set="current-conditions" name="wind" />
            <div className={styles.field}>
              <span className={styles.label}>{t('wxu-weather-data', 'wind')}</span>
              <Wind
                className={styles.value}
                windSpeed={windSpeed}
                windDirectionCardinal={windDirectionCardinal}
                units={units}
              />
            </div>
          </li>
        ) : null }
        { !isUndefined(precipChance) ? (
          <li className={styles.listItem}>
            <Icon className={styles.icon} set="heads-up" name={`precip-${precipType === 'precip' ? 'wintry-mix' : precipType}`} />
            <div className={styles.field}>
              <span className={styles.label}>{t('wxu-weather-data', `chanceOf${precipType && precipType.replace(/^./, precipType[0].toUpperCase())}`)}</span>
              <Percentage
                className={styles.value}
                value={precipChance}
              />
            </div>
          </li>
        ) : null }
        { !isUndefined(relativeHumidity) ? (
          <li className={styles.listItem}>
            <Icon className={styles.icon} set="current-conditions" name="humidity" />
            <div className={styles.field}>
              <span className={styles.label}>{t('wxu-weather-data', 'humidity')}</span>
              <Percentage
                className={styles.value}
                value={relativeHumidity}
              />
            </div>
          </li>
        ) : null }
        { !isUndefined(pressureMeanSeaLevel) ? (
          <li className={styles.listItem}>
            <Icon className={styles.icon} set="current-conditions" name="pressure" />
            <div className={styles.field}>
              <span className={styles.label}>{t('wxu-weather-data', 'pressure')}</span>
              <Pressure
                className={styles.value}
                pressureMeanSeaLevel={pressureMeanSeaLevel}
                pressureTendencyCode={pressureTendencyCode}
                units="m"
              />
            </div>
          </li>
        ) : null }
        { !isUndefined(visibility) ? (
          <li className={styles.listItem}>
            <Icon className={styles.icon} set="current-conditions" name="visibility" />
            <div className={styles.field}>
              <span className={styles.label}>{t('wxu-weather-data', 'visibility')}</span>
              <Visibility
                className={styles.value}
                visibility={visibility}
                units={units}
              />
            </div>
          </li>
        ) : null }
        { !isUndefined(uvIndex) ? (
          <li className={styles.listItem}>
            <Icon className={styles.icon} set="current-conditions" name="uv" />
            <div className={styles.field}>
              <span className={styles.label}>{t('wxu-weather-data', 'uvIndex')}</span>
              <UVIndex
                className={styles.value}
                uvIndex={uvIndex}
              />
            </div>
          </li>
        ) : null }
        { !isUndefined(sunriseTimeLocal) ? (
          <li className={styles.listItem}>
            <Icon className={styles.icon} set="current-conditions" name="sunrise-sun" />
            <div className={styles.field}>
              <span className={styles.label}>{t('wxu-weather-data', 'sunrise')}</span>
              <span className={styles.value}>
                {
                  sunriseTimeLocal && sunriseTimeLocal.length > 0
                    ? sunriseTimeLocal
                    : '--'
                }
              </span>
            </div>
          </li>
        ) : null }
        { !isUndefined(sunsetTimeLocal) ? (
          <li className={styles.listItem}>
            <Icon className={styles.icon} set="current-conditions" name="sunset-sun" />
            <div className={styles.field}>
              <span className={styles.label}>{t('wxu-weather-data', 'sunset')}</span>
              <span className={styles.value}>
                {
                  sunsetTimeLocal && sunsetTimeLocal.length > 0
                    ? sunsetTimeLocal
                    : '--'
                }
              </span>
            </div>
          </li>
        ) : null }
        { !isUndefined(moonriseTimeLocal) ? (
          <li className={styles.listItem}>
            <Icon className={styles.icon} set="current-conditions" name="moonrise" />
            <div className={styles.field}>
              <span className={styles.label}>{t('wxu-weather-data', 'moonrise')}</span>
              <span className={styles.value}>
                {
                  moonriseTimeLocal && moonriseTimeLocal.length > 0
                    ? moonriseTimeLocal
                    : '--'
                }
              </span>
            </div>
          </li>
        ) : null }
        { !isUndefined(moonsetTimeLocal) ? (
          <li className={styles.listItem}>
            <Icon className={styles.icon} set="current-conditions" name="moonset" />
            <div className={styles.field}>
              <span className={styles.label}>{t('wxu-weather-data', 'moonset')}</span>
              <span className={styles.value}>
                {
                  moonsetTimeLocal && moonsetTimeLocal.length > 0
                    ? moonsetTimeLocal
                    : '--'
                }
              </span>
            </div>
          </li>
        ) : null }
      </ul>
    );
  }
}

DetailsTable.contextType = TranslationsContext;
DetailsTable.propTypes = {
  /**
   * Unit system to use to display data
   */
  units: PropTypes.oneOf(['e', 'm', 'h']).isRequired,
  /**
   * Value from SUN temperatureFeelsLike field
   */
  temperatureFeelsLike: PropTypes.number,
  /**
   * Value from SUN windDirectionCardinal field
   */
  windDirectionCardinal: PropTypes.string,
  /**
   * Value from SUN windSpeed field
   */
  windSpeed: PropTypes.number,
  /**
   * Value from SUN precipChance field
   */
  precipChance: PropTypes.number,
  /**
   * Value from SUN precipType field
   */
  precipType: PropTypes.oneOf(['rain', 'snow', 'precip']),
  /**
   * Value from SUN relativeHumidity field
   */
  relativeHumidity: PropTypes.number,
  /**
   * Value from SUN pressureMeanSeaLevel field
   */
  pressureMeanSeaLevel: PropTypes.number,
  /**
   * Value from SUN pressureTendencyCode field
   */
  pressureTendencyCode: PropTypes.number,
  /**
   * Value from SUN uvIndex field
   */
  uvIndex: PropTypes.number,
  /**
   * Value from SUN visibility field
   */
  visibility: PropTypes.number,
  /**
   * Value from SUN sunriseTimeLocal field
   */
  sunriseTimeLocal: PropTypes.string,
  /**
   * Value from SUN sunsetTimeLocal field
   */
  sunsetTimeLocal: PropTypes.string,
  /**
   * Value from SUN moonriseTimeLocal field
   */
  moonriseTimeLocal: PropTypes.string,
  /**
   * Value from SUN moonsetTimeLocal field
   */
  moonsetTimeLocal: PropTypes.string,
};

export default withStyles(styles)(DetailsTable);
