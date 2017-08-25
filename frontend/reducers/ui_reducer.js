import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import userDisplay from './user_display_reducer';

export default combineReducers({
  userDisplay
})
