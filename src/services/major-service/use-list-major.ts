import React from 'react';
import type {Major} from 'src/models/Major';
import {MajorFilter} from 'src/models/Major';
import {useNavigation} from '@react-navigation/native';
import {logDevError} from 'src/helpers/dev.helper';
import {majorRepository} from 'src/repositories/major-repository';

export function useListMajor(): [Major[]] {
  const [listMajor, setList] = React.useState<Major[]>([]);

  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await majorRepository
        .list({...new MajorFilter(), take: 100})
        .toPromise()
        .then((majors: Major[]) => {
          setList(majors);
        })
        .catch(error => {
          logDevError(error);
        });
    });

    return function cleanup() {
      unsubscribe();
    };
  }, [navigation]);

  return [listMajor];
}
