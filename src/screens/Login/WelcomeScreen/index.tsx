import React from 'react';
import styles from './WelcomeScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StackScreenProps} from '@react-navigation/stack';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {atomicStyles, Colors} from 'src/styles';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/config';
import SvgIcon from 'src/components/atoms/SvgIcon';
import {LoginScreen, SignupScreen} from 'src/screens/Login';

export function WelcomeScreen(
  props: PropsWithChildren<WelcomeScreenProps>,
): ReactElement {
  const {navigation} = props;

  const handleGotoLoginScreen = React.useCallback(() => {
    navigation.navigate(LoginScreen.displayName, {});
  }, [navigation]);

  const handleGotoRegisterScreen = React.useCallback(() => {
    navigation.navigate(SignupScreen.displayName, {});
  }, [navigation]);

  return (
    <>
      <Image
        source={require('/assets/images/work.jpeg')}
        style={styles.backgroundImage}
        width={SCREEN_WIDTH}
        height={SCREEN_HEIGHT}
        resizeMode={'cover'}
      />
      <ScrollView
        contentContainerStyle={[
          atomicStyles.alignItemsCenter,
          atomicStyles.justifyContentCenter,
          styles.container,
        ]}>
        <Text
          style={[
            atomicStyles.h2,
            atomicStyles.textWhite,
            atomicStyles.textCenter,
          ]}>
          {'Chào mừng bạn đã đến với \n ứng dụng TrueCareer'}
        </Text>
        <Text style={[atomicStyles.h3, atomicStyles.textWhite]}>
          {'Hãy chọn cách đăng nhập của mình'}
        </Text>
        <TouchableOpacity
          style={[
            styles.routeButton,
            atomicStyles.mt10,
            {backgroundColor: Colors.Blue},
          ]}>
          <View style={[styles.leftView]}>
            <SvgIcon
              component={require('/assets/icons/socials/facebook.svg')}
            />
          </View>
          <View style={[styles.rightView]}>
            <Text
              style={[atomicStyles.h4, atomicStyles.textWhite, styles.text]}>
              Đăng nhập với Facebook
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.routeButton,
            atomicStyles.mt10,
            {backgroundColor: Colors.White},
          ]}>
          <View style={[styles.leftView]}>
            <SvgIcon component={require('/assets/icons/socials/google.svg')} />
          </View>
          <View style={[styles.rightView]}>
            <Text style={[atomicStyles.h4, atomicStyles.textGray, styles.text]}>
              Đăng nhập với Google
            </Text>
          </View>
        </TouchableOpacity>

        <Text
          style={[
            atomicStyles.h3,
            atomicStyles.bold,
            atomicStyles.textWhite,
            styles.text,
            atomicStyles.mt8,
          ]}>
          Hoặc
        </Text>

        <TouchableOpacity
          style={[
            styles.routeButton,
            atomicStyles.mt4,
            {backgroundColor: Colors.Purple},
          ]}
          onPress={handleGotoLoginScreen}>
          <View style={[styles.leftView]}>
            <SvgIcon component={require('/assets/icons/socials/normal.svg')} />
          </View>
          <View style={[styles.rightView]}>
            <Text
              style={[atomicStyles.h4, atomicStyles.textWhite, styles.text]}>
              Đăng nhập với tài khoản riêng
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[atomicStyles.flexRow]}
          onPress={handleGotoRegisterScreen}>
          <Text
            style={[
              atomicStyles.h3,
              atomicStyles.bold,
              atomicStyles.textWhite,
              atomicStyles.mt8,
            ]}>
            Chưa có tài khoản?
          </Text>

          <Text
            style={[
              atomicStyles.h3,
              atomicStyles.bold,
              atomicStyles.textWhite,
              atomicStyles.mt8,
              atomicStyles.ml2,
            ]}>
            Đăng ký ngay
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

export interface WelcomeScreenProps extends StackScreenProps<any> {
  //
}

WelcomeScreen.defaultProps = {
  //
};

WelcomeScreen.displayName = nameof(WelcomeScreen);

export default WelcomeScreen;
