import React from 'react';
import {
  text,
} from '@storybook/addon-knobs';
// import { withViewport } from '@storybook/addon-viewport';
// import { DonutChart } from 'molecule/DonutChart/DonutChart';
import { Card } from './Card';
import styles from './Card.stories.scss';
import readme from './README.md';

const CardContent = () => (
  <>
    <p><strong>3 guys were riding in a car; a hardware technician, a systems analyst and a programmer.</strong></p>
    <p>The systems analyst is driving and when they come to a steep hill he finds that the brakes have failed and the car is accelerating out of control.</p>
    <p>So, he pumps the emergency brake, downshifts the gears, and rubs the wheels’ rims against the curb. He finally wrestles the car to a stop. The three climb out and assess the situation.</p>
    <p>Hardware tech: “Let’s try and fix it. I’ll crawl under the car and take a look. ”</p>
    <p>Systems analyst: “No. I think we should get someone qualified to fix it, a specialist in brakes.”</p>
    <p>Programmer: “Why don’t we just get back in and see if it happens again?</p>
  </>
);

export default {
  title: 'Molecules|Card',
};

export const defaultStory = () => {
    const title = text('Card Heading', 'Card Heading');

    return (
      <Card
        title={title}
      >
        <CardContent />
      </Card>
    );
  };

defaultStory.story = {
  name: 'Default',

  parameters: {
      readme: {
        sidebar: `${readme}<!-- PROPS -->`,
      },
      jest: ['Card.test.js'],
    },
};


export const ctaButton = () => {
    const title = text('Card Heading', 'Card Heading');
    const ctatext = text('CTA Text', 'Call To Action');
    const ctaurl = text('CTA Url', '/');

    return (
      <Card
        title={title}
        ctatext={ctatext}
        ctaurl={ctaurl}
      >
        <CardContent />
      </Card>
    );
  };

ctaButton.story = {
  name: 'CTA Button',

  parameters: {
      readme: {
        sidebar: `${readme}<!-- PROPS -->`,
      },
      jest: ['Card.test.js'],
    },
};


export const noHeader = () => {
    const title = text('Card Heading', '');

    return (
      <Card
        title={title}
      >
        <CardContent />
      </Card>
    );
  };

noHeader.story = {
  parameters: {
      readme: {
        sidebar: `${readme}<!-- PROPS -->`,
      },
      jest: ['Card.test.js'],
    },
};
