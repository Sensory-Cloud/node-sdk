// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// sensory.api.health
'use strict';
var grpc = require('@grpc/grpc-js');
var health_health_pb = require('../health/health_pb.js');
var common_common_pb = require('../common/common_pb.js');

function serialize_sensory_api_common_ServerHealthResponse(arg) {
  if (!(arg instanceof common_common_pb.ServerHealthResponse)) {
    throw new Error('Expected argument of type sensory.api.common.ServerHealthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_common_ServerHealthResponse(buffer_arg) {
  return common_common_pb.ServerHealthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_health_HealthRequest(arg) {
  if (!(arg instanceof health_health_pb.HealthRequest)) {
    throw new Error('Expected argument of type sensory.api.health.HealthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_health_HealthRequest(buffer_arg) {
  return health_health_pb.HealthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for Health function
var HealthServiceService = exports.HealthServiceService = {
  // Obtain an Health and Server status information
getHealth: {
    path: '/sensory.api.health.HealthService/GetHealth',
    requestStream: false,
    responseStream: false,
    requestType: health_health_pb.HealthRequest,
    responseType: common_common_pb.ServerHealthResponse,
    requestSerialize: serialize_sensory_api_health_HealthRequest,
    requestDeserialize: deserialize_sensory_api_health_HealthRequest,
    responseSerialize: serialize_sensory_api_common_ServerHealthResponse,
    responseDeserialize: deserialize_sensory_api_common_ServerHealthResponse,
  },
};

exports.HealthServiceClient = grpc.makeGenericClientConstructor(HealthServiceService);
