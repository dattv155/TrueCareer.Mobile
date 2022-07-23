import {atom} from 'recoil';
import {KeyAtoms} from 'src/store/atoms/index';
import type {GlobalUser} from 'react-native-truesight-chat';

export const globalUserAtom = atom<GlobalUser>({
  key: KeyAtoms.globalUserAtom,
  default: null,
});
