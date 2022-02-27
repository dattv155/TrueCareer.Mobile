import React from 'react';
import './MentorScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StackScreenProps} from '@react-navigation/stack';
import DefaultLayout from 'src/components/templates/DefaultLayout';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {atomicStyles} from 'src/styles';
import SvgIcon from 'src/components/atoms/SvgIcon';

export function MentorScreen(
  props: PropsWithChildren<MentorScreenProps>,
): ReactElement {
  const {navigation, route} = props;

  const [translate] = useTranslation();

  return (
    <>
      <DefaultLayout
        title={translate('Không gian Mentor')}
        subTitle={translate(
          'Hãy tìm kiếm mentor phù hợp với bản thân mình. Yêu thích & Liên kết để ....',
        )}
        icon={
          <SvgIcon component={require('assets/icons/large/big-mentor.svg')} />
        }
        contentScrollable={true}
        navigation={navigation}
        route={route}>
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
