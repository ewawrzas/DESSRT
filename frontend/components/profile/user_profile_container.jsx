import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserProfile from './user_profile'
import { fetchSingleUser, updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
    logout: () => dispatch(logout()),
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
