import {firstReducer,secondReducer} from './firstreducer';
import {combineReducers} from 'redux';

export const appstate = combineReducers({
      first: firstReducer,
      second: secondReducer
  })