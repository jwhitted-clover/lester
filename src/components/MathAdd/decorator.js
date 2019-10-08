import { connect } from 'react-redux';

import { add } from '../../store/math';

const selectors = state => ({});

const boundActions = { add };

export default connect(
  selectors,
  boundActions
);
