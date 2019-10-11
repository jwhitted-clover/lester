import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectDefinitionsTestCases } from '../../store/definitions';
import { selectValue } from '../../store/values';

const SELECTED = 'selectedTestCase';

const selectName = selectValue(SELECTED);

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
