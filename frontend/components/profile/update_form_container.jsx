import { connect } from 'react-redux';
import UserChangeForm from 'update_form';

const MapStateToProps = (state, OwnProps) => {
  return const user = state.users[ownProps.matchparams.userId];
};

const mapDispatchToProps = (dispatch) => ({
  requestSingleUser: (userId) => dispatch(requestSingleUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserChangeForm);
