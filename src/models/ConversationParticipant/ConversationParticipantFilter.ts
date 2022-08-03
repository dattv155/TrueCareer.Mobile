import { IdFilter  } from '@react3l/advanced-filters';
import { ModelFilter } from '@react3l/react3l/core';

export class ConversationParticipantFilter extends ModelFilter  {
  public id?: IdFilter = new IdFilter();
  public conversationId?: IdFilter = new IdFilter();
  public userId?: IdFilter = new IdFilter();
}
