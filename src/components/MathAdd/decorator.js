import { connect } from 'react-redux';

import { add } from '../../store/math';

// eslint-disable-next-line no-unused-vars
const selectors = state => ({});

const boundActions = { add };

export default connect(
  selectors,
  boundActions
);
