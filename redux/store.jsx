import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import Categories from './reducers/Categories';
import User from './reducers/Users';
import Donations from './reducers/Donation';

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

// const unpersistedReducer = rootReducer;

// const store = configureStore({
//   reducer: unpersistedReducer,
//   middleware: getDefaultMiddleware => {
//     return getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(logger);
//   },
// });

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger);
  },
});

export default store;
// export const persistor = persistStore(store);
