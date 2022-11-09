import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tenant3Home from '../../Screens/Tenant3/Home/index';
import Tenant3Profile from '../../Screens/Tenant3/Profile/index';

const Stack = createNativeStackNavigator();

const Tenant3Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tenant3Home" component={Tenant3Home} />
      <Stack.Screen name="Tenant3Profile" component={Tenant3Profile} />
    </Stack.Navigator>
  )
}

export default Tenant3Stack;