import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
import { Icon } from 'atom/Icon/Icon';
import { Button } from './Button';
import readme from './README.md';

export default {
  title: 'Atoms|Button/Primary Action',
};

export const button = () => {
    const btnText = text('title', 'See story');
    const disabled = boolean('disabled', false);

    return (
      <Button
        theme="primary"
        disabled={disabled}
        onClick={() => console.log('Click', event)}
      >
        {btnText}
      </Button>
    );
  };

button.story = {
  parameters: {
      readme: {
        sidebar: `${readme}<!-- PROPS -->`,
      },
      jest: ['Button.test.js'],
    },
};


export const iconOnly = () => {
    const disabled = boolean('disabled', false);

    return (
      <Button
        theme="primary"
        disabled={disabled}
        ariaLabel="Close Button"
      >
        <Icon
          set="ui"
          name="close"
          theme="light"
        />
      </Button>
    );
  };

iconOnly.story = {
  parameters: {
      readme: {
        sidebar: `${readme}<!-- PROPS -->`,
      },
      jest: ['Button.test.js'],
    },
};


export const textWithIcon = () => {
    const disabled = boolean('disabled', false);

    return (
      <Button
        theme="primary"
        disabled={disabled}
      >
        Call To Action
        <Icon
          style={{ width: '12px' }}
          set="ui"
          name="caret-right"
          theme="light"
        />
      </Button>
    );
  };

textWithIcon.story = {
  name: 'Text with Icon',

  parameters: {
      readme: {
        sidebar: `${readme}<!-- PROPS -->`,
      },
      jest: ['Button.test.js'],
    },
};


export const buttonLink = () => {
    const btnText = text('title', 'Button Link');
    const disabled = boolean('disabled', false);

    return (
      <Button
        theme="primary"
        disabled={disabled}
        href="/"
      >
        {btnText}
      </Button>
    );
  };

buttonLink.story = {
  parameters: {
      readme: {
        sidebar: `${readme}<!-- PROPS -->`,
      },
      jest: ['Button.test.js'],
    },
};
