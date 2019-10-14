# Wind
Display standardized wind data. Direction can be displayed as an arrow icon or cardinal text string.

## Usage

```jsx
import { Wind } from 'atom/WeatherData';
```

Numerical Wind Direction displayed with Icon
```jsx
<Wind
  className={styles.yourStyle}
  windSpeed={windSpeed}
  windDirection={windDirection}
  units={units}
/>
```

Cardinal Wind Direction displayed as string
```jsx
<Wind
  className={styles.yourStyle}
  windSpeed={windSpeed}
  windDirectionCardinal={windDirectionCardinal}
  units={units}
/>
```
