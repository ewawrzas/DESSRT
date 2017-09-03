import { connect } from 'react-redux';
import UpdateForm from './update_form';
import { fetchSingleUser, updateUser } from '../../actions/user_actions';
import { logout,removeErrors } from '../../actions/session_actions'

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleUser: (userId) => dispatch(fetchSingleUser(userId)),
    removeErrors: () => dispatch(removeErrors()),
    updateUser: (user) => dispatch(updateUser(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
