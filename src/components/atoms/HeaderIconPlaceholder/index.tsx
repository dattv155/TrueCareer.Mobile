import React from 'react';
import styles from './HeaderIconPlaceholder.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {ViewProps} from 'react-native';
import {StyleSheet, View} from 'react-native';

export function HeaderIconPlaceholder(
  props: PropsWithChildren<HeaderIconPlaceholderProps>,
): ReactElement {
  const {style, ...restProps} = props;
  return (
    <View
      style={[styles.HeaderIconButton, StyleSheet.flatten(style)]}
      {...restProps}
    />
  );
}

export interface HeaderIconPlaceholderProps extends ViewProps {
  //
}

HeaderIconPlaceholder.defaultProps = {
  //
};

HeaderIconPlaceholder.displayName = nameof(HeaderIconPlaceholder);

export default HeaderIconPlaceholder;
