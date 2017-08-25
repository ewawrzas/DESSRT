import { combineReducers } from 'redux';
import session from './session_reducer';
import users from './user_reducer';

const rootReducer = combineReducers({
  session,
  users
});

export default rootReducer;
