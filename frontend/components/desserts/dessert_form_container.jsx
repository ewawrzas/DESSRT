import { connect } from 'react-redux';

import DessertForm from './dessert_form';
import { createDessert } from '../../actions/dessert_actions';
import { logout, removeErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.session.errors,
    currentUser: state.session.currentUser,
    ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    createDessert: (dessert) => dispatch(createDessert(dessert)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DessertForm);
