import React from 'react';
import { mount } from 'enzyme';
import { Image } from './Image';
import {
  deprecatedImgUrls,
  imgBaseUrls,
  gifUrl,
  edgeCaseUrls,
} from './Image.test.const';

// TODO: I couldn't get IntersectionObserver mock working for lazy load tests
// beforeAll(() => {
//   jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());
//   window.IntersectionObserver = jest.fn(function IntersectionObserver() {
//     this.observe = jest.fn();
//     this.unobserve = jest.fn();
//   });
// });
// afterAll(() => {
//   window.requestAnimationFrame.mockRestore();
// });

// TODO: Move this to somewhere it can be used as a testing utility
// This function can be used to confirm PropType validations
const testPropTypes = (component, propName, arraysOfTestValues, otherProps) => {
  console.error = jest.fn();
  const _test = (testValues, expectError) => {
    for (const propValue of testValues) {
      console.error.mockClear();
      React.createElement(component, { ...otherProps, [propName]: propValue });
      expect(console.error).toHaveBeenCalledTimes(expectError ? 1 : 0);
    }
  };

  _test(arraysOfTestValues[0], false);
  _test(arraysOfTestValues[1], true);
};


test('Converts Base Image URL to HTTPS', () => {
  const component = mount(<Image ratio="16:9" src="" />);

  deprecatedImgUrls.forEach((deprecatedUrl) => {
    component.setProps({ src: deprecatedUrl });
    expect(component.instance().baseImageUrl).toContain('https:');
  });
  component.unmount();
});

test('Strip deprecated query params from Base Image URL', () => {
  const component = mount(<Image ratio="16:9" src="" />);

  deprecatedImgUrls.forEach((deprecatedUrl) => {
    component.setProps({ src: deprecatedUrl });
    expect(component.instance().baseImageUrl).not.toContain('?');
  });
  component.unmount();
});

test('Convert deprecated domains to Fastly (s.w-x.co)', () => {
  const component = mount(<Image ratio="16:9" src="" />);

  deprecatedImgUrls.forEach((deprecatedUrl) => {
    component.setProps({ src: deprecatedUrl });
    expect(component.instance().baseImageUrl).not.toContain('dsx.weather.com');
    expect(component.instance().baseImageUrl).toContain('s.w-x.co');
  });
  component.unmount();
});

test('URI encode image src', () => {
  const component = mount(<Image ratio="16:9" src={edgeCaseUrls.spacesInFileName} />);

  expect(component.instance().baseImageUrl).toBe('https://s.w-x.co/util/image/w/RARE%20WHITE%20LION%20CUB.00_00_39_20.Still001_0.jpg');

  component.unmount();
});

test('Provide a default srcset and fallback src for SSR images', () => {
  const component = mount(<Image ratio="16:9" lazy={false} width={320} sizes="100vw" src={imgBaseUrls[0]} />);

  expect(component.instance().srcSet).toBe('https://s.w-x.co/marscuriositydrawing.jpg?crop=16:9&format=pjpg&auto=webp&quality=60&width=80 80w,https://s.w-x.co/marscuriositydrawing.jpg?crop=16:9&format=pjpg&auto=webp&quality=60&width=160 160w,https://s.w-x.co/marscuriositydrawing.jpg?crop=16:9&format=pjpg&auto=webp&quality=60&width=240 240w,https://s.w-x.co/marscuriositydrawing.jpg?crop=16:9&format=pjpg&auto=webp&quality=60&width=320 320w,https://s.w-x.co/marscuriositydrawing.jpg?crop=16:9&format=pjpg&auto=webp&quality=60&width=480 480w,https://s.w-x.co/marscuriositydrawing.jpg?crop=16:9&format=pjpg&auto=webp&quality=60&width=640 640w,https://s.w-x.co/marscuriositydrawing.jpg?crop=16:9&format=pjpg&auto=webp&quality=60&width=800 800w,https://s.w-x.co/marscuriositydrawing.jpg?crop=16:9&format=pjpg&auto=webp&quality=60&width=980 980w');
  expect(component.instance().src).toBe('https://s.w-x.co/marscuriositydrawing.jpg?crop=16:9&format=pjpg&auto=webp&quality=60&width=320');
  component.unmount();
});

test('Allow srcSet over-ride for SSR', () => {
  const srcSet = 'https://s.w-x.co/marscuriositydrawing.jpg?crop=16:9&format=pjpg&auto=webp&quality=60&width=80 80w';
  const component = mount(<Image ratio="16:9" lazy={false} width={320} sizes="100vw" src={imgBaseUrls[0]} srcSet={srcSet} />);

  expect(component.instance().srcSet).toBe(srcSet);
  component.setProps({ srcSet: false });
  expect(component.instance().srcSet).toBe(false);

  component.unmount();
});

// TODO: I couldn't get IntersectionObserver mock working for lazy load tests
// test('Allow srcSet over-ride for Lazy Images', () => {
//   const srcSet = 'https://s.w-x.co/marscuriositydrawing.jpg?crop=16:9&format=pjpg&auto=webp&quality=60&width=80 80w';
//   const component = mount(<Image ratio="16:9" src={imgBaseUrls[0]} srcSet={srcSet} />);

//   component.instance().intersectionObserverHandler([{ isIntersecting: true }]);
//   expect(component.instance().srcSet).toBe(srcSet);

//   component.unmount();
// });

test('Lazy images should have not have src or srcSet defined on load', () => {
  const component = mount(<Image ratio="16:9" lazy src={imgBaseUrls[0]} />);

  expect(component.instance().src).toBe(null);
  expect(component.instance().srcSet).toBe(null);
  component.unmount();
});

test('Animated GIF src should be cropped but not have srcSet, sizes, or any Url options', () => {
  const component = mount(<Image ratio="16:9" lazy={false} src={gifUrl} width={320} />);

  expect(component.instance().src).toBe(`${gifUrl}?crop=16:9&width=320`);
  expect(component.instance().srcSet).toBe(false);
  expect(component.instance().sizes).toBe(false);
  component.unmount();
});

test('Lazy Image should calculate closest Image breakpoint width', () => {

  const component = mount(<Image ratio="16:9" lazy src={gifUrl} />);

  component.setState({ domWidth: 120 });
  expect(component.instance().currentBreakpoint).toBe(80);
  component.setState({ domWidth: 121 });
  expect(component.instance().currentBreakpoint).toBe(160);
  component.unmount();
});

test('Should warn if width is not a valid breakpoint', () => {

  const testValues = [
    [80, 160], // acceptable values
    [120], // unacceptable values
  ];

  testPropTypes(Image, 'width', testValues, { src: imgBaseUrls[0] });
});

test('Support Fastly automatic WebP formatting', () => {

  const component = mount(<Image ratio="16:9" src={imgBaseUrls[0]} />);

  // Auto WebP by default
  expect(component.instance().imageUrlWithOptions).toContain('&auto=webp');

  // Can be disabled
  component.setProps({ autoWebP: false });
  expect(component.instance().imageUrlWithOptions).not.toContain('&auto=webp');
  component.unmount();
});

test('Support Fastly image formatting', () => {

  const component = mount(<Image ratio="16:9" src={imgBaseUrls[0]} />);

  // Progressive JPG by default
  expect(component.instance().imageUrlWithOptions).toContain('&format=pjpg');

  // Allow format over-ride
  component.setProps({ format: 'png' });
  expect(component.instance().imageUrlWithOptions).toContain('&format=png');

  component.unmount();
});

test('Support Fastly image compression', () => {

  const component = mount(<Image ratio="16:9" src={imgBaseUrls[0]} />);

  // 60% compression by default
  expect(component.instance().imageUrlWithOptions).toContain('&quality=60');

  // Allow format over-ride
  component.setProps({ quality: 30 });
  expect(component.instance().imageUrlWithOptions).toContain('&quality=30');

  component.unmount();
});

test('Crop to aspect ratio', () => {

  const component = mount(<Image src={imgBaseUrls[0]} />);

  // 16:9 aspect ratio by default
  expect(component.instance().imageUrlWithOptions).toContain('crop=16:9');

  // Allow for other aspect ratios
  component.setProps({ ratio: '4:3' });
  expect(component.instance().imageUrlWithOptions).toContain('crop=4:3');
  component.setProps({ ratio: '1:1' });
  expect(component.instance().imageUrlWithOptions).toContain('crop=1:1');

  component.unmount();
});

test.todo('Write more Tests!');
