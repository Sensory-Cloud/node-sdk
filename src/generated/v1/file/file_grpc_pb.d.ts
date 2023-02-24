// package: sensory.api.v1.file
// file: v1/file/file.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as v1_file_file_pb from "../../v1/file/file_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

interface IFileService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getInfo: IFileService_IGetInfo;
    getCatalog: IFileService_IGetCatalog;
    getCompleteCatalog: IFileService_IGetCompleteCatalog;
    download: IFileService_IDownload;
}

interface IFileService_IGetInfo extends grpc.MethodDefinition<v1_file_file_pb.FileRequest, v1_file_file_pb.FileInfo> {
    path: "/sensory.api.v1.file.File/GetInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_file_file_pb.FileRequest>;
    requestDeserialize: grpc.deserialize<v1_file_file_pb.FileRequest>;
    responseSerialize: grpc.serialize<v1_file_file_pb.FileInfo>;
    responseDeserialize: grpc.deserialize<v1_file_file_pb.FileInfo>;
}
interface IFileService_IGetCatalog extends grpc.MethodDefinition<v1_file_file_pb.FileCatalogRequest, v1_file_file_pb.FileCatalogResponse> {
    path: "/sensory.api.v1.file.File/GetCatalog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_file_file_pb.FileCatalogRequest>;
    requestDeserialize: grpc.deserialize<v1_file_file_pb.FileCatalogRequest>;
    responseSerialize: grpc.serialize<v1_file_file_pb.FileCatalogResponse>;
    responseDeserialize: grpc.deserialize<v1_file_file_pb.FileCatalogResponse>;
}
interface IFileService_IGetCompleteCatalog extends grpc.MethodDefinition<v1_file_file_pb.FileCompleteCatalogRequest, v1_file_file_pb.FileCatalogResponse> {
    path: "/sensory.api.v1.file.File/GetCompleteCatalog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_file_file_pb.FileCompleteCatalogRequest>;
    requestDeserialize: grpc.deserialize<v1_file_file_pb.FileCompleteCatalogRequest>;
    responseSerialize: grpc.serialize<v1_file_file_pb.FileCatalogResponse>;
    responseDeserialize: grpc.deserialize<v1_file_file_pb.FileCatalogResponse>;
}
interface IFileService_IDownload extends grpc.MethodDefinition<v1_file_file_pb.FileRequest, v1_file_file_pb.FileResponse> {
    path: "/sensory.api.v1.file.File/Download";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<v1_file_file_pb.FileRequest>;
    requestDeserialize: grpc.deserialize<v1_file_file_pb.FileRequest>;
    responseSerialize: grpc.serialize<v1_file_file_pb.FileResponse>;
    responseDeserialize: grpc.deserialize<v1_file_file_pb.FileResponse>;
}

export const FileService: IFileService;

export interface IFileServer extends grpc.UntypedServiceImplementation {
    getInfo: grpc.handleUnaryCall<v1_file_file_pb.FileRequest, v1_file_file_pb.FileInfo>;
    getCatalog: grpc.handleUnaryCall<v1_file_file_pb.FileCatalogRequest, v1_file_file_pb.FileCatalogResponse>;
    getCompleteCatalog: grpc.handleUnaryCall<v1_file_file_pb.FileCompleteCatalogRequest, v1_file_file_pb.FileCatalogResponse>;
    download: grpc.handleServerStreamingCall<v1_file_file_pb.FileRequest, v1_file_file_pb.FileResponse>;
}

export interface IFileClient {
    getInfo(request: v1_file_file_pb.FileRequest, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileInfo) => void): grpc.ClientUnaryCall;
    getInfo(request: v1_file_file_pb.FileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileInfo) => void): grpc.ClientUnaryCall;
    getInfo(request: v1_file_file_pb.FileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileInfo) => void): grpc.ClientUnaryCall;
    getCatalog(request: v1_file_file_pb.FileCatalogRequest, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileCatalogResponse) => void): grpc.ClientUnaryCall;
    getCatalog(request: v1_file_file_pb.FileCatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileCatalogResponse) => void): grpc.ClientUnaryCall;
    getCatalog(request: v1_file_file_pb.FileCatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileCatalogResponse) => void): grpc.ClientUnaryCall;
    getCompleteCatalog(request: v1_file_file_pb.FileCompleteCatalogRequest, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileCatalogResponse) => void): grpc.ClientUnaryCall;
    getCompleteCatalog(request: v1_file_file_pb.FileCompleteCatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileCatalogResponse) => void): grpc.ClientUnaryCall;
    getCompleteCatalog(request: v1_file_file_pb.FileCompleteCatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileCatalogResponse) => void): grpc.ClientUnaryCall;
    download(request: v1_file_file_pb.FileRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<v1_file_file_pb.FileResponse>;
    download(request: v1_file_file_pb.FileRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<v1_file_file_pb.FileResponse>;
}

export class FileClient extends grpc.Client implements IFileClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getInfo(request: v1_file_file_pb.FileRequest, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public getInfo(request: v1_file_file_pb.FileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public getInfo(request: v1_file_file_pb.FileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public getCatalog(request: v1_file_file_pb.FileCatalogRequest, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileCatalogResponse) => void): grpc.ClientUnaryCall;
    public getCatalog(request: v1_file_file_pb.FileCatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileCatalogResponse) => void): grpc.ClientUnaryCall;
    public getCatalog(request: v1_file_file_pb.FileCatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileCatalogResponse) => void): grpc.ClientUnaryCall;
    public getCompleteCatalog(request: v1_file_file_pb.FileCompleteCatalogRequest, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileCatalogResponse) => void): grpc.ClientUnaryCall;
    public getCompleteCatalog(request: v1_file_file_pb.FileCompleteCatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileCatalogResponse) => void): grpc.ClientUnaryCall;
    public getCompleteCatalog(request: v1_file_file_pb.FileCompleteCatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_file_file_pb.FileCatalogResponse) => void): grpc.ClientUnaryCall;
    public download(request: v1_file_file_pb.FileRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<v1_file_file_pb.FileResponse>;
    public download(request: v1_file_file_pb.FileRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<v1_file_file_pb.FileResponse>;
}
