import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'spin.js';
import createReactClass from 'create-react-class';

const ReactSpinner = createReactClass({
  propTypes: {
    config: PropTypes.object,
    stopped: PropTypes.bool
  },

  componentDidMount: function() {
    this.spinner = new Spinner(this.props.config);
    if (!this.props.stopped) {
      this.spinner.spin(this.refs.container);
    }
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.stopped === true && !this.props.stopped) {
      this.spinner.stop();
    } else if (!newProps.stopped && this.props.stopped === true) {
      this.spinner.spin(this.refs.container);
    }
  },

  componentWillUnmount: function() {
    this.spinner.stop();
  },

  render: function() {
    return (
      <span ref="container" />
    );
  }
});

export default ReactSpinner;
