import React from 'react';
import DetailsSummary from './DetailsSummary';
import {
  SUMMARY_DATA_DAILY,
  SUMMARY_DATA_DAILY_SHORT,
  SUMMARY_DATA_HOURLY,
  SUMMARY_DATA_HOURLY_SHORT,
} from './DetailsSummary.stories.const';
import readme from './DetailsSummary.md';

export default { title: 'Molecules|DaypartDetails/DetailsSummary'};

export const daily = () => (
  <>
    <h3>Long Values</h3>
    <DetailsSummary {...SUMMARY_DATA_DAILY} />
    <h3>Short Values</h3>
    <DetailsSummary {...SUMMARY_DATA_DAILY_SHORT} />
  </>
);

daily.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const hourly = () => (
  <>
    <h3>Long Values</h3>
    <DetailsSummary {...SUMMARY_DATA_HOURLY} />
    <h3>Short Values</h3>
    <DetailsSummary {...SUMMARY_DATA_HOURLY_SHORT} />
  </>
);

hourly.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const fadeOnOpenStory = () => (
  <div open>
    <DetailsSummary {...SUMMARY_DATA_DAILY} fadeOnOpen />
  </div>
);

fadeOnOpenStory.story = {
  name: 'Fade on Open',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};
