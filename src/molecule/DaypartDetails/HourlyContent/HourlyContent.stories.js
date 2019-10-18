import React from 'react';
import { HourlyContent } from './HourlyContent';
import { WEATHER_DATA_HOURLY } from '../DaypartDetails.stories.const';
import readme from './HourlyContent.md';

export default { title: 'Molecules|DaypartDetails/HourlyContent'};

export const hourly = () => <HourlyContent {...WEATHER_DATA_HOURLY} />;

hourly.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};
