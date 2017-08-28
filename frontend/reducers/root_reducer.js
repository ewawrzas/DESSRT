import { combineReducers } from 'redux';

import session from './session_reducer';
import entities from './entities_reducer';


const rootReducer = combineReducers({
  session,
  entities
});

export default rootReducer;
