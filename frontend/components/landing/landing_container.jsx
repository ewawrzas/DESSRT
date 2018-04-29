import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import LandingPage from './landing';

const mapStateToProps = (state) => {
  let loggedIn = Boolean(state.currentUser);
  const errors = state.session.errors;
  const demoUser = {username: "demo", password: "111111"}
  return {loggedIn, errors, demoUser};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    demoLogin: (demoUser) => dispatch(login(demoUser)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage)
