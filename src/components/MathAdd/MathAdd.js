import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MathAdd extends Component {
  // eslint-disable-next-line no-unused-vars
  onClick = event => {
    const { add, value } = this.props;
    add({ value });
  };

  render() {
    const { value } = this.props;
    return (
      <button type="button" onClick={this.onClick}>
        +{value}
      </button>
    );
  }
}

MathAdd.propTypes = {
  value: PropTypes.number,
  // connect
  add: PropTypes.func.isRequired,
};

MathAdd.defaultProps = { value: 1 };

export default MathAdd;
