import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { ListItem } from './ListItem';

import readme from './README.md';

export default { title: 'Atoms|ListItem' };

const clickHandler = () => console.log('Button List Click');

// stories.addDecorator(withViewport('iphone6'));
// stories.addDecorator(withKnobs);

export const basicList = () => (
  <>
    <ListItem>Stacks on deck, Patrón on ice</ListItem>
    <ListItem>And we can pop bottles all night</ListItem>
    <ListItem>Baby, you could have whatever you like</ListItem>
    <ListItem>I said, you could have whatever you like</ListItem>
  </>
);

basicList.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['ListGroup.test.js'],
  },
};

export const buttonList = () => (
  <>
    <ListItem onClick={clickHandler}>Stacks on deck, Patrón on ice</ListItem>
    <ListItem onClick={clickHandler}>And we can pop bottles all night</ListItem>
    <ListItem onClick={clickHandler}>Baby, you could have whatever you like</ListItem>
    <ListItem onClick={clickHandler}>I said, you could have whatever you like</ListItem>
  </>
);

buttonList.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['ListGroup.test.js'],
  },
};

export const outerBorders = () => (
  <>
    <h2>Default</h2>
    <div>
      <ListItem outerBorder>Stacks on deck, Patrón on ice</ListItem>
      <ListItem outerBorder>And we can pop bottles all night</ListItem>
      <ListItem outerBorder>Baby, you could have whatever you like</ListItem>
      <ListItem outerBorder>I said, you could have whatever you like</ListItem>
    </div>
    <h2>Links</h2>
    <div>
      <ListItem href="https://www.youtube.com/watch?v=nQJACVmankY" outerBorder>
        Stacks on deck, Patrón on ice
      </ListItem>
      <ListItem href="https://www.youtube.com/watch?v=nQJACVmankY" outerBorder>
        And we can pop bottles all night
      </ListItem>
      <ListItem href="https://www.youtube.com/watch?v=nQJACVmankY" outerBorder>
        Baby, you could have whatever you like
      </ListItem>
      <ListItem href="https://www.youtube.com/watch?v=nQJACVmankY" outerBorder>
        I said, you could have whatever you like
      </ListItem>
    </div>
  </>
);

outerBorders.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['ListGroup.test.js'],
  },
};

export const linkList = () => (
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
);

linkList.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['ListGroup.test.js'],
  },
};
