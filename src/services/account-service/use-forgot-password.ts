import React from 'react';
import {useState} from 'react';
import {profileRepository} from 'src/repositories/profile-repository';

export function useForgotPassword(): [
  string,
  boolean,
  (value: string) => void,
  () => Promise<void>,
] {
  const [email, setEmail] = useState<string>('dattv.155@gmail.com');

  const [loading, setLoading] = useState<boolean>(false);

  const handleSetEmail = React.useCallback((value: string) => {
    setEmail(value);
  }, []);

  const handleForgotPassword = React.useCallback(async () => {
    setLoading(true);
    await profileRepository
      .forgotPassword({email: email})
      .toPromise()
      .then(() => {
        setLoading(false);
      });
  }, [email]);

  return [email, loading, handleSetEmail, handleForgotPassword];
}
