import React from 'react';
import {
  storiesOf,
} from '@storybook/react';
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

const stories = storiesOf('Molecules|DaypartDetails/DetailsTable', module);

stories
  .add('All Fields', () => (
    <DetailsTable {...WEATHER_DATA_ALL} />
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Rain', () => (
    <DetailsTable {...WEATHER_DATA_RAIN} />
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Snow', () => (
    <DetailsTable {...WEATHER_DATA_SNOW} />
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Wintry Mix', () => (
    <DetailsTable {...WEATHER_DATA_WINTRYMIX} />
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Day', () => (
    <DetailsTable {...WEATHER_DATA_DAY} />
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Night', () => (
    <DetailsTable {...WEATHER_DATA_NIGHT} />
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Hourly', () => (
    <DetailsTable {...WEATHER_DATA_HOURLY} />
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });
