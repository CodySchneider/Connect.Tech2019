import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
} from '@storybook/addon-knobs';
import { ListItem } from './ListItem';

import readme from './README.md';

const stories = storiesOf('Atoms|ListItem', module);
const clickHandler = () => console.log('Button List Click');

// stories.addDecorator(withViewport('iphone6'));
stories.addDecorator(withKnobs);
stories.add(
  'Basic List',
  () => (
    <>
      <ListItem>
        Stacks on deck, Patrón on ice
      </ListItem>
      <ListItem>
        And we can pop bottles all night
      </ListItem>
      <ListItem>
        Baby, you could have whatever you like
      </ListItem>
      <ListItem>
        I said, you could have whatever you like
      </ListItem>
    </>
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['ListGroup.test.js'],
  },
);

stories.add(
  'Button List',
  () => (
    <>
      <ListItem onClick={clickHandler}>
        Stacks on deck, Patrón on ice
      </ListItem>
      <ListItem onClick={clickHandler}>
        And we can pop bottles all night
      </ListItem>
      <ListItem onClick={clickHandler}>
        Baby, you could have whatever you like
      </ListItem>
      <ListItem onClick={clickHandler}>
        I said, you could have whatever you like
      </ListItem>
    </>
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['ListGroup.test.js'],
  },
);

stories.add(
  'Outer Borders',
  () => (
    <>
      <h2>Default</h2>
      <div>
        <ListItem outerBorder>
          Stacks on deck, Patrón on ice
        </ListItem>
        <ListItem outerBorder>
          And we can pop bottles all night
        </ListItem>
        <ListItem outerBorder>
          Baby, you could have whatever you like
        </ListItem>
        <ListItem outerBorder>
          I said, you could have whatever you like
        </ListItem>
      </div>
      <h2>Links</h2>
      <div>
        <ListItem
          href="https://www.youtube.com/watch?v=nQJACVmankY"
          outerBorder
        >
          Stacks on deck, Patrón on ice
        </ListItem>
        <ListItem
          href="https://www.youtube.com/watch?v=nQJACVmankY"
          outerBorder
        >
          And we can pop bottles all night
        </ListItem>
        <ListItem
          href="https://www.youtube.com/watch?v=nQJACVmankY"
          outerBorder
        >
          Baby, you could have whatever you like
        </ListItem>
        <ListItem
          href="https://www.youtube.com/watch?v=nQJACVmankY"
          outerBorder
        >
          I said, you could have whatever you like
        </ListItem>
      </div>
    </>
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['ListGroup.test.js'],
  },
);

stories.add(
  'Link List',
  () => (
    <>
      <ListItem href="https://www.youtube.com/watch?v=nQJACVmankY">
        Stacks on deck, Patrón on ice
      </ListItem>
      <ListItem href="https://www.youtube.com/watch?v=nQJACVmankY">
        And we can pop bottles all night
      </ListItem>
      <ListItem href="https://www.youtube.com/watch?v=nQJACVmankY">
        Baby, you could have whatever you like
      </ListItem>
      <ListItem href="https://www.youtube.com/watch?v=nQJACVmankY">
        I said, you could have whatever you like
      </ListItem>
    </>
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['ListGroup.test.js'],
  },
);
