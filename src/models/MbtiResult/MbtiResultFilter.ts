import {IdFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class MbtiResultFilter extends ModelFilter {
  public userId?: IdFilter = new IdFilter();
  public mbtiPersonalTypeId?: IdFilter = new IdFilter();
  public id?: IdFilter = new IdFilter();
}
