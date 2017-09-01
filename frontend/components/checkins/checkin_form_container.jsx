import { connect } from 'react-redux';

import CheckinForm from './checkin_form';
import { createCheckin, fetchAllCheckins } from '../../actions/checkin_actions';


const mapStateToProps = (state) => {

  return {
    currentUser: state.session.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    fetchAllCheckins: () => dispatch(fetchAllCheckins()),
    createCheckin: (checkin) => dispatch(createCheckin(checkin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckinForm);
