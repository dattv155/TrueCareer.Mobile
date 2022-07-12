import React from 'react';
import styles from './ForgotPasswordScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {useTranslation} from 'react-i18next';
import {accountService} from 'src/services/account-service';
import LoginLayout from 'src/components/templates/LoginLayout';
import {ScrollView, TextInput, View} from 'react-native';
import ButtonComponent from 'src/components/atoms/ButtonComponent';
import {atomicStyles, Colors} from 'src/styles';
import InputView from 'src/components/atoms/InputView/InputView';
import SvgIcon from 'src/components/atoms/SvgIcon';
import type {StackScreenProps} from '@react-navigation/stack';

export function ForgotPasswordScreen(
  props: PropsWithChildren<ForgotPasswordScreenProps>,
): ReactElement {
  const {navigation, route} = props;

  const [translate] = useTranslation();

  const [email, loading, handleSetEmail, handleForgotPassword] =
    accountService.useForgotPassword();

  return (
    <>
      <LoginLayout
        title={translate('Quên mật khẩu')}
        subTitle={translate('Nhập email đã đăng ký để tạo lại mật khẩu')}
        contentScrollable={true}
        navigation={navigation}
        route={route}
        loading={loading}
        footer={
          <View style={[styles.bottomView]}>
            <ButtonComponent
              title={translate('Gửi mã xác nhận')}
              onPress={handleForgotPassword}
              color={Colors.DarkBlue}
            />
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
              placeholder={translate('Email')}
              value={email}
              onChangeText={handleSetEmail}
              keyboardType="email-address"
            />
          </InputView>
        </ScrollView>
      </LoginLayout>
    </>
  );
}

export interface ForgotPasswordScreenProps extends StackScreenProps<any> {
  //
}

ForgotPasswordScreen.defaultProps = {
  //
};

ForgotPasswordScreen.displayName = nameof(ForgotPasswordScreen);

export default ForgotPasswordScreen;
