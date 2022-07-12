import type {FC, PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import styles from './InputView.scss';
import type {StyleProp} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native';
import {atomicStyles} from 'src/styles';
import {insertSpace} from 'src/helpers/string-helper';

/**
 * File: InputView.tsx
 * @created 2020-12-15 14:57:40
 * @author maivtt14 <vungoc2901@gmail.com>
 * @type {FC<PropsWithChildren<InputViewProps>>}
 */
const InputView: FC<PropsWithChildren<InputViewProps>> = (
  props: PropsWithChildren<InputViewProps>,
): ReactElement => {
  const {icon, style, onIconPress, children, error, borderColor, ...restProps} =
    props;

  return (
    <>
      <View
        style={[
          atomicStyles.flexRow,
          atomicStyles.justifyContentBetween,
          atomicStyles.alignItemsCenter,
          styles.container,
          borderColor && styles.border,
          {borderColor: borderColor},
          style,
        ]}
        {...restProps}>
        <View
          style={[
            atomicStyles.flexRow,
            atomicStyles.justifyContentStart,
            atomicStyles.alignItemsCenter,
            styles.viewContainer,
          ]}>
          {children}
        </View>
        {icon && (
          <TouchableOpacity onPress={onIconPress}>{icon}</TouchableOpacity>
        )}
      </View>
      {!!error && (
        <Text
          style={[
            atomicStyles.textError,
            atomicStyles.pb8px,
            atomicStyles.ml8px,
          ]}>
          {insertSpace(error)}
        </Text>
      )}
    </>
  );
};

export interface InputViewProps {
  icon?: ReactElement | ReactElement[];

  style?: StyleProp<any>;

  onIconPress?(): void;

  error?: string;

  borderColor?: string;
}

InputView.defaultProps = {
  //
};

InputView.propTypes = {
  //
};

InputView.displayName = nameof(InputView);

export default InputView;
