import React from 'react';
import styles from './LoginLayout.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {SafeAreaView} from 'react-native-safe-area-context';
import {atomicStyles} from 'src/styles';
import type {ViewStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import LoadingLayout from 'src/components/templates/LoadingLayout';
import type {StackScreenProps} from '@react-navigation/stack';

export function LoginLayout(
  props: PropsWithChildren<LoginLayoutProps>,
): ReactElement {
  const {
    title,
    children,
    contentScrollable,
    contentContainerStyle,
    footer,
    loading,
    subTitle,
  } = props;

  return (
    <View style={[]}>
      <SafeAreaView style={[atomicStyles.wh100]}>
        <View
          style={[
            atomicStyles.p4,
            atomicStyles.justifyContentAround,
            styles.headerContainer,
          ]}>
          <Text
            style={[
              atomicStyles.text,
              atomicStyles.textWhite,
              styles.titleHeader,
            ]}>
            {title}
          </Text>
          <Text
            style={[
              atomicStyles.bold,
              atomicStyles.textGray,
              atomicStyles.h4,
              atomicStyles.mt4,
            ]}>
            {subTitle}
          </Text>
        </View>
        {contentScrollable ? (
          children
        ) : (
          <View
            style={[
              atomicStyles.w100,
              atomicStyles.flexGrow,
              atomicStyles.bgSecondary,
              StyleSheet.flatten(contentContainerStyle),
            ]}>
            {children}
          </View>
        )}
        {footer && <View style={[styles.footerContainer]}>{footer}</View>}
      </SafeAreaView>
      {loading && <LoadingLayout loading={loading} />}
    </View>
  );
}

export interface LoginLayoutProps extends StackScreenProps<any> {
  contentScrollable: boolean;

  title?: string;

  contentContainerStyle?: ViewStyle | ViewStyle[];

  footer?: ReactElement;

  loading?: boolean;

  subTitle?: string;
}

LoginLayout.defaultProps = {
  isLeftIcon: true,
  contentScrollable: false,
  searchTabVisible: false,
  loading: false,
};

LoginLayout.displayName = nameof(LoginLayout);

export default LoginLayout;
