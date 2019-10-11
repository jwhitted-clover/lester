import { connect } from 'react-redux';

import { selectDefinitionsTestCases } from '../../store/definitions';
import { selectValue, setValue } from '../../store/values';

const SELECTED = 'selectedTestCase';

const select = state => ({
  selected: selectValue(SELECTED)(state),
  testCases: selectDefinitionsTestCases(state),
});

const boundActions = { setSelected: setValue(SELECTED) };

export default connect(
  select,
  boundActions
);
