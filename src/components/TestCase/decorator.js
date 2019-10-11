import { connect } from 'react-redux';

// eslint-disable-next-line no-unused-vars
const select = state => ({
  name: undefined,
  testCase: undefined,
});

const boundActions = {};

export default connect(
  select,
  boundActions
);
