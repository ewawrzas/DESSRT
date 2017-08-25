import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserProfile from './user_profile'
import { fetchSingleUser } from '../../actions/user_actions';

const mapStateToProps = (state, { location }) => {
  debugger
  return {
    currentUser: state.session.currentUser,
    user: state.users[state.userDisplay]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
