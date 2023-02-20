// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// sensory.api.oauth
'use strict';
var grpc = require('@grpc/grpc-js');
var oauth_oauth_pb = require('../oauth/oauth_pb.js');
var validate_validate_pb = require('../validate/validate_pb.js');
var common_common_pb = require('../common/common_pb.js');

function serialize_sensory_api_common_TokenResponse(arg) {
  if (!(arg instanceof common_common_pb.TokenResponse)) {
    throw new Error('Expected argument of type sensory.api.common.TokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_common_TokenResponse(buffer_arg) {
  return common_common_pb.TokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_oauth_PublicKeyRequest(arg) {
  if (!(arg instanceof oauth_oauth_pb.PublicKeyRequest)) {
    throw new Error('Expected argument of type sensory.api.oauth.PublicKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_oauth_PublicKeyRequest(buffer_arg) {
  return oauth_oauth_pb.PublicKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_oauth_PublicKeyResponse(arg) {
  if (!(arg instanceof oauth_oauth_pb.PublicKeyResponse)) {
    throw new Error('Expected argument of type sensory.api.oauth.PublicKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_oauth_PublicKeyResponse(buffer_arg) {
  return oauth_oauth_pb.PublicKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_oauth_SignTokenRequest(arg) {
  if (!(arg instanceof oauth_oauth_pb.SignTokenRequest)) {
    throw new Error('Expected argument of type sensory.api.oauth.SignTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_oauth_SignTokenRequest(buffer_arg) {
  return oauth_oauth_pb.SignTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_oauth_TokenRequest(arg) {
  if (!(arg instanceof oauth_oauth_pb.TokenRequest)) {
    throw new Error('Expected argument of type sensory.api.oauth.TokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_oauth_TokenRequest(buffer_arg) {
  return oauth_oauth_pb.TokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_oauth_WhoAmIRequest(arg) {
  if (!(arg instanceof oauth_oauth_pb.WhoAmIRequest)) {
    throw new Error('Expected argument of type sensory.api.oauth.WhoAmIRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_oauth_WhoAmIRequest(buffer_arg) {
  return oauth_oauth_pb.WhoAmIRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_oauth_WhoAmIResponse(arg) {
  if (!(arg instanceof oauth_oauth_pb.WhoAmIResponse)) {
    throw new Error('Expected argument of type sensory.api.oauth.WhoAmIResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_oauth_WhoAmIResponse(buffer_arg) {
  return oauth_oauth_pb.WhoAmIResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for OAuth function
var OauthServiceService = exports.OauthServiceService = {
  // Obtain an OAuth token for the given credentials
// Endpoint does not require an authorization token
getToken: {
    path: '/sensory.api.oauth.OauthService/GetToken',
    requestStream: false,
    responseStream: false,
    requestType: oauth_oauth_pb.TokenRequest,
    responseType: common_common_pb.TokenResponse,
    requestSerialize: serialize_sensory_api_oauth_TokenRequest,
    requestDeserialize: deserialize_sensory_api_oauth_TokenRequest,
    responseSerialize: serialize_sensory_api_common_TokenResponse,
    responseDeserialize: deserialize_sensory_api_common_TokenResponse,
  },
  // Sign and return an OAuth token. The passed authorization token must have the SignToken authority.
// Therefore, Devices are not allowed to make this request.
// Sign does not validate credentials, and therefore should be used in specific circumstances where credentials are not required.
// One common usecase for the Sign request is an Io server issuing a user-scoped token after a successful authentication.
// Only a limited subset of of scopes may be requested from the SignToken request.
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
signToken: {
    path: '/sensory.api.oauth.OauthService/SignToken',
    requestStream: false,
    responseStream: false,
    requestType: oauth_oauth_pb.SignTokenRequest,
    responseType: common_common_pb.TokenResponse,
    requestSerialize: serialize_sensory_api_oauth_SignTokenRequest,
    requestDeserialize: deserialize_sensory_api_oauth_SignTokenRequest,
    responseSerialize: serialize_sensory_api_common_TokenResponse,
    responseDeserialize: deserialize_sensory_api_common_TokenResponse,
  },
  // Obtain information about oneself based on the passed OAuth token
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
getWhoAmI: {
    path: '/sensory.api.oauth.OauthService/GetWhoAmI',
    requestStream: false,
    responseStream: false,
    requestType: oauth_oauth_pb.WhoAmIRequest,
    responseType: oauth_oauth_pb.WhoAmIResponse,
    requestSerialize: serialize_sensory_api_oauth_WhoAmIRequest,
    requestDeserialize: deserialize_sensory_api_oauth_WhoAmIRequest,
    responseSerialize: serialize_sensory_api_oauth_WhoAmIResponse,
    responseDeserialize: deserialize_sensory_api_oauth_WhoAmIResponse,
  },
  // Retrieve a public key by ID. Public keys retrieved by this endpoint can be used
// to validate tokens signed by the Sensory cloud.
getPublicKey: {
    path: '/sensory.api.oauth.OauthService/GetPublicKey',
    requestStream: false,
    responseStream: false,
    requestType: oauth_oauth_pb.PublicKeyRequest,
    responseType: oauth_oauth_pb.PublicKeyResponse,
    requestSerialize: serialize_sensory_api_oauth_PublicKeyRequest,
    requestDeserialize: deserialize_sensory_api_oauth_PublicKeyRequest,
    responseSerialize: serialize_sensory_api_oauth_PublicKeyResponse,
    responseDeserialize: deserialize_sensory_api_oauth_PublicKeyResponse,
  },
};

exports.OauthServiceClient = grpc.makeGenericClientConstructor(OauthServiceService);
