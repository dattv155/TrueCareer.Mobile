import {StringFilter} from 'react3l-advanced-filters';
import {IdFilter} from 'react3l-advanced-filters';
import {NumberFilter} from 'react3l-advanced-filters';
import {GuidFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class NewsFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public creatorId?: IdFilter = new IdFilter();
  public newsContent?: StringFilter = new StringFilter();
  public likeCounting?: NumberFilter = new NumberFilter();
  public watchCounting?: NumberFilter = new NumberFilter();
  public newsStatusId?: IdFilter = new IdFilter();
  public rowId?: GuidFilter = new GuidFilter();
}
