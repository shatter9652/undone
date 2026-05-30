(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-js'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-js'.");
    }
    globalThis['kotlin-js'] = factory(typeof globalThis['kotlin-js'] === 'undefined' ? {} : globalThis['kotlin-js'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var newThrowable = kotlin_kotlin.$_$.m8;
  var Unit_instance = kotlin_kotlin.$_$.l2;
  var intercepted = kotlin_kotlin.$_$.w5;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.v;
  var Companion_instance = kotlin_kotlin.$_$.k2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.y1;
  var createFailure = kotlin_kotlin.$_$.hb;
  //endregion
  //region block: pre-declaration
  //endregion
  function toJsError(_this__u8e3s4) {
    // Inline function 'js.errors.toJsErrorOrNull' call
    // Inline function 'js.reflect.upcast' call
    var tmp = _this__u8e3s4;
    var tmp0_elvis_lhs = tmp instanceof Error ? tmp : null;
    return tmp0_elvis_lhs == null ? wrapRawError(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function get_RAW_ERROR_WRAPPER_TYPE() {
    _init_properties_wrapRawError_kt__75j3je();
    return RAW_ERROR_WRAPPER_TYPE;
  }
  var RAW_ERROR_WRAPPER_TYPE;
  function wrapRawError(value) {
    _init_properties_wrapRawError_kt__75j3je();
    var error = newThrowable("Kotlin raw error wrapper. Please check 'cause' for the original error");
    // Inline function 'js.errors.name' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    error.name = get_RAW_ERROR_WRAPPER_TYPE();
    Reflect.set(error, 'cause', value);
    return error;
  }
  var properties_initialized_wrapRawError_kt_t1ryt0;
  function _init_properties_wrapRawError_kt__75j3je() {
    if (!properties_initialized_wrapRawError_kt_t1ryt0) {
      properties_initialized_wrapRawError_kt_t1ryt0 = true;
      // Inline function 'js.errors.JsErrorName' call
      // Inline function 'js.reflect.unsafeCast' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      RAW_ERROR_WRAPPER_TYPE = 'KotlinRawErrorWrapper';
    }
  }
  function awaitPromiseLike(promise, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    // Inline function 'js.promise.thenTo' call
    thenToContinuation(promise, safe);
    return safe.p8();
  }
  function thenToContinuation(promise, continuation) {
    var tmp = thenToContinuation$lambda(continuation);
    promise.then(tmp, thenToContinuation$lambda_0(continuation));
  }
  function thenToContinuation$lambda($continuation) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.i8(tmp$ret$0);
      return null;
    };
  }
  function thenToContinuation$lambda_0($continuation) {
    return function (it) {
      // Inline function 'js.coroutines.resumeWithError' call
      var tmp0 = $continuation;
      // Inline function 'js.errors.toThrowable' call
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = toJsError(it);
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.i8(tmp$ret$1);
      return null;
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = awaitPromiseLike;
  _.$_$.b = thenToContinuation;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-js.js.map
