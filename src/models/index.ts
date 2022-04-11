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
// export * from './AppUser';

import nameof from 'ts-nameof.macro';
import {ObjectField} from 'react3l-decorators';
import {AppUser} from './AppUser';
import {AppUserRoleMapping} from './AppUserRoleMapping';
import {Conversation} from './Conversation';
import {ConversationConfiguration} from './ConversationConfiguration';
import {ConversationParticipant} from './ConversationParticipant';
import {ConversationType} from './ConversationType';
import {GlobalUser} from './GlobalUser';
import {GlobalUserType} from './GlobalUserType';
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

ObjectField(ConversationConfiguration)(
  Conversation.prototype,
  nameof(Conversation.prototype.conversationConfiguration),
);

ObjectField(ConversationType)(
  Conversation.prototype,
  nameof(Conversation.prototype.conversationType),
);

ObjectField(GlobalUser)(
  Conversation.prototype,
  nameof(Conversation.prototype.latestGlobalUser),
);

ObjectField(ConversationType)(
  ConversationConfiguration.prototype,
  nameof(ConversationConfiguration.prototype.conversationType),
);

ObjectField(Status)(
  ConversationConfiguration.prototype,
  nameof(ConversationConfiguration.prototype.status),
);

ObjectField(Conversation)(
  ConversationParticipant.prototype,
  nameof(ConversationParticipant.prototype.conversation),
);

ObjectField(GlobalUser)(
  ConversationParticipant.prototype,
  nameof(ConversationParticipant.prototype.globalUser),
);

ObjectField(GlobalUserType)(
  GlobalUser.prototype,
  nameof(GlobalUser.prototype.globalUserType),
);

ObjectField(Role)(Permission.prototype, nameof(Permission.prototype.role));

ObjectField(Status)(Permission.prototype, nameof(Permission.prototype.status));

export * from './AppUser';

export * from './AppUserRoleMapping';

export * from './Conversation';

export * from './ConversationConfiguration';

export * from './ConversationParticipant';

export * from './ConversationType';

export * from './GlobalUser';

export * from './GlobalUserType';

export * from './Permission';

export * from './Role';

export * from './Sex';

export * from './Status';
