(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'luna-modal-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'luna-modal-common'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'luna-modal-common'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'luna-modal-common'.");
    }
    globalThis['luna-modal-common'] = factory(typeof globalThis['luna-modal-common'] === 'undefined' ? {} : globalThis['luna-modal-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_IAE = kotlin_kotlin.$_$.yh;
  var enumEntries = kotlin_kotlin.$_$.fb;
  var Unit_getInstance = kotlin_kotlin.$_$.z4;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var Enum = kotlin_kotlin.$_$.nh;
  var protoOf = kotlin_kotlin.$_$.de;
  var initMetadataForClass = kotlin_kotlin.$_$.cd;
  var VOID = kotlin_kotlin.$_$.e;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.ti;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dd;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var THROW_CCE = kotlin_kotlin.$_$.xh;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var initMetadataForObject = kotlin_kotlin.$_$.hd;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var objectCreate = kotlin_kotlin.$_$.ce;
  var toString = kotlin_kotlin.$_$.ge;
  var getStringHashCode = kotlin_kotlin.$_$.ad;
  var getBooleanHashCode = kotlin_kotlin.$_$.wc;
  var hashCode = kotlin_kotlin.$_$.bd;
  var equals = kotlin_kotlin.$_$.uc;
  var makeAssociatedObjectMapES5 = kotlin_kotlin.$_$.c;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Size, 'Size', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EmbeddedModal, 'EmbeddedModal', VOID, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance]));
  //endregion
  var Size_SMALL_instance;
  var Size_MEDIUM_instance;
  var Size_LARGE_instance;
  function values() {
    return [Size_SMALL_getInstance(), Size_MEDIUM_getInstance(), Size_LARGE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'SMALL':
        return Size_SMALL_getInstance();
      case 'MEDIUM':
        return Size_MEDIUM_getInstance();
      case 'LARGE':
        return Size_LARGE_getInstance();
      default:
        Size_initEntries();
        THROW_IAE('No enum constant net.perfectdreams.luna.modals.EmbeddedModal.Size.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
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
  var $ENTRIES;
  function _get_$childSerializers__r2zwns($this) {
    return $this.$childSerializers_1;
  }
  function EmbeddedModal$Companion$$childSerializers$_anonymous__ohjkk9() {
    return createSimpleEnumSerializer('net.perfectdreams.luna.modals.EmbeddedModal.Size', values());
  }
  function EmbeddedModal$Companion$$childSerializers$_anonymous__ohjkk9_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Size(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, EmbeddedModal$Companion$$childSerializers$_anonymous__ohjkk9);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, tmp_1, null, null, lazy(tmp_2, EmbeddedModal$Companion$$childSerializers$_anonymous__ohjkk9_0)];
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.perfectdreams.luna.modals.EmbeddedModal', this, 5);
    tmp0_serialDesc.addElement_5pzumi_k$('title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('size', false);
    tmp0_serialDesc.addElement_5pzumi_k$('canBeClosedByClickingOutsideTheWindow', false);
    tmp0_serialDesc.addElement_5pzumi_k$('bodyHtml', false);
    tmp0_serialDesc.addElement_5pzumi_k$('buttonsHtml', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).serialize_kzcxh8_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance().$childSerializers_1;
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.title_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 1, tmp2_cached[1].get_value_j01efc_k$(), value.size_1);
    tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 2, value.canBeClosedByClickingOutsideTheWindow_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 3, value.bodyHtml_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 4, tmp2_cached[4].get_value_j01efc_k$(), value.buttonsHtml_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_kzcxh8_k$(encoder, value instanceof EmbeddedModal ? value : THROW_CCE());
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp10_cached = Companion_getInstance().$childSerializers_1;
    if (tmp9_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp9_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, tmp10_cached[1].get_value_j01efc_k$(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, tmp10_cached[4].get_value_j01efc_k$(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, tmp10_cached[1].get_value_j01efc_k$(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, tmp10_cached[4].get_value_j01efc_k$(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.endStructure_1xqz0n_k$(tmp0_desc);
    return EmbeddedModal_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].get_value_j01efc_k$(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[4].get_value_j01efc_k$()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function EmbeddedModal_init_$Init$(seen0, title, size, canBeClosedByClickingOutsideTheWindow, bodyHtml, buttonsHtml, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance().descriptor_1);
    }
    $this.title_1 = title;
    $this.size_1 = size;
    $this.canBeClosedByClickingOutsideTheWindow_1 = canBeClosedByClickingOutsideTheWindow;
    $this.bodyHtml_1 = bodyHtml;
    $this.buttonsHtml_1 = buttonsHtml;
    return $this;
  }
  function EmbeddedModal_init_$Create$(seen0, title, size, canBeClosedByClickingOutsideTheWindow, bodyHtml, buttonsHtml, serializationConstructorMarker) {
    return EmbeddedModal_init_$Init$(seen0, title, size, canBeClosedByClickingOutsideTheWindow, bodyHtml, buttonsHtml, serializationConstructorMarker, objectCreate(protoOf(EmbeddedModal)));
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
  function EmbeddedModal(title, size, canBeClosedByClickingOutsideTheWindow, bodyHtml, buttonsHtml) {
    Companion_getInstance();
    this.title_1 = title;
    this.size_1 = size;
    this.canBeClosedByClickingOutsideTheWindow_1 = canBeClosedByClickingOutsideTheWindow;
    this.bodyHtml_1 = bodyHtml;
    this.buttonsHtml_1 = buttonsHtml;
  }
  protoOf(EmbeddedModal).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(EmbeddedModal).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(EmbeddedModal).get_canBeClosedByClickingOutsideTheWindow_phi2m5_k$ = function () {
    return this.canBeClosedByClickingOutsideTheWindow_1;
  };
  protoOf(EmbeddedModal).get_bodyHtml_3nfhe2_k$ = function () {
    return this.bodyHtml_1;
  };
  protoOf(EmbeddedModal).get_buttonsHtml_ex2xst_k$ = function () {
    return this.buttonsHtml_1;
  };
  protoOf(EmbeddedModal).component1_7eebsc_k$ = function () {
    return this.title_1;
  };
  protoOf(EmbeddedModal).component2_7eebsb_k$ = function () {
    return this.size_1;
  };
  protoOf(EmbeddedModal).component3_7eebsa_k$ = function () {
    return this.canBeClosedByClickingOutsideTheWindow_1;
  };
  protoOf(EmbeddedModal).component4_7eebs9_k$ = function () {
    return this.bodyHtml_1;
  };
  protoOf(EmbeddedModal).component5_7eebs8_k$ = function () {
    return this.buttonsHtml_1;
  };
  protoOf(EmbeddedModal).copy_qixg2i_k$ = function (title, size, canBeClosedByClickingOutsideTheWindow, bodyHtml, buttonsHtml) {
    return new EmbeddedModal(title, size, canBeClosedByClickingOutsideTheWindow, bodyHtml, buttonsHtml);
  };
  protoOf(EmbeddedModal).copy$default_vax716_k$ = function (title, size, canBeClosedByClickingOutsideTheWindow, bodyHtml, buttonsHtml, $super) {
    title = title === VOID ? this.title_1 : title;
    size = size === VOID ? this.size_1 : size;
    canBeClosedByClickingOutsideTheWindow = canBeClosedByClickingOutsideTheWindow === VOID ? this.canBeClosedByClickingOutsideTheWindow_1 : canBeClosedByClickingOutsideTheWindow;
    bodyHtml = bodyHtml === VOID ? this.bodyHtml_1 : bodyHtml;
    buttonsHtml = buttonsHtml === VOID ? this.buttonsHtml_1 : buttonsHtml;
    return $super === VOID ? this.copy_qixg2i_k$(title, size, canBeClosedByClickingOutsideTheWindow, bodyHtml, buttonsHtml) : $super.copy_qixg2i_k$.call(this, title, size, canBeClosedByClickingOutsideTheWindow, bodyHtml, buttonsHtml);
  };
  protoOf(EmbeddedModal).toString = function () {
    return 'EmbeddedModal(title=' + this.title_1 + ', size=' + this.size_1.toString() + ', canBeClosedByClickingOutsideTheWindow=' + this.canBeClosedByClickingOutsideTheWindow_1 + ', bodyHtml=' + this.bodyHtml_1 + ', buttonsHtml=' + toString(this.buttonsHtml_1) + ')';
  };
  protoOf(EmbeddedModal).hashCode = function () {
    var result = getStringHashCode(this.title_1);
    result = imul(result, 31) + this.size_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.canBeClosedByClickingOutsideTheWindow_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.bodyHtml_1) | 0;
    result = imul(result, 31) + hashCode(this.buttonsHtml_1) | 0;
    return result;
  };
  protoOf(EmbeddedModal).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EmbeddedModal))
      return false;
    if (!(this.title_1 === other.title_1))
      return false;
    if (!this.size_1.equals(other.size_1))
      return false;
    if (!(this.canBeClosedByClickingOutsideTheWindow_1 === other.canBeClosedByClickingOutsideTheWindow_1))
      return false;
    if (!(this.bodyHtml_1 === other.bodyHtml_1))
      return false;
    if (!equals(this.buttonsHtml_1, other.buttonsHtml_1))
      return false;
    return true;
  };
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  return _;
}));
