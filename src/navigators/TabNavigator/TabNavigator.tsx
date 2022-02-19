import React from 'react';
import styles from './TabNavigator.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {useTranslation} from 'react-i18next';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  HomeScreen,
  MentorScreen,
  ProfileScreen,
  ExploreScreen,
  StudyScreen,
} from 'src/screens/Tabs';
import HomeIcon from 'src/components/icons/HomeIcon';
import MentorIcon from 'src/components/icons/MentorIcon';
import StudyIcon from 'src/components/icons/StudyIcon';
import ExploreIcon from 'src/components/icons/ExploreIcon';
import ProfileIcon from 'src/components/icons/ProfileIcon';
import {Lang} from 'src/config/lang';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabNavigator(
  props: PropsWithChildren<TabNavigatorProps>,
): ReactElement {
  const {} = props;
  const [translate] = useTranslation();
  const {bottom} = useSafeAreaInsets();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.Primary,
        tabBarInactiveTintColor: Colors.TextSecondary,
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarAllowFontScaling: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
      }}
      safeAreaInsets={{
        top: 0,
        bottom: bottom !== 0 ? bottom : 12,
        left: 0,
        right: 0,
      }}
      initialRouteName={HomeScreen.displayName}>
      <Screen
        key={HomeScreen.displayName!}
        name={HomeScreen.displayName!}
        component={HomeScreen}
        initialParams={{}}
        options={{
          tabBarLabel: translate(Lang.Tab.Home),
          tabBarIcon: ({focused}) => <HomeIcon focus={focused} />,
        }}
      />
      <Screen
        key={MentorScreen.displayName!}
        name={MentorScreen.displayName!}
        component={MentorScreen}
        initialParams={{}}
        options={{
          tabBarLabel: translate(Lang.Tab.Mentor),
          tabBarIcon: ({focused}) => <MentorIcon focus={focused} />,
        }}
      />
      <Screen
        key={StudyScreen.displayName!}
        name={StudyScreen.displayName!}
        component={StudyScreen}
        initialParams={{}}
        options={{
          tabBarLabel: translate(Lang.Tab.Study),
          tabBarIcon: ({focused}) => <StudyIcon focus={focused} />,
        }}
      />
      <Screen
        key={ExploreScreen.displayName!}
        name={ExploreScreen.displayName!}
        component={ExploreScreen}
        initialParams={{}}
        options={{
          tabBarLabel: translate(Lang.Tab.Explore),
          tabBarIcon: ({focused}) => <ExploreIcon focus={focused} />,
        }}
      />
      <Screen
        key={ProfileScreen.displayName!}
        name={ProfileScreen.displayName!}
        component={ProfileScreen}
        initialParams={{}}
        options={{
          tabBarLabel: translate(Lang.Tab.Profile),
          tabBarIcon: ({focused}) => <ProfileIcon focus={focused} />,
        }}
      />
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
