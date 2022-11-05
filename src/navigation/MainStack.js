import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyDrawer} from './DrawerStack';
import {Login, Settings, Splash} from '../screens';

const Main = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Main.Navigator screenOptions={{headerShown: false}}>
      <Main.Screen component={Splash} name="splash" />
      <Main.Screen component={Login} name="login" />
      <Main.Screen component={MyDrawer} name="homescreen" />
      <Main.Screen component={Settings} name="Settings" />
    </Main.Navigator>
  );
};
