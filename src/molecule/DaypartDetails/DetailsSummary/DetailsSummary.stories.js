import React from 'react';
import {
  storiesOf,
} from '@storybook/react';
import DetailsSummary from './DetailsSummary';
import {
  SUMMARY_DATA_DAILY,
  SUMMARY_DATA_DAILY_SHORT,
  SUMMARY_DATA_HOURLY,
  SUMMARY_DATA_HOURLY_SHORT,
} from './DetailsSummary.stories.const';
import readme from './DetailsSummary.md';

const stories = storiesOf('Molecules|DaypartDetails/DetailsSummary', module);

stories
  .add('Daily', () => (
    <>
      <h3>Long Values</h3>
      <DetailsSummary {...SUMMARY_DATA_DAILY} />
      <h3>Short Values</h3>
      <DetailsSummary {...SUMMARY_DATA_DAILY_SHORT} />
    </>
  ), {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Hourly', () => (
    <>
      <h3>Long Values</h3>
      <DetailsSummary {...SUMMARY_DATA_HOURLY} />
      <h3>Short Values</h3>
      <DetailsSummary {...SUMMARY_DATA_HOURLY_SHORT} />
    </>
  ), {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });

stories
  .add('Fade on Open', () => (
    <div open>
      <DetailsSummary {...SUMMARY_DATA_DAILY} fadeOnOpen />
    </div>
  ), {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  });
