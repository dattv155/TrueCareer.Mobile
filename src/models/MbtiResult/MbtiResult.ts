import {Model} from 'react3l-common';
import type {AppUser} from '../AppUser';
import type {MbtiPersonalType} from '../MbtiPersonalType';

export class MbtiResult extends Model {
  public userId?: number;

  public mbtiPersonalTypeId?: number;

  public id?: number;

  public mbtiPersonalType?: MbtiPersonalType;

  public user?: AppUser;
}
