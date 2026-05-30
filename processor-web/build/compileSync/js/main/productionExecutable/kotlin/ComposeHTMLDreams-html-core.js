(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ComposeHTMLDreams-internal-html-core-runtime.js', './androidx-compose-runtime-runtime.js', './kotlin-web.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ComposeHTMLDreams-internal-html-core-runtime.js'), require('./androidx-compose-runtime-runtime.js'), require('./kotlin-web.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ComposeHTMLDreams-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ComposeHTMLDreams-html-core'.");
    }
    if (typeof globalThis['ComposeHTMLDreams-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'ComposeHTMLDreams-html-core'. Its dependency 'ComposeHTMLDreams-internal-html-core-runtime' was not found. Please, check whether 'ComposeHTMLDreams-internal-html-core-runtime' is loaded prior to 'ComposeHTMLDreams-html-core'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'ComposeHTMLDreams-html-core'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'ComposeHTMLDreams-html-core'.");
    }
    if (typeof globalThis['kotlin-web'] === 'undefined') {
      throw new Error("Error loading module 'ComposeHTMLDreams-html-core'. Its dependency 'kotlin-web' was not found. Please, check whether 'kotlin-web' is loaded prior to 'ComposeHTMLDreams-html-core'.");
    }
    globalThis['ComposeHTMLDreams-html-core'] = factory(typeof globalThis['ComposeHTMLDreams-html-core'] === 'undefined' ? {} : globalThis['ComposeHTMLDreams-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['ComposeHTMLDreams-internal-html-core-runtime'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlin-web']);
  }
}(function (_, kotlin_kotlin, kotlin_net_perfectdreams_compose_htmldreams_internal_html_core_runtime, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlin_wrappers_kotlin_web) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.l2;
  var protoOf = kotlin_kotlin.$_$.s8;
  var asList = kotlin_kotlin.$_$.g3;
  var initMetadataForInterface = kotlin_kotlin.$_$.d8;
  var VOID = kotlin_kotlin.$_$.c;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var addAll = kotlin_kotlin.$_$.d3;
  var to = kotlin_kotlin.$_$.rb;
  var THROW_CCE = kotlin_kotlin.$_$.ab;
  var Pair = kotlin_kotlin.$_$.ya;
  var initMetadataForClass = kotlin_kotlin.$_$.a8;
  var initMetadataForObject = kotlin_kotlin.$_$.f8;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var equals = kotlin_kotlin.$_$.s7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.b8;
  var Enum = kotlin_kotlin.$_$.ta;
  var NamedEventListener = kotlin_net_perfectdreams_compose_htmldreams_internal_html_core_runtime.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.o7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var ensureNotNull = kotlin_kotlin.$_$.ib;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.l;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.c1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.r;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.f;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var toString_0 = kotlin_kotlin.$_$.qb;
  var toBoolean = kotlin_kotlin.$_$.ia;
  var numberToDouble = kotlin_kotlin.$_$.p8;
  var getNumberHashCode = kotlin_kotlin.$_$.w7;
  var hashCode = kotlin_kotlin.$_$.z7;
  var defineProp = kotlin_kotlin.$_$.q7;
  var isInterface = kotlin_kotlin.$_$.j8;
  var getStringHashCode = kotlin_kotlin.$_$.y7;
  var Collection = kotlin_kotlin.$_$.t2;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_androidx_compose_runtime_runtime.$_$.x;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_androidx_compose_runtime_runtime.$_$.y;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.a1;
  var DomNodeWrapper = kotlin_net_perfectdreams_compose_htmldreams_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.x3;
  var removeEventListener = kotlin_org_jetbrains_kotlin_wrappers_kotlin_web.$_$.c;
  var addEventListener = kotlin_org_jetbrains_kotlin_wrappers_kotlin_web.$_$.b;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.k3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var copyToArray = kotlin_kotlin.$_$.v3;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.w;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.n6;
  var KProperty1 = kotlin_kotlin.$_$.j9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.x7;
  var lazy = kotlin_kotlin.$_$.kb;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.p;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var DomApplier = kotlin_net_perfectdreams_compose_htmldreams_internal_html_core_runtime.$_$.a;
  //endregion
  //region block: pre-declaration
  function onClick(listener) {
    this.l3q(new MouseEventListener('click', listener));
  }
  function onMouseDown(listener) {
    this.l3q(new MouseEventListener('mousedown', listener));
  }
  function onMouseUp(listener) {
    this.l3q(new MouseEventListener('mouseup', listener));
  }
  function onMouseLeave(listener) {
    this.l3q(new MouseEventListener('mouseleave', listener));
  }
  function onMouseMove(listener) {
    this.l3q(new MouseEventListener('mousemove', listener));
  }
  initMetadataForInterface(EventsListenerScope, 'EventsListenerScope');
  function classes(classes) {
    return this.g3q(asList(classes));
  }
  function id(value) {
    return this.a3q('id', value);
  }
  initMetadataForInterface(AttrsScope, 'AttrsScope', VOID, VOID, [EventsListenerScope]);
  initMetadataForClass(AttrsScopeBuilder, 'AttrsScopeBuilder', AttrsScopeBuilder, VOID, [AttrsScope, EventsListenerScope]);
  initMetadataForClass(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', EventsListenerScopeBuilder, VOID, [EventsListenerScope]);
  initMetadataForClass(InputType, 'InputType');
  initMetadataForClass(InputTypeWithUnitValue, 'InputTypeWithUnitValue', VOID, InputType);
  initMetadataForObject(Button, 'Button', VOID, InputTypeWithUnitValue);
  initMetadataForClass(InputTypeCheckedValue, 'InputTypeCheckedValue', VOID, InputType);
  initMetadataForObject(Checkbox, 'Checkbox', VOID, InputTypeCheckedValue);
  initMetadataForClass(InputTypeWithStringValue, 'InputTypeWithStringValue', VOID, InputType);
  initMetadataForObject(Color, 'Color', VOID, InputTypeWithStringValue);
  initMetadataForObject(Date_0, 'Date', VOID, InputTypeWithStringValue);
  initMetadataForObject(DateTimeLocal, 'DateTimeLocal', VOID, InputTypeWithStringValue);
  initMetadataForObject(Email, 'Email', VOID, InputTypeWithStringValue);
  initMetadataForObject(File, 'File', VOID, InputTypeWithStringValue);
  initMetadataForObject(Hidden, 'Hidden', VOID, InputTypeWithStringValue);
  initMetadataForObject(Month, 'Month', VOID, InputTypeWithStringValue);
  initMetadataForClass(InputTypeNumberValue, 'InputTypeNumberValue', VOID, InputType);
  initMetadataForObject(Number_0, 'Number', VOID, InputTypeNumberValue);
  initMetadataForObject(Password, 'Password', VOID, InputTypeWithStringValue);
  initMetadataForObject(Radio, 'Radio', VOID, InputTypeCheckedValue);
  initMetadataForObject(Range, 'Range', VOID, InputTypeNumberValue);
  initMetadataForObject(Search, 'Search', VOID, InputTypeWithStringValue);
  initMetadataForObject(Submit, 'Submit', VOID, InputTypeWithUnitValue);
  initMetadataForObject(Tel, 'Tel', VOID, InputTypeWithStringValue);
  initMetadataForObject(Text_0, 'Text', VOID, InputTypeWithStringValue);
  initMetadataForObject(Time, 'Time', VOID, InputTypeWithStringValue);
  initMetadataForObject(Url, 'Url', VOID, InputTypeWithStringValue);
  initMetadataForObject(Week, 'Week', VOID, InputTypeWithStringValue);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ButtonType, 'ButtonType', VOID, Enum);
  initMetadataForClass(SyntheticEventListener, 'SyntheticEventListener', VOID, NamedEventListener);
  initMetadataForClass(InputEventListener, 'InputEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(ChangeEventListener, 'ChangeEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(MouseEventListener, 'MouseEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(InputAttrsScope, 'InputAttrsScope', VOID, VOID, [AttrsScope]);
  initMetadataForClass(DisposeRadioGroupEffect$$inlined$cache$2$1);
  initMetadataForClass(SelectAttrsScope, 'SelectAttrsScope', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SelectChangeEventListener, 'SelectChangeEventListener', VOID, SyntheticEventListener);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CSSUnitValueTyped, 'CSSUnitValueTyped');
  initMetadataForClass(RGB, 'RGB');
  initMetadataForClass(HSL, 'HSL');
  function property(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.y3s(propertyName, value);
  }
  initMetadataForInterface(StyleScope, 'StyleScope');
  initMetadataForInterface(StyleHolder, 'StyleHolder');
  initMetadataForClass(StyleScopeBuilder, 'StyleScopeBuilder', StyleScopeBuilder, VOID, [StyleScope, StyleHolder]);
  initMetadataForClass(StylePropertyDeclaration, 'StylePropertyDeclaration');
  initMetadataForClass(DomElementWrapper, 'DomElementWrapper', VOID, DomNodeWrapper);
  initMetadataForClass(ElementScopeBase, 'ElementScopeBase');
  initMetadataForClass(ElementScopeImpl, 'ElementScopeImpl', ElementScopeImpl, ElementScopeBase);
  initMetadataForClass(ElementBuilderImplementation, 'ElementBuilderImplementation');
  initMetadataForClass(Input$$inlined$run$2$2$1);
  initMetadataForClass(SyntheticEvent, 'SyntheticEvent');
  initMetadataForClass(SyntheticChangeEvent, 'SyntheticChangeEvent', VOID, SyntheticEvent);
  initMetadataForClass(SyntheticInputEvent, 'SyntheticInputEvent', VOID, SyntheticEvent);
  initMetadataForClass(SyntheticMouseEvent, 'SyntheticMouseEvent', VOID, SyntheticEvent);
  //endregion
  function get_setInputValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setInputValue;
  }
  var setInputValue;
  var setTextAreaDefaultValue;
  function get_setCheckedValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setCheckedValue;
  }
  var setCheckedValue;
  function placeholder(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a3q('placeholder', value);
  }
  function selected(_this__u8e3s4) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a3q('selected', '');
  }
  function type(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a3q('type', value.d3q_1);
  }
  function type_0(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a3q('type', value.e3q_1);
  }
  function href(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a3q('href', value);
  }
  function multiple(_this__u8e3s4) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a3q('multiple', '');
  }
  function value(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a3q('value', value);
  }
  function forId(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a3q('for', value);
  }
  function min(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a3q('min', value);
  }
  function max(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a3q('max', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_instance;
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (!properties_initialized_Attrs_kt_uypsku) {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.r3q_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.s3q_1 = LinkedHashMap_init_$Create$();
    this.t3q_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.u3q_1 = ArrayList_init_$Create$();
    this.v3q_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.w3q_1 = ArrayList_init_$Create$();
  }
  protoOf(AttrsScopeBuilder).g3q = function (classes) {
    this.w3q_1.p(classes);
  };
  protoOf(AttrsScopeBuilder).h3q = function (classes) {
    addAll(this.w3q_1, classes);
  };
  protoOf(AttrsScopeBuilder).f3q = function (builder) {
    // Inline function 'kotlin.apply' call
    builder(this.t3q_1);
  };
  protoOf(AttrsScopeBuilder).j3q = function (effect) {
    this.v3q_1 = effect;
  };
  protoOf(AttrsScopeBuilder).a3q = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.s3q_1.w1(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).k3q = function (update, value) {
    var tmp = to(update, value);
    this.u3q_1.g(tmp instanceof Pair ? tmp : THROW_CCE());
  };
  protoOf(AttrsScopeBuilder).x3q = function () {
    return this.s3q_1;
  };
  protoOf(AttrsScopeBuilder).l3q = function (listener) {
    this.r3q_1.l3q(listener);
  };
  protoOf(AttrsScopeBuilder).m3q = function (listener) {
    this.r3q_1.m3q(listener);
  };
  protoOf(AttrsScopeBuilder).n3q = function (listener) {
    this.r3q_1.n3q(listener);
  };
  protoOf(AttrsScopeBuilder).o3q = function (listener) {
    this.r3q_1.o3q(listener);
  };
  protoOf(AttrsScopeBuilder).p3q = function (listener) {
    this.r3q_1.p3q(listener);
  };
  protoOf(AttrsScopeBuilder).q3q = function (listener) {
    this.r3q_1.q3q(listener);
  };
  var org_jetbrains_compose_web_attributes_EventsListenerScopeBuilder$stable;
  function EventsListenerScope() {
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y3q_1 = ArrayList_init_$Create$();
  }
  protoOf(EventsListenerScopeBuilder).l3q = function (listener) {
    this.y3q_1.g(listener);
  };
  protoOf(EventsListenerScopeBuilder).z3q = function () {
    return this.y3q_1;
  };
  var org_jetbrains_compose_web_attributes_InputType_Button$stable;
  var org_jetbrains_compose_web_attributes_InputType_Checkbox$stable;
  var org_jetbrains_compose_web_attributes_InputType_Color$stable;
  var org_jetbrains_compose_web_attributes_InputType_Date$stable;
  var org_jetbrains_compose_web_attributes_InputType_DateTimeLocal$stable;
  var org_jetbrains_compose_web_attributes_InputType_Email$stable;
  var org_jetbrains_compose_web_attributes_InputType_File$stable;
  var org_jetbrains_compose_web_attributes_InputType_Hidden$stable;
  var org_jetbrains_compose_web_attributes_InputType_Month$stable;
  var org_jetbrains_compose_web_attributes_InputType_Number$stable;
  var org_jetbrains_compose_web_attributes_InputType_Password$stable;
  var org_jetbrains_compose_web_attributes_InputType_Radio$stable;
  var org_jetbrains_compose_web_attributes_InputType_Range$stable;
  var org_jetbrains_compose_web_attributes_InputType_Search$stable;
  var org_jetbrains_compose_web_attributes_InputType_Submit$stable;
  var org_jetbrains_compose_web_attributes_InputType_Tel$stable;
  var org_jetbrains_compose_web_attributes_InputType_Text$stable;
  var org_jetbrains_compose_web_attributes_InputType_Time$stable;
  var org_jetbrains_compose_web_attributes_InputType_Url$stable;
  var org_jetbrains_compose_web_attributes_InputType_Week$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeWithStringValue$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeWithUnitValue$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeCheckedValue$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeNumberValue$stable;
  var org_jetbrains_compose_web_attributes_InputType$stable;
  var org_jetbrains_compose_web_attributes_DirType_Ltr$stable;
  var org_jetbrains_compose_web_attributes_DirType_Rtl$stable;
  var org_jetbrains_compose_web_attributes_DirType_Auto$stable;
  var org_jetbrains_compose_web_attributes_DirType$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Self$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Top$stable;
  var org_jetbrains_compose_web_attributes_ATarget$stable;
  var org_jetbrains_compose_web_attributes_ARel_Alternate$stable;
  var org_jetbrains_compose_web_attributes_ARel_Author$stable;
  var org_jetbrains_compose_web_attributes_ARel_Bookmark$stable;
  var org_jetbrains_compose_web_attributes_ARel_External$stable;
  var org_jetbrains_compose_web_attributes_ARel_Help$stable;
  var org_jetbrains_compose_web_attributes_ARel_License$stable;
  var org_jetbrains_compose_web_attributes_ARel_Next$stable;
  var org_jetbrains_compose_web_attributes_ARel_First$stable;
  var org_jetbrains_compose_web_attributes_ARel_Prev$stable;
  var org_jetbrains_compose_web_attributes_ARel_Last$stable;
  var org_jetbrains_compose_web_attributes_ARel_NoFollow$stable;
  var org_jetbrains_compose_web_attributes_ARel_NoOpener$stable;
  var org_jetbrains_compose_web_attributes_ARel_NoReferrer$stable;
  var org_jetbrains_compose_web_attributes_ARel_Opener$stable;
  var org_jetbrains_compose_web_attributes_ARel_Search$stable;
  var org_jetbrains_compose_web_attributes_ARel_Tag$stable;
  var org_jetbrains_compose_web_attributes_ARel_CustomARel$stable;
  var org_jetbrains_compose_web_attributes_ARel$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Self$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Top$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Self$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Top$stable;
  var org_jetbrains_compose_web_attributes_FormTarget$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Self$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Top$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget$stable;
  function Button() {
    Button_instance = this;
    InputTypeWithUnitValue.call(this, 'button');
  }
  var Button_instance;
  function Button_getInstance() {
    if (Button_instance == null)
      new Button();
    return Button_instance;
  }
  function Checkbox() {
    Checkbox_instance = this;
    InputTypeCheckedValue.call(this, 'checkbox');
  }
  var Checkbox_instance;
  function Checkbox_getInstance() {
    if (Checkbox_instance == null)
      new Checkbox();
    return Checkbox_instance;
  }
  function Color() {
    Color_instance = this;
    InputTypeWithStringValue.call(this, 'color');
  }
  var Color_instance;
  function Color_getInstance() {
    if (Color_instance == null)
      new Color();
    return Color_instance;
  }
  function Date_0() {
    Date_instance = this;
    InputTypeWithStringValue.call(this, 'date');
  }
  var Date_instance;
  function Date_getInstance() {
    if (Date_instance == null)
      new Date_0();
    return Date_instance;
  }
  function DateTimeLocal() {
    DateTimeLocal_instance = this;
    InputTypeWithStringValue.call(this, 'datetime-local');
  }
  var DateTimeLocal_instance;
  function DateTimeLocal_getInstance() {
    if (DateTimeLocal_instance == null)
      new DateTimeLocal();
    return DateTimeLocal_instance;
  }
  function Email() {
    Email_instance = this;
    InputTypeWithStringValue.call(this, 'email');
  }
  var Email_instance;
  function Email_getInstance() {
    if (Email_instance == null)
      new Email();
    return Email_instance;
  }
  function File() {
    File_instance = this;
    InputTypeWithStringValue.call(this, 'file');
  }
  var File_instance;
  function File_getInstance() {
    if (File_instance == null)
      new File();
    return File_instance;
  }
  function Hidden() {
    Hidden_instance = this;
    InputTypeWithStringValue.call(this, 'hidden');
  }
  var Hidden_instance;
  function Hidden_getInstance() {
    if (Hidden_instance == null)
      new Hidden();
    return Hidden_instance;
  }
  function Month() {
    Month_instance = this;
    InputTypeWithStringValue.call(this, 'month');
  }
  var Month_instance;
  function Month_getInstance() {
    if (Month_instance == null)
      new Month();
    return Month_instance;
  }
  function Number_0() {
    Number_instance = this;
    InputTypeNumberValue.call(this, 'number');
  }
  var Number_instance;
  function Number_getInstance() {
    if (Number_instance == null)
      new Number_0();
    return Number_instance;
  }
  function Password() {
    Password_instance = this;
    InputTypeWithStringValue.call(this, 'password');
  }
  var Password_instance;
  function Password_getInstance() {
    if (Password_instance == null)
      new Password();
    return Password_instance;
  }
  function Radio() {
    Radio_instance = this;
    InputTypeCheckedValue.call(this, 'radio');
  }
  var Radio_instance;
  function Radio_getInstance() {
    if (Radio_instance == null)
      new Radio();
    return Radio_instance;
  }
  function Range() {
    Range_instance = this;
    InputTypeNumberValue.call(this, 'range');
  }
  var Range_instance;
  function Range_getInstance() {
    if (Range_instance == null)
      new Range();
    return Range_instance;
  }
  function Search() {
    Search_instance = this;
    InputTypeWithStringValue.call(this, 'search');
  }
  var Search_instance;
  function Search_getInstance() {
    if (Search_instance == null)
      new Search();
    return Search_instance;
  }
  function Submit() {
    Submit_instance = this;
    InputTypeWithUnitValue.call(this, 'submit');
  }
  var Submit_instance;
  function Submit_getInstance() {
    if (Submit_instance == null)
      new Submit();
    return Submit_instance;
  }
  function Tel() {
    Tel_instance = this;
    InputTypeWithStringValue.call(this, 'tel');
  }
  var Tel_instance;
  function Tel_getInstance() {
    if (Tel_instance == null)
      new Tel();
    return Tel_instance;
  }
  function Text_0() {
    Text_instance = this;
    InputTypeWithStringValue.call(this, 'text');
  }
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text_0();
    return Text_instance;
  }
  function Time() {
    Time_instance = this;
    InputTypeWithStringValue.call(this, 'time');
  }
  var Time_instance;
  function Time_getInstance() {
    if (Time_instance == null)
      new Time();
    return Time_instance;
  }
  function Url() {
    Url_instance = this;
    InputTypeWithStringValue.call(this, 'url');
  }
  var Url_instance;
  function Url_getInstance() {
    if (Url_instance == null)
      new Url();
    return Url_instance;
  }
  function Week() {
    Week_instance = this;
    InputTypeWithStringValue.call(this, 'week');
  }
  var Week_instance;
  function Week_getInstance() {
    if (Week_instance == null)
      new Week();
    return Week_instance;
  }
  function InputTypeWithStringValue(name) {
    InputType.call(this, name);
  }
  protoOf(InputTypeWithStringValue).d3r = function (event) {
    return Week_getInstance().g3r(event);
  };
  function InputTypeWithUnitValue(name) {
    InputType.call(this, name);
  }
  protoOf(InputTypeWithUnitValue).b3r = function (event) {
    return Unit_instance;
  };
  protoOf(InputTypeWithUnitValue).d3r = function (event) {
    this.b3r(event);
    return Unit_instance;
  };
  function InputTypeCheckedValue(name) {
    InputType.call(this, name);
  }
  protoOf(InputTypeCheckedValue).d3r = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.checked;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? false : tmp3_elvis_lhs;
  };
  function InputTypeNumberValue(name) {
    InputType.call(this, name);
  }
  protoOf(InputTypeNumberValue).d3r = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.valueAsNumber;
    return tmp2_elvis_lhs == null ? null : tmp2_elvis_lhs;
  };
  function Companion() {
  }
  protoOf(Companion).h3r = function (type) {
    var tmp;
    // Inline function 'web.html.button' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    if (equals(type, 'button')) {
      tmp = Button_getInstance();
    } else {
      // Inline function 'web.html.checkbox' call
      // Inline function 'js.reflect.unsafeCast' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = 'checkbox';
      if (equals(type, tmp$ret$7)) {
        tmp = Checkbox_getInstance();
      } else {
        // Inline function 'web.html.color' call
        // Inline function 'js.reflect.unsafeCast' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        if (equals(type, 'color')) {
          tmp = Color_getInstance();
        } else {
          // Inline function 'web.html.date' call
          // Inline function 'js.reflect.unsafeCast' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          if (equals(type, 'date')) {
            tmp = Date_getInstance();
          } else {
            // Inline function 'web.html.datetimeLocal' call
            // Inline function 'js.reflect.unsafeCast' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp$ret$19 = 'datetime-local';
            if (equals(type, tmp$ret$19)) {
              tmp = DateTimeLocal_getInstance();
            } else {
              // Inline function 'web.html.email' call
              // Inline function 'js.reflect.unsafeCast' call
              // Inline function 'kotlin.js.unsafeCast' call
              // Inline function 'kotlin.js.asDynamic' call
              if (equals(type, 'email')) {
                tmp = Email_getInstance();
              } else {
                // Inline function 'web.html.file' call
                // Inline function 'js.reflect.unsafeCast' call
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                if (equals(type, 'file')) {
                  tmp = File_getInstance();
                } else {
                  // Inline function 'web.html.hidden' call
                  // Inline function 'js.reflect.unsafeCast' call
                  // Inline function 'kotlin.js.unsafeCast' call
                  // Inline function 'kotlin.js.asDynamic' call
                  if (equals(type, 'hidden')) {
                    tmp = Hidden_getInstance();
                  } else {
                    // Inline function 'web.html.month' call
                    // Inline function 'js.reflect.unsafeCast' call
                    // Inline function 'kotlin.js.unsafeCast' call
                    // Inline function 'kotlin.js.asDynamic' call
                    if (equals(type, 'month')) {
                      tmp = Month_getInstance();
                    } else {
                      // Inline function 'web.html.number' call
                      // Inline function 'js.reflect.unsafeCast' call
                      // Inline function 'kotlin.js.unsafeCast' call
                      // Inline function 'kotlin.js.asDynamic' call
                      if (equals(type, 'number')) {
                        tmp = Number_getInstance();
                      } else {
                        // Inline function 'web.html.password' call
                        // Inline function 'js.reflect.unsafeCast' call
                        // Inline function 'kotlin.js.unsafeCast' call
                        // Inline function 'kotlin.js.asDynamic' call
                        var tmp$ret$43 = 'password';
                        if (equals(type, tmp$ret$43)) {
                          tmp = Password_getInstance();
                        } else {
                          // Inline function 'web.html.radio' call
                          // Inline function 'js.reflect.unsafeCast' call
                          // Inline function 'kotlin.js.unsafeCast' call
                          // Inline function 'kotlin.js.asDynamic' call
                          if (equals(type, 'radio')) {
                            tmp = Radio_getInstance();
                          } else {
                            // Inline function 'web.html.range' call
                            // Inline function 'js.reflect.unsafeCast' call
                            // Inline function 'kotlin.js.unsafeCast' call
                            // Inline function 'kotlin.js.asDynamic' call
                            if (equals(type, 'range')) {
                              tmp = Range_getInstance();
                            } else {
                              // Inline function 'web.html.search' call
                              // Inline function 'js.reflect.unsafeCast' call
                              // Inline function 'kotlin.js.unsafeCast' call
                              // Inline function 'kotlin.js.asDynamic' call
                              if (equals(type, 'search')) {
                                tmp = Search_getInstance();
                              } else {
                                // Inline function 'web.html.submit' call
                                // Inline function 'js.reflect.unsafeCast' call
                                // Inline function 'kotlin.js.unsafeCast' call
                                // Inline function 'kotlin.js.asDynamic' call
                                if (equals(type, 'submit')) {
                                  tmp = Submit_getInstance();
                                } else {
                                  // Inline function 'web.html.tel' call
                                  // Inline function 'js.reflect.unsafeCast' call
                                  // Inline function 'kotlin.js.unsafeCast' call
                                  // Inline function 'kotlin.js.asDynamic' call
                                  if (equals(type, 'tel')) {
                                    tmp = Tel_getInstance();
                                  } else {
                                    // Inline function 'web.html.text' call
                                    // Inline function 'js.reflect.unsafeCast' call
                                    // Inline function 'kotlin.js.unsafeCast' call
                                    // Inline function 'kotlin.js.asDynamic' call
                                    if (equals(type, 'text')) {
                                      tmp = Text_getInstance();
                                    } else {
                                      // Inline function 'web.html.time' call
                                      // Inline function 'js.reflect.unsafeCast' call
                                      // Inline function 'kotlin.js.unsafeCast' call
                                      // Inline function 'kotlin.js.asDynamic' call
                                      if (equals(type, 'time')) {
                                        tmp = Time_getInstance();
                                      } else {
                                        // Inline function 'web.html.url' call
                                        // Inline function 'js.reflect.unsafeCast' call
                                        // Inline function 'kotlin.js.unsafeCast' call
                                        // Inline function 'kotlin.js.asDynamic' call
                                        if (equals(type, 'url')) {
                                          tmp = Url_getInstance();
                                        } else {
                                          // Inline function 'web.html.week' call
                                          // Inline function 'js.reflect.unsafeCast' call
                                          // Inline function 'kotlin.js.unsafeCast' call
                                          // Inline function 'kotlin.js.asDynamic' call
                                          if (equals(type, 'week')) {
                                            tmp = Week_getInstance();
                                          } else {
                                            var message = 'fromString got unknown type - ' + toString(type);
                                            throw IllegalStateException_init_$Create$(toString(message));
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function InputType(typeStr) {
    this.e3q_1 = typeStr;
  }
  protoOf(InputType).g3r = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.value;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
  };
  function org_jetbrains_compose_web_attributes_InputType_File$stableprop_getter() {
    return org_jetbrains_compose_web_attributes_InputType_File$stable;
  }
  function org_jetbrains_compose_web_attributes_InputType_Range$stableprop_getter() {
    return org_jetbrains_compose_web_attributes_InputType_Range$stable;
  }
  function org_jetbrains_compose_web_attributes_InputType_Checkbox$stableprop_getter() {
    return org_jetbrains_compose_web_attributes_InputType_Checkbox$stable;
  }
  var ButtonType_Button_instance;
  var ButtonType_Reset_instance;
  var ButtonType_Submit_instance;
  var ButtonType_entriesInitialized;
  function ButtonType_initEntries() {
    if (ButtonType_entriesInitialized)
      return Unit_instance;
    ButtonType_entriesInitialized = true;
    ButtonType_Button_instance = new ButtonType('Button', 0, 'button');
    ButtonType_Reset_instance = new ButtonType('Reset', 1, 'reset');
    ButtonType_Submit_instance = new ButtonType('Submit', 2, 'submit');
  }
  function ButtonType(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.d3q_1 = str;
  }
  function ButtonType_Button_getInstance() {
    ButtonType_initEntries();
    return ButtonType_Button_instance;
  }
  function InputEventListener(eventName, inputType, listener) {
    eventName = eventName === VOID ? 'input' : eventName;
    SyntheticEventListener.call(this, eventName, listener);
    this.m3r_1 = inputType;
  }
  protoOf(InputEventListener).v3o = function (event) {
    var value = this.m3r_1.d3r(event);
    this.p3r_1(new SyntheticInputEvent(value, event));
  };
  function ChangeEventListener(inputType, listener) {
    SyntheticEventListener.call(this, 'change', listener);
    this.v3r_1 = inputType;
  }
  protoOf(ChangeEventListener).v3o = function (event) {
    var value = this.v3r_1.d3r(event);
    this.p3r_1(new SyntheticChangeEvent(value, event));
  };
  function SyntheticEventListener(event, listener) {
    NamedEventListener.call(this);
    this.o3r_1 = event;
    this.p3r_1 = listener;
    this.q3r_1 = this.o3r_1;
  }
  protoOf(SyntheticEventListener).s31 = function () {
    return this.q3r_1;
  };
  protoOf(SyntheticEventListener).v3o = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.p3r_1(tmp$ret$1);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(MouseEventListener).v3o = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.p3r_1(new SyntheticMouseEvent(event));
  };
  var org_jetbrains_compose_web_attributes_builders_InputAttrsScope$stable;
  function InputAttrsScope(inputType, attrsScope) {
    this.a3s_1 = attrsScope;
    this.b3s_1 = inputType;
  }
  protoOf(InputAttrsScope).c3s = function (value) {
    var tmp0_subject = this.b3s_1;
    if (equals(tmp0_subject, Checkbox_getInstance()) || equals(tmp0_subject, Radio_getInstance()) || (equals(tmp0_subject, Hidden_getInstance()) || equals(tmp0_subject, Submit_getInstance())))
      this.a3q('value', value);
    else {
      this.k3q(get_setInputValue(), value);
    }
    return this;
  };
  protoOf(InputAttrsScope).d3s = function (checked) {
    this.k3q(get_setCheckedValue(), checked);
    return this;
  };
  protoOf(InputAttrsScope).e3s = function (listener) {
    this.l3q(new InputEventListener('input', this.b3s_1, listener));
  };
  protoOf(InputAttrsScope).f3s = function (listener) {
    this.l3q(new ChangeEventListener(this.b3s_1, listener));
  };
  protoOf(InputAttrsScope).f3q = function (builder) {
    this.a3s_1.f3q(builder);
  };
  protoOf(InputAttrsScope).g3q = function (classes) {
    this.a3s_1.g3q(classes);
  };
  protoOf(InputAttrsScope).h3q = function (classes) {
    this.a3s_1.h3q(classes);
  };
  protoOf(InputAttrsScope).i3q = function (value) {
    return this.a3s_1.i3q(value);
  };
  protoOf(InputAttrsScope).g3s = function (effect) {
    this.a3s_1.j3q(effect);
  };
  protoOf(InputAttrsScope).j3q = function (effect) {
    return this.g3s(effect);
  };
  protoOf(InputAttrsScope).a3q = function (attr, value) {
    return this.a3s_1.a3q(attr, value);
  };
  protoOf(InputAttrsScope).k3q = function (update, value) {
    this.a3s_1.k3q(update, value);
  };
  protoOf(InputAttrsScope).l3q = function (listener) {
    this.a3s_1.l3q(listener);
  };
  protoOf(InputAttrsScope).m3q = function (listener) {
    this.a3s_1.m3q(listener);
  };
  protoOf(InputAttrsScope).n3q = function (listener) {
    this.a3s_1.n3q(listener);
  };
  protoOf(InputAttrsScope).o3q = function (listener) {
    this.a3s_1.o3q(listener);
  };
  protoOf(InputAttrsScope).p3q = function (listener) {
    this.a3s_1.p3q(listener);
  };
  protoOf(InputAttrsScope).q3q = function (listener) {
    this.a3s_1.q3q(listener);
  };
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    var tmp_0 = element.type;
    // Inline function 'web.html.radio' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    if (equals(tmp_0, 'radio')) {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = element.name;
      tmp = charSequenceLength(this_0) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().b2(element.name)) {
        var tmp0 = get_controlledRadioGroups();
        var tmp2 = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        // Inline function 'kotlin.collections.set' call
        var value = LinkedHashSet_init_$Create$();
        tmp0.w1(tmp2, value);
      }
      ensureNotNull(get_controlledRadioGroups().d2(element.name)).g(element);
    }
  }
  function DisposeRadioGroupEffect(_this__u8e3s4, $composer, $changed) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1451478773, 'C(DisposeRadioGroupEffect)69@2645L264,69@2622L287:InternalControlledInputUtils.kt#otlt2h');
    if (isTraceInProgress()) {
      traceEventStart(-1451478773, $changed, -1, 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect (InternalControlledInputUtils.kt:68)');
    }
    sourceInformationMarkerStart($composer_0, 993273491, 'CC(remember):InternalControlledInputUtils.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.y25(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.s25();
    var tmp;
    if (invalid || it === Companion_getInstance().x24_1) {
      var value = DisposeRadioGroupEffect$lambda(_this__u8e3s4);
      $composer_0.t25(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(null, tmp0_group, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function restoreControlledInputState(inputElement) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var type = Companion_instance.h3r(inputElement.type);
    if (get_controlledInputsValuesWeakMap().has(inputElement)) {
      if (equals(type, Radio_getInstance())) {
        var tmp0_safe_receiver = get_controlledRadioGroups().d2(inputElement.name);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = tmp0_safe_receiver.l();
          while (_iterator__ex2g4s.m()) {
            var element = _iterator__ex2g4s.n();
            element.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(element)));
          }
        }
        inputElement.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(inputElement)));
        return Unit_instance;
      }
      if (equals(type, Checkbox_getInstance())) {
        inputElement.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(inputElement)));
      } else {
        inputElement.value = toString_0(get_controlledInputsValuesWeakMap().get(inputElement));
      }
    }
  }
  function DisposeRadioGroupEffect$$inlined$cache$2$1($ref) {
    this.h3s_1 = $ref;
  }
  protoOf(DisposeRadioGroupEffect$$inlined$cache$2$1).hk = function () {
    var tmp0_safe_receiver = get_controlledRadioGroups().d2(this.h3s_1.name);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.e2(this.h3s_1);
    var tmp1_safe_receiver = get_controlledRadioGroups().d2(this.h3s_1.name);
    if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t()) === true) {
      get_controlledRadioGroups().x1(this.h3s_1.name);
    }
  };
  function DisposeRadioGroupEffect$lambda($this_DisposeRadioGroupEffect) {
    return function ($this$DisposableEffect) {
      var ref = $this_DisposeRadioGroupEffect.z3p($this$DisposableEffect);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new DisposeRadioGroupEffect$$inlined$cache$2$1(ref);
    };
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (!properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      // Inline function 'kotlin.js.unsafeCast' call
      controlledInputsValuesWeakMap = new WeakMap();
      // Inline function 'kotlin.collections.mutableMapOf' call
      controlledRadioGroups = LinkedHashMap_init_$Create$();
    }
  }
  var androidx_compose_web_attributes_SelectAttrsScope$stable;
  function SelectAttrsScope(attrsScope) {
    this.i3s_1 = attrsScope;
  }
  protoOf(SelectAttrsScope).j3s = function (listener) {
    this.l3q(new SelectChangeEventListener(listener));
  };
  protoOf(SelectAttrsScope).f3q = function (builder) {
    this.i3s_1.f3q(builder);
  };
  protoOf(SelectAttrsScope).g3q = function (classes) {
    this.i3s_1.g3q(classes);
  };
  protoOf(SelectAttrsScope).h3q = function (classes) {
    this.i3s_1.h3q(classes);
  };
  protoOf(SelectAttrsScope).i3q = function (value) {
    return this.i3s_1.i3q(value);
  };
  protoOf(SelectAttrsScope).k3s = function (effect) {
    this.i3s_1.j3q(effect);
  };
  protoOf(SelectAttrsScope).j3q = function (effect) {
    return this.k3s(effect);
  };
  protoOf(SelectAttrsScope).a3q = function (attr, value) {
    return this.i3s_1.a3q(attr, value);
  };
  protoOf(SelectAttrsScope).k3q = function (update, value) {
    this.i3s_1.k3q(update, value);
  };
  protoOf(SelectAttrsScope).l3q = function (listener) {
    this.i3s_1.l3q(listener);
  };
  protoOf(SelectAttrsScope).m3q = function (listener) {
    this.i3s_1.m3q(listener);
  };
  protoOf(SelectAttrsScope).n3q = function (listener) {
    this.i3s_1.n3q(listener);
  };
  protoOf(SelectAttrsScope).o3q = function (listener) {
    this.i3s_1.o3q(listener);
  };
  protoOf(SelectAttrsScope).p3q = function (listener) {
    this.i3s_1.p3q(listener);
  };
  protoOf(SelectAttrsScope).q3q = function (listener) {
    this.i3s_1.q3q(listener);
  };
  function SelectChangeEventListener(listener) {
    SyntheticEventListener.call(this, 'change', listener);
  }
  protoOf(SelectChangeEventListener).v3o = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp.value;
    var value = tmp1_safe_receiver == null ? null : toString(tmp1_safe_receiver);
    this.p3r_1(new SyntheticChangeEvent(value, event));
  };
  var org_jetbrains_compose_web_attributes_builders_TextAreaAttrsScope$stable;
  var org_jetbrains_compose_web_css_CSSKeyframesRule$stable;
  var org_jetbrains_compose_web_css_CSSBuilderImpl$stable;
  var org_jetbrains_compose_web_css_GridAutoFlow$stable;
  var org_jetbrains_compose_web_css_CSSKeyframesRuleDeclaration$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_From$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_To$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_Percentage$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_Combine$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe$stable;
  var org_jetbrains_compose_web_css_CSSKeyframeRuleDeclaration$stable;
  var org_jetbrains_compose_web_css_CSSKeyframesBuilder$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Raw$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_MediaType$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_MediaFeature$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_NotFeature$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_And$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Not$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Combine$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Only$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Or$stable;
  var org_jetbrains_compose_web_css_CSSMediaRuleDeclaration$stable;
  var org_jetbrains_compose_web_css_CSSCalcValue$stable;
  var org_jetbrains_compose_web_css_CSSRuleBuilderImpl$stable;
  var org_jetbrains_compose_web_css_CSSStyleRuleDeclaration$stable;
  var org_jetbrains_compose_web_css_CSSUnitValueTyped$stable;
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function get_deg(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.deg' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'deg');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function CSSUnitValueTyped(value, unit) {
    this.p3s_1 = value;
    this.q3s_1 = unit;
    delete this.value;
    delete this.unit;
  }
  protoOf(CSSUnitValueTyped).v1 = function () {
    return this.p3s_1;
  };
  protoOf(CSSUnitValueTyped).r3s = function () {
    return this.q3s_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.p3s_1 + toString(this.q3s_1);
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.p3s_1);
    result = imul(result, 31) + hashCode(this.q3s_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    if (!equals(this.p3s_1, other.p3s_1))
      return false;
    if (!equals(this.q3s_1, other.q3s_1))
      return false;
    return true;
  };
  var org_jetbrains_compose_web_css_Color_RGB$stable;
  var org_jetbrains_compose_web_css_Color_RGBA$stable;
  var org_jetbrains_compose_web_css_Color_HSL$stable;
  var org_jetbrains_compose_web_css_Color_HSLA$stable;
  var org_jetbrains_compose_web_css_Color$stable;
  function rgb(r, g, b) {
    return new RGB(r, g, b);
  }
  function hsl(h, s, l) {
    return new HSL(h, s, l);
  }
  function RGB(r, g, b) {
    this.s3s_1 = r;
    this.t3s_1 = g;
    this.u3s_1 = b;
  }
  protoOf(RGB).toString = function () {
    return 'rgb(' + toString(this.s3s_1) + ', ' + toString(this.t3s_1) + ', ' + toString(this.u3s_1) + ')';
  };
  function HSL(h, s, l) {
    this.v3s_1 = h;
    this.w3s_1 = s;
    this.x3s_1 = l;
  }
  protoOf(HSL).toString = function () {
    return 'hsl(' + toString(this.v3s_1) + ', ' + toString(this.w3s_1) + '%, ' + toString(this.x3s_1) + '%)';
  };
  var org_jetbrains_compose_web_css_CSSStyleVariable$stable;
  var org_jetbrains_compose_web_css_StyleScopeBuilder$stable;
  var org_jetbrains_compose_web_css_StylePropertyDeclaration$stable;
  function StyleScope() {
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a3t_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.b3t_1 = ArrayList_init_$Create$();
  }
  protoOf(StyleScopeBuilder).c3t = function () {
    return this.a3t_1;
  };
  protoOf(StyleScopeBuilder).d3t = function () {
    return this.b3t_1;
  };
  protoOf(StyleScopeBuilder).y3s = function (propertyName, value) {
    this.c3t().g(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = (nativeEquals(this.c3t(), other.c3t()) && nativeEquals(this.d3t(), other.d3t()));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration(name, value) {
    this.e3t_1 = name;
    this.f3t_1 = value;
  }
  protoOf(StylePropertyDeclaration).gd = function () {
    return this.e3t_1;
  };
  protoOf(StylePropertyDeclaration).hd = function () {
    return this.f3t_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.e3t_1 + ', value=' + toString(this.f3t_1) + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.e3t_1);
    result = imul(result, 31) + hashCode(this.f3t_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    if (!(this.e3t_1 === other.e3t_1))
      return false;
    if (!equals(this.f3t_1, other.f3t_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.o() === properties.o()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.t();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = _this__u8e3s4.l();
      while (_iterator__ex2g4s.m()) {
        var element = _iterator__ex2g4s.n();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var otherProp = properties.r(_unary__edvuaz);
        if (!(element.e3t_1 === otherProp.e3t_1 && toString(element.f3t_1) === toString(otherProp.f3t_1))) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  var org_jetbrains_compose_web_css_CSSRulesHolderState$stable;
  var org_jetbrains_compose_web_css_StyleSheet_CSSSelfSelector$stable;
  var org_jetbrains_compose_web_css_StyleSheet$stable;
  var org_jetbrains_compose_web_css_CSSAnimation$stable;
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.y3s('background-color', value);
  }
  var org_jetbrains_compose_web_css_CSSBorder$stable;
  function color(_this__u8e3s4, value) {
    _this__u8e3s4.y3s('color', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.y3s('bottom', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.y3s('left', value);
  }
  var org_jetbrains_compose_web_css_Transition$stable;
  var org_jetbrains_compose_web_css_Transitions$stable;
  function TagElement(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(-410614847);
    sourceInformation($composer_0, 'C(TagElement)P(2)115@3643L42,118@3779L1030:Base.kt#97hrze');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.u25(elementBuilder) : $composer_0.y25(elementBuilder)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(applyAttrs) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.y25(content) ? 256 : 128);
    if ($composer_0.a26(!(($dirty & 147) === 146), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-410614847, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement (Base.kt:114)');
      }
      sourceInformationMarkerStart($composer_0, 536130251, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.s25();
      var tmp;
      if (false || it === Companion_getInstance().x24_1) {
        var value = new ElementScopeImpl();
        this_0.t25(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var scope = tmp0_group;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1356037561, 'CC(ComposeDomNode)P(3,2)36@1247L41,39@1356L20:Base.kt#97hrze');
      $composer_1.n25();
      if ($composer_1.z24()) {
        var tmp_1 = $composer_1;
        tmp_1.o25(TagElement$lambda(elementBuilder, scope));
      } else {
        $composer_1.p25();
      }
      var tmp0 = _SkippableUpdater___init__impl__4ft0t9($composer_1);
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -123012359, 'C:Base.kt#97hrze');
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.v3q_1;
      $composer_2.d25(-1389436843);
      sourceInformation($composer_2, '*131@4228L32,132@4305L42,133@4391L30,136@4542L39,138@4648L35');
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne(tmp0).b25(509942095);
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne(tmp0));
      sourceInformationMarkerStart($composer_2, 1723456829, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.s25();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().x24_1) {
        var value_0 = DomElementWrapper$updateClasses$ref();
        $composer_2.t25(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, attrsScope.w3q_1, tmp0_group_0);
      sourceInformationMarkerStart($composer_2, 1723459303, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_2.s25();
      var tmp_4;
      if (false || it_1 === Companion_getInstance().x24_1) {
        var value_1 = DomElementWrapper$updateStyleDeclarations$ref();
        $composer_2.t25(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, attrsScope.t3q_1, tmp1_group);
      var tmp_6 = attrsScope.x3q();
      sourceInformationMarkerStart($composer_2, 1723462043, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_2 = $composer_2.s25();
      var tmp_7;
      if (false || it_2 === Companion_getInstance().x24_1) {
        var value_2 = DomElementWrapper$updateAttrs$ref();
        $composer_2.t25(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, tmp_6, tmp2_group);
      var tmp_9 = attrsScope.r3q_1.z3q();
      sourceInformationMarkerStart($composer_2, 1723466884, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_3 = $composer_2.s25();
      var tmp_10;
      if (false || it_3 === Companion_getInstance().x24_1) {
        var value_3 = DomElementWrapper$updateEventListeners$ref();
        $composer_2.t25(value_3);
        tmp_10 = value_3;
      } else {
        tmp_10 = it_3;
      }
      var tmp_11 = tmp_10;
      var tmp3_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, tmp_9, tmp3_group);
      sourceInformationMarkerStart($composer_2, 1723470272, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_4 = $composer_2.s25();
      var tmp_12;
      if (false || it_4 === Companion_getInstance().x24_1) {
        var value_4 = DomElementWrapper$updateProperties$ref();
        $composer_2.t25(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp4_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, attrsScope.u3q_1, tmp4_group);
      _SkippableUpdater___get_composer__impl__6t7yne(tmp0).c25();
      $composer_2.e25();
      sourceInformationMarkerEnd($composer_2);
      $composer_1.b25(2058660585);
      var $changed_0 = 8 & 0 >> 3 | 14 & 0 >> 3 | 112 & 0 >> 6;
      var $composer_3 = $composer_1;
      sourceInformationMarkerStart($composer_3, -247057115, 'C:Base.kt#97hrze');
      if (content == null) {
        $composer_3.d25(-247048468);
        $composer_3.e25();
      } else {
        $composer_3.d25(-1670537291);
        sourceInformation($composer_3, '143@4781L12');
        content(scope, $composer_3, 14 & $changed_0 | 112 & $dirty >> 3);
        $composer_3.e25();
      }
      sourceInformationMarkerEnd($composer_3);
      $composer_1.c25();
      $composer_1.q25();
      sourceInformationMarkerEnd($composer_1);
      var tmp0_safe_receiver = refEffect;
      if (tmp0_safe_receiver == null) {
        $composer_0.d25(-558655727);
        $composer_0.e25();
      } else {
        $composer_0.d25(-558655726);
        sourceInformation($composer_0, '*148@4873L58,148@4850L81');
        // Inline function 'kotlin.let' call
        sourceInformationMarkerStart($composer_0, 263239824, 'CC(remember):Base.kt#9igjgp');
        var tmp0_0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.u25(tmp0_safe_receiver) | $composer_0.y25(scope));
        // Inline function 'kotlin.let' call
        var it_5 = tmp0_0.s25();
        var tmp_14;
        if (invalid || it_5 === Companion_getInstance().x24_1) {
          var value_5 = TagElement$lambda_0(tmp0_safe_receiver, scope);
          tmp0_0.t25(value_5);
          tmp_14 = value_5;
        } else {
          tmp_14 = it_5;
        }
        var tmp_15 = tmp_14;
        var tmp0_group_1 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DisposableEffect(null, tmp0_group_1, $composer_0, 6);
        $composer_0.e25();
      }
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
      tmp1_safe_receiver.a2r(TagElement$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.h3t_1 = node;
    this.i3t_1 = emptyList();
  }
  protoOf(DomElementWrapper).n3o = function () {
    return this.h3t_1;
  };
  protoOf(DomElementWrapper).j3t = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.i3t_1.l();
    while (_iterator__ex2g4s.m()) {
      var element = _iterator__ex2g4s.n();
      // Inline function 'web.events.EventType' call
      // Inline function 'js.reflect.unsafeCast' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = element.s31();
      removeEventListener(this.h3t_1, tmp$ret$3, element.u3o_1);
    }
    this.i3t_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.i3t_1.l();
    while (_iterator__ex2g4s_0.m()) {
      var element_0 = _iterator__ex2g4s_0.n();
      // Inline function 'web.events.EventType' call
      // Inline function 'js.reflect.unsafeCast' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$9 = element_0.s31();
      addEventListener(this.h3t_1, tmp$ret$9, element_0.u3o_1);
    }
  };
  protoOf(DomElementWrapper).k3t = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = applicators.l();
    while (_iterator__ex2g4s.m()) {
      var element = _iterator__ex2g4s.n();
      var applicator = element.gd();
      var item = element.hd();
      applicator(this.h3t_1, item);
    }
  };
  protoOf(DomElementWrapper).l3t = function (styleApplier) {
    var tmp0_subject = this.h3t_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.h3t_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.h3t_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = styleApplier.c3t().l();
      while (_iterator__ex2g4s.m()) {
        var element = _iterator__ex2g4s.n();
        var name = element.gd();
        var value = element.hd();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = styleApplier.d3t().l();
      while (_iterator__ex2g4s_0.m()) {
        var element_0 = _iterator__ex2g4s_0.n();
        var name_0 = element_0.gd();
        var value_0 = element_0.hd();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).m3t = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.h3t_1.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.h3t_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = attrs.a2().l();
    while (_iterator__ex2g4s.m()) {
      var element_0 = _iterator__ex2g4s.n();
      this.h3t_1.setAttribute(element_0.u1(), element_0.v1());
    }
  };
  protoOf(DomElementWrapper).n3t = function (classes) {
    this.h3t_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.t()) {
      var tmp = this.h3t_1.classList;
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(classes, 10));
      var _iterator__ex2g4s = classes.l();
      while (_iterator__ex2g4s.m()) {
        var item = _iterator__ex2g4s.n();
        // Inline function 'web.cssom.ClassName' call
        // Inline function 'js.reflect.unsafeCast' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        destination.g(item);
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$8 = copyToArray(destination);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$8.slice()));
      }.call(this));
    }
  };
  function TagElement$lambda($elementBuilder, $scope) {
    return function () {
      var node = $elementBuilder.z2y();
      $scope.q3t(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.n3t(p1);
      return Unit_instance;
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.l3t(p1);
      return Unit_instance;
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.m3t(p1);
      return Unit_instance;
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.j3t(p1);
      return Unit_instance;
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.k3t(p1);
      return Unit_instance;
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$lambda_0($effect, $scope) {
    return function ($this$DisposableEffect) {
      return $effect($this$DisposableEffect, $scope.r3t());
    };
  }
  function TagElement$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_jetbrains_compose_web_dom_ElementScopeBase$stable;
  var org_jetbrains_compose_web_dom_ElementScopeImpl$stable;
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
  }
  protoOf(ElementScopeImpl).q3t = function (_set____db54di) {
    this.p3t_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).r3t = function () {
    var tmp = this.p3t_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).z3p = function (_this__u8e3s4) {
    return this.r3t();
  };
  function ElementScopeBase() {
    this.s3t_1 = 0;
  }
  var Address;
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Picture;
  var Source;
  function get_Canvas() {
    _init_properties_Elements_kt__eyv5nt();
    return Canvas;
  }
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  function get_A() {
    _init_properties_Elements_kt__eyv5nt();
    return A;
  }
  var A;
  function get_Input() {
    _init_properties_Elements_kt__eyv5nt();
    return Input;
  }
  var Input;
  function get_Button() {
    _init_properties_Elements_kt__eyv5nt();
    return Button_0;
  }
  var Button_0;
  var H1;
  function get_H2() {
    _init_properties_Elements_kt__eyv5nt();
    return H2;
  }
  var H2;
  var H3;
  var H4;
  var H5;
  var H6;
  function get_P() {
    _init_properties_Elements_kt__eyv5nt();
    return P;
  }
  var P;
  var Em;
  var I;
  var B;
  var Small;
  var Sup;
  var Sub;
  var Blockquote;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  var Br;
  var Ul;
  var Ol;
  var Li;
  var Img;
  var Form;
  function get_Select() {
    _init_properties_Elements_kt__eyv5nt();
    return Select;
  }
  var Select;
  function get_Option() {
    _init_properties_Elements_kt__eyv5nt();
    return Option;
  }
  var Option;
  var OptGroup;
  var Section;
  var TextArea;
  var Nav;
  var Pre;
  var Code;
  var Main;
  var Footer;
  var Hr;
  function get_Label() {
    _init_properties_Elements_kt__eyv5nt();
    return Label;
  }
  var Label;
  function get_Table() {
    _init_properties_Elements_kt__eyv5nt();
    return Table;
  }
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  function get_Tr() {
    _init_properties_Elements_kt__eyv5nt();
    return Tr;
  }
  var Tr;
  function get_Thead() {
    _init_properties_Elements_kt__eyv5nt();
    return Thead;
  }
  var Thead;
  function get_Th() {
    _init_properties_Elements_kt__eyv5nt();
    return Th;
  }
  var Th;
  function get_Td() {
    _init_properties_Elements_kt__eyv5nt();
    return Td;
  }
  var Td;
  function get_Tbody() {
    _init_properties_Elements_kt__eyv5nt();
    return Tbody;
  }
  var Tbody;
  var Tfoot;
  var Style;
  function _get_el__ndc0ck($this) {
    var tmp0 = $this.u3t_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('el', 1, tmp, ElementBuilderImplementation$_get_el_$ref_ff87uu(), null);
    return tmp0.v1();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.t3t_1);
    };
  }
  function ElementBuilderImplementation$_get_el_$ref_ff87uu() {
    return function (p0) {
      return _get_el__ndc0ck(p0);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.t3t_1 = tagName;
    var tmp = this;
    tmp.u3t_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).z2y = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function H2_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(-1233735936);
    sourceInformation($composer_0, 'C(H2)526@17393L70:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 32 : 16);
    if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1233735936, $dirty, -1, 'org.jetbrains.compose.web.dom.H2 (Elements.kt:526)');
      }
      TagElement(get_H2(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp0_safe_receiver = $composer_0.i25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2r(H2$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Input_0(type, attrs, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(330436284);
    sourceInformation($composer_0, 'C(Input)P(1)1067@31642L30,1071@31743L380,1081@32143L296,1069@31678L767:Elements.kt#97hrze');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u25(type) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs) ? 32 : 16);
    if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(330436284, $dirty, -1, 'org.jetbrains.compose.web.dom.Input (Elements.kt:1065)');
      }
      sourceInformationMarkerStart($composer_0, -278304070, 'CC(remember):Elements.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.s25();
      var tmp;
      if (false || it === Companion_getInstance().x24_1) {
        var value = mutableStateOf(0);
        this_0.t25(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var keyForRestoringControlledState = tmp0_group;
      var tmp_1 = get_Input();
      sourceInformationMarkerStart($composer_0, -278300488, 'CC(remember):Elements.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 14) === 4 | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.s25();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().x24_1) {
        var value_0 = Input$lambda(type, attrs, keyForRestoringControlledState);
        tmp0.t25(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(558133459, true, Input$lambda_0(type, keyForRestoringControlledState), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.u25(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.s25();
      var tmp_4;
      if (invalid_0 || it_1 === Companion_getInstance().x24_1) {
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.t25(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      TagElement(tmp_1, tmp1_group, tmp0_0, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp2_safe_receiver = $composer_0.i25();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.a2r(Input$lambda_1(type, attrs, $changed));
    }
  }
  function P_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(-1218237686);
    sourceInformation($composer_0, 'C(P)556@18451L69:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 32 : 16);
    if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1218237686, $dirty, -1, 'org.jetbrains.compose.web.dom.P (Elements.kt:556)');
      }
      TagElement(get_P(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp0_safe_receiver = $composer_0.i25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2r(P$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text_1(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(-1813500779);
    sourceInformation($composer_0, 'C(Text)471@16009L47,470@15950L207:Elements.kt#97hrze');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u25(value) ? 4 : 2);
    if ($composer_0.a26(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1813500779, $dirty, -1, 'org.jetbrains.compose.web.dom.Text (Elements.kt:469)');
      }
      sourceInformationMarkerStart($composer_0, 982476452, 'CC(remember):Elements.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.s25();
      var tmp;
      if (false || it === Companion_getInstance().x24_1) {
        var value_0 = Text$lambda;
        this_0.t25(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'androidx.compose.runtime.ComposeNode' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1886828752, 'CC(ComposeNode):Composables.kt#9igjgp');
      var tmp_1 = $composer_1.y24();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_1.n25();
      if ($composer_1.z24()) {
        $composer_1.o25(tmp0_group);
      } else {
        $composer_1.p25();
      }
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_1);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$lambda_0);
      $composer_1.q25();
      sourceInformationMarkerEnd($composer_1);
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
      tmp1_safe_receiver.a2r(Text$lambda_1(value, $changed));
    }
  }
  function Div_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(-2046833685);
    sourceInformation($composer_0, 'C(Div)483@16297L101:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 32 : 16);
    if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2046833685, $dirty, -1, 'org.jetbrains.compose.web.dom.Div (Elements.kt:482)');
      }
      TagElement(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp0_safe_receiver = $composer_0.i25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2r(Div$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Table_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(1257530088);
    sourceInformation($composer_0, 'C(Table)865@26568L103:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 32 : 16);
    if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1257530088, $dirty, -1, 'org.jetbrains.compose.web.dom.Table (Elements.kt:864)');
      }
      TagElement(get_Table(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp0_safe_receiver = $composer_0.i25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2r(Table$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Thead_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(-449797394);
    sourceInformation($composer_0, 'C(Thead)924@27798L103:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 32 : 16);
    if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-449797394, $dirty, -1, 'org.jetbrains.compose.web.dom.Thead (Elements.kt:923)');
      }
      TagElement(get_Thead(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp0_safe_receiver = $composer_0.i25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2r(Thead$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Tbody_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(-402726608);
    sourceInformation($composer_0, 'C(Tbody)960@28563L103:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 32 : 16);
    if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-402726608, $dirty, -1, 'org.jetbrains.compose.web.dom.Tbody (Elements.kt:959)');
      }
      TagElement(get_Tbody(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp0_safe_receiver = $composer_0.i25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2r(Tbody$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Tr_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(-192933452);
    sourceInformation($composer_0, 'C(Tr)912@27538L100:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 32 : 16);
    if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-192933452, $dirty, -1, 'org.jetbrains.compose.web.dom.Tr (Elements.kt:911)');
      }
      TagElement(get_Tr(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp0_safe_receiver = $composer_0.i25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2r(Tr$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Td_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(-383967194);
    sourceInformation($composer_0, 'C(Td)948@28303L100:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 32 : 16);
    if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-383967194, $dirty, -1, 'org.jetbrains.compose.web.dom.Td (Elements.kt:947)');
      }
      TagElement(get_Td(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp0_safe_receiver = $composer_0.i25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2r(Td$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Button_1(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(686179432);
    sourceInformation($composer_0, 'C(Button)514@16967L74:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 32 : 16);
    if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(686179432, $dirty, -1, 'org.jetbrains.compose.web.dom.Button (Elements.kt:514)');
      }
      TagElement(get_Button(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp0_safe_receiver = $composer_0.i25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2r(Button$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function A_0(href, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(1783231114);
    sourceInformation($composer_0, 'C(A)P(2)498@16629L160,496@16568L254:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u25(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 256 : 128);
    if ($composer_0.a26(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        href_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1783231114, $dirty, -1, 'org.jetbrains.compose.web.dom.A (Elements.kt:495)');
      }
      var tmp = get_A();
      sourceInformationMarkerStart($composer_0, -6843510, 'CC(remember):Elements.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 14) === 4 | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      var it = tmp0.s25();
      var tmp_0;
      if (invalid || it === Companion_getInstance().x24_1) {
        var value = A$lambda(href_0, attrs_0);
        tmp0.t25(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TagElement(tmp, tmp0_group, content_0._v, $composer_0, 896 & $dirty);
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
      tmp1_safe_receiver.a2r(A$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Th_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(-1556519638);
    sourceInformation($composer_0, 'C(Th)936@28052L100:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 32 : 16);
    if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1556519638, $dirty, -1, 'org.jetbrains.compose.web.dom.Th (Elements.kt:935)');
      }
      TagElement(get_Th(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp0_safe_receiver = $composer_0.i25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2r(Th$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Select_0(attrs, multiple, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var multiple_0 = {_v: multiple};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(1559426062);
    sourceInformation($composer_0, 'C(Select)P(!1,2)667@21768L122,665@21710L205:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.v25(multiple_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 256 : 128);
    if ($composer_0.a26(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        multiple_0._v = false;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1559426062, $dirty, -1, 'org.jetbrains.compose.web.dom.Select (Elements.kt:665)');
      }
      var tmp = get_Select();
      sourceInformationMarkerStart($composer_0, -335133880, 'CC(remember):Elements.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 112) === 32 | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      var it = tmp0.s25();
      var tmp_0;
      if (invalid || it === Companion_getInstance().x24_1) {
        var value = Select$lambda(multiple_0, attrs_0);
        tmp0.t25(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TagElement(tmp, tmp0_group, content_0._v, $composer_0, 896 & $dirty);
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
      tmp1_safe_receiver.a2r(Select$lambda_0(attrs_0, multiple_0, content_0, $changed, $default));
    }
  }
  function Option_0(value, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(598670170);
    sourceInformation($composer_0, 'C(Option)P(2)683@22135L87,681@22077L170:Elements.kt#97hrze');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u25(value) ? 4 : 2);
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
        traceEventStart(598670170, $dirty, -1, 'org.jetbrains.compose.web.dom.Option (Elements.kt:681)');
      }
      var tmp = get_Option();
      sourceInformationMarkerStart($composer_0, -203577615, 'CC(remember):Elements.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 14) === 4 | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      var it = tmp0.s25();
      var tmp_0;
      if (invalid || it === Companion_getInstance().x24_1) {
        var value_0 = Option$lambda(value, attrs_0);
        tmp0.t25(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TagElement(tmp, tmp0_group, content_0._v, $composer_0, 896 & $dirty);
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
      tmp1_safe_receiver.a2r(Option$lambda_0(value, attrs_0, content_0, $changed, $default));
    }
  }
  function Label_0(forId, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var forId_0 = {_v: forId};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(-559935017);
    sourceInformation($composer_0, 'C(Label)P(2)848@26231L158,846@26166L256:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u25(forId_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 256 : 128);
    if ($composer_0.a26(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        forId_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-559935017, $dirty, -1, 'org.jetbrains.compose.web.dom.Label (Elements.kt:845)');
      }
      var tmp = get_Label();
      sourceInformationMarkerStart($composer_0, -1226632075, 'CC(remember):Elements.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 14) === 4 | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      var it = tmp0.s25();
      var tmp_0;
      if (invalid || it === Companion_getInstance().x24_1) {
        var value = Label$lambda(forId_0, attrs_0);
        tmp0.t25(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TagElement(tmp, tmp0_group, content_0._v, $composer_0, 896 & $dirty);
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
      tmp1_safe_receiver.a2r(Label$lambda_0(forId_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Span_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(1254704640);
    sourceInformation($composer_0, 'C(Span)604@20058L72:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 32 : 16);
    if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1254704640, $dirty, -1, 'org.jetbrains.compose.web.dom.Span (Elements.kt:604)');
      }
      TagElement(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp0_safe_receiver = $composer_0.i25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2r(Span$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Canvas_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h25(-154361330);
    sourceInformation($composer_0, 'C(Canvas)424@15022L104:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.y25(content_0._v) ? 32 : 16);
    if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-154361330, $dirty, -1, 'org.jetbrains.compose.web.dom.Canvas (Elements.kt:423)');
      }
      TagElement(get_Canvas(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m25();
    }
    var tmp0_safe_receiver = $composer_0.i25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2r(Canvas$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H2$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H2_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Input$lambda$lambda($keyForRestoringControlledState) {
    return function (it) {
      $keyForRestoringControlledState.au($keyForRestoringControlledState.v1() + 1 | 0);
      return Unit_instance;
    };
  }
  function Input$lambda($type, $attrs, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var inputAttrsBuilder = new InputAttrsScope($type, $this$TagElement);
      type_0(inputAttrsBuilder, $type);
      inputAttrsBuilder.e3s(Input$lambda$lambda($keyForRestoringControlledState));
      $attrs(inputAttrsBuilder);
      return Unit_instance;
    };
  }
  function Input$$inlined$run$2$2$1() {
  }
  protoOf(Input$$inlined$run$2$2$1).hk = function () {
  };
  function Input$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledInputState($this_TagElement.z3p($this$DisposableEffect));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Input$$inlined$run$2$2$1();
    };
  }
  function Input$lambda_0($type, $keyForRestoringControlledState) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1085@32311L118,1085@32256L173:Elements.kt#97hrze');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.u25($this$TagElement) : $composer_0.y25($this$TagElement)) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($composer_0.a26(!(($dirty & 19) === 18), $dirty & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(558133459, $dirty, -1, 'org.jetbrains.compose.web.dom.Input.<anonymous> (Elements.kt:1082)');
        }
        if (equals($type, Radio_getInstance())) {
          $composer_0.d25(1535518678);
          sourceInformation($composer_0, '1083@32204L25');
          DisposeRadioGroupEffect($this$TagElement, $composer_0, 14 & $dirty);
          $composer_0.e25();
        } else {
          $composer_0.d25(1503587407);
          $composer_0.e25();
        }
        var tmp_1 = $keyForRestoringControlledState.v1();
        sourceInformationMarkerStart($composer_0, -504652407, 'CC(remember):Elements.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($dirty & 14) === 4 || (!(($dirty & 8) === 0) && $composer_0.y25($this$TagElement));
        // Inline function 'kotlin.let' call
        var it = $composer_0.s25();
        var tmp_2;
        if (invalid || it === Companion_getInstance().x24_1) {
          var value = Input$lambda$lambda_0($this$TagElement);
          $composer_0.t25(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DisposableEffect(tmp_1, tmp0_group, $composer_0, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.m25();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.g3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Input$lambda_1($type, $attrs, $$changed) {
    return function ($composer, $force) {
      Input_0($type, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function P$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      P_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Text$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$lambda_0($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.n3o();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_instance;
  }
  function Text$lambda_1($value, $$changed) {
    return function ($composer, $force) {
      Text_1($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Div$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Table$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Table_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Thead$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Thead_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Tbody$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Tbody_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Tr$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Tr_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Td$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Td_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Button$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_1($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function A$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function A$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A_0($href._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Th$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Th_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Select$lambda($multiple, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if ($multiple._v) {
        multiple($this$TagElement);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v(new SelectAttrsScope($this$TagElement));
      }
      return Unit_instance;
    };
  }
  function Select$lambda_0($attrs, $multiple, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Select_0($attrs._v, $multiple._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Option$lambda($value, $attrs) {
    return function ($this$TagElement) {
      value($this$TagElement, $value);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Option$lambda_0($value, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Option_0($value, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Label$lambda($forId, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($forId._v == null)) {
        forId($this$TagElement, $forId._v);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Label$lambda_0($forId, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Label_0($forId._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Span$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Canvas$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Canvas_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button_0 = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Sup = new ElementBuilderImplementation('sup');
      Sub = new ElementBuilderImplementation('sub');
      Blockquote = new ElementBuilderImplementation('blockquote');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function TextInput(value, attrs, $composer, $changed, $default) {
    var value_0 = {_v: value};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 295620040, 'C(TextInput)P(1)243@7692L2,244@7739L43,244@7702L81:InputElements.kt#97hrze');
    if (!(($default & 1) === 0)) {
      value_0._v = '';
    }
    if (!(($default & 2) === 0)) {
      sourceInformationMarkerStart($composer_0, 623019402, 'CC(remember):InputElements.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.s25();
      var tmp;
      if (false || it === Companion_getInstance().x24_1) {
        var value_1 = TextInput$lambda;
        $composer_0.t25(value_1);
        tmp = value_1;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      attrs_0._v = tmp0_group;
    }
    if (isTraceInProgress()) {
      traceEventStart(295620040, $changed, -1, 'org.jetbrains.compose.web.dom.TextInput (InputElements.kt:243)');
    }
    var tmp_1 = Text_getInstance();
    sourceInformationMarkerStart($composer_0, 623020947, 'CC(remember):InputElements.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.u25(value_0._v) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.u25(attrs_0._v) || ($changed & 48) === 32));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.s25();
    var tmp_2;
    if (invalid || it_0 === Companion_getInstance().x24_1) {
      var value_2 = TextInput$lambda_0(value_0, attrs_0);
      $composer_0.t25(value_2);
      tmp_2 = value_2;
    } else {
      tmp_2 = it_0;
    }
    var tmp_3 = tmp_2;
    var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    Input_0(tmp_1, tmp1_group, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function NumberInput(value, min, max, attrs, $composer, $changed, $default) {
    var value_0 = {_v: value};
    var min_0 = {_v: min};
    var max_0 = {_v: max};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -531769964, 'C(NumberInput)P(3,2,1)125@4139L2,129@4206L184,127@4150L246:InputElements.kt#97hrze');
    if (!(($default & 1) === 0)) {
      value_0._v = null;
    }
    if (!(($default & 2) === 0)) {
      min_0._v = null;
    }
    if (!(($default & 4) === 0)) {
      max_0._v = null;
    }
    if (!(($default & 8) === 0)) {
      sourceInformationMarkerStart($composer_0, 70177398, 'CC(remember):InputElements.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.s25();
      var tmp;
      if (false || it === Companion_getInstance().x24_1) {
        var value_1 = NumberInput$lambda;
        $composer_0.t25(value_1);
        tmp = value_1;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      attrs_0._v = tmp0_group;
    }
    if (isTraceInProgress()) {
      traceEventStart(-531769964, $changed, -1, 'org.jetbrains.compose.web.dom.NumberInput (InputElements.kt:126)');
    }
    var tmp_1 = Number_getInstance();
    sourceInformationMarkerStart($composer_0, 70179724, 'CC(remember):InputElements.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!($composer_0.y25(value_0._v) | $composer_0.y25(min_0._v)) | $composer_0.y25(max_0._v)) | (($changed & 7168 ^ 3072) > 2048 && $composer_0.u25(attrs_0._v) || ($changed & 3072) === 2048));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.s25();
    var tmp_2;
    if (invalid || it_0 === Companion_getInstance().x24_1) {
      var value_2 = NumberInput$lambda_0(value_0, min_0, max_0, attrs_0);
      $composer_0.t25(value_2);
      tmp_2 = value_2;
    } else {
      tmp_2 = it_0;
    }
    var tmp_3 = tmp_2;
    var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    Input_0(tmp_1, tmp1_group, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function applyAttrsWithStringValue(_this__u8e3s4, value, attrs) {
    _this__u8e3s4.c3s(value);
    attrs(_this__u8e3s4);
  }
  function TextInput$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function TextInput$lambda_0($value, $attrs) {
    return function ($this$Input) {
      applyAttrsWithStringValue($this$Input, $value._v, $attrs._v);
      return Unit_instance;
    };
  }
  function NumberInput$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function NumberInput$lambda_0($value, $min, $max, $attrs) {
    return function ($this$Input) {
      var tmp;
      if (!($value._v == null)) {
        $this$Input.c3s(toString($value._v));
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($min._v == null)) {
        min($this$Input, toString($min._v));
        tmp_0 = Unit_instance;
      }
      var tmp_1;
      if (!($max._v == null)) {
        max($this$Input, toString($max._v));
        tmp_1 = Unit_instance;
      }
      $attrs._v($this$Input);
      return Unit_instance;
    };
  }
  var org_jetbrains_compose_web_events_SyntheticAnimationEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticChangeEvent$stable;
  function SyntheticChangeEvent(value, nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.g3u_1 = value;
  }
  var org_jetbrains_compose_web_events_SyntheticClipboardEvent$stable;
  var androidx_compose_web_events_SyntheticEvent$stable;
  function SyntheticEvent(nativeEvent) {
    this.h3u_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i3u_1 = this.h3u_1.target;
    this.j3u_1 = this.h3u_1.bubbles;
    this.k3u_1 = this.h3u_1.cancelable;
    this.l3u_1 = this.h3u_1.composed;
    this.m3u_1 = this.h3u_1.currentTarget;
    this.n3u_1 = this.h3u_1.eventPhase;
    this.o3u_1 = this.h3u_1.defaultPrevented;
    this.p3u_1 = this.h3u_1.timeStamp;
    this.q3u_1 = this.h3u_1.type;
    this.r3u_1 = this.h3u_1.isTrusted;
  }
  var org_jetbrains_compose_web_events_SyntheticFocusEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticInputEvent$stable;
  function SyntheticInputEvent(value, nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.d3v_1 = value;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = nativeEvent.data;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp0_safe_receiver;
    }
    tmp.e3v_1 = tmp_0;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_0 = nativeEvent.dataTransfer;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_2 = tmp0_safe_receiver_0;
    }
    tmp_1.f3v_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_1 = nativeEvent.inputType;
    var tmp_4;
    if (tmp0_safe_receiver_1 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_4 = tmp0_safe_receiver_1;
    }
    tmp_3.g3v_1 = tmp_4;
    var tmp_5 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_2 = nativeEvent.isComposing;
    var tmp_6;
    if (tmp0_safe_receiver_2 == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_6 = tmp0_safe_receiver_2;
    }
    var tmp1_elvis_lhs = tmp_6;
    tmp_5.h3v_1 = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  var androidx_compose_web_events_SyntheticMouseEvent$stable;
  var androidx_compose_web_events_SyntheticWheelEvent$stable;
  var androidx_compose_web_events_SyntheticDragEvent$stable;
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.t3v_1 = nativeEvent;
    this.u3v_1 = nativeEvent.altKey;
    this.v3v_1 = nativeEvent.button;
    this.w3v_1 = nativeEvent.buttons;
    this.x3v_1 = nativeEvent.clientX;
    this.y3v_1 = nativeEvent.clientY;
    this.z3v_1 = nativeEvent.ctrlKey;
    this.a3w_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.b3w_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.c3w_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.d3w_1 = nativeEvent.offsetX;
    this.e3w_1 = nativeEvent.offsetY;
    this.f3w_1 = nativeEvent.pageX;
    this.g3w_1 = nativeEvent.pageY;
    this.h3w_1 = nativeEvent.relatedTarget;
    this.i3w_1 = nativeEvent.screenX;
    this.j3w_1 = nativeEvent.screenY;
    this.k3w_1 = nativeEvent.shiftKey;
    this.l3w_1 = nativeEvent.x;
    this.m3w_1 = nativeEvent.y;
  }
  var org_jetbrains_compose_web_events_SyntheticSelectEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticSubmitEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticTouchEvent$stable;
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).i3q = id;
  protoOf(EventsListenerScopeBuilder).m3q = onClick;
  protoOf(EventsListenerScopeBuilder).n3q = onMouseDown;
  protoOf(EventsListenerScopeBuilder).o3q = onMouseUp;
  protoOf(EventsListenerScopeBuilder).p3q = onMouseLeave;
  protoOf(EventsListenerScopeBuilder).q3q = onMouseMove;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.v1();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.r3s();
  });
  protoOf(StyleScopeBuilder).z3s = property;
  //endregion
  //region block: init
  org_jetbrains_compose_web_attributes_EventsListenerScopeBuilder$stable = 8;
  org_jetbrains_compose_web_attributes_InputType_Button$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Checkbox$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Color$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Date$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_DateTimeLocal$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Email$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_File$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Hidden$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Month$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Number$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Password$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Radio$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Range$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Search$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Submit$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Tel$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Text$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Time$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Url$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Week$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeWithStringValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeWithUnitValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeCheckedValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeNumberValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType$stable = 0;
  org_jetbrains_compose_web_attributes_DirType_Ltr$stable = 0;
  org_jetbrains_compose_web_attributes_DirType_Rtl$stable = 0;
  org_jetbrains_compose_web_attributes_DirType_Auto$stable = 0;
  org_jetbrains_compose_web_attributes_DirType$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Alternate$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Author$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Bookmark$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_External$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Help$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_License$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Next$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_First$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Prev$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Last$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_NoFollow$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_NoOpener$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_NoReferrer$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Opener$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Search$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Tag$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_CustomARel$stable = 0;
  org_jetbrains_compose_web_attributes_ARel$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget$stable = 0;
  Companion_instance = new Companion();
  org_jetbrains_compose_web_attributes_builders_InputAttrsScope$stable = 8;
  androidx_compose_web_attributes_SelectAttrsScope$stable = 8;
  org_jetbrains_compose_web_attributes_builders_TextAreaAttrsScope$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframesRule$stable = 8;
  org_jetbrains_compose_web_css_CSSBuilderImpl$stable = 8;
  org_jetbrains_compose_web_css_GridAutoFlow$stable = 0;
  org_jetbrains_compose_web_css_CSSKeyframesRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframe_From$stable = 0;
  org_jetbrains_compose_web_css_CSSKeyframe_To$stable = 0;
  org_jetbrains_compose_web_css_CSSKeyframe_Percentage$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframe_Combine$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframe$stable = 0;
  org_jetbrains_compose_web_css_CSSKeyframeRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframesBuilder$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Raw$stable = 0;
  org_jetbrains_compose_web_css_CSSMediaQuery_MediaType$stable = 0;
  org_jetbrains_compose_web_css_CSSMediaQuery_MediaFeature$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_NotFeature$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_And$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Not$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Combine$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Only$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Or$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSCalcValue$stable = 8;
  org_jetbrains_compose_web_css_CSSRuleBuilderImpl$stable = 8;
  org_jetbrains_compose_web_css_CSSStyleRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSUnitValueTyped$stable = 0;
  Companion_instance_0 = new Companion_0();
  org_jetbrains_compose_web_css_Color_RGB$stable = 8;
  org_jetbrains_compose_web_css_Color_RGBA$stable = 8;
  org_jetbrains_compose_web_css_Color_HSL$stable = 8;
  org_jetbrains_compose_web_css_Color_HSLA$stable = 8;
  org_jetbrains_compose_web_css_Color$stable = 0;
  org_jetbrains_compose_web_css_CSSStyleVariable$stable = 0;
  org_jetbrains_compose_web_css_StyleScopeBuilder$stable = 8;
  org_jetbrains_compose_web_css_StylePropertyDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSRulesHolderState$stable = 0;
  org_jetbrains_compose_web_css_StyleSheet_CSSSelfSelector$stable = 8;
  org_jetbrains_compose_web_css_StyleSheet$stable = 8;
  org_jetbrains_compose_web_css_CSSAnimation$stable = 8;
  org_jetbrains_compose_web_css_CSSBorder$stable = 8;
  org_jetbrains_compose_web_css_Transition$stable = 8;
  org_jetbrains_compose_web_css_Transitions$stable = 8;
  org_jetbrains_compose_web_dom_ElementScopeBase$stable = 8;
  org_jetbrains_compose_web_dom_ElementScopeImpl$stable = 8;
  org_jetbrains_compose_web_events_SyntheticAnimationEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticChangeEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticClipboardEvent$stable = 8;
  androidx_compose_web_events_SyntheticEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticFocusEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticInputEvent$stable = 8;
  androidx_compose_web_events_SyntheticMouseEvent$stable = 8;
  androidx_compose_web_events_SyntheticWheelEvent$stable = 8;
  androidx_compose_web_events_SyntheticDragEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticSelectEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticSubmitEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticTouchEvent$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ButtonType_Button_getInstance;
  _.$_$.b = Checkbox_getInstance;
  _.$_$.c = File_getInstance;
  _.$_$.d = Range_getInstance;
  _.$_$.e = org_jetbrains_compose_web_attributes_InputType_Checkbox$stableprop_getter;
  _.$_$.f = org_jetbrains_compose_web_attributes_InputType_File$stableprop_getter;
  _.$_$.g = org_jetbrains_compose_web_attributes_InputType_Range$stableprop_getter;
  _.$_$.h = placeholder;
  _.$_$.i = selected;
  _.$_$.j = type;
  _.$_$.k = backgroundColor;
  _.$_$.l = bottom;
  _.$_$.m = color;
  _.$_$.n = get_deg;
  _.$_$.o = hsl;
  _.$_$.p = left;
  _.$_$.q = get_percent;
  _.$_$.r = rgb;
  _.$_$.s = A_0;
  _.$_$.t = Button_1;
  _.$_$.u = Canvas_0;
  _.$_$.v = Div_0;
  _.$_$.w = H2_0;
  _.$_$.x = Input_0;
  _.$_$.y = Label_0;
  _.$_$.z = NumberInput;
  _.$_$.a1 = Option_0;
  _.$_$.b1 = P_0;
  _.$_$.c1 = Select_0;
  _.$_$.d1 = Span_0;
  _.$_$.e1 = Table_0;
  _.$_$.f1 = Tbody_0;
  _.$_$.g1 = Td_0;
  _.$_$.h1 = TextInput;
  _.$_$.i1 = Text_1;
  _.$_$.j1 = Thead_0;
  _.$_$.k1 = Th_0;
  _.$_$.l1 = Tr_0;
  //endregion
  return _;
}));

//# sourceMappingURL=ComposeHTMLDreams-html-core.js.map
