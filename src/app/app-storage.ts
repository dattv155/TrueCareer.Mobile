import AsyncStorage from '@react-native-async-storage/async-storage';
import nameof from 'ts-nameof.macro';
import {AppLanguage} from 'src/types/AppLanguage';
import type {AppUser} from 'src/models';
import type {GlobalUser} from 'src/models';

export class AppStorage {
  /**
   * User login token
   *
   * @enum {string}
   */
  public token?: string | null;

  public refreshToken?: string | null;

  public serverUrl?: string | null;

  public appUser?: AppUser | null;

  public globalUser?: GlobalUser | null;

  public get language(): Promise<AppLanguage> {
    return AsyncStorage.getItem(nameof(AppStorage.prototype.language)).then(
      (lang: string | null) => {
        switch (lang) {
          case AppLanguage.ENGLISH:
            return AppLanguage.ENGLISH;

          default:
            return AppLanguage.VIETNAMESE;
        }
      },
    );
  }

  public async setLanguage(lang: AppLanguage): Promise<void> {
    await AsyncStorage.setItem(nameof(AppStorage.prototype.language), lang);
  }

  public async getServerUrl(): Promise<string> {
    return AsyncStorage.getItem(nameof(AppStorage.prototype.serverUrl)).then(
      (serverUrl: string | null) => {
        if (serverUrl === null) {
          return '';
        }
        return serverUrl;
      },
    );
  }

  public async saveServerUrl(serverUrl: string): Promise<void> {
    this.serverUrl = serverUrl;
    await AsyncStorage.setItem(nameof(this.serverUrl), serverUrl);
  }

  public async setToken(token: string): Promise<void> {
    this.token = token;
    await AsyncStorage.setItem(nameof(this.token), token);
  }

  public async removeToken(): Promise<void> {
    try {
      await AsyncStorage.removeItem(nameof(AppStorage.prototype.token));
    } catch (error) {}
  }

  /**
   * AppUserAtom
   *
   */

  public getUser = async (): Promise<AppUser | undefined> => {
    const serializedUserLogin: string | null = await AsyncStorage.getItem(
      nameof(this.appUser),
    );
    if (serializedUserLogin === null) {
      return undefined;
    }

    return JSON.parse(serializedUserLogin);
  };

  public async saveUser(user: AppUser): Promise<void> {
    if (user?.token) {
      await AsyncStorage.setItem(
        nameof(AppStorage.prototype.token),
        user.token,
      );
    }
    // if (user?.refreshToken) {
    //   await AsyncStorage.setItem(
    //     nameof(AppStorage.prototype.refreshToken),
    //     user.refreshToken,
    //   );
    // }
    await AsyncStorage.setItem(
      nameof(AppStorage.prototype.appUser),
      JSON.stringify(user),
    );
  }

  public async removeUser(): Promise<void> {
    try {
      await AsyncStorage.removeItem(nameof(AppStorage.prototype.appUser));
      await AsyncStorage.removeItem(nameof(AppStorage.prototype.token));
      await AsyncStorage.removeItem(nameof(AppStorage.prototype.globalUser));
      // await AsyncStorage.removeItem(nameof(AppStorage.prototype.refreshToken));
    } catch (error) {}
  }

  /**
   * GlobalUser
   *
   */

  public getGlobalUser = async (): Promise<GlobalUser | undefined> => {
    const serializedUser: string | null = await AsyncStorage.getItem(
      nameof(this.globalUser),
    );
    if (serializedUser === null) {
      return undefined;
    }
    return JSON.parse(serializedUser);
  };

  public async setGlobalUser(user: GlobalUser): Promise<void> {
    this.globalUser = user;
    await AsyncStorage.setItem(nameof(this.globalUser), JSON.stringify(user));
  }

  /**
   * Initialize
   *
   */

  public async initialize(): Promise<void> {
    this.token = await AsyncStorage.getItem(nameof(this.token));
    // this.refreshToken = await AsyncStorage.getItem(nameof(this.refreshToken));
    this.serverUrl = await AsyncStorage.getItem(nameof(this.saveServerUrl));
    this.appUser = await this.getUser();
    this.globalUser = await this.getGlobalUser();
  }
}

export const appStorage: AppStorage = new AppStorage();
