# Visibility
Displays standardized visibility data. The value will be displayed with 'mi' for English
units or 'km' for Metric or Hybrid. If the value is greater than 10mi or 16km, the translated
'unlimited' string is displayed.

## Usage

```jsx
import { Visibility } from 'atom/WeatherData';

<Visibility
  className={styles.yourStyle} 
  visibility={visibility}
  units={units} 
/>
```
