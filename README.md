# HEX-A11Y

A selection of a11y helpful functions for working with hex colors.

- getContrastColor
- getContrastRatio
- getWcagScore


```bash
npm install hex-ally
```
## getContrastColor
Derives an accessible text color for a background.

```javascript
import { getContrastColor } from "hex-ally";

getContrastColor("#009aef"); // returns "#000000"

getContrastColor("#004165"); // returns "#ffffff"
```

By default, getContrastColor will return values for pure black (#000000) or pure white (#FFFFFF).

You can change this behaviour by providing values in the config argument...
```javascript
getContrastColor("#ff0000", { dark: '#232323', light: '#fafafa' }); // returns "#232323"
```

Here is a real-world example of how this could be used:

```javascript
import { getContrastColor } from "hex-ally";

const App = () => (
  <div css={{
    backgroundColor: "#004165"
  }}>
    <p css={{ color: getContrastColor("#004165") }}>
      Hello world
    </p>
  </div>
)
```



## getContrastRatio
Returns the contrast ratio between two colors.

```javascript
import { getContrastRatio } from "hex-ally";

getContrastRatio("#004165", '#ffffff'); // returns 13.31
```

## getWcagScore
Returns the WCAG score determined from two colors.
```javascript
import { getWcagScore } from "hex-ally";

getWcagScore("#004165", '#ffffff'); // returns "AAA"
```


## If you like this package...
You may also like [hexAlpha](https://github.com/nathsimpson/hex-alpha).
