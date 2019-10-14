import React from 'react';
import {
  storiesOf,
} from '@storybook/react';
import { DailyContent } from './DailyContent';
import {
  WEATHER_DATA_DAY,
  WEATHER_DATA_NIGHT,
} from '../DaypartDetails.stories.const';
import readme from './DailyContent.md';

const stories = storiesOf('Molecules|DaypartDetails/DailyContent', module);

stories
  .add('Day', () => (
    <DailyContent {...WEATHER_DATA_DAY} />
  ), {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });
stories
  .add('Night', () => (
    <DailyContent {...WEATHER_DATA_NIGHT} />
  ), {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });
