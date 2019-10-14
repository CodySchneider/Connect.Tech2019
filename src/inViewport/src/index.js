import get from 'lodash/get';

/**
Check whether an element is in the viewport

options.threshold: Set the ratio of an element's height and width that needs to
be visible for it to be considered in viewport. This defaults to 0, meaning any
amount. A threshold of 0.5 or 1 will require that half or all, respectively, of
an element's height and width need to be visible. threshold must be a number
between 0 and 1. Properties are optional and default to 0.
threshold: {
  x: 0.5,
  y: 0.5,
}

options.offset: By default, in-view considers something in viewport if it breaks
any edge of the viewport. This can be used to set an offset from that edge. For
example, an offset of 100 will consider elements in viewport if they break any
edge of the viewport by at least 100 pixels. Offset can be a positive or negative
integer. Properties are optional and default to 0.
offset: {
  top: 100,
  right: 100,
  bottom: 100,
  left: 100,
}
*/
export const inViewport = (element, options) => {
  if (!element) return;
  const {
    top,
    right,
    bottom,
    left,
    width,
    height,
  } = element.getBoundingClientRect();

  const intersection = {
    t: bottom,
    r: window.innerWidth - left,
    b: window.innerHeight - top,
    l: right,
  };

  const threshold = {
    x: get(options, 'threshold.x', 0) * width,
    y: get(options, 'threshold.y', 0) * height,
  };

  const offset = {
    top: get(options, 'offset.top', 0),
    right: get(options, 'offset.right', 0),
    bottom: get(options, 'offset.bottom', 0),
    left: get(options, 'offset.left', 0),
  };

  return intersection.t > (offset.top + threshold.y)
      && intersection.r > (offset.right + threshold.x)
      && intersection.b > (offset.bottom + threshold.y)
      && intersection.l > (offset.left + threshold.x);
};
