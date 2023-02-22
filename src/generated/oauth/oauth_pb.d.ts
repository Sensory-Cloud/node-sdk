// package: sensory.api.oauth
// file: oauth/oauth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as validate_validate_pb from '../validate/validate_pb';
import * as common_common_pb from '../common/common_pb';

export class TokenRequest extends jspb.Message {
  getClientid(): string;
  setClientid(value: string): TokenRequest;
  getSecret(): string;
  setSecret(value: string): TokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TokenRequest
  ): TokenRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TokenRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): TokenRequest;
  static deserializeBinaryFromReader(
    message: TokenRequest,
    reader: jspb.BinaryReader
  ): TokenRequest;
}

export namespace TokenRequest {
  export type AsObject = {
    clientid: string;
    secret: string;
  };
}

export class SignTokenRequest extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): SignTokenRequest;
  getScope(): SignTokenRequest.TokenScope;
  setScope(value: SignTokenRequest.TokenScope): SignTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignTokenRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SignTokenRequest
  ): SignTokenRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SignTokenRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SignTokenRequest;
  static deserializeBinaryFromReader(
    message: SignTokenRequest,
    reader: jspb.BinaryReader
  ): SignTokenRequest;
}

export namespace SignTokenRequest {
  export type AsObject = {
    subject: string;
    scope: SignTokenRequest.TokenScope;
  };

  export enum TokenScope {
    USER = 0,
    SUPER_ADMIN = 1,
    BILLING_ADMIN = 2,
    READ_ONLY_ADMIN = 3,
    EMAIL_SELF_VERIFY = 4,
  }
}

export class WhoAmIRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhoAmIRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: WhoAmIRequest
  ): WhoAmIRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: WhoAmIRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): WhoAmIRequest;
  static deserializeBinaryFromReader(
    message: WhoAmIRequest,
    reader: jspb.BinaryReader
  ): WhoAmIRequest;
}

export namespace WhoAmIRequest {
  export type AsObject = {};
}

export class WhoAmIResponse extends jspb.Message {
  getClientid(): string;
  setClientid(value: string): WhoAmIResponse;
  getTenantid(): string;
  setTenantid(value: string): WhoAmIResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhoAmIResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: WhoAmIResponse
  ): WhoAmIResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: WhoAmIResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): WhoAmIResponse;
  static deserializeBinaryFromReader(
    message: WhoAmIResponse,
    reader: jspb.BinaryReader
  ): WhoAmIResponse;
}

export namespace WhoAmIResponse {
  export type AsObject = {
    clientid: string;
    tenantid: string;
  };
}

export class PublicKeyRequest extends jspb.Message {
  getKeyid(): string;
  setKeyid(value: string): PublicKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKeyRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PublicKeyRequest
  ): PublicKeyRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PublicKeyRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PublicKeyRequest;
  static deserializeBinaryFromReader(
    message: PublicKeyRequest,
    reader: jspb.BinaryReader
  ): PublicKeyRequest;
}

export namespace PublicKeyRequest {
  export type AsObject = {
    keyid: string;
  };
}

export class PublicKeyResponse extends jspb.Message {
  getPublickey(): Uint8Array | string;
  getPublickey_asU8(): Uint8Array;
  getPublickey_asB64(): string;
  setPublickey(value: Uint8Array | string): PublicKeyResponse;
  getKeytype(): common_common_pb.KeyType;
  setKeytype(value: common_common_pb.KeyType): PublicKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKeyResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PublicKeyResponse
  ): PublicKeyResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PublicKeyResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PublicKeyResponse;
  static deserializeBinaryFromReader(
    message: PublicKeyResponse,
    reader: jspb.BinaryReader
  ): PublicKeyResponse;
}

export namespace PublicKeyResponse {
  export type AsObject = {
    publickey: Uint8Array | string;
    keytype: common_common_pb.KeyType;
  };
}
