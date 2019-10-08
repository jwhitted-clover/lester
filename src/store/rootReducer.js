import { combineReducers } from 'redux';
import { mathReducer } from './math';

const rootReducer = combineReducers({ math: mathReducer });

export default rootReducer;
