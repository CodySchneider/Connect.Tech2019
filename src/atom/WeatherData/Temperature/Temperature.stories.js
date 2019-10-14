import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  number,
  select,
  text,
} from '@storybook/addon-knobs';
import { Temperature } from './Temperature';
import readme from './Temperature.md';
import styles from '../WeatherData.stories.scss';

const stories = storiesOf('Atoms|WeatherData/Temperature', module);

stories
  .add('English', () => {
    const tempRange = {
      range: true,
      min: -100,
      max: 150,
      step: 1,
    };
    const value = number('Temperature', 73, tempRange);
    const units = select('System of measurement', ['e', 'm', 'h'], 'e');

    return (
      <div className={styles.storyWrapper}>
        <Temperature units={units} value={value} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Metric', () => {
    const tempRange = {
      range: true,
      min: -100,
      max: 150,
      step: 1,
    };
    const value = number('Temperature', 73, tempRange);
    const units = select('System of measurement', ['e', 'm', 'h'], 'm');

    return (
      <div className={styles.storyWrapper}>
        <Temperature units={units} value={value} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Hybrid', () => {
    const tempRange = {
      range: true,
      min: -100,
      max: 150,
      step: 1,
    };
    const value = number('Temperature', 73, tempRange);
    const units = select('System of measurement', ['e', 'm', 'h'], 'h');

    return (
      <div className={styles.storyWrapper}>
        <Temperature units={units} value={value} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('No units', () => {
    const tempRange = {
      range: true,
      min: -100,
      max: 150,
      step: 1,
    };
    const value = number('Temperature', 73, tempRange);

    return (
      <div className={styles.storyWrapper}>
        <Temperature value={value} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Unit only', () => {
    const units = select('System of measurement', ['e', 'm', 'h'], 'e');

    return (
      <div className={styles.storyWrapper}>
        <Temperature units={units} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Zero', () => {
    const units = text('System of measurement');
    // const value = number('Temperature', 0);

    return (
      <div className={styles.storyWrapper}>
        <Temperature units={units} value={0} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Negative', () => {
    const units = text('System of measurement');
    const value = number('Temperature', -60);

    return (
      <div className={styles.storyWrapper}>
        <Temperature units={units} value={value} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Undefined', () => {
    const units = text('System of measurement');
    const value = number('Temperature');

    return (
      <div className={styles.storyWrapper}>
        <Temperature units={units} value={value} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });
