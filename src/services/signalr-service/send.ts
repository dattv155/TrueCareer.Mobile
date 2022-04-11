import type {SignalService} from 'src/services/signalr-service/index';
import {HubConnectionState} from '@microsoft/signalr';
import type {AppUser, Conversation} from 'src/models';
import {logDevError} from 'src/helpers/dev.helper';

const METHOD_NAME: string = 'SendMessage';

export async function send(
  this: SignalService,
  conversation: Conversation,
  user: AppUser,
  message: string,
) {
  if (
    this.hubConnection &&
    this.hubConnection?.state === HubConnectionState.Connected
  ) {
    try {
      await this.hubConnection.send(
        METHOD_NAME,
        conversation?.id!.toString(),
        user?.id!.toString(),
        'CREATE',
        '0',
        JSON.stringify(message),
      );
    } catch (error: any) {
      logDevError(error);
    }
  }
}
