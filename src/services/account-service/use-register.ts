import type {AppUser} from 'src/models';
import type {Reducer} from 'react';
import React from 'react';
import {useSetRecoilState} from 'recoil';
import {appUserAtom} from 'src/store/atoms/appUserAtom';
import {Keyboard} from 'react-native';
import {accountRepository} from 'src/repositories/account-repository';
import {debounce} from 'lodash';
import {signalService} from 'src/services/signalr-service';
import {DEBOUNCE_TIME} from 'src/config';
import type {AxiosError} from 'axios';
import type {
  UserRegisterReducerAction,
  UserRegisterReducerState,
} from 'src/reducers/user-register-reducer';
import {
  userRegisterReducer,
  UserRegisterReducerActionType,
} from 'src/reducers/user-register-reducer';

export function useRegister(): [
  AppUser,
  boolean,
  (value: string) => void,
  (value: string) => void,
  (value: string) => void,
  (value: string) => void,
  (value: string) => void,
  (value: string) => void,
  () => Promise<void>,
] {
  const [{user, loading}, dispatch] = React.useReducer<
    Reducer<UserRegisterReducerState, UserRegisterReducerAction>
  >(userRegisterReducer, {});

  const setAppUser = useSetRecoilState(appUserAtom);

  const handleChangeUsername = React.useCallback(
    (value: string) => {
      dispatch({
        type: UserRegisterReducerActionType.setUserName,
        username: value,
      });
    },
    [dispatch],
  );

  const handleChangeDisplayName = React.useCallback(
    (value: string) => {
      dispatch({
        type: UserRegisterReducerActionType.setDisplayName,
        displayName: value,
      });
    },
    [dispatch],
  );
  const handleChangeEmail = React.useCallback(
    (value: string) => {
      dispatch({
        type: UserRegisterReducerActionType.setEmail,
        email: value,
      });
    },
    [dispatch],
  );

  const handleChangePhoneNumber = React.useCallback(
    (value: string) => {
      dispatch({
        type: UserRegisterReducerActionType.setPhoneNumber,
        phoneNumber: value,
      });
    },
    [dispatch],
  );

  const handleChangePassword = React.useCallback(
    (value: string) => {
      dispatch({
        type: UserRegisterReducerActionType.setPassword,
        password: value,
      });
    },
    [dispatch],
  );

  const handleChangePasswordConfirmation = React.useCallback(
    (value: string) => {
      dispatch({
        type: UserRegisterReducerActionType.setPasswordConfirmation,
        passwordConfirmation: value,
      });
    },
    [dispatch],
  );

  const handleRegister = React.useCallback(async () => {
    Keyboard.dismiss();
    if (!loading) {
      dispatch({
        type: UserRegisterReducerActionType.turnOnLoading,
      });
      return accountRepository
        .register(user)
        .toPromise()
        .then(
          debounce(async (authenticatedUser: AppUser) => {
            setAppUser(authenticatedUser);

            // await Keychain.setGenericPassword(user.username, user.password);

            if (!signalService.hubSyncConnection()) {
              await signalService.hubConnectionSignalr();
            }
          }, DEBOUNCE_TIME),
          (error: AxiosError<AppUser>) => {
            if (error.response?.status === 400 && error.response?.data) {
              dispatch({
                type: UserRegisterReducerActionType.showError,
                user: error.response.data,
              });
            }
            dispatch({
              type: UserRegisterReducerActionType.turnOffLoading,
            });
            throw error;
          },
        );
    }
  }, [loading, setAppUser, user]);

  return [
    user,
    loading,
    handleChangeDisplayName,
    handleChangeUsername,
    handleChangeEmail,
    handleChangePhoneNumber,
    handleChangePassword,
    handleChangePasswordConfirmation,
    handleRegister,
  ];
}
