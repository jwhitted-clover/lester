import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  getSuites,
  selectSuiteNames,
  selectSuitesLoading,
  selectSuitesMessage,
  selectSuitesStatus,
} from '../../store/suites';

import { selectValue, setValue, VALUE } from '../../store/values';

const selectFilter = selectValue(VALUE.SUITES.FILTER);

const selectFilteredSuiteNames = createSelector(
  selectSuiteNames,
  selectFilter,
  (suites, filter) => (!filter ? suites : suites.filter(suite => suite.includes(filter)))
);

const select = state => ({
  filter: selectFilter(state),
  loading: selectSuitesLoading(state),
  message: selectSuitesMessage(state),
  names: selectFilteredSuiteNames(state),
  selected: selectValue(VALUE.SUITES.SELECTED)(state),
  status: selectSuitesStatus(state),
});

const boundActions = {
  getSuites,
  setFilter: setValue(VALUE.SUITES.FILTER),
  setSelected: setValue(VALUE.SUITES.SELECTED),
};

export default connect(
  select,
  boundActions
);
