import {
  DateFilter,
  GuidFilter,
  IdFilter,
  StringFilter,
} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class AppUserFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public username?: StringFilter = new StringFilter();
  public email?: StringFilter = new StringFilter();
  public phone?: StringFilter = new StringFilter();
  public password?: StringFilter = new StringFilter();
  public displayName?: StringFilter = new StringFilter();
  public sexId?: IdFilter = new IdFilter();
  public birthday?: DateFilter = new DateFilter();
  public avatar?: StringFilter = new StringFilter();
  public coverImage?: StringFilter = new StringFilter();
  public rowId?: GuidFilter = new GuidFilter();
}
