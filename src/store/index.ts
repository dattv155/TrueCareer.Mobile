import {configureStore} from '@reduxjs/toolkit';

const middlewares = [];

if (__DEV__) {
  const rnFlipper = require('rn-redux-middleware-flipper').default;
  const reduxFlipper = require('redux-flipper').default;
  middlewares.push(rnFlipper(), reduxFlipper());
}

export const store = configureStore({
  reducer: {},
  middleware: middlewares,
});
