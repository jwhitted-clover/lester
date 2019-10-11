import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectSuites } from '../../store/suites';
import { selectValue, setValue } from '../../store/values';

const SELECTED = 'selectedSuite';

const selectName = selectValue(SELECTED);

const selectSuite = createSelector(
  selectSuites,
  selectName,
  (suites, name) => suites[name]
);

const select = state => ({
  name: selectName(state),
  suite: selectSuite(state),
});

const boundActions = { setValue: setValue(SELECTED) };

export default connect(
  select,
  boundActions
);
