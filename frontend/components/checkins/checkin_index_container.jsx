import { connect } from 'react-redux';
import CheckinIndex from './checkin_index';
import { removeErrors } from '../../actions/session_actions';
import { fetchSingleCheckin, createCheckin, fetchAllCheckins, deleteCheckin, removeCheckin}
from '../../actions/checkin_actions';

import { selectAllCheckins } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  // const dessert = state.entities.desserts[ownProps.match.params.dessertId];
  // const dessertId = parseInt(ownProps.match.params.dessertId);
  // const user = state.entities.users[ownProps.match.params.userId];
  // const userId = parseInt(ownProps.match.params.userId);

  return {
    currentUser: state.session.currentUser,
    checkins: selectAllCheckins(state)
    // dessert: dessert,
    // dessertId: dessertId,
    // user: user,
    // userId: userId
  };
};

const mapDispatchToProps = (dispatch) => {

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
