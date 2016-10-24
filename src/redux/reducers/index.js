import {combineReducers} from 'redux';
import * as companies from './companies';

const rootReducer = combineReducers({
  ...companies
});

export default rootReducer;
