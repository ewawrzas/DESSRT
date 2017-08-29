import { connect } from 'react-redux';

import CheckinForm from './checkin_form';
import { createCheckin } from '../../actions/checkin_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    createCheckin: (checkin) => dispatch(createCheckin(checkin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckinForm);
