import React from 'react';
import {
  configure,
  addDecorator,
  addParameters,
} from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { addReadme, configureReadme } from 'storybook-readme';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';
import { WeatherIconSprite } from 'atom/Icon/WeatherIconSprite';
import './normalize.css';
import { enUS } from './__mocks__/i18n.const';

// Add translation mock
window.__i18n = enUS;

configureReadme({
  /**
   * Wrapper for story. Usually used to set some styles
   * This removes some weird default wrapper from Readme addon
   */
  StoryPreview: ({ children }) => <div>{children}</div>,
});

// Initialize Addons
[
  withA11y,
  withKnobs({
    escapeHTML: false,
  }),
  addReadme,
  withTests({
    results,
  }),
].forEach(addDecorator);

// Example of how to add a wrapper to every Story
addDecorator(story => (
  <div>
    <WeatherIconSprite />
    {story()}
  </div>
));

// All the available Storybook config options for your hacking pleasure
addParameters({
  readme: {
    codeTheme: 'hopscotch',
  },
  options: {
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'Connect.Tech 2019',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    // url: '#',
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    // goFullScreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    // showStoriesPanel: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    // showAddonPanel: true,
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    // showSearchBox: false,
    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean}
     */
    addonPanelInRight: true,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    // hierarchySeparator: null,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    // hierarchyRootSeparator: null,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    // sidebarAnimations: true,
    /**
     * id to select an addon panel
     * @type {String}
     */
    // selectedPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    // enableShortcuts: false, // true by default
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    // isToolshown: false, // true by default
  },

});

// Tell webpack where your $417 is
configure(require.context('../src', true, /\.stories\.js$/), module);
