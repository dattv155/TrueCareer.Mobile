import {hubConnectionSignalr} from 'src/services/signalr-service/hub-connection-signalr';
import type {HubConnection} from '@microsoft/signalr';
import {HubConnectionState} from '@microsoft/signalr';
import {send} from 'src/services/signalr-service/send';
import {useCheckInternet} from 'src/services/signalr-service/use-check-internet';
import type {AppStateStatus} from 'react-native';
import store from 'src/store';

export class SignalService {
  protected hubConnection: HubConnection | null = null;

  protected wifiConnected: boolean = true;

  public readonly hubConnectionSignalr = hubConnectionSignalr;

  public readonly send = send;

  public readonly useCheckInternet = useCheckInternet;

  public readonly hubSyncConnection = () => {
    return this.hubConnection;
  };

  public readonly close = async () => {
    if (
      this.hubConnection &&
      this.hubConnection.state === HubConnectionState.Connected
    ) {
      await this.hubConnection.stop().then(() => {
        this.hubConnection = null;
        // eslint-disable-next-line no-console
        console.log('signalr stopped');
      });
      return;
    }
    if (
      this.hubConnection &&
      this.hubConnection.state === HubConnectionState.Disconnected
    ) {
      this.hubConnection = null;
      // eslint-disable-next-line no-console
      console.log('signalr stopped');
    }
  };

  public readonly handleAppState = async (state: AppStateStatus) => {
    switch (state) {
      case 'active':
        const token = store.getState().authentication?.token!;
        if (token && !this.hubConnection) {
          await this.hubConnectionSignalr();
        }
        break;
      case 'background':
        await this.close();
        break;
    }
  };
}

export const signalService: SignalService = new SignalService();
