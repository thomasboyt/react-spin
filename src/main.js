import React, { Component, PropTypes } from 'react';
import Spinner from 'spin.js';

class ReactSpinner extends Component {
  propTypes: {
    config: PropTypes.object,
    stopped: PropTypes.bool
  }

  componentDidMount() {
    this.spinner = new Spinner(this.props.config);
    if (!this.props.stopped) {
      this.spinner.spin(this.refs.container);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.stopped === true && !this.props.stopped) {
      this.spinner.stop();
    } else if (!newProps.stopped && this.props.stopped === true) {
      this.spinner.spin(this.refs.container);
    }
  }

  componentWillUnmount() {
    this.spinner.stop();
  }

  render() {
    return (
      <span ref="container" />
    );
  }
}

export default ReactSpinner;
