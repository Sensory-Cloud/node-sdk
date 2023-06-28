// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// sensory.api.assistant
'use strict';
var grpc = require('@grpc/grpc-js');
var v1_assistant_assistant_pb = require('../../v1/assistant/assistant_pb.js');
var common_common_pb = require('../../common/common_pb.js');

function serialize_sensory_api_v1_assistant_TextChatRequest(arg) {
  if (!(arg instanceof v1_assistant_assistant_pb.TextChatRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.assistant.TextChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_assistant_TextChatRequest(buffer_arg) {
  return v1_assistant_assistant_pb.TextChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_assistant_TextChatResponse(arg) {
  if (!(arg instanceof v1_assistant_assistant_pb.TextChatResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.assistant.TextChatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_assistant_TextChatResponse(buffer_arg) {
  return v1_assistant_assistant_pb.TextChatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AssistantServiceService = exports.AssistantServiceService = {
  // Allows a user to verify their own email. Will fail if the email is already verified.
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
textChat: {
    path: '/sensory.api.v1.assistant.AssistantService/TextChat',
    requestStream: false,
    responseStream: false,
    requestType: v1_assistant_assistant_pb.TextChatRequest,
    responseType: v1_assistant_assistant_pb.TextChatResponse,
    requestSerialize: serialize_sensory_api_v1_assistant_TextChatRequest,
    requestDeserialize: deserialize_sensory_api_v1_assistant_TextChatRequest,
    responseSerialize: serialize_sensory_api_v1_assistant_TextChatResponse,
    responseDeserialize: deserialize_sensory_api_v1_assistant_TextChatResponse,
  },
};

exports.AssistantServiceClient = grpc.makeGenericClientConstructor(AssistantServiceService);
