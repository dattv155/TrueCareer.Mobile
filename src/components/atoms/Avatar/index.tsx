import type {PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import type {StyleProp, ViewStyle} from 'react-native';
import {Image, View} from 'react-native';
import {avatarStyles} from './Avatar.styles';
import type {TruesightThemeExtension} from 'react-native-truesight-chat';
import {useThemeValue} from 'react-native-redux-theming';
import {server} from 'src/config';

export function Avatar(props: PropsWithChildren<AvatarProps>): ReactElement {
  const {avatarSource, avatarRadius, avatarStyle, urlSource} = props;

  const messageBackgroundOtherColor = useThemeValue<TruesightThemeExtension>(
    'messageBackgroundOtherColor',
  );

  return (
    <>
      <View
        style={[
          {
            height: avatarRadius,
            width: avatarRadius,
            backgroundColor: messageBackgroundOtherColor,
          },
          avatarStyles.border,
          avatarStyle,
        ]}>
        <Image
          style={[
            {
              height: avatarRadius,
              width: avatarRadius,
            },
            avatarStyles.border,
          ]}
          source={
            avatarSource
              ? {
                  uri: urlSource
                    ? avatarSource
                    : server.serverUrl + avatarSource,
                }
              : require('assets/images/default-avatar.png')
          }
        />
      </View>
    </>
  );
}

export interface AvatarProps {
  avatarRadius?: number;

  avatarSource?: string;

  avatarStyle?: StyleProp<ViewStyle>;

  urlSource?: boolean;
}

Avatar.defaultProps = {
  avatarRadius: 40,
};

Avatar.displayName = nameof(Avatar);

export default Avatar;
