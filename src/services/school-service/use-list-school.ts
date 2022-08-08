import {logDevError} from 'src/helpers/dev.helper';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import type {School} from 'src/models/School';
import {SchoolFilter} from 'src/models/School';
import {schoolRepository} from 'src/repositories/school-repository';

export function useListSchool(): [School[]] {
  const [listSchool, setList] = React.useState<School[]>([]);

  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await schoolRepository
        .list({...new SchoolFilter(), take: 100})
        .toPromise()
        .then((schools: School[]) => {
          setList(schools);
        })
        .catch(error => {
          logDevError(error);
        });
    });

    return function cleanup() {
      unsubscribe();
    };
  }, [navigation]);

  return [listSchool];
}
