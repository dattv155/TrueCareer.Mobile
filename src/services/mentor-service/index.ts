import {useMentorRegister} from 'src/services/mentor-service/use-mentor-register';

export class MentorService {
  public readonly useMentorRegister = useMentorRegister;
}
export const mentorService: MentorService = new MentorService();
