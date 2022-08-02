import {Repository} from 'react3l-common';
import {httpConfig, server, Endpoints} from 'src/config';
import type {Observable} from 'rxjs';
import kebabCase from 'lodash/kebabCase';
import nameof from 'ts-nameof.macro';
import type {InformationFilter} from 'src/models/Information';
import {Information} from 'src/models/Information';

export class InformationRepository extends Repository {
  constructor() {
    super(httpConfig);
    server.subscribeServerUrl((serverUrl: string) => {
      this.baseURL = new URL(Endpoints.INFORMATION_HREF, serverUrl).href;
    });
  }

  public readonly count = (
    informationFilter?: InformationFilter,
  ): Observable<number> => {
    return this.http
      .post<number>(kebabCase(nameof(this.count)), informationFilter)
      .pipe(Repository.responseDataMapper<number>());
  };

  public readonly list = (
    informationFilter?: InformationFilter,
  ): Observable<Information[]> => {
    return this.http
      .post<Information[]>(kebabCase(nameof(this.list)), informationFilter)
      .pipe(Repository.responseMapToList<Information>(Information));
  };
}

export const informationRepository: InformationRepository =
  new InformationRepository();
