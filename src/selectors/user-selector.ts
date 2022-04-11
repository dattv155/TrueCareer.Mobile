import type {GlobalState} from 'src/types/GlobalState';
import type {AppUser} from 'src/models';

export const userSelector = (state: GlobalState) =>
  state.authentication?.userId;

export const generalUserSelector = (
  state: GlobalState,
): AppUser | null | undefined => state?.authentication?.user;

export const tokenSelector = (state: GlobalState) => state.authentication.token;

export const globalUserSelector = (state: GlobalState) =>
  state.authentication.globalUser;
