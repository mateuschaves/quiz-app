import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~/screens/HomeScreen';
import QuizScreen from '~/screens/QuizScreen';

export default function QuizNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
