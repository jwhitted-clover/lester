import { combineReducers } from 'redux';

import { definitionsReducer } from './definitions';
import { suitesReducer } from './suites';
import { valuesReducer } from './values';

const rootReducer = combineReducers({
  definitions: definitionsReducer,
  suites: suitesReducer,
  values: valuesReducer,
});

export default rootReducer;
