import React from 'react';
import PropTypes from 'prop-types';

import './stylesheet.css';

const MathResult = ({ reset, result, formula }) => (
  <div className="MathResult">
    <div>
      Formula: <code>{formula}</code>
    </div>
    <div>
      Result: <code>{result}</code>
    </div>
    <div>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  </div>
);

MathResult.propTypes = {
  // connect
  result: PropTypes.number.isRequired,
  formula: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
};

MathResult.defaultProps = {};

export default MathResult;
