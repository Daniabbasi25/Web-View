import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './MainStack';

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
