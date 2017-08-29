import { connect } from 'react-redux';

import CheckinForm from './checkin_form';
import { createCheckin } from '../../actions/checkin_actions';

const mapStateToProps = (state) => {
  debugger
  return {
    currentUser: state.session.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  debugger
  return {

    createCheckin: (checkin) => dispatch(createCheckin(checkin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckinForm);
