import React from 'react';
import styles from './InputItem.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {atomicStyles, Colors} from 'src/styles';
import type {StyleProp, ViewProps, ViewStyle} from 'react-native';
import {TextInput, TouchableOpacity, View} from 'react-native';

export function InputItem(
  props: PropsWithChildren<InputItemProps>,
): ReactElement {
  const {
    title,
    value,
    onChange,
    icon,
    style,
    onIconPress,
    height,
    multiline,
    ...restProps
  } = props;

  return (
    <>
      <View
        style={[
          atomicStyles.flexRow,
          atomicStyles.justifyContentBetween,
          atomicStyles.alignItemsCenter,
          styles.container,
          style,
        ]}
        {...restProps}>
        <View
          style={[
            atomicStyles.flexRow,
            atomicStyles.justifyContentStart,
            atomicStyles.alignItemsCenter,
          ]}>
          <TextInput
            style={[
              atomicStyles.w100,
              atomicStyles.h5,
              atomicStyles.light,
              atomicStyles.textGray,
              height && {height: height},
            ]}
            textAlignVertical={'top'}
            placeholderTextColor={Colors.Gray}
            placeholder={title}
            value={value}
            onChangeText={onChange}
            multiline={multiline ?? false}
          />
        </View>
        {icon && (
          <TouchableOpacity onPress={onIconPress}>{icon}</TouchableOpacity>
        )}
      </View>
    </>
  );
}

export interface InputItemProps extends ViewProps {
  //
  title?: string;

  value?: string;

  onChange?: (value: string) => void;

  icon?: ReactElement | ReactElement[];

  onIconPress?: () => void;

  style?: StyleProp<ViewStyle>;

  height?: number;

  multiline?: boolean;
}

InputItem.defaultProps = {
  //
};

InputItem.displayName = nameof(InputItem);

export default InputItem;
