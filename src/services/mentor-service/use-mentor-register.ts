import React from 'react';
import {useRecoilState} from 'recoil';
import {mentorConnectionAtom} from 'src/store/atoms/mentorRegisterAtom';
import type {MentorConnection} from 'src/models/MentorConnection';
import type {ActiveTime} from 'src/models/ActiveTime';
import type {Topic} from 'src/models/Topic';

export function useMentorRegister() {
  const [mentorConnection, setMentorConnection] =
    useRecoilState(mentorConnectionAtom);

  const [connection, setConnection] =
    React.useState<MentorConnection>(undefined);

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
  }, [mentorConnection, setMentorConnection]);
}
