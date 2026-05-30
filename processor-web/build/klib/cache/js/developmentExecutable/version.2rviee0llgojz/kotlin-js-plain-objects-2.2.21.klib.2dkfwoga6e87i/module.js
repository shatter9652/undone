(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-plugins-js-plain-objects-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-plugins-js-plain-objects-runtime'.");
    }
    globalThis['kotlin-plugins-js-plain-objects-runtime'] = factory(typeof globalThis['kotlin-plugins-js-plain-objects-runtime'] === 'undefined' ? {} : globalThis['kotlin-plugins-js-plain-objects-runtime'], globalThis['kotlin-kotlin-stdlib']);
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
  initMetadataForClass(JsPlainObject, 'JsPlainObject', VOID, VOID, [Annotation]);
  //endregion
  function JsPlainObject() {
  }
  protoOf(JsPlainObject).equals = function (other) {
    if (!(other instanceof JsPlainObject))
      return false;
    other instanceof JsPlainObject || THROW_CCE();
    return true;
  };
  protoOf(JsPlainObject).hashCode = function () {
    return 0;
  };
  protoOf(JsPlainObject).toString = function () {
    return '@kotlinx.js.JsPlainObject(' + ')';
  };
  return _;
}));
