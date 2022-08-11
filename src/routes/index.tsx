import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../pages/Home';
import { TransactionRoutes } from './transactions.routes';

const Tab = createBottomTabNavigator();

export const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="TransactionRoutes" component={TransactionRoutes} />
    </Tab.Navigator>
  );
};
