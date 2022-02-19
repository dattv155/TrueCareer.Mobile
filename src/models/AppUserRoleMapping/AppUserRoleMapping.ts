import {Model} from 'react3l-common';
import {Field} from 'react3l-decorators';
import type {AppUser} from 'src/models/AppUser';
import type {Role} from 'src/models/Role';

export class AppUserRoleMapping extends Model {
  @Field(Number)
  public appUserId?: number;

  @Field(Number)
  public roleId?: number;

  public appUser?: AppUser;

  public role?: Role;
}
