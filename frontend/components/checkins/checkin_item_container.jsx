import { connect } from 'react-redux';
import CheckinItem from './checkinItem';

import { updateCheckin, deleteCheckin } from '../../actions/checkin_actions';


const mapStateToProps = (state, ownProps) => {
debugger
  return {
    currentUser: state.session.currentUser,
    errors: state.errors,
    ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
debugger
  return {
    updateCheckin: (checkin) => dispatch(updateCheckin(checkin)),
    deleteCheckin: (checkin) => dispatch(deleteCheckin(checkin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckinItem);
