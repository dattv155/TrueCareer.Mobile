import {Repository} from 'react3l-common';
import {httpConfig} from 'src/config';
import {serverUrl} from 'src/config';

export class BaseHttpRepository extends Repository {
  constructor() {
    super(httpConfig);
    serverUrl.subscribe((url: string) => {
      this.baseURL = url;
    });
  }
}
