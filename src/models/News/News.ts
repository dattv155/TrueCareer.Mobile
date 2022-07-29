import {Model} from 'react3l-common';
import type {AppUser} from '../AppUser';
import type {NewsStatus} from '../NewsStatus';

export class News extends Model {
  public id?: number;

  public creatorId?: number;

  public newsContent?: string;

  public likeCounting?: number;

  public watchCounting?: number;

  public newsStatusId?: number;

  public rowId?: string;

  public creator?: AppUser;

  public newsStatus?: NewsStatus;
}
