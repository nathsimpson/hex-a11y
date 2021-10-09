# HEX-A11Y

A really simple package that derives an accessible text color for a background

```javascript
import hexAlly from "hex-ally";

hexAlly("#ffffff"); // returns "#000000"

hexAlly("#000000"); // returns "#ffffff"
```

Here is a real-world example of how this could be used:
```javascript
import getA11yColor from "hex-ally";

const App = () => (
  <div css={{
    backgroundColor: '#009aef'
  }}>
    <p css={{ color: getA11yColor('#009aef') }}>
      Hello world
    </p>
  </div>
)
```

## Installation

```bash
npm install hex-alpha
```
or if you prefer using yarn
```
yarn add hex-alpha
```

## Configuration

By default, hexAlly will return values for pure black (#000000) or pure white (#FFFFFF).

You can change this behaviour by providing values in the config argument...
```javascript
hexAlly("#f00", { dark: '#121212', light: '#fafafa' }); // returns "#232323"
```

A word of warning - this does not change the behaviour of the algorithm! only what the function returns.

This might be useful if your designs use near-black and near-white greys for text, so avoid using 'middle greys', or you may experience some unexpected results.


## If you like this package...
You may also like [hexAlpha](https://github.com/nathsimpson/hex-alpha).
