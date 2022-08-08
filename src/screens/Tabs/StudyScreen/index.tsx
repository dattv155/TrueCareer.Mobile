import React from 'react';
import './StudyScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {Text, TouchableOpacity, View} from 'react-native';
import {atomicStyles} from 'src/styles';
import type {StackScreenProps} from '@react-navigation/stack';
import {ConversationListScreen} from 'src/screens/Root';
import MainTabBar from 'src/components/organisms/MainTabBar/MainTabBar';

export function StudyScreen(
  props: PropsWithChildren<StudyScreenProps>,
): ReactElement {
  const {navigation, route} = props;

  const handleGotoChatScreen = React.useCallback(() => {
    navigation.navigate(ConversationListScreen.displayName, {});
  }, [navigation]);

  return (
    <>
      <View
        style={[
          atomicStyles.alignItemsCenter,
          atomicStyles.justifyContentCenter,
        ]}>
        <TouchableOpacity onPress={handleGotoChatScreen}>
          <Text>Go to Chat</Text>
        </TouchableOpacity>
      </View>
      <MainTabBar navigation={navigation} route={route} />
    </>
  );
}

export interface StudyScreenProps extends StackScreenProps<any> {
  //
}

StudyScreen.defaultProps = {
  //
};

StudyScreen.displayName = nameof(StudyScreen);

export default StudyScreen;
