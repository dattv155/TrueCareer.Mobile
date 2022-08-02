import {Repository} from 'react3l-common';
import {httpConfig, server, Endpoints} from 'src/config';
import type {Observable} from 'rxjs';
import kebabCase from 'lodash/kebabCase';
import nameof from 'ts-nameof.macro';
import type {MentorMenteeConnectionFilter} from 'src/models/MentorMenteeConnection';
import {MentorMenteeConnection} from 'src/models/MentorMenteeConnection';

export class MentorMenteeRepository extends Repository {
  constructor() {
    super(httpConfig);
    server.subscribeServerUrl((serverUrl: string) => {
      this.baseURL = new URL(
        Endpoints.MENTOR_MENTEE_CONNECTION_HREF,
        serverUrl,
      ).href;
    });
  }

  public readonly count = (
    mentorFilter?: MentorMenteeConnectionFilter,
  ): Observable<number> => {
    return this.http
      .post<number>(kebabCase(nameof(this.count)), mentorFilter)
      .pipe(Repository.responseDataMapper<number>());
  };

  public readonly list = (
    mentorFilter?: MentorMenteeConnectionFilter,
  ): Observable<MentorMenteeConnection[]> => {
    return this.http
      .post<MentorMenteeConnection[]>(
        kebabCase(nameof(this.list)),
        mentorFilter,
      )
      .pipe(
        Repository.responseMapToList<MentorMenteeConnection>(
          MentorMenteeConnection,
        ),
      );
  };

  public readonly create = (
    mentorMentee?: MentorMenteeConnection,
  ): Observable<MentorMenteeConnection> => {
    return this.http
      .post<MentorMenteeConnection>(
        kebabCase(nameof(this.create)),
        mentorMentee,
      )
      .pipe(
        Repository.responseMapToModel<MentorMenteeConnection>(
          MentorMenteeConnection,
        ),
      );
  };
}

export const mentorMenteeRepository: MentorMenteeRepository =
  new MentorMenteeRepository();
