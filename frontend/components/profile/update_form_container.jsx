import { connect } from 'react-redux';
import UpdateForm from './update_form';
import { fetchSingleUser, updateUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  const user = state.session.currentUser;
  return { user };
}

const mapDispatchToProps = (dispatch) => ({
  fetchSingleUser: (userId) => dispatch(fetchSingleUser(userId)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
