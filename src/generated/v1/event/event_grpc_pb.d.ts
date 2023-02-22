// package: sensory.api.v1.event
// file: v1/event/event.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from '@grpc/grpc-js';
import * as v1_event_event_pb from '../../v1/event/event_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as validate_validate_pb from '../../validate/validate_pb';
import * as common_common_pb from '../../common/common_pb';

interface IEventServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  publishUsageEvents: IEventServiceService_IPublishUsageEvents;
  getUsageEventList: IEventServiceService_IGetUsageEventList;
  getUsageEventSummary: IEventServiceService_IGetUsageEventSummary;
  getGlobalUsageSummary: IEventServiceService_IGetGlobalUsageSummary;
}

interface IEventServiceService_IPublishUsageEvents
  extends grpc.MethodDefinition<
    v1_event_event_pb.PublishUsageEventsRequest,
    v1_event_event_pb.PublishUsageEventsResponse
  > {
  path: '/sensory.api.v1.event.EventService/PublishUsageEvents';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<v1_event_event_pb.PublishUsageEventsRequest>;
  requestDeserialize: grpc.deserialize<v1_event_event_pb.PublishUsageEventsRequest>;
  responseSerialize: grpc.serialize<v1_event_event_pb.PublishUsageEventsResponse>;
  responseDeserialize: grpc.deserialize<v1_event_event_pb.PublishUsageEventsResponse>;
}
interface IEventServiceService_IGetUsageEventList
  extends grpc.MethodDefinition<
    v1_event_event_pb.UsageEventListRequest,
    v1_event_event_pb.UsageEventListResponse
  > {
  path: '/sensory.api.v1.event.EventService/GetUsageEventList';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<v1_event_event_pb.UsageEventListRequest>;
  requestDeserialize: grpc.deserialize<v1_event_event_pb.UsageEventListRequest>;
  responseSerialize: grpc.serialize<v1_event_event_pb.UsageEventListResponse>;
  responseDeserialize: grpc.deserialize<v1_event_event_pb.UsageEventListResponse>;
}
interface IEventServiceService_IGetUsageEventSummary
  extends grpc.MethodDefinition<
    v1_event_event_pb.UsageEventListRequest,
    v1_event_event_pb.UsageEventSummary
  > {
  path: '/sensory.api.v1.event.EventService/GetUsageEventSummary';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<v1_event_event_pb.UsageEventListRequest>;
  requestDeserialize: grpc.deserialize<v1_event_event_pb.UsageEventListRequest>;
  responseSerialize: grpc.serialize<v1_event_event_pb.UsageEventSummary>;
  responseDeserialize: grpc.deserialize<v1_event_event_pb.UsageEventSummary>;
}
interface IEventServiceService_IGetGlobalUsageSummary
  extends grpc.MethodDefinition<
    v1_event_event_pb.GlobalEventSummaryRequest,
    v1_event_event_pb.UsageEventSummary
  > {
  path: '/sensory.api.v1.event.EventService/GetGlobalUsageSummary';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<v1_event_event_pb.GlobalEventSummaryRequest>;
  requestDeserialize: grpc.deserialize<v1_event_event_pb.GlobalEventSummaryRequest>;
  responseSerialize: grpc.serialize<v1_event_event_pb.UsageEventSummary>;
  responseDeserialize: grpc.deserialize<v1_event_event_pb.UsageEventSummary>;
}

export const EventServiceService: IEventServiceService;

export interface IEventServiceServer extends grpc.UntypedServiceImplementation {
  publishUsageEvents: grpc.handleUnaryCall<
    v1_event_event_pb.PublishUsageEventsRequest,
    v1_event_event_pb.PublishUsageEventsResponse
  >;
  getUsageEventList: grpc.handleUnaryCall<
    v1_event_event_pb.UsageEventListRequest,
    v1_event_event_pb.UsageEventListResponse
  >;
  getUsageEventSummary: grpc.handleUnaryCall<
    v1_event_event_pb.UsageEventListRequest,
    v1_event_event_pb.UsageEventSummary
  >;
  getGlobalUsageSummary: grpc.handleUnaryCall<
    v1_event_event_pb.GlobalEventSummaryRequest,
    v1_event_event_pb.UsageEventSummary
  >;
}

export interface IEventServiceClient {
  publishUsageEvents(
    request: v1_event_event_pb.PublishUsageEventsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.PublishUsageEventsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  publishUsageEvents(
    request: v1_event_event_pb.PublishUsageEventsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.PublishUsageEventsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  publishUsageEvents(
    request: v1_event_event_pb.PublishUsageEventsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.PublishUsageEventsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getUsageEventList(
    request: v1_event_event_pb.UsageEventListRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventListResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getUsageEventList(
    request: v1_event_event_pb.UsageEventListRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventListResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getUsageEventList(
    request: v1_event_event_pb.UsageEventListRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventListResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getUsageEventSummary(
    request: v1_event_event_pb.UsageEventListRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventSummary
    ) => void
  ): grpc.ClientUnaryCall;
  getUsageEventSummary(
    request: v1_event_event_pb.UsageEventListRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventSummary
    ) => void
  ): grpc.ClientUnaryCall;
  getUsageEventSummary(
    request: v1_event_event_pb.UsageEventListRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventSummary
    ) => void
  ): grpc.ClientUnaryCall;
  getGlobalUsageSummary(
    request: v1_event_event_pb.GlobalEventSummaryRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventSummary
    ) => void
  ): grpc.ClientUnaryCall;
  getGlobalUsageSummary(
    request: v1_event_event_pb.GlobalEventSummaryRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventSummary
    ) => void
  ): grpc.ClientUnaryCall;
  getGlobalUsageSummary(
    request: v1_event_event_pb.GlobalEventSummaryRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventSummary
    ) => void
  ): grpc.ClientUnaryCall;
}

export class EventServiceClient
  extends grpc.Client
  implements IEventServiceClient
{
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  );
  public publishUsageEvents(
    request: v1_event_event_pb.PublishUsageEventsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.PublishUsageEventsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public publishUsageEvents(
    request: v1_event_event_pb.PublishUsageEventsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.PublishUsageEventsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public publishUsageEvents(
    request: v1_event_event_pb.PublishUsageEventsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.PublishUsageEventsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getUsageEventList(
    request: v1_event_event_pb.UsageEventListRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventListResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getUsageEventList(
    request: v1_event_event_pb.UsageEventListRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventListResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getUsageEventList(
    request: v1_event_event_pb.UsageEventListRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventListResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getUsageEventSummary(
    request: v1_event_event_pb.UsageEventListRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventSummary
    ) => void
  ): grpc.ClientUnaryCall;
  public getUsageEventSummary(
    request: v1_event_event_pb.UsageEventListRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventSummary
    ) => void
  ): grpc.ClientUnaryCall;
  public getUsageEventSummary(
    request: v1_event_event_pb.UsageEventListRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventSummary
    ) => void
  ): grpc.ClientUnaryCall;
  public getGlobalUsageSummary(
    request: v1_event_event_pb.GlobalEventSummaryRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventSummary
    ) => void
  ): grpc.ClientUnaryCall;
  public getGlobalUsageSummary(
    request: v1_event_event_pb.GlobalEventSummaryRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventSummary
    ) => void
  ): grpc.ClientUnaryCall;
  public getGlobalUsageSummary(
    request: v1_event_event_pb.GlobalEventSummaryRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: v1_event_event_pb.UsageEventSummary
    ) => void
  ): grpc.ClientUnaryCall;
}
