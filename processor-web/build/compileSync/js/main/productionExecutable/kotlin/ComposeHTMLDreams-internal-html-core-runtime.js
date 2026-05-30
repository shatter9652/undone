(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ComposeHTMLDreams-internal-html-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ComposeHTMLDreams-internal-html-core-runtime'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'ComposeHTMLDreams-internal-html-core-runtime'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'ComposeHTMLDreams-internal-html-core-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ComposeHTMLDreams-internal-html-core-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ComposeHTMLDreams-internal-html-core-runtime'.");
    }
    globalThis['ComposeHTMLDreams-internal-html-core-runtime'] = factory(typeof globalThis['ComposeHTMLDreams-internal-html-core-runtime'] === 'undefined' ? {} : globalThis['ComposeHTMLDreams-internal-html-core-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.s8;
  var ensureNotNull = kotlin_kotlin.$_$.ib;
  var Unit_instance = kotlin_kotlin.$_$.l2;
  var initMetadataForClass = kotlin_kotlin.$_$.a8;
  var AbstractApplier = kotlin_androidx_compose_runtime_runtime.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.ab;
  var VOID = kotlin_kotlin.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var Companion_instance = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var CoroutineImpl = kotlin_kotlin.$_$.j6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var isInterface = kotlin_kotlin.$_$.j8;
  var initMetadataForLambda = kotlin_kotlin.$_$.e8;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var initMetadataForObject = kotlin_kotlin.$_$.f8;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var get_DefaultMonotonicFrameClock = kotlin_androidx_compose_runtime_runtime.$_$.e;
  var Recomposer = kotlin_androidx_compose_runtime_runtime.$_$.h;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u5;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.l;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.u;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DomNodeWrapper, 'DomNodeWrapper');
  initMetadataForClass(DomApplier, 'DomApplier', VOID, AbstractApplier);
  initMetadataForClass(NamedEventListener, 'NamedEventListener');
  initMetadataForLambda(GlobalSnapshotManager$schedule$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(GlobalSnapshotManager, 'GlobalSnapshotManager');
  initMetadataForClass(JsMicrotasksDispatcher, 'JsMicrotasksDispatcher', JsMicrotasksDispatcher, CoroutineDispatcher);
  initMetadataForLambda(renderComposable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(renderComposable$scope$1);
  //endregion
  function DomNodeWrapper(node) {
    this.m3o_1 = node;
  }
  protoOf(DomNodeWrapper).n3o = function () {
    return this.m3o_1;
  };
  protoOf(DomNodeWrapper).o3o = function (index, nodeWrapper) {
    var length = this.n3o().childNodes.length;
    if (index < length) {
      this.n3o().insertBefore(nodeWrapper.n3o(), ensureNotNull(this.n3o().childNodes[index]));
    } else {
      this.n3o().appendChild(nodeWrapper.n3o());
    }
  };
  protoOf(DomNodeWrapper).l23 = function (index, count) {
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.n3o().removeChild(ensureNotNull(this.n3o().childNodes[index]));
      }
       while (inductionVariable < count);
  };
  protoOf(DomNodeWrapper).m23 = function (from, to, count) {
    if (from === to) {
      return Unit_instance;
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var child = this.n3o().removeChild(ensureNotNull(this.n3o().childNodes[fromIndex]));
        this.n3o().insertBefore(child, ensureNotNull(this.n3o().childNodes[toIndex]));
      }
       while (inductionVariable < count);
  };
  function DomApplier(root) {
    AbstractApplier.call(this, root);
  }
  protoOf(DomApplier).s3o = function (index, instance) {
  };
  protoOf(DomApplier).j23 = function (index, instance) {
    return this.s3o(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).t3o = function (index, instance) {
    this.e23().o3o(index, instance);
  };
  protoOf(DomApplier).k23 = function (index, instance) {
    return this.t3o(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).l23 = function (index, count) {
    this.e23().l23(index, count);
  };
  protoOf(DomApplier).m23 = function (from, to, count) {
    this.e23().m23(from, to, count);
  };
  function NamedEventListener$handler$lambda(this$0) {
    return function (it) {
      this$0.v3o(it);
      return Unit_instance;
    };
  }
  function NamedEventListener() {
    var tmp = this;
    tmp.u3o_1 = NamedEventListener$handler$lambda(this);
  }
  var org_jetbrains_compose_web_internal_runtime_GlobalSnapshotManager$stable;
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.b3p_1.l();
    while (_iterator__ex2g4s.m()) {
      var element = _iterator__ex2g4s.n();
      element();
    }
    $this.b3p_1.f2();
    $this.c3p_1 = false;
  }
  function schedule($this, block) {
    $this.b3p_1.g(block);
    if (!$this.c3p_1) {
      $this.c3p_1 = true;
      launch($this.z3o_1, VOID, VOID, GlobalSnapshotManager$schedule$slambda_0(null));
    }
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().x3o_1) {
      GlobalSnapshotManager_getInstance().x3o_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_instance;
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().x3o_1 = false;
    Companion_instance.h2s();
    return Unit_instance;
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GlobalSnapshotManager$schedule$slambda).y2s = function ($this$launch, $completion) {
    var tmp = this.k1p($this$launch, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).r8 = function (p1, $completion) {
    return this.y2s((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        if (tmp === 0) {
          this.y7_1 = 1;
          synchronize(GlobalSnapshotManager_getInstance());
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.a8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).k1p = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.l3p_1 = $this$launch;
    return i;
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.y2s($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.w3o_1 = false;
    this.x3o_1 = false;
    this.y3o_1 = null;
    this.z3o_1 = CoroutineScope_0((new JsMicrotasksDispatcher()).pe(SupervisorJob()));
    var tmp = this;
    tmp.a3p_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.b3p_1 = ArrayList_init_$Create$();
    this.c3p_1 = false;
  }
  protoOf(GlobalSnapshotManager).m3p = function () {
    if (!this.w3o_1) {
      this.w3o_1 = true;
      this.y3o_1 = Companion_instance.k3d(this.a3p_1);
    }
  };
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  var org_jetbrains_compose_web_internal_runtime_JsMicrotasksDispatcher$stable;
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.mo();
      return Unit_instance;
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(JsMicrotasksDispatcher).jp = function (context, block) {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable(rootElementId, content) {
    // Inline function 'web.dom.ElementId' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return renderComposable_1(rootElementId, content);
  }
  function renderComposable_0(root, monotonicFrameClock, content) {
    monotonicFrameClock = monotonicFrameClock === VOID ? get_DefaultMonotonicFrameClock() : monotonicFrameClock;
    GlobalSnapshotManager_getInstance().m3p();
    var context = monotonicFrameClock.pe(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, renderComposable$slambda_0(recomposer, null));
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$scope$1(root);
    composition.x2n(ComposableLambda$invoke$ref(composableLambdaInstance(-844806999, true, renderComposable$lambda(content, scope))));
    return composition;
  }
  function renderComposable_1(rootElementId, content) {
    return renderComposable_0(ensureNotNull(document.getElementById(rootElementId)), VOID, content);
  }
  function renderComposable$slambda($recomposer, resultContinuation) {
    this.w3p_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderComposable$slambda).y2s = function ($this$launch, $completion) {
    var tmp = this.k1p($this$launch, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(renderComposable$slambda).r8 = function (p1, $completion) {
    return this.y2s((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderComposable$slambda).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 2;
            this.x7_1 = 1;
            suspendResult = this.w3p_1.v2v(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.a8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.y7_1 === 2) {
          throw e;
        } else {
          this.x7_1 = this.y7_1;
          this.a8_1 = e;
        }
      }
     while (true);
  };
  protoOf(renderComposable$slambda).k1p = function ($this$launch, completion) {
    var i = new renderComposable$slambda(this.w3p_1, completion);
    i.x3p_1 = $this$launch;
    return i;
  };
  function renderComposable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.y2s($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$scope$1($root) {
    this.y3p_1 = $root;
  }
  protoOf(renderComposable$scope$1).z3p = function (_this__u8e3s4) {
    return this.y3p_1;
  };
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.m2j(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function renderComposable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C60@2330L14:renderComposable.kt#gialxy');
      var tmp;
      if ($composer_0.a26(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-844806999, $changed, -1, 'org.jetbrains.compose.web.renderComposable.<anonymous> (renderComposable.kt:60)');
        }
        $content($scope, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.m25();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  //region block: init
  org_jetbrains_compose_web_internal_runtime_GlobalSnapshotManager$stable = 8;
  org_jetbrains_compose_web_internal_runtime_JsMicrotasksDispatcher$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DomApplier;
  _.$_$.b = DomNodeWrapper;
  _.$_$.c = NamedEventListener;
  _.$_$.d = renderComposable_0;
  _.$_$.e = renderComposable;
  //endregion
  return _;
}));

//# sourceMappingURL=ComposeHTMLDreams-internal-html-core-runtime.js.map
