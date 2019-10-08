import { connect } from 'react-redux';

import { reset, selectMathResult, selectMathFormula } from '../../store/math';

const selectors = state => ({
  result: selectMathResult(state),
  formula: selectMathFormula(state),
});

const boundActions = { reset };

export default connect(
  selectors,
  boundActions
);
