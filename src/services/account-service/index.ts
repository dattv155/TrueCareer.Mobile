import {useLoginDefault} from 'src/services/account-service/use-login-default';
import {useRegister} from 'src/services/account-service/use-register';
import {useForgotPassword} from 'src/services/account-service/use-forgot-password';

export class AccountService {
  public readonly useLoginDefault = useLoginDefault;

  public readonly useRegister = useRegister;

  public readonly useForgotPassword = useForgotPassword;

  public async signOut() {}
}

export const accountService: AccountService = new AccountService();
