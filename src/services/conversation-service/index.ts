import {useGetGlobalUser} from 'src/services/conversation-service/use-get-global-user';

export class ConversationService {
  public readonly useGetGlobalUser = useGetGlobalUser;

  // public readonly useCreateConversation = useCreateConversation;

  // public readonly useCreateGroupConversation = useCreateGroupConversation;
}

export const conversationService: ConversationService =
  new ConversationService();
