import {ModelFilter} from 'react3l-common';
import {IdFilter, StringFilter} from 'react3l-advanced-filters';

export class ChoiceFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public choiceContent?: StringFilter = new StringFilter();
  public description?: StringFilter = new StringFilter();
  public questionId?: IdFilter = new IdFilter();
  public mbtiSingleTypeId?: IdFilter = new IdFilter();
}
