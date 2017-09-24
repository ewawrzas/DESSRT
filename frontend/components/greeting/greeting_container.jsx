import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchAllDesserts } from '../../actions/dessert_actions';
import Greeting from './greeting';
import { selectAllUsers, selectAllDesserts, selectAllCheckins } from '../../reducers/selectors';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    users: selectAllUsers(state),
    desserts: selectAllDesserts(state),
    checkins: selectAllCheckins(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllDesserts: (search) => dispatch(fetchAllDesserts(search)),
    selectAllCheckins: () => dispatch(selectAllCheckins())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
