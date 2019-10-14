# WeatherDetailsTable
This component displays a variety of weather data in a standard tabular format.

## Usage

```jsx
import DetailsTable from 'molecule/DaypartDetails/DetailsTable';

<DetailsTable
  {...weatherData}
/>

<DetailsTable
  units={units}
  temperatureFeelsLike={temperatureFeelsLike}
  windDirectionCardinal={windDirectionCardinal}
  windSpeed={windSpeed}
  precipChance={precipChance}
  precipType={precipType}
  relativeHumidity={relativeHumidity}
  pressureMeanSeaLevel={pressureMeanSeaLevel}
  pressureTendencyCode={pressureTendencyCode}
  uvIndex={uvIndex}
  visibility={visibility}
  sunriseTimeLocal={sunriseTimeLocal}
  sunsetTimeLocal={sunsetTimeLocal}
  moonriseTimeLocal={moonriseTimeLocal}
  moonsetTimeLocal={moonsetTimeLocal}
/>
```
