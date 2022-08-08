import type {Question} from 'src/models/Question';
import {QuestionFilter} from 'src/models/Question';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {logDevError} from 'src/helpers/dev.helper';
import {questionRepository} from 'src/repositories/question-repository';
import {mbtiResultRepository} from 'src/repositories/mbti-repository';
import type {MbtiResult} from 'src/models/MbtiResult';
import {MbtiResultScreen} from 'src/screens/Root';

export function useListQuestion(): [
  boolean,
  Question[],
  number,
  (index: number, value: number) => void,
  () => Promise<void>,
] {
  const [listQuestion, setList] = React.useState<Question[]>([]);

  const navigation = useNavigation();

  const [loading, setLoading] = React.useState<boolean>(false);

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const [listAnswer, setListAnswer] = React.useState<number[]>([]);

  const handleSelectAnswer = React.useCallback(
    (index: number, value: number) => {
      if (index !== listQuestion.length) {
        setCurrentIndex(index + 1);
        setListAnswer(prevState => [...prevState, value]);
      }
    },
    [listQuestion],
  );

  const handleDone = React.useCallback(async () => {
    setLoading(true);
    await mbtiResultRepository
      .calcResult(listAnswer)
      .toPromise()
      .then((mbtiResult: MbtiResult) => {
        navigation.navigate(
          MbtiResultScreen.displayName as never,
          {
            mbtiResult: mbtiResult,
          } as never,
        );
        setLoading(false);
      })
      .catch(error => {
        logDevError(error);
        setLoading(false);
      });
  }, [listAnswer, navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setLoading(true);
      await questionRepository
        .list({...new QuestionFilter(), take: 100})
        .toPromise()
        .then((questions: Question[]) => {
          setList(questions.slice(0, 5));
          setLoading(false);
        })
        .catch(error => {
          logDevError(error);
          setLoading(false);
        });
    });

    return function cleanup() {
      unsubscribe();
    };
  }, [navigation]);

  return [loading, listQuestion, currentIndex, handleSelectAnswer, handleDone];
}
