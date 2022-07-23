import * as signalR from '@microsoft/signalr';
import {HubConnectionState} from '@microsoft/signalr';
import buildUrl from 'build-url';
import type {SignalService} from 'src/services/signalr-service/index';
import {ConversationEndpoints, server} from 'src/config';
import store from 'src/store';
import {conversationSlice} from 'src/store/conversation';
import {getRecoil} from 'recoil-nexus';
import {appUserAtom} from 'src/store/atoms/appUserAtom';
import {ConversationMessage} from 'react-native-truesight-chat';

const METHOD_NAME: string = 'ReceiveMessage';

export async function hubConnectionSignalr(this: SignalService) {
  const hub = new signalR.HubConnectionBuilder()
    .withUrl(
      buildUrl(server.serverUrl, {
        path: ConversationEndpoints.SIGNALR_HREF,
      }),
      {
        accessTokenFactory: () => getRecoil(appUserAtom)?.token,
      },
    )
    .configureLogging(signalR.LogLevel.Debug)
    .withAutomaticReconnect()
    .build();

  if (hub) {
    this.hubConnection = hub;
    await this.hubConnection.start();

    if (this.hubConnection.state === HubConnectionState.Connected) {
      this.hubConnection.on(
        METHOD_NAME,
        async (conversationId, action, message) => {
          const newMessage = JSON.parse(message);
          const conversationMessage = Object.assign<ConversationMessage, any>(
            new ConversationMessage(),
            newMessage,
          );
          // eslint-disable-next-line no-console
          console.log(conversationId, action, conversationMessage);
          store.dispatch(
            conversationSlice.actions.setMessage(conversationMessage),
          );
        },
      );
    }
  }
}
