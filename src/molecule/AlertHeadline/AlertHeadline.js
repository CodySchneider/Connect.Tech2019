import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import classnames from 'classnames';
import Button from 'atom/Button/Button';
import Icon from 'atom/Icon/Icon';
import styles from './AlertHeadline.scss';

export class AlertHeadline extends PureComponent {
  get alertColor() {
    const { alertSeverityCode } = this.props;

    if (alertSeverityCode === 1) return 'red';
    if (alertSeverityCode === 2) return 'orange';

    return 'yellow';
  }

  renderMultiAlertBubble() {
    const {
      alertCount,
    } = this.props;

    return (
      <div className={`${styles.alertCountWrapper} ${styles[this.alertColor]}`}>
        <span className={styles.alertCount}>
          {alertCount}
        </span>
        <Icon set="ui" name="caret-right" theme="light" className={styles.arrowIcon} />
      </div>
    );
  }

  renderAlertContent() {
    const {
      alertUrl,
      alertCount,
      alertHeadline,
      showIcon,
    } = this.props;

    return (
      <>
        {
          showIcon ? (
            <Icon
              set="heads-up"
              name="breaking-news-severe"
              theme="light"
              className={`${styles.alertIcon} ${styles[this.alertColor]}`}
            />
          ) : null
        }
        <h2 className={styles.alertText}>{alertHeadline}</h2>
        {
          alertUrl && (alertCount > 1)
            ? this.renderMultiAlertBubble()
            : <Icon set="ui" name="caret-right" theme="light" className={styles.arrowIcon} />
        }
      </>
    );
  }

  render() {
    const {
      alertUrl,
      className,
      theme,
    } = this.props;

    const baseClasses = classnames(
      styles.AlertHeadline,
      className,
      {
        [styles[theme]]: theme,
      }
    );

    return (
      <>
        {
          alertUrl
            ? (
              <Button
                href={alertUrl}
                className={baseClasses}
              >
                {this.renderAlertContent()}
              </Button>
            )
            : (
              <div className={baseClasses}>
                {this.renderAlertContent()}
              </div>
            )
        }
      </>
    );
  }
}

AlertHeadline.propTypes = {
  /**
   * Alert severity code (1-4)
   */
  alertSeverityCode: PropTypes.oneOf([1, 2, 3, 4]).isRequired,
  /**
   * Number of alerts for location
   */
  alertCount: PropTypes.number,
  /**
   * Alert description
   */
  alertHeadline: PropTypes.string.isRequired,
  /**
   * Alert url
   */
  alertUrl: PropTypes.string,
  /**
   * Determine whether or not to show the icon next to the text
  */
  showIcon: PropTypes.bool,
  /**
   * Theme name
   */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Optional class that wraps the component
   */
  className: PropTypes.string,
};

AlertHeadline.defaultProps = {
  theme: 'dark',
};

export default withStyles(styles)(AlertHeadline);
