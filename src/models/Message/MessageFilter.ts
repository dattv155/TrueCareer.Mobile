import {ModelFilter} from 'react3l-common';
import {IdFilter, StringFilter} from 'react3l-advanced-filters';

export class MessageFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public userId?: IdFilter = new IdFilter();
  public content?: StringFilter = new StringFilter();
  public conversationId?: IdFilter = new IdFilter();
}
