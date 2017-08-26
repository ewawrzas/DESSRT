import merge from 'lodash/merge';
import { RECEIVE_SINGLE_DESSERT, RECEIVE_ALL_DESSERTS } from '../actions/dessert_actions';


const dessertReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SINGLE_DESSERT:
      const newDessert = action.payload;
      const merged = merge({}, state, { [newDessert.id]: newDessert });
      return merged;
    case RECEIVE_ALL_DESSERTS:
      return merge({}, state, action.desserts);
    default:
      return state;
  }
};

export default dessertReducer;
