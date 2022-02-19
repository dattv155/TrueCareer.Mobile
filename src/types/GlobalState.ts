import type {AppLanguage} from 'src/types/AppLanguage';
import type {AppUser, GlobalUser} from 'src/models';

export interface GlobalState {
  appSettings: {
    language: AppLanguage;

    // currentTheme: string;

    // themes: Record<string, ThemeStyle>;
  };

  authentication: {
    userId?: number | string;

    user?: AppUser;

    token?: string;

    globalUser?: GlobalUser;
  };
}
