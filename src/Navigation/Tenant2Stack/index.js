import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tenant2Home from '../../Screens/Tenant2/Home/index';
import Tenant2Profile from '../../Screens/Tenant2/Profile/index';

const Stack = createNativeStackNavigator();

const Tenant2Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tenant2Home" component={Tenant2Home} />
      <Stack.Screen name="Tenant2Profile" component={Tenant2Profile} />
    </Stack.Navigator>
  )
}

export default Tenant2Stack;