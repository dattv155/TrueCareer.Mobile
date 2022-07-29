import {Model} from 'react3l-common';
import type {MentorApprovalStatus} from 'models/MentorApprovalStatus';
import type {Topic} from 'models/Topic';
import type {AppUser} from 'models/AppUser';

export class MentorRegisterRequest extends Model {
  public id?: number;

  public userId?: number;

  public mentorApprovalStatusId?: number;

  public topicId?: number;

  public mentorApprovalStatus?: MentorApprovalStatus;

  public topic?: Topic;

  public user?: AppUser;
}
