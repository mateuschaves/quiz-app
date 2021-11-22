import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~/screens/HomeScreen';
import TabNavigator from './TabNavigator';

export default function RootNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="QuizAmount">
      <Stack.Screen name="QuizAmount" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz" component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
