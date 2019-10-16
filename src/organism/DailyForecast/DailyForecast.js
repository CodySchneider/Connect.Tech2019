import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { TranslationsContext } from 'translations/TranslationsContext';
import DaypartDetails from 'molecule/DaypartDetails/DaypartDetails';
import Card from 'molecule/Card/Card';
import AlertHeadline from 'molecule/AlertHeadline/AlertHeadline';
import styles from './DailyForecast.scss';

export class DailyForecast extends PureComponent {
  render() {
    const {
      dailyData,
      alertUrl,
      alertSeverityCode,
      alertHeadline,
      alertCount,
      presentationName,
      adIndex1,
      adIndex1Position,
    } = this.props;
    const t = this.context;
    const location10DayArgs = {
      templateArgs: { presentationName },
    };

    return (
      <Card
        data-testid="DailyForecast"
        title={t('wxu-ten-day', 'tendayTitle')}
        className={styles.Card}
        cardHeaderClass={styles.CardHeader}
      >
        {
          alertCount
            ? (
              <AlertHeadline
                alertUrl={alertUrl}
                alertSeverityCode={alertSeverityCode}
                alertHeadline={alertHeadline}
                alertCount={alertCount}
                className={styles.AlertHeadline}
                showIcon
              />
            )
            : ''
        }
        <div className={styles.DisclosureList}>
          {dailyData && dailyData.map((day, index) => (
            <Fragment key={`daypart_${index}`}>
              <DaypartDetails
                open={index === 0}
                {...day}
              />
              {adIndex1 === index ? (
                <div className={styles.adWrapper}>
                  <div className={styles.adLabel}>Advertisement</div>
                  <div id={adIndex1Position} className={styles.ad} />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </Card>
    );
  }
}

DailyForecast.contextType = TranslationsContext;
DailyForecast.propTypes = {
  /**
   * Daily Data Object. See Molecule/DaypartDetails component for full structure of day, night, summary
   */
  dailyData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.object.isRequired,
      night: PropTypes.object.isRequired,
      summary: PropTypes.object.isRequired,
    })
  ).isRequired,
  /**
   * Value of alertSeverityCode field from SunWeatherAlertHeadlines
   */
  alertSeverityCode: PropTypes.number,
  /**
   * Value of alertHeadline field from SunWeatherAlertHeadlines
   */
  alertHeadline: PropTypes.string,
  /**
   * Length of alertHeadlineSelector
   */
  alertCount: PropTypes.number,
  /**
   * Value of pageLocationPresentationNameSelector
   */
  presentationName: PropTypes.string,
  /**
   * Value of adIndex1 from MoonRacer props
   */
  adIndex1: PropTypes.number,
  /**
   * Value of adIndex1Position from MoonRacer props
   */
  adIndex1Position: PropTypes.string,
};

export default withStyles(styles)(DailyForecast);
