import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import type {FC, PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import * as Screens from 'src/screens/Root';
import nameof from 'ts-nameof.macro';
import TabNavigator from '../TabNavigator/TabNavigator';

const {Navigator, Screen} = createStackNavigator();

const RootNavigator: FC<
  PropsWithChildren<RootNavigatorProps>
> = (): ReactElement => {
  return (
    <Navigator
      initialRouteName={TabNavigator.displayName}
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: true,
        animationEnabled: true,
        // gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {[...Object.values(Screens)].map((ScreenComponent: any) => (
        <Screen
          component={ScreenComponent}
          name={ScreenComponent.displayName!}
          key={ScreenComponent.displayName!}
          initialParams={{}}
        />
      ))}
      <Screen
        name={TabNavigator.displayName}
        component={TabNavigator}
        initialParams={{}}
      />
    </Navigator>
  );
};

export interface RootNavigatorProps {
  //
}

RootNavigator.defaultProps = {
  //
};

RootNavigator.displayName = nameof(RootNavigator);

export default RootNavigator;
