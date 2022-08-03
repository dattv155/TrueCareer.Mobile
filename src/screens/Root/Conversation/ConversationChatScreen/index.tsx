import React from 'react';
import './ConversationChatScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StackScreenProps} from '@react-navigation/stack';
import {useRecoilValue, useResetRecoilState} from 'recoil';
import {globalUserAtom} from 'src/store/atoms/globalUserAtom';
import {View} from 'react-native';
import {atomicStyles} from 'src/styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ConversationChat from 'src/components/organisms/ConversationChat';
import {conversationMessageAtom} from 'src/store/atoms/conversationMessageAtom';

export function ConversationChatScreen(
  props: PropsWithChildren<ConversationChatScreenProps>,
): ReactElement {
  const {navigation, route} = props;

  const {conversation} = route.params;

  const {bottom} = useSafeAreaInsets();

  const globalUser = useRecoilValue(globalUserAtom);
  const conversationMessage = useRecoilValue(conversationMessageAtom);
  const onResetConversationMessage = useResetRecoilState(
    conversationMessageAtom,
  );

  return (
    <View>
      <ConversationChat
        navigation={navigation}
        conversation={conversation}
        globalUser={globalUser ?? {}}
        newMessage={conversationMessage}
        onRemoveMessage={onResetConversationMessage}
      />

      <View style={[atomicStyles.bgWhite, {height: bottom}]} />
    </View>
  );
}

export interface ConversationChatScreenProps extends StackScreenProps<any> {
  //
}

ConversationChatScreen.defaultProps = {
  //
};

ConversationChatScreen.displayName = nameof(ConversationChatScreen);

export default ConversationChatScreen;
