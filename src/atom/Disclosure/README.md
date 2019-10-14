# Disclosure
This component is used to created expandable text blocks. It can be conrolled externally via the `open` prop or it will manage its own state.

## Usage

```jsx
import { Disclosure } from 'atom/Disclosure/Disclosure';


<Disclosure
  title="Summary Text"
  className={className}
  open={open}
  onToggle={onToggle}
>
  This is the content of the Disclosure widget.
</Disclosure>
```
