# Precip
Display standardized precipitation accumulation data. For English units, snow and rain data are both
reperesented with 'in'. Metric or hybrid uses 'mm' for rain and 'cm' for snow.

## Usage

 ```jsx
import { Accumulation } from 'atom/WeatherData';

Rain
<Accumulation
  className={styles.yourStyle}
  rain={qpf}
  units={units}
/>

Snow
<Accumulation
  className={styles.yourStyle}
  snow={qpfSnow}
  units={units}
/>
```
