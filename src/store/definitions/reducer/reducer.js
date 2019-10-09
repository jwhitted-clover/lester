import * as CONST from '../constants';
import initialState from './initialState';

const CacheDuration = {
  success: () => {
    const d = new Date();
    d.setHours(24, 0, 0, 0); // midnight
    return d.getTime();
  },
  failure: () => new Date().getTime() + 10 * 1000, // 10-seconds
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.DEFINITIONS_GET:
      return {
        ...state,
        loading: true,
      };
    case CONST.DEFINITIONS_GET_SUCCESS:
      return {
        ...state,
        data: payload,
        expires: CacheDuration.success(),
        loading: false,
        error: '',
      };
    case CONST.DEFINITIONS_GET_FAILURE:
      return {
        ...state,
        data: undefined,
        expires: CacheDuration.failure(),
        loading: false,
        error: payload,
      };
    case CONST.DEFINITIONS_RESET:
      return initialState;
    default:
      return state;
  }
};
