// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// sensory.api.audio
'use strict';
var grpc = require('@grpc/grpc-js');
var v1_audio_audio_pb = require('../../v1/audio/audio_pb.js');
var validate_validate_pb = require('../../validate/validate_pb.js');
var common_common_pb = require('../../common/common_pb.js');

function serialize_sensory_api_v1_audio_AuthenticateRequest(arg) {
  if (!(arg instanceof v1_audio_audio_pb.AuthenticateRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.AuthenticateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_AuthenticateRequest(buffer_arg) {
  return v1_audio_audio_pb.AuthenticateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_AuthenticateResponse(arg) {
  if (!(arg instanceof v1_audio_audio_pb.AuthenticateResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.AuthenticateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_AuthenticateResponse(buffer_arg) {
  return v1_audio_audio_pb.AuthenticateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_CreateEnrolledEventRequest(arg) {
  if (!(arg instanceof v1_audio_audio_pb.CreateEnrolledEventRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.CreateEnrolledEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_CreateEnrolledEventRequest(buffer_arg) {
  return v1_audio_audio_pb.CreateEnrolledEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_CreateEnrollmentRequest(arg) {
  if (!(arg instanceof v1_audio_audio_pb.CreateEnrollmentRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.CreateEnrollmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_CreateEnrollmentRequest(buffer_arg) {
  return v1_audio_audio_pb.CreateEnrollmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_CreateEnrollmentResponse(arg) {
  if (!(arg instanceof v1_audio_audio_pb.CreateEnrollmentResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.CreateEnrollmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_CreateEnrollmentResponse(buffer_arg) {
  return v1_audio_audio_pb.CreateEnrollmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_GetModelsRequest(arg) {
  if (!(arg instanceof v1_audio_audio_pb.GetModelsRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.GetModelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_GetModelsRequest(buffer_arg) {
  return v1_audio_audio_pb.GetModelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_GetModelsResponse(arg) {
  if (!(arg instanceof v1_audio_audio_pb.GetModelsResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.GetModelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_GetModelsResponse(buffer_arg) {
  return v1_audio_audio_pb.GetModelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_SynthesizeSpeechRequest(arg) {
  if (!(arg instanceof v1_audio_audio_pb.SynthesizeSpeechRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.SynthesizeSpeechRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_SynthesizeSpeechRequest(buffer_arg) {
  return v1_audio_audio_pb.SynthesizeSpeechRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_SynthesizeSpeechResponse(arg) {
  if (!(arg instanceof v1_audio_audio_pb.SynthesizeSpeechResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.SynthesizeSpeechResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_SynthesizeSpeechResponse(buffer_arg) {
  return v1_audio_audio_pb.SynthesizeSpeechResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_TranscribeRequest(arg) {
  if (!(arg instanceof v1_audio_audio_pb.TranscribeRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.TranscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_TranscribeRequest(buffer_arg) {
  return v1_audio_audio_pb.TranscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_TranscribeResponse(arg) {
  if (!(arg instanceof v1_audio_audio_pb.TranscribeResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.TranscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_TranscribeResponse(buffer_arg) {
  return v1_audio_audio_pb.TranscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_ValidateEnrolledEventRequest(arg) {
  if (!(arg instanceof v1_audio_audio_pb.ValidateEnrolledEventRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.ValidateEnrolledEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_ValidateEnrolledEventRequest(buffer_arg) {
  return v1_audio_audio_pb.ValidateEnrolledEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_ValidateEnrolledEventResponse(arg) {
  if (!(arg instanceof v1_audio_audio_pb.ValidateEnrolledEventResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.ValidateEnrolledEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_ValidateEnrolledEventResponse(buffer_arg) {
  return v1_audio_audio_pb.ValidateEnrolledEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_ValidateEventRequest(arg) {
  if (!(arg instanceof v1_audio_audio_pb.ValidateEventRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.ValidateEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_ValidateEventRequest(buffer_arg) {
  return v1_audio_audio_pb.ValidateEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_audio_ValidateEventResponse(arg) {
  if (!(arg instanceof v1_audio_audio_pb.ValidateEventResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.audio.ValidateEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_audio_ValidateEventResponse(buffer_arg) {
  return v1_audio_audio_pb.ValidateEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Handles the retrieval and management of audio models
var AudioModelsService = exports.AudioModelsService = {
  // Get available models for enrollment and authentication
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
getModels: {
    path: '/sensory.api.v1.audio.AudioModels/GetModels',
    requestStream: false,
    responseStream: false,
    requestType: v1_audio_audio_pb.GetModelsRequest,
    responseType: v1_audio_audio_pb.GetModelsResponse,
    requestSerialize: serialize_sensory_api_v1_audio_GetModelsRequest,
    requestDeserialize: deserialize_sensory_api_v1_audio_GetModelsRequest,
    responseSerialize: serialize_sensory_api_v1_audio_GetModelsResponse,
    responseDeserialize: deserialize_sensory_api_v1_audio_GetModelsResponse,
  },
};

exports.AudioModelsClient = grpc.makeGenericClientConstructor(AudioModelsService);
// Handles all audio-related biometrics
var AudioBiometricsService = exports.AudioBiometricsService = {
  // Enrolls a user with a stream of audio. Streams a CreateEnrollmentResponse as the audio is processed.
// CreateEnrollment only supports biometric-enabled models
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
createEnrollment: {
    path: '/sensory.api.v1.audio.AudioBiometrics/CreateEnrollment',
    requestStream: true,
    responseStream: true,
    requestType: v1_audio_audio_pb.CreateEnrollmentRequest,
    responseType: v1_audio_audio_pb.CreateEnrollmentResponse,
    requestSerialize: serialize_sensory_api_v1_audio_CreateEnrollmentRequest,
    requestDeserialize: deserialize_sensory_api_v1_audio_CreateEnrollmentRequest,
    responseSerialize: serialize_sensory_api_v1_audio_CreateEnrollmentResponse,
    responseDeserialize: deserialize_sensory_api_v1_audio_CreateEnrollmentResponse,
  },
  // Authenticates a user with a stream of audio against an existing enrollment.
// Streams an AuthenticateResponse as the audio is processed.
// Authenticate only supports biometric-enabled models
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
authenticate: {
    path: '/sensory.api.v1.audio.AudioBiometrics/Authenticate',
    requestStream: true,
    responseStream: true,
    requestType: v1_audio_audio_pb.AuthenticateRequest,
    responseType: v1_audio_audio_pb.AuthenticateResponse,
    requestSerialize: serialize_sensory_api_v1_audio_AuthenticateRequest,
    requestDeserialize: deserialize_sensory_api_v1_audio_AuthenticateRequest,
    responseSerialize: serialize_sensory_api_v1_audio_AuthenticateResponse,
    responseDeserialize: deserialize_sensory_api_v1_audio_AuthenticateResponse,
  },
};

exports.AudioBiometricsClient = grpc.makeGenericClientConstructor(AudioBiometricsService);
// Handles all audio event processing
var AudioEventsService = exports.AudioEventsService = {
  // Validates a phrase or sound with a stream of audio.
// Streams a ValidateEventResponse as the audio is processed.
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
validateEvent: {
    path: '/sensory.api.v1.audio.AudioEvents/ValidateEvent',
    requestStream: true,
    responseStream: true,
    requestType: v1_audio_audio_pb.ValidateEventRequest,
    responseType: v1_audio_audio_pb.ValidateEventResponse,
    requestSerialize: serialize_sensory_api_v1_audio_ValidateEventRequest,
    requestDeserialize: deserialize_sensory_api_v1_audio_ValidateEventRequest,
    responseSerialize: serialize_sensory_api_v1_audio_ValidateEventResponse,
    responseDeserialize: deserialize_sensory_api_v1_audio_ValidateEventResponse,
  },
  // Enrolls a sound or voice. Streams a CreateEnrollmentResponse as the audio is processed.
// CreateEnrollment supports all enrollable models
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
createEnrolledEvent: {
    path: '/sensory.api.v1.audio.AudioEvents/CreateEnrolledEvent',
    requestStream: true,
    responseStream: true,
    requestType: v1_audio_audio_pb.CreateEnrolledEventRequest,
    responseType: v1_audio_audio_pb.CreateEnrollmentResponse,
    requestSerialize: serialize_sensory_api_v1_audio_CreateEnrolledEventRequest,
    requestDeserialize: deserialize_sensory_api_v1_audio_CreateEnrolledEventRequest,
    responseSerialize: serialize_sensory_api_v1_audio_CreateEnrollmentResponse,
    responseDeserialize: deserialize_sensory_api_v1_audio_CreateEnrollmentResponse,
  },
  // Authenticates a sound or voice. Streams a ValidateEventResponse as the audio is processed.
// ValidateEnrolledEvent supports all enrollable models
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
validateEnrolledEvent: {
    path: '/sensory.api.v1.audio.AudioEvents/ValidateEnrolledEvent',
    requestStream: true,
    responseStream: true,
    requestType: v1_audio_audio_pb.ValidateEnrolledEventRequest,
    responseType: v1_audio_audio_pb.ValidateEnrolledEventResponse,
    requestSerialize: serialize_sensory_api_v1_audio_ValidateEnrolledEventRequest,
    requestDeserialize: deserialize_sensory_api_v1_audio_ValidateEnrolledEventRequest,
    responseSerialize: serialize_sensory_api_v1_audio_ValidateEnrolledEventResponse,
    responseDeserialize: deserialize_sensory_api_v1_audio_ValidateEnrolledEventResponse,
  },
};

exports.AudioEventsClient = grpc.makeGenericClientConstructor(AudioEventsService);
// Handles all audio transcriptions
var AudioTranscriptionsService = exports.AudioTranscriptionsService = {
  // Transcribes voice into text.
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
transcribe: {
    path: '/sensory.api.v1.audio.AudioTranscriptions/Transcribe',
    requestStream: true,
    responseStream: true,
    requestType: v1_audio_audio_pb.TranscribeRequest,
    responseType: v1_audio_audio_pb.TranscribeResponse,
    requestSerialize: serialize_sensory_api_v1_audio_TranscribeRequest,
    requestDeserialize: deserialize_sensory_api_v1_audio_TranscribeRequest,
    responseSerialize: serialize_sensory_api_v1_audio_TranscribeResponse,
    responseDeserialize: deserialize_sensory_api_v1_audio_TranscribeResponse,
  },
};

exports.AudioTranscriptionsClient = grpc.makeGenericClientConstructor(AudioTranscriptionsService);
// Handles synthesizing audio from text
var AudioSynthesisService = exports.AudioSynthesisService = {
  // Synthesizes speech from text
// Authorization metadata is required {"authorization": "Bearer <TOKNE>"}
synthesizeSpeech: {
    path: '/sensory.api.v1.audio.AudioSynthesis/SynthesizeSpeech',
    requestStream: false,
    responseStream: true,
    requestType: v1_audio_audio_pb.SynthesizeSpeechRequest,
    responseType: v1_audio_audio_pb.SynthesizeSpeechResponse,
    requestSerialize: serialize_sensory_api_v1_audio_SynthesizeSpeechRequest,
    requestDeserialize: deserialize_sensory_api_v1_audio_SynthesizeSpeechRequest,
    responseSerialize: serialize_sensory_api_v1_audio_SynthesizeSpeechResponse,
    responseDeserialize: deserialize_sensory_api_v1_audio_SynthesizeSpeechResponse,
  },
};

exports.AudioSynthesisClient = grpc.makeGenericClientConstructor(AudioSynthesisService);
