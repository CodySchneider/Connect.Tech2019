import React from 'react';
import { number, select } from '@storybook/addon-knobs';
import { Accumulation } from './Accumulation';
import readme from './Accumulation.md';
import styles from '../WeatherData.stories.scss';

export default {
  title: 'Atoms|WeatherData/Accumulation',
};

export const english = () => {
  const unit = select('System of measurement', ['e', 'm', 'h'], 'e');
  const value = number('Precipitation Amount', 3.33);

  return (
    <div className={styles.storyWrapper}>
      Rain:&nbsp;
      <Accumulation rain={value} units={unit} />
      <br />
      Snow:&nbsp;
      <Accumulation snow={value} units={unit} />
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
  const unit = select('System of measurement', ['e', 'm', 'h'], 'm');
  const value = number('Precipitation Amount', 3.33);

  return (
    <div className={styles.storyWrapper}>
      Rain:&nbsp;
      <Accumulation rain={value} units={unit} />
      <br />
      Snow:&nbsp;
      <Accumulation snow={value} units={unit} />
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
  const unit = select('System of measurement', ['e', 'm', 'h'], 'h');
  const value = number('Precipitation Amount', 3.33);

  return (
    <div className={styles.storyWrapper}>
      Rain:&nbsp;
      <Accumulation rain={value} units={unit} />
      <br />
      Snow:&nbsp;
      <Accumulation snow={value} units={unit} />
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

export const undefined = () => {
  const unit = select('System of measurement', ['e', 'm', 'h'], 'e');
  const value = number('Precipitation Amount');

  return (
    <div className={styles.storyWrapper}>
      Rain:&nbsp;
      <Accumulation rain={value} units={unit} />
      <br />
      Snow:&nbsp;
      <Accumulation snow={value} units={unit} />
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

export const negative = () => {
  const unit = select('System of measurement', ['e', 'm', 'h'], 'e');
  const value = number('Precipitation Amount', -10);

  return (
    <div className={styles.storyWrapper}>
      Rain:&nbsp;
      <Accumulation rain={value} units={unit} />
      <br />
      Snow:&nbsp;
      <Accumulation snow={value} units={unit} />
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

export const zero = () => {
  const unit = select('System of measurement', ['e', 'm', 'h'], 'e');
  const value = number('Precipitation Amount', 0);

  return (
    <div className={styles.storyWrapper}>
      Rain:&nbsp;
      <Accumulation rain={value} units={unit} />
      <br />
      Snow:&nbsp;
      <Accumulation snow={value} units={unit} />
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
