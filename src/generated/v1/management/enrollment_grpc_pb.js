// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// sensory.api.management
'use strict';
var grpc = require('@grpc/grpc-js');
var v1_management_enrollment_pb = require('../../v1/management/enrollment_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var validate_validate_pb = require('../../validate/validate_pb.js');
var common_common_pb = require('../../common/common_pb.js');

function serialize_sensory_api_v1_management_AppendEnrollmentGroupRequest(arg) {
  if (!(arg instanceof v1_management_enrollment_pb.AppendEnrollmentGroupRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.AppendEnrollmentGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_AppendEnrollmentGroupRequest(buffer_arg) {
  return v1_management_enrollment_pb.AppendEnrollmentGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_CreateEnrollmentGroupRequest(arg) {
  if (!(arg instanceof v1_management_enrollment_pb.CreateEnrollmentGroupRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.CreateEnrollmentGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_CreateEnrollmentGroupRequest(buffer_arg) {
  return v1_management_enrollment_pb.CreateEnrollmentGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_DeleteEnrollmentGroupRequest(arg) {
  if (!(arg instanceof v1_management_enrollment_pb.DeleteEnrollmentGroupRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.DeleteEnrollmentGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_DeleteEnrollmentGroupRequest(buffer_arg) {
  return v1_management_enrollment_pb.DeleteEnrollmentGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_DeleteEnrollmentRequest(arg) {
  if (!(arg instanceof v1_management_enrollment_pb.DeleteEnrollmentRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.DeleteEnrollmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_DeleteEnrollmentRequest(buffer_arg) {
  return v1_management_enrollment_pb.DeleteEnrollmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_EnrollmentGroupResponse(arg) {
  if (!(arg instanceof v1_management_enrollment_pb.EnrollmentGroupResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.management.EnrollmentGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_EnrollmentGroupResponse(buffer_arg) {
  return v1_management_enrollment_pb.EnrollmentGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_EnrollmentResponse(arg) {
  if (!(arg instanceof v1_management_enrollment_pb.EnrollmentResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.management.EnrollmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_EnrollmentResponse(buffer_arg) {
  return v1_management_enrollment_pb.EnrollmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_GetEnrollmentGroupsResponse(arg) {
  if (!(arg instanceof v1_management_enrollment_pb.GetEnrollmentGroupsResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.management.GetEnrollmentGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_GetEnrollmentGroupsResponse(buffer_arg) {
  return v1_management_enrollment_pb.GetEnrollmentGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_GetEnrollmentsRequest(arg) {
  if (!(arg instanceof v1_management_enrollment_pb.GetEnrollmentsRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.GetEnrollmentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_GetEnrollmentsRequest(buffer_arg) {
  return v1_management_enrollment_pb.GetEnrollmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_GetEnrollmentsResponse(arg) {
  if (!(arg instanceof v1_management_enrollment_pb.GetEnrollmentsResponse)) {
    throw new Error('Expected argument of type sensory.api.v1.management.GetEnrollmentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_GetEnrollmentsResponse(buffer_arg) {
  return v1_management_enrollment_pb.GetEnrollmentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_RemoveEnrollmentsRequest(arg) {
  if (!(arg instanceof v1_management_enrollment_pb.RemoveEnrollmentsRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.RemoveEnrollmentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_RemoveEnrollmentsRequest(buffer_arg) {
  return v1_management_enrollment_pb.RemoveEnrollmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_UpdateEnrollmentGroupRequest(arg) {
  if (!(arg instanceof v1_management_enrollment_pb.UpdateEnrollmentGroupRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.UpdateEnrollmentGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_UpdateEnrollmentGroupRequest(buffer_arg) {
  return v1_management_enrollment_pb.UpdateEnrollmentGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensory_api_v1_management_UpdateEnrollmentRequest(arg) {
  if (!(arg instanceof v1_management_enrollment_pb.UpdateEnrollmentRequest)) {
    throw new Error('Expected argument of type sensory.api.v1.management.UpdateEnrollmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensory_api_v1_management_UpdateEnrollmentRequest(buffer_arg) {
  return v1_management_enrollment_pb.UpdateEnrollmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage Enrollments in the database
var EnrollmentServiceService = exports.EnrollmentServiceService = {
  // Get enrollments from the database that match the specified criteria
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
getEnrollments: {
    path: '/sensory.api.v1.management.EnrollmentService/GetEnrollments',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_enrollment_pb.GetEnrollmentsRequest,
    responseType: v1_management_enrollment_pb.GetEnrollmentsResponse,
    requestSerialize: serialize_sensory_api_v1_management_GetEnrollmentsRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_GetEnrollmentsRequest,
    responseSerialize: serialize_sensory_api_v1_management_GetEnrollmentsResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_GetEnrollmentsResponse,
  },
  // Get all enrollment groups that match the specified criteria
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
getEnrollmentGroups: {
    path: '/sensory.api.v1.management.EnrollmentService/GetEnrollmentGroups',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_enrollment_pb.GetEnrollmentsRequest,
    responseType: v1_management_enrollment_pb.GetEnrollmentGroupsResponse,
    requestSerialize: serialize_sensory_api_v1_management_GetEnrollmentsRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_GetEnrollmentsRequest,
    responseSerialize: serialize_sensory_api_v1_management_GetEnrollmentGroupsResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_GetEnrollmentGroupsResponse,
  },
  // Creates a new enrollment group without any associated enrollments
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
createEnrollmentGroup: {
    path: '/sensory.api.v1.management.EnrollmentService/CreateEnrollmentGroup',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_enrollment_pb.CreateEnrollmentGroupRequest,
    responseType: v1_management_enrollment_pb.EnrollmentGroupResponse,
    requestSerialize: serialize_sensory_api_v1_management_CreateEnrollmentGroupRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_CreateEnrollmentGroupRequest,
    responseSerialize: serialize_sensory_api_v1_management_EnrollmentGroupResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_EnrollmentGroupResponse,
  },
  // Appends an enrollment to an enrollment group
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
appendEnrollmentGroup: {
    path: '/sensory.api.v1.management.EnrollmentService/AppendEnrollmentGroup',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_enrollment_pb.AppendEnrollmentGroupRequest,
    responseType: v1_management_enrollment_pb.EnrollmentGroupResponse,
    requestSerialize: serialize_sensory_api_v1_management_AppendEnrollmentGroupRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_AppendEnrollmentGroupRequest,
    responseSerialize: serialize_sensory_api_v1_management_EnrollmentGroupResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_EnrollmentGroupResponse,
  },
  // Deletes an enrollment from the database
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
// A user may not delete their last enrollment, as this would lead to a situation where a user could
// lock themselves out of the system forever.
deleteEnrollment: {
    path: '/sensory.api.v1.management.EnrollmentService/DeleteEnrollment',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_enrollment_pb.DeleteEnrollmentRequest,
    responseType: v1_management_enrollment_pb.EnrollmentResponse,
    requestSerialize: serialize_sensory_api_v1_management_DeleteEnrollmentRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_DeleteEnrollmentRequest,
    responseSerialize: serialize_sensory_api_v1_management_EnrollmentResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_EnrollmentResponse,
  },
  // Deletes an enrollment group from the database
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
deleteEnrollmentGroup: {
    path: '/sensory.api.v1.management.EnrollmentService/DeleteEnrollmentGroup',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_enrollment_pb.DeleteEnrollmentGroupRequest,
    responseType: v1_management_enrollment_pb.EnrollmentGroupResponse,
    requestSerialize: serialize_sensory_api_v1_management_DeleteEnrollmentGroupRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_DeleteEnrollmentGroupRequest,
    responseSerialize: serialize_sensory_api_v1_management_EnrollmentGroupResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_EnrollmentGroupResponse,
  },
  // Updates the name of an enrollment
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
updateEnrollment: {
    path: '/sensory.api.v1.management.EnrollmentService/UpdateEnrollment',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_enrollment_pb.UpdateEnrollmentRequest,
    responseType: v1_management_enrollment_pb.EnrollmentResponse,
    requestSerialize: serialize_sensory_api_v1_management_UpdateEnrollmentRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_UpdateEnrollmentRequest,
    responseSerialize: serialize_sensory_api_v1_management_EnrollmentResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_EnrollmentResponse,
  },
  // Updates the name of an enrollment group
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
updateEnrollmentGroup: {
    path: '/sensory.api.v1.management.EnrollmentService/UpdateEnrollmentGroup',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_enrollment_pb.UpdateEnrollmentGroupRequest,
    responseType: v1_management_enrollment_pb.EnrollmentGroupResponse,
    requestSerialize: serialize_sensory_api_v1_management_UpdateEnrollmentGroupRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_UpdateEnrollmentGroupRequest,
    responseSerialize: serialize_sensory_api_v1_management_EnrollmentGroupResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_EnrollmentGroupResponse,
  },
  // Removes a list of enrollments from an enrollment group
// Authorization metadata is required {"authorization": "Bearer <TOKEN>"}
removeEnrollmentsFromGroup: {
    path: '/sensory.api.v1.management.EnrollmentService/RemoveEnrollmentsFromGroup',
    requestStream: false,
    responseStream: false,
    requestType: v1_management_enrollment_pb.RemoveEnrollmentsRequest,
    responseType: v1_management_enrollment_pb.EnrollmentGroupResponse,
    requestSerialize: serialize_sensory_api_v1_management_RemoveEnrollmentsRequest,
    requestDeserialize: deserialize_sensory_api_v1_management_RemoveEnrollmentsRequest,
    responseSerialize: serialize_sensory_api_v1_management_EnrollmentGroupResponse,
    responseDeserialize: deserialize_sensory_api_v1_management_EnrollmentGroupResponse,
  },
};

exports.EnrollmentServiceClient = grpc.makeGenericClientConstructor(EnrollmentServiceService);
