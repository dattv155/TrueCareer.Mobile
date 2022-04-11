import type {AppLanguage} from './AppLanguage';
import type {AppUser} from 'src/models';
import type {GlobalUser} from 'src/models';
import type {GeoPosition} from 'react-native-geolocation-service';
import type {ConversationMessage} from 'src/models/ConversationMessage';

export interface GlobalState {
  appSettings: {
    language: AppLanguage;

    baseUrl: string;

    location?: GeoPosition;
  };

  authentication: {
    userId?: number;

    user?: AppUser | null | undefined;

    token?: string | null;

    refreshToken?: string | null;

    globalUser?: GlobalUser | null | undefined;
  };

  conversation: {
    message?: ConversationMessage;
  };
}
