Tiny React wrapper around [spin.js](http://fgnass.github.io/spin.js/).

## Usage

```javascript
/** @jsx React.DOM */
var React = require('react');
var Spinner = require('react-spin');

var MyComponent = React.createClass({
  render: function() {
    return <Spinner config={spinCfg} />
  }
});
```
