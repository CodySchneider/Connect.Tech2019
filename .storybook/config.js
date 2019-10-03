import { configure } from '@storybook/react';

configure(require.context('../src/atom', true, /\.stories\.js$/), module);