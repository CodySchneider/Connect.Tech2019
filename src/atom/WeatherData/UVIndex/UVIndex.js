import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const UVIndex = memo(({ uvIndex, className }) => {
  let value;

  if (!Number.isFinite(uvIndex) || (uvIndex < 0)) {
    value = '--';
  } else if (uvIndex > 10) {
    value = 'Extreme';
  } else {
    value = `${uvIndex} of 10`;
  }

  return <span data-testid="UVIndexValue" className={className}>{value}</span>;
});

UVIndex.propTypes = {
  /**
   * CSS Class
   */
  className: PropTypes.string,
  /**
   * uvIndex from SUN APIs
   */
  uvIndex: PropTypes.number.isRequired,
};
