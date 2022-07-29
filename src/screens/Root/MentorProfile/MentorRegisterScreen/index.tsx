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

  const handleSelectConnection = React.useCallback((value: OptionType) => {},
  []);

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState<Route[]>([
    {key: '1', title: '-'},
    {key: '2', title: '-'},
    {key: '3', title: '-'},
  ]);

  const GeneralTab = () =>
    React.useMemo(() => {
      return (
        <MentorInformationForm
          title={translate('Thông tin cơ bản')}
          nextTitle={translate('Tiếp tục')}>
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

  const TopicTab = () => (
    <View style={[atomicStyles.flex]}>
      <Text style={[atomicStyles.textDark, atomicStyles.h5]}>
        Định hướng & Chia sẻ kinh nghiệm nghề nghiệp
      </Text>
    </View>
  );

  const ActiveTimeTab = () => (
    <View style={[atomicStyles.flex]}>
      <Text style={[atomicStyles.textDark, atomicStyles.h5]}>
        Lựa chọn thời gian rảnh để hẹn gặp Mentee
      </Text>
    </View>
  );

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
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
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
        navigationState={{index, routes}}
        renderScene={renderScene}
        // renderTabBar={renderTabBar}
        onIndexChange={(index: number) => setIndex(index)}
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
