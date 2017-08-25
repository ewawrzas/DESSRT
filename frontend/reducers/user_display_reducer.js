import { RECEIVE_SINGLE_USER } from "../actions/user_actions";

const userDisplayReducer = (state = null, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return action.payload.user.id;
    default:
      return state;
  }
}

export default userDisplayReducer;
