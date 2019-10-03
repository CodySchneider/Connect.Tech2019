# Weather Icons

Weather Icons are special icons, in the sense they are composed out of svgs from the WeatherIconSprite. They only have two themes configured, 'full' and 'light'. But you can still customized them by passing your custom styles.

## Usage

```jsx
import { Icon } from 'atom/Icon/Icon';

<Icon set="weather" name="mostly-cloud" theme="full" />

<Icon set="weather" skyCode={12} theme="full" />
```

## WeatherIcon names/codes map

```js
{
  0: 'tornado',
  1: 'tropical-storm',
  2: 'tropical-storm',
  3: 'thunderstorm',
  4: 'thunderstorm',
  5: 'rain-snow',
  6: 'rain-hail',
  7: 'rain-snow',
  8: 'freezing-drizzle',
  9: 'scattered-showers',
  10: 'rain-hail',
  11: 'scattered-showers',
  12: 'rain',
  13: 'flurries',
  14: 'snow',
  15: 'blowing-snow',
  16: 'snow',
  17: 'hail',
  18: 'hail',
  19: 'foggy',
  20: 'foggy',
  21: 'foggy',
  22: 'foggy',
  23: 'wind',
  24: 'wind',
  25: 'blowing-snow',
  26: 'cloudy',
  27: 'mostly-cloudy-night',
  28: 'mostly-cloudy',
  29: 'partly-cloudy-night',
  30: 'partly-cloudy',
  31: 'clear-night',
  32: 'sunny',
  33: 'mostly-clear-night',
  34: 'mostly-sunny',
  35: 'rain-hail',
  36: 'sunny',
  37: 'isolated-thunderstorms',
  38: 'scattered-thunderstorms',
  39: 'scattered-showers',
  40: 'heavy-rain',
  41: 'scattered-snow',
  42: 'heavy-snow',
  43: 'heavy-snow',
  44: 'na',
  45: 'scattered-showers-night',
  46: 'scattered-snow-night',
  47: 'scattered-thunderstorms-night',
}
```
