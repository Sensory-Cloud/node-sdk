// package: sensory.api.v1.video
// file: v1/video/video.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as common_common_pb from "../../common/common_pb";

export class VideoModel extends jspb.Message { 
    getName(): string;
    setName(value: string): VideoModel;
    getIsenrollable(): boolean;
    setIsenrollable(value: boolean): VideoModel;
    getModeltype(): common_common_pb.ModelType;
    setModeltype(value: common_common_pb.ModelType): VideoModel;
    getFixedobject(): string;
    setFixedobject(value: string): VideoModel;
    clearVersionsList(): void;
    getVersionsList(): Array<string>;
    setVersionsList(value: Array<string>): VideoModel;
    addVersions(value: string, index?: number): string;
    getTechnology(): common_common_pb.TechnologyType;
    setTechnology(value: common_common_pb.TechnologyType): VideoModel;
    getIslivenesssupported(): boolean;
    setIslivenesssupported(value: boolean): VideoModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoModel.AsObject;
    static toObject(includeInstance: boolean, msg: VideoModel): VideoModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VideoModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoModel;
    static deserializeBinaryFromReader(message: VideoModel, reader: jspb.BinaryReader): VideoModel;
}

export namespace VideoModel {
    export type AsObject = {
        name: string,
        isenrollable: boolean,
        modeltype: common_common_pb.ModelType,
        fixedobject: string,
        versionsList: Array<string>,
        technology: common_common_pb.TechnologyType,
        islivenesssupported: boolean,
    }
}

export class GetModelsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetModelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetModelsRequest): GetModelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetModelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetModelsRequest;
    static deserializeBinaryFromReader(message: GetModelsRequest, reader: jspb.BinaryReader): GetModelsRequest;
}

export namespace GetModelsRequest {
    export type AsObject = {
    }
}

export class GetModelsResponse extends jspb.Message { 
    clearModelsList(): void;
    getModelsList(): Array<VideoModel>;
    setModelsList(value: Array<VideoModel>): GetModelsResponse;
    addModels(value?: VideoModel, index?: number): VideoModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetModelsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetModelsResponse): GetModelsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetModelsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetModelsResponse;
    static deserializeBinaryFromReader(message: GetModelsResponse, reader: jspb.BinaryReader): GetModelsResponse;
}

export namespace GetModelsResponse {
    export type AsObject = {
        modelsList: Array<VideoModel.AsObject>,
    }
}

export class CreateEnrollmentRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): CreateEnrollmentConfig | undefined;
    setConfig(value?: CreateEnrollmentConfig): CreateEnrollmentRequest;

    hasImagecontent(): boolean;
    clearImagecontent(): void;
    getImagecontent(): Uint8Array | string;
    getImagecontent_asU8(): Uint8Array;
    getImagecontent_asB64(): string;
    setImagecontent(value: Uint8Array | string): CreateEnrollmentRequest;

    getStreamingrequestCase(): CreateEnrollmentRequest.StreamingrequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEnrollmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEnrollmentRequest): CreateEnrollmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEnrollmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEnrollmentRequest;
    static deserializeBinaryFromReader(message: CreateEnrollmentRequest, reader: jspb.BinaryReader): CreateEnrollmentRequest;
}

export namespace CreateEnrollmentRequest {
    export type AsObject = {
        config?: CreateEnrollmentConfig.AsObject,
        imagecontent: Uint8Array | string,
    }

    export enum StreamingrequestCase {
        STREAMINGREQUEST_NOT_SET = 0,
        CONFIG = 1,
        IMAGECONTENT = 2,
    }

}

export class AuthenticateRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): AuthenticateConfig | undefined;
    setConfig(value?: AuthenticateConfig): AuthenticateRequest;

    hasImagecontent(): boolean;
    clearImagecontent(): void;
    getImagecontent(): Uint8Array | string;
    getImagecontent_asU8(): Uint8Array;
    getImagecontent_asB64(): string;
    setImagecontent(value: Uint8Array | string): AuthenticateRequest;

    getStreamingrequestCase(): AuthenticateRequest.StreamingrequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticateRequest): AuthenticateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticateRequest;
    static deserializeBinaryFromReader(message: AuthenticateRequest, reader: jspb.BinaryReader): AuthenticateRequest;
}

export namespace AuthenticateRequest {
    export type AsObject = {
        config?: AuthenticateConfig.AsObject,
        imagecontent: Uint8Array | string,
    }

    export enum StreamingrequestCase {
        STREAMINGREQUEST_NOT_SET = 0,
        CONFIG = 1,
        IMAGECONTENT = 2,
    }

}

export class ValidateRecognitionRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): ValidateRecognitionConfig | undefined;
    setConfig(value?: ValidateRecognitionConfig): ValidateRecognitionRequest;

    hasImagecontent(): boolean;
    clearImagecontent(): void;
    getImagecontent(): Uint8Array | string;
    getImagecontent_asU8(): Uint8Array;
    getImagecontent_asB64(): string;
    setImagecontent(value: Uint8Array | string): ValidateRecognitionRequest;

    getStreamingrequestCase(): ValidateRecognitionRequest.StreamingrequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateRecognitionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateRecognitionRequest): ValidateRecognitionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateRecognitionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateRecognitionRequest;
    static deserializeBinaryFromReader(message: ValidateRecognitionRequest, reader: jspb.BinaryReader): ValidateRecognitionRequest;
}

export namespace ValidateRecognitionRequest {
    export type AsObject = {
        config?: ValidateRecognitionConfig.AsObject,
        imagecontent: Uint8Array | string,
    }

    export enum StreamingrequestCase {
        STREAMINGREQUEST_NOT_SET = 0,
        CONFIG = 1,
        IMAGECONTENT = 2,
    }

}

export class CreateEnrollmentResponse extends jspb.Message { 
    getPercentcomplete(): number;
    setPercentcomplete(value: number): CreateEnrollmentResponse;
    getIsalive(): boolean;
    setIsalive(value: boolean): CreateEnrollmentResponse;
    getEnrollmentid(): string;
    setEnrollmentid(value: string): CreateEnrollmentResponse;
    getModelname(): string;
    setModelname(value: string): CreateEnrollmentResponse;
    getModelversion(): string;
    setModelversion(value: string): CreateEnrollmentResponse;
    getScore(): number;
    setScore(value: number): CreateEnrollmentResponse;

    hasEnrollmenttoken(): boolean;
    clearEnrollmenttoken(): void;
    getEnrollmenttoken(): common_common_pb.EnrollmentToken | undefined;
    setEnrollmenttoken(value?: common_common_pb.EnrollmentToken): CreateEnrollmentResponse;
    getDidfindface(): boolean;
    setDidfindface(value: boolean): CreateEnrollmentResponse;
    clearBoundingboxList(): void;
    getBoundingboxList(): Array<number>;
    setBoundingboxList(value: Array<number>): CreateEnrollmentResponse;
    addBoundingbox(value: number, index?: number): number;
    getProbabilityface(): number;
    setProbabilityface(value: number): CreateEnrollmentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEnrollmentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEnrollmentResponse): CreateEnrollmentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEnrollmentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEnrollmentResponse;
    static deserializeBinaryFromReader(message: CreateEnrollmentResponse, reader: jspb.BinaryReader): CreateEnrollmentResponse;
}

export namespace CreateEnrollmentResponse {
    export type AsObject = {
        percentcomplete: number,
        isalive: boolean,
        enrollmentid: string,
        modelname: string,
        modelversion: string,
        score: number,
        enrollmenttoken?: common_common_pb.EnrollmentToken.AsObject,
        didfindface: boolean,
        boundingboxList: Array<number>,
        probabilityface: number,
    }
}

export class AuthenticateResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): AuthenticateResponse;
    getScore(): number;
    setScore(value: number): AuthenticateResponse;
    getIsalive(): boolean;
    setIsalive(value: boolean): AuthenticateResponse;

    hasToken(): boolean;
    clearToken(): void;
    getToken(): common_common_pb.TokenResponse | undefined;
    setToken(value?: common_common_pb.TokenResponse): AuthenticateResponse;
    getUserid(): string;
    setUserid(value: string): AuthenticateResponse;
    getEnrollmentid(): string;
    setEnrollmentid(value: string): AuthenticateResponse;
    getDidfindface(): boolean;
    setDidfindface(value: boolean): AuthenticateResponse;
    clearBoundingboxList(): void;
    getBoundingboxList(): Array<number>;
    setBoundingboxList(value: Array<number>): AuthenticateResponse;
    addBoundingbox(value: number, index?: number): number;
    getProbabilityface(): number;
    setProbabilityface(value: number): AuthenticateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticateResponse): AuthenticateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticateResponse;
    static deserializeBinaryFromReader(message: AuthenticateResponse, reader: jspb.BinaryReader): AuthenticateResponse;
}

export namespace AuthenticateResponse {
    export type AsObject = {
        success: boolean,
        score: number,
        isalive: boolean,
        token?: common_common_pb.TokenResponse.AsObject,
        userid: string,
        enrollmentid: string,
        didfindface: boolean,
        boundingboxList: Array<number>,
        probabilityface: number,
    }
}

export class LivenessRecognitionResponse extends jspb.Message { 
    getIsalive(): boolean;
    setIsalive(value: boolean): LivenessRecognitionResponse;
    getScore(): number;
    setScore(value: number): LivenessRecognitionResponse;
    getDidfindface(): boolean;
    setDidfindface(value: boolean): LivenessRecognitionResponse;
    clearBoundingboxList(): void;
    getBoundingboxList(): Array<number>;
    setBoundingboxList(value: Array<number>): LivenessRecognitionResponse;
    addBoundingbox(value: number, index?: number): number;
    getProbabilityface(): number;
    setProbabilityface(value: number): LivenessRecognitionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LivenessRecognitionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LivenessRecognitionResponse): LivenessRecognitionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LivenessRecognitionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LivenessRecognitionResponse;
    static deserializeBinaryFromReader(message: LivenessRecognitionResponse, reader: jspb.BinaryReader): LivenessRecognitionResponse;
}

export namespace LivenessRecognitionResponse {
    export type AsObject = {
        isalive: boolean,
        score: number,
        didfindface: boolean,
        boundingboxList: Array<number>,
        probabilityface: number,
    }
}

export class CreateEnrollmentConfig extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): CreateEnrollmentConfig;
    getDeviceid(): string;
    setDeviceid(value: string): CreateEnrollmentConfig;
    getModelname(): string;
    setModelname(value: string): CreateEnrollmentConfig;
    getDescription(): string;
    setDescription(value: string): CreateEnrollmentConfig;
    getIslivenessenabled(): boolean;
    setIslivenessenabled(value: boolean): CreateEnrollmentConfig;
    getLivenessthreshold(): RecognitionThreshold;
    setLivenessthreshold(value: RecognitionThreshold): CreateEnrollmentConfig;

    hasCompression(): boolean;
    clearCompression(): void;
    getCompression(): common_common_pb.CompressionConfiguration | undefined;
    setCompression(value?: common_common_pb.CompressionConfiguration): CreateEnrollmentConfig;
    getReferenceid(): string;
    setReferenceid(value: string): CreateEnrollmentConfig;
    getNumlivenessframesrequired(): number;
    setNumlivenessframesrequired(value: number): CreateEnrollmentConfig;
    getDisableserverenrollmenttemplatestorage(): boolean;
    setDisableserverenrollmenttemplatestorage(value: boolean): CreateEnrollmentConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEnrollmentConfig.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEnrollmentConfig): CreateEnrollmentConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEnrollmentConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEnrollmentConfig;
    static deserializeBinaryFromReader(message: CreateEnrollmentConfig, reader: jspb.BinaryReader): CreateEnrollmentConfig;
}

export namespace CreateEnrollmentConfig {
    export type AsObject = {
        userid: string,
        deviceid: string,
        modelname: string,
        description: string,
        islivenessenabled: boolean,
        livenessthreshold: RecognitionThreshold,
        compression?: common_common_pb.CompressionConfiguration.AsObject,
        referenceid: string,
        numlivenessframesrequired: number,
        disableserverenrollmenttemplatestorage: boolean,
    }
}

export class AuthenticateConfig extends jspb.Message { 

    hasEnrollmentid(): boolean;
    clearEnrollmentid(): void;
    getEnrollmentid(): string;
    setEnrollmentid(value: string): AuthenticateConfig;

    hasEnrollmentgroupid(): boolean;
    clearEnrollmentgroupid(): void;
    getEnrollmentgroupid(): string;
    setEnrollmentgroupid(value: string): AuthenticateConfig;
    getIslivenessenabled(): boolean;
    setIslivenessenabled(value: boolean): AuthenticateConfig;
    getLivenessthreshold(): RecognitionThreshold;
    setLivenessthreshold(value: RecognitionThreshold): AuthenticateConfig;

    hasCompression(): boolean;
    clearCompression(): void;
    getCompression(): common_common_pb.CompressionConfiguration | undefined;
    setCompression(value?: common_common_pb.CompressionConfiguration): AuthenticateConfig;
    getDoincludetoken(): boolean;
    setDoincludetoken(value: boolean): AuthenticateConfig;
    getEnrollmenttoken(): Uint8Array | string;
    getEnrollmenttoken_asU8(): Uint8Array;
    getEnrollmenttoken_asB64(): string;
    setEnrollmenttoken(value: Uint8Array | string): AuthenticateConfig;

    getAuthidCase(): AuthenticateConfig.AuthidCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticateConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticateConfig): AuthenticateConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticateConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticateConfig;
    static deserializeBinaryFromReader(message: AuthenticateConfig, reader: jspb.BinaryReader): AuthenticateConfig;
}

export namespace AuthenticateConfig {
    export type AsObject = {
        enrollmentid: string,
        enrollmentgroupid: string,
        islivenessenabled: boolean,
        livenessthreshold: RecognitionThreshold,
        compression?: common_common_pb.CompressionConfiguration.AsObject,
        doincludetoken: boolean,
        enrollmenttoken: Uint8Array | string,
    }

    export enum AuthidCase {
        AUTHID_NOT_SET = 0,
        ENROLLMENTID = 1,
        ENROLLMENTGROUPID = 2,
    }

}

export class ValidateRecognitionConfig extends jspb.Message { 
    getModelname(): string;
    setModelname(value: string): ValidateRecognitionConfig;
    getUserid(): string;
    setUserid(value: string): ValidateRecognitionConfig;
    getThreshold(): RecognitionThreshold;
    setThreshold(value: RecognitionThreshold): ValidateRecognitionConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateRecognitionConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateRecognitionConfig): ValidateRecognitionConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateRecognitionConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateRecognitionConfig;
    static deserializeBinaryFromReader(message: ValidateRecognitionConfig, reader: jspb.BinaryReader): ValidateRecognitionConfig;
}

export namespace ValidateRecognitionConfig {
    export type AsObject = {
        modelname: string,
        userid: string,
        threshold: RecognitionThreshold,
    }
}

export enum RecognitionThreshold {
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
    HIGHEST = 3,
}
