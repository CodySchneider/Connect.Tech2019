import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  number,
  select,
} from '@storybook/addon-knobs';
import { Accumulation } from './Accumulation';
import readme from './Accumulation.md';
import styles from '../WeatherData.stories.scss';

const stories = storiesOf('Atoms|WeatherData/Accumulation', module);

stories
  .add('English', () => {
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Metric', () => {
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Hybrid', () => {
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Undefined', () => {
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Negative', () => {
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Zero', () => {
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });
