import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Import thunk as a named export
import rootReducer from './reducers';

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;

