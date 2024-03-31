import {useListSchool} from 'src/services/school-service/use-list-school';

export class SchoolService {
  public readonly useListSchool = useListSchool;
}
export const schoolService: SchoolService = new SchoolService();
