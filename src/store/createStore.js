import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import { indexedDBMiddleware, getIndexedDB } from './indexedDB';

export default async initialState => {
  const middleware = applyMiddleware(thunk, indexedDBMiddleware);

  const devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
  const enhancer = devtools ? devtools() : f => f;

  const state = await getIndexedDB(initialState);

  return createStore(
    rootReducer,
    state,
    compose(
      middleware,
      enhancer
    )
  );
};
