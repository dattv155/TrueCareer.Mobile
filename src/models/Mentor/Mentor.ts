import {Model} from 'react3l-common';

export class Mentor extends Model {
  public id?: number;
  public displayName?: string;
  public avatar?: string;
  public jobRole?: string;
  public likeCount?: number;
  public menteeCount?: number;
  public companyName?: string;
}
