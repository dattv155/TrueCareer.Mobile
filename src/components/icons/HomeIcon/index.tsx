import React from 'react';
import './HomeIcon.scss';
import type {ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {SvgProps} from 'react-native-svg';
import {Path} from 'react-native-svg';
import Svg from 'react-native-svg';

export interface FileIconProps {
  focus?: boolean;

  color?: string;
}

export function HomeIcon(props: SvgProps & FileIconProps): ReactElement {
  const {focus} = props;

  return (
    <>
      {focus ? (
        <Svg width={24} height={24} fill="none" {...props}>
          <Path
            d="M9.144 20.782v-3.067c0-.777.632-1.408 1.414-1.413h2.875c.786 0 1.423.633 1.423 1.413v3.058c0 .674.548 1.222 1.227 1.227h1.96a3.46 3.46 0 0 0 2.444-1 3.41 3.41 0 0 0 1.013-2.422V9.866c0-.735-.328-1.431-.895-1.902l-6.662-5.29a3.115 3.115 0 0 0-3.958.071L3.467 7.963A2.474 2.474 0 0 0 2.5 9.867v8.703C2.5 20.464 4.047 22 5.956 22h1.916c.327.002.641-.125.873-.354.232-.228.363-.54.363-.864h.036Z"
            fill="#302D87"
          />
        </Svg>
      ) : (
        <Svg width={24} height={24} fill="none" {...props}>
          <Path
            d="M9.157 20.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v0-8.724a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0L3.462 7.943A2.42 2.42 0 0 0 2.5 9.847v8.715C2.5 20.46 4.055 22 5.973 22h1.924c.685 0 1.241-.55 1.241-1.229v0"
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

export interface HomeIconProps {
  //
}

HomeIcon.defaultProps = {
  //
};

HomeIcon.displayName = nameof(HomeIcon);

export default HomeIcon;
