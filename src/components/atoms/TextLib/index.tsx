import type {PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import type {TextProps} from 'react-native';
import {Text} from 'react-native';
import {useThemeValue} from 'react-native-redux-theming';
import type {TruesightThemeExtension} from 'react-native-truesight-chat';
import {atomicStyles} from 'src/styles';

export function TextLib(props: PropsWithChildren<TextLibProps>): ReactElement {
  const {children, style, ...resProps} = props;
  const messageTextSecondaryColor = useThemeValue<TruesightThemeExtension>(
    'messageTextSecondaryColor',
  );

  return (
    <Text
      style={[
        atomicStyles.textDark,
        atomicStyles.text,
        atomicStyles.light,
        {color: messageTextSecondaryColor},
        style,
      ]}
      {...resProps}>
      {children}
    </Text>
  );
}

export interface TextLibProps extends TextProps {
  //
}

TextLib.defaultProps = {
  //
};

TextLib.displayName = nameof(TextLib);

export default TextLib;
