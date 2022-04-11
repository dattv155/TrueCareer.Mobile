import {configureStore} from '@reduxjs/toolkit';
import {appSettingsSlice} from 'src/store/app-settings';
import {authenticationSlice} from 'src/store/authentication';
import {themeSlice} from 'src/store/theme';
import {conversationSlice} from './conversation';

const middleware = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
  const createFlipperMiddleware =
    require('rn-redux-middleware-flipper').default;
  middleware.push(createFlipperMiddleware());
}

const store = configureStore({
  reducer: {
    appSettings: appSettingsSlice.reducer,
    authentication: authenticationSlice.reducer,
    conversation: conversationSlice.reducer,
    theming: themeSlice.reducer,
  },
  middleware,
});

export default store;
