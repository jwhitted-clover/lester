import * as CONST from '../constants';

export default ({ value = 1 }) => ({
  type: CONST.MATH_MULTIPLY,
  payload: { value },
});
