import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes } from './routes';
import configureStore from './store';

export const App = () => {
  const [store] = useState(configureStore());

  return (
    <Provider store={store.store}>
      <PersistGate persistor={store.persister}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
