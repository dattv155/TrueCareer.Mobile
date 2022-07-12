import React from 'react';
import type {PropsWithChildren, ReactElement, FC} from 'react';
import nameof from 'ts-nameof.macro';
import * as Screens from 'src/screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import type {RootNavigatorProps} from 'src/navigators/RootNavigator/RootNavigator';
import {WelcomeScreen} from 'src/screens/Login';

const {Navigator, Screen} = createStackNavigator();

const LoginNavigator: FC<
  PropsWithChildren<RootNavigatorProps>
> = (): ReactElement => {
  return (
    <Navigator
      initialRouteName={WelcomeScreen.displayName!}
      screenOptions={{headerShown: false}}>
      {Object.values(Screens).map((ScreenComponent: any) => (
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

export interface LoginNavigatorProps {
  //
}

LoginNavigator.defaultProps = {
  //
};

LoginNavigator.displayName = nameof(LoginNavigator);

export default LoginNavigator;
