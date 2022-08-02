import React from 'react';
import styles from './MentorItem.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {TouchableOpacityProps} from 'react-native';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {atomicStyles} from 'src/styles';
import SvgIcon from 'src/components/atoms/SvgIcon';
import TextItem from 'src/components/atoms/TextItem';
import type {Mentor} from 'src/models/Mentor';

export function MentorItem(
  props: PropsWithChildren<MentorItemProps>,
): ReactElement {
  const {mentor, onPress, ...rest} = props;

  return (
    <TouchableOpacity style={[atomicStyles.mb4]} onPress={onPress} {...rest}>
      <View
        style={[
          atomicStyles.flexRow,
          atomicStyles.alignItemsCenter,
          atomicStyles.justifyContentStart,
          atomicStyles.borderView,
          atomicStyles.bgWhite,
          styles.containerView,
        ]}>
        <View style={[atomicStyles.flexCol, atomicStyles.mr8]}>
          <Image source={{uri: mentor?.avatar}} style={[styles.avatarView]} />
          <View
            style={[
              atomicStyles.flexRow,
              atomicStyles.alignItemsCenter,
              atomicStyles.justifyContentBetween,
              atomicStyles.mt2,
            ]}>
            <View
              style={[
                atomicStyles.flexRow,
                atomicStyles.alignItemsCenter,
                atomicStyles.p1,
              ]}>
              <SvgIcon component={require('assets/icons/heart.svg')} />
              <Text
                style={[
                  atomicStyles.ml1,
                  atomicStyles.textBold,
                  styles.heartText,
                ]}>
                {mentor?.likeCount}
              </Text>
            </View>
            <View
              style={[
                atomicStyles.flexRow,
                atomicStyles.alignItemsCenter,
                atomicStyles.p1,
              ]}>
              <SvgIcon component={require('assets/icons/connection.svg')} />
              <Text
                style={[
                  atomicStyles.bold,
                  atomicStyles.ml1,
                  atomicStyles.textBlue,
                ]}>
                {mentor?.menteeCount}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            atomicStyles.flexCol,
            atomicStyles.justifyContentBetween,
            atomicStyles.alignItemsStart,
          ]}>
          <Text
            style={[
              atomicStyles.bold,
              styles.textName,
              atomicStyles.textPrimary,
            ]}>
            {mentor?.displayName}
          </Text>
          <Text
            style={[atomicStyles.h5, atomicStyles.mt2, styles.textTitle]}
            numberOfLines={2}>
            {mentor?.jobRole}
          </Text>
          <Text style={[atomicStyles.h6, atomicStyles.light, styles.textSub]}>
            {mentor?.companyName}
          </Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={[styles.titleContainer]}>
            <TextItem
              text={'Information Technology'}
              textStyle={[atomicStyles.text, atomicStyles.light]}
              containerStyle={[atomicStyles.mr2, atomicStyles.px2]}
            />
          </ScrollView>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export interface MentorItemProps extends TouchableOpacityProps {
  //
  mentor?: Mentor;

  onPress?: () => void;
}

MentorItem.defaultProps = {
  //
};

MentorItem.displayName = nameof(MentorItem);

export default MentorItem;
