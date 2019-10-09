import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import { localStorageMiddleware, getLocalStorage } from './localStorage';

export default initialState => {
  const middleware = applyMiddleware(thunk, localStorageMiddleware);

  const devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
  const enhancer = devtools ? devtools() : f => f;

  return createStore(
    rootReducer,
    getLocalStorage(initialState),
    compose(
      middleware,
      enhancer
    )
  );
};
