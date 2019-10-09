import { connect } from 'react-redux';
import { selectSuitesSelected, selectSelectedSuite } from '../../store/suites';

const select = state => ({
  name: selectSuitesSelected(state),
  suite: selectSelectedSuite(state),
});

const boundActions = {};

export default connect(
  select,
  boundActions
);
