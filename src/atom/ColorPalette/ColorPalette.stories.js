import React from 'react';
import { Swatch, Palette } from './Components.stories';
import colors from '!!sass-vars-to-js-loader!./_ColorPalette.vars.scss';
import styles from './ColorPalette.stories.scss';
import readme from './README.md';

export default {
  title: 'Atoms|ColorPalette',
};

export const defaultStory = () =>
  Object.entries(colors).map(([colorKey, colorVar], index) =>
    colorVar.rgba ? (
      <div key={`${colorKey}-${index}`} className={styles.swatchList}>
        <Swatch rgbaObject={colorVar} swatchKey={colorKey} />
      </div>
    ) : (
      <Palette key={`${colorKey}-${index}`} palette={colorVar} paletteKey={colorKey} />
    )
  );

defaultStory.story = {
  name: 'Default',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};
