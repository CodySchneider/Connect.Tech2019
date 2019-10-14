import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import Disclosure from 'atom/Disclosure/Disclosure';
import DetailsSummary from './DetailsSummary/DetailsSummary';
import DailyContent from './DailyContent/DailyContent';
import HourlyContent from './HourlyContent/HourlyContent';
import DetailsTable from './DetailsTable/DetailsTable';
import styles from './DaypartDetails.scss';

export class DaypartDetails extends PureComponent {
  renderDetailsContent() {
    const {
      day,
      night,
      hourly,
    } = this.props;

    if (hourly) {
      return (
        <>
          <HourlyContent {...hourly} />
          <DetailsTable {...hourly} />
        </>
      );
    }
    return (
      <>
        {day ? (
          <>
            <DailyContent {...day} />
            <DetailsTable {...day} />
          </>
        ) : null}
        {night ? (
          <>
            {day ? <h3 className={styles.daypartName}>{night.daypartName}</h3> : null}
            <DailyContent {...night} />
            <DetailsTable {...night} />
          </>
        ) : null}
      </>
    );
  }

  render() {
    const {
      summary,
      open,
      hourly,
    } = this.props;

    return (
      <Disclosure
        open={open}
        title={(<DetailsSummary {...summary} fadeOnOpen={!hourly} />)}
        ariaLabel={summary.daypartName}
        summaryClassName={styles.Summary}
        contentClassName={styles.Content}
        theme="list"
        hideBorderOnSummaryOpen
      >
        {this.renderDetailsContent()}
      </Disclosure>
    );
  }
}

DaypartDetails.propTypes = {
  /**
   * Summary Data. See DetailsSummary component for expected data structure
   */
  summary: PropTypes.object,
  /**
   * Hourly Data from SunV3HourlyForecast. See DetailsTable component for supported fields.
   */
  hourly: PropTypes.object,
  /**
   * Day Data from SunV3DaillyForecast daypart. See DetailsTable component for supported fields
   */
  day: PropTypes.object,
  /**
   * Night Data from SunV3DaillyForecast daypart. See DetailsTable component for supported fields
   */
  night: PropTypes.object,
  /**
   * open state of the Disclosure component
   */
  open: PropTypes.bool,
};

export default withStyles(styles)(DaypartDetails);
