import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import users from './user_reducer'

export default combineReducers({
  users
});
