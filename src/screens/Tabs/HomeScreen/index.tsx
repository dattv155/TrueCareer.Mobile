import React from 'react';
import styles from './HomeScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {Text, View} from 'react-native';
import {atomicStyles} from 'src/styles';

export function HomeScreen(
  props: PropsWithChildren<HomeScreenProps>,
): ReactElement {
  const {} = props;

  return (
    <View style={[atomicStyles.flex, atomicStyles.p4, styles.container]}>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
    </View>
  );
}

export interface HomeScreenProps {
  //
}

HomeScreen.defaultProps = {
  //
};

HomeScreen.displayName = nameof(HomeScreen);

export default HomeScreen;
