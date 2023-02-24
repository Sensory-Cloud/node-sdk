// package: sensory.api.v1.audio
// file: v1/audio/audio.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as v1_audio_audio_pb from "../../v1/audio/audio_pb";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as common_common_pb from "../../common/common_pb";

interface IAudioModelsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getModels: IAudioModelsService_IGetModels;
}

interface IAudioModelsService_IGetModels extends grpc.MethodDefinition<v1_audio_audio_pb.GetModelsRequest, v1_audio_audio_pb.GetModelsResponse> {
    path: "/sensory.api.v1.audio.AudioModels/GetModels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_audio_audio_pb.GetModelsRequest>;
    requestDeserialize: grpc.deserialize<v1_audio_audio_pb.GetModelsRequest>;
    responseSerialize: grpc.serialize<v1_audio_audio_pb.GetModelsResponse>;
    responseDeserialize: grpc.deserialize<v1_audio_audio_pb.GetModelsResponse>;
}

export const AudioModelsService: IAudioModelsService;

export interface IAudioModelsServer extends grpc.UntypedServiceImplementation {
    getModels: grpc.handleUnaryCall<v1_audio_audio_pb.GetModelsRequest, v1_audio_audio_pb.GetModelsResponse>;
}

export interface IAudioModelsClient {
    getModels(request: v1_audio_audio_pb.GetModelsRequest, callback: (error: grpc.ServiceError | null, response: v1_audio_audio_pb.GetModelsResponse) => void): grpc.ClientUnaryCall;
    getModels(request: v1_audio_audio_pb.GetModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_audio_audio_pb.GetModelsResponse) => void): grpc.ClientUnaryCall;
    getModels(request: v1_audio_audio_pb.GetModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_audio_audio_pb.GetModelsResponse) => void): grpc.ClientUnaryCall;
}

export class AudioModelsClient extends grpc.Client implements IAudioModelsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getModels(request: v1_audio_audio_pb.GetModelsRequest, callback: (error: grpc.ServiceError | null, response: v1_audio_audio_pb.GetModelsResponse) => void): grpc.ClientUnaryCall;
    public getModels(request: v1_audio_audio_pb.GetModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_audio_audio_pb.GetModelsResponse) => void): grpc.ClientUnaryCall;
    public getModels(request: v1_audio_audio_pb.GetModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_audio_audio_pb.GetModelsResponse) => void): grpc.ClientUnaryCall;
}

interface IAudioBiometricsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createEnrollment: IAudioBiometricsService_ICreateEnrollment;
    authenticate: IAudioBiometricsService_IAuthenticate;
}

interface IAudioBiometricsService_ICreateEnrollment extends grpc.MethodDefinition<v1_audio_audio_pb.CreateEnrollmentRequest, v1_audio_audio_pb.CreateEnrollmentResponse> {
    path: "/sensory.api.v1.audio.AudioBiometrics/CreateEnrollment";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<v1_audio_audio_pb.CreateEnrollmentRequest>;
    requestDeserialize: grpc.deserialize<v1_audio_audio_pb.CreateEnrollmentRequest>;
    responseSerialize: grpc.serialize<v1_audio_audio_pb.CreateEnrollmentResponse>;
    responseDeserialize: grpc.deserialize<v1_audio_audio_pb.CreateEnrollmentResponse>;
}
interface IAudioBiometricsService_IAuthenticate extends grpc.MethodDefinition<v1_audio_audio_pb.AuthenticateRequest, v1_audio_audio_pb.AuthenticateResponse> {
    path: "/sensory.api.v1.audio.AudioBiometrics/Authenticate";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<v1_audio_audio_pb.AuthenticateRequest>;
    requestDeserialize: grpc.deserialize<v1_audio_audio_pb.AuthenticateRequest>;
    responseSerialize: grpc.serialize<v1_audio_audio_pb.AuthenticateResponse>;
    responseDeserialize: grpc.deserialize<v1_audio_audio_pb.AuthenticateResponse>;
}

export const AudioBiometricsService: IAudioBiometricsService;

export interface IAudioBiometricsServer extends grpc.UntypedServiceImplementation {
    createEnrollment: grpc.handleBidiStreamingCall<v1_audio_audio_pb.CreateEnrollmentRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
    authenticate: grpc.handleBidiStreamingCall<v1_audio_audio_pb.AuthenticateRequest, v1_audio_audio_pb.AuthenticateResponse>;
}

export interface IAudioBiometricsClient {
    createEnrollment(): grpc.ClientDuplexStream<v1_audio_audio_pb.CreateEnrollmentRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
    createEnrollment(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.CreateEnrollmentRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
    createEnrollment(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.CreateEnrollmentRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
    authenticate(): grpc.ClientDuplexStream<v1_audio_audio_pb.AuthenticateRequest, v1_audio_audio_pb.AuthenticateResponse>;
    authenticate(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.AuthenticateRequest, v1_audio_audio_pb.AuthenticateResponse>;
    authenticate(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.AuthenticateRequest, v1_audio_audio_pb.AuthenticateResponse>;
}

export class AudioBiometricsClient extends grpc.Client implements IAudioBiometricsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createEnrollment(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.CreateEnrollmentRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
    public createEnrollment(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.CreateEnrollmentRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
    public authenticate(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.AuthenticateRequest, v1_audio_audio_pb.AuthenticateResponse>;
    public authenticate(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.AuthenticateRequest, v1_audio_audio_pb.AuthenticateResponse>;
}

interface IAudioEventsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    validateEvent: IAudioEventsService_IValidateEvent;
    createEnrolledEvent: IAudioEventsService_ICreateEnrolledEvent;
    validateEnrolledEvent: IAudioEventsService_IValidateEnrolledEvent;
}

interface IAudioEventsService_IValidateEvent extends grpc.MethodDefinition<v1_audio_audio_pb.ValidateEventRequest, v1_audio_audio_pb.ValidateEventResponse> {
    path: "/sensory.api.v1.audio.AudioEvents/ValidateEvent";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<v1_audio_audio_pb.ValidateEventRequest>;
    requestDeserialize: grpc.deserialize<v1_audio_audio_pb.ValidateEventRequest>;
    responseSerialize: grpc.serialize<v1_audio_audio_pb.ValidateEventResponse>;
    responseDeserialize: grpc.deserialize<v1_audio_audio_pb.ValidateEventResponse>;
}
interface IAudioEventsService_ICreateEnrolledEvent extends grpc.MethodDefinition<v1_audio_audio_pb.CreateEnrolledEventRequest, v1_audio_audio_pb.CreateEnrollmentResponse> {
    path: "/sensory.api.v1.audio.AudioEvents/CreateEnrolledEvent";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<v1_audio_audio_pb.CreateEnrolledEventRequest>;
    requestDeserialize: grpc.deserialize<v1_audio_audio_pb.CreateEnrolledEventRequest>;
    responseSerialize: grpc.serialize<v1_audio_audio_pb.CreateEnrollmentResponse>;
    responseDeserialize: grpc.deserialize<v1_audio_audio_pb.CreateEnrollmentResponse>;
}
interface IAudioEventsService_IValidateEnrolledEvent extends grpc.MethodDefinition<v1_audio_audio_pb.ValidateEnrolledEventRequest, v1_audio_audio_pb.ValidateEnrolledEventResponse> {
    path: "/sensory.api.v1.audio.AudioEvents/ValidateEnrolledEvent";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<v1_audio_audio_pb.ValidateEnrolledEventRequest>;
    requestDeserialize: grpc.deserialize<v1_audio_audio_pb.ValidateEnrolledEventRequest>;
    responseSerialize: grpc.serialize<v1_audio_audio_pb.ValidateEnrolledEventResponse>;
    responseDeserialize: grpc.deserialize<v1_audio_audio_pb.ValidateEnrolledEventResponse>;
}

export const AudioEventsService: IAudioEventsService;

export interface IAudioEventsServer extends grpc.UntypedServiceImplementation {
    validateEvent: grpc.handleBidiStreamingCall<v1_audio_audio_pb.ValidateEventRequest, v1_audio_audio_pb.ValidateEventResponse>;
    createEnrolledEvent: grpc.handleBidiStreamingCall<v1_audio_audio_pb.CreateEnrolledEventRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
    validateEnrolledEvent: grpc.handleBidiStreamingCall<v1_audio_audio_pb.ValidateEnrolledEventRequest, v1_audio_audio_pb.ValidateEnrolledEventResponse>;
}

export interface IAudioEventsClient {
    validateEvent(): grpc.ClientDuplexStream<v1_audio_audio_pb.ValidateEventRequest, v1_audio_audio_pb.ValidateEventResponse>;
    validateEvent(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.ValidateEventRequest, v1_audio_audio_pb.ValidateEventResponse>;
    validateEvent(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.ValidateEventRequest, v1_audio_audio_pb.ValidateEventResponse>;
    createEnrolledEvent(): grpc.ClientDuplexStream<v1_audio_audio_pb.CreateEnrolledEventRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
    createEnrolledEvent(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.CreateEnrolledEventRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
    createEnrolledEvent(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.CreateEnrolledEventRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
    validateEnrolledEvent(): grpc.ClientDuplexStream<v1_audio_audio_pb.ValidateEnrolledEventRequest, v1_audio_audio_pb.ValidateEnrolledEventResponse>;
    validateEnrolledEvent(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.ValidateEnrolledEventRequest, v1_audio_audio_pb.ValidateEnrolledEventResponse>;
    validateEnrolledEvent(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.ValidateEnrolledEventRequest, v1_audio_audio_pb.ValidateEnrolledEventResponse>;
}

export class AudioEventsClient extends grpc.Client implements IAudioEventsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public validateEvent(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.ValidateEventRequest, v1_audio_audio_pb.ValidateEventResponse>;
    public validateEvent(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.ValidateEventRequest, v1_audio_audio_pb.ValidateEventResponse>;
    public createEnrolledEvent(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.CreateEnrolledEventRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
    public createEnrolledEvent(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.CreateEnrolledEventRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
    public validateEnrolledEvent(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.ValidateEnrolledEventRequest, v1_audio_audio_pb.ValidateEnrolledEventResponse>;
    public validateEnrolledEvent(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.ValidateEnrolledEventRequest, v1_audio_audio_pb.ValidateEnrolledEventResponse>;
}

interface IAudioTranscriptionsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    transcribe: IAudioTranscriptionsService_ITranscribe;
}

interface IAudioTranscriptionsService_ITranscribe extends grpc.MethodDefinition<v1_audio_audio_pb.TranscribeRequest, v1_audio_audio_pb.TranscribeResponse> {
    path: "/sensory.api.v1.audio.AudioTranscriptions/Transcribe";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<v1_audio_audio_pb.TranscribeRequest>;
    requestDeserialize: grpc.deserialize<v1_audio_audio_pb.TranscribeRequest>;
    responseSerialize: grpc.serialize<v1_audio_audio_pb.TranscribeResponse>;
    responseDeserialize: grpc.deserialize<v1_audio_audio_pb.TranscribeResponse>;
}

export const AudioTranscriptionsService: IAudioTranscriptionsService;

export interface IAudioTranscriptionsServer extends grpc.UntypedServiceImplementation {
    transcribe: grpc.handleBidiStreamingCall<v1_audio_audio_pb.TranscribeRequest, v1_audio_audio_pb.TranscribeResponse>;
}

export interface IAudioTranscriptionsClient {
    transcribe(): grpc.ClientDuplexStream<v1_audio_audio_pb.TranscribeRequest, v1_audio_audio_pb.TranscribeResponse>;
    transcribe(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.TranscribeRequest, v1_audio_audio_pb.TranscribeResponse>;
    transcribe(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.TranscribeRequest, v1_audio_audio_pb.TranscribeResponse>;
}

export class AudioTranscriptionsClient extends grpc.Client implements IAudioTranscriptionsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public transcribe(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.TranscribeRequest, v1_audio_audio_pb.TranscribeResponse>;
    public transcribe(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<v1_audio_audio_pb.TranscribeRequest, v1_audio_audio_pb.TranscribeResponse>;
}

interface IAudioSynthesisService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    synthesizeSpeech: IAudioSynthesisService_ISynthesizeSpeech;
}

interface IAudioSynthesisService_ISynthesizeSpeech extends grpc.MethodDefinition<v1_audio_audio_pb.SynthesizeSpeechRequest, v1_audio_audio_pb.SynthesizeSpeechResponse> {
    path: "/sensory.api.v1.audio.AudioSynthesis/SynthesizeSpeech";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<v1_audio_audio_pb.SynthesizeSpeechRequest>;
    requestDeserialize: grpc.deserialize<v1_audio_audio_pb.SynthesizeSpeechRequest>;
    responseSerialize: grpc.serialize<v1_audio_audio_pb.SynthesizeSpeechResponse>;
    responseDeserialize: grpc.deserialize<v1_audio_audio_pb.SynthesizeSpeechResponse>;
}

export const AudioSynthesisService: IAudioSynthesisService;

export interface IAudioSynthesisServer extends grpc.UntypedServiceImplementation {
    synthesizeSpeech: grpc.handleServerStreamingCall<v1_audio_audio_pb.SynthesizeSpeechRequest, v1_audio_audio_pb.SynthesizeSpeechResponse>;
}

export interface IAudioSynthesisClient {
    synthesizeSpeech(request: v1_audio_audio_pb.SynthesizeSpeechRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<v1_audio_audio_pb.SynthesizeSpeechResponse>;
    synthesizeSpeech(request: v1_audio_audio_pb.SynthesizeSpeechRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<v1_audio_audio_pb.SynthesizeSpeechResponse>;
}

export class AudioSynthesisClient extends grpc.Client implements IAudioSynthesisClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public synthesizeSpeech(request: v1_audio_audio_pb.SynthesizeSpeechRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<v1_audio_audio_pb.SynthesizeSpeechResponse>;
    public synthesizeSpeech(request: v1_audio_audio_pb.SynthesizeSpeechRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<v1_audio_audio_pb.SynthesizeSpeechResponse>;
}
