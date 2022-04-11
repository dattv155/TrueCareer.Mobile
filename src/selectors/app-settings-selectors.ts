import type {GlobalState} from 'src/types/GlobalState';
import type {GeoPosition} from 'react-native-geolocation-service';

export const baseUrlSelector = (state: GlobalState) =>
  state.appSettings.baseUrl;

export const locationSelector = (state: GlobalState): GeoPosition | undefined =>
  state?.appSettings?.location;
