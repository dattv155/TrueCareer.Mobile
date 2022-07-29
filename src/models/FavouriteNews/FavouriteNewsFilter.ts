import {IdFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class FavouriteNewsFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public userId?: IdFilter = new IdFilter();
  public newsId?: IdFilter = new IdFilter();
}
