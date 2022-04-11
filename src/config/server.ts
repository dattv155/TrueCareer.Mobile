import {BehaviorSubject, Subscription} from 'rxjs';
import {AppStorage} from 'src/app/app-storage';
import {APP_SERVER_URL} from 'src/config/consts';

export const serverUrl: BehaviorSubject<string> = new BehaviorSubject<string>(
  APP_SERVER_URL,
);

const appStorage: AppStorage = new AppStorage();

export class Server {
  protected subscription: Subscription = new Subscription();

  public get serverUrl(): string {
    return serverUrl.getValue();
  }

  public set serverUrl(url: string) {
    serverUrl.next(url);
  }

  public setServerUrl = async (url: string) => {
    this.serverUrl = url;
    await appStorage.saveServerUrl(url);
  };

  public subscribeServerUrl = (task: (url: string) => any): Subscription => {
    const subscription: Subscription = serverUrl.subscribe(task);
    this.subscription.add(subscription);
    return subscription;
  };
}

export const server: Server = new Server();
