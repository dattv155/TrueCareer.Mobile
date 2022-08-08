import {useListQuestion} from 'src/services/mbti-service/use-list-question';

export class MbtiService {
  public readonly useListQuestion = useListQuestion;
}
export const mbtiService: MbtiService = new MbtiService();
