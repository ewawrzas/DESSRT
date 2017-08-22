import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (state) => (
  createStore(rootReducer,applyMiddleware(thunk, logger))
);

export default configureStore;
