import React from 'react';
import { storiesOf } from '@storybook/react';
import AlertHeadline from './AlertHeadline';
import readme from './README.md';
import styles from './AlertHeadline.stories.scss';
import { sampleDesc } from './AlertHeadline.stories.const';

const buttonStories = storiesOf('Molecules|Alert Headline/As a button', module);
const textStories = storiesOf('Molecules|Alert Headline/As text', module);

buttonStories.add('Severity 1', () => (
  <>
    <div className={styles.storyWrapperWithBackground}>
      <AlertHeadline
        alertHeadline={sampleDesc}
        alertSeverityCode={1}
        alertCount={5}
        alertUrl="weather.com"
        showIcon
        theme="light"
      />
    </div>
    <div className={styles.storyWrapper}>
      <AlertHeadline
        alertHeadline={sampleDesc}
        alertSeverityCode={1}
        alertCount={5}
        alertUrl="weather.com"
        showIcon
      />
    </div>
  </>
), {
  readme: {
    sidebar: `${readme}<!-- PROPS -->`,
  },
});

buttonStories.add('Severity 2', () => (
  <>
    <div className={styles.storyWrapperWithBackground}>
      <AlertHeadline
        alertHeadline={sampleDesc}
        alertSeverityCode={2}
        alertCount={5}
        alertUrl="weather.com"
        showIcon
        theme="light"
      />
    </div>
    <div className={styles.storyWrapper}>
      <AlertHeadline
        alertHeadline={sampleDesc}
        alertSeverityCode={2}
        alertCount={5}
        alertUrl="weather.com"
        showIcon
      />
    </div>
  </>
), {
  readme: {
    sidebar: `${readme}<!-- PROPS -->`,
  },
});

buttonStories.add('Severity 3', () => (
  <>
    <div className={styles.storyWrapperWithBackground}>
      <AlertHeadline
        alertHeadline={sampleDesc}
        alertSeverityCode={3}
        alertCount={5}
        alertUrl="weather.com"
        showIcon
        theme="light"
      />
    </div>
    <div className={styles.storyWrapper}>
      <AlertHeadline
        alertHeadline={sampleDesc}
        alertSeverityCode={3}
        alertCount={5}
        alertUrl="weather.com"
        showIcon
      />
    </div>
  </>
), {
  readme: {
    sidebar: `${readme}<!-- PROPS -->`,
  },
});

buttonStories.add('No Other Alerts', () => (
  <>
    <div className={styles.storyWrapperWithBackground}>
      <AlertHeadline
        alertHeadline={sampleDesc}
        alertSeverityCode={1}
        alertUrl="weather.com"
        showIcon
        theme="light"
      />
    </div>
    <div className={styles.storyWrapper}>
      <AlertHeadline
        alertHeadline={sampleDesc}
        alertSeverityCode={1}
        alertUrl="weather.com"
        showIcon
      />
    </div>
  </>
), {
  readme: {
    sidebar: `${readme}<!-- PROPS -->`,
  },
});
