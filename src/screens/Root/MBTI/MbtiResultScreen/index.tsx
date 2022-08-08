import React from 'react';
import styles from './MbtiResultScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {atomicStyles} from 'src/styles';
import type {StackScreenProps} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import type {MbtiResultScreenParams} from 'src/screens/Root/MBTI/MbtiResultScreen/MbtiResultScreenParams';
import SvgIcon from 'src/components/atoms/SvgIcon';
import {mbtiResultScreenStyles} from 'src/screens/Root/MBTI/MbtiResultScreen/MbtiResultScreen.styles';
import {getRecoil} from 'recoil-nexus';
import {appUserAtom} from 'src/store/atoms/appUserAtom';
import TabNavigator from 'src/navigators/TabNavigator/TabNavigator';

export function MbtiResultScreen(
  props: PropsWithChildren<MbtiResultScreenProps>,
): ReactElement {
  const {navigation, route} = props;

  const {mbtiResult} = route.params;

  const [translate] = useTranslation();

  const handleGotoExit = React.useCallback(() => {
    navigation.navigate(TabNavigator.displayName);
  }, [navigation]);

  return (
    <>
      <TouchableOpacity style={[styles.goBack]} onPress={handleGotoExit}>
        <SvgIcon component={require('assets/icons/go-back.svg')} />
      </TouchableOpacity>
      <View style={[mbtiResultScreenStyles.parent]}>
        <View style={[mbtiResultScreenStyles.child]}>
          <Text
            style={[
              atomicStyles.text,
              atomicStyles.h3,
              atomicStyles.bold,
              atomicStyles.textDarkBlue,
              atomicStyles.my4,
            ]}>
            {translate('Chúc mừng')} {getRecoil(appUserAtom).displayName}
          </Text>
          <SvgIcon component={require('assets/icons/result-bg.svg')} />
        </View>
      </View>
      <ScrollView style={[styles.container]}>
        <View style={[styles.contentContainer]}>
          <View style={[atomicStyles.alignItemsCenter]}>
            <View style={[atomicStyles.flexRow, atomicStyles.alignItemsCenter]}>
              <Text
                style={[
                  atomicStyles.text,
                  atomicStyles.h3,
                  atomicStyles.light,
                  atomicStyles.textDark,
                ]}>
                {translate('Bạn thuộc kiểu')}
              </Text>
              <View
                style={[
                  atomicStyles.bgPrimary,
                  atomicStyles.ml2,
                  styles.resultCodeView,
                ]}>
                <Text
                  style={[
                    atomicStyles.text,
                    atomicStyles.h3,
                    atomicStyles.textWhite,
                  ]}>
                  {mbtiResult.mbtiPersonalType.code}
                </Text>
              </View>
            </View>
            <Text
              style={[
                atomicStyles.text,
                atomicStyles.h2,
                atomicStyles.bold,
                atomicStyles.textDarkBlue,
                atomicStyles.textCenter,
                atomicStyles.mt3,
              ]}>
              {mbtiResult.mbtiPersonalType.name}
            </Text>
            <View
              style={[
                atomicStyles.borderView,
                atomicStyles.boxShadow,
                atomicStyles.mx4,
              ]}>
              <Text
                style={[
                  atomicStyles.text,
                  atomicStyles.h4,
                  atomicStyles.textDark,
                  atomicStyles.bold,
                  atomicStyles.textCenter,
                  atomicStyles.mx5,
                ]}>
                {translate(
                  'Dựa vào tính cách của bạn, TrueCareer gợi ý bạn tham khảo',
                )}
              </Text>
              <View style={[atomicStyles.mt2]}>
                <Text
                  style={[
                    atomicStyles.text,
                    atomicStyles.h4,
                    atomicStyles.textDark,
                    atomicStyles.light,
                    // atomicStyles.textCenter,z
                    atomicStyles.mx4,
                    styles.resultDetail,
                  ]}>
                  {mbtiResult.mbtiPersonalType.value}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export interface MbtiResultScreenProps
  extends StackScreenProps<Record<string, MbtiResultScreenParams>> {
  //
}

MbtiResultScreen.defaultProps = {
  //
};

MbtiResultScreen.displayName = nameof(MbtiResultScreen);

export default MbtiResultScreen;
