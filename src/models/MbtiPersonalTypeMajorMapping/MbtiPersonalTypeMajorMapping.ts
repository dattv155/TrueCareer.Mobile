import {Model} from 'react3l-common';
import type {Major} from 'models/Major';
import type {MbtiPersonalType} from 'models/MbtiPersonalType';

export class MbtiPersonalTypeMajorMapping extends Model {
  public mbtiPersonalTypeId?: number;

  public majorId?: number;

  public major?: Major;

  public mbtiPersonalType?: MbtiPersonalType;
}
