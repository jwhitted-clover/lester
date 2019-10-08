import { connect } from 'react-redux';

import { multiply } from '../../store/math';

// eslint-disable-next-line no-unused-vars
const selectors = state => ({});

const boundActions = { multiply };

export default connect(
  selectors,
  boundActions
);
