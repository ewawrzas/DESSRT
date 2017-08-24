import { connect } from 'react-redux';
import NavBar from './landing'

const mapStateToProps = (state, ownProps) => {
  return {
    const hideNav = ownProps.location.pathname === '/signup' ||
    ownProps.location.pathname === '/login' ?
    return true : return false
  };
};

export default connect(mapStateToProps)(NavBar);
