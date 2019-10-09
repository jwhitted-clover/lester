import * as CONST from '../constants';

export default name => ({
  type: CONST.SUITES_SELECT,
  payload: name,
});
