import React from 'react';
import './MentorScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {StackScreenProps} from '@react-navigation/stack';
import DefaultLayout from 'src/components/templates/DefaultLayout';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {atomicStyles} from 'src/styles';
import SvgIcon from 'src/components/atoms/SvgIcon';
import SearchBox from 'src/components/morecules/SearchBox';
import MentorItem from 'src/components/morecules/MentorItem';

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
        <ScrollView style={[atomicStyles.px4]}>
          <View
            style={[
              atomicStyles.flexRow,
              atomicStyles.alignItemsCenter,
              atomicStyles.justifyContentBetween,
              atomicStyles.mb4,
            ]}>
            <SearchBox
              placeholder={translate('Tìm kiếm Mentor theo trường/ngành/...')}
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
              <SvgIcon component={require('assets/icons/filter-purple.svg')} />
            </TouchableOpacity>
          </View>

          <MentorItem style={[atomicStyles.mb4]} />
          <MentorItem style={[atomicStyles.mb4]} />
          <MentorItem style={[atomicStyles.mb4]} />
        </ScrollView>
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
