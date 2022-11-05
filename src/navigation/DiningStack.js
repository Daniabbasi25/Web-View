import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';

const Dining = createNativeStackNavigator();

export const DiningStack = () => {
  return (
    <Dining.Navigator screenOptions={{headerShown: false}}>
      <Dining.Screen component={Screens.Dining} name="dining" />
      <Dining.Screen component={Screens.Menu} name="menu" />
    </Dining.Navigator>
  );
};
