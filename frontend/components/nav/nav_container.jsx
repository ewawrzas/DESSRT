import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchAllDesserts } from '../../actions/dessert_actions';
import Nav from './nav'


const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllDesserts: (search) => dispatch(fetchAllDesserts(search))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
