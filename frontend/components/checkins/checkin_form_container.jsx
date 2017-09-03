import { connect } from 'react-redux';

import CheckinForm from './checkin_form';
import { createCheckin, fetchAllCheckins } from '../../actions/checkin_actions';
import { removeErrors } from '../../actions/session_actions'

const mapStateToProps = (state) => {

  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    fetchAllCheckins: () => dispatch(fetchAllCheckins()),
    removeErrors: () => dispatch(removeErrors()),
    createCheckin: (checkin) => dispatch(createCheckin(checkin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckinForm);
