import * as CheckinAPIUtil from '../util/checkin_api_util'
import { receiveErrors, removeErrors } from './session_actions'

export const RECEIVE_SINGLE_CHECKIN = 'RECEIVE_SINGLE_CHECKIN';
export const RECEIVE_ALL_CHECKINS = 'RECEIVE_ALL_CHECKINS';
export const REMOVE_CHECKIN = 'REMOVE_CHECKIN';


export const receiveSingleCheckin = payload => ({
  type: RECEIVE_SINGLE_CHECKIN,
  payload
});

export const receiveAllCheckins = desserts => ({
  type: RECEIVE_ALL_CHECKINS,
  desserts
});

export const removeCheckin = checkin => ({
  type: REMOVE_CHECKIN,
  checkin
})

export const fetchSingleCheckin = id => dispatch => (
  CheckinAPIUtil.fetchSingleCheckin(id).then(checkin => dispatch(receiveSingleCheckin(checkin)))
);

export const createCheckin = checkin => dispatch => (
  CheckinAPIUtil.createCheckin(checkin).then(checkin => {
    dispatch(receiveSingleCheckin(checkin));
    return checkin;
  }).fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchAllCheckins = () => dispatch => (
  CheckinAPIUtil.fetchAllCheckins().then(checkins =>
  dispatch(receiveAllCheckins(checkins)))
);

export const updateCheckin = checkin => dispatch => (
  APIUtil.updateCheckin(checkin).then(checkin => ( dispatch(receiveSingleCheckin(checkin))
  ),
  err => (
  dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteCheckin = checkin => dispatch => (
  CheckinAPIUtil.destroyCheckin(checkin).then(checkin => dispatch(removeCheckin))
);
