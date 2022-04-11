import type {NetInfoState} from '@react-native-community/netinfo';
import {useNetInfo} from '@react-native-community/netinfo';
import React from 'react';
import type {SignalService} from 'src/services/signalr-service/index';

export function useCheckInternet(this: SignalService) {
  const netInfoState: NetInfoState = useNetInfo();

  React.useEffect(() => {
    if (netInfoState.isConnected === false) {
      this.close();
    }
  }, [netInfoState]);
}
