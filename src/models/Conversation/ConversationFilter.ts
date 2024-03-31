import {ModelFilter} from 'react3l-common';
import {GuidFilter, IdFilter, StringFilter} from 'react3l-advanced-filters';

export class ConversationFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public latestContent?: StringFilter = new StringFilter();
  public latestUserId?: IdFilter = new IdFilter();
  public rowId?: GuidFilter = new GuidFilter();
  public hash?: StringFilter = new StringFilter();
}
