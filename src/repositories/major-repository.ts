import {Repository} from 'react3l-common';
import {httpConfig, server, Endpoints} from 'src/config';
import type {Observable} from 'rxjs';
import kebabCase from 'lodash/kebabCase';
import nameof from 'ts-nameof.macro';
import type {MajorFilter} from 'src/models/Major';
import {Major} from 'src/models/Major';

export class MajorRepository extends Repository {
  constructor() {
    super(httpConfig);
    server.subscribeServerUrl((serverUrl: string) => {
      this.baseURL = new URL(Endpoints.MAJOR_HREF, serverUrl).href;
    });
  }

  public readonly list = (majorFilter?: MajorFilter): Observable<Major[]> => {
    return this.http
      .post<Major[]>(kebabCase(nameof(this.list)), majorFilter)
      .pipe(Repository.responseMapToList<Major>(Major));
  };
}

export const majorRepository: MajorRepository = new MajorRepository();
