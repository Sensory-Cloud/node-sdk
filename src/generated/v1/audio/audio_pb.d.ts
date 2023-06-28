// package: sensory.api.v1.audio
// file: v1/audio/audio.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as common_common_pb from "../../common/common_pb";

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

export class AudioModel extends jspb.Message { 
    getName(): string;
    setName(value: string): AudioModel;
    getIsenrollable(): boolean;
    setIsenrollable(value: boolean): AudioModel;
    getModeltype(): common_common_pb.ModelType;
    setModeltype(value: common_common_pb.ModelType): AudioModel;
    getFixedphrase(): string;
    setFixedphrase(value: string): AudioModel;
    getSamplerate(): number;
    setSamplerate(value: number): AudioModel;
    clearVersionsList(): void;
    getVersionsList(): Array<string>;
    setVersionsList(value: Array<string>): AudioModel;
    addVersions(value: string, index?: number): string;
    getTechnology(): common_common_pb.TechnologyType;
    setTechnology(value: common_common_pb.TechnologyType): AudioModel;
    getIslivenesssupported(): boolean;
    setIslivenesssupported(value: boolean): AudioModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioModel.AsObject;
    static toObject(includeInstance: boolean, msg: AudioModel): AudioModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioModel;
    static deserializeBinaryFromReader(message: AudioModel, reader: jspb.BinaryReader): AudioModel;
}

export namespace AudioModel {
    export type AsObject = {
        name: string,
        isenrollable: boolean,
        modeltype: common_common_pb.ModelType,
        fixedphrase: string,
        samplerate: number,
        versionsList: Array<string>,
        technology: common_common_pb.TechnologyType,
        islivenesssupported: boolean,
    }
}

export class AudioRequestPostProcessingAction extends jspb.Message { 
    getActionid(): string;
    setActionid(value: string): AudioRequestPostProcessingAction;
    getAction(): AudioPostProcessingAction;
    setAction(value: AudioPostProcessingAction): AudioRequestPostProcessingAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioRequestPostProcessingAction.AsObject;
    static toObject(includeInstance: boolean, msg: AudioRequestPostProcessingAction): AudioRequestPostProcessingAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioRequestPostProcessingAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioRequestPostProcessingAction;
    static deserializeBinaryFromReader(message: AudioRequestPostProcessingAction, reader: jspb.BinaryReader): AudioRequestPostProcessingAction;
}

export namespace AudioRequestPostProcessingAction {
    export type AsObject = {
        actionid: string,
        action: AudioPostProcessingAction,
    }
}

export class AudioResponsePostProcessingAction extends jspb.Message { 
    getActionid(): string;
    setActionid(value: string): AudioResponsePostProcessingAction;
    getAction(): AudioPostProcessingAction;
    setAction(value: AudioPostProcessingAction): AudioResponsePostProcessingAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioResponsePostProcessingAction.AsObject;
    static toObject(includeInstance: boolean, msg: AudioResponsePostProcessingAction): AudioResponsePostProcessingAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioResponsePostProcessingAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioResponsePostProcessingAction;
    static deserializeBinaryFromReader(message: AudioResponsePostProcessingAction, reader: jspb.BinaryReader): AudioResponsePostProcessingAction;
}

export namespace AudioResponsePostProcessingAction {
    export type AsObject = {
        actionid: string,
        action: AudioPostProcessingAction,
    }
}

export class GetModelsResponse extends jspb.Message { 
    clearModelsList(): void;
    getModelsList(): Array<AudioModel>;
    setModelsList(value: Array<AudioModel>): GetModelsResponse;
    addModels(value?: AudioModel, index?: number): AudioModel;

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
        modelsList: Array<AudioModel.AsObject>,
    }
}

export class CreateEnrollmentRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): CreateEnrollmentConfig | undefined;
    setConfig(value?: CreateEnrollmentConfig): CreateEnrollmentRequest;

    hasAudiocontent(): boolean;
    clearAudiocontent(): void;
    getAudiocontent(): Uint8Array | string;
    getAudiocontent_asU8(): Uint8Array;
    getAudiocontent_asB64(): string;
    setAudiocontent(value: Uint8Array | string): CreateEnrollmentRequest;

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
        audiocontent: Uint8Array | string,
    }

    export enum StreamingrequestCase {
        STREAMINGREQUEST_NOT_SET = 0,
        CONFIG = 1,
        AUDIOCONTENT = 2,
    }

}

export class AuthenticateRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): AuthenticateConfig | undefined;
    setConfig(value?: AuthenticateConfig): AuthenticateRequest;

    hasAudiocontent(): boolean;
    clearAudiocontent(): void;
    getAudiocontent(): Uint8Array | string;
    getAudiocontent_asU8(): Uint8Array;
    getAudiocontent_asB64(): string;
    setAudiocontent(value: Uint8Array | string): AuthenticateRequest;

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
        audiocontent: Uint8Array | string,
    }

    export enum StreamingrequestCase {
        STREAMINGREQUEST_NOT_SET = 0,
        CONFIG = 1,
        AUDIOCONTENT = 2,
    }

}

export class ValidateEventRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): ValidateEventConfig | undefined;
    setConfig(value?: ValidateEventConfig): ValidateEventRequest;

    hasAudiocontent(): boolean;
    clearAudiocontent(): void;
    getAudiocontent(): Uint8Array | string;
    getAudiocontent_asU8(): Uint8Array;
    getAudiocontent_asB64(): string;
    setAudiocontent(value: Uint8Array | string): ValidateEventRequest;

    hasPostprocessingaction(): boolean;
    clearPostprocessingaction(): void;
    getPostprocessingaction(): AudioRequestPostProcessingAction | undefined;
    setPostprocessingaction(value?: AudioRequestPostProcessingAction): ValidateEventRequest;

    getStreamingrequestCase(): ValidateEventRequest.StreamingrequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateEventRequest): ValidateEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateEventRequest;
    static deserializeBinaryFromReader(message: ValidateEventRequest, reader: jspb.BinaryReader): ValidateEventRequest;
}

export namespace ValidateEventRequest {
    export type AsObject = {
        config?: ValidateEventConfig.AsObject,
        audiocontent: Uint8Array | string,
        postprocessingaction?: AudioRequestPostProcessingAction.AsObject,
    }

    export enum StreamingrequestCase {
        STREAMINGREQUEST_NOT_SET = 0,
        CONFIG = 1,
        AUDIOCONTENT = 2,
    }

}

export class CreateEnrolledEventRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): CreateEnrollmentEventConfig | undefined;
    setConfig(value?: CreateEnrollmentEventConfig): CreateEnrolledEventRequest;

    hasAudiocontent(): boolean;
    clearAudiocontent(): void;
    getAudiocontent(): Uint8Array | string;
    getAudiocontent_asU8(): Uint8Array;
    getAudiocontent_asB64(): string;
    setAudiocontent(value: Uint8Array | string): CreateEnrolledEventRequest;

    getStreamingrequestCase(): CreateEnrolledEventRequest.StreamingrequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEnrolledEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEnrolledEventRequest): CreateEnrolledEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEnrolledEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEnrolledEventRequest;
    static deserializeBinaryFromReader(message: CreateEnrolledEventRequest, reader: jspb.BinaryReader): CreateEnrolledEventRequest;
}

export namespace CreateEnrolledEventRequest {
    export type AsObject = {
        config?: CreateEnrollmentEventConfig.AsObject,
        audiocontent: Uint8Array | string,
    }

    export enum StreamingrequestCase {
        STREAMINGREQUEST_NOT_SET = 0,
        CONFIG = 1,
        AUDIOCONTENT = 2,
    }

}

export class ValidateEnrolledEventRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): ValidateEnrolledEventConfig | undefined;
    setConfig(value?: ValidateEnrolledEventConfig): ValidateEnrolledEventRequest;

    hasAudiocontent(): boolean;
    clearAudiocontent(): void;
    getAudiocontent(): Uint8Array | string;
    getAudiocontent_asU8(): Uint8Array;
    getAudiocontent_asB64(): string;
    setAudiocontent(value: Uint8Array | string): ValidateEnrolledEventRequest;

    getStreamingrequestCase(): ValidateEnrolledEventRequest.StreamingrequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateEnrolledEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateEnrolledEventRequest): ValidateEnrolledEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateEnrolledEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateEnrolledEventRequest;
    static deserializeBinaryFromReader(message: ValidateEnrolledEventRequest, reader: jspb.BinaryReader): ValidateEnrolledEventRequest;
}

export namespace ValidateEnrolledEventRequest {
    export type AsObject = {
        config?: ValidateEnrolledEventConfig.AsObject,
        audiocontent: Uint8Array | string,
    }

    export enum StreamingrequestCase {
        STREAMINGREQUEST_NOT_SET = 0,
        CONFIG = 1,
        AUDIOCONTENT = 2,
    }

}

export class TranscribeRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): TranscribeConfig | undefined;
    setConfig(value?: TranscribeConfig): TranscribeRequest;

    hasAudiocontent(): boolean;
    clearAudiocontent(): void;
    getAudiocontent(): Uint8Array | string;
    getAudiocontent_asU8(): Uint8Array;
    getAudiocontent_asB64(): string;
    setAudiocontent(value: Uint8Array | string): TranscribeRequest;

    hasPostprocessingaction(): boolean;
    clearPostprocessingaction(): void;
    getPostprocessingaction(): AudioRequestPostProcessingAction | undefined;
    setPostprocessingaction(value?: AudioRequestPostProcessingAction): TranscribeRequest;

    getStreamingrequestCase(): TranscribeRequest.StreamingrequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TranscribeRequest): TranscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranscribeRequest;
    static deserializeBinaryFromReader(message: TranscribeRequest, reader: jspb.BinaryReader): TranscribeRequest;
}

export namespace TranscribeRequest {
    export type AsObject = {
        config?: TranscribeConfig.AsObject,
        audiocontent: Uint8Array | string,
        postprocessingaction?: AudioRequestPostProcessingAction.AsObject,
    }

    export enum StreamingrequestCase {
        STREAMINGREQUEST_NOT_SET = 0,
        CONFIG = 1,
        AUDIOCONTENT = 2,
    }

}

export class SynthesizeSpeechRequest extends jspb.Message { 
    getPhrase(): string;
    setPhrase(value: string): SynthesizeSpeechRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): VoiceSynthesisConfig | undefined;
    setConfig(value?: VoiceSynthesisConfig): SynthesizeSpeechRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SynthesizeSpeechRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SynthesizeSpeechRequest): SynthesizeSpeechRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SynthesizeSpeechRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SynthesizeSpeechRequest;
    static deserializeBinaryFromReader(message: SynthesizeSpeechRequest, reader: jspb.BinaryReader): SynthesizeSpeechRequest;
}

export namespace SynthesizeSpeechRequest {
    export type AsObject = {
        phrase: string,
        config?: VoiceSynthesisConfig.AsObject,
    }
}

export class CreateEnrollmentResponse extends jspb.Message { 
    getPercentcomplete(): number;
    setPercentcomplete(value: number): CreateEnrollmentResponse;
    getAudioenergy(): number;
    setAudioenergy(value: number): CreateEnrollmentResponse;
    getEnrollmentid(): string;
    setEnrollmentid(value: string): CreateEnrollmentResponse;
    getModelname(): string;
    setModelname(value: string): CreateEnrollmentResponse;
    getModelversion(): string;
    setModelversion(value: string): CreateEnrollmentResponse;
    getModelprompt(): string;
    setModelprompt(value: string): CreateEnrollmentResponse;
    getPercentsegmentcomplete(): number;
    setPercentsegmentcomplete(value: number): CreateEnrollmentResponse;

    hasEnrollmenttoken(): boolean;
    clearEnrollmenttoken(): void;
    getEnrollmenttoken(): common_common_pb.EnrollmentToken | undefined;
    setEnrollmenttoken(value?: common_common_pb.EnrollmentToken): CreateEnrollmentResponse;

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
        audioenergy: number,
        enrollmentid: string,
        modelname: string,
        modelversion: string,
        modelprompt: string,
        percentsegmentcomplete: number,
        enrollmenttoken?: common_common_pb.EnrollmentToken.AsObject,
    }
}

export class AuthenticateResponse extends jspb.Message { 
    getAudioenergy(): number;
    setAudioenergy(value: number): AuthenticateResponse;
    getSuccess(): boolean;
    setSuccess(value: boolean): AuthenticateResponse;

    hasToken(): boolean;
    clearToken(): void;
    getToken(): common_common_pb.TokenResponse | undefined;
    setToken(value?: common_common_pb.TokenResponse): AuthenticateResponse;
    getUserid(): string;
    setUserid(value: string): AuthenticateResponse;
    getEnrollmentid(): string;
    setEnrollmentid(value: string): AuthenticateResponse;
    getModelprompt(): string;
    setModelprompt(value: string): AuthenticateResponse;
    getPercentsegmentcomplete(): number;
    setPercentsegmentcomplete(value: number): AuthenticateResponse;

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
        audioenergy: number,
        success: boolean,
        token?: common_common_pb.TokenResponse.AsObject,
        userid: string,
        enrollmentid: string,
        modelprompt: string,
        percentsegmentcomplete: number,
    }
}

export class SoundIdTopNResponse extends jspb.Message { 
    getResultid(): string;
    setResultid(value: string): SoundIdTopNResponse;
    getLogitscore(): number;
    setLogitscore(value: number): SoundIdTopNResponse;
    getProbabilityscore(): number;
    setProbabilityscore(value: number): SoundIdTopNResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SoundIdTopNResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SoundIdTopNResponse): SoundIdTopNResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SoundIdTopNResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SoundIdTopNResponse;
    static deserializeBinaryFromReader(message: SoundIdTopNResponse, reader: jspb.BinaryReader): SoundIdTopNResponse;
}

export namespace SoundIdTopNResponse {
    export type AsObject = {
        resultid: string,
        logitscore: number,
        probabilityscore: number,
    }
}

export class ValidateEventResponse extends jspb.Message { 
    getAudioenergy(): number;
    setAudioenergy(value: number): ValidateEventResponse;
    getSuccess(): boolean;
    setSuccess(value: boolean): ValidateEventResponse;
    getResultid(): string;
    setResultid(value: string): ValidateEventResponse;
    getScore(): number;
    setScore(value: number): ValidateEventResponse;
    clearTopnresponseList(): void;
    getTopnresponseList(): Array<SoundIdTopNResponse>;
    setTopnresponseList(value: Array<SoundIdTopNResponse>): ValidateEventResponse;
    addTopnresponse(value?: SoundIdTopNResponse, index?: number): SoundIdTopNResponse;
    getResultstarttime(): number;
    setResultstarttime(value: number): ValidateEventResponse;
    getResultendtime(): number;
    setResultendtime(value: number): ValidateEventResponse;

    hasPostprocessingaction(): boolean;
    clearPostprocessingaction(): void;
    getPostprocessingaction(): AudioResponsePostProcessingAction | undefined;
    setPostprocessingaction(value?: AudioResponsePostProcessingAction): ValidateEventResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateEventResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateEventResponse): ValidateEventResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateEventResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateEventResponse;
    static deserializeBinaryFromReader(message: ValidateEventResponse, reader: jspb.BinaryReader): ValidateEventResponse;
}

export namespace ValidateEventResponse {
    export type AsObject = {
        audioenergy: number,
        success: boolean,
        resultid: string,
        score: number,
        topnresponseList: Array<SoundIdTopNResponse.AsObject>,
        resultstarttime: number,
        resultendtime: number,
        postprocessingaction?: AudioResponsePostProcessingAction.AsObject,
    }
}

export class ValidateEnrolledEventResponse extends jspb.Message { 
    getAudioenergy(): number;
    setAudioenergy(value: number): ValidateEnrolledEventResponse;
    getSuccess(): boolean;
    setSuccess(value: boolean): ValidateEnrolledEventResponse;
    getEnrollmentid(): string;
    setEnrollmentid(value: string): ValidateEnrolledEventResponse;
    getUserid(): string;
    setUserid(value: string): ValidateEnrolledEventResponse;
    getModelprompt(): string;
    setModelprompt(value: string): ValidateEnrolledEventResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateEnrolledEventResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateEnrolledEventResponse): ValidateEnrolledEventResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateEnrolledEventResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateEnrolledEventResponse;
    static deserializeBinaryFromReader(message: ValidateEnrolledEventResponse, reader: jspb.BinaryReader): ValidateEnrolledEventResponse;
}

export namespace ValidateEnrolledEventResponse {
    export type AsObject = {
        audioenergy: number,
        success: boolean,
        enrollmentid: string,
        userid: string,
        modelprompt: string,
    }
}

export class TranscribeWord extends jspb.Message { 
    getBegintimems(): number;
    setBegintimems(value: number): TranscribeWord;
    getEndtimems(): number;
    setEndtimems(value: number): TranscribeWord;
    getConfidence(): number;
    setConfidence(value: number): TranscribeWord;
    getWordstate(): WordState;
    setWordstate(value: WordState): TranscribeWord;
    getWordindex(): number;
    setWordindex(value: number): TranscribeWord;
    getWord(): string;
    setWord(value: string): TranscribeWord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranscribeWord.AsObject;
    static toObject(includeInstance: boolean, msg: TranscribeWord): TranscribeWord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranscribeWord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranscribeWord;
    static deserializeBinaryFromReader(message: TranscribeWord, reader: jspb.BinaryReader): TranscribeWord;
}

export namespace TranscribeWord {
    export type AsObject = {
        begintimems: number,
        endtimems: number,
        confidence: number,
        wordstate: WordState,
        wordindex: number,
        word: string,
    }
}

export class TranscribeWordResponse extends jspb.Message { 
    clearWordsList(): void;
    getWordsList(): Array<TranscribeWord>;
    setWordsList(value: Array<TranscribeWord>): TranscribeWordResponse;
    addWords(value?: TranscribeWord, index?: number): TranscribeWord;
    getFirstwordindex(): number;
    setFirstwordindex(value: number): TranscribeWordResponse;
    getLastwordindex(): number;
    setLastwordindex(value: number): TranscribeWordResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranscribeWordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TranscribeWordResponse): TranscribeWordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranscribeWordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranscribeWordResponse;
    static deserializeBinaryFromReader(message: TranscribeWordResponse, reader: jspb.BinaryReader): TranscribeWordResponse;
}

export namespace TranscribeWordResponse {
    export type AsObject = {
        wordsList: Array<TranscribeWord.AsObject>,
        firstwordindex: number,
        lastwordindex: number,
    }
}

export class TranscribeResponse extends jspb.Message { 
    getAudioenergy(): number;
    setAudioenergy(value: number): TranscribeResponse;

    hasWordlist(): boolean;
    clearWordlist(): void;
    getWordlist(): TranscribeWordResponse | undefined;
    setWordlist(value?: TranscribeWordResponse): TranscribeResponse;
    getHasvoiceactivity(): boolean;
    setHasvoiceactivity(value: boolean): TranscribeResponse;

    hasPostprocessingaction(): boolean;
    clearPostprocessingaction(): void;
    getPostprocessingaction(): AudioResponsePostProcessingAction | undefined;
    setPostprocessingaction(value?: AudioResponsePostProcessingAction): TranscribeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranscribeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TranscribeResponse): TranscribeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranscribeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranscribeResponse;
    static deserializeBinaryFromReader(message: TranscribeResponse, reader: jspb.BinaryReader): TranscribeResponse;
}

export namespace TranscribeResponse {
    export type AsObject = {
        audioenergy: number,
        wordlist?: TranscribeWordResponse.AsObject,
        hasvoiceactivity: boolean,
        postprocessingaction?: AudioResponsePostProcessingAction.AsObject,
    }
}

export class SynthesizeSpeechResponse extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): AudioConfig | undefined;
    setConfig(value?: AudioConfig): SynthesizeSpeechResponse;

    hasAudiocontent(): boolean;
    clearAudiocontent(): void;
    getAudiocontent(): Uint8Array | string;
    getAudiocontent_asU8(): Uint8Array;
    getAudiocontent_asB64(): string;
    setAudiocontent(value: Uint8Array | string): SynthesizeSpeechResponse;

    getStreamingresponseCase(): SynthesizeSpeechResponse.StreamingresponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SynthesizeSpeechResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SynthesizeSpeechResponse): SynthesizeSpeechResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SynthesizeSpeechResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SynthesizeSpeechResponse;
    static deserializeBinaryFromReader(message: SynthesizeSpeechResponse, reader: jspb.BinaryReader): SynthesizeSpeechResponse;
}

export namespace SynthesizeSpeechResponse {
    export type AsObject = {
        config?: AudioConfig.AsObject,
        audiocontent: Uint8Array | string,
    }

    export enum StreamingresponseCase {
        STREAMINGRESPONSE_NOT_SET = 0,
        CONFIG = 1,
        AUDIOCONTENT = 2,
    }

}

export class CreateEnrollmentConfig extends jspb.Message { 

    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): AudioConfig | undefined;
    setAudio(value?: AudioConfig): CreateEnrollmentConfig;
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

    hasEnrollmentnumutterances(): boolean;
    clearEnrollmentnumutterances(): void;
    getEnrollmentnumutterances(): number;
    setEnrollmentnumutterances(value: number): CreateEnrollmentConfig;

    hasEnrollmentduration(): boolean;
    clearEnrollmentduration(): void;
    getEnrollmentduration(): number;
    setEnrollmentduration(value: number): CreateEnrollmentConfig;
    getReferenceid(): string;
    setReferenceid(value: string): CreateEnrollmentConfig;
    getDisableserverenrollmenttemplatestorage(): boolean;
    setDisableserverenrollmenttemplatestorage(value: boolean): CreateEnrollmentConfig;

    getEnrolllengthCase(): CreateEnrollmentConfig.EnrolllengthCase;

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
        audio?: AudioConfig.AsObject,
        userid: string,
        deviceid: string,
        modelname: string,
        description: string,
        islivenessenabled: boolean,
        enrollmentnumutterances: number,
        enrollmentduration: number,
        referenceid: string,
        disableserverenrollmenttemplatestorage: boolean,
    }

    export enum EnrolllengthCase {
        ENROLLLENGTH_NOT_SET = 0,
        ENROLLMENTNUMUTTERANCES = 7,
        ENROLLMENTDURATION = 8,
    }

}

export class AuthenticateConfig extends jspb.Message { 

    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): AudioConfig | undefined;
    setAudio(value?: AudioConfig): AuthenticateConfig;

    hasEnrollmentid(): boolean;
    clearEnrollmentid(): void;
    getEnrollmentid(): string;
    setEnrollmentid(value: string): AuthenticateConfig;

    hasEnrollmentgroupid(): boolean;
    clearEnrollmentgroupid(): void;
    getEnrollmentgroupid(): string;
    setEnrollmentgroupid(value: string): AuthenticateConfig;
    getDoincludetoken(): boolean;
    setDoincludetoken(value: boolean): AuthenticateConfig;
    getSensitivity(): ThresholdSensitivity;
    setSensitivity(value: ThresholdSensitivity): AuthenticateConfig;
    getSecurity(): AuthenticateConfig.ThresholdSecurity;
    setSecurity(value: AuthenticateConfig.ThresholdSecurity): AuthenticateConfig;
    getIslivenessenabled(): boolean;
    setIslivenessenabled(value: boolean): AuthenticateConfig;
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
        audio?: AudioConfig.AsObject,
        enrollmentid: string,
        enrollmentgroupid: string,
        doincludetoken: boolean,
        sensitivity: ThresholdSensitivity,
        security: AuthenticateConfig.ThresholdSecurity,
        islivenessenabled: boolean,
        enrollmenttoken: Uint8Array | string,
    }

    export enum ThresholdSecurity {
    HIGH = 0,
    LOW = 1,
    }


    export enum AuthidCase {
        AUTHID_NOT_SET = 0,
        ENROLLMENTID = 2,
        ENROLLMENTGROUPID = 3,
    }

}

export class ValidateEventConfig extends jspb.Message { 

    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): AudioConfig | undefined;
    setAudio(value?: AudioConfig): ValidateEventConfig;
    getModelname(): string;
    setModelname(value: string): ValidateEventConfig;
    getUserid(): string;
    setUserid(value: string): ValidateEventConfig;
    getSensitivity(): ThresholdSensitivity;
    setSensitivity(value: ThresholdSensitivity): ValidateEventConfig;
    getTopn(): number;
    setTopn(value: number): ValidateEventConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateEventConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateEventConfig): ValidateEventConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateEventConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateEventConfig;
    static deserializeBinaryFromReader(message: ValidateEventConfig, reader: jspb.BinaryReader): ValidateEventConfig;
}

export namespace ValidateEventConfig {
    export type AsObject = {
        audio?: AudioConfig.AsObject,
        modelname: string,
        userid: string,
        sensitivity: ThresholdSensitivity,
        topn: number,
    }
}

export class CreateEnrollmentEventConfig extends jspb.Message { 

    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): AudioConfig | undefined;
    setAudio(value?: AudioConfig): CreateEnrollmentEventConfig;
    getUserid(): string;
    setUserid(value: string): CreateEnrollmentEventConfig;
    getModelname(): string;
    setModelname(value: string): CreateEnrollmentEventConfig;
    getDescription(): string;
    setDescription(value: string): CreateEnrollmentEventConfig;

    hasEnrollmentnumutterances(): boolean;
    clearEnrollmentnumutterances(): void;
    getEnrollmentnumutterances(): number;
    setEnrollmentnumutterances(value: number): CreateEnrollmentEventConfig;

    hasEnrollmentduration(): boolean;
    clearEnrollmentduration(): void;
    getEnrollmentduration(): number;
    setEnrollmentduration(value: number): CreateEnrollmentEventConfig;
    getReferenceid(): string;
    setReferenceid(value: string): CreateEnrollmentEventConfig;

    getEnrolllengthCase(): CreateEnrollmentEventConfig.EnrolllengthCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEnrollmentEventConfig.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEnrollmentEventConfig): CreateEnrollmentEventConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEnrollmentEventConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEnrollmentEventConfig;
    static deserializeBinaryFromReader(message: CreateEnrollmentEventConfig, reader: jspb.BinaryReader): CreateEnrollmentEventConfig;
}

export namespace CreateEnrollmentEventConfig {
    export type AsObject = {
        audio?: AudioConfig.AsObject,
        userid: string,
        modelname: string,
        description: string,
        enrollmentnumutterances: number,
        enrollmentduration: number,
        referenceid: string,
    }

    export enum EnrolllengthCase {
        ENROLLLENGTH_NOT_SET = 0,
        ENROLLMENTNUMUTTERANCES = 5,
        ENROLLMENTDURATION = 6,
    }

}

export class ValidateEnrolledEventConfig extends jspb.Message { 

    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): AudioConfig | undefined;
    setAudio(value?: AudioConfig): ValidateEnrolledEventConfig;

    hasEnrollmentid(): boolean;
    clearEnrollmentid(): void;
    getEnrollmentid(): string;
    setEnrollmentid(value: string): ValidateEnrolledEventConfig;

    hasEnrollmentgroupid(): boolean;
    clearEnrollmentgroupid(): void;
    getEnrollmentgroupid(): string;
    setEnrollmentgroupid(value: string): ValidateEnrolledEventConfig;
    getSensitivity(): ThresholdSensitivity;
    setSensitivity(value: ThresholdSensitivity): ValidateEnrolledEventConfig;
    getEnrollmenttoken(): Uint8Array | string;
    getEnrollmenttoken_asU8(): Uint8Array;
    getEnrollmenttoken_asB64(): string;
    setEnrollmenttoken(value: Uint8Array | string): ValidateEnrolledEventConfig;

    getAuthidCase(): ValidateEnrolledEventConfig.AuthidCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateEnrolledEventConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateEnrolledEventConfig): ValidateEnrolledEventConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateEnrolledEventConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateEnrolledEventConfig;
    static deserializeBinaryFromReader(message: ValidateEnrolledEventConfig, reader: jspb.BinaryReader): ValidateEnrolledEventConfig;
}

export namespace ValidateEnrolledEventConfig {
    export type AsObject = {
        audio?: AudioConfig.AsObject,
        enrollmentid: string,
        enrollmentgroupid: string,
        sensitivity: ThresholdSensitivity,
        enrollmenttoken: Uint8Array | string,
    }

    export enum AuthidCase {
        AUTHID_NOT_SET = 0,
        ENROLLMENTID = 2,
        ENROLLMENTGROUPID = 3,
    }

}

export class CustomVocabularyWords extends jspb.Message { 
    clearWordsList(): void;
    getWordsList(): Array<string>;
    setWordsList(value: Array<string>): CustomVocabularyWords;
    addWords(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomVocabularyWords.AsObject;
    static toObject(includeInstance: boolean, msg: CustomVocabularyWords): CustomVocabularyWords.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomVocabularyWords, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomVocabularyWords;
    static deserializeBinaryFromReader(message: CustomVocabularyWords, reader: jspb.BinaryReader): CustomVocabularyWords;
}

export namespace CustomVocabularyWords {
    export type AsObject = {
        wordsList: Array<string>,
    }
}

export class TranscribeEventConfig extends jspb.Message { 
    getModelname(): string;
    setModelname(value: string): TranscribeEventConfig;
    getSensitivity(): ThresholdSensitivity;
    setSensitivity(value: ThresholdSensitivity): TranscribeEventConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranscribeEventConfig.AsObject;
    static toObject(includeInstance: boolean, msg: TranscribeEventConfig): TranscribeEventConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranscribeEventConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranscribeEventConfig;
    static deserializeBinaryFromReader(message: TranscribeEventConfig, reader: jspb.BinaryReader): TranscribeEventConfig;
}

export namespace TranscribeEventConfig {
    export type AsObject = {
        modelname: string,
        sensitivity: ThresholdSensitivity,
    }
}

export class TranscribeConfig extends jspb.Message { 

    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): AudioConfig | undefined;
    setAudio(value?: AudioConfig): TranscribeConfig;
    getModelname(): string;
    setModelname(value: string): TranscribeConfig;
    getUserid(): string;
    setUserid(value: string): TranscribeConfig;
    getEnablepunctuationcapitalization(): boolean;
    setEnablepunctuationcapitalization(value: boolean): TranscribeConfig;
    getDosingleutterance(): boolean;
    setDosingleutterance(value: boolean): TranscribeConfig;
    getVadsensitivity(): ThresholdSensitivity;
    setVadsensitivity(value: ThresholdSensitivity): TranscribeConfig;
    getVadduration(): number;
    setVadduration(value: number): TranscribeConfig;
    getCustomvocabrewardthreshold(): ThresholdSensitivity;
    setCustomvocabrewardthreshold(value: ThresholdSensitivity): TranscribeConfig;
    getCustomvocabularyid(): string;
    setCustomvocabularyid(value: string): TranscribeConfig;

    hasCustomwordlist(): boolean;
    clearCustomwordlist(): void;
    getCustomwordlist(): CustomVocabularyWords | undefined;
    setCustomwordlist(value?: CustomVocabularyWords): TranscribeConfig;
    getDoofflinemode(): boolean;
    setDoofflinemode(value: boolean): TranscribeConfig;

    hasWakewordconfig(): boolean;
    clearWakewordconfig(): void;
    getWakewordconfig(): TranscribeEventConfig | undefined;
    setWakewordconfig(value?: TranscribeEventConfig): TranscribeConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranscribeConfig.AsObject;
    static toObject(includeInstance: boolean, msg: TranscribeConfig): TranscribeConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranscribeConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranscribeConfig;
    static deserializeBinaryFromReader(message: TranscribeConfig, reader: jspb.BinaryReader): TranscribeConfig;
}

export namespace TranscribeConfig {
    export type AsObject = {
        audio?: AudioConfig.AsObject,
        modelname: string,
        userid: string,
        enablepunctuationcapitalization: boolean,
        dosingleutterance: boolean,
        vadsensitivity: ThresholdSensitivity,
        vadduration: number,
        customvocabrewardthreshold: ThresholdSensitivity,
        customvocabularyid: string,
        customwordlist?: CustomVocabularyWords.AsObject,
        doofflinemode: boolean,
        wakewordconfig?: TranscribeEventConfig.AsObject,
    }
}

export class AudioConfig extends jspb.Message { 
    getEncoding(): AudioConfig.AudioEncoding;
    setEncoding(value: AudioConfig.AudioEncoding): AudioConfig;
    getSampleratehertz(): number;
    setSampleratehertz(value: number): AudioConfig;
    getAudiochannelcount(): number;
    setAudiochannelcount(value: number): AudioConfig;
    getLanguagecode(): string;
    setLanguagecode(value: string): AudioConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AudioConfig): AudioConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioConfig;
    static deserializeBinaryFromReader(message: AudioConfig, reader: jspb.BinaryReader): AudioConfig;
}

export namespace AudioConfig {
    export type AsObject = {
        encoding: AudioConfig.AudioEncoding,
        sampleratehertz: number,
        audiochannelcount: number,
        languagecode: string,
    }

    export enum AudioEncoding {
    LINEAR16 = 0,
    FLAC = 1,
    MULAW = 2,
    }

}

export class VoiceSynthesisConfig extends jspb.Message { 
    getModelname(): string;
    setModelname(value: string): VoiceSynthesisConfig;
    getSampleratehertz(): number;
    setSampleratehertz(value: number): VoiceSynthesisConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoiceSynthesisConfig.AsObject;
    static toObject(includeInstance: boolean, msg: VoiceSynthesisConfig): VoiceSynthesisConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoiceSynthesisConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoiceSynthesisConfig;
    static deserializeBinaryFromReader(message: VoiceSynthesisConfig, reader: jspb.BinaryReader): VoiceSynthesisConfig;
}

export namespace VoiceSynthesisConfig {
    export type AsObject = {
        modelname: string,
        sampleratehertz: number,
    }
}

export enum AudioPostProcessingAction {
    NOT_SET = 0,
    FLUSH = 1,
    RESET = 2,
    FINAL = 3,
}

export enum WordState {
    WORDSTATE_PENDING = 0,
    WORDSTATE_FINAL = 1,
}

export enum ThresholdSensitivity {
    LOWEST = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    HIGHEST = 4,
}
