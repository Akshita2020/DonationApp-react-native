import {combineReducers, configureStore} from '@reduxjs/toolkit';
import User from './reducers/Users';

const rootReducer = combineReducers({
  user: User,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
