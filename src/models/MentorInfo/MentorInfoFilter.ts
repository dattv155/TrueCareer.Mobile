import {ModelFilter} from 'react3l-common';
import {IdFilter} from 'react3l-advanced-filters';

export class MentorInfoFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public appUserId?: IdFilter = new IdFilter();
  public connectionId?: IdFilter = new IdFilter();
  public majorId?: IdFilter = new IdFilter();
}
