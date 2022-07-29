import {StringFilter} from 'react3l-advanced-filters';
import {IdFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class NewsStatusFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public code?: StringFilter = new StringFilter();
  public name?: StringFilter = new StringFilter();
}
