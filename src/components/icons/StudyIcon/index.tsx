import React from 'react';
import './StudyIcon.scss';
import type {ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {SvgProps} from 'react-native-svg';
import {Path} from 'react-native-svg';
import Svg from 'react-native-svg';

export interface FileIconProps {
  focus?: boolean;

  color?: string;
}

export function StudyIcon(props: SvgProps & FileIconProps): ReactElement {
  const {focus} = props;

  return (
    <>
      {focus ? (
        <Svg width={24} height={24} fill="none" {...props}>
          <Path
            opacity={0.4}
            d="M18.38 12.84v4.93c0 1.27-.99 2.63-2.18 3.03l-3.19 1.06c-.56.19-1.47.19-2.02 0L7.8 20.8c-1.2-.4-2.18-1.76-2.18-3.03l.01-4.93 4.42 2.88c1.08.71 2.86.71 3.94 0l4.39-2.88Z"
            fill="#302D87"
          />
          <Path
            d="m19.98 6.46-5.99-3.93c-1.08-.71-2.86-.71-3.94 0L4.03 6.46c-1.93 1.25-1.93 4.08 0 5.34l1.6 1.04 4.42 2.88c1.08.71 2.86.71 3.94 0l4.39-2.88 1.37-.9V15c0 .41.34.75.75.75s.75-.34.75-.75v-4.92c.4-1.29-.01-2.79-1.27-3.62Z"
            fill="#302D87"
          />
        </Svg>
      ) : (
        <Svg width={24} height={24} fill="none" {...props}>
          <Path
            d="M12.01 17c-.85 0-1.71-.22-2.38-.65l-6.02-3.93a3.923 3.923 0 0 1-1.79-3.3c0-1.34.67-2.57 1.79-3.3L9.64 1.9c1.34-.87 3.43-.87 4.76.01l5.99 3.93c1.11.73 1.78 1.96 1.78 3.29s-.67 2.56-1.78 3.29l-5.99 3.93c-.67.44-1.53.65-2.39.65Zm0-14.25c-.57 0-1.14.13-1.55.41L4.44 7.08c-.7.46-1.11 1.2-1.11 2.04 0 .84.4 1.58 1.11 2.04l6.02 3.93c.83.54 2.29.54 3.12 0l5.99-3.93c.7-.46 1.1-1.2 1.1-2.04 0-.84-.4-1.58-1.1-2.04l-5.99-3.93c-.42-.26-.99-.4-1.57-.4Z"
            fill="#302D87"
          />
          <Path
            d="M12 22.75c-.44 0-.89-.06-1.25-.18l-3.19-1.06c-1.51-.5-2.7-2.15-2.69-3.74l.01-4.69c0-.41.34-.75.75-.75s.75.34.75.75l-.01 4.69c0 .94.78 2.02 1.67 2.32l3.19 1.06c.4.13 1.14.13 1.54 0l3.19-1.06c.89-.3 1.67-1.38 1.67-2.31v-4.64c0-.41.34-.75.75-.75s.75.34.75.75v4.64c0 1.59-1.18 3.23-2.69 3.74l-3.19 1.06c-.36.11-.81.17-1.25.17ZM21.4 15.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75Z"
            fill="#302D87"
          />
        </Svg>
      )}
    </>
  );
}

export interface StudyIconProps {
  //
}

StudyIcon.defaultProps = {
  //
};

StudyIcon.displayName = nameof(StudyIcon);

export default StudyIcon;
