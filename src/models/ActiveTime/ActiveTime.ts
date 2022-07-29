import {Model} from 'react3l-common';
import type {Moment} from 'moment';

export class ActiveTime extends Model {
  public id?: number;

  public startAt?: Moment;

  public endAt?: Moment;

  public mentorId?: number;
}
