import React from 'react';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';

import HistoryScreen from '~/screens/HistoryScreen';

import QuizNavigator from './QuizNavigator';

import colors from '~/theme/colors';
import HistoryNavigator from './HistoryNavigator';

const Tabs = AnimatedTabBarNavigator();

export default function TabNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.black,
        activeBackgroundColor: colors.primary,
      }}
      appearance={{
        shadow: true,
        floating: true,
        whenActiveShow: TabElementDisplayOptions.BOTH,
        whenInactiveShow: TabElementDisplayOptions.ICON_ONLY,
        dotSize: DotSize.SMALL,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={QuizNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="History"
        component={HistoryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-text-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
