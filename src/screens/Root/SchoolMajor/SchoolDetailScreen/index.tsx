import React from 'react';
import styles from './SchoolDetailScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StackScreenProps} from '@react-navigation/stack';
import type {SchoolDetailScreenParams} from 'src/screens/Root/SchoolMajor/SchoolDetailScreen/SchoolDetailScreenParams';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {atomicStyles, Colors} from 'src/styles';
import {SCREEN_WIDTH} from 'src/config';
import SvgIcon from 'src/components/atoms/SvgIcon';

const ratio = 375 / 324;

export function SchoolDetailScreen(
  props: PropsWithChildren<SchoolDetailScreenProps>,
): ReactElement {
  const {navigation, route} = props;

  const {school} = route.params;

  const [translate] = useTranslation();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.Secondary}
      />
      <ScrollView style={[atomicStyles.bgSecondary]}>
        <TouchableOpacity style={[styles.goBack]} onPress={navigation.goBack}>
          <SvgIcon component={require('assets/icons/go-back.svg')} />
        </TouchableOpacity>
        <Image
          source={{uri: school.schoolImage}}
          style={[styles.imageView]}
          width={SCREEN_WIDTH}
          height={SCREEN_WIDTH / ratio}
        />
        <View style={[atomicStyles.p4, atomicStyles.bgWhite]}>
          <Text
            style={[
              atomicStyles.text,
              atomicStyles.textDark,
              atomicStyles.h2,
              atomicStyles.medium,
            ]}>
            {school.name}
          </Text>
          <Text
            style={[
              atomicStyles.text,
              atomicStyles.textDark,
              atomicStyles.textJustify,
              atomicStyles.h4,
              atomicStyles.regular,
              atomicStyles.mt3,
            ]}>
            {school.description}
          </Text>
          <View
            style={[
              atomicStyles.flexRow,
              atomicStyles.alignItemsCenter,
              atomicStyles.justifyContentAround,
              atomicStyles.mx6,
            ]}>
            <View style={[atomicStyles.flexRow]}>
              <SvgIcon component={require('assets/icons/book.svg')} />
              <View style={[atomicStyles.ml2]}>
                <Text
                  style={[
                    atomicStyles.text,
                    atomicStyles.textDark,
                    atomicStyles.h5,
                    atomicStyles.medium,
                  ]}>
                  {school.completeTime}
                </Text>
                <Text
                  style={[
                    atomicStyles.text,
                    atomicStyles.textDark,
                    atomicStyles.h6,
                    atomicStyles.regular,
                  ]}>
                  {translate('Năm học')}
                </Text>
              </View>
            </View>
            <View style={[atomicStyles.flexRow]}>
              <SvgIcon component={require('assets/icons/student.svg')} />
              <View style={[atomicStyles.ml2]}>
                <Text
                  style={[
                    atomicStyles.text,
                    atomicStyles.textDark,
                    atomicStyles.h5,
                    atomicStyles.medium,
                  ]}>
                  {school.studentCount}
                </Text>
                <Text
                  style={[
                    atomicStyles.text,
                    atomicStyles.textDark,
                    atomicStyles.h6,
                    atomicStyles.regular,
                  ]}>
                  {translate('Sinh viên')}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            atomicStyles.my4,
            atomicStyles.mx3,
            atomicStyles.bgWhite,
            atomicStyles.boxShadow,
            atomicStyles.borderRadius,
          ]}>
          <View style={[styles.bottomLine, atomicStyles.p4]}>
            <Text
              style={[
                atomicStyles.text,
                atomicStyles.textDark,
                atomicStyles.h4,
              ]}>
              {translate('Thông tin')}
            </Text>
          </View>
          <View style={[styles.bottomLine, atomicStyles.px4, atomicStyles.py2]}>
            <Text
              style={[
                atomicStyles.text,
                atomicStyles.textDark,
                atomicStyles.h5,
              ]}>
              {translate('Địa chỉ')}
            </Text>
            <Text
              style={[
                atomicStyles.text,
                atomicStyles.textDark,
                atomicStyles.mt2,
                atomicStyles.regular,
              ]}>
              {school.address}
            </Text>
          </View>
          <View style={[styles.bottomLine, atomicStyles.px4, atomicStyles.py2]}>
            <Text
              style={[
                atomicStyles.text,
                atomicStyles.textDark,
                atomicStyles.h5,
              ]}>
              {translate('Thông tin liên lạc')}
            </Text>
            <Text
              style={[
                atomicStyles.text,
                atomicStyles.textDark,
                atomicStyles.mt2,
                atomicStyles.regular,
              ]}>
              {school.phoneNumber}
            </Text>
          </View>
        </View>
        <View style={styles.bottomHeight} />
      </ScrollView>
    </>
  );
}

export interface SchoolDetailScreenProps
  extends StackScreenProps<Record<string, SchoolDetailScreenParams>> {
  //
}

SchoolDetailScreen.defaultProps = {
  //
};

SchoolDetailScreen.displayName = nameof(SchoolDetailScreen);

export default SchoolDetailScreen;
