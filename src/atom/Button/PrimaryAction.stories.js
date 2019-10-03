import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Icon } from 'atom/Icon/Icon';
import { Button } from './Button';
import readme from './README.md';

storiesOf('Atoms|Button/Primary Action', module)
  .add('Button', () => {
    const btnText = text('title', 'See story');
    const disabled = boolean('disabled', false);

    return (
      <Button
        theme="primary"
        disabled={disabled}
        onClick={action('button-click')}
      >
        {btnText}
      </Button>
    );
  }, {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Button.test.js'],
  });

storiesOf('Atoms|Button/Primary Action', module)
  .add('Icon Only', () => {
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
  }, {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Button.test.js'],
  });

storiesOf('Atoms|Button/Primary Action', module)
  .add('Text with Icon', () => {
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
  }, {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Button.test.js'],
  });

storiesOf('Atoms|Button/Primary Action', module)
  .add('Button Link', () => {
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
  }, {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Button.test.js'],
  });
