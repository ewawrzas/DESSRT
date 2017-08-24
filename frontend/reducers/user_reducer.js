import merge from 'lodash/merge';
import { RECEIVE_SINGLE_USER } from '../actions/user_actions';
import { RECEIVE_ERRORS, REMOVE_ERRORS } from '../actions/session_actions'

const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SINGLE_USER:
      const newUser = {[action.user.id]: action.user};
      return merge({}, state, newUser);
    default:
      return state;
  }
};

export default userReducer;
