import type {AtomEffect} from 'recoil';
import {atom, DefaultValue} from 'recoil';
import {KeyAtoms} from 'src/store/atoms/index';
import type {AppUser} from 'src/models';
import {appStorage, AppStorage} from 'src/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import nameof from 'ts-nameof.macro';

const appStorageEffect: AtomEffect<AppUser> = ({setSelf, onSet}) => {
  setSelf(
    AsyncStorage.getItem(nameof(AppStorage.prototype.appUser)).then(
      savedValue =>
        savedValue !== null ? JSON.parse(savedValue) : new DefaultValue(),
    ),
  );

  onSet(newValue => {
    newValue ? appStorage.saveUser(newValue) : appStorage.removeUser();
  });
};

export const appUserAtom = atom<AppUser>({
  key: KeyAtoms.appUserAtom,
  default: null,
  effects: [appStorageEffect],
});
