Tiny React wrapper around [spin.js](http://fgnass.github.io/spin.js/).

## Usage

```javascript
/** @jsx React.DOM */
var React = require('react');
var Spinner = require('react-spin');

var MyComponent = React.createClass({
  render: function() {
    var spinCfg = {
      width: 12,
      radius: 35,
      // ...
    };
    return <Spinner config={spinCfg} />
  }
});
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
