// import {ObjectField} from 'react3l-decorators';
// import {GlobalUser} from 'src/models/GlobalUser';
// import nameof from 'ts-nameof.macro';
// import {GlobalUserType} from './GlobalUserType';
//
// ObjectField(GlobalUserType)(
//   GlobalUser.prototype,
//   nameof(GlobalUser.prototype.globalUserType),
// );
//
// export * from './GlobalUser';
//
// export * from './GlobalUserType';
//
// export * from './AppUserAtom';

import nameof from 'ts-nameof.macro';
import {ObjectField} from 'react3l-decorators';
import {AppUser} from './AppUser';
import {AppUserRoleMapping} from './AppUserRoleMapping';
import {Permission} from './Permission';
import {Role} from './Role';
import {Status} from './Status';
import {Organization} from './Organization';

ObjectField(Organization)(
  AppUser.prototype,
  nameof(AppUser.prototype.organization),
);

ObjectField(Status)(AppUser.prototype, nameof(AppUser.prototype.status));

ObjectField(AppUser)(
  AppUserRoleMapping.prototype,
  nameof(AppUserRoleMapping.prototype.appUser),
);

ObjectField(Role)(
  AppUserRoleMapping.prototype,
  nameof(AppUserRoleMapping.prototype.role),
);

ObjectField(Role)(Permission.prototype, nameof(Permission.prototype.role));

ObjectField(Status)(Permission.prototype, nameof(Permission.prototype.status));

export * from './AppUser';

export * from './AppUserRoleMapping';

export * from './GlobalUserType';

export * from './Permission';

export * from './Role';

export * from './Sex';

export * from './Status';
