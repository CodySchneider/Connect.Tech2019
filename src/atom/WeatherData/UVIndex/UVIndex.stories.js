import React from 'react';
import {
  number,
} from '@storybook/addon-knobs';
import { UVIndex } from './UVIndex';
import readme from './UVIndex.md';
import styles from '../WeatherData.stories.scss';

export default {
  title: 'Atoms|WeatherData/UVIndex',
};

export const defaultStory = () => {
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
  };

defaultStory.story = {
  name: 'Default',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};


export const extreme = () => {
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
  };

extreme.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};


export const zero = () => {
    const uvIndex = number('UV Index', 0);

    return (
      <div className={styles.storyWrapper}>
        <UVIndex uvIndex={uvIndex} />
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
    const uvIndex = number('UV Index', -10);

    return (
      <div className={styles.storyWrapper}>
        <UVIndex uvIndex={uvIndex} />
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
    const uvIndex = number('UV Index');

    return (
      <div className={styles.storyWrapper}>
        <UVIndex uvIndex={uvIndex} />
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
