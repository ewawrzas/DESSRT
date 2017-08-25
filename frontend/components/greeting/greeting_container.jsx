import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import Greeting from './greeting'
import { selectAllUsers } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    users: selectAllUsers(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
