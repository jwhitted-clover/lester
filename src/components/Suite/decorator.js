import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectSuites } from '../../store/suites';
import { selectValue, setValue, VALUE } from '../../store/values';

const selectName = selectValue(VALUE.SUITES.SELECTED);

const selectSuite = createSelector(
  selectSuites,
  selectName,
  (suites, name) => suites[name]
);

const select = state => ({
  name: selectName(state),
  suite: selectSuite(state),
});

const boundActions = { setValue: setValue(VALUE.SUITES.SELECTED) };

export default connect(
  select,
  boundActions
);
