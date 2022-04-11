import {AppLanguage} from 'src/types/AppLanguage';
import type {GlobalState} from 'src/types/GlobalState';
import {APP_SERVER_URL} from 'src/config';
import {appStorage} from 'src/app';

export const initialState: GlobalState = {
  appSettings: {
    language: AppLanguage.VIETNAMESE,
    baseUrl: APP_SERVER_URL!,
  },

  authentication: {
    user: appStorage.appUser,
    userId: appStorage.appUser?.id,
    token: appStorage.token,
    globalUser: appStorage.globalUser,
  },

  conversation: {},
};
