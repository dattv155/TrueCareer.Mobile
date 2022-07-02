import React from 'react';
import styles from './TextItem.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {TextStyle, ViewStyle} from 'react-native';
import {Text, View} from 'react-native';
import {atomicStyles} from 'src/styles';

export function TextItem(
  props: PropsWithChildren<TextItemProps>,
): ReactElement {
  const {text, containerStyle, textStyle} = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text
        style={[
          atomicStyles.h6,
          atomicStyles.textWhite,
          styles.text,
          textStyle,
        ]}>
        {text}
      </Text>
    </View>
  );
}

export interface TextItemProps {
  //
  text?: string;

  containerStyle?: ViewStyle | ViewStyle[];

  textStyle?: TextStyle | TextStyle[];
}

TextItem.defaultProps = {
  //
};

TextItem.displayName = nameof(TextItem);

export default TextItem;
