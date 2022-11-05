import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';

const Home = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Home.Navigator screenOptions={{headerShown: false}}>
      <Home.Screen component={Screens.Home} name="home" />
      <Home.Screen component={Screens.ReserveTable} name="reservetable" />
    </Home.Navigator>
  );
};
