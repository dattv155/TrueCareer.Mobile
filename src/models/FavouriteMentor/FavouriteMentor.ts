import {Model} from 'react3l-common';
import type {AppUser} from 'models/AppUser';

export class FavouriteMentor extends Model {
  public id?: number;

  public userId?: number;

  public mentorId?: number;

  public mentor?: AppUser;

  public user?: AppUser;
}
