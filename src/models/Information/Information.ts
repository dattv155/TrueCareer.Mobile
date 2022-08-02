import {Model} from 'react3l-common';
import type {AppUser} from '../AppUser';
import type {InformationType} from '../InformationType';
import type {Topic} from '../Topic';

export class Information extends Model {
  public id?: number;

  public informationTypeId?: number;

  public name?: string;

  public description?: string;

  public startAt?: Date;

  public role?: string;

  public image?: string;

  public topicId?: number;

  public userId?: number;

  public endAt?: Date;

  public rowId?: string;

  public informationType?: InformationType;

  public topic?: Topic;

  public user?: AppUser;
}
