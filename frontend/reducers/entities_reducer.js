import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import users from './user_reducer';
import desserts from './dessert_reducer';
import checkins from './checkin_reducer';

export default combineReducers({
  users,
  desserts,
  checkins
});
