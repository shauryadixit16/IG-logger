import { combineReducers } from 'redux';
import logReducers from '../reducers/logReducer';
import techReducers from '../reducers/techReducer';
export default combineReducers({
  log: logReducers,
  tech: techReducers,
});
