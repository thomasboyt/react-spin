# react-spin

[![Build Status](https://travis-ci.org/thomasboyt/react-spin.svg?branch=master)](https://travis-ci.org/thomasboyt/react-spin) [![npm](https://img.shields.io/npm/v/react-spin.svg)](https://www.npmjs.com/package/react-spin)

Tiny React wrapper around [spin.js](http://fgnass.github.io/spin.js/).

## Usage

```javascript
import React from 'react';
import Spinner from 'react-spin';

const MyComponent = React.createClass({
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
