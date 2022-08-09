import React from 'react';
import styles from './ExploreScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import MainTabBar from 'src/components/organisms/MainTabBar/MainTabBar';
import type {StackScreenProps} from '@react-navigation/stack';
import {View} from 'react-native';

export function ExploreScreen(
  props: PropsWithChildren<ExploreScreenProps>,
): ReactElement {
  const {navigation, route} = props;

  return (
    <>
      <View style={styles.bottomHeight} />
      <MainTabBar navigation={navigation} route={route} />
    </>
  );
}

export interface ExploreScreenProps extends StackScreenProps<any> {
  //
}

ExploreScreen.defaultProps = {
  //
};

ExploreScreen.displayName = nameof(ExploreScreen);

export default ExploreScreen;
