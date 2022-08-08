import React from 'react';
import styles from './ProfileScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {atomicStyles, Colors} from 'src/styles';
import ButtonComponent from 'src/components/atoms/ButtonComponent';
import {useTranslation} from 'react-i18next';
import type {StackScreenProps} from '@react-navigation/stack';
import {useRecoilState} from 'recoil';
import {appUserAtom} from 'src/store/atoms/appUserAtom';
import InformationItem from 'src/components/morecules/InformationItem';
import SvgIcon from 'src/components/atoms/SvgIcon';
import {MentorRequestScreen} from 'src/screens/Root';
import MainTabBar from 'src/components/organisms/MainTabBar/MainTabBar';

export function ProfileScreen(
  props: PropsWithChildren<ProfileScreenProps>,
): ReactElement {
  const {navigation, route} = props;
  const [translate] = useTranslation();
  const [appUser, setAppUser] = useRecoilState(appUserAtom);
  const handleLogout = React.useCallback(() => {
    setAppUser(null);
  }, [setAppUser]);

  const handleGotoMentorRequestScreen = React.useCallback(() => {
    navigation.navigate(MentorRequestScreen.displayName!, {});
  }, [navigation]);

  return (
    <>
      <ScrollView>
        <View>
          <Image
            source={{uri: appUser.coverImage}}
            style={[styles.coverImage]}
            resizeMode={'cover'}
          />
          <TouchableOpacity style={[styles.menuIcon]}>
            <SvgIcon component={require('assets/icons/menu.svg')} />
          </TouchableOpacity>
        </View>
        <View
          style={[
            atomicStyles.alignItemsCenter,
            atomicStyles.justifyContentCenter,
            styles.avatarView,
          ]}>
          <Image source={{uri: appUser.avatar}} style={[styles.avatarImage]} />
        </View>

        <View style={[atomicStyles.alignItemsCenter, styles.nameContainer]}>
          <Text style={[atomicStyles.textBlue, atomicStyles.h3]}>
            {appUser.displayName}
          </Text>

          <Text style={[atomicStyles.textDark, atomicStyles.h5]}>
            {appUser.email}
          </Text>
        </View>

        <View
          style={[
            atomicStyles.flexRow,
            atomicStyles.alignItemsCenter,
            atomicStyles.justifyContentAround,
            atomicStyles.mt4,
            styles.summaryContainer,
          ]}>
          <View>
            <Text
              style={[
                atomicStyles.textBlue,
                atomicStyles.h4,
                atomicStyles.bold,
              ]}>
              321K
            </Text>
            <Text style={[atomicStyles.textDark, atomicStyles.h5]}>
              {translate('Theo dõi')}
            </Text>
          </View>

          <View>
            <Text
              style={[
                atomicStyles.textBlue,
                atomicStyles.h4,
                atomicStyles.bold,
              ]}>
              298
            </Text>
            <Text style={[atomicStyles.textDark, atomicStyles.h5]}>
              {translate('Liên kết')}
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <ButtonComponent
              title={translate('Trở thành Mentor')}
              onPress={handleGotoMentorRequestScreen}
              color={Colors.Purple}
              style={[atomicStyles.mb2, styles.linkingButton]}
            />
            <ButtonComponent
              title={translate('Lịch hẹn của tôi')}
              textStyle={[atomicStyles.textBlue]}
              onPress={() => {}}
              color={Colors.White}
              style={[styles.linkingButton]}
            />
          </View>
        </View>

        <InformationItem
          title={translate('Giới thiệu bản thân')}
          style={[atomicStyles.mt4]}
        />
        <InformationItem
          title={translate('MBTI của tôi')}
          style={[atomicStyles.mt4]}
        />
        <InformationItem
          title={translate('Kinh nghiệm làm việc')}
          style={[atomicStyles.mt4]}
        />
        <InformationItem
          title={translate('Hoạt động ngoại khoá')}
          style={[atomicStyles.mt4]}
        />
        <InformationItem
          title={translate('Giải thưởng')}
          style={[atomicStyles.mt4]}
        />
        <InformationItem
          title={translate('Chứng chỉ')}
          style={[atomicStyles.mt4]}
        />

        <ButtonComponent
          title={translate('Đăng xuất')}
          onPress={handleLogout}
          color={Colors.Red}
          style={[atomicStyles.mb4, styles.logOut]}
        />
      </ScrollView>
      <MainTabBar navigation={navigation} route={route} />
    </>
  );
}

export interface ProfileScreenProps extends StackScreenProps<any> {
  //
}

ProfileScreen.defaultProps = {
  //
};

ProfileScreen.displayName = nameof(ProfileScreen);

export default ProfileScreen;
