import React from 'react';
import {useRecoilState} from 'recoil';
import {mentorConnectionAtom} from 'src/store/atoms/mentorRegisterAtom';
import type {MentorConnection} from 'src/models/MentorConnection';
import type {ActiveTime} from 'src/models/ActiveTime';
import type {Topic} from 'src/models/Topic';
import {useNavigation} from '@react-navigation/native';
import {logDevError} from 'src/helpers/dev.helper';
import type {Major} from 'src/models/Major';
import {MajorFilter} from 'src/models/Major';
import {majorRepository} from 'src/repositories/major-repository';
import type {OptionType} from 'src/types/General';
import {mentorRegisterRepository} from 'src/repositories/mentor-register-repository';

export function useMentorRegister(): [
  number,
  (index: number) => void,
  OptionType[],
  OptionType[],
  (value: number) => void,
  (value: number) => void,
  (value: number) => void,
] {
  const navigation = useNavigation();

  const [tabIndex, setTabIndex] = React.useState<number>(0);

  const handleChangeIndex = React.useCallback((index: number) => {
    setTabIndex(index);
  }, []);

  const [listMajor, setListMajor] = React.useState<Major[]>([]);
  const [listActiveTime, setListActiveTime] = React.useState<ActiveTime[]>([]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await majorRepository
        .list({...new MajorFilter(), take: 100})
        .toPromise()
        .then((majors: Major[]) => {
          setListMajor(majors);
        })
        .catch(error => {
          logDevError(error);
        });

      await mentorRegisterRepository
        .singleListUnitOfTime()
        .toPromise()
        .then((activeTimes: ActiveTime[]) => {
          setListActiveTime(activeTimes);
        })
        .catch(error => {
          logDevError(error);
        });
    });

    return function cleanup() {
      unsubscribe();
    };
  }, [navigation]);

  const listMajorOption: OptionType[] = React.useMemo(() => {
    return listMajor.map(item => {
      return {
        id: item.id,
        name: item.name,
      } as OptionType;
    });
  }, [listMajor]);

  const listActiveTimeOption: OptionType[] = React.useMemo(() => {
    return listActiveTime.map(item => {
      return {
        id: item.id,
        name: item.name,
      } as OptionType;
    });
  }, [listActiveTime]);

  const [mentorConnection, setMentorConnection] =
    useRecoilState(mentorConnectionAtom);

  const [connection, setConnection] =
    React.useState<MentorConnection>(undefined);

  const handleSelectConnection = React.useCallback((value: number) => {}, []);
  const handleSelectTopic = React.useCallback((value: number) => {}, []);
  const handleSelectActiveTime = React.useCallback((value: number) => {}, []);

  const [topic, setTopic] = React.useState<Topic>(undefined);

  const [activeTime, setActiveTime] = React.useState<ActiveTime>(undefined);

  const handleSelectConnectionType = React.useCallback(
    (value: number) => {
      setConnection({...connection, connectionTypeId: value});
    },
    [connection],
  );

  const handleSelectConnectionUrl = React.useCallback(
    (url: string) => {
      setConnection({...connection, url: url});
    },
    [connection],
  );

  const handleSaveConnection = React.useCallback(() => {
    setMentorConnection({
      ...mentorConnection,
      connectionTypeId: connection.connectionTypeId,
      url: connection.url,
    });
  }, [connection, mentorConnection, setMentorConnection]);

  return [
    tabIndex,
    handleChangeIndex,
    listMajorOption,
    listActiveTimeOption,
    handleSelectConnection,
    handleSelectTopic,
    handleSelectActiveTime,
  ];
}
