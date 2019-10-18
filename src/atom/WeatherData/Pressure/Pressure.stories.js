import React from 'react';
import { number, select } from '@storybook/addon-knobs';
import { Pressure } from './Pressure';
import readme from './Pressure.md';
import styles from '../WeatherData.stories.scss';

export default { title: 'Atoms|WeatherData/Pressure'};

export const english = () => {
  const unit = select('System of measurement', ['e', 'm', 'h'], 'e');
  const pressureMeanSeaLevel = number('Mean Sea Level Pressure', 1014.2);
  const pressureAltimeter = number('Altimeter Pressure', 33.33);
  const pressureTendencyCode = select('Pressure Tendency', [0, 1, 2], 0);

  return (
    <div className={styles.storyWrapper}>
      Altimeter
      <Pressure
        pressureAltimeter={pressureAltimeter}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
      Sea Level
      <Pressure
        pressureMeanSeaLevel={pressureMeanSeaLevel}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
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
  const pressureMeanSeaLevel = number('Mean Sea Level Pressure', 1014.2);
  const pressureAltimeter = number('Altimeter Pressure', 1033.33);
  const pressureTendencyCode = select('Pressure Tendency', [0, 1, 2], 0);

  return (
    <div className={styles.storyWrapper}>
      Altimeter
      <Pressure
        pressureAltimeter={pressureAltimeter}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
      Sea Level
      <Pressure
        pressureMeanSeaLevel={pressureMeanSeaLevel}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
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
  const pressureMeanSeaLevel = number('Mean Sea Level Pressure', 1014.2);
  const pressureAltimeter = number('Altimeter Pressure', 1033.33);
  const pressureTendencyCode = select('Pressure Tendency', [0, 1, 2], 0);

  return (
    <div className={styles.storyWrapper}>
      Altimeter
      <Pressure
        pressureAltimeter={pressureAltimeter}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
      Sea Level
      <Pressure
        pressureMeanSeaLevel={pressureMeanSeaLevel}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
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

export const rising = () => {
  const unit = select('System of measurement', ['e', 'm', 'h'], 'e');
  const pressureMeanSeaLevel = number('Mean Sea Level Pressure', 1014.2);
  const pressureAltimeter = number('Altimeter Pressure', 33.33);
  const pressureTendencyCode = select('Pressure Tendency', [0, 1, 2], 1);

  return (
    <div className={styles.storyWrapper}>
      Altimeter
      <Pressure
        pressureAltimeter={pressureAltimeter}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
      Sea Level
      <Pressure
        pressureMeanSeaLevel={pressureMeanSeaLevel}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
    </div>
  );
};

rising.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const falling = () => {
  const unit = select('System of measurement', ['e', 'm', 'h'], 'e');
  const pressureMeanSeaLevel = number('Mean Sea Level Pressure', 1014.2);
  const pressureAltimeter = number('Altimeter Pressure', 33.33);
  const pressureTendencyCode = select('Pressure Tendency', [0, 1, 2], 2);

  return (
    <div className={styles.storyWrapper}>
      Altimeter
      <Pressure
        pressureAltimeter={pressureAltimeter}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
      Sea Level
      <Pressure
        pressureMeanSeaLevel={pressureMeanSeaLevel}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
    </div>
  );
};

falling.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const undefined = () => {
  const unit = select('System of measurement', ['e', 'm', 'h'], 'e');
  const pressureMeanSeaLevel = number('Mean Sea Level Pressure', 1014.2);
  const pressureAltimeter = number('Altimeter Pressure', 33.33);
  const pressureTendencyCode = select('Pressure Tendency', [0, 1, 2], 2);

  return (
    <div className={styles.storyWrapper}>
      Both Altimeter and MSL Undefined
      <Pressure
        pressureAltimeter={null}
        pressureMeanSeaLevel={null}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
      Altimeter with MSL Undefined
      <Pressure
        pressureAltimeter={pressureAltimeter}
        pressureMeanSeaLevel={null}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
      Sea Level with Altimeter Undefined
      <Pressure
        pressureAltimeter={null}
        pressureMeanSeaLevel={pressureMeanSeaLevel}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
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
  const pressureMeanSeaLevel = number('Mean Sea Level Pressure', -1014.2);
  const pressureAltimeter = number('Altimeter Pressure', -33.33);
  const pressureTendencyCode = select('Pressure Tendency', [0, 1, 2], 0);

  return (
    <div className={styles.storyWrapper}>
      Altimeter
      <Pressure
        pressureAltimeter={pressureAltimeter}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
      Sea Level
      <Pressure
        pressureMeanSeaLevel={pressureMeanSeaLevel}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
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
  const pressureMeanSeaLevel = number('Mean Sea Level Pressure', 0);
  const pressureAltimeter = number('Altimeter Pressure', 0);
  const pressureTendencyCode = select('Pressure Tendency', [0, 1, 2], 0);

  return (
    <div className={styles.storyWrapper}>
      Altimeter
      <Pressure
        pressureAltimeter={pressureAltimeter}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
      Sea Level
      <Pressure
        pressureMeanSeaLevel={pressureMeanSeaLevel}
        units={unit}
        pressureTendencyCode={pressureTendencyCode}
      />
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
