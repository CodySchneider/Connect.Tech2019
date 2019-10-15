import React from 'react';
import {
  storiesOf,
} from '@storybook/react';
import {
  number,
} from '@storybook/addon-knobs';
import { DailyForecast } from './DailyForecast';
import {
  WEATHER_DATA_DAY,
  WEATHER_DATA_NIGHT,
} from 'molecule/DaypartDetails/DaypartDetails.stories.const';
import {
  SUMMARY_DATA_DAILY,
} from 'molecule/DaypartDetails/DetailsSummary/DetailsSummary.stories.const';
import readme from './README.md';
import styles from './DailyForecast.stories.scss';

const stories = storiesOf('Organisms (Modules)|DailyForecast', module);
const dayLimitOptions = {
  range: true,
  min: 1,
  max: 15,
  step: 1,
};
const adIndexOptions = {
  range: true,
  min: 1,
  max: 15,
  step: 1,
};

stories
  .add('Default', () => {
    const dayLimit = number('Number of Days', 10, dayLimitOptions);
    const adIndex = number('Ad Index', 5, adIndexOptions);
    const dailyData = [];

    for (let i = 0; i < dayLimit; i++) {
      dailyData.push({
        summary: SUMMARY_DATA_DAILY,
        day: WEATHER_DATA_DAY,
        night: WEATHER_DATA_NIGHT,
      });
    }

    return (
      <div className={styles.background}>
        <DailyForecast
          adIndex={adIndex}
          dailyData={dailyData}
          summaryData={SUMMARY_DATA_DAILY}
          alertSeverityCode={1}
          alertHeadline="Run for the hills"
        />
      </div>
    );
  }, {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['DailyForecast.test.js'],
  });
