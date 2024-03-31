import {IdFilter, StringFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class QuestionFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public questionContent?: StringFilter = new StringFilter();
  public description?: StringFilter = new StringFilter();
}
