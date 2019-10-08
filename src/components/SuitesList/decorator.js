import { connect } from 'react-redux';

import { getSuites, selectSuitesLoading, selectSuiteNames } from '../../store/suites';

const selectors = state => ({
  loading: selectSuitesLoading(state),
  names: selectSuiteNames(state),
});

const boundActions = { getSuites };

export default connect(
  selectors,
  boundActions
);
