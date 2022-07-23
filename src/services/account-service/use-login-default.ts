import type {AppUser} from 'src/models';
import type {Reducer} from 'react';
import React from 'react';
import {Keyboard} from 'react-native';
import type {
  UserReducerAction,
  UserReducerState,
} from 'src/reducers/user-reducer';
import {userReducer, UserReducerActionType} from 'src/reducers/user-reducer';
import {DEBOUNCE_TIME} from 'src/config';
import {debounce} from 'lodash';
// import * as Keychain from 'react-native-keychain';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {signalService} from '../signalr-service';
import type {AxiosError} from 'axios';
import {accountRepository} from 'src/repositories/account-repository';
import {useSetRecoilState} from 'recoil';
import {appUserAtom} from 'src/store/atoms/appUserAtom';

export function useLoginDefault(): [
  AppUser,
  boolean,
  boolean,
  (value: string) => void,
  (value: string) => void,
  () => void,
  () => Promise<void>,
  () => Promise<void>,
  () => Promise<void>,
] {
  const [{user, loading, passwordHidden}, dispatch] = React.useReducer<
    Reducer<UserReducerState, UserReducerAction>
  >(userReducer, {});

  const setAppUser = useSetRecoilState(appUserAtom);

  const handleChangeUsername = React.useCallback(
    (value: string) => {
      dispatch({
        type: UserReducerActionType.setName,
        username: value,
      });
    },
    [dispatch],
  );

  const handleChangePassword = React.useCallback(
    (value: string) => {
      dispatch({
        type: UserReducerActionType.setPassword,
        password: value,
      });
    },
    [dispatch],
  );

  const handleTogglePasswordHidden = React.useCallback(() => {
    dispatch({
      type: UserReducerActionType.togglePassword,
    });
  }, []);

  const handleLogin = React.useCallback(async () => {
    Keyboard.dismiss();
    if (!loading) {
      dispatch({
        type: UserReducerActionType.turnOnLoading,
      });
      // if (globalState.user) {
      //   await globalState.removeUser();
      // }

      return accountRepository
        .login({
          username: user.username,
          password: user.password,
        })
        .toPromise()
        .then(
          debounce(async (authenticatedUser: AppUser) => {
            setAppUser(authenticatedUser);

            // await Keychain.setGenericPassword(user.username, user.password);

            // await endUserRepository.update(authenticatedUser);

            if (!signalService.hubSyncConnection()) {
              await signalService.hubConnectionSignalr();
            }
          }, DEBOUNCE_TIME),
          (error: AxiosError<AppUser>) => {
            if (error.response?.status === 400 && error.response?.data) {
              dispatch({
                type: UserReducerActionType.showError,
                user: error.response.data,
              });
            }
            dispatch({
              type: UserReducerActionType.turnOffLoading,
            });
            throw error;
          },
        );
    }
  }, [loading, setAppUser, user]);

  const handleLoginGoogle = React.useCallback(async () => {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    const userGoogle = await GoogleSignin.signIn();
    const {idToken} = userGoogle;

    if (!loading && idToken) {
      dispatch({
        type: UserReducerActionType.turnOnLoading,
      });
      // if (globalState.user) {
      //   await globalState.removeUser();
      // }
      return accountRepository
        .loginGoogle(idToken)
        .toPromise()
        .then(
          debounce(async () => {
            // await globalState.saveUser(authenticatedUser);
            // await endUserRepository.update(authenticatedUser);
            if (!signalService.hubSyncConnection()) {
              await signalService.hubConnectionSignalr();
            }
          }, DEBOUNCE_TIME),
          (error: AxiosError<AppUser>) => {
            if (error.response?.status === 400 && error.response?.data) {
              dispatch({
                type: UserReducerActionType.showError,
                user: error.response.data,
              });
            }
            dispatch({
              type: UserReducerActionType.turnOffLoading,
            });
            throw error;
          },
        );
    }
  }, [loading]);

  const handleLoginFacebook = React.useCallback(async () => {}, []);

  React.useEffect(() => {
    let cancel = false;
    // Keychain.getGenericPassword().then(
    //   (credentials: UserCredentials | false | null) => {
    //     if (!cancel && credentials) {
    //       dispatch({
    //         type: UserReducerActionType.getStoredPassword,
    //         username: credentials.username,
    //         password: credentials.password,
    //       });
    //     }
    //   },
    // );
    if (!cancel) {
      dispatch({
        type: UserReducerActionType.getStoredPassword,
        username: 'trongdat1505',
        password: '123456a@A',
      });
    }
    return function cleanup() {
      cancel = true;
    };
  }, []);

  return [
    user,
    loading,
    passwordHidden,
    handleChangeUsername,
    handleChangePassword,
    handleTogglePasswordHidden,
    handleLogin,
    handleLoginGoogle,
    handleLoginFacebook,
  ];
}
