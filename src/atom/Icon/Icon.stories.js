import React from 'react';
import { select, number } from '@storybook/addon-knobs';
import { Icon } from './Icon';
import { getSkycodeFromName } from 'skycode';
import readme from './README.md';
import weatherIconReadme from './README-WeatherIcon.md';

import styles from './Icon.stories.scss';

const reqSvgs = require.context('./svg', true, /\.svg$/);

export const wxIconSet = [];

// Object with all the sets and their respective icon names.
// Except for the weather icon set. Which it's in wxIconSet.
export const sets = reqSvgs
  .keys()
  .reduce((set, path) => {
    const setName = path.replace(/.\/(.*)\/(.*).svg/, '$1');
    const iconName = path.replace(/.\/(.*)\/(.*).svg/, '$2');

    if (path.includes('weather')) {
      wxIconSet.push(iconName);
      return set;
    }

    if (!set[setName]) {
      set[setName] = [];
    }
    set[setName] = [...set[setName], iconName];
    return set;
  }, {});

const themes = {
  action: 'action',
  dark: 'dark',
  light: 'light',
};

const widthRange = {
  range: true,
  min: 1,
  max: 1500,
  step: 1,
};

export default {
  title: 'Atoms|Icon',
  excludeStories: ['wxIconSet', 'sets'],
};

export const individualIcon = () => {
    const width = number('Icon Size', 40, widthRange);
    const setName = select('Icon Set', Object.keys(sets), 'current-conditions');
    const iconNames = sets[setName];
    const iconName = select('Icon Name', iconNames, iconNames[0]);
    const theme = select('UI Theme', themes, 'action');

    return (
      displayIndividual(setName, iconName, theme, width)
    );
  };

individualIcon.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};


export const individualWeatherIcons = () => {
    const skyCodeOptions = {
      range: true,
      min: 0,
      max: 47,
      step: 1,
    };
    const width = number('Icon Size', 40, widthRange);
    const propSelected = select(
      'Prop Type',
      { 'By SkyCode': 'skyCode', 'By Name': 'iconName' },
      'iconName',
    );

    let iconName = '';

    let skyCode = '';

    if (propSelected === 'iconName') {
      iconName = select('Icon Name', wxIconSet, 'freezing-drizzle');
    } else {
      skyCode = number('Icon Code', 0, skyCodeOptions);
    }
    const setName = 'weather';
    const wxThemes = ['full', 'light'];
    const theme = select('UI Theme', wxThemes, wxThemes[0]);

    return (
      displayIndividual(setName, iconName, theme, width, skyCode)
    );
  };

individualWeatherIcons.story = {
  parameters: {
    readme: {
      sidebar: `${weatherIconReadme}<!-- PROPS -->`,
    },
  },
};

const displayIndividual = (setName, iconName, theme, width, skyCode = null) => (
  <span
    style={{ width }}
    className={`
    ${styles.iconContainer}
      ${theme === 'light' ? styles.darkBackground : ''}`}
  >
    <Icon
      set={setName}
      skycode={skyCode}
      name={iconName}
      theme={theme}
      className={styles.invidivualIcon}
      width={width}
    />
  </span>
);


export const allIconsStory = () => {
    const theme = select('UI Theme', themes, 'action');

    return (
      Object.keys(sets).map(setName => (
        displaySet(sets[setName], setName, theme)
      ))
    );
  };

allIconsStory.story = {
  name: 'All Icons',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
  },
};


export const allWeatherIcons = () => {
    const setName = 'weather';
    const wxThemes = ['full', 'light'];
    const theme = select('UI Theme', wxThemes, wxThemes[0]);

    return (
      displaySet(wxIconSet, setName, theme, true)
    );
  };

allWeatherIcons.story = {
  parameters: {
    readme: {
      sidebar: `${weatherIconReadme}<!-- PROPS -->`,
    },
  },
};

const getIconName = (name, addSkycode) => {
  const skyCode = getSkycodeFromName(name);

  if (skyCode && addSkycode) return `${skyCode}: `;

  return '';
};

const displaySet = (set, setName, theme, addSkycode) => (
  <div>
    <h1>{setName}</h1>
    <div className={styles.setContainer}>
      {
        set.map(iconName => (
          <span
            className={`${styles.allIcons}
              ${theme === 'light' ? [styles.darkBackground] : ''}`}
          >
            <Icon
              name={iconName}
              set={setName}
              theme={theme}
              className={styles.customIcon}

            />
            <span className={styles.iconName}>
              {`${getIconName(iconName, addSkycode)}
               ${iconName}`}
            </span>
          </span>
        ))
      }
    </div>
    <br />
  </div>
);
