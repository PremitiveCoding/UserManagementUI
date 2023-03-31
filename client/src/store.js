import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
