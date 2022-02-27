import React from 'react';
import styles from './DefaultLayout.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {atomicStyles, Colors} from 'src/styles';
import type {ViewStyle} from 'react-native';
import {Text} from 'react-native';
import {TouchableOpacity, View} from 'react-native';
import LoadingLayout from 'src/components/templates/LoadingLayout';
import SvgIcon from 'src/components/atoms/SvgIcon';

const HEIGHT: number = 214;

export function DefaultLayout(
  props: PropsWithChildren<DefaultLayoutProps>,
): ReactElement {
  const {
    title,
    children,
    contentScrollable,
    contentContainerStyle,
    footer,
    loading,
    subTitle,
    icon,
  } = props;

  const layout: ReactElement = (
    <SafeAreaView style={[atomicStyles.flexGrow]}>
      <View
        style={[{height: HEIGHT}, atomicStyles.px6, styles.headerContainer]}>
        <View
          style={[
            atomicStyles.flexRow,
            atomicStyles.alignItemsCenter,
            atomicStyles.justifyContentBetween,
            atomicStyles.pt8,
          ]}>
          <Text style={[atomicStyles.textWhite, styles.titleHeader]}>
            {title}
          </Text>
          <TouchableOpacity>
            <SvgIcon component={require('assets/icons/26/chat.svg')} />
          </TouchableOpacity>
        </View>
        <Text
          style={[
            atomicStyles.bold,
            atomicStyles.textWhite,
            atomicStyles.h4,
            atomicStyles.mt4,
            styles.subTitle,
          ]}>
          {subTitle}
        </Text>
        <View style={[styles.underIcon]}>{icon}</View>
      </View>
      <View
        style={[
          atomicStyles.flex,
          !contentScrollable && atomicStyles.px4,
          atomicStyles.bgSecondary,
          contentContainerStyle,
        ]}>
        {children}
      </View>
      {footer && <View>{footer}</View>}
    </SafeAreaView>
  );

  return (
    <>
      {layout}
      <View style={styles.styleColorScroll}>
        <View style={[atomicStyles.flex, {backgroundColor: Colors.Primary}]} />
        {/*<View*/}
        {/*  style={[atomicStyles.flex, {backgroundColor: Colors.Secondary}]}*/}
        {/*/>*/}
      </View>
      {loading && <LoadingLayout loading={loading} />}
    </>
  );
}

export interface DefaultLayoutProps extends StackScreenProps<any> {
  contentScrollable: boolean;

  title?: string;

  contentContainerStyle?: ViewStyle | ViewStyle[];

  footer?: ReactElement;

  loading?: boolean;

  subTitle?: string;

  icon?: ReactElement;
}

DefaultLayout.defaultProps = {
  isLeftIcon: true,
  contentScrollable: false,
  searchTabVisible: false,
  loading: false,
};

DefaultLayout.displayName = nameof(DefaultLayout);

export default DefaultLayout;
