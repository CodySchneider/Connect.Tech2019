import React from 'react';
import AlertHeadline from './AlertHeadline';
import readme from './README.md';
import styles from './AlertHeadline.stories.scss';
import { sampleDesc } from './AlertHeadline.stories.const';

export default {
  title: 'Molecules|Alert Headline',
};

// const buttonStories = storiesOf('Molecules|Alert Headline/As a button'};

export const severity1 = () => (
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
);

severity1.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const severity2 = () => (
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
);

severity2.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const severity3 = () => (
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
);

severity3.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const noOtherAlerts = () => (
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
);

noOtherAlerts.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};
