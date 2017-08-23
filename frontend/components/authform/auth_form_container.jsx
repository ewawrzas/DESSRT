import { connect } from 'react-redux';

import { login, logout, signup, removeErrors } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = (state) => {
  let loggedIn = Boolean(state.currentUser);
  const errors = state.session.errors;
  return {loggedIn, errors};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname === '/signup' ? 'signup' : 'login';
  const functionType = (formType === 'signup' ? signup : login);
  return {
    processForm: (user) => dispatch(functionType(user)),
    removeErrors: () => dispatch(removeErrors()),
    formType,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm)
