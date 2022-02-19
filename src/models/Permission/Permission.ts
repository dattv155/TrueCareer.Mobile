import {Model} from 'react3l-common';
import {Field} from 'react3l-decorators';
import type {Role} from 'src/models/Role';
import type {Status} from 'src/models/Status';

export class Permission extends Model {
  @Field(Number)
  public id?: number;

  @Field(String)
  public code?: string;

  @Field(String)
  public name?: string;

  @Field(Number)
  public roleId?: number;

  @Field(Number)
  public statusId?: number;

  public role?: Role;

  public status?: Status;
}
