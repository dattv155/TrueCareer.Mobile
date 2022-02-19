import React from 'react';
import './TabNavigator.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';

export function TabNavigator(
  props: PropsWithChildren<TabNavigatorProps>,
): ReactElement {
  const {children} = props;

  return <>{children}</>;
}

export interface TabNavigatorProps {
  //
}

TabNavigator.defaultProps = {
  //
};

TabNavigator.displayName = nameof(TabNavigator);

export default TabNavigator;
