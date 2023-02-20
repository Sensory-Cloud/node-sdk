// package: sensory.api.v1.management
// file: v1/management/device.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as v1_management_device_pb from "../../v1/management/device_pb";
import * as common_common_pb from "../../common/common_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

interface IDeviceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    enrollDevice: IDeviceServiceService_IEnrollDevice;
    renewDeviceCredential: IDeviceServiceService_IRenewDeviceCredential;
    getWhoAmI: IDeviceServiceService_IGetWhoAmI;
    getDevice: IDeviceServiceService_IGetDevice;
    getDevices: IDeviceServiceService_IGetDevices;
    updateDevice: IDeviceServiceService_IUpdateDevice;
    deleteDevice: IDeviceServiceService_IDeleteDevice;
}

interface IDeviceServiceService_IEnrollDevice extends grpc.MethodDefinition<v1_management_device_pb.EnrollDeviceRequest, v1_management_device_pb.DeviceResponse> {
    path: "/sensory.api.v1.management.DeviceService/EnrollDevice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_device_pb.EnrollDeviceRequest>;
    requestDeserialize: grpc.deserialize<v1_management_device_pb.EnrollDeviceRequest>;
    responseSerialize: grpc.serialize<v1_management_device_pb.DeviceResponse>;
    responseDeserialize: grpc.deserialize<v1_management_device_pb.DeviceResponse>;
}
interface IDeviceServiceService_IRenewDeviceCredential extends grpc.MethodDefinition<v1_management_device_pb.RenewDeviceCredentialRequest, v1_management_device_pb.DeviceResponse> {
    path: "/sensory.api.v1.management.DeviceService/RenewDeviceCredential";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_device_pb.RenewDeviceCredentialRequest>;
    requestDeserialize: grpc.deserialize<v1_management_device_pb.RenewDeviceCredentialRequest>;
    responseSerialize: grpc.serialize<v1_management_device_pb.DeviceResponse>;
    responseDeserialize: grpc.deserialize<v1_management_device_pb.DeviceResponse>;
}
interface IDeviceServiceService_IGetWhoAmI extends grpc.MethodDefinition<v1_management_device_pb.DeviceGetWhoAmIRequest, v1_management_device_pb.DeviceResponse> {
    path: "/sensory.api.v1.management.DeviceService/GetWhoAmI";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_device_pb.DeviceGetWhoAmIRequest>;
    requestDeserialize: grpc.deserialize<v1_management_device_pb.DeviceGetWhoAmIRequest>;
    responseSerialize: grpc.serialize<v1_management_device_pb.DeviceResponse>;
    responseDeserialize: grpc.deserialize<v1_management_device_pb.DeviceResponse>;
}
interface IDeviceServiceService_IGetDevice extends grpc.MethodDefinition<v1_management_device_pb.DeviceRequest, v1_management_device_pb.GetDeviceResponse> {
    path: "/sensory.api.v1.management.DeviceService/GetDevice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_device_pb.DeviceRequest>;
    requestDeserialize: grpc.deserialize<v1_management_device_pb.DeviceRequest>;
    responseSerialize: grpc.serialize<v1_management_device_pb.GetDeviceResponse>;
    responseDeserialize: grpc.deserialize<v1_management_device_pb.GetDeviceResponse>;
}
interface IDeviceServiceService_IGetDevices extends grpc.MethodDefinition<v1_management_device_pb.GetDevicesRequest, v1_management_device_pb.DeviceListResponse> {
    path: "/sensory.api.v1.management.DeviceService/GetDevices";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_device_pb.GetDevicesRequest>;
    requestDeserialize: grpc.deserialize<v1_management_device_pb.GetDevicesRequest>;
    responseSerialize: grpc.serialize<v1_management_device_pb.DeviceListResponse>;
    responseDeserialize: grpc.deserialize<v1_management_device_pb.DeviceListResponse>;
}
interface IDeviceServiceService_IUpdateDevice extends grpc.MethodDefinition<v1_management_device_pb.UpdateDeviceRequest, v1_management_device_pb.DeviceResponse> {
    path: "/sensory.api.v1.management.DeviceService/UpdateDevice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_device_pb.UpdateDeviceRequest>;
    requestDeserialize: grpc.deserialize<v1_management_device_pb.UpdateDeviceRequest>;
    responseSerialize: grpc.serialize<v1_management_device_pb.DeviceResponse>;
    responseDeserialize: grpc.deserialize<v1_management_device_pb.DeviceResponse>;
}
interface IDeviceServiceService_IDeleteDevice extends grpc.MethodDefinition<v1_management_device_pb.DeviceRequest, v1_management_device_pb.DeviceResponse> {
    path: "/sensory.api.v1.management.DeviceService/DeleteDevice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_management_device_pb.DeviceRequest>;
    requestDeserialize: grpc.deserialize<v1_management_device_pb.DeviceRequest>;
    responseSerialize: grpc.serialize<v1_management_device_pb.DeviceResponse>;
    responseDeserialize: grpc.deserialize<v1_management_device_pb.DeviceResponse>;
}

export const DeviceServiceService: IDeviceServiceService;

export interface IDeviceServiceServer extends grpc.UntypedServiceImplementation {
    enrollDevice: grpc.handleUnaryCall<v1_management_device_pb.EnrollDeviceRequest, v1_management_device_pb.DeviceResponse>;
    renewDeviceCredential: grpc.handleUnaryCall<v1_management_device_pb.RenewDeviceCredentialRequest, v1_management_device_pb.DeviceResponse>;
    getWhoAmI: grpc.handleUnaryCall<v1_management_device_pb.DeviceGetWhoAmIRequest, v1_management_device_pb.DeviceResponse>;
    getDevice: grpc.handleUnaryCall<v1_management_device_pb.DeviceRequest, v1_management_device_pb.GetDeviceResponse>;
    getDevices: grpc.handleUnaryCall<v1_management_device_pb.GetDevicesRequest, v1_management_device_pb.DeviceListResponse>;
    updateDevice: grpc.handleUnaryCall<v1_management_device_pb.UpdateDeviceRequest, v1_management_device_pb.DeviceResponse>;
    deleteDevice: grpc.handleUnaryCall<v1_management_device_pb.DeviceRequest, v1_management_device_pb.DeviceResponse>;
}

export interface IDeviceServiceClient {
    enrollDevice(request: v1_management_device_pb.EnrollDeviceRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    enrollDevice(request: v1_management_device_pb.EnrollDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    enrollDevice(request: v1_management_device_pb.EnrollDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    renewDeviceCredential(request: v1_management_device_pb.RenewDeviceCredentialRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    renewDeviceCredential(request: v1_management_device_pb.RenewDeviceCredentialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    renewDeviceCredential(request: v1_management_device_pb.RenewDeviceCredentialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    getWhoAmI(request: v1_management_device_pb.DeviceGetWhoAmIRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    getWhoAmI(request: v1_management_device_pb.DeviceGetWhoAmIRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    getWhoAmI(request: v1_management_device_pb.DeviceGetWhoAmIRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    getDevice(request: v1_management_device_pb.DeviceRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.GetDeviceResponse) => void): grpc.ClientUnaryCall;
    getDevice(request: v1_management_device_pb.DeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.GetDeviceResponse) => void): grpc.ClientUnaryCall;
    getDevice(request: v1_management_device_pb.DeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.GetDeviceResponse) => void): grpc.ClientUnaryCall;
    getDevices(request: v1_management_device_pb.GetDevicesRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceListResponse) => void): grpc.ClientUnaryCall;
    getDevices(request: v1_management_device_pb.GetDevicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceListResponse) => void): grpc.ClientUnaryCall;
    getDevices(request: v1_management_device_pb.GetDevicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceListResponse) => void): grpc.ClientUnaryCall;
    updateDevice(request: v1_management_device_pb.UpdateDeviceRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    updateDevice(request: v1_management_device_pb.UpdateDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    updateDevice(request: v1_management_device_pb.UpdateDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    deleteDevice(request: v1_management_device_pb.DeviceRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    deleteDevice(request: v1_management_device_pb.DeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    deleteDevice(request: v1_management_device_pb.DeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
}

export class DeviceServiceClient extends grpc.Client implements IDeviceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public enrollDevice(request: v1_management_device_pb.EnrollDeviceRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public enrollDevice(request: v1_management_device_pb.EnrollDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public enrollDevice(request: v1_management_device_pb.EnrollDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public renewDeviceCredential(request: v1_management_device_pb.RenewDeviceCredentialRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public renewDeviceCredential(request: v1_management_device_pb.RenewDeviceCredentialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public renewDeviceCredential(request: v1_management_device_pb.RenewDeviceCredentialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public getWhoAmI(request: v1_management_device_pb.DeviceGetWhoAmIRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public getWhoAmI(request: v1_management_device_pb.DeviceGetWhoAmIRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public getWhoAmI(request: v1_management_device_pb.DeviceGetWhoAmIRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public getDevice(request: v1_management_device_pb.DeviceRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.GetDeviceResponse) => void): grpc.ClientUnaryCall;
    public getDevice(request: v1_management_device_pb.DeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.GetDeviceResponse) => void): grpc.ClientUnaryCall;
    public getDevice(request: v1_management_device_pb.DeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.GetDeviceResponse) => void): grpc.ClientUnaryCall;
    public getDevices(request: v1_management_device_pb.GetDevicesRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceListResponse) => void): grpc.ClientUnaryCall;
    public getDevices(request: v1_management_device_pb.GetDevicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceListResponse) => void): grpc.ClientUnaryCall;
    public getDevices(request: v1_management_device_pb.GetDevicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceListResponse) => void): grpc.ClientUnaryCall;
    public updateDevice(request: v1_management_device_pb.UpdateDeviceRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public updateDevice(request: v1_management_device_pb.UpdateDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public updateDevice(request: v1_management_device_pb.UpdateDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public deleteDevice(request: v1_management_device_pb.DeviceRequest, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public deleteDevice(request: v1_management_device_pb.DeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
    public deleteDevice(request: v1_management_device_pb.DeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_management_device_pb.DeviceResponse) => void): grpc.ClientUnaryCall;
}
