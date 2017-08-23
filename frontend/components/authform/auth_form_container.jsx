import { connect } from 'react-redux';

import { login, logout, signup, removeErrors, demoLogin } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = (state) => {
  let loggedIn = Boolean(state.currentUser);
  const errors = state.session.errors;
  const demoUser = {username: "Demo", password: "111111"}
  return {loggedIn, errors, demoUser};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname === '/signup' ? 'signup' : 'login';
  const functionType = (formType === 'signup' ? signup : login);
  return {
    processForm: (user) => dispatch(functionType(user)),
    removeErrors: () => dispatch(removeErrors()),
    demoLogin: (demoUser) => dispatch(login(demoUser)),
    formType,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm)
