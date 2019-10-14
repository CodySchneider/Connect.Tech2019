import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  number,
  select,
} from '@storybook/addon-knobs';
import { Visibility } from './Visibility';
import readme from './Visibility.md';
import styles from '../WeatherData.stories.scss';

const stories = storiesOf('Atoms|WeatherData/Visibility', module);

stories
  .add('English', () => {
    const units = select('System of measurement', ['e', 'm', 'h'], 'e');
    const value = number('Visibility distance', 5);
    const value2 = number('Visibility distance 2', 5.55);

    return (
      <div className={styles.storyWrapper}>
        <Visibility visibility={value} units={units} className={styles.font} />
        <br />
        <Visibility visibility={value2} units={units} className={styles.font} />
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
    const units = select('System of measurement', ['e', 'm', 'h'], 'm');
    const value = number('Visibility distance', 5);
    const value2 = number('Visibility distance 2', 5.55);

    return (
      <div className={styles.storyWrapper}>
        <Visibility visibility={value} units={units} className={styles.font} />
        <br />
        <Visibility visibility={value2} units={units} className={styles.font} />
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
    const units = select('System of measurement', ['e', 'm', 'h'], 'h');
    const value = number('Visibility distance', 5);
    const value2 = number('Visibility distance 2', 5.55);

    return (
      <div className={styles.storyWrapper}>
        <Visibility visibility={value} units={units} className={styles.font} />
        <br />
        <Visibility visibility={value2} units={units} className={styles.font} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Unlimited', () => (
    <div className={styles.storyWrapper}>
      English (>10):&nbsp;
      <Visibility visibility={11} units="e" className={styles.font} />
      <br />
      Metric (>16):&nbsp;
      <Visibility visibility={17} units="m" className={styles.font} />
    </div>
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Zero', () => {
    const value = number('Visibility distance', 0);
    const units = select('System of measurement', ['e', 'm', 'h'], 'e');

    return (
      <div className={styles.storyWrapper}>
        <Visibility visibility={value} units={units} className={styles.font} />
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
    const value = number('Visibility distance', -10);
    const units = select('System of measurement', ['e', 'm', 'h'], 'e');

    return (
      <div className={styles.storyWrapper}>
        <Visibility visibility={value} units={units} className={styles.font} />
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
    const value = number('Visibility distance');
    const units = select('System of measurement', ['e', 'm', 'h'], 'e');

    return (
      <div className={styles.storyWrapper}>
        <Visibility visibility={value} units={units} className={styles.font} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });
