import React, { memo } from 'react';
import PropTypes from 'prop-types';
import isUndefined from 'lodash/isUndefined';

export const Accumulation = memo(({
  rain,
  snow,
  units,
  className,
}) => {
  const hasRainValue = !isUndefined(rain) && (rain >= 0);
  const hasSnowValue = !isUndefined(snow) && (snow >= 0);

  // Liquid precip is provided in mm; snow in cm
  const unitMetric = hasRainValue ? 'mm' : 'cm';
  const unit = units === 'e' ? 'in' : unitMetric;

  return (
    <span data-testid="AccumulationValue" className={className}>
      {hasRainValue || hasSnowValue
        ? `${hasRainValue ? rain : snow} ${unit}`
        : '--'
      }
    </span>
  );
});

Accumulation.propTypes = {
  /**
   * CSS Class
   */
  className: PropTypes.string,
  /**
   * Liquid accumulation value from SUN APIs
   */
  rain: PropTypes.number,
  /**
   * Snow accumulation value from SUN APIs
   */
  snow: PropTypes.number,
  /**
   * Unit system to use to display Data
   */
  units: PropTypes.oneOf(['e', 'm', 'h']).isRequired,
};
