import React from 'react';
import styles from './DefaultLayout.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {atomicStyles, Colors} from 'src/styles';
import type {ViewStyle} from 'react-native';
import {TouchableOpacity, View} from 'react-native';
import ScreenHeader from 'src/components/organisms/ScreenHeader';
import HeaderIconPlaceholder from 'src/components/atoms/HeaderIconPlaceholder';
import HeaderBackButton from 'src/components/atoms/HeaderBackButton';
import HeaderTitle from 'src/components/atoms/HeaderTitle';
import LoadingLayout from 'src/components/templates/LoadingLayout';
import SvgIcon from 'src/components/atoms/SvgIcon';

export function DefaultLayout(
  props: PropsWithChildren<DefaultLayoutProps>,
): ReactElement {
  const {
    navigation,
    title,
    left,
    right,
    children,
    contentScrollable,
    contentContainerStyle,
    onCancel,
    onFilter,
    footer,
    loading,
  } = props;

  const leftChilds = React.Children.toArray(left);

  const rightChilds = React.Children.toArray(right);

  if (leftChilds.length > 2 || rightChilds.length > 2) {
    throw new Error(
      'One header side can not contain more than 2 icon elements',
    );
  }

  const titleIsString: boolean = typeof title === 'string';

  const layout: ReactElement = (
    <SafeAreaView style={[atomicStyles.flexGrow, atomicStyles.mt2]}>
      <ScreenHeader style={[atomicStyles.py1]}>
        {!left ? (
          <HeaderIconPlaceholder />
        ) : typeof left === 'string' && left === 'back-button' ? (
          <HeaderBackButton navigation={navigation} />
        ) : (
          leftChilds
        )}

        <View style={styles.titleHeader}>
          {titleIsString ? <HeaderTitle>{title}</HeaderTitle> : title}
        </View>
        {!right ? (
          <HeaderIconPlaceholder />
        ) : typeof right === 'string' && right === 'search-filter' ? (
          <View style={[atomicStyles.flexRow, styles.right]}>
            <TouchableOpacity onPress={onCancel} style={[atomicStyles.pr4]}>
              <SvgIcon
                component={require('assets/icons/24/search-white.svg')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onFilter}>
              <SvgIcon
                component={require('assets/icons/24/filter-white.svg')}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.right}>
            {titleIsString && rightChilds.length < 2 && (
              <HeaderIconPlaceholder />
            )}
            {titleIsString && rightChilds.length < 1 && (
              <HeaderIconPlaceholder />
            )}
          </View>
        )}
      </ScreenHeader>
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

  isLeftIcon?: boolean;

  title?: string;

  left?: ReactElement | string | undefined;

  right?: ReactElement | string | undefined;

  contentContainerStyle?: ViewStyle | ViewStyle[];

  searchTabVisible?: boolean;

  onCancel?: () => void;

  onFilter?: () => void;

  onSearch?: (value: string) => void;

  footer?: ReactElement;

  loading?: boolean;
}

DefaultLayout.defaultProps = {
  isLeftIcon: true,
  contentScrollable: false,
  searchTabVisible: false,
  loading: false,
};

DefaultLayout.displayName = nameof(DefaultLayout);

export default DefaultLayout;
