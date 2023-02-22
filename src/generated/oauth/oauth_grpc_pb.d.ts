// package: sensory.api.oauth
// file: oauth/oauth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from '@grpc/grpc-js';
import * as oauth_oauth_pb from '../oauth/oauth_pb';
import * as validate_validate_pb from '../validate/validate_pb';
import * as common_common_pb from '../common/common_pb';

interface IOauthServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getToken: IOauthServiceService_IGetToken;
  signToken: IOauthServiceService_ISignToken;
  getWhoAmI: IOauthServiceService_IGetWhoAmI;
  getPublicKey: IOauthServiceService_IGetPublicKey;
}

interface IOauthServiceService_IGetToken
  extends grpc.MethodDefinition<
    oauth_oauth_pb.TokenRequest,
    common_common_pb.TokenResponse
  > {
  path: '/sensory.api.oauth.OauthService/GetToken';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<oauth_oauth_pb.TokenRequest>;
  requestDeserialize: grpc.deserialize<oauth_oauth_pb.TokenRequest>;
  responseSerialize: grpc.serialize<common_common_pb.TokenResponse>;
  responseDeserialize: grpc.deserialize<common_common_pb.TokenResponse>;
}
interface IOauthServiceService_ISignToken
  extends grpc.MethodDefinition<
    oauth_oauth_pb.SignTokenRequest,
    common_common_pb.TokenResponse
  > {
  path: '/sensory.api.oauth.OauthService/SignToken';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<oauth_oauth_pb.SignTokenRequest>;
  requestDeserialize: grpc.deserialize<oauth_oauth_pb.SignTokenRequest>;
  responseSerialize: grpc.serialize<common_common_pb.TokenResponse>;
  responseDeserialize: grpc.deserialize<common_common_pb.TokenResponse>;
}
interface IOauthServiceService_IGetWhoAmI
  extends grpc.MethodDefinition<
    oauth_oauth_pb.WhoAmIRequest,
    oauth_oauth_pb.WhoAmIResponse
  > {
  path: '/sensory.api.oauth.OauthService/GetWhoAmI';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<oauth_oauth_pb.WhoAmIRequest>;
  requestDeserialize: grpc.deserialize<oauth_oauth_pb.WhoAmIRequest>;
  responseSerialize: grpc.serialize<oauth_oauth_pb.WhoAmIResponse>;
  responseDeserialize: grpc.deserialize<oauth_oauth_pb.WhoAmIResponse>;
}
interface IOauthServiceService_IGetPublicKey
  extends grpc.MethodDefinition<
    oauth_oauth_pb.PublicKeyRequest,
    oauth_oauth_pb.PublicKeyResponse
  > {
  path: '/sensory.api.oauth.OauthService/GetPublicKey';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<oauth_oauth_pb.PublicKeyRequest>;
  requestDeserialize: grpc.deserialize<oauth_oauth_pb.PublicKeyRequest>;
  responseSerialize: grpc.serialize<oauth_oauth_pb.PublicKeyResponse>;
  responseDeserialize: grpc.deserialize<oauth_oauth_pb.PublicKeyResponse>;
}

export const OauthServiceService: IOauthServiceService;

export interface IOauthServiceServer extends grpc.UntypedServiceImplementation {
  getToken: grpc.handleUnaryCall<
    oauth_oauth_pb.TokenRequest,
    common_common_pb.TokenResponse
  >;
  signToken: grpc.handleUnaryCall<
    oauth_oauth_pb.SignTokenRequest,
    common_common_pb.TokenResponse
  >;
  getWhoAmI: grpc.handleUnaryCall<
    oauth_oauth_pb.WhoAmIRequest,
    oauth_oauth_pb.WhoAmIResponse
  >;
  getPublicKey: grpc.handleUnaryCall<
    oauth_oauth_pb.PublicKeyRequest,
    oauth_oauth_pb.PublicKeyResponse
  >;
}

export interface IOauthServiceClient {
  getToken(
    request: oauth_oauth_pb.TokenRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: common_common_pb.TokenResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getToken(
    request: oauth_oauth_pb.TokenRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: common_common_pb.TokenResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getToken(
    request: oauth_oauth_pb.TokenRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: common_common_pb.TokenResponse
    ) => void
  ): grpc.ClientUnaryCall;
  signToken(
    request: oauth_oauth_pb.SignTokenRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: common_common_pb.TokenResponse
    ) => void
  ): grpc.ClientUnaryCall;
  signToken(
    request: oauth_oauth_pb.SignTokenRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: common_common_pb.TokenResponse
    ) => void
  ): grpc.ClientUnaryCall;
  signToken(
    request: oauth_oauth_pb.SignTokenRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: common_common_pb.TokenResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getWhoAmI(
    request: oauth_oauth_pb.WhoAmIRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: oauth_oauth_pb.WhoAmIResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getWhoAmI(
    request: oauth_oauth_pb.WhoAmIRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: oauth_oauth_pb.WhoAmIResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getWhoAmI(
    request: oauth_oauth_pb.WhoAmIRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: oauth_oauth_pb.WhoAmIResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getPublicKey(
    request: oauth_oauth_pb.PublicKeyRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: oauth_oauth_pb.PublicKeyResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getPublicKey(
    request: oauth_oauth_pb.PublicKeyRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: oauth_oauth_pb.PublicKeyResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getPublicKey(
    request: oauth_oauth_pb.PublicKeyRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: oauth_oauth_pb.PublicKeyResponse
    ) => void
  ): grpc.ClientUnaryCall;
}

export class OauthServiceClient
  extends grpc.Client
  implements IOauthServiceClient
{
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  );
  public getToken(
    request: oauth_oauth_pb.TokenRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: common_common_pb.TokenResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getToken(
    request: oauth_oauth_pb.TokenRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: common_common_pb.TokenResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getToken(
    request: oauth_oauth_pb.TokenRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: common_common_pb.TokenResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public signToken(
    request: oauth_oauth_pb.SignTokenRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: common_common_pb.TokenResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public signToken(
    request: oauth_oauth_pb.SignTokenRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: common_common_pb.TokenResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public signToken(
    request: oauth_oauth_pb.SignTokenRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: common_common_pb.TokenResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getWhoAmI(
    request: oauth_oauth_pb.WhoAmIRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: oauth_oauth_pb.WhoAmIResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getWhoAmI(
    request: oauth_oauth_pb.WhoAmIRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: oauth_oauth_pb.WhoAmIResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getWhoAmI(
    request: oauth_oauth_pb.WhoAmIRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: oauth_oauth_pb.WhoAmIResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getPublicKey(
    request: oauth_oauth_pb.PublicKeyRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: oauth_oauth_pb.PublicKeyResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getPublicKey(
    request: oauth_oauth_pb.PublicKeyRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: oauth_oauth_pb.PublicKeyResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getPublicKey(
    request: oauth_oauth_pb.PublicKeyRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: oauth_oauth_pb.PublicKeyResponse
    ) => void
  ): grpc.ClientUnaryCall;
}
