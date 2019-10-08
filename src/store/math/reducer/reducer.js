import * as CONST from '../constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.MATH_ADD: {
      const { value } = payload;
      const { result, formula } = state;
      return {
        ...state,
        result: result + value,
        formula: `(${formula} + ${value})`,
      };
    }
    case CONST.MATH_MULTIPLY: {
      const { value } = payload;
      const { result, formula } = state;
      return {
        ...state,
        result: result * value,
        formula: `(${formula} * ${value})`,
      };
    }
    case CONST.MATH_RESET:
      return initialState;
    default:
      return state;
  }
};
