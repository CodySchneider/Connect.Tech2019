import React from 'react';
import { storiesOf } from '@storybook/react';
import { Swatch, Palette } from './Components.stories';
import colors from '!!sass-vars-to-js-loader!./_ColorPalette.vars.scss';
import styles from './ColorPalette.stories.scss';
import readme from './README.md';

storiesOf('Atoms|ColorPalette', module)
  .add('Default', () => Object.entries(colors).map(([colorKey, colorVar], index) => (
    colorVar.rgba
      ? (
        <div key={`${colorKey}-${index}`} className={styles.swatchList}>
          <Swatch
            rgbaObject={colorVar}
            swatchKey={colorKey}
          />
        </div>
      )
      : (
        <Palette
          key={`${colorKey}-${index}`}
          palette={colorVar}
          paletteKey={colorKey}
        />
      )
  )), {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });
