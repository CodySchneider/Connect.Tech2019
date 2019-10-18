import React from 'react';
import { DaypartDetails } from './DaypartDetails';
import {
  SUMMARY_DATA_DAILY,
  SUMMARY_DATA_HOURLY,
} from './DetailsSummary/DetailsSummary.stories.const';
import {
  WEATHER_DATA_DAY,
  WEATHER_DATA_NIGHT,
  WEATHER_DATA_HOURLY,
} from './DaypartDetails.stories.const';

import readme from './README.md';

export default { title: 'Molecules|DaypartDetails'};

export const daily = () => (
  <DaypartDetails
    open
    summary={SUMMARY_DATA_DAILY}
    day={WEATHER_DATA_DAY}
    night={WEATHER_DATA_NIGHT}
  />
);

daily.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const hourlyStory = () => (
  <DaypartDetails open summary={SUMMARY_DATA_HOURLY} hourly={WEATHER_DATA_HOURLY} />
);

hourlyStory.story = {
  name: 'Hourly',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};
