import {selector} from 'recoil';
import {KeySelectors} from 'src/store/selectors/index';
import type {MentorRegister} from 'src/types/Mentor';
import {
  activeTimeAtom,
  mentorConnectionAtom,
  topicAtom,
} from 'src/store/atoms/mentorRegisterAtom';
import {appUserAtom} from 'src/store/atoms/appUserAtom';

export const memberRegisterSelector = selector<MentorRegister>({
  key: KeySelectors.memberRegisterSelector,
  get: ({get}) => {
    const appUser = get(appUserAtom);
    const mentorConnection = get(mentorConnectionAtom);
    const activeTime = get(activeTimeAtom);
    const topic = get(topicAtom);
    return {
      appUser,
      mentorConnection,
      activeTime,
      topic,
    };
  },
});
