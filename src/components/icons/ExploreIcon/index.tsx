import React from 'react';
import './ExploreIcon.scss';
import type {ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {SvgProps} from 'react-native-svg';
import {Path} from 'react-native-svg';
import Svg from 'react-native-svg';

export interface FileIconProps {
  focus?: boolean;

  color?: string;
}

export function ExploreIcon(props: SvgProps & FileIconProps): ReactElement {
  const {focus} = props;

  return (
    <>
      {focus ? (
        <Svg width={24} height={24} fill="none" {...props}>
          <Path
            opacity={0.4}
            d="m7.11 5.96 9.02-3.01c4.05-1.35 6.25.86 4.91 4.91l-3.01 9.02c-2.02 6.07-5.34 6.07-7.36 0l-.89-2.68-2.68-.89c-6.06-2.01-6.06-5.32.01-7.35Z"
            fill="#302D87"
          />
          <Path
            d="m12.12 11.63 3.81-3.82-3.81 3.82ZM12.12 12.38c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.8-3.82c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.8 3.82c-.15.14-.34.22-.53.22Z"
            fill="#302D87"
          />
        </Svg>
      ) : (
        <Svg width={24} height={24} fill="none" {...props}>
          <Path
            d="M14.22 21.63c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72c-3.96-1.32-4.79-2.99-4.79-4.17 0-1.17.83-2.85 4.79-4.18l8.49-2.83c2.12-.71 3.89-.5 4.98.58 1.09 1.08 1.3 2.86.59 4.98l-2.83 8.49c-1.33 3.98-3 4.81-4.18 4.81ZM7.64 7.03c-2.78.93-3.77 2.03-3.77 2.75 0 .72.99 1.82 3.77 2.74l2.52.84c.22.07.4.25.47.47l.84 2.52c.92 2.78 2.03 3.77 2.75 3.77.72 0 1.82-.99 2.75-3.77l2.83-8.49c.51-1.54.42-2.8-.23-3.45-.65-.65-1.91-.73-3.44-.22L7.64 7.03Z"
            fill="#302D87"
          />
          <Path
            d="M10.11 14.4c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.58-3.59c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.58 3.59c-.14.15-.34.22-.53.22Z"
            fill="#302D87"
          />
        </Svg>
      )}
    </>
  );
}

export interface ExploreIconProps {
  //
}

ExploreIcon.defaultProps = {
  //
};

ExploreIcon.displayName = nameof(ExploreIcon);

export default ExploreIcon;
