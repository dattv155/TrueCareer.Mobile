import React from 'react';
import styles from './HomeScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {atomicStyles} from 'src/styles';
import {useTranslation} from 'react-i18next';
import SvgIcon from 'src/components/atoms/SvgIcon';
import SearchBox from 'src/components/morecules/SearchBox';
import type {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ColorStyles} from 'src/styles/themes';
import {useStyle} from 'react-native-redux-theming';
import {ConversationListScreen} from 'src/screens/Root';

export function HomeScreen(
  props: PropsWithChildren<HomeScreenProps>,
): ReactElement {
  const {navigation} = props;
  const [translate] = useTranslation();
  const colorStyles = useStyle(ColorStyles);

  const handleGotoChatScreen = React.useCallback(() => {
    navigation.navigate(ConversationListScreen.displayName);
  }, [navigation]);

  return (
    <>
      <SafeAreaView style={[atomicStyles.flexGrow, colorStyles.bgWhite]}>
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
                {translate('Dat Vu Trong')}
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
          <View style={[atomicStyles.flex, atomicStyles.px4]}>
            <>
              <View
                style={[
                  atomicStyles.flexRow,
                  atomicStyles.alignItemsCenter,
                  atomicStyles.justifyContentBetween,
                ]}>
                <SearchBox
                  placeholder={translate(
                    'Tìm kiếm Mentor theo trường/ngành/...',
                  )}
                  style={[atomicStyles.mr2]}
                />
                <TouchableOpacity
                  style={[
                    atomicStyles.borderView,
                    atomicStyles.alignItemsCenter,
                    atomicStyles.justifyContentBetween,
                    atomicStyles.bgWhite,
                    atomicStyles.p3,
                  ]}>
                  <SvgIcon
                    component={require('assets/icons/filter-purple.svg')}
                  />
                </TouchableOpacity>
              </View>

              <View style={[atomicStyles.mt4]}>
                {/*<MentorItem />*/}
                {/*<MentorItem />*/}
              </View>
            </>
          </View>
        </ScrollView>
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
