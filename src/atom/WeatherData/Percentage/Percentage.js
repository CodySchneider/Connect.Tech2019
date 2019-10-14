import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const Percentage = memo(({ value, className }) => (
  <span data-testid="PercentageValue" className={className}>
    {Number.isFinite(value) && value >= 0 ? `${value}%` : '--' }
  </span>
));

Percentage.propTypes = {
  /**
   * CSS Class
   */
  className: PropTypes.string,
  /**
   * Positive value to display as a percentage
   */
  value: PropTypes.number.isRequired,
};
