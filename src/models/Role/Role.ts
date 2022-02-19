import {Model} from 'react3l-common';
import {Field} from 'react3l-decorators';
import type {Status} from 'src/models/Status';
import type {Permission} from 'src/models/Permission';

export class Role extends Model {
  @Field(Number)
  public id?: number;

  @Field(String)
  public code?: string;

  @Field(String)
  public name?: string;

  @Field(Number)
  public statusId?: number;

  @Field(Boolean)
  public used?: boolean;

  public status?: Status;

  public permissions?: Permission[];
}
