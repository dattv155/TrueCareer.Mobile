import {Model} from 'react3l-common';
import type {Sex} from 'src/models/Sex';
import type {Status} from 'src/models/Status';
import type {AppUserRoleMapping} from 'src/models/AppUserRoleMapping';

export class AppUser extends Model {
  public id?: number;

  public username?: string;

  public email?: string;

  public phone?: string;

  public password?: string;

  public passwordConfirmation?: string;

  public displayName?: string;

  public sexId?: number;

  public birthday?: Date;

  public avatar?: string;

  public coverImage?: string;

  public rowId?: string;

  public token?: string;

  public sex?: Sex;

  public status?: Status;

  public appUserRoleMappings?: AppUserRoleMapping[];
}
