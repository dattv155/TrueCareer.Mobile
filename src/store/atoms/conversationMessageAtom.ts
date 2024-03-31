import type {ConversationMessage} from 'react-native-truesight-chat';
import {atom} from 'recoil';
import {KeyAtoms} from 'src/store/atoms/index';

export const conversationMessageAtom = atom<ConversationMessage>({
  key: KeyAtoms.conversationMessageAtom,
  default: null,
});
