import {Repository} from 'react3l-common';
import {AccountEndpoints, httpConfig, server} from 'src/config';
import type {AppUser} from 'src/models';
import type {Observable} from 'rxjs';
import kebabCase from 'lodash/kebabCase';
import nameof from 'ts-nameof.macro';
import {map} from 'rxjs/operators';
import type {AxiosResponse} from 'axios';

export class ProfileRepository extends Repository {
  constructor() {
    super(httpConfig);
    server.subscribeServerUrl((serverUrl: string) => {
      this.baseURL = new URL(AccountEndpoints.PROFILE_HREF, serverUrl).href;
    });
  }

  public changePassword = (user: Partial<AppUser>): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.changePassword)), user)
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };

  public forgotPassword = (user: Partial<AppUser>): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.forgotPassword)), user)
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };

  public verifyOtpCode = (
    email: string,
    otpCode: string,
  ): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.verifyOtpCode)), {
        email: email,
        otpCode: otpCode,
      })
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };

  public recoveryPassword = (
    username: string,
    otpCode: string,
    password: string,
  ): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.recoveryPassword)), {
        username: username,
        otpCode: otpCode,
        password: password,
      })
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };

  public update = (user: Partial<AppUser>): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.update)), user)
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };
}

export const profileRepository: ProfileRepository = new ProfileRepository();
