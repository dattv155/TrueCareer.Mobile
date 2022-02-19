import {ObjectField} from 'react3l-decorators';
import {GlobalUser} from 'src/models/GlobalUser';
import nameof from 'ts-nameof.macro';
import {GlobalUserType} from './GlobalUserType';

ObjectField(GlobalUserType)(
  GlobalUser.prototype,
  nameof(GlobalUser.prototype.globalUserType),
);

export * from './GlobalUser';

export * from './GlobalUserType';

export * from './AppUser';
