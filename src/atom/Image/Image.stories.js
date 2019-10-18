import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { Image } from './Image';
import { aspectRatios, gifUrl, imgBaseUrls, deprecatedImgUrls } from './Image.test.const';
import readme from './README.md';

export default { title: 'Atoms|Image' };

export const lazyImageDefault = () => {
  const aspectRatio = select('Aspect Ratio', aspectRatios, '16:9');
  const src = text('src', imgBaseUrls[0]);

  return <Image src={src} alt="Generic Alt Text" ratio={aspectRatio} />;
};

lazyImageDefault.story = {
  name: 'Lazy Image (Default)',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
};

export const staticImageSsr = () => {
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
};

staticImageSsr.story = {
  name: 'Static Image (SSR)',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
};

export const animatedGif = () => {
  const aspectRatio = select('Aspect Ratio', aspectRatios, '16:9');
  const src = text('src', gifUrl);

  return <Image src={src} alt="Generic Alt Text" ratio={aspectRatio} />;
};

animatedGif.story = {
  name: 'Animated GIF',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
};

export const roundedCorners = () => {
  const aspectRatio = select('Aspect Ratio', aspectRatios, '16:9');
  const src = text('src', imgBaseUrls[0]);

  return <Image src={src} rounded alt="Generic Alt Text" ratio={aspectRatio} />;
};

roundedCorners.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
};

export const noSrcSetForceWidth = () => {
  const src = text('src', imgBaseUrls[0]);

  return (
    <>
      <h3>Lazy</h3>
      <Image src={src} srcSet={false} width={320} alt="Generic Alt Text" ratio="16:9" />
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
};

noSrcSetForceWidth.story = {
  name: 'No SrcSet, Force Width',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
};

export const deprecatedUrlConversion = () => (
  <>
    {deprecatedImgUrls.map((src, index) => (
      <Image key={`image_${index}`} src={src} alt="Generic Alt Tex" ratio="16:9" />
    ))}
  </>
);

deprecatedUrlConversion.story = {
  name: 'Deprecated URL conversion',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
};

export const lazyLoadingMultipleImages = () => (
  <>
    {imgBaseUrls.map((src, index) => (
      <Image key={`image_${index}`} src={src} alt="Generic Alt Tex" ratio="16:9" />
    ))}
  </>
);

lazyLoadingMultipleImages.story = {
  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
};

export const lazyLoadingMultipleImagesWithPlaceholder = () => (
  <>
    {imgBaseUrls.map((src, index) => (
      <Image key={`image_${index}`} src={src} placeholder alt="Generic Alt Tex" ratio="16:9" />
    ))}
  </>
);

lazyLoadingMultipleImagesWithPlaceholder.story = {
  name: 'Lazy Loading Multiple Images with Placeholder',

  parameters: {
    readme: {
      sidebar: `${readme}<!-- PROPS -->`,
    },
    jest: ['Image.test.js'],
  },
};
