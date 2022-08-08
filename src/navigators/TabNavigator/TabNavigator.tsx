import React from 'react';
import styles from './TabNavigator.scss';
import type {PropsWithChildren, ReactElement, FC} from 'react';
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
import {StyleSheet, Text} from 'react-native';
import {atomicStyles} from 'src/styles';
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
  const [translate] = useTranslation();
  const {bottom} = useSafeAreaInsets();

  React.useEffect(() => {
    if (!signalService.hubSyncConnection()) {
      signalService.hubConnectionSignalr().then(() => {});
    }
  }, []);

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
      {tabs.map(ScreenComponent => (
        <Screen
          key={ScreenComponent.displayName!}
          name={ScreenComponent.displayName!}
          component={ScreenComponent}
          initialParams={{}}
          options={{
            tabBarLabelPosition: 'below-icon',
            tabBarIcon({focused}) {
              switch (ScreenComponent.displayName!) {
                case HomeScreen.displayName!:
                  return <HomeIcon focus={focused} />;

                case MentorScreen.displayName:
                  return <MentorIcon focus={focused} />;

                case StudyScreen.displayName:
                  return <StudyIcon focus={focused} />;

                case ExploreScreen.displayName:
                  return <ExploreIcon focus={focused} />;

                case ProfileScreen.displayName:
                  return <ProfileIcon focus={focused} />;
              }
            },
            tabBarLabel({focused}) {
              let label = '';
              switch (ScreenComponent.displayName!) {
                case HomeScreen.displayName!:
                  label = translate(Lang.Tab.Home);
                  break;

                case MentorScreen.displayName:
                  label = translate(Lang.Tab.Mentor);
                  break;

                case StudyScreen.displayName:
                  label = translate(Lang.Tab.Study);
                  break;

                case ExploreScreen.displayName:
                  label = translate(Lang.Tab.Explore);
                  break;

                case ProfileScreen.displayName:
                  label = translate(Lang.Tab.Profile);
                  break;

                default:
                  break;
              }

              if (focused) {
                return (
                  <Text style={[atomicStyles.text, styles.focusedText]}>
                    {label}
                  </Text>
                );
              }

              return (
                <Text
                  style={StyleSheet.flatten([
                    atomicStyles.text,
                    focused ? undefined : atomicStyles.textSecondary,
                  ])}>
                  {label}
                </Text>
              );
            },
          }}
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
