import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserProfile from './user_profile'
import { fetchSingleUser, updateUser } from '../../actions/user_actions';
import { selectUserCheckins } from '../../reducers/selectors'

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const user = state.entities.users[ownProps.match.params.userId];
  const checkins = user.checkins;
  // debugger


  return { currentUser, user, checkins }
  // return {
  //   currentUser: state.session.currentUser,
  //   user: state.entities.users[ownProps.match.params.userId],
  //   checkins: user.checkins
  // };
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
    logout: () => dispatch(logout()),
    updateUser: (user) => dispatch(updateUser(user)),
    selectUserCheckins: (user, state) => dispatch(selectUserCheckins(user, state))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
