// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// sensory.api.file
'use strict';
var grpc = require('@grpc/grpc-js');
var v1_file_file_pb = require('../../v1/file/file_pb.js');
var validate_validate_pb = require('../../validate/validate_pb.js');

function serialize_sensory_api_v1_file_FileCatalogRequest(arg) {
  if (!(arg instanceof v1_file_file_pb.FileCatalogRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.file.FileCatalogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_file_FileCatalogRequest(buffer_arg) {
  return v1_file_file_pb.FileCatalogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_file_FileCatalogResponse(arg) {
  if (!(arg instanceof v1_file_file_pb.FileCatalogResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.file.FileCatalogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_file_FileCatalogResponse(buffer_arg) {
  return v1_file_file_pb.FileCatalogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_file_FileCompleteCatalogRequest(arg) {
  if (!(arg instanceof v1_file_file_pb.FileCompleteCatalogRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.file.FileCompleteCatalogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_file_FileCompleteCatalogRequest(buffer_arg) {
  return v1_file_file_pb.FileCompleteCatalogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_file_FileInfo(arg) {
  if (!(arg instanceof v1_file_file_pb.FileInfo)) {
    throw new Error('Expected argument of type sensory.api.v1.file.FileInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_file_FileInfo(buffer_arg) {
  return v1_file_file_pb.FileInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_file_FileRequest(arg) {
  if (!(arg instanceof v1_file_file_pb.FileRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.file.FileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_file_FileRequest(buffer_arg) {
  return v1_file_file_pb.FileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_file_FileResponse(arg) {
  if (!(arg instanceof v1_file_file_pb.FileResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.file.FileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_file_FileResponse(buffer_arg) {
  return v1_file_file_pb.FileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Handles all file-related functions
var FileService = exports.FileService = {
  // Allows a client to request information about a file in the cloud.
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
getInfo: {
    path: '/sensory.api.v1.file.File/GetInfo',
    requestStream: false,
    responseStream: false,
    requestType: v1_file_file_pb.FileRequest,
    responseType: v1_file_file_pb.FileInfo,
    requestSerialize: serialize_sensory_api_v1_file_FileRequest,
    requestDeserialize: deserialize_sensory_api_v1_file_FileRequest,
    responseSerialize: serialize_sensory_api_v1_file_FileInfo,
    responseDeserialize: deserialize_sensory_api_v1_file_FileInfo,
  },
  // Allows a client to request a list of all the files it is allowed to access
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
getCatalog: {
    path: '/sensory.api.v1.file.File/GetCatalog',
    requestStream: false,
    responseStream: false,
    requestType: v1_file_file_pb.FileCatalogRequest,
    responseType: v1_file_file_pb.FileCatalogResponse,
    requestSerialize: serialize_sensory_api_v1_file_FileCatalogRequest,
    requestDeserialize: deserialize_sensory_api_v1_file_FileCatalogRequest,
    responseSerialize: serialize_sensory_api_v1_file_FileCatalogResponse,
    responseDeserialize: deserialize_sensory_api_v1_file_FileCatalogResponse,
  },
  // Allows a root client to request the full list of files
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
getCompleteCatalog: {
    path: '/sensory.api.v1.file.File/GetCompleteCatalog',
    requestStream: false,
    responseStream: false,
    requestType: v1_file_file_pb.FileCompleteCatalogRequest,
    responseType: v1_file_file_pb.FileCatalogResponse,
    requestSerialize: serialize_sensory_api_v1_file_FileCompleteCatalogRequest,
    requestDeserialize: deserialize_sensory_api_v1_file_FileCompleteCatalogRequest,
    responseSerialize: serialize_sensory_api_v1_file_FileCatalogResponse,
    responseDeserialize: deserialize_sensory_api_v1_file_FileCatalogResponse,
  },
  // Allows a client to request a file from the cloud.
// Download streams a FileResponse until the entire file is downloaded
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
download: {
    path: '/sensory.api.v1.file.File/Download',
    requestStream: false,
    responseStream: true,
    requestType: v1_file_file_pb.FileRequest,
    responseType: v1_file_file_pb.FileResponse,
    requestSerialize: serialize_sensory_api_v1_file_FileRequest,
    requestDeserialize: deserialize_sensory_api_v1_file_FileRequest,
    responseSerialize: serialize_sensory_api_v1_file_FileResponse,
    responseDeserialize: deserialize_sensory_api_v1_file_FileResponse,
  },
};

exports.FileClient = grpc.makeGenericClientConstructor(FileService);
