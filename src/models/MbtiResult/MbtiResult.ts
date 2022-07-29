import {Model} from 'react3l-common';
import type {MbtiPersonalType} from 'models/MbtiPersonalType';
import type {AppUser} from 'models/AppUser';

export class MbtiResult extends Model {
  public userId?: number;

  public mbtiPersonalTypeId?: number;

  public id?: number;

  public mbtiPersonalType?: MbtiPersonalType;

  public user?: AppUser;
}
