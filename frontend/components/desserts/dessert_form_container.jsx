import { connect } from 'react-redux';
import DessertForm from './dessert_form';
import { fetchSingleDessert, createDessert } from '../../actions/dessert_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleDessert: (dessertId) => dispatch(fetchSingleDessert(dessertId)),
    createDessert: (dessert) => dispatch(createDessert(dessert))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DessertForm);
