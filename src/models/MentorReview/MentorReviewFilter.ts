import {StringFilter} from 'react3l-advanced-filters';
import {IdFilter} from 'react3l-advanced-filters';
import {NumberFilter} from 'react3l-advanced-filters';
import {DateFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class MentorReviewFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public description?: StringFilter = new StringFilter();
  public contentReview?: StringFilter = new StringFilter();
  public star?: NumberFilter = new NumberFilter();
  public mentorId?: IdFilter = new IdFilter();
  public creatorId?: IdFilter = new IdFilter();
  public time?: DateFilter = new DateFilter();
}
