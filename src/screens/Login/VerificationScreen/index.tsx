import React from 'react';
import './VerificationScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';

export function VerificationScreen(
  props: PropsWithChildren<VerificationScreenProps>,
): ReactElement {
  const {children} = props;

  return <>{children}</>;
}

export interface VerificationScreenProps {
  //
}

VerificationScreen.defaultProps = {
  //
};

VerificationScreen.displayName = nameof(VerificationScreen);

export default VerificationScreen;
