import {Repository} from 'react3l-common';
import {httpConfig, server, Endpoints} from 'src/config';
import type {Observable} from 'rxjs';
import kebabCase from 'lodash/kebabCase';
import nameof from 'ts-nameof.macro';
import {MentorRegisterRequest} from 'src/models/MentorRegisterRequest';
import {ActiveTime} from 'src/models/ActiveTime';

export class MentorRegisterRepository extends Repository {
  constructor() {
    super(httpConfig);
    server.subscribeServerUrl((serverUrl: string) => {
      this.baseURL = new URL(Endpoints.MENTOR_REGISTER_HREF, serverUrl).href;
    });
  }

  public readonly create = (
    mentorRegisterRequest?: MentorRegisterRequest,
  ): Observable<MentorRegisterRequest> => {
    return this.http
      .post<MentorRegisterRequest>(
        kebabCase(nameof(this.create)),
        mentorRegisterRequest,
      )
      .pipe(
        Repository.responseMapToModel<MentorRegisterRequest>(
          MentorRegisterRequest,
        ),
      );
  };

  public readonly singleListUnitOfTime = (): Observable<ActiveTime[]> => {
    return this.http
      .post<ActiveTime[]>(kebabCase(nameof(this.singleListUnitOfTime)), {})
      .pipe(Repository.responseMapToList<ActiveTime>(ActiveTime));
  };
}

export const mentorRegisterRepository: MentorRegisterRepository =
  new MentorRegisterRepository();
