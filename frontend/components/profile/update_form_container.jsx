import { connect } from 'react-redux';
import UpdateForm from './update_form';
import { requestSingleUser, updateUser } from '../../actions/user_actions';

const mapDispatchToProps = (dispatch, { user }) => ({
  fetchSingleUser: () => dispatch(fetchSingleUser(user.id)),
  updateUser: () => dispatch(updateUser(user.id))
});

export default connect(mapDispatchToProps)(UpdateForm);
