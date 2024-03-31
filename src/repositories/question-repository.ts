import {Repository} from 'react3l-common';
import {Endpoints, httpConfig, server} from 'src/config';
import type {QuestionFilter} from 'src/models/Question';
import {Question} from 'src/models/Question';
import type {Observable} from 'rxjs';
import kebabCase from 'lodash/kebabCase';
import nameof from 'ts-nameof.macro';

export class QuestionRepository extends Repository {
  constructor() {
    super(httpConfig);
    server.subscribeServerUrl((serverUrl: string) => {
      this.baseURL = new URL(Endpoints.QUESTION_HREF, serverUrl).href;
    });
  }

  public readonly list = (
    questionFilter?: QuestionFilter,
  ): Observable<Question[]> => {
    return this.http
      .post<Question[]>(kebabCase(nameof(this.list)), questionFilter)
      .pipe(Repository.responseMapToList<Question>(Question));
  };
}

export const questionRepository: QuestionRepository = new QuestionRepository();
