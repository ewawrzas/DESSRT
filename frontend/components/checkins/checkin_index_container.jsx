import { connect } from 'react-redux';
import CheckinIndex from './checkin_index';
import { removeErrors } from '../../actions/session_actions';
import { fetchSingleCheckin, createCheckin, fetchAllCheckins, deleteCheckin, removeCheckin}
from '../../actions/checkin_actions';

import { selectAllCheckins, selectUserCheckins, selectDessertCheckins } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    checkins: selectAllCheckins(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeCheckin: (checkin) => dispatch(removeCheckin(checkin)),
    removeErrors: () => dispatch(removeErrors()),
    fetchAllCheckins: () => dispatch(fetchAllCheckins()),
    fetchSingleCheckin: (id) => dispatch(fetchSingleCheckin(id)),
    createCheckin: (checkin) => dispatch(createCheckin(checkin)),
    deleteCheckin: (checkin) => dispatch(deleteCheckin(checkin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex);
