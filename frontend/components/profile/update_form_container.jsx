import { connect } from 'react-redux';
import UpdateForm from './update_form';
import { fetchSingleUser, updateUser, removeErrors } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions'

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
