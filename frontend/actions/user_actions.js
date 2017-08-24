import * as APIUtil from '../util/user_api_util'

export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const START_LOADING_SINGLE_USER = 'START_LOADING_SINGLE_USER';

export const receiveSingleUser = payload => ({
  type: RECEIVE_SINGLE_USER,
  payload
})

export const requestSingleUser = (id) => (dispatch) => (
  APIUtil.fetchSingleUser(id)
  .then(user => {dispatch(receiveSingleUser(user)));
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
  .then(user => dispatch(receiveSingleUser(user)))
);
