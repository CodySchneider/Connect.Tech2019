import React from 'react';
import { number } from '@storybook/addon-knobs';
import { Percentage } from './Percentage';
import readme from './Percentage.md';
import styles from '../WeatherData.stories.scss';

export default { title: 'Atoms|WeatherData/Percentage'};

export const defaultStory = () => {
  const value = number('Percentage Value', 133);

  return (
    <div className={styles.storyWrapper}>
      <Percentage value={value} />
    </div>
  );
};

defaultStory.story = {
  name: 'Default',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const zero = () => {
  const value = number('Percentage Value', 0);

  return (
    <div className={styles.storyWrapper}>
      <Percentage value={value} />
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

export const undefined = () => {
  const value = number('Percentage Value');

  return (
    <div className={styles.storyWrapper}>
      <Percentage value={value} />
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
  const value = number('Percentage Value', -10);

  return (
    <div className={styles.storyWrapper}>
      <Percentage value={value} />
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
