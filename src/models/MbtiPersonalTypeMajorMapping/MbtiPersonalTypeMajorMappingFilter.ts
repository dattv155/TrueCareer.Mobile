import {IdFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class MbtiPersonalTypeMajorMappingFilter extends ModelFilter {
  public mbtiPersonalTypeId?: IdFilter = new IdFilter();
  public majorId?: IdFilter = new IdFilter();
}
