import type {AppUser} from 'src/models';

export interface UserReducerState {
  user?: AppUser;

  loading?: boolean;

  passwordHidden?: boolean;
}

export interface UserReducerAction {
  type: UserReducerActionType;

  username?: string;

  password?: string;

  deviceName?: string;

  user?: AppUser;
}

export enum UserReducerActionType {
  setName,
  setPassword,
  setNewPassword,
  setDeviceName,
  getStoredPassword,
  turnOnLoading,
  turnOffLoading,
  togglePassword,
  refresh,
  resetError,
  showError,
  showSuccess,
}

export function userReducer(
  state: UserReducerState,
  action: UserReducerAction,
): UserReducerState {
  switch (action.type) {
    case UserReducerActionType.setName:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.username,
        },
      };

    case UserReducerActionType.setPassword:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password,
        },
      };

    case UserReducerActionType.setNewPassword:
      return {
        ...state,
        user: {
          ...state.user,
          newPassword: action.password,
        },
      };

    case UserReducerActionType.setDeviceName:
      return {
        ...state,
        user: {
          ...state.user,
          deviceName: action.deviceName,
        },
      };

    case UserReducerActionType.getStoredPassword:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.username,
          password: action.password,
        },
      };

    case UserReducerActionType.turnOnLoading:
      return {
        ...state,
        loading: true,
      };

    case UserReducerActionType.turnOffLoading:
      return {
        ...state,
        loading: false,
      };

    case UserReducerActionType.togglePassword:
      return {
        ...state,
        passwordHidden: !state.passwordHidden,
      };

    case UserReducerActionType.refresh:
      return {
        ...state,
        user: {},
      };

    case UserReducerActionType.resetError:
      return {
        ...state,
        user: {
          ...state.user,
        },
      };

    case UserReducerActionType.showError:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}
