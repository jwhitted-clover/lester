import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectDefinitionsTestCases } from '../../store/definitions';
import { selectValue, VALUE } from '../../store/values';

const selectName = selectValue(VALUE.TEST_CASES.SELECTED);

const selectTestCase = createSelector(
  selectDefinitionsTestCases,
  selectName,
  (testCases, name) => {
    if (!testCases) return undefined;
    const testCase = testCases.find(({ key }) => key === name) || {};
    return testCase.value;
  }
);

const select = state => ({
  name: selectName(state),
  testCase: selectTestCase(state),
});

const boundActions = {};

export default connect(
  select,
  boundActions
);
