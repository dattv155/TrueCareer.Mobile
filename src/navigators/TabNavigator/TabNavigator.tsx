import React from 'react';
import styles from './TabNavigator.scss';
import type {PropsWithChildren, ReactElement, FC} from 'react';
import nameof from 'ts-nameof.macro';
import {useTranslation} from 'react-i18next';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  MentorScreen,
  ProfileScreen,
  ExploreScreen,
  StudyScreen,
} from 'src/screens/Tabs';
import {signalService} from 'src/services/signalr-service';

const {Navigator, Screen} = createBottomTabNavigator();

const tabs: FC<PropsWithChildren<any>>[] = [
  HomeScreen,
  MentorScreen,
  ExploreScreen,
  StudyScreen,
  ProfileScreen,
];

export function TabNavigator(
  props: PropsWithChildren<TabNavigatorProps>,
): ReactElement {
  const {} = props;
  React.useEffect(() => {
    if (!signalService.hubSyncConnection()) {
      signalService.hubConnectionSignalr().then(() => {});
    }
  }, []);

  return (
    <Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: true,
        headerShown: false,
      }}
      tabBar={() => null}
      initialRouteName={HomeScreen.displayName}>
      {tabs.map(ScreenComponent => (
        <Screen
          key={ScreenComponent.displayName!}
          name={ScreenComponent.displayName!}
          component={ScreenComponent}
          initialParams={{}}
        />
      ))}
    </Navigator>
  );
}

export interface TabNavigatorProps {
  //
}

TabNavigator.defaultProps = {
  //
};

TabNavigator.displayName = nameof(TabNavigator);

export default TabNavigator;
