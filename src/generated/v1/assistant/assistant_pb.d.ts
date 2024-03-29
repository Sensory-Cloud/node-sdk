// package: sensory.api.v1.assistant
// file: v1/assistant/assistant.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_pb from "../../common/common_pb";

export class ChatMessage extends jspb.Message { 
    getRole(): ChatRole;
    setRole(value: ChatRole): ChatMessage;
    getContent(): string;
    setContent(value: string): ChatMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChatMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChatMessage;
    static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
    export type AsObject = {
        role: ChatRole,
        content: string,
    }
}

export class TextChatRequest extends jspb.Message { 
    getModelname(): string;
    setModelname(value: string): TextChatRequest;
    clearMessagesList(): void;
    getMessagesList(): Array<ChatMessage>;
    setMessagesList(value: Array<ChatMessage>): TextChatRequest;
    addMessages(value?: ChatMessage, index?: number): ChatMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextChatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TextChatRequest): TextChatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextChatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextChatRequest;
    static deserializeBinaryFromReader(message: TextChatRequest, reader: jspb.BinaryReader): TextChatRequest;
}

export namespace TextChatRequest {
    export type AsObject = {
        modelname: string,
        messagesList: Array<ChatMessage.AsObject>,
    }
}

export class TextChatResponse extends jspb.Message { 

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): ChatMessage | undefined;
    setMessage(value?: ChatMessage): TextChatResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextChatResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TextChatResponse): TextChatResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextChatResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextChatResponse;
    static deserializeBinaryFromReader(message: TextChatResponse, reader: jspb.BinaryReader): TextChatResponse;
}

export namespace TextChatResponse {
    export type AsObject = {
        message?: ChatMessage.AsObject,
    }
}

export enum ChatRole {
    SYSTEM = 0,
    USER = 1,
    ASSISTANT = 2,
}
