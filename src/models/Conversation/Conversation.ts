import {Model} from 'react3l-common';
import type {Message} from 'src/models/Message';

export class Conversation extends Model {
  public id?: number;

  public latestContent?: string;

  public latestUserId?: number;

  public rowId?: string;

  public hash?: string;

  public messages?: Message[];
}
