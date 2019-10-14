import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { TranslationsContext } from 'translations/TranslationsContext';

export class Visibility extends PureComponent {
  render() {
    const {
      visibility,
      units,
      className,
    } = this.props;
    const t = this.context;

    let unit = '';

    let formatted = '';

    switch (units) {
      case 'e':
        unit = 'mi';
        break;
      case 'h':
      case 'm':
      default:
        unit = 'km';
    }

    if (visibility === 0) {
      formatted = `0 ${unit}`;
    } else if (!visibility || visibility < 0) {
      formatted = '--';
    } else if (
      (units === 'e' && visibility > 10)
      || (((units === 'm' || units === 'h') && visibility > 16))
    ) {
      formatted = t('wxu-today-details', 'unlimited');
    } else {
      formatted = `${visibility} ${unit}`;
    }

    return <span data-testid="VisibilityValue" className={className}>{formatted}</span>;
  }
}

export default withStyles()(Visibility);

Visibility.contextType = TranslationsContext;
Visibility.propTypes = {
  /**
   * CSS Class
   */
  className: PropTypes.string,
  /**
   * visibility from SUN APIs
   */
  visibility: PropTypes.number.isRequired,
  /**
   * Unit system to use to display Data
   */
  units: PropTypes.oneOf(['e', 'm', 'h']).isRequired,
};
