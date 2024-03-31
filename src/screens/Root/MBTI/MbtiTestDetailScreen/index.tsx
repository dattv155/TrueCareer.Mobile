import React from 'react';
import styles from './MbtiTestDetailScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {useTranslation} from 'react-i18next';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import SvgIcon from 'src/components/atoms/SvgIcon';
import {atomicStyles, Colors} from 'src/styles';
import ButtonComponent from 'src/components/atoms/ButtonComponent';
import type {StackScreenProps} from '@react-navigation/stack';
import {mbtiTestDetailScreenStyles} from './MbtiTestDetailScreen.styles';
import MbtiTestScreen from '../MbtiTestScreen';
import {mbtiService} from 'src/services/mbti-service';
import LoadingLayout from 'src/components/templates/LoadingLayout';
import type {MbtiTestDetailScreenParams} from 'src/screens/Root/MBTI/MbtiTestDetailScreen/MbtiTestDetailScreenParams';

export function MbtiTestDetailScreen(
  props: PropsWithChildren<MbtiTestDetailScreenProps>,
): ReactElement {
  const {navigation} = props;

  const [translate] = useTranslation();

  const [
    loading,
    listQuestion,
    currentIndex,
    currentAnswer,
    handleSelectChoice,
    handleSelectAnswer,
    handleDone,
  ] = mbtiService.useListQuestion();

  const handleGotoExit = React.useCallback(() => {
    navigation.navigate(MbtiTestScreen.displayName);
  }, [navigation]);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.White}
      />
      <TouchableOpacity style={[styles.goBack]} onPress={handleGotoExit}>
        <SvgIcon component={require('assets/icons/close.svg')} />
      </TouchableOpacity>
      <View style={[mbtiTestDetailScreenStyles.parent]}>
        <View style={[mbtiTestDetailScreenStyles.child]}>
          <SvgIcon component={require('assets/icons/test-bg.svg')} />
        </View>
      </View>
      <View style={[styles.container]}>
        <View style={[styles.contentContainer]}>
          <View>
            {listQuestion?.map((item, index) => {
              if (index === currentIndex) {
                return (
                  <View
                    key={index.toString()}
                    style={[atomicStyles.alignItemsCenter]}>
                    <Text
                      style={[
                        atomicStyles.text,
                        atomicStyles.h2,
                        atomicStyles.textPrimary,
                      ]}>
                      {translate('Câu hỏi ')}
                      {index + 1}
                    </Text>

                    <Text
                      style={[
                        atomicStyles.text,
                        atomicStyles.h3,
                        atomicStyles.textDark,
                        atomicStyles.light,
                        atomicStyles.textCenter,
                        atomicStyles.mt4,
                        atomicStyles.mx5,
                      ]}>
                      {item.description}
                    </Text>
                    <View style={[atomicStyles.mt8]}>
                      {item.choices?.map((choice, indexChoice: number) => (
                        <ButtonComponent
                          title={choice.description}
                          textStyle={[
                            atomicStyles.text,
                            choice.id === currentAnswer?.id
                              ? atomicStyles.textWhite
                              : atomicStyles.textPrimary,
                          ]}
                          onPress={() => handleSelectChoice(choice)}
                          color={Colors.Primary}
                          style={[
                            atomicStyles.mb4,
                            choice.id === currentAnswer?.id
                              ? styles.choiceBlue
                              : styles.choiceWhite,
                          ]}
                          key={indexChoice}
                        />
                      ))}
                    </View>
                  </View>
                );
              }
            })}
          </View>
        </View>

        {listQuestion.length > 0 &&
          (currentIndex === listQuestion.length ? (
            <ButtonComponent
              title={translate('Hoàn thành')}
              textStyle={[atomicStyles.text, atomicStyles.textWhite]}
              onPress={handleDone}
              color={Colors.Primary}
              style={[atomicStyles.mb4, styles.done]}
            />
          ) : (
            <ButtonComponent
              title={translate('Tiếp theo')}
              textStyle={[atomicStyles.text, atomicStyles.textWhite]}
              onPress={handleSelectAnswer}
              color={Colors.Primary}
              style={[atomicStyles.mb4, styles.gotoMBTI]}
            />
          ))}
      </View>
      {loading && <LoadingLayout loading={loading} />}
    </>
  );
}

export interface MbtiTestDetailScreenProps
  extends StackScreenProps<Record<string, MbtiTestDetailScreenParams>> {
  //
}

MbtiTestDetailScreen.defaultProps = {
  //
};

MbtiTestDetailScreen.displayName = nameof(MbtiTestDetailScreen);

export default MbtiTestDetailScreen;
