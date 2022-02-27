import React from 'react';
import './HeaderTitle.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {atomicStyles} from 'src/styles';
import {Text} from 'react-native';

export function HeaderTitle(
  props: PropsWithChildren<HeaderTitleProps>,
): ReactElement {
  return (
    <Text
      style={[
        atomicStyles.flexGrow,
        atomicStyles.textWhite,
        atomicStyles.textCenter,
        atomicStyles.h4,
      ]}
      numberOfLines={1}
      ellipsizeMode={'tail'}>
      {props.children}
    </Text>
  );
}

export interface HeaderTitleProps {
  //
}

HeaderTitle.defaultProps = {
  //
};

HeaderTitle.displayName = nameof(HeaderTitle);

export default HeaderTitle;
