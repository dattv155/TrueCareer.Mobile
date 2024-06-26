import React from 'react';
import './ConversationListScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StackScreenProps} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import DefaultLayout from 'src/components/templates/DefaultLayout';
import SvgIcon from 'src/components/atoms/SvgIcon';
import {atomicStyles, Colors} from 'src/styles';
import {useRecoilValue} from 'recoil';
import {globalUserAtom} from 'src/store/atoms/globalUserAtom';
import {conversationService} from 'src/services/conversation-service';
import ConversationChatScreen from '../ConversationChatScreen';
import ConversationFlatList from 'src/components/organisms/ConversationFlatList';
import {StatusBar} from 'react-native';

export function ConversationListScreen(
  props: PropsWithChildren<ConversationListScreenProps>,
): ReactElement {
  const {navigation, route} = props;

  const [translate] = useTranslation();

  const globalUser = useRecoilValue(globalUserAtom);

  conversationService.useGetGlobalUser();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.Primary}
      />
      <DefaultLayout
        title={translate('Không gian tư vấn')}
        subTitle={translate(
          'Đồng hành cùng các thầy cô và anh chị tư vấn để tìm được ngành học phù hợp với bản thân mình',
        )}
        icon={
          <SvgIcon component={require('assets/icons/large/big-chat.svg')} />
        }
        contentScrollable={true}
        navigation={navigation}
        route={route}>
        <ConversationFlatList
          navigation={navigation}
          target={ConversationChatScreen.displayName!}
          style={atomicStyles.p4}
          globalUser={globalUser}
          avatar={true}
        />
      </DefaultLayout>
    </>
  );
}

export interface ConversationListScreenProps extends StackScreenProps<any> {
  //
}

ConversationListScreen.defaultProps = {
  //
};

ConversationListScreen.displayName = nameof(ConversationListScreen);

export default ConversationListScreen;
