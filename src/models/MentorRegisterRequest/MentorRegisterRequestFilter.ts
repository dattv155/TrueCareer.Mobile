import {IdFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class MentorRegisterRequestFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public userId?: IdFilter = new IdFilter();
  public mentorApprovalStatusId?: IdFilter = new IdFilter();
  public topicId?: IdFilter = new IdFilter();
}
