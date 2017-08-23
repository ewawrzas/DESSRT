import { connect } form 'react-redux';

import { login, signup } from '../../actions/session_actions';
import Landing from './landing'


const mapStateToProps = ({ session })
  let loggedIn = Boolean(state.currentUser);
  return {loggedIn}
};

const mapDispatchToProps =   
