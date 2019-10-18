import React from 'react';
import { DailyContent } from './DailyContent';
import { WEATHER_DATA_DAY, WEATHER_DATA_NIGHT } from '../DaypartDetails.stories.const';
import readme from './DailyContent.md';

export default { title: 'Molecules|DaypartDetails/DailyContent'};

export const day = () => <DailyContent {...WEATHER_DATA_DAY} />;

day.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const night = () => <DailyContent {...WEATHER_DATA_NIGHT} />;

night.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};
