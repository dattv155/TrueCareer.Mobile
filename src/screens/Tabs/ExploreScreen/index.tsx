import React from 'react';
import './ExploreScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';

export function ExploreScreen(
  props: PropsWithChildren<ExploreScreenProps>,
): ReactElement {
  const {children} = props;

  return <>{children}</>;
}

export interface ExploreScreenProps {
  //
}

ExploreScreen.defaultProps = {
  //
};

ExploreScreen.displayName = nameof(ExploreScreen);

export default ExploreScreen;
