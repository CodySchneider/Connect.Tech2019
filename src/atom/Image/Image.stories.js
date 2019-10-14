import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  text,
  select,
} from '@storybook/addon-knobs';
import { Image } from './Image';
import {
  aspectRatios,
  gifUrl,
  imgBaseUrls,
  deprecatedImgUrls,
} from './Image.test.const';
import readme from './README.md';

const stories = storiesOf('Atoms|Image', module);

stories.add(
  'Lazy Image (Default)',
  () => {
    const aspectRatio = select('Aspect Ratio', aspectRatios, '16:9');
    const src = text('src', imgBaseUrls[0]);

    return <Image src={src} alt="Generic Alt Text" ratio={aspectRatio} />;
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
);

stories.add(
  'Static Image (SSR)',
  () => {
    const aspectRatio = select('Aspect Ratio', aspectRatios, '16:9');
    const src = text('src', imgBaseUrls[0]);

    return (
      <Image
        lazy={false}
        src={src}
        width={320}
        sizes="100vw"
        alt="Generic Alt Text"
        ratio={aspectRatio}
      />
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
);

stories.add(
  'Animated GIF',
  () => {
    const aspectRatio = select('Aspect Ratio', aspectRatios, '16:9');
    const src = text('src', gifUrl);

    return <Image src={src} alt="Generic Alt Text" ratio={aspectRatio} />;
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
);

stories.add(
  'Rounded Corners',
  () => {
    const aspectRatio = select('Aspect Ratio', aspectRatios, '16:9');
    const src = text('src', imgBaseUrls[0]);

    return <Image src={src} rounded alt="Generic Alt Text" ratio={aspectRatio} />;
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
);

stories.add(
  'No SrcSet, Force Width',
  () => {
    const src = text('src', imgBaseUrls[0]);

    return (
      <>
        <h3>Lazy</h3>
        <Image
          src={src}
          srcSet={false}
          width={320}
          alt="Generic Alt Text"
          ratio="16:9"
        />
        <h3>SSR</h3>
        <Image
          lazy={false}
          src={src}
          srcSet={false}
          width={320}
          alt="Generic Alt Text"
          ratio="16:9"
        />
      </>
    );
  },
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
);

stories.add(
  'Deprecated URL conversion',
  () => (
    <>
      {deprecatedImgUrls.map((src, index) => (
        <Image
          key={`image_${index}`}
          src={src}
          alt="Generic Alt Tex"
          ratio="16:9"
        />
      ))}
    </>
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
);

stories.add(
  'Lazy Loading Multiple Images',
  () => (
    <>
      {imgBaseUrls.map((src, index) => (
        <Image
          key={`image_${index}`}
          src={src}
          alt="Generic Alt Tex"
          ratio="16:9"
        />
      ))}
    </>
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
);

stories.add(
  'Lazy Loading Multiple Images with Placeholder',
  () => (
    <>
      {imgBaseUrls.map((src, index) => (
        <Image
          key={`image_${index}`}
          src={src}
          placeholder
          alt="Generic Alt Tex"
          ratio="16:9"
        />
      ))}
    </>
  ),
  {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
);
