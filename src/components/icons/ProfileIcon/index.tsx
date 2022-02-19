import React from 'react';
import './ProfileIcon.scss';
import type {ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {SvgProps} from 'react-native-svg';
import {Circle} from 'react-native-svg';
import {Path} from 'react-native-svg';
import Svg from 'react-native-svg';

export interface FileIconProps {
  focus?: boolean;

  color?: string;
}

export function ProfileIcon(props: SvgProps & FileIconProps): ReactElement {
  const {focus} = props;

  return (
    <>
      {focus ? (
        <Svg width={24} height={24} fill="none" {...props}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.294 7.291A5.274 5.274 0 0 1 12 12.583a5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 12 2a5.273 5.273 0 0 1 5.294 5.291ZM12 22c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401 4.339 0 8 .705 8 3.425C20 21.32 16.315 22 12 22Z"
            fill="#302D87"
          />
        </Svg>
      ) : (
        <Svg width={24} height={24} fill="none" {...props}>
          <Circle
            cx={11.579}
            cy={7.278}
            r={4.778}
            stroke="#302D87"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            clipRule="evenodd"
            d="M4 18.702a2.215 2.215 0 0 1 .22-.97c.457-.916 1.748-1.401 2.819-1.62a16.778 16.778 0 0 1 2.343-.33 25.059 25.059 0 0 1 4.385 0c.787.055 1.57.165 2.343.33 1.07.219 2.361.658 2.82 1.62a2.27 2.27 0 0 1 0 1.949c-.459.961-1.75 1.4-2.82 1.61a15.71 15.71 0 0 1-2.343.34c-1.188.1-2.38.119-3.57.055-.275 0-.54 0-.815-.055a15.417 15.417 0 0 1-2.334-.34c-1.08-.21-2.361-.649-2.828-1.61a2.28 2.28 0 0 1-.22-.98Z"
            stroke="#302D87"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      )}
    </>
  );
}

export interface ProfileIconProps {
  //
}

ProfileIcon.defaultProps = {
  //
};

ProfileIcon.displayName = nameof(ProfileIcon);

export default ProfileIcon;
