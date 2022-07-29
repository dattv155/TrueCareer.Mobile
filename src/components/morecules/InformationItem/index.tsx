import React from 'react';
import './InformationItem.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {ViewProps} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native';
import {atomicStyles} from 'src/styles';
import SvgIcon from 'src/components/atoms/SvgIcon';

export function InformationItem(
  props: PropsWithChildren<InformationItemProps>,
): ReactElement {
  const {title, onPress, style, ...restProps} = props;

  return (
    <>
      <TouchableOpacity
        style={[
          atomicStyles.flexRow,
          atomicStyles.alignItemsCenter,
          atomicStyles.justifyContentBetween,
          atomicStyles.p4,
          atomicStyles.bgWhite,
          StyleSheet.flatten(style),
        ]}
        onPress={onPress}
        {...restProps}>
        <Text style={[atomicStyles.textDark, atomicStyles.h5]}>{title}</Text>
        <View>
          <SvgIcon component={require('assets/icons/add.svg')} />
        </View>
      </TouchableOpacity>
    </>
  );
}

export interface InformationItemProps extends ViewProps {
  //
  title?: string;

  onPress?: () => void;
}

InformationItem.defaultProps = {
  //
};

InformationItem.displayName = nameof(InformationItem);

export default InformationItem;
