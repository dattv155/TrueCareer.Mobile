import React from 'react';
import styles from './MentorItem.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {TouchableOpacityProps} from 'react-native';
import {Image, ScrollView, Text, View} from 'react-native';
import {atomicStyles} from 'src/styles';
import SvgIcon from 'src/components/atoms/SvgIcon';
import TextItem from 'src/components/atoms/TextItem';

export function MentorItem(
  props: PropsWithChildren<MentorItemProps>,
): ReactElement {
  const {...rest} = props;

  return (
    <View style={[atomicStyles.mb4]} {...rest}>
      <View
        style={[
          atomicStyles.flexRow,
          atomicStyles.alignItemsCenter,
          atomicStyles.justifyContentStart,
        ]}>
        <View style={[atomicStyles.flexCol, atomicStyles.mr8]}>
          <Image
            source={require('assets/images/default-mentor.png')}
            style={{width: 110, height: 110}}
          />
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
                20
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
                  atomicStyles.textBold,
                  atomicStyles.ml1,
                  styles.connectionText,
                ]}>
                50
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
          <Text style={[atomicStyles.h2, styles.textName]}>Dat Vu Trong</Text>
          <Text
            style={[atomicStyles.h5, atomicStyles.mt2, styles.textTitle]}
            numberOfLines={2}>
            {'Chief Technology Officer'}
          </Text>
          <Text style={[atomicStyles.h6, styles.textSub]}>{'True Career'}</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={[styles.titleContainer]}>
            <TextItem
              text={'Marketing'}
              containerStyle={[atomicStyles.mr2, atomicStyles.px2]}
            />
            <TextItem
              text={'Marketing'}
              containerStyle={[atomicStyles.mr2, atomicStyles.px2]}
            />
            <TextItem
              text={'Marketing'}
              containerStyle={[atomicStyles.mr2, atomicStyles.px2]}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export interface MentorItemProps extends TouchableOpacityProps {
  //
}

MentorItem.defaultProps = {
  //
};

MentorItem.displayName = nameof(MentorItem);

export default MentorItem;
