import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const Temperature = memo(({
  units, value, className,
}) => {
  let unit = '';

  let temp = '';

  if (units) {
    unit = units === 'e' ? 'F' : 'C';
  }

  // Round to nearest integer.
  if (Number.isFinite(value)) {
    temp = Math.round(value);
  }

  return (
    <span data-testid="TemperatureValue" className={className}>
      {((temp || temp === 0) || unit) ? `${temp}°${unit}` : '--'}
    </span>
  );
});

Temperature.propTypes = {
  /**
   * CSS Class
   */
  className: PropTypes.string,
  /**
   * Temperature value from SUN APIs
   */
  value: PropTypes.number,
  /**
   * Unit system to use to display
   */
  units: PropTypes.oneOf(['e', 'm', 'h']),
};
