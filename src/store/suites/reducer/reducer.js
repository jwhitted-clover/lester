import * as CONST from '../constants';
import initialState from './initialState';

const CacheDuration = {
  success: () => new Date().getTime() + 20 * 60 * 1000, // 20 minutes
  failure: () => new Date().getTime() + 10 * 1000, // 10-seconds
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.SUITES_GET:
      return {
        ...state,
        loading: true,
      };
    case CONST.SUITES_GET_SUCCESS:
      return {
        ...state,
        data: payload,
        expires: CacheDuration.success(),
        loading: false,
        error: '',
      };
    case CONST.SUITES_GET_FAILURE:
      return {
        ...state,
        data: undefined,
        expires: CacheDuration.failure(),
        loading: false,
        error: payload,
      };
    case CONST.SUITES_RESET:
      return initialState;
    default:
      return state;
  }
};
