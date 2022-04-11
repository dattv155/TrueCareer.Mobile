import type {GlobalState} from 'src/types/GlobalState';

export const newMessageSelector = (state: GlobalState) =>
  state.conversation.message;
