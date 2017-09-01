import merge from 'lodash/merge';
import { RECEIVE_SINGLE_CHECKIN, RECEIVE_ALL_CHECKINS, REMOVE_CHECKIN } from '../actions/checkin_actions';
import { RECEIVE_ERRORS, REMOVE_ERRORS } from '../actions/session_actions';



const checkinReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_SINGLE_CHECKIN:
      const newCheckin = action.payload;
      const merged = merge({}, state, { [newCheckin.id]: newCheckin });
      return merged;
    case RECEIVE_ALL_CHECKINS:
      return merge({}, state, action.checkins);
    case REMOVE_CHECKIN:
    
      nextState = merge({}, state);
      delete nextState[action.checkin.id]
      return nextState
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, state, { errors });
    case REMOVE_ERRORS:
      return Object.assign({}, state, { errors: [] });
    default:
      return state;
  }
};

export default checkinReducer;
