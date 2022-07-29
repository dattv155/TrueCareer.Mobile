import {IdFilter} from 'react3l-advanced-filters';
import {DateFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class ActiveTimeFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public startAt?: DateFilter = new DateFilter();
  public endAt?: DateFilter = new DateFilter();
  public mentorId?: IdFilter = new IdFilter();
}
