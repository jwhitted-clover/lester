import * as CONST from '../constants';

export default ({ value = 1 }) => ({
  type: CONST.MATH_ADD,
  payload: { value },
});
