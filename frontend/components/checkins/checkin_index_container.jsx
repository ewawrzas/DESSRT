import { connect } from 'react-redux';
import CheckinIndex from './checkin_index';

import { fetchSingleCheckin, createCheckin, fetchAllCheckins, updateCheckin, deleteCheckin }
from '../../actions/checkin_actions';

import { selectAllCheckins } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    checkins: selectAllCheckins(state),
    errors: state.errors,
    ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
  
  return {
    fetchAllCheckins: () => dispatch(fetchAllCheckins()),
    fetchSingleCheckin: (id) => dispatch(fetchSingleCheckin(id)),
    createCheckin: (checkin) => dispatch(createCheckin(checkin)),
    updateCheckin: (checkin) => dispatch(updateCheckin(checkin)),
    deleteCheckin: (checkin) => dispatch(deleteCheckin(checkin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex);
