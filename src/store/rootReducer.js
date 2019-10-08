import { combineReducers } from 'redux';
import { suitesReducer } from './suites';

const rootReducer = combineReducers({ suites: suitesReducer });

export default rootReducer;
