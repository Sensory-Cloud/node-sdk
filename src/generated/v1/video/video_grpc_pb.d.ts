// package: sensory.api.v1.video
// file: v1/video/video.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from '@grpc/grpc-js';
import * as v1_video_video_pb from '../../v1/video/video_pb';
import * as validate_validate_pb from '../../validate/validate_pb';
import * as common_common_pb from '../../common/common_pb';

interface IVideoModelsService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getModels: IVideoModelsService_IGetModels;
}

interface IVideoModelsService_IGetModels
  extends grpc.MethodDefinition<
    v1_video_video_pb.GetModelsRequest,
    v1_video_video_pb.GetModelsResponse
  > {
  path: '/sensory.api.v1.video.VideoModels/GetModels';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<v1_video_video_pb.GetModelsRequest>;
  requestDeserialize: grpc.deserialize<v1_video_video_pb.GetModelsRequest>;
  responseSerialize: grpc.serialize<v1_video_video_pb.GetModelsResponse>;
  responseDeserialize: grpc.deserialize<v1_video_video_pb.GetModelsResponse>;
}

export const VideoModelsService: IVideoModelsService;

export interface IVideoModelsServer extends grpc.UntypedServiceImplementation {
  getModels: grpc.handleUnaryCall<
    v1_video_video_pb.GetModelsRequest,
    v1_video_video_pb.GetModelsResponse
  >;
}

export interface IVideoModelsClient {
  getModels(
    request: v1_video_video_pb.GetModelsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_video_video_pb.GetModelsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getModels(
    request: v1_video_video_pb.GetModelsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_video_video_pb.GetModelsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getModels(
    request: v1_video_video_pb.GetModelsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_video_video_pb.GetModelsResponse
    ) => void
  ): grpc.ClientUnaryCall;
}

export class VideoModelsClient
  extends grpc.Client
  implements IVideoModelsClient
{
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  );
  public getModels(
    request: v1_video_video_pb.GetModelsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_video_video_pb.GetModelsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getModels(
    request: v1_video_video_pb.GetModelsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_video_video_pb.GetModelsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getModels(
    request: v1_video_video_pb.GetModelsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_video_video_pb.GetModelsResponse
    ) => void
  ): grpc.ClientUnaryCall;
}

interface IVideoBiometricsService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createEnrollment: IVideoBiometricsService_ICreateEnrollment;
  authenticate: IVideoBiometricsService_IAuthenticate;
}

interface IVideoBiometricsService_ICreateEnrollment
  extends grpc.MethodDefinition<
    v1_video_video_pb.CreateEnrollmentRequest,
    v1_video_video_pb.CreateEnrollmentResponse
  > {
  path: '/sensory.api.v1.video.VideoBiometrics/CreateEnrollment';
  requestStream: true;
  responseStream: true;
  requestSerialize: grpc.serialize<v1_video_video_pb.CreateEnrollmentRequest>;
  requestDeserialize: grpc.deserialize<v1_video_video_pb.CreateEnrollmentRequest>;
  responseSerialize: grpc.serialize<v1_video_video_pb.CreateEnrollmentResponse>;
  responseDeserialize: grpc.deserialize<v1_video_video_pb.CreateEnrollmentResponse>;
}
interface IVideoBiometricsService_IAuthenticate
  extends grpc.MethodDefinition<
    v1_video_video_pb.AuthenticateRequest,
    v1_video_video_pb.AuthenticateResponse
  > {
  path: '/sensory.api.v1.video.VideoBiometrics/Authenticate';
  requestStream: true;
  responseStream: true;
  requestSerialize: grpc.serialize<v1_video_video_pb.AuthenticateRequest>;
  requestDeserialize: grpc.deserialize<v1_video_video_pb.AuthenticateRequest>;
  responseSerialize: grpc.serialize<v1_video_video_pb.AuthenticateResponse>;
  responseDeserialize: grpc.deserialize<v1_video_video_pb.AuthenticateResponse>;
}

export const VideoBiometricsService: IVideoBiometricsService;

export interface IVideoBiometricsServer
  extends grpc.UntypedServiceImplementation {
  createEnrollment: grpc.handleBidiStreamingCall<
    v1_video_video_pb.CreateEnrollmentRequest,
    v1_video_video_pb.CreateEnrollmentResponse
  >;
  authenticate: grpc.handleBidiStreamingCall<
    v1_video_video_pb.AuthenticateRequest,
    v1_video_video_pb.AuthenticateResponse
  >;
}

export interface IVideoBiometricsClient {
  createEnrollment(): grpc.ClientDuplexStream<
    v1_video_video_pb.CreateEnrollmentRequest,
    v1_video_video_pb.CreateEnrollmentResponse
  >;
  createEnrollment(
    options: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    v1_video_video_pb.CreateEnrollmentRequest,
    v1_video_video_pb.CreateEnrollmentResponse
  >;
  createEnrollment(
    metadata: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    v1_video_video_pb.CreateEnrollmentRequest,
    v1_video_video_pb.CreateEnrollmentResponse
  >;
  authenticate(): grpc.ClientDuplexStream<
    v1_video_video_pb.AuthenticateRequest,
    v1_video_video_pb.AuthenticateResponse
  >;
  authenticate(
    options: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    v1_video_video_pb.AuthenticateRequest,
    v1_video_video_pb.AuthenticateResponse
  >;
  authenticate(
    metadata: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    v1_video_video_pb.AuthenticateRequest,
    v1_video_video_pb.AuthenticateResponse
  >;
}

export class VideoBiometricsClient
  extends grpc.Client
  implements IVideoBiometricsClient
{
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  );
  public createEnrollment(
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    v1_video_video_pb.CreateEnrollmentRequest,
    v1_video_video_pb.CreateEnrollmentResponse
  >;
  public createEnrollment(
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    v1_video_video_pb.CreateEnrollmentRequest,
    v1_video_video_pb.CreateEnrollmentResponse
  >;
  public authenticate(
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    v1_video_video_pb.AuthenticateRequest,
    v1_video_video_pb.AuthenticateResponse
  >;
  public authenticate(
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    v1_video_video_pb.AuthenticateRequest,
    v1_video_video_pb.AuthenticateResponse
  >;
}

interface IVideoRecognitionService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  validateLiveness: IVideoRecognitionService_IValidateLiveness;
}

interface IVideoRecognitionService_IValidateLiveness
  extends grpc.MethodDefinition<
    v1_video_video_pb.ValidateRecognitionRequest,
    v1_video_video_pb.LivenessRecognitionResponse
  > {
  path: '/sensory.api.v1.video.VideoRecognition/ValidateLiveness';
  requestStream: true;
  responseStream: true;
  requestSerialize: grpc.serialize<v1_video_video_pb.ValidateRecognitionRequest>;
  requestDeserialize: grpc.deserialize<v1_video_video_pb.ValidateRecognitionRequest>;
  responseSerialize: grpc.serialize<v1_video_video_pb.LivenessRecognitionResponse>;
  responseDeserialize: grpc.deserialize<v1_video_video_pb.LivenessRecognitionResponse>;
}

export const VideoRecognitionService: IVideoRecognitionService;

export interface IVideoRecognitionServer
  extends grpc.UntypedServiceImplementation {
  validateLiveness: grpc.handleBidiStreamingCall<
    v1_video_video_pb.ValidateRecognitionRequest,
    v1_video_video_pb.LivenessRecognitionResponse
  >;
}

export interface IVideoRecognitionClient {
  validateLiveness(): grpc.ClientDuplexStream<
    v1_video_video_pb.ValidateRecognitionRequest,
    v1_video_video_pb.LivenessRecognitionResponse
  >;
  validateLiveness(
    options: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    v1_video_video_pb.ValidateRecognitionRequest,
    v1_video_video_pb.LivenessRecognitionResponse
  >;
  validateLiveness(
    metadata: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    v1_video_video_pb.ValidateRecognitionRequest,
    v1_video_video_pb.LivenessRecognitionResponse
  >;
}

export class VideoRecognitionClient
  extends grpc.Client
  implements IVideoRecognitionClient
{
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  );
  public validateLiveness(
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    v1_video_video_pb.ValidateRecognitionRequest,
    v1_video_video_pb.LivenessRecognitionResponse
  >;
  public validateLiveness(
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    v1_video_video_pb.ValidateRecognitionRequest,
    v1_video_video_pb.LivenessRecognitionResponse
  >;
}
