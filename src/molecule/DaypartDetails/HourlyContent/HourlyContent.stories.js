import React from 'react';
import { storiesOf } from '@storybook/react';
import { HourlyContent } from './HourlyContent';
import { WEATHER_DATA_HOURLY } from '../DaypartDetails.stories.const';
import readme from './HourlyContent.md';

const stories = storiesOf('Molecules|DaypartDetails/HourlyContent', module);

stories
  .add('Hourly', () => (
    <HourlyContent {...WEATHER_DATA_HOURLY} />
  ), {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });
