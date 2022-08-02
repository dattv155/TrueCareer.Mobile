import {Repository} from 'react3l-common';
import {httpConfig, server, Endpoints} from 'src/config';
import type {Observable} from 'rxjs';
import kebabCase from 'lodash/kebabCase';
import nameof from 'ts-nameof.macro';
import type {MentorFilter} from 'src/models/Mentor';
import {Mentor} from 'src/models/Mentor';

export class MentorRepository extends Repository {
  constructor() {
    super(httpConfig);
    server.subscribeServerUrl((serverUrl: string) => {
      this.baseURL = new URL(Endpoints.MENTOR_HREF, serverUrl).href;
    });
  }

  public readonly count = (mentorFilter?: MentorFilter): Observable<number> => {
    return this.http
      .post<number>(kebabCase(nameof(this.count)), mentorFilter)
      .pipe(Repository.responseDataMapper<number>());
  };

  public readonly list = (
    mentorFilter?: MentorFilter,
  ): Observable<Mentor[]> => {
    return this.http
      .post<Mentor[]>(kebabCase(nameof(this.list)), mentorFilter)
      .pipe(Repository.responseMapToList<Mentor>(Mentor));
  };
}

export const mentorRepository: MentorRepository = new MentorRepository();
