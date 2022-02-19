import {createSlice} from '@reduxjs/toolkit';
import nameof from 'ts-nameof.macro';
import type {AppLanguage} from 'src/types/AppLanguage';
import type {GlobalState} from 'src/types/GlobalState';
import {initialState} from 'src/store/initial-state';

export const appSettingsSlice = createSlice({
  name: nameof(initialState.appSettings),
  initialState: initialState.appSettings,
  reducers: {
    setLanguage(
      state: GlobalState['appSettings'],
      action: {
        type: string;
        payload: AppLanguage;
      },
    ) {
      state.language = action.payload;
    },

    loadAppSettings(
      state: GlobalState['appSettings'],
      action: {
        type: string;
        payload: GlobalState['appSettings'];
      },
    ) {
      const {language} = action.payload;
      if (language) {
        state.language = language;
      }
    },
  },
});
