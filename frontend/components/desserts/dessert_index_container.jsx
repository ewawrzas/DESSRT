import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchAllDesserts } from '../../actions/dessert_actions';
import DessertIndex from './dessert_index'
import { selectAllDesserts } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    desserts: selectAllDesserts(state),
    ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllDesserts: (search) => dispatch(fetchAllDesserts(search))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(DessertIndex);
