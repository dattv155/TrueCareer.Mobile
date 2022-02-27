import React from 'react';
import './MentorScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StackScreenProps} from '@react-navigation/stack';
import DefaultLayout from 'src/components/templates/DefaultLayout';
import {Lang} from 'src/config/lang';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {atomicStyles} from 'src/styles';

export function MentorScreen(
  props: PropsWithChildren<MentorScreenProps>,
): ReactElement {
  const {navigation, route} = props;

  const [translate] = useTranslation();

  return (
    <>
      <DefaultLayout
        title={translate(Lang.Tab.Mentor)}
        contentScrollable={true}
        navigation={navigation}
        route={route}
        searchTabVisible={false}>
        <View>
          <Text
            style={[
              atomicStyles.h5,
              atomicStyles.textPrimary,
              atomicStyles.textBold,
            ]}>
            {translate('Mentor')}
          </Text>
        </View>
      </DefaultLayout>
    </>
  );
}

export interface MentorScreenProps extends StackScreenProps<any> {
  //
}

MentorScreen.defaultProps = {
  //
};

MentorScreen.displayName = nameof(MentorScreen);

export default MentorScreen;
