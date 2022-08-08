import {Model} from 'react3l-common';
import type {Choice} from '../Choice';

export class Question extends Model {
  public id?: number;

  public questionContent?: string;

  public description?: string;

  public choices?: Choice[];
}
