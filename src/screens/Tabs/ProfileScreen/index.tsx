import React from 'react';
import './ProfileScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';

export function ProfileScreen(
  props: PropsWithChildren<ProfileScreenProps>,
): ReactElement {
  const {children} = props;

  return <>{children}</>;
}

export interface ProfileScreenProps {
  //
}

ProfileScreen.defaultProps = {
  //
};

ProfileScreen.displayName = nameof(ProfileScreen);

export default ProfileScreen;
