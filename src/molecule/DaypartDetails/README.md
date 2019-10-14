# DaypartDetails
This component displays data from the SunV3DailyForecast and SunV3HourlyForecast records

## Usage

```jsx
import { DaypartDetails } from 'molecule/DaypartDetails/DaypartDetails';

<DaypartDetails
  open={open}
  summary={summary}
  day={day}
  night={night}
/>

<DaypartDetails
  open={open}
  summary={summary}
  hourly={hourly}
/>
```

## Example Day/Night Data Structure

```js
export const WEATHER_DATA_DAY = {
  units: 'e',
  daypartName: 'Today',
  narrative: 'Abundant sunshine. Near record high temperatures. High 94F. Winds NW at 5 to 10 mph.',
  temperature: 103,
  iconCode: 32,
  temperatureFeelsLike: 100,
  windDirectionCardinal: 'ESE',
  windSpeed: 166,
  precipChance: 100,
  precipType: 'rain',
  relativeHumidity: 100,
  uvIndex: 8,
  sunriseTimeLocal: '5:00 am',
  sunsetTimeLocal: '8:00 pm',
};
```

## Example Hourly Data Structure

```js
export const WEATHER_DATA_HOURLY = {
  units: 'e',
  temperatureFeelsLike: 100,
  windDirectionCardinal: 'ESE',
  windSpeed: 166,
  relativeHumidity: 100,
  uvIndex: 8,
  wxPhraseLong: 'Light Rain',
};
```

## Example Summary Data Structure

```js
export const SUMMARY_DATA_DAILY = {
  daypartName: 'Today',
  temperatureMax: 110,
  temperatureMin: 103,
  iconCode: 38,
  precipChance: 100,
};

export const SUMMARY_DATA_HOURLY = {
  daypartName: '12 pm',
  temperature: 103,
  iconCode: 33,
  precipChance: 100,
};
```

