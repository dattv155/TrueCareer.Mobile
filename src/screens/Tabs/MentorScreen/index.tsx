import React from 'react';
import './MentorScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';

export function MentorScreen(
  props: PropsWithChildren<MentorScreenProps>,
): ReactElement {
  const {children} = props;

  return <>{children}</>;
}

export interface MentorScreenProps {
  //
}

MentorScreen.defaultProps = {
  //
};

MentorScreen.displayName = nameof(MentorScreen);

export default MentorScreen;
