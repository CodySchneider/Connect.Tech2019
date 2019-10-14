import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  text,
} from '@storybook/addon-knobs';
// import { withViewport } from '@storybook/addon-viewport';
import { DonutChart } from 'molecule/DonutChart/DonutChart';
import { Card } from './Card';
import styles from './Card.stories.scss';
import readme from './README.md';

const CardContent = () => (
  <>
    <div className={styles.listItem}>
      <DonutChart
        className={styles.listChart}
        value={75}
        iconName="grass"
      />
      <div className={styles.listTextBlock}>
        <h2 className={styles.listHeading}>
          List Heading
        </h2>
        <p className={styles.listText}>
          This is some list text
        </p>
      </div>
    </div>
    <div className={styles.listItem}>
      <DonutChart
        className={styles.listChart}
        value={30}
        iconName="grass"
      />
      <div className={styles.listTextBlock}>
        <h2 className={styles.listHeading}>
          List Heading
        </h2>
        <p className={styles.listText}>
          This is some list text
        </p>
      </div>
    </div>
  </>
);


storiesOf('Molecules|Card', module)
  .add('Default', () => {
    const headingText = text('Card Heading', 'Card Heading');

    return (
      <Card
        headingText={headingText}
      >
        <CardContent />
      </Card>
    );
  }, {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Card.test.js'],
  });

storiesOf('Molecules|Card', module)
  .add('CTA Button', () => {
    const headingText = text('Card Heading', 'Card Heading');
    const ctatext = text('CTA Text', 'Call To Action');
    const ctaurl = text('CTA Url', '/');

    return (
      <Card
        headingText={headingText}
        ctatext={ctatext}
        ctaurl={ctaurl}
      >
        <CardContent />
      </Card>
    );
  }, {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Card.test.js'],
  });

storiesOf('Molecules|Card', module)
  .add('No Header', () => {
    const headingText = text('Card Heading', '');

    return (
      <Card
        headingText={headingText}
      >
        <CardContent />
      </Card>
    );
  }, {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Card.test.js'],
  });

// storiesOf('Molecules|Card', module)
//   .add('No Content', () => (
//     <Card />
//   ), {
//     readme: {
//       sidebar: `${readme}<!-- PROPS -->`,
//     },
//     jest: ['Card.test.js'],
//   });
