import {Model} from 'react3l-common';
import type {Moment} from 'moment';
import type {InformationType} from 'models/InformationType';
import type {Topic} from 'models/Topic';
import type {AppUser} from 'models/AppUser';

export class Information extends Model {
  public id?: number;

  public informationTypeId?: number;

  public name?: string;

  public description?: string;

  public startAt?: Moment;

  public role?: string;

  public image?: string;

  public topicId?: number;

  public userId?: number;

  public endAt?: Moment;

  public rowId?: string;

  public informationType?: InformationType;

  public topic?: Topic;

  public user?: AppUser;
}
