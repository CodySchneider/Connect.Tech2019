import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import styles from './ColorPalette.stories.scss';

// eslint-disable-next-line arrow-body-style
const _padHexString = hex => {
  return hex < 10 ? `0${hex}` : hex;
};

export const rgbToHex = (r, g, b) =>
  `#${_padHexString(r.toString(16))}${_padHexString(g.toString(16))}${_padHexString(
    b.toString(16)
  )}`;

export const Palette = ({ palette, paletteKey }) => (
  <div className={styles.palette}>
    <div className={styles.paletteTitle}>{paletteKey}</div>
    <div className={styles.swatchList}>
      {map(palette, (swatch, swatchKey) => (
        <Swatch key={swatchKey} rgbaObject={swatch} swatchKey={swatchKey} />
      ))}
    </div>
  </div>
);

Palette.propTypes = {
  palette: PropTypes.object,
  paletteKey: PropTypes.string,
};

export const Swatch = ({ rgbaObject, swatchKey }) => {
  const swatchColor =
    rgbaObject.a < 1 ? rgbaObject.rgba : rgbToHex(rgbaObject.r, rgbaObject.g, rgbaObject.b);

  return (
    <div className={styles.swatch}>
      <div className={styles.swatchColor} style={{ backgroundColor: swatchColor }} />
      <div className={styles.swatchDescription}>
        <div className={styles.swatchName}>{swatchKey}</div>
        <div className={styles.swatchHexCode}>{swatchColor}</div>
      </div>
    </div>
  );
};

Swatch.propTypes = {
  rgbaObject: PropTypes.object,
  swatchKey: PropTypes.string,
};
