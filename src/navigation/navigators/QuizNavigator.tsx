import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import QuizScreen from '~/screens/QuizScreen';
import ResultScreen from '~/screens/ResultScreen';

export default function QuizNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Quiz">
      <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
