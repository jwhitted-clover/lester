// NOTE: Some data may need to be removed from the redux store before serializing to localStorage.
const sanitize = ({ ...other }) => ({ ...other });

export const localStorageMiddleware = store => next => action => {
  const result = next(action);
  const state = sanitize(store.getState());
  localStorage.setItem('store', JSON.stringify(state));
  return result;
};

export const getLocalStorage = initialState => {
  try {
    return JSON.parse(localStorage.getItem('store')) || initialState;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Unable to parse cached store from localStorage.', e);
    return initialState;
  }
};
