import {Model} from 'react3l-common';
import type {AppUser} from '../AppUser';
import type {News} from '../News';

export class FavouriteNews extends Model {
  public id?: number;

  public userId?: number;

  public newsId?: number;

  public news?: News;

  public user?: AppUser;
}
