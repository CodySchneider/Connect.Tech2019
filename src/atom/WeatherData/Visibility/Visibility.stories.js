import React from 'react';
import { number, select } from '@storybook/addon-knobs';
import { Visibility } from './Visibility';
import readme from './Visibility.md';
import styles from '../WeatherData.stories.scss';

export default { title: 'Atoms|WeatherData/Visibility'};

export const english = () => {
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
};

english.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const metric = () => {
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
};

metric.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const hybrid = () => {
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
};

hybrid.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const unlimited = () => (
  <div className={styles.storyWrapper}>
    English (>10):&nbsp;
    <Visibility visibility={11} units="e" className={styles.font} />
    <br />
    Metric (>16):&nbsp;
    <Visibility visibility={17} units="m" className={styles.font} />
  </div>
);

unlimited.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const zero = () => {
  const value = number('Visibility distance', 0);
  const units = select('System of measurement', ['e', 'm', 'h'], 'e');

  return (
    <div className={styles.storyWrapper}>
      <Visibility visibility={value} units={units} className={styles.font} />
    </div>
  );
};

zero.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const negative = () => {
  const value = number('Visibility distance', -10);
  const units = select('System of measurement', ['e', 'm', 'h'], 'e');

  return (
    <div className={styles.storyWrapper}>
      <Visibility visibility={value} units={units} className={styles.font} />
    </div>
  );
};

negative.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const undefined = () => {
  const value = number('Visibility distance');
  const units = select('System of measurement', ['e', 'm', 'h'], 'e');

  return (
    <div className={styles.storyWrapper}>
      <Visibility visibility={value} units={units} className={styles.font} />
    </div>
  );
};

undefined.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};
