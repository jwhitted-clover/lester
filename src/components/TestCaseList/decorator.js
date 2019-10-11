import { connect } from 'react-redux';
import { selectDefinitionsTestCases } from '../../store/definitions';

const select = state => ({ testCases: selectDefinitionsTestCases(state) });

const boundActions = {};

export default connect(
  select,
  boundActions
);
