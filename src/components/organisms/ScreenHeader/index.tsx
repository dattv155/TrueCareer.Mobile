import React from 'react';
import styles from './ScreenHeader.scss';
import type {PropsWithChildren, ReactElement, ReactNode} from 'react';
import nameof from 'ts-nameof.macro';
import {atomicStyles} from 'src/styles';
import type {StyleProp, ViewStyle} from 'react-native';
import {StyleSheet, View} from 'react-native';

export function ScreenHeader(
  props: PropsWithChildren<ScreenHeaderProps>,
): ReactElement {
  const {children, style} = props;

  const childs: ReactNode[] = React.useMemo(() => {
    return React.Children.toArray(children);
  }, [children]);

  return (
    <View style={[styles.header, StyleSheet.flatten(style)]}>
      <View style={[atomicStyles.w100, atomicStyles.p2, styles.headerContent]}>
        {childs}
      </View>
    </View>
  );
}

export interface ScreenHeaderProps {
  //
  style?: StyleProp<ViewStyle>;
}

ScreenHeader.defaultProps = {
  //
};

ScreenHeader.displayName = nameof(ScreenHeader);

export default ScreenHeader;
