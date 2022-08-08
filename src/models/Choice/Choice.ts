import {Model} from 'react3l-common';
import type {Question} from 'src/models/Question';
import type {MbtiSingleType} from '../MbtiSingleType';

export class Choice extends Model {
  public id?: number;

  public choiceContent?: string;

  public description?: string;

  public questionId?: number;

  public mbtiSingleTypeId?: number;

  public mbtiSingleType?: MbtiSingleType;

  public question?: Question;
}
