import React from 'react';
import styles from './MbtiTestScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StackScreenProps} from '@react-navigation/stack';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import SvgIcon from 'src/components/atoms/SvgIcon';
import {mbtiTestScreenStyles} from './MbtiTestScreen.styles';
import {useTranslation} from 'react-i18next';
import {atomicStyles, Colors} from 'src/styles';
import ButtonComponent from 'src/components/atoms/ButtonComponent';
import {MbtiTestDetailScreen} from 'src/screens/Root';

export function MbtiTestScreen(
  props: PropsWithChildren<MbtiTestScreenProps>,
): ReactElement {
  const {navigation} = props;

  const [translate] = useTranslation();

  const handleGotoTestDetail = React.useCallback(() => {
    navigation.navigate(MbtiTestDetailScreen.displayName);
  }, [navigation]);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.White}
      />
      <TouchableOpacity
        style={[styles.goBack]}
        onPress={() => {
          navigation.goBack();
        }}>
        <SvgIcon component={require('assets/icons/go-back.svg')} />
      </TouchableOpacity>
      <View style={[mbtiTestScreenStyles.parent]}>
        <View style={[mbtiTestScreenStyles.child]}>
          <SvgIcon component={require('assets/icons/test-bg.svg')} />
        </View>
      </View>
      <View style={[styles.container]}>
        <View style={[styles.contentContainer]}>
          <Text
            style={[
              atomicStyles.text,
              atomicStyles.h2,
              atomicStyles.textWhite,
              atomicStyles.bold,
            ]}>
            {translate('Bài Test tính cách')}
          </Text>

          <Text
            style={[
              atomicStyles.text,
              atomicStyles.h5,
              atomicStyles.textWhite,
              atomicStyles.light,
              atomicStyles.textCenter,
              atomicStyles.mt4,
              atomicStyles.mx5,
            ]}>
            {translate(
              'Thực hiện bài Test tính cách để tìm ra ngành học nào phù hợp với bạn nhất',
            )}
          </Text>

          <View
            style={[
              atomicStyles.flexRow,
              atomicStyles.alignItemsCenter,
              atomicStyles.justifyContentCenter,
            ]}>
            {/*<SvgIcon component={require('assets/icons/timer.svg')} />*/}
            <Text
              style={[
                atomicStyles.text,
                atomicStyles.h5,
                atomicStyles.textWhite,
                atomicStyles.light,
                atomicStyles.textCenter,
                atomicStyles.mt4,
                atomicStyles.mx5,
              ]}>
              {translate('Thực hiện bài test chỉ mất 3-5 phút')}
            </Text>
          </View>
        </View>

        <ButtonComponent
          title={translate('Tham gia bài Test')}
          textStyle={[atomicStyles.text, atomicStyles.textPrimary]}
          onPress={handleGotoTestDetail}
          color={Colors.White}
          style={[atomicStyles.mb4, styles.gotoMBTI]}
        />
      </View>
    </>
  );
}

export interface MbtiTestScreenProps extends StackScreenProps<any> {
  //
}

MbtiTestScreen.defaultProps = {
  //
};

MbtiTestScreen.displayName = nameof(MbtiTestScreen);

export default MbtiTestScreen;
