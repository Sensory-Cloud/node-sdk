// source: v1/audio/audio.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var validate_validate_pb = require('../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var common_common_pb = require('../../common/common_pb.js');
goog.object.extend(proto, common_common_pb);
goog.exportSymbol('proto.sensory.api.v1.audio.AudioConfig', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.AudioConfig.AudioEncoding', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.AudioModel', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.AudioPostProcessingAction', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.AudioRequestPostProcessingAction', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.AudioResponsePostProcessingAction', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.AuthenticateConfig', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.AuthenticateConfig.AuthidCase', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.AuthenticateConfig.ThresholdSecurity', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.AuthenticateRequest', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.AuthenticateRequest.StreamingrequestCase', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.AuthenticateResponse', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.CreateEnrolledEventRequest', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.CreateEnrolledEventRequest.StreamingrequestCase', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.CreateEnrollmentConfig', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.CreateEnrollmentConfig.EnrolllengthCase', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.CreateEnrollmentEventConfig', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.EnrolllengthCase', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.CreateEnrollmentRequest', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.CreateEnrollmentRequest.StreamingrequestCase', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.CreateEnrollmentResponse', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.CustomVocabularyWords', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.GetModelsRequest', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.GetModelsResponse', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.SoundIdTopNResponse', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.SynthesizeSpeechRequest', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.SynthesizeSpeechResponse', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.SynthesizeSpeechResponse.StreamingresponseCase', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.ThresholdSensitivity', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.TranscribeConfig', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.TranscribeEventConfig', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.TranscribeRequest', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.TranscribeRequest.StreamingrequestCase', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.TranscribeResponse', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.TranscribeWord', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.TranscribeWordResponse', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.ValidateEnrolledEventConfig', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.AuthidCase', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.ValidateEnrolledEventRequest', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.StreamingrequestCase', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.ValidateEnrolledEventResponse', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.ValidateEventConfig', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.ValidateEventRequest', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.ValidateEventRequest.StreamingrequestCase', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.ValidateEventResponse', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.VoiceSynthesisConfig', null, global);
goog.exportSymbol('proto.sensory.api.v1.audio.WordState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.GetModelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.GetModelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.GetModelsRequest.displayName = 'proto.sensory.api.v1.audio.GetModelsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.AudioModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensory.api.v1.audio.AudioModel.repeatedFields_, null);
};
goog.inherits(proto.sensory.api.v1.audio.AudioModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.AudioModel.displayName = 'proto.sensory.api.v1.audio.AudioModel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.AudioRequestPostProcessingAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.AudioRequestPostProcessingAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.displayName = 'proto.sensory.api.v1.audio.AudioRequestPostProcessingAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.AudioResponsePostProcessingAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.AudioResponsePostProcessingAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.displayName = 'proto.sensory.api.v1.audio.AudioResponsePostProcessingAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.GetModelsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensory.api.v1.audio.GetModelsResponse.repeatedFields_, null);
};
goog.inherits(proto.sensory.api.v1.audio.GetModelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.GetModelsResponse.displayName = 'proto.sensory.api.v1.audio.GetModelsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sensory.api.v1.audio.CreateEnrollmentRequest.oneofGroups_);
};
goog.inherits(proto.sensory.api.v1.audio.CreateEnrollmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.CreateEnrollmentRequest.displayName = 'proto.sensory.api.v1.audio.CreateEnrollmentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.AuthenticateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sensory.api.v1.audio.AuthenticateRequest.oneofGroups_);
};
goog.inherits(proto.sensory.api.v1.audio.AuthenticateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.AuthenticateRequest.displayName = 'proto.sensory.api.v1.audio.AuthenticateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.ValidateEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sensory.api.v1.audio.ValidateEventRequest.oneofGroups_);
};
goog.inherits(proto.sensory.api.v1.audio.ValidateEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.ValidateEventRequest.displayName = 'proto.sensory.api.v1.audio.ValidateEventRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sensory.api.v1.audio.CreateEnrolledEventRequest.oneofGroups_);
};
goog.inherits(proto.sensory.api.v1.audio.CreateEnrolledEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.CreateEnrolledEventRequest.displayName = 'proto.sensory.api.v1.audio.CreateEnrolledEventRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.oneofGroups_);
};
goog.inherits(proto.sensory.api.v1.audio.ValidateEnrolledEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.displayName = 'proto.sensory.api.v1.audio.ValidateEnrolledEventRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.TranscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sensory.api.v1.audio.TranscribeRequest.oneofGroups_);
};
goog.inherits(proto.sensory.api.v1.audio.TranscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.TranscribeRequest.displayName = 'proto.sensory.api.v1.audio.TranscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.SynthesizeSpeechRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.SynthesizeSpeechRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.SynthesizeSpeechRequest.displayName = 'proto.sensory.api.v1.audio.SynthesizeSpeechRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.CreateEnrollmentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.CreateEnrollmentResponse.displayName = 'proto.sensory.api.v1.audio.CreateEnrollmentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.AuthenticateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.AuthenticateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.AuthenticateResponse.displayName = 'proto.sensory.api.v1.audio.AuthenticateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.SoundIdTopNResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.SoundIdTopNResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.SoundIdTopNResponse.displayName = 'proto.sensory.api.v1.audio.SoundIdTopNResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.ValidateEventResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensory.api.v1.audio.ValidateEventResponse.repeatedFields_, null);
};
goog.inherits(proto.sensory.api.v1.audio.ValidateEventResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.ValidateEventResponse.displayName = 'proto.sensory.api.v1.audio.ValidateEventResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.ValidateEnrolledEventResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.displayName = 'proto.sensory.api.v1.audio.ValidateEnrolledEventResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.TranscribeWord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.TranscribeWord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.TranscribeWord.displayName = 'proto.sensory.api.v1.audio.TranscribeWord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.TranscribeWordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensory.api.v1.audio.TranscribeWordResponse.repeatedFields_, null);
};
goog.inherits(proto.sensory.api.v1.audio.TranscribeWordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.TranscribeWordResponse.displayName = 'proto.sensory.api.v1.audio.TranscribeWordResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.TranscribeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.TranscribeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.TranscribeResponse.displayName = 'proto.sensory.api.v1.audio.TranscribeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sensory.api.v1.audio.SynthesizeSpeechResponse.oneofGroups_);
};
goog.inherits(proto.sensory.api.v1.audio.SynthesizeSpeechResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.SynthesizeSpeechResponse.displayName = 'proto.sensory.api.v1.audio.SynthesizeSpeechResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sensory.api.v1.audio.CreateEnrollmentConfig.oneofGroups_);
};
goog.inherits(proto.sensory.api.v1.audio.CreateEnrollmentConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.CreateEnrollmentConfig.displayName = 'proto.sensory.api.v1.audio.CreateEnrollmentConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.AuthenticateConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sensory.api.v1.audio.AuthenticateConfig.oneofGroups_);
};
goog.inherits(proto.sensory.api.v1.audio.AuthenticateConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.AuthenticateConfig.displayName = 'proto.sensory.api.v1.audio.AuthenticateConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.ValidateEventConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.ValidateEventConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.ValidateEventConfig.displayName = 'proto.sensory.api.v1.audio.ValidateEventConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.oneofGroups_);
};
goog.inherits(proto.sensory.api.v1.audio.CreateEnrollmentEventConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.displayName = 'proto.sensory.api.v1.audio.CreateEnrollmentEventConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.oneofGroups_);
};
goog.inherits(proto.sensory.api.v1.audio.ValidateEnrolledEventConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.displayName = 'proto.sensory.api.v1.audio.ValidateEnrolledEventConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.CustomVocabularyWords = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensory.api.v1.audio.CustomVocabularyWords.repeatedFields_, null);
};
goog.inherits(proto.sensory.api.v1.audio.CustomVocabularyWords, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.CustomVocabularyWords.displayName = 'proto.sensory.api.v1.audio.CustomVocabularyWords';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.TranscribeEventConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.TranscribeEventConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.TranscribeEventConfig.displayName = 'proto.sensory.api.v1.audio.TranscribeEventConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.TranscribeConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.TranscribeConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.TranscribeConfig.displayName = 'proto.sensory.api.v1.audio.TranscribeConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.AudioConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.AudioConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.AudioConfig.displayName = 'proto.sensory.api.v1.audio.AudioConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.v1.audio.VoiceSynthesisConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.audio.VoiceSynthesisConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.audio.VoiceSynthesisConfig.displayName = 'proto.sensory.api.v1.audio.VoiceSynthesisConfig';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.GetModelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.GetModelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.GetModelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.GetModelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.GetModelsRequest}
 */
proto.sensory.api.v1.audio.GetModelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.GetModelsRequest;
  return proto.sensory.api.v1.audio.GetModelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.GetModelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.GetModelsRequest}
 */
proto.sensory.api.v1.audio.GetModelsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.GetModelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.GetModelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.GetModelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.GetModelsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensory.api.v1.audio.AudioModel.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.AudioModel.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.AudioModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.AudioModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AudioModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isenrollable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    modeltype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fixedphrase: jspb.Message.getFieldWithDefault(msg, 4, ""),
    samplerate: jspb.Message.getFieldWithDefault(msg, 5, 0),
    versionsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    technology: jspb.Message.getFieldWithDefault(msg, 7, 0),
    islivenesssupported: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.AudioModel}
 */
proto.sensory.api.v1.audio.AudioModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.AudioModel;
  return proto.sensory.api.v1.audio.AudioModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.AudioModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.AudioModel}
 */
proto.sensory.api.v1.audio.AudioModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsenrollable(value);
      break;
    case 3:
      var value = /** @type {!proto.sensory.api.common.ModelType} */ (reader.readEnum());
      msg.setModeltype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFixedphrase(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSamplerate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addVersions(value);
      break;
    case 7:
      var value = /** @type {!proto.sensory.api.common.TechnologyType} */ (reader.readEnum());
      msg.setTechnology(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIslivenesssupported(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.AudioModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.AudioModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.AudioModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AudioModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsenrollable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getModeltype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getFixedphrase();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSamplerate();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getTechnology();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getIslivenesssupported();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sensory.api.v1.audio.AudioModel.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.AudioModel} returns this
 */
proto.sensory.api.v1.audio.AudioModel.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool isEnrollable = 2;
 * @return {boolean}
 */
proto.sensory.api.v1.audio.AudioModel.prototype.getIsenrollable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sensory.api.v1.audio.AudioModel} returns this
 */
proto.sensory.api.v1.audio.AudioModel.prototype.setIsenrollable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional sensory.api.common.ModelType modelType = 3;
 * @return {!proto.sensory.api.common.ModelType}
 */
proto.sensory.api.v1.audio.AudioModel.prototype.getModeltype = function() {
  return /** @type {!proto.sensory.api.common.ModelType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.sensory.api.common.ModelType} value
 * @return {!proto.sensory.api.v1.audio.AudioModel} returns this
 */
proto.sensory.api.v1.audio.AudioModel.prototype.setModeltype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string fixedPhrase = 4;
 * @return {string}
 */
proto.sensory.api.v1.audio.AudioModel.prototype.getFixedphrase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.AudioModel} returns this
 */
proto.sensory.api.v1.audio.AudioModel.prototype.setFixedphrase = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 sampleRate = 5;
 * @return {number}
 */
proto.sensory.api.v1.audio.AudioModel.prototype.getSamplerate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.AudioModel} returns this
 */
proto.sensory.api.v1.audio.AudioModel.prototype.setSamplerate = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated string versions = 6;
 * @return {!Array<string>}
 */
proto.sensory.api.v1.audio.AudioModel.prototype.getVersionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sensory.api.v1.audio.AudioModel} returns this
 */
proto.sensory.api.v1.audio.AudioModel.prototype.setVersionsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sensory.api.v1.audio.AudioModel} returns this
 */
proto.sensory.api.v1.audio.AudioModel.prototype.addVersions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensory.api.v1.audio.AudioModel} returns this
 */
proto.sensory.api.v1.audio.AudioModel.prototype.clearVersionsList = function() {
  return this.setVersionsList([]);
};


/**
 * optional sensory.api.common.TechnologyType technology = 7;
 * @return {!proto.sensory.api.common.TechnologyType}
 */
proto.sensory.api.v1.audio.AudioModel.prototype.getTechnology = function() {
  return /** @type {!proto.sensory.api.common.TechnologyType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.sensory.api.common.TechnologyType} value
 * @return {!proto.sensory.api.v1.audio.AudioModel} returns this
 */
proto.sensory.api.v1.audio.AudioModel.prototype.setTechnology = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional bool isLivenessSupported = 8;
 * @return {boolean}
 */
proto.sensory.api.v1.audio.AudioModel.prototype.getIslivenesssupported = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sensory.api.v1.audio.AudioModel} returns this
 */
proto.sensory.api.v1.audio.AudioModel.prototype.setIslivenesssupported = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.AudioRequestPostProcessingAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    action: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.AudioRequestPostProcessingAction}
 */
proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.AudioRequestPostProcessingAction;
  return proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.AudioRequestPostProcessingAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.AudioRequestPostProcessingAction}
 */
proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionid(value);
      break;
    case 2:
      var value = /** @type {!proto.sensory.api.v1.audio.AudioPostProcessingAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.AudioRequestPostProcessingAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string actionId = 1;
 * @return {string}
 */
proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.prototype.getActionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.AudioRequestPostProcessingAction} returns this
 */
proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.prototype.setActionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AudioPostProcessingAction action = 2;
 * @return {!proto.sensory.api.v1.audio.AudioPostProcessingAction}
 */
proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.prototype.getAction = function() {
  return /** @type {!proto.sensory.api.v1.audio.AudioPostProcessingAction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.sensory.api.v1.audio.AudioPostProcessingAction} value
 * @return {!proto.sensory.api.v1.audio.AudioRequestPostProcessingAction} returns this
 */
proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.AudioResponsePostProcessingAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    action: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.AudioResponsePostProcessingAction}
 */
proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.AudioResponsePostProcessingAction;
  return proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.AudioResponsePostProcessingAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.AudioResponsePostProcessingAction}
 */
proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionid(value);
      break;
    case 2:
      var value = /** @type {!proto.sensory.api.v1.audio.AudioPostProcessingAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.AudioResponsePostProcessingAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string actionId = 1;
 * @return {string}
 */
proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.prototype.getActionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.AudioResponsePostProcessingAction} returns this
 */
proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.prototype.setActionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AudioPostProcessingAction action = 2;
 * @return {!proto.sensory.api.v1.audio.AudioPostProcessingAction}
 */
proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.prototype.getAction = function() {
  return /** @type {!proto.sensory.api.v1.audio.AudioPostProcessingAction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.sensory.api.v1.audio.AudioPostProcessingAction} value
 * @return {!proto.sensory.api.v1.audio.AudioResponsePostProcessingAction} returns this
 */
proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensory.api.v1.audio.GetModelsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.GetModelsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.GetModelsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.GetModelsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.GetModelsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    proto.sensory.api.v1.audio.AudioModel.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.GetModelsResponse}
 */
proto.sensory.api.v1.audio.GetModelsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.GetModelsResponse;
  return proto.sensory.api.v1.audio.GetModelsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.GetModelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.GetModelsResponse}
 */
proto.sensory.api.v1.audio.GetModelsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.AudioModel;
      reader.readMessage(value,proto.sensory.api.v1.audio.AudioModel.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.GetModelsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.GetModelsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.GetModelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.GetModelsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sensory.api.v1.audio.AudioModel.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AudioModel models = 1;
 * @return {!Array<!proto.sensory.api.v1.audio.AudioModel>}
 */
proto.sensory.api.v1.audio.GetModelsResponse.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.sensory.api.v1.audio.AudioModel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensory.api.v1.audio.AudioModel, 1));
};


/**
 * @param {!Array<!proto.sensory.api.v1.audio.AudioModel>} value
 * @return {!proto.sensory.api.v1.audio.GetModelsResponse} returns this
*/
proto.sensory.api.v1.audio.GetModelsResponse.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sensory.api.v1.audio.AudioModel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensory.api.v1.audio.AudioModel}
 */
proto.sensory.api.v1.audio.GetModelsResponse.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sensory.api.v1.audio.AudioModel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensory.api.v1.audio.GetModelsResponse} returns this
 */
proto.sensory.api.v1.audio.GetModelsResponse.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.StreamingrequestCase = {
  STREAMINGREQUEST_NOT_SET: 0,
  CONFIG: 1,
  AUDIOCONTENT: 2
};

/**
 * @return {proto.sensory.api.v1.audio.CreateEnrollmentRequest.StreamingrequestCase}
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.prototype.getStreamingrequestCase = function() {
  return /** @type {proto.sensory.api.v1.audio.CreateEnrollmentRequest.StreamingrequestCase} */(jspb.Message.computeOneofCase(this, proto.sensory.api.v1.audio.CreateEnrollmentRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.CreateEnrollmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.CreateEnrollmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.sensory.api.v1.audio.CreateEnrollmentConfig.toObject(includeInstance, f),
    audiocontent: msg.getAudiocontent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentRequest}
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.CreateEnrollmentRequest;
  return proto.sensory.api.v1.audio.CreateEnrollmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.CreateEnrollmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentRequest}
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.CreateEnrollmentConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.CreateEnrollmentConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAudiocontent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.CreateEnrollmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.CreateEnrollmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.audio.CreateEnrollmentConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional CreateEnrollmentConfig config = 1;
 * @return {?proto.sensory.api.v1.audio.CreateEnrollmentConfig}
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.prototype.getConfig = function() {
  return /** @type{?proto.sensory.api.v1.audio.CreateEnrollmentConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.CreateEnrollmentConfig, 1));
};


/**
 * @param {?proto.sensory.api.v1.audio.CreateEnrollmentConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentRequest} returns this
*/
proto.sensory.api.v1.audio.CreateEnrollmentRequest.prototype.setConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sensory.api.v1.audio.CreateEnrollmentRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentRequest} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes audioContent = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.prototype.getAudiocontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes audioContent = 2;
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.prototype.getAudiocontent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAudiocontent()));
};


/**
 * optional bytes audioContent = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.prototype.getAudiocontent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAudiocontent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentRequest} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.prototype.setAudiocontent = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.CreateEnrollmentRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentRequest} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.prototype.clearAudiocontent = function() {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.CreateEnrollmentRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.CreateEnrollmentRequest.prototype.hasAudiocontent = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensory.api.v1.audio.AuthenticateRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.AuthenticateRequest.StreamingrequestCase = {
  STREAMINGREQUEST_NOT_SET: 0,
  CONFIG: 1,
  AUDIOCONTENT: 2
};

/**
 * @return {proto.sensory.api.v1.audio.AuthenticateRequest.StreamingrequestCase}
 */
proto.sensory.api.v1.audio.AuthenticateRequest.prototype.getStreamingrequestCase = function() {
  return /** @type {proto.sensory.api.v1.audio.AuthenticateRequest.StreamingrequestCase} */(jspb.Message.computeOneofCase(this, proto.sensory.api.v1.audio.AuthenticateRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.AuthenticateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.AuthenticateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.AuthenticateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AuthenticateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.sensory.api.v1.audio.AuthenticateConfig.toObject(includeInstance, f),
    audiocontent: msg.getAudiocontent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.AuthenticateRequest}
 */
proto.sensory.api.v1.audio.AuthenticateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.AuthenticateRequest;
  return proto.sensory.api.v1.audio.AuthenticateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.AuthenticateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.AuthenticateRequest}
 */
proto.sensory.api.v1.audio.AuthenticateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.AuthenticateConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.AuthenticateConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAudiocontent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.AuthenticateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.AuthenticateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.AuthenticateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AuthenticateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.audio.AuthenticateConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional AuthenticateConfig config = 1;
 * @return {?proto.sensory.api.v1.audio.AuthenticateConfig}
 */
proto.sensory.api.v1.audio.AuthenticateRequest.prototype.getConfig = function() {
  return /** @type{?proto.sensory.api.v1.audio.AuthenticateConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.AuthenticateConfig, 1));
};


/**
 * @param {?proto.sensory.api.v1.audio.AuthenticateConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateRequest} returns this
*/
proto.sensory.api.v1.audio.AuthenticateRequest.prototype.setConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sensory.api.v1.audio.AuthenticateRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.AuthenticateRequest} returns this
 */
proto.sensory.api.v1.audio.AuthenticateRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.AuthenticateRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes audioContent = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.AuthenticateRequest.prototype.getAudiocontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes audioContent = 2;
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {string}
 */
proto.sensory.api.v1.audio.AuthenticateRequest.prototype.getAudiocontent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAudiocontent()));
};


/**
 * optional bytes audioContent = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.AuthenticateRequest.prototype.getAudiocontent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAudiocontent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateRequest} returns this
 */
proto.sensory.api.v1.audio.AuthenticateRequest.prototype.setAudiocontent = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.AuthenticateRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.AuthenticateRequest} returns this
 */
proto.sensory.api.v1.audio.AuthenticateRequest.prototype.clearAudiocontent = function() {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.AuthenticateRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.AuthenticateRequest.prototype.hasAudiocontent = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensory.api.v1.audio.ValidateEventRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.StreamingrequestCase = {
  STREAMINGREQUEST_NOT_SET: 0,
  CONFIG: 1,
  AUDIOCONTENT: 2
};

/**
 * @return {proto.sensory.api.v1.audio.ValidateEventRequest.StreamingrequestCase}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.getStreamingrequestCase = function() {
  return /** @type {proto.sensory.api.v1.audio.ValidateEventRequest.StreamingrequestCase} */(jspb.Message.computeOneofCase(this, proto.sensory.api.v1.audio.ValidateEventRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.ValidateEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.ValidateEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.ValidateEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.sensory.api.v1.audio.ValidateEventConfig.toObject(includeInstance, f),
    audiocontent: msg.getAudiocontent_asB64(),
    postprocessingaction: (f = msg.getPostprocessingaction()) && proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.ValidateEventRequest}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.ValidateEventRequest;
  return proto.sensory.api.v1.audio.ValidateEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.ValidateEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.ValidateEventRequest}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.ValidateEventConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.ValidateEventConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAudiocontent(value);
      break;
    case 10:
      var value = new proto.sensory.api.v1.audio.AudioRequestPostProcessingAction;
      reader.readMessage(value,proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.deserializeBinaryFromReader);
      msg.setPostprocessingaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.ValidateEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.ValidateEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.ValidateEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.audio.ValidateEventConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPostprocessingaction();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional ValidateEventConfig config = 1;
 * @return {?proto.sensory.api.v1.audio.ValidateEventConfig}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.getConfig = function() {
  return /** @type{?proto.sensory.api.v1.audio.ValidateEventConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.ValidateEventConfig, 1));
};


/**
 * @param {?proto.sensory.api.v1.audio.ValidateEventConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventRequest} returns this
*/
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.setConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sensory.api.v1.audio.ValidateEventRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.ValidateEventRequest} returns this
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes audioContent = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.getAudiocontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes audioContent = 2;
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.getAudiocontent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAudiocontent()));
};


/**
 * optional bytes audioContent = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.getAudiocontent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAudiocontent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventRequest} returns this
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.setAudiocontent = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.ValidateEventRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.ValidateEventRequest} returns this
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.clearAudiocontent = function() {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.ValidateEventRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.hasAudiocontent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AudioRequestPostProcessingAction postProcessingAction = 10;
 * @return {?proto.sensory.api.v1.audio.AudioRequestPostProcessingAction}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.getPostprocessingaction = function() {
  return /** @type{?proto.sensory.api.v1.audio.AudioRequestPostProcessingAction} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.AudioRequestPostProcessingAction, 10));
};


/**
 * @param {?proto.sensory.api.v1.audio.AudioRequestPostProcessingAction|undefined} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventRequest} returns this
*/
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.setPostprocessingaction = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.ValidateEventRequest} returns this
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.clearPostprocessingaction = function() {
  return this.setPostprocessingaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.ValidateEventRequest.prototype.hasPostprocessingaction = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.StreamingrequestCase = {
  STREAMINGREQUEST_NOT_SET: 0,
  CONFIG: 1,
  AUDIOCONTENT: 2
};

/**
 * @return {proto.sensory.api.v1.audio.CreateEnrolledEventRequest.StreamingrequestCase}
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.prototype.getStreamingrequestCase = function() {
  return /** @type {proto.sensory.api.v1.audio.CreateEnrolledEventRequest.StreamingrequestCase} */(jspb.Message.computeOneofCase(this, proto.sensory.api.v1.audio.CreateEnrolledEventRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.CreateEnrolledEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.CreateEnrolledEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.toObject(includeInstance, f),
    audiocontent: msg.getAudiocontent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.CreateEnrolledEventRequest}
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.CreateEnrolledEventRequest;
  return proto.sensory.api.v1.audio.CreateEnrolledEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.CreateEnrolledEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.CreateEnrolledEventRequest}
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.CreateEnrollmentEventConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAudiocontent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.CreateEnrolledEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.CreateEnrolledEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional CreateEnrollmentEventConfig config = 1;
 * @return {?proto.sensory.api.v1.audio.CreateEnrollmentEventConfig}
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.prototype.getConfig = function() {
  return /** @type{?proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.CreateEnrollmentEventConfig, 1));
};


/**
 * @param {?proto.sensory.api.v1.audio.CreateEnrollmentEventConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrolledEventRequest} returns this
*/
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.prototype.setConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sensory.api.v1.audio.CreateEnrolledEventRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.CreateEnrolledEventRequest} returns this
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes audioContent = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.prototype.getAudiocontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes audioContent = 2;
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.prototype.getAudiocontent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAudiocontent()));
};


/**
 * optional bytes audioContent = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.prototype.getAudiocontent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAudiocontent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrolledEventRequest} returns this
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.prototype.setAudiocontent = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.CreateEnrolledEventRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.CreateEnrolledEventRequest} returns this
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.prototype.clearAudiocontent = function() {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.CreateEnrolledEventRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.CreateEnrolledEventRequest.prototype.hasAudiocontent = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.StreamingrequestCase = {
  STREAMINGREQUEST_NOT_SET: 0,
  CONFIG: 1,
  AUDIOCONTENT: 2
};

/**
 * @return {proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.StreamingrequestCase}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.prototype.getStreamingrequestCase = function() {
  return /** @type {proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.StreamingrequestCase} */(jspb.Message.computeOneofCase(this, proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.ValidateEnrolledEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.toObject(includeInstance, f),
    audiocontent: msg.getAudiocontent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventRequest}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.ValidateEnrolledEventRequest;
  return proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.ValidateEnrolledEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventRequest}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.ValidateEnrolledEventConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAudiocontent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.ValidateEnrolledEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional ValidateEnrolledEventConfig config = 1;
 * @return {?proto.sensory.api.v1.audio.ValidateEnrolledEventConfig}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.prototype.getConfig = function() {
  return /** @type{?proto.sensory.api.v1.audio.ValidateEnrolledEventConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.ValidateEnrolledEventConfig, 1));
};


/**
 * @param {?proto.sensory.api.v1.audio.ValidateEnrolledEventConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventRequest} returns this
*/
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.prototype.setConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventRequest} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes audioContent = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.prototype.getAudiocontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes audioContent = 2;
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.prototype.getAudiocontent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAudiocontent()));
};


/**
 * optional bytes audioContent = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.prototype.getAudiocontent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAudiocontent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventRequest} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.prototype.setAudiocontent = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventRequest} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.prototype.clearAudiocontent = function() {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventRequest.prototype.hasAudiocontent = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensory.api.v1.audio.TranscribeRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.TranscribeRequest.StreamingrequestCase = {
  STREAMINGREQUEST_NOT_SET: 0,
  CONFIG: 1,
  AUDIOCONTENT: 2
};

/**
 * @return {proto.sensory.api.v1.audio.TranscribeRequest.StreamingrequestCase}
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.getStreamingrequestCase = function() {
  return /** @type {proto.sensory.api.v1.audio.TranscribeRequest.StreamingrequestCase} */(jspb.Message.computeOneofCase(this, proto.sensory.api.v1.audio.TranscribeRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.TranscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.TranscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.TranscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.sensory.api.v1.audio.TranscribeConfig.toObject(includeInstance, f),
    audiocontent: msg.getAudiocontent_asB64(),
    postprocessingaction: (f = msg.getPostprocessingaction()) && proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.TranscribeRequest}
 */
proto.sensory.api.v1.audio.TranscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.TranscribeRequest;
  return proto.sensory.api.v1.audio.TranscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.TranscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.TranscribeRequest}
 */
proto.sensory.api.v1.audio.TranscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.TranscribeConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.TranscribeConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAudiocontent(value);
      break;
    case 10:
      var value = new proto.sensory.api.v1.audio.AudioRequestPostProcessingAction;
      reader.readMessage(value,proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.deserializeBinaryFromReader);
      msg.setPostprocessingaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.TranscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.TranscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.TranscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.audio.TranscribeConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPostprocessingaction();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sensory.api.v1.audio.AudioRequestPostProcessingAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional TranscribeConfig config = 1;
 * @return {?proto.sensory.api.v1.audio.TranscribeConfig}
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.getConfig = function() {
  return /** @type{?proto.sensory.api.v1.audio.TranscribeConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.TranscribeConfig, 1));
};


/**
 * @param {?proto.sensory.api.v1.audio.TranscribeConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.TranscribeRequest} returns this
*/
proto.sensory.api.v1.audio.TranscribeRequest.prototype.setConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sensory.api.v1.audio.TranscribeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.TranscribeRequest} returns this
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes audioContent = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.getAudiocontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes audioContent = 2;
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {string}
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.getAudiocontent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAudiocontent()));
};


/**
 * optional bytes audioContent = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.getAudiocontent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAudiocontent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sensory.api.v1.audio.TranscribeRequest} returns this
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.setAudiocontent = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.TranscribeRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.TranscribeRequest} returns this
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.clearAudiocontent = function() {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.TranscribeRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.hasAudiocontent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AudioRequestPostProcessingAction postProcessingAction = 10;
 * @return {?proto.sensory.api.v1.audio.AudioRequestPostProcessingAction}
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.getPostprocessingaction = function() {
  return /** @type{?proto.sensory.api.v1.audio.AudioRequestPostProcessingAction} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.AudioRequestPostProcessingAction, 10));
};


/**
 * @param {?proto.sensory.api.v1.audio.AudioRequestPostProcessingAction|undefined} value
 * @return {!proto.sensory.api.v1.audio.TranscribeRequest} returns this
*/
proto.sensory.api.v1.audio.TranscribeRequest.prototype.setPostprocessingaction = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.TranscribeRequest} returns this
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.clearPostprocessingaction = function() {
  return this.setPostprocessingaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.TranscribeRequest.prototype.hasPostprocessingaction = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.SynthesizeSpeechRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.SynthesizeSpeechRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.SynthesizeSpeechRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    phrase: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && proto.sensory.api.v1.audio.VoiceSynthesisConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.SynthesizeSpeechRequest}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.SynthesizeSpeechRequest;
  return proto.sensory.api.v1.audio.SynthesizeSpeechRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.SynthesizeSpeechRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.SynthesizeSpeechRequest}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhrase(value);
      break;
    case 2:
      var value = new proto.sensory.api.v1.audio.VoiceSynthesisConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.VoiceSynthesisConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.SynthesizeSpeechRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.SynthesizeSpeechRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.SynthesizeSpeechRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhrase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sensory.api.v1.audio.VoiceSynthesisConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string phrase = 1;
 * @return {string}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechRequest.prototype.getPhrase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.SynthesizeSpeechRequest} returns this
 */
proto.sensory.api.v1.audio.SynthesizeSpeechRequest.prototype.setPhrase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional VoiceSynthesisConfig config = 2;
 * @return {?proto.sensory.api.v1.audio.VoiceSynthesisConfig}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechRequest.prototype.getConfig = function() {
  return /** @type{?proto.sensory.api.v1.audio.VoiceSynthesisConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.VoiceSynthesisConfig, 2));
};


/**
 * @param {?proto.sensory.api.v1.audio.VoiceSynthesisConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.SynthesizeSpeechRequest} returns this
*/
proto.sensory.api.v1.audio.SynthesizeSpeechRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.SynthesizeSpeechRequest} returns this
 */
proto.sensory.api.v1.audio.SynthesizeSpeechRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.CreateEnrollmentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.CreateEnrollmentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    percentcomplete: jspb.Message.getFieldWithDefault(msg, 1, 0),
    audioenergy: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    enrollmentid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    modelname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    modelversion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    modelprompt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    percentsegmentcomplete: jspb.Message.getFieldWithDefault(msg, 7, 0),
    enrollmenttoken: (f = msg.getEnrollmenttoken()) && common_common_pb.EnrollmentToken.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentResponse}
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.CreateEnrollmentResponse;
  return proto.sensory.api.v1.audio.CreateEnrollmentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.CreateEnrollmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentResponse}
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPercentcomplete(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAudioenergy(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnrollmentid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelversion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelprompt(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPercentsegmentcomplete(value);
      break;
    case 8:
      var value = new common_common_pb.EnrollmentToken;
      reader.readMessage(value,common_common_pb.EnrollmentToken.deserializeBinaryFromReader);
      msg.setEnrollmenttoken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.CreateEnrollmentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.CreateEnrollmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPercentcomplete();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAudioenergy();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getEnrollmentid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getModelname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getModelversion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getModelprompt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPercentsegmentcomplete();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getEnrollmenttoken();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      common_common_pb.EnrollmentToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 percentComplete = 1;
 * @return {number}
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.getPercentcomplete = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentResponse} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.setPercentcomplete = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float audioEnergy = 2;
 * @return {number}
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.getAudioenergy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentResponse} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.setAudioenergy = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string enrollmentId = 3;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.getEnrollmentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentResponse} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.setEnrollmentid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string modelName = 4;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentResponse} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.setModelname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string modelVersion = 5;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.getModelversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentResponse} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.setModelversion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string modelPrompt = 6;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.getModelprompt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentResponse} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.setModelprompt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 percentSegmentComplete = 7;
 * @return {number}
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.getPercentsegmentcomplete = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentResponse} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.setPercentsegmentcomplete = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional sensory.api.common.EnrollmentToken enrollmentToken = 8;
 * @return {?proto.sensory.api.common.EnrollmentToken}
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.getEnrollmenttoken = function() {
  return /** @type{?proto.sensory.api.common.EnrollmentToken} */ (
    jspb.Message.getWrapperField(this, common_common_pb.EnrollmentToken, 8));
};


/**
 * @param {?proto.sensory.api.common.EnrollmentToken|undefined} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentResponse} returns this
*/
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.setEnrollmenttoken = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentResponse} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.clearEnrollmenttoken = function() {
  return this.setEnrollmenttoken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.CreateEnrollmentResponse.prototype.hasEnrollmenttoken = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.AuthenticateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.AuthenticateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AuthenticateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    audioenergy: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    token: (f = msg.getToken()) && common_common_pb.TokenResponse.toObject(includeInstance, f),
    userid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    enrollmentid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    modelprompt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    percentsegmentcomplete: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.AuthenticateResponse}
 */
proto.sensory.api.v1.audio.AuthenticateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.AuthenticateResponse;
  return proto.sensory.api.v1.audio.AuthenticateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.AuthenticateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.AuthenticateResponse}
 */
proto.sensory.api.v1.audio.AuthenticateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAudioenergy(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new common_common_pb.TokenResponse;
      reader.readMessage(value,common_common_pb.TokenResponse.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnrollmentid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelprompt(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPercentsegmentcomplete(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.AuthenticateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.AuthenticateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AuthenticateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioenergy();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_common_pb.TokenResponse.serializeBinaryToWriter
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEnrollmentid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getModelprompt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPercentsegmentcomplete();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional float audioEnergy = 1;
 * @return {number}
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.getAudioenergy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateResponse} returns this
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.setAudioenergy = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateResponse} returns this
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional sensory.api.common.TokenResponse token = 3;
 * @return {?proto.sensory.api.common.TokenResponse}
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.getToken = function() {
  return /** @type{?proto.sensory.api.common.TokenResponse} */ (
    jspb.Message.getWrapperField(this, common_common_pb.TokenResponse, 3));
};


/**
 * @param {?proto.sensory.api.common.TokenResponse|undefined} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateResponse} returns this
*/
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.AuthenticateResponse} returns this
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.hasToken = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string userId = 4;
 * @return {string}
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateResponse} returns this
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string enrollmentId = 5;
 * @return {string}
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.getEnrollmentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateResponse} returns this
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.setEnrollmentid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string modelPrompt = 6;
 * @return {string}
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.getModelprompt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateResponse} returns this
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.setModelprompt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 percentSegmentComplete = 7;
 * @return {number}
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.getPercentsegmentcomplete = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateResponse} returns this
 */
proto.sensory.api.v1.audio.AuthenticateResponse.prototype.setPercentsegmentcomplete = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.SoundIdTopNResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.SoundIdTopNResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.SoundIdTopNResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.SoundIdTopNResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    logitscore: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    probabilityscore: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.SoundIdTopNResponse}
 */
proto.sensory.api.v1.audio.SoundIdTopNResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.SoundIdTopNResponse;
  return proto.sensory.api.v1.audio.SoundIdTopNResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.SoundIdTopNResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.SoundIdTopNResponse}
 */
proto.sensory.api.v1.audio.SoundIdTopNResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResultid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLogitscore(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProbabilityscore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.SoundIdTopNResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.SoundIdTopNResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.SoundIdTopNResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.SoundIdTopNResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLogitscore();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getProbabilityscore();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional string resultId = 1;
 * @return {string}
 */
proto.sensory.api.v1.audio.SoundIdTopNResponse.prototype.getResultid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.SoundIdTopNResponse} returns this
 */
proto.sensory.api.v1.audio.SoundIdTopNResponse.prototype.setResultid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float logitScore = 2;
 * @return {number}
 */
proto.sensory.api.v1.audio.SoundIdTopNResponse.prototype.getLogitscore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.SoundIdTopNResponse} returns this
 */
proto.sensory.api.v1.audio.SoundIdTopNResponse.prototype.setLogitscore = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float probabilityScore = 3;
 * @return {number}
 */
proto.sensory.api.v1.audio.SoundIdTopNResponse.prototype.getProbabilityscore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.SoundIdTopNResponse} returns this
 */
proto.sensory.api.v1.audio.SoundIdTopNResponse.prototype.setProbabilityscore = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensory.api.v1.audio.ValidateEventResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.ValidateEventResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.ValidateEventResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.ValidateEventResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    audioenergy: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    resultid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    score: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    topnresponseList: jspb.Message.toObjectList(msg.getTopnresponseList(),
    proto.sensory.api.v1.audio.SoundIdTopNResponse.toObject, includeInstance),
    resultstarttime: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    resultendtime: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    postprocessingaction: (f = msg.getPostprocessingaction()) && proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.ValidateEventResponse}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.ValidateEventResponse;
  return proto.sensory.api.v1.audio.ValidateEventResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.ValidateEventResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.ValidateEventResponse}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAudioenergy(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResultid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setScore(value);
      break;
    case 5:
      var value = new proto.sensory.api.v1.audio.SoundIdTopNResponse;
      reader.readMessage(value,proto.sensory.api.v1.audio.SoundIdTopNResponse.deserializeBinaryFromReader);
      msg.addTopnresponse(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setResultstarttime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setResultendtime(value);
      break;
    case 10:
      var value = new proto.sensory.api.v1.audio.AudioResponsePostProcessingAction;
      reader.readMessage(value,proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.deserializeBinaryFromReader);
      msg.setPostprocessingaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.ValidateEventResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.ValidateEventResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.ValidateEventResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioenergy();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getResultid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getTopnresponseList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.sensory.api.v1.audio.SoundIdTopNResponse.serializeBinaryToWriter
    );
  }
  f = message.getResultstarttime();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getResultendtime();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getPostprocessingaction();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional float audioEnergy = 1;
 * @return {number}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.getAudioenergy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventResponse} returns this
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.setAudioenergy = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventResponse} returns this
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string resultId = 3;
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.getResultid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventResponse} returns this
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.setResultid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional float score = 4;
 * @return {number}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventResponse} returns this
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated SoundIdTopNResponse topNResponse = 5;
 * @return {!Array<!proto.sensory.api.v1.audio.SoundIdTopNResponse>}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.getTopnresponseList = function() {
  return /** @type{!Array<!proto.sensory.api.v1.audio.SoundIdTopNResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensory.api.v1.audio.SoundIdTopNResponse, 5));
};


/**
 * @param {!Array<!proto.sensory.api.v1.audio.SoundIdTopNResponse>} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventResponse} returns this
*/
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.setTopnresponseList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.sensory.api.v1.audio.SoundIdTopNResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensory.api.v1.audio.SoundIdTopNResponse}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.addTopnresponse = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.sensory.api.v1.audio.SoundIdTopNResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensory.api.v1.audio.ValidateEventResponse} returns this
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.clearTopnresponseList = function() {
  return this.setTopnresponseList([]);
};


/**
 * optional float ResultStartTime = 6;
 * @return {number}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.getResultstarttime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventResponse} returns this
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.setResultstarttime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float ResultEndTime = 7;
 * @return {number}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.getResultendtime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventResponse} returns this
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.setResultendtime = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional AudioResponsePostProcessingAction postProcessingAction = 10;
 * @return {?proto.sensory.api.v1.audio.AudioResponsePostProcessingAction}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.getPostprocessingaction = function() {
  return /** @type{?proto.sensory.api.v1.audio.AudioResponsePostProcessingAction} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.AudioResponsePostProcessingAction, 10));
};


/**
 * @param {?proto.sensory.api.v1.audio.AudioResponsePostProcessingAction|undefined} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventResponse} returns this
*/
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.setPostprocessingaction = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.ValidateEventResponse} returns this
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.clearPostprocessingaction = function() {
  return this.setPostprocessingaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.ValidateEventResponse.prototype.hasPostprocessingaction = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.ValidateEnrolledEventResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    audioenergy: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    enrollmentid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    modelprompt: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventResponse}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.ValidateEnrolledEventResponse;
  return proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.ValidateEnrolledEventResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventResponse}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAudioenergy(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnrollmentid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelprompt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.ValidateEnrolledEventResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioenergy();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getEnrollmentid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getModelprompt();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional float audioEnergy = 1;
 * @return {number}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.prototype.getAudioenergy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventResponse} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.prototype.setAudioenergy = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventResponse} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string enrollmentId = 3;
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.prototype.getEnrollmentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventResponse} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.prototype.setEnrollmentid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string userId = 4;
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventResponse} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string modelPrompt = 5;
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.prototype.getModelprompt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventResponse} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventResponse.prototype.setModelprompt = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.TranscribeWord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.TranscribeWord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.TranscribeWord.toObject = function(includeInstance, msg) {
  var f, obj = {
    begintimems: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endtimems: jspb.Message.getFieldWithDefault(msg, 2, 0),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    wordstate: jspb.Message.getFieldWithDefault(msg, 4, 0),
    wordindex: jspb.Message.getFieldWithDefault(msg, 5, 0),
    word: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.TranscribeWord}
 */
proto.sensory.api.v1.audio.TranscribeWord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.TranscribeWord;
  return proto.sensory.api.v1.audio.TranscribeWord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.TranscribeWord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.TranscribeWord}
 */
proto.sensory.api.v1.audio.TranscribeWord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBegintimems(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEndtimems(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
      break;
    case 4:
      var value = /** @type {!proto.sensory.api.v1.audio.WordState} */ (reader.readEnum());
      msg.setWordstate(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWordindex(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWord(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.TranscribeWord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.TranscribeWord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.TranscribeWord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBegintimems();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEndtimems();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getWordstate();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getWordindex();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getWord();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional uint64 begintimeMs = 1;
 * @return {number}
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.getBegintimems = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.TranscribeWord} returns this
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.setBegintimems = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 endtimeMs = 2;
 * @return {number}
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.getEndtimems = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.TranscribeWord} returns this
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.setEndtimems = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional float confidence = 3;
 * @return {number}
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.TranscribeWord} returns this
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.setConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional WordState wordState = 4;
 * @return {!proto.sensory.api.v1.audio.WordState}
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.getWordstate = function() {
  return /** @type {!proto.sensory.api.v1.audio.WordState} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.sensory.api.v1.audio.WordState} value
 * @return {!proto.sensory.api.v1.audio.TranscribeWord} returns this
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.setWordstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional uint64 wordIndex = 5;
 * @return {number}
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.getWordindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.TranscribeWord} returns this
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.setWordindex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string word = 6;
 * @return {string}
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.getWord = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.TranscribeWord} returns this
 */
proto.sensory.api.v1.audio.TranscribeWord.prototype.setWord = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.TranscribeWordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.TranscribeWordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    wordsList: jspb.Message.toObjectList(msg.getWordsList(),
    proto.sensory.api.v1.audio.TranscribeWord.toObject, includeInstance),
    firstwordindex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lastwordindex: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.TranscribeWordResponse}
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.TranscribeWordResponse;
  return proto.sensory.api.v1.audio.TranscribeWordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.TranscribeWordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.TranscribeWordResponse}
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.TranscribeWord;
      reader.readMessage(value,proto.sensory.api.v1.audio.TranscribeWord.deserializeBinaryFromReader);
      msg.addWords(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFirstwordindex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastwordindex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.TranscribeWordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.TranscribeWordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sensory.api.v1.audio.TranscribeWord.serializeBinaryToWriter
    );
  }
  f = message.getFirstwordindex();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLastwordindex();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * repeated TranscribeWord words = 1;
 * @return {!Array<!proto.sensory.api.v1.audio.TranscribeWord>}
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.prototype.getWordsList = function() {
  return /** @type{!Array<!proto.sensory.api.v1.audio.TranscribeWord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensory.api.v1.audio.TranscribeWord, 1));
};


/**
 * @param {!Array<!proto.sensory.api.v1.audio.TranscribeWord>} value
 * @return {!proto.sensory.api.v1.audio.TranscribeWordResponse} returns this
*/
proto.sensory.api.v1.audio.TranscribeWordResponse.prototype.setWordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sensory.api.v1.audio.TranscribeWord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensory.api.v1.audio.TranscribeWord}
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.prototype.addWords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sensory.api.v1.audio.TranscribeWord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensory.api.v1.audio.TranscribeWordResponse} returns this
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.prototype.clearWordsList = function() {
  return this.setWordsList([]);
};


/**
 * optional uint64 firstWordIndex = 2;
 * @return {number}
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.prototype.getFirstwordindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.TranscribeWordResponse} returns this
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.prototype.setFirstwordindex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 lastWordIndex = 3;
 * @return {number}
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.prototype.getLastwordindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.TranscribeWordResponse} returns this
 */
proto.sensory.api.v1.audio.TranscribeWordResponse.prototype.setLastwordindex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.TranscribeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.TranscribeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.TranscribeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.TranscribeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    audioenergy: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    wordlist: (f = msg.getWordlist()) && proto.sensory.api.v1.audio.TranscribeWordResponse.toObject(includeInstance, f),
    hasvoiceactivity: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    postprocessingaction: (f = msg.getPostprocessingaction()) && proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.TranscribeResponse}
 */
proto.sensory.api.v1.audio.TranscribeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.TranscribeResponse;
  return proto.sensory.api.v1.audio.TranscribeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.TranscribeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.TranscribeResponse}
 */
proto.sensory.api.v1.audio.TranscribeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAudioenergy(value);
      break;
    case 4:
      var value = new proto.sensory.api.v1.audio.TranscribeWordResponse;
      reader.readMessage(value,proto.sensory.api.v1.audio.TranscribeWordResponse.deserializeBinaryFromReader);
      msg.setWordlist(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasvoiceactivity(value);
      break;
    case 10:
      var value = new proto.sensory.api.v1.audio.AudioResponsePostProcessingAction;
      reader.readMessage(value,proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.deserializeBinaryFromReader);
      msg.setPostprocessingaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.TranscribeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.TranscribeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.TranscribeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.TranscribeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioenergy();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getWordlist();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sensory.api.v1.audio.TranscribeWordResponse.serializeBinaryToWriter
    );
  }
  f = message.getHasvoiceactivity();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getPostprocessingaction();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sensory.api.v1.audio.AudioResponsePostProcessingAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional float audioEnergy = 1;
 * @return {number}
 */
proto.sensory.api.v1.audio.TranscribeResponse.prototype.getAudioenergy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.TranscribeResponse} returns this
 */
proto.sensory.api.v1.audio.TranscribeResponse.prototype.setAudioenergy = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional TranscribeWordResponse wordList = 4;
 * @return {?proto.sensory.api.v1.audio.TranscribeWordResponse}
 */
proto.sensory.api.v1.audio.TranscribeResponse.prototype.getWordlist = function() {
  return /** @type{?proto.sensory.api.v1.audio.TranscribeWordResponse} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.TranscribeWordResponse, 4));
};


/**
 * @param {?proto.sensory.api.v1.audio.TranscribeWordResponse|undefined} value
 * @return {!proto.sensory.api.v1.audio.TranscribeResponse} returns this
*/
proto.sensory.api.v1.audio.TranscribeResponse.prototype.setWordlist = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.TranscribeResponse} returns this
 */
proto.sensory.api.v1.audio.TranscribeResponse.prototype.clearWordlist = function() {
  return this.setWordlist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.TranscribeResponse.prototype.hasWordlist = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool hasVoiceActivity = 5;
 * @return {boolean}
 */
proto.sensory.api.v1.audio.TranscribeResponse.prototype.getHasvoiceactivity = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sensory.api.v1.audio.TranscribeResponse} returns this
 */
proto.sensory.api.v1.audio.TranscribeResponse.prototype.setHasvoiceactivity = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional AudioResponsePostProcessingAction postProcessingAction = 10;
 * @return {?proto.sensory.api.v1.audio.AudioResponsePostProcessingAction}
 */
proto.sensory.api.v1.audio.TranscribeResponse.prototype.getPostprocessingaction = function() {
  return /** @type{?proto.sensory.api.v1.audio.AudioResponsePostProcessingAction} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.AudioResponsePostProcessingAction, 10));
};


/**
 * @param {?proto.sensory.api.v1.audio.AudioResponsePostProcessingAction|undefined} value
 * @return {!proto.sensory.api.v1.audio.TranscribeResponse} returns this
*/
proto.sensory.api.v1.audio.TranscribeResponse.prototype.setPostprocessingaction = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.TranscribeResponse} returns this
 */
proto.sensory.api.v1.audio.TranscribeResponse.prototype.clearPostprocessingaction = function() {
  return this.setPostprocessingaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.TranscribeResponse.prototype.hasPostprocessingaction = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.StreamingresponseCase = {
  STREAMINGRESPONSE_NOT_SET: 0,
  CONFIG: 1,
  AUDIOCONTENT: 2
};

/**
 * @return {proto.sensory.api.v1.audio.SynthesizeSpeechResponse.StreamingresponseCase}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.prototype.getStreamingresponseCase = function() {
  return /** @type {proto.sensory.api.v1.audio.SynthesizeSpeechResponse.StreamingresponseCase} */(jspb.Message.computeOneofCase(this, proto.sensory.api.v1.audio.SynthesizeSpeechResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.SynthesizeSpeechResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.SynthesizeSpeechResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.sensory.api.v1.audio.AudioConfig.toObject(includeInstance, f),
    audiocontent: msg.getAudiocontent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.SynthesizeSpeechResponse}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.SynthesizeSpeechResponse;
  return proto.sensory.api.v1.audio.SynthesizeSpeechResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.SynthesizeSpeechResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.SynthesizeSpeechResponse}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.AudioConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.AudioConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAudiocontent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.SynthesizeSpeechResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.SynthesizeSpeechResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.audio.AudioConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional AudioConfig config = 1;
 * @return {?proto.sensory.api.v1.audio.AudioConfig}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.prototype.getConfig = function() {
  return /** @type{?proto.sensory.api.v1.audio.AudioConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.AudioConfig, 1));
};


/**
 * @param {?proto.sensory.api.v1.audio.AudioConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.SynthesizeSpeechResponse} returns this
*/
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.prototype.setConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sensory.api.v1.audio.SynthesizeSpeechResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.SynthesizeSpeechResponse} returns this
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes audioContent = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.prototype.getAudiocontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes audioContent = 2;
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {string}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.prototype.getAudiocontent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAudiocontent()));
};


/**
 * optional bytes audioContent = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudiocontent()`
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.prototype.getAudiocontent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAudiocontent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sensory.api.v1.audio.SynthesizeSpeechResponse} returns this
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.prototype.setAudiocontent = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.SynthesizeSpeechResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.SynthesizeSpeechResponse} returns this
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.prototype.clearAudiocontent = function() {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.SynthesizeSpeechResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.SynthesizeSpeechResponse.prototype.hasAudiocontent = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.oneofGroups_ = [[7,8]];

/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.EnrolllengthCase = {
  ENROLLLENGTH_NOT_SET: 0,
  ENROLLMENTNUMUTTERANCES: 7,
  ENROLLMENTDURATION: 8
};

/**
 * @return {proto.sensory.api.v1.audio.CreateEnrollmentConfig.EnrolllengthCase}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.getEnrolllengthCase = function() {
  return /** @type {proto.sensory.api.v1.audio.CreateEnrollmentConfig.EnrolllengthCase} */(jspb.Message.computeOneofCase(this, proto.sensory.api.v1.audio.CreateEnrollmentConfig.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.CreateEnrollmentConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    audio: (f = msg.getAudio()) && proto.sensory.api.v1.audio.AudioConfig.toObject(includeInstance, f),
    userid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deviceid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    modelname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    islivenessenabled: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    enrollmentnumutterances: jspb.Message.getFieldWithDefault(msg, 7, 0),
    enrollmentduration: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    referenceid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    disableserverenrollmenttemplatestorage: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.CreateEnrollmentConfig;
  return proto.sensory.api.v1.audio.CreateEnrollmentConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.AudioConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.AudioConfig.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIslivenessenabled(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEnrollmentnumutterances(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setEnrollmentduration(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceid(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableserverenrollmenttemplatestorage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.CreateEnrollmentConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.audio.AudioConfig.serializeBinaryToWriter
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeviceid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getModelname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIslivenessenabled();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getReferenceid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDisableserverenrollmenttemplatestorage();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional AudioConfig audio = 1;
 * @return {?proto.sensory.api.v1.audio.AudioConfig}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.getAudio = function() {
  return /** @type{?proto.sensory.api.v1.audio.AudioConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.AudioConfig, 1));
};


/**
 * @param {?proto.sensory.api.v1.audio.AudioConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} returns this
*/
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.setAudio = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string userId = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string deviceId = 3;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.getDeviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.setDeviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string modelName = 4;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.setModelname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool isLivenessEnabled = 6;
 * @return {boolean}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.getIslivenessenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.setIslivenessenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional uint32 enrollmentNumUtterances = 7;
 * @return {number}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.getEnrollmentnumutterances = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.setEnrollmentnumutterances = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.sensory.api.v1.audio.CreateEnrollmentConfig.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.clearEnrollmentnumutterances = function() {
  return jspb.Message.setOneofField(this, 7, proto.sensory.api.v1.audio.CreateEnrollmentConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.hasEnrollmentnumutterances = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional float enrollmentDuration = 8;
 * @return {number}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.getEnrollmentduration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.setEnrollmentduration = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.sensory.api.v1.audio.CreateEnrollmentConfig.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.clearEnrollmentduration = function() {
  return jspb.Message.setOneofField(this, 8, proto.sensory.api.v1.audio.CreateEnrollmentConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.hasEnrollmentduration = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string referenceId = 9;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.getReferenceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.setReferenceid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool disableServerEnrollmentTemplateStorage = 10;
 * @return {boolean}
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.getDisableserverenrollmenttemplatestorage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentConfig.prototype.setDisableserverenrollmenttemplatestorage = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensory.api.v1.audio.AuthenticateConfig.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.AuthidCase = {
  AUTHID_NOT_SET: 0,
  ENROLLMENTID: 2,
  ENROLLMENTGROUPID: 3
};

/**
 * @return {proto.sensory.api.v1.audio.AuthenticateConfig.AuthidCase}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.getAuthidCase = function() {
  return /** @type {proto.sensory.api.v1.audio.AuthenticateConfig.AuthidCase} */(jspb.Message.computeOneofCase(this, proto.sensory.api.v1.audio.AuthenticateConfig.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.AuthenticateConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.AuthenticateConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AuthenticateConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    audio: (f = msg.getAudio()) && proto.sensory.api.v1.audio.AudioConfig.toObject(includeInstance, f),
    enrollmentid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    enrollmentgroupid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    doincludetoken: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    sensitivity: jspb.Message.getFieldWithDefault(msg, 5, 0),
    security: jspb.Message.getFieldWithDefault(msg, 6, 0),
    islivenessenabled: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    enrollmenttoken: msg.getEnrollmenttoken_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.AuthenticateConfig;
  return proto.sensory.api.v1.audio.AuthenticateConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.AuthenticateConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.AudioConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.AudioConfig.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnrollmentid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnrollmentgroupid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoincludetoken(value);
      break;
    case 5:
      var value = /** @type {!proto.sensory.api.v1.audio.ThresholdSensitivity} */ (reader.readEnum());
      msg.setSensitivity(value);
      break;
    case 6:
      var value = /** @type {!proto.sensory.api.v1.audio.AuthenticateConfig.ThresholdSecurity} */ (reader.readEnum());
      msg.setSecurity(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIslivenessenabled(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEnrollmenttoken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.AuthenticateConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.AuthenticateConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AuthenticateConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.audio.AudioConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDoincludetoken();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getSensitivity();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getSecurity();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getIslivenessenabled();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getEnrollmenttoken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.ThresholdSecurity = {
  HIGH: 0,
  LOW: 1
};

/**
 * optional AudioConfig audio = 1;
 * @return {?proto.sensory.api.v1.audio.AudioConfig}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.getAudio = function() {
  return /** @type{?proto.sensory.api.v1.audio.AudioConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.AudioConfig, 1));
};


/**
 * @param {?proto.sensory.api.v1.audio.AudioConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig} returns this
*/
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.setAudio = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig} returns this
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string enrollmentId = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.getEnrollmentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig} returns this
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.setEnrollmentid = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.AuthenticateConfig.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig} returns this
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.clearEnrollmentid = function() {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.AuthenticateConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.hasEnrollmentid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string enrollmentGroupId = 3;
 * @return {string}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.getEnrollmentgroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig} returns this
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.setEnrollmentgroupid = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.sensory.api.v1.audio.AuthenticateConfig.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig} returns this
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.clearEnrollmentgroupid = function() {
  return jspb.Message.setOneofField(this, 3, proto.sensory.api.v1.audio.AuthenticateConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.hasEnrollmentgroupid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool doIncludeToken = 4;
 * @return {boolean}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.getDoincludetoken = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig} returns this
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.setDoincludetoken = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional ThresholdSensitivity sensitivity = 5;
 * @return {!proto.sensory.api.v1.audio.ThresholdSensitivity}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.getSensitivity = function() {
  return /** @type {!proto.sensory.api.v1.audio.ThresholdSensitivity} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.sensory.api.v1.audio.ThresholdSensitivity} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig} returns this
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.setSensitivity = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional ThresholdSecurity security = 6;
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig.ThresholdSecurity}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.getSecurity = function() {
  return /** @type {!proto.sensory.api.v1.audio.AuthenticateConfig.ThresholdSecurity} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.sensory.api.v1.audio.AuthenticateConfig.ThresholdSecurity} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig} returns this
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.setSecurity = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional bool isLivenessEnabled = 7;
 * @return {boolean}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.getIslivenessenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig} returns this
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.setIslivenessenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bytes enrollmentToken = 8;
 * @return {string}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.getEnrollmenttoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes enrollmentToken = 8;
 * This is a type-conversion wrapper around `getEnrollmenttoken()`
 * @return {string}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.getEnrollmenttoken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEnrollmenttoken()));
};


/**
 * optional bytes enrollmentToken = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEnrollmenttoken()`
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.getEnrollmenttoken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEnrollmenttoken()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sensory.api.v1.audio.AuthenticateConfig} returns this
 */
proto.sensory.api.v1.audio.AuthenticateConfig.prototype.setEnrollmenttoken = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.ValidateEventConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.ValidateEventConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.ValidateEventConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    audio: (f = msg.getAudio()) && proto.sensory.api.v1.audio.AudioConfig.toObject(includeInstance, f),
    modelname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sensitivity: jspb.Message.getFieldWithDefault(msg, 4, 0),
    topn: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.ValidateEventConfig}
 */
proto.sensory.api.v1.audio.ValidateEventConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.ValidateEventConfig;
  return proto.sensory.api.v1.audio.ValidateEventConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.ValidateEventConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.ValidateEventConfig}
 */
proto.sensory.api.v1.audio.ValidateEventConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.AudioConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.AudioConfig.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 4:
      var value = /** @type {!proto.sensory.api.v1.audio.ThresholdSensitivity} */ (reader.readEnum());
      msg.setSensitivity(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTopn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.ValidateEventConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.ValidateEventConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.ValidateEventConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.audio.AudioConfig.serializeBinaryToWriter
    );
  }
  f = message.getModelname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSensitivity();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTopn();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional AudioConfig audio = 1;
 * @return {?proto.sensory.api.v1.audio.AudioConfig}
 */
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.getAudio = function() {
  return /** @type{?proto.sensory.api.v1.audio.AudioConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.AudioConfig, 1));
};


/**
 * @param {?proto.sensory.api.v1.audio.AudioConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventConfig} returns this
*/
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.setAudio = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.ValidateEventConfig} returns this
 */
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string modelName = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventConfig} returns this
 */
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.setModelname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string userId = 3;
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventConfig} returns this
 */
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ThresholdSensitivity sensitivity = 4;
 * @return {!proto.sensory.api.v1.audio.ThresholdSensitivity}
 */
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.getSensitivity = function() {
  return /** @type {!proto.sensory.api.v1.audio.ThresholdSensitivity} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.sensory.api.v1.audio.ThresholdSensitivity} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventConfig} returns this
 */
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.setSensitivity = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int32 topN = 5;
 * @return {number}
 */
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.getTopn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.ValidateEventConfig} returns this
 */
proto.sensory.api.v1.audio.ValidateEventConfig.prototype.setTopn = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.oneofGroups_ = [[5,6]];

/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.EnrolllengthCase = {
  ENROLLLENGTH_NOT_SET: 0,
  ENROLLMENTNUMUTTERANCES: 5,
  ENROLLMENTDURATION: 6
};

/**
 * @return {proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.EnrolllengthCase}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.getEnrolllengthCase = function() {
  return /** @type {proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.EnrolllengthCase} */(jspb.Message.computeOneofCase(this, proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    audio: (f = msg.getAudio()) && proto.sensory.api.v1.audio.AudioConfig.toObject(includeInstance, f),
    userid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    modelname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    enrollmentnumutterances: jspb.Message.getFieldWithDefault(msg, 5, 0),
    enrollmentduration: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    referenceid: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.CreateEnrollmentEventConfig;
  return proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.AudioConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.AudioConfig.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEnrollmentnumutterances(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setEnrollmentduration(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.audio.AudioConfig.serializeBinaryToWriter
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getModelname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getReferenceid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional AudioConfig audio = 1;
 * @return {?proto.sensory.api.v1.audio.AudioConfig}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.getAudio = function() {
  return /** @type{?proto.sensory.api.v1.audio.AudioConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.AudioConfig, 1));
};


/**
 * @param {?proto.sensory.api.v1.audio.AudioConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} returns this
*/
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.setAudio = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string userId = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string modelName = 3;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.setModelname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 enrollmentNumUtterances = 5;
 * @return {number}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.getEnrollmentnumutterances = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.setEnrollmentnumutterances = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.clearEnrollmentnumutterances = function() {
  return jspb.Message.setOneofField(this, 5, proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.hasEnrollmentnumutterances = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional float enrollmentDuration = 6;
 * @return {number}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.getEnrollmentduration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.setEnrollmentduration = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.clearEnrollmentduration = function() {
  return jspb.Message.setOneofField(this, 6, proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.hasEnrollmentduration = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string referenceId = 7;
 * @return {string}
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.getReferenceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.CreateEnrollmentEventConfig} returns this
 */
proto.sensory.api.v1.audio.CreateEnrollmentEventConfig.prototype.setReferenceid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.AuthidCase = {
  AUTHID_NOT_SET: 0,
  ENROLLMENTID: 2,
  ENROLLMENTGROUPID: 3
};

/**
 * @return {proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.AuthidCase}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.getAuthidCase = function() {
  return /** @type {proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.AuthidCase} */(jspb.Message.computeOneofCase(this, proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.ValidateEnrolledEventConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    audio: (f = msg.getAudio()) && proto.sensory.api.v1.audio.AudioConfig.toObject(includeInstance, f),
    enrollmentid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    enrollmentgroupid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sensitivity: jspb.Message.getFieldWithDefault(msg, 4, 0),
    enrollmenttoken: msg.getEnrollmenttoken_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventConfig}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.ValidateEnrolledEventConfig;
  return proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.ValidateEnrolledEventConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventConfig}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.AudioConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.AudioConfig.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnrollmentid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnrollmentgroupid(value);
      break;
    case 4:
      var value = /** @type {!proto.sensory.api.v1.audio.ThresholdSensitivity} */ (reader.readEnum());
      msg.setSensitivity(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEnrollmenttoken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.ValidateEnrolledEventConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.audio.AudioConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSensitivity();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getEnrollmenttoken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional AudioConfig audio = 1;
 * @return {?proto.sensory.api.v1.audio.AudioConfig}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.getAudio = function() {
  return /** @type{?proto.sensory.api.v1.audio.AudioConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.AudioConfig, 1));
};


/**
 * @param {?proto.sensory.api.v1.audio.AudioConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventConfig} returns this
*/
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.setAudio = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventConfig} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string enrollmentId = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.getEnrollmentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventConfig} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.setEnrollmentid = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventConfig} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.clearEnrollmentid = function() {
  return jspb.Message.setOneofField(this, 2, proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.hasEnrollmentid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string enrollmentGroupId = 3;
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.getEnrollmentgroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventConfig} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.setEnrollmentgroupid = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventConfig} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.clearEnrollmentgroupid = function() {
  return jspb.Message.setOneofField(this, 3, proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.hasEnrollmentgroupid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ThresholdSensitivity sensitivity = 4;
 * @return {!proto.sensory.api.v1.audio.ThresholdSensitivity}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.getSensitivity = function() {
  return /** @type {!proto.sensory.api.v1.audio.ThresholdSensitivity} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.sensory.api.v1.audio.ThresholdSensitivity} value
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventConfig} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.setSensitivity = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bytes enrollmentToken = 5;
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.getEnrollmenttoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes enrollmentToken = 5;
 * This is a type-conversion wrapper around `getEnrollmenttoken()`
 * @return {string}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.getEnrollmenttoken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEnrollmenttoken()));
};


/**
 * optional bytes enrollmentToken = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEnrollmenttoken()`
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.getEnrollmenttoken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEnrollmenttoken()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sensory.api.v1.audio.ValidateEnrolledEventConfig} returns this
 */
proto.sensory.api.v1.audio.ValidateEnrolledEventConfig.prototype.setEnrollmenttoken = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensory.api.v1.audio.CustomVocabularyWords.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.CustomVocabularyWords.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.CustomVocabularyWords.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.CustomVocabularyWords} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.CustomVocabularyWords.toObject = function(includeInstance, msg) {
  var f, obj = {
    wordsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.CustomVocabularyWords}
 */
proto.sensory.api.v1.audio.CustomVocabularyWords.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.CustomVocabularyWords;
  return proto.sensory.api.v1.audio.CustomVocabularyWords.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.CustomVocabularyWords} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.CustomVocabularyWords}
 */
proto.sensory.api.v1.audio.CustomVocabularyWords.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addWords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.CustomVocabularyWords.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.CustomVocabularyWords.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.CustomVocabularyWords} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.CustomVocabularyWords.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWordsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string words = 1;
 * @return {!Array<string>}
 */
proto.sensory.api.v1.audio.CustomVocabularyWords.prototype.getWordsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sensory.api.v1.audio.CustomVocabularyWords} returns this
 */
proto.sensory.api.v1.audio.CustomVocabularyWords.prototype.setWordsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sensory.api.v1.audio.CustomVocabularyWords} returns this
 */
proto.sensory.api.v1.audio.CustomVocabularyWords.prototype.addWords = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensory.api.v1.audio.CustomVocabularyWords} returns this
 */
proto.sensory.api.v1.audio.CustomVocabularyWords.prototype.clearWordsList = function() {
  return this.setWordsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.TranscribeEventConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.TranscribeEventConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.TranscribeEventConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.TranscribeEventConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sensitivity: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.TranscribeEventConfig}
 */
proto.sensory.api.v1.audio.TranscribeEventConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.TranscribeEventConfig;
  return proto.sensory.api.v1.audio.TranscribeEventConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.TranscribeEventConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.TranscribeEventConfig}
 */
proto.sensory.api.v1.audio.TranscribeEventConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelname(value);
      break;
    case 2:
      var value = /** @type {!proto.sensory.api.v1.audio.ThresholdSensitivity} */ (reader.readEnum());
      msg.setSensitivity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.TranscribeEventConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.TranscribeEventConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.TranscribeEventConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.TranscribeEventConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSensitivity();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string modelName = 1;
 * @return {string}
 */
proto.sensory.api.v1.audio.TranscribeEventConfig.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.TranscribeEventConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeEventConfig.prototype.setModelname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ThresholdSensitivity sensitivity = 2;
 * @return {!proto.sensory.api.v1.audio.ThresholdSensitivity}
 */
proto.sensory.api.v1.audio.TranscribeEventConfig.prototype.getSensitivity = function() {
  return /** @type {!proto.sensory.api.v1.audio.ThresholdSensitivity} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.sensory.api.v1.audio.ThresholdSensitivity} value
 * @return {!proto.sensory.api.v1.audio.TranscribeEventConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeEventConfig.prototype.setSensitivity = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.TranscribeConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.TranscribeConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.TranscribeConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    audio: (f = msg.getAudio()) && proto.sensory.api.v1.audio.AudioConfig.toObject(includeInstance, f),
    modelname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    enablepunctuationcapitalization: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    dosingleutterance: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    vadsensitivity: jspb.Message.getFieldWithDefault(msg, 6, 0),
    vadduration: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    customvocabrewardthreshold: jspb.Message.getFieldWithDefault(msg, 8, 0),
    customvocabularyid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    customwordlist: (f = msg.getCustomwordlist()) && proto.sensory.api.v1.audio.CustomVocabularyWords.toObject(includeInstance, f),
    doofflinemode: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    wakewordconfig: (f = msg.getWakewordconfig()) && proto.sensory.api.v1.audio.TranscribeEventConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig}
 */
proto.sensory.api.v1.audio.TranscribeConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.TranscribeConfig;
  return proto.sensory.api.v1.audio.TranscribeConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.TranscribeConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig}
 */
proto.sensory.api.v1.audio.TranscribeConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.audio.AudioConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.AudioConfig.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnablepunctuationcapitalization(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDosingleutterance(value);
      break;
    case 6:
      var value = /** @type {!proto.sensory.api.v1.audio.ThresholdSensitivity} */ (reader.readEnum());
      msg.setVadsensitivity(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVadduration(value);
      break;
    case 8:
      var value = /** @type {!proto.sensory.api.v1.audio.ThresholdSensitivity} */ (reader.readEnum());
      msg.setCustomvocabrewardthreshold(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomvocabularyid(value);
      break;
    case 10:
      var value = new proto.sensory.api.v1.audio.CustomVocabularyWords;
      reader.readMessage(value,proto.sensory.api.v1.audio.CustomVocabularyWords.deserializeBinaryFromReader);
      msg.setCustomwordlist(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoofflinemode(value);
      break;
    case 12:
      var value = new proto.sensory.api.v1.audio.TranscribeEventConfig;
      reader.readMessage(value,proto.sensory.api.v1.audio.TranscribeEventConfig.deserializeBinaryFromReader);
      msg.setWakewordconfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.TranscribeConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.TranscribeConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.TranscribeConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.audio.AudioConfig.serializeBinaryToWriter
    );
  }
  f = message.getModelname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEnablepunctuationcapitalization();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getDosingleutterance();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getVadsensitivity();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getVadduration();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getCustomvocabrewardthreshold();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getCustomvocabularyid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCustomwordlist();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sensory.api.v1.audio.CustomVocabularyWords.serializeBinaryToWriter
    );
  }
  f = message.getDoofflinemode();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getWakewordconfig();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.sensory.api.v1.audio.TranscribeEventConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional AudioConfig audio = 1;
 * @return {?proto.sensory.api.v1.audio.AudioConfig}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.getAudio = function() {
  return /** @type{?proto.sensory.api.v1.audio.AudioConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.AudioConfig, 1));
};


/**
 * @param {?proto.sensory.api.v1.audio.AudioConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
*/
proto.sensory.api.v1.audio.TranscribeConfig.prototype.setAudio = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string modelName = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.setModelname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string userId = 3;
 * @return {string}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool enablePunctuationCapitalization = 4;
 * @return {boolean}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.getEnablepunctuationcapitalization = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.setEnablepunctuationcapitalization = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool doSingleUtterance = 5;
 * @return {boolean}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.getDosingleutterance = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.setDosingleutterance = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional ThresholdSensitivity vadSensitivity = 6;
 * @return {!proto.sensory.api.v1.audio.ThresholdSensitivity}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.getVadsensitivity = function() {
  return /** @type {!proto.sensory.api.v1.audio.ThresholdSensitivity} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.sensory.api.v1.audio.ThresholdSensitivity} value
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.setVadsensitivity = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional float vadDuration = 7;
 * @return {number}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.getVadduration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.setVadduration = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional ThresholdSensitivity customVocabRewardThreshold = 8;
 * @return {!proto.sensory.api.v1.audio.ThresholdSensitivity}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.getCustomvocabrewardthreshold = function() {
  return /** @type {!proto.sensory.api.v1.audio.ThresholdSensitivity} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.sensory.api.v1.audio.ThresholdSensitivity} value
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.setCustomvocabrewardthreshold = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string customVocabularyId = 9;
 * @return {string}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.getCustomvocabularyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.setCustomvocabularyid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional CustomVocabularyWords customWordList = 10;
 * @return {?proto.sensory.api.v1.audio.CustomVocabularyWords}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.getCustomwordlist = function() {
  return /** @type{?proto.sensory.api.v1.audio.CustomVocabularyWords} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.CustomVocabularyWords, 10));
};


/**
 * @param {?proto.sensory.api.v1.audio.CustomVocabularyWords|undefined} value
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
*/
proto.sensory.api.v1.audio.TranscribeConfig.prototype.setCustomwordlist = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.clearCustomwordlist = function() {
  return this.setCustomwordlist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.hasCustomwordlist = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool doOfflineMode = 11;
 * @return {boolean}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.getDoofflinemode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.setDoofflinemode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional TranscribeEventConfig wakeWordConfig = 12;
 * @return {?proto.sensory.api.v1.audio.TranscribeEventConfig}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.getWakewordconfig = function() {
  return /** @type{?proto.sensory.api.v1.audio.TranscribeEventConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.audio.TranscribeEventConfig, 12));
};


/**
 * @param {?proto.sensory.api.v1.audio.TranscribeEventConfig|undefined} value
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
*/
proto.sensory.api.v1.audio.TranscribeConfig.prototype.setWakewordconfig = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.audio.TranscribeConfig} returns this
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.clearWakewordconfig = function() {
  return this.setWakewordconfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.audio.TranscribeConfig.prototype.hasWakewordconfig = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.AudioConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.AudioConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.AudioConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AudioConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    encoding: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sampleratehertz: jspb.Message.getFieldWithDefault(msg, 2, 0),
    audiochannelcount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    languagecode: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.AudioConfig}
 */
proto.sensory.api.v1.audio.AudioConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.AudioConfig;
  return proto.sensory.api.v1.audio.AudioConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.AudioConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.AudioConfig}
 */
proto.sensory.api.v1.audio.AudioConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sensory.api.v1.audio.AudioConfig.AudioEncoding} */ (reader.readEnum());
      msg.setEncoding(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSampleratehertz(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAudiochannelcount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguagecode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.AudioConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.AudioConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.AudioConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.AudioConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEncoding();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSampleratehertz();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAudiochannelcount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLanguagecode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.AudioConfig.AudioEncoding = {
  LINEAR16: 0,
  FLAC: 1,
  MULAW: 2
};

/**
 * optional AudioEncoding encoding = 1;
 * @return {!proto.sensory.api.v1.audio.AudioConfig.AudioEncoding}
 */
proto.sensory.api.v1.audio.AudioConfig.prototype.getEncoding = function() {
  return /** @type {!proto.sensory.api.v1.audio.AudioConfig.AudioEncoding} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sensory.api.v1.audio.AudioConfig.AudioEncoding} value
 * @return {!proto.sensory.api.v1.audio.AudioConfig} returns this
 */
proto.sensory.api.v1.audio.AudioConfig.prototype.setEncoding = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 sampleRateHertz = 2;
 * @return {number}
 */
proto.sensory.api.v1.audio.AudioConfig.prototype.getSampleratehertz = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.AudioConfig} returns this
 */
proto.sensory.api.v1.audio.AudioConfig.prototype.setSampleratehertz = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 audioChannelCount = 3;
 * @return {number}
 */
proto.sensory.api.v1.audio.AudioConfig.prototype.getAudiochannelcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.AudioConfig} returns this
 */
proto.sensory.api.v1.audio.AudioConfig.prototype.setAudiochannelcount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string languageCode = 4;
 * @return {string}
 */
proto.sensory.api.v1.audio.AudioConfig.prototype.getLanguagecode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.AudioConfig} returns this
 */
proto.sensory.api.v1.audio.AudioConfig.prototype.setLanguagecode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.v1.audio.VoiceSynthesisConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.audio.VoiceSynthesisConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.audio.VoiceSynthesisConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.VoiceSynthesisConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sampleratehertz: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.v1.audio.VoiceSynthesisConfig}
 */
proto.sensory.api.v1.audio.VoiceSynthesisConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.audio.VoiceSynthesisConfig;
  return proto.sensory.api.v1.audio.VoiceSynthesisConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.audio.VoiceSynthesisConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.audio.VoiceSynthesisConfig}
 */
proto.sensory.api.v1.audio.VoiceSynthesisConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSampleratehertz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.v1.audio.VoiceSynthesisConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.audio.VoiceSynthesisConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.audio.VoiceSynthesisConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.audio.VoiceSynthesisConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSampleratehertz();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string modelName = 2;
 * @return {string}
 */
proto.sensory.api.v1.audio.VoiceSynthesisConfig.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.audio.VoiceSynthesisConfig} returns this
 */
proto.sensory.api.v1.audio.VoiceSynthesisConfig.prototype.setModelname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 sampleRateHertz = 3;
 * @return {number}
 */
proto.sensory.api.v1.audio.VoiceSynthesisConfig.prototype.getSampleratehertz = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.audio.VoiceSynthesisConfig} returns this
 */
proto.sensory.api.v1.audio.VoiceSynthesisConfig.prototype.setSampleratehertz = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.AudioPostProcessingAction = {
  NOT_SET: 0,
  FLUSH: 1,
  RESET: 2,
  FINAL: 3
};

/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.WordState = {
  WORDSTATE_PENDING: 0,
  WORDSTATE_FINAL: 1
};

/**
 * @enum {number}
 */
proto.sensory.api.v1.audio.ThresholdSensitivity = {
  LOWEST: 0,
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  HIGHEST: 4
};

goog.object.extend(exports, proto.sensory.api.v1.audio);
