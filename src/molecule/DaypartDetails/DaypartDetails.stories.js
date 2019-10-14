import React from 'react';
import {
  storiesOf,
} from '@storybook/react';
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

const stories = storiesOf('Molecules|DaypartDetails', module);

stories
  .add('Daily', () => (
    <DaypartDetails
      open
      summary={SUMMARY_DATA_DAILY}
      day={WEATHER_DATA_DAY}
      night={WEATHER_DATA_NIGHT}
    />
  ), {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Hourly', () => (
    <DaypartDetails
      open
      summary={SUMMARY_DATA_HOURLY}
      hourly={WEATHER_DATA_HOURLY}
    />
  ), {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });
