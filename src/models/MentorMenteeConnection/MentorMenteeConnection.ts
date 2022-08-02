import {Model} from 'react3l-common';
import type {AppUser} from '../AppUser';
import type {ConnectionStatus} from '../ConnectionStatus';
import type {MentorConnection} from '../MentorConnection';

export class MentorMenteeConnection extends Model {
  public mentorId?: number;

  public menteeId?: number;

  public connectionId?: number;

  public firstMessage?: string;

  public connectionStatusId?: number;

  public activeTimeId?: number;

  public id?: number;

  public connection?: MentorConnection;

  public connectionStatus?: ConnectionStatus;

  public mentee?: AppUser;

  public mentor?: AppUser;
}
