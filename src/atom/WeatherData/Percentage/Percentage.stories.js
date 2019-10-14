import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  number,
} from '@storybook/addon-knobs';
import { Percentage } from './Percentage';
import readme from './Percentage.md';
import styles from '../WeatherData.stories.scss';

const stories = storiesOf('Atoms|WeatherData/Percentage', module);

stories
  .add('Default', () => {
    const value = number('Percentage Value', 133);

    return (
      <div className={styles.storyWrapper}>
        <Percentage value={value} />
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
    const value = number('Percentage Value', 0);

    return (
      <div className={styles.storyWrapper}>
        <Percentage value={value} />
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
    const value = number('Percentage Value');

    return (
      <div className={styles.storyWrapper}>
        <Percentage value={value} />
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
    const value = number('Percentage Value', -10);

    return (
      <div className={styles.storyWrapper}>
        <Percentage value={value} />
      </div>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });
