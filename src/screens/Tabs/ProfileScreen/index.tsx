import React from 'react';
import styles from './ProfileScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {ScrollView, View} from 'react-native';
import {atomicStyles, Colors} from 'src/styles';
import ButtonComponent from 'src/components/atoms/ButtonComponent';
import {useTranslation} from 'react-i18next';
import type {StackScreenProps} from '@react-navigation/stack';
import {useSetRecoilState} from 'recoil';
import {appUserAtom} from 'src/store/atoms/appUserAtom';

export function ProfileScreen(
  props: PropsWithChildren<ProfileScreenProps>,
): ReactElement {
  const {} = props;
  const [translate] = useTranslation();
  const setAppUser = useSetRecoilState(appUserAtom);
  const handleLogout = React.useCallback(() => {
    setAppUser(null);
  }, [setAppUser]);

  return (
    <View style={[atomicStyles.flex]}>
      <ScrollView />
      <ButtonComponent
        title={translate('Đăng xuất')}
        onPress={handleLogout}
        color={Colors.Red}
        style={[atomicStyles.mb4, styles.logOut]}
      />
    </View>
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
