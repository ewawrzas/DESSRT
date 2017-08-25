import * as APIUtil from '../util/user_api_util'

export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';


export const receiveSingleUser = payload => ({
  type: RECEIVE_SINGLE_USER,
  payload
});

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const fetchSingleUser = id => dispatch => (
  APIUtil.fetchSingleUser(id).then(user => dispatch(receiveSingleUser(user)))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user).then(user => dispatch(receiveSingleUser(user)))
);

export const fetchAllUsers = () => dispatch => (
  APIUtil.fetchAllUsers().then(users =>
  dispatch(receiveAllUsers(users)))
);
