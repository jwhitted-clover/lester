import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectDefinitionsTestCases } from '../../store/definitions';
import { selectValue, setValue, VALUE } from '../../store/values';

const selectFilter = selectValue(VALUE.TEST_CASES.FILTER);

const selectFilteredTestCases = createSelector(
  selectDefinitionsTestCases,
  selectFilter,
  (testCases, filter) => (!filter ? testCases : (testCases || []).filter(({ key }) => key.includes(filter)))
);

const select = state => ({
  filter: selectFilter(state),
  selected: selectValue(VALUE.TEST_CASES.SELECTED)(state),
  testCases: selectFilteredTestCases(state),
});

const boundActions = {
  setFilter: setValue(VALUE.TEST_CASES.FILTER),
  setSelected: setValue(VALUE.TEST_CASES.SELECTED),
};

export default connect(
  select,
  boundActions
);
