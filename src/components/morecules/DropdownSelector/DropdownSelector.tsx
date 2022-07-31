import type {FC, PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import styles from './DropdownSelector.scss';
import {atomicStyles, Colors} from 'src/styles';
import type {StyleProp, TextStyle, ViewProps} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native';
import {useBoolean} from 'react3l-common';
import SvgIcon from 'src/components/atoms/SvgIcon';
import type {OptionType} from 'src/types/General';

/**
 * File: DropdownSelector.tsx
 * @created 2021-11-03 06:01:25
 * @author TrongDat <trongdat1505@gmail.com>
 * @type {FC<PropsWithChildren<DropdownSelectorProps>>}
 */
const DropdownSelector: FC<PropsWithChildren<DropdownSelectorProps>> = (
  props: PropsWithChildren<DropdownSelectorProps>,
): ReactElement => {
  const {
    title,
    titleStyle,
    optionLabelStyle,
    onSelect,
    style,
    listOptions,
    initial,
  } = props;
  const [dropdown, toggleDropdown] = useBoolean(false);

  const [currentSelection, setCurrentSelection] =
    React.useState<OptionType>(initial);

  const handleSelect = React.useCallback(
    (value: OptionType) => {
      if (typeof onSelect === 'function') {
        onSelect(value.id);
      }
      setCurrentSelection(value);
      toggleDropdown();
    },
    [onSelect, toggleDropdown],
  );

  return (
    <View style={style}>
      <TouchableOpacity
        onPress={toggleDropdown}
        style={[
          atomicStyles.flexRow,
          atomicStyles.alignItemsCenter,
          atomicStyles.justifyContentBetween,
          atomicStyles.bgWhite,
          styles.bgNone,
        ]}>
        <Text
          style={[
            {color: Colors.Black},
            atomicStyles.text,
            styles.title,
            titleStyle,
          ]}>
          {title}
        </Text>
        <View
          style={[
            atomicStyles.flexRow,
            atomicStyles.alignItemsCenter,
            atomicStyles.justifyContentEnd,
            styles.right,
          ]}>
          <Text numberOfLines={2} style={[atomicStyles.mr2, styles.itemTitle]}>
            {currentSelection?.name}
          </Text>
          <View style={[styles.iconR]}>
            {dropdown ? (
              <SvgIcon component={require('assets/icons/16/arrown-up.svg')} />
            ) : (
              <SvgIcon component={require('assets/icons/16/arrown-down.svg')} />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {dropdown && (
        <View style={[styles.bgNone, atomicStyles.mt1, atomicStyles.p2]}>
          {listOptions?.map((item, index) => {
            return (
              <TouchableOpacity
                style={[
                  atomicStyles.py2,
                  atomicStyles.px4,
                  currentSelection?.id === item.id && styles.selectedOption,
                ]}
                key={index}
                onPress={() => handleSelect(item)}>
                <Text style={[styles.itemTitle, optionLabelStyle]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export interface DropdownSelectorProps extends ViewProps {
  //
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  optionLabelStyle?: StyleProp<TextStyle>;
  iconRight?: ReactElement;
  listLabelOptions?: string[];
  onSelect?: (value: number) => void;
  initial?: any;
  listOptions?: OptionType[];
}

DropdownSelector.defaultProps = {};

DropdownSelector.propTypes = {
  //
};

DropdownSelector.displayName = nameof(DropdownSelector);

export default DropdownSelector;
