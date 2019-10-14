# ListItem

## Usage

```jsx
import { ListItem } from 'atom/ListItem/ListItem';
```

```jsx
//Plain old formatted text list
<>
  <ListItem>
    {CONTENT}
  </ListItem>
  <ListItem>
    {CONTENT}
  </ListItem>
</>
//Plain old formatted text list with top and bottom borders. Useful if the list
// isn't otherwise visually contained.
<>
  <ListItem outerBorder="true">
    {CONTENT}
  </ListItem>
  <ListItem outerBorder="true">
    {CONTENT}
  </ListItem>
</>
// Link list
<>
  <ListItem href="/">
    {CONTENT}
  </ListItem>
  <ListItem href="/">
    {CONTENT}
  </ListItem>
</>
// Button List
<>
  <ListItem onClick={someFunction}>
    {CONTENT}
  </ListItem>
  <ListItem onClick={someFunction}>
    {CONTENT}
  </ListItem>
</>
```
