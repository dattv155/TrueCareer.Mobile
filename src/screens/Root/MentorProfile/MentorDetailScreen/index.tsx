import React from 'react';
import './MentorDetailScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';

export function MentorDetailScreen(
  props: PropsWithChildren<MentorDetailScreenProps>,
): ReactElement {
  const {children} = props;

  return <>{children}</>;
}

export interface MentorDetailScreenProps {
  //
}

MentorDetailScreen.defaultProps = {
  //
};

MentorDetailScreen.displayName = nameof(MentorDetailScreen);

export default MentorDetailScreen;
