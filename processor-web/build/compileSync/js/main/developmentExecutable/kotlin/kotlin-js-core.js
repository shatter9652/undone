(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-js-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-js-core'.");
    }
    globalThis['kotlin-js-core'] = factory(typeof globalThis['kotlin-js-core'] === 'undefined' ? {} : globalThis['kotlin-js-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.xh;
  var protoOf = kotlin_kotlin.$_$.de;
  var Annotation = kotlin_kotlin.$_$.ih;
  var initMetadataForClass = kotlin_kotlin.$_$.cd;
  var VOID = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(InternalApi, 'InternalApi', VOID, VOID, [Annotation]);
  //endregion
  function unsafeJso() {
    return {};
  }
  function legacyUnsafeCast(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function unsafeCast(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function unsafeCast_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function unsafeCast_1(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function unsafeCast_2(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function InternalApi() {
  }
  protoOf(InternalApi).equals = function (other) {
    if (!(other instanceof InternalApi))
      return false;
    other instanceof InternalApi || THROW_CCE();
    return true;
  };
  protoOf(InternalApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalApi).toString = function () {
    return '@js.internal.InternalApi(' + ')';
  };
  function upcast(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  return _;
}));

//# sourceMappingURL=kotlin-js-core.js.map
