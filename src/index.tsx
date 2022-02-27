/**
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {name as appName} from 'app.json';
import type {FC} from 'react';
import React, {Suspense} from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './store';
import en from 'src/i18n/en.json';
import vi from 'src/i18n/vi.json';
import i18next from 'i18next';
import nameof from 'ts-nameof.macro';
import {initReactI18next} from 'react-i18next';

const App = React.lazy(async function () {
  await i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
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
  // await localization.addLanguage(
  //   AppLanguage.ENGLISH,
  //   require('./i18n/en.json'),
  // );
  //
  // await localization.addLanguage(
  //   AppLanguage.VIETNAMESE,
  //   require('./i18n/vi.json'),
  // );

  return import('./App');
});

const AppEntry: FC = () => {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Suspense fallback={null}>
              <App />
            </Suspense>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

AppRegistry.registerComponent(appName, () => AppEntry);
