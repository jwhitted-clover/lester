import { combineReducers } from 'redux';
import { definitionsReducer } from './definitions';
import { suitesReducer } from './suites';

const rootReducer = combineReducers({
  definitions: definitionsReducer,
  suites: suitesReducer,
});

export default rootReducer;
