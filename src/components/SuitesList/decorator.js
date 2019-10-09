import { connect } from 'react-redux';

import {
  getSuites,
  selectSuiteNames,
  selectSuitesLoading,
  selectSuitesMessage,
  selectSuitesSelected,
  selectSuitesStatus,
  setSelectedSuite,
} from '../../store/suites';

const select = state => ({
  loading: selectSuitesLoading(state),
  message: selectSuitesMessage(state),
  names: selectSuiteNames(state),
  selected: selectSuitesSelected(state),
  status: selectSuitesStatus(state),
});

const boundActions = {
  getSuites,
  setSelectedSuite,
};

export default connect(
  select,
  boundActions
);
