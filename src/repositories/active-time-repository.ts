import {Repository} from 'react3l-common';
import {httpConfig, server, Endpoints} from 'src/config';
import type {Observable} from 'rxjs';
import kebabCase from 'lodash/kebabCase';
import nameof from 'ts-nameof.macro';
import type {ActiveTimeFilter} from 'src/models/ActiveTime';
import {ActiveTime} from 'src/models/ActiveTime';

export class ActiveTimeRepository extends Repository {
  constructor() {
    super(httpConfig);
    server.subscribeServerUrl((serverUrl: string) => {
      this.baseURL = new URL(Endpoints.ACTIVE_TIME_HREF, serverUrl).href;
    });
  }

  public readonly list = (
    activeTimeFilter?: ActiveTimeFilter,
  ): Observable<ActiveTime[]> => {
    return this.http
      .post<ActiveTime[]>(kebabCase(nameof(this.list)), activeTimeFilter)
      .pipe(Repository.responseMapToList<ActiveTime>(ActiveTime));
  };
}

export const activeTimeRepository: ActiveTimeRepository =
  new ActiveTimeRepository();
