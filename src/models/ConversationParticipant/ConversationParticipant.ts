import {Model} from 'react3l-common';
import type {AppUser} from 'src/models';
import type {Conversation} from 'src/models/Conversation';

export class ConversationParticipant extends Model {
  public id?: number;

  public conversationId?: number;

  public userId?: number;

  public conversation?: Conversation;

  public user?: AppUser;
}
