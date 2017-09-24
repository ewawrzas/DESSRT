import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchSingleUser, updateUser } from '../../actions/user_actions';
import { deleteCheckin, fetchAllCheckins } from '../../actions/checkin_actions';

const mapStateToProps = (state, ownProps) => {
  let checkins;
  const user = state.entities.users[ownProps.match.params.userId];

  if (user) {
    checkins = user.checkins;
  } else {
    checkins = {}
  }

  const currentUser = state.session.currentUser;
  return { currentUser, user, checkins }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchAllCheckins: () => dispatch(fetchAllCheckins()),
    deleteCheckin: (checkin) => dispatch(deleteCheckin(checkin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
