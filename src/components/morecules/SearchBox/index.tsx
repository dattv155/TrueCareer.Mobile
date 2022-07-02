import React from 'react';
import styles from './SearchBox.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StyleProp, TextStyle, ViewProps} from 'react-native';
import {StyleSheet, TextInput, View} from 'react-native';
import SvgIcon from 'src/components/atoms/SvgIcon';
import {atomicStyles, Colors} from 'src/styles';

export function SearchBox(
  props: PropsWithChildren<SearchBoxProps>,
): ReactElement {
  const {placeholder, value, style, onSearch, inputStyle} = props;

  return (
    <View
      style={[
        atomicStyles.flexGrow,
        atomicStyles.flexRow,
        atomicStyles.alignItemsCenter,
        atomicStyles.borderView,
        atomicStyles.bgWhite,
        styles.padding,
        StyleSheet.flatten(style),
      ]}>
      <SvgIcon component={require('assets/icons/search-purple.svg')} />
      <TextInput
        placeholderTextColor={Colors.Black}
        placeholder={placeholder}
        value={value}
        onChangeText={onSearch}
        style={[atomicStyles.h6, inputStyle]}
      />
    </View>
  );
}

export interface SearchBoxProps extends ViewProps {
  //
  placeholder?: string;

  value?: string;

  onSearch?: (value: string) => void;

  inputStyle?: StyleProp<TextStyle>;
}

SearchBox.defaultProps = {
  //
};

SearchBox.displayName = nameof(SearchBox);

export default SearchBox;
