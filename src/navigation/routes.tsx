import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from './NavigationService';
import RootNavigator from './navigators/RootNavigator';

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
}
