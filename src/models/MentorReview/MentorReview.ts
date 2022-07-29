import {Model} from 'react3l-common';
import type {Moment} from 'moment';
import type {AppUser} from 'models/AppUser';

export class MentorReview extends Model {
  public id?: number;

  public description?: string;

  public contentReview?: string;

  public star?: number;

  public mentorId?: number;

  public creatorId?: number;

  public time?: Moment;

  public creator?: AppUser;

  public mentor?: AppUser;
}
