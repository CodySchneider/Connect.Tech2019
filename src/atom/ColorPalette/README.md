# Color Palette

## SASS Usage
When using colors from the global palette in your sass files you will need to import the variables in your stylesheet.
```
@import '../ColorPalette/_ColorPalette.vars.scss';
```
When referencing variables that are structured in an associative array, you will neeed to use map-get.
```
map-get($fills, borderColor)
```
If you need to use these vars in conjunction with CSS variables, you will need to wrap them in hash notation.
```
--border-color: #{map-get($fills, borderColor)};
```

## JS Usage
We have configured webpack to load SASS vars via JS import with the [sass-vars-to-js-loader](https://github.com/Eiskis/sass-values-loader). If you need to reference colors in your JS files you can import them like so:
```
import colors from '@wxu/components/src/ColorPalette/_ColorPalette.vars.scss';
```
Variable names will automatically be converted to camelCase. Colors are converted to an rgba object. This should be fine for most use cases.
```
{
  "r":232,
  "g":128,
  "b":16,
  "a":1,
  "rgba":"rgba(232, 128, 16, 1)"
}
```

## Adding new colors
Adding new colors is easy. Just add a new definition to `ColorPalette.vars.scss`. The Palette story will automatically be updated with your additions.