import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VisualizeScreen from '~/screens/VisualizeScreen';
import HistoryScreen from '../../screens/HistoryScreen/index';

export default function HistoryNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="History">
      <Stack.Screen name="History" component={HistoryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Visualize" component={VisualizeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
