import React from 'react';
import './MentorDetailScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StackScreenProps} from '@react-navigation/stack';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import type {MentorDetailScreenParams} from 'src/screens/Root/MentorProfile/MentorDetailScreen/MentorDetailScreenParams';
import styles from 'src/screens/Tabs/ProfileScreen/ProfileScreen.scss';
import SvgIcon from 'src/components/atoms/SvgIcon';
import {atomicStyles, Colors} from 'src/styles';
import ButtonComponent from 'src/components/atoms/ButtonComponent';
import InformationItem from 'src/components/morecules/InformationItem';
import {useTranslation} from 'react-i18next';
import type {MentorMenteeConnection} from 'src/models/MentorMenteeConnection';
import {useRecoilValue} from 'recoil';
import {appUserAtom} from 'src/store/atoms/appUserAtom';
import {mentorMenteeRepository} from 'src/repositories/mentor-mentee-repository';
import {logDevError} from 'src/helpers/dev.helper';
import {mentorService} from 'src/services/mentor-service';

export function MentorDetailScreen(
  props: PropsWithChildren<MentorDetailScreenProps>,
): ReactElement {
  const {route} = props;
  const [translate] = useTranslation();

  const {mentor} = route.params;

  const [listInformation, loading] = mentorService.useMentorDetail(mentor);

  const appUser = useRecoilValue(appUserAtom);

  const handleConnect = React.useCallback(async () => {
    const mentorMenteeConnection: MentorMenteeConnection = {
      mentorId: mentor.id,
      menteeId: appUser.id,
      firstMessage: 'Hello mentorrrr',
      activeTimeId: 11,
    };

    await mentorMenteeRepository
      .create(mentorMenteeConnection)
      .toPromise()
      .then(
        () => {},
        error => {
          logDevError(error);
        },
      );
  }, [appUser, mentor]);

  return (
    <ScrollView>
      <View>
        <Image
          source={{uri: mentor?.coverImage}}
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
        <Image source={{uri: mentor?.avatar}} style={[styles.avatarImage]} />
      </View>

      <View style={[atomicStyles.alignItemsCenter, styles.nameContainer]}>
        <Text style={[atomicStyles.textBlue, atomicStyles.h3]}>
          {mentor?.displayName}
        </Text>

        <Text style={[atomicStyles.textDark, atomicStyles.h5]}>
          {mentor?.email}
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
            style={[atomicStyles.textBlue, atomicStyles.h4, atomicStyles.bold]}>
            {mentor?.likeCount}
          </Text>
          <Text style={[atomicStyles.textDark, atomicStyles.h5]}>
            {translate('Theo dõi')}
          </Text>
        </View>

        <View>
          <Text
            style={[atomicStyles.textBlue, atomicStyles.h4, atomicStyles.bold]}>
            {mentor?.menteeCount}
          </Text>
          <Text style={[atomicStyles.textDark, atomicStyles.h5]}>
            {translate('Liên kết')}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonComponent
            title={translate('Yêu thích')}
            onPress={() => {}}
            color={Colors.Red}
            style={[atomicStyles.mb2, styles.linkingButton]}
          />
          <ButtonComponent
            title={translate('Liên kết')}
            textStyle={[atomicStyles.textBlue]}
            onPress={handleConnect}
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
    </ScrollView>
  );
}

export interface MentorDetailScreenProps
  extends StackScreenProps<Record<string, MentorDetailScreenParams>> {
  //
}

MentorDetailScreen.defaultProps = {
  //
};

MentorDetailScreen.displayName = nameof(MentorDetailScreen);

export default MentorDetailScreen;
