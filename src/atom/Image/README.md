# Image

This component is meant to be an interface for Fastly based responsive images. This covers any images that are available on the s.w-x.co domain. It provides lazy loading as well as deafult responsive image cuts and standard image optimization settings.

## Usage

```jsx
import { Image } from '@wxu/components/src/atom/Image/Image';

// Default Lazy Load

<Image src={src} alt="Generic Alt Text" />

// Default Server Side Render

<Image
  lazy={false}
  src={src}
  width={320}
  sizes="???vw"
  alt="Generic Alt Text"
/>
```
