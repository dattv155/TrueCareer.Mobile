import {StringFilter} from 'react3l-advanced-filters';
import {IdFilter} from 'react3l-advanced-filters';
import {ModelFilter} from 'react3l-common';

export class MentorMenteeConnectionFilter extends ModelFilter {
  public mentorId?: IdFilter = new IdFilter();
  public menteeId?: IdFilter = new IdFilter();
  public connectionId?: IdFilter = new IdFilter();
  public firstMessage?: StringFilter = new StringFilter();
  public connectionStatusId?: IdFilter = new IdFilter();
  public activeTimeId?: IdFilter = new IdFilter();
  public id?: IdFilter = new IdFilter();
}
