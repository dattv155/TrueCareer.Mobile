export enum PortalEndpoints {
  PING = '/rpc/portal/ping',
  LOGIN = '/rpc/portal/account/login',
  PROFILE = '/rpc/portal/profile/get',
  CHANGE_PASS = '/rpc/portal/profile/change-password',
  FORGOT_PASS = '/rpc/portal/profile/forgot-password',
  VERIFY_OTP_CODE = '/rpc/portal/profile/verify-otp-code',
  RECOVERY_PASSWORD = '/rpc/portal/profile/recovery-password',
  CREATE_SESSION = '/rpc/portal/profile/create-session',
  REFRESH_TOKEN = '/rpc/portal/profile/refresh-token',
}

export enum ConversationEndpoints {
  BASE_HREF = 'rpc/utils/conversation',
  MESSAGE_HREF = 'rpc/utils/conversation-message',
  SIGNALR_HREF = '/rpc/truecareer/conversation-hub',
  GLOBAL_HREF = 'rpc/utils/global-user',
}

export enum NotificationEndpoints {
  BASE_HREF = '/rpc/utils/user-notification',
}

export enum ConstructionEndpoints {
  PROFILE_HREF = '/rpc/construction/profile',
  TIME_KEEPING_HREF = '/rpc/construction/time-keeping',
  DOCUMENT_HREF = '/rpc/construction/document',
}

export enum AccountEndpoints {
  ACCOUNT_HREF = '/rpc/truecareer/account',
  PROFILE_HREF = '/rpc/truecareer/profile',
}
