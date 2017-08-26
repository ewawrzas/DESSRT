import { connect } from 'react-redux';
import UpdateForm from './update_form';
import { fetchSingleUser, updateUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleUser: (userId) => dispatch(fetchSingleUser(userId)),
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
