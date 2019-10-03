# Button

## Usage

```jsx
import Button from 'atom/Button/Button';

// Button with action
<Button
  theme="secondary"
  disabled={disabled}
  onClick={() => console.log('Hello World'))}>
  See More
</Button>


// Button with href, renders as an anchor
<Button
  disabled={disabled}
  href="weather.com">
  Home
</Button>

// Button with only Icon content, use ariaLabel
<Button
  theme="primary"
  disabled={disabled}
  href="weather.com"
  ariaLabel="Close"
>
  <Icon set="ui" name="close" theme="action" />
</Button>
```
