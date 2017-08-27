import { connect } from 'react-redux';
import DessertForm from './dessert_form';
import { createDessert } from '../../actions/dessert_actions';

const mapStateToProps = ({errors}) => {
  return {
    currentUser: state.session.currentUser,
    errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDessert: (dessert) => dispatch(createDessert(dessert))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DessertForm);
