import {StringFilter} from 'react3l-advanced-filters';
import {IdFilter} from 'react3l-advanced-filters';
import {NumberFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class TopicFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public title?: StringFilter = new StringFilter();
  public description?: StringFilter = new StringFilter();
  public cost?: NumberFilter = new NumberFilter();
}
