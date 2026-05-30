(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlin-js.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin-js.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-web'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-web'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-web'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kotlin-web'.");
    }
    if (typeof globalThis['kotlin-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-web'. Its dependency 'kotlin-js' was not found. Please, check whether 'kotlin-js' is loaded prior to 'kotlin-web'.");
    }
    globalThis['kotlin-web'] = factory(typeof globalThis['kotlin-web'] === 'undefined' ? {} : globalThis['kotlin-web'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlin-js']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_wrappers_kotlin_js) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.l2;
  var VOID = kotlin_kotlin.$_$.c;
  var intercepted = kotlin_kotlin.$_$.w5;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var thenToContinuation = kotlin_org_jetbrains_kotlin_wrappers_kotlin_js.$_$.b;
  //endregion
  //region block: pre-declaration
  //endregion
  function toAbortSignal(_this__u8e3s4) {
    var controller = new AbortController();
    _this__u8e3s4.xm(toAbortSignal$lambda(controller));
    return controller.signal;
  }
  function toAbortSignal$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_instance;
    };
  }
  function removeEventListener(_this__u8e3s4, type, handler, options) {
    options = options === VOID ? undefined : options;
    _this__u8e3s4.removeEventListener(type, handler, options);
  }
  function addEventListener(_this__u8e3s4, type, handler, options) {
    options = options === VOID ? undefined : options;
    _this__u8e3s4.addEventListener(type, handler, options);
  }
  function fetch_0(url, $completion) {
    return fetch_1(new Request(url), $completion);
  }
  function fetch_1(request, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.kl();
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.signal = toAbortSignal(cancellable);
    var finalRequest = new Request(request, this_0);
    // Inline function 'js.promise.thenTo' call
    var this_1 = fetch(finalRequest);
    thenToContinuation(this_1, cancellable);
    return cancellable.ll();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = fetch_0;
  _.$_$.b = addEventListener;
  _.$_$.c = removeEventListener;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-web.js.map
