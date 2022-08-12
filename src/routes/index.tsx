import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Home from '../pages/Home';
import { TransactionRoutes } from './transactions.routes';

const Tab = createBottomTabNavigator();

export const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={20} color={color} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="TransactionRoutes"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="exchange-alt"
              size={20}
              color={color}
              style={{
                transform: [{ rotate: '90deg' }],
              }}
            />
          ),
        }}
        component={TransactionRoutes}
      />
    </Tab.Navigator>
  );
};
