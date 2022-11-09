import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../../Screens/Onboarding';
import Login from '../../Screens/Login';
import Tenant1Stack from '../Tenant1Stack';
import Tenant3Stack from '../Tenant3Stack';
import Tenant2Stack from '../Tenant2Stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen key={'onboarding'} name="Onboarding" component={Onboarding} />
      <Stack.Screen key={'loginAuth'} name="Login" component={Login} />
      <Stack.Screen key={'Tenant1Stack'} name="Tenant1Stack" component={Tenant1Stack} />
      <Stack.Screen key={'Tenant2Stack'} name="Tenant2Stack" component={Tenant2Stack} />
      <Stack.Screen key={'Tenant3Stack'} name="Tenant3Stack" component={Tenant3Stack} />
    </Stack.Navigator>
  )
}

export default AppStack;