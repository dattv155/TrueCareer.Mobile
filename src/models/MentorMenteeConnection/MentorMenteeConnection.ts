import {Model} from 'react3l-common';
import type {MentorConnection} from 'models/MentorConnection';
import type {ConnectionStatus} from 'models/ConnectionStatus';
import type {AppUser} from 'models/AppUser';

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
