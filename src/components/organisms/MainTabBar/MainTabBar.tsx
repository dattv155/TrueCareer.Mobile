import type {FC, PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import styles from './MainTabBar.scss';
import type {SvgComponent} from 'react-native-svg-types';
import type {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {atomicStyles} from 'src/styles';
import TabBarIcon from 'src/components/organisms/MainTabBar/TabBarIcon/TabBarIcon';
import {Lang} from 'src/config/lang';
import {HomeScreen} from '../../../screens/Tabs/HomeScreen';
import {MentorScreen} from '../../../screens/Tabs/MentorScreen';
import {StudyScreen} from '../../../screens/Tabs/StudyScreen';
import {ExploreScreen} from '../../../screens/Tabs/ExploreScreen';
import {ProfileScreen} from '../../../screens/Tabs/ProfileScreen';

/**
 * File: MainTabBar.tsx
 * @created 2021-03-10 09:16:47
 * @author TrongDatVu <trongdat1505@gmail.com>
 * @type {FC<PropsWithChildren<MainTabBarProps>>}
 */
const MainTabBar: FC<PropsWithChildren<MainTabBarProps>> = (
  props: PropsWithChildren<MainTabBarProps>,
): ReactElement => {
  const {navigation, route} = props;
  const [translate] = useTranslation();

  const tabs: {
    routeName: string;
    icon?: {
      default: SvgComponent;
    };
    activeIcon?: {
      default: SvgComponent;
    };
    iconName?: string;
    onPress(): void;
  }[] = React.useMemo(() => {
    return [
      {
        routeName: HomeScreen.displayName,
        icon: require('/assets/icons/tab/HomeW.svg'),
        activeIcon: require('/assets/icons/tab/Home.svg'),
        onPress: () => {
          navigation.navigate(HomeScreen.displayName);
        },
        iconName: translate(Lang.Tab.Home),
      },
      {
        routeName: MentorScreen.displayName,
        icon: require('/assets/icons/tab/MentorW.svg'),
        activeIcon: require('/assets/icons/tab/Mentor.svg'),
        onPress: () => {
          navigation.navigate(MentorScreen.displayName);
        },
        iconName: translate(Lang.Tab.Mentor),
      },
      {
        routeName: StudyScreen.displayName,
        icon: require('/assets/icons/tab/StudyW.svg'),
        activeIcon: require('/assets/icons/tab/Study.svg'),
        onPress: () => {
          navigation.navigate(StudyScreen.displayName);
        },
        iconName: translate(Lang.Tab.Study),
      },
      {
        routeName: ExploreScreen.displayName,
        icon: require('/assets/icons/tab/ExploreW.svg'),
        activeIcon: require('/assets/icons/tab/Explore.svg'),
        onPress: () => {
          navigation.navigate(ExploreScreen.displayName);
        },
        iconName: translate(Lang.Tab.Explore),
      },
      {
        routeName: ProfileScreen.displayName,
        icon: require('/assets/icons/tab/ProfileW.svg'),
        activeIcon: require('/assets/icons/tab/Profile.svg'),
        onPress: () => {
          navigation.navigate(ProfileScreen.displayName);
        },
        iconName: translate(Lang.Tab.Profile),
      },
    ];
  }, [navigation, translate]);

  return (
    <SafeAreaView style={[styles.bottomTabContainer]}>
      <View
        style={[
          styles.bottomTabs,
          atomicStyles.flexRow,
          atomicStyles.justifyContentAround,
          atomicStyles.alignItemsCenter,
          {
            borderTopWidth: 0,
            elevation: 10,
          },
        ]}>
        {tabs.map((tab, index: number) => (
          <TabBarIcon
            key={index}
            onPress={tab.onPress}
            icon={tab.icon}
            iconName={tab.iconName}
            activeIcon={tab.activeIcon}
            isActive={route?.name === tab.routeName}
          />
        ))}
      </View>
      {props.children}
    </SafeAreaView>
  );
};

export interface MainTabBarProps extends StackScreenProps<any> {
  //
}

MainTabBar.defaultProps = {
  //
};

MainTabBar.propTypes = {
  //
};

MainTabBar.displayName = nameof(MainTabBar);

export default React.memo(MainTabBar);
