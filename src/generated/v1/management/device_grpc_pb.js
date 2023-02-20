// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// sensory.api.management
'use strict';
var grpc = require('@grpc/grpc-js');
var v1_management_device_pb = require('../../v1/management/device_pb.js');
var common_common_pb = require('../../common/common_pb.js');
var validate_validate_pb = require('../../validate/validate_pb.js');

function serialize_sensory_api_v1_management_DeviceGetWhoAmIRequest(arg) {
  if (!(arg instanceof v1_management_device_pb.DeviceGetWhoAmIRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.DeviceGetWhoAmIRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_DeviceGetWhoAmIRequest(buffer_arg) {
  return v1_management_device_pb.DeviceGetWhoAmIRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_DeviceListResponse(arg) {
  if (!(arg instanceof v1_management_device_pb.DeviceListResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.management.DeviceListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_DeviceListResponse(buffer_arg) {
  return v1_management_device_pb.DeviceListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_DeviceRequest(arg) {
  if (!(arg instanceof v1_management_device_pb.DeviceRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.DeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_DeviceRequest(buffer_arg) {
  return v1_management_device_pb.DeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_DeviceResponse(arg) {
  if (!(arg instanceof v1_management_device_pb.DeviceResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.management.DeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_DeviceResponse(buffer_arg) {
  return v1_management_device_pb.DeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_EnrollDeviceRequest(arg) {
  if (!(arg instanceof v1_management_device_pb.EnrollDeviceRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.EnrollDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_EnrollDeviceRequest(buffer_arg) {
  return v1_management_device_pb.EnrollDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_GetDeviceResponse(arg) {
  if (!(arg instanceof v1_management_device_pb.GetDeviceResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.management.GetDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_GetDeviceResponse(buffer_arg) {
  return v1_management_device_pb.GetDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_GetDevicesRequest(arg) {
  if (!(arg instanceof v1_management_device_pb.GetDevicesRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.GetDevicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_GetDevicesRequest(buffer_arg) {
  return v1_management_device_pb.GetDevicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_RenewDeviceCredentialRequest(arg) {
  if (!(arg instanceof v1_management_device_pb.RenewDeviceCredentialRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.RenewDeviceCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_RenewDeviceCredentialRequest(buffer_arg) {
  return v1_management_device_pb.RenewDeviceCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_UpdateDeviceRequest(arg) {
  if (!(arg instanceof v1_management_device_pb.UpdateDeviceRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.UpdateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_UpdateDeviceRequest(buffer_arg) {
  return v1_management_device_pb.UpdateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage Devices in the database
var DeviceServiceService = exports.DeviceServiceService = {
  // Create a new device in the database
enrollDevice: {
    path: '/sensory.api.v1.management.DeviceService/EnrollDevice',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_device_pb.EnrollDeviceRequest,
    responseType: v1_management_device_pb.DeviceResponse,
    requestSerialize: serialize_sensory_api_v1_management_EnrollDeviceRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_EnrollDeviceRequest,
    responseSerialize: serialize_sensory_api_v1_management_DeviceResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_DeviceResponse,
  },
  // Renew a device's credential, which links the device to a key in the database.
// This endpoint can be used to assign a new credential to a device if the old credential has expired.
renewDeviceCredential: {
    path: '/sensory.api.v1.management.DeviceService/RenewDeviceCredential',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_device_pb.RenewDeviceCredentialRequest,
    responseType: v1_management_device_pb.DeviceResponse,
    requestSerialize: serialize_sensory_api_v1_management_RenewDeviceCredentialRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_RenewDeviceCredentialRequest,
    responseSerialize: serialize_sensory_api_v1_management_DeviceResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_DeviceResponse,
  },
  // Allows a device to fetch information about itself
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
getWhoAmI: {
    path: '/sensory.api.v1.management.DeviceService/GetWhoAmI',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_device_pb.DeviceGetWhoAmIRequest,
    responseType: v1_management_device_pb.DeviceResponse,
    requestSerialize: serialize_sensory_api_v1_management_DeviceGetWhoAmIRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_DeviceGetWhoAmIRequest,
    responseSerialize: serialize_sensory_api_v1_management_DeviceResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_DeviceResponse,
  },
  // Returns device information
getDevice: {
    path: '/sensory.api.v1.management.DeviceService/GetDevice',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_device_pb.DeviceRequest,
    responseType: v1_management_device_pb.GetDeviceResponse,
    requestSerialize: serialize_sensory_api_v1_management_DeviceRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_DeviceRequest,
    responseSerialize: serialize_sensory_api_v1_management_GetDeviceResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_GetDeviceResponse,
  },
  // Returns a list of devices associated with the given userId
getDevices: {
    path: '/sensory.api.v1.management.DeviceService/GetDevices',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_device_pb.GetDevicesRequest,
    responseType: v1_management_device_pb.DeviceListResponse,
    requestSerialize: serialize_sensory_api_v1_management_GetDevicesRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_GetDevicesRequest,
    responseSerialize: serialize_sensory_api_v1_management_DeviceListResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_DeviceListResponse,
  },
  // Allows the name of a device to be updated
updateDevice: {
    path: '/sensory.api.v1.management.DeviceService/UpdateDevice',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_device_pb.UpdateDeviceRequest,
    responseType: v1_management_device_pb.DeviceResponse,
    requestSerialize: serialize_sensory_api_v1_management_UpdateDeviceRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_UpdateDeviceRequest,
    responseSerialize: serialize_sensory_api_v1_management_DeviceResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_DeviceResponse,
  },
  // Allows a device to be deleted
deleteDevice: {
    path: '/sensory.api.v1.management.DeviceService/DeleteDevice',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_device_pb.DeviceRequest,
    responseType: v1_management_device_pb.DeviceResponse,
    requestSerialize: serialize_sensory_api_v1_management_DeviceRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_DeviceRequest,
    responseSerialize: serialize_sensory_api_v1_management_DeviceResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_DeviceResponse,
  },
};

exports.DeviceServiceClient = grpc.makeGenericClientConstructor(DeviceServiceService);
