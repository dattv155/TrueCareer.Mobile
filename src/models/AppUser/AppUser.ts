import {Model} from 'react3l-common';
import {Field, MomentField} from 'react3l-decorators';
import type {Moment} from 'moment';
import type {Sex} from 'src/models/Sex';
import type {Status} from 'src/models/Status';
import type {AppUserRoleMapping} from 'src/models/AppUserRoleMapping';

export class AppUser extends Model {
  @Field(Number)
  public id?: number;

  @Field(String)
  public username?: string;

  @Field(String)
  public displayName?: string;

  @Field(String)
  public token?: string;

  @Field(String)
  public refreshToken?: string;

  @Field(String)
  public address?: string;

  @Field(String)
  public email?: string;

  @Field(String)
  public phone?: string;

  @Field(Number)
  public sexId?: number;

  @MomentField()
  public birthday?: Moment;

  @Field(String)
  public avatar?: string;

  @Field(Number)
  public positionId?: number;

  @Field(String)
  public department?: string;

  @Field(Number)
  public organizationId?: number;

  @Field(Number)
  public provinceId?: number;

  @Field(Number)
  public statusId?: number;

  @Field(String)
  public rowId?: string;

  public sex?: Sex;

  public status?: Status;

  public appUserRoleMappings?: AppUserRoleMapping[];
}
