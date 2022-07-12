import type {AppUser} from 'src/models';

export interface UserRegisterReducerState {
  user?: AppUser;

  loading?: boolean;

  passwordHidden?: boolean;

  passwordConfirmationHidden?: boolean;

  error?: string;
}

export interface UserRegisterReducerAction {
  type: UserRegisterReducerActionType;

  username?: string;

  displayName?: string;

  password?: string;

  passwordConfirmation?: string;

  user?: AppUser;

  email?: string;

  phoneNumber?: string;

  error?: string;
}

export enum UserRegisterReducerActionType {
  setUserName,
  setDisplayName,
  setEmail,
  setPhoneNumber,
  setPassword,
  setPasswordConfirmation,
  turnOnLoading,
  turnOffLoading,
  togglePassword,
  togglePasswordConfirmation,
  refresh,
  setError,
  resetError,
  showError,
  showSuccess,
}

export function userRegisterReducer(
  state: UserRegisterReducerState,
  action: UserRegisterReducerAction,
): UserRegisterReducerState {
  switch (action.type) {
    case UserRegisterReducerActionType.setUserName:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.username,
        },
      };

    case UserRegisterReducerActionType.setDisplayName:
      return {
        ...state,
        user: {
          ...state.user,
          displayName: action.displayName,
        },
      };

    case UserRegisterReducerActionType.setEmail:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
        },
      };

    case UserRegisterReducerActionType.setPhoneNumber:
      return {
        ...state,
        user: {
          ...state.user,
          phone: action.phoneNumber,
        },
      };

    case UserRegisterReducerActionType.setPassword:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password,
        },
      };
    case UserRegisterReducerActionType.setPasswordConfirmation:
      return {
        ...state,
        user: {
          ...state.user,
          passwordConfirmation: action.passwordConfirmation,
        },
      };

    case UserRegisterReducerActionType.turnOnLoading:
      return {
        ...state,
        loading: true,
      };

    case UserRegisterReducerActionType.turnOffLoading:
      return {
        ...state,
        loading: false,
      };

    case UserRegisterReducerActionType.togglePassword:
      return {
        ...state,
        passwordHidden: !state.passwordHidden,
      };

    case UserRegisterReducerActionType.togglePasswordConfirmation:
      return {
        ...state,
        passwordConfirmationHidden: !state.passwordConfirmationHidden,
      };

    case UserRegisterReducerActionType.refresh:
      return {
        ...state,
        user: {},
      };

    case UserRegisterReducerActionType.setError:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
}
