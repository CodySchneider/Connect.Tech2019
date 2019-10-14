import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  number,
} from '@storybook/addon-knobs';
import { UVIndex } from './UVIndex';
import readme from './UVIndex.md';
import styles from '../WeatherData.stories.scss';

storiesOf('Atoms|WeatherData/UVIndex', module)
  .add('Default', () => {
    const tempRange = {
      range: true,
      min: 0,
      max: 13,
      step: 1,
    };
    const uvIndex = number('UV Index', 5, tempRange);

    return (
      <div className={styles.storyWrapper}>
        <UVIndex uvIndex={uvIndex} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

storiesOf('Atoms|WeatherData/UVIndex', module)
  .add('Extreme', () => {
    const tempRange = {
      range: true,
      min: 0,
      max: 13,
      step: 1,
    };
    const uvIndex = number('UV Index', 11, tempRange);

    return (
      <div className={styles.storyWrapper}>
        <UVIndex uvIndex={uvIndex} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

storiesOf('Atoms|WeatherData/UVIndex', module)
  .add('Zero', () => {
    const uvIndex = number('UV Index', 0);

    return (
      <div className={styles.storyWrapper}>
        <UVIndex uvIndex={uvIndex} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });


storiesOf('Atoms|WeatherData/UVIndex', module)
  .add('Negative', () => {
    const uvIndex = number('UV Index', -10);

    return (
      <div className={styles.storyWrapper}>
        <UVIndex uvIndex={uvIndex} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

storiesOf('Atoms|WeatherData/UVIndex', module)
  .add('Undefined', () => {
    const uvIndex = number('UV Index');

    return (
      <div className={styles.storyWrapper}>
        <UVIndex uvIndex={uvIndex} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });
