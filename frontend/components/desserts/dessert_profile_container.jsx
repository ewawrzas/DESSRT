import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import DessertProfile from './dessert_profile'
import { fetchSingleDessert } from '../../actions/dessert_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  let checkins;
  let dessertId;
  const dessert = state.entities.desserts[ownProps.match.params.dessertId];

  if (dessert) {
    checkins = dessert.checkins
    dessertId = parseInt(ownProps.match.params.dessertId);
  }  else {
    checkins = {};
    dessertId = "";
  }

  const currentUser = state.session.currentUser;

  return { currentUser, dessert, dessertId, checkins };
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchSingleDessert: (id) => dispatch(fetchSingleDessert(id)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DessertProfile);
