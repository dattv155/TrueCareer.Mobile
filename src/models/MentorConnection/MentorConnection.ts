import {Model} from 'react3l-common';
import type {AppUser} from '../AppUser';
import type {ConnectionType} from '../ConnectionType';

export class MentorConnection extends Model {
  public id?: number;

  public mentorId?: number;

  public url?: string;

  public connectionTypeId?: number;

  public connectionType?: ConnectionType;

  public mentor?: AppUser;
}
