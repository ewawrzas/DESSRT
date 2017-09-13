import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserProfile from './user_profile'
import { fetchSingleUser, updateUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const user = state.entities.users[ownProps.match.params.userId];
  const checkins = user.checkins;
  return { currentUser, user, checkins }

};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
    logout: () => dispatch(logout()),
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
