(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.s8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.b8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v1;
  var Unit_instance = kotlin_kotlin.$_$.l2;
  var equals = kotlin_kotlin.$_$.s7;
  var hashCode = kotlin_kotlin.$_$.z7;
  var VOID = kotlin_kotlin.$_$.c;
  var joinToString = kotlin_kotlin.$_$.i4;
  var THROW_CCE = kotlin_kotlin.$_$.ab;
  var KtMap = kotlin_kotlin.$_$.w2;
  var initMetadataForClass = kotlin_kotlin.$_$.a8;
  var KtList = kotlin_kotlin.$_$.u2;
  var initMetadataForObject = kotlin_kotlin.$_$.f8;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var getKClassFromExpression = kotlin_kotlin.$_$.g9;
  var getBooleanHashCode = kotlin_kotlin.$_$.u7;
  var getStringHashCode = kotlin_kotlin.$_$.y7;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.i2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.w1;
  var numberToChar = kotlin_kotlin.$_$.o8;
  var charSequenceLength = kotlin_kotlin.$_$.o7;
  var charCodeAt = kotlin_kotlin.$_$.m7;
  var toString_0 = kotlin_kotlin.$_$.x1;
  var toByte = kotlin_kotlin.$_$.t8;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement');
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap]);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList]);
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive);
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForClass(JsonObjectBuilder, 'JsonObjectBuilder');
  initMetadataForClass(JsonArrayBuilder, 'JsonArrayBuilder');
  //endregion
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.u1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.v1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.f7(_Char___init__impl__6a9atx(58));
    this_0.d7(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.t3x_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.t3x_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.t3x_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.t3x_1.a2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).t = function () {
    return this.t3x_1.t();
  };
  protoOf(JsonObject).u3x = function (key) {
    return this.t3x_1.b2(key);
  };
  protoOf(JsonObject).b2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.u3x((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).v3x = function (value) {
    return this.t3x_1.c2(value);
  };
  protoOf(JsonObject).c2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.v3x(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).w3x = function (key) {
    return this.t3x_1.d2(key);
  };
  protoOf(JsonObject).d2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.w3x((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).o = function () {
    return this.t3x_1.o();
  };
  protoOf(JsonObject).z1 = function () {
    return this.t3x_1.z1();
  };
  protoOf(JsonObject).a2 = function () {
    return this.t3x_1.a2();
  };
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function JsonElement() {
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.x3x();
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.y3x_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.y3x_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.y3x_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.y3x_1, ',', '[', ']');
  };
  protoOf(JsonArray).t = function () {
    return this.y3x_1.t();
  };
  protoOf(JsonArray).z3x = function (element) {
    return this.y3x_1.s(element);
  };
  protoOf(JsonArray).s = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.z3x(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).l = function () {
    return this.y3x_1.l();
  };
  protoOf(JsonArray).r = function (index) {
    return this.y3x_1.r(index);
  };
  protoOf(JsonArray).a3y = function (element) {
    return this.y3x_1.u(element);
  };
  protoOf(JsonArray).u = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.a3y(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).q = function (index) {
    return this.y3x_1.q(index);
  };
  protoOf(JsonArray).o = function () {
    return this.y3x_1.o();
  };
  function JsonPrimitive_1(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonPrimitive_2(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.b3y_1 = 'null';
  }
  protoOf(JsonNull).x3x = function () {
    return this.b3y_1;
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.c3y_1 = isString;
    this.d3y_1 = coerceToInlineType;
    this.e3y_1 = toString(body);
    if (!(this.d3y_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.d3y_1.y3m()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).x3x = function () {
    return this.e3y_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.c3y_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.e3y_1);
      tmp = this_0.toString();
    } else {
      tmp = this.e3y_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.c3y_1 === other.c3y_1))
      return false;
    if (!(this.e3y_1 === other.e3y_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.c3y_1);
    result = imul(31, result) + getStringHashCode(this.e3y_1) | 0;
    return result;
  };
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonObjectBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.f3y_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).g3y = function (key, element) {
    return this.f3y_1.w1(key, element);
  };
  protoOf(JsonObjectBuilder).h3y = function () {
    return new JsonObject(this.f3y_1);
  };
  function put(_this__u8e3s4, key, value) {
    return _this__u8e3s4.g3y(key, JsonPrimitive_0(value));
  }
  function putJsonObject(_this__u8e3s4, key, builderAction) {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    builderAction(builder);
    var tmp$ret$0 = builder.h3y();
    return _this__u8e3s4.g3y(key, tmp$ret$0);
  }
  function putJsonArray(_this__u8e3s4, key, builderAction) {
    // Inline function 'kotlinx.serialization.json.buildJsonArray' call
    var builder = new JsonArrayBuilder();
    builderAction(builder);
    var tmp$ret$0 = builder.h3y();
    return _this__u8e3s4.g3y(key, tmp$ret$0);
  }
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.i3y_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).j3y = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.i3y_1.g(element);
    return true;
  };
  protoOf(JsonArrayBuilder).h3y = function () {
    return new JsonArray(this.i3y_1);
  };
  function add(_this__u8e3s4, value) {
    return _this__u8e3s4.j3y(JsonPrimitive_1(value));
  }
  function put_0(_this__u8e3s4, key, value) {
    return _this__u8e3s4.g3y(key, JsonPrimitive_2(value));
  }
  function addJsonArray(_this__u8e3s4, builderAction) {
    // Inline function 'kotlinx.serialization.json.buildJsonArray' call
    var builder = new JsonArrayBuilder();
    builderAction(builder);
    var tmp$ret$0 = builder.h3y();
    return _this__u8e3s4.j3y(tmp$ret$0);
  }
  function add_0(_this__u8e3s4, value) {
    return _this__u8e3s4.j3y(JsonPrimitive_2(value));
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.f7(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charCodeAt(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.na(value, lastPos, i);
          _this__u8e3s4.e7(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.na(value, lastPos, value.length);
    else
      _this__u8e3s4.e7(value);
    _this__u8e3s4.f7(_Char___init__impl__6a9atx(34));
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_0(c1) + toString_0(c2) + toString_0(c3) + toString_0(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$1);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$12);
      ESCAPE_MARKERS = this_7;
    }
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JsonObjectBuilder;
  _.$_$.b = addJsonArray;
  _.$_$.c = add_0;
  _.$_$.d = add;
  _.$_$.e = putJsonArray;
  _.$_$.f = putJsonObject;
  _.$_$.g = put_0;
  _.$_$.h = put;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
