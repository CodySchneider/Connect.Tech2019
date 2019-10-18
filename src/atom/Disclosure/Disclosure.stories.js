import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { Button } from 'atom/Button/Button';
import { ListItem } from 'atom/ListItem/ListItem';
import Disclosure from './Disclosure';
import readme from './README.md';
import styles from './Disclosure.stories.scss';

const props = {
  onToggle: data => console.log('onClick', data),
};

const LoremIpsum = () => (
  <div className={styles.loremIpsum}>
    <p>
      Is this the real life? Is this just fantasy? Caught in a landslide No escape from reality Open
      your eyes
    </p>
    <a href="https://www.youtube.com/watch?v=thyJOnasHVE">Look up to the skies and see</a>
    <p>
      I'm just a poor boy, I need no sympathy Because I'm easy come, easy go A little high, little
      low Anyway the wind blows, doesn't really matter to me, to me
    </p>
  </div>
);
export default { title: 'Atoms|Disclosure' };

export const defaultStory = () => (
  <div style={{ marginTop: '50px' }}>
    <Disclosure title={text('Section 1 Summary', 'Section 1 Summary')} {...props}>
      <LoremIpsum />
    </Disclosure>
    <Disclosure title={text('Section 2 Summary', 'Section 2 Summary')} {...props}>
      <LoremIpsum />
    </Disclosure>
    <Disclosure title={text('Section 3 Summary', 'Section 3 Summary')} {...props}>
      <LoremIpsum />
    </Disclosure>
  </div>
);

defaultStory.story = {
  name: 'Default',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const listTheme = () => (
  <div style={{ marginTop: '50px' }}>
    <Disclosure
      theme="list"
      open={boolean('Section 1 Open', false)}
      title={text('Section 1 Summary', 'Disclosure with List Theme')}
      {...props}
    >
      <LoremIpsum />
    </Disclosure>
    <Disclosure
      theme="list"
      open={boolean('Section 2 Open', false)}
      title={text('Section 2 Summary', 'Disclosure with List Theme')}
      {...props}
    >
      <LoremIpsum />
    </Disclosure>
    <Disclosure
      theme="list"
      open={boolean('Section 3 Open', true)}
      title={text('Section 3 Summary', 'Disclosure with List Theme and ListItem Content')}
      {...props}
    >
      <ListItem>Is this the real life?</ListItem>
      <ListItem>Is this just fantasy?</ListItem>
      <ListItem>Caught in a landslide</ListItem>
      <ListItem>No escape from reality</ListItem>
    </Disclosure>
  </div>
);

listTheme.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const listThemeWithOuterBorder = () => (
  <div style={{ marginTop: '50px' }}>
    <Disclosure
      theme="list"
      open={boolean('Section 1 Open', false)}
      outerBorder={boolean('Section 1 outerBorder', true)}
      title={text('Section 1 Summary', 'Disclosure with List Theme')}
      {...props}
    >
      <LoremIpsum />
    </Disclosure>
    <Disclosure
      theme="list"
      open={boolean('Section 2 Open', false)}
      outerBorder={boolean('Section 2 outerBorder', false)}
      title={text('Section 2 Summary', 'Disclosure with List Theme')}
      {...props}
    >
      <LoremIpsum />
    </Disclosure>
    <Disclosure
      theme="list"
      open={boolean('Section 3 Open', true)}
      outerBorder={boolean('Section 3 outerBorder', true)}
      title={text('Section 3 Summary', 'Disclosure with List Theme and ListItem Content')}
      {...props}
    >
      <ListItem>Is this the real life?</ListItem>
      <ListItem>Is this just fantasy?</ListItem>
      <ListItem>Caught in a landslide</ListItem>
      <ListItem>No escape from reality</ListItem>
    </Disclosure>
  </div>
);

listThemeWithOuterBorder.story = {
  name: 'List Theme with outerBorder',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const grayContentBackground = () => (
  <div style={{ marginTop: '50px' }}>
    <Disclosure
      title="Gray Content Background"
      open
      contentBgGray={boolean('contentBgGray', true)}
      {...props}
    >
      <LoremIpsum />
    </Disclosure>
  </div>
);

grayContentBackground.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const listThemeWithNoBorderBetweenSummaryContentWhenOpen = () => (
  <div style={{ marginTop: '50px' }}>
    <Disclosure title="Gray Content Background" hideBorderOnSummaryOpen theme="list" {...props}>
      <LoremIpsum />
    </Disclosure>
    <Disclosure title="Gray Content Background" hideBorderOnSummaryOpen theme="list" {...props}>
      <LoremIpsum />
    </Disclosure>
    <Disclosure
      title="Gray Content Background"
      open
      hideBorderOnSummaryOpen
      theme="list"
      {...props}
    >
      <LoremIpsum />
    </Disclosure>
  </div>
);

listThemeWithNoBorderBetweenSummaryContentWhenOpen.story = {
  name: 'List Theme with No border between Summary/Content when open',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const customSummary = () => (
  <div style={{ marginTop: '50px' }}>
    <Disclosure summaryContent={<Button theme="primary">Bohemian Rhapsody</Button>} {...props}>
      <LoremIpsum />
    </Disclosure>
  </div>
);

customSummary.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};

export const programmaticControlOfOpenProp = () => (
  <div style={{ marginTop: '50px' }}>
    <Disclosure
      title="Bohemian Rhapsody"
      data-testid="testProp"
      open={boolean('Open State 1', true)}
      {...props}
    >
      <LoremIpsum />
    </Disclosure>
    <Disclosure title="Bohemian Rhapsody" open={boolean('Open State 2', true)} {...props}>
      <LoremIpsum />
    </Disclosure>
    <Disclosure title="Bohemian Rhapsody" open={boolean('Open State 3', true)} {...props}>
      <LoremIpsum />
    </Disclosure>
  </div>
);

programmaticControlOfOpenProp.story = {
  name: 'Programmatic Control of Open Prop',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};
