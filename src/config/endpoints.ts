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
  BASE_HREF = 'rpc/truecareer/conversation',
  MESSAGE_HREF = 'rpc/truecareer/conversation-message',
  SIGNALR_HREF = '/rpc/truecareer/conversation-hub',
  GLOBAL_HREF = 'rpc/truecareer/global-user',
}

export enum NotificationEndpoints {
  BASE_HREF = '/rpc/utils/user-notification',
}

export enum AccountEndpoints {
  ACCOUNT_HREF = '/rpc/truecareer/account',
  PROFILE_HREF = '/rpc/truecareer/profile',
}

export enum Endpoints {
  SCHOOL_HREF = '/rpc/truecareer/school',
  MAJOR_HREF = '/rpc/truecareer/major',
  ACTIVE_TIME_HREF = '/rpc/truecareer/active-time',
  MENTOR_REGISTER_HREF = '/rpc/truecareer/mentor-register-request',
  MENTOR_HREF = '/rpc/truecareer/mentor',
  INFORMATION_HREF = '/rpc/truecareer/information',
  MENTOR_MENTEE_CONNECTION_HREF = '/rpc/truecareer/mentor-mentee-connection',
  QUESTION_HREF = '/rpc/truecareer/question',
  MBTI_RESULT_HREF = '/rpc/truecareer/mbti-result',
}
