import * as APIUtil from '../util/user_api_util'

export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveSingleUser = payload => ({
  type: RECEIVE_SINGLE_USER,
  payload
});

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const removeErrors = (errors) => {
  return {
    type: REMOVE_ERRORS
  };
};


export const fetchSingleUser = id => dispatch => (
  APIUtil.fetchSingleUser(id).then(user => dispatch(receiveSingleUser(user)))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user).then(user => ( dispatch(receiveSingleUser(user))
), err => (
  dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchAllUsers = () => dispatch => (
  APIUtil.fetchAllUsers().then(users =>
  dispatch(receiveAllUsers(users)))
);
