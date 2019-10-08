import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MathMultiply extends Component {
  // eslint-disable-next-line no-unused-vars
  onClick = event => {
    const { multiply, value } = this.props;
    multiply({ value });
  };

  render() {
    const { value } = this.props;
    return (
      <button type="button" onClick={this.onClick}>
        x {value}
      </button>
    );
  }
}

MathMultiply.propTypes = {
  value: PropTypes.number,
  // connect
  multiply: PropTypes.func.isRequired,
};

MathMultiply.defaultProps = { value: 2 };

export default MathMultiply;
