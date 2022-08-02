import type {Information} from 'src/models/Information';
import {InformationFilter} from 'src/models/Information';
import {useNavigation} from '@react-navigation/native';
import {logDevError} from 'src/helpers/dev.helper';
import React from 'react';
import {informationRepository} from 'src/repositories/information-repository';
import type {Mentor} from 'src/models/Mentor';
import {IdFilter} from 'react3l-advanced-filters';

export function useMentorDetail(mentor: Mentor): [Information[], boolean] {
  const navigation = useNavigation();
  const [listInformation, setListInformation] = React.useState<Information[]>(
    [],
  );

  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setLoading(true);
      await informationRepository
        .list({
          ...new InformationFilter(),
          userId: new IdFilter({equal: mentor.id}),
        })
        .toPromise()
        .then((information: Information[]) => {
          setListInformation(information);
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
  }, [mentor, navigation]);

  return [listInformation, loading];
}
