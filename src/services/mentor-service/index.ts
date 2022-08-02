import {useMentorRegister} from 'src/services/mentor-service/use-mentor-register';
import {useListMentor} from 'src/services/mentor-service/use-list-mentor';
import {useMentorDetail} from 'src/services/mentor-service/use-mentor-detail';

export class MentorService {
  public readonly useMentorRegister = useMentorRegister;

  public readonly useListMentor = useListMentor;

  public readonly useMentorDetail = useMentorDetail;
}
export const mentorService: MentorService = new MentorService();
