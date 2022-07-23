import React from 'react';
import {conversationRepository} from 'src/repositories/conversation-repository';
import {useNavigation} from '@react-navigation/native';
import type {GlobalUser} from 'react-native-truesight-chat';
import {useRecoilState, useRecoilValue} from 'recoil';
import {appUserAtom} from 'src/store/atoms/appUserAtom';
import {globalUserAtom} from 'src/store/atoms/globalUserAtom';

export function useGetGlobalUser() {
  const navigation = useNavigation();

  const user = useRecoilValue(appUserAtom);
  const [globalUser, setGlobalUser] = useRecoilState(globalUserAtom);

  React.useEffect(() => {
    return navigation.addListener('focus', () => {
      if (!globalUser) {
        conversationRepository
          .getGlobalUser({
            rowId: user?.rowId,
          })
          .subscribe({
            next: async (globalUser1: GlobalUser) => {
              setGlobalUser(globalUser1);
            },
            error: () => {},
          });
      }
    });
  }, [globalUser, navigation, setGlobalUser, user]);
}
