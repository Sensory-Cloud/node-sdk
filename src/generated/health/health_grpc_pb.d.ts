// package: sensory.api.health
// file: health/health.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as health_health_pb from "../health/health_pb";
import * as common_common_pb from "../common/common_pb";

interface IHealthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getHealth: IHealthServiceService_IGetHealth;
}

interface IHealthServiceService_IGetHealth extends grpc.MethodDefinition<health_health_pb.HealthRequest, common_common_pb.ServerHealthResponse> {
    path: "/sensory.api.health.HealthService/GetHealth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<health_health_pb.HealthRequest>;
    requestDeserialize: grpc.deserialize<health_health_pb.HealthRequest>;
    responseSerialize: grpc.serialize<common_common_pb.ServerHealthResponse>;
    responseDeserialize: grpc.deserialize<common_common_pb.ServerHealthResponse>;
}

export const HealthServiceService: IHealthServiceService;

export interface IHealthServiceServer extends grpc.UntypedServiceImplementation {
    getHealth: grpc.handleUnaryCall<health_health_pb.HealthRequest, common_common_pb.ServerHealthResponse>;
}

export interface IHealthServiceClient {
    getHealth(request: health_health_pb.HealthRequest, callback: (error: grpc.ServiceError | null, response: common_common_pb.ServerHealthResponse) => void): grpc.ClientUnaryCall;
    getHealth(request: health_health_pb.HealthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_pb.ServerHealthResponse) => void): grpc.ClientUnaryCall;
    getHealth(request: health_health_pb.HealthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_pb.ServerHealthResponse) => void): grpc.ClientUnaryCall;
}

export class HealthServiceClient extends grpc.Client implements IHealthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getHealth(request: health_health_pb.HealthRequest, callback: (error: grpc.ServiceError | null, response: common_common_pb.ServerHealthResponse) => void): grpc.ClientUnaryCall;
    public getHealth(request: health_health_pb.HealthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_pb.ServerHealthResponse) => void): grpc.ClientUnaryCall;
    public getHealth(request: health_health_pb.HealthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_pb.ServerHealthResponse) => void): grpc.ClientUnaryCall;
}
