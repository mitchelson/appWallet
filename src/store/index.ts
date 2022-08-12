import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import reducer from './reducers';

const persistConfig = {
  key: 'MyWallet',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers =  compose;

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  // middlewares.push(logger);
}

export default () => {
  const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));
  const persister = persistStore(store);
  return { store, persister };
};