import { connect } from 'react-redux';

import {
  getSuites,
  selectSuiteNames,
  selectSuitesLoading,
  selectSuitesMessage,
  selectSuitesStatus,
} from '../../store/suites';

import { selectValue, setValue } from '../../store/values';

const SELECTED = 'selectedSuite';

const select = state => ({
  loading: selectSuitesLoading(state),
  message: selectSuitesMessage(state),
  names: selectSuiteNames(state),
  selected: selectValue(SELECTED)(state),
  status: selectSuitesStatus(state),
});

const boundActions = {
  getSuites,
  setSelected: setValue(SELECTED),
};

export default connect(
  select,
  boundActions
);
