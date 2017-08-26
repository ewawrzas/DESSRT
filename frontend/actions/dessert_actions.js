import * as DessertAPIUtil from '../util/dessert_api_util'

export const RECEIVE_SINGLE_DESSERT = 'RECEIVE_SINGLE_DESSERT';
export const RECEIVE_ALL_DESSERTS = 'RECEIVE_ALL_DESSERTS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

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

export const receiveSingleDessert = payload => ({
  type: RECEIVE_SINGLE_DESSERT,
  payload
});

export const receiveAllDesserts = desserts => ({
  type: RECEIVE_ALL_DESSERTS,
  desserts
});

export const fetchSingleDessert = id => dispatch => (
  DessertAPIUtil.fetchSingleDessert(id).then(dessert => dispatch(receiveSingleDessert(dessert)))
);

export const createDessert = dessert => dispatch => (
  DessertAPIUtil.createDessert(dessert).then(dessert => ( dispatch(receiveSingleDessert(dessert))
), err => (
  dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchAllDesserts = () => dispatch => (
  DessertAPIUtil.fetchAllDesserts().then(desserts =>
  dispatch(receiveAllDesserts(desserts)))
);
