import * as signalR from '@microsoft/signalr';
import {HubConnectionState} from '@microsoft/signalr';
import buildUrl from 'build-url';
import type {SignalService} from 'src/services/signalr-service/index';
import {ConversationEndpoints, server} from 'src/config';
import store from 'src/store';
import {conversationSlice} from 'src/store/conversation';
import {ConversationMessage} from 'src/models/ConversationMessage';

const METHOD_NAME: string = 'ReceiveMessage';

export async function hubConnectionSignalr(this: SignalService) {
  const hub = new signalR.HubConnectionBuilder()
    .withUrl(
      buildUrl(server.serverUrl, {
        path: ConversationEndpoints.SIGNALR_HREF,
      }),
      {
        accessTokenFactory: () =>
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidHJvbmdkYXQxNTA1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9wcmltYXJ5c2lkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoxNjU2ODE1NzU1LCJleHAiOjE3NTY4MTU3NTR9.Ndh5oyhZuOZR62ptv4N9XrnYQ9Zkw8TBmodSHYZB9uBkwfeAU1ffFczcHXz17eJp5pLyVnG37EvWImDrURhYYFzliNiseZQO0oDa5x-rV6AbcZfYbSbdpOJoBwrryNw-jVX0RH2EwF5_w7B2SL9kBZ3tKwIIDsLuoWv8I_poTeLryEMsCNv98qXPb73jtBgjc_jYZSb5yLlUBab_9d_knGTqACwRERov_WjQnWVp_huv3SJwjGSU5Ln5u3Kf80YYnMD2DddK7qxpTjpK7cNNFpploQ-YU2oGaHrviIfj_6AAYdVAjGmQLzyT5qZ2ukzlodutlIWc_nKClMfQsZpgbA',
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
