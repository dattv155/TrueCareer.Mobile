import {AccountEndpoints, httpConfig, server} from 'src/config';
import type {Model} from 'react3l-common';
import {Repository} from 'react3l-common';
import nameof from 'ts-nameof.macro';
import type {AxiosResponse} from 'axios';
import {map} from 'rxjs/operators';
import type {Observable} from 'rxjs';
import kebabCase from 'lodash/kebabCase';
import type {AppUser} from 'src/models';

export interface TokenResponse {
  errors?: Model.Errors<TokenResponse>;

  refreshToken: string;

  token: string;
}

export interface ImageFile {
  id: number;
  name: string;
  isFile: boolean;
  path: string;
  level: number;
  rowId: string;
}

export class AccountRepository extends Repository {
  constructor() {
    super(httpConfig);
    server.subscribeServerUrl((serverUrl: string) => {
      this.baseURL = new URL(AccountEndpoints.ACCOUNT_HREF, serverUrl).href;
    });
  }

  public login = (user: Partial<AppUser>): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.login)), user)
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };

  public loginGoogle = (GIdToken: string): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.login)), {gIdToken: GIdToken})
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };

  public loginFacebook = (FbIdToken: string): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.login)), {fbIdToken: FbIdToken})
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };

  public loginApple = (AppleIdToken: string): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.login)), {aIdToken: AppleIdToken})
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };

  public register = (user: Partial<AppUser>): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.register)), user)
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };

  public forgetPassword = (user: Partial<AppUser>): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.forgetPassword)), user)
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };

  public resendOtp = (user: Partial<AppUser>): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.resendOtp)), user)
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };

  public verifyOtpCode = (
    username: string,
    otpCode: string,
  ): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.verifyOtpCode)), {
        username: username,
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

  public renewToken = (): Observable<TokenResponse> => {
    return this.http
      .post<TokenResponse>(kebabCase(nameof(this.renewToken)))
      .pipe(map((response: AxiosResponse<TokenResponse>) => response.data));
  };

  public createSession = (): Observable<TokenResponse> => {
    return this.http
      .post<TokenResponse>(kebabCase(nameof(this.createSession)))
      .pipe(map((response: AxiosResponse<TokenResponse>) => response.data));
  };

  public updateProfile = (user: Partial<AppUser>): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.updateProfile)), user)
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };

  public changePassword = (user: Partial<AppUser>): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.changePassword)), user)
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };

  public tuyaRegister = (user: AppUser): Observable<AppUser> => {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.tuyaRegister)), user)
      .pipe(map((response: AxiosResponse<AppUser>) => response.data));
  };
}

export const accountRepository: AccountRepository = new AccountRepository();
