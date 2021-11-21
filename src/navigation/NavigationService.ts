import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: never, params: never) {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

export function goBack() {
  if (!navigationRef.current) return undefined;

  if (navigationRef.current.canGoBack()) {
    return navigationRef.current.goBack();
  }

  return undefined;
}
