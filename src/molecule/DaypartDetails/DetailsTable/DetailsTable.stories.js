import React from 'react';
import DetailsTable from './DetailsTable';
import {
  WEATHER_DATA_RAIN,
  WEATHER_DATA_SNOW,
  WEATHER_DATA_WINTRYMIX,
  WEATHER_DATA_DAY,
  WEATHER_DATA_NIGHT,
  WEATHER_DATA_HOURLY,
  WEATHER_DATA_ALL,
} from '../DaypartDetails.stories.const';
import readme from './DetailsTable.md';

export default { title: 'Molecules|DaypartDetails/DetailsTable'};

export const allFields = () => <DetailsTable {...WEATHER_DATA_ALL} />;

allFields.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const rain = () => <DetailsTable {...WEATHER_DATA_RAIN} />;

rain.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const snow = () => <DetailsTable {...WEATHER_DATA_SNOW} />;

snow.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const wintryMix = () => <DetailsTable {...WEATHER_DATA_WINTRYMIX} />;

wintryMix.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const day = () => <DetailsTable {...WEATHER_DATA_DAY} />;

day.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const night = () => <DetailsTable {...WEATHER_DATA_NIGHT} />;

night.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const hourly = () => <DetailsTable {...WEATHER_DATA_HOURLY} />;

hourly.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};
