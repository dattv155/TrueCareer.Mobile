import {Model} from 'react3l-common';

export class School extends Model {
  public id?: number;

  public name?: string;

  public description?: string;

  public rowId?: string;
  public address?: string;
  public completeTime?: string;
  public phoneNumber?: string;
  public rating?: number;
  public schoolImage?: string;
  public studentCount?: number;
}
