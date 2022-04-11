import {createSlice} from '@reduxjs/toolkit';
import nameof from 'ts-nameof.macro';
import {initialState} from 'src/store/initial-state';
import type {GlobalState} from 'src/types/GlobalState';
import type {ConversationMessage} from 'src/models/ConversationMessage';

export const conversationSlice = createSlice({
  name: nameof(initialState.conversation),
  initialState: initialState.conversation,
  reducers: {
    setMessage(
      state: GlobalState['conversation'],
      action: {
        type: string;
        payload: ConversationMessage;
      },
    ) {
      state.message = action.payload;
    },

    removeMessage(state: GlobalState['conversation']) {
      state.message = undefined;
    },
  },
});
