import merge from 'lodash/merge';
import { RECEIVE_SINGLE_USER, RECEIVE_ALL_USERS, RECEIVE_ERRORS, REMOVE_ERRORS } from '../actions/user_actions';


const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SINGLE_USER:
      const newUser = action.payload;
      const merged = merge({}, state, { [newUser.id]: newUser });
      return merged;
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, state, { errors });
    case REMOVE_ERRORS:
      return Object.assign({}, state, { errors: [] });
    default:
      return state;
  }
};

export default userReducer;
