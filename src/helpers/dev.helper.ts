export function logDevError(error: Partial<Error>) {
  // Sentry.captureException(error);
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
