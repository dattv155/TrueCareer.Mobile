import {createSlice} from '@reduxjs/toolkit';
import {initialState} from 'src/store/initial-state';
import type {GlobalState} from 'src/types/GlobalState';
import nameof from 'ts-nameof.macro';
import type {AppUser, GlobalUser} from 'src/models';
import type {AppStorage} from 'src/app';

export const authenticationSlice = createSlice({
  name: nameof(initialState.authentication),
  initialState: initialState.authentication,
  reducers: {
    setUser(
      state: GlobalState['authentication'],
      action: {
        type: string;
        payload: AppStorage;
      },
    ) {
      const {appUser, globalUser} = action.payload;
      if (appUser) {
        state.user = appUser;
        state.userId = appUser.id;
        state.token = appUser.token;
        // state.refreshToken = appUser.refreshToken;
      }
      if (globalUser) {
        state.globalUser = globalUser;
      }
    },

    authenticate: (
      state: GlobalState['authentication'],
      action: {
        type: string;
        payload: {
          user: AppUser;
        };
      },
    ) => {
      const {user} = action.payload;
      state.userId = user?.id;
      state.user = user;
      state.token = user?.token;
      // state.refreshToken = user?.refreshToken;
    },

    removeUser(state: GlobalState['authentication']) {
      state.user = undefined;
      state.userId = undefined;
      state.token = null;
      // state.refreshToken = null;
      state.globalUser = null;
    },

    setToken(
      state: GlobalState['authentication'],
      action: {
        type: string;
        payload: string;
      },
    ) {
      state.token = action.payload;
      state.user = {...state.user, token: action.payload};
    },

    setGlobalUser(
      state: GlobalState['authentication'],
      action: {
        type: string;
        payload: GlobalUser;
      },
    ) {
      state.globalUser = action.payload;
    },

    setAppUser(
      state: GlobalState['authentication'],
      action: {
        type: string;
        payload: AppUser;
      },
    ) {
      state.user = action.payload;
    },
  },
});
