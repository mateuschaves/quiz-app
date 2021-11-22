import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from './NavigationService';
import RootNavigator from './navigators/RootNavigator';
import ResultScreen from '../screens/ResultScreen/index';

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
}
