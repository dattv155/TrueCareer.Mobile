import type {GlobalState} from 'src/types/GlobalState';
import {AppLanguage} from 'src/types/AppLanguage';

export const initialState: GlobalState = {
  appSettings: {
    language: AppLanguage.VIETNAMESE,
  },
  authentication: {},
};
