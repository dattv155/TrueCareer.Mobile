import React from 'react';
import type {Mentor} from 'src/models/Mentor';
import {MentorFilter} from 'src/models/Mentor';
import {useNavigation} from '@react-navigation/native';
import {mentorRepository} from 'src/repositories/mentor-repository';
import {logDevError} from 'src/helpers/dev.helper';

export function useListMentor(): [Mentor[], boolean] {
  const [listMentor, setList] = React.useState<Mentor[]>([]);

  const [loading, setLoading] = React.useState<boolean>(false);

  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setLoading(true);
      await mentorRepository
        .list({...new MentorFilter(), take: 1000})
        .toPromise()
        .then((mentors: Mentor[]) => {
          setList(mentors);
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

  return [listMentor, loading];
}
