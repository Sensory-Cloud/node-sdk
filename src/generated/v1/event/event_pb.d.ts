// package: sensory.api.v1.event
// file: v1/event/event.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as common_common_pb from "../../common/common_pb";

export class PublishUsageEventsRequest extends jspb.Message { 
    clearEventsList(): void;
    getEventsList(): Array<UsageEvent>;
    setEventsList(value: Array<UsageEvent>): PublishUsageEventsRequest;
    addEvents(value?: UsageEvent, index?: number): UsageEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishUsageEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PublishUsageEventsRequest): PublishUsageEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishUsageEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishUsageEventsRequest;
    static deserializeBinaryFromReader(message: PublishUsageEventsRequest, reader: jspb.BinaryReader): PublishUsageEventsRequest;
}

export namespace PublishUsageEventsRequest {
    export type AsObject = {
        eventsList: Array<UsageEvent.AsObject>,
    }
}

export class UsageEvent extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): UsageEvent;
    getDuration(): number;
    setDuration(value: number): UsageEvent;
    getId(): string;
    setId(value: string): UsageEvent;
    getClientid(): string;
    setClientid(value: string): UsageEvent;
    getType(): common_common_pb.UsageEventType;
    setType(value: common_common_pb.UsageEventType): UsageEvent;
    getRoute(): string;
    setRoute(value: string): UsageEvent;
    clearTechnologiesList(): void;
    getTechnologiesList(): Array<common_common_pb.TechnologyType>;
    setTechnologiesList(value: Array<common_common_pb.TechnologyType>): UsageEvent;
    addTechnologies(value: common_common_pb.TechnologyType, index?: number): common_common_pb.TechnologyType;
    clearModelsList(): void;
    getModelsList(): Array<string>;
    setModelsList(value: Array<string>): UsageEvent;
    addModels(value: string, index?: number): string;
    getAudiodurationms(): number;
    setAudiodurationms(value: number): UsageEvent;
    getVideoframecount(): number;
    setVideoframecount(value: number): UsageEvent;
    getTenantid(): string;
    setTenantid(value: string): UsageEvent;
    getBillablefunction(): common_common_pb.ModelType;
    setBillablefunction(value: common_common_pb.ModelType): UsageEvent;
    getTokencount(): number;
    setTokencount(value: number): UsageEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsageEvent.AsObject;
    static toObject(includeInstance: boolean, msg: UsageEvent): UsageEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsageEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsageEvent;
    static deserializeBinaryFromReader(message: UsageEvent, reader: jspb.BinaryReader): UsageEvent;
}

export namespace UsageEvent {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        duration: number,
        id: string,
        clientid: string,
        type: common_common_pb.UsageEventType,
        route: string,
        technologiesList: Array<common_common_pb.TechnologyType>,
        modelsList: Array<string>,
        audiodurationms: number,
        videoframecount: number,
        tenantid: string,
        billablefunction: common_common_pb.ModelType,
        tokencount: number,
    }
}

export class UsageEventResponse extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): UsageEventResponse;
    getDuration(): number;
    setDuration(value: number): UsageEventResponse;
    getId(): string;
    setId(value: string): UsageEventResponse;
    getClientid(): string;
    setClientid(value: string): UsageEventResponse;
    getType(): common_common_pb.UsageEventType;
    setType(value: common_common_pb.UsageEventType): UsageEventResponse;
    getRoute(): string;
    setRoute(value: string): UsageEventResponse;
    clearTechnologiesList(): void;
    getTechnologiesList(): Array<common_common_pb.TechnologyType>;
    setTechnologiesList(value: Array<common_common_pb.TechnologyType>): UsageEventResponse;
    addTechnologies(value: common_common_pb.TechnologyType, index?: number): common_common_pb.TechnologyType;
    clearModelsList(): void;
    getModelsList(): Array<string>;
    setModelsList(value: Array<string>): UsageEventResponse;
    addModels(value: string, index?: number): string;
    getBillablevalue(): number;
    setBillablevalue(value: number): UsageEventResponse;
    getBillableunits(): string;
    setBillableunits(value: string): UsageEventResponse;
    getTenantid(): string;
    setTenantid(value: string): UsageEventResponse;
    getBillablefunction(): common_common_pb.ModelType;
    setBillablefunction(value: common_common_pb.ModelType): UsageEventResponse;
    getCredits(): number;
    setCredits(value: number): UsageEventResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsageEventResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UsageEventResponse): UsageEventResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsageEventResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsageEventResponse;
    static deserializeBinaryFromReader(message: UsageEventResponse, reader: jspb.BinaryReader): UsageEventResponse;
}

export namespace UsageEventResponse {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        duration: number,
        id: string,
        clientid: string,
        type: common_common_pb.UsageEventType,
        route: string,
        technologiesList: Array<common_common_pb.TechnologyType>,
        modelsList: Array<string>,
        billablevalue: number,
        billableunits: string,
        tenantid: string,
        billablefunction: common_common_pb.ModelType,
        credits: number,
    }
}

export class UsageEventListRequest extends jspb.Message { 
    getTenantid(): string;
    setTenantid(value: string): UsageEventListRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): common_common_pb.PaginationOptions | undefined;
    setPagination(value?: common_common_pb.PaginationOptions): UsageEventListRequest;

    hasAfter(): boolean;
    clearAfter(): void;
    getAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAfter(value?: google_protobuf_timestamp_pb.Timestamp): UsageEventListRequest;

    hasBefore(): boolean;
    clearBefore(): void;
    getBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setBefore(value?: google_protobuf_timestamp_pb.Timestamp): UsageEventListRequest;
    clearBillablefunctionsList(): void;
    getBillablefunctionsList(): Array<common_common_pb.ModelType>;
    setBillablefunctionsList(value: Array<common_common_pb.ModelType>): UsageEventListRequest;
    addBillablefunctions(value: common_common_pb.ModelType, index?: number): common_common_pb.ModelType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsageEventListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UsageEventListRequest): UsageEventListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsageEventListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsageEventListRequest;
    static deserializeBinaryFromReader(message: UsageEventListRequest, reader: jspb.BinaryReader): UsageEventListRequest;
}

export namespace UsageEventListRequest {
    export type AsObject = {
        tenantid: string,
        pagination?: common_common_pb.PaginationOptions.AsObject,
        after?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        before?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        billablefunctionsList: Array<common_common_pb.ModelType>,
    }
}

export class UsageEventListResponse extends jspb.Message { 
    clearEventsList(): void;
    getEventsList(): Array<UsageEventResponse>;
    setEventsList(value: Array<UsageEventResponse>): UsageEventListResponse;
    addEvents(value?: UsageEventResponse, index?: number): UsageEventResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): common_common_pb.PaginationResponse | undefined;
    setPagination(value?: common_common_pb.PaginationResponse): UsageEventListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsageEventListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UsageEventListResponse): UsageEventListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsageEventListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsageEventListResponse;
    static deserializeBinaryFromReader(message: UsageEventListResponse, reader: jspb.BinaryReader): UsageEventListResponse;
}

export namespace UsageEventListResponse {
    export type AsObject = {
        eventsList: Array<UsageEventResponse.AsObject>,
        pagination?: common_common_pb.PaginationResponse.AsObject,
    }
}

export class GlobalEventSummaryRequest extends jspb.Message { 
    clearTenantsList(): void;
    getTenantsList(): Array<string>;
    setTenantsList(value: Array<string>): GlobalEventSummaryRequest;
    addTenants(value: string, index?: number): string;

    hasAfter(): boolean;
    clearAfter(): void;
    getAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAfter(value?: google_protobuf_timestamp_pb.Timestamp): GlobalEventSummaryRequest;

    hasBefore(): boolean;
    clearBefore(): void;
    getBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setBefore(value?: google_protobuf_timestamp_pb.Timestamp): GlobalEventSummaryRequest;
    clearBillablefunctionsList(): void;
    getBillablefunctionsList(): Array<common_common_pb.ModelType>;
    setBillablefunctionsList(value: Array<common_common_pb.ModelType>): GlobalEventSummaryRequest;
    addBillablefunctions(value: common_common_pb.ModelType, index?: number): common_common_pb.ModelType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GlobalEventSummaryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GlobalEventSummaryRequest): GlobalEventSummaryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GlobalEventSummaryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GlobalEventSummaryRequest;
    static deserializeBinaryFromReader(message: GlobalEventSummaryRequest, reader: jspb.BinaryReader): GlobalEventSummaryRequest;
}

export namespace GlobalEventSummaryRequest {
    export type AsObject = {
        tenantsList: Array<string>,
        after?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        before?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        billablefunctionsList: Array<common_common_pb.ModelType>,
    }
}

export class UsageEventSummary extends jspb.Message { 
    clearSummariesList(): void;
    getSummariesList(): Array<UsageEventModelSummary>;
    setSummariesList(value: Array<UsageEventModelSummary>): UsageEventSummary;
    addSummaries(value?: UsageEventModelSummary, index?: number): UsageEventModelSummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsageEventSummary.AsObject;
    static toObject(includeInstance: boolean, msg: UsageEventSummary): UsageEventSummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsageEventSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsageEventSummary;
    static deserializeBinaryFromReader(message: UsageEventSummary, reader: jspb.BinaryReader): UsageEventSummary;
}

export namespace UsageEventSummary {
    export type AsObject = {
        summariesList: Array<UsageEventModelSummary.AsObject>,
    }
}

export class UsageEventModelSummary extends jspb.Message { 
    getBillablefunction(): common_common_pb.ModelType;
    setBillablefunction(value: common_common_pb.ModelType): UsageEventModelSummary;
    getUnits(): string;
    setUnits(value: string): UsageEventModelSummary;
    getValue(): number;
    setValue(value: number): UsageEventModelSummary;
    getCount(): number;
    setCount(value: number): UsageEventModelSummary;
    getCredits(): number;
    setCredits(value: number): UsageEventModelSummary;
    getTenantid(): string;
    setTenantid(value: string): UsageEventModelSummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsageEventModelSummary.AsObject;
    static toObject(includeInstance: boolean, msg: UsageEventModelSummary): UsageEventModelSummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsageEventModelSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsageEventModelSummary;
    static deserializeBinaryFromReader(message: UsageEventModelSummary, reader: jspb.BinaryReader): UsageEventModelSummary;
}

export namespace UsageEventModelSummary {
    export type AsObject = {
        billablefunction: common_common_pb.ModelType,
        units: string,
        value: number,
        count: number,
        credits: number,
        tenantid: string,
    }
}

export class PublishUsageEventsResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishUsageEventsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PublishUsageEventsResponse): PublishUsageEventsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishUsageEventsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishUsageEventsResponse;
    static deserializeBinaryFromReader(message: PublishUsageEventsResponse, reader: jspb.BinaryReader): PublishUsageEventsResponse;
}

export namespace PublishUsageEventsResponse {
    export type AsObject = {
    }
}
