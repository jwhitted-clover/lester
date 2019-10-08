import * as CONST from '../constants';
import initialState from './initialState';

const CACHE_DURATION = {
  SUCCESS: 20 * 60 * 1000, // 20 minutes
  FAILURE: 10 * 1000, // 10-seconds
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
        expires: new Date().getTime() + CACHE_DURATION.SUCCESS,
        loading: false,
        error: '',
      };
    case CONST.SUITES_GET_FAILURE:
      return {
        ...state,
        data: undefined,
        expires: new Date().getTime() + CACHE_DURATION.FAILURE,
        loading: false,
        error: payload,
      };
    case CONST.SUITES_RESET:
      return initialState;
    default:
      return state;
  }
};
