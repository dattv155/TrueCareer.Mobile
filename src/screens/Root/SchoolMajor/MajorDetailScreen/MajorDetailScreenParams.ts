import type {School} from 'src/models/School';
import type {Major} from 'src/models/Major';

export interface MajorDetailScreenParams {
  school?: School;

  major?: Major;
}
