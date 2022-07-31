import {Model} from 'react3l-common';
import type {ActiveTime} from 'src/models/ActiveTime';

export class MentorInfo extends Model {
  public id?: number;
  public appUserId?: number;
  public connectionId?: number;
  public connectionUrl?: string;
  public majorId?: number;
  public topicDescription?: string;
  activeTimes?: ActiveTime[];
}
