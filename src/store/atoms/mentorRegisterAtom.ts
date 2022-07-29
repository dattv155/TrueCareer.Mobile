import {atom} from 'recoil';
import type {MentorConnection} from 'src/models/MentorConnection';
import {KeyAtoms} from 'src/store/atoms/index';
import type {ActiveTime} from 'src/models/ActiveTime';
import type {Topic} from 'src/models/Topic';

export const mentorConnectionAtom = atom<MentorConnection>({
  key: KeyAtoms.mentorConnectionAtom,
  default: null,
});

export const activeTimeAtom = atom<ActiveTime>({
  key: KeyAtoms.activeTimeAtom,
  default: null,
});

export const topicAtom = atom<Topic>({
  key: KeyAtoms.topicAtom,
  default: null,
});
