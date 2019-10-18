import React from 'react';
import {
  text,
  select,
  number,
} from '@storybook/addon-knobs';
import { Wind } from './Wind';
import styles from '../WeatherData.stories.scss';
import readme from './Wind.md';

const windDirectionRange = {
  range: true,
  min: 0,
  max: 359,
  step: 1,
};

const windCardinalRange = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
  'CALM',
];

export default {
  title: 'Atoms|WeatherData/Wind',
};

export const english = () => {
    const units = select('System of measurement', ['e', 'm', 'h'], 'e');
    const windDirection = number('Wind Direction', 0, windDirectionRange);
    const windSpeed = number('Wind speed', 133);

    return (
      <div className={styles.storyWrapper}>
        <Wind
          units={units}
          windDirection={windDirection}
          windSpeed={windSpeed}
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
    const units = select('System of measurement', ['e', 'm', 'h'], 'm');
    const windSpeed = text('Wind speed', 5);
    const windDirection = number('Wind Direction', 0, windDirectionRange);

    return (
      <div className={styles.storyWrapper}>
        <Wind
          units={units}
          windDirection={windDirection}
          windSpeed={windSpeed}
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


export const hybridUnits = () => {
    const units = select('System of measurement', ['e', 'm', 'h'], 'h');
    const windDirection = number('Wind Direction', 0, windDirectionRange);
    const windSpeed = number('Wind speed', 5);

    return (
      <div className={styles.storyWrapper}>
        <Wind
          units={units}
          windDirection={windDirection}
          windSpeed={windSpeed}
        />
      </div>
    );
  };

hybridUnits.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};


export const windDirectionWest = () => {
    const units = select('System of measurement', ['e', 'm', 'h'], 'h');
    const windDirection = number('Wind Direction', 270, windDirectionRange);
    const windSpeed = number('Wind speed', 5);

    return (
      <div className={styles.storyWrapper}>
        <Wind
          units={units}
          windDirection={windDirection}
          windSpeed={windSpeed}
        />
      </div>
    );
  };

windDirectionWest.story = {
  name: 'Wind Direction - West',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};


export const windCardinalDirection = () => {
    const units = select('System of measurement', ['e', 'm', 'h'], 'h');
    const windDirection = select('Cardinal Direction', windCardinalRange, windCardinalRange[0]);
    const windSpeed = number('Wind speed', 5);

    return (
      <div className={styles.storyWrapper}>
        <Wind
          units={units}
          windDirectionCardinal={windDirection}
          windSpeed={windSpeed}
        />
      </div>
    );
  };

windCardinalDirection.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};


export const windCardinalDirectionIcon = () => {
    const units = select('System of measurement', ['e', 'm', 'h'], 'h');
    const windDirection = select('Cardinal Direction', windCardinalRange, windCardinalRange[0]);
    const windDegrees = number('Wind Degrees', 180, windDirectionRange);
    const windSpeed = number('Wind speed', 5);

    return (
      <div className={styles.storyWrapper}>
        <Wind
          units={units}
          windDirection={windDegrees}
          windDirectionCardinal={windDirection}
          windSpeed={windSpeed}
        />
      </div>
    );
  };

windCardinalDirectionIcon.story = {
  name: 'Wind Cardinal Direction & Icon',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};


export const undefined = () => {
    const units = select('System of measurement', ['e', 'm', 'h'], 'h');

    return (
      <div className={styles.storyWrapper}>
        <Wind
          units={units}
          windDirection=""
          windSpeed=""
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
