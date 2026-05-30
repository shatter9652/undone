(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './ComposeHTMLDreams-html-core.js', './kotlinx-coroutines-core.js', './ComposeHTMLDreams-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./ComposeHTMLDreams-html-core.js'), require('./kotlinx-coroutines-core.js'), require('./ComposeHTMLDreams-internal-html-core-runtime.js'));
  else {
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'luna-modal-manager-frontend'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'luna-modal-manager-frontend'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'luna-modal-manager-frontend'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'luna-modal-manager-frontend'.");
    }
    if (typeof globalThis['ComposeHTMLDreams-html-core'] === 'undefined') {
      throw new Error("Error loading module 'luna-modal-manager-frontend'. Its dependency 'ComposeHTMLDreams-html-core' was not found. Please, check whether 'ComposeHTMLDreams-html-core' is loaded prior to 'luna-modal-manager-frontend'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'luna-modal-manager-frontend'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'luna-modal-manager-frontend'.");
    }
    if (typeof globalThis['ComposeHTMLDreams-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'luna-modal-manager-frontend'. Its dependency 'ComposeHTMLDreams-internal-html-core-runtime' was not found. Please, check whether 'ComposeHTMLDreams-internal-html-core-runtime' is loaded prior to 'luna-modal-manager-frontend'.");
    }
    globalThis['luna-modal-manager-frontend'] = factory(typeof globalThis['luna-modal-manager-frontend'] === 'undefined' ? {} : globalThis['luna-modal-manager-frontend'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['ComposeHTMLDreams-html-core'], globalThis['kotlinx-coroutines-core'], globalThis['ComposeHTMLDreams-internal-html-core-runtime']);
  }
}(function (_, kotlin_androidx_compose_runtime_runtime, kotlin_kotlin, kotlin_net_perfectdreams_compose_htmldreams_html_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_net_perfectdreams_compose_htmldreams_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var Unit_instance = kotlin_kotlin.$_$.l2;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.l;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.ab;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.r;
  var Button = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.t;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var Enum = kotlin_kotlin.$_$.ta;
  var protoOf = kotlin_kotlin.$_$.s8;
  var initMetadataForClass = kotlin_kotlin.$_$.a8;
  var VOID = kotlin_kotlin.$_$.c;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.lb;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.w;
  var CoroutineImpl = kotlin_kotlin.$_$.j6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var isInterface = kotlin_kotlin.$_$.j8;
  var initMetadataForLambda = kotlin_kotlin.$_$.e8;
  var equals = kotlin_kotlin.$_$.s7;
  var Text = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.i1;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var Div = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.v;
  var lastOrNull = kotlin_kotlin.$_$.l4;
  var LaunchedEffect = kotlin_androidx_compose_runtime_runtime.$_$.g;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.m;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var toMutableList = kotlin_kotlin.$_$.o5;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_net_perfectdreams_compose_htmldreams_internal_html_core_runtime.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.f8;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DiscordButtonType, 'DiscordButtonType', VOID, Enum);
  initMetadataForClass(Size, 'Size', VOID, Enum);
  initMetadataForClass(Modal, 'Modal');
  initMetadataForLambda(ModalManager$render$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ModalManager$render$lambda$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ModalManager, 'ModalManager');
  initMetadataForObject(ComposableSingletons$ModalManagerKt, 'ComposableSingletons$ModalManagerKt');
  //endregion
  function DiscordButton(type, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(1177454785);
    sourceInformation($composer_0, 'C(DiscordButton)P(2)13@453L711,13@446L728:DiscordButton.kt#51sv62');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w25(type.l2_1) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 256 : 128);
    if ($composer_0.a26(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1177454785, $dirty, -1, 'net.perfectdreams.luna.modals.DiscordButton (DiscordButton.kt:13)');
      }
      sourceInformationMarkerStart($composer_0, 1957655752, 'CC(remember):DiscordButton.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 112) === 32 | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      var it = tmp0.s25();
      var tmp;
      if (invalid || it === Companion_getInstance().x24_1) {
        var value = DiscordButton$lambda(attrs_0, type);
        tmp0.t25(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Button(tmp0_group, content_0._v, $composer_0, 112 & $dirty >> 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp1_safe_receiver = $composer_0.i25();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.a2r(DiscordButton$lambda_0(type, attrs_0, content_0, $changed, $default));
    }
  }
  var DiscordButtonType_PRIMARY_instance;
  var DiscordButtonType_SUCCESS_instance;
  var DiscordButtonType_SECONDARY_instance;
  var DiscordButtonType_DANGER_instance;
  var DiscordButtonType_NO_BACKGROUND_LIGHT_TEXT_instance;
  var DiscordButtonType_NO_BACKGROUND_DARK_TEXT_instance;
  var DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_LIGHT_TEXT_instance;
  var DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT_instance;
  var DiscordButtonType_entriesInitialized;
  function DiscordButtonType_initEntries() {
    if (DiscordButtonType_entriesInitialized)
      return Unit_instance;
    DiscordButtonType_entriesInitialized = true;
    DiscordButtonType_PRIMARY_instance = new DiscordButtonType('PRIMARY', 0);
    DiscordButtonType_SUCCESS_instance = new DiscordButtonType('SUCCESS', 1);
    DiscordButtonType_SECONDARY_instance = new DiscordButtonType('SECONDARY', 2);
    DiscordButtonType_DANGER_instance = new DiscordButtonType('DANGER', 3);
    DiscordButtonType_NO_BACKGROUND_LIGHT_TEXT_instance = new DiscordButtonType('NO_BACKGROUND_LIGHT_TEXT', 4);
    DiscordButtonType_NO_BACKGROUND_DARK_TEXT_instance = new DiscordButtonType('NO_BACKGROUND_DARK_TEXT', 5);
    DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_LIGHT_TEXT_instance = new DiscordButtonType('NO_BACKGROUND_THEME_DEPENDENT_LIGHT_TEXT', 6);
    DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT_instance = new DiscordButtonType('NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT', 7);
  }
  function DiscordButtonType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DiscordButton$lambda($attrs, $type) {
    return function ($this$Button) {
      var tmp0_safe_receiver = $attrs._v;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$Button);
      var tmp;
      switch ($type.l2_1) {
        case 0:
          tmp = 'primary';
          break;
        case 1:
          tmp = 'success';
          break;
        case 2:
          tmp = 'secondary';
          break;
        case 3:
          tmp = 'danger';
          break;
        case 4:
          tmp = 'no-background-light-text';
          break;
        case 5:
          tmp = 'no-background-dark-text';
          break;
        case 6:
          tmp = 'no-background-theme-dependent-light-text';
          break;
        case 7:
          tmp = 'no-background-theme-dependent-dark-text';
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      $this$Button.h3q(['discord-button', tmp]);
      return Unit_instance;
    };
  }
  function DiscordButton$lambda_0($type, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      DiscordButton($type, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT_getInstance() {
    DiscordButtonType_initEntries();
    return DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT_instance;
  }
  var net_perfectdreams_luna_modals_Modal$stable;
  var Size_SMALL_instance;
  var Size_MEDIUM_instance;
  var Size_LARGE_instance;
  var Size_entriesInitialized;
  function Size_initEntries() {
    if (Size_entriesInitialized)
      return Unit_instance;
    Size_entriesInitialized = true;
    Size_SMALL_instance = new Size('SMALL', 0);
    Size_MEDIUM_instance = new Size('MEDIUM', 1);
    Size_LARGE_instance = new Size('LARGE', 2);
  }
  function Size(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Size_MEDIUM_getInstance() {
    Size_initEntries();
    return Size_MEDIUM_instance;
  }
  function Modal(modalManager, title, size, canBeClosedByClickingOutsideTheWindow, body, buttons) {
    this.n3w_1 = modalManager;
    this.o3w_1 = title;
    this.p3w_1 = size;
    this.q3w_1 = canBeClosedByClickingOutsideTheWindow;
    this.r3w_1 = body;
    this.s3w_1 = buttons;
  }
  protoOf(Modal).z1l = function () {
    this.n3w_1.v3w(this);
  };
  var net_perfectdreams_luna_modals_ModalManager$stable;
  function net_perfectdreams_luna_modals_ModalManager$stableprop_getter() {
    return net_perfectdreams_luna_modals_ModalManager$stable;
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.g3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ModalManager$render$lambda$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ModalManager$render$lambda$lambda$slambda).y2s = function ($this$LaunchedEffect, $completion) {
    var tmp = this.k1p($this$LaunchedEffect, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(ModalManager$render$lambda$lambda$slambda).r8 = function (p1, $completion) {
    return this.y2s((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ModalManager$render$lambda$lambda$slambda).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        if (tmp === 0) {
          this.y7_1 = 1;
          var tmp_0 = document.body.classList;
          var this_0 = 'modal-open';
          tmp_0.add(this_0);
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
  protoOf(ModalManager$render$lambda$lambda$slambda).k1p = function ($this$LaunchedEffect, completion) {
    var i = new ModalManager$render$lambda$lambda$slambda(completion);
    i.e3x_1 = $this$LaunchedEffect;
    return i;
  };
  function ModalManager$render$lambda$lambda$slambda_0(resultContinuation) {
    var i = new ModalManager$render$lambda$lambda$slambda(resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.y2s($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ModalManager$render$lambda$lambda$lambda$lambda($activeModal) {
    return function (it) {
      var tmp;
      if (equals(it.i3u_1, it.m3u_1)) {
        $activeModal.z1l();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ModalManager$render$lambda$lambda$lambda($activeModal) {
    return function ($this$Div) {
      $this$Div.h3q(['modal-wrapper']);
      var tmp;
      if ($activeModal.q3w_1) {
        $this$Div.m3q(ModalManager$render$lambda$lambda$lambda$lambda($activeModal));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda_0($activeModal) {
    return function ($this$Div) {
      var tmp;
      switch ($activeModal.p3w_1.l2_1) {
        case 0:
          tmp = 'small-modal';
          break;
        case 1:
          tmp = 'medium-modal';
          break;
        case 2:
          tmp = 'large-modal';
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      $this$Div.h3q(['modal', tmp]);
      return Unit_instance;
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda(this$0) {
    return function ($this$ref, it) {
      return this$0.t3w_1($this$ref, it);
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda(this$0) {
    return function ($this$Div) {
      $this$Div.h3q(['content']);
      $this$Div.j3q(ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda(this$0));
      return Unit_instance;
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda_0($this$Div) {
    $this$Div.h3q(['title']);
    return Unit_instance;
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda_1($activeModal) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C149@4964L23:ModalManager.kt#51sv62');
      if (isTraceInProgress()) {
        traceEventStart(1734196590, $changed, -1, 'net.perfectdreams.luna.modals.ModalManager.render.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ModalManager.kt:149)');
      }
      Text($activeModal.o3w_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.g3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda_0($activeModal) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C148@4900L20,148@4922L103,148@4888L137,152@5080L19:ModalManager.kt#51sv62');
      if (isTraceInProgress()) {
        traceEventStart(801042927, $changed, -1, 'net.perfectdreams.luna.modals.ModalManager.render.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ModalManager.kt:148)');
      }
      sourceInformationMarkerStart($composer_0, 1003108483, 'CC(remember):ModalManager.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.s25();
      var tmp;
      if (false || it === Companion_getInstance().x24_1) {
        var value = ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda_0;
        $composer_0.t25(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1734196590, true, ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda_1($activeModal), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.u25(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.s25();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().x24_1) {
        var value_0 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.t25(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      $activeModal.r3w_1($activeModal, $composer_0, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.g3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$0) {
    return function ($this$ref, it) {
      return this$0.t3w_1($this$ref, it);
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda_1(this$0) {
    return function ($this$Div) {
      $this$Div.h3q(['buttons-wrapper']);
      $this$Div.j3q(ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$0));
      return Unit_instance;
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda_2($activeModal) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C*164@5651L19:ModalManager.kt#51sv62');
      if (isTraceInProgress()) {
        traceEventStart(1601766794, $changed, -1, 'net.perfectdreams.luna.modals.ModalManager.render.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ModalManager.kt:163)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $activeModal.s3w_1.l();
      while (_iterator__ex2g4s.m()) {
        var element = _iterator__ex2g4s.n();
        element($activeModal, $composer_0, 0);
      }
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.g3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda_1(this$0, $activeModal) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C141@4601L247,147@4850L283,141@4589L544:ModalManager.kt#51sv62');
      if (isTraceInProgress()) {
        traceEventStart(-2091108176, $changed, -1, 'net.perfectdreams.luna.modals.ModalManager.render.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ModalManager.kt:141)');
      }
      sourceInformationMarkerStart($composer_0, 489739111, 'CC(remember):ModalManager.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.y25(this$0);
      // Inline function 'kotlin.let' call
      var it = $composer_0.s25();
      var tmp;
      if (invalid || it === Companion_getInstance().x24_1) {
        var value = ModalManager$render$lambda$lambda$lambda$lambda$lambda(this$0);
        $composer_0.t25(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(801042927, true, ModalManager$render$lambda$lambda$lambda$lambda$lambda_0($activeModal), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.u25(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.s25();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().x24_1) {
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.t25(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 48, 0);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$activeModal.s3w_1.t()) {
        $composer_0.d25(-1997347281);
        sourceInformation($composer_0, '156@5255L275,162@5532L218,156@5243L507');
        sourceInformationMarkerStart($composer_0, 489760067, 'CC(remember):ModalManager.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_0.y25(this$0);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_0.s25();
        var tmp_3;
        if (invalid_1 || it_1 === Companion_getInstance().x24_1) {
          var value_1 = ModalManager$render$lambda$lambda$lambda$lambda$lambda_1(this$0);
          $composer_0.t25(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(1601766794, true, ModalManager$render$lambda$lambda$lambda$lambda$lambda_2($activeModal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_2.u25(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_2.s25();
        var tmp_5;
        if (invalid_2 || it_2 === Companion_getInstance().x24_1) {
          var value_2 = ComposableLambda$invoke$ref_2(dispatchReceiver_0);
          $composer_2.t25(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp1_group, tmp0_0, $composer_0, 48, 0);
        $composer_0.e25();
      } else {
        $composer_0.d25(-1996790862);
        $composer_0.e25();
      }
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.g3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ModalManager$render$lambda$lambda$lambda_0($activeModal, this$0) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C:ModalManager.kt#51sv62');
      if (isTraceInProgress()) {
        traceEventStart(1305889924, $changed, -1, 'net.perfectdreams.luna.modals.ModalManager.render.<anonymous>.<anonymous>.<anonymous> (ModalManager.kt:130)');
      }
      $composer_0.f25(829769185, $activeModal);
      sourceInformation($composer_0, '131@4078L475,140@4555L1259,131@4066L1748');
      sourceInformationMarkerStart($composer_0, 829769727, 'CC(remember):ModalManager.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.y25($activeModal);
      // Inline function 'kotlin.let' call
      var it = $composer_0.s25();
      var tmp;
      if (invalid || it === Companion_getInstance().x24_1) {
        var value = ModalManager$render$lambda$lambda$lambda$lambda_0($activeModal);
        $composer_0.t25(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-2091108176, true, ModalManager$render$lambda$lambda$lambda$lambda_1(this$0, $activeModal), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.u25(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.s25();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().x24_1) {
        var value_0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.t25(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 48, 0);
      $composer_0.g25();
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.g3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ModalManager$render$lambda$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ModalManager$render$lambda$lambda$slambda_1).y2s = function ($this$LaunchedEffect, $completion) {
    var tmp = this.k1p($this$LaunchedEffect, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(ModalManager$render$lambda$lambda$slambda_1).r8 = function (p1, $completion) {
    return this.y2s((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ModalManager$render$lambda$lambda$slambda_1).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        if (tmp === 0) {
          this.y7_1 = 1;
          var tmp_0 = document.body.classList;
          var this_0 = 'modal-open';
          tmp_0.remove(this_0);
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
  protoOf(ModalManager$render$lambda$lambda$slambda_1).k1p = function ($this$LaunchedEffect, completion) {
    var i = new ModalManager$render$lambda$lambda$slambda_1(completion);
    i.n3x_1 = $this$LaunchedEffect;
    return i;
  };
  function ModalManager$render$lambda$lambda$slambda_2(resultContinuation) {
    var i = new ModalManager$render$lambda$lambda$slambda_1(resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.y2s($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ModalManager$render$lambda$lambda(this$0) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C:ModalManager.kt#51sv62');
      if (isTraceInProgress()) {
        traceEventStart(-1158779106, $changed, -1, 'net.perfectdreams.luna.modals.ModalManager.render.<anonymous>.<anonymous> (ModalManager.kt:111)');
      }
      var activeModal = lastOrNull(this$0.u3w_1);
      if (!(activeModal == null)) {
        $composer_0.d25(1758973394);
        sourceInformation($composer_0, '114@3345L100,114@3324L121,119@3537L454,129@3993L1869,119@3525L2337');
        sourceInformationMarkerStart($composer_0, -1190186014, 'CC(remember):ModalManager.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.s25();
        var tmp;
        if (false || it === Companion_getInstance().x24_1) {
          var value = ModalManager$render$lambda$lambda$slambda_0(null);
          $composer_0.t25(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        LaunchedEffect(Unit_instance, tmp0_group, $composer_0, 6);
        sourceInformationMarkerStart($composer_0, -1190179516, 'CC(remember):ModalManager.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.y25(activeModal);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.s25();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance().x24_1) {
          var value_0 = ModalManager$render$lambda$lambda$lambda(activeModal);
          $composer_0.t25(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1305889924, true, ModalManager$render$lambda$lambda$lambda_0(activeModal, this$0), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.u25(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_1.s25();
        var tmp_3;
        if (invalid_0 || it_1 === Companion_getInstance().x24_1) {
          var value_1 = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.t25(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp1_group, tmp0, $composer_0, 48, 0);
        $composer_0.e25();
      } else {
        $composer_0.d25(1761461888);
        sourceInformation($composer_0, '172@5929L103,172@5908L124');
        sourceInformationMarkerStart($composer_0, -1190103323, 'CC(remember):ModalManager.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_2 = $composer_0.s25();
        var tmp_5;
        if (false || it_2 === Companion_getInstance().x24_1) {
          var value_2 = ModalManager$render$lambda$lambda$slambda_2(null);
          $composer_0.t25(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        LaunchedEffect(Unit_instance, tmp2_group, $composer_0, 6);
        $composer_0.e25();
      }
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.g3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ModalManager$render$lambda(this$0) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C110@3186L2878,110@3182L2882:ModalManager.kt#51sv62');
      if (isTraceInProgress()) {
        traceEventStart(1794874301, $changed, -1, 'net.perfectdreams.luna.modals.ModalManager.render.<anonymous> (ModalManager.kt:110)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1158779106, true, ModalManager$render$lambda$lambda(this$0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.u25(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.s25();
      var tmp;
      if (invalid || it === Companion_getInstance().x24_1) {
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.t25(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(null, tmp0, $composer_0, 48, 1);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ModalManager(onModalCreationRef) {
    this.t3w_1 = onModalCreationRef;
    this.u3w_1 = mutableStateListOf();
  }
  protoOf(ModalManager).v3w = function (modal) {
    return this.u3w_1.x1z(modal);
  };
  protoOf(ModalManager).o3x = function (title, size, body, buttons) {
    this.r3x(title, size, true, body, arrayConcat([[ComposableSingletons$ModalManagerKt_getInstance().q3x_1], buttons]));
  };
  protoOf(ModalManager).r3x = function (title, size, canBeClosedByClickingOutsideTheWindow, body, buttons) {
    this.u3w_1.q1z(new Modal(this, title, size, canBeClosedByClickingOutsideTheWindow, body, toMutableList(buttons)));
  };
  protoOf(ModalManager).s3x = function (element) {
    renderComposable(element, VOID, ComposableLambda$invoke$ref(composableLambdaInstance(1794874301, true, ModalManager$render$lambda(this))));
  };
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.g3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$ModalManagerKt$lambda$125772641$lambda($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C81@2407L14:ModalManager.kt#51sv62');
    if (isTraceInProgress()) {
      traceEventStart(125772641, $changed, -1, 'net.perfectdreams.luna.modals.ComposableSingletons$ModalManagerKt.lambda$125772641.<anonymous> (ModalManager.kt:81)');
    }
    Text('Fechar', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.g3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$ModalManagerKt$lambda$1305301452$lambda(modal, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C76@2274L109,76@2193L246:ModalManager.kt#51sv62');
    if (isTraceInProgress()) {
      traceEventStart(1305301452, $changed, -1, 'net.perfectdreams.luna.modals.ComposableSingletons$ModalManagerKt.lambda$1305301452.<anonymous> (ModalManager.kt:76)');
    }
    var tmp = DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT_getInstance();
    sourceInformationMarkerStart($composer_0, 264248505, 'CC(remember):ModalManager.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.y25(modal);
    // Inline function 'kotlin.let' call
    var it = $composer_0.s25();
    var tmp_0;
    if (invalid || it === Companion_getInstance().x24_1) {
      var value = ComposableSingletons$ModalManagerKt$lambda$1305301452$lambda$lambda(modal);
      $composer_0.t25(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DiscordButton(tmp, tmp0_group, ComposableSingletons$ModalManagerKt_getInstance().p3x_1, $composer_0, 390, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ModalManagerKt$lambda$1305301452$lambda$lambda$lambda($modal) {
    return function (it) {
      $modal.z1l();
      return Unit_instance;
    };
  }
  function ComposableSingletons$ModalManagerKt$lambda$1305301452$lambda$lambda($modal) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.m3q(ComposableSingletons$ModalManagerKt$lambda$1305301452$lambda$lambda$lambda($modal));
      return Unit_instance;
    };
  }
  function ComposableSingletons$ModalManagerKt() {
    ComposableSingletons$ModalManagerKt_instance = this;
    var tmp = this;
    tmp.p3x_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(125772641, false, ComposableSingletons$ModalManagerKt$lambda$125772641$lambda));
    var tmp_0 = this;
    tmp_0.q3x_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(1305301452, false, ComposableSingletons$ModalManagerKt$lambda$1305301452$lambda));
  }
  var ComposableSingletons$ModalManagerKt_instance;
  function ComposableSingletons$ModalManagerKt_getInstance() {
    if (ComposableSingletons$ModalManagerKt_instance == null)
      new ComposableSingletons$ModalManagerKt();
    return ComposableSingletons$ModalManagerKt_instance;
  }
  //region block: init
  net_perfectdreams_luna_modals_Modal$stable = 8;
  net_perfectdreams_luna_modals_ModalManager$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Size_MEDIUM_getInstance;
  _.$_$.b = ModalManager;
  _.$_$.c = net_perfectdreams_luna_modals_ModalManager$stableprop_getter;
  //endregion
  return _;
}));

//# sourceMappingURL=luna-modal-manager-frontend.js.map
