import React from 'react';
import './ConversationChatScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';

export function ConversationChatScreen(
  props: PropsWithChildren<ConversationChatScreenProps>,
): ReactElement {
  const {children} = props;

  return <>{children}</>;
}

export interface ConversationChatScreenProps {
  //
}

ConversationChatScreen.defaultProps = {
  //
};

ConversationChatScreen.displayName = nameof(ConversationChatScreen);

export default ConversationChatScreen;
