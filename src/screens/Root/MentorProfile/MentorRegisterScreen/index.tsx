import React from 'react';
import styles from './MentorRegisterScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {atomicStyles} from 'src/styles';
import {SceneMap, TabView} from 'react-native-tab-view';
import {SCREEN_WIDTH} from 'src/config';
import type {
  NavigationState,
  SceneRendererProps,
  Route,
} from 'react-native-tab-view/lib/typescript/types';
import MentorInformationForm from 'src/components/organisms/MentorInformationForm';
import {translate} from 'src/config/lang';
import DropdownSelector from 'src/components/morecules/DropdownSelector/DropdownSelector';
import type {OptionType} from 'src/types/General';
import InputItem from 'src/components/atoms/InputItem';
import type {StackScreenProps} from '@react-navigation/stack';
import {mentorService} from 'src/services/mentor-service';

const listConnectionType: OptionType[] = [
  {
    id: 1,
    name: 'Google Meet',
  },
  {
    id: 2,
    name: 'Zoom',
  },
  {
    id: 3,
    name: 'Khác',
  },
];

export function MentorRequestScreen(
  props: PropsWithChildren<MentorRequestScreenProps>,
): ReactElement {
  const {} = props;

  const [
    tabIndex,
    handleChangeIndex,
    listMajor,
    listActiveTimeOption,
    handleSelectConnection,
    handleSelectTopic,
    handleSelectActiveTime,
  ] = mentorService.useMentorRegister();

  const [routes] = React.useState<Route[]>([
    {key: '1', title: ''},
    {key: '2', title: ''},
    {key: '3', title: ''},
  ]);

  const GeneralTab = () =>
    React.useMemo(() => {
      return (
        <MentorInformationForm
          title={translate('Thông tin cơ bản')}
          nextTitle={translate('Tiếp tục')}
          onGoNext={() => {}}>
          <View style={[atomicStyles.mt4]}>
            <DropdownSelector
              title={translate('Hình thức kết nối *')}
              titleStyle={[atomicStyles.textBold]}
              listOptions={listConnectionType}
              onSelect={handleSelectConnection}
            />

            <InputItem title={'Link kết nối'} style={[atomicStyles.mt4]} />
          </View>
        </MentorInformationForm>
      );
    }, []);

  const TopicTab = () =>
    React.useMemo(() => {
      return (
        <MentorInformationForm
          title={translate('Định hướng & Chia sẻ kinh nghiệm nghề nghiệp')}
          nextTitle={translate('Tiếp tục')}
          onGoNext={() => {}}>
          <View style={[atomicStyles.mt4]}>
            <DropdownSelector
              title={translate('Lĩnh vực *')}
              titleStyle={[atomicStyles.textBold]}
              listOptions={listMajor}
              onSelect={handleSelectTopic}
            />

            <Text
              style={[
                atomicStyles.textDark,
                atomicStyles.h5,
                atomicStyles.text,
                atomicStyles.my4,
              ]}>
              {translate('Mô tả nôi dung định hướng')}
            </Text>

            <InputItem
              title={'Nội dung định hướng'}
              height={260}
              multiline={true}
            />
          </View>
        </MentorInformationForm>
      );
    }, []);

  const ActiveTimeTab = () =>
    React.useMemo(() => {
      return (
        <MentorInformationForm
          title={translate('Lựa chọn thời gian rảnh để hẹn gặp Mentee')}
          nextTitle={translate('Hoàn thành')}
          onGoNext={() => {}}>
          <View style={[atomicStyles.mt4]}>
            <DropdownSelector
              title={translate('Chọn khoảng thời gian')}
              titleStyle={[atomicStyles.textBold]}
              listOptions={listActiveTimeOption}
              onSelect={handleSelectActiveTime}
            />

            <InputItem title={'Chọn ngày'} style={[atomicStyles.mt4]} />
          </View>
        </MentorInformationForm>
      );
    }, []);

  const renderTabBar = (
    prop: SceneRendererProps & {
      navigationState: NavigationState<any>;
    },
  ) => {
    const inputRange = prop.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {prop.navigationState.routes.map((route, i) => {
          const opacity = prop.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity style={styles.tabItem} onPress={() => {}}>
              <Animated.Text style={{opacity}}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderScene = SceneMap({
    '1': GeneralTab,
    '2': TopicTab,
    '3': ActiveTimeTab,
  });

  return (
    <>
      <TabView
        navigationState={{index: tabIndex, routes}}
        renderScene={renderScene}
        // renderTabBar={renderTabBar}
        onIndexChange={handleChangeIndex}
        initialLayout={{width: SCREEN_WIDTH}}
      />
    </>
  );
}

export interface MentorRequestScreenProps extends StackScreenProps<any> {
  //
}

MentorRequestScreen.defaultProps = {
  //
};

MentorRequestScreen.displayName = nameof(MentorRequestScreen);

export default MentorRequestScreen;
