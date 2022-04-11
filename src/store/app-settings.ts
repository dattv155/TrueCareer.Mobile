import {createSlice} from '@reduxjs/toolkit';
import nameof from 'ts-nameof.macro';
import type {GlobalState} from 'src/types/GlobalState';
import {initialState} from 'src/store/initial-state';
import type {AppLanguage} from 'src/types/AppLanguage';
import type {GeoPosition} from 'react-native-geolocation-service';

export const appSettingsSlice = createSlice({
  name: nameof(initialState.appSettings),
  initialState: initialState.appSettings,
  reducers: {
    setLanguage: (
      state: GlobalState['appSettings'],
      action: {
        type: string;
        payload: AppLanguage;
      },
    ) => {
      state.language = action.payload;
    },

    changeServerUrl: (
      state: GlobalState['appSettings'],
      action: {
        type: string;
        payload: string;
      },
    ) => {
      state.baseUrl = action.payload;
    },

    loadAppSettings: (
      state: GlobalState['appSettings'],
      action: {
        type: string;
        payload: GlobalState['appSettings'];
      },
    ) => {
      const {language, baseUrl} = action.payload;
      if (language) {
        state.language = language;
      }
      if (baseUrl) {
        state.baseUrl = baseUrl;
      }
    },

    setLocation: (
      state: GlobalState['appSettings'],
      action: {
        type: string;
        payload: GeoPosition;
      },
    ) => {
      state.location = action.payload;
    },
  },
});
