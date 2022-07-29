import {IdFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class FavouriteMentorFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public userId?: IdFilter = new IdFilter();
  public mentorId?: IdFilter = new IdFilter();
}
