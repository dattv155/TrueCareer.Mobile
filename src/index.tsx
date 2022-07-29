/**
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {name as appName} from 'app.json';
import type {FC} from 'react';
import React, {Suspense} from 'react';
import {AppRegistry, AppState, Platform, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from 'src/store';
import en from 'src/i18n/en.json';
import vi from 'src/i18n/vi.json';
import i18next from 'i18next';
import nameof from 'ts-nameof.macro';
import {initReactI18next} from 'react-i18next';
import addReactNDevTools from 'reactn-devtools';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import {appStorage, globalState} from 'src/app';
import {appSettingsSlice} from 'src/store/app-settings';
import {APP_SERVER_URL} from 'src/config/consts';
import {authenticationSlice} from 'src/store/authentication';
import {signalService} from 'src/services/signalr-service';
import SplashScreen from 'react-native-splash-screen';
import {navigationRef} from 'src/config/navigation';
import RootNavigator from './navigators/RootNavigator/RootNavigator';
import LoginNavigator from './navigators/LoginNavigator';
import {RecoilRoot, useRecoilValue} from 'recoil';
import Spinner from 'react-native-spinkit';
import {appUserAtom} from './store/atoms/appUserAtom';
import RecoilNexus from 'recoil-nexus';
import {server} from 'src/config';
import {atomicStyles} from 'src/styles';
import {conversationRepository} from './repositories/conversation-repository';
import {conversationMessageRepository} from './repositories/conversation-message-repository';
import TruesightChat from 'react-native-truesight-chat';
import {ModelFilter} from 'react3l-common';

if (__DEV__) {
  addReactNDevTools();

  /**
   * Keep device screen awake on development
   */
  require('react-native-keep-awake').default.activate();
}

ModelFilter.prototype.skip = 0;
ModelFilter.prototype.take = 10;

TruesightChat.config({
  serverUrl: server.serverUrl,
  atomicStyles: atomicStyles,
  listConversation: conversationRepository.list,
  countConversation: conversationRepository.count,
  listConversationMessage: conversationMessageRepository.list,
  countConversationMessage: conversationMessageRepository.count,
  listConversationAttachment:
    conversationMessageRepository.listConversationAttachment,
  countConversationAttachment:
    conversationMessageRepository.countConversationAttachment,
  singleListGlobalUser: conversationRepository.singleListGlobalUser,
  multiUploadFile: conversationMessageRepository.multiUploadFile,
  create: conversationMessageRepository.create,
  get: conversationRepository.get,
  update: conversationRepository.update,
});

const App = React.lazy(async () => {
  await appStorage.initialize();
  await globalState.initialize();

  store.dispatch(
    appSettingsSlice.actions.loadAppSettings({
      baseUrl: appStorage.serverUrl! ?? APP_SERVER_URL,
      language: await appStorage.language!,
    }),
  );
  store.dispatch(authenticationSlice.actions.setUser(appStorage));

  const subscription = AppState.addEventListener(
    'change',
    signalService.handleAppState,
  );

  await i18next.use(initReactI18next).init({
    lng: nameof(vi),
    fallbackLng: nameof(vi),
    defaultNS: '',
    ns: '',
    keySeparator: '.',
    nsSeparator: ':',
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
    resources: {
      translations: {
        en,
        vi,
      },
    },
  });

  await i18next.addResources(nameof(vi), '', vi as any);
  await i18next.addResources(nameof(en), '', en as any);

  await i18next.changeLanguage(nameof(vi));

  // await signalService.hubConnectionSignalr();

  return {
    default: function RootComponent() {
      // appLocation.useLocation();

      const user = useRecoilValue(appUserAtom);

      React.useEffect(() => {
        if (Platform.OS !== 'android') {
          SplashScreen.hide();
        }
        return function cleanup() {
          subscription.remove();
        };
      }, []);

      // React.useEffect(() => {
      //   return messaging().onMessage((remoteMessage: any) => {
      //     PushNotification.localNotification({
      //       title: remoteMessage?.notification?.title,
      //       message: remoteMessage?.notification?.body,
      //     });
      //   });
      // }, [userId]);

      if (user) {
        return <RootNavigator />;
      }
      return <LoginNavigator />;
    },
  };
});

const AppEntry: FC = () => {
  useReduxDevToolsExtension(navigationRef);

  return (
    <RecoilRoot>
      <RecoilNexus />
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar barStyle="light-content" />
          <NavigationContainer>
            <Suspense fallback={<Spinner />}>
              <App />
            </Suspense>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </RecoilRoot>
  );
};

AppEntry.displayName = nameof(AppEntry);

AppRegistry.registerComponent(appName, () => AppEntry);
