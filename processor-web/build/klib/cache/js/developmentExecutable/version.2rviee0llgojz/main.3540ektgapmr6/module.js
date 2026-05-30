(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ButterscotchPreprocessor-processor-common.js', './androidx-compose-runtime-runtime.js', './luna-modal-manager-frontend.js', './ComposeHTMLDreams-internal-html-core-runtime.js', './ComposeHTMLDreams-html-core.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlin-web.js', './kotlin-js.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ButterscotchPreprocessor-processor-common.js'), require('./androidx-compose-runtime-runtime.js'), require('./luna-modal-manager-frontend.js'), require('./ComposeHTMLDreams-internal-html-core-runtime.js'), require('./ComposeHTMLDreams-html-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlin-web.js'), require('./kotlin-js.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ButterscotchPreprocessor:processor-web'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ButterscotchPreprocessor:processor-web'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ButterscotchPreprocessor:processor-web'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ButterscotchPreprocessor:processor-web'.");
    }
    if (typeof globalThis['ButterscotchPreprocessor-processor-common'] === 'undefined') {
      throw new Error("Error loading module 'ButterscotchPreprocessor:processor-web'. Its dependency 'ButterscotchPreprocessor-processor-common' was not found. Please, check whether 'ButterscotchPreprocessor-processor-common' is loaded prior to 'ButterscotchPreprocessor:processor-web'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'ButterscotchPreprocessor:processor-web'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'ButterscotchPreprocessor:processor-web'.");
    }
    if (typeof globalThis['luna-modal-manager-frontend'] === 'undefined') {
      throw new Error("Error loading module 'ButterscotchPreprocessor:processor-web'. Its dependency 'luna-modal-manager-frontend' was not found. Please, check whether 'luna-modal-manager-frontend' is loaded prior to 'ButterscotchPreprocessor:processor-web'.");
    }
    if (typeof globalThis['ComposeHTMLDreams-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'ButterscotchPreprocessor:processor-web'. Its dependency 'ComposeHTMLDreams-internal-html-core-runtime' was not found. Please, check whether 'ComposeHTMLDreams-internal-html-core-runtime' is loaded prior to 'ButterscotchPreprocessor:processor-web'.");
    }
    if (typeof globalThis['ComposeHTMLDreams-html-core'] === 'undefined') {
      throw new Error("Error loading module 'ButterscotchPreprocessor:processor-web'. Its dependency 'ComposeHTMLDreams-html-core' was not found. Please, check whether 'ComposeHTMLDreams-html-core' is loaded prior to 'ButterscotchPreprocessor:processor-web'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'ButterscotchPreprocessor:processor-web'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'ButterscotchPreprocessor:processor-web'.");
    }
    if (typeof globalThis['kotlin-web'] === 'undefined') {
      throw new Error("Error loading module 'ButterscotchPreprocessor:processor-web'. Its dependency 'kotlin-web' was not found. Please, check whether 'kotlin-web' is loaded prior to 'ButterscotchPreprocessor:processor-web'.");
    }
    if (typeof globalThis['kotlin-js'] === 'undefined') {
      throw new Error("Error loading module 'ButterscotchPreprocessor:processor-web'. Its dependency 'kotlin-js' was not found. Please, check whether 'kotlin-js' is loaded prior to 'ButterscotchPreprocessor:processor-web'.");
    }
    globalThis['ButterscotchPreprocessor:processor-web'] = factory(typeof globalThis['ButterscotchPreprocessor:processor-web'] === 'undefined' ? {} : globalThis['ButterscotchPreprocessor:processor-web'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['ButterscotchPreprocessor-processor-common'], globalThis['androidx-compose-runtime-runtime'], globalThis['luna-modal-manager-frontend'], globalThis['ComposeHTMLDreams-internal-html-core-runtime'], globalThis['ComposeHTMLDreams-html-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlin-web'], globalThis['kotlin-js']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_ButterscotchPreprocessor_processor_common, kotlin_androidx_compose_runtime_runtime, kotlin_net_perfectdreams_luna_modal_manager_frontend, kotlin_net_perfectdreams_compose_htmldreams_internal_html_core_runtime, kotlin_net_perfectdreams_compose_htmldreams_html_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlin_wrappers_kotlin_web, kotlin_org_jetbrains_kotlin_wrappers_kotlin_js) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.de;
  var initMetadataForClass = kotlin_kotlin.$_$.cd;
  var Unit_getInstance = kotlin_kotlin.$_$.z4;
  var THROW_CCE = kotlin_kotlin.$_$.xh;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var VOID = kotlin_kotlin.$_$.e;
  var CoroutineImpl = kotlin_kotlin.$_$.bb;
  var isByteArray = kotlin_kotlin.$_$.kd;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.la;
  var initMetadataForLambda = kotlin_kotlin.$_$.gd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var isInterface = kotlin_kotlin.$_$.qd;
  var numberToInt = kotlin_kotlin.$_$.be;
  var coerceIn = kotlin_kotlin.$_$.me;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var processDataWin = kotlin_ButterscotchPreprocessor_processor_common.$_$.g;
  var Exception = kotlin_kotlin.$_$.ph;
  var mapCapacity = kotlin_kotlin.$_$.l8;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var toInt = kotlin_kotlin.$_$.rg;
  var toList = kotlin_kotlin.$_$.z9;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var parseWav = kotlin_ButterscotchPreprocessor_processor_common.$_$.f;
  var parseOgg = kotlin_ButterscotchPreprocessor_processor_common.$_$.e;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var SuspendFunction1 = kotlin_kotlin.$_$.cb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dd;
  var DisposableEffectResult = kotlin_androidx_compose_runtime_runtime.$_$.f;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.y;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.q;
  var net_perfectdreams_luna_modals_ModalManager$stableprop_getter = kotlin_net_perfectdreams_luna_modal_manager_frontend.$_$.c;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var ModalManager = kotlin_net_perfectdreams_luna_modal_manager_frontend.$_$.b;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_net_perfectdreams_compose_htmldreams_internal_html_core_runtime.$_$.g;
  var THROW_IAE = kotlin_kotlin.$_$.yh;
  var enumEntries = kotlin_kotlin.$_$.fb;
  var Enum = kotlin_kotlin.$_$.nh;
  var toString = kotlin_kotlin.$_$.ge;
  var getStringHashCode = kotlin_kotlin.$_$.ad;
  var getBooleanHashCode = kotlin_kotlin.$_$.wc;
  var hashCode = kotlin_kotlin.$_$.bd;
  var equals = kotlin_kotlin.$_$.uc;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.x;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.w;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.r;
  var emptyMap = kotlin_kotlin.$_$.q7;
  var to = kotlin_kotlin.$_$.dj;
  var mutableStateMapOf = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var mutableStateMapOf_0 = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var mutableStateSetOf = kotlin_androidx_compose_runtime_runtime.$_$.v;
  var createCompositionCoroutineScope = kotlin_androidx_compose_runtime_runtime.$_$.o;
  var H2 = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.w;
  var File_getInstance = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.c;
  var org_jetbrains_compose_web_attributes_InputType_File$stableprop_getter = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.f;
  var Input = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.x;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var P = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.b1;
  var Div = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.v;
  var toByte = kotlin_kotlin.$_$.ee;
  var intercepted = kotlin_kotlin.$_$.na;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Text = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.i1;
  var Th = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.k1;
  var Tr = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.l1;
  var initMetadataForObject = kotlin_kotlin.$_$.hd;
  var add = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var putJsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var put = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var put_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var add_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var addJsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var toDoubleOrNull = kotlin_kotlin.$_$.og;
  var KMutableProperty0 = kotlin_kotlin.$_$.xe;
  var getLocalDelegateReference = kotlin_kotlin.$_$.xc;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.f4;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$_$.f;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.e1;
  var substringBefore = kotlin_kotlin.$_$.hg;
  var removePrefix = kotlin_kotlin.$_$.zf;
  var endsWith = kotlin_kotlin.$_$.nf;
  var contains = kotlin_kotlin.$_$.jf;
  var Companion_getInstance_0 = kotlin_ButterscotchPreprocessor_processor_common.$_$.h;
  var DataWinParserOptions = kotlin_ButterscotchPreprocessor_processor_common.$_$.b;
  var equals_0 = kotlin_kotlin.$_$.of;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var FunctionAdapter = kotlin_kotlin.$_$.hc;
  var Comparator = kotlin_kotlin.$_$.kh;
  var compareValues = kotlin_kotlin.$_$.ja;
  var Td = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.g1;
  var sortedWith = kotlin_kotlin.$_$.k9;
  var Thead = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.j1;
  var Tbody = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.f1;
  var isBlank = kotlin_kotlin.$_$.rf;
  var TextInput = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.h1;
  var Table = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.e1;
  var ensureNotNull = kotlin_kotlin.$_$.pi;
  var Range_getInstance = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.d;
  var org_jetbrains_compose_web_attributes_InputType_Range$stableprop_getter = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.g;
  var isCharSequence = kotlin_kotlin.$_$.md;
  var trim = kotlin_kotlin.$_$.dh;
  var replace = kotlin_kotlin.$_$.cg;
  var take = kotlin_kotlin.$_$.lg;
  var placeholder = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.h;
  var charSequenceLength = kotlin_kotlin.$_$.pc;
  var charSequenceGet = kotlin_kotlin.$_$.oc;
  var isDigit = kotlin_kotlin.$_$.sf;
  var toIntOrNull = kotlin_kotlin.$_$.qg;
  var println = kotlin_kotlin.$_$.ib;
  var toList_0 = kotlin_kotlin.$_$.y9;
  var Button = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.t;
  var A = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.s;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.u4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.q2;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var createFailure = kotlin_kotlin.$_$.oi;
  var fetch = kotlin_org_jetbrains_kotlin_wrappers_kotlin_web.$_$.a;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var awaitPromiseLike = kotlin_org_jetbrains_kotlin_wrappers_kotlin_js.$_$.a;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ed;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var Char = kotlin_kotlin.$_$.jh;
  var joinToString = kotlin_kotlin.$_$.d8;
  var Iso9660Creator = kotlin_ButterscotchPreprocessor_processor_common.$_$.d;
  var startsWith = kotlin_kotlin.$_$.fg;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var IsoFile = kotlin_ButterscotchPreprocessor_processor_common.$_$.c;
  var encodeToByteArray = kotlin_kotlin.$_$.mf;
  var JsonObjectBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var putJsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var listOf = kotlin_kotlin.$_$.k8;
  var plus = kotlin_kotlin.$_$.s8;
  var stackTraceToString = kotlin_kotlin.$_$.yi;
  var mapOf = kotlin_kotlin.$_$.m8;
  var Triple = kotlin_kotlin.$_$.zh;
  var setOf = kotlin_kotlin.$_$.z8;
  var emptySet = kotlin_kotlin.$_$.r7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.vi;
  var selected = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.i;
  var Option = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.a1;
  var Select = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.c1;
  var Label = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.y;
  var Checkbox_getInstance = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.b;
  var org_jetbrains_compose_web_attributes_InputType_Checkbox$stableprop_getter = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.e;
  var Span = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.d1;
  var objectCreate = kotlin_kotlin.$_$.ce;
  var toInt_0 = kotlin_kotlin.$_$.sg;
  var toString_0 = kotlin_kotlin.$_$.ug;
  var padStart = kotlin_kotlin.$_$.yf;
  var SideEffect = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var getNumberHashCode = kotlin_kotlin.$_$.yc;
  var ButtonType_Button_getInstance = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.a;
  var type = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.j;
  var rgb = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.r;
  var backgroundColor = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.k;
  var color = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.m;
  var numberRangeToNumber = kotlin_kotlin.$_$.yd;
  var coerceIn_0 = kotlin_kotlin.$_$.oe;
  var NumberInput = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.z;
  var numberToDouble = kotlin_kotlin.$_$.ae;
  var rangeTo = kotlin_kotlin.$_$.re;
  var coerceIn_1 = kotlin_kotlin.$_$.pe;
  var Default_getInstance = kotlin_kotlin.$_$.n4;
  var random = kotlin_kotlin.$_$.u8;
  var Size_MEDIUM_getInstance = kotlin_net_perfectdreams_luna_modal_manager_frontend.$_$.a;
  var get_deg = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.n;
  var hsl = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.o;
  var get_percent = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.q;
  var bottom = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.l;
  var left = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.p;
  var KProperty0 = kotlin_kotlin.$_$.ze;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var Canvas = kotlin_net_perfectdreams_compose_htmldreams_html_core.$_$.u;
  var addAll = kotlin_kotlin.$_$.k6;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.m1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.hb;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var copyToArray = kotlin_kotlin.$_$.n7;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var AudioData = kotlin_ButterscotchPreprocessor_processor_common.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(PendingRequest, 'PendingRequest');
  initMetadataForClass(ButterWorkerClient, 'ButterWorkerClient', ButterWorkerClient, VOID, VOID, [2]);
  initMetadataForLambda(ButterWorkerServer$startWorker$lambda$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(ButterWorkerServer$startWorker$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(ButterWorkerServer, 'ButterWorkerServer', ButterWorkerServer);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ButterscotchPreprocessorWeb$modalManager$2$$inlined$onDispose$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(ButterscotchPreprocessorWeb, 'ButterscotchPreprocessorWeb', ButterscotchPreprocessorWeb);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(GMLKey, 'GMLKey', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(PS2PadKey, 'PS2PadKey', VOID, Enum);
  initMetadataForClass(LightSettings, 'LightSettings');
  initMetadataForClass(Preset, 'Preset');
  initMetadataForObject(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt');
  initMetadataForLambda(App$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForLambda(App$lambda$lambda$lambda$lambda$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(App$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(App$lambda$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($fetchResourceBytesCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($App$handleProcessingResultCOROUTINE$, CoroutineImpl);
  initMetadataForObject(ComposableSingletons$ControllerMappingsKt, 'ComposableSingletons$ControllerMappingsKt');
  initMetadataForClass(DiscordButtonType, 'DiscordButtonType', VOID, Enum);
  initMetadataForClass(RawHtml$$inlined$cache$2$2$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForObject(ComposableSingletons$StringSetTableKt, 'ComposableSingletons$StringSetTableKt');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Color, 'Color');
  initMetadataForClass(HSBColor, 'HSBColor');
  initMetadataForObject(ComposableSingletons$ColorPickerKt, 'ComposableSingletons$ColorPickerKt');
  initMetadataForLambda(GabrielaColorPreview$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(GabrielaColorPreview$$inlined$run$2$2$2$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(ColorPair, 'ColorPair');
  initMetadataForObject(ColorUtils, 'ColorUtils');
  initMetadataForClass(CoroutineImageWrapper, 'CoroutineImageWrapper', VOID, VOID, VOID, [0]);
  initMetadataForClass(ScaleDownToWidthImageVariantPreset, 'ScaleDownToWidthImageVariantPreset');
  initMetadataForObject(EtherealGambiUtils, 'EtherealGambiUtils');
  initMetadataForLambda(GabrielaColorPreviewCanvas$render$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(GabrielaColorPreviewCanvas$render$slambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForLambda(GabrielaColorPreviewCanvas$render$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(GabrielaColorPreviewCanvas, 'GabrielaColorPreviewCanvas', VOID, VOID, VOID, [1, 0]);
  initMetadataForObject(C2SPacketType, 'C2SPacketType');
  initMetadataForObject(S2CPacketType, 'S2CPacketType');
  initMetadataForClass(SVGIcon_0, 'SVGIcon');
  initMetadataForObject(SVGIconManager, 'SVGIconManager');
  //endregion
  var com_mrpowergamerbr_butterscotchpreprocessor_ButterWorkerClient$stable;
  function _set_nextId__45j53r($this, _set____db54di) {
    $this.nextId_1 = _set____db54di;
  }
  function _get_nextId__2oskgz($this) {
    return $this.nextId_1;
  }
  function _get_pending__uo0xwm($this) {
    return $this.pending_1;
  }
  function PendingRequest(deferred, onEvent) {
    this.deferred_1 = deferred;
    this.onEvent_1 = onEvent;
  }
  protoOf(PendingRequest).get_deferred_l376u0_k$ = function () {
    return this.deferred_1;
  };
  protoOf(PendingRequest).get_onEvent_l2248e_k$ = function () {
    return this.onEvent_1;
  };
  function ButterWorkerClient$lambda(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var envelope = event.data;
      var tmp0_elvis_lhs = this$0.pending_1.get_wei43m_k$(envelope.id);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Unit_getInstance();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var request = tmp;
      if (envelope.terminal) {
        this$0.pending_1.remove_gppy8k_k$(envelope.id);
        request.deferred_1.complete_ixf84q_k$(envelope.packet);
      } else {
        request.onEvent_1(envelope.packet);
      }
      return Unit_getInstance();
    };
  }
  function ButterWorkerClient$sendPacket$lambda(it) {
    return Unit_getInstance();
  }
  function ButterWorkerClient() {
    var tmp = this;
    var tmp_0 = typeof document === 'undefined';
    tmp.isWorker_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    this.nextId_1 = 0;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.pending_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    var tmp_3;
    if (this.isWorker_1) {
      tmp_3 = new Worker(location.href);
    } else {
      var tmp_4 = window.jsBundleHash;
      tmp_3 = new Worker('/assets/js/processor-web.js?v=' + ((!(tmp_4 == null) ? typeof tmp_4 === 'string' : false) ? tmp_4 : THROW_CCE()));
    }
    tmp_2.worker_1 = tmp_3;
    // Inline function 'web.events.EventHandler' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$4 = ButterWorkerClient$lambda(this);
    this.worker_1.onmessage = tmp$ret$4;
  }
  protoOf(ButterWorkerClient).get_isWorker_xl9nfz_k$ = function () {
    return this.isWorker_1;
  };
  protoOf(ButterWorkerClient).get_worker_lh5cp3_k$ = function () {
    return this.worker_1;
  };
  protoOf(ButterWorkerClient).sendPacket_rg05tu_k$ = function (request, onEvent, $completion) {
    var _unary__edvuaz = this.nextId_1;
    this.nextId_1 = _unary__edvuaz + 1 | 0;
    var id = _unary__edvuaz;
    var deferred = CompletableDeferred();
    var tmp0 = this.pending_1;
    // Inline function 'kotlin.collections.set' call
    var value = new PendingRequest(deferred, onEvent);
    tmp0.put_4fpzoq_k$(id, value);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = c2sEnvelope(id, request);
    this.worker_1.postMessage(tmp$ret$2);
    return deferred.await_4rdzbx_k$($completion);
  };
  protoOf(ButterWorkerClient).sendPacket$default_s9qyrv_k$ = function (request, onEvent, $completion, $super) {
    var tmp;
    if (onEvent === VOID) {
      tmp = ButterWorkerClient$sendPacket$lambda;
    } else {
      tmp = onEvent;
    }
    onEvent = tmp;
    return $super === VOID ? this.sendPacket_rg05tu_k$(request, onEvent, $completion) : $super.sendPacket_rg05tu_k$.call(this, request, onEvent, $completion);
  };
  protoOf(ButterWorkerClient).terminate_hmb9m7_k$ = function () {
    this.worker_1.terminate();
  };
  function com_mrpowergamerbr_butterscotchpreprocessor_ButterWorkerClient$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_ButterWorkerClient$stable;
  }
  var com_mrpowergamerbr_butterscotchpreprocessor_ButterWorkerServer$stable;
  function ButterWorkerServer$startWorker$lambda$slambda$slambda($workers, $nextWorker, resultContinuation) {
    this.$workers_1 = $workers;
    this.$nextWorker_1 = $nextWorker;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButterWorkerServer$startWorker$lambda$slambda$slambda).invoke_h4tifj_k$ = function (audioBytes, $completion) {
    var tmp = this.create_9n62gj_k$(audioBytes, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ButterWorkerServer$startWorker$lambda$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_h4tifj_k$((!(p1 == null) ? isByteArray(p1) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButterWorkerServer$startWorker$lambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var _unary__edvuaz = this.$nextWorker_1._v;
            this.$nextWorker_1._v = _unary__edvuaz + 1 | 0;
            var pickedWorker = this.$workers_1.get_c1px32_k$(_unary__edvuaz % this.$workers_1.get_size_woubt6_k$() | 0);
            this.set_state_rjd8d0_k$(1);
            suspendResult = pickedWorker.sendPacket$default_s9qyrv_k$(c2sDecodeAudioPacket(this.audioBytes_1), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            var tmp0_safe_receiver = response.audio;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              tmp_0 = tmp0_safe_receiver;
            }

            var tmp1_safe_receiver = tmp_0;
            return tmp1_safe_receiver == null ? null : toAudioData(tmp1_safe_receiver);
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(ButterWorkerServer$startWorker$lambda$slambda$slambda).create_9n62gj_k$ = function (audioBytes, completion) {
    var i = new ButterWorkerServer$startWorker$lambda$slambda$slambda(this.$workers_1, this.$nextWorker_1, completion);
    i.audioBytes_1 = audioBytes;
    return i;
  };
  protoOf(ButterWorkerServer$startWorker$lambda$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_9n62gj_k$((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), completion);
  };
  function ButterWorkerServer$startWorker$lambda$slambda$slambda_0($workers, $nextWorker, resultContinuation) {
    var i = new ButterWorkerServer$startWorker$lambda$slambda$slambda($workers, $nextWorker, resultContinuation);
    var l = function (audioBytes, $completion) {
      return i.invoke_h4tifj_k$(audioBytes, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ButterWorkerServer$startWorker$lambda$slambda$lambda($self, $id) {
    return function (progressMsg) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = s2cEnvelope($id, s2cProgressPacket(progressMsg), false);
      $self.postMessage(tmp$ret$1);
      return Unit_getInstance();
    };
  }
  function ButterWorkerServer$startWorker$lambda$slambda($dataWinBytes, $externalAudioFiles, $audioGroupFiles, $musFiles, $force4bppPatterns, $atlasSize, $self, $id, resultContinuation) {
    this.$dataWinBytes_1 = $dataWinBytes;
    this.$externalAudioFiles_1 = $externalAudioFiles;
    this.$audioGroupFiles_1 = $audioGroupFiles;
    this.$musFiles_1 = $musFiles;
    this.$force4bppPatterns_1 = $force4bppPatterns;
    this.$atlasSize_1 = $atlasSize;
    this.$self_1 = $self;
    this.$id_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButterWorkerServer$startWorker$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ButterWorkerServer$startWorker$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButterWorkerServer$startWorker$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var workerCount = coerceIn(numberToInt(navigator.hardwareConcurrency), 2, 6);
            var tmp_0 = this;
            var list = ArrayList_init_$Create$(workerCount);
            var inductionVariable = 0;
            if (inductionVariable < workerCount)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                list.add_utx5q5_k$(new ButterWorkerClient());
              }
               while (inductionVariable < workerCount);
            tmp_0.workers0__1 = list;
            this.nextWorker1__1 = {_v: 0};
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(2);
            var tmp_1 = ButterWorkerServer$startWorker$lambda$slambda$slambda_0(this.workers0__1, this.nextWorker1__1, null);
            suspendResult = processDataWin(this.$dataWinBytes_1, this.$externalAudioFiles_1, this.$audioGroupFiles_1, this.$musFiles_1, this.$force4bppPatterns_1, this.$atlasSize_1, tmp_1, ButterWorkerServer$startWorker$lambda$slambda$lambda(this.$self_1, this.$id_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var result = suspendResult;
            var this_0 = s2cEnvelope(this.$id_1, s2cProcessResultPacket(result.get_gameName_9yr49y_k$(), result.get_clut4Bin_awd264_k$(), result.get_clut8Bin_awai80_k$(), result.get_texturesBin_uflyd6_k$(), result.get_atlasBin_qoa94r_k$(), result.get_soundBnkBin_xfov4i_k$(), result.get_soundsBin_lg2dfq_k$()), true);
            this.$self_1.postMessage(this_0);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e.message;
              var this_1 = s2cEnvelope(this.$id_1, s2cErrorPacket(tmp0_elvis_lhs == null ? 'Unknown error' : tmp0_elvis_lhs), true);
              this.$self_1.postMessage(this_1);
              this.set_exceptionState_fex74n_k$(5);
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var t = this.get_exception_x0n6w6_k$();
            var _iterator__ex2g4s = this.workers0__1.iterator_jk1svi_k$();
            while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
              var element = _iterator__ex2g4s.next_20eer_k$();
              element.terminate_hmb9m7_k$();
            }

            throw t;
          case 5:
            throw this.get_exception_x0n6w6_k$();
          case 6:
            this.set_exceptionState_fex74n_k$(5);
            var _iterator__ex2g4s_0 = this.workers0__1.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
              var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
              element_0.terminate_hmb9m7_k$();
            }

            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(ButterWorkerServer$startWorker$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new ButterWorkerServer$startWorker$lambda$slambda(this.$dataWinBytes_1, this.$externalAudioFiles_1, this.$audioGroupFiles_1, this.$musFiles_1, this.$force4bppPatterns_1, this.$atlasSize_1, this.$self_1, this.$id_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(ButterWorkerServer$startWorker$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ButterWorkerServer$startWorker$lambda$slambda_0($dataWinBytes, $externalAudioFiles, $audioGroupFiles, $musFiles, $force4bppPatterns, $atlasSize, $self, $id, resultContinuation) {
    var i = new ButterWorkerServer$startWorker$lambda$slambda($dataWinBytes, $externalAudioFiles, $audioGroupFiles, $musFiles, $force4bppPatterns, $atlasSize, $self, $id, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ButterWorkerServer$startWorker$lambda($self, $scope) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      var envelope = event.data;
      var id = envelope.id;
      var packet = envelope.packet;
      var tmp0_subject = packet.type;
      var tmp;
      if (tmp0_subject === 'c2sDecodeAudio') {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var request = packet;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var bytes = request.data;
        var tmp1_elvis_lhs = parseWav(bytes);
        var decoded = tmp1_elvis_lhs == null ? parseOgg(bytes) : tmp1_elvis_lhs;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$6 = s2cEnvelope(id, s2cDecodeAudioPacket(decoded), true);
        $self.postMessage(tmp$ret$6);
        tmp = Unit_getInstance();
      } else if (tmp0_subject === 'c2sProcessDataWin') {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var request_0 = packet;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var dataWinBytes = request_0.data;
        var externalAudioFiles = jsObjectToByteArrayMap(request_0.externalAudioFiles);
        // Inline function 'kotlin.collections.mapKeys' call
        var this_0 = jsObjectToByteArrayMap(request_0.audioGroupFiles);
        // Inline function 'kotlin.collections.mapKeysTo' call
        var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.get_size_woubt6_k$()));
        // Inline function 'kotlin.collections.associateByTo' call
        var _iterator__ex2g4s = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          var tmp_0 = toInt(element.get_key_18j28a_k$());
          var tmp$ret$12 = element.get_value_j01efc_k$();
          destination.put_4fpzoq_k$(tmp_0, tmp$ret$12);
        }
        var audioGroupFiles = destination;
        var musFiles = jsObjectToByteArrayMap(request_0.musFiles);
        var force4bppPatterns = toList(request_0.force4bppPatterns);
        var atlasSize = request_0.atlasSize;
        launch($scope, VOID, VOID, ButterWorkerServer$startWorker$lambda$slambda_0(dataWinBytes, externalAudioFiles, audioGroupFiles, musFiles, force4bppPatterns, atlasSize, $self, id, null));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ButterWorkerServer() {
  }
  protoOf(ButterWorkerServer).startWorker_99dbo0_k$ = function () {
    var self_0 = self;
    var scope = CoroutineScope_0(Dispatchers_getInstance().get_Default_goqax4_k$());
    self_0.onmessage = ButterWorkerServer$startWorker$lambda(self_0, scope);
  };
  function com_mrpowergamerbr_butterscotchpreprocessor_ButterWorkerServer$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_ButterWorkerServer$stable;
  }
  var com_mrpowergamerbr_butterscotchpreprocessor_ButterscotchPreprocessorWeb$stable;
  function Companion() {
    Companion_instance = this;
    this.CHECKMARK_SVG_1 = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"><\/path><\/svg>';
    this.EYE_DROPPER_SVG_1 = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L138.8,66.2a24,24,0,0,0-33.14.77l-5,5a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.68,13.68,0,0,0,36,219.3a15.92,15.92,0,0,0,17.71,3.35L71.23,215a39.89,39.89,0,0,0,37.06-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l5-5a24,24,0,0,0,.74-33.18l23.75-23.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.91L57,189.41a8,8,0,0,0,.25-5.75A23.88,23.88,0,0,1,63,159l51-51,33.94,34Z"><\/path><\/svg>';
  }
  protoOf(Companion).get_CHECKMARK_SVG_m93zwx_k$ = function () {
    return this.CHECKMARK_SVG_1;
  };
  protoOf(Companion).get_EYE_DROPPER_SVG_x8xqu4_k$ = function () {
    return this.EYE_DROPPER_SVG_1;
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ButterscotchPreprocessorWeb$modalManager$lambda($this$ModalManager, it) {
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new ButterscotchPreprocessorWeb$modalManager$2$$inlined$onDispose$1();
  }
  function ButterscotchPreprocessorWeb$modalManager$2$$inlined$onDispose$1() {
  }
  protoOf(ButterscotchPreprocessorWeb$modalManager$2$$inlined$onDispose$1).dispose_3nnxhr_k$ = function () {
  };
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ButterscotchPreprocessorWeb$start$lambda(this$0) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C32@1925L37:ButterscotchPreprocessorWeb.kt#t9c8nu');
      if (isTraceInProgress()) {
        traceEventStart(145910057, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.ButterscotchPreprocessorWeb.start.<anonymous> (ButterscotchPreprocessorWeb.kt:32)');
      }
      App(this$0, $composer_0, net_perfectdreams_luna_modals_ModalManager$stableprop_getter());
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ButterscotchPreprocessorWeb() {
    Companion_getInstance_2();
    var tmp = this;
    tmp.modalManager_1 = new ModalManager(ButterscotchPreprocessorWeb$modalManager$lambda);
  }
  protoOf(ButterscotchPreprocessorWeb).get_modalManager_6fs3uf_k$ = function () {
    return this.modalManager_1;
  };
  protoOf(ButterscotchPreprocessorWeb).start_fyv442_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = document.createElement('div');
    // Inline function 'web.dom.ElementId' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.id = 'modal-wrapper';
    var modalWrapperElement = this_0;
    document.body.appendChild(modalWrapperElement);
    this.modalManager_1.render_77pd8l_k$(modalWrapperElement);
    renderComposable('root', ComposableLambda$invoke$ref(composableLambdaInstance(145910057, true, ButterscotchPreprocessorWeb$start$lambda(this))));
  };
  function com_mrpowergamerbr_butterscotchpreprocessor_ButterscotchPreprocessorWeb$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_ButterscotchPreprocessorWeb$stable;
  }
  var properties_initialized_ButterscotchPreprocessorWeb_kt_x882n9;
  function _init_properties_ButterscotchPreprocessorWeb_kt__pruz6h() {
    if (!properties_initialized_ButterscotchPreprocessorWeb_kt_x882n9) {
      properties_initialized_ButterscotchPreprocessorWeb_kt_x882n9 = true;
      com_mrpowergamerbr_butterscotchpreprocessor_ButterscotchPreprocessorWeb$stable = net_perfectdreams_luna_modals_ModalManager$stableprop_getter();
    }
  }
  function main() {
    var tmp = typeof document === 'undefined';
    var isWorker = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    var m = new ButterscotchPreprocessorWeb();
    if (isWorker) {
      var server = new ButterWorkerServer();
      server.startWorker_99dbo0_k$();
    } else {
      m.start_fyv442_k$();
    }
  }
  function mainWrapper() {
    main();
  }
  var GMLKey_VK_NOKEY_instance;
  var GMLKey_VK_BACKSPACE_instance;
  var GMLKey_VK_TAB_instance;
  var GMLKey_VK_ENTER_instance;
  var GMLKey_VK_SHIFT_instance;
  var GMLKey_VK_CONTROL_instance;
  var GMLKey_VK_ALT_instance;
  var GMLKey_VK_ESCAPE_instance;
  var GMLKey_VK_SPACE_instance;
  var GMLKey_VK_PAGEUP_instance;
  var GMLKey_VK_PAGEDOWN_instance;
  var GMLKey_VK_END_instance;
  var GMLKey_VK_HOME_instance;
  var GMLKey_VK_LEFT_instance;
  var GMLKey_VK_UP_instance;
  var GMLKey_VK_RIGHT_instance;
  var GMLKey_VK_DOWN_instance;
  var GMLKey_VK_INSERT_instance;
  var GMLKey_VK_DELETE_instance;
  var GMLKey_KEY_0_instance;
  var GMLKey_KEY_1_instance;
  var GMLKey_KEY_2_instance;
  var GMLKey_KEY_3_instance;
  var GMLKey_KEY_4_instance;
  var GMLKey_KEY_5_instance;
  var GMLKey_KEY_6_instance;
  var GMLKey_KEY_7_instance;
  var GMLKey_KEY_8_instance;
  var GMLKey_KEY_9_instance;
  var GMLKey_KEY_A_instance;
  var GMLKey_KEY_B_instance;
  var GMLKey_KEY_C_instance;
  var GMLKey_KEY_D_instance;
  var GMLKey_KEY_E_instance;
  var GMLKey_KEY_F_instance;
  var GMLKey_KEY_G_instance;
  var GMLKey_KEY_H_instance;
  var GMLKey_KEY_I_instance;
  var GMLKey_KEY_J_instance;
  var GMLKey_KEY_K_instance;
  var GMLKey_KEY_L_instance;
  var GMLKey_KEY_M_instance;
  var GMLKey_KEY_N_instance;
  var GMLKey_KEY_O_instance;
  var GMLKey_KEY_P_instance;
  var GMLKey_KEY_Q_instance;
  var GMLKey_KEY_R_instance;
  var GMLKey_KEY_S_instance;
  var GMLKey_KEY_T_instance;
  var GMLKey_KEY_U_instance;
  var GMLKey_KEY_V_instance;
  var GMLKey_KEY_W_instance;
  var GMLKey_KEY_X_instance;
  var GMLKey_KEY_Y_instance;
  var GMLKey_KEY_Z_instance;
  var GMLKey_VK_F1_instance;
  var GMLKey_VK_F2_instance;
  var GMLKey_VK_F3_instance;
  var GMLKey_VK_F4_instance;
  var GMLKey_VK_F5_instance;
  var GMLKey_VK_F6_instance;
  var GMLKey_VK_F7_instance;
  var GMLKey_VK_F8_instance;
  var GMLKey_VK_F9_instance;
  var GMLKey_VK_F10_instance;
  var GMLKey_VK_F11_instance;
  var GMLKey_VK_F12_instance;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).fromValue_lljhin_k$ = function (value) {
    // Inline function 'kotlin.collections.find' call
    var tmp0 = get_entries();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (value === element.value_1) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    GMLKey_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values() {
    return [GMLKey_VK_NOKEY_getInstance(), GMLKey_VK_BACKSPACE_getInstance(), GMLKey_VK_TAB_getInstance(), GMLKey_VK_ENTER_getInstance(), GMLKey_VK_SHIFT_getInstance(), GMLKey_VK_CONTROL_getInstance(), GMLKey_VK_ALT_getInstance(), GMLKey_VK_ESCAPE_getInstance(), GMLKey_VK_SPACE_getInstance(), GMLKey_VK_PAGEUP_getInstance(), GMLKey_VK_PAGEDOWN_getInstance(), GMLKey_VK_END_getInstance(), GMLKey_VK_HOME_getInstance(), GMLKey_VK_LEFT_getInstance(), GMLKey_VK_UP_getInstance(), GMLKey_VK_RIGHT_getInstance(), GMLKey_VK_DOWN_getInstance(), GMLKey_VK_INSERT_getInstance(), GMLKey_VK_DELETE_getInstance(), GMLKey_KEY_0_getInstance(), GMLKey_KEY_1_getInstance(), GMLKey_KEY_2_getInstance(), GMLKey_KEY_3_getInstance(), GMLKey_KEY_4_getInstance(), GMLKey_KEY_5_getInstance(), GMLKey_KEY_6_getInstance(), GMLKey_KEY_7_getInstance(), GMLKey_KEY_8_getInstance(), GMLKey_KEY_9_getInstance(), GMLKey_KEY_A_getInstance(), GMLKey_KEY_B_getInstance(), GMLKey_KEY_C_getInstance(), GMLKey_KEY_D_getInstance(), GMLKey_KEY_E_getInstance(), GMLKey_KEY_F_getInstance(), GMLKey_KEY_G_getInstance(), GMLKey_KEY_H_getInstance(), GMLKey_KEY_I_getInstance(), GMLKey_KEY_J_getInstance(), GMLKey_KEY_K_getInstance(), GMLKey_KEY_L_getInstance(), GMLKey_KEY_M_getInstance(), GMLKey_KEY_N_getInstance(), GMLKey_KEY_O_getInstance(), GMLKey_KEY_P_getInstance(), GMLKey_KEY_Q_getInstance(), GMLKey_KEY_R_getInstance(), GMLKey_KEY_S_getInstance(), GMLKey_KEY_T_getInstance(), GMLKey_KEY_U_getInstance(), GMLKey_KEY_V_getInstance(), GMLKey_KEY_W_getInstance(), GMLKey_KEY_X_getInstance(), GMLKey_KEY_Y_getInstance(), GMLKey_KEY_Z_getInstance(), GMLKey_VK_F1_getInstance(), GMLKey_VK_F2_getInstance(), GMLKey_VK_F3_getInstance(), GMLKey_VK_F4_getInstance(), GMLKey_VK_F5_getInstance(), GMLKey_VK_F6_getInstance(), GMLKey_VK_F7_getInstance(), GMLKey_VK_F8_getInstance(), GMLKey_VK_F9_getInstance(), GMLKey_VK_F10_getInstance(), GMLKey_VK_F11_getInstance(), GMLKey_VK_F12_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'VK_NOKEY':
        return GMLKey_VK_NOKEY_getInstance();
      case 'VK_BACKSPACE':
        return GMLKey_VK_BACKSPACE_getInstance();
      case 'VK_TAB':
        return GMLKey_VK_TAB_getInstance();
      case 'VK_ENTER':
        return GMLKey_VK_ENTER_getInstance();
      case 'VK_SHIFT':
        return GMLKey_VK_SHIFT_getInstance();
      case 'VK_CONTROL':
        return GMLKey_VK_CONTROL_getInstance();
      case 'VK_ALT':
        return GMLKey_VK_ALT_getInstance();
      case 'VK_ESCAPE':
        return GMLKey_VK_ESCAPE_getInstance();
      case 'VK_SPACE':
        return GMLKey_VK_SPACE_getInstance();
      case 'VK_PAGEUP':
        return GMLKey_VK_PAGEUP_getInstance();
      case 'VK_PAGEDOWN':
        return GMLKey_VK_PAGEDOWN_getInstance();
      case 'VK_END':
        return GMLKey_VK_END_getInstance();
      case 'VK_HOME':
        return GMLKey_VK_HOME_getInstance();
      case 'VK_LEFT':
        return GMLKey_VK_LEFT_getInstance();
      case 'VK_UP':
        return GMLKey_VK_UP_getInstance();
      case 'VK_RIGHT':
        return GMLKey_VK_RIGHT_getInstance();
      case 'VK_DOWN':
        return GMLKey_VK_DOWN_getInstance();
      case 'VK_INSERT':
        return GMLKey_VK_INSERT_getInstance();
      case 'VK_DELETE':
        return GMLKey_VK_DELETE_getInstance();
      case 'KEY_0':
        return GMLKey_KEY_0_getInstance();
      case 'KEY_1':
        return GMLKey_KEY_1_getInstance();
      case 'KEY_2':
        return GMLKey_KEY_2_getInstance();
      case 'KEY_3':
        return GMLKey_KEY_3_getInstance();
      case 'KEY_4':
        return GMLKey_KEY_4_getInstance();
      case 'KEY_5':
        return GMLKey_KEY_5_getInstance();
      case 'KEY_6':
        return GMLKey_KEY_6_getInstance();
      case 'KEY_7':
        return GMLKey_KEY_7_getInstance();
      case 'KEY_8':
        return GMLKey_KEY_8_getInstance();
      case 'KEY_9':
        return GMLKey_KEY_9_getInstance();
      case 'KEY_A':
        return GMLKey_KEY_A_getInstance();
      case 'KEY_B':
        return GMLKey_KEY_B_getInstance();
      case 'KEY_C':
        return GMLKey_KEY_C_getInstance();
      case 'KEY_D':
        return GMLKey_KEY_D_getInstance();
      case 'KEY_E':
        return GMLKey_KEY_E_getInstance();
      case 'KEY_F':
        return GMLKey_KEY_F_getInstance();
      case 'KEY_G':
        return GMLKey_KEY_G_getInstance();
      case 'KEY_H':
        return GMLKey_KEY_H_getInstance();
      case 'KEY_I':
        return GMLKey_KEY_I_getInstance();
      case 'KEY_J':
        return GMLKey_KEY_J_getInstance();
      case 'KEY_K':
        return GMLKey_KEY_K_getInstance();
      case 'KEY_L':
        return GMLKey_KEY_L_getInstance();
      case 'KEY_M':
        return GMLKey_KEY_M_getInstance();
      case 'KEY_N':
        return GMLKey_KEY_N_getInstance();
      case 'KEY_O':
        return GMLKey_KEY_O_getInstance();
      case 'KEY_P':
        return GMLKey_KEY_P_getInstance();
      case 'KEY_Q':
        return GMLKey_KEY_Q_getInstance();
      case 'KEY_R':
        return GMLKey_KEY_R_getInstance();
      case 'KEY_S':
        return GMLKey_KEY_S_getInstance();
      case 'KEY_T':
        return GMLKey_KEY_T_getInstance();
      case 'KEY_U':
        return GMLKey_KEY_U_getInstance();
      case 'KEY_V':
        return GMLKey_KEY_V_getInstance();
      case 'KEY_W':
        return GMLKey_KEY_W_getInstance();
      case 'KEY_X':
        return GMLKey_KEY_X_getInstance();
      case 'KEY_Y':
        return GMLKey_KEY_Y_getInstance();
      case 'KEY_Z':
        return GMLKey_KEY_Z_getInstance();
      case 'VK_F1':
        return GMLKey_VK_F1_getInstance();
      case 'VK_F2':
        return GMLKey_VK_F2_getInstance();
      case 'VK_F3':
        return GMLKey_VK_F3_getInstance();
      case 'VK_F4':
        return GMLKey_VK_F4_getInstance();
      case 'VK_F5':
        return GMLKey_VK_F5_getInstance();
      case 'VK_F6':
        return GMLKey_VK_F6_getInstance();
      case 'VK_F7':
        return GMLKey_VK_F7_getInstance();
      case 'VK_F8':
        return GMLKey_VK_F8_getInstance();
      case 'VK_F9':
        return GMLKey_VK_F9_getInstance();
      case 'VK_F10':
        return GMLKey_VK_F10_getInstance();
      case 'VK_F11':
        return GMLKey_VK_F11_getInstance();
      case 'VK_F12':
        return GMLKey_VK_F12_getInstance();
      default:
        GMLKey_initEntries();
        THROW_IAE('No enum constant com.mrpowergamerbr.butterscotchpreprocessor.GMLKey.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var GMLKey_entriesInitialized;
  function GMLKey_initEntries() {
    if (GMLKey_entriesInitialized)
      return Unit_getInstance();
    GMLKey_entriesInitialized = true;
    GMLKey_VK_NOKEY_instance = new GMLKey('VK_NOKEY', 0, 0);
    GMLKey_VK_BACKSPACE_instance = new GMLKey('VK_BACKSPACE', 1, 8);
    GMLKey_VK_TAB_instance = new GMLKey('VK_TAB', 2, 9);
    GMLKey_VK_ENTER_instance = new GMLKey('VK_ENTER', 3, 13);
    GMLKey_VK_SHIFT_instance = new GMLKey('VK_SHIFT', 4, 16);
    GMLKey_VK_CONTROL_instance = new GMLKey('VK_CONTROL', 5, 17);
    GMLKey_VK_ALT_instance = new GMLKey('VK_ALT', 6, 18);
    GMLKey_VK_ESCAPE_instance = new GMLKey('VK_ESCAPE', 7, 27);
    GMLKey_VK_SPACE_instance = new GMLKey('VK_SPACE', 8, 32);
    GMLKey_VK_PAGEUP_instance = new GMLKey('VK_PAGEUP', 9, 33);
    GMLKey_VK_PAGEDOWN_instance = new GMLKey('VK_PAGEDOWN', 10, 34);
    GMLKey_VK_END_instance = new GMLKey('VK_END', 11, 35);
    GMLKey_VK_HOME_instance = new GMLKey('VK_HOME', 12, 36);
    GMLKey_VK_LEFT_instance = new GMLKey('VK_LEFT', 13, 37);
    GMLKey_VK_UP_instance = new GMLKey('VK_UP', 14, 38);
    GMLKey_VK_RIGHT_instance = new GMLKey('VK_RIGHT', 15, 39);
    GMLKey_VK_DOWN_instance = new GMLKey('VK_DOWN', 16, 40);
    GMLKey_VK_INSERT_instance = new GMLKey('VK_INSERT', 17, 45);
    GMLKey_VK_DELETE_instance = new GMLKey('VK_DELETE', 18, 46);
    GMLKey_KEY_0_instance = new GMLKey('KEY_0', 19, 48);
    GMLKey_KEY_1_instance = new GMLKey('KEY_1', 20, 49);
    GMLKey_KEY_2_instance = new GMLKey('KEY_2', 21, 50);
    GMLKey_KEY_3_instance = new GMLKey('KEY_3', 22, 51);
    GMLKey_KEY_4_instance = new GMLKey('KEY_4', 23, 52);
    GMLKey_KEY_5_instance = new GMLKey('KEY_5', 24, 53);
    GMLKey_KEY_6_instance = new GMLKey('KEY_6', 25, 54);
    GMLKey_KEY_7_instance = new GMLKey('KEY_7', 26, 55);
    GMLKey_KEY_8_instance = new GMLKey('KEY_8', 27, 56);
    GMLKey_KEY_9_instance = new GMLKey('KEY_9', 28, 57);
    GMLKey_KEY_A_instance = new GMLKey('KEY_A', 29, 65);
    GMLKey_KEY_B_instance = new GMLKey('KEY_B', 30, 66);
    GMLKey_KEY_C_instance = new GMLKey('KEY_C', 31, 67);
    GMLKey_KEY_D_instance = new GMLKey('KEY_D', 32, 68);
    GMLKey_KEY_E_instance = new GMLKey('KEY_E', 33, 69);
    GMLKey_KEY_F_instance = new GMLKey('KEY_F', 34, 70);
    GMLKey_KEY_G_instance = new GMLKey('KEY_G', 35, 71);
    GMLKey_KEY_H_instance = new GMLKey('KEY_H', 36, 72);
    GMLKey_KEY_I_instance = new GMLKey('KEY_I', 37, 73);
    GMLKey_KEY_J_instance = new GMLKey('KEY_J', 38, 74);
    GMLKey_KEY_K_instance = new GMLKey('KEY_K', 39, 75);
    GMLKey_KEY_L_instance = new GMLKey('KEY_L', 40, 76);
    GMLKey_KEY_M_instance = new GMLKey('KEY_M', 41, 77);
    GMLKey_KEY_N_instance = new GMLKey('KEY_N', 42, 78);
    GMLKey_KEY_O_instance = new GMLKey('KEY_O', 43, 79);
    GMLKey_KEY_P_instance = new GMLKey('KEY_P', 44, 80);
    GMLKey_KEY_Q_instance = new GMLKey('KEY_Q', 45, 81);
    GMLKey_KEY_R_instance = new GMLKey('KEY_R', 46, 82);
    GMLKey_KEY_S_instance = new GMLKey('KEY_S', 47, 83);
    GMLKey_KEY_T_instance = new GMLKey('KEY_T', 48, 84);
    GMLKey_KEY_U_instance = new GMLKey('KEY_U', 49, 85);
    GMLKey_KEY_V_instance = new GMLKey('KEY_V', 50, 86);
    GMLKey_KEY_W_instance = new GMLKey('KEY_W', 51, 87);
    GMLKey_KEY_X_instance = new GMLKey('KEY_X', 52, 88);
    GMLKey_KEY_Y_instance = new GMLKey('KEY_Y', 53, 89);
    GMLKey_KEY_Z_instance = new GMLKey('KEY_Z', 54, 90);
    GMLKey_VK_F1_instance = new GMLKey('VK_F1', 55, 112);
    GMLKey_VK_F2_instance = new GMLKey('VK_F2', 56, 113);
    GMLKey_VK_F3_instance = new GMLKey('VK_F3', 57, 114);
    GMLKey_VK_F4_instance = new GMLKey('VK_F4', 58, 115);
    GMLKey_VK_F5_instance = new GMLKey('VK_F5', 59, 116);
    GMLKey_VK_F6_instance = new GMLKey('VK_F6', 60, 117);
    GMLKey_VK_F7_instance = new GMLKey('VK_F7', 61, 118);
    GMLKey_VK_F8_instance = new GMLKey('VK_F8', 62, 119);
    GMLKey_VK_F9_instance = new GMLKey('VK_F9', 63, 120);
    GMLKey_VK_F10_instance = new GMLKey('VK_F10', 64, 121);
    GMLKey_VK_F11_instance = new GMLKey('VK_F11', 65, 122);
    GMLKey_VK_F12_instance = new GMLKey('VK_F12', 66, 123);
    Companion_getInstance_3();
  }
  var $ENTRIES;
  function GMLKey(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(GMLKey).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function GMLKey_VK_NOKEY_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_NOKEY_instance;
  }
  function GMLKey_VK_BACKSPACE_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_BACKSPACE_instance;
  }
  function GMLKey_VK_TAB_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_TAB_instance;
  }
  function GMLKey_VK_ENTER_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_ENTER_instance;
  }
  function GMLKey_VK_SHIFT_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_SHIFT_instance;
  }
  function GMLKey_VK_CONTROL_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_CONTROL_instance;
  }
  function GMLKey_VK_ALT_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_ALT_instance;
  }
  function GMLKey_VK_ESCAPE_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_ESCAPE_instance;
  }
  function GMLKey_VK_SPACE_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_SPACE_instance;
  }
  function GMLKey_VK_PAGEUP_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_PAGEUP_instance;
  }
  function GMLKey_VK_PAGEDOWN_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_PAGEDOWN_instance;
  }
  function GMLKey_VK_END_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_END_instance;
  }
  function GMLKey_VK_HOME_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_HOME_instance;
  }
  function GMLKey_VK_LEFT_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_LEFT_instance;
  }
  function GMLKey_VK_UP_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_UP_instance;
  }
  function GMLKey_VK_RIGHT_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_RIGHT_instance;
  }
  function GMLKey_VK_DOWN_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_DOWN_instance;
  }
  function GMLKey_VK_INSERT_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_INSERT_instance;
  }
  function GMLKey_VK_DELETE_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_DELETE_instance;
  }
  function GMLKey_KEY_0_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_0_instance;
  }
  function GMLKey_KEY_1_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_1_instance;
  }
  function GMLKey_KEY_2_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_2_instance;
  }
  function GMLKey_KEY_3_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_3_instance;
  }
  function GMLKey_KEY_4_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_4_instance;
  }
  function GMLKey_KEY_5_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_5_instance;
  }
  function GMLKey_KEY_6_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_6_instance;
  }
  function GMLKey_KEY_7_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_7_instance;
  }
  function GMLKey_KEY_8_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_8_instance;
  }
  function GMLKey_KEY_9_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_9_instance;
  }
  function GMLKey_KEY_A_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_A_instance;
  }
  function GMLKey_KEY_B_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_B_instance;
  }
  function GMLKey_KEY_C_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_C_instance;
  }
  function GMLKey_KEY_D_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_D_instance;
  }
  function GMLKey_KEY_E_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_E_instance;
  }
  function GMLKey_KEY_F_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_F_instance;
  }
  function GMLKey_KEY_G_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_G_instance;
  }
  function GMLKey_KEY_H_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_H_instance;
  }
  function GMLKey_KEY_I_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_I_instance;
  }
  function GMLKey_KEY_J_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_J_instance;
  }
  function GMLKey_KEY_K_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_K_instance;
  }
  function GMLKey_KEY_L_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_L_instance;
  }
  function GMLKey_KEY_M_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_M_instance;
  }
  function GMLKey_KEY_N_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_N_instance;
  }
  function GMLKey_KEY_O_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_O_instance;
  }
  function GMLKey_KEY_P_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_P_instance;
  }
  function GMLKey_KEY_Q_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_Q_instance;
  }
  function GMLKey_KEY_R_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_R_instance;
  }
  function GMLKey_KEY_S_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_S_instance;
  }
  function GMLKey_KEY_T_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_T_instance;
  }
  function GMLKey_KEY_U_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_U_instance;
  }
  function GMLKey_KEY_V_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_V_instance;
  }
  function GMLKey_KEY_W_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_W_instance;
  }
  function GMLKey_KEY_X_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_X_instance;
  }
  function GMLKey_KEY_Y_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_Y_instance;
  }
  function GMLKey_KEY_Z_getInstance() {
    GMLKey_initEntries();
    return GMLKey_KEY_Z_instance;
  }
  function GMLKey_VK_F1_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_F1_instance;
  }
  function GMLKey_VK_F2_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_F2_instance;
  }
  function GMLKey_VK_F3_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_F3_instance;
  }
  function GMLKey_VK_F4_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_F4_instance;
  }
  function GMLKey_VK_F5_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_F5_instance;
  }
  function GMLKey_VK_F6_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_F6_instance;
  }
  function GMLKey_VK_F7_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_F7_instance;
  }
  function GMLKey_VK_F8_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_F8_instance;
  }
  function GMLKey_VK_F9_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_F9_instance;
  }
  function GMLKey_VK_F10_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_F10_instance;
  }
  function GMLKey_VK_F11_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_F11_instance;
  }
  function GMLKey_VK_F12_getInstance() {
    GMLKey_initEntries();
    return GMLKey_VK_F12_instance;
  }
  var PS2PadKey_PAD_LEFT_instance;
  var PS2PadKey_PAD_DOWN_instance;
  var PS2PadKey_PAD_RIGHT_instance;
  var PS2PadKey_PAD_UP_instance;
  var PS2PadKey_PAD_START_instance;
  var PS2PadKey_PAD_R3_instance;
  var PS2PadKey_PAD_L3_instance;
  var PS2PadKey_PAD_SELECT_instance;
  var PS2PadKey_PAD_SQUARE_instance;
  var PS2PadKey_PAD_CROSS_instance;
  var PS2PadKey_PAD_CIRCLE_instance;
  var PS2PadKey_PAD_TRIANGLE_instance;
  var PS2PadKey_PAD_R1_instance;
  var PS2PadKey_PAD_L1_instance;
  var PS2PadKey_PAD_R2_instance;
  var PS2PadKey_PAD_L2_instance;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).fromValue_lljhin_k$ = function (value) {
    // Inline function 'kotlin.collections.find' call
    var tmp0 = get_entries_0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (value === element.value_1) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    PS2PadKey_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [PS2PadKey_PAD_LEFT_getInstance(), PS2PadKey_PAD_DOWN_getInstance(), PS2PadKey_PAD_RIGHT_getInstance(), PS2PadKey_PAD_UP_getInstance(), PS2PadKey_PAD_START_getInstance(), PS2PadKey_PAD_R3_getInstance(), PS2PadKey_PAD_L3_getInstance(), PS2PadKey_PAD_SELECT_getInstance(), PS2PadKey_PAD_SQUARE_getInstance(), PS2PadKey_PAD_CROSS_getInstance(), PS2PadKey_PAD_CIRCLE_getInstance(), PS2PadKey_PAD_TRIANGLE_getInstance(), PS2PadKey_PAD_R1_getInstance(), PS2PadKey_PAD_L1_getInstance(), PS2PadKey_PAD_R2_getInstance(), PS2PadKey_PAD_L2_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'PAD_LEFT':
        return PS2PadKey_PAD_LEFT_getInstance();
      case 'PAD_DOWN':
        return PS2PadKey_PAD_DOWN_getInstance();
      case 'PAD_RIGHT':
        return PS2PadKey_PAD_RIGHT_getInstance();
      case 'PAD_UP':
        return PS2PadKey_PAD_UP_getInstance();
      case 'PAD_START':
        return PS2PadKey_PAD_START_getInstance();
      case 'PAD_R3':
        return PS2PadKey_PAD_R3_getInstance();
      case 'PAD_L3':
        return PS2PadKey_PAD_L3_getInstance();
      case 'PAD_SELECT':
        return PS2PadKey_PAD_SELECT_getInstance();
      case 'PAD_SQUARE':
        return PS2PadKey_PAD_SQUARE_getInstance();
      case 'PAD_CROSS':
        return PS2PadKey_PAD_CROSS_getInstance();
      case 'PAD_CIRCLE':
        return PS2PadKey_PAD_CIRCLE_getInstance();
      case 'PAD_TRIANGLE':
        return PS2PadKey_PAD_TRIANGLE_getInstance();
      case 'PAD_R1':
        return PS2PadKey_PAD_R1_getInstance();
      case 'PAD_L1':
        return PS2PadKey_PAD_L1_getInstance();
      case 'PAD_R2':
        return PS2PadKey_PAD_R2_getInstance();
      case 'PAD_L2':
        return PS2PadKey_PAD_L2_getInstance();
      default:
        PS2PadKey_initEntries();
        THROW_IAE('No enum constant com.mrpowergamerbr.butterscotchpreprocessor.PS2PadKey.' + value);
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var PS2PadKey_entriesInitialized;
  function PS2PadKey_initEntries() {
    if (PS2PadKey_entriesInitialized)
      return Unit_getInstance();
    PS2PadKey_entriesInitialized = true;
    PS2PadKey_PAD_LEFT_instance = new PS2PadKey('PAD_LEFT', 0, 128);
    PS2PadKey_PAD_DOWN_instance = new PS2PadKey('PAD_DOWN', 1, 64);
    PS2PadKey_PAD_RIGHT_instance = new PS2PadKey('PAD_RIGHT', 2, 32);
    PS2PadKey_PAD_UP_instance = new PS2PadKey('PAD_UP', 3, 16);
    PS2PadKey_PAD_START_instance = new PS2PadKey('PAD_START', 4, 8);
    PS2PadKey_PAD_R3_instance = new PS2PadKey('PAD_R3', 5, 4);
    PS2PadKey_PAD_L3_instance = new PS2PadKey('PAD_L3', 6, 2);
    PS2PadKey_PAD_SELECT_instance = new PS2PadKey('PAD_SELECT', 7, 1);
    PS2PadKey_PAD_SQUARE_instance = new PS2PadKey('PAD_SQUARE', 8, 32768);
    PS2PadKey_PAD_CROSS_instance = new PS2PadKey('PAD_CROSS', 9, 16384);
    PS2PadKey_PAD_CIRCLE_instance = new PS2PadKey('PAD_CIRCLE', 10, 8192);
    PS2PadKey_PAD_TRIANGLE_instance = new PS2PadKey('PAD_TRIANGLE', 11, 4096);
    PS2PadKey_PAD_R1_instance = new PS2PadKey('PAD_R1', 12, 2048);
    PS2PadKey_PAD_L1_instance = new PS2PadKey('PAD_L1', 13, 1024);
    PS2PadKey_PAD_R2_instance = new PS2PadKey('PAD_R2', 14, 512);
    PS2PadKey_PAD_L2_instance = new PS2PadKey('PAD_L2', 15, 256);
    Companion_getInstance_4();
  }
  var $ENTRIES_0;
  function PS2PadKey(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(PS2PadKey).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function PS2PadKey_PAD_LEFT_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_LEFT_instance;
  }
  function PS2PadKey_PAD_DOWN_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_DOWN_instance;
  }
  function PS2PadKey_PAD_RIGHT_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_RIGHT_instance;
  }
  function PS2PadKey_PAD_UP_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_UP_instance;
  }
  function PS2PadKey_PAD_START_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_START_instance;
  }
  function PS2PadKey_PAD_R3_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_R3_instance;
  }
  function PS2PadKey_PAD_L3_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_L3_instance;
  }
  function PS2PadKey_PAD_SELECT_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_SELECT_instance;
  }
  function PS2PadKey_PAD_SQUARE_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_SQUARE_instance;
  }
  function PS2PadKey_PAD_CROSS_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_CROSS_instance;
  }
  function PS2PadKey_PAD_CIRCLE_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_CIRCLE_instance;
  }
  function PS2PadKey_PAD_TRIANGLE_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_TRIANGLE_instance;
  }
  function PS2PadKey_PAD_R1_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_R1_instance;
  }
  function PS2PadKey_PAD_L1_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_L1_instance;
  }
  function PS2PadKey_PAD_R2_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_R2_instance;
  }
  function PS2PadKey_PAD_L2_getInstance() {
    PS2PadKey_initEntries();
    return PS2PadKey_PAD_L2_instance;
  }
  function get_UNDERTALE_CONTROLLER_MAPPINGS() {
    _init_properties_App_kt__fk8usv();
    return UNDERTALE_CONTROLLER_MAPPINGS;
  }
  var UNDERTALE_CONTROLLER_MAPPINGS;
  function get_DEFAULT_LIGHT_SETTINGS() {
    _init_properties_App_kt__fk8usv();
    return DEFAULT_LIGHT_SETTINGS;
  }
  var DEFAULT_LIGHT_SETTINGS;
  function get_UNDERTALE_PRESET() {
    _init_properties_App_kt__fk8usv();
    return UNDERTALE_PRESET;
  }
  var UNDERTALE_PRESET;
  function get_SURVEY_PROGRAM_PRESET() {
    _init_properties_App_kt__fk8usv();
    return SURVEY_PROGRAM_PRESET;
  }
  var SURVEY_PROGRAM_PRESET;
  function get_DELTARUNE_CHAPTER_1_AND_2_PRESET() {
    _init_properties_App_kt__fk8usv();
    return DELTARUNE_CHAPTER_1_AND_2_PRESET;
  }
  var DELTARUNE_CHAPTER_1_AND_2_PRESET;
  function get_DELTARUNE_FILESYSTEM_MAPPINGS() {
    _init_properties_App_kt__fk8usv();
    return DELTARUNE_FILESYSTEM_MAPPINGS;
  }
  var DELTARUNE_FILESYSTEM_MAPPINGS;
  function get_DELTARUNE_CHAPTER_1() {
    _init_properties_App_kt__fk8usv();
    return DELTARUNE_CHAPTER_1;
  }
  var DELTARUNE_CHAPTER_1;
  function get_DELTARUNE_CHAPTER_2() {
    _init_properties_App_kt__fk8usv();
    return DELTARUNE_CHAPTER_2;
  }
  var DELTARUNE_CHAPTER_2;
  function get_DELTARUNE_CHAPTER_3() {
    _init_properties_App_kt__fk8usv();
    return DELTARUNE_CHAPTER_3;
  }
  var DELTARUNE_CHAPTER_3;
  function get_DELTARUNE_CHAPTER_4() {
    _init_properties_App_kt__fk8usv();
    return DELTARUNE_CHAPTER_4;
  }
  var DELTARUNE_CHAPTER_4;
  function get_AM2R() {
    _init_properties_App_kt__fk8usv();
    return AM2R;
  }
  var AM2R;
  function get_SONICEXE() {
    _init_properties_App_kt__fk8usv();
    return SONICEXE;
  }
  var SONICEXE;
  function get_PRESETS() {
    _init_properties_App_kt__fk8usv();
    return PRESETS;
  }
  var PRESETS;
  var com_mrpowergamerbr_butterscotchpreprocessor_components_LightSettings$stable;
  var com_mrpowergamerbr_butterscotchpreprocessor_components_Preset$stable;
  function LightSettings(lightColor1, lightDir1, lightColor2, lightDir2, lightColor3, lightDir3) {
    this.lightColor1__1 = lightColor1;
    this.lightDir1__1 = lightDir1;
    this.lightColor2__1 = lightColor2;
    this.lightDir2__1 = lightDir2;
    this.lightColor3__1 = lightColor3;
    this.lightDir3__1 = lightDir3;
  }
  protoOf(LightSettings).get_lightColor1_zc0akl_k$ = function () {
    return this.lightColor1__1;
  };
  protoOf(LightSettings).get_lightDir1_jugwcx_k$ = function () {
    return this.lightDir1__1;
  };
  protoOf(LightSettings).get_lightColor2_zc0akk_k$ = function () {
    return this.lightColor2__1;
  };
  protoOf(LightSettings).get_lightDir2_jugwcy_k$ = function () {
    return this.lightDir2__1;
  };
  protoOf(LightSettings).get_lightColor3_zc0akj_k$ = function () {
    return this.lightColor3__1;
  };
  protoOf(LightSettings).get_lightDir3_jugwcz_k$ = function () {
    return this.lightDir3__1;
  };
  protoOf(LightSettings).component1_7eebsc_k$ = function () {
    return this.lightColor1__1;
  };
  protoOf(LightSettings).component2_7eebsb_k$ = function () {
    return this.lightDir1__1;
  };
  protoOf(LightSettings).component3_7eebsa_k$ = function () {
    return this.lightColor2__1;
  };
  protoOf(LightSettings).component4_7eebs9_k$ = function () {
    return this.lightDir2__1;
  };
  protoOf(LightSettings).component5_7eebs8_k$ = function () {
    return this.lightColor3__1;
  };
  protoOf(LightSettings).component6_7eebs7_k$ = function () {
    return this.lightDir3__1;
  };
  protoOf(LightSettings).copy_wdu5rd_k$ = function (lightColor1, lightDir1, lightColor2, lightDir2, lightColor3, lightDir3) {
    return new LightSettings(lightColor1, lightDir1, lightColor2, lightDir2, lightColor3, lightDir3);
  };
  protoOf(LightSettings).copy$default_n9lzt6_k$ = function (lightColor1, lightDir1, lightColor2, lightDir2, lightColor3, lightDir3, $super) {
    lightColor1 = lightColor1 === VOID ? this.lightColor1__1 : lightColor1;
    lightDir1 = lightDir1 === VOID ? this.lightDir1__1 : lightDir1;
    lightColor2 = lightColor2 === VOID ? this.lightColor2__1 : lightColor2;
    lightDir2 = lightDir2 === VOID ? this.lightDir2__1 : lightDir2;
    lightColor3 = lightColor3 === VOID ? this.lightColor3__1 : lightColor3;
    lightDir3 = lightDir3 === VOID ? this.lightDir3__1 : lightDir3;
    return $super === VOID ? this.copy_wdu5rd_k$(lightColor1, lightDir1, lightColor2, lightDir2, lightColor3, lightDir3) : $super.copy_wdu5rd_k$.call(this, lightColor1, lightDir1, lightColor2, lightDir2, lightColor3, lightDir3);
  };
  protoOf(LightSettings).toString = function () {
    return 'LightSettings(lightColor1=' + this.lightColor1__1.toString() + ', lightDir1=' + this.lightDir1__1.toString() + ', lightColor2=' + this.lightColor2__1.toString() + ', lightDir2=' + this.lightDir2__1.toString() + ', lightColor3=' + this.lightColor3__1.toString() + ', lightDir3=' + this.lightDir3__1.toString() + ')';
  };
  protoOf(LightSettings).hashCode = function () {
    var result = this.lightColor1__1.hashCode();
    result = imul(result, 31) + this.lightDir1__1.hashCode() | 0;
    result = imul(result, 31) + this.lightColor2__1.hashCode() | 0;
    result = imul(result, 31) + this.lightDir2__1.hashCode() | 0;
    result = imul(result, 31) + this.lightColor3__1.hashCode() | 0;
    result = imul(result, 31) + this.lightDir3__1.hashCode() | 0;
    return result;
  };
  protoOf(LightSettings).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LightSettings))
      return false;
    if (!this.lightColor1__1.equals(other.lightColor1__1))
      return false;
    if (!this.lightDir1__1.equals(other.lightDir1__1))
      return false;
    if (!this.lightColor2__1.equals(other.lightColor2__1))
      return false;
    if (!this.lightDir2__1.equals(other.lightDir2__1))
      return false;
    if (!this.lightColor3__1.equals(other.lightColor3__1))
      return false;
    if (!this.lightDir3__1.equals(other.lightDir3__1))
      return false;
    return true;
  };
  function Preset(displayName, gen8MatchName, gamepadEnabled, controller1Mappings, controller2Mappings, filesystemMappings, disabledObjects, bgAlpha, bgColorTopLeft, bgColorTopRight, bgColorBottomLeft, bgColorBottomRight, ambientColor, lights, lazyLoadRooms, eagerlyLoadedRooms, debugOverlayEnabled, force4bppPatterns, atlasSize, eeAtlasCacheBytes) {
    this.displayName_1 = displayName;
    this.gen8MatchName_1 = gen8MatchName;
    this.gamepadEnabled_1 = gamepadEnabled;
    this.controller1Mappings_1 = controller1Mappings;
    this.controller2Mappings_1 = controller2Mappings;
    this.filesystemMappings_1 = filesystemMappings;
    this.disabledObjects_1 = disabledObjects;
    this.bgAlpha_1 = bgAlpha;
    this.bgColorTopLeft_1 = bgColorTopLeft;
    this.bgColorTopRight_1 = bgColorTopRight;
    this.bgColorBottomLeft_1 = bgColorBottomLeft;
    this.bgColorBottomRight_1 = bgColorBottomRight;
    this.ambientColor_1 = ambientColor;
    this.lights_1 = lights;
    this.lazyLoadRooms_1 = lazyLoadRooms;
    this.eagerlyLoadedRooms_1 = eagerlyLoadedRooms;
    this.debugOverlayEnabled_1 = debugOverlayEnabled;
    this.force4bppPatterns_1 = force4bppPatterns;
    this.atlasSize_1 = atlasSize;
    this.eeAtlasCacheBytes_1 = eeAtlasCacheBytes;
  }
  protoOf(Preset).get_displayName_sscnb0_k$ = function () {
    return this.displayName_1;
  };
  protoOf(Preset).get_gen8MatchName_hwczj_k$ = function () {
    return this.gen8MatchName_1;
  };
  protoOf(Preset).get_gamepadEnabled_r9ppyh_k$ = function () {
    return this.gamepadEnabled_1;
  };
  protoOf(Preset).get_controller1Mappings_ss5dd_k$ = function () {
    return this.controller1Mappings_1;
  };
  protoOf(Preset).get_controller2Mappings_t3bvf2_k$ = function () {
    return this.controller2Mappings_1;
  };
  protoOf(Preset).get_filesystemMappings_5vdf3t_k$ = function () {
    return this.filesystemMappings_1;
  };
  protoOf(Preset).get_disabledObjects_yx0s9b_k$ = function () {
    return this.disabledObjects_1;
  };
  protoOf(Preset).get_bgAlpha_25kc7k_k$ = function () {
    return this.bgAlpha_1;
  };
  protoOf(Preset).get_bgColorTopLeft_e2g3d3_k$ = function () {
    return this.bgColorTopLeft_1;
  };
  protoOf(Preset).get_bgColorTopRight_a0jwgs_k$ = function () {
    return this.bgColorTopRight_1;
  };
  protoOf(Preset).get_bgColorBottomLeft_10z17r_k$ = function () {
    return this.bgColorBottomLeft_1;
  };
  protoOf(Preset).get_bgColorBottomRight_vxjdq4_k$ = function () {
    return this.bgColorBottomRight_1;
  };
  protoOf(Preset).get_ambientColor_envvuc_k$ = function () {
    return this.ambientColor_1;
  };
  protoOf(Preset).get_lights_g65o2u_k$ = function () {
    return this.lights_1;
  };
  protoOf(Preset).get_lazyLoadRooms_jan6vf_k$ = function () {
    return this.lazyLoadRooms_1;
  };
  protoOf(Preset).get_eagerlyLoadedRooms_1qs70p_k$ = function () {
    return this.eagerlyLoadedRooms_1;
  };
  protoOf(Preset).get_debugOverlayEnabled_4k8hut_k$ = function () {
    return this.debugOverlayEnabled_1;
  };
  protoOf(Preset).get_force4bppPatterns_ruax3h_k$ = function () {
    return this.force4bppPatterns_1;
  };
  protoOf(Preset).get_atlasSize_pgtnr7_k$ = function () {
    return this.atlasSize_1;
  };
  protoOf(Preset).get_eeAtlasCacheBytes_won6a3_k$ = function () {
    return this.eeAtlasCacheBytes_1;
  };
  protoOf(Preset).component1_7eebsc_k$ = function () {
    return this.displayName_1;
  };
  protoOf(Preset).component2_7eebsb_k$ = function () {
    return this.gen8MatchName_1;
  };
  protoOf(Preset).component3_7eebsa_k$ = function () {
    return this.gamepadEnabled_1;
  };
  protoOf(Preset).component4_7eebs9_k$ = function () {
    return this.controller1Mappings_1;
  };
  protoOf(Preset).component5_7eebs8_k$ = function () {
    return this.controller2Mappings_1;
  };
  protoOf(Preset).component6_7eebs7_k$ = function () {
    return this.filesystemMappings_1;
  };
  protoOf(Preset).component7_7eebs6_k$ = function () {
    return this.disabledObjects_1;
  };
  protoOf(Preset).component8_7eebs5_k$ = function () {
    return this.bgAlpha_1;
  };
  protoOf(Preset).component9_7eebs4_k$ = function () {
    return this.bgColorTopLeft_1;
  };
  protoOf(Preset).component10_gazzfo_k$ = function () {
    return this.bgColorTopRight_1;
  };
  protoOf(Preset).component11_gazzfn_k$ = function () {
    return this.bgColorBottomLeft_1;
  };
  protoOf(Preset).component12_gazzfm_k$ = function () {
    return this.bgColorBottomRight_1;
  };
  protoOf(Preset).component13_gazzfl_k$ = function () {
    return this.ambientColor_1;
  };
  protoOf(Preset).component14_gazzfk_k$ = function () {
    return this.lights_1;
  };
  protoOf(Preset).component15_gazzfj_k$ = function () {
    return this.lazyLoadRooms_1;
  };
  protoOf(Preset).component16_gazzfi_k$ = function () {
    return this.eagerlyLoadedRooms_1;
  };
  protoOf(Preset).component17_gazzfh_k$ = function () {
    return this.debugOverlayEnabled_1;
  };
  protoOf(Preset).component18_gazzfg_k$ = function () {
    return this.force4bppPatterns_1;
  };
  protoOf(Preset).component19_gazzff_k$ = function () {
    return this.atlasSize_1;
  };
  protoOf(Preset).component20_gazzet_k$ = function () {
    return this.eeAtlasCacheBytes_1;
  };
  protoOf(Preset).copy_8vqyto_k$ = function (displayName, gen8MatchName, gamepadEnabled, controller1Mappings, controller2Mappings, filesystemMappings, disabledObjects, bgAlpha, bgColorTopLeft, bgColorTopRight, bgColorBottomLeft, bgColorBottomRight, ambientColor, lights, lazyLoadRooms, eagerlyLoadedRooms, debugOverlayEnabled, force4bppPatterns, atlasSize, eeAtlasCacheBytes) {
    return new Preset(displayName, gen8MatchName, gamepadEnabled, controller1Mappings, controller2Mappings, filesystemMappings, disabledObjects, bgAlpha, bgColorTopLeft, bgColorTopRight, bgColorBottomLeft, bgColorBottomRight, ambientColor, lights, lazyLoadRooms, eagerlyLoadedRooms, debugOverlayEnabled, force4bppPatterns, atlasSize, eeAtlasCacheBytes);
  };
  protoOf(Preset).copy$default_3euomz_k$ = function (displayName, gen8MatchName, gamepadEnabled, controller1Mappings, controller2Mappings, filesystemMappings, disabledObjects, bgAlpha, bgColorTopLeft, bgColorTopRight, bgColorBottomLeft, bgColorBottomRight, ambientColor, lights, lazyLoadRooms, eagerlyLoadedRooms, debugOverlayEnabled, force4bppPatterns, atlasSize, eeAtlasCacheBytes, $super) {
    displayName = displayName === VOID ? this.displayName_1 : displayName;
    gen8MatchName = gen8MatchName === VOID ? this.gen8MatchName_1 : gen8MatchName;
    gamepadEnabled = gamepadEnabled === VOID ? this.gamepadEnabled_1 : gamepadEnabled;
    controller1Mappings = controller1Mappings === VOID ? this.controller1Mappings_1 : controller1Mappings;
    controller2Mappings = controller2Mappings === VOID ? this.controller2Mappings_1 : controller2Mappings;
    filesystemMappings = filesystemMappings === VOID ? this.filesystemMappings_1 : filesystemMappings;
    disabledObjects = disabledObjects === VOID ? this.disabledObjects_1 : disabledObjects;
    bgAlpha = bgAlpha === VOID ? this.bgAlpha_1 : bgAlpha;
    bgColorTopLeft = bgColorTopLeft === VOID ? this.bgColorTopLeft_1 : bgColorTopLeft;
    bgColorTopRight = bgColorTopRight === VOID ? this.bgColorTopRight_1 : bgColorTopRight;
    bgColorBottomLeft = bgColorBottomLeft === VOID ? this.bgColorBottomLeft_1 : bgColorBottomLeft;
    bgColorBottomRight = bgColorBottomRight === VOID ? this.bgColorBottomRight_1 : bgColorBottomRight;
    ambientColor = ambientColor === VOID ? this.ambientColor_1 : ambientColor;
    lights = lights === VOID ? this.lights_1 : lights;
    lazyLoadRooms = lazyLoadRooms === VOID ? this.lazyLoadRooms_1 : lazyLoadRooms;
    eagerlyLoadedRooms = eagerlyLoadedRooms === VOID ? this.eagerlyLoadedRooms_1 : eagerlyLoadedRooms;
    debugOverlayEnabled = debugOverlayEnabled === VOID ? this.debugOverlayEnabled_1 : debugOverlayEnabled;
    force4bppPatterns = force4bppPatterns === VOID ? this.force4bppPatterns_1 : force4bppPatterns;
    atlasSize = atlasSize === VOID ? this.atlasSize_1 : atlasSize;
    eeAtlasCacheBytes = eeAtlasCacheBytes === VOID ? this.eeAtlasCacheBytes_1 : eeAtlasCacheBytes;
    return $super === VOID ? this.copy_8vqyto_k$(displayName, gen8MatchName, gamepadEnabled, controller1Mappings, controller2Mappings, filesystemMappings, disabledObjects, bgAlpha, bgColorTopLeft, bgColorTopRight, bgColorBottomLeft, bgColorBottomRight, ambientColor, lights, lazyLoadRooms, eagerlyLoadedRooms, debugOverlayEnabled, force4bppPatterns, atlasSize, eeAtlasCacheBytes) : $super.copy_8vqyto_k$.call(this, displayName, gen8MatchName, gamepadEnabled, controller1Mappings, controller2Mappings, filesystemMappings, disabledObjects, bgAlpha, bgColorTopLeft, bgColorTopRight, bgColorBottomLeft, bgColorBottomRight, ambientColor, lights, lazyLoadRooms, eagerlyLoadedRooms, debugOverlayEnabled, force4bppPatterns, atlasSize, eeAtlasCacheBytes);
  };
  protoOf(Preset).toString = function () {
    return 'Preset(displayName=' + this.displayName_1 + ', gen8MatchName=' + this.gen8MatchName_1 + ', gamepadEnabled=' + this.gamepadEnabled_1 + ', controller1Mappings=' + toString(this.controller1Mappings_1) + ', controller2Mappings=' + toString(this.controller2Mappings_1) + ', filesystemMappings=' + toString(this.filesystemMappings_1) + ', disabledObjects=' + toString(this.disabledObjects_1) + ', bgAlpha=' + this.bgAlpha_1 + ', bgColorTopLeft=' + this.bgColorTopLeft_1.toString() + ', bgColorTopRight=' + this.bgColorTopRight_1.toString() + ', bgColorBottomLeft=' + this.bgColorBottomLeft_1.toString() + ', bgColorBottomRight=' + this.bgColorBottomRight_1.toString() + ', ambientColor=' + this.ambientColor_1.toString() + ', lights=' + this.lights_1.toString() + ', lazyLoadRooms=' + this.lazyLoadRooms_1 + ', eagerlyLoadedRooms=' + toString(this.eagerlyLoadedRooms_1) + ', debugOverlayEnabled=' + this.debugOverlayEnabled_1 + ', force4bppPatterns=' + toString(this.force4bppPatterns_1) + ', atlasSize=' + this.atlasSize_1 + ', eeAtlasCacheBytes=' + this.eeAtlasCacheBytes_1 + ')';
  };
  protoOf(Preset).hashCode = function () {
    var result = getStringHashCode(this.displayName_1);
    result = imul(result, 31) + getStringHashCode(this.gen8MatchName_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.gamepadEnabled_1) | 0;
    result = imul(result, 31) + hashCode(this.controller1Mappings_1) | 0;
    result = imul(result, 31) + hashCode(this.controller2Mappings_1) | 0;
    result = imul(result, 31) + hashCode(this.filesystemMappings_1) | 0;
    result = imul(result, 31) + hashCode(this.disabledObjects_1) | 0;
    result = imul(result, 31) + this.bgAlpha_1 | 0;
    result = imul(result, 31) + this.bgColorTopLeft_1.hashCode() | 0;
    result = imul(result, 31) + this.bgColorTopRight_1.hashCode() | 0;
    result = imul(result, 31) + this.bgColorBottomLeft_1.hashCode() | 0;
    result = imul(result, 31) + this.bgColorBottomRight_1.hashCode() | 0;
    result = imul(result, 31) + this.ambientColor_1.hashCode() | 0;
    result = imul(result, 31) + this.lights_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.lazyLoadRooms_1) | 0;
    result = imul(result, 31) + hashCode(this.eagerlyLoadedRooms_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.debugOverlayEnabled_1) | 0;
    result = imul(result, 31) + hashCode(this.force4bppPatterns_1) | 0;
    result = imul(result, 31) + this.atlasSize_1 | 0;
    result = imul(result, 31) + this.eeAtlasCacheBytes_1 | 0;
    return result;
  };
  protoOf(Preset).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Preset))
      return false;
    if (!(this.displayName_1 === other.displayName_1))
      return false;
    if (!(this.gen8MatchName_1 === other.gen8MatchName_1))
      return false;
    if (!(this.gamepadEnabled_1 === other.gamepadEnabled_1))
      return false;
    if (!equals(this.controller1Mappings_1, other.controller1Mappings_1))
      return false;
    if (!equals(this.controller2Mappings_1, other.controller2Mappings_1))
      return false;
    if (!equals(this.filesystemMappings_1, other.filesystemMappings_1))
      return false;
    if (!equals(this.disabledObjects_1, other.disabledObjects_1))
      return false;
    if (!(this.bgAlpha_1 === other.bgAlpha_1))
      return false;
    if (!this.bgColorTopLeft_1.equals(other.bgColorTopLeft_1))
      return false;
    if (!this.bgColorTopRight_1.equals(other.bgColorTopRight_1))
      return false;
    if (!this.bgColorBottomLeft_1.equals(other.bgColorBottomLeft_1))
      return false;
    if (!this.bgColorBottomRight_1.equals(other.bgColorBottomRight_1))
      return false;
    if (!this.ambientColor_1.equals(other.ambientColor_1))
      return false;
    if (!this.lights_1.equals(other.lights_1))
      return false;
    if (!(this.lazyLoadRooms_1 === other.lazyLoadRooms_1))
      return false;
    if (!equals(this.eagerlyLoadedRooms_1, other.eagerlyLoadedRooms_1))
      return false;
    if (!(this.debugOverlayEnabled_1 === other.debugOverlayEnabled_1))
      return false;
    if (!equals(this.force4bppPatterns_1, other.force4bppPatterns_1))
      return false;
    if (!(this.atlasSize_1 === other.atlasSize_1))
      return false;
    if (!(this.eeAtlasCacheBytes_1 === other.eeAtlasCacheBytes_1))
      return false;
    return true;
  };
  function App(m, $composer, $changed) {
    _init_properties_App_kt__fk8usv();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1803909723);
    sourceInformation($composer_0, 'C(App)432@16745L65,433@16836L43,434@16902L41,435@16967L42,436@17033L41,437@17097L34,438@17159L45,439@17236L63,440@17333L60,441@17420L63,442@17513L63,443@17603L42,444@17672L34,445@17737L655,461@18423L51,463@18604L257,471@18889L45,472@18961L45,474@19064L31,475@19122L47,476@19197L47,477@19274L47,478@19352L47,479@19423L49,480@19495L34,481@19552L34,482@19609L34,483@19667L49,484@19739L34,485@19796L35,486@19854L35,487@19913L46,488@19982L35,489@20040L35,490@20098L34,491@20157L47,492@20231L52,495@20315L33,496@20374L34,497@20437L52,500@20511L32,501@20569L34,503@20634L36,504@20704L38,506@20773L52,509@20844L42,510@20913L54,511@20989L32,513@21045L1872,554@22935L24,557@23059L33,703@31192L24,873@39829L26,873@39857L16,873@39827L46:App.kt#5n9s4q');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(m) : $composer_0.changedInstance_s1wkiy_k$(m)) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1803909723, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App (App.kt:431)');
      }
      sourceInformationMarkerStart($composer_0, -1609541796, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf("Select the game's folder to begin!");
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var status$delegate = tmp0_group;
      sourceInformationMarkerStart($composer_0, -1609538906, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = mutableStateOf(null);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var parsedDataWin$delegate = tmp1_group;
      sourceInformationMarkerStart($composer_0, -1609536796, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = mutableStateListOf();
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var logMessages = {_v: tmp2_group};
      sourceInformationMarkerStart($composer_0, -1609534715, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_2 = this_3.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = mutableStateOf(null);
        this_3.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var downloadUrl$delegate = tmp3_group;
      sourceInformationMarkerStart($composer_0, -1609532604, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_3 = this_4.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_3 = mutableStateOf('output.iso');
        this_4.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var isoFileName$delegate = tmp4_group;
      sourceInformationMarkerStart($composer_0, -1609530563, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_4 = this_5.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (false || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_4 = mutableStateOf(false);
        this_5.updateRememberedValue_l1wh71_k$(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var processing$delegate = tmp5_group;
      sourceInformationMarkerStart($composer_0, -1609528568, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_5 = this_6.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (false || it_5 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_5 = mutableStateOf(null);
        this_6.updateRememberedValue_l1wh71_k$(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var loadedFileBytes$delegate = tmp6_group;
      sourceInformationMarkerStart($composer_0, -1609526086, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_7 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_6 = this_7.rememberedValue_4dg93v_k$();
      var tmp_13;
      if (false || it_6 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_6 = mutableStateOf(emptyMap());
        this_7.updateRememberedValue_l1wh71_k$(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var loadedExternalAudio$delegate = tmp7_group;
      sourceInformationMarkerStart($composer_0, -1609522985, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_8 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_7 = this_8.rememberedValue_4dg93v_k$();
      var tmp_15;
      if (false || it_7 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_7 = mutableStateOf(emptyMap());
        this_8.updateRememberedValue_l1wh71_k$(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = it_7;
      }
      var tmp_16 = tmp_15;
      var tmp8_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var loadedAudioGroupFiles$delegate = tmp8_group;
      sourceInformationMarkerStart($composer_0, -1609520198, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_9 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_8 = this_9.rememberedValue_4dg93v_k$();
      var tmp_17;
      if (false || it_8 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_8 = mutableStateOf(emptyMap());
        this_9.updateRememberedValue_l1wh71_k$(value_8);
        tmp_17 = value_8;
      } else {
        tmp_17 = it_8;
      }
      var tmp_18 = tmp_17;
      var tmp9_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var loadedMusFiles$delegate = tmp9_group;
      sourceInformationMarkerStart($composer_0, -1609517222, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_10 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_9 = this_10.rememberedValue_4dg93v_k$();
      var tmp_19;
      if (false || it_9 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_9 = mutableStateOf(emptyMap());
        this_10.updateRememberedValue_l1wh71_k$(value_9);
        tmp_19 = value_9;
      } else {
        tmp_19 = it_9;
      }
      var tmp_20 = tmp_19;
      var tmp10_group = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var loadedSourceFiles$delegate = tmp10_group;
      sourceInformationMarkerStart($composer_0, -1609514363, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_11 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_10 = this_11.rememberedValue_4dg93v_k$();
      var tmp_21;
      if (false || it_10 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_10 = mutableStateOf(null);
        this_11.updateRememberedValue_l1wh71_k$(value_10);
        tmp_21 = value_10;
      } else {
        tmp_21 = it_10;
      }
      var tmp_22 = tmp_21;
      var tmp11_group = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var parsedGameName$delegate = tmp11_group;
      sourceInformationMarkerStart($composer_0, -1609512163, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_12 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_11 = this_12.rememberedValue_4dg93v_k$();
      var tmp_23;
      if (false || it_11 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_11 = mutableStateOf(false);
        this_12.updateRememberedValue_l1wh71_k$(value_11);
        tmp_23 = value_11;
      } else {
        tmp_23 = it_11;
      }
      var tmp_24 = tmp_23;
      var tmp12_group = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var gamepadEnabled$delegate = tmp12_group;
      sourceInformationMarkerStart($composer_0, -1609509462, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_13 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_12 = this_13.rememberedValue_4dg93v_k$();
      var tmp_25;
      if (false || it_12 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_12 = mutableStateMapOf([to(PS2PadKey_PAD_UP_getInstance(), GMLKey_VK_UP_getInstance()), to(PS2PadKey_PAD_DOWN_getInstance(), GMLKey_VK_DOWN_getInstance()), to(PS2PadKey_PAD_LEFT_getInstance(), GMLKey_VK_LEFT_getInstance()), to(PS2PadKey_PAD_RIGHT_getInstance(), GMLKey_VK_RIGHT_getInstance()), to(PS2PadKey_PAD_CROSS_getInstance(), GMLKey_KEY_Z_getInstance()), to(PS2PadKey_PAD_SQUARE_getInstance(), GMLKey_KEY_X_getInstance()), to(PS2PadKey_PAD_START_getInstance(), GMLKey_KEY_C_getInstance()), to(PS2PadKey_PAD_TRIANGLE_getInstance(), GMLKey_VK_ESCAPE_getInstance()), to(PS2PadKey_PAD_L1_getInstance(), GMLKey_VK_PAGEDOWN_getInstance()), to(PS2PadKey_PAD_R1_getInstance(), GMLKey_VK_PAGEUP_getInstance()), to(PS2PadKey_PAD_L2_getInstance(), GMLKey_VK_F10_getInstance()), to(PS2PadKey_PAD_SELECT_getInstance(), GMLKey_VK_F12_getInstance())]);
        this_13.updateRememberedValue_l1wh71_k$(value_12);
        tmp_25 = value_12;
      } else {
        tmp_25 = it_12;
      }
      var tmp_26 = tmp_25;
      var tmp13_group = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var controller1Mappings = tmp13_group;
      sourceInformationMarkerStart($composer_0, -1609488114, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_14 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_13 = this_14.rememberedValue_4dg93v_k$();
      var tmp_27;
      if (false || it_13 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_13 = mutableStateMapOf_0();
        this_14.updateRememberedValue_l1wh71_k$(value_13);
        tmp_27 = value_13;
      } else {
        tmp_27 = it_13;
      }
      var tmp_28 = tmp_27;
      var tmp14_group = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var controller2Mappings = tmp14_group;
      sourceInformationMarkerStart($composer_0, -1609482116, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_15 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_14 = this_15.rememberedValue_4dg93v_k$();
      var tmp_29;
      if (false || it_14 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_14 = mutableStateMapOf([to('file0', 'mc0:UNDERTALE/file0'), to('file9', 'mc0:UNDERTALE/file9'), to('undertale.ini', 'mc0:UNDERTALE/undertale.ini'), to('credits.txt', '$BOOT:CREDITS.TXT')]);
        this_15.updateRememberedValue_l1wh71_k$(value_14);
        tmp_29 = value_14;
      } else {
        tmp_29 = it_14;
      }
      var tmp_30 = tmp_29;
      var tmp15_group = (tmp_30 == null ? true : !(tmp_30 == null)) ? tmp_30 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var filesystemMappings = tmp15_group;
      sourceInformationMarkerStart($composer_0, -1609473208, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_16 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_15 = this_16.rememberedValue_4dg93v_k$();
      var tmp_31;
      if (false || it_15 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_15 = mutableStateOf(null);
        this_16.updateRememberedValue_l1wh71_k$(value_15);
        tmp_31 = value_15;
      } else {
        tmp_31 = it_15;
      }
      var tmp_32 = tmp_31;
      var tmp16_group = (tmp_32 == null ? true : !(tmp_32 == null)) ? tmp_32 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var customIconBytes$delegate = tmp16_group;
      sourceInformationMarkerStart($composer_0, -1609470904, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_17 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_16 = this_17.rememberedValue_4dg93v_k$();
      var tmp_33;
      if (false || it_16 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_16 = mutableStateOf(null);
        this_17.updateRememberedValue_l1wh71_k$(value_16);
        tmp_33 = value_16;
      } else {
        tmp_33 = it_16;
      }
      var tmp_34 = tmp_33;
      var tmp17_group = (tmp_34 == null ? true : !(tmp_34 == null)) ? tmp_34 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var customElfBytes$delegate = tmp17_group;
      sourceInformationMarkerStart($composer_0, -1609467622, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_18 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_17 = this_18.rememberedValue_4dg93v_k$();
      var tmp_35;
      if (false || it_17 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_17 = mutableStateOf(68);
        this_18.updateRememberedValue_l1wh71_k$(value_17);
        tmp_35 = value_17;
      } else {
        tmp_35 = it_17;
      }
      var tmp_36 = tmp_35;
      var tmp18_group = (tmp_36 == null ? true : !(tmp_36 == null)) ? tmp_36 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var bgAlpha$delegate = tmp18_group;
      sourceInformationMarkerStart($composer_0, -1609465750, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_19 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_18 = this_19.rememberedValue_4dg93v_k$();
      var tmp_37;
      if (false || it_18 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_18 = mutableStateOf(Color_init_$Create$(255, 204, 0));
        this_19.updateRememberedValue_l1wh71_k$(value_18);
        tmp_37 = value_18;
      } else {
        tmp_37 = it_18;
      }
      var tmp_38 = tmp_37;
      var tmp19_group = (tmp_38 == null ? true : !(tmp_38 == null)) ? tmp_38 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var bgColorTopLeft$delegate = tmp19_group;
      sourceInformationMarkerStart($composer_0, -1609463350, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_20 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_19 = this_20.rememberedValue_4dg93v_k$();
      var tmp_39;
      if (false || it_19 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_19 = mutableStateOf(Color_init_$Create$(255, 204, 0));
        this_20.updateRememberedValue_l1wh71_k$(value_19);
        tmp_39 = value_19;
      } else {
        tmp_39 = it_19;
      }
      var tmp_40 = tmp_39;
      var tmp20_group = (tmp_40 == null ? true : !(tmp_40 == null)) ? tmp_40 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var bgColorTopRight$delegate = tmp20_group;
      sourceInformationMarkerStart($composer_0, -1609460886, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_21 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_20 = this_21.rememberedValue_4dg93v_k$();
      var tmp_41;
      if (false || it_20 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_20 = mutableStateOf(Color_init_$Create$(180, 140, 0));
        this_21.updateRememberedValue_l1wh71_k$(value_20);
        tmp_41 = value_20;
      } else {
        tmp_41 = it_20;
      }
      var tmp_42 = tmp_41;
      var tmp21_group = (tmp_42 == null ? true : !(tmp_42 == null)) ? tmp_42 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var bgColorBottomLeft$delegate = tmp21_group;
      sourceInformationMarkerStart($composer_0, -1609458390, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_22 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_21 = this_22.rememberedValue_4dg93v_k$();
      var tmp_43;
      if (false || it_21 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_21 = mutableStateOf(Color_init_$Create$(180, 140, 0));
        this_22.updateRememberedValue_l1wh71_k$(value_21);
        tmp_43 = value_21;
      } else {
        tmp_43 = it_21;
      }
      var tmp_44 = tmp_43;
      var tmp22_group = (tmp_44 == null ? true : !(tmp_44 == null)) ? tmp_44 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var bgColorBottomRight$delegate = tmp22_group;
      sourceInformationMarkerStart($composer_0, -1609456116, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_23 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_22 = this_23.rememberedValue_4dg93v_k$();
      var tmp_45;
      if (false || it_22 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_22 = mutableStateOf(Color_init_$Create$(179, 179, 179));
        this_23.updateRememberedValue_l1wh71_k$(value_22);
        tmp_45 = value_22;
      } else {
        tmp_45 = it_22;
      }
      var tmp_46 = tmp_45;
      var tmp23_group = (tmp_46 == null ? true : !(tmp_46 == null)) ? tmp_46 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var lightColor1$delegate = tmp23_group;
      sourceInformationMarkerStart($composer_0, -1609453827, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_24 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_23 = this_24.rememberedValue_4dg93v_k$();
      var tmp_47;
      if (false || it_23 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_23 = mutableStateOf('0.5');
        this_24.updateRememberedValue_l1wh71_k$(value_23);
        tmp_47 = value_23;
      } else {
        tmp_47 = it_23;
      }
      var tmp_48 = tmp_47;
      var tmp24_group = (tmp_48 == null ? true : !(tmp_48 == null)) ? tmp_48 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var lightDir1X$delegate = tmp24_group;
      sourceInformationMarkerStart($composer_0, -1609452003, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_25 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_24 = this_25.rememberedValue_4dg93v_k$();
      var tmp_49;
      if (false || it_24 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_24 = mutableStateOf('0.5');
        this_25.updateRememberedValue_l1wh71_k$(value_24);
        tmp_49 = value_24;
      } else {
        tmp_49 = it_24;
      }
      var tmp_50 = tmp_49;
      var tmp25_group = (tmp_50 == null ? true : !(tmp_50 == null)) ? tmp_50 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var lightDir1Y$delegate = tmp25_group;
      sourceInformationMarkerStart($composer_0, -1609450179, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_26 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_25 = this_26.rememberedValue_4dg93v_k$();
      var tmp_51;
      if (false || it_25 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_25 = mutableStateOf('0.5');
        this_26.updateRememberedValue_l1wh71_k$(value_25);
        tmp_51 = value_25;
      } else {
        tmp_51 = it_25;
      }
      var tmp_52 = tmp_51;
      var tmp26_group = (tmp_52 == null ? true : !(tmp_52 == null)) ? tmp_52 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var lightDir1Z$delegate = tmp26_group;
      sourceInformationMarkerStart($composer_0, -1609448308, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_27 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_26 = this_27.rememberedValue_4dg93v_k$();
      var tmp_53;
      if (false || it_26 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_26 = mutableStateOf(Color_init_$Create$(128, 128, 128));
        this_27.updateRememberedValue_l1wh71_k$(value_26);
        tmp_53 = value_26;
      } else {
        tmp_53 = it_26;
      }
      var tmp_54 = tmp_53;
      var tmp27_group = (tmp_54 == null ? true : !(tmp_54 == null)) ? tmp_54 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var lightColor2$delegate = tmp27_group;
      sourceInformationMarkerStart($composer_0, -1609446019, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_28 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_27 = this_28.rememberedValue_4dg93v_k$();
      var tmp_55;
      if (false || it_27 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_27 = mutableStateOf('0.0');
        this_28.updateRememberedValue_l1wh71_k$(value_27);
        tmp_55 = value_27;
      } else {
        tmp_55 = it_27;
      }
      var tmp_56 = tmp_55;
      var tmp28_group = (tmp_56 == null ? true : !(tmp_56 == null)) ? tmp_56 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var lightDir2X$delegate = tmp28_group;
      sourceInformationMarkerStart($composer_0, -1609444194, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_29 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_28 = this_29.rememberedValue_4dg93v_k$();
      var tmp_57;
      if (false || it_28 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_28 = mutableStateOf('-0.4');
        this_29.updateRememberedValue_l1wh71_k$(value_28);
        tmp_57 = value_28;
      } else {
        tmp_57 = it_28;
      }
      var tmp_58 = tmp_57;
      var tmp29_group = (tmp_58 == null ? true : !(tmp_58 == null)) ? tmp_58 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var lightDir2Y$delegate = tmp29_group;
      sourceInformationMarkerStart($composer_0, -1609442338, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_30 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_29 = this_30.rememberedValue_4dg93v_k$();
      var tmp_59;
      if (false || it_29 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_29 = mutableStateOf('-0.1');
        this_30.updateRememberedValue_l1wh71_k$(value_29);
        tmp_59 = value_29;
      } else {
        tmp_59 = it_29;
      }
      var tmp_60 = tmp_59;
      var tmp30_group = (tmp_60 == null ? true : !(tmp_60 == null)) ? tmp_60 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var lightDir2Z$delegate = tmp30_group;
      sourceInformationMarkerStart($composer_0, -1609440439, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_31 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_30 = this_31.rememberedValue_4dg93v_k$();
      var tmp_61;
      if (false || it_30 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_30 = mutableStateOf(Color_init_$Create$(77, 77, 77));
        this_31.updateRememberedValue_l1wh71_k$(value_30);
        tmp_61 = value_30;
      } else {
        tmp_61 = it_30;
      }
      var tmp_62 = tmp_61;
      var tmp31_group = (tmp_62 == null ? true : !(tmp_62 == null)) ? tmp_62 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var lightColor3$delegate = tmp31_group;
      sourceInformationMarkerStart($composer_0, -1609438242, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_32 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_31 = this_32.rememberedValue_4dg93v_k$();
      var tmp_63;
      if (false || it_31 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_31 = mutableStateOf('-0.5');
        this_32.updateRememberedValue_l1wh71_k$(value_31);
        tmp_63 = value_31;
      } else {
        tmp_63 = it_31;
      }
      var tmp_64 = tmp_63;
      var tmp32_group = (tmp_64 == null ? true : !(tmp_64 == null)) ? tmp_64 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var lightDir3X$delegate = tmp32_group;
      sourceInformationMarkerStart($composer_0, -1609436386, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_33 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_32 = this_33.rememberedValue_4dg93v_k$();
      var tmp_65;
      if (false || it_32 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_32 = mutableStateOf('-0.5');
        this_33.updateRememberedValue_l1wh71_k$(value_32);
        tmp_65 = value_32;
      } else {
        tmp_65 = it_32;
      }
      var tmp_66 = tmp_65;
      var tmp33_group = (tmp_66 == null ? true : !(tmp_66 == null)) ? tmp_66 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var lightDir3Y$delegate = tmp33_group;
      sourceInformationMarkerStart($composer_0, -1609434531, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_34 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_33 = this_34.rememberedValue_4dg93v_k$();
      var tmp_67;
      if (false || it_33 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_33 = mutableStateOf('0.5');
        this_34.updateRememberedValue_l1wh71_k$(value_33);
        tmp_67 = value_33;
      } else {
        tmp_67 = it_33;
      }
      var tmp_68 = tmp_67;
      var tmp34_group = (tmp_68 == null ? true : !(tmp_68 == null)) ? tmp_68 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var lightDir3Z$delegate = tmp34_group;
      sourceInformationMarkerStart($composer_0, -1609432630, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_35 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_34 = this_35.rememberedValue_4dg93v_k$();
      var tmp_69;
      if (false || it_34 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_34 = mutableStateOf(Color_init_$Create$(255, 204, 0));
        this_35.updateRememberedValue_l1wh71_k$(value_34);
        tmp_69 = value_34;
      } else {
        tmp_69 = it_34;
      }
      var tmp_70 = tmp_69;
      var tmp35_group = (tmp_70 == null ? true : !(tmp_70 == null)) ? tmp_70 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var ambientColor$delegate = tmp35_group;
      sourceInformationMarkerStart($composer_0, -1609430257, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_36 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_35 = this_36.rememberedValue_4dg93v_k$();
      var tmp_71;
      if (false || it_35 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_35 = mutableStateSetOf();
        this_36.updateRememberedValue_l1wh71_k$(value_35);
        tmp_71 = value_35;
      } else {
        tmp_71 = it_35;
      }
      var tmp_72 = tmp_71;
      var tmp36_group = (tmp_72 == null ? true : !(tmp_72 == null)) ? tmp_72 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var disabledObjects = tmp36_group;
      sourceInformationMarkerStart($composer_0, -1609427588, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_37 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_36 = this_37.rememberedValue_4dg93v_k$();
      var tmp_73;
      if (false || it_36 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_36 = mutableStateOf(true);
        this_37.updateRememberedValue_l1wh71_k$(value_36);
        tmp_73 = value_36;
      } else {
        tmp_73 = it_36;
      }
      var tmp_74 = tmp_73;
      var tmp37_group = (tmp_74 == null ? true : !(tmp_74 == null)) ? tmp_74 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var debugOverlayEnabled$delegate = tmp37_group;
      sourceInformationMarkerStart($composer_0, -1609425699, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_38 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_37 = this_38.rememberedValue_4dg93v_k$();
      var tmp_75;
      if (false || it_37 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_37 = mutableStateOf(false);
        this_38.updateRememberedValue_l1wh71_k$(value_37);
        tmp_75 = value_37;
      } else {
        tmp_75 = it_37;
      }
      var tmp_76 = tmp_75;
      var tmp38_group = (tmp_76 == null ? true : !(tmp_76 == null)) ? tmp_76 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var lazyLoadRooms$delegate = tmp38_group;
      sourceInformationMarkerStart($composer_0, -1609423665, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_39 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_38 = this_39.rememberedValue_4dg93v_k$();
      var tmp_77;
      if (false || it_38 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_38 = mutableStateSetOf();
        this_39.updateRememberedValue_l1wh71_k$(value_38);
        tmp_77 = value_38;
      } else {
        tmp_77 = it_38;
      }
      var tmp_78 = tmp_77;
      var tmp39_group = (tmp_78 == null ? true : !(tmp_78 == null)) ? tmp_78 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var force4bppPatterns = tmp39_group;
      sourceInformationMarkerStart($composer_0, -1609421317, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_40 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_39 = this_40.rememberedValue_4dg93v_k$();
      var tmp_79;
      if (false || it_39 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_39 = mutableStateOf(512);
        this_40.updateRememberedValue_l1wh71_k$(value_39);
        tmp_79 = value_39;
      } else {
        tmp_79 = it_39;
      }
      var tmp_80 = tmp_79;
      var tmp40_group = (tmp_80 == null ? true : !(tmp_80 == null)) ? tmp_80 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var atlasSize$delegate = tmp40_group;
      sourceInformationMarkerStart($composer_0, -1609419459, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_41 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_40 = this_41.rememberedValue_4dg93v_k$();
      var tmp_81;
      if (false || it_40 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_40 = mutableStateOf('512');
        this_41.updateRememberedValue_l1wh71_k$(value_40);
        tmp_81 = value_40;
      } else {
        tmp_81 = it_40;
      }
      var tmp_82 = tmp_81;
      var tmp41_group = (tmp_82 == null ? true : !(tmp_82 == null)) ? tmp_82 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var atlasSizeText$delegate = tmp41_group;
      sourceInformationMarkerStart($composer_0, -1609417377, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_42 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_41 = this_42.rememberedValue_4dg93v_k$();
      var tmp_83;
      if (false || it_41 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_41 = mutableStateOf(2097152);
        this_42.updateRememberedValue_l1wh71_k$(value_41);
        tmp_83 = value_41;
      } else {
        tmp_83 = it_41;
      }
      var tmp_84 = tmp_83;
      var tmp42_group = (tmp_84 == null ? true : !(tmp_84 == null)) ? tmp_84 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var eeAtlasCacheBytes$delegate = tmp42_group;
      sourceInformationMarkerStart($composer_0, -1609415135, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_43 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_42 = this_43.rememberedValue_4dg93v_k$();
      var tmp_85;
      if (false || it_42 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_42 = mutableStateOf('2097152');
        this_43.updateRememberedValue_l1wh71_k$(value_42);
        tmp_85 = value_42;
      } else {
        tmp_85 = it_42;
      }
      var tmp_86 = tmp_85;
      var tmp43_group = (tmp_86 == null ? true : !(tmp_86 == null)) ? tmp_86 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var eeAtlasCacheBytesText$delegate = tmp43_group;
      sourceInformationMarkerStart($composer_0, -1609412913, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_44 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_43 = this_44.rememberedValue_4dg93v_k$();
      var tmp_87;
      if (false || it_43 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_43 = mutableStateSetOf();
        this_44.updateRememberedValue_l1wh71_k$(value_43);
        tmp_87 = value_43;
      } else {
        tmp_87 = it_43;
      }
      var tmp_88 = tmp_87;
      var tmp44_group = (tmp_88 == null ? true : !(tmp_88 == null)) ? tmp_88 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var eagerlyLoadedRooms = tmp44_group;
      sourceInformationMarkerStart($composer_0, -1609410651, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_45 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_44 = this_45.rememberedValue_4dg93v_k$();
      var tmp_89;
      if (false || it_44 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_44 = mutableStateOf('BUTR.000_00');
        this_45.updateRememberedValue_l1wh71_k$(value_44);
        tmp_89 = value_44;
      } else {
        tmp_89 = it_44;
      }
      var tmp_90 = tmp_89;
      var tmp45_group = (tmp_90 == null ? true : !(tmp_90 == null)) ? tmp_90 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var gameId$delegate = tmp45_group;
      sourceInformationMarkerStart($composer_0, -1609408431, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_46 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_45 = this_46.rememberedValue_4dg93v_k$();
      var tmp_91;
      if (false || it_45 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_45 = mutableStateOf(get_UNDERTALE_PRESET());
        this_46.updateRememberedValue_l1wh71_k$(value_45);
        tmp_91 = value_45;
      } else {
        tmp_91 = it_45;
      }
      var tmp_92 = tmp_91;
      var tmp46_group = (tmp_92 == null ? true : !(tmp_92 == null)) ? tmp_92 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var selectedPreset$delegate = tmp46_group;
      sourceInformationMarkerStart($composer_0, -1609406021, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_47 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_46 = this_47.rememberedValue_4dg93v_k$();
      var tmp_93;
      if (false || it_46 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_46 = mutableStateOf(0.0);
        this_47.updateRememberedValue_l1wh71_k$(value_46);
        tmp_93 = value_46;
      } else {
        tmp_93 = it_46;
      }
      var tmp_94 = tmp_93;
      var tmp47_group = (tmp_94 == null ? true : !(tmp_94 == null)) ? tmp_94 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var startTime$delegate = tmp47_group;
      sourceInformationMarkerStart($composer_0, -1609402389, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_48 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_47 = this_48.rememberedValue_4dg93v_k$();
      var tmp_95;
      if (false || it_47 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_47 = App$lambda_81(controller1Mappings, controller2Mappings, filesystemMappings, disabledObjects, eagerlyLoadedRooms, force4bppPatterns, selectedPreset$delegate, bgAlpha$delegate, bgColorTopLeft$delegate, bgColorTopRight$delegate, bgColorBottomLeft$delegate, bgColorBottomRight$delegate, ambientColor$delegate, lightColor1$delegate, lightDir1X$delegate, lightDir1Y$delegate, lightDir1Z$delegate, lightColor2$delegate, lightDir2X$delegate, lightDir2Y$delegate, lightDir2Z$delegate, lightColor3$delegate, lightDir3X$delegate, lightDir3Y$delegate, lightDir3Z$delegate, debugOverlayEnabled$delegate, lazyLoadRooms$delegate, atlasSize$delegate, atlasSizeText$delegate, gamepadEnabled$delegate, eeAtlasCacheBytes$delegate, eeAtlasCacheBytesText$delegate);
        this_48.updateRememberedValue_l1wh71_k$(value_47);
        tmp_95 = value_47;
      } else {
        tmp_95 = it_47;
      }
      var tmp_96 = tmp_95;
      var tmp48_group = (tmp_96 == null ? true : !(tmp_96 == null)) ? tmp_96 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var applyPreset = tmp48_group;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)600@27430L68:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = App$lambda_82;
      }
      var composer = $composer_1;
      sourceInformationMarkerStart($composer_1, 683736516, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_48 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_97;
      if (false || it_48 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_48 = createCompositionCoroutineScope(getContext(), composer);
        $composer_1.updateRememberedValue_l1wh71_k$(value_48);
        tmp_97 = value_48;
      } else {
        tmp_97 = it_48;
      }
      var tmp_98 = tmp_97;
      var tmp1_group_0 = (tmp_98 == null ? true : !(tmp_98 == null)) ? tmp_98 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp1_group_0;
      sourceInformationMarkerStart($composer_0, -1609339780, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_49 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_49 = this_49.rememberedValue_4dg93v_k$();
      var tmp_99;
      if (false || it_49 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_49 = new ButterWorkerClient();
        this_49.updateRememberedValue_l1wh71_k$(value_49);
        tmp_99 = value_49;
      } else {
        tmp_99 = it_49;
      }
      var tmp_100 = tmp_99;
      var tmp49_group = (tmp_100 == null ? true : !(tmp_100 == null)) ? tmp_100 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var workerClient = tmp49_group;
      H2(null, ComposableSingletons$AppKt_getInstance().lambda$174589817__1, $composer_0, 48, 1);
      if (!App$lambda_7(processing$delegate)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1658453519);
        sourceInformation($composer_0, '706@31249L8552');
        var tmp_101 = File_getInstance();
        Input(tmp_101, App$lambda_83(logMessages, scope, parsedDataWin$delegate, downloadUrl$delegate, parsedGameName$delegate, loadedExternalAudio$delegate, loadedAudioGroupFiles$delegate, loadedMusFiles$delegate, loadedSourceFiles$delegate, status$delegate, applyPreset, loadedFileBytes$delegate), $composer_0, org_jetbrains_compose_web_attributes_InputType_File$stableprop_getter());
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(1666687367);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      sourceInformationMarkerStart($composer_0, -1608803147, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_50 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_50 = this_50.rememberedValue_4dg93v_k$();
      var tmp_102;
      if (false || it_50 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_50 = App$lambda_84;
        this_50.updateRememberedValue_l1wh71_k$(value_50);
        tmp_102 = value_50;
      } else {
        tmp_102 = it_50;
      }
      var tmp_103 = tmp_102;
      var tmp50_group = (tmp_103 == null ? true : !(tmp_103 == null)) ? tmp_103 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(114021881, true, App$lambda_85(status$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_51 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_104;
      if (invalid || it_51 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_51 = ComposableLambda$invoke$ref_39(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_51);
        tmp_104 = value_51;
      } else {
        tmp_104 = it_51;
      }
      var tmp_105 = tmp_104;
      var tmp0 = (tmp_105 == null ? true : !(tmp_105 == null)) ? tmp_105 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      P(tmp50_group, tmp0, $composer_0, 54, 0);
      if (!(App$lambda_19(parsedGameName$delegate) == null) && !App$lambda_7(processing$delegate) && App$lambda_3(downloadUrl$delegate) == null) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1667516679);
        sourceInformation($composer_0, '877@39977L136,881@40127L213,888@40342L504,881@40123L723,905@40870L18285,905@40856L18299,1359@59169L30,1359@59201L2392,1359@59165L2428');
        P(null, ComposableSingletons$AppKt_getInstance().lambda$_2120254389_uwqplc_1, $composer_0, 48, 1);
        sourceInformationMarkerStart($composer_0, -1608793424, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_51 = $composer_0;
        // Inline function 'kotlin.let' call
        var it_52 = this_51.rememberedValue_4dg93v_k$();
        var tmp_106;
        if (false || it_52 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_52 = App$lambda_86;
          this_51.updateRememberedValue_l1wh71_k$(value_52);
          tmp_106 = value_52;
        } else {
          tmp_106 = it_52;
        }
        var tmp_107 = tmp_106;
        var tmp51_group = (tmp_107 == null ? true : !(tmp_107 == null)) ? tmp_107 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-494916180, true, App$lambda_87(applyPreset, selectedPreset$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_53 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_108;
        if (invalid_0 || it_53 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_53 = ComposableLambda$invoke$ref_41(dispatchReceiver_0);
          $composer_3.updateRememberedValue_l1wh71_k$(value_53);
          tmp_108 = value_53;
        } else {
          tmp_108 = it_53;
        }
        var tmp_109 = tmp_108;
        var tmp0_0 = (tmp_109 == null ? true : !(tmp_109 == null)) ? tmp_109 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        Div(tmp51_group, tmp0_0, $composer_0, 54, 0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_1 = rememberComposableLambda(449685051, true, App$lambda_92(controller1Mappings, controller2Mappings, disabledObjects, eagerlyLoadedRooms, force4bppPatterns, gamepadEnabled$delegate, filesystemMappings, m, ambientColor$delegate, bgAlpha$delegate, bgColorTopLeft$delegate, bgColorTopRight$delegate, bgColorBottomLeft$delegate, bgColorBottomRight$delegate, lightColor1$delegate, lightDir1X$delegate, lightDir1Y$delegate, lightDir1Z$delegate, lightColor2$delegate, lightDir2X$delegate, lightDir2Y$delegate, lightDir2Z$delegate, lightColor3$delegate, lightDir3X$delegate, lightDir3Y$delegate, lightDir3Z$delegate, scope, customIconBytes$delegate, gameId$delegate, lazyLoadRooms$delegate, debugOverlayEnabled$delegate, atlasSizeText$delegate, atlasSize$delegate, eeAtlasCacheBytesText$delegate, eeAtlasCacheBytes$delegate, customElfBytes$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_4 = $composer_0;
        sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_4.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        var it_54 = $composer_4.rememberedValue_4dg93v_k$();
        var tmp_110;
        if (invalid_1 || it_54 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_54 = ComposableLambda$invoke$ref_72(dispatchReceiver_1);
          $composer_4.updateRememberedValue_l1wh71_k$(value_54);
          tmp_110 = value_54;
        } else {
          tmp_110 = it_54;
        }
        var tmp_111 = tmp_110;
        var tmp0_1 = (tmp_111 == null ? true : !(tmp_111 == null)) ? tmp_111 : THROW_CCE();
        sourceInformationMarkerEnd($composer_4);
        FieldWrappers(null, tmp0_1, $composer_0, 48, 1);
        sourceInformationMarkerStart($composer_0, -1608184263, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_52 = $composer_0;
        // Inline function 'kotlin.let' call
        var it_55 = this_52.rememberedValue_4dg93v_k$();
        var tmp_112;
        if (false || it_55 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_55 = App$lambda_93;
          this_52.updateRememberedValue_l1wh71_k$(value_55);
          tmp_112 = value_55;
        } else {
          tmp_112 = it_55;
        }
        var tmp_113 = tmp_112;
        var tmp52_group = (tmp_113 == null ? true : !(tmp_113 == null)) ? tmp_113 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_2 = rememberComposableLambda(2037239011, true, App$lambda_94(logMessages, scope, loadedFileBytes$delegate, processing$delegate, startTime$delegate, status$delegate, workerClient, force4bppPatterns, loadedExternalAudio$delegate, loadedAudioGroupFiles$delegate, loadedMusFiles$delegate, atlasSize$delegate, filesystemMappings, parsedDataWin$delegate, customElfBytes$delegate, customIconBytes$delegate, gameId$delegate, loadedSourceFiles$delegate, debugOverlayEnabled$delegate, gamepadEnabled$delegate, controller1Mappings, controller2Mappings, bgAlpha$delegate, bgColorTopLeft$delegate, bgColorTopRight$delegate, bgColorBottomLeft$delegate, bgColorBottomRight$delegate, lightDir1X$delegate, lightDir1Y$delegate, lightDir1Z$delegate, lightDir2X$delegate, lightDir2Y$delegate, lightDir2Z$delegate, lightDir3X$delegate, lightDir3Y$delegate, lightDir3Z$delegate, lightColor1$delegate, lightColor2$delegate, lightColor3$delegate, ambientColor$delegate, disabledObjects, lazyLoadRooms$delegate, eagerlyLoadedRooms, eeAtlasCacheBytes$delegate, isoFileName$delegate, downloadUrl$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_5 = $composer_0;
        sourceInformationMarkerStart($composer_5, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_5.changed_ga7h3f_k$(dispatchReceiver_2);
        // Inline function 'kotlin.let' call
        var it_56 = $composer_5.rememberedValue_4dg93v_k$();
        var tmp_114;
        if (invalid_2 || it_56 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_56 = ComposableLambda$invoke$ref_73(dispatchReceiver_2);
          $composer_5.updateRememberedValue_l1wh71_k$(value_56);
          tmp_114 = value_56;
        } else {
          tmp_114 = it_56;
        }
        var tmp_115 = tmp_114;
        var tmp0_2 = (tmp_115 == null ? true : !(tmp_115 == null)) ? tmp_115 : THROW_CCE();
        sourceInformationMarkerEnd($composer_5);
        Div(tmp52_group, tmp0_2, $composer_0, 54, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(1688305031);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!logMessages._v.isEmpty_y1axqb_k$()) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1688365946);
        sourceInformation($composer_0, '1415@61669L27,1415@61698L124,1415@61665L157');
        sourceInformationMarkerStart($composer_0, -1608104266, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_53 = $composer_0;
        // Inline function 'kotlin.let' call
        var it_57 = this_53.rememberedValue_4dg93v_k$();
        var tmp_116;
        if (false || it_57 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_57 = App$lambda_95;
          this_53.updateRememberedValue_l1wh71_k$(value_57);
          tmp_116 = value_57;
        } else {
          tmp_116 = it_57;
        }
        var tmp_117 = tmp_116;
        var tmp53_group = (tmp_117 == null ? true : !(tmp_117 == null)) ? tmp_117 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_3 = rememberComposableLambda(-1778827347, true, App$lambda_96(logMessages), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_6 = $composer_0;
        sourceInformationMarkerStart($composer_6, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = $composer_6.changed_ga7h3f_k$(dispatchReceiver_3);
        // Inline function 'kotlin.let' call
        var it_58 = $composer_6.rememberedValue_4dg93v_k$();
        var tmp_118;
        if (invalid_3 || it_58 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_58 = ComposableLambda$invoke$ref_75(dispatchReceiver_3);
          $composer_6.updateRememberedValue_l1wh71_k$(value_58);
          tmp_118 = value_58;
        } else {
          tmp_118 = it_58;
        }
        var tmp_119 = tmp_118;
        var tmp0_3 = (tmp_119 == null ? true : !(tmp_119 == null)) ? tmp_119 : THROW_CCE();
        sourceInformationMarkerEnd($composer_6);
        Div(tmp53_group, tmp0_3, $composer_0, 54, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(1688532199);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      if (!(App$lambda_3(downloadUrl$delegate) == null)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1688605049);
        sourceInformation($composer_0, '1424@61896L30,1424@61928L570,1424@61892L606');
        sourceInformationMarkerStart($composer_0, -1608096999, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_54 = $composer_0;
        // Inline function 'kotlin.let' call
        var it_59 = this_54.rememberedValue_4dg93v_k$();
        var tmp_120;
        if (false || it_59 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_59 = App$lambda_97;
          this_54.updateRememberedValue_l1wh71_k$(value_59);
          tmp_120 = value_59;
        } else {
          tmp_120 = it_59;
        }
        var tmp_121 = tmp_120;
        var tmp54_group = (tmp_121 == null ? true : !(tmp_121 == null)) ? tmp_121 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_4 = rememberComposableLambda(1232228782, true, App$lambda_98(downloadUrl$delegate, isoFileName$delegate, logMessages), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_7 = $composer_0;
        sourceInformationMarkerStart($composer_7, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_4 = $composer_7.changed_ga7h3f_k$(dispatchReceiver_4);
        // Inline function 'kotlin.let' call
        var it_60 = $composer_7.rememberedValue_4dg93v_k$();
        var tmp_122;
        if (invalid_4 || it_60 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_60 = ComposableLambda$invoke$ref_76(dispatchReceiver_4);
          $composer_7.updateRememberedValue_l1wh71_k$(value_60);
          tmp_122 = value_60;
        } else {
          tmp_122 = it_60;
        }
        var tmp_123 = tmp_122;
        var tmp0_4 = (tmp_123 == null ? true : !(tmp_123 == null)) ? tmp_123 : THROW_CCE();
        sourceInformationMarkerEnd($composer_7);
        Div(tmp54_group, tmp0_4, $composer_0, 54, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(1689202791);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp55_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp55_safe_receiver == null)
      null;
    else {
      tmp55_safe_receiver.updateScope_t8jcf_k$(App$lambda_99(m, $changed));
    }
  }
  function jsInt8ArrayToByteArray(int8Array) {
    _init_properties_App_kt__fk8usv();
    var tmp = int8Array.length;
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var bytes = new Int8Array(length);
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_0 = int8Array[i];
        bytes[i] = toByte((!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE());
      }
       while (inductionVariable < length);
    return bytes;
  }
  function readFileAsBytes(file, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    var reader = new FileReader();
    // Inline function 'web.events.EventHandler' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    reader.onload = readFileAsBytes$lambda(reader, cancellable);
    // Inline function 'web.events.EventHandler' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    reader.onerror = readFileAsBytes$lambda_0(cancellable);
    reader.readAsArrayBuffer(file);
    return cancellable.getResult_fck196_k$();
  }
  function fetchResourceBytes(path, $completion) {
    var tmp = new $fetchResourceBytesCOROUTINE$(path, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function com_mrpowergamerbr_butterscotchpreprocessor_components_LightSettings$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_components_LightSettings$stable;
  }
  function com_mrpowergamerbr_butterscotchpreprocessor_components_Preset$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_components_Preset$stable;
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$174589817$lambda($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C703@31197L17:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(174589817, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$174589817.<anonymous> (App.kt:703)');
    }
    Text('Converter', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_2120254389$lambda_cdmmm($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C878@39993L110:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-2120254389, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-2120254389.<anonymous> (App.kt:878)');
    }
    Text('Select a preset to quickly configure the settings for a specific game, or customize the options below.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$580816950$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C920@41499L33:App.kt#5n9s4q');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(580816950, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$580816950.<anonymous> (App.kt:920)');
      }
      FieldLabel_0('Filesystem Mappings', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$1343367213$lambda($this$Th, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C928@41738L19:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(1343367213, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$1343367213.<anonymous> (App.kt:928)');
    }
    Text('Source File', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$1229967844$lambda($this$Th, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C929@41793L19:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(1229967844, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$1229967844.<anonymous> (App.kt:929)');
    }
    Text('Target Path', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$219301797$lambda($this$Th, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(219301797, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$219301797.<anonymous> (App.kt:930)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$301348709$lambda($this$Tr, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C928@41733L26,929@41788L26,930@41843L5:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(301348709, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$301348709.<anonymous> (App.kt:928)');
    }
    Th(null, ComposableSingletons$AppKt_getInstance().lambda$1343367213__1, $composer_0, 48, 1);
    Th(null, ComposableSingletons$AppKt_getInstance().lambda$1229967844__1, $composer_0, 48, 1);
    Th(null, ComposableSingletons$AppKt_getInstance().lambda$219301797__1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_1327202313$lambda_d2i992($this$Thead, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C927@41700L174:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-1327202313, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-1327202313.<anonymous> (App.kt:927)');
    }
    Tr(null, ComposableSingletons$AppKt_getInstance().lambda$301348709__1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_455728366$lambda_4avnx6($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C949@42814L14:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-455728366, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-455728366.<anonymous> (App.kt:949)');
    }
    Text('Delete', $composer_0, 6);
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
  function ComposableSingletons$AppKt$lambda$_930385749$lambda_4futem($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C989@44280L11:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-930385749, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-930385749.<anonymous> (App.kt:989)');
    }
    Text('Add', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_10(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$1561086367$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1001@44717L44:App.kt#5n9s4q');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1561086367, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$1561086367.<anonymous> (App.kt:1001)');
      }
      FieldLabel_0('Memory Card Save Ambient Light', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_11(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$876856062$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1010@45027L47:App.kt#5n9s4q');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(876856062, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$876856062.<anonymous> (App.kt:1010)');
      }
      FieldLabel_0('Memory Card Save Background Alpha', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_12(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$192625757$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1029@45684L52:App.kt#5n9s4q');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(192625757, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$192625757.<anonymous> (App.kt:1029)');
      }
      FieldLabel_0('Memory Card Save Background (Top Left)', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_13(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_491604548$lambda_cpf3mh($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1038@46006L53:App.kt#5n9s4q');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-491604548, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-491604548.<anonymous> (App.kt:1038)');
      }
      FieldLabel_0('Memory Card Save Background (Top Right)', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_1175834853$lambda_1qell5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1047@46331L55:App.kt#5n9s4q');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1175834853, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-1175834853.<anonymous> (App.kt:1047)');
      }
      FieldLabel_0('Memory Card Save Background (Bottom Left)', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_15(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_1860065158$lambda_3nmkl0($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1056@46662L56:App.kt#5n9s4q');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1860065158, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-1860065158.<anonymous> (App.kt:1056)');
      }
      FieldLabel_0('Memory Card Save Background (Bottom Right)', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_16(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$1750671833$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1065@46996L38:App.kt#5n9s4q');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1750671833, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$1750671833.<anonymous> (App.kt:1065)');
      }
      FieldLabel_0('Memory Card Save Light 1', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_17(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$1066441528$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1089@47943L38:App.kt#5n9s4q');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1066441528, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$1066441528.<anonymous> (App.kt:1089)');
      }
      FieldLabel_0('Memory Card Save Light 2', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_18(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$382211223$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1113@48890L38:App.kt#5n9s4q');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(382211223, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$382211223.<anonymous> (App.kt:1113)');
      }
      FieldLabel_0('Memory Card Save Light 3', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_19(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$808417795$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1145@50153L29:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(808417795, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$808417795.<anonymous> (App.kt:1145)');
    }
    Text('Memory Card Save Icon', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_20(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_57606726$lambda_dyhf3l($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1151@50362L212:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-57606726, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-57606726.<anonymous> (App.kt:1151)');
    }
    Text('When selected, Butterscotch will use a custom memory card save icon for your game. The icon must be in the PlayStation 2 save icon format. If not set, then the default annoying dog save icon will be used.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_21(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$1404791172$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1142@50043L78,1142@50031L177,1148@50246L84,1148@50234L366:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(1404791172, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$1404791172.<anonymous> (App.kt:1142)');
    }
    sourceInformationMarkerStart($composer_0, 1384586642, 'CC(remember):App.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value = ComposableSingletons$AppKt$lambda$1404791172$lambda$lambda;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    Div(tmp0_group, ComposableSingletons$AppKt_getInstance().lambda$808417795__1, $composer_0, 54, 0);
    sourceInformationMarkerStart($composer_0, 1384593144, 'CC(remember):App.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value_0 = ComposableSingletons$AppKt$lambda$1404791172$lambda$lambda_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    Div(tmp1_group, ComposableSingletons$AppKt_getInstance().lambda$_57606726_gqw8nj_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt$lambda$1404791172$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-title']);
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt$lambda$1404791172$lambda$lambda_0($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-description']);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_22(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$412316129$lambda($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1187@52104L14:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(412316129, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$412316129.<anonymous> (App.kt:1187)');
    }
    Text('Remove', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_23(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_429912214$lambda_fj8f66($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1198@52606L14:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-429912214, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-429912214.<anonymous> (App.kt:1198)');
    }
    Text('Select', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_24(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_615528572$lambda_tty0k5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1207@52814L21:App.kt#5n9s4q');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-615528572, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-615528572.<anonymous> (App.kt:1207)');
      }
      FieldLabel_0('Game ID', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_25(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$357203746$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1251@54469L26:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(357203746, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$357203746.<anonymous> (App.kt:1251)');
    }
    Text('Texture Atlas Size', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_26(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_31789415$lambda_j6i7lg($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1253@54590L187:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-31789415, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-31789415.<anonymous> (App.kt:1253)');
    }
    Text('The width/height (in pixels) of each texture atlas page. Lower resolutions help to avoid VRAM thrashing, but at the same time also decreases the resolution of the textures to fit.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_27(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_1299758877$lambda_n13tub($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1251@54439L26,1251@54427L70,1252@54530L32,1252@54518L281:App.kt#5n9s4q');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1299758877, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-1299758877.<anonymous> (App.kt:1251)');
      }
      sourceInformationMarkerStart($composer_0, 767203453, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableSingletons$AppKt$lambda$_1299758877$lambda$lambda_qhm98o;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Div(tmp0_group, ComposableSingletons$AppKt_getInstance().lambda$357203746__1, $composer_0, 54, 0);
      sourceInformationMarkerStart($composer_0, 767206371, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableSingletons$AppKt$lambda$_1299758877$lambda$lambda_qhm98o_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Div(tmp1_group, ComposableSingletons$AppKt_getInstance().lambda$_31789415_jssyb6__1, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt$lambda$_1299758877$lambda$lambda_qhm98o($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-title']);
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt$lambda$_1299758877$lambda$lambda_qhm98o_0($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-description']);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_28(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_292782439$lambda_cspay8($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1270@55380L31:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-292782439, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-292782439.<anonymous> (App.kt:1270)');
    }
    Text('EE RAM Atlas Cache Size', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_29(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_453055408$lambda_t55juu($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1272@55506L176:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-453055408, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-453055408.<anonymous> (App.kt:1272)');
    }
    Text("The size of the atlas cache in the PlayStation 2's EE RAM. Larger cache means less disk reads, which reduces stutters, but you do you more EE RAM. The size is in bytes.", $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_30(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$799003674$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1270@55350L26,1270@55338L75,1271@55446L32,1271@55434L270:App.kt#5n9s4q');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(799003674, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$799003674.<anonymous> (App.kt:1270)');
      }
      sourceInformationMarkerStart($composer_0, -956614156, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableSingletons$AppKt$lambda$799003674$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Div(tmp0_group, ComposableSingletons$AppKt_getInstance().lambda$_292782439_10rgcc_1, $composer_0, 54, 0);
      sourceInformationMarkerStart($composer_0, -956611078, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableSingletons$AppKt$lambda$799003674$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Div(tmp1_group, ComposableSingletons$AppKt_getInstance().lambda$_453055408_mprtn6__1, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt$lambda$799003674$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-title']);
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt$lambda$799003674$lambda$lambda_0($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-description']);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_31(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_1244273120$lambda_gpshyo($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1299@56620L35:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-1244273120, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-1244273120.<anonymous> (App.kt:1299)');
    }
    Text('Butterscotch ELF (Advanced)', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_32(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_2110297641$lambda_dkb2zz($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1305@56835L218:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-2110297641, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-2110297641.<anonymous> (App.kt:1305)');
    }
    Text('When selected, Butterscotch will use a custom ELF binary instead of the built-in one. This is intended for advanced users who have built their own Butterscotch runtime. If not set, the default ELF will be used.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_33(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_647899743$lambda_sieyj1($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1296@56510L78,1296@56498L183,1302@56719L84,1302@56707L372:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-647899743, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-647899743.<anonymous> (App.kt:1296)');
    }
    sourceInformationMarkerStart($composer_0, 138606191, 'CC(remember):App.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value = ComposableSingletons$AppKt$lambda$_647899743$lambda$lambda_c4qr5q;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    Div(tmp0_group, ComposableSingletons$AppKt_getInstance().lambda$_1244273120_leogry_1, $composer_0, 54, 0);
    sourceInformationMarkerStart($composer_0, 138612885, 'CC(remember):App.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value_0 = ComposableSingletons$AppKt$lambda$_647899743$lambda$lambda_c4qr5q_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    Div(tmp1_group, ComposableSingletons$AppKt_getInstance().lambda$_2110297641_25ddzl_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt$lambda$_647899743$lambda$lambda_c4qr5q($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-title']);
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt$lambda$_647899743$lambda$lambda_c4qr5q_0($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-description']);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_34(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_1640374786$lambda_qxlcfg($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1340@58520L14:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-1640374786, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-1640374786.<anonymous> (App.kt:1340)');
    }
    Text('Remove', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_35(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$1812364167$lambda($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1351@59021L14:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(1812364167, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$1812364167.<anonymous> (App.kt:1351)');
    }
    Text('Select', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_36(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$1258793705$lambda($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1408@61535L34:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(1258793705, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$1258793705.<anonymous> (App.kt:1408)');
    }
    Text('Generate PlayStation 2 ISO', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_37(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_203076196$lambda_56jtbk($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1429@62106L20:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-203076196, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-203076196.<anonymous> (App.kt:1429)');
    }
    Text('Download ISO', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_38(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$_980776967$lambda_g24h5b($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C1441@62459L15:App.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-980776967, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$AppKt.lambda$-980776967.<anonymous> (App.kt:1441)');
    }
    Text('Go Back', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.lambda$174589817__1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(174589817, false, ComposableSingletons$AppKt$lambda$174589817$lambda));
    var tmp_0 = this;
    tmp_0.lambda$_2120254389_uwqplc_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-2120254389, false, ComposableSingletons$AppKt$lambda$_2120254389$lambda_cdmmm));
    var tmp_1 = this;
    tmp_1.lambda$580816950__1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(580816950, false, ComposableSingletons$AppKt$lambda$580816950$lambda));
    var tmp_2 = this;
    tmp_2.lambda$1343367213__1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(1343367213, false, ComposableSingletons$AppKt$lambda$1343367213$lambda));
    var tmp_3 = this;
    tmp_3.lambda$1229967844__1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(1229967844, false, ComposableSingletons$AppKt$lambda$1229967844$lambda));
    var tmp_4 = this;
    tmp_4.lambda$219301797__1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(219301797, false, ComposableSingletons$AppKt$lambda$219301797$lambda));
    var tmp_5 = this;
    tmp_5.lambda$301348709__1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(301348709, false, ComposableSingletons$AppKt$lambda$301348709$lambda));
    var tmp_6 = this;
    tmp_6.lambda$_1327202313_60eba0__1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-1327202313, false, ComposableSingletons$AppKt$lambda$_1327202313$lambda_d2i992));
    var tmp_7 = this;
    tmp_7.lambda$_455728366_9wqm56__1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-455728366, false, ComposableSingletons$AppKt$lambda$_455728366$lambda_4avnx6));
    var tmp_8 = this;
    tmp_8.lambda$_930385749_bqgssy_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-930385749, false, ComposableSingletons$AppKt$lambda$_930385749$lambda_4futem));
    var tmp_9 = this;
    tmp_9.lambda$1561086367__1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(1561086367, false, ComposableSingletons$AppKt$lambda$1561086367$lambda));
    var tmp_10 = this;
    tmp_10.lambda$876856062__1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(876856062, false, ComposableSingletons$AppKt$lambda$876856062$lambda));
    var tmp_11 = this;
    tmp_11.lambda$192625757__1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(192625757, false, ComposableSingletons$AppKt$lambda$192625757$lambda));
    var tmp_12 = this;
    tmp_12.lambda$_491604548_51oekl_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-491604548, false, ComposableSingletons$AppKt$lambda$_491604548$lambda_cpf3mh));
    var tmp_13 = this;
    tmp_13.lambda$_1175834853_tnfiad_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-1175834853, false, ComposableSingletons$AppKt$lambda$_1175834853$lambda_1qell5));
    var tmp_14 = this;
    tmp_14.lambda$_1860065158_ab1mba_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-1860065158, false, ComposableSingletons$AppKt$lambda$_1860065158$lambda_3nmkl0));
    var tmp_15 = this;
    tmp_15.lambda$1750671833__1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(1750671833, false, ComposableSingletons$AppKt$lambda$1750671833$lambda));
    var tmp_16 = this;
    tmp_16.lambda$1066441528__1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(1066441528, false, ComposableSingletons$AppKt$lambda$1066441528$lambda));
    var tmp_17 = this;
    tmp_17.lambda$382211223__1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(382211223, false, ComposableSingletons$AppKt$lambda$382211223$lambda));
    var tmp_18 = this;
    tmp_18.lambda$808417795__1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(808417795, false, ComposableSingletons$AppKt$lambda$808417795$lambda));
    var tmp_19 = this;
    tmp_19.lambda$_57606726_gqw8nj_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-57606726, false, ComposableSingletons$AppKt$lambda$_57606726$lambda_dyhf3l));
    var tmp_20 = this;
    tmp_20.lambda$1404791172__1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(1404791172, false, ComposableSingletons$AppKt$lambda$1404791172$lambda));
    var tmp_21 = this;
    tmp_21.lambda$412316129__1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(412316129, false, ComposableSingletons$AppKt$lambda$412316129$lambda));
    var tmp_22 = this;
    tmp_22.lambda$_429912214_gx42qi_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-429912214, false, ComposableSingletons$AppKt$lambda$_429912214$lambda_fj8f66));
    var tmp_23 = this;
    tmp_23.lambda$_615528572_o1uf0h_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-615528572, false, ComposableSingletons$AppKt$lambda$_615528572$lambda_tty0k5));
    var tmp_24 = this;
    tmp_24.lambda$357203746__1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(357203746, false, ComposableSingletons$AppKt$lambda$357203746$lambda));
    var tmp_25 = this;
    tmp_25.lambda$_31789415_jssyb6__1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(-31789415, false, ComposableSingletons$AppKt$lambda$_31789415$lambda_j6i7lg));
    var tmp_26 = this;
    tmp_26.lambda$_1299758877_enoz8x_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-1299758877, false, ComposableSingletons$AppKt$lambda$_1299758877$lambda_n13tub));
    var tmp_27 = this;
    tmp_27.lambda$_292782439_10rgcc_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-292782439, false, ComposableSingletons$AppKt$lambda$_292782439$lambda_cspay8));
    var tmp_28 = this;
    tmp_28.lambda$_453055408_mprtn6__1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(-453055408, false, ComposableSingletons$AppKt$lambda$_453055408$lambda_t55juu));
    var tmp_29 = this;
    tmp_29.lambda$799003674__1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(799003674, false, ComposableSingletons$AppKt$lambda$799003674$lambda));
    var tmp_30 = this;
    tmp_30.lambda$_1244273120_leogry_1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(-1244273120, false, ComposableSingletons$AppKt$lambda$_1244273120$lambda_gpshyo));
    var tmp_31 = this;
    tmp_31.lambda$_2110297641_25ddzl_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(-2110297641, false, ComposableSingletons$AppKt$lambda$_2110297641$lambda_dkb2zz));
    var tmp_32 = this;
    tmp_32.lambda$_647899743_m9pmdj_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(-647899743, false, ComposableSingletons$AppKt$lambda$_647899743$lambda_sieyj1));
    var tmp_33 = this;
    tmp_33.lambda$_1640374786_dvov2u_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(-1640374786, false, ComposableSingletons$AppKt$lambda$_1640374786$lambda_qxlcfg));
    var tmp_34 = this;
    tmp_34.lambda$1812364167__1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(1812364167, false, ComposableSingletons$AppKt$lambda$1812364167$lambda));
    var tmp_35 = this;
    tmp_35.lambda$1258793705__1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(1258793705, false, ComposableSingletons$AppKt$lambda$1258793705$lambda));
    var tmp_36 = this;
    tmp_36.lambda$_203076196_z1o4qs_1 = ComposableLambda$invoke$ref_37(composableLambdaInstance(-203076196, false, ComposableSingletons$AppKt$lambda$_203076196$lambda_56jtbk));
    var tmp_37 = this;
    tmp_37.lambda$_980776967_fo0fnp_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(-980776967, false, ComposableSingletons$AppKt$lambda$_980776967$lambda_g24h5b));
  }
  protoOf(ComposableSingletons$AppKt).get_lambda$174589817_7p16tv_k$ = function () {
    return this.lambda$174589817__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_2120254389_bqf0ae_k$ = function () {
    return this.lambda$_2120254389_uwqplc_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$580816950_itznj3_k$ = function () {
    return this.lambda$580816950__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$1343367213_ctzba_k$ = function () {
    return this.lambda$1343367213__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$1229967844_90pr85_k$ = function () {
    return this.lambda$1229967844__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$219301797_v3ohpk_k$ = function () {
    return this.lambda$219301797__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$301348709_60ls6y_k$ = function () {
    return this.lambda$301348709__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_1327202313_wb3qni_k$ = function () {
    return this.lambda$_1327202313_60eba0__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_455728366_h78s0u_k$ = function () {
    return this.lambda$_455728366_9wqm56__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_930385749_uarcfa_k$ = function () {
    return this.lambda$_930385749_bqgssy_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$1561086367_qmljl6_k$ = function () {
    return this.lambda$1561086367__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$876856062_t6rdnd_k$ = function () {
    return this.lambda$876856062__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$192625757_uis6hz_k$ = function () {
    return this.lambda$192625757__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_491604548_hx5qv7_k$ = function () {
    return this.lambda$_491604548_51oekl_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_1175834853_7yd5ut_k$ = function () {
    return this.lambda$_1175834853_tnfiad_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_1860065158_3fqbkg_k$ = function () {
    return this.lambda$_1860065158_ab1mba_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$1750671833_jp3wni_k$ = function () {
    return this.lambda$1750671833__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$1066441528_f7cdam_k$ = function () {
    return this.lambda$1066441528__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$382211223_eps87p_k$ = function () {
    return this.lambda$382211223__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$808417795_y8r97u_k$ = function () {
    return this.lambda$808417795__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_57606726_jq93u3_k$ = function () {
    return this.lambda$_57606726_gqw8nj_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$1404791172_dwlerb_k$ = function () {
    return this.lambda$1404791172__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$412316129_ncudg2_k$ = function () {
    return this.lambda$412316129__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_429912214_xyi442_k$ = function () {
    return this.lambda$_429912214_gx42qi_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_615528572_yb8ryf_k$ = function () {
    return this.lambda$_615528572_o1uf0h_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$357203746_tkwe96_k$ = function () {
    return this.lambda$357203746__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_31789415_gwy62w_k$ = function () {
    return this.lambda$_31789415_jssyb6__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_1299758877_79tj5j_k$ = function () {
    return this.lambda$_1299758877_enoz8x_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_292782439_m4h0cs_k$ = function () {
    return this.lambda$_292782439_10rgcc_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_453055408_ifqnjq_k$ = function () {
    return this.lambda$_453055408_mprtn6__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$799003674_onsgy4_k$ = function () {
    return this.lambda$799003674__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_1244273120_ghlagk_k$ = function () {
    return this.lambda$_1244273120_leogry_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_2110297641_1ymrat_k$ = function () {
    return this.lambda$_2110297641_25ddzl_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_647899743_45pg1d_k$ = function () {
    return this.lambda$_647899743_m9pmdj_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_1640374786_d9f3e8_k$ = function () {
    return this.lambda$_1640374786_dvov2u_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$1812364167_9m5wr6_k$ = function () {
    return this.lambda$1812364167__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$1258793705_slxk18_k$ = function () {
    return this.lambda$1258793705__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_203076196_tq7nv0_k$ = function () {
    return this.lambda$_203076196_z1o4qs_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$_980776967_q78z3n_k$ = function () {
    return this.lambda$_980776967_fo0fnp_1;
  };
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function App$handleProcessingResult$lambda$lambda($mapping) {
    return function ($this$putJsonArray) {
      add($this$putJsonArray, $mapping.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda($filesystemMappings) {
    return function ($this$putJsonObject) {
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $filesystemMappings.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var mapping = _iterator__ex2g4s.next_20eer_k$();
        var tmp = mapping.get_key_18j28a_k$();
        putJsonArray($this$putJsonObject, tmp, App$handleProcessingResult$lambda$lambda(mapping));
      }
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda_0($gamepadEnabled$delegate) {
    return function ($this$putJsonObject) {
      put($this$putJsonObject, 'enabled', App$lambda_21($gamepadEnabled$delegate));
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda_1($controller1Mappings) {
    return function ($this$putJsonObject) {
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $controller1Mappings.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var value = _destruct__k2r9zo.get_value_j01efc_k$();
        put_0($this$putJsonObject, key.get_value_j01efc_k$().toString(), value.get_value_j01efc_k$());
      }
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda_2($controller2Mappings) {
    return function ($this$putJsonObject) {
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $controller2Mappings.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var value = _destruct__k2r9zo.get_value_j01efc_k$();
        put_0($this$putJsonObject, key.get_value_j01efc_k$().toString(), value.get_value_j01efc_k$());
      }
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda$lambda($bgColorTopLeft$delegate) {
    return function ($this$addJsonArray) {
      add_0($this$addJsonArray, App$lambda_29($bgColorTopLeft$delegate).get_red_18ix20_k$());
      add_0($this$addJsonArray, App$lambda_29($bgColorTopLeft$delegate).get_green_is36qi_k$());
      add_0($this$addJsonArray, App$lambda_29($bgColorTopLeft$delegate).get_blue_wojj4z_k$());
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda$lambda_0($bgColorTopRight$delegate) {
    return function ($this$addJsonArray) {
      add_0($this$addJsonArray, App$lambda_31($bgColorTopRight$delegate).get_red_18ix20_k$());
      add_0($this$addJsonArray, App$lambda_31($bgColorTopRight$delegate).get_green_is36qi_k$());
      add_0($this$addJsonArray, App$lambda_31($bgColorTopRight$delegate).get_blue_wojj4z_k$());
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda$lambda_1($bgColorBottomLeft$delegate) {
    return function ($this$addJsonArray) {
      add_0($this$addJsonArray, App$lambda_33($bgColorBottomLeft$delegate).get_red_18ix20_k$());
      add_0($this$addJsonArray, App$lambda_33($bgColorBottomLeft$delegate).get_green_is36qi_k$());
      add_0($this$addJsonArray, App$lambda_33($bgColorBottomLeft$delegate).get_blue_wojj4z_k$());
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda$lambda_2($bgColorBottomRight$delegate) {
    return function ($this$addJsonArray) {
      add_0($this$addJsonArray, App$lambda_35($bgColorBottomRight$delegate).get_red_18ix20_k$());
      add_0($this$addJsonArray, App$lambda_35($bgColorBottomRight$delegate).get_green_is36qi_k$());
      add_0($this$addJsonArray, App$lambda_35($bgColorBottomRight$delegate).get_blue_wojj4z_k$());
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda_0($bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate) {
    return function ($this$putJsonArray) {
      addJsonArray($this$putJsonArray, App$handleProcessingResult$lambda$lambda$lambda($bgColorTopLeft$delegate));
      addJsonArray($this$putJsonArray, App$handleProcessingResult$lambda$lambda$lambda_0($bgColorTopRight$delegate));
      addJsonArray($this$putJsonArray, App$handleProcessingResult$lambda$lambda$lambda_1($bgColorBottomLeft$delegate));
      addJsonArray($this$putJsonArray, App$handleProcessingResult$lambda$lambda$lambda_2($bgColorBottomRight$delegate));
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda$lambda_3($lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate) {
    return function ($this$addJsonArray) {
      var tmp0_elvis_lhs = toDoubleOrNull(App$lambda_39($lightDir1X$delegate));
      add_0($this$addJsonArray, tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs);
      var tmp1_elvis_lhs = toDoubleOrNull(App$lambda_41($lightDir1Y$delegate));
      add_0($this$addJsonArray, tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs);
      var tmp2_elvis_lhs = toDoubleOrNull(App$lambda_43($lightDir1Z$delegate));
      add_0($this$addJsonArray, tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs);
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda$lambda_4($lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate) {
    return function ($this$addJsonArray) {
      var tmp0_elvis_lhs = toDoubleOrNull(App$lambda_47($lightDir2X$delegate));
      add_0($this$addJsonArray, tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs);
      var tmp1_elvis_lhs = toDoubleOrNull(App$lambda_49($lightDir2Y$delegate));
      add_0($this$addJsonArray, tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs);
      var tmp2_elvis_lhs = toDoubleOrNull(App$lambda_51($lightDir2Z$delegate));
      add_0($this$addJsonArray, tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs);
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda$lambda_5($lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate) {
    return function ($this$addJsonArray) {
      var tmp0_elvis_lhs = toDoubleOrNull(App$lambda_55($lightDir3X$delegate));
      add_0($this$addJsonArray, tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs);
      var tmp1_elvis_lhs = toDoubleOrNull(App$lambda_57($lightDir3Y$delegate));
      add_0($this$addJsonArray, tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs);
      var tmp2_elvis_lhs = toDoubleOrNull(App$lambda_59($lightDir3Z$delegate));
      add_0($this$addJsonArray, tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs);
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda_1($lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate) {
    return function ($this$putJsonArray) {
      addJsonArray($this$putJsonArray, App$handleProcessingResult$lambda$lambda$lambda_3($lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate));
      addJsonArray($this$putJsonArray, App$handleProcessingResult$lambda$lambda$lambda_4($lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate));
      addJsonArray($this$putJsonArray, App$handleProcessingResult$lambda$lambda$lambda_5($lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate));
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda$lambda_6($lightColor1$delegate) {
    return function ($this$addJsonArray) {
      add_0($this$addJsonArray, App$lambda_37($lightColor1$delegate).get_red_18ix20_k$() / 255.0);
      add_0($this$addJsonArray, App$lambda_37($lightColor1$delegate).get_green_is36qi_k$() / 255.0);
      add_0($this$addJsonArray, App$lambda_37($lightColor1$delegate).get_blue_wojj4z_k$() / 255.0);
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda$lambda_7($lightColor2$delegate) {
    return function ($this$addJsonArray) {
      add_0($this$addJsonArray, App$lambda_45($lightColor2$delegate).get_red_18ix20_k$() / 255.0);
      add_0($this$addJsonArray, App$lambda_45($lightColor2$delegate).get_green_is36qi_k$() / 255.0);
      add_0($this$addJsonArray, App$lambda_45($lightColor2$delegate).get_blue_wojj4z_k$() / 255.0);
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda$lambda_8($lightColor3$delegate) {
    return function ($this$addJsonArray) {
      add_0($this$addJsonArray, App$lambda_53($lightColor3$delegate).get_red_18ix20_k$() / 255.0);
      add_0($this$addJsonArray, App$lambda_53($lightColor3$delegate).get_green_is36qi_k$() / 255.0);
      add_0($this$addJsonArray, App$lambda_53($lightColor3$delegate).get_blue_wojj4z_k$() / 255.0);
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda_2($lightColor1$delegate, $lightColor2$delegate, $lightColor3$delegate) {
    return function ($this$putJsonArray) {
      addJsonArray($this$putJsonArray, App$handleProcessingResult$lambda$lambda$lambda_6($lightColor1$delegate));
      addJsonArray($this$putJsonArray, App$handleProcessingResult$lambda$lambda$lambda_7($lightColor2$delegate));
      addJsonArray($this$putJsonArray, App$handleProcessingResult$lambda$lambda$lambda_8($lightColor3$delegate));
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda$lambda_3($ambientColor$delegate) {
    return function ($this$putJsonArray) {
      add_0($this$putJsonArray, App$lambda_61($ambientColor$delegate).get_red_18ix20_k$() / 255.0);
      add_0($this$putJsonArray, App$lambda_61($ambientColor$delegate).get_green_is36qi_k$() / 255.0);
      add_0($this$putJsonArray, App$lambda_61($ambientColor$delegate).get_blue_wojj4z_k$() / 255.0);
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda_3($bgAlpha$delegate, $bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate, $lightColor1$delegate, $lightColor2$delegate, $lightColor3$delegate, $ambientColor$delegate) {
    return function ($this$putJsonObject) {
      put_0($this$putJsonObject, 'bgAlpha', App$lambda_27($bgAlpha$delegate));
      putJsonArray($this$putJsonObject, 'bgColors', App$handleProcessingResult$lambda$lambda_0($bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate));
      putJsonArray($this$putJsonObject, 'lightDirs', App$handleProcessingResult$lambda$lambda_1($lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate));
      putJsonArray($this$putJsonObject, 'lightColors', App$handleProcessingResult$lambda$lambda_2($lightColor1$delegate, $lightColor2$delegate, $lightColor3$delegate));
      putJsonArray($this$putJsonObject, 'ambient', App$handleProcessingResult$lambda$lambda_3($ambientColor$delegate));
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda_4($disabledObjects) {
    return function ($this$putJsonArray) {
      var _iterator__ex2g4s = $disabledObjects.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var disabledObject = _iterator__ex2g4s.next_20eer_k$();
        add($this$putJsonArray, disabledObject);
      }
      return Unit_getInstance();
    };
  }
  function App$handleProcessingResult$lambda_5($eagerlyLoadedRooms) {
    return function ($this$putJsonArray) {
      var _iterator__ex2g4s = $eagerlyLoadedRooms.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var eagerlyLoadedRoom = _iterator__ex2g4s.next_20eer_k$();
        add($this$putJsonArray, eagerlyLoadedRoom);
      }
      return Unit_getInstance();
    };
  }
  function App$lambda($status$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('status', KMutableProperty0, true);
    return $status$delegate.get_value_j01efc_k$();
  }
  function App$lambda_0($status$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('status', KMutableProperty0, true);
    $status$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_1($parsedDataWin$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('parsedDataWin', KMutableProperty0, true);
    return $parsedDataWin$delegate.get_value_j01efc_k$();
  }
  function App$lambda_2($parsedDataWin$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('parsedDataWin', KMutableProperty0, true);
    $parsedDataWin$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_3($downloadUrl$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('downloadUrl', KMutableProperty0, true);
    return $downloadUrl$delegate.get_value_j01efc_k$();
  }
  function App$lambda_4($downloadUrl$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('downloadUrl', KMutableProperty0, true);
    $downloadUrl$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_5($isoFileName$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isoFileName', KMutableProperty0, true);
    return $isoFileName$delegate.get_value_j01efc_k$();
  }
  function App$lambda_6($isoFileName$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('isoFileName', KMutableProperty0, true);
    $isoFileName$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_7($processing$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('processing', KMutableProperty0, true);
    return $processing$delegate.get_value_j01efc_k$();
  }
  function App$lambda_8($processing$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('processing', KMutableProperty0, true);
    $processing$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_9($loadedFileBytes$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('loadedFileBytes', KMutableProperty0, true);
    return $loadedFileBytes$delegate.get_value_j01efc_k$();
  }
  function App$lambda_10($loadedFileBytes$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('loadedFileBytes', KMutableProperty0, true);
    $loadedFileBytes$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_11($loadedExternalAudio$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('loadedExternalAudio', KMutableProperty0, true);
    return $loadedExternalAudio$delegate.get_value_j01efc_k$();
  }
  function App$lambda_12($loadedExternalAudio$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('loadedExternalAudio', KMutableProperty0, true);
    $loadedExternalAudio$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_13($loadedAudioGroupFiles$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('loadedAudioGroupFiles', KMutableProperty0, true);
    return $loadedAudioGroupFiles$delegate.get_value_j01efc_k$();
  }
  function App$lambda_14($loadedAudioGroupFiles$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('loadedAudioGroupFiles', KMutableProperty0, true);
    $loadedAudioGroupFiles$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_15($loadedMusFiles$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('loadedMusFiles', KMutableProperty0, true);
    return $loadedMusFiles$delegate.get_value_j01efc_k$();
  }
  function App$lambda_16($loadedMusFiles$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('loadedMusFiles', KMutableProperty0, true);
    $loadedMusFiles$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_17($loadedSourceFiles$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('loadedSourceFiles', KMutableProperty0, true);
    return $loadedSourceFiles$delegate.get_value_j01efc_k$();
  }
  function App$lambda_18($loadedSourceFiles$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('loadedSourceFiles', KMutableProperty0, true);
    $loadedSourceFiles$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_19($parsedGameName$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('parsedGameName', KMutableProperty0, true);
    return $parsedGameName$delegate.get_value_j01efc_k$();
  }
  function App$lambda_20($parsedGameName$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('parsedGameName', KMutableProperty0, true);
    $parsedGameName$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_21($gamepadEnabled$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('gamepadEnabled', KMutableProperty0, true);
    return $gamepadEnabled$delegate.get_value_j01efc_k$();
  }
  function App$lambda_22($gamepadEnabled$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('gamepadEnabled', KMutableProperty0, true);
    $gamepadEnabled$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_23($customIconBytes$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('customIconBytes', KMutableProperty0, true);
    return $customIconBytes$delegate.get_value_j01efc_k$();
  }
  function App$lambda_24($customIconBytes$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('customIconBytes', KMutableProperty0, true);
    $customIconBytes$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_25($customElfBytes$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('customElfBytes', KMutableProperty0, true);
    return $customElfBytes$delegate.get_value_j01efc_k$();
  }
  function App$lambda_26($customElfBytes$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('customElfBytes', KMutableProperty0, true);
    $customElfBytes$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_27($bgAlpha$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('bgAlpha', KMutableProperty0, true);
    return $bgAlpha$delegate.get_value_j01efc_k$();
  }
  function App$lambda_28($bgAlpha$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('bgAlpha', KMutableProperty0, true);
    $bgAlpha$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_29($bgColorTopLeft$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('bgColorTopLeft', KMutableProperty0, true);
    return $bgColorTopLeft$delegate.get_value_j01efc_k$();
  }
  function App$lambda_30($bgColorTopLeft$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('bgColorTopLeft', KMutableProperty0, true);
    $bgColorTopLeft$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_31($bgColorTopRight$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('bgColorTopRight', KMutableProperty0, true);
    return $bgColorTopRight$delegate.get_value_j01efc_k$();
  }
  function App$lambda_32($bgColorTopRight$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('bgColorTopRight', KMutableProperty0, true);
    $bgColorTopRight$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_33($bgColorBottomLeft$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('bgColorBottomLeft', KMutableProperty0, true);
    return $bgColorBottomLeft$delegate.get_value_j01efc_k$();
  }
  function App$lambda_34($bgColorBottomLeft$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('bgColorBottomLeft', KMutableProperty0, true);
    $bgColorBottomLeft$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_35($bgColorBottomRight$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('bgColorBottomRight', KMutableProperty0, true);
    return $bgColorBottomRight$delegate.get_value_j01efc_k$();
  }
  function App$lambda_36($bgColorBottomRight$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('bgColorBottomRight', KMutableProperty0, true);
    $bgColorBottomRight$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_37($lightColor1$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lightColor1', KMutableProperty0, true);
    return $lightColor1$delegate.get_value_j01efc_k$();
  }
  function App$lambda_38($lightColor1$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lightColor1', KMutableProperty0, true);
    $lightColor1$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_39($lightDir1X$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lightDir1X', KMutableProperty0, true);
    return $lightDir1X$delegate.get_value_j01efc_k$();
  }
  function App$lambda_40($lightDir1X$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lightDir1X', KMutableProperty0, true);
    $lightDir1X$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_41($lightDir1Y$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lightDir1Y', KMutableProperty0, true);
    return $lightDir1Y$delegate.get_value_j01efc_k$();
  }
  function App$lambda_42($lightDir1Y$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lightDir1Y', KMutableProperty0, true);
    $lightDir1Y$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_43($lightDir1Z$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lightDir1Z', KMutableProperty0, true);
    return $lightDir1Z$delegate.get_value_j01efc_k$();
  }
  function App$lambda_44($lightDir1Z$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lightDir1Z', KMutableProperty0, true);
    $lightDir1Z$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_45($lightColor2$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lightColor2', KMutableProperty0, true);
    return $lightColor2$delegate.get_value_j01efc_k$();
  }
  function App$lambda_46($lightColor2$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lightColor2', KMutableProperty0, true);
    $lightColor2$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_47($lightDir2X$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lightDir2X', KMutableProperty0, true);
    return $lightDir2X$delegate.get_value_j01efc_k$();
  }
  function App$lambda_48($lightDir2X$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lightDir2X', KMutableProperty0, true);
    $lightDir2X$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_49($lightDir2Y$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lightDir2Y', KMutableProperty0, true);
    return $lightDir2Y$delegate.get_value_j01efc_k$();
  }
  function App$lambda_50($lightDir2Y$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lightDir2Y', KMutableProperty0, true);
    $lightDir2Y$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_51($lightDir2Z$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lightDir2Z', KMutableProperty0, true);
    return $lightDir2Z$delegate.get_value_j01efc_k$();
  }
  function App$lambda_52($lightDir2Z$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lightDir2Z', KMutableProperty0, true);
    $lightDir2Z$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_53($lightColor3$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lightColor3', KMutableProperty0, true);
    return $lightColor3$delegate.get_value_j01efc_k$();
  }
  function App$lambda_54($lightColor3$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lightColor3', KMutableProperty0, true);
    $lightColor3$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_55($lightDir3X$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lightDir3X', KMutableProperty0, true);
    return $lightDir3X$delegate.get_value_j01efc_k$();
  }
  function App$lambda_56($lightDir3X$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lightDir3X', KMutableProperty0, true);
    $lightDir3X$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_57($lightDir3Y$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lightDir3Y', KMutableProperty0, true);
    return $lightDir3Y$delegate.get_value_j01efc_k$();
  }
  function App$lambda_58($lightDir3Y$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lightDir3Y', KMutableProperty0, true);
    $lightDir3Y$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_59($lightDir3Z$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lightDir3Z', KMutableProperty0, true);
    return $lightDir3Z$delegate.get_value_j01efc_k$();
  }
  function App$lambda_60($lightDir3Z$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lightDir3Z', KMutableProperty0, true);
    $lightDir3Z$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_61($ambientColor$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('ambientColor', KMutableProperty0, true);
    return $ambientColor$delegate.get_value_j01efc_k$();
  }
  function App$lambda_62($ambientColor$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('ambientColor', KMutableProperty0, true);
    $ambientColor$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_63($debugOverlayEnabled$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('debugOverlayEnabled', KMutableProperty0, true);
    return $debugOverlayEnabled$delegate.get_value_j01efc_k$();
  }
  function App$lambda_64($debugOverlayEnabled$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('debugOverlayEnabled', KMutableProperty0, true);
    $debugOverlayEnabled$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_65($lazyLoadRooms$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lazyLoadRooms', KMutableProperty0, true);
    return $lazyLoadRooms$delegate.get_value_j01efc_k$();
  }
  function App$lambda_66($lazyLoadRooms$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lazyLoadRooms', KMutableProperty0, true);
    $lazyLoadRooms$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_67($atlasSize$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('atlasSize', KMutableProperty0, true);
    return $atlasSize$delegate.get_value_j01efc_k$();
  }
  function App$lambda_68($atlasSize$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('atlasSize', KMutableProperty0, true);
    $atlasSize$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_69($atlasSizeText$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('atlasSizeText', KMutableProperty0, true);
    return $atlasSizeText$delegate.get_value_j01efc_k$();
  }
  function App$lambda_70($atlasSizeText$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('atlasSizeText', KMutableProperty0, true);
    $atlasSizeText$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_71($eeAtlasCacheBytes$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('eeAtlasCacheBytes', KMutableProperty0, true);
    return $eeAtlasCacheBytes$delegate.get_value_j01efc_k$();
  }
  function App$lambda_72($eeAtlasCacheBytes$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('eeAtlasCacheBytes', KMutableProperty0, true);
    $eeAtlasCacheBytes$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_73($eeAtlasCacheBytesText$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('eeAtlasCacheBytesText', KMutableProperty0, true);
    return $eeAtlasCacheBytesText$delegate.get_value_j01efc_k$();
  }
  function App$lambda_74($eeAtlasCacheBytesText$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('eeAtlasCacheBytesText', KMutableProperty0, true);
    $eeAtlasCacheBytesText$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_75($gameId$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('gameId', KMutableProperty0, true);
    return $gameId$delegate.get_value_j01efc_k$();
  }
  function App$lambda_76($gameId$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('gameId', KMutableProperty0, true);
    $gameId$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_77($selectedPreset$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedPreset', KMutableProperty0, true);
    return $selectedPreset$delegate.get_value_j01efc_k$();
  }
  function App$lambda_78($selectedPreset$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('selectedPreset', KMutableProperty0, true);
    $selectedPreset$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_79($startTime$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('startTime', KMutableProperty0, true);
    return $startTime$delegate.get_value_j01efc_k$();
  }
  function App$lambda_80($startTime$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('startTime', KMutableProperty0, true);
    $startTime$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_81($controller1Mappings, $controller2Mappings, $filesystemMappings, $disabledObjects, $eagerlyLoadedRooms, $force4bppPatterns, $selectedPreset$delegate, $bgAlpha$delegate, $bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate, $ambientColor$delegate, $lightColor1$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightColor2$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightColor3$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate, $debugOverlayEnabled$delegate, $lazyLoadRooms$delegate, $atlasSize$delegate, $atlasSizeText$delegate, $gamepadEnabled$delegate, $eeAtlasCacheBytes$delegate, $eeAtlasCacheBytesText$delegate) {
    return function (preset) {
      App$lambda_78($selectedPreset$delegate, preset);
      $controller1Mappings.clear_j9egeb_k$();
      $controller1Mappings.putAll_wgg6cj_k$(preset.controller1Mappings_1);
      $controller2Mappings.clear_j9egeb_k$();
      $controller2Mappings.putAll_wgg6cj_k$(preset.controller2Mappings_1);
      $filesystemMappings.clear_j9egeb_k$();
      $filesystemMappings.putAll_wgg6cj_k$(preset.filesystemMappings_1);
      $disabledObjects.clear_j9egeb_k$();
      $disabledObjects.addAll_v4m9z4_k$(preset.disabledObjects_1);
      App$lambda_28($bgAlpha$delegate, preset.bgAlpha_1);
      App$lambda_30($bgColorTopLeft$delegate, preset.bgColorTopLeft_1);
      App$lambda_32($bgColorTopRight$delegate, preset.bgColorTopRight_1);
      App$lambda_34($bgColorBottomLeft$delegate, preset.bgColorBottomLeft_1);
      App$lambda_36($bgColorBottomRight$delegate, preset.bgColorBottomRight_1);
      App$lambda_62($ambientColor$delegate, preset.ambientColor_1);
      App$lambda_38($lightColor1$delegate, preset.lights_1.lightColor1__1);
      App$lambda_40($lightDir1X$delegate, preset.lights_1.lightDir1__1.get_first_irdx8n_k$());
      App$lambda_42($lightDir1Y$delegate, preset.lights_1.lightDir1__1.get_second_jf7fjx_k$());
      App$lambda_44($lightDir1Z$delegate, preset.lights_1.lightDir1__1.get_third_iz27um_k$());
      App$lambda_46($lightColor2$delegate, preset.lights_1.lightColor2__1);
      App$lambda_48($lightDir2X$delegate, preset.lights_1.lightDir2__1.get_first_irdx8n_k$());
      App$lambda_50($lightDir2Y$delegate, preset.lights_1.lightDir2__1.get_second_jf7fjx_k$());
      App$lambda_52($lightDir2Z$delegate, preset.lights_1.lightDir2__1.get_third_iz27um_k$());
      App$lambda_54($lightColor3$delegate, preset.lights_1.lightColor3__1);
      App$lambda_56($lightDir3X$delegate, preset.lights_1.lightDir3__1.get_first_irdx8n_k$());
      App$lambda_58($lightDir3Y$delegate, preset.lights_1.lightDir3__1.get_second_jf7fjx_k$());
      App$lambda_60($lightDir3Z$delegate, preset.lights_1.lightDir3__1.get_third_iz27um_k$());
      App$lambda_64($debugOverlayEnabled$delegate, preset.debugOverlayEnabled_1);
      App$lambda_66($lazyLoadRooms$delegate, preset.lazyLoadRooms_1);
      $eagerlyLoadedRooms.clear_j9egeb_k$();
      $eagerlyLoadedRooms.addAll_v4m9z4_k$(preset.eagerlyLoadedRooms_1);
      $force4bppPatterns.clear_j9egeb_k$();
      $force4bppPatterns.addAll_v4m9z4_k$(preset.force4bppPatterns_1);
      App$lambda_68($atlasSize$delegate, preset.atlasSize_1);
      App$lambda_70($atlasSizeText$delegate, preset.atlasSize_1.toString());
      App$lambda_22($gamepadEnabled$delegate, preset.gamepadEnabled_1);
      App$lambda_72($eeAtlasCacheBytes$delegate, preset.eeAtlasCacheBytes_1);
      App$lambda_74($eeAtlasCacheBytesText$delegate, preset.eeAtlasCacheBytes_1.toString());
      return Unit_getInstance();
    };
  }
  function App$lambda_82() {
    _init_properties_App_kt__fk8usv();
    return EmptyCoroutineContext_getInstance();
  }
  function App$handleProcessingResult(filesystemMappings, logMessages, parsedDataWin$delegate, status$delegate, loadedFileBytes$delegate, customElfBytes$delegate, customIconBytes$delegate, gameId$delegate, loadedSourceFiles$delegate, debugOverlayEnabled$delegate, gamepadEnabled$delegate, controller1Mappings, controller2Mappings, bgAlpha$delegate, bgColorTopLeft$delegate, bgColorTopRight$delegate, bgColorBottomLeft$delegate, bgColorBottomRight$delegate, lightDir1X$delegate, lightDir1Y$delegate, lightDir1Z$delegate, lightDir2X$delegate, lightDir2Y$delegate, lightDir2Z$delegate, lightDir3X$delegate, lightDir3Y$delegate, lightDir3Z$delegate, lightColor1$delegate, lightColor2$delegate, lightColor3$delegate, ambientColor$delegate, disabledObjects, lazyLoadRooms$delegate, eagerlyLoadedRooms, eeAtlasCacheBytes$delegate, isoFileName$delegate, downloadUrl$delegate, startTime$delegate, processing$delegate, result, $completion) {
    var tmp = new $App$handleProcessingResultCOROUTINE$(filesystemMappings, logMessages, parsedDataWin$delegate, status$delegate, loadedFileBytes$delegate, customElfBytes$delegate, customIconBytes$delegate, gameId$delegate, loadedSourceFiles$delegate, debugOverlayEnabled$delegate, gamepadEnabled$delegate, controller1Mappings, controller2Mappings, bgAlpha$delegate, bgColorTopLeft$delegate, bgColorTopRight$delegate, bgColorBottomLeft$delegate, bgColorBottomRight$delegate, lightDir1X$delegate, lightDir1Y$delegate, lightDir1Z$delegate, lightDir2X$delegate, lightDir2Y$delegate, lightDir2Z$delegate, lightDir3X$delegate, lightDir3Y$delegate, lightDir3Z$delegate, lightColor1$delegate, lightColor2$delegate, lightColor3$delegate, ambientColor$delegate, disabledObjects, lazyLoadRooms$delegate, eagerlyLoadedRooms, eeAtlasCacheBytes$delegate, isoFileName$delegate, downloadUrl$delegate, startTime$delegate, processing$delegate, result, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function App$lambda$lambda$slambda($files, $applyPreset, $status$delegate, $loadedFileBytes$delegate, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $loadedSourceFiles$delegate, $parsedGameName$delegate, $parsedDataWin$delegate, resultContinuation) {
    this.$files_1 = $files;
    this.$applyPreset_1 = $applyPreset;
    this.$status$delegate_1 = $status$delegate;
    this.$loadedFileBytes$delegate_1 = $loadedFileBytes$delegate;
    this.$loadedExternalAudio$delegate_1 = $loadedExternalAudio$delegate;
    this.$loadedAudioGroupFiles$delegate_1 = $loadedAudioGroupFiles$delegate;
    this.$loadedMusFiles$delegate_1 = $loadedMusFiles$delegate;
    this.$loadedSourceFiles$delegate_1 = $loadedSourceFiles$delegate;
    this.$parsedGameName$delegate_1 = $parsedGameName$delegate;
    this.$parsedDataWin$delegate_1 = $parsedDataWin$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(App$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(App$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(App$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(19);
            this.set_exceptionState_fex74n_k$(18);
            var dataWinFile = null;
            this.audioFiles1__1 = HashMap_init_$Create$();
            this.audioGroupDatFiles0__1 = HashMap_init_$Create$();
            this.musFileEntries12__1 = HashMap_init_$Create$();
            this.otherFiles7__1 = HashMap_init_$Create$();
            var tmp_0 = this.$files_1.length;
            var fileCount = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
            var audioGroupPattern = Regex_init_$Create$('audiogroup(\\d+)\\.dat', RegexOption_IGNORE_CASE_getInstance());
            var firstFile = this.$files_1[0];
            var tmp_1 = firstFile.webkitRelativePath;
            var rootFolderPrefix = substringBefore((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE(), '/') + '/';
            var inductionVariable = 0;
            if (inductionVariable < fileCount)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var file = this.$files_1[i];
                var tmp_2 = file.name;
                var name = ((!(tmp_2 == null) ? typeof tmp_2 === 'string' : false) ? tmp_2 : THROW_CCE()).toLowerCase();
                var tmp_3 = file.webkitRelativePath;
                var relativePath = removePrefix((!(tmp_3 == null) ? typeof tmp_3 === 'string' : false) ? tmp_3 : THROW_CCE(), rootFolderPrefix);
                if (endsWith(name, '.win') || endsWith(name, '.unx') || endsWith(name, '.osx')) {
                  dataWinFile = file;
                } else if ((endsWith(name, '.ogg') || endsWith(name, '.wav')) && !contains(relativePath, '/')) {
                  var tmp0 = this.audioFiles1__1;
                  var tmp_4 = file.name;
                  var key = (!(tmp_4 == null) ? typeof tmp_4 === 'string' : false) ? tmp_4 : THROW_CCE();
                  tmp0.put_4fpzoq_k$(key, file);
                } else if (endsWith(name, '.ogg') && contains(relativePath, '/')) {
                  this.musFileEntries12__1.put_4fpzoq_k$(relativePath, file);
                } else {
                  var tmp_5 = file.name;
                  var audioGroupMatch = audioGroupPattern.matchEntire_6100vb_k$((!(tmp_5 == null) ? typeof tmp_5 === 'string' : false) ? tmp_5 : THROW_CCE());
                  if (!(audioGroupMatch == null)) {
                    var groupId = toInt(audioGroupMatch.get_groupValues_rkv314_k$().get_c1px32_k$(1));
                    if (!(groupId === 0)) {
                      this.audioGroupDatFiles0__1.put_4fpzoq_k$(groupId, file);
                    }
                  } else {
                    this.otherFiles7__1.put_4fpzoq_k$(relativePath, file);
                  }
                }
              }
               while (inductionVariable < fileCount);
            if (dataWinFile == null) {
              App$lambda_0(this.$status$delegate_1, 'No data.win file found in the selected folder!');
              return Unit_getInstance();
            }

            App$lambda_0(this.$status$delegate_1, 'Reading data.win...');
            this.set_state_rjd8d0_k$(1);
            suspendResult = readFileAsBytes(dataWinFile, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.bytes2__1 = suspendResult;
            App$lambda_10(this.$loadedFileBytes$delegate_1, this.bytes2__1);
            if (!this.audioFiles1__1.isEmpty_y1axqb_k$()) {
              App$lambda_0(this.$status$delegate_1, 'Reading ' + this.audioFiles1__1.get_size_woubt6_k$() + ' audio files...');
              this.externalAudio17__1 = HashMap_init_$Create$();
              var tmp_6 = this;
              tmp_6._iterator_20_biegpe_1 = this.audioFiles1__1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

          case 2:
            if (!this._iterator_20_biegpe_1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            var _destruct__k2r9zo = this._iterator_20_biegpe_1.next_20eer_k$();
            var fileName = _destruct__k2r9zo.get_key_18j28a_k$();
            var file_0 = _destruct__k2r9zo.get_value_j01efc_k$();
            this.tmp019__1 = this.externalAudio17__1;
            this.tmp218__1 = fileName;
            this.set_state_rjd8d0_k$(3);
            suspendResult = readFileAsBytes(file_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp4 = suspendResult;
            var this_0 = this.tmp019__1;
            var key_0 = this.tmp218__1;
            this_0.put_4fpzoq_k$(key_0, tmp4);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 4:
            App$lambda_12(this.$loadedExternalAudio$delegate_1, this.externalAudio17__1);
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            if (!this.audioGroupDatFiles0__1.isEmpty_y1axqb_k$()) {
              App$lambda_0(this.$status$delegate_1, 'Reading ' + this.audioGroupDatFiles0__1.get_size_woubt6_k$() + ' audiogroup files...');
              this.audioGroups13__1 = HashMap_init_$Create$();
              var tmp_7 = this;
              tmp_7._iterator_16_biegop_1 = this.audioGroupDatFiles0__1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            }

          case 6:
            if (!this._iterator_16_biegop_1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            }

            var _destruct__k2r9zo_0 = this._iterator_16_biegop_1.next_20eer_k$();
            var groupId_0 = _destruct__k2r9zo_0.get_key_18j28a_k$();
            var file_1 = _destruct__k2r9zo_0.get_value_j01efc_k$();
            this.tmp015__1 = this.audioGroups13__1;
            this.tmp214__1 = groupId_0;
            this.set_state_rjd8d0_k$(7);
            suspendResult = readFileAsBytes(file_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var tmp4_0 = suspendResult;
            var this_1 = this.tmp015__1;
            var key_1 = this.tmp214__1;
            this_1.put_4fpzoq_k$(key_1, tmp4_0);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 8:
            App$lambda_14(this.$loadedAudioGroupFiles$delegate_1, this.audioGroups13__1);
            this.set_state_rjd8d0_k$(9);
            continue $sm;
          case 9:
            if (!this.musFileEntries12__1.isEmpty_y1axqb_k$()) {
              App$lambda_0(this.$status$delegate_1, 'Reading ' + this.musFileEntries12__1.get_size_woubt6_k$() + ' music files...');
              this.musData8__1 = HashMap_init_$Create$();
              var tmp_8 = this;
              tmp_8._iterator_11_biegok_1 = this.musFileEntries12__1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
              this.set_state_rjd8d0_k$(10);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(13);
              continue $sm;
            }

          case 10:
            if (!this._iterator_11_biegok_1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(12);
              continue $sm;
            }

            var _destruct__k2r9zo_1 = this._iterator_11_biegok_1.next_20eer_k$();
            var path = _destruct__k2r9zo_1.get_key_18j28a_k$();
            var file_2 = _destruct__k2r9zo_1.get_value_j01efc_k$();
            this.tmp010__1 = this.musData8__1;
            this.tmp29__1 = path;
            this.set_state_rjd8d0_k$(11);
            suspendResult = readFileAsBytes(file_2, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp4_1 = suspendResult;
            var this_2 = this.tmp010__1;
            var key_2 = this.tmp29__1;
            this_2.put_4fpzoq_k$(key_2, tmp4_1);
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 12:
            App$lambda_16(this.$loadedMusFiles$delegate_1, this.musData8__1);
            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 13:
            if (!this.otherFiles7__1.isEmpty_y1axqb_k$()) {
              App$lambda_0(this.$status$delegate_1, 'Reading ' + this.otherFiles7__1.get_size_woubt6_k$() + ' other files...');
              this.sourceFiles3__1 = HashMap_init_$Create$();
              var tmp_9 = this;
              tmp_9._iterator_6_yqohr6__1 = this.otherFiles7__1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
              this.set_state_rjd8d0_k$(14);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(17);
              continue $sm;
            }

          case 14:
            if (!this._iterator_6_yqohr6__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(16);
              continue $sm;
            }

            var _destruct__k2r9zo_2 = this._iterator_6_yqohr6__1.next_20eer_k$();
            var fileName_0 = _destruct__k2r9zo_2.get_key_18j28a_k$();
            var file_3 = _destruct__k2r9zo_2.get_value_j01efc_k$();
            this.tmp05__1 = this.sourceFiles3__1;
            this.tmp24__1 = fileName_0;
            this.set_state_rjd8d0_k$(15);
            suspendResult = readFileAsBytes(file_3, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 15:
            var tmp4_2 = suspendResult;
            var this_3 = this.tmp05__1;
            var key_3 = this.tmp24__1;
            this_3.put_4fpzoq_k$(key_3, tmp4_2);
            this.set_state_rjd8d0_k$(14);
            continue $sm;
          case 16:
            App$lambda_18(this.$loadedSourceFiles$delegate_1, this.sourceFiles3__1);
            this.set_state_rjd8d0_k$(17);
            continue $sm;
          case 17:
            var dw = Companion_getInstance_0().parse_jw1qtn_k$(this.bytes2__1, new DataWinParserOptions(true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false));
            var tmp0_elvis_lhs = dw.get_gen8_womkoh_k$().get_displayName_sscnb0_k$();
            var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? dw.get_gen8_womkoh_k$().get_name_woqyms_k$() : tmp0_elvis_lhs;
            var gameName = tmp1_elvis_lhs == null ? 'Unknown' : tmp1_elvis_lhs;
            App$lambda_20(this.$parsedGameName$delegate_1, gameName);
            var tmp0_0 = get_PRESETS();
            var tmp$ret$0 = Unit_getInstance();
            l$ret$1: do {
              var _iterator__ex2g4s = tmp0_0.iterator_jk1svi_k$();
              while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
                var element = _iterator__ex2g4s.next_20eer_k$();
                if (equals_0(element.gen8MatchName_1, gameName, true)) {
                  tmp$ret$0 = element;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = null;
            }
             while (false);
            var matchedPreset = tmp$ret$0;
            if (!(matchedPreset == null)) {
              this.$applyPreset_1(matchedPreset);
            }

            var this_4 = StringBuilder_init_$Create$();
            this_4.append_22ad7x_k$('Game: ');
            this_4.append_22ad7x_k$(gameName);
            this_4.append_22ad7x_k$(' [Bytecode Version ' + dw.get_gen8_womkoh_k$().get_bytecodeVersion_lhva9y_k$() + ']');
            if (!this.audioFiles1__1.isEmpty_y1axqb_k$()) {
              this_4.append_22ad7x_k$(' (' + this.audioFiles1__1.get_size_woubt6_k$() + ' audio files)');
            }

            if (!this.audioGroupDatFiles0__1.isEmpty_y1axqb_k$()) {
              this_4.append_22ad7x_k$(' (' + this.audioGroupDatFiles0__1.get_size_woubt6_k$() + ' audiogroup files)');
            }

            App$lambda_0(this.$status$delegate_1, this_4.toString());
            App$lambda_2(this.$parsedDataWin$delegate_1, dw);
            this.set_exceptionState_fex74n_k$(19);
            this.set_state_rjd8d0_k$(20);
            continue $sm;
          case 18:
            this.set_exceptionState_fex74n_k$(19);
            var tmp_10 = this.get_exception_x0n6w6_k$();
            if (tmp_10 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              App$lambda_0(this.$status$delegate_1, 'Error reading folder: ' + e.message);
              App$lambda_10(this.$loadedFileBytes$delegate_1, null);
              App$lambda_12(this.$loadedExternalAudio$delegate_1, emptyMap());
              App$lambda_14(this.$loadedAudioGroupFiles$delegate_1, emptyMap());
              App$lambda_18(this.$loadedSourceFiles$delegate_1, emptyMap());
              this.set_state_rjd8d0_k$(20);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 19:
            throw this.get_exception_x0n6w6_k$();
          case 20:
            this.set_exceptionState_fex74n_k$(19);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 19) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(App$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new App$lambda$lambda$slambda(this.$files_1, this.$applyPreset_1, this.$status$delegate_1, this.$loadedFileBytes$delegate_1, this.$loadedExternalAudio$delegate_1, this.$loadedAudioGroupFiles$delegate_1, this.$loadedMusFiles$delegate_1, this.$loadedSourceFiles$delegate_1, this.$parsedGameName$delegate_1, this.$parsedDataWin$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(App$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function App$lambda$lambda$slambda_0($files, $applyPreset, $status$delegate, $loadedFileBytes$delegate, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $loadedSourceFiles$delegate, $parsedGameName$delegate, $parsedDataWin$delegate, resultContinuation) {
    var i = new App$lambda$lambda$slambda($files, $applyPreset, $status$delegate, $loadedFileBytes$delegate, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $loadedSourceFiles$delegate, $parsedGameName$delegate, $parsedDataWin$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function App$lambda$lambda($logMessages, $scope, $parsedDataWin$delegate, $downloadUrl$delegate, $parsedGameName$delegate, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $loadedSourceFiles$delegate, $status$delegate, $applyPreset, $loadedFileBytes$delegate) {
    return function (event) {
      App$lambda_2($parsedDataWin$delegate, null);
      var input = event.get_target_juba8q_k$();
      var files = input.files;
      var tmp;
      if (files == null || files.length == 0) {
        return Unit_getInstance();
      }
      App$lambda_4($downloadUrl$delegate, null);
      $logMessages._v.clear_j9egeb_k$();
      App$lambda_20($parsedGameName$delegate, null);
      App$lambda_12($loadedExternalAudio$delegate, emptyMap());
      App$lambda_14($loadedAudioGroupFiles$delegate, emptyMap());
      App$lambda_16($loadedMusFiles$delegate, emptyMap());
      App$lambda_18($loadedSourceFiles$delegate, emptyMap());
      App$lambda_0($status$delegate, 'Reading folder...');
      launch($scope, VOID, VOID, App$lambda$lambda$slambda_0(files, $applyPreset, $status$delegate, $loadedFileBytes$delegate, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $loadedSourceFiles$delegate, $parsedGameName$delegate, $parsedDataWin$delegate, null));
      return Unit_getInstance();
    };
  }
  function App$lambda_83($logMessages, $scope, $parsedDataWin$delegate, $downloadUrl$delegate, $parsedGameName$delegate, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $loadedSourceFiles$delegate, $status$delegate, $applyPreset, $loadedFileBytes$delegate) {
    return function ($this$Input) {
      $this$Input.attr_w68641_k$('webkitdirectory', '');
      $this$Input.onChange_dxvo6i_k$(App$lambda$lambda($logMessages, $scope, $parsedDataWin$delegate, $downloadUrl$delegate, $parsedGameName$delegate, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $loadedSourceFiles$delegate, $status$delegate, $applyPreset, $loadedFileBytes$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda_84($this$P) {
    _init_properties_App_kt__fk8usv();
    $this$P.classes_ayghm2_k$(['status-text']);
    return Unit_getInstance();
  }
  function App$lambda_85($status$delegate) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C873@39859L12:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(114021881, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous> (App.kt:873)');
      }
      Text(App$lambda($status$delegate), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_39(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda_86($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['preset-buttons']);
    $this$Div.style_xwwy6r_k$(App$lambda$lambda_0);
    return Unit_getInstance();
  }
  function App$lambda$lambda_0($this$style) {
    _init_properties_App_kt__fk8usv();
    $this$style.property_wcrait_k$('display', 'flex');
    $this$style.property_wcrait_k$('gap', '8px');
    $this$style.property_wcrait_k$('flex-wrap', 'wrap');
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda($applyPreset, $preset) {
    return function (it) {
      $applyPreset($preset);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_1($applyPreset, $preset) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(App$lambda$lambda$lambda($applyPreset, $preset));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_2($preset, $selectedPreset$delegate) {
    return function ($this$DiscordButton, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-392284263, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:896)');
      }
      if (equals(App$lambda_77($selectedPreset$delegate), $preset)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(65587697);
        sourceInformation($composer_0, '897@40664L40');
        Text($preset.displayName_1 + ' (Selected)', $composer_0, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(65680449);
        sourceInformation($composer_0, '899@40758L24');
        Text($preset.displayName_1, $composer_0, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_40(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda_87($applyPreset, $selectedPreset$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C*892@40488L79,895@40586L236,890@40398L424:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-494916180, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous> (App.kt:889)');
      }
      var _iterator__ex2g4s = get_PRESETS().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var preset = _iterator__ex2g4s.next_20eer_k$();
        var tmp = DiscordButtonType_PRIMARY_getInstance();
        sourceInformationMarkerStart($composer_0, 1126925627, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$(preset);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda_1($applyPreset, preset);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-392284263, true, App$lambda$lambda_2(preset, $selectedPreset$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_40(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        DiscordButton(tmp, tmp0_group, tmp0, $composer_0, 390, 0);
      }
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_41(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda_88($sourceFile$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('sourceFile', KMutableProperty0, true);
    return $sourceFile$delegate.get_value_j01efc_k$();
  }
  function App$lambda_89($sourceFile$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('sourceFile', KMutableProperty0, true);
    $sourceFile$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_90($targetFile$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('targetFile', KMutableProperty0, true);
    return $targetFile$delegate.get_value_j01efc_k$();
  }
  function App$lambda_91($targetFile$delegate, _set____db54di) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('targetFile', KMutableProperty0, true);
    $targetFile$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function App$lambda$lambda_3($gamepadEnabled$delegate) {
    return function (it) {
      App$lambda_22($gamepadEnabled$delegate, !App$lambda_21($gamepadEnabled$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_0($this$Table) {
    _init_properties_App_kt__fk8usv();
    $this$Table.classes_ayghm2_k$(['fancy-table']);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda(a, b) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.get_key_18j28a_k$();
    var tmp$ret$1 = b.get_key_18j28a_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda($mapping) {
    return function ($this$Td, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C936@42085L17:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-626354811, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (App.kt:936)');
      }
      Text($mapping.get_key_18j28a_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_42(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_0($mapping) {
    return function ($this$Td, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C937@42142L19:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(76887932, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (App.kt:937)');
      }
      Text($mapping.get_value_j01efc_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_43(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_1($this$Td) {
    _init_properties_App_kt__fk8usv();
    $this$Td.classes_ayghm2_k$(['action-cell']);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($filesystemMappings, $mapping) {
    return function (it) {
      $filesystemMappings.remove_gppy8k_k$($mapping.get_key_18j28a_k$());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda$lambda($filesystemMappings, $mapping) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(App$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($filesystemMappings, $mapping));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_2($mapping, $filesystemMappings) {
    return function ($this$Td, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C943@42503L230,941@42341L525:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(1140076541, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (App.kt:941)');
      }
      var tmp = DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT_getInstance();
      sourceInformationMarkerStart($composer_0, 396902051, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$($mapping);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = App$lambda$lambda$lambda$lambda$lambda$lambda$lambda($filesystemMappings, $mapping);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      DiscordButton(tmp, tmp0_group, ComposableSingletons$AppKt_getInstance().lambda$_455728366_9wqm56__1, $composer_0, 390, 0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_44(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_0($mapping, $filesystemMappings) {
    return function ($this$Tr, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C936@42083L21,936@42080L24,937@42140L23,937@42137L26,938@42207L94,940@42303L597,938@42196L704:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-2054496063, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (App.kt:936)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-626354811, true, App$lambda$lambda$lambda$lambda$lambda$lambda($mapping), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_42(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Td(null, tmp0, $composer_0, 48, 1);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(76887932, true, App$lambda$lambda$lambda$lambda$lambda$lambda_0($mapping), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_43(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Td(null, tmp0_0, $composer_0, 48, 1);
      sourceInformationMarkerStart($composer_0, 1314244863, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = App$lambda$lambda$lambda$lambda$lambda$lambda_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_1 = rememberComposableLambda(1140076541, true, App$lambda$lambda$lambda$lambda$lambda$lambda_2($mapping, $filesystemMappings), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_1 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = ComposableLambda$invoke$ref_44(dispatchReceiver_1);
        $composer_3.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Td(tmp0_group, tmp0_1, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_45(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda($filesystemMappings) {
    return function ($this$Tbody, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C*935@42046L884,935@42043L887:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(963903349, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous>.<anonymous> (App.kt:934)');
      }
      // Inline function 'kotlin.collections.sortedBy' call
      var this_0 = $filesystemMappings.get_entries_p20ztl_k$();
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = App$lambda$lambda$lambda$lambda$lambda;
      var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
      var _iterator__ex2g4s = sortedWith(this_0, tmp$ret$0).iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var mapping = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-2054496063, true, App$lambda$lambda$lambda$lambda$lambda_0(mapping, $filesystemMappings), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_45(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Tr(null, tmp0, $composer_0, 48, 1);
      }
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_46(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_1($filesystemMappings) {
    return function ($this$Table, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C926@41668L228,933@41923L1055,933@41917L1061:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(373119417, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous> (App.kt:926)');
      }
      Thead(null, ComposableSingletons$AppKt_getInstance().lambda$_1327202313_60eba0__1, $composer_0, 48, 1);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(963903349, true, App$lambda$lambda$lambda$lambda($filesystemMappings), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_46(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Tbody(null, tmp0, $composer_0, 48, 1);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_47(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_2($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['add-mapping-form']);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda_1($sourceFile$delegate) {
    return function (it) {
      App$lambda_89($sourceFile$delegate, it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_0($sourceFile$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.attr_w68641_k$('placeholder', 'Source File');
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda$lambda_1($sourceFile$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_2($targetFile$delegate) {
    return function (it) {
      App$lambda_91($targetFile$delegate, it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_1($targetFile$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.attr_w68641_k$('placeholder', 'Target Path');
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda$lambda_2($targetFile$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_3($sourceFile$delegate, $targetFile$delegate, $filesystemMappings) {
    return function (it) {
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.text.isNotBlank' call
      var this_0 = App$lambda_88($sourceFile$delegate);
      if (!isBlank(this_0)) {
        // Inline function 'kotlin.text.isNotBlank' call
        var this_1 = App$lambda_90($targetFile$delegate);
        tmp_0 = !isBlank(this_1);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp0 = $filesystemMappings;
        var tmp2 = App$lambda_88($sourceFile$delegate);
        // Inline function 'kotlin.collections.set' call
        var value = App$lambda_90($targetFile$delegate);
        tmp0.put_4fpzoq_k$(tmp2, value);
        App$lambda_89($sourceFile$delegate, '');
        App$lambda_91($targetFile$delegate, '');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_2($sourceFile$delegate, $targetFile$delegate, $filesystemMappings) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(App$lambda$lambda$lambda$lambda$lambda_3($sourceFile$delegate, $targetFile$delegate, $filesystemMappings));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_3($sourceFile$delegate, $targetFile$delegate, $filesystemMappings) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C963@43288L192,963@43266L214,970@43524L192,970@43502L214,979@43828L403,977@43738L575:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-2056206570, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous> (App.kt:963)');
      }
      var tmp = App$lambda_88($sourceFile$delegate);
      sourceInformationMarkerStart($composer_0, -329556010, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = App$lambda$lambda$lambda$lambda_0($sourceFile$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TextInput(tmp, tmp0_group, $composer_0, 48, 0);
      var tmp_2 = App$lambda_90($targetFile$delegate);
      sourceInformationMarkerStart($composer_0, -329548458, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = App$lambda$lambda$lambda$lambda_1($targetFile$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TextInput(tmp_2, tmp1_group, $composer_0, 48, 0);
      var tmp_5 = DiscordButtonType_PRIMARY_getInstance();
      sourceInformationMarkerStart($composer_0, -329538519, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = App$lambda$lambda$lambda$lambda_2($sourceFile$delegate, $targetFile$delegate, $filesystemMappings);
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      DiscordButton(tmp_5, tmp2_group, ComposableSingletons$AppKt_getInstance().lambda$_930385749_bqgssy_1, $composer_0, 438, 0);
      var tmp_8;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_8 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_48(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_4($filesystemMappings) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C919@41460L90,923@41582L62,925@41646L1350,923@41568L1428,957@43032L39,958@43106L39,960@43175L67,962@43244L1087,960@43163L1168:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(1929087669, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:919)');
        }
        FieldInformation(ComposableSingletons$AppKt_getInstance().lambda$580816950__1, $composer_0, 6);
        sourceInformationMarkerStart($composer_0, -1572617421, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(373119417, true, App$lambda$lambda$lambda_1($filesystemMappings), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_47(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Table(tmp0_group, tmp0, $composer_0, 54, 0);
        sourceInformationMarkerStart($composer_0, -1572571044, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = mutableStateOf('');
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_5 = tmp_4;
        var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var sourceFile$delegate = tmp1_group;
        sourceInformationMarkerStart($composer_0, -1572568676, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_2 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (false || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_2 = mutableStateOf('');
          $composer_0.updateRememberedValue_l1wh71_k$(value_2);
          tmp_6 = value_2;
        } else {
          tmp_6 = it_2;
        }
        var tmp_7 = tmp_6;
        var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var targetFile$delegate = tmp2_group;
        sourceInformationMarkerStart($composer_0, -1572566440, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_3 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (false || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_3 = App$lambda$lambda$lambda_2;
          $composer_0.updateRememberedValue_l1wh71_k$(value_3);
          tmp_8 = value_3;
        } else {
          tmp_8 = it_3;
        }
        var tmp_9 = tmp_8;
        var tmp3_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-2056206570, true, App$lambda$lambda$lambda_3(sourceFile$delegate, targetFile$delegate, $filesystemMappings), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_4 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_10;
        if (invalid_0 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_4 = ComposableLambda$invoke$ref_48(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_4);
          tmp_10 = value_4;
        } else {
          tmp_10 = it_4;
        }
        var tmp_11 = tmp_10;
        var tmp0_0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp3_group, tmp0_0, $composer_0, 54, 0);
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_getInstance();
        }
        tmp = tmp_12;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_49(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_4($ambientColor$delegate) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        App$lambda_62($ambientColor$delegate, it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_5($m, $checkmarkIcon, $eyeDropperIcon, $ambientColor$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1000@44678L101,1003@44856L73,1003@44796L133:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(169123934, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1000)');
        }
        FieldInformation(ComposableSingletons$AppKt_getInstance().lambda$1561086367__1, $composer_0, 6);
        var tmp_0 = App$lambda_61($ambientColor$delegate);
        sourceInformationMarkerStart($composer_0, -680650329, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_4($ambientColor$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        ColorPicker($m, $checkmarkIcon, $eyeDropperIcon, tmp_0, tmp0_group, $composer_0, 24576 | net_perfectdreams_luna_modals_ModalManager$stableprop_getter());
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_50(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_5($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['range-input-with-value']);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda_4($bgAlpha$delegate) {
    return function (it) {
      App$lambda_28($bgAlpha$delegate, numberToInt(ensureNotNull(it.get_value_j01efc_k$())));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_3($bgAlpha$delegate) {
    return function ($this$Input) {
      $this$Input.attr_w68641_k$('min', '0');
      $this$Input.attr_w68641_k$('max', '128');
      $this$Input.value_hphtnt_k$(App$lambda_27($bgAlpha$delegate).toString());
      $this$Input.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda$lambda_4($bgAlpha$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_4($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['range-input-value']);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda_5($bgAlpha$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1022@45522L24:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-1573896257, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous>.<anonymous> (App.kt:1022)');
      }
      Text(App$lambda_27($bgAlpha$delegate).toString(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_51(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_6($bgAlpha$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1014@45206L222,1014@45183L245,1021@45462L32,1021@45496L72,1021@45450L118:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(727957982, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous> (App.kt:1014)');
      }
      var tmp = Range_getInstance();
      sourceInformationMarkerStart($composer_0, -512046884, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = App$lambda$lambda$lambda$lambda_3($bgAlpha$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Input(tmp, tmp0_group, $composer_0, 48 | org_jetbrains_compose_web_attributes_InputType_Range$stableprop_getter());
      sourceInformationMarkerStart($composer_0, -512038882, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = App$lambda$lambda$lambda$lambda_4;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1573896257, true, App$lambda$lambda$lambda$lambda_5($bgAlpha$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_51(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      var tmp_6;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_6 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_52(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_6($bgAlpha$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1009@44988L104,1013@45122L37,1013@45161L425,1013@45110L476:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-515106371, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1009)');
        }
        FieldInformation(ComposableSingletons$AppKt_getInstance().lambda$876856062__1, $composer_0, 6);
        sourceInformationMarkerStart($composer_0, -1095978590, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_5;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(727957982, true, App$lambda$lambda$lambda_6($bgAlpha$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_52(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp0_group, tmp0, $composer_0, 54, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_53(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_7($bgColorTopLeft$delegate) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        App$lambda_30($bgColorTopLeft$delegate, it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_7($m, $checkmarkIcon, $eyeDropperIcon, $bgColorTopLeft$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1028@45645L109,1031@45833L75,1031@45771L137:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-1199336676, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1028)');
        }
        FieldInformation(ComposableSingletons$AppKt_getInstance().lambda$192625757__1, $composer_0, 6);
        var tmp_0 = App$lambda_29($bgColorTopLeft$delegate);
        sourceInformationMarkerStart($composer_0, -1511303641, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_7($bgColorTopLeft$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        ColorPicker($m, $checkmarkIcon, $eyeDropperIcon, tmp_0, tmp0_group, $composer_0, 24576 | net_perfectdreams_luna_modals_ModalManager$stableprop_getter());
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_54(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_8($bgColorTopRight$delegate) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        App$lambda_32($bgColorTopRight$delegate, it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_8($m, $checkmarkIcon, $eyeDropperIcon, $bgColorTopRight$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1037@45967L110,1040@46157L76,1040@46094L139:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-1883566981, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1037)');
        }
        FieldInformation(ComposableSingletons$AppKt_getInstance().lambda$_491604548_51oekl_1, $composer_0, 6);
        var tmp_0 = App$lambda_31($bgColorTopRight$delegate);
        sourceInformationMarkerStart($composer_0, -1926630393, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_8($bgColorTopRight$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        ColorPicker($m, $checkmarkIcon, $eyeDropperIcon, tmp_0, tmp0_group, $composer_0, 24576 | net_perfectdreams_luna_modals_ModalManager$stableprop_getter());
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_55(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_9($bgColorBottomLeft$delegate) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        App$lambda_34($bgColorBottomLeft$delegate, it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_9($m, $checkmarkIcon, $eyeDropperIcon, $bgColorBottomLeft$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1046@46292L112,1049@46486L78,1049@46421L143:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(1727170010, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1046)');
        }
        FieldInformation(ComposableSingletons$AppKt_getInstance().lambda$_1175834853_tnfiad_1, $composer_0, 6);
        var tmp_0 = App$lambda_33($bgColorBottomLeft$delegate);
        sourceInformationMarkerStart($composer_0, 1953010216, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_9($bgColorBottomLeft$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        ColorPicker($m, $checkmarkIcon, $eyeDropperIcon, tmp_0, tmp0_group, $composer_0, 24576 | net_perfectdreams_luna_modals_ModalManager$stableprop_getter());
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_56(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_10($bgColorBottomRight$delegate) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        App$lambda_36($bgColorBottomRight$delegate, it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_10($m, $checkmarkIcon, $eyeDropperIcon, $bgColorBottomRight$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1055@46623L113,1058@46819L79,1058@46753L145:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(1042939705, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1055)');
        }
        FieldInformation(ComposableSingletons$AppKt_getInstance().lambda$_1860065158_ab1mba_1, $composer_0, 6);
        var tmp_0 = App$lambda_35($bgColorBottomRight$delegate);
        sourceInformationMarkerStart($composer_0, 1537683464, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_10($bgColorBottomRight$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        ColorPicker($m, $checkmarkIcon, $eyeDropperIcon, tmp_0, tmp0_group, $composer_0, 24576 | net_perfectdreams_luna_modals_ModalManager$stableprop_getter());
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_57(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_11($lightColor1$delegate) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        App$lambda_38($lightColor1$delegate, it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_12($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['light-direction-inputs']);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda_5($lightDir1X$delegate) {
    return function (it) {
      App$lambda_40($lightDir1X$delegate, it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_6($lightDir1X$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.attr_w68641_k$('placeholder', 'X');
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda$lambda_5($lightDir1X$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_6($lightDir1Y$delegate) {
    return function (it) {
      App$lambda_42($lightDir1Y$delegate, it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_7($lightDir1Y$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.attr_w68641_k$('placeholder', 'Y');
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda$lambda_6($lightDir1Y$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_7($lightDir1Z$delegate) {
    return function (it) {
      App$lambda_44($lightDir1Z$delegate, it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_8($lightDir1Z$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.attr_w68641_k$('placeholder', 'Z');
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda$lambda_7($lightDir1Z$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_13($lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1071@47290L18,1072@47351L130,1072@47329L152,1076@47524L130,1076@47502L152,1080@47697L130,1080@47675L152:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(1601773753, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous> (App.kt:1071)');
      }
      Text('Direction:', $composer_0, 6);
      var tmp = App$lambda_39($lightDir1X$delegate);
      sourceInformationMarkerStart($composer_0, 1706287451, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = App$lambda$lambda$lambda$lambda_6($lightDir1X$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TextInput(tmp, tmp0_group, $composer_0, 48, 0);
      var tmp_2 = App$lambda_41($lightDir1Y$delegate);
      sourceInformationMarkerStart($composer_0, 1706292987, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = App$lambda$lambda$lambda$lambda_7($lightDir1Y$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TextInput(tmp_2, tmp1_group, $composer_0, 48, 0);
      var tmp_5 = App$lambda_43($lightDir1Z$delegate);
      sourceInformationMarkerStart($composer_0, 1706298523, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = App$lambda$lambda$lambda$lambda_8($lightDir1Z$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TextInput(tmp_5, tmp2_group, $composer_0, 48, 0);
      var tmp_8;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_8 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_58(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_11($m, $checkmarkIcon, $eyeDropperIcon, $lightColor1$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1064@46957L95,1067@47128L72,1067@47069L131,1070@47229L37,1070@47268L577,1070@47217L628:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(358709400, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1064)');
        }
        FieldInformation(ComposableSingletons$AppKt_getInstance().lambda$1750671833__1, $composer_0, 6);
        var tmp_0 = App$lambda_37($lightColor1$delegate);
        sourceInformationMarkerStart($composer_0, 1122355840, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_11($lightColor1$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        ColorPicker($m, $checkmarkIcon, $eyeDropperIcon, tmp_0, tmp0_group, $composer_0, 24576 | net_perfectdreams_luna_modals_ModalManager$stableprop_getter());
        sourceInformationMarkerStart($composer_0, 1122359037, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = App$lambda$lambda$lambda_12;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1601773753, true, App$lambda$lambda$lambda_13($lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_58(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp1_group, tmp0, $composer_0, 54, 0);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_59(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_14($lightColor2$delegate) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        App$lambda_46($lightColor2$delegate, it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_15($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['light-direction-inputs']);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda_8($lightDir2X$delegate) {
    return function (it) {
      App$lambda_48($lightDir2X$delegate, it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_9($lightDir2X$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.attr_w68641_k$('placeholder', 'X');
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda$lambda_8($lightDir2X$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_9($lightDir2Y$delegate) {
    return function (it) {
      App$lambda_50($lightDir2Y$delegate, it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_10($lightDir2Y$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.attr_w68641_k$('placeholder', 'Y');
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda$lambda_9($lightDir2Y$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_10($lightDir2Z$delegate) {
    return function (it) {
      App$lambda_52($lightDir2Z$delegate, it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_11($lightDir2Z$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.attr_w68641_k$('placeholder', 'Z');
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda$lambda_10($lightDir2Z$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_16($lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1095@48237L18,1096@48298L130,1096@48276L152,1100@48471L130,1100@48449L152,1104@48644L130,1104@48622L152:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(917543448, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous> (App.kt:1095)');
      }
      Text('Direction:', $composer_0, 6);
      var tmp = App$lambda_47($lightDir2X$delegate);
      sourceInformationMarkerStart($composer_0, 1290960634, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = App$lambda$lambda$lambda$lambda_9($lightDir2X$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TextInput(tmp, tmp0_group, $composer_0, 48, 0);
      var tmp_2 = App$lambda_49($lightDir2Y$delegate);
      sourceInformationMarkerStart($composer_0, 1290966170, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = App$lambda$lambda$lambda$lambda_10($lightDir2Y$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TextInput(tmp_2, tmp1_group, $composer_0, 48, 0);
      var tmp_5 = App$lambda_51($lightDir2Z$delegate);
      sourceInformationMarkerStart($composer_0, 1290971706, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = App$lambda$lambda$lambda$lambda_11($lightDir2Z$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TextInput(tmp_5, tmp2_group, $composer_0, 48, 0);
      var tmp_8;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_8 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_60(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_12($m, $checkmarkIcon, $eyeDropperIcon, $lightColor2$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1088@47904L95,1091@48075L72,1091@48016L131,1094@48176L37,1094@48215L577,1094@48164L628:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-325520905, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1088)');
        }
        FieldInformation(ComposableSingletons$AppKt_getInstance().lambda$1066441528__1, $composer_0, 6);
        var tmp_0 = App$lambda_45($lightColor2$delegate);
        sourceInformationMarkerStart($composer_0, 707029023, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_14($lightColor2$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        ColorPicker($m, $checkmarkIcon, $eyeDropperIcon, tmp_0, tmp0_group, $composer_0, 24576 | net_perfectdreams_luna_modals_ModalManager$stableprop_getter());
        sourceInformationMarkerStart($composer_0, 707032220, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = App$lambda$lambda$lambda_15;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(917543448, true, App$lambda$lambda$lambda_16($lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_60(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp1_group, tmp0, $composer_0, 54, 0);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_61(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_17($lightColor3$delegate) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        App$lambda_54($lightColor3$delegate, it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_18($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['light-direction-inputs']);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda_11($lightDir3X$delegate) {
    return function (it) {
      App$lambda_56($lightDir3X$delegate, it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_12($lightDir3X$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.attr_w68641_k$('placeholder', 'X');
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda$lambda_11($lightDir3X$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_12($lightDir3Y$delegate) {
    return function (it) {
      App$lambda_58($lightDir3Y$delegate, it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_13($lightDir3Y$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.attr_w68641_k$('placeholder', 'Y');
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda$lambda_12($lightDir3Y$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_13($lightDir3Z$delegate) {
    return function (it) {
      App$lambda_60($lightDir3Z$delegate, it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_14($lightDir3Z$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.attr_w68641_k$('placeholder', 'Z');
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda$lambda_13($lightDir3Z$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_19($lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1119@49184L18,1120@49245L130,1120@49223L152,1124@49418L130,1124@49396L152,1128@49591L130,1128@49569L152:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(233313143, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous> (App.kt:1119)');
      }
      Text('Direction:', $composer_0, 6);
      var tmp = App$lambda_55($lightDir3X$delegate);
      sourceInformationMarkerStart($composer_0, 875633817, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = App$lambda$lambda$lambda$lambda_12($lightDir3X$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TextInput(tmp, tmp0_group, $composer_0, 48, 0);
      var tmp_2 = App$lambda_57($lightDir3Y$delegate);
      sourceInformationMarkerStart($composer_0, 875639353, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = App$lambda$lambda$lambda$lambda_13($lightDir3Y$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TextInput(tmp_2, tmp1_group, $composer_0, 48, 0);
      var tmp_5 = App$lambda_59($lightDir3Z$delegate);
      sourceInformationMarkerStart($composer_0, 875644889, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = App$lambda$lambda$lambda$lambda_14($lightDir3Z$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TextInput(tmp_5, tmp2_group, $composer_0, 48, 0);
      var tmp_8;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_8 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_62(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_13($m, $checkmarkIcon, $eyeDropperIcon, $lightColor3$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1112@48851L95,1115@49022L72,1115@48963L131,1118@49123L37,1118@49162L577,1118@49111L628:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-1009751210, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1112)');
        }
        FieldInformation(ComposableSingletons$AppKt_getInstance().lambda$382211223__1, $composer_0, 6);
        var tmp_0 = App$lambda_53($lightColor3$delegate);
        sourceInformationMarkerStart($composer_0, 291702206, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_17($lightColor3$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        ColorPicker($m, $checkmarkIcon, $eyeDropperIcon, tmp_0, tmp0_group, $composer_0, 24576 | net_perfectdreams_luna_modals_ModalManager$stableprop_getter());
        sourceInformationMarkerStart($composer_0, 291705403, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = App$lambda$lambda$lambda_18;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(233313143, true, App$lambda$lambda$lambda_19($lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_62(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp1_group, tmp0, $composer_0, 54, 0);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_63(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_20($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['field-information-with-control']);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda_15($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['field-information']);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_3($this$style) {
    _init_properties_App_kt__fk8usv();
    $this$style.property_wcrait_k$('display', 'none');
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda$slambda($file, $customIconBytes$delegate, resultContinuation) {
    this.$file_1 = $file;
    this.$customIconBytes$delegate_1 = $customIconBytes$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(App$lambda$lambda$lambda$lambda$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(App$lambda$lambda$lambda$lambda$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(App$lambda$lambda$lambda$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = readFileAsBytes(this.$file_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            App$lambda_24(this.$customIconBytes$delegate_1, ARGUMENT);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              App$lambda_24(this.$customIconBytes$delegate_1, null);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(App$lambda$lambda$lambda$lambda$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new App$lambda$lambda$lambda$lambda$lambda$lambda$slambda(this.$file_1, this.$customIconBytes$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(App$lambda$lambda$lambda$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function App$lambda$lambda$lambda$lambda$lambda$lambda$slambda_0($file, $customIconBytes$delegate, resultContinuation) {
    var i = new App$lambda$lambda$lambda$lambda$lambda$lambda$slambda($file, $customIconBytes$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_4($scope, $customIconBytes$delegate) {
    return function (event) {
      var input = event.get_target_juba8q_k$();
      var files = input.files;
      var tmp;
      if (files == null || files.length == 0) {
        return Unit_getInstance();
      }
      var file = files[0];
      launch($scope, VOID, VOID, App$lambda$lambda$lambda$lambda$lambda$lambda$slambda_0(file, $customIconBytes$delegate, null));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_14($scope, $customIconBytes$delegate) {
    return function ($this$Input) {
      $this$Input.id_e4l56n_k$('custom-icon-input');
      $this$Input.style_xwwy6r_k$(App$lambda$lambda$lambda$lambda$lambda$lambda_3);
      $this$Input.onChange_dxvo6i_k$(App$lambda$lambda$lambda$lambda$lambda$lambda_4($scope, $customIconBytes$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_5($customIconBytes$delegate) {
    return function (it) {
      App$lambda_24($customIconBytes$delegate, null);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_15($customIconBytes$delegate) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(App$lambda$lambda$lambda$lambda$lambda$lambda_5($customIconBytes$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_16($this$DiscordButton) {
    _init_properties_App_kt__fk8usv();
    $this$DiscordButton.onClick_q9cds6_k$(App$lambda$lambda$lambda$lambda$lambda$lambda_6);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_6(it) {
    _init_properties_App_kt__fk8usv();
    var tmp = document;
    // Inline function 'web.dom.ElementId' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'custom-icon-input';
    ensureNotNull(tmp.getElementById(tmp$ret$3)).click();
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda_16($scope, $customIconBytes$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1156@50703L964,1156@50674L993:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(1015798011, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous>.<anonymous> (App.kt:1156)');
      }
      var tmp = File_getInstance();
      sourceInformationMarkerStart($composer_0, 1224315103, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$($scope);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = App$lambda$lambda$lambda$lambda$lambda_14($scope, $customIconBytes$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Input(tmp, tmp0_group, $composer_0, org_jetbrains_compose_web_attributes_InputType_File$stableprop_getter());
      if (!(App$lambda_23($customIconBytes$delegate) == null)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-699942493);
        sourceInformation($composer_0, '1181@51857L182,1179@51752L396');
        var tmp_2 = DiscordButtonType_DANGER_getInstance();
        sourceInformationMarkerStart($composer_0, 1224351249, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = App$lambda$lambda$lambda$lambda$lambda_15($customIconBytes$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DiscordButton(tmp_2, tmp1_group, ComposableSingletons$AppKt_getInstance().lambda$412316129__1, $composer_0, 438, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-699486793);
        sourceInformation($composer_0, '1192@52316L225,1190@52210L440');
        var tmp_5 = DiscordButtonType_PRIMARY_getInstance();
        sourceInformationMarkerStart($composer_0, 1224365980, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = App$lambda$lambda$lambda$lambda$lambda_16;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = it_1;
        }
        var tmp_7 = tmp_6;
        var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DiscordButton(tmp_5, tmp2_group, ComposableSingletons$AppKt_getInstance().lambda$_429912214_gx42qi_1, $composer_0, 438, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      var tmp_8;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_8 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_64(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_21($scope, $customIconBytes$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1139@49927L76,1139@49915L707,1155@50648L2050,1155@50644L2054:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-252171451, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous> (App.kt:1139)');
      }
      sourceInformationMarkerStart($composer_0, -1818594671, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = App$lambda$lambda$lambda$lambda_15;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Div(tmp0_group, ComposableSingletons$AppKt_getInstance().lambda$1404791172__1, $composer_0, 54, 0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1015798011, true, App$lambda$lambda$lambda$lambda_16($scope, $customIconBytes$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_64(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(null, tmp0, $composer_0, 48, 1);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_65(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_14($scope, $customIconBytes$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1136@49810L81,1138@49893L2823,1136@49798L2918:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-132460730, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1136)');
        }
        sourceInformationMarkerStart($composer_0, 1554258391, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_20;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-252171451, true, App$lambda$lambda$lambda_21($scope, $customIconBytes$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_65(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp0_group, tmp0, $composer_0, 54, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_66(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_17($gameId$delegate) {
    return function (it) {
      // Inline function 'kotlin.text.trim' call
      var this_0 = it.get_value_j01efc_k$();
      var tmp$ret$0 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      App$lambda_76($gameId$delegate, take(replace(tmp$ret$0, ' ', ''), 11));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_22($gameId$delegate) {
    return function ($this$TextInput) {
      placeholder($this$TextInput, 'BTTR.000_00');
      $this$TextInput.value_hphtnt_k$(App$lambda_75($gameId$delegate));
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda_17($gameId$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_15($gameId$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1206@52775L78,1210@52881L315,1210@52871L325:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-816691035, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1206)');
        }
        FieldInformation(ComposableSingletons$AppKt_getInstance().lambda$_615528572_o1uf0h_1, $composer_0, 6);
        sourceInformationMarkerStart($composer_0, 1138934816, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_22($gameId$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        TextInput(null, tmp0_group, $composer_0, 48, 1);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_67(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_16($lazyLoadRooms$delegate) {
    return function (it) {
      App$lambda_66($lazyLoadRooms$delegate, !App$lambda_65($lazyLoadRooms$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_17($debugOverlayEnabled$delegate) {
    return function (it) {
      App$lambda_64($debugOverlayEnabled$delegate, !App$lambda_63($debugOverlayEnabled$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_18($atlasSizeText$delegate, $atlasSize$delegate) {
    return function (it) {
      // Inline function 'kotlin.text.filter' call
      var tmp0 = it.get_value_j01efc_k$();
      // Inline function 'kotlin.text.filterTo' call
      var destination = StringBuilder_init_$Create$();
      var inductionVariable = 0;
      var last = charSequenceLength(tmp0);
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = charSequenceGet(tmp0, index);
          if (isDigit(element)) {
            destination.append_am5a4z_k$(element);
          }
        }
         while (inductionVariable < last);
      var tmp$ret$2 = destination.toString();
      var raw = take(tmp$ret$2, 5);
      App$lambda_70($atlasSizeText$delegate, raw);
      var parsed = toIntOrNull(raw);
      var tmp;
      if (!(parsed == null) && parsed > 0) {
        App$lambda_68($atlasSize$delegate, parsed);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_23($atlasSizeText$delegate, $atlasSize$delegate) {
    return function ($this$TextInput) {
      placeholder($this$TextInput, '512');
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda_18($atlasSizeText$delegate, $atlasSize$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_19($eeAtlasCacheBytesText$delegate, $eeAtlasCacheBytes$delegate) {
    return function (it) {
      // Inline function 'kotlin.text.filter' call
      var tmp0 = it.get_value_j01efc_k$();
      // Inline function 'kotlin.text.filterTo' call
      var destination = StringBuilder_init_$Create$();
      var inductionVariable = 0;
      var last = charSequenceLength(tmp0);
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = charSequenceGet(tmp0, index);
          if (isDigit(element)) {
            destination.append_am5a4z_k$(element);
          }
        }
         while (inductionVariable < last);
      var raw = destination.toString();
      App$lambda_74($eeAtlasCacheBytesText$delegate, raw);
      var parsed = toIntOrNull(raw);
      var tmp;
      if (!(parsed == null) && parsed > 0) {
        App$lambda_72($eeAtlasCacheBytes$delegate, parsed);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_24($eeAtlasCacheBytesText$delegate, $eeAtlasCacheBytes$delegate) {
    return function ($this$TextInput) {
      placeholder($this$TextInput, '2097152');
      $this$TextInput.onInput_uvnun8_k$(App$lambda$lambda$lambda$lambda_19($eeAtlasCacheBytesText$delegate, $eeAtlasCacheBytes$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_18($atlasSizeText$delegate, $atlasSize$delegate, $eeAtlasCacheBytesText$delegate, $eeAtlasCacheBytes$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1250@54388L429,1257@54860L421,1257@54835L446,1269@55299L423,1276@55773L433,1276@55740L466:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-1500921340, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1250)');
        }
        FieldInformation(ComposableSingletons$AppKt_getInstance().lambda$_1299758877_enoz8x_1, $composer_0, 6);
        var tmp_0 = App$lambda_69($atlasSizeText$delegate);
        sourceInformationMarkerStart($composer_0, 723619817, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_23($atlasSizeText$delegate, $atlasSize$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        TextInput(tmp_0, tmp0_group, $composer_0, 48, 0);
        FieldInformation(ComposableSingletons$AppKt_getInstance().lambda$799003674__1, $composer_0, 6);
        var tmp_3 = App$lambda_73($eeAtlasCacheBytesText$delegate);
        sourceInformationMarkerStart($composer_0, 723649045, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = App$lambda$lambda$lambda_24($eeAtlasCacheBytesText$delegate, $eeAtlasCacheBytes$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        TextInput(tmp_3, tmp1_group, $composer_0, 48, 0);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_68(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_25($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['field-information-with-control']);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda_20($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['field-information']);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_7($this$style) {
    _init_properties_App_kt__fk8usv();
    $this$style.property_wcrait_k$('display', 'none');
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1($file, $customElfBytes$delegate, resultContinuation) {
    this.$file_1 = $file;
    this.$customElfBytes$delegate_1 = $customElfBytes$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(App$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(App$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(App$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = readFileAsBytes(this.$file_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            App$lambda_26(this.$customElfBytes$delegate_1, ARGUMENT);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              App$lambda_26(this.$customElfBytes$delegate_1, null);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(App$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new App$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1(this.$file_1, this.$customElfBytes$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(App$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function App$lambda$lambda$lambda$lambda$lambda$lambda$slambda_2($file, $customElfBytes$delegate, resultContinuation) {
    var i = new App$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1($file, $customElfBytes$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_8($scope, $customElfBytes$delegate) {
    return function (event) {
      var input = event.get_target_juba8q_k$();
      var files = input.files;
      var tmp;
      if (files == null || files.length == 0) {
        return Unit_getInstance();
      }
      var file = files[0];
      launch($scope, VOID, VOID, App$lambda$lambda$lambda$lambda$lambda$lambda$slambda_2(file, $customElfBytes$delegate, null));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_17($scope, $customElfBytes$delegate) {
    return function ($this$Input) {
      $this$Input.id_e4l56n_k$('custom-elf-input');
      $this$Input.style_xwwy6r_k$(App$lambda$lambda$lambda$lambda$lambda$lambda_7);
      $this$Input.onChange_dxvo6i_k$(App$lambda$lambda$lambda$lambda$lambda$lambda_8($scope, $customElfBytes$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_9($customElfBytes$delegate) {
    return function (it) {
      App$lambda_26($customElfBytes$delegate, null);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_18($customElfBytes$delegate) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(App$lambda$lambda$lambda$lambda$lambda$lambda_9($customElfBytes$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_19($this$DiscordButton) {
    _init_properties_App_kt__fk8usv();
    $this$DiscordButton.onClick_q9cds6_k$(App$lambda$lambda$lambda$lambda$lambda$lambda_10);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_10(it) {
    _init_properties_App_kt__fk8usv();
    var tmp = document;
    // Inline function 'web.dom.ElementId' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'custom-elf-input';
    ensureNotNull(tmp.getElementById(tmp$ret$3)).click();
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda_21($scope, $customElfBytes$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1310@57182L903,1310@57153L932:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-1036892904, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous>.<anonymous> (App.kt:1310)');
      }
      var tmp = File_getInstance();
      sourceInformationMarkerStart($composer_0, -21665409, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$($scope);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = App$lambda$lambda$lambda$lambda$lambda_17($scope, $customElfBytes$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Input(tmp, tmp0_group, $composer_0, org_jetbrains_compose_web_attributes_InputType_File$stableprop_getter());
      if (!(App$lambda_25($customElfBytes$delegate) == null)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-670692345);
        sourceInformation($composer_0, '1334@58274L181,1332@58169L395');
        var tmp_2 = DiscordButtonType_DANGER_getInstance();
        sourceInformationMarkerStart($composer_0, -21631187, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = App$lambda$lambda$lambda$lambda$lambda_18($customElfBytes$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DiscordButton(tmp_2, tmp1_group, ComposableSingletons$AppKt_getInstance().lambda$_1640374786_dvov2u_1, $composer_0, 438, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-670237637);
        sourceInformation($composer_0, '1345@58732L224,1343@58626L439');
        var tmp_5 = DiscordButtonType_PRIMARY_getInstance();
        sourceInformationMarkerStart($composer_0, -21616488, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = App$lambda$lambda$lambda$lambda$lambda_19;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = it_1;
        }
        var tmp_7 = tmp_6;
        var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DiscordButton(tmp_5, tmp2_group, ComposableSingletons$AppKt_getInstance().lambda$1812364167__1, $composer_0, 438, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      var tmp_8;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_8 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_69(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_26($scope, $customElfBytes$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1293@56394L76,1293@56382L719,1309@57127L1986,1309@57123L1990:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(1990104930, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous>.<anonymous> (App.kt:1293)');
      }
      sourceInformationMarkerStart($composer_0, 1230392174, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = App$lambda$lambda$lambda$lambda_20;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Div(tmp0_group, ComposableSingletons$AppKt_getInstance().lambda$_647899743_m9pmdj_1, $composer_0, 54, 0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1036892904, true, App$lambda$lambda$lambda$lambda_21($scope, $customElfBytes$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_69(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(null, tmp0, $composer_0, 48, 1);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_70(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_19($scope, $customElfBytes$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1290@56277L81,1292@56360L2771,1290@56265L2866:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(2109815651, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1290)');
        }
        sourceInformationMarkerStart($composer_0, 308277940, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda$lambda_25;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1990104930, true, App$lambda$lambda$lambda_26($scope, $customElfBytes$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_70(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp0_group, tmp0, $composer_0, 54, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_71(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda_92($controller1Mappings, $controller2Mappings, $disabledObjects, $eagerlyLoadedRooms, $force4bppPatterns, $gamepadEnabled$delegate, $filesystemMappings, $m, $ambientColor$delegate, $bgAlpha$delegate, $bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate, $lightColor1$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightColor2$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightColor3$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate, $scope, $customIconBytes$delegate, $gameId$delegate, $lazyLoadRooms$delegate, $debugOverlayEnabled$delegate, $atlasSizeText$delegate, $atlasSize$delegate, $eeAtlasCacheBytesText$delegate, $eeAtlasCacheBytes$delegate, $customElfBytes$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C911@41196L64,906@40884L376,915@41274L64,916@41351L64,918@41442L2903,918@41429L2916,994@44359L66,999@44660L283,999@44647L296,1008@44970L630,1008@44957L643,1027@45627L295,1027@45614L308,1036@45949L298,1036@45936L311,1045@46274L304,1045@46261L317,1054@46605L307,1054@46592L320,1063@46939L920,1063@46926L933,1087@47886L920,1087@47873L933,1111@48833L920,1111@48820L933,1135@49780L2950,1135@49767L2963,1205@52757L453,1205@52744L466,1228@53577L62,1223@53224L415,1232@53653L71,1239@54058L74,1234@53738L394,1243@54146L197,1249@54370L1850,1249@54357L1863,1289@56247L2898,1289@56234L2911:App.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(449685051, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous> (App.kt:906)');
        }
        var tmp_0 = App$lambda_21($gamepadEnabled$delegate);
        sourceInformationMarkerStart($composer_0, -1644352389, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda_3($gamepadEnabled$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DiscordToggle('gamepad-enabled', 'Use PlayStation 2 Gamepad via the GameMaker Gamepad API', 'When enabled, Butterscotch will expose the PlayStation 2 controller as a compatible Gamepad via the GameMaker Gamepad API.', tmp_0, tmp0_group, $composer_0, 25014);
        ControllerMappings('Controller 1 Mappings', $controller1Mappings, $composer_0, 54);
        ControllerMappings('Controller 2 Mappings', $controller2Mappings, $composer_0, 54);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1929087669, true, App$lambda$lambda_4($filesystemMappings), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_49(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        FieldWrapper(tmp0, $composer_0, 6);
        StringSetTable('Disabled Objects', 'Object Name', $disabledObjects, $composer_0, 438);
        var checkmarkIcon = SVGIconManager_getInstance().fromRawHtml_2uw3rj_k$('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"><\/path><\/svg>');
        var eyeDropperIcon = SVGIconManager_getInstance().fromRawHtml_2uw3rj_k$('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L138.8,66.2a24,24,0,0,0-33.14.77l-5,5a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.68,13.68,0,0,0,36,219.3a15.92,15.92,0,0,0,17.71,3.35L71.23,215a39.89,39.89,0,0,0,37.06-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l5-5a24,24,0,0,0,.74-33.18l23.75-23.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.91L57,189.41a8,8,0,0,0,.25-5.75A23.88,23.88,0,0,1,63,159l51-51,33.94,34Z"><\/path><\/svg>');
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(169123934, true, App$lambda$lambda_5($m, checkmarkIcon, eyeDropperIcon, $ambientColor$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_50(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        FieldWrapper(tmp0_0, $composer_0, 6);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_1 = rememberComposableLambda(-515106371, true, App$lambda$lambda_6($bgAlpha$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (invalid_1 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_2 = ComposableLambda$invoke$ref_53(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_2);
          tmp_7 = value_2;
        } else {
          tmp_7 = it_2;
        }
        var tmp_8 = tmp_7;
        var tmp0_1 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        FieldWrapper(tmp0_1, $composer_0, 6);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_2 = rememberComposableLambda(-1199336676, true, App$lambda$lambda_7($m, checkmarkIcon, eyeDropperIcon, $bgColorTopLeft$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_4 = $composer_0;
        sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_4.changed_ga7h3f_k$(dispatchReceiver_2);
        // Inline function 'kotlin.let' call
        var it_3 = $composer_4.rememberedValue_4dg93v_k$();
        var tmp_9;
        if (invalid_2 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_3 = ComposableLambda$invoke$ref_54(dispatchReceiver_2);
          $composer_4.updateRememberedValue_l1wh71_k$(value_3);
          tmp_9 = value_3;
        } else {
          tmp_9 = it_3;
        }
        var tmp_10 = tmp_9;
        var tmp0_2 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        sourceInformationMarkerEnd($composer_4);
        FieldWrapper(tmp0_2, $composer_0, 6);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_3 = rememberComposableLambda(-1883566981, true, App$lambda$lambda_8($m, checkmarkIcon, eyeDropperIcon, $bgColorTopRight$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_5 = $composer_0;
        sourceInformationMarkerStart($composer_5, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = $composer_5.changed_ga7h3f_k$(dispatchReceiver_3);
        // Inline function 'kotlin.let' call
        var it_4 = $composer_5.rememberedValue_4dg93v_k$();
        var tmp_11;
        if (invalid_3 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_4 = ComposableLambda$invoke$ref_55(dispatchReceiver_3);
          $composer_5.updateRememberedValue_l1wh71_k$(value_4);
          tmp_11 = value_4;
        } else {
          tmp_11 = it_4;
        }
        var tmp_12 = tmp_11;
        var tmp0_3 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        sourceInformationMarkerEnd($composer_5);
        FieldWrapper(tmp0_3, $composer_0, 6);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_4 = rememberComposableLambda(1727170010, true, App$lambda$lambda_9($m, checkmarkIcon, eyeDropperIcon, $bgColorBottomLeft$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_6 = $composer_0;
        sourceInformationMarkerStart($composer_6, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_4 = $composer_6.changed_ga7h3f_k$(dispatchReceiver_4);
        // Inline function 'kotlin.let' call
        var it_5 = $composer_6.rememberedValue_4dg93v_k$();
        var tmp_13;
        if (invalid_4 || it_5 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_5 = ComposableLambda$invoke$ref_56(dispatchReceiver_4);
          $composer_6.updateRememberedValue_l1wh71_k$(value_5);
          tmp_13 = value_5;
        } else {
          tmp_13 = it_5;
        }
        var tmp_14 = tmp_13;
        var tmp0_4 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
        sourceInformationMarkerEnd($composer_6);
        FieldWrapper(tmp0_4, $composer_0, 6);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_5 = rememberComposableLambda(1042939705, true, App$lambda$lambda_10($m, checkmarkIcon, eyeDropperIcon, $bgColorBottomRight$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_7 = $composer_0;
        sourceInformationMarkerStart($composer_7, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_5 = $composer_7.changed_ga7h3f_k$(dispatchReceiver_5);
        // Inline function 'kotlin.let' call
        var it_6 = $composer_7.rememberedValue_4dg93v_k$();
        var tmp_15;
        if (invalid_5 || it_6 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_6 = ComposableLambda$invoke$ref_57(dispatchReceiver_5);
          $composer_7.updateRememberedValue_l1wh71_k$(value_6);
          tmp_15 = value_6;
        } else {
          tmp_15 = it_6;
        }
        var tmp_16 = tmp_15;
        var tmp0_5 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
        sourceInformationMarkerEnd($composer_7);
        FieldWrapper(tmp0_5, $composer_0, 6);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_6 = rememberComposableLambda(358709400, true, App$lambda$lambda_11($m, checkmarkIcon, eyeDropperIcon, $lightColor1$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_8 = $composer_0;
        sourceInformationMarkerStart($composer_8, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_6 = $composer_8.changed_ga7h3f_k$(dispatchReceiver_6);
        // Inline function 'kotlin.let' call
        var it_7 = $composer_8.rememberedValue_4dg93v_k$();
        var tmp_17;
        if (invalid_6 || it_7 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_7 = ComposableLambda$invoke$ref_59(dispatchReceiver_6);
          $composer_8.updateRememberedValue_l1wh71_k$(value_7);
          tmp_17 = value_7;
        } else {
          tmp_17 = it_7;
        }
        var tmp_18 = tmp_17;
        var tmp0_6 = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
        sourceInformationMarkerEnd($composer_8);
        FieldWrapper(tmp0_6, $composer_0, 6);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_7 = rememberComposableLambda(-325520905, true, App$lambda$lambda_12($m, checkmarkIcon, eyeDropperIcon, $lightColor2$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_9 = $composer_0;
        sourceInformationMarkerStart($composer_9, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_7 = $composer_9.changed_ga7h3f_k$(dispatchReceiver_7);
        // Inline function 'kotlin.let' call
        var it_8 = $composer_9.rememberedValue_4dg93v_k$();
        var tmp_19;
        if (invalid_7 || it_8 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_8 = ComposableLambda$invoke$ref_61(dispatchReceiver_7);
          $composer_9.updateRememberedValue_l1wh71_k$(value_8);
          tmp_19 = value_8;
        } else {
          tmp_19 = it_8;
        }
        var tmp_20 = tmp_19;
        var tmp0_7 = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
        sourceInformationMarkerEnd($composer_9);
        FieldWrapper(tmp0_7, $composer_0, 6);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_8 = rememberComposableLambda(-1009751210, true, App$lambda$lambda_13($m, checkmarkIcon, eyeDropperIcon, $lightColor3$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_10 = $composer_0;
        sourceInformationMarkerStart($composer_10, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_8 = $composer_10.changed_ga7h3f_k$(dispatchReceiver_8);
        // Inline function 'kotlin.let' call
        var it_9 = $composer_10.rememberedValue_4dg93v_k$();
        var tmp_21;
        if (invalid_8 || it_9 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_9 = ComposableLambda$invoke$ref_63(dispatchReceiver_8);
          $composer_10.updateRememberedValue_l1wh71_k$(value_9);
          tmp_21 = value_9;
        } else {
          tmp_21 = it_9;
        }
        var tmp_22 = tmp_21;
        var tmp0_8 = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
        sourceInformationMarkerEnd($composer_10);
        FieldWrapper(tmp0_8, $composer_0, 6);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_9 = rememberComposableLambda(-132460730, true, App$lambda$lambda_14($scope, $customIconBytes$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_11 = $composer_0;
        sourceInformationMarkerStart($composer_11, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_9 = $composer_11.changed_ga7h3f_k$(dispatchReceiver_9);
        // Inline function 'kotlin.let' call
        var it_10 = $composer_11.rememberedValue_4dg93v_k$();
        var tmp_23;
        if (invalid_9 || it_10 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_10 = ComposableLambda$invoke$ref_66(dispatchReceiver_9);
          $composer_11.updateRememberedValue_l1wh71_k$(value_10);
          tmp_23 = value_10;
        } else {
          tmp_23 = it_10;
        }
        var tmp_24 = tmp_23;
        var tmp0_9 = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
        sourceInformationMarkerEnd($composer_11);
        FieldWrapper(tmp0_9, $composer_0, 6);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_10 = rememberComposableLambda(-816691035, true, App$lambda$lambda_15($gameId$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_12 = $composer_0;
        sourceInformationMarkerStart($composer_12, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_10 = $composer_12.changed_ga7h3f_k$(dispatchReceiver_10);
        // Inline function 'kotlin.let' call
        var it_11 = $composer_12.rememberedValue_4dg93v_k$();
        var tmp_25;
        if (invalid_10 || it_11 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_11 = ComposableLambda$invoke$ref_67(dispatchReceiver_10);
          $composer_12.updateRememberedValue_l1wh71_k$(value_11);
          tmp_25 = value_11;
        } else {
          tmp_25 = it_11;
        }
        var tmp_26 = tmp_25;
        var tmp0_10 = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
        sourceInformationMarkerEnd($composer_12);
        FieldWrapper(tmp0_10, $composer_0, 6);
        var tmp_27 = App$lambda_65($lazyLoadRooms$delegate);
        sourceInformationMarkerStart($composer_0, -1643956199, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_12 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_28;
        if (false || it_12 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_12 = App$lambda$lambda_16($lazyLoadRooms$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_12);
          tmp_28 = value_12;
        } else {
          tmp_28 = it_12;
        }
        var tmp_29 = tmp_28;
        var tmp1_group = (tmp_29 == null ? true : !(tmp_29 == null)) ? tmp_29 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DiscordToggle('lazy-load-rooms', 'Lazy Load Rooms', 'When enabled, Butterscotch will load room objects/tiles/layers/etc when the game switches to the room, instead of keeping them always loaded in memory. Reduces memory usage, but slows down room switching.', tmp_27, tmp1_group, $composer_0, 25014);
        StringSetTable('Eagerly Loaded Rooms', 'Room Name', $eagerlyLoadedRooms, $composer_0, 438);
        var tmp_30 = App$lambda_63($debugOverlayEnabled$delegate);
        sourceInformationMarkerStart($composer_0, -1643940795, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_13 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_31;
        if (false || it_13 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_13 = App$lambda$lambda_17($debugOverlayEnabled$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_13);
          tmp_31 = value_13;
        } else {
          tmp_31 = it_13;
        }
        var tmp_32 = tmp_31;
        var tmp2_group = (tmp_32 == null ? true : !(tmp_32 == null)) ? tmp_32 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DiscordToggle('debug-overlay-enabled', 'Debug Overlay Enabled by Default', "When enabled, Butterscotch will render the debug overlay by default. You can toggle the debug overlay by pressing the key that's bound to F12.", tmp_30, tmp2_group, $composer_0, 25014);
        StringSetTable('Force 4bpp Images (regex, must match the full image name, example: spr_test.*)', 'Image Name Regex', $force4bppPatterns, $composer_0, 438);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_11 = rememberComposableLambda(-1500921340, true, App$lambda$lambda_18($atlasSizeText$delegate, $atlasSize$delegate, $eeAtlasCacheBytesText$delegate, $eeAtlasCacheBytes$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_13 = $composer_0;
        sourceInformationMarkerStart($composer_13, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_11 = $composer_13.changed_ga7h3f_k$(dispatchReceiver_11);
        // Inline function 'kotlin.let' call
        var it_14 = $composer_13.rememberedValue_4dg93v_k$();
        var tmp_33;
        if (invalid_11 || it_14 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_14 = ComposableLambda$invoke$ref_68(dispatchReceiver_11);
          $composer_13.updateRememberedValue_l1wh71_k$(value_14);
          tmp_33 = value_14;
        } else {
          tmp_33 = it_14;
        }
        var tmp_34 = tmp_33;
        var tmp0_11 = (tmp_34 == null ? true : !(tmp_34 == null)) ? tmp_34 : THROW_CCE();
        sourceInformationMarkerEnd($composer_13);
        FieldWrapper(tmp0_11, $composer_0, 6);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_12 = rememberComposableLambda(2109815651, true, App$lambda$lambda_19($scope, $customElfBytes$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_14 = $composer_0;
        sourceInformationMarkerStart($composer_14, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_12 = $composer_14.changed_ga7h3f_k$(dispatchReceiver_12);
        // Inline function 'kotlin.let' call
        var it_15 = $composer_14.rememberedValue_4dg93v_k$();
        var tmp_35;
        if (invalid_12 || it_15 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_15 = ComposableLambda$invoke$ref_71(dispatchReceiver_12);
          $composer_14.updateRememberedValue_l1wh71_k$(value_15);
          tmp_35 = value_15;
        } else {
          tmp_35 = it_15;
        }
        var tmp_36 = tmp_35;
        var tmp0_12 = (tmp_36 == null ? true : !(tmp_36 == null)) ? tmp_36 : THROW_CCE();
        sourceInformationMarkerEnd($composer_14);
        FieldWrapper(tmp0_12, $composer_0, 6);
        var tmp_37;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_37 = Unit_getInstance();
        }
        tmp = tmp_37;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_72(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function App$lambda_93($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['buttons-wrapper']);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$slambda$lambda($logMessages) {
    return function (event) {
      var tmp;
      if (event.type === 's2cProgress') {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var progress = event;
        println(progress.message);
        $logMessages._v.add_wl2rvy_k$(progress.message);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$slambda($workerClient, $bytes, $force4bppPatterns, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $atlasSize$delegate, $logMessages, $filesystemMappings, $parsedDataWin$delegate, $status$delegate, $loadedFileBytes$delegate, $customElfBytes$delegate, $customIconBytes$delegate, $gameId$delegate, $loadedSourceFiles$delegate, $debugOverlayEnabled$delegate, $gamepadEnabled$delegate, $controller1Mappings, $controller2Mappings, $bgAlpha$delegate, $bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate, $lightColor1$delegate, $lightColor2$delegate, $lightColor3$delegate, $ambientColor$delegate, $disabledObjects, $lazyLoadRooms$delegate, $eagerlyLoadedRooms, $eeAtlasCacheBytes$delegate, $isoFileName$delegate, $downloadUrl$delegate, $startTime$delegate, $processing$delegate, resultContinuation) {
    this.$workerClient_1 = $workerClient;
    this.$bytes_1 = $bytes;
    this.$force4bppPatterns_1 = $force4bppPatterns;
    this.$loadedExternalAudio$delegate_1 = $loadedExternalAudio$delegate;
    this.$loadedAudioGroupFiles$delegate_1 = $loadedAudioGroupFiles$delegate;
    this.$loadedMusFiles$delegate_1 = $loadedMusFiles$delegate;
    this.$atlasSize$delegate_1 = $atlasSize$delegate;
    this.$logMessages_1 = $logMessages;
    this.$filesystemMappings_1 = $filesystemMappings;
    this.$parsedDataWin$delegate_1 = $parsedDataWin$delegate;
    this.$status$delegate_1 = $status$delegate;
    this.$loadedFileBytes$delegate_1 = $loadedFileBytes$delegate;
    this.$customElfBytes$delegate_1 = $customElfBytes$delegate;
    this.$customIconBytes$delegate_1 = $customIconBytes$delegate;
    this.$gameId$delegate_1 = $gameId$delegate;
    this.$loadedSourceFiles$delegate_1 = $loadedSourceFiles$delegate;
    this.$debugOverlayEnabled$delegate_1 = $debugOverlayEnabled$delegate;
    this.$gamepadEnabled$delegate_1 = $gamepadEnabled$delegate;
    this.$controller1Mappings_1 = $controller1Mappings;
    this.$controller2Mappings_1 = $controller2Mappings;
    this.$bgAlpha$delegate_1 = $bgAlpha$delegate;
    this.$bgColorTopLeft$delegate_1 = $bgColorTopLeft$delegate;
    this.$bgColorTopRight$delegate_1 = $bgColorTopRight$delegate;
    this.$bgColorBottomLeft$delegate_1 = $bgColorBottomLeft$delegate;
    this.$bgColorBottomRight$delegate_1 = $bgColorBottomRight$delegate;
    this.$lightDir1X$delegate_1 = $lightDir1X$delegate;
    this.$lightDir1Y$delegate_1 = $lightDir1Y$delegate;
    this.$lightDir1Z$delegate_1 = $lightDir1Z$delegate;
    this.$lightDir2X$delegate_1 = $lightDir2X$delegate;
    this.$lightDir2Y$delegate_1 = $lightDir2Y$delegate;
    this.$lightDir2Z$delegate_1 = $lightDir2Z$delegate;
    this.$lightDir3X$delegate_1 = $lightDir3X$delegate;
    this.$lightDir3Y$delegate_1 = $lightDir3Y$delegate;
    this.$lightDir3Z$delegate_1 = $lightDir3Z$delegate;
    this.$lightColor1$delegate_1 = $lightColor1$delegate;
    this.$lightColor2$delegate_1 = $lightColor2$delegate;
    this.$lightColor3$delegate_1 = $lightColor3$delegate;
    this.$ambientColor$delegate_1 = $ambientColor$delegate;
    this.$disabledObjects_1 = $disabledObjects;
    this.$lazyLoadRooms$delegate_1 = $lazyLoadRooms$delegate;
    this.$eagerlyLoadedRooms_1 = $eagerlyLoadedRooms;
    this.$eeAtlasCacheBytes$delegate_1 = $eeAtlasCacheBytes$delegate;
    this.$isoFileName$delegate_1 = $isoFileName$delegate;
    this.$downloadUrl$delegate_1 = $downloadUrl$delegate;
    this.$startTime$delegate_1 = $startTime$delegate;
    this.$processing$delegate_1 = $processing$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(App$lambda$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(App$lambda$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(App$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = c2sProcessDataWin(this.$bytes_1, App$lambda_11(this.$loadedExternalAudio$delegate_1), App$lambda_13(this.$loadedAudioGroupFiles$delegate_1), App$lambda_15(this.$loadedMusFiles$delegate_1), toList_0(this.$force4bppPatterns_1), App$lambda_67(this.$atlasSize$delegate_1));
            suspendResult = this.$workerClient_1.sendPacket_rg05tu_k$(tmp_0, App$lambda$lambda$lambda$slambda$lambda(this.$logMessages_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            var tmp0_subject = response.type;
            if (tmp0_subject === 's2cProcessResult') {
              this.set_state_rjd8d0_k$(2);
              suspendResult = App$handleProcessingResult(this.$filesystemMappings_1, this.$logMessages_1, this.$parsedDataWin$delegate_1, this.$status$delegate_1, this.$loadedFileBytes$delegate_1, this.$customElfBytes$delegate_1, this.$customIconBytes$delegate_1, this.$gameId$delegate_1, this.$loadedSourceFiles$delegate_1, this.$debugOverlayEnabled$delegate_1, this.$gamepadEnabled$delegate_1, this.$controller1Mappings_1, this.$controller2Mappings_1, this.$bgAlpha$delegate_1, this.$bgColorTopLeft$delegate_1, this.$bgColorTopRight$delegate_1, this.$bgColorBottomLeft$delegate_1, this.$bgColorBottomRight$delegate_1, this.$lightDir1X$delegate_1, this.$lightDir1Y$delegate_1, this.$lightDir1Z$delegate_1, this.$lightDir2X$delegate_1, this.$lightDir2Y$delegate_1, this.$lightDir2Z$delegate_1, this.$lightDir3X$delegate_1, this.$lightDir3Y$delegate_1, this.$lightDir3Z$delegate_1, this.$lightColor1$delegate_1, this.$lightColor2$delegate_1, this.$lightColor3$delegate_1, this.$ambientColor$delegate_1, this.$disabledObjects_1, this.$lazyLoadRooms$delegate_1, this.$eagerlyLoadedRooms_1, this.$eeAtlasCacheBytes$delegate_1, this.$isoFileName$delegate_1, this.$downloadUrl$delegate_1, this.$startTime$delegate_1, this.$processing$delegate_1, response, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (tmp0_subject === 's2cError') {
                var err = response;
                App$lambda_0(this.$status$delegate_1, 'Error: ' + err.message);
                App$lambda_8(this.$processing$delegate_1, false);
                this.set_state_rjd8d0_k$(3);
                continue $sm;
              } else {
                App$lambda_0(this.$status$delegate_1, 'Error: unexpected response ' + response.type);
                App$lambda_8(this.$processing$delegate_1, false);
                this.set_state_rjd8d0_k$(3);
                continue $sm;
              }
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              App$lambda_0(this.$status$delegate_1, 'Error: ' + e.message);
              App$lambda_8(this.$processing$delegate_1, false);
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
          case 6:
            this.set_exceptionState_fex74n_k$(5);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(App$lambda$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new App$lambda$lambda$lambda$slambda(this.$workerClient_1, this.$bytes_1, this.$force4bppPatterns_1, this.$loadedExternalAudio$delegate_1, this.$loadedAudioGroupFiles$delegate_1, this.$loadedMusFiles$delegate_1, this.$atlasSize$delegate_1, this.$logMessages_1, this.$filesystemMappings_1, this.$parsedDataWin$delegate_1, this.$status$delegate_1, this.$loadedFileBytes$delegate_1, this.$customElfBytes$delegate_1, this.$customIconBytes$delegate_1, this.$gameId$delegate_1, this.$loadedSourceFiles$delegate_1, this.$debugOverlayEnabled$delegate_1, this.$gamepadEnabled$delegate_1, this.$controller1Mappings_1, this.$controller2Mappings_1, this.$bgAlpha$delegate_1, this.$bgColorTopLeft$delegate_1, this.$bgColorTopRight$delegate_1, this.$bgColorBottomLeft$delegate_1, this.$bgColorBottomRight$delegate_1, this.$lightDir1X$delegate_1, this.$lightDir1Y$delegate_1, this.$lightDir1Z$delegate_1, this.$lightDir2X$delegate_1, this.$lightDir2Y$delegate_1, this.$lightDir2Z$delegate_1, this.$lightDir3X$delegate_1, this.$lightDir3Y$delegate_1, this.$lightDir3Z$delegate_1, this.$lightColor1$delegate_1, this.$lightColor2$delegate_1, this.$lightColor3$delegate_1, this.$ambientColor$delegate_1, this.$disabledObjects_1, this.$lazyLoadRooms$delegate_1, this.$eagerlyLoadedRooms_1, this.$eeAtlasCacheBytes$delegate_1, this.$isoFileName$delegate_1, this.$downloadUrl$delegate_1, this.$startTime$delegate_1, this.$processing$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(App$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function App$lambda$lambda$lambda$slambda_0($workerClient, $bytes, $force4bppPatterns, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $atlasSize$delegate, $logMessages, $filesystemMappings, $parsedDataWin$delegate, $status$delegate, $loadedFileBytes$delegate, $customElfBytes$delegate, $customIconBytes$delegate, $gameId$delegate, $loadedSourceFiles$delegate, $debugOverlayEnabled$delegate, $gamepadEnabled$delegate, $controller1Mappings, $controller2Mappings, $bgAlpha$delegate, $bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate, $lightColor1$delegate, $lightColor2$delegate, $lightColor3$delegate, $ambientColor$delegate, $disabledObjects, $lazyLoadRooms$delegate, $eagerlyLoadedRooms, $eeAtlasCacheBytes$delegate, $isoFileName$delegate, $downloadUrl$delegate, $startTime$delegate, $processing$delegate, resultContinuation) {
    var i = new App$lambda$lambda$lambda$slambda($workerClient, $bytes, $force4bppPatterns, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $atlasSize$delegate, $logMessages, $filesystemMappings, $parsedDataWin$delegate, $status$delegate, $loadedFileBytes$delegate, $customElfBytes$delegate, $customIconBytes$delegate, $gameId$delegate, $loadedSourceFiles$delegate, $debugOverlayEnabled$delegate, $gamepadEnabled$delegate, $controller1Mappings, $controller2Mappings, $bgAlpha$delegate, $bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate, $lightColor1$delegate, $lightColor2$delegate, $lightColor3$delegate, $ambientColor$delegate, $disabledObjects, $lazyLoadRooms$delegate, $eagerlyLoadedRooms, $eeAtlasCacheBytes$delegate, $isoFileName$delegate, $downloadUrl$delegate, $startTime$delegate, $processing$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function App$lambda$lambda$lambda_27($logMessages, $scope, $loadedFileBytes$delegate, $processing$delegate, $startTime$delegate, $status$delegate, $workerClient, $force4bppPatterns, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $atlasSize$delegate, $filesystemMappings, $parsedDataWin$delegate, $customElfBytes$delegate, $customIconBytes$delegate, $gameId$delegate, $loadedSourceFiles$delegate, $debugOverlayEnabled$delegate, $gamepadEnabled$delegate, $controller1Mappings, $controller2Mappings, $bgAlpha$delegate, $bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate, $lightColor1$delegate, $lightColor2$delegate, $lightColor3$delegate, $ambientColor$delegate, $disabledObjects, $lazyLoadRooms$delegate, $eagerlyLoadedRooms, $eeAtlasCacheBytes$delegate, $isoFileName$delegate, $downloadUrl$delegate) {
    return function (it) {
      var tmp0_elvis_lhs = App$lambda_9($loadedFileBytes$delegate);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Unit_getInstance();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var bytes = tmp;
      App$lambda_8($processing$delegate, true);
      App$lambda_80($startTime$delegate, Date.now());
      $logMessages._v.clear_j9egeb_k$();
      App$lambda_0($status$delegate, 'Processing...');
      launch($scope, VOID, VOID, App$lambda$lambda$lambda$slambda_0($workerClient, bytes, $force4bppPatterns, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $atlasSize$delegate, $logMessages, $filesystemMappings, $parsedDataWin$delegate, $status$delegate, $loadedFileBytes$delegate, $customElfBytes$delegate, $customIconBytes$delegate, $gameId$delegate, $loadedSourceFiles$delegate, $debugOverlayEnabled$delegate, $gamepadEnabled$delegate, $controller1Mappings, $controller2Mappings, $bgAlpha$delegate, $bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate, $lightColor1$delegate, $lightColor2$delegate, $lightColor3$delegate, $ambientColor$delegate, $disabledObjects, $lazyLoadRooms$delegate, $eagerlyLoadedRooms, $eeAtlasCacheBytes$delegate, $isoFileName$delegate, $downloadUrl$delegate, $startTime$delegate, $processing$delegate, null));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_20($logMessages, $scope, $loadedFileBytes$delegate, $processing$delegate, $startTime$delegate, $status$delegate, $workerClient, $force4bppPatterns, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $atlasSize$delegate, $filesystemMappings, $parsedDataWin$delegate, $customElfBytes$delegate, $customIconBytes$delegate, $gameId$delegate, $loadedSourceFiles$delegate, $debugOverlayEnabled$delegate, $gamepadEnabled$delegate, $controller1Mappings, $controller2Mappings, $bgAlpha$delegate, $bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate, $lightColor1$delegate, $lightColor2$delegate, $lightColor3$delegate, $ambientColor$delegate, $disabledObjects, $lazyLoadRooms$delegate, $eagerlyLoadedRooms, $eeAtlasCacheBytes$delegate, $isoFileName$delegate, $downloadUrl$delegate) {
    return function ($this$Button) {
      $this$Button.classes_ayghm2_k$(['discord-button', 'primary']);
      $this$Button.onClick_q9cds6_k$(App$lambda$lambda$lambda_27($logMessages, $scope, $loadedFileBytes$delegate, $processing$delegate, $startTime$delegate, $status$delegate, $workerClient, $force4bppPatterns, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $atlasSize$delegate, $filesystemMappings, $parsedDataWin$delegate, $customElfBytes$delegate, $customIconBytes$delegate, $gameId$delegate, $loadedSourceFiles$delegate, $debugOverlayEnabled$delegate, $gamepadEnabled$delegate, $controller1Mappings, $controller2Mappings, $bgAlpha$delegate, $bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate, $lightColor1$delegate, $lightColor2$delegate, $lightColor3$delegate, $ambientColor$delegate, $disabledObjects, $lazyLoadRooms$delegate, $eagerlyLoadedRooms, $eeAtlasCacheBytes$delegate, $isoFileName$delegate, $downloadUrl$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda_94($logMessages, $scope, $loadedFileBytes$delegate, $processing$delegate, $startTime$delegate, $status$delegate, $workerClient, $force4bppPatterns, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $atlasSize$delegate, $filesystemMappings, $parsedDataWin$delegate, $customElfBytes$delegate, $customIconBytes$delegate, $gameId$delegate, $loadedSourceFiles$delegate, $debugOverlayEnabled$delegate, $gamepadEnabled$delegate, $controller1Mappings, $controller2Mappings, $bgAlpha$delegate, $bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate, $lightColor1$delegate, $lightColor2$delegate, $lightColor3$delegate, $ambientColor$delegate, $disabledObjects, $lazyLoadRooms$delegate, $eagerlyLoadedRooms, $eeAtlasCacheBytes$delegate, $isoFileName$delegate, $downloadUrl$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1360@59215L2368:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(2037239011, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous> (App.kt:1360)');
      }
      Button(App$lambda$lambda_20($logMessages, $scope, $loadedFileBytes$delegate, $processing$delegate, $startTime$delegate, $status$delegate, $workerClient, $force4bppPatterns, $loadedExternalAudio$delegate, $loadedAudioGroupFiles$delegate, $loadedMusFiles$delegate, $atlasSize$delegate, $filesystemMappings, $parsedDataWin$delegate, $customElfBytes$delegate, $customIconBytes$delegate, $gameId$delegate, $loadedSourceFiles$delegate, $debugOverlayEnabled$delegate, $gamepadEnabled$delegate, $controller1Mappings, $controller2Mappings, $bgAlpha$delegate, $bgColorTopLeft$delegate, $bgColorTopRight$delegate, $bgColorBottomLeft$delegate, $bgColorBottomRight$delegate, $lightDir1X$delegate, $lightDir1Y$delegate, $lightDir1Z$delegate, $lightDir2X$delegate, $lightDir2Y$delegate, $lightDir2Z$delegate, $lightDir3X$delegate, $lightDir3Y$delegate, $lightDir3Z$delegate, $lightColor1$delegate, $lightColor2$delegate, $lightColor3$delegate, $ambientColor$delegate, $disabledObjects, $lazyLoadRooms$delegate, $eagerlyLoadedRooms, $eeAtlasCacheBytes$delegate, $isoFileName$delegate, $downloadUrl$delegate), ComposableSingletons$AppKt_getInstance().lambda$1258793705__1, $composer_0, 48, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_73(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda_95($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['progress-log']);
    return Unit_getInstance();
  }
  function App$lambda$lambda_21($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['log-entry']);
    return Unit_getInstance();
  }
  function App$lambda$lambda_22($msg) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1417@61787L9:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(644949134, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous>.<anonymous> (App.kt:1417)');
      }
      Text($msg, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_74(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda_96($logMessages) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C*1417@61759L24,1417@61785L13,1417@61755L43:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-1778827347, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous> (App.kt:1416)');
      }
      var _iterator__ex2g4s = $logMessages._v.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var msg = _iterator__ex2g4s.next_20eer_k$();
        sourceInformationMarkerStart($composer_0, -56094683, 'CC(remember):App.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = App$lambda$lambda_21;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(644949134, true, App$lambda$lambda_22(msg), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_74(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp0_group, tmp0, $composer_0, 54, 0);
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_75(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda_97($this$Div) {
    _init_properties_App_kt__fk8usv();
    $this$Div.classes_ayghm2_k$(['buttons-wrapper']);
    return Unit_getInstance();
  }
  function App$lambda$lambda_23($isoFileName$delegate) {
    return function ($this$A) {
      $this$A.attr_w68641_k$('download', App$lambda_5($isoFileName$delegate));
      $this$A.classes_ayghm2_k$(['discord-button', 'success']);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_28($logMessages, $downloadUrl$delegate) {
    return function (it) {
      App$lambda_4($downloadUrl$delegate, null);
      $logMessages._v.clear_j9egeb_k$();
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_24($logMessages, $downloadUrl$delegate) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(App$lambda$lambda$lambda_28($logMessages, $downloadUrl$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda_98($downloadUrl$delegate, $isoFileName$delegate, $logMessages) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1425@61972L114,1425@61942L198,1432@62154L334:App.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(1232228782, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.App.<anonymous> (App.kt:1425)');
      }
      var tmp = App$lambda_3($downloadUrl$delegate);
      sourceInformationMarkerStart($composer_0, -1239112672, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = App$lambda$lambda_23($isoFileName$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      A(tmp, tmp0_group, ComposableSingletons$AppKt_getInstance().lambda$_203076196_z1o4qs_1, $composer_0, 432, 0);
      var tmp_2 = DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT_getInstance();
      DiscordButton(tmp_2, App$lambda$lambda_24($logMessages, $downloadUrl$delegate), ComposableSingletons$AppKt_getInstance().lambda$_980776967_fo0fnp_1, $composer_0, 390, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_76(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function App$lambda_99($m, $$changed) {
    return function ($composer, $force) {
      App($m, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function readFileAsBytes$lambda($reader, $cont) {
    return function () {
      var tmp = $reader.result;
      var arrayBuffer = tmp instanceof ArrayBuffer ? tmp : THROW_CCE();
      var uint8Array = new Uint8Array(arrayBuffer);
      var tmp_0 = uint8Array.length;
      var length = typeof tmp_0 === 'number' ? tmp_0 : THROW_CCE();
      var bytes = new Int8Array(length);
      var inductionVariable = 0;
      var tmp_1;
      if (inductionVariable < length) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          bytes[i] = toByte(uint8Array[i]);
        }
         while (inductionVariable < length);
        tmp_1 = Unit_getInstance();
      }
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_1();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(bytes);
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readFileAsBytes$lambda_0($cont) {
    return function () {
      var tmp0 = $cont;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var exception = RuntimeException_init_$Create$('Failed to read file');
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance_1();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function $fetchResourceBytesCOROUTINE$(path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.path_1 = path;
  }
  protoOf($fetchResourceBytesCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = fetch(this.path_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var httpResult = suspendResult;
            var status = httpResult.status;
            if (200 > status || status >= 300) {
              var message = 'Failed to fetch ' + this.path_1 + ': HTTP ' + status;
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var this_0 = httpResult.arrayBuffer();
            this.set_state_rjd8d0_k$(2);
            suspendResult = awaitPromiseLike(this_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var arrayBuffer = suspendResult;
            var uint8Array = new Uint8Array(arrayBuffer);
            var length = uint8Array.length;
            var bytes = new Int8Array(length);
            var inductionVariable = 0;
            if (inductionVariable < length)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                bytes[i] = toByte(uint8Array[i]);
              }
               while (inductionVariable < length);
            return bytes;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $App$handleProcessingResultCOROUTINE$(filesystemMappings, logMessages, parsedDataWin$delegate, status$delegate, loadedFileBytes$delegate, customElfBytes$delegate, customIconBytes$delegate, gameId$delegate, loadedSourceFiles$delegate, debugOverlayEnabled$delegate, gamepadEnabled$delegate, controller1Mappings, controller2Mappings, bgAlpha$delegate, bgColorTopLeft$delegate, bgColorTopRight$delegate, bgColorBottomLeft$delegate, bgColorBottomRight$delegate, lightDir1X$delegate, lightDir1Y$delegate, lightDir1Z$delegate, lightDir2X$delegate, lightDir2Y$delegate, lightDir2Z$delegate, lightDir3X$delegate, lightDir3Y$delegate, lightDir3Z$delegate, lightColor1$delegate, lightColor2$delegate, lightColor3$delegate, ambientColor$delegate, disabledObjects, lazyLoadRooms$delegate, eagerlyLoadedRooms, eeAtlasCacheBytes$delegate, isoFileName$delegate, downloadUrl$delegate, startTime$delegate, processing$delegate, result, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.filesystemMappings_1 = filesystemMappings;
    this.logMessages_1 = logMessages;
    this.parsedDataWin$delegate_1 = parsedDataWin$delegate;
    this.status$delegate_1 = status$delegate;
    this.loadedFileBytes$delegate_1 = loadedFileBytes$delegate;
    this.customElfBytes$delegate_1 = customElfBytes$delegate;
    this.customIconBytes$delegate_1 = customIconBytes$delegate;
    this.gameId$delegate_1 = gameId$delegate;
    this.loadedSourceFiles$delegate_1 = loadedSourceFiles$delegate;
    this.debugOverlayEnabled$delegate_1 = debugOverlayEnabled$delegate;
    this.gamepadEnabled$delegate_1 = gamepadEnabled$delegate;
    this.controller1Mappings_1 = controller1Mappings;
    this.controller2Mappings_1 = controller2Mappings;
    this.bgAlpha$delegate_1 = bgAlpha$delegate;
    this.bgColorTopLeft$delegate_1 = bgColorTopLeft$delegate;
    this.bgColorTopRight$delegate_1 = bgColorTopRight$delegate;
    this.bgColorBottomLeft$delegate_1 = bgColorBottomLeft$delegate;
    this.bgColorBottomRight$delegate_1 = bgColorBottomRight$delegate;
    this.lightDir1X$delegate_1 = lightDir1X$delegate;
    this.lightDir1Y$delegate_1 = lightDir1Y$delegate;
    this.lightDir1Z$delegate_1 = lightDir1Z$delegate;
    this.lightDir2X$delegate_1 = lightDir2X$delegate;
    this.lightDir2Y$delegate_1 = lightDir2Y$delegate;
    this.lightDir2Z$delegate_1 = lightDir2Z$delegate;
    this.lightDir3X$delegate_1 = lightDir3X$delegate;
    this.lightDir3Y$delegate_1 = lightDir3Y$delegate;
    this.lightDir3Z$delegate_1 = lightDir3Z$delegate;
    this.lightColor1$delegate_1 = lightColor1$delegate;
    this.lightColor2$delegate_1 = lightColor2$delegate;
    this.lightColor3$delegate_1 = lightColor3$delegate;
    this.ambientColor$delegate_1 = ambientColor$delegate;
    this.disabledObjects_1 = disabledObjects;
    this.lazyLoadRooms$delegate_1 = lazyLoadRooms$delegate;
    this.eagerlyLoadedRooms_1 = eagerlyLoadedRooms;
    this.eeAtlasCacheBytes$delegate_1 = eeAtlasCacheBytes$delegate;
    this.isoFileName$delegate_1 = isoFileName$delegate;
    this.downloadUrl$delegate_1 = downloadUrl$delegate;
    this.startTime$delegate_1 = startTime$delegate;
    this.processing$delegate_1 = processing$delegate;
    this.result_2 = result;
  }
  protoOf($App$handleProcessingResultCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            this.parsedDataWin12__1 = ensureNotNull(App$lambda_1(this.parsedDataWin$delegate_1));
            this.tmp$ret$00__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(7);
            this.set_exceptionState_fex74n_k$(6);
            App$lambda_0(this.status$delegate_1, 'Creating ISO...');
            this.gameName1__1 = this.result_2.gameName;
            var tmp_0 = this;
            tmp_0.clut4Bin7__1 = this.result_2.clut4Bin;
            var tmp_1 = this;
            tmp_1.clut8Bin6__1 = this.result_2.clut8Bin;
            var tmp_2 = this;
            tmp_2.texturesBin5__1 = this.result_2.texturesBin;
            var tmp_3 = this;
            tmp_3.atlasBin4__1 = this.result_2.atlasBin;
            var tmp_4 = this;
            tmp_4.soundBnkBin3__1 = this.result_2.soundBnkBin;
            var tmp_5 = this;
            tmp_5.soundsBin2__1 = this.result_2.soundsBin;
            this.dataWinBytes8__1 = ensureNotNull(App$lambda_9(this.loadedFileBytes$delegate_1));
            switch (this.parsedDataWin12__1.get_gen8_womkoh_k$().get_bytecodeVersion_lhva9y_k$()) {
              case 17:
                var validBytecodeVersion = 17;
                break;
              case 16:
              case 15:
                validBytecodeVersion = 16;
                break;
              case 13:
              case 14:
                validBytecodeVersion = 14;
                break;
              default:
                validBytecodeVersion = 16;
                break;
            }

            var tmp1_elvis_lhs = App$lambda_25(this.customElfBytes$delegate_1);
            if (tmp1_elvis_lhs == null) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = fetchResourceBytes('/assets/ps2/butterscotch-bc' + validBytecodeVersion + '.elf?v=' + Date.now(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT11__1 = tmp1_elvis_lhs;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 2:
            this.WHEN_RESULT11__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.elfBytes9__1 = this.WHEN_RESULT11__1;
            var tmp2_elvis_lhs = App$lambda_23(this.customIconBytes$delegate_1);
            if (tmp2_elvis_lhs == null) {
              this.set_state_rjd8d0_k$(4);
              suspendResult = fetchResourceBytes('/assets/ps2/ICON.ICO?v=' + Date.now(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT10__1 = tmp2_elvis_lhs;
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

          case 4:
            this.WHEN_RESULT10__1 = suspendResult;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            var iconBytes = this.WHEN_RESULT10__1;
            var this_0 = App$lambda_75(this.gameId$delegate_1);
            var destination = ArrayList_init_$Create$(charSequenceLength(this_0));
            var inductionVariable = 0;
            while (inductionVariable < charSequenceLength(this_0)) {
              var item = charSequenceGet(this_0, inductionVariable);
              inductionVariable = inductionVariable + 1 | 0;
              destination.add_utx5q5_k$(new Char(item === _Char___init__impl__6a9atx(95) ? _Char___init__impl__6a9atx(46) : item === _Char___init__impl__6a9atx(46) ? _Char___init__impl__6a9atx(95) : item));
            }

            var fileSystemGameId = joinToString(destination, '');
            var systemCnf = 'BOOT2 = cdrom0:\\' + fileSystemGameId + ';1\nVER = 1.00\nVMODE = NTSC\n';
            var this_1 = this.gameName1__1;
            var iso = new Iso9660Creator(take(this_1.toUpperCase(), 32), 'PLAYSTATION');
            var tmp0 = this.filesystemMappings_1;
            var destination_0 = LinkedHashMap_init_$Create$();
            var _iterator__ex2g4s = tmp0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
              var element = _iterator__ex2g4s.next_20eer_k$();
              if (startsWith(element.get_value_j01efc_k$(), '$BOOT:')) {
                destination_0.put_4fpzoq_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
              }
            }

            var destination_1 = ArrayList_init_$Create$_0();
            var _iterator__ex2g4s_0 = destination_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
              var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
              var sourceFile = element_0.get_key_18j28a_k$();
              var targetPath = element_0.get_value_j01efc_k$();
              var isoFileName = removePrefix(targetPath, '$BOOT:');
              var fileBytes = App$lambda_17(this.loadedSourceFiles$delegate_1).get_wei43m_k$(sourceFile);
              var tmp_6;
              if (!(fileBytes == null)) {
                tmp_6 = new IsoFile(isoFileName, fileBytes);
              } else {
                this.logMessages_1._v.add_wl2rvy_k$('Warning: Source file "' + sourceFile + '" not found in folder, skipping $BOOT mapping');
                tmp_6 = null;
              }
              var tmp0_safe_receiver = tmp_6;
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination_1.add_utx5q5_k$(tmp0_safe_receiver);
              }
            }

            var bootFiles = destination_1;
            var tmp_7 = new IsoFile('SYSTEM.CNF', encodeToByteArray(systemCnf));
            var tmp_8 = new IsoFile(fileSystemGameId, this.elfBytes9__1);
            var tmp_9 = new IsoFile('DATA.WIN', this.dataWinBytes8__1);
            var tmp_10 = new IsoFile('CLUT4.BIN', this.clut4Bin7__1);
            var tmp_11 = new IsoFile('CLUT8.BIN', this.clut8Bin6__1);
            var tmp_12 = new IsoFile('TEXTURES.BIN', this.texturesBin5__1);
            var tmp_13 = new IsoFile('ATLAS.BIN', this.atlasBin4__1);
            var tmp_14 = new IsoFile('SOUNDBNK.BIN', this.soundBnkBin3__1);
            var tmp_15 = new IsoFile('SOUNDS.BIN', this.soundsBin2__1);
            var builder = new JsonObjectBuilder();
            put(builder, 'debugOverlayEnabled', App$lambda_63(this.debugOverlayEnabled$delegate_1));
            putJsonObject(builder, 'fileSystem', App$handleProcessingResult$lambda(this.filesystemMappings_1));
            putJsonObject(builder, 'gamepad', App$handleProcessingResult$lambda_0(this.gamepadEnabled$delegate_1));
            putJsonObject(builder, 'controller1Mappings', App$handleProcessingResult$lambda_1(this.controller1Mappings_1));
            putJsonObject(builder, 'controller2Mappings', App$handleProcessingResult$lambda_2(this.controller2Mappings_1));
            putJsonObject(builder, 'saveIcon', App$handleProcessingResult$lambda_3(this.bgAlpha$delegate_1, this.bgColorTopLeft$delegate_1, this.bgColorTopRight$delegate_1, this.bgColorBottomLeft$delegate_1, this.bgColorBottomRight$delegate_1, this.lightDir1X$delegate_1, this.lightDir1Y$delegate_1, this.lightDir1Z$delegate_1, this.lightDir2X$delegate_1, this.lightDir2Y$delegate_1, this.lightDir2Z$delegate_1, this.lightDir3X$delegate_1, this.lightDir3Y$delegate_1, this.lightDir3Z$delegate_1, this.lightColor1$delegate_1, this.lightColor2$delegate_1, this.lightColor3$delegate_1, this.ambientColor$delegate_1));
            putJsonArray(builder, 'disabledObjects', App$handleProcessingResult$lambda_4(this.disabledObjects_1));
            put(builder, 'lazyLoadRooms', App$lambda_65(this.lazyLoadRooms$delegate_1));
            putJsonArray(builder, 'eagerlyLoadedRooms', App$handleProcessingResult$lambda_5(this.eagerlyLoadedRooms_1));
            put_0(builder, 'eeAtlasCacheBytes', App$lambda_71(this.eeAtlasCacheBytes$delegate_1));
            var isoBytes = iso.create_8dkvdm_k$(plus(listOf([tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, new IsoFile('CONFIG.JSN', encodeToByteArray(builder.build_bkh6qh_k$().toString())), new IsoFile('ICON.ICO', iconBytes)]), bootFiles));
            App$lambda_6(this.isoFileName$delegate_1, this.gameName1__1 + '.iso');
            var this_2 = [isoBytes];
            var type = 'application/octet-stream';
            var blob = new Blob(this_2, {type: type});
            App$lambda_4(this.downloadUrl$delegate_1, URL.createObjectURL(blob));
            App$lambda_0(this.status$delegate_1, 'Done! Took ' + (Date.now() - App$lambda_79(this.startTime$delegate_1)) + 'ms');
            var tmp_16 = this;
            plausible('Generated PS2 ISO');
            tmp_16.tmp$ret$00__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(9);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(7);
            var tmp_17 = this.get_exception_x0n6w6_k$();
            if (tmp_17 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_18 = this;
              App$lambda_0(this.status$delegate_1, 'Error creating ISO: ' + e.message);
              tmp_18.tmp$ret$00__1 = this.logMessages_1._v.add_wl2rvy_k$('Error: ' + stackTraceToString(e));
              this.set_exceptionState_fex74n_k$(8);
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var t = this.get_exception_x0n6w6_k$();
            App$lambda_8(this.processing$delegate_1, false);
            throw t;
          case 8:
            throw this.get_exception_x0n6w6_k$();
          case 9:
            this.tmp$ret$00__1;
            this.set_exceptionState_fex74n_k$(8);
            App$lambda_8(this.processing$delegate_1, false);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  var properties_initialized_App_kt_kalemn;
  function _init_properties_App_kt__fk8usv() {
    if (!properties_initialized_App_kt_kalemn) {
      properties_initialized_App_kt_kalemn = true;
      UNDERTALE_CONTROLLER_MAPPINGS = mapOf([to(PS2PadKey_PAD_START_getInstance(), GMLKey_VK_ESCAPE_getInstance()), to(PS2PadKey_PAD_L1_getInstance(), GMLKey_VK_PAGEDOWN_getInstance()), to(PS2PadKey_PAD_R1_getInstance(), GMLKey_VK_PAGEUP_getInstance()), to(PS2PadKey_PAD_L2_getInstance(), GMLKey_VK_F10_getInstance()), to(PS2PadKey_PAD_SELECT_getInstance(), GMLKey_VK_F12_getInstance())]);
      DEFAULT_LIGHT_SETTINGS = new LightSettings(Color_init_$Create$(179, 179, 179), new Triple('0.5', '0.5', '0.5'), Color_init_$Create$(128, 128, 128), new Triple('0.0', '-0.4', '-0.1'), Color_init_$Create$(77, 77, 77), new Triple('-0.5', '-0.5', '0.5'));
      var tmp0_controller1Mappings = get_UNDERTALE_CONTROLLER_MAPPINGS();
      var tmp1_controller2Mappings = emptyMap();
      var tmp2_filesystemMappings = mapOf([to('file0', 'mc0:UNDERTALE/file0'), to('file1', 'mc0:UNDERTALE/file1'), to('file2', 'mc0:UNDERTALE/file2'), to('file3', 'mc0:UNDERTALE/file3'), to('file4', 'mc0:UNDERTALE/file4'), to('file5', 'mc0:UNDERTALE/file5'), to('file6', 'mc0:UNDERTALE/file6'), to('file7', 'mc0:UNDERTALE/file7'), to('file8', 'mc0:UNDERTALE/file8'), to('file9', 'mc0:UNDERTALE/file9'), to('file9', 'mc0:UNDERTALE/file9'), to('system_information_962', 'mc0:UNDERTALE/system_information_962'), to('system_information_963', 'mc0:UNDERTALE/system_information_963'), to('undertale.ini', 'mc0:UNDERTALE/undertale.ini'), to('credits.txt', '$BOOT:CREDITS.TXT')]);
      var tmp3_disabledObjects = setOf(['obj_snowfloor', 'obj_glowparticle', 'obj_true_lavawaver', 'obj_true_antiwaver', 'obj_orangeparticle']);
      var tmp4_bgColorTopLeft = Color_init_$Create$(255, 204, 0);
      var tmp5_bgColorTopRight = Color_init_$Create$(255, 204, 0);
      var tmp6_bgColorBottomLeft = Color_init_$Create$(180, 140, 0);
      var tmp7_bgColorBottomRight = Color_init_$Create$(180, 140, 0);
      var tmp8_ambientColor = Color_init_$Create$(255, 204, 0);
      var tmp9_lights = get_DEFAULT_LIGHT_SETTINGS();
      var tmp10_eagerlyLoadedRooms = emptySet();
      var tmp11_force4bppPatterns = emptySet();
      UNDERTALE_PRESET = new Preset('Undertale', 'UNDERTALE', true, tmp0_controller1Mappings, tmp1_controller2Mappings, tmp2_filesystemMappings, tmp3_disabledObjects, 68, tmp4_bgColorTopLeft, tmp5_bgColorTopRight, tmp6_bgColorBottomLeft, tmp7_bgColorBottomRight, tmp8_ambientColor, tmp9_lights, true, tmp10_eagerlyLoadedRooms, true, tmp11_force4bppPatterns, 512, 2097152);
      var tmp0_controller1Mappings_0 = get_UNDERTALE_CONTROLLER_MAPPINGS();
      var tmp1_controller2Mappings_0 = emptyMap();
      var tmp2_filesystemMappings_0 = mapOf([to('lang/lang_en.json', '$BOOT:LANG/LANG_EN.JSON'), to('lang/lang_ja.json', '$BOOT:LANG/LANG_JA.JSON'), to('filech1_0', 'mc0:/SURVEY_PROGRAM/filech1_0'), to('filech1_1', 'mc0:/SURVEY_PROGRAM/filech1_1'), to('filech1_2', 'mc0:/SURVEY_PROGRAM/filech1_2'), to('filech1_3', 'mc0:/SURVEY_PROGRAM/filech1_3'), to('filech1_4', 'mc0:/SURVEY_PROGRAM/filech1_4'), to('filech1_5', 'mc0:/SURVEY_PROGRAM/filech1_5'), to('filech1_9', 'mc0:/SURVEY_PROGRAM/filech1_9'), to('dr.ini', 'mc0:/SURVEY_PROGRAM/dr.ini'), to('true_config.ini', 'mc0:/SURVEY_PROGRAM/true_config.ini')]);
      var tmp3_disabledObjects_0 = emptySet();
      var tmp4_bgColorTopLeft_0 = Color_init_$Create$(50, 20, 100);
      var tmp5_bgColorTopRight_0 = Color_init_$Create$(50, 20, 100);
      var tmp6_bgColorBottomLeft_0 = Color_init_$Create$(20, 5, 50);
      var tmp7_bgColorBottomRight_0 = Color_init_$Create$(20, 5, 50);
      var tmp8_ambientColor_0 = Color_init_$Create$(50, 20, 100);
      var tmp9_lights_0 = get_DEFAULT_LIGHT_SETTINGS();
      var tmp10_eagerlyLoadedRooms_0 = emptySet();
      var tmp11_force4bppPatterns_0 = emptySet();
      SURVEY_PROGRAM_PRESET = new Preset('DELTARUNE (SURVEY_PROGRAM)', 'SURVEY_PROGRAM', true, tmp0_controller1Mappings_0, tmp1_controller2Mappings_0, tmp2_filesystemMappings_0, tmp3_disabledObjects_0, 68, tmp4_bgColorTopLeft_0, tmp5_bgColorTopRight_0, tmp6_bgColorBottomLeft_0, tmp7_bgColorBottomRight_0, tmp8_ambientColor_0, tmp9_lights_0, false, tmp10_eagerlyLoadedRooms_0, true, tmp11_force4bppPatterns_0, 512, 2097152);
      var tmp0_controller1Mappings_1 = get_UNDERTALE_CONTROLLER_MAPPINGS();
      var tmp1_controller2Mappings_1 = emptyMap();
      var tmp2_filesystemMappings_1 = mapOf([to('lang/lang_en.json', '$BOOT:LANG/LANG_EN.JSON'), to('lang/lang_ja.json', '$BOOT:LANG/LANG_JA.JSON'), to('filech1_0', 'mc0:/DELTARUNE/filech1_0'), to('filech1_1', 'mc0:/DELTARUNE/filech1_1'), to('filech1_2', 'mc0:/DELTARUNE/filech1_2'), to('filech1_3', 'mc0:/DELTARUNE/filech1_3'), to('filech1_4', 'mc0:/DELTARUNE/filech1_4'), to('filech1_5', 'mc0:/DELTARUNE/filech1_5'), to('filech1_9', 'mc0:/DELTARUNE/filech1_9'), to('filech2_0', 'mc0:/DELTARUNE/filech2_0'), to('filech2_1', 'mc0:/DELTARUNE/filech2_1'), to('filech2_2', 'mc0:/DELTARUNE/filech2_2'), to('filech2_3', 'mc0:/DELTARUNE/filech2_3'), to('filech2_4', 'mc0:/DELTARUNE/filech2_4'), to('filech2_5', 'mc0:/DELTARUNE/filech2_5'), to('filech2_9', 'mc0:/DELTARUNE/filech2_9'), to('dr.ini', 'mc0:/DELTARUNE/dr.ini'), to('true_config.ini', 'mc0:/DELTARUNE/true_config.ini')]);
      var tmp3_disabledObjects_1 = emptySet();
      var tmp4_bgColorTopLeft_1 = Color_init_$Create$(50, 20, 100);
      var tmp5_bgColorTopRight_1 = Color_init_$Create$(50, 20, 100);
      var tmp6_bgColorBottomLeft_1 = Color_init_$Create$(20, 5, 50);
      var tmp7_bgColorBottomRight_1 = Color_init_$Create$(20, 5, 50);
      var tmp8_ambientColor_1 = Color_init_$Create$(50, 20, 100);
      var tmp9_lights_1 = get_DEFAULT_LIGHT_SETTINGS();
      var tmp10_eagerlyLoadedRooms_1 = emptySet();
      var tmp11_force4bppPatterns_1 = emptySet();
      DELTARUNE_CHAPTER_1_AND_2_PRESET = new Preset('DELTARUNE Chapter 1&2', 'DELTARUNE Chapter 1&2', true, tmp0_controller1Mappings_1, tmp1_controller2Mappings_1, tmp2_filesystemMappings_1, tmp3_disabledObjects_1, 68, tmp4_bgColorTopLeft_1, tmp5_bgColorTopRight_1, tmp6_bgColorBottomLeft_1, tmp7_bgColorBottomRight_1, tmp8_ambientColor_1, tmp9_lights_1, true, tmp10_eagerlyLoadedRooms_1, true, tmp11_force4bppPatterns_1, 256, 2097152);
      DELTARUNE_FILESYSTEM_MAPPINGS = mapOf([to('lang/lang_en.json', '$BOOT:LANG/LANG_EN.JSON'), to('lang/lang_ja.json', '$BOOT:LANG/LANG_JA.JSON'), to('filech1_0', 'mc0:/DELTARUNE/filech1_0'), to('filech1_1', 'mc0:/DELTARUNE/filech1_1'), to('filech1_2', 'mc0:/DELTARUNE/filech1_2'), to('filech1_3', 'mc0:/DELTARUNE/filech1_3'), to('filech1_4', 'mc0:/DELTARUNE/filech1_4'), to('filech1_5', 'mc0:/DELTARUNE/filech1_5'), to('filech1_9', 'mc0:/DELTARUNE/filech1_9'), to('filech2_0', 'mc0:/DELTARUNE/filech2_0'), to('filech2_1', 'mc0:/DELTARUNE/filech2_1'), to('filech2_2', 'mc0:/DELTARUNE/filech2_2'), to('filech2_3', 'mc0:/DELTARUNE/filech2_3'), to('filech2_4', 'mc0:/DELTARUNE/filech2_4'), to('filech2_5', 'mc0:/DELTARUNE/filech2_5'), to('filech2_9', 'mc0:/DELTARUNE/filech2_9'), to('filech3_1', 'mc0:/DELTARUNE/filech3_1'), to('filech3_2', 'mc0:/DELTARUNE/filech3_2'), to('filech3_3', 'mc0:/DELTARUNE/filech3_3'), to('filech3_4', 'mc0:/DELTARUNE/filech3_4'), to('filech3_5', 'mc0:/DELTARUNE/filech3_5'), to('filech3_9', 'mc0:/DELTARUNE/filech3_9'), to('filech4_1', 'mc0:/DELTARUNE/filech4_1'), to('filech4_2', 'mc0:/DELTARUNE/filech4_2'), to('filech4_3', 'mc0:/DELTARUNE/filech4_3'), to('filech4_4', 'mc0:/DELTARUNE/filech4_4'), to('filech4_5', 'mc0:/DELTARUNE/filech4_5'), to('filech4_9', 'mc0:/DELTARUNE/filech4_9'), to('dr.ini', 'mc0:/DELTARUNE/dr.ini'), to('true_config.ini', 'mc0:/DELTARUNE/true_config.ini')]);
      var tmp0_controller1Mappings_2 = get_UNDERTALE_CONTROLLER_MAPPINGS();
      var tmp1_controller2Mappings_2 = emptyMap();
      var tmp2_filesystemMappings_2 = get_DELTARUNE_FILESYSTEM_MAPPINGS();
      var tmp3_disabledObjects_2 = emptySet();
      var tmp4_bgColorTopLeft_2 = Color_init_$Create$(50, 20, 100);
      var tmp5_bgColorTopRight_2 = Color_init_$Create$(50, 20, 100);
      var tmp6_bgColorBottomLeft_2 = Color_init_$Create$(20, 5, 50);
      var tmp7_bgColorBottomRight_2 = Color_init_$Create$(20, 5, 50);
      var tmp8_ambientColor_2 = Color_init_$Create$(50, 20, 100);
      var tmp9_lights_2 = get_DEFAULT_LIGHT_SETTINGS();
      var tmp10_eagerlyLoadedRooms_2 = emptySet();
      var tmp11_force4bppPatterns_2 = emptySet();
      DELTARUNE_CHAPTER_1 = new Preset('DELTARUNE Chapter 1', 'DELTARUNE Chapter 1', true, tmp0_controller1Mappings_2, tmp1_controller2Mappings_2, tmp2_filesystemMappings_2, tmp3_disabledObjects_2, 68, tmp4_bgColorTopLeft_2, tmp5_bgColorTopRight_2, tmp6_bgColorBottomLeft_2, tmp7_bgColorBottomRight_2, tmp8_ambientColor_2, tmp9_lights_2, true, tmp10_eagerlyLoadedRooms_2, true, tmp11_force4bppPatterns_2, 512, 2097152);
      var tmp0_controller1Mappings_3 = get_UNDERTALE_CONTROLLER_MAPPINGS();
      var tmp1_controller2Mappings_3 = emptyMap();
      var tmp2_filesystemMappings_3 = get_DELTARUNE_FILESYSTEM_MAPPINGS();
      var tmp3_disabledObjects_3 = emptySet();
      var tmp4_bgColorTopLeft_3 = Color_init_$Create$(50, 20, 100);
      var tmp5_bgColorTopRight_3 = Color_init_$Create$(50, 20, 100);
      var tmp6_bgColorBottomLeft_3 = Color_init_$Create$(20, 5, 50);
      var tmp7_bgColorBottomRight_3 = Color_init_$Create$(20, 5, 50);
      var tmp8_ambientColor_3 = Color_init_$Create$(50, 20, 100);
      var tmp9_lights_3 = get_DEFAULT_LIGHT_SETTINGS();
      var tmp10_eagerlyLoadedRooms_3 = emptySet();
      var tmp11_force4bppPatterns_3 = emptySet();
      DELTARUNE_CHAPTER_2 = new Preset('DELTARUNE Chapter 2', 'DELTARUNE Chapter 2', true, tmp0_controller1Mappings_3, tmp1_controller2Mappings_3, tmp2_filesystemMappings_3, tmp3_disabledObjects_3, 68, tmp4_bgColorTopLeft_3, tmp5_bgColorTopRight_3, tmp6_bgColorBottomLeft_3, tmp7_bgColorBottomRight_3, tmp8_ambientColor_3, tmp9_lights_3, true, tmp10_eagerlyLoadedRooms_3, true, tmp11_force4bppPatterns_3, 256, 2097152);
      var tmp0_controller1Mappings_4 = get_UNDERTALE_CONTROLLER_MAPPINGS();
      var tmp1_controller2Mappings_4 = emptyMap();
      var tmp2_filesystemMappings_4 = get_DELTARUNE_FILESYSTEM_MAPPINGS();
      var tmp3_disabledObjects_4 = emptySet();
      var tmp4_bgColorTopLeft_4 = Color_init_$Create$(50, 20, 100);
      var tmp5_bgColorTopRight_4 = Color_init_$Create$(50, 20, 100);
      var tmp6_bgColorBottomLeft_4 = Color_init_$Create$(20, 5, 50);
      var tmp7_bgColorBottomRight_4 = Color_init_$Create$(20, 5, 50);
      var tmp8_ambientColor_4 = Color_init_$Create$(50, 20, 100);
      var tmp9_lights_4 = get_DEFAULT_LIGHT_SETTINGS();
      var tmp10_eagerlyLoadedRooms_4 = emptySet();
      var tmp11_force4bppPatterns_4 = emptySet();
      DELTARUNE_CHAPTER_3 = new Preset('DELTARUNE Chapter 3', 'DELTARUNE Chapter 3', true, tmp0_controller1Mappings_4, tmp1_controller2Mappings_4, tmp2_filesystemMappings_4, tmp3_disabledObjects_4, 68, tmp4_bgColorTopLeft_4, tmp5_bgColorTopRight_4, tmp6_bgColorBottomLeft_4, tmp7_bgColorBottomRight_4, tmp8_ambientColor_4, tmp9_lights_4, true, tmp10_eagerlyLoadedRooms_4, true, tmp11_force4bppPatterns_4, 256, 2097152);
      var tmp0_controller1Mappings_5 = get_UNDERTALE_CONTROLLER_MAPPINGS();
      var tmp1_controller2Mappings_5 = emptyMap();
      var tmp2_filesystemMappings_5 = get_DELTARUNE_FILESYSTEM_MAPPINGS();
      var tmp3_disabledObjects_5 = emptySet();
      var tmp4_bgColorTopLeft_5 = Color_init_$Create$(50, 20, 100);
      var tmp5_bgColorTopRight_5 = Color_init_$Create$(50, 20, 100);
      var tmp6_bgColorBottomLeft_5 = Color_init_$Create$(20, 5, 50);
      var tmp7_bgColorBottomRight_5 = Color_init_$Create$(20, 5, 50);
      var tmp8_ambientColor_5 = Color_init_$Create$(50, 20, 100);
      var tmp9_lights_5 = get_DEFAULT_LIGHT_SETTINGS();
      var tmp10_eagerlyLoadedRooms_5 = emptySet();
      var tmp11_force4bppPatterns_5 = emptySet();
      DELTARUNE_CHAPTER_4 = new Preset('DELTARUNE Chapter 4', 'DELTARUNE Chapter 4', true, tmp0_controller1Mappings_5, tmp1_controller2Mappings_5, tmp2_filesystemMappings_5, tmp3_disabledObjects_5, 68, tmp4_bgColorTopLeft_5, tmp5_bgColorTopRight_5, tmp6_bgColorBottomLeft_5, tmp7_bgColorBottomRight_5, tmp8_ambientColor_5, tmp9_lights_5, true, tmp10_eagerlyLoadedRooms_5, true, tmp11_force4bppPatterns_5, 256, 2097152);
      var tmp0_controller1Mappings_6 = get_UNDERTALE_CONTROLLER_MAPPINGS();
      var tmp1_controller2Mappings_6 = emptyMap();
      var tmp2_filesystemMappings_6 = mapOf([to('english.ini', '$BOOT:LANG/ENGLISH.INI'), to('config.ini', 'mc0:/AM2R/CONFIG.INI'), to('data.sav', 'mc0:/AM2R/DATA.SAV'), to('data.savd', 'mc0:/AM2R/DATA.SAVD'), to('sav1', 'mc0:/AM2R/SAV1'), to('sav2', 'mc0:/AM2R/SAV2'), to('sav3', 'mc0:/AM2R/SAV3'), to('sav1d', 'mc0:/AM2R/SAV1D'), to('sav2d', 'mc0:/AM2R/SAV2D'), to('sav3d', 'mc0:/AM2R/SAV3D')]);
      var tmp3_disabledObjects_6 = emptySet();
      var tmp4_bgColorTopLeft_6 = Color_init_$Create$(120, 40, 10);
      var tmp5_bgColorTopRight_6 = Color_init_$Create$(120, 40, 10);
      var tmp6_bgColorBottomLeft_6 = Color_init_$Create$(55, 12, 5);
      var tmp7_bgColorBottomRight_6 = Color_init_$Create$(55, 12, 5);
      var tmp8_ambientColor_6 = Color_init_$Create$(120, 40, 10);
      var tmp9_lights_6 = get_DEFAULT_LIGHT_SETTINGS();
      var tmp10_eagerlyLoadedRooms_6 = emptySet();
      var tmp11_force4bppPatterns_6 = emptySet();
      AM2R = new Preset('AM2R', 'AM2R', true, tmp0_controller1Mappings_6, tmp1_controller2Mappings_6, tmp2_filesystemMappings_6, tmp3_disabledObjects_6, 68, tmp4_bgColorTopLeft_6, tmp5_bgColorTopRight_6, tmp6_bgColorBottomLeft_6, tmp7_bgColorBottomRight_6, tmp8_ambientColor_6, tmp9_lights_6, false, tmp10_eagerlyLoadedRooms_6, true, tmp11_force4bppPatterns_6, 256, 2097152);
      var tmp0_controller1Mappings_7 = mapOf([to(PS2PadKey_PAD_UP_getInstance(), GMLKey_VK_UP_getInstance()), to(PS2PadKey_PAD_DOWN_getInstance(), GMLKey_VK_DOWN_getInstance()), to(PS2PadKey_PAD_LEFT_getInstance(), GMLKey_VK_LEFT_getInstance()), to(PS2PadKey_PAD_RIGHT_getInstance(), GMLKey_VK_RIGHT_getInstance()), to(PS2PadKey_PAD_CROSS_getInstance(), GMLKey_VK_SPACE_getInstance()), to(PS2PadKey_PAD_SQUARE_getInstance(), GMLKey_KEY_X_getInstance()), to(PS2PadKey_PAD_START_getInstance(), GMLKey_VK_ENTER_getInstance()), to(PS2PadKey_PAD_L1_getInstance(), GMLKey_VK_PAGEDOWN_getInstance()), to(PS2PadKey_PAD_R1_getInstance(), GMLKey_VK_PAGEUP_getInstance()), to(PS2PadKey_PAD_L2_getInstance(), GMLKey_VK_F10_getInstance()), to(PS2PadKey_PAD_SELECT_getInstance(), GMLKey_VK_F12_getInstance())]);
      var tmp1_controller2Mappings_7 = emptyMap();
      var tmp2_filesystemMappings_7 = emptyMap();
      var tmp3_disabledObjects_7 = emptySet();
      var tmp4_bgColorTopLeft_7 = Color_init_$Create$(200, 30, 30);
      var tmp5_bgColorTopRight_7 = Color_init_$Create$(200, 30, 30);
      var tmp6_bgColorBottomLeft_7 = Color_init_$Create$(90, 10, 10);
      var tmp7_bgColorBottomRight_7 = Color_init_$Create$(90, 10, 10);
      var tmp8_ambientColor_7 = Color_init_$Create$(200, 30, 30);
      var tmp9_lights_7 = get_DEFAULT_LIGHT_SETTINGS();
      var tmp10_eagerlyLoadedRooms_7 = emptySet();
      var tmp11_force4bppPatterns_7 = emptySet();
      SONICEXE = new Preset('SONIC.EXE', 'SONIC.EXE', false, tmp0_controller1Mappings_7, tmp1_controller2Mappings_7, tmp2_filesystemMappings_7, tmp3_disabledObjects_7, 68, tmp4_bgColorTopLeft_7, tmp5_bgColorTopRight_7, tmp6_bgColorBottomLeft_7, tmp7_bgColorBottomRight_7, tmp8_ambientColor_7, tmp9_lights_7, false, tmp10_eagerlyLoadedRooms_7, true, tmp11_force4bppPatterns_7, 512, 16777216);
      PRESETS = listOf([get_UNDERTALE_PRESET(), get_SURVEY_PROGRAM_PRESET(), get_DELTARUNE_CHAPTER_1_AND_2_PRESET(), get_DELTARUNE_CHAPTER_1(), get_DELTARUNE_CHAPTER_2(), get_DELTARUNE_CHAPTER_3(), get_DELTARUNE_CHAPTER_4(), get_AM2R(), get_SONICEXE()]);
      com_mrpowergamerbr_butterscotchpreprocessor_components_LightSettings$stable = 0;
      com_mrpowergamerbr_butterscotchpreprocessor_components_Preset$stable = 8;
    }
  }
  function ControllerMappings(title, controllerMappings, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2104147914);
    sourceInformation($composer_0, 'C(ControllerMappings)P(1)20@880L8769,20@867L8782:ControllerMappings.kt#5n9s4q');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(controllerMappings) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-2104147914, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ControllerMappings (ControllerMappings.kt:19)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1781431420, true, ControllerMappings$lambda(title, controllerMappings), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_90(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      FieldWrapper(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ControllerMappings$lambda_0(title, controllerMappings, $changed));
    }
  }
  function ComposableLambda$invoke$ref_77(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$ControllerMappingsKt$lambda$_477990908$lambda_kuvd9b($this$Th, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C30@1088L25:ControllerMappings.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-477990908, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$ControllerMappingsKt.lambda$-477990908.<anonymous> (ControllerMappings.kt:30)');
    }
    Text('PlayStation 2 Key', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_78(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$ControllerMappingsKt$lambda$1014830957$lambda($this$Th, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C31@1141L21:ControllerMappings.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(1014830957, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$ControllerMappingsKt.lambda$1014830957.<anonymous> (ControllerMappings.kt:31)');
    }
    Text('GameMaker Key', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_79(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$ControllerMappingsKt$lambda$_56837684$lambda_icwm6x($this$Tr, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C30@1083L32,31@1136L28:ControllerMappings.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-56837684, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$ControllerMappingsKt.lambda$-56837684.<anonymous> (ControllerMappings.kt:30)');
    }
    Th(null, ComposableSingletons$ControllerMappingsKt_getInstance().lambda$_477990908_qxgw39__1, $composer_0, 48, 1);
    Th(null, ComposableSingletons$ControllerMappingsKt_getInstance().lambda$1014830957__1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_80(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$ControllerMappingsKt$lambda$_1138077958$lambda_e77wfz($this$Thead, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C29@1058L124:ControllerMappings.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-1138077958, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$ControllerMappingsKt.lambda$-1138077958.<anonymous> (ControllerMappings.kt:29)');
    }
    Tr(null, ComposableSingletons$ControllerMappingsKt_getInstance().lambda$_56837684_ufj9x5__1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_81(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$ControllerMappingsKt$lambda$_1683867167$lambda_68znah($this$Option, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C80@3730L20:ControllerMappings.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-1683867167, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$ControllerMappingsKt.lambda$-1683867167.<anonymous> (ControllerMappings.kt:80)');
    }
    Text('<not mapped>', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ControllerMappingsKt() {
    ComposableSingletons$ControllerMappingsKt_instance = this;
    var tmp = this;
    tmp.lambda$_477990908_qxgw39__1 = ComposableLambda$invoke$ref_77(composableLambdaInstance(-477990908, false, ComposableSingletons$ControllerMappingsKt$lambda$_477990908$lambda_kuvd9b));
    var tmp_0 = this;
    tmp_0.lambda$1014830957__1 = ComposableLambda$invoke$ref_78(composableLambdaInstance(1014830957, false, ComposableSingletons$ControllerMappingsKt$lambda$1014830957$lambda));
    var tmp_1 = this;
    tmp_1.lambda$_56837684_ufj9x5__1 = ComposableLambda$invoke$ref_79(composableLambdaInstance(-56837684, false, ComposableSingletons$ControllerMappingsKt$lambda$_56837684$lambda_icwm6x));
    var tmp_2 = this;
    tmp_2.lambda$_1138077958_xlqcyn_1 = ComposableLambda$invoke$ref_80(composableLambdaInstance(-1138077958, false, ComposableSingletons$ControllerMappingsKt$lambda$_1138077958$lambda_e77wfz));
    var tmp_3 = this;
    tmp_3.lambda$_1683867167_xhvlvt_1 = ComposableLambda$invoke$ref_81(composableLambdaInstance(-1683867167, false, ComposableSingletons$ControllerMappingsKt$lambda$_1683867167$lambda_68znah));
  }
  protoOf(ComposableSingletons$ControllerMappingsKt).get_lambda$_477990908_n9mjjx_k$ = function () {
    return this.lambda$_477990908_qxgw39__1;
  };
  protoOf(ComposableSingletons$ControllerMappingsKt).get_lambda$1014830957_hwg8b7_k$ = function () {
    return this.lambda$1014830957__1;
  };
  protoOf(ComposableSingletons$ControllerMappingsKt).get_lambda$_56837684_e1tocf_k$ = function () {
    return this.lambda$_56837684_ufj9x5__1;
  };
  protoOf(ComposableSingletons$ControllerMappingsKt).get_lambda$_1138077958_fbttyd_k$ = function () {
    return this.lambda$_1138077958_xlqcyn_1;
  };
  protoOf(ComposableSingletons$ControllerMappingsKt).get_lambda$_1683867167_8nni6b_k$ = function () {
    return this.lambda$_1683867167_xhvlvt_1;
  };
  var ComposableSingletons$ControllerMappingsKt_instance;
  function ComposableSingletons$ControllerMappingsKt_getInstance() {
    if (ComposableSingletons$ControllerMappingsKt_instance == null)
      new ComposableSingletons$ControllerMappingsKt();
    return ComposableSingletons$ControllerMappingsKt_instance;
  }
  function ControllerMappings$lambda$lambda($title) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C22@921L17:ControllerMappings.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-1229095205, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ControllerMappings.<anonymous>.<anonymous> (ControllerMappings.kt:22)');
        }
        FieldLabel_0($title, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_82(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ControllerMappings$lambda$lambda_0($this$Table) {
    $this$Table.classes_ayghm2_k$(['fancy-table']);
    return Unit_getInstance();
  }
  function ControllerMappings$lambda$lambda$lambda$lambda$lambda($ps2Key) {
    return function ($this$Td, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C38@1351L1195:ControllerMappings.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-1195141204, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ControllerMappings.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ControllerMappings.kt:38)');
      }
      var tmp;
      switch ($ps2Key.get_ordinal_ip24qg_k$()) {
        case 0:
          tmp = 'D-Pad Left';
          break;
        case 1:
          tmp = 'D-Pad Down';
          break;
        case 2:
          tmp = 'D-Pad Right';
          break;
        case 3:
          tmp = 'D-Pad Up';
          break;
        case 4:
          tmp = 'Start';
          break;
        case 5:
          tmp = 'R3';
          break;
        case 6:
          tmp = 'L3';
          break;
        case 7:
          tmp = 'Select';
          break;
        case 8:
          tmp = 'Square (\u25A1)';
          break;
        case 9:
          tmp = 'Cross (X)';
          break;
        case 10:
          tmp = 'Circle (O)';
          break;
        case 11:
          tmp = 'Triangle (\u25B3)';
          break;
        case 12:
          tmp = 'R1';
          break;
        case 13:
          tmp = 'L1';
          break;
        case 14:
          tmp = 'R2';
          break;
        case 15:
          tmp = 'L2';
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      Text(tmp, $composer_0, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_83(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ControllerMappings$lambda$lambda$lambda$lambda$lambda$lambda$lambda($controllerMappings, $ps2Key) {
    return function (event) {
      var selectedValue = event.get_value_j01efc_k$();
      if (selectedValue === '') {
        $controllerMappings.remove_gppy8k_k$($ps2Key);
      } else {
        var gmlKey = Companion_getInstance_3().fromValue_lljhin_k$(toInt(ensureNotNull(selectedValue)));
        if (!(gmlKey == null)) {
          var tmp0 = $controllerMappings;
          // Inline function 'kotlin.collections.set' call
          var key = $ps2Key;
          tmp0.put_4fpzoq_k$(key, gmlKey);
        }
      }
      return Unit_getInstance();
    };
  }
  function ControllerMappings$lambda$lambda$lambda$lambda$lambda$lambda($controllerMappings, $ps2Key) {
    return function ($this$Select) {
      $this$Select.onChange_s4bv8c_k$(ControllerMappings$lambda$lambda$lambda$lambda$lambda$lambda$lambda($controllerMappings, $ps2Key));
      return Unit_getInstance();
    };
  }
  function ControllerMappings$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($currentMapping) {
    return function ($this$Option) {
      var tmp;
      if ($currentMapping == null) {
        selected($this$Option);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ControllerMappings$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($currentMapping, $gmlKey) {
    return function ($this$Option) {
      var tmp;
      if (equals($currentMapping, $gmlKey)) {
        selected($this$Option);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ControllerMappings$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($gmlKey) {
    return function ($this$Option, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C90@4240L5169:ControllerMappings.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-544777149, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ControllerMappings.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ControllerMappings.kt:90)');
      }
      var tmp;
      switch ($gmlKey.get_ordinal_ip24qg_k$()) {
        case 0:
          tmp = 'No Key';
          break;
        case 1:
          tmp = 'Backspace';
          break;
        case 2:
          tmp = 'Tab';
          break;
        case 3:
          tmp = 'Enter';
          break;
        case 4:
          tmp = 'Shift';
          break;
        case 5:
          tmp = 'Control';
          break;
        case 6:
          tmp = 'Alt';
          break;
        case 7:
          tmp = 'Escape';
          break;
        case 8:
          tmp = 'Space';
          break;
        case 9:
          tmp = 'Page Up';
          break;
        case 10:
          tmp = 'Page Down';
          break;
        case 11:
          tmp = 'End';
          break;
        case 12:
          tmp = 'Home';
          break;
        case 13:
          tmp = 'Left Arrow';
          break;
        case 14:
          tmp = 'Up Arrow';
          break;
        case 15:
          tmp = 'Right Arrow';
          break;
        case 16:
          tmp = 'Down Arrow';
          break;
        case 17:
          tmp = 'Insert';
          break;
        case 18:
          tmp = 'Delete';
          break;
        case 19:
          tmp = '0';
          break;
        case 20:
          tmp = '1';
          break;
        case 21:
          tmp = '2';
          break;
        case 22:
          tmp = '3';
          break;
        case 23:
          tmp = '4';
          break;
        case 24:
          tmp = '5';
          break;
        case 25:
          tmp = '6';
          break;
        case 26:
          tmp = '7';
          break;
        case 27:
          tmp = '8';
          break;
        case 28:
          tmp = '9';
          break;
        case 29:
          tmp = 'A';
          break;
        case 30:
          tmp = 'B';
          break;
        case 31:
          tmp = 'C';
          break;
        case 32:
          tmp = 'D';
          break;
        case 33:
          tmp = 'E';
          break;
        case 34:
          tmp = 'F';
          break;
        case 35:
          tmp = 'G';
          break;
        case 36:
          tmp = 'H';
          break;
        case 37:
          tmp = 'I';
          break;
        case 38:
          tmp = 'J';
          break;
        case 39:
          tmp = 'K';
          break;
        case 40:
          tmp = 'L';
          break;
        case 41:
          tmp = 'M';
          break;
        case 42:
          tmp = 'N';
          break;
        case 43:
          tmp = 'O';
          break;
        case 44:
          tmp = 'P';
          break;
        case 45:
          tmp = 'Q';
          break;
        case 46:
          tmp = 'R';
          break;
        case 47:
          tmp = 'S';
          break;
        case 48:
          tmp = 'T';
          break;
        case 49:
          tmp = 'U';
          break;
        case 50:
          tmp = 'V';
          break;
        case 51:
          tmp = 'W';
          break;
        case 52:
          tmp = 'X';
          break;
        case 53:
          tmp = 'Y';
          break;
        case 54:
          tmp = 'Z';
          break;
        case 55:
          tmp = 'F1';
          break;
        case 56:
          tmp = 'F2';
          break;
        case 57:
          tmp = 'F3';
          break;
        case 58:
          tmp = 'F4';
          break;
        case 59:
          tmp = 'F5';
          break;
        case 60:
          tmp = 'F6';
          break;
        case 61:
          tmp = 'F7';
          break;
        case 62:
          tmp = 'F8';
          break;
        case 63:
          tmp = 'F9';
          break;
        case 64:
          tmp = 'F10';
          break;
        case 65:
          tmp = 'F11';
          break;
        case 66:
          tmp = 'F12';
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      Text(tmp, $composer_0, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_84(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ControllerMappings$lambda$lambda$lambda$lambda$lambda$lambda_0($currentMapping) {
    return function ($this$Select, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C77@3568L118,77@3549L239:ControllerMappings.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(527856151, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ControllerMappings.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ControllerMappings.kt:77)');
      }
      sourceInformationMarkerStart($composer_0, 463622125, 'CC(remember):ControllerMappings.kt#9igjgp');
      var tmp = $composer_0;
      var tmpEnum = $currentMapping;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = tmp.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$());
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ControllerMappings$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($currentMapping);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Option('', tmp0_group, ComposableSingletons$ControllerMappingsKt_getInstance().lambda$_1683867167_xhvlvt_1, $composer_0, 390, 0);
      var _iterator__ex2g4s = get_entries().iterator_jk1svi_k$();
      $l$loop: while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var gmlKey = _iterator__ex2g4s.next_20eer_k$();
        $composer_0.startReplaceGroup_5hh8aj_k$(1487841611);
        sourceInformation($composer_0, '87@4064L128,89@4194L5257,87@4024L5427');
        if (gmlKey.equals(GMLKey_VK_NOKEY_getInstance())) {
          $composer_0.endReplaceGroup_ek144q_k$();
          continue $l$loop;
        }
        var tmp_2 = gmlKey.get_value_j01efc_k$().toString();
        sourceInformationMarkerStart($composer_0, 463638007, 'CC(remember):ControllerMappings.kt#9igjgp');
        var tmp_3 = $composer_0;
        var tmpEnum_0 = $currentMapping;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!(tmp_3.changed_kpusro_k$(tmpEnum_0 == null ? -1 : tmpEnum_0.get_ordinal_ip24qg_k$()) | $composer_0.changed_kpusro_k$(gmlKey.get_ordinal_ip24qg_k$()));
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ControllerMappings$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($currentMapping, gmlKey);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-544777149, true, ControllerMappings$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(gmlKey), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_84(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = it_1;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Option(tmp_2, tmp1_group, tmp0, $composer_0, 384, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      var tmp_8;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_8 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_85(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ControllerMappings$lambda$lambda$lambda$lambda$lambda_0($controllerMappings, $ps2Key) {
    return function ($this$Td, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C:ControllerMappings.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(358629077, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ControllerMappings.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ControllerMappings.kt:61)');
      }
      var currentMapping = $controllerMappings.get_wei43m_k$($ps2Key);
      $composer_0.startMovableGroup_clfloq_k$(1045169586, currentMapping);
      sourceInformation($composer_0, '64@2777L732,76@3511L6012,64@2762L6761');
      sourceInformationMarkerStart($composer_0, 1045165681, 'CC(remember):ControllerMappings.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changed_ga7h3f_k$($controllerMappings) | $composer_0.changed_kpusro_k$($ps2Key.get_ordinal_ip24qg_k$()));
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ControllerMappings$lambda$lambda$lambda$lambda$lambda$lambda($controllerMappings, $ps2Key);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(527856151, true, ControllerMappings$lambda$lambda$lambda$lambda$lambda$lambda_0(currentMapping), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_85(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Select(tmp0_group, false, tmp0, $composer_0, 384, 2);
      $composer_0.endMovableGroup_kd2hcs_k$();
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_86(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ControllerMappings$lambda$lambda$lambda$lambda($ps2Key, $controllerMappings) {
    return function ($this$Tr, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C37@1321L1251,37@1318L1254,60@2601L6978,60@2598L6981:ControllerMappings.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-1695218448, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ControllerMappings.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ControllerMappings.kt:37)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1195141204, true, ControllerMappings$lambda$lambda$lambda$lambda$lambda($ps2Key), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_83(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Td(null, tmp0, $composer_0, 48, 1);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(358629077, true, ControllerMappings$lambda$lambda$lambda$lambda$lambda_0($controllerMappings, $ps2Key), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_86(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Td(null, tmp0_0, $composer_0, 48, 1);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_87(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ControllerMappings$lambda$lambda$lambda($controllerMappings) {
    return function ($this$Tbody, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C*36@1292L8309,36@1289L8312:ControllerMappings.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-1223594052, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ControllerMappings.<anonymous>.<anonymous>.<anonymous> (ControllerMappings.kt:35)');
      }
      var _iterator__ex2g4s = get_entries_0().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var ps2Key = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1695218448, true, ControllerMappings$lambda$lambda$lambda$lambda(ps2Key, $controllerMappings), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_87(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Tr(null, tmp0, $composer_0, 48, 1);
      }
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_88(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ControllerMappings$lambda$lambda_1($controllerMappings) {
    return function ($this$Table, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C28@1034L162,34@1215L8418,34@1209L8424:ControllerMappings.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-336220936, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ControllerMappings.<anonymous>.<anonymous> (ControllerMappings.kt:28)');
      }
      Thead(null, ComposableSingletons$ControllerMappingsKt_getInstance().lambda$_1138077958_xlqcyn_1, $composer_0, 48, 1);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1223594052, true, ControllerMappings$lambda$lambda$lambda($controllerMappings), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_88(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Tbody(null, tmp0, $composer_0, 48, 1);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_89(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ControllerMappings$lambda($title, $controllerMappings) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C21@907L41,21@890L58,25@972L46,27@1020L8623,25@958L8685:ControllerMappings.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(1781431420, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ControllerMappings.<anonymous> (ControllerMappings.kt:21)');
        }
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1229095205, true, ControllerMappings$lambda$lambda($title), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_82(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        FieldInformation(tmp0, $composer_0, 6);
        sourceInformationMarkerStart($composer_0, -1736353494, 'CC(remember):ControllerMappings.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ControllerMappings$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-336220936, true, ControllerMappings$lambda$lambda_1($controllerMappings), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_89(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Table(tmp0_group, tmp0_0, $composer_0, 54, 0);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_90(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ControllerMappings$lambda_0($title, $controllerMappings, $$changed) {
    return function ($composer, $force) {
      ControllerMappings($title, $controllerMappings, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function DiscordButton(type, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1297573931);
    sourceInformation($composer_0, 'C(DiscordButton)P(2)17@631L711,17@624L728:DiscordButton.kt#5n9s4q');
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
        traceEventStart(-1297573931, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordButton (DiscordButton.kt:17)');
      }
      sourceInformationMarkerStart($composer_0, -1428025636, 'CC(remember):DiscordButton.kt#9igjgp');
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
  function TextWithIconWrapper(content, $composer, $changed, $default) {
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1332865669);
    sourceInformation($composer_0, 'C(TextWithIconWrapper)41@1565L41,43@1608L132,41@1561L179:DiscordButton.kt#5n9s4q');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1332865669, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.TextWithIconWrapper (DiscordButton.kt:41)');
      }
      sourceInformationMarkerStart($composer_0, 983660110, 'CC(remember):DiscordButton.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = TextWithIconWrapper$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-667664572, true, TextWithIconWrapper$lambda_0(content_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_91(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(TextWithIconWrapper$lambda_1(content_0, $changed, $default));
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
  function values_1() {
    return [DiscordButtonType_PRIMARY_getInstance(), DiscordButtonType_SUCCESS_getInstance(), DiscordButtonType_SECONDARY_getInstance(), DiscordButtonType_DANGER_getInstance(), DiscordButtonType_NO_BACKGROUND_LIGHT_TEXT_getInstance(), DiscordButtonType_NO_BACKGROUND_DARK_TEXT_getInstance(), DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_LIGHT_TEXT_getInstance(), DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT_getInstance()];
  }
  function valueOf_1(value) {
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
        THROW_IAE('No enum constant com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordButtonType.' + value);
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
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
  var $ENTRIES_1;
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
  function TextWithIconWrapper$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['text-with-icon-wrapper']);
    return Unit_getInstance();
  }
  function TextWithIconWrapper$lambda_0($content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C50@1716L22:DiscordButton.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-667664572, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.TextWithIconWrapper.<anonymous> (DiscordButton.kt:50)');
      }
      Div(null, $content._v, $composer_0, 0, 1);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_91(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function TextWithIconWrapper$lambda_1($content, $$changed, $$default) {
    return function ($composer, $force) {
      TextWithIconWrapper($content._v, $composer, updateChangedFlags($$changed | 1), $$default);
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
  function DiscordToggle(id, title, description, checked, onChange, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1238545078);
    sourceInformation($composer_0, 'C(DiscordToggle)P(2,4,1)20@607L15,20@589L88:DiscordToggle.kt#5n9s4q');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(id) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(description) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(checked) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onChange) ? 16384 : 8192);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 9363) === 9362), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1238545078, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordToggle (DiscordToggle.kt:20)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1345553506, true, DiscordToggle$lambda(title), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_92(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var tmp_1 = tmp0;
      var tmp_2;
      if (description == null) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-567434121);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_2 = null;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-567434120);
        sourceInformation($composer_0, '*20@643L12');
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(108275608, true, DiscordToggle$lambda_0(description), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_93(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_2 = tmp0_0;
      }
      DiscordToggle_1(id, tmp_1, tmp_2, checked, onChange, $composer_0, 48 | 14 & $dirty | 7168 & $dirty | 57344 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(DiscordToggle$lambda_1(id, title, description, checked, onChange, $changed));
    }
  }
  function DiscordToggle_0(id, title, description, stateValue, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(438178358);
    sourceInformation($composer_0, 'C(DiscordToggle)P(1,3)31@892L15,31@962L25,31@874L114:DiscordToggle.kt#5n9s4q');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(id) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(description) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(stateValue) ? 2048 : 1024);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 1171) === 1170), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(438178358, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordToggle (DiscordToggle.kt:31)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1884546314, true, DiscordToggle$lambda_2(title), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_94(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var tmp_1 = tmp0;
      var tmp_2;
      if (description == null) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1366019895);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_2 = null;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(1366019896);
        sourceInformation($composer_0, '*31@928L12');
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(1325111316, true, DiscordToggle$lambda_3(description), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_95(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_2 = tmp0_0;
      }
      var tmp_5 = tmp_2;
      var tmp_6 = stateValue.get_value_j01efc_k$();
      sourceInformationMarkerStart($composer_0, 182613775, 'CC(remember):DiscordToggle.kt#9igjgp');
      var tmp0_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      var it_1 = tmp0_1.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = DiscordToggle$lambda_4(stateValue);
        tmp0_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      DiscordToggle_1(id, tmp_1, tmp_5, tmp_6, tmp2_group, $composer_0, 48 | 14 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(DiscordToggle$lambda_5(id, title, description, stateValue, $changed));
    }
  }
  function DiscordToggle_1(id, title, description, checked, onChange, $composer, $changed, $default) {
    var description_0 = {_v: description};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1800835348);
    sourceInformation($composer_0, 'C(DiscordToggle)P(2,4,1)43@1274L33,45@1309L837,43@1248L898:DiscordToggle.kt#5n9s4q');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(id) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(title) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(description_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(checked) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onChange) ? 16384 : 8192);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 9363) === 9362), $dirty & 1)) {
      if (!(($default & 4) === 0)) {
        description_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1800835348, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordToggle (DiscordToggle.kt:43)');
      }
      sourceInformationMarkerStart($composer_0, -269044075, 'CC(remember):DiscordToggle.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = DiscordToggle$lambda_6;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1425540813, true, DiscordToggle$lambda_7(description_0, title, id, onChange, checked), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_101(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Label(id, tmp0_group, tmp0, $composer_0, 432 | 14 & $dirty, 0);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(DiscordToggle$lambda_8(id, title, description_0, checked, onChange, $changed, $default));
    }
  }
  function DiscordToggle$lambda($title) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C20@609L11:DiscordToggle.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(1345553506, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordToggle.<anonymous> (DiscordToggle.kt:20)');
        }
        Text($title, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_92(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda_0($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C20@645L8:DiscordToggle.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(108275608, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordToggle.<anonymous>.<anonymous> (DiscordToggle.kt:20)');
        }
        Text($it, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_93(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda_1($id, $title, $description, $checked, $onChange, $$changed) {
    return function ($composer, $force) {
      DiscordToggle($id, $title, $description, $checked, $onChange, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda_2($title) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C31@894L11:DiscordToggle.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(1884546314, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordToggle.<anonymous> (DiscordToggle.kt:31)');
        }
        Text($title, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_94(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda_3($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C31@930L8:DiscordToggle.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(1325111316, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordToggle.<anonymous>.<anonymous> (DiscordToggle.kt:31)');
        }
        Text($it, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_95(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda_4($stateValue) {
    return function (it) {
      $stateValue.set_value_v1vabv_k$(it);
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda_5($id, $title, $description, $stateValue, $$changed) {
    return function ($composer, $force) {
      DiscordToggle_0($id, $title, $description, $stateValue, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda_6($this$Label) {
    $this$Label.classes_ayghm2_k$(['toggle-wrapper']);
    return Unit_getInstance();
  }
  function DiscordToggle$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-information-with-control']);
    return Unit_getInstance();
  }
  function DiscordToggle$lambda$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-information']);
    return Unit_getInstance();
  }
  function DiscordToggle$lambda$lambda$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-title']);
    return Unit_getInstance();
  }
  function DiscordToggle$lambda$lambda$lambda$lambda_0($title) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C55@1562L7:DiscordToggle.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(1971889686, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordToggle.<anonymous>.<anonymous>.<anonymous>.<anonymous> (DiscordToggle.kt:55)');
      }
      $title($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_96(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda$lambda$lambda$lambda_1($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-description']);
    return Unit_getInstance();
  }
  function DiscordToggle$lambda$lambda$lambda$lambda_2($description) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C62@1744L13:DiscordToggle.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(101241243, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordToggle.<anonymous>.<anonymous>.<anonymous>.<anonymous> (DiscordToggle.kt:62)');
      }
      $description._v($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_97(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda$lambda$lambda_0($description, $title) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C52@1488L54,54@1544L39,52@1476L107:DiscordToggle.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-1015372107, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordToggle.<anonymous>.<anonymous>.<anonymous> (DiscordToggle.kt:52)');
      }
      sourceInformationMarkerStart($composer_0, -815017749, 'CC(remember):DiscordToggle.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = DiscordToggle$lambda$lambda$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1971889686, true, DiscordToggle$lambda$lambda$lambda$lambda_0($title), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_96(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (!($description._v == null)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(504389990);
        sourceInformation($composer_0, '59@1652L68,61@1722L53,59@1640L135');
        sourceInformationMarkerStart($composer_0, -815012487, 'CC(remember):DiscordToggle.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = DiscordToggle$lambda$lambda$lambda$lambda_1;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(101241243, true, DiscordToggle$lambda$lambda$lambda$lambda_2($description), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_0 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_2 = ComposableLambda$invoke$ref_97(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(504550477);
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
  function ComposableLambda$invoke$ref_98(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda$lambda_0($description, $title) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C49@1408L52,51@1462L337,49@1396L403:DiscordToggle.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-841605868, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordToggle.<anonymous>.<anonymous> (DiscordToggle.kt:49)');
      }
      sourceInformationMarkerStart($composer_0, -1329386744, 'CC(remember):DiscordToggle.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = DiscordToggle$lambda$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1015372107, true, DiscordToggle$lambda$lambda$lambda_0($description, $title), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_98(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_99(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda$lambda$lambda$lambda_3($onChange) {
    return function (it) {
      $onChange(it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda$lambda$lambda_1($id, $checked, $onChange) {
    return function ($this$Input) {
      $this$Input.id_e4l56n_k$($id);
      $this$Input.onChange_dxvo6i_k$(DiscordToggle$lambda$lambda$lambda$lambda_3($onChange));
      $this$Input.checked_fr7msi_k$($checked);
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda$lambda$lambda_2($this$Div) {
    $this$Div.classes_ayghm2_k$(['switch-slider', 'round']);
    return Unit_getInstance();
  }
  function DiscordToggle$lambda$lambda_1($id, $onChange, $checked) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C71@1884L164,69@1825L233,82@2080L57,82@2068L70:DiscordToggle.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-1678133059, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordToggle.<anonymous>.<anonymous> (DiscordToggle.kt:69)');
      }
      var tmp = Checkbox_getInstance();
      sourceInformationMarkerStart($composer_0, -2073131327, 'CC(remember):DiscordToggle.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.changed_ga7h3f_k$($id) | $composer_0.changed_ga7h3f_k$($onChange)) | $composer_0.changed_jpyyrz_k$($checked));
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = DiscordToggle$lambda$lambda$lambda_1($id, $checked, $onChange);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Input(tmp, tmp0_group, $composer_0, org_jetbrains_compose_web_attributes_InputType_Checkbox$stableprop_getter());
      sourceInformationMarkerStart($composer_0, -2073125162, 'CC(remember):DiscordToggle.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = DiscordToggle$lambda$lambda$lambda_2;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Div(tmp1_group, null, $composer_0, 6, 2);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_100(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda_7($description, $title, $id, $onChange, $checked) {
    return function ($this$Label, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C46@1327L57,48@1386L419,46@1315L490,68@1815L329,68@1811L333:DiscordToggle.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-1425540813, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.DiscordToggle.<anonymous> (DiscordToggle.kt:46)');
      }
      sourceInformationMarkerStart($composer_0, 149846764, 'CC(remember):DiscordToggle.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = DiscordToggle$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-841605868, true, DiscordToggle$lambda$lambda_0($description, $title), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_99(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(-1678133059, true, DiscordToggle$lambda$lambda_1($id, $onChange, $checked), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_100(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(null, tmp0_0, $composer_0, 48, 1);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_101(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function DiscordToggle$lambda_8($id, $title, $description, $checked, $onChange, $$changed, $$default) {
    return function ($composer, $force) {
      DiscordToggle_1($id, $title, $description._v, $checked, $onChange, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FieldWrappers(attrs, block, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-801665784);
    sourceInformation($composer_0, 'C(FieldWrappers)12@462L120,18@589L30,11@441L178:FieldWrappers.kt#5n9s4q');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(block) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-801665784, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.FieldWrappers (FieldWrappers.kt:10)');
      }
      sourceInformationMarkerStart($composer_0, -1601668192, 'CC(remember):FieldWrappers.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = FieldWrappers$lambda(attrs_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-768382393, true, FieldWrappers$lambda_0(block), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_102(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0_0, $composer_0, 48, 0);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(FieldWrappers$lambda_1(attrs_0, block, $changed, $default));
    }
  }
  function FieldWrapper(block, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1824609930);
    sourceInformation($composer_0, 'C(FieldWrapper)26@712L48,29@767L30,25@691L106:FieldWrappers.kt#5n9s4q');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(block) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1824609930, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.FieldWrapper (FieldWrappers.kt:24)');
      }
      sourceInformationMarkerStart($composer_0, -1103483450, 'CC(remember):FieldWrappers.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = FieldWrapper$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-987193961, true, FieldWrapper$lambda_0(block), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_103(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(FieldWrapper$lambda_1(block, $changed));
    }
  }
  function FieldInformation(block, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1054488783);
    sourceInformation($composer_0, 'C(FieldInformation)37@894L52,40@953L30,36@873L110:FieldWrappers.kt#5n9s4q');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(block) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1054488783, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.FieldInformation (FieldWrappers.kt:35)');
      }
      sourceInformationMarkerStart($composer_0, -248558749, 'CC(remember):FieldWrappers.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = FieldInformation$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-998558608, true, FieldInformation$lambda_0(block), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_104(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(FieldInformation$lambda_1(block, $changed));
    }
  }
  function FieldLabel(text, forId, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(369125944);
    sourceInformation($composer_0, 'C(FieldLabel)P(1)48@1062L26,48@1090L63,48@1050L103:FieldWrappers.kt#5n9s4q');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(forId) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(369125944, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.FieldLabel (FieldWrappers.kt:47)');
      }
      sourceInformationMarkerStart($composer_0, -1752251374, 'CC(remember):FieldWrappers.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = FieldLabel$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1535971161, true, FieldLabel$lambda_0(forId, text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_106(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(FieldLabel$lambda_1(text, forId, $changed));
    }
  }
  function FieldLabel_0(text, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-94454179);
    sourceInformation($composer_0, 'C(FieldLabel)57@1216L26,57@1244L56,57@1204L96:FieldWrappers.kt#5n9s4q');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-94454179, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.FieldLabel (FieldWrappers.kt:56)');
      }
      sourceInformationMarkerStart($composer_0, -576151273, 'CC(remember):FieldWrappers.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = FieldLabel$lambda_2;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-856085412, true, FieldLabel$lambda_3(text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_108(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(FieldLabel$lambda_4(text, $changed));
    }
  }
  function FieldWrappers$lambda($attrs) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$(['field-wrappers']);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$Div);
      }
      return Unit_getInstance();
    };
  }
  function FieldWrappers$lambda_0($block) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C19@605L8:FieldWrappers.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-768382393, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.FieldWrappers.<anonymous> (FieldWrappers.kt:19)');
      }
      $block($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_102(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function FieldWrappers$lambda_1($attrs, $block, $$changed, $$default) {
    return function ($composer, $force) {
      FieldWrappers($attrs._v, $block, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FieldWrapper$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-wrapper']);
    return Unit_getInstance();
  }
  function FieldWrapper$lambda_0($block) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C30@783L8:FieldWrappers.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-987193961, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.FieldWrapper.<anonymous> (FieldWrappers.kt:30)');
      }
      $block($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_103(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function FieldWrapper$lambda_1($block, $$changed) {
    return function ($composer, $force) {
      FieldWrapper($block, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function FieldInformation$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-information']);
    return Unit_getInstance();
  }
  function FieldInformation$lambda_0($block) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C41@969L8:FieldWrappers.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-998558608, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.FieldInformation.<anonymous> (FieldWrappers.kt:41)');
      }
      $block($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_104(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function FieldInformation$lambda_1($block, $$changed) {
    return function ($composer, $force) {
      FieldInformation($block, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function FieldLabel$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-title']);
    return Unit_getInstance();
  }
  function FieldLabel$lambda$lambda($text) {
    return function ($this$Label, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C50@1127L10:FieldWrappers.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-1858248968, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.FieldLabel.<anonymous>.<anonymous> (FieldWrappers.kt:50)');
      }
      Text($text, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_105(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function FieldLabel$lambda_0($forId, $text) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C49@1113L34,49@1100L47:FieldWrappers.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(1535971161, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.FieldLabel.<anonymous> (FieldWrappers.kt:49)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1858248968, true, FieldLabel$lambda$lambda($text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_105(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Label($forId, null, tmp0, $composer_0, 384, 2);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_106(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function FieldLabel$lambda_1($text, $forId, $$changed) {
    return function ($composer, $force) {
      FieldLabel($text, $forId, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function FieldLabel$lambda_2($this$Div) {
    $this$Div.classes_ayghm2_k$(['field-title']);
    return Unit_getInstance();
  }
  function FieldLabel$lambda$lambda_0($text) {
    return function ($this$Label, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C59@1274L10:FieldWrappers.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(2134352285, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.FieldLabel.<anonymous>.<anonymous> (FieldWrappers.kt:59)');
      }
      Text($text, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_107(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function FieldLabel$lambda_3($text) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C58@1260L34,58@1254L40:FieldWrappers.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-856085412, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.FieldLabel.<anonymous> (FieldWrappers.kt:58)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(2134352285, true, FieldLabel$lambda$lambda_0($text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_107(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Label(null, null, tmp0, $composer_0, 384, 3);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_108(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function FieldLabel$lambda_4($text, $$changed) {
    return function ($composer, $force) {
      FieldLabel_0($text, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RawHtml(rawHtml, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1258153543);
    sourceInformation($composer_0, 'C(RawHtml):RawHtml.kt#5n9s4q');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(rawHtml) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1258153543, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.RawHtml (RawHtml.kt:8)');
      }
      $composer_0.startMovableGroup_clfloq_k$(-2095211498, rawHtml);
      sourceInformation($composer_0, '13@592L420,13@579L434');
      sourceInformationMarkerStart($composer_0, -2095210389, 'CC(remember):RawHtml.kt#9igjgp');
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
  function SVGIcon(icon, attrs, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-549237606);
    sourceInformation($composer_0, 'C(SVGIcon)P(1)7@293L2,10@402L33:SVGIcon.kt#5n9s4q');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(icon) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        sourceInformationMarkerStart($composer_0, 463640444, 'CC(remember):SVGIcon.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        var it = this_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = SVGIcon$lambda;
          this_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        attrs_0._v = tmp0_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-549237606, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.SVGIcon (SVGIcon.kt:7)');
      }
      var tmp_1 = ensureNotNull(icon.get_html_wonit0_k$().querySelector('svg')).cloneNode(true);
      var svg = tmp_1 instanceof SVGElement ? tmp_1 : THROW_CCE();
      attrs_0._v(svg);
      RawHtml(toString(svg.outerHTML), $composer_0, 0);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(SVGIcon$lambda_0(icon, attrs_0, $changed, $default));
    }
  }
  function SVGIcon$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function SVGIcon$lambda_0($icon, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      SVGIcon($icon, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function StringSetTable(title, type, set, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1210207303);
    sourceInformation($composer_0, 'C(StringSetTable)P(1,2)20@826L1795,20@813L1808:StringSetTable.kt#5n9s4q');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(type) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(set) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1210207303, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.StringSetTable (StringSetTable.kt:19)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(162059955, true, StringSetTable$lambda_1(title, type, set), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_122(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      FieldWrapper(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(StringSetTable$lambda_2(title, type, set, $changed));
    }
  }
  function ComposableLambda$invoke$ref_109(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$StringSetTableKt$lambda$_1802331742$lambda_vax7b5($this$Th, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:StringSetTable.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-1802331742, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$StringSetTableKt.lambda$-1802331742.<anonymous> (StringSetTable.kt:31)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_110(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$StringSetTableKt$lambda$_1133171313$lambda_uvv1sy($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C49@1766L14:StringSetTable.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-1133171313, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$StringSetTableKt.lambda$-1133171313.<anonymous> (StringSetTable.kt:49)');
    }
    Text('Delete', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_111(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$StringSetTableKt$lambda$_1692329431$lambda_j3818q($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C80@2580L11:StringSetTable.kt#5n9s4q');
    if (isTraceInProgress()) {
      traceEventStart(-1692329431, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.ComposableSingletons$StringSetTableKt.lambda$-1692329431.<anonymous> (StringSetTable.kt:80)');
    }
    Text('Add', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$StringSetTableKt() {
    ComposableSingletons$StringSetTableKt_instance = this;
    var tmp = this;
    tmp.lambda$_1802331742_a5qi7x_1 = ComposableLambda$invoke$ref_109(composableLambdaInstance(-1802331742, false, ComposableSingletons$StringSetTableKt$lambda$_1802331742$lambda_vax7b5));
    var tmp_0 = this;
    tmp_0.lambda$_1133171313_zho26e_1 = ComposableLambda$invoke$ref_110(composableLambdaInstance(-1133171313, false, ComposableSingletons$StringSetTableKt$lambda$_1133171313$lambda_uvv1sy));
    var tmp_1 = this;
    tmp_1.lambda$_1692329431_pte7h6__1 = ComposableLambda$invoke$ref_111(composableLambdaInstance(-1692329431, false, ComposableSingletons$StringSetTableKt$lambda$_1692329431$lambda_j3818q));
  }
  protoOf(ComposableSingletons$StringSetTableKt).get_lambda$_1802331742_i6nkeh_k$ = function () {
    return this.lambda$_1802331742_a5qi7x_1;
  };
  protoOf(ComposableSingletons$StringSetTableKt).get_lambda$_1133171313_r7p584_k$ = function () {
    return this.lambda$_1133171313_zho26e_1;
  };
  protoOf(ComposableSingletons$StringSetTableKt).get_lambda$_1692329431_p7ttuo_k$ = function () {
    return this.lambda$_1692329431_pte7h6__1;
  };
  var ComposableSingletons$StringSetTableKt_instance;
  function ComposableSingletons$StringSetTableKt_getInstance() {
    if (ComposableSingletons$StringSetTableKt_instance == null)
      new ComposableSingletons$StringSetTableKt();
    return ComposableSingletons$StringSetTableKt_instance;
  }
  function StringSetTable$lambda($newString$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('newString', KMutableProperty0, true);
    return $newString$delegate.get_value_j01efc_k$();
  }
  function StringSetTable$lambda_0($newString$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('newString', KMutableProperty0, true);
    $newString$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function StringSetTable$lambda$lambda($title) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C22@867L17:StringSetTable.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-904885132, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.StringSetTable.<anonymous>.<anonymous> (StringSetTable.kt:22)');
        }
        FieldLabel_0($title, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_112(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda_0($this$Table) {
    $this$Table.classes_ayghm2_k$(['fancy-table']);
    return Unit_getInstance();
  }
  function StringSetTable$lambda$lambda$lambda$lambda$lambda($type) {
    return function ($this$Th, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C30@1034L10:StringSetTable.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-742108629, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.StringSetTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (StringSetTable.kt:30)');
      }
      Text($type, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_113(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda$lambda$lambda($type) {
    return function ($this$Tr, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C30@1032L14,30@1029L17,31@1067L5:StringSetTable.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-589975709, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.StringSetTable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (StringSetTable.kt:30)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-742108629, true, StringSetTable$lambda$lambda$lambda$lambda$lambda($type), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_113(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Th(null, tmp0, $composer_0, 48, 1);
      Th(null, ComposableSingletons$StringSetTableKt_getInstance().lambda$_1802331742_a5qi7x_1, $composer_0, 48, 1);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_114(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda$lambda($type) {
    return function ($this$Thead, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C29@1007L83,29@1004L86:StringSetTable.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-70665099, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.StringSetTable.<anonymous>.<anonymous>.<anonymous> (StringSetTable.kt:29)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-589975709, true, StringSetTable$lambda$lambda$lambda$lambda($type), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_114(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Tr(null, tmp0, $composer_0, 48, 1);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_115(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda$lambda$lambda$lambda_0($string) {
    return function ($this$Td, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C37@1217L12:StringSetTable.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-211053181, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.StringSetTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (StringSetTable.kt:37)');
      }
      Text($string, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_116(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda$lambda$lambda$lambda_1($this$Td) {
    $this$Td.classes_ayghm2_k$(['action-cell']);
    return Unit_getInstance();
  }
  function StringSetTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda($set, $string) {
    return function (it) {
      $set.remove_an8aut_k$($string);
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda$lambda$lambda$lambda$lambda($set, $string) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(StringSetTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda($set, $string));
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda$lambda$lambda$lambda_2($set, $string) {
    return function ($this$Td, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C43@1523L178,41@1377L433:StringSetTable.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(947447098, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.StringSetTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (StringSetTable.kt:41)');
      }
      var tmp = DiscordButtonType_NO_BACKGROUND_THEME_DEPENDENT_DARK_TEXT_getInstance();
      sourceInformationMarkerStart($composer_0, -36399764, 'CC(remember):StringSetTable.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changed_ga7h3f_k$($set) | $composer_0.changed_ga7h3f_k$($string));
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = StringSetTable$lambda$lambda$lambda$lambda$lambda$lambda($set, $string);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      DiscordButton(tmp, tmp0_group, ComposableSingletons$StringSetTableKt_getInstance().lambda$_1133171313_zho26e_1, $composer_0, 390, 0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_117(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda$lambda$lambda_0($string, $set) {
    return function ($this$Tr, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C37@1215L16,37@1212L19,38@1267L78,40@1347L489,38@1256L580:StringSetTable.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-227184705, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.StringSetTable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (StringSetTable.kt:37)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-211053181, true, StringSetTable$lambda$lambda$lambda$lambda$lambda_0($string), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_116(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Td(null, tmp0, $composer_0, 48, 1);
      sourceInformationMarkerStart($composer_0, 718833261, 'CC(remember):StringSetTable.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = StringSetTable$lambda$lambda$lambda$lambda$lambda_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(947447098, true, StringSetTable$lambda$lambda$lambda$lambda$lambda_2($set, $string), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_117(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Td(tmp0_group, tmp0_0, $composer_0, 54, 0);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_118(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda$lambda_0($set) {
    return function ($this$Tbody, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C*36@1186L672,36@1183L675:StringSetTable.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(1727691635, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.StringSetTable.<anonymous>.<anonymous>.<anonymous> (StringSetTable.kt:35)');
      }
      var _iterator__ex2g4s = $set.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var string = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-227184705, true, StringSetTable$lambda$lambda$lambda$lambda_0(string, $set), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_118(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Tr(null, tmp0, $composer_0, 48, 1);
      }
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_119(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda_1($type, $set) {
    return function ($this$Table, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C28@986L118,28@980L124,34@1123L767,34@1117L773:StringSetTable.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-1707366729, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.StringSetTable.<anonymous>.<anonymous> (StringSetTable.kt:28)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-70665099, true, StringSetTable$lambda$lambda$lambda($type), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_115(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Thead(null, tmp0, $composer_0, 48, 1);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(1727691635, true, StringSetTable$lambda$lambda$lambda_0($set), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_119(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Tbody(null, tmp0_0, $composer_0, 48, 1);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_120(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda_2($this$Div) {
    $this$Div.classes_ayghm2_k$(['add-mapping-form']);
    return Unit_getInstance();
  }
  function StringSetTable$lambda$lambda$lambda$lambda_1($newString$delegate) {
    return function (it) {
      StringSetTable$lambda_0($newString$delegate, it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda$lambda_1($type, $newString$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.attr_w68641_k$('placeholder', $type);
      $this$TextInput.onInput_uvnun8_k$(StringSetTable$lambda$lambda$lambda$lambda_1($newString$delegate));
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda$lambda$lambda_2($newString$delegate, $set) {
    return function (it) {
      var tmp;
      // Inline function 'kotlin.text.isNotBlank' call
      var this_0 = StringSetTable$lambda($newString$delegate);
      if (!isBlank(this_0)) {
        $set.add_wl2rvy_k$(StringSetTable$lambda($newString$delegate));
        StringSetTable$lambda_0($newString$delegate, '');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda$lambda_2($newString$delegate, $set) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(StringSetTable$lambda$lambda$lambda$lambda_2($newString$delegate, $set));
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda$lambda_3($newString$delegate, $type, $set) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C62@2076L142,62@2055L163,71@2306L241,69@2232L373:StringSetTable.kt#5n9s4q');
      if (isTraceInProgress()) {
        traceEventStart(-164201644, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.StringSetTable.<anonymous>.<anonymous> (StringSetTable.kt:62)');
      }
      var tmp = StringSetTable$lambda($newString$delegate);
      sourceInformationMarkerStart($composer_0, 1116011330, 'CC(remember):StringSetTable.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($type);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = StringSetTable$lambda$lambda$lambda_1($type, $newString$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TextInput(tmp, tmp0_group, $composer_0, 0, 0);
      var tmp_2 = DiscordButtonType_PRIMARY_getInstance();
      sourceInformationMarkerStart($composer_0, 1116018789, 'CC(remember):StringSetTable.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.changed_ga7h3f_k$($set);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = StringSetTable$lambda$lambda$lambda_2($newString$delegate, $set);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      DiscordButton(tmp_2, tmp1_group, ComposableSingletons$StringSetTableKt_getInstance().lambda$_1692329431_pte7h6__1, $composer_0, 390, 0);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_121(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda_1($title, $type, $set) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C21@853L41,21@836L58,25@918L46,27@966L934,25@904L996,57@1927L39,59@1988L51,61@2041L574,59@1976L639:StringSetTable.kt#5n9s4q');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(162059955, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.StringSetTable.<anonymous> (StringSetTable.kt:21)');
        }
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-904885132, true, StringSetTable$lambda$lambda($title), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_112(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        FieldInformation(tmp0, $composer_0, 6);
        sourceInformationMarkerStart($composer_0, 1120797089, 'CC(remember):StringSetTable.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = StringSetTable$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-1707366729, true, StringSetTable$lambda$lambda_1($type, $set), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_120(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Table(tmp0_group, tmp0_0, $composer_0, 54, 0);
        sourceInformationMarkerStart($composer_0, 1120829370, 'CC(remember):StringSetTable.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_2 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (false || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_2 = mutableStateOf('');
          $composer_0.updateRememberedValue_l1wh71_k$(value_2);
          tmp_6 = value_2;
        } else {
          tmp_6 = it_2;
        }
        var tmp_7 = tmp_6;
        var tmp1_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var newString$delegate = tmp1_group;
        sourceInformationMarkerStart($composer_0, 1120831334, 'CC(remember):StringSetTable.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_3 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (false || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_3 = StringSetTable$lambda$lambda_2;
          $composer_0.updateRememberedValue_l1wh71_k$(value_3);
          tmp_8 = value_3;
        } else {
          tmp_8 = it_3;
        }
        var tmp_9 = tmp_8;
        var tmp2_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_1 = rememberComposableLambda(-164201644, true, StringSetTable$lambda$lambda_3(newString$delegate, $type, $set), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        var it_4 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_10;
        if (invalid_1 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_4 = ComposableLambda$invoke$ref_121(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_4);
          tmp_10 = value_4;
        } else {
          tmp_10 = it_4;
        }
        var tmp_11 = tmp_10;
        var tmp0_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        Div(tmp2_group, tmp0_1, $composer_0, 54, 0);
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_getInstance();
        }
        tmp = tmp_12;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_122(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function StringSetTable$lambda_2($title, $type, $set, $$changed) {
    return function ($composer, $force) {
      StringSetTable($title, $type, $set, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_Color$stable;
  function Color_init_$Init$(red, green, blue, $this) {
    Color.call($this, (red & 255) << 16 | (green & 255) << 8 | blue & 255);
    return $this;
  }
  function Color_init_$Create$(red, green, blue) {
    return Color_init_$Init$(red, green, blue, objectCreate(protoOf(Color)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).fromHex_2of0eh_k$ = function (input) {
    return new Color(toInt_0(removePrefix(input, '#'), 16));
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Color(rgb) {
    Companion_getInstance_5();
    this.rgb_1 = rgb;
  }
  protoOf(Color).get_rgb_18ix0c_k$ = function () {
    return this.rgb_1;
  };
  protoOf(Color).get_red_18ix20_k$ = function () {
    return this.rgb_1 >> 16 & 255;
  };
  protoOf(Color).get_green_is36qi_k$ = function () {
    return this.rgb_1 >> 8 & 255;
  };
  protoOf(Color).get_blue_wojj4z_k$ = function () {
    return this.rgb_1 >> 0 & 255;
  };
  protoOf(Color).toHex_1tsk9s_k$ = function () {
    var redHex = padStart(toString_0(this.get_red_18ix20_k$(), 16), 2, _Char___init__impl__6a9atx(48));
    var greenHex = padStart(toString_0(this.get_green_is36qi_k$(), 16), 2, _Char___init__impl__6a9atx(48));
    var blueHex = padStart(toString_0(this.get_blue_wojj4z_k$(), 16), 2, _Char___init__impl__6a9atx(48));
    var hex = '#' + redHex + greenHex + blueHex;
    return hex;
  };
  protoOf(Color).component1_7eebsc_k$ = function () {
    return this.rgb_1;
  };
  protoOf(Color).copy_ns6qmb_k$ = function (rgb) {
    return new Color(rgb);
  };
  protoOf(Color).copy$default_nk9tcb_k$ = function (rgb, $super) {
    rgb = rgb === VOID ? this.rgb_1 : rgb;
    return $super === VOID ? this.copy_ns6qmb_k$(rgb) : $super.copy_ns6qmb_k$.call(this, rgb);
  };
  protoOf(Color).toString = function () {
    return 'Color(rgb=' + this.rgb_1 + ')';
  };
  protoOf(Color).hashCode = function () {
    return this.rgb_1;
  };
  protoOf(Color).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Color))
      return false;
    if (!(this.rgb_1 === other.rgb_1))
      return false;
    return true;
  };
  function com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_Color$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_Color$stable;
  }
  var com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_HSBColor$stable;
  function ColorPicker(m, checkmarkIconRawHtml, eyeDropperIconRawHtml, currentColor, onColorSelection, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-426195484);
    sourceInformation($composer_0, 'C(ColorPicker)P(3!1,2)32@1455L49,34@1506L19717,32@1443L19780:ColorPicker.kt#4x540j');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(m) : $composer_0.changedInstance_s1wkiy_k$(m)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(checkmarkIconRawHtml) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(eyeDropperIconRawHtml) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(currentColor) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onColorSelection) ? 16384 : 8192);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 9363) === 9362), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-426195484, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker (ColorPicker.kt:26)');
      }
      var colorToBeUsedAsABase = currentColor == null ? ColorUtils_getInstance().get_LorittaAqua_k5eh6u_k$() : currentColor;
      var colorAsHSB$delegate = mutableStateOf(createHSBColorFromArray(ColorUtils_getInstance().RGBtoHSB_c94wnc_k$(colorToBeUsedAsABase.get_red_18ix20_k$(), colorToBeUsedAsABase.get_green_is36qi_k$(), colorToBeUsedAsABase.get_blue_wojj4z_k$(), null)));
      var isCustomColor = !(currentColor == null) && !ColorUtils_getInstance().get_defaultColors_78fy08_k$().contains_aljjnj_k$(currentColor);
      sourceInformationMarkerStart($composer_0, -1551948619, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorPicker$lambda_1;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-519848989, true, ColorPicker$lambda_6(onColorSelection, currentColor, colorToBeUsedAsABase, m, checkmarkIconRawHtml, eyeDropperIconRawHtml, isCustomColor), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_153(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(ColorPicker$lambda_7(m, checkmarkIconRawHtml, eyeDropperIconRawHtml, currentColor, onColorSelection, $changed));
    }
  }
  function ColorSwatch(checkmarkIconRawHtml, currentColor, color, onColorSelection, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(749677561);
    sourceInformation($composer_0, 'C(ColorSwatch)P(!1,2)413@21393L244,423@21639L170,413@21378L431:ColorPicker.kt#4x540j');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(checkmarkIconRawHtml) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(currentColor) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(color) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onColorSelection) ? 2048 : 1024);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 1171) === 1170), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(749677561, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorSwatch (ColorPicker.kt:412)');
      }
      sourceInformationMarkerStart($composer_0, -1114364435, 'CC(remember):ColorPicker.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 896) === 256 | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorSwatch$lambda(color, onColorSelection);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1629197441, true, ColorSwatch$lambda_0(currentColor, color, checkmarkIconRawHtml), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_154(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp0_group, tmp0_0, $composer_0, 48, 0);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(ColorSwatch$lambda_1(checkmarkIconRawHtml, currentColor, color, onColorSelection, $changed));
    }
  }
  function ColorBoxAndHuePicker(currentColor, onColorSelection, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1306705556);
    sourceInformation($composer_0, 'C(ColorBoxAndHuePicker)439@22207L34,450@22580L4799,450@22576L4803:ColorPicker.kt#4x540j');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(currentColor) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onColorSelection) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1306705556, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorBoxAndHuePicker (ColorPicker.kt:433)');
      }
      var selectedHue$delegate = mutableStateOf(currentColor.hue_1);
      var selectedSaturation$delegate = mutableStateOf(currentColor.saturation_1);
      var selectedBrightness$delegate = mutableStateOf(currentColor.brightness_1);
      sourceInformationMarkerStart($composer_0, 1613601142, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var isHolding$delegate = tmp0_group;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1835888787, true, ColorBoxAndHuePicker$lambda_7(currentColor, selectedHue$delegate, selectedSaturation$delegate, selectedBrightness$delegate, onColorSelection, isHolding$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_158(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(null, tmp0, $composer_0, 48, 1);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(ColorBoxAndHuePicker$lambda_8(currentColor, onColorSelection, $changed));
    }
  }
  function ColorHuePicker(selectedHue, onHueChange, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1105949450);
    sourceInformation($composer_0, 'C(ColorHuePicker)P(1)578@27528L34,582@27635L1114,620@28751L180,582@27623L1308:ColorPicker.kt#4x540j');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(selectedHue) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onHueChange) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1105949450, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorHuePicker (ColorPicker.kt:575)');
      }
      println('RECOMPOSING HUE PICKER');
      sourceInformationMarkerStart($composer_0, 1960503628, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var isHolding$delegate = tmp0_group;
      println('[ColorHuePicker] isHolding? ' + ColorHuePicker$lambda(isHolding$delegate));
      sourceInformationMarkerStart($composer_0, 1960508132, 'CC(remember):ColorPicker.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ColorHuePicker$lambda_1(isHolding$delegate, onHueChange);
        tmp0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-780945877, true, ColorHuePicker$lambda_2(selectedHue), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_159(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp1_group, tmp0_0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(ColorHuePicker$lambda_3(selectedHue, onHueChange, $changed));
    }
  }
  function ColorPickerValueInput(label, endLabel, block, $composer, $changed, $default) {
    var endLabel_0 = {_v: endLabel};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1442116407);
    sourceInformation($composer_0, 'C(ColorPickerValueInput)P(2,1)632@29065L51,634@29118L27,632@29053L92,638@29155L30,638@29151L34,642@29203L55,644@29260L64,642@29191L133:ColorPicker.kt#4x540j');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(endLabel_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(block) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        endLabel_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1442116407, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPickerValueInput (ColorPicker.kt:631)');
      }
      sourceInformationMarkerStart($composer_0, -1400565654, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorPickerValueInput$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-315504842, true, ColorPickerValueInput$lambda_0(label), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_160(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(-1757623699, true, ColorPickerValueInput$lambda_1(block), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_161(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(null, tmp0_0, $composer_0, 48, 1);
      sourceInformationMarkerStart($composer_0, -1400561234, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_2 = this_1.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = ColorPickerValueInput$lambda_2;
        this_1.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_1 = rememberComposableLambda(-1585209618, true, ColorPickerValueInput$lambda_3(endLabel_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      var it_3 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_1 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_3 = ComposableLambda$invoke$ref_162(dispatchReceiver_1);
        $composer_3.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp0_1 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Div(tmp1_group, tmp0_1, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(ColorPickerValueInput$lambda_4(label, endLabel_0, block, $changed, $default));
    }
  }
  function GabrielaColorPreview(currentColor, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1176648130);
    sourceInformation($composer_0, 'C(GabrielaColorPreview)656@29590L69,658@29676L95,658@29665L106,664@29789L49,666@29840L631,664@29777L694:ColorPicker.kt#4x540j');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(currentColor) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1176648130, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.GabrielaColorPreview (ColorPicker.kt:652)');
      }
      println('RECOMPOSING GabrielaColorPreviewer ' + currentColor.toString());
      sourceInformationMarkerStart($composer_0, -1182446525, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf(new GabrielaColorPreviewCanvas(currentColor));
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var gabiCanvas$delegate = tmp0_group;
      sourceInformationMarkerStart($composer_0, -1182443747, 'CC(remember):ColorPicker.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = GabrielaColorPreview$lambda_0(currentColor, gabiCanvas$delegate);
        tmp0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      SideEffect(tmp1_group, $composer_0, 0);
      sourceInformationMarkerStart($composer_0, -1182440177, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_1 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = GabrielaColorPreview$lambda_1;
        this_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1117788925, true, GabrielaColorPreview$lambda_2(gabiCanvas$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = ComposableLambda$invoke$ref_163(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp2_group, tmp0_0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(GabrielaColorPreview$lambda_3(currentColor, $changed));
    }
  }
  function createHSBColorFromArray(array) {
    return new HSBColor(array[0], array[1], array[2]);
  }
  function HSBColor(hue, saturation, brightness) {
    this.hue_1 = hue;
    this.saturation_1 = saturation;
    this.brightness_1 = brightness;
  }
  protoOf(HSBColor).get_hue_18j435_k$ = function () {
    return this.hue_1;
  };
  protoOf(HSBColor).get_saturation_nzhaqt_k$ = function () {
    return this.saturation_1;
  };
  protoOf(HSBColor).get_brightness_9gcpba_k$ = function () {
    return this.brightness_1;
  };
  protoOf(HSBColor).component1_7eebsc_k$ = function () {
    return this.hue_1;
  };
  protoOf(HSBColor).component2_7eebsb_k$ = function () {
    return this.saturation_1;
  };
  protoOf(HSBColor).component3_7eebsa_k$ = function () {
    return this.brightness_1;
  };
  protoOf(HSBColor).copy_d9b97h_k$ = function (hue, saturation, brightness) {
    return new HSBColor(hue, saturation, brightness);
  };
  protoOf(HSBColor).copy$default_7pyll2_k$ = function (hue, saturation, brightness, $super) {
    hue = hue === VOID ? this.hue_1 : hue;
    saturation = saturation === VOID ? this.saturation_1 : saturation;
    brightness = brightness === VOID ? this.brightness_1 : brightness;
    return $super === VOID ? this.copy_d9b97h_k$(hue, saturation, brightness) : $super.copy_d9b97h_k$.call(this, hue, saturation, brightness);
  };
  protoOf(HSBColor).toString = function () {
    return 'HSBColor(hue=' + this.hue_1 + ', saturation=' + this.saturation_1 + ', brightness=' + this.brightness_1 + ')';
  };
  protoOf(HSBColor).hashCode = function () {
    var result = getNumberHashCode(this.hue_1);
    result = imul(result, 31) + getNumberHashCode(this.saturation_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.brightness_1) | 0;
    return result;
  };
  protoOf(HSBColor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HSBColor))
      return false;
    if (!equals(this.hue_1, other.hue_1))
      return false;
    if (!equals(this.saturation_1, other.saturation_1))
      return false;
    if (!equals(this.brightness_1, other.brightness_1))
      return false;
    return true;
  };
  function com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_HSBColor$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_HSBColor$stable;
  }
  function ComposableLambda$invoke$ref_123(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$ColorPickerKt$lambda$1791589789$lambda($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C306@16645L21:ColorPicker.kt#4x540j');
    if (isTraceInProgress()) {
      traceEventStart(1791589789, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ComposableSingletons$ColorPickerKt.lambda$1791589789.<anonymous> (ColorPicker.kt:306)');
    }
    Text('Cor Aleat\xF3ria', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_124(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$ColorPickerKt$lambda$1261882644$lambda($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C327@17785L28:ColorPicker.kt#4x540j');
    if (isTraceInProgress()) {
      traceEventStart(1261882644, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ComposableSingletons$ColorPickerKt.lambda$1261882644.<anonymous> (ColorPicker.kt:327)');
    }
    Text('Cor Padr\xE3o Aleat\xF3ria', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_125(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$ColorPickerKt$lambda$_505821547$lambda_adk25j($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C340@18405L30:ColorPicker.kt#4x540j');
    if (isTraceInProgress()) {
      traceEventStart(-505821547, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ComposableSingletons$ColorPickerKt.lambda$-505821547.<anonymous> (ColorPicker.kt:340)');
    }
    Text('Cor Vibrante Aleat\xF3ria', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_126(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$ColorPickerKt$lambda$2021441558$lambda($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C362@19554L28:ColorPicker.kt#4x540j');
    if (isTraceInProgress()) {
      traceEventStart(2021441558, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ComposableSingletons$ColorPickerKt.lambda$2021441558.<anonymous> (ColorPicker.kt:362)');
    }
    Text('Cor Pastel Aleat\xF3ria', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_127(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$ColorPickerKt$lambda$_2037999989$lambda_6r8opr($this$DiscordButton, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C379@20309L15:ColorPicker.kt#4x540j');
    if (isTraceInProgress()) {
      traceEventStart(-2037999989, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ComposableSingletons$ColorPickerKt.lambda$-2037999989.<anonymous> (ColorPicker.kt:379)');
    }
    Text('Aplicar', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ColorPickerKt() {
    ComposableSingletons$ColorPickerKt_instance = this;
    var tmp = this;
    tmp.lambda$1791589789__1 = ComposableLambda$invoke$ref_123(composableLambdaInstance(1791589789, false, ComposableSingletons$ColorPickerKt$lambda$1791589789$lambda));
    var tmp_0 = this;
    tmp_0.lambda$1261882644__1 = ComposableLambda$invoke$ref_124(composableLambdaInstance(1261882644, false, ComposableSingletons$ColorPickerKt$lambda$1261882644$lambda));
    var tmp_1 = this;
    tmp_1.lambda$_505821547_lkch2t_1 = ComposableLambda$invoke$ref_125(composableLambdaInstance(-505821547, false, ComposableSingletons$ColorPickerKt$lambda$_505821547$lambda_adk25j));
    var tmp_2 = this;
    tmp_2.lambda$2021441558__1 = ComposableLambda$invoke$ref_126(composableLambdaInstance(2021441558, false, ComposableSingletons$ColorPickerKt$lambda$2021441558$lambda));
    var tmp_3 = this;
    tmp_3.lambda$_2037999989_hch4el_1 = ComposableLambda$invoke$ref_127(composableLambdaInstance(-2037999989, false, ComposableSingletons$ColorPickerKt$lambda$_2037999989$lambda_6r8opr));
  }
  protoOf(ComposableSingletons$ColorPickerKt).get_lambda$1791589789_6q7lrv_k$ = function () {
    return this.lambda$1791589789__1;
  };
  protoOf(ComposableSingletons$ColorPickerKt).get_lambda$1261882644_yew5et_k$ = function () {
    return this.lambda$1261882644__1;
  };
  protoOf(ComposableSingletons$ColorPickerKt).get_lambda$_505821547_altlrh_k$ = function () {
    return this.lambda$_505821547_lkch2t_1;
  };
  protoOf(ComposableSingletons$ColorPickerKt).get_lambda$2021441558_w8pwuh_k$ = function () {
    return this.lambda$2021441558__1;
  };
  protoOf(ComposableSingletons$ColorPickerKt).get_lambda$_2037999989_erzolv_k$ = function () {
    return this.lambda$_2037999989_hch4el_1;
  };
  var ComposableSingletons$ColorPickerKt_instance;
  function ComposableSingletons$ColorPickerKt_getInstance() {
    if (ComposableSingletons$ColorPickerKt_instance == null)
      new ComposableSingletons$ColorPickerKt();
    return ComposableSingletons$ColorPickerKt_instance;
  }
  function ColorPicker$lambda($colorAsHSB$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorAsHSB', KMutableProperty0, true);
    return $colorAsHSB$delegate.get_value_j01efc_k$();
  }
  function ColorPicker$lambda_0($colorAsHSB$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('colorAsHSB', KMutableProperty0, true);
    $colorAsHSB$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ColorPicker$lambda_1($this$Div) {
    $this$Div.classes_ayghm2_k$(['discord-color-selector']);
    return Unit_getInstance();
  }
  function ColorPicker$lambda_2($colorAsHSB$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorAsHSB', KMutableProperty0, true);
    return $colorAsHSB$delegate.get_value_j01efc_k$();
  }
  function ColorPicker$lambda_3($colorAsHSB$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('colorAsHSB', KMutableProperty0, true);
    $colorAsHSB$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ColorPicker$lambda_4($hexString$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('hexString', KMutableProperty0, true);
    return $hexString$delegate.get_value_j01efc_k$();
  }
  function ColorPicker$lambda_5($hexString$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('hexString', KMutableProperty0, true);
    $hexString$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ColorPicker$lambda$lambda$lambda($onColorSelection) {
    return function (it) {
      $onColorSelection(null);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda($onColorSelection) {
    return function ($this$Button) {
      type($this$Button, ButtonType_Button_getInstance());
      $this$Button.classes_ayghm2_k$(['big-color-swatch']);
      $this$Button.onClick_q9cds6_k$(ColorPicker$lambda$lambda$lambda($onColorSelection));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda_0($this$SVGIcon) {
    var tmp = $this$SVGIcon.classList;
    // Inline function 'web.cssom.ClassName' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'selected-icon';
    tmp.add(tmp$ret$3);
    return Unit_getInstance();
  }
  function ColorPicker$lambda$lambda_0($currentColor, $checkmarkIconRawHtml) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(2095447913, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous> (ColorPicker.kt:43)');
      }
      if ($currentColor == null) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-614215528);
        sourceInformation($composer_0, '44@1789L81,44@1759L111');
        sourceInformationMarkerStart($composer_0, -614214598, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorPicker$lambda$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        SVGIcon($checkmarkIconRawHtml, tmp0_group, $composer_0, 48, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1860705511);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_128(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda_1($currentColor) {
    return function ($this$style) {
      var tmp;
      if (!($currentColor == null)) {
        backgroundColor($this$style, rgb($currentColor.get_red_18ix20_k$(), $currentColor.get_green_is36qi_k$(), $currentColor.get_blue_wojj4z_k$()));
        var brightness = ColorUtils_getInstance().calculateBrightness_ra7ahy_k$($currentColor);
        var tmp_0;
        if (brightness >= 0.65) {
          color($this$style, rgb(0, 0, 0));
          tmp_0 = Unit_getInstance();
        } else {
          color($this$style, rgb(255, 255, 255));
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_129(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['color-picker-wrapper']);
    return Unit_getInstance();
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['color-picker-elements']);
    return Unit_getInstance();
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['color-picker-box-and-hue']);
    return Unit_getInstance();
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($colorAsHSB$delegate) {
    return function (it) {
      ColorPicker$lambda_3($colorAsHSB$delegate, it);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($this$Div) {
    $this$Div.classes_ayghm2_k$(['quick-color-palette']);
    return Unit_getInstance();
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['quick-color-swatch-combo']);
    return Unit_getInstance();
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($colorAsHSB$delegate) {
    return function (it) {
      ColorPicker$lambda_3($colorAsHSB$delegate, createHSBColorFromArray(ColorUtils_getInstance().RGBtoHSB_c94wnc_k$(it.get_red_18ix20_k$(), it.get_green_is36qi_k$(), it.get_blue_wojj4z_k$(), null)));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($colorAsHSB$delegate) {
    return function (it) {
      ColorPicker$lambda_3($colorAsHSB$delegate, createHSBColorFromArray(ColorUtils_getInstance().RGBtoHSB_c94wnc_k$(it.get_red_18ix20_k$(), it.get_green_is36qi_k$(), it.get_blue_wojj4z_k$(), null)));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($checkmarkIconRawHtml, $colorAsRGB, $colorUp, $colorAsHSB$delegate, $colorDown) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C105@4787L602,105@4732L657,115@5495L602,115@5438L659:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-2143087367, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:105)');
      }
      sourceInformationMarkerStart($composer_0, 2077346355, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($colorAsHSB$delegate);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($colorAsHSB$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      ColorSwatch($checkmarkIconRawHtml, $colorAsRGB, $colorUp, tmp0_group, $composer_0, 0);
      sourceInformationMarkerStart($composer_0, 2077369011, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.changed_ga7h3f_k$($colorAsHSB$delegate);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($colorAsHSB$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      ColorSwatch($checkmarkIconRawHtml, $colorAsRGB, $colorDown, tmp1_group, $composer_0, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_130(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($checkmarkIconRawHtml, $colorAsRGB, $colorAsHSB$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C*102@4549L131,104@4682L1461,102@4537L1606:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-1768812198, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:101)');
      }
      var _iterator__ex2g4s = ColorUtils_getInstance().get_defaultColorsCombo_4fi0zq_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
        var colorUp = _destruct__k2r9zo.component1_7eebsc_k$();
        var colorDown = _destruct__k2r9zo.component2_7eebsb_k$();
        sourceInformationMarkerStart($composer_0, 978532189, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(583835676, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($checkmarkIconRawHtml, $colorAsRGB, colorUp, $colorAsHSB$delegate, colorDown), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_130(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp0_group, tmp0, $composer_0, 54, 0);
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_131(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($colorAsHSB$delegate, $checkmarkIconRawHtml, $colorAsRGB) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C94@4132L95,94@4099L128,98@4277L110,100@4389L1834,98@4265L1958:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-1277526949, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:94)');
      }
      var tmp = ColorPicker$lambda_2($colorAsHSB$delegate);
      sourceInformationMarkerStart($composer_0, 657251034, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($colorAsHSB$delegate);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($colorAsHSB$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      ColorBoxAndHuePicker(tmp, tmp0_group, $composer_0, 0);
      sourceInformationMarkerStart($composer_0, 657255689, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1768812198, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($checkmarkIconRawHtml, $colorAsRGB, $colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_131(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      var tmp_6;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_6 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_132(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($this$Div) {
    $this$Div.classes_ayghm2_k$(['color-picker-values-grid']);
    return Unit_getInstance();
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($colorAsHSB$delegate, $colorAsRGB) {
    return function (it) {
      ColorPicker$lambda_3($colorAsHSB$delegate, createHSBColorFromArray(ColorUtils_getInstance().RGBtoHSB_c94wnc_k$(coerceIn_0(numberToInt(ensureNotNull(it.get_value_j01efc_k$())), numberRangeToNumber(0, 255)), $colorAsRGB.get_green_is36qi_k$(), $colorAsRGB.get_blue_wojj4z_k$(), null)));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($colorAsHSB$delegate, $colorAsRGB) {
    return function ($this$NumberInput) {
      $this$NumberInput.onInput_uvnun8_k$(ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($colorAsHSB$delegate, $colorAsRGB));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($colorAsRGB, $colorAsHSB$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C138@6736L751,136@6613L874:ColorPicker.kt#4x540j');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(1946177711, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:136)');
        }
        var tmp_0 = $colorAsRGB.get_red_18ix20_k$();
        sourceInformationMarkerStart($composer_0, 1966012670, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.changed_ga7h3f_k$($colorAsHSB$delegate) | $composer_0.changed_ga7h3f_k$($colorAsRGB));
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($colorAsHSB$delegate, $colorAsRGB);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        NumberInput(tmp_0, null, null, tmp0_group, $composer_0, 0, 6);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_133(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($colorAsHSB$delegate, $colorAsRGB) {
    return function (it) {
      ColorPicker$lambda_3($colorAsHSB$delegate, createHSBColorFromArray(ColorUtils_getInstance().RGBtoHSB_c94wnc_k$($colorAsRGB.get_red_18ix20_k$(), coerceIn_0(numberToInt(ensureNotNull(it.get_value_j01efc_k$())), numberRangeToNumber(0, 255)), $colorAsRGB.get_green_is36qi_k$(), null)));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($colorAsHSB$delegate, $colorAsRGB) {
    return function ($this$NumberInput) {
      $this$NumberInput.onInput_uvnun8_k$(ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($colorAsHSB$delegate, $colorAsRGB));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($colorAsRGB, $colorAsHSB$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C156@7798L750,156@7768L780:ColorPicker.kt#4x540j');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-1856218202, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:156)');
        }
        var tmp_0 = $colorAsRGB.get_green_is36qi_k$();
        sourceInformationMarkerStart($composer_0, -1414261100, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.changed_ga7h3f_k$($colorAsHSB$delegate) | $composer_0.changed_ga7h3f_k$($colorAsRGB));
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($colorAsHSB$delegate, $colorAsRGB);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        NumberInput(tmp_0, null, null, tmp0_group, $composer_0, 0, 6);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_134(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($colorAsHSB$delegate, $colorAsRGB) {
    return function (it) {
      ColorPicker$lambda_3($colorAsHSB$delegate, createHSBColorFromArray(ColorUtils_getInstance().RGBtoHSB_c94wnc_k$($colorAsRGB.get_red_18ix20_k$(), $colorAsRGB.get_green_is36qi_k$(), coerceIn_0(numberToInt(ensureNotNull(it.get_value_j01efc_k$())), numberRangeToNumber(0, 255)), null)));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($colorAsHSB$delegate, $colorAsRGB) {
    return function ($this$NumberInput) {
      $this$NumberInput.onInput_uvnun8_k$(ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($colorAsHSB$delegate, $colorAsRGB));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($colorAsRGB, $colorAsHSB$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C174@8858L750,174@8829L779:ColorPicker.kt#4x540j');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-729214233, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:174)');
        }
        var tmp_0 = $colorAsRGB.get_blue_wojj4z_k$();
        sourceInformationMarkerStart($composer_0, -695205515, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.changed_ga7h3f_k$($colorAsHSB$delegate) | $composer_0.changed_ga7h3f_k$($colorAsRGB));
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($colorAsHSB$delegate, $colorAsRGB);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        NumberInput(tmp_0, null, null, tmp0_group, $composer_0, 0, 6);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_135(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($colorAsHSB$delegate) {
    return function (it) {
      println('Value of hue float: ' + numberToDouble(ensureNotNull(it.get_value_j01efc_k$())) / 360);
      ColorPicker$lambda_3($colorAsHSB$delegate, ColorPicker$lambda_2($colorAsHSB$delegate).copy$default_7pyll2_k$(coerceIn_1(numberToDouble(ensureNotNull(it.get_value_j01efc_k$())) / 360, rangeTo(0.0, 1.0))));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($colorAsHSB$delegate) {
    return function ($this$NumberInput) {
      $this$NumberInput.onInput_uvnun8_k$(ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($colorAsHSB$delegate));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($colorAsHSB$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C193@9999L514,193@9949L564:ColorPicker.kt#4x540j');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(397789736, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:193)');
        }
        var tmp_0 = numberToInt(ColorPicker$lambda_2($colorAsHSB$delegate).hue_1 * 360 + 0.5);
        sourceInformationMarkerStart($composer_0, 23850538, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($colorAsHSB$delegate);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($colorAsHSB$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        NumberInput(tmp_0, null, null, tmp0_group, $composer_0, 0, 6);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_136(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($colorAsHSB$delegate) {
    return function (it) {
      println('Value of saturation float: ' + numberToDouble(ensureNotNull(it.get_value_j01efc_k$())) / 100);
      ColorPicker$lambda_3($colorAsHSB$delegate, ColorPicker$lambda_2($colorAsHSB$delegate).copy$default_7pyll2_k$(VOID, coerceIn_1(numberToDouble(ensureNotNull(it.get_value_j01efc_k$())) / 100, rangeTo(0.0, 1.0))));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($colorAsHSB$delegate) {
    return function ($this$NumberInput) {
      $this$NumberInput.onInput_uvnun8_k$(ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($colorAsHSB$delegate));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($colorAsHSB$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C208@10915L528,208@10858L585:ColorPicker.kt#4x540j');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(1524793705, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:208)');
        }
        var tmp_0 = numberToInt(ColorPicker$lambda_2($colorAsHSB$delegate).saturation_1 * 100 + 0.5);
        sourceInformationMarkerStart($composer_0, 742906393, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($colorAsHSB$delegate);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($colorAsHSB$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        NumberInput(tmp_0, null, null, tmp0_group, $composer_0, 0, 6);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_137(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($colorAsHSB$delegate) {
    return function (it) {
      ColorPicker$lambda_3($colorAsHSB$delegate, ColorPicker$lambda_2($colorAsHSB$delegate).copy$default_7pyll2_k$(VOID, VOID, coerceIn_1(numberToDouble(ensureNotNull(it.get_value_j01efc_k$())) / 100, rangeTo(0.0, 1.0))));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($colorAsHSB$delegate) {
    return function ($this$NumberInput) {
      $this$NumberInput.onInput_uvnun8_k$(ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($colorAsHSB$delegate));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7($colorAsHSB$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C223@11842L406,223@11785L463:ColorPicker.kt#4x540j');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-1643169622, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:223)');
        }
        var tmp_0 = numberToInt(ColorPicker$lambda_2($colorAsHSB$delegate).brightness_1 * 100 + 0.5);
        sourceInformationMarkerStart($composer_0, 1461961888, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($colorAsHSB$delegate);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($colorAsHSB$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        NumberInput(tmp_0, null, null, tmp0_group, $composer_0, 0, 6);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_138(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7($hexString$delegate, $colorAsHSB$delegate) {
    return function (it) {
      var valid = startsWith(it.get_value_j01efc_k$(), '#') && it.get_value_j01efc_k$().length === 7;
      ColorPicker$lambda_5($hexString$delegate, it.get_value_j01efc_k$());
      var tmp;
      if (!valid) {
        return Unit_getInstance();
      }
      var newColor = ColorUtils_getInstance().convertFromHexToColor_k27hhs_k$(removePrefix(it.get_value_j01efc_k$(), '#'));
      ColorPicker$lambda_3($colorAsHSB$delegate, createHSBColorFromArray(ColorUtils_getInstance().RGBtoHSB_c94wnc_k$(newColor.get_red_18ix20_k$(), newColor.get_green_is36qi_k$(), newColor.get_blue_wojj4z_k$(), null)));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7($hexString$delegate, $colorAsHSB$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.onInput_uvnun8_k$(ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7($hexString$delegate, $colorAsHSB$delegate));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8($hexString$delegate, $colorAsHSB$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C244@12960L1295,244@12939L1316:ColorPicker.kt#4x540j');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-516165653, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:244)');
        }
        var tmp_0 = ColorPicker$lambda_4($hexString$delegate);
        sourceInformationMarkerStart($composer_0, -2113950054, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.changed_ga7h3f_k$($hexString$delegate) | $composer_0.changed_ga7h3f_k$($colorAsHSB$delegate));
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7($hexString$delegate, $colorAsHSB$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        TextInput(tmp_0, tmp0_group, $composer_0, 0, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_139(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8($colorAsHSB$delegate) {
    return function (it) {
      var valid = !(toIntOrNull(it.get_value_j01efc_k$()) == null);
      var tmp;
      if (!valid) {
        return Unit_getInstance();
      }
      var newColor = new Color(toInt(it.get_value_j01efc_k$()));
      // Inline function 'kotlin.let' call
      var it_0 = ColorUtils_getInstance().RGBtoHSB_c94wnc_k$(newColor.get_red_18ix20_k$(), newColor.get_green_is36qi_k$(), newColor.get_blue_wojj4z_k$(), null);
      var tmp$ret$1 = new HSBColor(it_0[0], it_0[1], it_0[2]);
      ColorPicker$lambda_3($colorAsHSB$delegate, tmp$ret$1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8($colorAsHSB$delegate) {
    return function ($this$TextInput) {
      $this$TextInput.onInput_uvnun8_k$(ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8($colorAsHSB$delegate));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9($colorAsRGB, $colorAsHSB$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C269@14579L1158,269@14542L1195:ColorPicker.kt#4x540j');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(610838316, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:269)');
        }
        var tmp_0 = $colorAsRGB.get_rgb_18ix0c_k$().toString();
        sourceInformationMarkerStart($composer_0, -1394894062, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($colorAsHSB$delegate);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8($colorAsHSB$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        TextInput(tmp_0, tmp0_group, $composer_0, 0, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_140(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($colorAsRGB, $colorAsHSB$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C135@6567L962,133@6450L1117,155@7722L868,153@7605L1023,173@8783L867,171@8666L1022,192@9903L652,189@9726L867,207@10812L673,204@10631L892,222@11739L551,219@11561L767,233@12383L345,243@12893L1404,241@12766L1569,268@14496L1283,266@14373L1444:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(1685132370, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:133)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1946177711, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($colorAsRGB, $colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_133(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      ColorPickerValueInput('R:', null, tmp0, $composer_0, 390, 2);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(-1856218202, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($colorAsRGB, $colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_134(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      ColorPickerValueInput('G:', null, tmp0_0, $composer_0, 390, 2);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_1 = rememberComposableLambda(-729214233, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($colorAsRGB, $colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_135(dispatchReceiver_1);
        $composer_3.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      ColorPickerValueInput('B:', null, tmp0_1, $composer_0, 390, 2);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_2 = rememberComposableLambda(397789736, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_4 = $composer_0;
      sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_4.changed_ga7h3f_k$(dispatchReceiver_2);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_4.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_2 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = ComposableLambda$invoke$ref_136(dispatchReceiver_2);
        $composer_4.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_2 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_4);
      ColorPickerValueInput('Matiz:', '\xB0', tmp0_2, $composer_0, 438, 0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_3 = rememberComposableLambda(1524793705, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_5 = $composer_0;
      sourceInformationMarkerStart($composer_5, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = $composer_5.changed_ga7h3f_k$(dispatchReceiver_3);
      // Inline function 'kotlin.let' call
      var it_3 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_3 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_3 = ComposableLambda$invoke$ref_137(dispatchReceiver_3);
        $composer_5.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp0_3 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_5);
      ColorPickerValueInput('Satura\xE7\xE3o:', '%', tmp0_3, $composer_0, 438, 0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_4 = rememberComposableLambda(-1643169622, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7($colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_6 = $composer_0;
      sourceInformationMarkerStart($composer_6, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = $composer_6.changed_ga7h3f_k$(dispatchReceiver_4);
      // Inline function 'kotlin.let' call
      var it_4 = $composer_6.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_4 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_4 = ComposableLambda$invoke$ref_138(dispatchReceiver_4);
        $composer_6.updateRememberedValue_l1wh71_k$(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp0_4 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_6);
      ColorPickerValueInput('Brilho:', '%', tmp0_4, $composer_0, 438, 0);
      sourceInformationMarkerStart($composer_0, 209728395, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_5 = $composer_0.changed_ga7h3f_k$($colorAsRGB);
      // Inline function 'kotlin.let' call
      var it_5 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (invalid_5 || it_5 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_5 = mutableStateOf(ColorUtils_getInstance().convertFromColorToHex_giexfm_k$($colorAsRGB.get_rgb_18ix0c_k$()));
        $composer_0.updateRememberedValue_l1wh71_k$(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp0_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var hexString$delegate = tmp0_group;
      // Inline function 'kotlin.run' call
      var dispatchReceiver_5 = rememberComposableLambda(-516165653, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(hexString$delegate, $colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_7 = $composer_0;
      sourceInformationMarkerStart($composer_7, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_6 = $composer_7.changed_ga7h3f_k$(dispatchReceiver_5);
      // Inline function 'kotlin.let' call
      var it_6 = $composer_7.rememberedValue_4dg93v_k$();
      var tmp_13;
      if (invalid_6 || it_6 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_6 = ComposableLambda$invoke$ref_139(dispatchReceiver_5);
        $composer_7.updateRememberedValue_l1wh71_k$(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmp0_5 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      sourceInformationMarkerEnd($composer_7);
      ColorPickerValueInput('Hexadecimal:', null, tmp0_5, $composer_0, 390, 2);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_6 = rememberComposableLambda(610838316, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9($colorAsRGB, $colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_8 = $composer_0;
      sourceInformationMarkerStart($composer_8, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_7 = $composer_8.changed_ga7h3f_k$(dispatchReceiver_6);
      // Inline function 'kotlin.let' call
      var it_7 = $composer_8.rememberedValue_4dg93v_k$();
      var tmp_15;
      if (invalid_7 || it_7 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_7 = ComposableLambda$invoke$ref_140(dispatchReceiver_6);
        $composer_8.updateRememberedValue_l1wh71_k$(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = it_7;
      }
      var tmp_16 = tmp_15;
      var tmp0_6 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      sourceInformationMarkerEnd($composer_8);
      ColorPickerValueInput('Decimal:', null, tmp0_6, $composer_0, 390, 2);
      var tmp_17;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_17 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_141(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda_0($colorAsHSB$delegate, $checkmarkIconRawHtml, $colorAsRGB) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C91@3952L107,93@4061L2196,91@3940L2317,130@6303L107,132@6412L9439,130@6291L9560,291@15885L32:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-869164644, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:91)');
      }
      sourceInformationMarkerStart($composer_0, -2043565881, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1277526949, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($colorAsHSB$delegate, $checkmarkIconRawHtml, $colorAsRGB), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_132(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      sourceInformationMarkerStart($composer_0, -2043490649, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(1685132370, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($colorAsRGB, $colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = ComposableLambda$invoke$ref_141(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
      GabrielaColorPreview(ColorPicker$lambda_2($colorAsHSB$delegate), $composer_0, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_142(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda_1($this$Div) {
    $this$Div.classes_ayghm2_k$(['color-picker-random-buttons']);
    return Unit_getInstance();
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9($colorAsHSB$delegate) {
    return function (it) {
      ColorPicker$lambda_3($colorAsHSB$delegate, new HSBColor(Default_getInstance().nextFloat_jqti5l_k$(), Default_getInstance().nextFloat_jqti5l_k$(), Default_getInstance().nextFloat_jqti5l_k$()));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10($colorAsHSB$delegate) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9($colorAsHSB$delegate));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($colorAsHSB$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C300@16291L273,298@16169L535:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-1411654574, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:298)');
      }
      var tmp = DiscordButtonType_PRIMARY_getInstance();
      sourceInformationMarkerStart($composer_0, 609625315, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($colorAsHSB$delegate);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10($colorAsHSB$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      DiscordButton(tmp, tmp0_group, ComposableSingletons$ColorPickerKt_getInstance().lambda$1791589789__1, $composer_0, 390, 0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_143(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10($colorAsHSB$delegate) {
    return function (it) {
      // Inline function 'kotlin.collections.random' call
      var this_0 = ColorUtils_getInstance().get_defaultColors_78fy08_k$();
      var newColor = random(this_0, Default_getInstance());
      // Inline function 'kotlin.let' call
      var it_0 = ColorUtils_getInstance().RGBtoHSB_c94wnc_k$(newColor.get_red_18ix20_k$(), newColor.get_green_is36qi_k$(), newColor.get_blue_wojj4z_k$(), null);
      var tmp$ret$2 = new HSBColor(it_0[0], it_0[1], it_0[2]);
      ColorPicker$lambda_3($colorAsHSB$delegate, tmp$ret$2);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11($colorAsHSB$delegate) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10($colorAsHSB$delegate));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($colorAsHSB$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C313@16936L768,311@16814L1037:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-1859366263, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:311)');
      }
      var tmp = DiscordButtonType_PRIMARY_getInstance();
      sourceInformationMarkerStart($composer_0, -144577719, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($colorAsHSB$delegate);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11($colorAsHSB$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      DiscordButton(tmp, tmp0_group, ComposableSingletons$ColorPickerKt_getInstance().lambda$1261882644__1, $composer_0, 390, 0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_144(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11($colorAsHSB$delegate) {
    return function (it) {
      ColorPicker$lambda_3($colorAsHSB$delegate, new HSBColor(Default_getInstance().nextFloat_jqti5l_k$(), 1.0, 1.0));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12($colorAsHSB$delegate) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11($colorAsHSB$delegate));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($colorAsHSB$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C334@18083L241,332@17961L512:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(667896842, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:332)');
      }
      var tmp = DiscordButtonType_PRIMARY_getInstance();
      sourceInformationMarkerStart($composer_0, 1898743419, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($colorAsHSB$delegate);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12($colorAsHSB$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      DiscordButton(tmp, tmp0_group, ComposableSingletons$ColorPickerKt_getInstance().lambda$_505821547_lkch2t_1, $composer_0, 390, 0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_145(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12($colorAsHSB$delegate) {
    return function (it) {
      // Inline function 'kotlin.collections.random' call
      var this_0 = ColorUtils_getInstance().get_pastelColors_wn3j5a_k$();
      var newColor = random(this_0, Default_getInstance());
      // Inline function 'kotlin.let' call
      var it_0 = ColorUtils_getInstance().RGBtoHSB_c94wnc_k$(newColor.get_red_18ix20_k$(), newColor.get_green_is36qi_k$(), newColor.get_blue_wojj4z_k$(), null);
      var tmp$ret$2 = new HSBColor(it_0[0], it_0[1], it_0[2]);
      ColorPicker$lambda_3($colorAsHSB$delegate, tmp$ret$2);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13($colorAsHSB$delegate) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12($colorAsHSB$delegate));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($colorAsHSB$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C347@18705L768,345@18583L1037:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-1099807349, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:345)');
      }
      var tmp = DiscordButtonType_PRIMARY_getInstance();
      sourceInformationMarkerStart($composer_0, -352901685, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($colorAsHSB$delegate);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13($colorAsHSB$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      DiscordButton(tmp, tmp0_group, ComposableSingletons$ColorPickerKt_getInstance().lambda$2021441558__1, $composer_0, 390, 0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_146(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda_2($colorAsHSB$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C297@16131L607,297@16127L611,310@16776L1109,310@16772L1113,331@17923L584,331@17919L588,344@18545L1109,344@18541L1113:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(182496595, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:297)');
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1411654574, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_143(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(null, tmp0, $composer_0, 48, 1);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(-1859366263, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_144(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(null, tmp0_0, $composer_0, 48, 1);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_1 = rememberComposableLambda(667896842, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_145(dispatchReceiver_1);
        $composer_3.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Div(null, tmp0_1, $composer_0, 48, 1);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_2 = rememberComposableLambda(-1099807349, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_4 = $composer_0;
      sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_4.changed_ga7h3f_k$(dispatchReceiver_2);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_4.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_2 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = ComposableLambda$invoke$ref_146(dispatchReceiver_2);
        $composer_4.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_2 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_4);
      Div(null, tmp0_2, $composer_0, 48, 1);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_147(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda_0($colorAsHSB$delegate, $checkmarkIconRawHtml, $colorAsRGB) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C88@3808L96,90@3906L12041,88@3796L12151,294@15989L102,296@16093L3591,294@15977L3707:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(1157921053, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:88)');
      }
      sourceInformationMarkerStart($composer_0, 365603709, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-869164644, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda_0($colorAsHSB$delegate, $checkmarkIconRawHtml, $colorAsRGB), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_142(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      sourceInformationMarkerStart($composer_0, 365993507, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(182496595, true, ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda_2($colorAsHSB$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = ComposableLambda$invoke$ref_147(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_148(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda($colorAsHSB$delegate, $checkmarkIconRawHtml) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C85@3677L87,87@3766L15944,85@3665L16045:ColorPicker.kt#4x540j');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-937153826, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:77)');
        }
        var colorAsRGB = new Color(ColorUtils_getInstance().HSBtoRGB_zeef5v_k$(ColorPicker$lambda_2($colorAsHSB$delegate).hue_1, ColorPicker$lambda_2($colorAsHSB$delegate).saturation_1, ColorPicker$lambda_2($colorAsHSB$delegate).brightness_1));
        sourceInformationMarkerStart($composer_0, 1338320181, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorPicker$lambda$lambda$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it_0;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1157921053, true, ColorPicker$lambda$lambda$lambda$lambda$lambda_0($colorAsHSB$delegate, $checkmarkIconRawHtml, colorAsRGB), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_148(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_1;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp0_group, tmp0, $composer_0, 54, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_149(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda_3($modal, $colorAsHSB$delegate, $onColorSelection) {
    return function (it) {
      $modal.close_yn9xrc_k$();
      var rgb = ColorUtils_getInstance().HSBtoRGB_zeef5v_k$(ColorPicker$lambda_2($colorAsHSB$delegate).hue_1, ColorPicker$lambda_2($colorAsHSB$delegate).saturation_1, ColorPicker$lambda_2($colorAsHSB$delegate).brightness_1);
      $onColorSelection(new Color(rgb));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda$lambda_1($modal, $colorAsHSB$delegate, $onColorSelection) {
    return function ($this$DiscordButton) {
      $this$DiscordButton.onClick_q9cds6_k$(ColorPicker$lambda$lambda$lambda$lambda$lambda$lambda_3($modal, $colorAsHSB$delegate, $onColorSelection));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda$lambda_0($colorAsHSB$delegate, $onColorSelection) {
    return function (modal, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C371@19895L357,369@19789L561:ColorPicker.kt#4x540j');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(modal) : $composer_0.changedInstance_s1wkiy_k$(modal)) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(190116982, $dirty, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:369)');
        }
        var tmp_1 = DiscordButtonType_PRIMARY_getInstance();
        sourceInformationMarkerStart($composer_0, -1981169157, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(!!((($dirty & 14) === 4 || (!(($dirty & 8) === 0) && $composer_0.changedInstance_s1wkiy_k$(modal))) | $composer_0.changed_ga7h3f_k$($colorAsHSB$delegate)) | $composer_0.changed_ga7h3f_k$($onColorSelection));
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorPicker$lambda$lambda$lambda$lambda$lambda_1(modal, $colorAsHSB$delegate, $onColorSelection);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DiscordButton(tmp_1, tmp0_group, ComposableSingletons$ColorPickerKt_getInstance().lambda$_2037999989_hch4el_1, $composer_0, 390, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda_2($colorToBeUsedAsABase, $m, $checkmarkIconRawHtml, $onColorSelection) {
    return function (it) {
      var colorAsHSB$delegate = mutableStateOf(createHSBColorFromArray(ColorUtils_getInstance().RGBtoHSB_c94wnc_k$($colorToBeUsedAsABase.get_red_18ix20_k$(), $colorToBeUsedAsABase.get_green_is36qi_k$(), $colorToBeUsedAsABase.get_blue_wojj4z_k$(), null)));
      var tmp = $m.get_modalManager_6fs3uf_k$();
      var tmp_0 = Size_MEDIUM_getInstance();
      var tmp_1 = ComposableLambda$invoke$ref_129(composableLambdaInstance(-937153826, true, ColorPicker$lambda$lambda$lambda$lambda(colorAsHSB$delegate, $checkmarkIconRawHtml)));
      tmp.openModalWithCloseButton_r2hthp_k$('Selecionar Cor', tmp_0, tmp_1, [ComposableLambda$invoke$ref_149(composableLambdaInstance(190116982, true, ColorPicker$lambda$lambda$lambda$lambda_0(colorAsHSB$delegate, $onColorSelection)))]);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda_1($currentColor, $colorToBeUsedAsABase, $m, $checkmarkIconRawHtml, $onColorSelection) {
    return function ($this$Button) {
      type($this$Button, ButtonType_Button_getInstance());
      $this$Button.classes_ayghm2_k$(['big-color-swatch']);
      $this$Button.style_xwwy6r_k$(ColorPicker$lambda$lambda$lambda_1($currentColor));
      $this$Button.onClick_q9cds6_k$(ColorPicker$lambda$lambda$lambda_2($colorToBeUsedAsABase, $m, $checkmarkIconRawHtml, $onColorSelection));
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda$lambda_3($this$SVGIcon) {
    var tmp = $this$SVGIcon.classList;
    // Inline function 'web.cssom.ClassName' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'eye-dropper-icon';
    tmp.add(tmp$ret$3);
    return Unit_getInstance();
  }
  function ColorPicker$lambda$lambda$lambda_4($this$SVGIcon) {
    var tmp = $this$SVGIcon.classList;
    // Inline function 'web.cssom.ClassName' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'selected-icon';
    tmp.add(tmp$ret$3);
    return Unit_getInstance();
  }
  function ColorPicker$lambda$lambda_2($eyeDropperIconRawHtml, $isCustomColor, $checkmarkIconRawHtml) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C385@20461L76,385@20430L107:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-404217056, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous> (ColorPicker.kt:385)');
      }
      sourceInformationMarkerStart($composer_0, -1905532660, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorPicker$lambda$lambda$lambda_3;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      SVGIcon($eyeDropperIconRawHtml, tmp0_group, $composer_0, 48, 0);
      if ($isCustomColor) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1058139891);
        sourceInformation($composer_0, '390@20618L81,390@20588L111');
        sourceInformationMarkerStart($composer_0, -1905527631, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ColorPicker$lambda$lambda$lambda_4;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        SVGIcon($checkmarkIconRawHtml, tmp1_group, $composer_0, 48, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(1058277314);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_150(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda_3($this$Div) {
    $this$Div.classes_ayghm2_k$(['quick-color-palette']);
    return Unit_getInstance();
  }
  function ColorPicker$lambda$lambda$lambda_5($this$Div) {
    $this$Div.classes_ayghm2_k$(['quick-color-swatch-combo']);
    return Unit_getInstance();
  }
  function ColorPicker$lambda$lambda$lambda_6($checkmarkIconRawHtml, $currentColor, $colorUp, $onColorSelection, $colorDown) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C403@21004L74,404@21099L76:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-681467694, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:403)');
      }
      ColorSwatch($checkmarkIconRawHtml, $currentColor, $colorUp, $onColorSelection, $composer_0, 0);
      ColorSwatch($checkmarkIconRawHtml, $currentColor, $colorDown, $onColorSelection, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_151(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda$lambda_4($checkmarkIconRawHtml, $currentColor, $onColorSelection) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C*400@20905L75,402@20982L211,400@20893L300:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(402265122, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous>.<anonymous> (ColorPicker.kt:399)');
      }
      var _iterator__ex2g4s = ColorUtils_getInstance().get_defaultColorsCombo_4fi0zq_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
        var colorUp = _destruct__k2r9zo.component1_7eebsc_k$();
        var colorDown = _destruct__k2r9zo.component2_7eebsb_k$();
        sourceInformationMarkerStart($composer_0, 29729005, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorPicker$lambda$lambda$lambda_5;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1405368490, true, ColorPicker$lambda$lambda$lambda_6($checkmarkIconRawHtml, $currentColor, colorUp, $onColorSelection, colorDown), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_151(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp0_group, tmp0, $composer_0, 54, 0);
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_152(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda_6($onColorSelection, $currentColor, $colorToBeUsedAsABase, $m, $checkmarkIconRawHtml, $eyeDropperIconRawHtml, $isCustomColor) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C35@1531L170,42@1703L177,35@1516L364,49@1905L18509,384@20416L307,49@1890L18833,396@20745L54,398@20801L416,396@20733L484:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-519848989, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPicker.<anonymous> (ColorPicker.kt:35)');
      }
      sourceInformationMarkerStart($composer_0, -1358671123, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($onColorSelection);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorPicker$lambda$lambda($onColorSelection);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(2095447913, true, ColorPicker$lambda$lambda_0($currentColor, $checkmarkIconRawHtml), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_128(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp0_group, tmp0, $composer_0, 48, 0);
      sourceInformationMarkerStart($composer_0, -1358640816, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = !!(!!(!!(!!($composer_0.changed_ga7h3f_k$($currentColor) | $composer_0.changed_ga7h3f_k$($colorToBeUsedAsABase)) | $composer_0.changedInstance_s1wkiy_k$($m)) | $composer_0.changedInstance_s1wkiy_k$($checkmarkIconRawHtml)) | $composer_0.changed_ga7h3f_k$($onColorSelection));
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ColorPicker$lambda$lambda_1($currentColor, $colorToBeUsedAsABase, $m, $checkmarkIconRawHtml, $onColorSelection);
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(-404217056, true, ColorPicker$lambda$lambda_2($eyeDropperIconRawHtml, $isCustomColor, $checkmarkIconRawHtml), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_2 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = ComposableLambda$invoke$ref_150(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Button(tmp1_group, tmp0_0, $composer_0, 48, 0);
      sourceInformationMarkerStart($composer_0, -1358056391, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_3 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_3 = ColorPicker$lambda$lambda_3;
        $composer_0.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_1 = rememberComposableLambda(402265122, true, ColorPicker$lambda$lambda_4($checkmarkIconRawHtml, $currentColor, $onColorSelection), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      var it_4 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_3 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_4 = ComposableLambda$invoke$ref_152(dispatchReceiver_1);
        $composer_3.updateRememberedValue_l1wh71_k$(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp0_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Div(tmp2_group, tmp0_1, $composer_0, 54, 0);
      var tmp_11;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_11 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_153(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPicker$lambda_7($m, $checkmarkIconRawHtml, $eyeDropperIconRawHtml, $currentColor, $onColorSelection, $$changed) {
    return function ($composer, $force) {
      ColorPicker($m, $checkmarkIconRawHtml, $eyeDropperIconRawHtml, $currentColor, $onColorSelection, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ColorSwatch$lambda$lambda($color) {
    return function ($this$style) {
      backgroundColor($this$style, rgb($color.get_red_18ix20_k$(), $color.get_green_is36qi_k$(), $color.get_blue_wojj4z_k$()));
      return Unit_getInstance();
    };
  }
  function ColorSwatch$lambda$lambda_0($onColorSelection, $color) {
    return function (it) {
      $onColorSelection($color);
      return Unit_getInstance();
    };
  }
  function ColorSwatch$lambda($color, $onColorSelection) {
    return function ($this$Button) {
      type($this$Button, ButtonType_Button_getInstance());
      $this$Button.classes_ayghm2_k$(['quick-color-swatch']);
      $this$Button.style_xwwy6r_k$(ColorSwatch$lambda$lambda($color));
      $this$Button.onClick_q9cds6_k$(ColorSwatch$lambda$lambda_0($onColorSelection, $color));
      return Unit_getInstance();
    };
  }
  function ColorSwatch$lambda$lambda_1($this$SVGIcon) {
    var tmp = $this$SVGIcon.classList;
    // Inline function 'web.cssom.ClassName' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'selected-icon';
    tmp.add(tmp$ret$3);
    return Unit_getInstance();
  }
  function ColorSwatch$lambda_0($currentColor, $color, $checkmarkIconRawHtml) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-1629197441, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorSwatch.<anonymous> (ColorPicker.kt:424)');
      }
      if (equals($currentColor, $color)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(2004487908);
        sourceInformation($composer_0, '425@21720L73,425@21690L103');
        sourceInformationMarkerStart($composer_0, 2004324904, 'CC(remember):ColorPicker.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ColorSwatch$lambda$lambda_1;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        SVGIcon($checkmarkIconRawHtml, tmp0_group, $composer_0, 48, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(2004609955);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_154(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorSwatch$lambda_1($checkmarkIconRawHtml, $currentColor, $color, $onColorSelection, $$changed) {
    return function ($composer, $force) {
      ColorSwatch($checkmarkIconRawHtml, $currentColor, $color, $onColorSelection, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda($selectedHue$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedHue', KMutableProperty0, true);
    return $selectedHue$delegate.get_value_j01efc_k$();
  }
  function ColorBoxAndHuePicker$lambda_0($selectedHue$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('selectedHue', KMutableProperty0, true);
    $selectedHue$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ColorBoxAndHuePicker$lambda_1($selectedSaturation$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedSaturation', KMutableProperty0, true);
    return $selectedSaturation$delegate.get_value_j01efc_k$();
  }
  function ColorBoxAndHuePicker$lambda_2($selectedSaturation$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('selectedSaturation', KMutableProperty0, true);
    $selectedSaturation$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ColorBoxAndHuePicker$lambda_3($selectedBrightness$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedBrightness', KMutableProperty0, true);
    return $selectedBrightness$delegate.get_value_j01efc_k$();
  }
  function ColorBoxAndHuePicker$lambda_4($selectedBrightness$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('selectedBrightness', KMutableProperty0, true);
    $selectedBrightness$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ColorBoxAndHuePicker$lambda_5($isHolding$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isHolding', KMutableProperty0, true);
    return $isHolding$delegate.get_value_j01efc_k$();
  }
  function ColorBoxAndHuePicker$lambda_6($isHolding$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('isHolding', KMutableProperty0, true);
    $isHolding$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ColorBoxAndHuePicker$updateSelectedColorIfPossible($onColorSelection, selectedHue$delegate, selectedSaturation$delegate, selectedBrightness$delegate) {
    var currentHue = ColorBoxAndHuePicker$lambda(selectedHue$delegate);
    var currentSaturation = ColorBoxAndHuePicker$lambda_1(selectedSaturation$delegate);
    var currentBrightness = ColorBoxAndHuePicker$lambda_3(selectedBrightness$delegate);
    println('Invoking onColorSelection...');
    $onColorSelection(new HSBColor(currentHue, currentSaturation, currentBrightness));
  }
  function ColorBoxAndHuePicker$lambda$lambda($this$Div) {
    $this$Div.attr_w68641_k$('style', 'display: flex; flex-direction: column; gap: 0.25em;');
    return Unit_getInstance();
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda($colorAsHSL) {
    return function ($this$style) {
      backgroundColor($this$style, hsl(get_deg($colorAsHSL.get_first_irdx8n_k$() * 360), $colorAsHSL.get_second_jf7fjx_k$() * 100, $colorAsHSL.get_third_iz27um_k$() * 100));
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda($currentColor) {
    return function ($this$Div) {
      var colorAsHSL = ColorUtils_getInstance().HSBtoHSL_xvnj5j_k$($currentColor.hue_1, $currentColor.saturation_1, $currentColor.brightness_1);
      $this$Div.classes_ayghm2_k$(['color-picker-color-preview']);
      $this$Div.style_xwwy6r_k$(ColorBoxAndHuePicker$lambda$lambda$lambda$lambda(colorAsHSL));
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda_0($this$Div) {
    $this$Div.classes_ayghm2_k$(['color-picker-box-wrapper']);
    return Unit_getInstance();
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda($selectedHue$delegate) {
    return function ($this$style) {
      backgroundColor($this$style, hsl(get_deg(ColorBoxAndHuePicker$lambda($selectedHue$delegate) * 360), 100, 50));
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_0($isHolding$delegate) {
    return function (it) {
      println('[ColorPicker] onMouseDown');
      ColorBoxAndHuePicker$lambda_6($isHolding$delegate, true);
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_1($isHolding$delegate, $onColorSelection, $selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate) {
    return function (it) {
      println('[ColorPicker] onMouseUp');
      ColorBoxAndHuePicker$lambda_6($isHolding$delegate, false);
      ColorBoxAndHuePicker$updateSelectedColorIfPossible($onColorSelection, $selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate);
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_2($isHolding$delegate, $onColorSelection, $selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate) {
    return function (it) {
      var tmp;
      if (!ColorBoxAndHuePicker$lambda_5($isHolding$delegate)) {
        return Unit_getInstance();
      }
      println('[ColorPicker] onMouseLeave');
      ColorBoxAndHuePicker$lambda_6($isHolding$delegate, false);
      ColorBoxAndHuePicker$updateSelectedColorIfPossible($onColorSelection, $selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate);
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_3($isHolding$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate, $onColorSelection, $selectedHue$delegate) {
    return function (it) {
      var tmp;
      if (!ColorBoxAndHuePicker$lambda_5($isHolding$delegate)) {
        return Unit_getInstance();
      }
      println('[ColorPicker] onMouseMove');
      var tmp_0 = it.get_currentTarget_yyne0v_k$();
      var rect = (tmp_0 instanceof HTMLDivElement ? tmp_0 : THROW_CCE()).getBoundingClientRect();
      var x = it.get_clientX_fhxblw_k$() - rect.left;
      var y = it.get_clientY_fhxblx_k$() - rect.top;
      println('clicked ' + x + '; ' + y);
      var saturation = x / rect.width;
      var brightness = 1.0 - y / rect.height;
      println('Saturation: ' + saturation);
      println('Brightness: ' + brightness);
      ColorBoxAndHuePicker$lambda_2($selectedSaturation$delegate, coerceIn_1(saturation, rangeTo(0.0, 1.0)));
      ColorBoxAndHuePicker$lambda_4($selectedBrightness$delegate, coerceIn_1(brightness, rangeTo(0.0, 1.0)));
      ColorBoxAndHuePicker$updateSelectedColorIfPossible($onColorSelection, $selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate);
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_4($selectedSaturation$delegate, $selectedBrightness$delegate, $onColorSelection, $selectedHue$delegate) {
    return function (it) {
      var tmp = it.get_currentTarget_yyne0v_k$();
      var rect = (tmp instanceof HTMLDivElement ? tmp : THROW_CCE()).getBoundingClientRect();
      var x = it.get_clientX_fhxblw_k$() - rect.left;
      var y = it.get_clientY_fhxblx_k$() - rect.top;
      println('clicked ' + x + '; ' + y);
      var saturation = x / rect.width;
      var brightness = 1.0 - y / rect.height;
      println('Saturation: ' + saturation);
      println('Brightness: ' + brightness);
      ColorBoxAndHuePicker$lambda_2($selectedSaturation$delegate, saturation);
      ColorBoxAndHuePicker$lambda_4($selectedBrightness$delegate, brightness);
      ColorBoxAndHuePicker$updateSelectedColorIfPossible($onColorSelection, $selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate);
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda_0($selectedHue$delegate, $isHolding$delegate, $onColorSelection, $selectedSaturation$delegate, $selectedBrightness$delegate) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$(['color-picker-box']);
      $this$Div.style_xwwy6r_k$(ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda($selectedHue$delegate));
      $this$Div.onMouseDown_hebxzb_k$(ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_0($isHolding$delegate));
      $this$Div.onMouseUp_at21zm_k$(ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_1($isHolding$delegate, $onColorSelection, $selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate));
      $this$Div.onMouseLeave_j862le_k$(ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_2($isHolding$delegate, $onColorSelection, $selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate));
      $this$Div.onMouseMove_r2z3wo_k$(ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_3($isHolding$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate, $onColorSelection, $selectedHue$delegate));
      $this$Div.onClick_q9cds6_k$(ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_4($selectedSaturation$delegate, $selectedBrightness$delegate, $onColorSelection, $selectedHue$delegate));
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_5($this$Div) {
    $this$Div.attr_w68641_k$('style', 'background: linear-gradient(to right, #fff, rgba(255,255,255,0)); width: 100%; height: 100%; position: absolute; top: 0; left: 0;');
    return Unit_getInstance();
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_6($this$Div) {
    $this$Div.attr_w68641_k$('style', 'background: linear-gradient(to top, #000, rgba(0,0,0,0)); width: 100%; height: 100%; position: absolute; top: 0; left: 0;');
    return Unit_getInstance();
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda$lambda($selectedBrightness$delegate, $selectedSaturation$delegate) {
    return function ($this$style) {
      bottom($this$style, get_percent(ColorBoxAndHuePicker$lambda_3($selectedBrightness$delegate) * 100));
      left($this$style, get_percent(ColorBoxAndHuePicker$lambda_1($selectedSaturation$delegate) * 100));
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_7($selectedBrightness$delegate, $selectedSaturation$delegate) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$(['color-picker-box-handle']);
      $this$Div.style_xwwy6r_k$(ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda$lambda($selectedBrightness$delegate, $selectedSaturation$delegate));
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda_1($selectedBrightness$delegate, $selectedSaturation$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C539@26122L276,539@26110L289,546@26433L268,546@26421L281,554@26849L280,554@26837L293:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-1391498745, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorBoxAndHuePicker.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:539)');
      }
      sourceInformationMarkerStart($composer_0, -1495463525, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_5;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Div(tmp0_group, null, $composer_0, 6, 2);
      sourceInformationMarkerStart($composer_0, -1495453581, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_6;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Div(tmp1_group, null, $composer_0, 6, 2);
      sourceInformationMarkerStart($composer_0, -1495440257, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changed_ga7h3f_k$($selectedBrightness$delegate) | $composer_0.changed_ga7h3f_k$($selectedSaturation$delegate));
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ColorBoxAndHuePicker$lambda$lambda$lambda$lambda$lambda_7($selectedBrightness$delegate, $selectedSaturation$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Div(tmp2_group, null, $composer_0, 0, 2);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_155(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda$lambda_2($selectedHue$delegate, $onColorSelection, $selectedSaturation$delegate, $selectedBrightness$delegate) {
    return function (it) {
      println('New hue is ' + it);
      ColorBoxAndHuePicker$lambda_0($selectedHue$delegate, it);
      ColorBoxAndHuePicker$updateSelectedColorIfPossible($onColorSelection, $selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate);
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda$lambda_1($selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate, $onColorSelection, $isHolding$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C466@23205L2881,538@26088L1060,466@23193L3955,563@27194L155,563@27166L183:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-918948600, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorBoxAndHuePicker.<anonymous>.<anonymous>.<anonymous> (ColorPicker.kt:466)');
      }
      sourceInformationMarkerStart($composer_0, 1653662217, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.changed_ga7h3f_k$($selectedHue$delegate) | $composer_0.changed_ga7h3f_k$($selectedSaturation$delegate)) | $composer_0.changed_ga7h3f_k$($selectedBrightness$delegate)) | $composer_0.changed_ga7h3f_k$($onColorSelection));
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorBoxAndHuePicker$lambda$lambda$lambda$lambda_0($selectedHue$delegate, $isHolding$delegate, $onColorSelection, $selectedSaturation$delegate, $selectedBrightness$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1391498745, true, ColorBoxAndHuePicker$lambda$lambda$lambda$lambda_1($selectedBrightness$delegate, $selectedSaturation$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_155(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 48, 0);
      var tmp_3 = ColorBoxAndHuePicker$lambda($selectedHue$delegate);
      sourceInformationMarkerStart($composer_0, 1653787139, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = !!(!!(!!($composer_0.changed_ga7h3f_k$($selectedHue$delegate) | $composer_0.changed_ga7h3f_k$($selectedSaturation$delegate)) | $composer_0.changed_ga7h3f_k$($selectedBrightness$delegate)) | $composer_0.changed_ga7h3f_k$($onColorSelection));
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ColorBoxAndHuePicker$lambda$lambda$lambda$lambda_2($selectedHue$delegate, $onColorSelection, $selectedSaturation$delegate, $selectedBrightness$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      ColorHuePicker(tmp_3, tmp1_group, $composer_0, 0);
      var tmp_6;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_6 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_156(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda$lambda_0($currentColor, $selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate, $onColorSelection, $isHolding$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C454@22722L357,454@22710L370,463@23106L67,465@23175L4188,463@23094L4269:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(1302103250, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorBoxAndHuePicker.<anonymous>.<anonymous> (ColorPicker.kt:454)');
      }
      sourceInformationMarkerStart($composer_0, 1485741303, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($currentColor);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorBoxAndHuePicker$lambda$lambda$lambda($currentColor);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Div(tmp0_group, null, $composer_0, 0, 2);
      sourceInformationMarkerStart($composer_0, 1485753301, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ColorBoxAndHuePicker$lambda$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-918948600, true, ColorBoxAndHuePicker$lambda$lambda$lambda_1($selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate, $onColorSelection, $isHolding$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_156(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_157(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda_7($currentColor, $selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate, $onColorSelection, $isHolding$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C451@22602L92,453@22696L4677,451@22590L4783:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(1835888787, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorBoxAndHuePicker.<anonymous> (ColorPicker.kt:451)');
      }
      sourceInformationMarkerStart($composer_0, -942433553, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorBoxAndHuePicker$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1302103250, true, ColorBoxAndHuePicker$lambda$lambda_0($currentColor, $selectedHue$delegate, $selectedSaturation$delegate, $selectedBrightness$delegate, $onColorSelection, $isHolding$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_157(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_158(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorBoxAndHuePicker$lambda_8($currentColor, $onColorSelection, $$changed) {
    return function ($composer, $force) {
      ColorBoxAndHuePicker($currentColor, $onColorSelection, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ColorHuePicker$lambda($isHolding$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isHolding', KMutableProperty0, true);
    return $isHolding$delegate.get_value_j01efc_k$();
  }
  function ColorHuePicker$lambda_0($isHolding$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('isHolding', KMutableProperty0, true);
    $isHolding$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ColorHuePicker$lambda$lambda($isHolding$delegate) {
    return function (it) {
      println('[ColorHuePicker] onMouseDown');
      ColorHuePicker$lambda_0($isHolding$delegate, true);
      return Unit_getInstance();
    };
  }
  function ColorHuePicker$lambda$lambda_0($isHolding$delegate) {
    return function (it) {
      println('[ColorHuePicker] onMouseUp');
      ColorHuePicker$lambda_0($isHolding$delegate, false);
      return Unit_getInstance();
    };
  }
  function ColorHuePicker$lambda$lambda_1($isHolding$delegate) {
    return function (it) {
      println('[ColorHuePicker] onMouseLeave');
      ColorHuePicker$lambda_0($isHolding$delegate, false);
      return Unit_getInstance();
    };
  }
  function ColorHuePicker$lambda$lambda_2($onHueChange, $isHolding$delegate) {
    return function (it) {
      var tmp;
      if (!ColorHuePicker$lambda($isHolding$delegate)) {
        return Unit_getInstance();
      }
      println('[ColorHuePicker] onMouseMove');
      var tmp_0 = it.get_currentTarget_yyne0v_k$();
      var rect = (tmp_0 instanceof HTMLDivElement ? tmp_0 : THROW_CCE()).getBoundingClientRect();
      var y = it.get_clientY_fhxblx_k$() - rect.top;
      $onHueChange(1.0 - coerceIn_1(y / rect.height, rangeTo(0.0, 1.0)));
      return Unit_getInstance();
    };
  }
  function ColorHuePicker$lambda$lambda_3($onHueChange) {
    return function (it) {
      println('[ColorHuePicker] onClick');
      var tmp = it.get_currentTarget_yyne0v_k$();
      var rect = (tmp instanceof HTMLDivElement ? tmp : THROW_CCE()).getBoundingClientRect();
      var y = it.get_clientY_fhxblx_k$() - rect.top;
      $onHueChange(1.0 - coerceIn_1(y / rect.height, rangeTo(0.0, 1.0)));
      return Unit_getInstance();
    };
  }
  function ColorHuePicker$lambda_1($isHolding$delegate, $onHueChange) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$(['color-picker-hue-slider']);
      $this$Div.onMouseDown_hebxzb_k$(ColorHuePicker$lambda$lambda($isHolding$delegate));
      $this$Div.onMouseUp_at21zm_k$(ColorHuePicker$lambda$lambda_0($isHolding$delegate));
      $this$Div.onMouseLeave_j862le_k$(ColorHuePicker$lambda$lambda_1($isHolding$delegate));
      $this$Div.onMouseMove_r2z3wo_k$(ColorHuePicker$lambda$lambda_2($onHueChange, $isHolding$delegate));
      $this$Div.onClick_q9cds6_k$(ColorHuePicker$lambda$lambda_3($onHueChange));
      return Unit_getInstance();
    };
  }
  function ColorHuePicker$lambda$lambda$lambda($selectedHue) {
    return function ($this$style) {
      bottom($this$style, get_percent($selectedHue * 100));
      return Unit_getInstance();
    };
  }
  function ColorHuePicker$lambda$lambda_4($selectedHue) {
    return function ($this$Div) {
      $this$Div.style_xwwy6r_k$(ColorHuePicker$lambda$lambda$lambda($selectedHue));
      $this$Div.classes_ayghm2_k$(['color-picker-hue-slider-handle']);
      return Unit_getInstance();
    };
  }
  function ColorHuePicker$lambda_2($selectedHue) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C621@28773L151,621@28761L164:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-780945877, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorHuePicker.<anonymous> (ColorPicker.kt:621)');
      }
      sourceInformationMarkerStart($composer_0, 1130289858, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_i8bvic_k$($selectedHue);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ColorHuePicker$lambda$lambda_4($selectedHue);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Div(tmp0_group, null, $composer_0, 0, 2);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_159(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorHuePicker$lambda_3($selectedHue, $onHueChange, $$changed) {
    return function ($composer, $force) {
      ColorHuePicker($selectedHue, $onHueChange, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ColorPickerValueInput$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['color-picker-value-label']);
    return Unit_getInstance();
  }
  function ColorPickerValueInput$lambda_0($label) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C635@29128L11:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-315504842, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPickerValueInput.<anonymous> (ColorPicker.kt:635)');
      }
      Text($label, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_160(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPickerValueInput$lambda_1($block) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C639@29171L8:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-1757623699, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPickerValueInput.<anonymous> (ColorPicker.kt:639)');
      }
      $block($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_161(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPickerValueInput$lambda_2($this$Div) {
    $this$Div.classes_ayghm2_k$(['color-picker-value-end-label']);
    return Unit_getInstance();
  }
  function ColorPickerValueInput$lambda_3($endLabel) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(-1585209618, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.ColorPickerValueInput.<anonymous> (ColorPicker.kt:645)');
      }
      if (!($endLabel._v == null)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1326948604);
        sourceInformation($composer_0, '646@29304L14');
        Text($endLabel._v, $composer_0, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1814252780);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_162(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ColorPickerValueInput$lambda_4($label, $endLabel, $block, $$changed, $$default) {
    return function ($composer, $force) {
      ColorPickerValueInput($label, $endLabel._v, $block, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function GabrielaColorPreview$lambda($gabiCanvas$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('gabiCanvas', KProperty0, false);
    return $gabiCanvas$delegate.get_value_j01efc_k$();
  }
  function GabrielaColorPreview$lambda$slambda($currentColor, $gabiCanvas$delegate, resultContinuation) {
    this.$currentColor_1 = $currentColor;
    this.$gabiCanvas$delegate_1 = $gabiCanvas$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GabrielaColorPreview$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(GabrielaColorPreview$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GabrielaColorPreview$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = GabrielaColorPreview$lambda(this.$gabiCanvas$delegate_1).updateColor_580t19_k$(this.$currentColor_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(GabrielaColorPreview$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new GabrielaColorPreview$lambda$slambda(this.$currentColor_1, this.$gabiCanvas$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(GabrielaColorPreview$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function GabrielaColorPreview$lambda$slambda_0($currentColor, $gabiCanvas$delegate, resultContinuation) {
    var i = new GabrielaColorPreview$lambda$slambda($currentColor, $gabiCanvas$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GabrielaColorPreview$lambda_0($currentColor, $gabiCanvas$delegate) {
    return function () {
      var tmp = GlobalScope_getInstance();
      launch(tmp, VOID, VOID, GabrielaColorPreview$lambda$slambda_0($currentColor, $gabiCanvas$delegate, null));
      return Unit_getInstance();
    };
  }
  function GabrielaColorPreview$lambda_1($this$Div) {
    $this$Div.classes_ayghm2_k$(['gabriela-color-preview']);
    return Unit_getInstance();
  }
  function GabrielaColorPreview$$inlined$run$2$2$2$1($gabiCanvas$delegate) {
    this.$gabiCanvas$delegate_1 = $gabiCanvas$delegate;
  }
  protoOf(GabrielaColorPreview$$inlined$run$2$2$2$1).dispose_3nnxhr_k$ = function () {
    GabrielaColorPreview$lambda(this.$gabiCanvas$delegate_1).unmount_81cc40_k$();
  };
  function GabrielaColorPreview$lambda$lambda$lambda($gabiCanvas$delegate) {
    return function ($this$ref, canvas) {
      GabrielaColorPreview$lambda($gabiCanvas$delegate).mountIn_9zfwwb_k$(canvas);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new GabrielaColorPreview$$inlined$run$2$2$2$1($gabiCanvas$delegate);
    };
  }
  function GabrielaColorPreview$lambda$lambda($gabiCanvas$delegate) {
    return function ($this$Canvas) {
      $this$Canvas.attr_w68641_k$('style', 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;');
      $this$Canvas.ref_o4g25g_k$(GabrielaColorPreview$lambda$lambda$lambda($gabiCanvas$delegate));
      return Unit_getInstance();
    };
  }
  function GabrielaColorPreview$lambda_2($gabiCanvas$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C671@30146L309,670@30118L347:ColorPicker.kt#4x540j');
      if (isTraceInProgress()) {
        traceEventStart(1117788925, $changed, -1, 'com.mrpowergamerbr.butterscotchpreprocessor.components.colorpicker.GabrielaColorPreview.<anonymous> (ColorPicker.kt:670)');
      }
      sourceInformationMarkerStart($composer_0, 453343026, 'CC(remember):ColorPicker.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = GabrielaColorPreview$lambda$lambda($gabiCanvas$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Canvas(tmp0_group, null, $composer_0, 6, 2);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_163(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function GabrielaColorPreview$lambda_3($currentColor, $$changed) {
    return function ($composer, $force) {
      GabrielaColorPreview($currentColor, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_ColorUtils_ColorPair$stable;
  var com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_ColorUtils$stable;
  function ColorPair(color1, color2) {
    this.color1__1 = color1;
    this.color2__1 = color2;
  }
  protoOf(ColorPair).get_color1_c05647_k$ = function () {
    return this.color1__1;
  };
  protoOf(ColorPair).get_color2_c05648_k$ = function () {
    return this.color2__1;
  };
  protoOf(ColorPair).component1_7eebsc_k$ = function () {
    return this.color1__1;
  };
  protoOf(ColorPair).component2_7eebsb_k$ = function () {
    return this.color2__1;
  };
  protoOf(ColorPair).copy_wf3ud7_k$ = function (color1, color2) {
    return new ColorPair(color1, color2);
  };
  protoOf(ColorPair).copy$default_xi92dy_k$ = function (color1, color2, $super) {
    color1 = color1 === VOID ? this.color1__1 : color1;
    color2 = color2 === VOID ? this.color2__1 : color2;
    return $super === VOID ? this.copy_wf3ud7_k$(color1, color2) : $super.copy_wf3ud7_k$.call(this, color1, color2);
  };
  protoOf(ColorPair).toString = function () {
    return 'ColorPair(color1=' + this.color1__1.toString() + ', color2=' + this.color2__1.toString() + ')';
  };
  protoOf(ColorPair).hashCode = function () {
    var result = this.color1__1.hashCode();
    result = imul(result, 31) + this.color2__1.hashCode() | 0;
    return result;
  };
  protoOf(ColorPair).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorPair))
      return false;
    if (!this.color1__1.equals(other.color1__1))
      return false;
    if (!this.color2__1.equals(other.color2__1))
      return false;
    return true;
  };
  function ColorUtils() {
    ColorUtils_instance = this;
    this.LorittaAqua_1 = Color_init_$Create$(41, 166, 254);
    this.defaultColorsCombo_1 = listOf([new ColorPair(Color_init_$Create$(26, 188, 156), Color_init_$Create$(17, 128, 106)), new ColorPair(Color_init_$Create$(46, 204, 113), Color_init_$Create$(31, 139, 76)), new ColorPair(Color_init_$Create$(52, 152, 219), Color_init_$Create$(32, 102, 148)), new ColorPair(this.LorittaAqua_1, Color_init_$Create$(30, 123, 189)), new ColorPair(Color_init_$Create$(88, 101, 242), Color_init_$Create$(31, 44, 191)), new ColorPair(Color_init_$Create$(155, 89, 182), Color_init_$Create$(113, 54, 138)), new ColorPair(Color_init_$Create$(233, 30, 99), Color_init_$Create$(173, 20, 87)), new ColorPair(Color_init_$Create$(241, 196, 15), Color_init_$Create$(194, 124, 14)), new ColorPair(Color_init_$Create$(230, 126, 34), Color_init_$Create$(168, 67, 0)), new ColorPair(Color_init_$Create$(231, 76, 60), Color_init_$Create$(153, 45, 34)), new ColorPair(Color_init_$Create$(149, 165, 166), Color_init_$Create$(151, 156, 159)), new ColorPair(Color_init_$Create$(96, 125, 139), Color_init_$Create$(84, 110, 122))]);
    var tmp = this;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = this.defaultColorsCombo_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var list = listOf([element.color1__1, element.color2__1]);
      addAll(destination, list);
    }
    tmp.defaultColors_1 = destination;
    this.pastelColors_1 = listOf([Color_init_$Create$(255, 223, 186), Color_init_$Create$(173, 216, 230), Color_init_$Create$(221, 160, 221), Color_init_$Create$(152, 251, 152), Color_init_$Create$(255, 182, 193), Color_init_$Create$(255, 228, 196), Color_init_$Create$(240, 128, 128), Color_init_$Create$(255, 248, 220), Color_init_$Create$(220, 220, 220), Color_init_$Create$(255, 250, 250), Color_init_$Create$(245, 222, 179), Color_init_$Create$(188, 143, 143), Color_init_$Create$(152, 251, 152), Color_init_$Create$(255, 192, 203), Color_init_$Create$(176, 224, 230)]);
  }
  protoOf(ColorUtils).get_LorittaAqua_k5eh6u_k$ = function () {
    return this.LorittaAqua_1;
  };
  protoOf(ColorUtils).get_defaultColorsCombo_4fi0zq_k$ = function () {
    return this.defaultColorsCombo_1;
  };
  protoOf(ColorUtils).get_defaultColors_78fy08_k$ = function () {
    return this.defaultColors_1;
  };
  protoOf(ColorUtils).get_pastelColors_wn3j5a_k$ = function () {
    return this.pastelColors_1;
  };
  protoOf(ColorUtils).convertFromColorToHex_giexfm_k$ = function (input) {
    var red = input >> 16 & 255;
    var green = input >> 8 & 255;
    var blue = input & 255;
    var hexRed = padStart(toString_0(red, 16), 2, _Char___init__impl__6a9atx(48));
    var hexGreen = padStart(toString_0(green, 16), 2, _Char___init__impl__6a9atx(48));
    var hexBlue = padStart(toString_0(blue, 16), 2, _Char___init__impl__6a9atx(48));
    return '#' + hexRed + hexGreen + hexBlue;
  };
  protoOf(ColorUtils).convertFromHexToColor_k27hhs_k$ = function (hex) {
    return Companion_getInstance_5().fromHex_2of0eh_k$(hex);
  };
  protoOf(ColorUtils).calculateBrightness_ra7ahy_k$ = function (color) {
    return 0.299 * (color.get_red_18ix20_k$() / 255.0) + 0.587 * (color.get_green_is36qi_k$() / 255.0) + 0.114 * (color.get_blue_wojj4z_k$() / 255.0);
  };
  protoOf(ColorUtils).HSBtoHSL_xvnj5j_k$ = function (hue, saturation, brightness) {
    var l = (2 - saturation) * brightness / 2;
    var sl = l < 0.5 ? saturation * brightness / (l * 2) : saturation * brightness / (2 - l * 2);
    var hslHue = (0.0 <= hue ? hue <= 1.0 : false) ? hue : hue % 1;
    return new Triple(hslHue, sl, l);
  };
  protoOf(ColorUtils).RGBtoHSB_c94wnc_k$ = function (r, g, b, hsbvals) {
    var hsbvals_0 = hsbvals;
    var hue;
    var saturation;
    var brightness;
    if (hsbvals_0 == null) {
      hsbvals_0 = new Float32Array(3);
    }
    var cmax = r > g ? r : g;
    if (b > cmax)
      cmax = b;
    var cmin = r < g ? r : g;
    if (b < cmin)
      cmin = b;
    brightness = cmax / 255.0;
    saturation = !(cmax === 0) ? (cmax - cmin | 0) / cmax : 0.0;
    if (saturation === 0.0)
      hue = 0.0;
    else {
      var redc = (cmax - r | 0) / (cmax - cmin | 0);
      var greenc = (cmax - g | 0) / (cmax - cmin | 0);
      var bluec = (cmax - b | 0) / (cmax - cmin | 0);
      hue = r === cmax ? bluec - greenc : g === cmax ? 2.0 + redc - bluec : 4.0 + greenc - redc;
      hue = hue / 6.0;
      if (hue < 0)
        hue = hue + 1.0;
    }
    hsbvals_0[0] = hue;
    hsbvals_0[1] = saturation;
    hsbvals_0[2] = brightness;
    return hsbvals_0;
  };
  protoOf(ColorUtils).HSBtoRGB_zeef5v_k$ = function (hue, saturation, brightness) {
    var r = 0;
    var g = 0;
    var b = 0;
    if (saturation === 0.0) {
      b = numberToInt(brightness * 255.0 + 0.5);
      g = b;
      r = g;
    } else {
      // Inline function 'kotlin.math.floor' call
      var h = (hue - Math.floor(hue)) * 6.0;
      // Inline function 'kotlin.math.floor' call
      var f = h - Math.floor(h);
      var p = brightness * (1.0 - saturation);
      var q = brightness * (1.0 - saturation * f);
      var t = brightness * (1.0 - saturation * (1.0 - f));
      switch (numberToInt(h)) {
        case 0:
          r = numberToInt(brightness * 255.0 + 0.5);
          g = numberToInt(t * 255.0 + 0.5);
          b = numberToInt(p * 255.0 + 0.5);
          break;
        case 1:
          r = numberToInt(q * 255.0 + 0.5);
          g = numberToInt(brightness * 255.0 + 0.5);
          b = numberToInt(p * 255.0 + 0.5);
          break;
        case 2:
          r = numberToInt(p * 255.0 + 0.5);
          g = numberToInt(brightness * 255.0 + 0.5);
          b = numberToInt(t * 255.0 + 0.5);
          break;
        case 3:
          r = numberToInt(p * 255.0 + 0.5);
          g = numberToInt(q * 255.0 + 0.5);
          b = numberToInt(brightness * 255.0 + 0.5);
          break;
        case 4:
          r = numberToInt(t * 255.0 + 0.5);
          g = numberToInt(p * 255.0 + 0.5);
          b = numberToInt(brightness * 255.0 + 0.5);
          break;
        case 5:
          r = numberToInt(brightness * 255.0 + 0.5);
          g = numberToInt(p * 255.0 + 0.5);
          b = numberToInt(q * 255.0 + 0.5);
          break;
      }
    }
    return -16777216 | r << 16 | g << 8 | b << 0;
  };
  var ColorUtils_instance;
  function ColorUtils_getInstance() {
    if (ColorUtils_instance == null)
      new ColorUtils();
    return ColorUtils_instance;
  }
  function com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_ColorUtils_ColorPair$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_ColorUtils_ColorPair$stable;
  }
  function com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_ColorUtils$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_ColorUtils$stable;
  }
  var com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_CoroutineImageWrapper$stable;
  function CoroutineImageWrapper$load$lambda(this$0, $cont) {
    return function () {
      this$0.loaded_1 = true;
      var tmp0 = $cont;
      // Inline function 'kotlin.coroutines.resume' call
      var value = this$0.image_1;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_1();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
      tmp0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function CoroutineImageWrapper$load$lambda_0($cont, this$0) {
    return function (it) {
      var tmp0 = $cont;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var exception = Exception_init_$Create$('Failed to load image: ' + this$0.src_1);
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance_1();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function CoroutineImageWrapper$load$lambda_1(this$0) {
    return function (it) {
      this$0.image_1.onload = null;
      this$0.image_1.onerror = null;
      this$0.image_1.src = '';
      return Unit_getInstance();
    };
  }
  function CoroutineImageWrapper(src) {
    this.src_1 = src;
    this.loaded_1 = false;
    this.image_1 = new Image();
  }
  protoOf(CoroutineImageWrapper).get_src_18iw05_k$ = function () {
    return this.src_1;
  };
  protoOf(CoroutineImageWrapper).set_loaded_f6cf3h_k$ = function (_set____db54di) {
    this.loaded_1 = _set____db54di;
  };
  protoOf(CoroutineImageWrapper).get_loaded_g9cidq_k$ = function () {
    return this.loaded_1;
  };
  protoOf(CoroutineImageWrapper).set_image_u6uqes_k$ = function (_set____db54di) {
    this.image_1 = _set____db54di;
  };
  protoOf(CoroutineImageWrapper).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(CoroutineImageWrapper).load_7rpufx_k$ = function ($completion) {
    if (this.loaded_1)
      return this.image_1;
    var tmp = this.image_1;
    // Inline function 'web.http.anonymous' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.crossOrigin = 'anonymous';
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    var tmp_0 = this.image_1;
    // Inline function 'web.events.EventHandler' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.onload = CoroutineImageWrapper$load$lambda(this, cancellable);
    var tmp_1 = this.image_1;
    // Inline function 'js.function.JsFunction' call
    // Inline function 'js.reflect.legacyUnsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_1.onerror = CoroutineImageWrapper$load$lambda_0(cancellable, this);
    this.image_1.src = this.src_1;
    cancellable.invokeOnCancellation_kffkqp_k$(CoroutineImageWrapper$load$lambda_1(this));
    return cancellable.getResult_fck196_k$();
  };
  function com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_CoroutineImageWrapper$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_CoroutineImageWrapper$stable;
  }
  var com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_EtherealGambiUtils_ScaleDownToWidthImageVariantPreset$stable;
  var com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_EtherealGambiUtils$stable;
  function ScaleDownToWidthImageVariantPreset(name, width) {
    this.name_1 = name;
    this.width_1 = width;
  }
  protoOf(ScaleDownToWidthImageVariantPreset).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(ScaleDownToWidthImageVariantPreset).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(ScaleDownToWidthImageVariantPreset).variantWithPrefix_sp0di5_k$ = function () {
    return '@' + this.name_1;
  };
  protoOf(ScaleDownToWidthImageVariantPreset).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(ScaleDownToWidthImageVariantPreset).component2_7eebsb_k$ = function () {
    return this.width_1;
  };
  protoOf(ScaleDownToWidthImageVariantPreset).copy_1yzwer_k$ = function (name, width) {
    return new ScaleDownToWidthImageVariantPreset(name, width);
  };
  protoOf(ScaleDownToWidthImageVariantPreset).copy$default_etelmg_k$ = function (name, width, $super) {
    name = name === VOID ? this.name_1 : name;
    width = width === VOID ? this.width_1 : width;
    return $super === VOID ? this.copy_1yzwer_k$(name, width) : $super.copy_1yzwer_k$.call(this, name, width);
  };
  protoOf(ScaleDownToWidthImageVariantPreset).toString = function () {
    return 'ScaleDownToWidthImageVariantPreset(name=' + this.name_1 + ', width=' + this.width_1 + ')';
  };
  protoOf(ScaleDownToWidthImageVariantPreset).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + this.width_1 | 0;
    return result;
  };
  protoOf(ScaleDownToWidthImageVariantPreset).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScaleDownToWidthImageVariantPreset))
      return false;
    if (!(this.name_1 === other.name_1))
      return false;
    if (!(this.width_1 === other.width_1))
      return false;
    return true;
  };
  function EtherealGambiUtils() {
    EtherealGambiUtils_instance = this;
    this.scaleDownToWidthVariantsPresets_1 = listOf([new ScaleDownToWidthImageVariantPreset('32w', 32), new ScaleDownToWidthImageVariantPreset('64w', 64), new ScaleDownToWidthImageVariantPreset('160w', 160), new ScaleDownToWidthImageVariantPreset('320w', 320), new ScaleDownToWidthImageVariantPreset('640w', 640), new ScaleDownToWidthImageVariantPreset('960w', 960), new ScaleDownToWidthImageVariantPreset('1280w', 1280), new ScaleDownToWidthImageVariantPreset('1920w', 1920), new ScaleDownToWidthImageVariantPreset('2560w', 2560)]);
  }
  protoOf(EtherealGambiUtils).get_scaleDownToWidthVariantsPresets_ixj29u_k$ = function () {
    return this.scaleDownToWidthVariantsPresets_1;
  };
  var EtherealGambiUtils_instance;
  function EtherealGambiUtils_getInstance() {
    if (EtherealGambiUtils_instance == null)
      new EtherealGambiUtils();
    return EtherealGambiUtils_instance;
  }
  function com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_EtherealGambiUtils_ScaleDownToWidthImageVariantPreset$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_EtherealGambiUtils_ScaleDownToWidthImageVariantPreset$stable;
  }
  function com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_EtherealGambiUtils$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_EtherealGambiUtils$stable;
  }
  var com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_GabrielaColorPreviewCanvas$stable;
  function GabrielaColorPreviewCanvas$render$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GabrielaColorPreviewCanvas$render$slambda$slambda).invoke_mg391z_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(GabrielaColorPreviewCanvas$render$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_mg391z_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GabrielaColorPreviewCanvas$render$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = _get_baseImageWrapper__u7tq2m(this.this$0__1).load_7rpufx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(GabrielaColorPreviewCanvas$render$slambda$slambda).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new GabrielaColorPreviewCanvas$render$slambda$slambda(this.this$0__1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(GabrielaColorPreviewCanvas$render$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function GabrielaColorPreviewCanvas$render$slambda$slambda_0(this$0, resultContinuation) {
    var i = new GabrielaColorPreviewCanvas$render$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_mg391z_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GabrielaColorPreviewCanvas$render$slambda$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GabrielaColorPreviewCanvas$render$slambda$slambda_1).invoke_mg391z_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(GabrielaColorPreviewCanvas$render$slambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_mg391z_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GabrielaColorPreviewCanvas$render$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = _get_sweaterOverlayImageWrapper__4hu1gc(this.this$0__1).load_7rpufx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(GabrielaColorPreviewCanvas$render$slambda$slambda_1).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new GabrielaColorPreviewCanvas$render$slambda$slambda_1(this.this$0__1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(GabrielaColorPreviewCanvas$render$slambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function GabrielaColorPreviewCanvas$render$slambda$slambda_2(this$0, resultContinuation) {
    var i = new GabrielaColorPreviewCanvas$render$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_mg391z_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_currentColor__9leskt($this, _set____db54di) {
    $this.currentColor_1 = _set____db54di;
  }
  function _get_currentColor__p55j4x($this) {
    return $this.currentColor_1;
  }
  function _set_baseImageWrapper__bq62tq($this, _set____db54di) {
    $this.baseImageWrapper_1 = _set____db54di;
  }
  function _get_baseImageWrapper__u7tq2m($this) {
    var tmp = $this.baseImageWrapper_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('baseImageWrapper');
    }
  }
  function _set_sweaterOverlayImageWrapper__5wnrv4($this, _set____db54di) {
    $this.sweaterOverlayImageWrapper_1 = _set____db54di;
  }
  function _get_sweaterOverlayImageWrapper__4hu1gc($this) {
    var tmp = $this.sweaterOverlayImageWrapper_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('sweaterOverlayImageWrapper');
    }
  }
  function _set_canvas__plaszl($this, _set____db54di) {
    $this.canvas_1 = _set____db54di;
  }
  function _get_canvas__o4k8ct($this) {
    var tmp = $this.canvas_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('canvas');
    }
  }
  function _set_sweaterCanvas__641vnw($this, _set____db54di) {
    $this.sweaterCanvas_1 = _set____db54di;
  }
  function _get_sweaterCanvas__93pmug($this) {
    var tmp = $this.sweaterCanvas_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('sweaterCanvas');
    }
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function GabrielaColorPreviewCanvas$mountIn$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.get_width_j0q4yl_k$();
    var tmp$ret$1 = b.get_width_j0q4yl_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function GabrielaColorPreviewCanvas$render$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GabrielaColorPreviewCanvas$render$slambda).invoke_d9fzmj_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(GabrielaColorPreviewCanvas$render$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GabrielaColorPreviewCanvas$render$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var baseJob = async(this.$this$coroutineScope_1, VOID, VOID, GabrielaColorPreviewCanvas$render$slambda$slambda_0(this.this$0__1, null));
            var tmp_0 = this;
            tmp_0.sweaterOverlayJob1__1 = async(this.$this$coroutineScope_1, VOID, VOID, GabrielaColorPreviewCanvas$render$slambda$slambda_2(this.this$0__1, null));
            this.set_state_rjd8d0_k$(1);
            suspendResult = baseJob.await_4rdzbx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.base0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.sweaterOverlayJob1__1.await_4rdzbx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var sweaterOverlay = suspendResult;
            var tmp_1 = _get_sweaterCanvas__93pmug(this.this$0__1);
            var tmp_2 = tmp_1.getContext('2d');
            var sweaterCtx = tmp_2 instanceof CanvasRenderingContext2D ? tmp_2 : THROW_CCE();
            sweaterCtx.clearRect(0.0, 0.0, _get_sweaterCanvas__93pmug(this.this$0__1).width, _get_sweaterCanvas__93pmug(this.this$0__1).height);
            sweaterCtx.drawImage(sweaterOverlay, 0.0, 0.0, _get_sweaterCanvas__93pmug(this.this$0__1).width, _get_sweaterCanvas__93pmug(this.this$0__1).height);
            var imageData = sweaterCtx.getImageData(0, 0, _get_sweaterCanvas__93pmug(this.this$0__1).width, _get_sweaterCanvas__93pmug(this.this$0__1).height);
            var pixelData = imageData.data;
            var i = 0;
            while (pixelData.length > i) {
              var tmp_3 = pixelData[i];
              var red = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
              var tmp_4 = pixelData[i + 1 | 0];
              var green = (!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE();
              var tmp_5 = pixelData[i + 2 | 0];
              var blue = (!(tmp_5 == null) ? typeof tmp_5 === 'number' : false) ? tmp_5 : THROW_CCE();
              var tmp_6 = pixelData[i + 3 | 0];
              var alpha = (!(tmp_6 == null) ? typeof tmp_6 === 'number' : false) ? tmp_6 : THROW_CCE();
              if (!(alpha === 0)) {
                var sweaterHsbVals = ColorUtils_getInstance().RGBtoHSB_c94wnc_k$(red, green, blue, null);
                var newColor = new Color(ColorUtils_getInstance().HSBtoRGB_zeef5v_k$(this.this$0__1.currentColor_1.get_hue_18j435_k$(), this.this$0__1.currentColor_1.get_saturation_nzhaqt_k$(), coerceIn_1(sweaterHsbVals[2] + this.this$0__1.currentColor_1.get_brightness_9gcpba_k$() - 0.6, rangeTo(0.0, 1.0))));
                pixelData[i] = newColor.get_red_18ix20_k$();
                pixelData[i + 1 | 0] = newColor.get_green_is36qi_k$();
                pixelData[i + 2 | 0] = newColor.get_blue_wojj4z_k$();
                pixelData[i + 3 | 0] = alpha;
              }
              i = i + 4 | 0;
            }

            sweaterCtx.putImageData(imageData, 0, 0);
            var tmp_7 = _get_canvas__o4k8ct(this.this$0__1);
            var tmp_8 = tmp_7.getContext('2d');
            var baseCtx = tmp_8 instanceof CanvasRenderingContext2D ? tmp_8 : THROW_CCE();
            baseCtx.clearRect(0.0, 0.0, _get_canvas__o4k8ct(this.this$0__1).width, _get_canvas__o4k8ct(this.this$0__1).height);
            baseCtx.drawImage(this.base0__1, 0.0, 0.0, _get_canvas__o4k8ct(this.this$0__1).width, _get_canvas__o4k8ct(this.this$0__1).height);
            baseCtx.drawImage(_get_sweaterCanvas__93pmug(this.this$0__1), 0.0, 0.0, _get_canvas__o4k8ct(this.this$0__1).width, _get_canvas__o4k8ct(this.this$0__1).height);
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(GabrielaColorPreviewCanvas$render$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new GabrielaColorPreviewCanvas$render$slambda(this.this$0__1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(GabrielaColorPreviewCanvas$render$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function GabrielaColorPreviewCanvas$render$slambda_0(this$0, resultContinuation) {
    var i = new GabrielaColorPreviewCanvas$render$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_d9fzmj_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GabrielaColorPreviewCanvas(currentColor) {
    this.currentColor_1 = currentColor;
  }
  protoOf(GabrielaColorPreviewCanvas).mountIn_9zfwwb_k$ = function (canvas) {
    this.canvas_1 = canvas;
    canvas.width = numberToInt(300 * window.devicePixelRatio);
    canvas.height = numberToInt(500 * window.devicePixelRatio);
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = EtherealGambiUtils_getInstance().get_scaleDownToWidthVariantsPresets_ixj29u_k$();
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = GabrielaColorPreviewCanvas$mountIn$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0_0(tmp);
    var presets = sortedWith(this_0, tmp$ret$0);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = presets.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element.get_width_j0q4yl_k$() >= canvas.width) {
          tmp$ret$3 = element;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    var bestMatch = tmp$ret$3;
    if (!(bestMatch == null)) {
      this.baseImageWrapper_1 = new CoroutineImageWrapper('https://stuff.loritta.website/gabriela-art-brush-sortros@' + bestMatch.get_name_woqyms_k$() + '.png');
      this.sweaterOverlayImageWrapper_1 = new CoroutineImageWrapper('https://stuff.loritta.website/gabriela-art-brush-sortros-overlay@' + bestMatch.get_name_woqyms_k$() + '.png');
    } else {
      this.baseImageWrapper_1 = new CoroutineImageWrapper('https://stuff.loritta.website/gabriela-art-brush-sortros.png');
      this.sweaterOverlayImageWrapper_1 = new CoroutineImageWrapper('https://stuff.loritta.website/gabriela-art-brush-sortros-overlay.png');
    }
    var tmp_0 = this;
    var tmp_1 = document.createElement('canvas');
    tmp_0.sweaterCanvas_1 = tmp_1 instanceof HTMLCanvasElement ? tmp_1 : THROW_CCE();
    _get_sweaterCanvas__93pmug(this).width = canvas.width;
    _get_sweaterCanvas__93pmug(this).height = canvas.height;
  };
  protoOf(GabrielaColorPreviewCanvas).unmount_81cc40_k$ = function () {
    _get_canvas__o4k8ct(this).remove();
    _get_sweaterCanvas__93pmug(this).remove();
  };
  protoOf(GabrielaColorPreviewCanvas).updateColor_580t19_k$ = function (color, $completion) {
    this.currentColor_1 = color;
    return this.render_kzguv3_k$($completion);
  };
  protoOf(GabrielaColorPreviewCanvas).render_kzguv3_k$ = function ($completion) {
    return coroutineScope(GabrielaColorPreviewCanvas$render$slambda_0(this, null), $completion);
  };
  function com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_GabrielaColorPreviewCanvas$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_GabrielaColorPreviewCanvas$stable;
  }
  var com_mrpowergamerbr_butterscotchpreprocessor_network_C2SPacketType$stable;
  function C2SPacketType() {
    C2SPacketType_instance = this;
    this.DECODE_AUDIO_1 = 'c2sDecodeAudio';
    this.PROCESS_DATA_WIN_1 = 'c2sProcessDataWin';
  }
  protoOf(C2SPacketType).get_DECODE_AUDIO_ubatta_k$ = function () {
    return this.DECODE_AUDIO_1;
  };
  protoOf(C2SPacketType).get_PROCESS_DATA_WIN_6h0uqo_k$ = function () {
    return this.PROCESS_DATA_WIN_1;
  };
  var C2SPacketType_instance;
  function C2SPacketType_getInstance() {
    if (C2SPacketType_instance == null)
      new C2SPacketType();
    return C2SPacketType_instance;
  }
  function c2sEnvelope(id, packet) {
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.id = id;
    this_0.packet = packet;
    return this_0;
  }
  function c2sDecodeAudioPacket(data) {
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.type = 'c2sDecodeAudio';
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.data = data;
    return this_0;
  }
  function c2sProcessDataWin(data, externalAudioFiles, audioGroupFiles, musFiles, force4bppPatterns, atlasSize) {
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.type = 'c2sProcessDataWin';
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.data = data;
    this_0.externalAudioFiles = byteArrayMapToJsObject(externalAudioFiles);
    // Inline function 'kotlin.collections.mapKeys' call
    // Inline function 'kotlin.collections.mapKeysTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(audioGroupFiles.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = audioGroupFiles.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp = element.get_key_18j28a_k$().toString();
      var tmp$ret$4 = element.get_value_j01efc_k$();
      destination.put_4fpzoq_k$(tmp, tmp$ret$4);
    }
    this_0.audioGroupFiles = byteArrayMapToJsObject(destination);
    this_0.musFiles = byteArrayMapToJsObject(musFiles);
    // Inline function 'kotlin.collections.toTypedArray' call
    this_0.force4bppPatterns = copyToArray(force4bppPatterns);
    this_0.atlasSize = atlasSize;
    return this_0;
  }
  function byteArrayMapToJsObject(map) {
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'kotlin.apply' call
    var obj = {};
    // Inline function 'kotlin.js.asDynamic' call
    var dyn = obj;
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = map.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var k = _destruct__k2r9zo.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var v = _destruct__k2r9zo.get_value_j01efc_k$();
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      dyn[k] = v;
    }
    return obj;
  }
  function jsObjectToByteArrayMap(jsObj) {
    // Inline function 'kotlin.js.unsafeCast' call
    var keys = Object.keys(jsObj);
    var out = HashMap_init_$Create$_0(keys.length);
    // Inline function 'kotlin.js.asDynamic' call
    var dyn = jsObj;
    var inductionVariable = 0;
    var last = keys.length;
    while (inductionVariable < last) {
      var k = keys[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.collections.set' call
      var value = dyn[k];
      out.put_4fpzoq_k$(k, value);
    }
    return out;
  }
  function com_mrpowergamerbr_butterscotchpreprocessor_network_C2SPacketType$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_network_C2SPacketType$stable;
  }
  var com_mrpowergamerbr_butterscotchpreprocessor_network_S2CPacketType$stable;
  function S2CPacketType() {
    S2CPacketType_instance = this;
    this.DECODE_AUDIO_1 = 's2cDecodeAudio';
    this.PROGRESS_1 = 's2cProgress';
    this.ERROR_1 = 's2cError';
    this.PROCESS_RESULT_1 = 's2cProcessResult';
  }
  protoOf(S2CPacketType).get_DECODE_AUDIO_ubatta_k$ = function () {
    return this.DECODE_AUDIO_1;
  };
  protoOf(S2CPacketType).get_PROGRESS_zezwui_k$ = function () {
    return this.PROGRESS_1;
  };
  protoOf(S2CPacketType).get_ERROR_i8tccf_k$ = function () {
    return this.ERROR_1;
  };
  protoOf(S2CPacketType).get_PROCESS_RESULT_ttwaui_k$ = function () {
    return this.PROCESS_RESULT_1;
  };
  var S2CPacketType_instance;
  function S2CPacketType_getInstance() {
    if (S2CPacketType_instance == null)
      new S2CPacketType();
    return S2CPacketType_instance;
  }
  function s2cEnvelope(id, packet, terminal) {
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.id = id;
    this_0.packet = packet;
    this_0.terminal = terminal;
    return this_0;
  }
  function audioDataWire(audio) {
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.format = audio.get_format_dfdtds_k$();
    this_0.sampleRate = audio.get_sampleRate_ht28r1_k$();
    this_0.channels = audio.get_channels_83zl9j_k$();
    this_0.bitsPerSample = audio.get_bitsPerSample_6zk13s_k$();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.data = audio.get_data_wokkxf_k$();
    this_0.sampleCount = audio.get_sampleCount_fzyyho_k$();
    return this_0;
  }
  function toAudioData(_this__u8e3s4) {
    var tmp = _this__u8e3s4.format;
    var tmp_0 = _this__u8e3s4.sampleRate;
    var tmp_1 = _this__u8e3s4.channels;
    var tmp_2 = _this__u8e3s4.bitsPerSample;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = _this__u8e3s4.data;
    return new AudioData(tmp, tmp_0, tmp_1, tmp_2, tmp$ret$1, _this__u8e3s4.sampleCount);
  }
  function s2cDecodeAudioPacket(audio) {
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.type = 's2cDecodeAudio';
    var tmp;
    if (audio == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = audioDataWire(audio);
    }
    this_0.audio = tmp;
    return this_0;
  }
  function s2cProgressPacket(message) {
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.type = 's2cProgress';
    this_0.message = message;
    return this_0;
  }
  function s2cErrorPacket(message) {
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.type = 's2cError';
    this_0.message = message;
    return this_0;
  }
  function s2cProcessResultPacket(gameName, clut4Bin, clut8Bin, texturesBin, atlasBin, soundBnkBin, soundsBin) {
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'js.objects.unsafeJso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.type = 's2cProcessResult';
    this_0.gameName = gameName;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.clut4Bin = clut4Bin;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.clut8Bin = clut8Bin;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.texturesBin = texturesBin;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.atlasBin = atlasBin;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.soundBnkBin = soundBnkBin;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.soundsBin = soundsBin;
    return this_0;
  }
  function com_mrpowergamerbr_butterscotchpreprocessor_network_S2CPacketType$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_network_S2CPacketType$stable;
  }
  var com_mrpowergamerbr_butterscotchpreprocessor_utils_SVGIconManager_SVGIcon$stable;
  var com_mrpowergamerbr_butterscotchpreprocessor_utils_SVGIconManager$stable;
  function SVGIcon_0(html) {
    this.html_1 = html;
    this.rawHtml_1 = ensureNotNull(this.html_1.querySelector('svg')).outerHTML;
  }
  protoOf(SVGIcon_0).get_html_wonit0_k$ = function () {
    return this.html_1;
  };
  protoOf(SVGIcon_0).get_rawHtml_hk8aoa_k$ = function () {
    return this.rawHtml_1;
  };
  function SVGIconManager() {
    SVGIconManager_instance = this;
  }
  protoOf(SVGIconManager).fromRawHtml_2uw3rj_k$ = function (html) {
    var parser = new DOMParser();
    // Inline function 'web.parsing.imageSvgXml' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'image/svg+xml';
    var document = parser.parseFromString(html, tmp$ret$3);
    return new SVGIcon_0(document);
  };
  var SVGIconManager_instance;
  function SVGIconManager_getInstance() {
    if (SVGIconManager_instance == null)
      new SVGIconManager();
    return SVGIconManager_instance;
  }
  function com_mrpowergamerbr_butterscotchpreprocessor_utils_SVGIconManager_SVGIcon$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_utils_SVGIconManager_SVGIcon$stable;
  }
  function com_mrpowergamerbr_butterscotchpreprocessor_utils_SVGIconManager$stableprop_getter() {
    return com_mrpowergamerbr_butterscotchpreprocessor_utils_SVGIconManager$stable;
  }
  //region block: init
  com_mrpowergamerbr_butterscotchpreprocessor_ButterWorkerClient$stable = 8;
  com_mrpowergamerbr_butterscotchpreprocessor_ButterWorkerServer$stable = 0;
  com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_Color$stable = 0;
  com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_HSBColor$stable = 0;
  com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_ColorUtils_ColorPair$stable = 0;
  com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_ColorUtils$stable = 8;
  com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_CoroutineImageWrapper$stable = 8;
  com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_EtherealGambiUtils_ScaleDownToWidthImageVariantPreset$stable = 0;
  com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_EtherealGambiUtils$stable = 8;
  com_mrpowergamerbr_butterscotchpreprocessor_components_colorpicker_GabrielaColorPreviewCanvas$stable = 8;
  com_mrpowergamerbr_butterscotchpreprocessor_network_C2SPacketType$stable = 0;
  com_mrpowergamerbr_butterscotchpreprocessor_network_S2CPacketType$stable = 0;
  com_mrpowergamerbr_butterscotchpreprocessor_utils_SVGIconManager_SVGIcon$stable = 8;
  com_mrpowergamerbr_butterscotchpreprocessor_utils_SVGIconManager$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));
