import type {NavigationContainerRef} from '@react-navigation/native';
import type {RefObject} from 'react';
import React from 'react';

export const navigationRef: RefObject<NavigationContainerRef<any>> =
  React.createRef<NavigationContainerRef<any>>();
