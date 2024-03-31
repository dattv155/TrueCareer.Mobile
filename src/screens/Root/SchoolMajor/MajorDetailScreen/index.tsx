import React from 'react';
import styles from './MajorDetailScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StackScreenProps} from '@react-navigation/stack';
import type {MajorDetailScreenParams} from 'src/screens/Root/SchoolMajor/MajorDetailScreen/MajorDetailScreenParams';
import {useTranslation} from 'react-i18next';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {atomicStyles, Colors} from 'src/styles';
import SvgIcon from 'src/components/atoms/SvgIcon';
import {SCREEN_WIDTH} from 'src/config';
import ViewMoreText from 'src/components/morecules/ViewMoreText';

const ratio = 375 / 250;

export function MajorDetailScreen(
  props: PropsWithChildren<MajorDetailScreenProps>,
): ReactElement {
  const {navigation, route} = props;

  const {major} = route.params;

  const [translate] = useTranslation();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.Secondary}
      />
      <ScrollView style={[atomicStyles.bgSecondary]}>
        <TouchableOpacity style={[styles.goBack]} onPress={navigation.goBack}>
          <SvgIcon component={require('assets/icons/go-back.svg')} />
        </TouchableOpacity>
        <Image
          source={{uri: major.majorImage}}
          style={[styles.imageView]}
          width={SCREEN_WIDTH}
          height={SCREEN_WIDTH / ratio}
        />
        <View style={[atomicStyles.p4, atomicStyles.bgWhite]}>
          <Text
            style={[
              atomicStyles.text,
              atomicStyles.textDark,
              atomicStyles.h2,
              atomicStyles.medium,
            ]}>
            {major.name}
          </Text>
          <ViewMoreText
            style={[
              atomicStyles.text,
              atomicStyles.textDark,
              atomicStyles.textJustify,
              atomicStyles.h4,
              atomicStyles.regular,
              atomicStyles.mt3,
            ]}>
            {major.description}
          </ViewMoreText>
        </View>
        <View
          style={[
            atomicStyles.my4,
            atomicStyles.mx3,
            atomicStyles.bgWhite,
            atomicStyles.boxShadow,
            atomicStyles.borderRadius,
          ]}>
          <View style={[styles.bottomLine, atomicStyles.p4]}>
            <Text
              style={[
                atomicStyles.text,
                atomicStyles.textDark,
                atomicStyles.h4,
              ]}>
              {translate(`${major.name} tại các trường`)}
            </Text>
          </View>
        </View>
        <View style={styles.bottomHeight} />
      </ScrollView>
    </>
  );
}

export interface MajorDetailScreenProps
  extends StackScreenProps<Record<string, MajorDetailScreenParams>> {
  //
}

MajorDetailScreen.defaultProps = {
  //
};

MajorDetailScreen.displayName = nameof(MajorDetailScreen);

export default MajorDetailScreen;
