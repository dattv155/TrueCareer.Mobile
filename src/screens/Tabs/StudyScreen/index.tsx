import React from 'react';
import './StudyScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';

export function StudyScreen(
  props: PropsWithChildren<StudyScreenProps>,
): ReactElement {
  const {children} = props;

  return <>{children}</>;
}

export interface StudyScreenProps {
  //
}

StudyScreen.defaultProps = {
  //
};

StudyScreen.displayName = nameof(StudyScreen);

export default StudyScreen;
