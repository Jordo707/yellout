import { combineReducers } from 'redux';
import authReducer from './authReducer';
// import other reducers

export default combineReducers({
  auth: authReducer,
  // other reducers
});
