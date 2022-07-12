import React from 'react';
import styles from './LoginScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import LoginLayout from 'src/components/templates/LoginLayout';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import InputView from 'src/components/atoms/InputView/InputView';
import {atomicStyles, Colors} from 'src/styles';
import SvgIcon from 'src/components/atoms/SvgIcon';
import {accountService} from 'src/services/account-service';
import ButtonComponent from 'src/components/atoms/ButtonComponent';
import {ForgotPasswordScreen, SignupScreen} from 'src/screens/Login';

export function LoginScreen(
  props: PropsWithChildren<LoginScreenProps>,
): ReactElement {
  const {navigation, route} = props;

  const [translate] = useTranslation();

  const [
    user,
    loading,
    passwordHidden,
    handleChangeUsername,
    handleChangePassword,
    handleTogglePasswordHidden,
    handleLogin,
    ,
    ,
  ] = accountService.useLoginDefault();

  const handleSignupScreen = React.useCallback(() => {
    navigation.navigate(SignupScreen.displayName, {});
  }, [navigation]);

  const handleForgotPasswordScreen = React.useCallback(() => {
    navigation.navigate(ForgotPasswordScreen.displayName, {});
  }, [navigation]);

  return (
    <>
      <LoginLayout
        title={translate('Đăng nhập')}
        subTitle={translate(
          'Nhập tên người dùng và mật khẩu để đăng nhập vào ứng dụng',
        )}
        contentScrollable={true}
        navigation={navigation}
        route={route}
        loading={loading}
        footer={
          <View style={[styles.bottomView]}>
            <ButtonComponent
              title={translate('Đăng nhập')}
              onPress={handleLogin}
              color={Colors.DarkBlue}
            />
            <TouchableOpacity
              style={[
                atomicStyles.flexRow,
                atomicStyles.justifyContentCenter,
                atomicStyles.alignItemsCenter,
                atomicStyles.mt4,
              ]}
              onPress={handleSignupScreen}>
              <Text
                style={[
                  atomicStyles.text,
                  atomicStyles.textGray,
                  atomicStyles.sub2,
                  atomicStyles.mr2,
                ]}>
                {translate('Bạn chưa có tài khoản?')}
              </Text>
              <Text
                style={[
                  atomicStyles.text,
                  atomicStyles.sub2,
                  atomicStyles.textBold,
                  atomicStyles.textBlue,
                ]}>
                {translate('Đăng ký ngay')}
              </Text>
            </TouchableOpacity>
          </View>
        }>
        <ScrollView style={[styles.bodyView]}>
          <InputView style={[atomicStyles.mx4]}>
            <SvgIcon component={require('/assets/icons/user.svg')} />
            <TextInput
              style={[
                atomicStyles.w100,
                atomicStyles.light,
                atomicStyles.h5,
                atomicStyles.textGray,
                styles.textInput,
              ]}
              placeholderTextColor={Colors.Gray}
              placeholder={translate('Tên đăng nhập')}
              value={user?.username}
              onChangeText={handleChangeUsername}
              keyboardType="email-address"
            />
          </InputView>
          <InputView
            style={[atomicStyles.mx4]}
            icon={
              passwordHidden ? (
                <SvgIcon component={require('assets/icons/Preview.svg')} />
              ) : (
                <SvgIcon component={require('assets/icons/pPreview.svg')} />
              )
            }
            onIconPress={handleTogglePasswordHidden}>
            <SvgIcon component={require('/assets/icons/lock.svg')} />
            <TextInput
              style={[
                atomicStyles.w100,
                atomicStyles.light,
                atomicStyles.h5,
                atomicStyles.textGray,
                styles.textInput,
              ]}
              placeholderTextColor={Colors.Gray}
              placeholder={translate('Mật khẩu')}
              secureTextEntry={!passwordHidden}
              value={user?.password}
              onChangeText={handleChangePassword}
            />
          </InputView>

          <View style={[atomicStyles.my4]}>
            <TouchableOpacity
              style={[
                atomicStyles.flexRow,
                atomicStyles.alignItemsCenter,
                atomicStyles.justifyItemsCenter,
                styles.buttonForget,
              ]}
              onPress={handleForgotPasswordScreen}>
              <Text
                style={[
                  atomicStyles.text,
                  atomicStyles.textBold,
                  atomicStyles.mr2,
                  styles.textForgetPass,
                ]}>
                {translate('Quên mật khẩu')}
              </Text>
              <SvgIcon component={require('assets/icons/vector.svg')} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LoginLayout>
    </>
  );
}

export interface LoginScreenProps extends StackScreenProps<any> {
  //
}

LoginScreen.defaultProps = {
  //
};

LoginScreen.displayName = nameof(LoginScreen);

export default LoginScreen;
