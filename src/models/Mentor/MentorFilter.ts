import {ModelFilter} from 'react3l-common';
import {IdFilter, NumberFilter, StringFilter} from 'react3l-advanced-filters';

export class MentorFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public displayName: StringFilter = new StringFilter();
  public avatar: StringFilter = new StringFilter();
  public jobRole: StringFilter = new StringFilter();
  public likeCount: NumberFilter = new NumberFilter();
  public menteeCount: NumberFilter = new NumberFilter();
  public companyName: StringFilter = new StringFilter();
}
