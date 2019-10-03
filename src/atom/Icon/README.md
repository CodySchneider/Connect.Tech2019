# Icon
 ## Usage

```jsx
<SomeComponent
  MenuIcon={<Icon set="ui" name="menu" theme="action" />}
>
```

 ```jsx
import { Icon } from 'atom/Icon/Icon';

class SomeComponent extends React.Component {
  ...

  ...
// in your render function
  render() {
    const { MenuIcon } = this.props;

    return (
      {MenuIcon}
   );
  };
};

 // Icon with dark theme
<Icon set="video" name="card-play" theme="dark" />

 // Icon with light theme
<Icon set="nav" name="radar-nav" theme="light" />

// WxIcon Example Full Theme
  <Icon set="wxicon" name="mostly-cloud" theme="full" />
// WxIcon Example Light Theme
  <Icon set="wxicon" name="mostly-cloud" theme="light" />

```

There are three valid themes: 'action', 'dark' and 'light'.


## Passing Classnames/Customizing Icons

If you wish to change the size, fill, stroke of your icon. You have to pass a className. Like so:

In your stylesheet:
```css
/* styles.scss */

.cloudIcon {
  width: 60px;
  fill: orange;
}
```

In your module:
```jsx
/* Module.js */
import { Icon } from 'atom/Icon/Icon';
import styles from './styles.scss';

 // Icon with custom styles
<Icon set="heads-up" name="cloud" className={styles.cloudIcon} />
```

The Icon component is configured to auto scale the height, so to change the size of the Icon, only need to set the width on your stylesheet.

If you wish to change the fill or stroke you might not want to specify a theme, or you can make any combinations with the pre-existing themes and your styles. It's up to you.

## Adding new icons to the library

* Make sure the svg is optimized as much as posible. Recommended to use the svgo cli.
  * For simple icons attributes 'fill' or 'stroke' can be safely removed, as the pre-existing themes will apply the fill property.
  * For more complex icons that require fill: 'none', stroke: 'none', in certain paths, might need to manually remove/add fill: 'none' to the appropiate paths AND set the strokes to stroke="currentColor". Then in the Icon.scss stylesheet add your svg name to the list, so that it sets the color property.
