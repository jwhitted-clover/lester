import * as CONST from '../constants';

export default name => value => ({
  type: CONST.VALUES_SET,
  payload: { [name]: value },
});
