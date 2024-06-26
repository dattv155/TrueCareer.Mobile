import type {PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import styles from './ConversationMessageFlatList.scss';
import nameof from 'ts-nameof.macro';
import type {
  ConversationMessage,
  TruesightThemeExtension,
} from 'react-native-truesight-chat';
import type {
  ListRenderItem,
  ListRenderItemInfo,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {FlatList, StyleSheet, View} from 'react-native';
import moment from 'moment';
import {useThemeValue} from 'react-native-redux-theming';
import Loading from 'react-native-spinkit';
import MessageItem from 'src/components/atoms/MessageItem/MessageItem';
import {atomicStyles} from 'src/styles';
import {LoadingStatus} from 'src/hooks/use-list';
import SvgIcon from 'src/components/atoms/SvgIcon';
import ListFooter from 'src/components/atoms/ListFooter';
import TextLib from 'src/components/atoms/TextLib';
import {getDate} from 'src/helpers/string-helper';

export function ConversationMessageFlatList(
  props: PropsWithChildren<ConversationMessageFlatListProps>,
): ReactElement {
  const {
    globalUser,
    onSwipe,
    style,
    list,
    total,
    loading,
    refreshing,
    onLoadMore,
    typingLoading,
    error,
    listEnd,
    dateStyle,
  } = props;
  const messageTextSecondaryColor = useThemeValue<TruesightThemeExtension>(
    'messageTextSecondaryColor',
  );
  const primaryColor = useThemeValue('primaryColor');
  const dangerColor = useThemeValue('dangerColor');

  const renderItem: ListRenderItem<ConversationMessage> = React.useCallback(
    ({item, index}: ListRenderItemInfo<ConversationMessage>) => {
      return (
        <MessageItem
          globalUser={globalUser ?? {}}
          conversationMessage={item}
          key={index}
          consecutive={
            index !== 0 && list[index - 1]?.globalUserId === item?.globalUserId
          }
          onSwipe={onSwipe}
          dateStyle={dateStyle}
          header={
            index === total ||
            moment(getDate(item?.createdAt)).diff(
              moment(getDate(list[index + 1]?.createdAt)),
              'days',
            ) !== 0 ? (
              <View
                style={[
                  atomicStyles.pb3,
                  atomicStyles.pt4,
                  atomicStyles.flexRowCenter,
                ]}>
                <TextLib
                  style={[
                    atomicStyles.text,
                    conversationMessageFlatListStyles.font12,
                    atomicStyles.textDark,
                    {color: messageTextSecondaryColor},
                    dateStyle,
                  ]}>
                  {moment(item?.createdAt).calendar()}
                </TextLib>
              </View>
            ) : undefined
          }
        />
      );
    },
    [dateStyle, globalUser, list, messageTextSecondaryColor, onSwipe, total],
  );

  return (
    <>
      <FlatList
        renderItem={renderItem}
        data={list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: ConversationMessage, index: number) =>
          item?.id?.toString() + index?.toString()
        }
        inverted={!(loading === LoadingStatus.FAIL)}
        scrollEventThrottle={10}
        refreshing={refreshing}
        onEndReachedThreshold={0.5}
        onEndReached={onLoadMore}
        ListHeaderComponent={
          <>
            {typingLoading && (
              <View style={[styles.loading, {backgroundColor: primaryColor}]}>
                <Loading
                  isVisible={true}
                  size={20}
                  color={'white'}
                  type={'ThreeBounce'}
                />
              </View>
            )}
            {error && !typingLoading && (
              <View style={atomicStyles.flexRowCenter}>
                <SvgIcon component={require('assets/icons/error.svg')} />
                <TextLib
                  style={[
                    atomicStyles.my2,
                    atomicStyles.ml2,
                    {color: dangerColor},
                  ]}>
                  {error}
                </TextLib>
              </View>
            )}
            <View style={styles.footer} />
          </>
        }
        ListHeaderComponentStyle={[styles.headerListStyle]}
        ListFooterComponent={
          <ListFooter
            isData={true}
            isEnd={false}
            check={total !== list?.length}
            listEnd={listEnd}
          />
        }
        style={style}
      />
    </>
  );
}

export interface ConversationMessageFlatListProps {
  globalUser?: any;

  onSwipe?: (conversationMessage: ConversationMessage) => void;

  list: ConversationMessage[];

  total: number;

  loading?: LoadingStatus;

  refreshing?: boolean;

  onLoadMore?: () => void;

  typingLoading?: boolean;

  error?: string;

  style?: StyleProp<ViewStyle>;

  dateStyle?: StyleProp<TextStyle>;

  listEnd?: string;
}

const conversationMessageFlatListStyles = StyleSheet.create({
  font12: {
    fontSize: 12,
  },
});

ConversationMessageFlatList.defaultProps = {
  //
};

ConversationMessageFlatList.displayName = nameof(ConversationMessageFlatList);

export default ConversationMessageFlatList;
