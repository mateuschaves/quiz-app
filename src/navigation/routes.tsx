import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from './NavigationService';
import TabNavigator from './navigators/TabNavigator';

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <TabNavigator />
    </NavigationContainer>
  );
}
