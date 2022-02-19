import {IdFilter, StringFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class RoleFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();

  public code?: StringFilter = new StringFilter();

  public name?: StringFilter = new StringFilter();

  public statusId?: IdFilter = new IdFilter();
}
