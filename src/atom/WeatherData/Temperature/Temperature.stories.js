import React from 'react';
import { number, select, text } from '@storybook/addon-knobs';
import { Temperature } from './Temperature';
import readme from './Temperature.md';
import styles from '../WeatherData.stories.scss';

export default { title: 'Atoms|WeatherData/Temperature'};

export const english = () => {
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
};

english.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const metric = () => {
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
};

metric.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const hybrid = () => {
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
};

hybrid.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const noUnits = () => {
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
};

noUnits.story = {
  name: 'No units',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const unitOnly = () => {
  const units = select('System of measurement', ['e', 'm', 'h'], 'e');

  return (
    <div className={styles.storyWrapper}>
      <Temperature units={units} />
    </div>
  );
};

unitOnly.story = {
  name: 'Unit only',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const zero = () => {
  const units = text('System of measurement');
  // const value = number('Temperature', 0);

  return (
    <div className={styles.storyWrapper}>
      <Temperature units={units} value={0} />
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
  const units = text('System of measurement');
  const value = number('Temperature', -60);

  return (
    <div className={styles.storyWrapper}>
      <Temperature units={units} value={value} />
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
  const units = text('System of measurement');
  const value = number('Temperature');

  return (
    <div className={styles.storyWrapper}>
      <Temperature units={units} value={value} />
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
