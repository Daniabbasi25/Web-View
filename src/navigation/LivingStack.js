import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';

const Living = createNativeStackNavigator();

export const LivingStack = () => {
  return (
    <Living.Navigator screenOptions={{headerShown: false}}>
      <Living.Screen component={Screens.Living} name="living" />
    </Living.Navigator>
  );
};
