import * as CONST from '../constants';

const ignore = (force, state) => {
  if (force) return false;
  if (state.expires <= new Date().getTime()) return false;
  return true;
};

// eslint-disable-next-line no-unused-vars
export default ({ server, force = false } = {}) => async (dispatch, getState) => {
  try {
    if (ignore(force, getState().suites)) return;

    dispatch({ type: CONST.SUITES_GET });

    const response = await fetch('/api/test-suites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ server }),
    });
    const json = await response.json();

    dispatch({
      type: CONST.SUITES_GET_SUCCESS,
      payload: json,
    });
  } catch (e) {
    dispatch({
      type: CONST.SUITES_GET_FAILURE,
      payload: e.toString(),
    });
  }
};
