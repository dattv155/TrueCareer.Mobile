import type {School} from 'src/models/School';
import type {Major} from 'src/models/Major';

export interface SchoolDetailScreenParams {
  school?: School;

  major?: Major;
}
