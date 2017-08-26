import merge from 'lodash/merge';
import { RECEIVE_SINGLE_DESSERT, RECEIVE_ALL_DESSERTS, RECEIVE_ERRORS, REMOVE_ERRORS } from '../actions/dessert_actions';


const dessertReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SINGLE_DESSERT:
      const newDessert = action.payload;
      const merged = merge({}, state, { [newDessert.id]: newDessert });
      return merged;
    case RECEIVE_ALL_DESSERTS:
      return merge({}, state, action.desserts);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, state, { errors });
    case REMOVE_ERRORS:
      return Object.assign({}, state, { errors: [] });
    default:
      return state;
  }
};

export default dessertReducer;
