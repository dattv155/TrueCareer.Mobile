import React from 'react';
import styles from './HomeScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {ListRenderItem, ListRenderItemInfo} from 'react-native';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {atomicStyles, Colors} from 'src/styles';
import {useTranslation} from 'react-i18next';
import SvgIcon from 'src/components/atoms/SvgIcon';
import type {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ColorStyles} from 'src/styles/themes';
import {useStyle} from 'react-native-redux-theming';
import {ConversationListScreen, MbtiTestScreen} from 'src/screens/Root';
import {useRecoilValue} from 'recoil';
import {appUserAtom} from 'src/store/atoms/appUserAtom';
import ButtonComponent from 'src/components/atoms/ButtonComponent';
import {schoolService} from 'src/services/school-service';
import type {School} from 'src/models/School';
import type {Major} from 'src/models/Major';
import {majorService} from 'src/services/major-service';
import {mentorService} from 'src/services/mentor-service';
import type {Mentor} from 'src/models/Mentor';
import MainTabBar from 'src/components/organisms/MainTabBar/MainTabBar';

export function HomeScreen(
  props: PropsWithChildren<HomeScreenProps>,
): ReactElement {
  const {navigation, route} = props;
  const [translate] = useTranslation();
  const colorStyles = useStyle(ColorStyles);

  const appUser = useRecoilValue(appUserAtom);

  const handleGotoChatScreen = React.useCallback(() => {
    navigation.navigate(ConversationListScreen.displayName);
  }, [navigation]);

  const handleGotoMBTI = React.useCallback(() => {
    navigation.navigate(MbtiTestScreen.displayName);
  }, [navigation]);

  const [listMentor] = mentorService.useListMentor();
  const [listSchool] = schoolService.useListSchool();
  const [listMajor] = majorService.useListMajor();

  const renderMentor: ListRenderItem<Mentor> = React.useCallback(
    ({item}: ListRenderItemInfo<Mentor>) => {
      return (
        <TouchableOpacity style={[atomicStyles.mr4, styles.mentorView]}>
          <Image source={{uri: item.avatar}} style={[styles.mentorImage]} />
          <View style={[atomicStyles.m3, atomicStyles.alignItemsCenter]}>
            <Text
              style={[
                atomicStyles.h5,
                atomicStyles.text,
                atomicStyles.textPrimary,
                atomicStyles.bold,
                styles.mentorName,
              ]}
              numberOfLines={2}>
              {item.displayName}
            </Text>
            <Text
              style={[
                atomicStyles.h6,
                atomicStyles.text,
                atomicStyles.textDark,
                styles.mentorName,
              ]}
              numberOfLines={2}>
              {item.jobRole}
            </Text>
            <Text
              style={[
                atomicStyles.h6,
                atomicStyles.text,
                atomicStyles.textDark,
                styles.mentorName,
              ]}>
              {item.menteeCount} mentees
            </Text>
          </View>
        </TouchableOpacity>
      );
    },
    [],
  );

  const renderSchool: ListRenderItem<School> = React.useCallback(
    ({item}: ListRenderItemInfo<School>) => {
      return (
        <TouchableOpacity style={[atomicStyles.mr4, styles.schoolView]}>
          <Image
            source={{uri: item.schoolImage}}
            style={[styles.schoolImage]}
          />
          <View style={[atomicStyles.m3]}>
            <Text
              style={[
                atomicStyles.h5,
                atomicStyles.text,
                atomicStyles.textPrimary,
                styles.schoolName,
              ]}>
              {item.name}
            </Text>
            <Text
              style={[
                atomicStyles.h5,
                atomicStyles.text,
                atomicStyles.textDark,
                atomicStyles.light,
                styles.schoolName,
              ]}>
              {item.address}
            </Text>
          </View>
        </TouchableOpacity>
      );
    },
    [],
  );

  const renderMajor: ListRenderItem<Major> = React.useCallback(
    ({item}: ListRenderItemInfo<Major>) => {
      return (
        <TouchableOpacity style={[atomicStyles.mr4, styles.majorView]}>
          <Image source={{uri: item.majorImage}} style={[styles.majorImage]} />
          <View style={[atomicStyles.m3]}>
            <Text
              style={[
                atomicStyles.h6,
                atomicStyles.text,
                atomicStyles.textPrimary,
                styles.schoolName,
              ]}
              numberOfLines={2}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    },
    [],
  );

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.Secondary}
      />
      <SafeAreaView style={[atomicStyles.flexGrow, styles.container]}>
        <ScrollView>
          <View
            style={[
              atomicStyles.px4,
              atomicStyles.py8,
              atomicStyles.flexRow,
              atomicStyles.alignItemsCenter,
              atomicStyles.justifyContentBetween,
              styles.headerContainer,
            ]}>
            <View
              style={[
                atomicStyles.alignItemsStart,
                atomicStyles.justifyContentCenter,
                atomicStyles.pt8,
              ]}>
              <Text style={[colorStyles.textDark, styles.titleHeader]}>
                {translate('Xin chào,')}
              </Text>
              <Text
                style={[
                  colorStyles.textDark,
                  atomicStyles.h4,
                  atomicStyles.bold,
                  styles.subTitle,
                ]}>
                {appUser?.displayName ?? translate('Bạn')}
              </Text>
            </View>
            <View
              style={[
                atomicStyles.flexRow,
                atomicStyles.alignItemsCenter,
                atomicStyles.justifyContentBetween,
              ]}>
              <TouchableOpacity style={[atomicStyles.mr4]}>
                <SvgIcon
                  component={require('assets/icons/26/noti-border.svg')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleGotoChatScreen}>
                <SvgIcon
                  component={require('assets/icons/26/chat-border.svg')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[atomicStyles.px4]}>
            <View
              style={[
                atomicStyles.flexRow,
                atomicStyles.justifyContentCenter,
                atomicStyles.alignItemsCenter,
              ]}>
              <ImageBackground
                source={require('assets/images/welcome-mbti.png')}
                style={[styles.mbtiImage]}
                resizeMode={'cover'}>
                <SvgIcon component={require('assets/icons/university.svg')} />
                <Text
                  style={[
                    atomicStyles.textWhite,
                    atomicStyles.text,
                    atomicStyles.h4,
                    // atomicStyles.bold,
                    atomicStyles.textCenter,
                  ]}>
                  Hãy cùng True Career tìm ra loại tính cách của bạn để đưa ra
                  những định hướng phù hợp
                </Text>
                <ButtonComponent
                  title={translate('Tham gia kiểm tra')}
                  textStyle={[atomicStyles.light]}
                  onPress={handleGotoMBTI}
                  color={Colors.Primary}
                  style={[atomicStyles.mb4, styles.gotoMBTI]}
                />
              </ImageBackground>
            </View>

            <View>
              <View
                style={[
                  atomicStyles.mt4,
                  atomicStyles.flexRow,
                  atomicStyles.alignItemsCenter,
                  atomicStyles.justifyContentBetween,
                ]}>
                <Text
                  style={[
                    atomicStyles.text,
                    atomicStyles.h3,
                    atomicStyles.bold,
                    atomicStyles.textDark,
                  ]}>
                  {translate('Người định hướng nổi bật')}
                </Text>
                <TouchableOpacity>
                  <Text
                    style={[
                      atomicStyles.text,
                      atomicStyles.h5,
                      atomicStyles.light,
                      atomicStyles.textPrimary,
                    ]}>
                    {translate('Xem thêm')}
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={listMentor}
                renderItem={renderMentor}
                horizontal={true}
                contentContainerStyle={[atomicStyles.mt3]}
              />
            </View>

            <View>
              <View
                style={[
                  atomicStyles.mt4,
                  atomicStyles.flexRow,
                  atomicStyles.alignItemsCenter,
                  atomicStyles.justifyContentBetween,
                ]}>
                <Text
                  style={[
                    atomicStyles.text,
                    atomicStyles.h3,
                    atomicStyles.bold,
                    atomicStyles.textDark,
                  ]}>
                  {translate('Các trường nổi bật')}
                </Text>
                <TouchableOpacity>
                  <Text
                    style={[
                      atomicStyles.text,
                      atomicStyles.h5,
                      atomicStyles.light,
                      atomicStyles.textPrimary,
                    ]}>
                    {translate('Xem thêm')}
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={listSchool}
                renderItem={renderSchool}
                horizontal={true}
                contentContainerStyle={[atomicStyles.mt3]}
              />
            </View>

            <View>
              <View
                style={[
                  atomicStyles.mt4,
                  atomicStyles.flexRow,
                  atomicStyles.alignItemsCenter,
                  atomicStyles.justifyContentBetween,
                ]}>
                <Text
                  style={[
                    atomicStyles.text,
                    atomicStyles.h3,
                    atomicStyles.bold,
                    atomicStyles.textDark,
                  ]}>
                  {translate('Các ngành nổi bật')}
                </Text>
                <TouchableOpacity>
                  <Text
                    style={[
                      atomicStyles.text,
                      atomicStyles.h5,
                      atomicStyles.light,
                      atomicStyles.textPrimary,
                    ]}>
                    {translate('Xem thêm')}
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={listMajor.slice(0, 5)}
                renderItem={renderMajor}
                horizontal={true}
                contentContainerStyle={[atomicStyles.mt3, atomicStyles.mb8]}
              />
            </View>
          </View>
        </ScrollView>
        <MainTabBar navigation={navigation} route={route} />
      </SafeAreaView>
    </>
  );
}

export interface HomeScreenProps extends StackScreenProps<any> {
  //
}

HomeScreen.defaultProps = {
  //
};

HomeScreen.displayName = nameof(HomeScreen);

export default HomeScreen;
