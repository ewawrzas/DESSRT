import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import DessertProfile from './dessert_profile'
import { fetchSingleDessert } from '../../actions/dessert_actions';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    currentUser: state.session.currentUser,
    dessert: state.entities.desserts[ownProps.match.params.dessertId]
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    fetchSingleDessert: (id) => dispatch(fetchSingleDessert(id)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DessertProfile);
