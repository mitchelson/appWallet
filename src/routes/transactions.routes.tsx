import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Transactions } from '../pages/Transactions';
import EditTransaction from '../pages/Transactions/EditTransaction';

const Stack = createNativeStackNavigator();

export const TransactionRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Transactions"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Transactions" component={Transactions} />
      <Stack.Screen name="EditTransaction" component={EditTransaction} />
    </Stack.Navigator>
  );
};
