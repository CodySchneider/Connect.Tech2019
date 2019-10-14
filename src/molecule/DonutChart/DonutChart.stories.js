import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  number, select, color,
} from '@storybook/addon-knobs';
import { DonutChart } from './DonutChart';
import readme from './README.md';

const reqSvgs = require.context('../../atom/Icon/svg/lifestyle', false, /\.svg$/);
const iconMap = reqSvgs
  .keys()
  .reduce((set, path) => {
    const iconName = path.replace(/.\/(.*).svg/, '$1');

    set[iconName] = 'lifestyle';
    return set;
  }, {});

storiesOf('Molecules|DonutChart', module)
  .add('With Icon', () => {
    const iconName = select('Icon', Object.keys(iconMap), 'grass');

    return (
      <DonutChart
        value={number('Fill percent', 30)}
        diameter={number('Diameter', 75)}
        strokeWidth={10}
        iconName={iconName}
        iconSet={iconMap[iconName]}
      />
    );
  }, {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['DonutChart.test.js'],
  });

storiesOf('Molecules|DonutChart', module)
  .add('With Stroke Color', () => {
    const iconName = select('Icon', Object.keys(iconMap), 'grass');

    return (
      <DonutChart
        value={number('Fill percent', 30)}
        diameter={number('Diameter', 75)}
        strokeWidth={10}
        strokeColor={color('Stroke Color', '#1da7fd')}
        iconName={iconName}
        iconSet={iconMap[iconName]}
      />
    );
  }, {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['DonutChart.test.js'],
  });

storiesOf('Molecules|DonutChart', module)
  .add('Value Matches Fill', () => (
    <DonutChart
      value={number('Fill percent', 30)}
      diameter={number('Diameter', 75)}
      strokeWidth={10}
      displayValue={number('Displayed Value', 30)}
    />
  ), {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['DonutChart.test.js'],
  });

storiesOf('Molecules|DonutChart', module)
  .add('Value Does Not Match Fill', () => (
    <DonutChart
      value={number('Fill value', 125)}
      maxValue={number('Max value', 500)}
      diameter={number('Diameter', 95)}
      strokeWidth={10}
      displayValue={number('Displayed Value', 200)}
    />
  ), {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['DonutChart.test.js'],
  });
