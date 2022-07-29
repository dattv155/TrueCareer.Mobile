import type {AppUser} from 'src/models';
import type {MentorConnection} from 'src/models/MentorConnection';
import type {Topic} from 'src/models/Topic';
import type {ActiveTime} from 'src/models/ActiveTime';

export interface MentorRegister {
  appUser?: AppUser;
  mentorConnection?: MentorConnection;
  activeTime?: ActiveTime;
  topic?: Topic;
}
