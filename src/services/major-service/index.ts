import {useListMajor} from 'src/services/major-service/use-list-major';

export class MajorService {
  public readonly useListMajor = useListMajor;
}
export const majorService: MajorService = new MajorService();
