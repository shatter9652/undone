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
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.y;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.q;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.x;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.xh;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.w;
  var Button = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.t;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var THROW_IAE = kotlin_kotlin.$_$.yh;
  var enumEntries = kotlin_kotlin.$_$.fb;
  var Unit_getInstance = kotlin_kotlin.$_$.z4;
  var Enum = kotlin_kotlin.$_$.nh;
  var protoOf = kotlin_kotlin.$_$.de;
  var initMetadataForClass = kotlin_kotlin.$_$.cd;
  var VOID = kotlin_kotlin.$_$.e;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.vi;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var CoroutineImpl = kotlin_kotlin.$_$.bb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var isInterface = kotlin_kotlin.$_$.qd;
  var initMetadataForLambda = kotlin_kotlin.$_$.gd;
  var equals = kotlin_kotlin.$_$.uc;
  var Text = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.i1;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var Div = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.v;
  var lastOrNull = kotlin_kotlin.$_$.h8;
  var LaunchedEffect = kotlin_androidx_compose_runtime_runtime.$_$.h;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.r;
  var removeLastOrNull = kotlin_kotlin.$_$.x8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var copyToArray = kotlin_kotlin.$_$.n7;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var toMutableList = kotlin_kotlin.$_$.da;
  var renderComposable = kotlin_net_perfectdreams_compose_htmldreams_internal_html_core_runtime.$_$.f;
  var initMetadataForObject = kotlin_kotlin.$_$.hd;
  var SuspendFunction1 = kotlin_kotlin.$_$.cb;
  var Span = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.d1;
  var DisposableEffectResult = kotlin_androidx_compose_runtime_runtime.$_$.f;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DiscordButtonType, 'DiscordButtonType', VOID, Enum);
  initMetadataForClass(Size, 'Size', VOID, Enum);
  initMetadataForClass(Modal, 'Modal');
  initMetadataForLambda(ModalManager$render$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(ModalManager$render$lambda$lambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(ModalManager, 'ModalManager');
  initMetadataForObject(ComposableSingletons$ModalManagerKt, 'ComposableSingletons$ModalManagerKt');
  initMetadataForClass(RawHtml$$inlined$cache$2$2$1, VOID, VOID, VOID, [DisposableEffectResult]);
  //endregion
  function DiscordButton(type, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1177454785);
    sourceInformation($composer_0, 'C(DiscordButton)P(2)13@453L711,13@446L728:DiscordButton.kt#51sv62');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(type.get_ordinal_ip24qg_k$()) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
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
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = DiscordButton$lambda(attrs_0, type);
        tmp0.updateRememberedValue_l1wh71_k$(value);
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
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(DiscordButton$lambda_0(type, attrs_0, content_0, $changed, $default));
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
  function values() {
    return [DiscordButtonType_PRIMARY_getInstance(), DiscordButtonType_SUCCESS_getInstance(), DiscordButtonType_SECONDARY_getInstance(), DiscordButtonType_DANGER_getInstance(), DiscordButtonType_NO_BACKGROUND_LIGHT_TEXT_getInstance(), DiscordButtonType_NO_BACKGROUND_DARK_TEXT_getInstance(), DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_LIGHT_TEXT_getInstance(), DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'PRIMARY':
        return DiscordButtonType_PRIMARY_getInstance();
      case 'SUCCESS':
        return DiscordButtonType_SUCCESS_getInstance();
      case 'SECONDARY':
        return DiscordButtonType_SECONDARY_getInstance();
      case 'DANGER':
        return DiscordButtonType_DANGER_getInstance();
      case 'NO_BACKGROUND_LIGHT_TEXT':
        return DiscordButtonType_NO_BACKGROUND_LIGHT_TEXT_getInstance();
      case 'NO_BACKGROUND_DARK_TEXT':
        return DiscordButtonType_NO_BACKGROUND_DARK_TEXT_getInstance();
      case 'NO_BACKGROUND_THEME_DEPENDENT_LIGHT_TEXT':
        return DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_LIGHT_TEXT_getInstance();
      case 'NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT':
        return DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT_getInstance();
      default:
        DiscordButtonType_initEntries();
        THROW_IAE('No enum constant net.perfectdreams.luna.modals.DiscordButtonType.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var DiscordButtonType_entriesInitialized;
  function DiscordButtonType_initEntries() {
    if (DiscordButtonType_entriesInitialized)
      return Unit_getInstance();
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
  var $ENTRIES;
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
      switch ($type.get_ordinal_ip24qg_k$()) {
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
      $this$Button.classes_ayghm2_k$(['discord-button', tmp]);
      return Unit_getInstance();
    };
  }
  function DiscordButton$lambda_0($type, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      DiscordButton($type, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function DiscordButtonType_PRIMARY_getInstance() {
    DiscordButtonType_initEntries();
    return DiscordButtonType_PRIMARY_instance;
  }
  function DiscordButtonType_SUCCESS_getInstance() {
    DiscordButtonType_initEntries();
    return DiscordButtonType_SUCCESS_instance;
  }
  function DiscordButtonType_SECONDARY_getInstance() {
    DiscordButtonType_initEntries();
    return DiscordButtonType_SECONDARY_instance;
  }
  function DiscordButtonType_DANGER_getInstance() {
    DiscordButtonType_initEntries();
    return DiscordButtonType_DANGER_instance;
  }
  function DiscordButtonType_NO_BACKGROUND_LIGHT_TEXT_getInstance() {
    DiscordButtonType_initEntries();
    return DiscordButtonType_NO_BACKGROUND_LIGHT_TEXT_instance;
  }
  function DiscordButtonType_NO_BACKGROUND_DARK_TEXT_getInstance() {
    DiscordButtonType_initEntries();
    return DiscordButtonType_NO_BACKGROUND_DARK_TEXT_instance;
  }
  function DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_LIGHT_TEXT_getInstance() {
    DiscordButtonType_initEntries();
    return DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_LIGHT_TEXT_instance;
  }
  function DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT_getInstance() {
    DiscordButtonType_initEntries();
    return DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT_instance;
  }
  var net_perfectdreams_luna_modals_Modal$stable;
  var Size_SMALL_instance;
  var Size_MEDIUM_instance;
  var Size_LARGE_instance;
  function values_0() {
    return [Size_SMALL_getInstance(), Size_MEDIUM_getInstance(), Size_LARGE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SMALL':
        return Size_SMALL_getInstance();
      case 'MEDIUM':
        return Size_MEDIUM_getInstance();
      case 'LARGE':
        return Size_LARGE_getInstance();
      default:
        Size_initEntries();
        THROW_IAE('No enum constant net.perfectdreams.luna.modals.Modal.Size.' + value);
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Size_entriesInitialized;
  function Size_initEntries() {
    if (Size_entriesInitialized)
      return Unit_getInstance();
    Size_entriesInitialized = true;
    Size_SMALL_instance = new Size('SMALL', 0);
    Size_MEDIUM_instance = new Size('MEDIUM', 1);
    Size_LARGE_instance = new Size('LARGE', 2);
  }
  var $ENTRIES_0;
  function Size(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Size_SMALL_getInstance() {
    Size_initEntries();
    return Size_SMALL_instance;
  }
  function Size_MEDIUM_getInstance() {
    Size_initEntries();
    return Size_MEDIUM_instance;
  }
  function Size_LARGE_getInstance() {
    Size_initEntries();
    return Size_LARGE_instance;
  }
  function Modal(modalManager, title, size, canBeClosedByClickingOutsideTheWindow, body, buttons) {
    this.modalManager_1 = modalManager;
    this.title_1 = title;
    this.size_1 = size;
    this.canBeClosedByClickingOutsideTheWindow_1 = canBeClosedByClickingOutsideTheWindow;
    this.body_1 = body;
    this.buttons_1 = buttons;
  }
  protoOf(Modal).get_modalManager_6fs3uf_k$ = function () {
    return this.modalManager_1;
  };
  protoOf(Modal).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Modal).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(Modal).get_canBeClosedByClickingOutsideTheWindow_phi2m5_k$ = function () {
    return this.canBeClosedByClickingOutsideTheWindow_1;
  };
  protoOf(Modal).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(Modal).get_buttons_598yvs_k$ = function () {
    return this.buttons_1;
  };
  protoOf(Modal).close_yn9xrc_k$ = function () {
    this.modalManager_1.closeModal_1xmh0a_k$(this);
  };
  var net_perfectdreams_luna_modals_ModalManager$stable;
  function net_perfectdreams_luna_modals_ModalManager$stableprop_getter() {
    return net_perfectdreams_luna_modals_ModalManager$stable;
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ModalManager$openModal$lambda($it) {
    return function (modal, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C33@1136L11:ModalManager.kt#51sv62');
      if (isTraceInProgress()) {
        traceEventStart(880547433, $changed, -1, 'net.perfectdreams.luna.modals.ModalManager.openModal.<anonymous>.<anonymous> (ModalManager.kt:33)');
      }
      RawHtml($it, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ModalManager$openModal$lambda_0($modal) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C46@1551L23:ModalManager.kt#51sv62');
      if (isTraceInProgress()) {
        traceEventStart(-124820804, $changed, -1, 'net.perfectdreams.luna.modals.ModalManager.openModal.<anonymous> (ModalManager.kt:46)');
      }
      RawHtml($modal.get_bodyHtml_3nfhe2_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ModalManager$render$lambda$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ModalManager$render$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ModalManager$render$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ModalManager$render$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0 = document.body.classList;
          var this_0 = 'modal-open';
          tmp_0.add(this_0);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ModalManager$render$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new ModalManager$render$lambda$lambda$slambda(completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(ModalManager$render$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ModalManager$render$lambda$lambda$slambda_0(resultContinuation) {
    var i = new ModalManager$render$lambda$lambda$slambda(resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ModalManager$render$lambda$lambda$lambda$lambda($activeModal) {
    return function (it) {
      var tmp;
      if (equals(it.get_target_juba8q_k$(), it.get_currentTarget_yyne0v_k$())) {
        $activeModal.close_yn9xrc_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ModalManager$render$lambda$lambda$lambda($activeModal) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$(['modal-wrapper']);
      var tmp;
      if ($activeModal.get_canBeClosedByClickingOutsideTheWindow_phi2m5_k$()) {
        $this$Div.onClick_q9cds6_k$(ModalManager$render$lambda$lambda$lambda$lambda($activeModal));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda_0($activeModal) {
    return function ($this$Div) {
      var tmp;
      switch ($activeModal.get_size_woubt6_k$().get_ordinal_ip24qg_k$()) {
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
      $this$Div.classes_ayghm2_k$(['modal', tmp]);
      return Unit_getInstance();
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda(this$0) {
    return function ($this$ref, it) {
      return this$0.onModalCreationRef_1($this$ref, it);
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda(this$0) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$(['content']);
      $this$Div.ref_o4g25g_k$(ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda(this$0));
      return Unit_getInstance();
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda_0($this$Div) {
    $this$Div.classes_ayghm2_k$(['title']);
    return Unit_getInstance();
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda_1($activeModal) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C149@4964L23:ModalManager.kt#51sv62');
      if (isTraceInProgress()) {
        traceEventStart(1734196590, $changed, -1, 'net.perfectdreams.luna.modals.ModalManager.render.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ModalManager.kt:149)');
      }
      Text($activeModal.get_title_iz32un_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
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
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
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
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      $activeModal.get_body_wojkyz_k$()($activeModal, $composer_0, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$0) {
    return function ($this$ref, it) {
      return this$0.onModalCreationRef_1($this$ref, it);
    };
  }
  function ModalManager$render$lambda$lambda$lambda$lambda$lambda_1(this$0) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$(['buttons-wrapper']);
      $this$Div.ref_o4g25g_k$(ModalManager$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$0));
      return Unit_getInstance();
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
      var _iterator__ex2g4s = $activeModal.get_buttons_598yvs_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        element($activeModal, $composer_0, 0);
      }
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
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
      var invalid = $composer_0.changedInstance_s1wkiy_k$(this$0);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ModalManager$render$lambda$lambda$lambda$lambda$lambda(this$0);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
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
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 48, 0);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$activeModal.get_buttons_598yvs_k$().isEmpty_y1axqb_k$()) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1997347281);
        sourceInformation($composer_0, '156@5255L275,162@5532L218,156@5243L507');
        sourceInformationMarkerStart($composer_0, 489760067, 'CC(remember):ModalManager.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_0.changedInstance_s1wkiy_k$(this$0);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = ModalManager$render$lambda$lambda$lambda$lambda$lambda_1(this$0);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
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
        var invalid_2 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_2 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_2 = ComposableLambda$invoke$ref_4(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp1_group, tmp0_0, $composer_0, 48, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1996790862);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ModalManager$render$lambda$lambda$lambda_0($activeModal, this$0) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C:ModalManager.kt#51sv62');
      if (isTraceInProgress()) {
        traceEventStart(1305889924, $changed, -1, 'net.perfectdreams.luna.modals.ModalManager.render.<anonymous>.<anonymous>.<anonymous> (ModalManager.kt:130)');
      }
      $composer_0.startMovableGroup_clfloq_k$(829769185, $activeModal);
      sourceInformation($composer_0, '131@4078L475,140@4555L1259,131@4066L1748');
      sourceInformationMarkerStart($composer_0, 829769727, 'CC(remember):ModalManager.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$($activeModal);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ModalManager$render$lambda$lambda$lambda$lambda_0($activeModal);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
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
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 48, 0);
      $composer_0.endMovableGroup_kd2hcs_k$();
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ModalManager$render$lambda$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ModalManager$render$lambda$lambda$slambda_1).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ModalManager$render$lambda$lambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ModalManager$render$lambda$lambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0 = document.body.classList;
          var this_0 = 'modal-open';
          tmp_0.remove(this_0);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ModalManager$render$lambda$lambda$slambda_1).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new ModalManager$render$lambda$lambda$slambda_1(completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(ModalManager$render$lambda$lambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ModalManager$render$lambda$lambda$slambda_2(resultContinuation) {
    var i = new ModalManager$render$lambda$lambda$slambda_1(resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
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
      var activeModal = lastOrNull(this$0.modals_1);
      if (!(activeModal == null)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1758973394);
        sourceInformation($composer_0, '114@3345L100,114@3324L121,119@3537L454,129@3993L1869,119@3525L2337');
        sourceInformationMarkerStart($composer_0, -1190186014, 'CC(remember):ModalManager.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ModalManager$render$lambda$lambda$slambda_0(null);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        LaunchedEffect(Unit_getInstance(), tmp0_group, $composer_0, 6);
        sourceInformationMarkerStart($composer_0, -1190179516, 'CC(remember):ModalManager.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$(activeModal);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ModalManager$render$lambda$lambda$lambda(activeModal);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
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
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_6(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp1_group, tmp0, $composer_0, 48, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(1761461888);
        sourceInformation($composer_0, '172@5929L103,172@5908L124');
        sourceInformationMarkerStart($composer_0, -1190103323, 'CC(remember):ModalManager.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_2 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_2 = ModalManager$render$lambda$lambda$slambda_2(null);
          $composer_0.updateRememberedValue_l1wh71_k$(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        LaunchedEffect(Unit_getInstance(), tmp2_group, $composer_0, 6);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
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
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
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
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ModalManager(onModalCreationRef) {
    this.onModalCreationRef_1 = onModalCreationRef;
    this.modals_1 = mutableStateListOf();
  }
  protoOf(ModalManager).get_onModalCreationRef_g25vbj_k$ = function () {
    return this.onModalCreationRef_1;
  };
  protoOf(ModalManager).set_modals_9t4ko1_k$ = function (_set____db54di) {
    this.modals_1 = _set____db54di;
  };
  protoOf(ModalManager).get_modals_gqfzov_k$ = function () {
    return this.modals_1;
  };
  protoOf(ModalManager).closeModal_1xmh0a_k$ = function (modal) {
    return this.modals_1.remove_an8aut_k$(modal);
  };
  protoOf(ModalManager).closeModal_ct8vgb_k$ = function () {
    removeLastOrNull(this.modals_1);
  };
  protoOf(ModalManager).closeAllModals_agjiip_k$ = function () {
    this.modals_1.clear_j9egeb_k$();
  };
  protoOf(ModalManager).openModal_8cnkqu_k$ = function (modal) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = modal.get_buttonsHtml_ex2xst_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = ComposableLambda$invoke$ref(composableLambdaInstance(880547433, true, ModalManager$openModal$lambda(item)));
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var buttons = copyToArray(destination);
    var tmp = modal.get_title_iz32un_k$();
    var tmp_0;
    switch (modal.get_size_woubt6_k$().get_ordinal_ip24qg_k$()) {
      case 0:
        tmp_0 = Size_SMALL_getInstance();
        break;
      case 1:
        tmp_0 = Size_MEDIUM_getInstance();
        break;
      case 2:
        tmp_0 = Size_LARGE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var tmp_1 = tmp_0;
    var tmp_2 = modal.get_canBeClosedByClickingOutsideTheWindow_phi2m5_k$();
    this.openModal_kyo100_k$(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_0(composableLambdaInstance(-124820804, true, ModalManager$openModal$lambda_0(modal))), buttons.slice());
  };
  protoOf(ModalManager).openModalWithOnlyCloseButton_ww5qub_k$ = function (title, size, body) {
    this.openModalWithCloseButton_r2hthp_k$(title, size, body, []);
  };
  protoOf(ModalManager).openModalWithCloseButton_r2hthp_k$ = function (title, size, body, buttons) {
    this.openModal_kyo100_k$(title, size, true, body, arrayConcat([[ComposableSingletons$ModalManagerKt_getInstance().lambda$1305301452__1], buttons]));
  };
  protoOf(ModalManager).openModal_kyo100_k$ = function (title, size, canBeClosedByClickingOutsideTheWindow, body, buttons) {
    this.modals_1.add_wl2rvy_k$(new Modal(this, title, size, canBeClosedByClickingOutsideTheWindow, body, toMutableList(buttons)));
  };
  protoOf(ModalManager).render_77pd8l_k$ = function (element) {
    renderComposable(element, VOID, ComposableLambda$invoke$ref_1(composableLambdaInstance(1794874301, true, ModalManager$render$lambda(this))));
  };
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
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
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_9(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
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
    var invalid = $composer_0.changedInstance_s1wkiy_k$(modal);
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value = ComposableSingletons$ModalManagerKt$lambda$1305301452$lambda$lambda(modal);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DiscordButton(tmp, tmp0_group, ComposableSingletons$ModalManagerKt_getInstance().lambda$125772641__1, $composer_0, 390, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ModalManagerKt$lambda$1305301452$lambda$lambda$lambda($modal) {
    return function (it) {
      $modal.close_yn9xrc_k$();
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$ModalManagerKt$lambda$1305301452$lambda$lambda($modal) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(ComposableSingletons$ModalManagerKt$lambda$1305301452$lambda$lambda$lambda($modal));
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$ModalManagerKt() {
    ComposableSingletons$ModalManagerKt_instance = this;
    var tmp = this;
    tmp.lambda$125772641__1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(125772641, false, ComposableSingletons$ModalManagerKt$lambda$125772641$lambda));
    var tmp_0 = this;
    tmp_0.lambda$1305301452__1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(1305301452, false, ComposableSingletons$ModalManagerKt$lambda$1305301452$lambda));
  }
  protoOf(ComposableSingletons$ModalManagerKt).get_lambda$125772641_j44hgs_k$ = function () {
    return this.lambda$125772641__1;
  };
  protoOf(ComposableSingletons$ModalManagerKt).get_lambda$1305301452_jac0z_k$ = function () {
    return this.lambda$1305301452__1;
  };
  var ComposableSingletons$ModalManagerKt_instance;
  function ComposableSingletons$ModalManagerKt_getInstance() {
    if (ComposableSingletons$ModalManagerKt_instance == null)
      new ComposableSingletons$ModalManagerKt();
    return ComposableSingletons$ModalManagerKt_instance;
  }
  function RawHtml(rawHtml, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1718645317);
    sourceInformation($composer_0, 'C(RawHtml):RawHtml.kt#51sv62');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(rawHtml) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1718645317, $dirty, -1, 'net.perfectdreams.luna.modals.RawHtml (RawHtml.kt:8)');
      }
      $composer_0.startMovableGroup_clfloq_k$(-1944248172, rawHtml);
      sourceInformation($composer_0, '13@567L420,13@554L434');
      sourceInformationMarkerStart($composer_0, -1944247063, 'CC(remember):RawHtml.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = RawHtml$lambda(rawHtml);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Span(tmp0_group, null, $composer_0, 0, 2);
      $composer_0.endMovableGroup_kd2hcs_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(RawHtml$lambda_0(rawHtml, $changed));
    }
  }
  function RawHtml$$inlined$cache$2$2$1() {
  }
  protoOf(RawHtml$$inlined$cache$2$2$1).dispose_3nnxhr_k$ = function () {
  };
  function RawHtml$lambda$lambda($rawHtml) {
    return function ($this$ref, element) {
      var range = document.createRange();
      var fragment = range.createContextualFragment($rawHtml);
      element.appendChild(fragment);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new RawHtml$$inlined$cache$2$2$1();
    };
  }
  function RawHtml$lambda($rawHtml) {
    return function ($this$Span) {
      $this$Span.ref_o4g25g_k$(RawHtml$lambda$lambda($rawHtml));
      return Unit_getInstance();
    };
  }
  function RawHtml$lambda_0($rawHtml, $$changed) {
    return function ($composer, $force) {
      RawHtml($rawHtml, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
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
