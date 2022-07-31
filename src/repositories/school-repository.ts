import {Repository} from 'react3l-common';
import {Endpoints, httpConfig, server} from 'src/config';
import type {Observable} from 'rxjs';
import kebabCase from 'lodash/kebabCase';
import nameof from 'ts-nameof.macro';
import type {SchoolFilter} from 'src/models/School';
import {School} from 'src/models/School';

export class SchoolRepository extends Repository {
  constructor() {
    super(httpConfig);
    server.subscribeServerUrl((serverUrl: string) => {
      this.baseURL = new URL(Endpoints.SCHOOL_HREF, serverUrl).href;
    });
  }

  public readonly list = (
    schoolFilter?: SchoolFilter,
  ): Observable<School[]> => {
    return this.http
      .post<School[]>(kebabCase(nameof(this.list)), schoolFilter)
      .pipe(Repository.responseMapToList<School>(School));
  };
}

export const schoolRepository: SchoolRepository = new SchoolRepository();
