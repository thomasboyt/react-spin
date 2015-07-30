var React = require('react');
var Spinner = require('spin.js');

var ReactSpinner = React.createClass({
  propTypes: {
    config: React.PropTypes.object,
    stopped: React.PropTypes.bool,
    style: React.PropTypes.object,
    spinner: React.PropTypes.object
  },

  componentDidMount: function() {
    this.spinner = new Spinner(this.props.config);
    this.spinner.spin(React.findDOMNode(this.refs.container));
  },

  componentWillReceiveProps: function(newProps) {

    if (this.props.stopped){
      return;
    }

    if (newProps.stopped){
      this.spinner.stop();
    }else {
      this.spinner.spin(React.findDOMNode(this.refs.container));
    }

  },

  componentWillUnmount: function() {
    this.spinner.stop();
  },

  render: function() {
    return (
      <div ref="container" style={this.props.style} />
    );
  }
});

module.exports = ReactSpinner;