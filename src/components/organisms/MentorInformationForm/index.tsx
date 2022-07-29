import React from 'react';
import styles from './MentorInformationForm.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StyleProp, ViewProps, ViewStyle} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {atomicStyles, Colors} from 'src/styles';
import ButtonComponent from 'src/components/atoms/ButtonComponent';

export function MentorInformationForm(
  props: PropsWithChildren<MentorInformationFormProps>,
): ReactElement {
  const {
    title,
    onGoNext,
    nextButtonStyle,
    nextTitle,
    contentContainerStyle,
    children,
  } = props;

  return (
    <View style={[atomicStyles.flex]}>
      <View style={[styles.headerContainer]}>
        <Text
          style={[
            atomicStyles.h3,
            atomicStyles.textBold,
            atomicStyles.textBlue,
          ]}>
          {title}
        </Text>
      </View>
      <View
        style={[
          atomicStyles.flex,
          atomicStyles.px4,
          styles.bodyStyle,
          contentContainerStyle,
        ]}>
        {children}
      </View>
      <View
        style={[
          atomicStyles.flexRow,
          atomicStyles.alignItemsCenter,
          atomicStyles.justifyContentCenter,
          styles.nextButton,
        ]}>
        <ButtonComponent
          title={nextTitle}
          onPress={onGoNext}
          style={[
            atomicStyles.p2,
            atomicStyles.w90,
            StyleSheet.flatten(nextButtonStyle),
          ]}
          color={Colors.Purple}
        />
      </View>
    </View>
  );
}

export interface MentorInformationFormProps extends ViewProps {
  //
  title?: string;

  onGoNext?: () => void;

  nextTitle?: string;

  nextButtonStyle?: StyleProp<ViewStyle>;

  contentContainerStyle?: StyleProp<ViewStyle>;
}

MentorInformationForm.defaultProps = {
  //
};

MentorInformationForm.displayName = nameof(MentorInformationForm);

export default MentorInformationForm;
