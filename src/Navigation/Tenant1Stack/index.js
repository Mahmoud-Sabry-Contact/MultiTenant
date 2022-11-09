import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tenant1Home from '../../Screens/Tenant1/Home';
import Tenant1Profile from '../../Screens/Tenant1/Profile';

const Stack = createNativeStackNavigator();

const Tenant1Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tenant1Home" component={Tenant1Home} />
      <Stack.Screen name="Tenant1Profile" component={Tenant1Profile} />
    </Stack.Navigator>
  )
}

export default Tenant1Stack;