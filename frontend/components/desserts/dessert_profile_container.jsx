import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import DessertProfile from './dessert_profile'
import { fetchSingleDessert } from '../../actions/dessert_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  const dessert = state.entities.desserts[ownProps.match.params.dessertId];
  const dessertId = parseInt(ownProps.match.params.dessertId);
  const checkins = dessert.checkins;
  return {
    currentUser: state.session.currentUser,
    dessert: dessert,
    dessertId: dessertId,
    checkins: checkins
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchSingleDessert: (id) => dispatch(fetchSingleDessert(id)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DessertProfile);
