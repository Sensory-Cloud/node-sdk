import { Config } from '../config';
import { ITokenManager } from '../token-manager/token.manager';
import { AssistantServiceClient } from '../generated/v1/assistant/assistant_grpc_pb';
import { TextChatRequest, TextChatResponse } from '../generated/v1/assistant/assistant_pb';

/** Service to handle all typical CRUD functions */
export class AssistantService {
  constructor(
    private readonly tokenManager: ITokenManager,
    private assistantClient: AssistantServiceClient | undefined = undefined
  ) {}

  /**
   * Chats with SensoryCloud's LLM
   * @param  {TextChatRequest} request - the chat request
   * @returns Promise<TextChatResponse.AsObject> - the chat response
   */
  public async chat(request: TextChatRequest): Promise<TextChatResponse> {
    return new Promise<TextChatResponse>((resolve, reject) => {
      this.getAssistantClient().textChat(request, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res);
      });
    });
  }

  private getAssistantClient(): AssistantServiceClient {
    if (this.assistantClient == undefined) {
      this.assistantClient = new AssistantServiceClient(
        Config.getHost(),
        this.tokenManager.getCallCredentials()
      );
    }
    return this.assistantClient;
  }
}
