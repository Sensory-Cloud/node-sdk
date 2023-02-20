// package: sensory.api.v1.management
// file: v1/management/enrollment.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as v1_management_enrollment_pb from "../../v1/management/enrollment_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as common_common_pb from "../../common/common_pb";

interface IEnrollmentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getEnrollments: IEnrollmentServiceService_IGetEnrollments;
    getEnrollmentGroups: IEnrollmentServiceService_IGetEnrollmentGroups;
    createEnrollmentGroup: IEnrollmentServiceService_ICreateEnrollmentGroup;
    appendEnrollmentGroup: IEnrollmentServiceService_IAppendEnrollmentGroup;
    deleteEnrollment: IEnrollmentServiceService_IDeleteEnrollment;
    deleteEnrollmentGroup: IEnrollmentServiceService_IDeleteEnrollmentGroup;
    updateEnrollment: IEnrollmentServiceService_IUpdateEnrollment;
    updateEnrollmentGroup: IEnrollmentServiceService_IUpdateEnrollmentGroup;
    removeEnrollmentsFromGroup: IEnrollmentServiceService_IRemoveEnrollmentsFromGroup;
}

interface IEnrollmentServiceService_IGetEnrollments extends grpc.MethodDefinition<v1_management_enrollment_pb.GetEnrollmentsRequest, v1_management_enrollment_pb.GetEnrollmentsResponse> {
    path: "/sensory.api.v1.management.EnrollmentService/GetEnrollments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_enrollment_pb.GetEnrollmentsRequest>;
    requestDeserialize: grpc.deserialize<v1_management_enrollment_pb.GetEnrollmentsRequest>;
    responseSerialize: grpc.serialize<v1_management_enrollment_pb.GetEnrollmentsResponse>;
    responseDeserialize: grpc.deserialize<v1_management_enrollment_pb.GetEnrollmentsResponse>;
}
interface IEnrollmentServiceService_IGetEnrollmentGroups extends grpc.MethodDefinition<v1_management_enrollment_pb.GetEnrollmentsRequest, v1_management_enrollment_pb.GetEnrollmentGroupsResponse> {
    path: "/sensory.api.v1.management.EnrollmentService/GetEnrollmentGroups";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_enrollment_pb.GetEnrollmentsRequest>;
    requestDeserialize: grpc.deserialize<v1_management_enrollment_pb.GetEnrollmentsRequest>;
    responseSerialize: grpc.serialize<v1_management_enrollment_pb.GetEnrollmentGroupsResponse>;
    responseDeserialize: grpc.deserialize<v1_management_enrollment_pb.GetEnrollmentGroupsResponse>;
}
interface IEnrollmentServiceService_ICreateEnrollmentGroup extends grpc.MethodDefinition<v1_management_enrollment_pb.CreateEnrollmentGroupRequest, v1_management_enrollment_pb.EnrollmentGroupResponse> {
    path: "/sensory.api.v1.management.EnrollmentService/CreateEnrollmentGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_enrollment_pb.CreateEnrollmentGroupRequest>;
    requestDeserialize: grpc.deserialize<v1_management_enrollment_pb.CreateEnrollmentGroupRequest>;
    responseSerialize: grpc.serialize<v1_management_enrollment_pb.EnrollmentGroupResponse>;
    responseDeserialize: grpc.deserialize<v1_management_enrollment_pb.EnrollmentGroupResponse>;
}
interface IEnrollmentServiceService_IAppendEnrollmentGroup extends grpc.MethodDefinition<v1_management_enrollment_pb.AppendEnrollmentGroupRequest, v1_management_enrollment_pb.EnrollmentGroupResponse> {
    path: "/sensory.api.v1.management.EnrollmentService/AppendEnrollmentGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_enrollment_pb.AppendEnrollmentGroupRequest>;
    requestDeserialize: grpc.deserialize<v1_management_enrollment_pb.AppendEnrollmentGroupRequest>;
    responseSerialize: grpc.serialize<v1_management_enrollment_pb.EnrollmentGroupResponse>;
    responseDeserialize: grpc.deserialize<v1_management_enrollment_pb.EnrollmentGroupResponse>;
}
interface IEnrollmentServiceService_IDeleteEnrollment extends grpc.MethodDefinition<v1_management_enrollment_pb.DeleteEnrollmentRequest, v1_management_enrollment_pb.EnrollmentResponse> {
    path: "/sensory.api.v1.management.EnrollmentService/DeleteEnrollment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_enrollment_pb.DeleteEnrollmentRequest>;
    requestDeserialize: grpc.deserialize<v1_management_enrollment_pb.DeleteEnrollmentRequest>;
    responseSerialize: grpc.serialize<v1_management_enrollment_pb.EnrollmentResponse>;
    responseDeserialize: grpc.deserialize<v1_management_enrollment_pb.EnrollmentResponse>;
}
interface IEnrollmentServiceService_IDeleteEnrollmentGroup extends grpc.MethodDefinition<v1_management_enrollment_pb.DeleteEnrollmentGroupRequest, v1_management_enrollment_pb.EnrollmentGroupResponse> {
    path: "/sensory.api.v1.management.EnrollmentService/DeleteEnrollmentGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_enrollment_pb.DeleteEnrollmentGroupRequest>;
    requestDeserialize: grpc.deserialize<v1_management_enrollment_pb.DeleteEnrollmentGroupRequest>;
    responseSerialize: grpc.serialize<v1_management_enrollment_pb.EnrollmentGroupResponse>;
    responseDeserialize: grpc.deserialize<v1_management_enrollment_pb.EnrollmentGroupResponse>;
}
interface IEnrollmentServiceService_IUpdateEnrollment extends grpc.MethodDefinition<v1_management_enrollment_pb.UpdateEnrollmentRequest, v1_management_enrollment_pb.EnrollmentResponse> {
    path: "/sensory.api.v1.management.EnrollmentService/UpdateEnrollment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_enrollment_pb.UpdateEnrollmentRequest>;
    requestDeserialize: grpc.deserialize<v1_management_enrollment_pb.UpdateEnrollmentRequest>;
    responseSerialize: grpc.serialize<v1_management_enrollment_pb.EnrollmentResponse>;
    responseDeserialize: grpc.deserialize<v1_management_enrollment_pb.EnrollmentResponse>;
}
interface IEnrollmentServiceService_IUpdateEnrollmentGroup extends grpc.MethodDefinition<v1_management_enrollment_pb.UpdateEnrollmentGroupRequest, v1_management_enrollment_pb.EnrollmentGroupResponse> {
    path: "/sensory.api.v1.management.EnrollmentService/UpdateEnrollmentGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_enrollment_pb.UpdateEnrollmentGroupRequest>;
    requestDeserialize: grpc.deserialize<v1_management_enrollment_pb.UpdateEnrollmentGroupRequest>;
    responseSerialize: grpc.serialize<v1_management_enrollment_pb.EnrollmentGroupResponse>;
    responseDeserialize: grpc.deserialize<v1_management_enrollment_pb.EnrollmentGroupResponse>;
}
interface IEnrollmentServiceService_IRemoveEnrollmentsFromGroup extends grpc.MethodDefinition<v1_management_enrollment_pb.RemoveEnrollmentsRequest, v1_management_enrollment_pb.EnrollmentGroupResponse> {
    path: "/sensory.api.v1.management.EnrollmentService/RemoveEnrollmentsFromGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_enrollment_pb.RemoveEnrollmentsRequest>;
    requestDeserialize: grpc.deserialize<v1_management_enrollment_pb.RemoveEnrollmentsRequest>;
    responseSerialize: grpc.serialize<v1_management_enrollment_pb.EnrollmentGroupResponse>;
    responseDeserialize: grpc.deserialize<v1_management_enrollment_pb.EnrollmentGroupResponse>;
}

export const EnrollmentServiceService: IEnrollmentServiceService;

export interface IEnrollmentServiceServer extends grpc.UntypedServiceImplementation {
    getEnrollments: grpc.handleUnaryCall<v1_management_enrollment_pb.GetEnrollmentsRequest, v1_management_enrollment_pb.GetEnrollmentsResponse>;
    getEnrollmentGroups: grpc.handleUnaryCall<v1_management_enrollment_pb.GetEnrollmentsRequest, v1_management_enrollment_pb.GetEnrollmentGroupsResponse>;
    createEnrollmentGroup: grpc.handleUnaryCall<v1_management_enrollment_pb.CreateEnrollmentGroupRequest, v1_management_enrollment_pb.EnrollmentGroupResponse>;
    appendEnrollmentGroup: grpc.handleUnaryCall<v1_management_enrollment_pb.AppendEnrollmentGroupRequest, v1_management_enrollment_pb.EnrollmentGroupResponse>;
    deleteEnrollment: grpc.handleUnaryCall<v1_management_enrollment_pb.DeleteEnrollmentRequest, v1_management_enrollment_pb.EnrollmentResponse>;
    deleteEnrollmentGroup: grpc.handleUnaryCall<v1_management_enrollment_pb.DeleteEnrollmentGroupRequest, v1_management_enrollment_pb.EnrollmentGroupResponse>;
    updateEnrollment: grpc.handleUnaryCall<v1_management_enrollment_pb.UpdateEnrollmentRequest, v1_management_enrollment_pb.EnrollmentResponse>;
    updateEnrollmentGroup: grpc.handleUnaryCall<v1_management_enrollment_pb.UpdateEnrollmentGroupRequest, v1_management_enrollment_pb.EnrollmentGroupResponse>;
    removeEnrollmentsFromGroup: grpc.handleUnaryCall<v1_management_enrollment_pb.RemoveEnrollmentsRequest, v1_management_enrollment_pb.EnrollmentGroupResponse>;
}

export interface IEnrollmentServiceClient {
    getEnrollments(request: v1_management_enrollment_pb.GetEnrollmentsRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.GetEnrollmentsResponse) => void): grpc.ClientUnaryCall;
    getEnrollments(request: v1_management_enrollment_pb.GetEnrollmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.GetEnrollmentsResponse) => void): grpc.ClientUnaryCall;
    getEnrollments(request: v1_management_enrollment_pb.GetEnrollmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.GetEnrollmentsResponse) => void): grpc.ClientUnaryCall;
    getEnrollmentGroups(request: v1_management_enrollment_pb.GetEnrollmentsRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.GetEnrollmentGroupsResponse) => void): grpc.ClientUnaryCall;
    getEnrollmentGroups(request: v1_management_enrollment_pb.GetEnrollmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.GetEnrollmentGroupsResponse) => void): grpc.ClientUnaryCall;
    getEnrollmentGroups(request: v1_management_enrollment_pb.GetEnrollmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.GetEnrollmentGroupsResponse) => void): grpc.ClientUnaryCall;
    createEnrollmentGroup(request: v1_management_enrollment_pb.CreateEnrollmentGroupRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    createEnrollmentGroup(request: v1_management_enrollment_pb.CreateEnrollmentGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    createEnrollmentGroup(request: v1_management_enrollment_pb.CreateEnrollmentGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    appendEnrollmentGroup(request: v1_management_enrollment_pb.AppendEnrollmentGroupRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    appendEnrollmentGroup(request: v1_management_enrollment_pb.AppendEnrollmentGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    appendEnrollmentGroup(request: v1_management_enrollment_pb.AppendEnrollmentGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    deleteEnrollment(request: v1_management_enrollment_pb.DeleteEnrollmentRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentResponse) => void): grpc.ClientUnaryCall;
    deleteEnrollment(request: v1_management_enrollment_pb.DeleteEnrollmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentResponse) => void): grpc.ClientUnaryCall;
    deleteEnrollment(request: v1_management_enrollment_pb.DeleteEnrollmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentResponse) => void): grpc.ClientUnaryCall;
    deleteEnrollmentGroup(request: v1_management_enrollment_pb.DeleteEnrollmentGroupRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    deleteEnrollmentGroup(request: v1_management_enrollment_pb.DeleteEnrollmentGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    deleteEnrollmentGroup(request: v1_management_enrollment_pb.DeleteEnrollmentGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    updateEnrollment(request: v1_management_enrollment_pb.UpdateEnrollmentRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentResponse) => void): grpc.ClientUnaryCall;
    updateEnrollment(request: v1_management_enrollment_pb.UpdateEnrollmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentResponse) => void): grpc.ClientUnaryCall;
    updateEnrollment(request: v1_management_enrollment_pb.UpdateEnrollmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentResponse) => void): grpc.ClientUnaryCall;
    updateEnrollmentGroup(request: v1_management_enrollment_pb.UpdateEnrollmentGroupRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    updateEnrollmentGroup(request: v1_management_enrollment_pb.UpdateEnrollmentGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    updateEnrollmentGroup(request: v1_management_enrollment_pb.UpdateEnrollmentGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    removeEnrollmentsFromGroup(request: v1_management_enrollment_pb.RemoveEnrollmentsRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    removeEnrollmentsFromGroup(request: v1_management_enrollment_pb.RemoveEnrollmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    removeEnrollmentsFromGroup(request: v1_management_enrollment_pb.RemoveEnrollmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
}

export class EnrollmentServiceClient extends grpc.Client implements IEnrollmentServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getEnrollments(request: v1_management_enrollment_pb.GetEnrollmentsRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.GetEnrollmentsResponse) => void): grpc.ClientUnaryCall;
    public getEnrollments(request: v1_management_enrollment_pb.GetEnrollmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.GetEnrollmentsResponse) => void): grpc.ClientUnaryCall;
    public getEnrollments(request: v1_management_enrollment_pb.GetEnrollmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.GetEnrollmentsResponse) => void): grpc.ClientUnaryCall;
    public getEnrollmentGroups(request: v1_management_enrollment_pb.GetEnrollmentsRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.GetEnrollmentGroupsResponse) => void): grpc.ClientUnaryCall;
    public getEnrollmentGroups(request: v1_management_enrollment_pb.GetEnrollmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.GetEnrollmentGroupsResponse) => void): grpc.ClientUnaryCall;
    public getEnrollmentGroups(request: v1_management_enrollment_pb.GetEnrollmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.GetEnrollmentGroupsResponse) => void): grpc.ClientUnaryCall;
    public createEnrollmentGroup(request: v1_management_enrollment_pb.CreateEnrollmentGroupRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public createEnrollmentGroup(request: v1_management_enrollment_pb.CreateEnrollmentGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public createEnrollmentGroup(request: v1_management_enrollment_pb.CreateEnrollmentGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public appendEnrollmentGroup(request: v1_management_enrollment_pb.AppendEnrollmentGroupRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public appendEnrollmentGroup(request: v1_management_enrollment_pb.AppendEnrollmentGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public appendEnrollmentGroup(request: v1_management_enrollment_pb.AppendEnrollmentGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public deleteEnrollment(request: v1_management_enrollment_pb.DeleteEnrollmentRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentResponse) => void): grpc.ClientUnaryCall;
    public deleteEnrollment(request: v1_management_enrollment_pb.DeleteEnrollmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentResponse) => void): grpc.ClientUnaryCall;
    public deleteEnrollment(request: v1_management_enrollment_pb.DeleteEnrollmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentResponse) => void): grpc.ClientUnaryCall;
    public deleteEnrollmentGroup(request: v1_management_enrollment_pb.DeleteEnrollmentGroupRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public deleteEnrollmentGroup(request: v1_management_enrollment_pb.DeleteEnrollmentGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public deleteEnrollmentGroup(request: v1_management_enrollment_pb.DeleteEnrollmentGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public updateEnrollment(request: v1_management_enrollment_pb.UpdateEnrollmentRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentResponse) => void): grpc.ClientUnaryCall;
    public updateEnrollment(request: v1_management_enrollment_pb.UpdateEnrollmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentResponse) => void): grpc.ClientUnaryCall;
    public updateEnrollment(request: v1_management_enrollment_pb.UpdateEnrollmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentResponse) => void): grpc.ClientUnaryCall;
    public updateEnrollmentGroup(request: v1_management_enrollment_pb.UpdateEnrollmentGroupRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public updateEnrollmentGroup(request: v1_management_enrollment_pb.UpdateEnrollmentGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public updateEnrollmentGroup(request: v1_management_enrollment_pb.UpdateEnrollmentGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public removeEnrollmentsFromGroup(request: v1_management_enrollment_pb.RemoveEnrollmentsRequest, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public removeEnrollmentsFromGroup(request: v1_management_enrollment_pb.RemoveEnrollmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
    public removeEnrollmentsFromGroup(request: v1_management_enrollment_pb.RemoveEnrollmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_enrollment_pb.EnrollmentGroupResponse) => void): grpc.ClientUnaryCall;
}
