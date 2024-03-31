import {Repository} from 'react3l-common';
import {Endpoints, httpConfig, server} from 'src/config';
import type {MbtiResultFilter} from 'src/models/MbtiResult';
import {MbtiResult} from 'src/models/MbtiResult';
import type {Observable} from 'rxjs';
import kebabCase from 'lodash/kebabCase';
import nameof from 'ts-nameof.macro';

export class MbtiResultRepository extends Repository {
  constructor() {
    super(httpConfig);
    server.subscribeServerUrl((serverUrl: string) => {
      this.baseURL = new URL(Endpoints.MBTI_RESULT_HREF, serverUrl).href;
    });
  }

  public readonly list = (
    mbtiResultFilter?: MbtiResultFilter,
  ): Observable<MbtiResult[]> => {
    return this.http
      .post<MbtiResult[]>(kebabCase(nameof(this.list)), mbtiResultFilter)
      .pipe(Repository.responseMapToList<MbtiResult>(MbtiResult));
  };

  public readonly calcResult = (result: number[]): Observable<MbtiResult> => {
    return this.http
      .post<MbtiResult[]>(kebabCase(nameof(this.calcResult)), result)
      .pipe(Repository.responseMapToModel<MbtiResult>(MbtiResult));
  };
}

export const mbtiResultRepository: MbtiResultRepository =
  new MbtiResultRepository();
