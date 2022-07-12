import React from 'react';
import styles from './ButtonComponent.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {
  ColorValue,
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {atomicStyles} from 'src/styles';

export function ButtonComponent(
  props: PropsWithChildren<ButtonComponentProps>,
): ReactElement {
  const {title, color, style, onPress, textStyle, ...restProps} = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        color && {backgroundColor: color},
        StyleSheet.flatten(style),
      ]}
      onPress={onPress}
      {...restProps}>
      <Text
        style={[
          atomicStyles.text,
          atomicStyles.textWhite,
          atomicStyles.h4,
          StyleSheet.flatten(textStyle),
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export interface ButtonComponentProps extends TouchableOpacityProps {
  //
  title: string;

  color?: ColorValue;

  textStyle?: StyleProp<TextStyle>;
}

ButtonComponent.defaultProps = {
  //
};

ButtonComponent.displayName = nameof(ButtonComponent);

export default ButtonComponent;
