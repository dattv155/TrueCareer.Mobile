import {Model} from 'react3l-common';
import {Field} from 'react3l-decorators';
import type {Status} from 'src/models/Status';

export class Organization extends Model {
  @Field(Number)
  public id?: number;

  @Field(String)
  public code?: string;

  @Field(String)
  public name?: string;

  @Field(Number)
  public parentId?: number;

  @Field(String)
  public path?: string;

  @Field(Number)
  public level?: number;

  @Field(Number)
  public statusId?: number;

  @Field(String)
  public phone?: string;

  @Field(String)
  public email?: string;

  @Field(String)
  public address?: string;

  @Field(String)
  public taxCode?: string;

  @Field(String)
  public rowId?: string;

  public parent?: Organization;

  public status?: Status;
}
