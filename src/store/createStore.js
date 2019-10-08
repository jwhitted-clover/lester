import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export default initialState => {
  const middleware = applyMiddleware(thunk);

  const enhancer = window.devToolsExtension
    ? window.devToolsExtension()
    : f => f;

  return createStore(
    rootReducer,
    initialState,
    compose(
      middleware,
      enhancer
    )
  );
};
