import { connect } from 'react-redux';

import {
  getSuites,
  selectSuitesLoading,
  selectSuitesSelected,
  selectSuiteNames,
  setSelectedSuite,
} from '../../store/suites';

const selectors = state => ({
  loading: selectSuitesLoading(state),
  names: selectSuiteNames(state),
  selected: selectSuitesSelected(state),
});

const boundActions = {
  getSuites,
  setSelectedSuite,
};

export default connect(
  selectors,
  boundActions
);
