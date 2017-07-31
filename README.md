# react-spin

Tiny React wrapper around [spin.js](http://fgnass.github.io/spin.js/).

## Usage

```javascript
import React from 'react';
import Spinner from 'react-tiny-spin';

const spinCfg = {
  width: 12,
  radius: 35,
  // ...
};

class MyComponent extends React.Component {
  render() {
    return <Spinner config={spinCfg} />
  }
}
```

## Properties

<table>
  <tr>
    <td><code>config</code></td>
    <td>Spin.js configuration object. See <a href="http://fgnass.github.io/spin.js/">here</a> for options.</td>
  </tr>
  <tr>
    <td><code>stopped</code></td>
    <td>Boolean indicating whether the spinner is stopped or not. Can be toggled on and off.
  </tr>
</table>
