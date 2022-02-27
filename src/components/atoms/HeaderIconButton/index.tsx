import React from 'react';
import styles from './HeaderIconButton.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {TouchableOpacityProps} from 'react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {atomicStyles} from 'src/styles';

export function HeaderIconButton(
  props: PropsWithChildren<HeaderIconButtonProps>,
): ReactElement {
  const {style, children, ...restProps} = props;
  return (
    <TouchableOpacity
      style={[styles.width, atomicStyles.p8px, StyleSheet.flatten(style)]}
      {...restProps}>
      {children}
    </TouchableOpacity>
  );
}

export interface HeaderIconButtonProps extends TouchableOpacityProps {
  //
}

HeaderIconButton.defaultProps = {
  //
};

HeaderIconButton.displayName = nameof(HeaderIconButton);

export default HeaderIconButton;
