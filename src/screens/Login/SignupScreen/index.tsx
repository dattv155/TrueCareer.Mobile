import React from 'react';
import './SignupScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {useTranslation} from 'react-i18next';
import {accountService} from 'src/services/account-service';
import LoginLayout from 'src/components/templates/LoginLayout';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from 'src/screens/Login/LoginScreen/LoginScreen.scss';
import ButtonComponent from 'src/components/atoms/ButtonComponent';
import {atomicStyles, Colors} from 'src/styles';
import InputView from 'src/components/atoms/InputView/InputView';
import SvgIcon from 'src/components/atoms/SvgIcon';
import type {StackScreenProps} from '@react-navigation/stack';
import {LoginScreen} from 'src/screens/Login';

export function SignupScreen(
  props: PropsWithChildren<SignupScreenProps>,
): ReactElement {
  const {navigation, route} = props;

  const [translate] = useTranslation();

  const [
    user,
    loading,
    handleChangeDisplayName,
    handleChangeUsername,
    handleChangeEmail,
    handleChangePhoneNumber,
    handleChangePassword,
    handleChangePasswordConfirmation,
    handleRegister,
  ] = accountService.useRegister();

  const handleLoginScreen = React.useCallback(() => {
    navigation.navigate(LoginScreen.displayName, {});
  }, [navigation]);

  return (
    <>
      <LoginLayout
        title={translate('Tạo tài khoản mới')}
        subTitle={translate('Đăng ký để tạo tài khoản mới')}
        contentScrollable={true}
        navigation={navigation}
        route={route}
        loading={loading}
        footer={
          <View style={[styles.bottomView]}>
            <ButtonComponent
              title={translate('Tạo tài khoản')}
              onPress={handleRegister}
              color={Colors.DarkBlue}
            />
            <TouchableOpacity
              style={[
                atomicStyles.flexRow,
                atomicStyles.justifyContentCenter,
                atomicStyles.alignItemsCenter,
                atomicStyles.mt4,
              ]}
              onPress={handleLoginScreen}>
              <Text
                style={[
                  atomicStyles.text,
                  atomicStyles.textGray,
                  atomicStyles.sub2,
                  atomicStyles.mr2,
                ]}>
                {translate('Đã có tài khoản?')}
              </Text>
              <Text
                style={[
                  atomicStyles.text,
                  atomicStyles.sub2,
                  atomicStyles.textBold,
                  atomicStyles.textBlue,
                ]}>
                {translate('Đăng nhập')}
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
              placeholder={translate('Họ và tên')}
              value={user?.displayName}
              onChangeText={handleChangeDisplayName}
            />
          </InputView>
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
            />
          </InputView>
          <InputView style={[atomicStyles.mx4]}>
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
              placeholder={translate('Email')}
              value={user?.email}
              onChangeText={handleChangeEmail}
            />
          </InputView>
          <InputView style={[atomicStyles.mx4]}>
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
              placeholder={translate('Số điện thoại')}
              value={user?.phone}
              onChangeText={handleChangePhoneNumber}
            />
          </InputView>

          <InputView style={[atomicStyles.mx4]}>
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
              value={user?.password}
              onChangeText={handleChangePassword}
            />
          </InputView>

          <InputView style={[atomicStyles.mx4]}>
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
              placeholder={translate('Nhập lại mật khẩu')}
              value={user?.passwordConfirmation}
              onChangeText={handleChangePasswordConfirmation}
            />
          </InputView>
        </ScrollView>
      </LoginLayout>
    </>
  );
}

export interface SignupScreenProps extends StackScreenProps<any> {
  //
}

SignupScreen.defaultProps = {
  //
};

SignupScreen.displayName = nameof(SignupScreen);

export default SignupScreen;
