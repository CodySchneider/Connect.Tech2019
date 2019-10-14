import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import styles from './HourlyContent.scss';

export class HourlyContent extends PureComponent {
  render() {
    const { wxPhraseLong } = this.props;

    return (
      <div className={styles.HourlyContent}>
        <p className={styles.wxPhraseLong}>{wxPhraseLong}</p>
      </div>
    );
  }
}

HourlyContent.propTypes = {
  /**
   * Include wxPhrase
   */
  wxPhraseLong: PropTypes.string.isRequired,
};

export default withStyles(styles)(HourlyContent);
