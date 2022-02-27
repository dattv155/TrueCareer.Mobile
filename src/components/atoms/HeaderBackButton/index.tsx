import React from 'react';
import './HeaderBackButton.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StackNavigationProp} from '@react-navigation/stack';
import HeaderIconButton from 'src/components/atoms/HeaderIconButton';
import SvgIcon from '../SvgIcon';

export function HeaderBackButton(
  props: PropsWithChildren<HeaderBackButtonProps>,
): ReactElement {
  const {navigation} = props;

  return (
    <HeaderIconButton onPress={navigation.goBack}>
      <SvgIcon component={require('assets/icons/system/left.svg')} />
    </HeaderIconButton>
  );
}

export interface HeaderBackButtonProps {
  //
  navigation: StackNavigationProp<any>;
}

HeaderBackButton.defaultProps = {
  //
};

HeaderBackButton.displayName = nameof(HeaderBackButton);

export default HeaderBackButton;
