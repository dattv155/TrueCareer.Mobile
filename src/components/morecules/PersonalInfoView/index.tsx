import React from 'react';
import styles from './PersonalInfoView.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {ViewProps} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import SvgIcon from 'src/components/atoms/SvgIcon';
import {atomicStyles} from 'src/styles';

export enum InfoType {
  Work,
  Study,
}

export function PersonalInfoView(
  props: PropsWithChildren<PersonalInfoViewProps>,
): ReactElement {
  const {title, sub1, sub2, iconType, style} = props;

  return (
    <View style={[atomicStyles.alignItemsCenter, StyleSheet.flatten(style)]}>
      {iconType === InfoType.Study ? (
        <SvgIcon component={require('assets/icons/study.svg')} />
      ) : (
        <SvgIcon component={require('assets/icons/personal-card.svg')} />
      )}

      <Text
        style={[atomicStyles.h5, atomicStyles.mt2, styles.textTitle]}
        numberOfLines={2}>
        {title}
      </Text>
      <Text style={[atomicStyles.h6, styles.textSub]}>{sub1}</Text>
      <Text style={[atomicStyles.h6, styles.textSub]}>{sub2}</Text>
    </View>
  );
}

export interface PersonalInfoViewProps extends ViewProps {
  //
  title?: string;
  sub1?: string;
  sub2?: string;
  iconType?: InfoType;
}

PersonalInfoView.defaultProps = {
  //
};

PersonalInfoView.displayName = nameof(PersonalInfoView);

export default PersonalInfoView;
