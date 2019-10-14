# Temperature
Display standardized temperature data rounded to the nearest integer. Can also be used to display just the temperature units.

## Usage

 ```jsx
import { Temperature } from 'atom/WeatherData';

With Units
<Temperature
  className={styles.yourStyle}
  value={temperature}
  units={units} 
/>

Units Only
<Temperature
  className={styles.yourStyle}
  units={units} 
/>
```
