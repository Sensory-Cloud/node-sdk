// package: sensory.api.v1.assistant
// file: v1/assistant/assistant.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as v1_assistant_assistant_pb from "../../v1/assistant/assistant_pb";
import * as common_common_pb from "../../common/common_pb";

interface IAssistantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    textChat: IAssistantServiceService_ITextChat;
}

interface IAssistantServiceService_ITextChat extends grpc.MethodDefinition<v1_assistant_assistant_pb.TextChatRequest, v1_assistant_assistant_pb.TextChatResponse> {
    path: "/sensory.api.v1.assistant.AssistantService/TextChat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_assistant_assistant_pb.TextChatRequest>;
    requestDeserialize: grpc.deserialize<v1_assistant_assistant_pb.TextChatRequest>;
    responseSerialize: grpc.serialize<v1_assistant_assistant_pb.TextChatResponse>;
    responseDeserialize: grpc.deserialize<v1_assistant_assistant_pb.TextChatResponse>;
}

export const AssistantServiceService: IAssistantServiceService;

export interface IAssistantServiceServer extends grpc.UntypedServiceImplementation {
    textChat: grpc.handleUnaryCall<v1_assistant_assistant_pb.TextChatRequest, v1_assistant_assistant_pb.TextChatResponse>;
}

export interface IAssistantServiceClient {
    textChat(request: v1_assistant_assistant_pb.TextChatRequest, callback: (error: grpc.ServiceError | null, response: v1_assistant_assistant_pb.TextChatResponse) => void): grpc.ClientUnaryCall;
    textChat(request: v1_assistant_assistant_pb.TextChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_assistant_assistant_pb.TextChatResponse) => void): grpc.ClientUnaryCall;
    textChat(request: v1_assistant_assistant_pb.TextChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_assistant_assistant_pb.TextChatResponse) => void): grpc.ClientUnaryCall;
}

export class AssistantServiceClient extends grpc.Client implements IAssistantServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public textChat(request: v1_assistant_assistant_pb.TextChatRequest, callback: (error: grpc.ServiceError | null, response: v1_assistant_assistant_pb.TextChatResponse) => void): grpc.ClientUnaryCall;
    public textChat(request: v1_assistant_assistant_pb.TextChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_assistant_assistant_pb.TextChatResponse) => void): grpc.ClientUnaryCall;
    public textChat(request: v1_assistant_assistant_pb.TextChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_assistant_assistant_pb.TextChatResponse) => void): grpc.ClientUnaryCall;
}
