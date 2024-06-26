import type {PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import type {StyleProp, ViewStyle} from 'react-native';
import {ActivityIndicator, Text, View} from 'react-native';
import {useThemeValue} from 'react-native-redux-theming';
import {atomicStyles} from 'src/styles';

export function ListFooter(
  props: PropsWithChildren<ListFooterProps>,
): ReactElement {
  const {check, isData, isEnd, listEnd, style} = props;
  const darkColor = useThemeValue('darkColor');

  return (
    <>
      <View style={style}>
        {isData && (
          <>
            {check ? (
              <View style={[atomicStyles.alignItemsCenter, atomicStyles.mt4]}>
                <ActivityIndicator color={darkColor} />
              </View>
            ) : (
              isEnd && (
                <View style={[atomicStyles.alignItemsCenter, atomicStyles.mt1]}>
                  <Text>{listEnd ?? ''}</Text>
                </View>
              )
            )}
          </>
        )}
      </View>
    </>
  );
}

export interface ListFooterProps {
  check: boolean;

  isData: boolean;

  isEnd?: boolean;

  style?: StyleProp<ViewStyle>;

  listEnd?: string;
}

ListFooter.defaultProps = {
  //
};

ListFooter.displayName = nameof(ListFooter);

export default ListFooter;
