import {Model} from 'react3l-common';
import type {Conversation} from 'src/models/Conversation';

export class Message extends Model {
  public id?: number;

  public userId?: number;

  public content?: string;

  public conversationId?: number;

  public conversation?: Conversation;
}
