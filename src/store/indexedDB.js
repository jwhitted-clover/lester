import { get, set } from 'idb-keyval';

// NOTE: Some data may need to be removed from the redux store before serializing to indexedDB.
const sanitize = ({ ...other }) => ({ ...other });

export const indexedDBMiddleware = store => next => action => {
  const result = next(action);
  const state = sanitize(store.getState());
  set('store', state);
  return result;
};

export const getIndexedDB = async initialState => {
  try {
    return (await get('store')) || initialState;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Unable to parse cached store from localStorage.', e);
    return initialState;
  }
};
