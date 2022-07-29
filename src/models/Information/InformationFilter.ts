import {StringFilter} from 'react3l-advanced-filters';
import {IdFilter} from 'react3l-advanced-filters';
import {DateFilter} from 'react3l-advanced-filters';
import {GuidFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class InformationFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public informationTypeId?: IdFilter = new IdFilter();
  public name?: StringFilter = new StringFilter();
  public description?: StringFilter = new StringFilter();
  public startAt?: DateFilter = new DateFilter();
  public role?: StringFilter = new StringFilter();
  public image?: StringFilter = new StringFilter();
  public topicId?: IdFilter = new IdFilter();
  public userId?: IdFilter = new IdFilter();
  public endAt?: DateFilter = new DateFilter();
  public rowId?: GuidFilter = new GuidFilter();
}
