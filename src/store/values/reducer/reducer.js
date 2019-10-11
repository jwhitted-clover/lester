import * as CONST from '../constants';

import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.VALUES_SET:
      return {
        ...state,
        ...payload,
      };
    case CONST.VALUES_RESET:
      return initialState;
    default:
      return state;
  }
};
