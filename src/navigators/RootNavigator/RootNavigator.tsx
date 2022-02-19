import {createStackNavigator} from '@react-navigation/stack';
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
      initialRouteName={TabNavigator.displayName!}
      screenOptions={{headerShown: false}}>
      {Object.values(Screens).map((ScreenComponent: any) => (
        <Screen
          component={ScreenComponent}
          name={ScreenComponent.displayName!}
          key={ScreenComponent.displayName!}
          initialParams={{}}
        />
      ))}
      {[TabNavigator].map(ScreenComponent => (
        <Screen
          component={ScreenComponent}
          name={ScreenComponent.displayName!}
          key={ScreenComponent.displayName!}
          initialParams={{}}
        />
      ))}
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
