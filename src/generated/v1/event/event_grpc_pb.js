// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// sensory.api.event
'use strict';
var grpc = require('@grpc/grpc-js');
var v1_event_event_pb = require('../../v1/event/event_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var validate_validate_pb = require('../../validate/validate_pb.js');
var common_common_pb = require('../../common/common_pb.js');

function serialize_sensory_api_v1_event_GlobalEventSummaryRequest(arg) {
  if (!(arg instanceof v1_event_event_pb.GlobalEventSummaryRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.event.GlobalEventSummaryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_event_GlobalEventSummaryRequest(buffer_arg) {
  return v1_event_event_pb.GlobalEventSummaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_event_PublishUsageEventsRequest(arg) {
  if (!(arg instanceof v1_event_event_pb.PublishUsageEventsRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.event.PublishUsageEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_event_PublishUsageEventsRequest(buffer_arg) {
  return v1_event_event_pb.PublishUsageEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_event_PublishUsageEventsResponse(arg) {
  if (!(arg instanceof v1_event_event_pb.PublishUsageEventsResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.event.PublishUsageEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_event_PublishUsageEventsResponse(buffer_arg) {
  return v1_event_event_pb.PublishUsageEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_event_UsageEventListRequest(arg) {
  if (!(arg instanceof v1_event_event_pb.UsageEventListRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.event.UsageEventListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_event_UsageEventListRequest(buffer_arg) {
  return v1_event_event_pb.UsageEventListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_event_UsageEventListResponse(arg) {
  if (!(arg instanceof v1_event_event_pb.UsageEventListResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.event.UsageEventListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_event_UsageEventListResponse(buffer_arg) {
  return v1_event_event_pb.UsageEventListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_event_UsageEventSummary(arg) {
  if (!(arg instanceof v1_event_event_pb.UsageEventSummary)) {
    throw new Error('Expected argument of type sensory.api.v1.event.UsageEventSummary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_event_UsageEventSummary(buffer_arg) {
  return v1_event_event_pb.UsageEventSummary.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to publish events to the cloud
var EventServiceService = exports.EventServiceService = {
  // Publishes a list of usage event to the cloud
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
publishUsageEvents: {
    path: '/sensory.api.v1.event.EventService/PublishUsageEvents',
    requestStream: false,
    responseStream: false,
    requestType: v1_event_event_pb.PublishUsageEventsRequest,
    responseType: v1_event_event_pb.PublishUsageEventsResponse,
    requestSerialize: serialize_sensory_api_v1_event_PublishUsageEventsRequest,
    requestDeserialize: deserialize_sensory_api_v1_event_PublishUsageEventsRequest,
    responseSerialize: serialize_sensory_api_v1_event_PublishUsageEventsResponse,
    responseDeserialize: deserialize_sensory_api_v1_event_PublishUsageEventsResponse,
  },
  // Obtains a list of events given the filter criteria
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
getUsageEventList: {
    path: '/sensory.api.v1.event.EventService/GetUsageEventList',
    requestStream: false,
    responseStream: false,
    requestType: v1_event_event_pb.UsageEventListRequest,
    responseType: v1_event_event_pb.UsageEventListResponse,
    requestSerialize: serialize_sensory_api_v1_event_UsageEventListRequest,
    requestDeserialize: deserialize_sensory_api_v1_event_UsageEventListRequest,
    responseSerialize: serialize_sensory_api_v1_event_UsageEventListResponse,
    responseDeserialize: deserialize_sensory_api_v1_event_UsageEventListResponse,
  },
  // Obtains a summary of events given the filter critieria
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
getUsageEventSummary: {
    path: '/sensory.api.v1.event.EventService/GetUsageEventSummary',
    requestStream: false,
    responseStream: false,
    requestType: v1_event_event_pb.UsageEventListRequest,
    responseType: v1_event_event_pb.UsageEventSummary,
    requestSerialize: serialize_sensory_api_v1_event_UsageEventListRequest,
    requestDeserialize: deserialize_sensory_api_v1_event_UsageEventListRequest,
    responseSerialize: serialize_sensory_api_v1_event_UsageEventSummary,
    responseDeserialize: deserialize_sensory_api_v1_event_UsageEventSummary,
  },
  // Obtains a usage summary of events across all specified tenants
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
getGlobalUsageSummary: {
    path: '/sensory.api.v1.event.EventService/GetGlobalUsageSummary',
    requestStream: false,
    responseStream: false,
    requestType: v1_event_event_pb.GlobalEventSummaryRequest,
    responseType: v1_event_event_pb.UsageEventSummary,
    requestSerialize: serialize_sensory_api_v1_event_GlobalEventSummaryRequest,
    requestDeserialize: deserialize_sensory_api_v1_event_GlobalEventSummaryRequest,
    responseSerialize: serialize_sensory_api_v1_event_UsageEventSummary,
    responseDeserialize: deserialize_sensory_api_v1_event_UsageEventSummary,
  },
};

exports.EventServiceClient = grpc.makeGenericClientConstructor(EventServiceService);
