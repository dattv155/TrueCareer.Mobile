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
import localization from 'react3l-localization';
import {store} from './store';
import {AppLanguage} from './types/AppLanguage';

const App = React.lazy(async function () {
  await localization.initialize({
    compatibilityJSON: 'v3',
    lng: AppLanguage.VIETNAMESE,
    fallbackLng: AppLanguage.VIETNAMESE,
    ns: '',
    defaultNS: '',
    resources: {
      translations: {},
    },
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  });
  await localization.addLanguage(
    AppLanguage.ENGLISH,
    require('./i18n/en.json'),
  );

  await localization.addLanguage(
    AppLanguage.VIETNAMESE,
    require('./i18n/vi.json'),
  );

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
