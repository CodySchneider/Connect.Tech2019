import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  number,
  select,
} from '@storybook/addon-knobs';
import { Pressure } from './Pressure';
import readme from './Pressure.md';
import styles from '../WeatherData.stories.scss';

const stories = storiesOf('Atoms|WeatherData/Pressure', module);

stories
  .add('English', () => {
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Metric', () => {
    const unit = select('System of measurement', ['e', 'm', 'h'], 'm');
    const pressureMeanSeaLevel = number('Mean Sea Level Pressure', 1014.20);
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });


stories
  .add('Hybrid', () => {
    const unit = select('System of measurement', ['e', 'm', 'h'], 'h');
    const pressureMeanSeaLevel = number('Mean Sea Level Pressure', 1014.20);
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Rising', () => {
    const unit = select('System of measurement', ['e', 'm', 'h'], 'e');
    const pressureMeanSeaLevel = number('Mean Sea Level Pressure', 1014.20);
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Falling', () => {
    const unit = select('System of measurement', ['e', 'm', 'h'], 'e');
    const pressureMeanSeaLevel = number('Mean Sea Level Pressure', 1014.20);
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Undefined', () => {
    const unit = select('System of measurement', ['e', 'm', 'h'], 'e');
    const pressureMeanSeaLevel = number('Mean Sea Level Pressure', 1014.20);
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Negative', () => {
    const unit = select('System of measurement', ['e', 'm', 'h'], 'e');
    const pressureMeanSeaLevel = number('Mean Sea Level Pressure', -1014.20);
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Zero', () => {
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
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });
