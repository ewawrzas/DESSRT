import merge from 'lodash/merge';
import { RECEIVE_SINGLE_USER, RECEIVE_ALL_USERS } from '../actions/user_actions';
import { RECEIVE_ERRORS, REMOVE_ERRORS } from '../actions/session_actions'

const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SINGLE_USER:
    
      const newUser = action.payload;
      const merged = merge({}, state, { [newUser.id]: newUser });
      return merged;
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default userReducer;
