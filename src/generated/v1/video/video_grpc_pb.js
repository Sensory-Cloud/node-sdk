// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// sensory.api.video
'use strict';
var grpc = require('@grpc/grpc-js');
var v1_video_video_pb = require('../../v1/video/video_pb.js');
var validate_validate_pb = require('../../validate/validate_pb.js');
var common_common_pb = require('../../common/common_pb.js');

function serialize_sensory_api_v1_video_AuthenticateRequest(arg) {
  if (!(arg instanceof v1_video_video_pb.AuthenticateRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.video.AuthenticateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_video_AuthenticateRequest(buffer_arg) {
  return v1_video_video_pb.AuthenticateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_video_AuthenticateResponse(arg) {
  if (!(arg instanceof v1_video_video_pb.AuthenticateResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.video.AuthenticateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_video_AuthenticateResponse(buffer_arg) {
  return v1_video_video_pb.AuthenticateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_video_CreateEnrollmentRequest(arg) {
  if (!(arg instanceof v1_video_video_pb.CreateEnrollmentRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.video.CreateEnrollmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_video_CreateEnrollmentRequest(buffer_arg) {
  return v1_video_video_pb.CreateEnrollmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_video_CreateEnrollmentResponse(arg) {
  if (!(arg instanceof v1_video_video_pb.CreateEnrollmentResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.video.CreateEnrollmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_video_CreateEnrollmentResponse(buffer_arg) {
  return v1_video_video_pb.CreateEnrollmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_video_GetModelsRequest(arg) {
  if (!(arg instanceof v1_video_video_pb.GetModelsRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.video.GetModelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_video_GetModelsRequest(buffer_arg) {
  return v1_video_video_pb.GetModelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_video_GetModelsResponse(arg) {
  if (!(arg instanceof v1_video_video_pb.GetModelsResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.video.GetModelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_video_GetModelsResponse(buffer_arg) {
  return v1_video_video_pb.GetModelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_video_LivenessRecognitionResponse(arg) {
  if (!(arg instanceof v1_video_video_pb.LivenessRecognitionResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.video.LivenessRecognitionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_video_LivenessRecognitionResponse(buffer_arg) {
  return v1_video_video_pb.LivenessRecognitionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_video_ValidateRecognitionRequest(arg) {
  if (!(arg instanceof v1_video_video_pb.ValidateRecognitionRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.video.ValidateRecognitionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_video_ValidateRecognitionRequest(buffer_arg) {
  return v1_video_video_pb.ValidateRecognitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Handles the retrieval and management of video models
var VideoModelsService = exports.VideoModelsService = {
  // Get available models for enrollment and authentication
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
getModels: {
    path: '/sensory.api.v1.video.VideoModels/GetModels',
    requestStream: false,
    responseStream: false,
    requestType: v1_video_video_pb.GetModelsRequest,
    responseType: v1_video_video_pb.GetModelsResponse,
    requestSerialize: serialize_sensory_api_v1_video_GetModelsRequest,
    requestDeserialize: deserialize_sensory_api_v1_video_GetModelsRequest,
    responseSerialize: serialize_sensory_api_v1_video_GetModelsResponse,
    responseDeserialize: deserialize_sensory_api_v1_video_GetModelsResponse,
  },
};

exports.VideoModelsClient = grpc.makeGenericClientConstructor(VideoModelsService);
// Handles all video-related biometrics
var VideoBiometricsService = exports.VideoBiometricsService = {
  // Enrolls a user with a stream of video. Streams a CreateEnrollmentResponse
// as the video is processed.
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
createEnrollment: {
    path: '/sensory.api.v1.video.VideoBiometrics/CreateEnrollment',
    requestStream: true,
    responseStream: true,
    requestType: v1_video_video_pb.CreateEnrollmentRequest,
    responseType: v1_video_video_pb.CreateEnrollmentResponse,
    requestSerialize: serialize_sensory_api_v1_video_CreateEnrollmentRequest,
    requestDeserialize: deserialize_sensory_api_v1_video_CreateEnrollmentRequest,
    responseSerialize: serialize_sensory_api_v1_video_CreateEnrollmentResponse,
    responseDeserialize: deserialize_sensory_api_v1_video_CreateEnrollmentResponse,
  },
  // Authenticates a user with a stream of video against an existing enrollment.
// Streams an AuthenticateResponse as the video is processed.
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
authenticate: {
    path: '/sensory.api.v1.video.VideoBiometrics/Authenticate',
    requestStream: true,
    responseStream: true,
    requestType: v1_video_video_pb.AuthenticateRequest,
    responseType: v1_video_video_pb.AuthenticateResponse,
    requestSerialize: serialize_sensory_api_v1_video_AuthenticateRequest,
    requestDeserialize: deserialize_sensory_api_v1_video_AuthenticateRequest,
    responseSerialize: serialize_sensory_api_v1_video_AuthenticateResponse,
    responseDeserialize: deserialize_sensory_api_v1_video_AuthenticateResponse,
  },
};

exports.VideoBiometricsClient = grpc.makeGenericClientConstructor(VideoBiometricsService);
// Handles all video recognition endpoints
var VideoRecognitionService = exports.VideoRecognitionService = {
  // Validates the liveness of a single image or stream of images.
// Streams a ValidateRecognitionResponse as the images are processed.
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
validateLiveness: {
    path: '/sensory.api.v1.video.VideoRecognition/ValidateLiveness',
    requestStream: true,
    responseStream: true,
    requestType: v1_video_video_pb.ValidateRecognitionRequest,
    responseType: v1_video_video_pb.LivenessRecognitionResponse,
    requestSerialize: serialize_sensory_api_v1_video_ValidateRecognitionRequest,
    requestDeserialize: deserialize_sensory_api_v1_video_ValidateRecognitionRequest,
    responseSerialize: serialize_sensory_api_v1_video_LivenessRecognitionResponse,
    responseDeserialize: deserialize_sensory_api_v1_video_LivenessRecognitionResponse,
  },
};

exports.VideoRecognitionClient = grpc.makeGenericClientConstructor(VideoRecognitionService);
