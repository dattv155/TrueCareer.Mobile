import {Model} from 'react3l-common';
import type {MentorInfo} from 'src/models/MentorInfo';
import type {MentorApprovalStatus} from 'src/models/MentorApprovalStatus';
import type {Topic} from '../Topic';
import type {AppUser} from '../AppUser';

export class MentorRegisterRequest extends Model {
  public id?: number;

  public userId?: number;

  public mentorApprovalStatusId?: number;

  public topicId?: number;

  public mentorApprovalStatus?: MentorApprovalStatus;

  public topic?: Topic;

  public user?: AppUser;

  public mentorInfo?: MentorInfo;
}
