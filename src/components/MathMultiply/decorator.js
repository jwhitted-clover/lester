import { connect } from 'react-redux';

import { multiply } from '../../store/math';

const selectors = state => ({});

const boundActions = { multiply };

export default connect(
  selectors,
  boundActions
);
