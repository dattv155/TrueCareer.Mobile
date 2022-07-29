import {StringFilter} from 'react3l-advanced-filters';
import {IdFilter} from 'react3l-advanced-filters';
import {GuidFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class SchoolFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public name?: StringFilter = new StringFilter();
  public description?: StringFilter = new StringFilter();
  public rowId?: GuidFilter = new GuidFilter();
}
