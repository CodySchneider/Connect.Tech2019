# Pressure
Display standardized barometric pressure data. Accepts either `pressureMeanSeaLevel` or `pressureAltimeter`
prop values for consistency with possible SUN field names. Pressure values will be displayed in 'in'
and rounded to 2 decimal places for English or 'mb' rounded to a single decimal place for metric or
hybrid units. If a pressureTendencyCode is provided an arrow icon will be rendered depicting the trend.

## Usage

* The SUNV3CurrentObservations record always provides pressureMeanSeaLevel in 'mb' 
and should always provide units prop as 'm'

```jsx
import { Pressure } from 'atom/WeatherData';

<Pressure
  className={styles.yourStyle} 
  pressureAltimeter={pressureAltimeter}
  pressureMeanSeaLevel={pressureMeanSeaLevel}
  pressureTendencyCode={pressureTendencyCode}
  units={units}
/>
```
