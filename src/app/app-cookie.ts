import moment from 'moment';
import {APP_SERVER_URL, PLATFORM_IS_IOS} from 'src/config';
import type {Cookies} from '@react-native-cookies/cookies';
import CookieManager from '@react-native-cookies/cookies';

const DATE_TIME_FORMAT: string = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

export class AppCookie {
  public saveToken = async (token: string) => {
    await CookieManager.set(APP_SERVER_URL, {
      name: 'Token',
      value: token,
      expires: moment().add(12, 'hour').utc().format(DATE_TIME_FORMAT),
    });
  };

  public saveRefreshToken = async (refreshToken: string) => {
    await CookieManager.set(APP_SERVER_URL, {
      name: 'RefreshToken',
      value: refreshToken,
      expires: moment().add(12, 'hour').utc().format(DATE_TIME_FORMAT),
    });
  };

  public removeToken = async () => {
    if (PLATFORM_IS_IOS) {
      await CookieManager.clearByName(APP_SERVER_URL, 'Token');
      await CookieManager.clearByName(APP_SERVER_URL, 'RefreshToken');
      return;
    }
    await CookieManager.clearAll();
  };

  public getToken = async (): Promise<Cookies> => {
    return CookieManager.get(APP_SERVER_URL);
  };
}

export const appCookie: AppCookie = new AppCookie();
