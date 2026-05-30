(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ButterscotchPreprocessor-processor-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ButterscotchPreprocessor-processor-common'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ButterscotchPreprocessor-processor-common'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ButterscotchPreprocessor-processor-common'.");
    }
    globalThis['ButterscotchPreprocessor-processor-common'] = factory(typeof globalThis['ButterscotchPreprocessor-processor-common'] === 'undefined' ? {} : globalThis['ButterscotchPreprocessor-processor-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.de;
  var toShort = kotlin_kotlin.$_$.fe;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.j4;
  var floatFromBits = kotlin_kotlin.$_$.vc;
  var fromInt = kotlin_kotlin.$_$.ub;
  var Long = kotlin_kotlin.$_$.sh;
  var bitwiseAnd = kotlin_kotlin.$_$.lb;
  var shiftLeft = kotlin_kotlin.$_$.cc;
  var bitwiseOr = kotlin_kotlin.$_$.mb;
  var copyOfRange = kotlin_kotlin.$_$.d7;
  var decodeToString = kotlin_kotlin.$_$.lf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var numberToChar = kotlin_kotlin.$_$.zd;
  var Char = kotlin_kotlin.$_$.jh;
  var toCharArray = kotlin_kotlin.$_$.u9;
  var concatToString = kotlin_kotlin.$_$.if;
  var initMetadataForClass = kotlin_kotlin.$_$.cd;
  var numberToInt = kotlin_kotlin.$_$.be;
  var coerceAtLeast = kotlin_kotlin.$_$.je;
  var copyOf = kotlin_kotlin.$_$.i7;
  var VOID = kotlin_kotlin.$_$.e;
  var toString = kotlin_kotlin.$_$.ge;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var Unit_getInstance = kotlin_kotlin.$_$.z4;
  var toByte = kotlin_kotlin.$_$.ee;
  var arrayCopy = kotlin_kotlin.$_$.l6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.o2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var equalsLong = kotlin_kotlin.$_$.tb;
  var toString_0 = kotlin_kotlin.$_$.vg;
  var sortedWith = kotlin_kotlin.$_$.k9;
  var toIntArray = kotlin_kotlin.$_$.w9;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var ensureNotNull = kotlin_kotlin.$_$.pi;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.d3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.e3;
  var uintCompare = kotlin_kotlin.$_$.ej;
  var copyOf_0 = kotlin_kotlin.$_$.m7;
  var equals = kotlin_kotlin.$_$.uc;
  var FunctionAdapter = kotlin_kotlin.$_$.hc;
  var isInterface = kotlin_kotlin.$_$.qd;
  var Comparator = kotlin_kotlin.$_$.kh;
  var hashCode = kotlin_kotlin.$_$.bd;
  var UInt = kotlin_kotlin.$_$.di;
  var compareValues = kotlin_kotlin.$_$.ja;
  var plus = kotlin_kotlin.$_$.s8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v6;
  var toMutableList = kotlin_kotlin.$_$.ca;
  var mapCapacity = kotlin_kotlin.$_$.l8;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var take = kotlin_kotlin.$_$.s9;
  var toSet = kotlin_kotlin.$_$.ea;
  var initMetadataForObject = kotlin_kotlin.$_$.hd;
  var emptyList = kotlin_kotlin.$_$.p7;
  var Pair = kotlin_kotlin.$_$.uh;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var compareTo = kotlin_kotlin.$_$.rc;
  var checkIndexOverflow = kotlin_kotlin.$_$.u6;
  var toString_1 = kotlin_kotlin.$_$.ug;
  var println = kotlin_kotlin.$_$.ib;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dd;
  var getBooleanHashCode = kotlin_kotlin.$_$.wc;
  var last = kotlin_kotlin.$_$.i8;
  var getNumberHashCode = kotlin_kotlin.$_$.yc;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.vi;
  var encodeToByteArray = kotlin_kotlin.$_$.mf;
  var charSequenceLength = kotlin_kotlin.$_$.pc;
  var coerceAtMost = kotlin_kotlin.$_$.ke;
  var lastIndexOf = kotlin_kotlin.$_$.vf;
  var substring = kotlin_kotlin.$_$.kg;
  var substring_0 = kotlin_kotlin.$_$.jg;
  var split = kotlin_kotlin.$_$.eg;
  var add = kotlin_kotlin.$_$.kb;
  var divide = kotlin_kotlin.$_$.sb;
  var convertToInt = kotlin_kotlin.$_$.qb;
  var toTypedArray = kotlin_kotlin.$_$.ga;
  var sortWith = kotlin_kotlin.$_$.i9;
  var toIntArray_0 = kotlin_kotlin.$_$.x9;
  var copyOfRange_0 = kotlin_kotlin.$_$.b7;
  var to = kotlin_kotlin.$_$.dj;
  var mutableListOf = kotlin_kotlin.$_$.o8;
  var multiply = kotlin_kotlin.$_$.zb;
  var compare = kotlin_kotlin.$_$.ob;
  var coerceIn = kotlin_kotlin.$_$.le;
  var emptyMap = kotlin_kotlin.$_$.q7;
  var coerceIn_0 = kotlin_kotlin.$_$.me;
  var startsWith = kotlin_kotlin.$_$.fg;
  var getOrNull = kotlin_kotlin.$_$.y7;
  var getProgressionLastElement = kotlin_kotlin.$_$.gb;
  var sorted = kotlin_kotlin.$_$.m9;
  var THROW_CCE = kotlin_kotlin.$_$.xh;
  var KtMap = kotlin_kotlin.$_$.v5;
  var CoroutineImpl = kotlin_kotlin.$_$.bb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.la;
  var initMetadataForLambda = kotlin_kotlin.$_$.gd;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var awaitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var withIndex = kotlin_kotlin.$_$.ia;
  var getStringHashCode = kotlin_kotlin.$_$.ad;
  var Collection = kotlin_kotlin.$_$.j5;
  var checkCountOverflow = kotlin_kotlin.$_$.t6;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ed;
  var listOf = kotlin_kotlin.$_$.k8;
  var SuspendFunction1 = kotlin_kotlin.$_$.cb;
  var sortedArray = kotlin_kotlin.$_$.j9;
  var until = kotlin_kotlin.$_$.te;
  var abs = kotlin_kotlin.$_$.he;
  var fill = kotlin_kotlin.$_$.u7;
  var booleanArray = kotlin_kotlin.$_$.kc;
  var sortedWith_0 = kotlin_kotlin.$_$.l9;
  var subtract = kotlin_kotlin.$_$.fc;
  var toNumber = kotlin_kotlin.$_$.gc;
  var Triple = kotlin_kotlin.$_$.zh;
  var THROW_IAE = kotlin_kotlin.$_$.yh;
  var enumEntries = kotlin_kotlin.$_$.fb;
  var Enum = kotlin_kotlin.$_$.nh;
  var objectCreate = kotlin_kotlin.$_$.ce;
  var get_lastIndex = kotlin_kotlin.$_$.f8;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(BinaryReader, 'BinaryReader');
  initMetadataForClass(ByteWriter, 'ByteWriter', ByteWriter);
  initMetadataForClass(BitReader, 'BitReader');
  initMetadataForClass(ClutImage, 'ClutImage');
  initMetadataForClass(PaletteKey, 'PaletteKey');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(ClutProcessor$mergeCluts$MergeableClut, 'MergeableClut');
  initMetadataForObject(ClutProcessor, 'ClutProcessor');
  initMetadataForClass(ClutGroup, 'ClutGroup');
  initMetadataForClass(DataWin$Companion$parseTXTR$TexMeta, 'TexMeta');
  initMetadataForCompanion(Companion);
  initMetadataForClass(DataWin, 'DataWin', DataWin);
  initMetadataForClass(Gen8, 'Gen8', Gen8);
  initMetadataForClass(DataWinParserOptions, 'DataWinParserOptions', DataWinParserOptions);
  initMetadataForClass(Sprite, 'Sprite', Sprite);
  initMetadataForClass(Sprt, 'Sprt', Sprt);
  initMetadataForClass(Background, 'Background', Background);
  initMetadataForClass(Bgnd, 'Bgnd', Bgnd);
  initMetadataForClass(Font, 'Font', Font);
  initMetadataForClass(FontChunk, 'FontChunk', FontChunk);
  initMetadataForClass(Texture, 'Texture');
  initMetadataForClass(Txtr, 'Txtr', Txtr);
  initMetadataForClass(TexturePageItem, 'TexturePageItem', TexturePageItem);
  initMetadataForClass(Tpag, 'Tpag', Tpag);
  initMetadataForClass(RoomTile, 'RoomTile', RoomTile);
  initMetadataForClass(Room, 'Room', Room);
  initMetadataForClass(RoomChunk, 'RoomChunk', RoomChunk);
  initMetadataForClass(RoomLayer, 'RoomLayer', RoomLayer);
  initMetadataForClass(RoomLayerAssetsData, 'RoomLayerAssetsData', RoomLayerAssetsData);
  initMetadataForClass(Audo, 'Audo', Audo);
  initMetadataForClass(AudioEntry, 'AudioEntry');
  initMetadataForClass(Sound, 'Sound');
  initMetadataForClass(Sond, 'Sond', Sond);
  initMetadataForClass(Optn, 'Optn', Optn);
  initMetadataForClass(Lang, 'Lang', Lang);
  initMetadataForClass(Extn, 'Extn', Extn);
  initMetadataForClass(Agrp, 'Agrp', Agrp);
  initMetadataForClass(PathChunk, 'PathChunk', PathChunk);
  initMetadataForClass(Scpt, 'Scpt', Scpt);
  initMetadataForClass(Glob, 'Glob', Glob);
  initMetadataForClass(Shdr, 'Shdr', Shdr);
  initMetadataForClass(Tmln, 'Tmln', Tmln);
  initMetadataForClass(Objt, 'Objt', Objt);
  initMetadataForClass(Code, 'Code', Code);
  initMetadataForClass(Vari, 'Vari', Vari);
  initMetadataForClass(Func, 'Func', Func);
  initMetadataForClass(Strg, 'Strg', Strg);
  initMetadataForClass(EventAction, 'EventAction', EventAction);
  initMetadataForClass(OptnConstant, 'OptnConstant');
  initMetadataForClass(Language, 'Language');
  initMetadataForClass(Extension, 'Extension');
  initMetadataForClass(ExtensionFile, 'ExtensionFile');
  initMetadataForClass(ExtensionFunction, 'ExtensionFunction');
  initMetadataForClass(GamePath, 'GamePath', GamePath);
  initMetadataForClass(PathPoint, 'PathPoint');
  initMetadataForClass(Script, 'Script');
  initMetadataForClass(Shader, 'Shader', Shader);
  initMetadataForClass(FontGlyph, 'FontGlyph', FontGlyph);
  initMetadataForClass(KerningPair, 'KerningPair');
  initMetadataForClass(Timeline, 'Timeline');
  initMetadataForClass(TimelineMoment, 'TimelineMoment');
  initMetadataForClass(GameObject, 'GameObject', GameObject);
  initMetadataForClass(PhysicsVertex, 'PhysicsVertex');
  initMetadataForClass(ObjectEventList, 'ObjectEventList', ObjectEventList);
  initMetadataForClass(ObjectEvent, 'ObjectEvent');
  initMetadataForClass(RoomBackground, 'RoomBackground', RoomBackground);
  initMetadataForClass(RoomView, 'RoomView', RoomView);
  initMetadataForClass(RoomGameObject, 'RoomGameObject', RoomGameObject);
  initMetadataForClass(SpriteInstance, 'SpriteInstance', SpriteInstance);
  initMetadataForClass(RoomLayerBackgroundData, 'RoomLayerBackgroundData', RoomLayerBackgroundData);
  initMetadataForClass(RoomLayerInstancesData, 'RoomLayerInstancesData', RoomLayerInstancesData);
  initMetadataForClass(RoomLayerTilesData, 'RoomLayerTilesData', RoomLayerTilesData);
  initMetadataForClass(CodeEntry, 'CodeEntry');
  initMetadataForClass(Variable, 'Variable');
  initMetadataForClass(Function, 'Function');
  initMetadataForClass(CodeLocals, 'CodeLocals');
  initMetadataForClass(LocalVar, 'LocalVar');
  initMetadataForClass(InternalPathPoint, 'InternalPathPoint');
  initMetadataForClass(PathPositionResult, 'PathPositionResult');
  initMetadataForClass(DirEntryInfo, 'DirEntryInfo');
  initMetadataForClass(File, 'File', VOID, DirEntryInfo);
  initMetadataForClass(Subdirectory, 'Subdirectory', VOID, DirEntryInfo);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(IsoFile, 'IsoFile');
  initMetadataForClass(DirInfo, 'DirInfo');
  initMetadataForClass(Iso9660Creator, 'Iso9660Creator', Iso9660Creator);
  initMetadataForClass(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Box, 'Box');
  initMetadataForObject(MedianCut, 'MedianCut');
  initMetadataForClass(PixelImage, 'PixelImage');
  initMetadataForClass(CropResult, 'CropResult');
  initMetadataForClass(AudioData, 'AudioData');
  initMetadataForClass(ProcessingResult, 'ProcessingResult');
  initMetadataForClass(TileKey, 'TileKey');
  initMetadataForClass(CropInfo, 'CropInfo');
  initMetadataForClass(AtlasPayloadMetadata, 'AtlasPayloadMetadata');
  initMetadataForClass(sam$kotlin_Comparator$0_3, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_4, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(processDataWin$TileSourceKey, 'TileSourceKey');
  initMetadataForLambda(processDataWin$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(processDataWin$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(processDataWin$slambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(processDataWin$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(processDataWin$slambda$slambda_3, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(processDataWin$slambda_3, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(processDataWin$MusEntry, 'MusEntry');
  initMetadataForLambda(processDataWin$slambda$slambda_5, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(processDataWin$slambda_5, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($processDataWinCOROUTINE$, CoroutineImpl);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Codebook, 'Codebook', Codebook);
  initMetadataForClass(Floor1, 'Floor1', Floor1);
  initMetadataForClass(Residue, 'Residue', Residue);
  initMetadataForClass(MappingChannel, 'MappingChannel', MappingChannel);
  initMetadataForClass(Mapping, 'Mapping', Mapping);
  initMetadataForClass(Mode, 'Mode', Mode);
  initMetadataForClass(ProbedPage, 'ProbedPage', ProbedPage);
  initMetadataForClass(sam$kotlin_Comparator$0_5, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_6, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(StbVorbis$startDecoder$FloorOrdering, 'FloorOrdering');
  initMetadataForClass(StbVorbis, 'StbVorbis');
  initMetadataForClass(STBVorbisError, 'STBVorbisError', VOID, Enum);
  initMetadataForClass(StbVorbisInfo, 'StbVorbisInfo');
  initMetadataForClass(TextureAtlas, 'TextureAtlas');
  initMetadataForClass(sam$kotlin_Comparator$0_7, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(TextureAtlasPacker, 'TextureAtlasPacker');
  initMetadataForClass(AtlasEntry, 'AtlasEntry');
  initMetadataForClass(Rect, 'Rect');
  initMetadataForClass(MaxRectsPacker, 'MaxRectsPacker');
  initMetadataForCoroutine($decodePngBytesCOROUTINE$, CoroutineImpl);
  //endregion
  function _get_data__d5abxd($this) {
    return $this.data_1;
  }
  function BinaryReader(data) {
    this.data_1 = data;
    this.position_1 = 0;
  }
  protoOf(BinaryReader).set_position_h4ktwi_k$ = function (_set____db54di) {
    this.position_1 = _set____db54di;
  };
  protoOf(BinaryReader).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(BinaryReader).get_size_woubt6_k$ = function () {
    return this.data_1.length;
  };
  protoOf(BinaryReader).readUint8_iklqzc_k$ = function () {
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    return this.data_1[_unary__edvuaz] & 255;
  };
  protoOf(BinaryReader).readInt16_ir40bm_k$ = function () {
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    var lo = this.data_1[_unary__edvuaz] & 255;
    var _unary__edvuaz_0 = this.position_1;
    this.position_1 = _unary__edvuaz_0 + 1 | 0;
    var hi = this.data_1[_unary__edvuaz_0] & 255;
    return toShort(hi << 8 | lo);
  };
  protoOf(BinaryReader).readUint16_7htsqz_k$ = function () {
    return this.readInt16_ir40bm_k$() & 65535;
  };
  protoOf(BinaryReader).readInt32_ir40a0_k$ = function () {
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    var b0 = this.data_1[_unary__edvuaz] & 255;
    var _unary__edvuaz_0 = this.position_1;
    this.position_1 = _unary__edvuaz_0 + 1 | 0;
    var b1 = this.data_1[_unary__edvuaz_0] & 255;
    var _unary__edvuaz_1 = this.position_1;
    this.position_1 = _unary__edvuaz_1 + 1 | 0;
    var b2 = this.data_1[_unary__edvuaz_1] & 255;
    var _unary__edvuaz_2 = this.position_1;
    this.position_1 = _unary__edvuaz_2 + 1 | 0;
    var b3 = this.data_1[_unary__edvuaz_2] & 255;
    return b3 << 24 | b2 << 16 | b1 << 8 | b0;
  };
  protoOf(BinaryReader).readFloat32_owjs1n_k$ = function () {
    FloatCompanionObject_getInstance();
    // Inline function 'kotlin.fromBits' call
    var bits = this.readInt32_ir40a0_k$();
    return floatFromBits(bits);
  };
  protoOf(BinaryReader).readLong_ecnd8u_k$ = function () {
    var lo = bitwiseAnd(fromInt(this.readInt32_ir40a0_k$()), new Long(-1, 0));
    var hi = bitwiseAnd(fromInt(this.readInt32_ir40a0_k$()), new Long(-1, 0));
    return bitwiseOr(shiftLeft(hi, 32), lo);
  };
  protoOf(BinaryReader).readBool32_geddkx_k$ = function () {
    return !(this.readInt32_ir40a0_k$() === 0);
  };
  protoOf(BinaryReader).readBytes_do0jwd_k$ = function (count) {
    var bytes = copyOfRange(this.data_1, this.position_1, this.position_1 + count | 0);
    this.position_1 = this.position_1 + count | 0;
    return bytes;
  };
  protoOf(BinaryReader).readBytesAt_xyxyfc_k$ = function (offset, count) {
    var saved = this.position_1;
    this.position_1 = offset;
    var bytes = this.readBytes_do0jwd_k$(count);
    this.position_1 = saved;
    return bytes;
  };
  protoOf(BinaryReader).skip_tkj2uh_k$ = function (count) {
    this.position_1 = this.position_1 + count | 0;
  };
  protoOf(BinaryReader).readStringPtr_yp6n6h_k$ = function () {
    var offset = this.readInt32_ir40a0_k$();
    if (offset === 0)
      return null;
    var saved = this.position_1;
    this.position_1 = offset - 4 | 0;
    var length = this.readInt32_ir40a0_k$();
    var bytes = this.readBytes_do0jwd_k$(length);
    this.position_1 = saved;
    return decodeToString(bytes);
  };
  protoOf(BinaryReader).readPointerTable_gyrryf_k$ = function () {
    var count = this.readInt32_ir40a0_k$();
    if (count === 0) {
      // Inline function 'kotlin.intArrayOf' call
      return new Int32Array([]);
    }
    var tmp = 0;
    var tmp_0 = new Int32Array(count);
    while (tmp < count) {
      tmp_0[tmp] = this.readInt32_ir40a0_k$();
      tmp = tmp + 1 | 0;
    }
    return tmp_0;
  };
  protoOf(BinaryReader).readChunkName_1z7vdu_k$ = function () {
    var bytes = this.readBytes_do0jwd_k$(4);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(bytes.length);
    var inductionVariable = 0;
    var last = bytes.length;
    while (inductionVariable < last) {
      var item = bytes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0 = new Char(numberToChar(item));
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return concatToString(toCharArray(destination));
  };
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_size__9twho6($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function resizeBufferIfNeeded($this, requiredCapacity) {
    if (requiredCapacity > $this.buffer_1.length) {
      var newSize = coerceAtLeast(numberToInt(requiredCapacity * 1.5), requiredCapacity + 1 | 0);
      $this.buffer_1 = copyOf($this.buffer_1, newSize);
    }
  }
  function ByteWriter(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 256 : initialCapacity;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity > 0)) {
      var message = 'Initial capacity must be greater than 0!';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.buffer_1 = new Int8Array(initialCapacity);
    this.size_1 = 0;
  }
  protoOf(ByteWriter).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(ByteWriter).set_position_h4ktwi_k$ = function (value) {
    // Inline function 'kotlin.require' call
    if (!(this.size_1 >= value)) {
      var message = 'Cannot seek past end of written data';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.size_1 = value;
  };
  protoOf(ByteWriter).get_position_jfponi_k$ = function () {
    return this.size_1;
  };
  protoOf(ByteWriter).writeByte_1arzrz_k$ = function (value) {
    resizeBufferIfNeeded(this, this.size_1 + 1 | 0);
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.size_1;
    this.size_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = toByte(value);
  };
  protoOf(ByteWriter).writeShortLE_62so5q_k$ = function (value) {
    resizeBufferIfNeeded(this, this.size_1 + 2 | 0);
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.size_1;
    this.size_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = toByte(value & 255);
    var tmp_0 = this.buffer_1;
    var _unary__edvuaz_0 = this.size_1;
    this.size_1 = _unary__edvuaz_0 + 1 | 0;
    tmp_0[_unary__edvuaz_0] = toByte(value >> 8 & 255);
  };
  protoOf(ByteWriter).writeIntLE_y9sr6p_k$ = function (value) {
    resizeBufferIfNeeded(this, this.size_1 + 4 | 0);
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.size_1;
    this.size_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = toByte(value & 255);
    var tmp_0 = this.buffer_1;
    var _unary__edvuaz_0 = this.size_1;
    this.size_1 = _unary__edvuaz_0 + 1 | 0;
    tmp_0[_unary__edvuaz_0] = toByte(value >> 8 & 255);
    var tmp_1 = this.buffer_1;
    var _unary__edvuaz_1 = this.size_1;
    this.size_1 = _unary__edvuaz_1 + 1 | 0;
    tmp_1[_unary__edvuaz_1] = toByte(value >> 16 & 255);
    var tmp_2 = this.buffer_1;
    var _unary__edvuaz_2 = this.size_1;
    this.size_1 = _unary__edvuaz_2 + 1 | 0;
    tmp_2[_unary__edvuaz_2] = toByte(value >> 24 & 255);
  };
  protoOf(ByteWriter).writeShortBE_9vwl9k_k$ = function (value) {
    resizeBufferIfNeeded(this, this.size_1 + 2 | 0);
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.size_1;
    this.size_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = toByte(value >> 8 & 255);
    var tmp_0 = this.buffer_1;
    var _unary__edvuaz_0 = this.size_1;
    this.size_1 = _unary__edvuaz_0 + 1 | 0;
    tmp_0[_unary__edvuaz_0] = toByte(value & 255);
  };
  protoOf(ByteWriter).writeIntBE_ib3hrf_k$ = function (value) {
    resizeBufferIfNeeded(this, this.size_1 + 4 | 0);
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.size_1;
    this.size_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = toByte(value >> 24 & 255);
    var tmp_0 = this.buffer_1;
    var _unary__edvuaz_0 = this.size_1;
    this.size_1 = _unary__edvuaz_0 + 1 | 0;
    tmp_0[_unary__edvuaz_0] = toByte(value >> 16 & 255);
    var tmp_1 = this.buffer_1;
    var _unary__edvuaz_1 = this.size_1;
    this.size_1 = _unary__edvuaz_1 + 1 | 0;
    tmp_1[_unary__edvuaz_1] = toByte(value >> 8 & 255);
    var tmp_2 = this.buffer_1;
    var _unary__edvuaz_2 = this.size_1;
    this.size_1 = _unary__edvuaz_2 + 1 | 0;
    tmp_2[_unary__edvuaz_2] = toByte(value & 255);
  };
  protoOf(ByteWriter).writeByteArray_uu44pq_k$ = function (array) {
    resizeBufferIfNeeded(this, this.size_1 + array.length | 0);
    var tmp2 = this.buffer_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.size_1;
    var endIndex = array.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = array;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, 0, endIndex);
    this.size_1 = this.size_1 + array.length | 0;
  };
  protoOf(ByteWriter).writeZeroPadding_9cl7s2_k$ = function (count) {
    resizeBufferIfNeeded(this, this.size_1 + count | 0);
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.buffer_1;
        var _unary__edvuaz = this.size_1;
        this.size_1 = _unary__edvuaz + 1 | 0;
        tmp[_unary__edvuaz] = 0;
      }
       while (inductionVariable < count);
  };
  protoOf(ByteWriter).getAsByteArray_tshzr_k$ = function () {
    var result = new Int8Array(this.size_1);
    var tmp0 = this.buffer_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.size_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, result, 0, 0, endIndex);
    return result;
  };
  function get_BZ2_R_NUMS() {
    _init_properties_Bzip2Decoder_kt__wov7td();
    return BZ2_R_NUMS;
  }
  var BZ2_R_NUMS;
  function bzip2Decompress(input) {
    _init_properties_Bzip2Decoder_kt__wov7td();
    var br = new BitReader(input);
    var tmp = br.readBits_ragv8c_k$(8);
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(66);
    if (!(tmp === Char__toInt_impl_vasixd(this_0)))
      throw IllegalStateException_init_$Create$("Not a bzip2 stream: missing 'B'");
    var tmp_0 = br.readBits_ragv8c_k$(8);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(90);
    if (!(tmp_0 === Char__toInt_impl_vasixd(this_1)))
      throw IllegalStateException_init_$Create$("Not a bzip2 stream: missing 'Z'");
    var tmp_1 = br.readBits_ragv8c_k$(8);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(104);
    if (!(tmp_1 === Char__toInt_impl_vasixd(this_2)))
      throw IllegalStateException_init_$Create$("Not a bzip2 stream: missing 'h'");
    var tmp_2 = br.readBits_ragv8c_k$(8);
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(48);
    var level = tmp_2 - Char__toInt_impl_vasixd(this_3) | 0;
    if (!(1 <= level ? level <= 9 : false))
      throw IllegalStateException_init_$Create$('Invalid bzip2 block size level: ' + level);
    var blockSize = imul(100000, level);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = imul(input.length, 4);
    var tmp$ret$4 = Math.max(64, b);
    var out = new Int8Array(tmp$ret$4);
    var outLen = 0;
    $l$loop: while (true) {
      var magicHi = br.readBits_ragv8c_k$(24);
      var magicLo = br.readBits_ragv8c_k$(24);
      var magic = bitwiseOr(shiftLeft(fromInt(magicHi), 24), bitwiseAnd(fromInt(magicLo), new Long(16777215, 0)));
      if (equalsLong(magic, new Long(1161318544, 6002))) {
        br.readBits_ragv8c_k$(32);
        break $l$loop;
      }
      if (!equalsLong(magic, new Long(1495683929, 12609)))
        throw IllegalStateException_init_$Create$('Invalid block magic: ' + toString_0(magic, 16));
      br.readBits_ragv8c_k$(32);
      var randomised = br.readBits_ragv8c_k$(1);
      var origPtr = br.readBits_ragv8c_k$(24);
      var mapL1 = br.readBits_ragv8c_k$(16);
      var seqToUnseq = new Int32Array(256);
      var numInUse = 0;
      var inductionVariable = 0;
      if (inductionVariable < 16)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!((mapL1 & 1 << (15 - i | 0)) === 0)) {
            var sub = br.readBits_ragv8c_k$(16);
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < 16)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                if (!((sub & 1 << (15 - j | 0)) === 0)) {
                  var _unary__edvuaz = numInUse;
                  numInUse = _unary__edvuaz + 1 | 0;
                  seqToUnseq[_unary__edvuaz] = imul(i, 16) + j | 0;
                }
              }
               while (inductionVariable_0 < 16);
          }
        }
         while (inductionVariable < 16);
      if (numInUse === 0)
        throw IllegalStateException_init_$Create$('numInUse == 0');
      var alphaSize = numInUse + 2 | 0;
      var numTrees = br.readBits_ragv8c_k$(3);
      if (!(2 <= numTrees ? numTrees <= 6 : false))
        throw IllegalStateException_init_$Create$('Invalid numTrees: ' + numTrees);
      var numSelectors = br.readBits_ragv8c_k$(15);
      if (numSelectors < 1)
        throw IllegalStateException_init_$Create$('Invalid numSelectors: ' + numSelectors);
      var selectorsMtf = new Int32Array(numSelectors);
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < numSelectors)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var j_0 = 0;
          while (br.readBits_ragv8c_k$(1) === 1) {
            j_0 = j_0 + 1 | 0;
            if (j_0 >= numTrees)
              throw IllegalStateException_init_$Create$('Selector MTF index out of range');
          }
          selectorsMtf[i_0] = j_0;
        }
         while (inductionVariable_1 < numSelectors);
      var tmp_3 = 0;
      var tmp_4 = new Int32Array(numTrees);
      while (tmp_3 < numTrees) {
        var tmp_5 = tmp_3;
        tmp_4[tmp_5] = tmp_5;
        tmp_3 = tmp_3 + 1 | 0;
      }
      var pos = tmp_4;
      var selectors = new Int32Array(numSelectors);
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < numSelectors)
        do {
          var i_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var v = selectorsMtf[i_1];
          var tmp_6 = pos[v];
          while (v > 0) {
            pos[v] = pos[v - 1 | 0];
            v = v - 1 | 0;
          }
          pos[0] = tmp_6;
          selectors[i_1] = tmp_6;
        }
         while (inductionVariable_2 < numSelectors);
      var tmp_7 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_8 = Array(numTrees);
      while (tmp_7 < numTrees) {
        tmp_8[tmp_7] = new Int32Array(alphaSize);
        tmp_7 = tmp_7 + 1 | 0;
      }
      var codeLens = tmp_8;
      var inductionVariable_3 = 0;
      if (inductionVariable_3 < numTrees)
        do {
          var t = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var curr = br.readBits_ragv8c_k$(5);
          var inductionVariable_4 = 0;
          if (inductionVariable_4 < alphaSize)
            do {
              var s = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              $l$loop_0: while (true) {
                if (!(1 <= curr ? curr <= 20 : false))
                  throw IllegalStateException_init_$Create$('Invalid code length: ' + curr);
                if (br.readBits_ragv8c_k$(1) === 0)
                  break $l$loop_0;
                if (br.readBits_ragv8c_k$(1) === 1) {
                  curr = curr - 1 | 0;
                } else {
                  curr = curr + 1 | 0;
                }
              }
              codeLens[t][s] = curr;
            }
             while (inductionVariable_4 < alphaSize);
        }
         while (inductionVariable_3 < numTrees);
      var tmp_9 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_10 = Array(numTrees);
      while (tmp_9 < numTrees) {
        tmp_10[tmp_9] = new Int32Array(21);
        tmp_9 = tmp_9 + 1 | 0;
      }
      var limits = tmp_10;
      var tmp_11 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_12 = Array(numTrees);
      while (tmp_11 < numTrees) {
        tmp_12[tmp_11] = new Int32Array(21);
        tmp_11 = tmp_11 + 1 | 0;
      }
      var bases = tmp_12;
      var tmp_13 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_14 = Array(numTrees);
      while (tmp_13 < numTrees) {
        tmp_14[tmp_13] = new Int32Array(alphaSize);
        tmp_13 = tmp_13 + 1 | 0;
      }
      var perms = tmp_14;
      var minLens = new Int32Array(numTrees);
      var inductionVariable_5 = 0;
      if (inductionVariable_5 < numTrees)
        do {
          var t_0 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var lens = codeLens[t_0];
          var minLen = 32;
          var maxLen = 0;
          var inductionVariable_6 = 0;
          var last = lens.length;
          while (inductionVariable_6 < last) {
            var l = lens[inductionVariable_6];
            inductionVariable_6 = inductionVariable_6 + 1 | 0;
            if (maxLen <= l)
              maxLen = l;
            if (l <= minLen)
              minLen = l;
          }
          minLens[t_0] = minLen;
          var perm = perms[t_0];
          var pp = 0;
          var inductionVariable_7 = minLen;
          var last_0 = maxLen;
          if (inductionVariable_7 <= last_0)
            do {
              var l_0 = inductionVariable_7;
              inductionVariable_7 = inductionVariable_7 + 1 | 0;
              var inductionVariable_8 = 0;
              if (inductionVariable_8 < alphaSize)
                do {
                  var s_0 = inductionVariable_8;
                  inductionVariable_8 = inductionVariable_8 + 1 | 0;
                  if (lens[s_0] === l_0) {
                    var _unary__edvuaz_0 = pp;
                    pp = _unary__edvuaz_0 + 1 | 0;
                    perm[_unary__edvuaz_0] = s_0;
                  }
                }
                 while (inductionVariable_8 < alphaSize);
            }
             while (!(l_0 === last_0));
          var length = new Int32Array(maxLen + 2 | 0);
          var inductionVariable_9 = 0;
          if (inductionVariable_9 < alphaSize)
            do {
              var s_1 = inductionVariable_9;
              inductionVariable_9 = inductionVariable_9 + 1 | 0;
              var _index_0__fvwizt = lens[s_1];
              length[_index_0__fvwizt] = length[_index_0__fvwizt] + 1 | 0;
            }
             while (inductionVariable_9 < alphaSize);
          var base = bases[t_0];
          var limit = limits[t_0];
          var code = 0;
          var idx = 0;
          var inductionVariable_10 = minLen;
          var last_1 = maxLen;
          if (inductionVariable_10 <= last_1)
            do {
              var l_1 = inductionVariable_10;
              inductionVariable_10 = inductionVariable_10 + 1 | 0;
              var n = length[l_1];
              limit[l_1] = (code + n | 0) - 1 | 0;
              base[l_1] = code - idx | 0;
              idx = idx + n | 0;
              code = (code + n | 0) << 1;
            }
             while (!(l_1 === last_1));
        }
         while (inductionVariable_5 < numTrees);
      var tmp_15 = 0;
      var tmp_16 = numInUse;
      var tmp_17 = new Int32Array(tmp_16);
      while (tmp_15 < tmp_16) {
        var tmp_18 = tmp_15;
        tmp_17[tmp_18] = tmp_18;
        tmp_15 = tmp_15 + 1 | 0;
      }
      var mtf = tmp_17;
      var bwtInput = new Int8Array(blockSize);
      var bwtLen = 0;
      var EOB = numInUse + 1 | 0;
      var groupPos = 0;
      var groupNo = -1;
      var currTree = 0;
      var runAccum = 0;
      var runShift = 0;
      $l$loop_1: while (true) {
        if (groupPos === 0) {
          groupNo = groupNo + 1 | 0;
          if (groupNo >= numSelectors)
            throw IllegalStateException_init_$Create$('Ran out of selectors');
          currTree = selectors[groupNo];
          groupPos = 50;
        }
        groupPos = groupPos - 1 | 0;
        var limit_0 = limits[currTree];
        var base_0 = bases[currTree];
        var perm_0 = perms[currTree];
        var len = minLens[currTree];
        var code_0 = br.readBits_ragv8c_k$(len);
        while (code_0 > limit_0[len]) {
          len = len + 1 | 0;
          if (len >= limit_0.length)
            throw IllegalStateException_init_$Create$('Huffman decode overflow');
          code_0 = code_0 << 1 | br.readBits_ragv8c_k$(1);
        }
        var sym = perm_0[code_0 - base_0[len] | 0];
        if (sym === EOB)
          break $l$loop_1;
        switch (sym) {
          case 0:
          case 1:
            runAccum = runAccum + ((sym + 1 | 0) << runShift) | 0;
            runShift = runShift + 1 | 0;
            break;
          default:
            if (runShift > 0) {
              var b_0 = toByte(seqToUnseq[mtf[0]] & 255);
              if ((bwtLen + runAccum | 0) > blockSize)
                throw IllegalStateException_init_$Create$('BWT block overflow');
              // Inline function 'kotlin.repeat' call
              var times = runAccum;
              var inductionVariable_11 = 0;
              if (inductionVariable_11 < times)
                do {
                  var index = inductionVariable_11;
                  inductionVariable_11 = inductionVariable_11 + 1 | 0;
                  var _unary__edvuaz_1 = bwtLen;
                  bwtLen = _unary__edvuaz_1 + 1 | 0;
                  bwtInput[_unary__edvuaz_1] = b_0;
                }
                 while (inductionVariable_11 < times);
              runAccum = 0;
              runShift = 0;
            }

            var mtfIdx = sym - 1 | 0;
            if (mtfIdx >= numInUse)
              throw IllegalStateException_init_$Create$('MTF index out of range');
            var v_0 = mtf[mtfIdx];
            var k = mtfIdx;
            while (k > 0) {
              mtf[k] = mtf[k - 1 | 0];
              k = k - 1 | 0;
            }

            mtf[0] = v_0;
            if (bwtLen >= blockSize)
              throw IllegalStateException_init_$Create$('BWT block overflow');
            var _unary__edvuaz_2 = bwtLen;
            bwtLen = _unary__edvuaz_2 + 1 | 0;
            bwtInput[_unary__edvuaz_2] = toByte(seqToUnseq[v_0] & 255);
            break;
        }
      }
      if (runShift > 0) {
        var b_1 = toByte(seqToUnseq[mtf[0]] & 255);
        if ((bwtLen + runAccum | 0) > blockSize)
          throw IllegalStateException_init_$Create$('BWT block overflow');
        // Inline function 'kotlin.repeat' call
        var times_0 = runAccum;
        var inductionVariable_12 = 0;
        if (inductionVariable_12 < times_0)
          do {
            var index_0 = inductionVariable_12;
            inductionVariable_12 = inductionVariable_12 + 1 | 0;
            var _unary__edvuaz_3 = bwtLen;
            bwtLen = _unary__edvuaz_3 + 1 | 0;
            bwtInput[_unary__edvuaz_3] = b_1;
          }
           while (inductionVariable_12 < times_0);
      }
      if (origPtr >= bwtLen)
        throw IllegalStateException_init_$Create$('origPtr out of range: ' + origPtr + ' >= ' + bwtLen);
      if (!(randomised === 0)) {
        var rNToGo = 0;
        var rTPos = 0;
        var inductionVariable_13 = 0;
        var last_2 = bwtLen;
        if (inductionVariable_13 < last_2)
          do {
            var i_2 = inductionVariable_13;
            inductionVariable_13 = inductionVariable_13 + 1 | 0;
            if (rNToGo === 1) {
              bwtInput[i_2] = toByte(bwtInput[i_2] ^ 1);
            }
            rNToGo = rNToGo - 1 | 0;
            if (rNToGo === 0) {
              rNToGo = get_BZ2_R_NUMS()[rTPos];
              rTPos = rTPos + 1 | 0;
              if (rTPos === 512)
                rTPos = 0;
            }
          }
           while (inductionVariable_13 < last_2);
      }
      var cftab = new Int32Array(257);
      var inductionVariable_14 = 0;
      var last_3 = bwtLen;
      if (inductionVariable_14 < last_3)
        do {
          var i_3 = inductionVariable_14;
          inductionVariable_14 = inductionVariable_14 + 1 | 0;
          var _index_0__fvwizt_0 = (bwtInput[i_3] & 255) + 1 | 0;
          cftab[_index_0__fvwizt_0] = cftab[_index_0__fvwizt_0] + 1 | 0;
        }
         while (inductionVariable_14 < last_3);
      var inductionVariable_15 = 1;
      if (inductionVariable_15 <= 256)
        do {
          var i_4 = inductionVariable_15;
          inductionVariable_15 = inductionVariable_15 + 1 | 0;
          cftab[i_4] = cftab[i_4] + cftab[i_4 - 1 | 0] | 0;
        }
         while (inductionVariable_15 <= 256);
      var tt = new Int32Array(bwtLen);
      var inductionVariable_16 = 0;
      var last_4 = bwtLen;
      if (inductionVariable_16 < last_4)
        do {
          var i_5 = inductionVariable_16;
          inductionVariable_16 = inductionVariable_16 + 1 | 0;
          var c = bwtInput[i_5] & 255;
          tt[cftab[c]] = i_5;
          cftab[c] = cftab[c] + 1 | 0;
        }
         while (inductionVariable_16 < last_4);
      var idx_0 = origPtr;
      var remaining = bwtLen;
      var lastByte = -1;
      var runCount = 0;
      $l$loop_2: while (remaining > 0) {
        idx_0 = tt[idx_0];
        var b_2 = bwtInput[idx_0] & 255;
        remaining = remaining - 1 | 0;
        if (runCount === 4) {
          if (b_2 > 251)
            throw IllegalStateException_init_$Create$('RLE-1 count too big: ' + b_2);
          if ((outLen + b_2 | 0) > out.length) {
            var tmp_19 = out;
            var tmp0 = imul(out.length, 2);
            // Inline function 'kotlin.comparisons.maxOf' call
            var b_3 = (outLen + b_2 | 0) + 16 | 0;
            var tmp$ret$19 = Math.max(tmp0, b_3);
            out = copyOf(tmp_19, tmp$ret$19);
          }
          var lb = toByte(lastByte);
          // Inline function 'kotlin.repeat' call
          var inductionVariable_17 = 0;
          if (inductionVariable_17 < b_2)
            do {
              var index_1 = inductionVariable_17;
              inductionVariable_17 = inductionVariable_17 + 1 | 0;
              var tmp_20 = out;
              var _unary__edvuaz_4 = outLen;
              outLen = _unary__edvuaz_4 + 1 | 0;
              tmp_20[_unary__edvuaz_4] = lb;
            }
             while (inductionVariable_17 < b_2);
          runCount = 0;
          lastByte = -1;
          continue $l$loop_2;
        }
        if (outLen >= out.length)
          out = copyOf(out, imul(out.length, 2));
        var tmp_21 = out;
        var _unary__edvuaz_5 = outLen;
        outLen = _unary__edvuaz_5 + 1 | 0;
        tmp_21[_unary__edvuaz_5] = toByte(b_2);
        if (b_2 === lastByte) {
          runCount = runCount + 1 | 0;
        } else {
          runCount = 1;
          lastByte = b_2;
        }
      }
    }
    return outLen === out.length ? out : copyOf(out, outLen);
  }
  function _get_data__d5abxd_0($this) {
    return $this.data_1;
  }
  function _set_pos__4wcab5($this, _set____db54di) {
    $this.pos_1 = _set____db54di;
  }
  function _get_pos__e6evgd($this) {
    return $this.pos_1;
  }
  function _set_buf__4w3gmq($this, _set____db54di) {
    $this.buf_1 = _set____db54di;
  }
  function _get_buf__e661ry($this) {
    return $this.buf_1;
  }
  function _set_bitsLeft__p9g6nq($this, _set____db54di) {
    $this.bitsLeft_1 = _set____db54di;
  }
  function _get_bitsLeft__wyrjum($this) {
    return $this.bitsLeft_1;
  }
  function BitReader(data) {
    this.data_1 = data;
    this.pos_1 = 0;
    this.buf_1 = 0;
    this.bitsLeft_1 = 0;
  }
  protoOf(BitReader).readBits_ragv8c_k$ = function (n) {
    if (n === 0)
      return 0;
    if (n > 24) {
      var hi = this.readBits_ragv8c_k$(n - 16 | 0);
      var lo = this.readBits_ragv8c_k$(16);
      return hi << 16 | lo;
    }
    while (this.bitsLeft_1 < n) {
      if (this.pos_1 >= this.data_1.length)
        throw IllegalStateException_init_$Create$('Unexpected end of bzip2 stream');
      this.buf_1 = this.buf_1 << 8 | this.data_1[this.pos_1] & 255;
      this.pos_1 = this.pos_1 + 1 | 0;
      this.bitsLeft_1 = this.bitsLeft_1 + 8 | 0;
    }
    var result = (this.buf_1 >>> (this.bitsLeft_1 - n | 0) | 0) & ((1 << n) - 1 | 0);
    this.bitsLeft_1 = this.bitsLeft_1 - n | 0;
    var tmp = this;
    var tmp_0 = this.buf_1;
    // Inline function 'kotlin.let' call
    var it = (1 << this.bitsLeft_1) - 1 | 0;
    tmp.buf_1 = tmp_0 & (this.bitsLeft_1 >= 31 ? -1 : it);
    return result;
  };
  var properties_initialized_Bzip2Decoder_kt_4o2j59;
  function _init_properties_Bzip2Decoder_kt__wov7td() {
    if (!properties_initialized_Bzip2Decoder_kt_4o2j59) {
      properties_initialized_Bzip2Decoder_kt_4o2j59 = true;
      // Inline function 'kotlin.intArrayOf' call
      BZ2_R_NUMS = new Int32Array([619, 720, 127, 481, 931, 816, 813, 233, 566, 247, 985, 724, 205, 454, 863, 491, 741, 242, 949, 214, 733, 859, 335, 708, 621, 574, 73, 654, 730, 472, 419, 436, 278, 496, 867, 210, 399, 680, 480, 51, 878, 465, 811, 169, 869, 675, 611, 697, 867, 561, 862, 687, 507, 283, 482, 129, 807, 591, 733, 623, 150, 238, 59, 379, 684, 877, 625, 169, 643, 105, 170, 607, 520, 932, 727, 476, 693, 425, 174, 647, 73, 122, 335, 530, 442, 853, 695, 249, 445, 515, 909, 545, 703, 919, 874, 474, 882, 500, 594, 612, 641, 801, 220, 162, 819, 984, 589, 513, 495, 799, 161, 604, 958, 533, 221, 400, 386, 867, 600, 782, 382, 596, 414, 171, 516, 375, 682, 485, 911, 276, 98, 553, 163, 354, 666, 933, 424, 341, 533, 870, 227, 730, 475, 186, 263, 647, 537, 686, 600, 224, 469, 68, 770, 919, 190, 373, 294, 822, 808, 206, 184, 943, 795, 384, 383, 461, 404, 758, 839, 887, 715, 67, 618, 276, 204, 918, 873, 777, 604, 560, 951, 160, 578, 722, 79, 804, 96, 409, 713, 940, 652, 934, 970, 447, 318, 353, 859, 672, 112, 785, 645, 863, 803, 350, 139, 93, 354, 99, 820, 908, 609, 772, 154, 274, 580, 184, 79, 626, 630, 742, 653, 282, 762, 623, 680, 81, 927, 626, 789, 125, 411, 521, 938, 300, 821, 78, 343, 175, 128, 250, 170, 774, 972, 275, 999, 639, 495, 78, 352, 126, 857, 956, 358, 619, 580, 124, 737, 594, 701, 612, 669, 112, 134, 694, 363, 992, 809, 743, 168, 974, 944, 375, 748, 52, 600, 747, 642, 182, 862, 81, 344, 805, 988, 739, 511, 655, 814, 334, 249, 515, 897, 955, 664, 981, 649, 113, 974, 459, 893, 228, 433, 837, 553, 268, 926, 240, 102, 654, 459, 51, 686, 754, 806, 760, 493, 403, 415, 394, 687, 700, 946, 670, 656, 610, 738, 392, 760, 799, 887, 653, 978, 321, 576, 617, 626, 502, 894, 679, 243, 440, 680, 879, 194, 572, 640, 724, 926, 56, 204, 700, 707, 151, 457, 449, 797, 195, 791, 558, 945, 679, 297, 59, 87, 824, 713, 663, 412, 693, 342, 606, 134, 108, 571, 364, 631, 212, 174, 643, 304, 329, 343, 97, 430, 751, 497, 314, 983, 374, 822, 928, 140, 206, 73, 263, 980, 736, 876, 478, 430, 305, 170, 514, 364, 692, 829, 82, 855, 953, 676, 246, 369, 970, 294, 750, 807, 827, 150, 790, 288, 923, 804, 378, 215, 828, 592, 281, 565, 555, 710, 82, 896, 831, 547, 261, 524, 462, 293, 465, 502, 56, 661, 821, 976, 991, 658, 869, 905, 758, 745, 193, 768, 550, 608, 933, 378, 286, 215, 979, 792, 961, 61, 688, 793, 644, 986, 403, 106, 366, 905, 644, 372, 567, 466, 434, 645, 210, 389, 550, 919, 135, 780, 773, 635, 389, 707, 100, 626, 958, 165, 504, 920, 176, 193, 713, 857, 265, 203, 50, 668, 108, 645, 990, 626, 197, 510, 357, 358, 850, 858, 364, 936, 638]);
    }
  }
  function ClutImage(name, width, height, bpp, palette, usedColors, indices) {
    this.name_1 = name;
    this.width_1 = width;
    this.height_1 = height;
    this.bpp_1 = bpp;
    this.palette_1 = palette;
    this.usedColors_1 = usedColors;
    this.indices_1 = indices;
  }
  protoOf(ClutImage).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(ClutImage).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(ClutImage).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(ClutImage).set_bpp_rppdur_k$ = function (_set____db54di) {
    this.bpp_1 = _set____db54di;
  };
  protoOf(ClutImage).get_bpp_18j8nb_k$ = function () {
    return this.bpp_1;
  };
  protoOf(ClutImage).set_palette_fvpoqr_k$ = function (_set____db54di) {
    this.palette_1 = _set____db54di;
  };
  protoOf(ClutImage).get_palette_by3him_k$ = function () {
    return this.palette_1;
  };
  protoOf(ClutImage).set_usedColors_42nvwi_k$ = function (_set____db54di) {
    this.usedColors_1 = _set____db54di;
  };
  protoOf(ClutImage).get_usedColors_63vbpy_k$ = function () {
    return this.usedColors_1;
  };
  protoOf(ClutImage).set_indices_y6neu2_k$ = function (_set____db54di) {
    this.indices_1 = _set____db54di;
  };
  protoOf(ClutImage).get_indices_xelk8u_k$ = function () {
    return this.indices_1;
  };
  function _get_hash__d7hhq5($this) {
    return $this.hash_1;
  }
  function _get_NEUQUANT_MINIMUM__2qso21($this) {
    return $this.NEUQUANT_MINIMUM_1;
  }
  function buildDirectClut($this, name, w, h, pixels, uniqueColors, bpp) {
    var maxSlots = bpp === 4 ? 16 : 256;
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = ClutProcessor$buildDirectClut$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var tmp$ret$1 = sortedWith(uniqueColors, tmp$ret$0);
    var sorted = toIntArray(tmp$ret$1);
    var palette = new Int32Array(maxSlots);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = sorted.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = sorted;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, palette, 0, 0, endIndex);
    var colorToIndex = HashMap_init_$Create$(imul(sorted.length, 2));
    var inductionVariable = 0;
    var last = sorted.length;
    while (inductionVariable < last) {
      var i = inductionVariable;
      var c = sorted[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.set' call
      colorToIndex.put_4fpzoq_k$(c, i);
    }
    var tmp_1 = 0;
    var tmp_2 = pixels.length;
    var tmp_3 = new Int8Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      tmp_3[tmp_4] = toByte(ensureNotNull(colorToIndex.get_wei43m_k$(pixels[tmp_4])));
      tmp_1 = tmp_1 + 1 | 0;
    }
    var indices = tmp_3;
    return new ClutImage(name, w, h, bpp, palette, sorted.length, indices);
  }
  function buildQuantizedClut($this, name, w, h, pixels, uniqueColors, targetBpp) {
    var paletteSlots = targetBpp === 4 ? 16 : 256;
    var hasTransparent = uniqueColors.contains_aljjnj_k$(0);
    var tmp;
    if (!hasTransparent) {
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = pixels.slice();
    } else {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$_0();
      var inductionVariable = 0;
      var last = pixels.length;
      while (inductionVariable < last) {
        var element = pixels[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (!((element >>> 24 | 0) === 0)) {
          destination.add_utx5q5_k$(element);
        }
      }
      tmp = toIntArray(destination);
    }
    var visiblePixels = tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (visiblePixels.length === 0) {
      var palette = new Int32Array(paletteSlots);
      return new ClutImage(name, w, h, targetBpp, palette, 1, new Int8Array(pixels.length));
    }
    var maxQuantColors = hasTransparent ? paletteSlots - 1 | 0 : paletteSlots;
    var quantPalette = MedianCut_getInstance().quantize_llvirm_k$(visiblePixels, maxQuantColors);
    // Inline function 'kotlin.collections.mutableListOf' call
    var unsortedPalette = ArrayList_init_$Create$_0();
    if (hasTransparent) {
      unsortedPalette.add_utx5q5_k$(0);
    }
    var inductionVariable_0 = 0;
    var last_0 = quantPalette.length;
    while (inductionVariable_0 < last_0) {
      var c = quantPalette[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      unsortedPalette.add_utx5q5_k$(c);
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = ClutProcessor$buildQuantizedClut$lambda;
    var tmp$ret$7 = new sam$kotlin_Comparator$0_0(tmp_0);
    var tmp$ret$8 = sortedWith(unsortedPalette, tmp$ret$7);
    var sortedColors = toIntArray(tmp$ret$8);
    var palette_0 = new Int32Array(paletteSlots);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = sortedColors.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = sortedColors;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, palette_0, 0, 0, endIndex);
    var cache = HashMap_init_$Create$_0();
    var tmp_2 = 0;
    var tmp_3 = pixels.length;
    var tmp_4 = new Int8Array(tmp_3);
    while (tmp_2 < tmp_3) {
      var tmp_5 = tmp_2;
      var argb = pixels[tmp_5];
      var tmp_6;
      if ((argb >>> 24 | 0) === 0) {
        tmp_6 = 0;
      } else {
        var cached = cache.get_wei43m_k$(argb);
        var tmp_7;
        if (!(cached == null)) {
          tmp_7 = toByte(cached);
        } else {
          var n = ClutProcessor_getInstance().nearestColorSortedIdx_uq7qrb_k$(argb, sortedColors, hasTransparent);
          // Inline function 'kotlin.collections.set' call
          cache.put_4fpzoq_k$(argb, n);
          tmp_7 = toByte(n);
        }
        tmp_6 = tmp_7;
      }
      tmp_4[tmp_5] = tmp_6;
      tmp_2 = tmp_2 + 1 | 0;
    }
    var indices = tmp_4;
    return new ClutImage(name, w, h, targetBpp, palette_0, sortedColors.length, indices);
  }
  function PaletteKey(palette, usedColors) {
    this.palette_1 = palette;
    this.usedColors_1 = usedColors;
    var tmp = this;
    // Inline function 'kotlin.run' call
    var h = this.usedColors_1;
    var inductionVariable = 0;
    var last = this.usedColors_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        h = imul(h, 31) + this.palette_1[i] | 0;
      }
       while (inductionVariable < last);
    tmp.hash_1 = h;
  }
  protoOf(PaletteKey).get_palette_by3him_k$ = function () {
    return this.palette_1;
  };
  protoOf(PaletteKey).get_usedColors_63vbpy_k$ = function () {
    return this.usedColors_1;
  };
  protoOf(PaletteKey).hashCode = function () {
    return this.hash_1;
  };
  protoOf(PaletteKey).equals = function (other) {
    if (!(other instanceof PaletteKey))
      return false;
    if (!(this.usedColors_1 === other.usedColors_1))
      return false;
    var inductionVariable = 0;
    var last = this.usedColors_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(this.palette_1[i] === other.palette_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  };
  function sortedUnion($this, a, aLen, b, bLen) {
    var result = new Int32Array(aLen + bLen | 0);
    var ai = 0;
    var bi = 0;
    var ri = 0;
    while (aLen > ai && bLen > bi) {
      // Inline function 'kotlin.toUInt' call
      var this_0 = a[ai];
      var av = _UInt___init__impl__l7qpdl(this_0);
      // Inline function 'kotlin.toUInt' call
      var this_1 = b[bi];
      var bv = _UInt___init__impl__l7qpdl(this_1);
      // Inline function 'kotlin.UInt.compareTo' call
      if (uintCompare(_UInt___get_data__impl__f0vqqw(bv), _UInt___get_data__impl__f0vqqw(av)) > 0) {
        var _unary__edvuaz = ri;
        ri = _unary__edvuaz + 1 | 0;
        var _unary__edvuaz_0 = ai;
        ai = _unary__edvuaz_0 + 1 | 0;
        result[_unary__edvuaz] = a[_unary__edvuaz_0];
      } else {
        // Inline function 'kotlin.UInt.compareTo' call
        if (uintCompare(_UInt___get_data__impl__f0vqqw(av), _UInt___get_data__impl__f0vqqw(bv)) > 0) {
          var _unary__edvuaz_1 = ri;
          ri = _unary__edvuaz_1 + 1 | 0;
          var _unary__edvuaz_2 = bi;
          bi = _unary__edvuaz_2 + 1 | 0;
          result[_unary__edvuaz_1] = b[_unary__edvuaz_2];
        } else {
          var _unary__edvuaz_3 = ri;
          ri = _unary__edvuaz_3 + 1 | 0;
          var _unary__edvuaz_4 = ai;
          ai = _unary__edvuaz_4 + 1 | 0;
          result[_unary__edvuaz_3] = a[_unary__edvuaz_4];
          bi = bi + 1 | 0;
        }
      }
    }
    while (aLen > ai) {
      var _unary__edvuaz_5 = ri;
      ri = _unary__edvuaz_5 + 1 | 0;
      var _unary__edvuaz_6 = ai;
      ai = _unary__edvuaz_6 + 1 | 0;
      result[_unary__edvuaz_5] = a[_unary__edvuaz_6];
    }
    while (bLen > bi) {
      var _unary__edvuaz_7 = ri;
      ri = _unary__edvuaz_7 + 1 | 0;
      var _unary__edvuaz_8 = bi;
      bi = _unary__edvuaz_8 + 1 | 0;
      result[_unary__edvuaz_7] = b[_unary__edvuaz_8];
    }
    return ri === result.length ? result : copyOf_0(result, ri);
  }
  function sortedUnionSize($this, a, aLen, b, bLen, limit) {
    var ai = 0;
    var bi = 0;
    var count = 0;
    while (aLen > ai && bLen > bi) {
      // Inline function 'kotlin.toUInt' call
      var this_0 = a[ai];
      var av = _UInt___init__impl__l7qpdl(this_0);
      // Inline function 'kotlin.toUInt' call
      var this_1 = b[bi];
      var bv = _UInt___init__impl__l7qpdl(this_1);
      count = count + 1 | 0;
      if (count > limit)
        return 2147483647;
      // Inline function 'kotlin.UInt.compareTo' call
      if (uintCompare(_UInt___get_data__impl__f0vqqw(bv), _UInt___get_data__impl__f0vqqw(av)) > 0) {
        ai = ai + 1 | 0;
      } else {
        // Inline function 'kotlin.UInt.compareTo' call
        if (uintCompare(_UInt___get_data__impl__f0vqqw(av), _UInt___get_data__impl__f0vqqw(bv)) > 0) {
          bi = bi + 1 | 0;
        } else {
          ai = ai + 1 | 0;
          bi = bi + 1 | 0;
        }
      }
    }
    count = count + ((aLen - ai | 0) + (bLen - bi | 0) | 0) | 0;
    return count > limit ? 2147483647 : count;
  }
  function sortUnsigned($this, arr, len) {
    var inductionVariable = 1;
    if (inductionVariable < len)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var key = arr[i];
        // Inline function 'kotlin.toUInt' call
        var ku = _UInt___init__impl__l7qpdl(key);
        var j = i - 1 | 0;
        $l$loop: while (true) {
          var tmp;
          if (j >= 0) {
            // Inline function 'kotlin.toUInt' call
            var this_0 = arr[j];
            // Inline function 'kotlin.UInt.compareTo' call
            var this_1 = _UInt___init__impl__l7qpdl(this_0);
            tmp = uintCompare(_UInt___get_data__impl__f0vqqw(this_1), _UInt___get_data__impl__f0vqqw(ku)) > 0;
          } else {
            tmp = false;
          }
          if (!tmp) {
            break $l$loop;
          }
          arr[j + 1 | 0] = arr[j];
          j = j - 1 | 0;
        }
        arr[j + 1 | 0] = key;
      }
       while (inductionVariable < len);
  }
  function remapIndices($this, img, newPalette, newUsedColors) {
    var oldPalette = img.palette_1;
    var oldUsed = img.usedColors_1;
    var tmp = 0;
    var tmp_0 = new Int32Array(oldUsed);
    while (tmp < oldUsed) {
      var tmp_1 = tmp;
      var color = oldPalette[tmp_1];
      var lo = 0;
      var hi = newUsedColors - 1 | 0;
      var found = tmp_1;
      // Inline function 'kotlin.toUInt' call
      var uv = _UInt___init__impl__l7qpdl(color);
      $l$loop: while (hi >= lo) {
        var mid = (lo + hi | 0) >>> 1 | 0;
        // Inline function 'kotlin.toUInt' call
        var this_0 = newPalette[mid];
        var mv = _UInt___init__impl__l7qpdl(this_0);
        // Inline function 'kotlin.UInt.compareTo' call
        if (uintCompare(_UInt___get_data__impl__f0vqqw(uv), _UInt___get_data__impl__f0vqqw(mv)) > 0)
          lo = mid + 1 | 0;
        else {
          // Inline function 'kotlin.UInt.compareTo' call
          if (uintCompare(_UInt___get_data__impl__f0vqqw(mv), _UInt___get_data__impl__f0vqqw(uv)) > 0)
            hi = mid - 1 | 0;
          else {
            found = mid;
            break $l$loop;
          }
        }
      }
      tmp_0[tmp_1] = found;
      tmp = tmp + 1 | 0;
    }
    var remapTable = tmp_0;
    var inductionVariable = 0;
    var last = img.indices_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var oldIdx = img.indices_1[i] & 255;
        if (oldUsed > oldIdx) {
          img.indices_1[i] = toByte(remapTable[oldIdx]);
        }
      }
       while (inductionVariable <= last);
    img.palette_1 = newPalette;
    img.usedColors_1 = newUsedColors;
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
  function sam$kotlin_Comparator$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
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
  protoOf(sam$kotlin_Comparator$0_1).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function ClutProcessor$buildDirectClut$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(a);
    var tmp = new UInt(tmp$ret$0);
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$2 = _UInt___init__impl__l7qpdl(b);
    var tmp$ret$3 = new UInt(tmp$ret$2);
    return compareValues(tmp, tmp$ret$3);
  }
  function ClutProcessor$buildQuantizedClut$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(a);
    var tmp = new UInt(tmp$ret$0);
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$2 = _UInt___init__impl__l7qpdl(b);
    var tmp$ret$3 = new UInt(tmp$ret$2);
    return compareValues(tmp, tmp$ret$3);
  }
  function ClutProcessor$mergeCluts$mergeByBpp$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.colorCount_1;
    var tmp$ret$1 = b.colorCount_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function ClutProcessor$mergeCluts$MergeableClut(id, bpp, colors, colorCount, imageNames, alive) {
    alive = alive === VOID ? true : alive;
    this.id_1 = id;
    this.bpp_1 = bpp;
    this.colors_1 = colors;
    this.colorCount_1 = colorCount;
    this.imageNames_1 = imageNames;
    this.alive_1 = alive;
  }
  protoOf(ClutProcessor$mergeCluts$MergeableClut).set_id_kpjn9s_k$ = function (_set____db54di) {
    this.id_1 = _set____db54di;
  };
  protoOf(ClutProcessor$mergeCluts$MergeableClut).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(ClutProcessor$mergeCluts$MergeableClut).get_bpp_18j8nb_k$ = function () {
    return this.bpp_1;
  };
  protoOf(ClutProcessor$mergeCluts$MergeableClut).set_colors_kv76j2_k$ = function (_set____db54di) {
    this.colors_1 = _set____db54di;
  };
  protoOf(ClutProcessor$mergeCluts$MergeableClut).get_colors_c05661_k$ = function () {
    return this.colors_1;
  };
  protoOf(ClutProcessor$mergeCluts$MergeableClut).set_colorCount_qlplvj_k$ = function (_set____db54di) {
    this.colorCount_1 = _set____db54di;
  };
  protoOf(ClutProcessor$mergeCluts$MergeableClut).get_colorCount_q44xh_k$ = function () {
    return this.colorCount_1;
  };
  protoOf(ClutProcessor$mergeCluts$MergeableClut).set_imageNames_jdc7d9_k$ = function (_set____db54di) {
    this.imageNames_1 = _set____db54di;
  };
  protoOf(ClutProcessor$mergeCluts$MergeableClut).get_imageNames_qq6rli_k$ = function () {
    return this.imageNames_1;
  };
  protoOf(ClutProcessor$mergeCluts$MergeableClut).set_alive_c8sjx7_k$ = function (_set____db54di) {
    this.alive_1 = _set____db54di;
  };
  protoOf(ClutProcessor$mergeCluts$MergeableClut).get_alive_iooomc_k$ = function () {
    return this.alive_1;
  };
  function mergeCluts$toSortedColors(colors) {
    var arr = toIntArray(colors);
    sortUnsigned(ClutProcessor_getInstance(), arr, arr.length);
    return arr;
  }
  function mergeCluts$mergeByBpp(imageByName, cluts, maxSlots) {
    var changed = true;
    while (changed) {
      changed = false;
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s = cluts.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element.alive_1) {
          destination.add_utx5q5_k$(element);
        }
      }
      // Inline function 'kotlin.collections.sortedBy' call
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = ClutProcessor$mergeCluts$mergeByBpp$lambda;
      var tmp$ret$3 = new sam$kotlin_Comparator$0_1(tmp);
      var aliveCluts = sortedWith(destination, tmp$ret$3);
      var inductionVariable = 0;
      var last = aliveCluts.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        $l$loop_0: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var clutA = aliveCluts.get_c1px32_k$(i);
          if (!clutA.alive_1)
            continue $l$loop_0;
          if (clutA.colorCount_1 >= maxSlots)
            continue $l$loop_0;
          var bestPartner = null;
          var bestUnionSize = 2147483647;
          var inductionVariable_0 = 0;
          var last_0 = aliveCluts.get_size_woubt6_k$() - 1 | 0;
          if (inductionVariable_0 <= last_0)
            $l$loop_3: do {
              var j = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (i === j)
                continue $l$loop_3;
              var clutB = aliveCluts.get_c1px32_k$(j);
              if (!clutB.alive_1)
                continue $l$loop_3;
              var tmp_0 = ClutProcessor_getInstance();
              var tmp_1 = clutA.colors_1;
              var tmp_2 = clutA.colorCount_1;
              var tmp_3 = clutB.colors_1;
              var tmp_4 = clutB.colorCount_1;
              // Inline function 'kotlin.comparisons.minOf' call
              var b = bestUnionSize - 1 | 0;
              var tmp$ret$5 = Math.min(maxSlots, b);
              var unionSize = sortedUnionSize(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp$ret$5);
              if (maxSlots >= unionSize && bestUnionSize > unionSize) {
                bestUnionSize = unionSize;
                bestPartner = clutB;
                var tmp0 = clutA.colorCount_1;
                // Inline function 'kotlin.comparisons.maxOf' call
                var b_0 = clutB.colorCount_1;
                if (unionSize === Math.max(tmp0, b_0))
                  break $l$loop_3;
              }
            }
             while (inductionVariable_0 <= last_0);
          if (!(bestPartner == null)) {
            var merged = sortedUnion(ClutProcessor_getInstance(), bestPartner.colors_1, bestPartner.colorCount_1, clutA.colors_1, clutA.colorCount_1);
            var newPalette = new Int32Array(maxSlots);
            // Inline function 'kotlin.collections.copyInto' call
            var endIndex = merged.length;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_5 = merged;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_5, newPalette, 0, 0, endIndex);
            var _iterator__ex2g4s_0 = plus(bestPartner.imageNames_1, clutA.imageNames_1).iterator_jk1svi_k$();
            $l$loop_4: while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
              var imgName = _iterator__ex2g4s_0.next_20eer_k$();
              var tmp0_elvis_lhs = imageByName.get_wei43m_k$(imgName);
              var tmp_6;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_4;
              } else {
                tmp_6 = tmp0_elvis_lhs;
              }
              var img = tmp_6;
              remapIndices(ClutProcessor_getInstance(), img, newPalette, merged.length);
            }
            bestPartner.colors_1 = merged;
            bestPartner.colorCount_1 = merged.length;
            bestPartner.imageNames_1.addAll_4lagoh_k$(clutA.imageNames_1);
            clutA.alive_1 = false;
            changed = true;
          }
        }
         while (inductionVariable <= last);
    }
  }
  function ClutProcessor() {
    ClutProcessor_instance = this;
    this.NEUQUANT_MINIMUM_1 = 1509;
  }
  protoOf(ClutProcessor).createClutImage_d4xog8_k$ = function (name, img, force4bpp) {
    var w = img.get_width_j0q4yl_k$();
    var h = img.get_height_e7t92o_k$();
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var pixels = img.get_pixels_i2my0m_k$().slice();
    var inductionVariable = 0;
    var last = pixels.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if ((pixels[i] >>> 24 | 0) === 0) {
          pixels[i] = 0;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.collections.mutableSetOf' call
    var uniqueColors = LinkedHashSet_init_$Create$();
    var inductionVariable_0 = 0;
    var last_0 = pixels.length;
    while (inductionVariable_0 < last_0) {
      var p = pixels[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      uniqueColors.add_utx5q5_k$(p);
    }
    if (force4bpp) {
      var tmp;
      if (16 >= uniqueColors.get_size_woubt6_k$()) {
        tmp = buildDirectClut(this, name, w, h, pixels, uniqueColors, 4);
      } else {
        tmp = buildQuantizedClut(this, name, w, h, pixels, uniqueColors, 4);
      }
      return tmp;
    }
    return 16 >= uniqueColors.get_size_woubt6_k$() ? buildDirectClut(this, name, w, h, pixels, uniqueColors, 4) : 256 >= uniqueColors.get_size_woubt6_k$() ? buildDirectClut(this, name, w, h, pixels, uniqueColors, 8) : buildQuantizedClut(this, name, w, h, pixels, uniqueColors, 8);
  };
  protoOf(ClutProcessor).nearestColorSortedIdx_uq7qrb_k$ = function (argb, sortedColors, hasTransparent) {
    var a = (argb >>> 24 | 0) & 255;
    var r = argb >> 16 & 255;
    var g = argb >> 8 & 255;
    var b = argb & 255;
    var start = hasTransparent ? 1 : 0;
    var bestIdx = start;
    var bestDist = 2147483647;
    var inductionVariable = start;
    var last = sortedColors.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c = sortedColors[i];
        var da = ((c >>> 24 | 0) & 255) - a | 0;
        var dr = (c >> 16 & 255) - r | 0;
        var dg = (c >> 8 & 255) - g | 0;
        var db = (c & 255) - b | 0;
        var d = ((imul(dr, dr) + imul(dg, dg) | 0) + imul(db, db) | 0) + imul(da, da) | 0;
        if (bestDist > d) {
          bestDist = d;
          bestIdx = i;
        }
      }
       while (inductionVariable < last);
    return bestIdx;
  };
  protoOf(ClutProcessor).getUsedColorSet_hj4my6_k$ = function (img) {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var colors = LinkedHashSet_init_$Create$();
    var inductionVariable = 0;
    var last = img.usedColors_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        colors.add_utx5q5_k$(img.palette_1[i]);
      }
       while (inductionVariable < last);
    return colors;
  };
  protoOf(ClutProcessor).deduplicateCluts_jlxaxr_k$ = function (images) {
    var groups = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = images.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var img = _iterator__ex2g4s.next_20eer_k$();
      var key = new PaletteKey(img.palette_1, img.usedColors_1);
      // Inline function 'kotlin.collections.getOrPut' call
      var value = groups.get_wei43m_k$(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$_0();
        groups.put_4fpzoq_k$(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      tmp.add_utx5q5_k$(img);
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var clutGroups = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = groups.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      // Inline function 'kotlin.collections.component2' call
      var groupImages = _iterator__ex2g4s_0.next_20eer_k$().get_value_j01efc_k$();
      var representative = groupImages.get_c1px32_k$(0);
      var tmp_0 = clutGroups.get_size_woubt6_k$();
      var tmp_1 = representative.bpp_1;
      var tmp_2 = this.getUsedColorSet_hj4my6_k$(representative);
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = representative.palette_1.slice();
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(groupImages, 10));
      var _iterator__ex2g4s_1 = groupImages.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s_1.next_20eer_k$();
        var tmp$ret$8 = item.name_1;
        destination.add_utx5q5_k$(tmp$ret$8);
      }
      var group = new ClutGroup(tmp_0, tmp_1, tmp_2, tmp_3, toMutableList(destination));
      var _iterator__ex2g4s_2 = groupImages.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
        var img_0 = _iterator__ex2g4s_2.next_20eer_k$();
        img_0.palette_1 = group.palette_1;
      }
      clutGroups.add_utx5q5_k$(group);
    }
    return clutGroups;
  };
  protoOf(ClutProcessor).mergeCluts_yxhoy5_k$ = function (images, initialGroups) {
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(images, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = images.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = element.name_1;
      destination.put_4fpzoq_k$(tmp$ret$0, element);
    }
    var imageByName = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = initialGroups.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      if (element_0.bpp_1 === 4) {
        destination_0.add_utx5q5_k$(element_0);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_0, 10));
    var _iterator__ex2g4s_1 = destination_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s_1.next_20eer_k$();
      var tmp$ret$6 = new ClutProcessor$mergeCluts$MergeableClut(item.id_1, item.bpp_1, mergeCluts$toSortedColors(item.colors_1), item.colors_1.get_size_woubt6_k$(), toMutableList(item.imageNames_1));
      destination_1.add_utx5q5_k$(tmp$ret$6);
    }
    var groups4 = destination_1;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_2 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_2 = initialGroups.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
      var element_1 = _iterator__ex2g4s_2.next_20eer_k$();
      if (element_1.bpp_1 === 8) {
        destination_2.add_utx5q5_k$(element_1);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_2, 10));
    var _iterator__ex2g4s_3 = destination_2.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
      var item_0 = _iterator__ex2g4s_3.next_20eer_k$();
      var tmp$ret$12 = new ClutProcessor$mergeCluts$MergeableClut(item_0.id_1, item_0.bpp_1, mergeCluts$toSortedColors(item_0.colors_1), item_0.colors_1.get_size_woubt6_k$(), toMutableList(item_0.imageNames_1));
      destination_3.add_utx5q5_k$(tmp$ret$12);
    }
    var groups8 = destination_3;
    mergeCluts$mergeByBpp(imageByName, groups4, 16);
    mergeCluts$mergeByBpp(imageByName, groups8, 256);
    // Inline function 'kotlin.collections.mutableListOf' call
    var finalGroups = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_4 = plus(groups4, groups8).iterator_jk1svi_k$();
    $l$loop: while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
      var clut = _iterator__ex2g4s_4.next_20eer_k$();
      if (!clut.alive_1)
        continue $l$loop;
      var palette = new Int32Array(clut.bpp_1 === 4 ? 16 : 256);
      var tmp0 = clut.colors_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = clut.colorCount_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, palette, 0, 0, endIndex);
      finalGroups.add_utx5q5_k$(new ClutGroup(finalGroups.get_size_woubt6_k$(), clut.bpp_1, toSet(take(clut.colors_1, clut.colorCount_1)), palette, clut.imageNames_1));
    }
    return finalGroups;
  };
  protoOf(ClutProcessor).renderClutImage_jrey9z_k$ = function (img) {
    var pixels = new Int32Array(imul(img.width_1, img.height_1));
    var inductionVariable = 0;
    var last = pixels.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var idx = img.indices_1[i] & 255;
        pixels[i] = img.palette_1[idx];
      }
       while (inductionVariable <= last);
    return new PixelImage(img.width_1, img.height_1, pixels);
  };
  var ClutProcessor_instance;
  function ClutProcessor_getInstance() {
    if (ClutProcessor_instance == null)
      new ClutProcessor();
    return ClutProcessor_instance;
  }
  function ClutGroup(id, bpp, colors, palette, imageNames) {
    this.id_1 = id;
    this.bpp_1 = bpp;
    this.colors_1 = colors;
    this.palette_1 = palette;
    this.imageNames_1 = imageNames;
  }
  protoOf(ClutGroup).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(ClutGroup).get_bpp_18j8nb_k$ = function () {
    return this.bpp_1;
  };
  protoOf(ClutGroup).get_colors_c05661_k$ = function () {
    return this.colors_1;
  };
  protoOf(ClutGroup).get_palette_by3him_k$ = function () {
    return this.palette_1;
  };
  protoOf(ClutGroup).get_imageNames_qq6rli_k$ = function () {
    return this.imageNames_1;
  };
  function readEventActions($this, reader) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    // Inline function 'kotlin.collections.isEmpty' call
    if (ptrs.length === 0)
      return emptyList();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      // Inline function 'kotlin.apply' call
      var this_0 = new EventAction();
      this_0.libID_1 = reader.readInt32_ir40a0_k$();
      this_0.id_1 = reader.readInt32_ir40a0_k$();
      this_0.kind_1 = reader.readInt32_ir40a0_k$();
      this_0.useRelative_1 = reader.readBool32_geddkx_k$();
      this_0.isQuestion_1 = reader.readBool32_geddkx_k$();
      this_0.useApplyTo_1 = reader.readBool32_geddkx_k$();
      this_0.exeType_1 = reader.readInt32_ir40a0_k$();
      this_0.actionName_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.codeId_1 = reader.readInt32_ir40a0_k$();
      this_0.argumentCount_1 = reader.readInt32_ir40a0_k$();
      this_0.who_1 = reader.readInt32_ir40a0_k$();
      this_0.relative_1 = reader.readBool32_geddkx_k$();
      this_0.isNot_1 = reader.readBool32_geddkx_k$();
      this_0.unknownAlwaysZero_1 = reader.readInt32_ir40a0_k$();
      destination.add_utx5q5_k$(this_0);
    }
    return destination;
  }
  function parseGEN8($this, reader, dw) {
    var g = dw.gen8__1;
    g.isDebuggerDisabled_1 = reader.readUint8_iklqzc_k$();
    g.bytecodeVersion_1 = reader.readUint8_iklqzc_k$();
    reader.skip_tkj2uh_k$(2);
    g.fileName_1 = reader.readStringPtr_yp6n6h_k$();
    g.config_1 = reader.readStringPtr_yp6n6h_k$();
    g.lastObj_1 = reader.readInt32_ir40a0_k$();
    g.lastTile_1 = reader.readInt32_ir40a0_k$();
    g.gameID_1 = reader.readInt32_ir40a0_k$();
    g.directPlayGuid_1 = reader.readBytes_do0jwd_k$(16);
    g.name_1 = reader.readStringPtr_yp6n6h_k$();
    g.major_1 = reader.readInt32_ir40a0_k$();
    g.minor_1 = reader.readInt32_ir40a0_k$();
    g.release_1 = reader.readInt32_ir40a0_k$();
    g.build_1 = reader.readInt32_ir40a0_k$();
    g.defaultWindowWidth_1 = reader.readInt32_ir40a0_k$();
    g.defaultWindowHeight_1 = reader.readInt32_ir40a0_k$();
    g.info_1 = reader.readInt32_ir40a0_k$();
    g.licenseCRC32__1 = reader.readInt32_ir40a0_k$();
    g.licenseMD5__1 = reader.readBytes_do0jwd_k$(16);
    g.timestamp_1 = reader.readLong_ecnd8u_k$();
    g.displayName_1 = reader.readStringPtr_yp6n6h_k$();
    g.activeTargets_1 = reader.readLong_ecnd8u_k$();
    g.functionClassifications_1 = reader.readLong_ecnd8u_k$();
    g.steamAppID_1 = reader.readInt32_ir40a0_k$();
    if (g.bytecodeVersion_1 >= 14) {
      g.debuggerPort_1 = reader.readInt32_ir40a0_k$();
    }
    var roomOrderCount = reader.readInt32_ir40a0_k$();
    var tmp = g;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(roomOrderCount);
    while (tmp_0 < roomOrderCount) {
      tmp_1[tmp_0] = reader.readInt32_ir40a0_k$();
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.roomOrder_1 = tmp_1;
    if (g.major_1 >= 2) {
      reader.skip_tkj2uh_k$(8);
      reader.skip_tkj2uh_k$(32);
      g.gms2FPS_1 = reader.readFloat32_owjs1n_k$();
      reader.skip_tkj2uh_k$(4);
      reader.skip_tkj2uh_k$(16);
    }
    dw.bumpVersionTo_z9pmr7_k$(g.major_1, g.minor_1, g.release_1, g.build_1);
  }
  function parseOPTN($this, reader, dw) {
    var o = dw.optn_1;
    var marker = reader.readInt32_ir40a0_k$();
    var newFormat = marker === -2147483648;
    if (newFormat) {
      reader.readInt32_ir40a0_k$();
      o.info_1 = reader.readLong_ecnd8u_k$();
      o.scale_1 = reader.readInt32_ir40a0_k$();
      o.windowColor_1 = reader.readInt32_ir40a0_k$();
      o.colorDepth_1 = reader.readInt32_ir40a0_k$();
      o.resolution_1 = reader.readInt32_ir40a0_k$();
      o.frequency_1 = reader.readInt32_ir40a0_k$();
      o.vertexSync_1 = reader.readInt32_ir40a0_k$();
      o.priority_1 = reader.readInt32_ir40a0_k$();
      o.backImage_1 = reader.readInt32_ir40a0_k$();
      o.frontImage_1 = reader.readInt32_ir40a0_k$();
      o.loadImage_1 = reader.readInt32_ir40a0_k$();
      o.loadAlpha_1 = reader.readInt32_ir40a0_k$();
    } else {
      reader.set_position_h4ktwi_k$(reader.get_position_jfponi_k$() - 4 | 0);
      o.info_1 = new Long(0, 0);
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(1, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(2, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(4, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(8, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(16, 0));
      o.scale_1 = reader.readInt32_ir40a0_k$();
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(32, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(64, 0));
      o.windowColor_1 = reader.readInt32_ir40a0_k$();
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(128, 0));
      o.colorDepth_1 = reader.readInt32_ir40a0_k$();
      o.resolution_1 = reader.readInt32_ir40a0_k$();
      o.frequency_1 = reader.readInt32_ir40a0_k$();
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(256, 0));
      o.vertexSync_1 = reader.readInt32_ir40a0_k$();
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(512, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(1024, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(2048, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(4096, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(8192, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(16384, 0));
      o.priority_1 = reader.readInt32_ir40a0_k$();
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(32768, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(65536, 0));
      o.backImage_1 = reader.readInt32_ir40a0_k$();
      o.frontImage_1 = reader.readInt32_ir40a0_k$();
      o.loadImage_1 = reader.readInt32_ir40a0_k$();
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(131072, 0));
      o.loadAlpha_1 = reader.readInt32_ir40a0_k$();
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(262144, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(524288, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(1048576, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(2097152, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(4194304, 0));
      if (reader.readBool32_geddkx_k$())
        o.info_1 = bitwiseOr(o.info_1, new Long(8388608, 0));
    }
    var constantCount = reader.readInt32_ir40a0_k$();
    var tmp = o;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(constantCount);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < constantCount)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0 = new OptnConstant(reader.readStringPtr_yp6n6h_k$(), reader.readStringPtr_yp6n6h_k$());
        list.add_utx5q5_k$(tmp$ret$0);
      }
       while (inductionVariable < constantCount);
    tmp.constants_1 = list;
  }
  function parseLANG($this, reader, dw) {
    var l = dw.lang_1;
    l.unknown1__1 = reader.readInt32_ir40a0_k$();
    var languageCount = reader.readInt32_ir40a0_k$();
    var entryCount = reader.readInt32_ir40a0_k$();
    var tmp = l;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(entryCount);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < entryCount)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0 = reader.readStringPtr_yp6n6h_k$();
        list.add_utx5q5_k$(tmp$ret$0);
      }
       while (inductionVariable < entryCount);
    tmp.entryIds_1 = list;
    var tmp_0 = l;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var list_0 = ArrayList_init_$Create$(languageCount);
    // Inline function 'kotlin.repeat' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < languageCount)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var name = reader.readStringPtr_yp6n6h_k$();
        var region = reader.readStringPtr_yp6n6h_k$();
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var list_1 = ArrayList_init_$Create$(entryCount);
        // Inline function 'kotlin.repeat' call
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < entryCount)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var tmp$ret$5 = reader.readStringPtr_yp6n6h_k$();
            list_1.add_utx5q5_k$(tmp$ret$5);
          }
           while (inductionVariable_1 < entryCount);
        var tmp$ret$10 = new Language(name, region, list_1);
        list_0.add_utx5q5_k$(tmp$ret$10);
      }
       while (inductionVariable_0 < languageCount);
    tmp_0.languages_1 = list_0;
  }
  function parseEXTN($this, reader, dw) {
    var extPtrs = reader.readPointerTable_gyrryf_k$();
    var tmp = dw.extn_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(extPtrs.length);
    var inductionVariable = 0;
    var last = extPtrs.length;
    while (inductionVariable < last) {
      var item = extPtrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      var folderName = reader.readStringPtr_yp6n6h_k$();
      var name = reader.readStringPtr_yp6n6h_k$();
      var className = reader.readStringPtr_yp6n6h_k$();
      var filePtrs = reader.readPointerTable_gyrryf_k$();
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(filePtrs.length);
      var inductionVariable_0 = 0;
      var last_0 = filePtrs.length;
      while (inductionVariable_0 < last_0) {
        var item_0 = filePtrs[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        reader.set_position_h4ktwi_k$(item_0);
        var filename = reader.readStringPtr_yp6n6h_k$();
        var cleanupScript = reader.readStringPtr_yp6n6h_k$();
        var initScript = reader.readStringPtr_yp6n6h_k$();
        var kind = reader.readInt32_ir40a0_k$();
        var funcPtrs = reader.readPointerTable_gyrryf_k$();
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_1 = ArrayList_init_$Create$(funcPtrs.length);
        var inductionVariable_1 = 0;
        var last_1 = funcPtrs.length;
        while (inductionVariable_1 < last_1) {
          var item_1 = funcPtrs[inductionVariable_1];
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          reader.set_position_h4ktwi_k$(item_1);
          var fName = reader.readStringPtr_yp6n6h_k$();
          var id = reader.readInt32_ir40a0_k$();
          var fKind = reader.readInt32_ir40a0_k$();
          var retType = reader.readInt32_ir40a0_k$();
          var extName = reader.readStringPtr_yp6n6h_k$();
          var argCount = reader.readInt32_ir40a0_k$();
          var tmp_0 = 0;
          var tmp_1 = new Int32Array(argCount);
          while (tmp_0 < argCount) {
            tmp_1[tmp_0] = reader.readInt32_ir40a0_k$();
            tmp_0 = tmp_0 + 1 | 0;
          }
          var arguments_0 = tmp_1;
          var tmp$ret$1 = new ExtensionFunction(fName, id, fKind, retType, extName, arguments_0);
          destination_1.add_utx5q5_k$(tmp$ret$1);
        }
        var functions = destination_1;
        var tmp$ret$4 = new ExtensionFile(filename, cleanupScript, initScript, kind, functions);
        destination_0.add_utx5q5_k$(tmp$ret$4);
      }
      var files = destination_0;
      var tmp$ret$7 = new Extension(folderName, name, className, files);
      destination.add_utx5q5_k$(tmp$ret$7);
    }
    tmp.extensions_1 = destination;
  }
  function parseSOND($this, reader, dw) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    var tmp = dw.sond_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      var name = reader.readStringPtr_yp6n6h_k$();
      var flags = reader.readInt32_ir40a0_k$();
      var type = reader.readStringPtr_yp6n6h_k$();
      var file = reader.readStringPtr_yp6n6h_k$();
      var effects = reader.readInt32_ir40a0_k$();
      var volume = reader.readFloat32_owjs1n_k$();
      var pitch = reader.readFloat32_owjs1n_k$();
      var tmp_0;
      if ((flags & 100) === 100) {
        tmp_0 = reader.readInt32_ir40a0_k$();
      } else {
        reader.readInt32_ir40a0_k$();
        tmp_0 = 0;
      }
      var audioGroup = tmp_0;
      var audioFile = reader.readInt32_ir40a0_k$();
      var tmp$ret$0 = new Sound(name, flags, type, file, effects, volume, pitch, audioGroup, audioFile);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.sounds_1 = destination;
  }
  function parseAGRP($this, reader, dw) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    var tmp = dw.agrp_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      var tmp$ret$0 = reader.readStringPtr_yp6n6h_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.audioGroups_1 = destination;
  }
  function parseSPRT($this, reader, dw, skipNonPrecise) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    var tmp = dw.sprt_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      // Inline function 'kotlin.apply' call
      var this_0 = new Sprite();
      this_0.name_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.width_1 = reader.readInt32_ir40a0_k$();
      this_0.height_1 = reader.readInt32_ir40a0_k$();
      this_0.marginLeft_1 = reader.readInt32_ir40a0_k$();
      this_0.marginRight_1 = reader.readInt32_ir40a0_k$();
      this_0.marginBottom_1 = reader.readInt32_ir40a0_k$();
      this_0.marginTop_1 = reader.readInt32_ir40a0_k$();
      this_0.transparent_1 = reader.readBool32_geddkx_k$();
      this_0.smooth_1 = reader.readBool32_geddkx_k$();
      this_0.preload_1 = reader.readBool32_geddkx_k$();
      this_0.bboxMode_1 = reader.readInt32_ir40a0_k$();
      this_0.sepMasks_1 = reader.readInt32_ir40a0_k$();
      this_0.originX_1 = reader.readInt32_ir40a0_k$();
      this_0.originY_1 = reader.readInt32_ir40a0_k$();
      var textureCount = reader.readInt32_ir40a0_k$();
      if (textureCount === -1) {
        this_0.specialType_1 = true;
        this_0.sVersion_1 = reader.readInt32_ir40a0_k$();
        this_0.sSpriteType_1 = reader.readInt32_ir40a0_k$();
        if (dw.isVersionAtLeast_s3r2dk_k$(2, 0, 0, 0)) {
          this_0.gms2PlaybackSpeed_1 = reader.readFloat32_owjs1n_k$();
          this_0.gms2PlaybackSpeedType_1 = reader.readBool32_geddkx_k$();
          if (this_0.sVersion_1 >= 2) {
            reader.skip_tkj2uh_k$(4);
            if (this_0.sVersion_1 >= 3) {
              reader.skip_tkj2uh_k$(4);
            }
          }
          textureCount = reader.readInt32_ir40a0_k$();
        }
      }
      var tmp_0 = this_0;
      var tmp_1 = 0;
      var tmp_2 = textureCount;
      var tmp_3 = new Int32Array(tmp_2);
      while (tmp_1 < tmp_2) {
        tmp_3[tmp_1] = reader.readInt32_ir40a0_k$();
        tmp_1 = tmp_1 + 1 | 0;
      }
      tmp_0.textureOffsets_1 = tmp_3;
      var maskDataCount = reader.readInt32_ir40a0_k$();
      if (maskDataCount > 0 && this_0.width_1 > 0 && this_0.height_1 > 0) {
        var bytesPerRow = (this_0.width_1 + 7 | 0) / 8 | 0;
        var bytesPerMask = imul(bytesPerRow, this_0.height_1);
        if (this_0.sepMasks_1 === 1 || !skipNonPrecise) {
          var tmp_4 = this_0;
          // Inline function 'kotlin.collections.List' call
          // Inline function 'kotlin.collections.MutableList' call
          var list = ArrayList_init_$Create$(maskDataCount);
          // Inline function 'kotlin.repeat' call
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < maskDataCount)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var tmp$ret$1 = reader.readBytes_do0jwd_k$(bytesPerMask);
              list.add_utx5q5_k$(tmp$ret$1);
            }
             while (inductionVariable_0 < maskDataCount);
          tmp_4.masks_1 = list;
        } else {
          reader.skip_tkj2uh_k$(imul(bytesPerMask, maskDataCount));
        }
        var totalMaskBytes = imul(bytesPerMask, maskDataCount);
        var remainder = totalMaskBytes % 4 | 0;
        if (!(remainder === 0)) {
          reader.skip_tkj2uh_k$(4 - remainder | 0);
        }
      }
      destination.add_utx5q5_k$(this_0);
    }
    tmp.sprites_1 = destination;
    var inductionVariable_1 = 0;
    var last_0 = ptrs.length - 1 | 0;
    if (inductionVariable_1 <= last_0)
      do {
        var i = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var tmp0 = dw.sprtOffsetMap_1;
        // Inline function 'kotlin.collections.set' call
        var key = ptrs[i];
        tmp0.put_4fpzoq_k$(key, i);
      }
       while (inductionVariable_1 <= last_0);
  }
  function parseBGND($this, reader, dw) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    var tmp = dw.bgnd_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      // Inline function 'kotlin.apply' call
      var this_0 = new Background();
      this_0.name_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.transparent_1 = reader.readBool32_geddkx_k$();
      this_0.smooth_1 = reader.readBool32_geddkx_k$();
      this_0.preload_1 = reader.readBool32_geddkx_k$();
      this_0.textureOffset_1 = reader.readInt32_ir40a0_k$();
      if (dw.isVersionAtLeast_s3r2dk_k$(2, 0, 0, 0)) {
        this_0.gms2UnknownAlways2__1 = reader.readInt32_ir40a0_k$();
        this_0.gms2TileWidth_1 = reader.readInt32_ir40a0_k$();
        this_0.gms2TileHeight_1 = reader.readInt32_ir40a0_k$();
        if (dw.isVersionAtLeast_s3r2dk_k$(2024, 14, 0, 1)) {
          this_0.gms2TileSeparationX_1 = reader.readInt32_ir40a0_k$();
          this_0.gms2TileSeparationY_1 = reader.readInt32_ir40a0_k$();
        }
        this_0.gms2OutputBorderX_1 = reader.readInt32_ir40a0_k$();
        this_0.gms2OutputBorderY_1 = reader.readInt32_ir40a0_k$();
        this_0.gms2TileColumns_1 = reader.readInt32_ir40a0_k$();
        this_0.gms2ItemsPerTileCount_1 = reader.readInt32_ir40a0_k$();
        this_0.gms2TileCount_1 = reader.readInt32_ir40a0_k$();
        this_0.gms2ExportedSpriteIndex_1 = reader.readInt32_ir40a0_k$();
        this_0.gms2FrameLength_1 = reader.readLong_ecnd8u_k$();
        var tileIdCount = imul(this_0.gms2TileCount_1, this_0.gms2ItemsPerTileCount_1);
        var tmp_0 = this_0;
        var tmp_1 = 0;
        var tmp_2 = new Int32Array(tileIdCount);
        while (tmp_1 < tileIdCount) {
          tmp_2[tmp_1] = reader.readInt32_ir40a0_k$();
          tmp_1 = tmp_1 + 1 | 0;
        }
        tmp_0.gms2TileIds_1 = tmp_2;
      }
      destination.add_utx5q5_k$(this_0);
    }
    tmp.backgrounds_1 = destination;
  }
  function parsePATH($this, reader, dw) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    var tmp = dw.path_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      // Inline function 'kotlin.apply' call
      var this_0 = new GamePath();
      this_0.name_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.isSmooth_1 = reader.readBool32_geddkx_k$();
      this_0.isClosed_1 = reader.readBool32_geddkx_k$();
      this_0.precision_1 = reader.readInt32_ir40a0_k$();
      var pointCount = reader.readInt32_ir40a0_k$();
      var tmp_0 = this_0;
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$(pointCount);
      // Inline function 'kotlin.repeat' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < pointCount)
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp$ret$0 = new PathPoint(reader.readFloat32_owjs1n_k$(), reader.readFloat32_owjs1n_k$(), reader.readFloat32_owjs1n_k$());
          list.add_utx5q5_k$(tmp$ret$0);
        }
         while (inductionVariable_0 < pointCount);
      tmp_0.points_1 = list;
      this_0.computeInternal_dwr264_k$();
      destination.add_utx5q5_k$(this_0);
    }
    tmp.paths_1 = destination;
  }
  function parseSCPT($this, reader, dw) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    var tmp = dw.scpt_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      var tmp$ret$0 = new Script(reader.readStringPtr_yp6n6h_k$(), reader.readInt32_ir40a0_k$());
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.scripts_1 = destination;
  }
  function parseGLOB($this, reader, dw) {
    var count = reader.readInt32_ir40a0_k$();
    var tmp = dw.glob_1;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(count);
    while (tmp_0 < count) {
      tmp_1[tmp_0] = reader.readInt32_ir40a0_k$();
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.codeIds_1 = tmp_1;
  }
  function parseSHDR($this, reader, dw) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    var tmp = dw.shdr_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      // Inline function 'kotlin.apply' call
      var this_0 = new Shader();
      this_0.name_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.type_1 = reader.readInt32_ir40a0_k$() & 2147483647;
      this_0.glslES_Vertex_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.glslES_Fragment_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.glsl_Vertex_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.glsl_Fragment_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.hlsl9_Vertex_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.hlsl9_Fragment_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.hlsl11_VertexOffset_1 = reader.readInt32_ir40a0_k$();
      this_0.hlsl11_PixelOffset_1 = reader.readInt32_ir40a0_k$();
      var attrCount = reader.readInt32_ir40a0_k$();
      var tmp_0 = this_0;
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$(attrCount);
      // Inline function 'kotlin.repeat' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < attrCount)
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp$ret$0 = reader.readStringPtr_yp6n6h_k$();
          list.add_utx5q5_k$(tmp$ret$0);
        }
         while (inductionVariable_0 < attrCount);
      tmp_0.vertexAttributes_1 = list;
      if (dw.gen8__1.bytecodeVersion_1 > 13) {
        this_0.version_1 = reader.readInt32_ir40a0_k$();
        this_0.pssl_VertexOffset_1 = reader.readInt32_ir40a0_k$();
        this_0.pssl_VertexLen_1 = reader.readInt32_ir40a0_k$();
        this_0.pssl_PixelOffset_1 = reader.readInt32_ir40a0_k$();
        this_0.pssl_PixelLen_1 = reader.readInt32_ir40a0_k$();
        this_0.cgVita_VertexOffset_1 = reader.readInt32_ir40a0_k$();
        this_0.cgVita_VertexLen_1 = reader.readInt32_ir40a0_k$();
        this_0.cgVita_PixelOffset_1 = reader.readInt32_ir40a0_k$();
        this_0.cgVita_PixelLen_1 = reader.readInt32_ir40a0_k$();
        if (this_0.version_1 >= 2) {
          this_0.cgPS3_VertexOffset_1 = reader.readInt32_ir40a0_k$();
          this_0.cgPS3_VertexLen_1 = reader.readInt32_ir40a0_k$();
          this_0.cgPS3_PixelOffset_1 = reader.readInt32_ir40a0_k$();
          this_0.cgPS3_PixelLen_1 = reader.readInt32_ir40a0_k$();
        }
      }
      destination.add_utx5q5_k$(this_0);
    }
    tmp.shaders_1 = destination;
  }
  function parseFONT($this, reader, dw) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    // Inline function 'kotlin.collections.isEmpty' call
    if (ptrs.length === 0)
      return Unit_getInstance();
    var fontOptionalCount = dw.gen8__1.bytecodeVersion_1 >= 17 ? 1 : 0;
    // Inline function 'kotlin.run' call
    var baseAfterScaleY = ptrs[0] + 40 | 0;
    var trial = fontOptionalCount;
    $l$loop_0: while (4 >= trial) {
      var listStart = baseAfterScaleY + imul(4, trial) | 0;
      reader.set_position_h4ktwi_k$(listStart);
      var probedGlyphCount = reader.readInt32_ir40a0_k$();
      if (probedGlyphCount === 0 || probedGlyphCount > 65536) {
        trial = trial + 1 | 0;
        continue $l$loop_0;
      }
      var probedFirstPtr = reader.readInt32_ir40a0_k$();
      var expectedFirstPtr = (listStart + 4 | 0) + imul(4, probedGlyphCount) | 0;
      if (probedFirstPtr === expectedFirstPtr) {
        fontOptionalCount = trial;
        break $l$loop_0;
      }
      trial = trial + 1 | 0;
    }
    var tmp = dw.font_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      // Inline function 'kotlin.apply' call
      var this_0 = new Font();
      this_0.name_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.displayName_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.emSize_1 = reader.readInt32_ir40a0_k$();
      this_0.bold_1 = reader.readBool32_geddkx_k$();
      this_0.italic_1 = reader.readBool32_geddkx_k$();
      this_0.rangeStart_1 = reader.readUint16_7htsqz_k$();
      this_0.charset_1 = reader.readUint8_iklqzc_k$();
      this_0.antiAliasing_1 = reader.readUint8_iklqzc_k$();
      this_0.rangeEnd_1 = reader.readInt32_ir40a0_k$();
      this_0.textureOffset_1 = reader.readInt32_ir40a0_k$();
      this_0.scaleX_1 = reader.readFloat32_owjs1n_k$();
      this_0.scaleY_1 = reader.readFloat32_owjs1n_k$();
      var readSoFar = 0;
      if (dw.gen8__1.bytecodeVersion_1 >= 17 && fontOptionalCount > readSoFar) {
        this_0.ascenderOffset_1 = reader.readInt32_ir40a0_k$();
        readSoFar = readSoFar + 1 | 0;
      }
      if (fontOptionalCount > readSoFar) {
        this_0.ascender_1 = reader.readInt32_ir40a0_k$();
        this_0.hasAscender_1 = true;
        readSoFar = readSoFar + 1 | 0;
      }
      if (fontOptionalCount > readSoFar) {
        this_0.sdfSpread_1 = reader.readInt32_ir40a0_k$();
        this_0.hasSDFSpread_1 = true;
        readSoFar = readSoFar + 1 | 0;
      }
      if (fontOptionalCount > readSoFar) {
        this_0.lineHeight_1 = reader.readInt32_ir40a0_k$();
        this_0.hasLineHeight_1 = true;
        readSoFar = readSoFar + 1 | 0;
      }
      var glyphPtrs = reader.readPointerTable_gyrryf_k$();
      var maxH = 0;
      var tmp_0 = this_0;
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(glyphPtrs.length);
      var inductionVariable_0 = 0;
      var last_0 = glyphPtrs.length;
      while (inductionVariable_0 < last_0) {
        var item_0 = glyphPtrs[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        reader.set_position_h4ktwi_k$(item_0);
        // Inline function 'kotlin.apply' call
        var this_1 = new FontGlyph();
        this_1.character_1 = reader.readUint16_7htsqz_k$();
        this_1.sourceX_1 = reader.readUint16_7htsqz_k$();
        this_1.sourceY_1 = reader.readUint16_7htsqz_k$();
        this_1.sourceWidth_1 = reader.readUint16_7htsqz_k$();
        this_1.sourceHeight_1 = reader.readUint16_7htsqz_k$();
        this_1.shift_1 = reader.readInt16_ir40bm_k$();
        this_1.offset_1 = reader.readInt16_ir40bm_k$();
        if (this_1.sourceHeight_1 > maxH)
          maxH = this_1.sourceHeight_1;
        var kerningCount = reader.readUint16_7htsqz_k$();
        var tmp_1 = this_1;
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var list = ArrayList_init_$Create$(kerningCount);
        // Inline function 'kotlin.repeat' call
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < kerningCount)
          do {
            var index = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var tmp$ret$3 = new KerningPair(reader.readInt16_ir40bm_k$(), reader.readInt16_ir40bm_k$());
            list.add_utx5q5_k$(tmp$ret$3);
          }
           while (inductionVariable_1 < kerningCount);
        tmp_1.kerning_1 = list;
        destination_0.add_utx5q5_k$(this_1);
      }
      tmp_0.glyphs_1 = destination_0;
      this_0.maxGlyphHeight_1 = maxH;
      destination.add_utx5q5_k$(this_0);
    }
    tmp.fonts_1 = destination;
  }
  function parseTMLN($this, reader, dw) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    var tmp = dw.tmln_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      var name = reader.readStringPtr_yp6n6h_k$();
      var momentCount = reader.readInt32_ir40a0_k$();
      var tmp_0;
      if (momentCount > 0) {
        var tmp_1 = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_2 = Array(momentCount);
        while (tmp_1 < momentCount) {
          tmp_2[tmp_1] = new Pair(reader.readInt32_ir40a0_k$(), reader.readInt32_ir40a0_k$());
          tmp_1 = tmp_1 + 1 | 0;
        }
        var moments = tmp_2;
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(moments.length);
        var inductionVariable_0 = 0;
        var last_0 = moments.length;
        while (inductionVariable_0 < last_0) {
          var item_0 = moments[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var step = item_0.component1_7eebsc_k$();
          var eventPtr = item_0.component2_7eebsb_k$();
          reader.set_position_h4ktwi_k$(eventPtr);
          var tmp$ret$2 = new TimelineMoment(step, readEventActions(Companion_getInstance(), reader));
          destination_0.add_utx5q5_k$(tmp$ret$2);
        }
        tmp_0 = new Timeline(name, destination_0);
      } else {
        tmp_0 = new Timeline(name, emptyList());
      }
      var tmp$ret$5 = tmp_0;
      destination.add_utx5q5_k$(tmp$ret$5);
    }
    tmp.timelines_1 = destination;
  }
  function parseOBJT($this, reader, dw) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(ptrs.length === 0)) {
      tmp_0 = dw.isVersionAtLeast_s3r2dk_k$(2, 3, 0, 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !dw.isVersionAtLeast_s3r2dk_k$(2022, 5, 0, 0);
    } else {
      tmp = false;
    }
    if (tmp) {
      reader.set_position_h4ktwi_k$(ptrs[0] + 64 | 0);
      var vertexCount = reader.readInt32_ir40a0_k$();
      if (vertexCount >= 0) {
        reader.skip_tkj2uh_k$(12 + imul(vertexCount, 8) | 0);
        var eventTypeCount = reader.readInt32_ir40a0_k$();
        var isOldFormat = false;
        if (eventTypeCount === 15) {
          var firstSubEventPtr = reader.readInt32_ir40a0_k$();
          var currentAbsPos = reader.get_position_jfponi_k$();
          if (firstSubEventPtr === (currentAbsPos + 56 | 0)) {
            isOldFormat = true;
          }
        }
        if (!isOldFormat) {
          dw.bumpVersionTo_z9pmr7_k$(2022, 5, 0, 0);
        }
      }
    }
    var tmp_1 = dw.objt_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      // Inline function 'kotlin.apply' call
      var this_0 = new GameObject();
      this_0.name_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.spriteId_1 = reader.readInt32_ir40a0_k$();
      this_0.visible_1 = reader.readBool32_geddkx_k$();
      if (dw.isVersionAtLeast_s3r2dk_k$(2022, 5, 0, 0)) {
        this_0.managed_1 = reader.readBool32_geddkx_k$();
      }
      this_0.solid_1 = reader.readBool32_geddkx_k$();
      this_0.depth_1 = reader.readInt32_ir40a0_k$();
      this_0.persistent_1 = reader.readBool32_geddkx_k$();
      this_0.parentId_1 = reader.readInt32_ir40a0_k$();
      this_0.textureMaskId_1 = reader.readInt32_ir40a0_k$();
      this_0.usesPhysics_1 = reader.readBool32_geddkx_k$();
      this_0.isSensor_1 = reader.readBool32_geddkx_k$();
      this_0.collisionShape_1 = reader.readInt32_ir40a0_k$();
      this_0.density_1 = reader.readFloat32_owjs1n_k$();
      this_0.restitution_1 = reader.readFloat32_owjs1n_k$();
      this_0.group_1 = reader.readInt32_ir40a0_k$();
      this_0.linearDamping_1 = reader.readFloat32_owjs1n_k$();
      this_0.angularDamping_1 = reader.readFloat32_owjs1n_k$();
      this_0.physicsVertexCount_1 = reader.readInt32_ir40a0_k$();
      this_0.friction_1 = reader.readFloat32_owjs1n_k$();
      this_0.awake_1 = reader.readBool32_geddkx_k$();
      this_0.kinematic_1 = reader.readBool32_geddkx_k$();
      if (this_0.physicsVertexCount_1 > 0) {
        var tmp_2 = this_0;
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size = this_0.physicsVertexCount_1;
        var list = ArrayList_init_$Create$(size);
        // Inline function 'kotlin.repeat' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size)
          do {
            var index = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp$ret$2 = new PhysicsVertex(reader.readFloat32_owjs1n_k$(), reader.readFloat32_owjs1n_k$());
            list.add_utx5q5_k$(tmp$ret$2);
          }
           while (inductionVariable_0 < size);
        tmp_2.physicsVertices_1 = list;
      }
      var eventTypePtrs = reader.readPointerTable_gyrryf_k$();
      var inductionVariable_1 = 0;
      var last_0 = eventTypePtrs.length - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var eventType = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (15 > eventType) {
            reader.set_position_h4ktwi_k$(eventTypePtrs[eventType]);
            var eventPtrs = reader.readPointerTable_gyrryf_k$();
            var tmp_3 = this_0.eventLists_1;
            // Inline function 'kotlin.collections.map' call
            // Inline function 'kotlin.collections.mapTo' call
            var destination_0 = ArrayList_init_$Create$(eventPtrs.length);
            var inductionVariable_2 = 0;
            var last_1 = eventPtrs.length;
            while (inductionVariable_2 < last_1) {
              var item_0 = eventPtrs[inductionVariable_2];
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              reader.set_position_h4ktwi_k$(item_0);
              var tmp$ret$7 = new ObjectEvent(reader.readInt32_ir40a0_k$(), readEventActions(Companion_getInstance(), reader));
              destination_0.add_utx5q5_k$(tmp$ret$7);
            }
            tmp_3[eventType] = new ObjectEventList(destination_0);
          }
        }
         while (inductionVariable_1 <= last_0);
      destination.add_utx5q5_k$(this_0);
    }
    tmp_1.objects_1 = destination;
  }
  function parseROOM($this, reader, dw) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    // Inline function 'kotlin.collections.isEmpty' call
    if (ptrs.length === 0)
      return Unit_getInstance();
    if (dw.isVersionAtLeast_s3r2dk_k$(2, 0, 0, 0) && !dw.isVersionAtLeast_s3r2dk_k$(2, 2, 2, 302)) {
      var inductionVariable = 0;
      var last = ptrs.length - 1 | 0;
      if (inductionVariable <= last)
        $l$loop: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          reader.set_position_h4ktwi_k$(ptrs[i]);
          reader.skip_tkj2uh_k$(48);
          var gameObjectsPtr = reader.readInt32_ir40a0_k$();
          reader.set_position_h4ktwi_k$(gameObjectsPtr);
          var objCount = reader.readInt32_ir40a0_k$();
          if (objCount >= 2) {
            var firstPtr = reader.readInt32_ir40a0_k$();
            var secondPtr = reader.readInt32_ir40a0_k$();
            if ((secondPtr - firstPtr | 0) === 48) {
              dw.bumpVersionTo_z9pmr7_k$(2, 2, 2, 302);
            }
            break $l$loop;
          }
        }
         while (inductionVariable <= last);
    }
    if (dw.isVersionAtLeast_s3r2dk_k$(2, 3, 0, 0) && !dw.isVersionAtLeast_s3r2dk_k$(2022, 1, 0, 0)) {
      var inductionVariable_0 = 0;
      var last_0 = ptrs.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        $l$loop_1: do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          reader.set_position_h4ktwi_k$(ptrs[i_0]);
          reader.skip_tkj2uh_k$(88);
          var layersPtr = reader.readInt32_ir40a0_k$();
          var seqnPtr = reader.readInt32_ir40a0_k$();
          reader.set_position_h4ktwi_k$(layersPtr);
          var layerCount = reader.readInt32_ir40a0_k$();
          if (layerCount === 0)
            continue $l$loop_1;
          var jumpOffset = reader.readInt32_ir40a0_k$();
          var nextOffset = layerCount === 1 ? seqnPtr : reader.readInt32_ir40a0_k$();
          reader.set_position_h4ktwi_k$(jumpOffset + 8 | 0);
          var layerType = reader.readInt32_ir40a0_k$();
          if (layerType === 0 || layerType === 7)
            continue $l$loop_1;
          var detected = false;
          switch (layerType) {
            case 1:
              var absPos = reader.get_position_jfponi_k$();
              if ((nextOffset - absPos | 0) > 64)
                detected = true;
              break;
            case 2:
              reader.skip_tkj2uh_k$(24);
              var instanceCount = reader.readInt32_ir40a0_k$();
              var absPos_0 = reader.get_position_jfponi_k$();
              if (!((nextOffset - absPos_0 | 0) === imul(instanceCount, 4)))
                detected = true;
              break;
            case 3:
              reader.skip_tkj2uh_k$(24);
              var tileOffset = reader.readInt32_ir40a0_k$();
              var absPos_1 = reader.get_position_jfponi_k$();
              if (!(tileOffset === (absPos_1 + 8 | 0)) && !(tileOffset === (absPos_1 + 12 | 0)))
                detected = true;
              break;
            case 4:
              reader.skip_tkj2uh_k$(28);
              var tileMapWidth = reader.readInt32_ir40a0_k$();
              var tileMapHeight = reader.readInt32_ir40a0_k$();
              var absPos_2 = reader.get_position_jfponi_k$();
              if (!((nextOffset - absPos_2 | 0) === imul(imul(tileMapWidth, tileMapHeight), 4)))
                detected = true;
              break;
            case 6:
              reader.skip_tkj2uh_k$(28);
              var propertyCount = reader.readInt32_ir40a0_k$();
              var absPos_3 = reader.get_position_jfponi_k$();
              if (!((nextOffset - absPos_3 | 0) === imul(imul(propertyCount, 3), 4)))
                detected = true;
              break;
          }
          if (detected) {
            dw.bumpVersionTo_z9pmr7_k$(2022, 1, 0, 0);
          }
          break $l$loop_1;
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp = dw.room_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable_1 = 0;
    var last_1 = ptrs.length;
    while (inductionVariable_1 < last_1) {
      var item = ptrs[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      // Inline function 'kotlin.apply' call
      var this_0 = new Room();
      this_0.name_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.caption_1 = reader.readStringPtr_yp6n6h_k$();
      this_0.width_1 = reader.readInt32_ir40a0_k$();
      this_0.height_1 = reader.readInt32_ir40a0_k$();
      this_0.speed_1 = reader.readInt32_ir40a0_k$();
      this_0.persistent_1 = reader.readBool32_geddkx_k$();
      this_0.backgroundColor_1 = reader.readInt32_ir40a0_k$();
      this_0.drawBackgroundColor_1 = reader.readBool32_geddkx_k$();
      this_0.creationCodeId_1 = reader.readInt32_ir40a0_k$();
      this_0.flags_1 = reader.readInt32_ir40a0_k$();
      var backgroundsPtr = reader.readInt32_ir40a0_k$();
      var viewsPtr = reader.readInt32_ir40a0_k$();
      var gameObjectsPtr_0 = reader.readInt32_ir40a0_k$();
      var tilesPtr = reader.readInt32_ir40a0_k$();
      this_0.world_1 = reader.readBool32_geddkx_k$();
      this_0.top_1 = reader.readInt32_ir40a0_k$();
      this_0.left_1 = reader.readInt32_ir40a0_k$();
      this_0.right_1 = reader.readInt32_ir40a0_k$();
      this_0.bottom_1 = reader.readInt32_ir40a0_k$();
      this_0.gravityX_1 = reader.readFloat32_owjs1n_k$();
      this_0.gravityY_1 = reader.readFloat32_owjs1n_k$();
      this_0.metersPerPixel_1 = reader.readFloat32_owjs1n_k$();
      if (dw.isVersionAtLeast_s3r2dk_k$(2024, 13, 0, 0)) {
        var icCount = reader.readInt32_ir40a0_k$();
        reader.skip_tkj2uh_k$(imul(4, icCount));
      }
      var layersPtr_0 = 0;
      if (dw.isVersionAtLeast_s3r2dk_k$(2, 0, 0, 0)) {
        layersPtr_0 = reader.readInt32_ir40a0_k$();
        if (dw.isVersionAtLeast_s3r2dk_k$(2, 3, 0, 0)) {
          reader.skip_tkj2uh_k$(4);
        }
      }
      reader.set_position_h4ktwi_k$(backgroundsPtr);
      var bgPtrs = reader.readPointerTable_gyrryf_k$();
      var inductionVariable_2 = 0;
      var last_2 = bgPtrs.length - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var j = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          if (8 > j) {
            reader.set_position_h4ktwi_k$(bgPtrs[j]);
            var tmp_0 = this_0.backgrounds_1;
            // Inline function 'kotlin.apply' call
            var this_1 = new RoomBackground();
            this_1.enabled_1 = reader.readBool32_geddkx_k$();
            this_1.foreground_1 = reader.readBool32_geddkx_k$();
            this_1.backgroundDefinition_1 = reader.readInt32_ir40a0_k$();
            this_1.x_1 = reader.readInt32_ir40a0_k$();
            this_1.y_1 = reader.readInt32_ir40a0_k$();
            this_1.tileX_1 = reader.readInt32_ir40a0_k$();
            this_1.tileY_1 = reader.readInt32_ir40a0_k$();
            this_1.speedX_1 = reader.readInt32_ir40a0_k$();
            this_1.speedY_1 = reader.readInt32_ir40a0_k$();
            this_1.stretch_1 = reader.readBool32_geddkx_k$();
            tmp_0[j] = this_1;
          }
        }
         while (inductionVariable_2 <= last_2);
      reader.set_position_h4ktwi_k$(viewsPtr);
      var viewPtrs = reader.readPointerTable_gyrryf_k$();
      var inductionVariable_3 = 0;
      var last_3 = viewPtrs.length - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var j_0 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          if (8 > j_0) {
            reader.set_position_h4ktwi_k$(viewPtrs[j_0]);
            var tmp_1 = this_0.views_1;
            // Inline function 'kotlin.apply' call
            var this_2 = new RoomView();
            this_2.enabled_1 = reader.readBool32_geddkx_k$();
            this_2.viewX_1 = reader.readInt32_ir40a0_k$();
            this_2.viewY_1 = reader.readInt32_ir40a0_k$();
            this_2.viewWidth_1 = reader.readInt32_ir40a0_k$();
            this_2.viewHeight_1 = reader.readInt32_ir40a0_k$();
            this_2.portX_1 = reader.readInt32_ir40a0_k$();
            this_2.portY_1 = reader.readInt32_ir40a0_k$();
            this_2.portWidth_1 = reader.readInt32_ir40a0_k$();
            this_2.portHeight_1 = reader.readInt32_ir40a0_k$();
            this_2.borderX_1 = reader.readInt32_ir40a0_k$();
            this_2.borderY_1 = reader.readInt32_ir40a0_k$();
            this_2.speedX_1 = reader.readInt32_ir40a0_k$();
            this_2.speedY_1 = reader.readInt32_ir40a0_k$();
            this_2.objectId_1 = reader.readInt32_ir40a0_k$();
            tmp_1[j_0] = this_2;
          }
        }
         while (inductionVariable_3 <= last_3);
      reader.set_position_h4ktwi_k$(gameObjectsPtr_0);
      var objPtrs = reader.readPointerTable_gyrryf_k$();
      var tmp_2 = this_0;
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(objPtrs.length);
      var inductionVariable_4 = 0;
      var last_4 = objPtrs.length;
      while (inductionVariable_4 < last_4) {
        var item_0 = objPtrs[inductionVariable_4];
        inductionVariable_4 = inductionVariable_4 + 1 | 0;
        reader.set_position_h4ktwi_k$(item_0);
        // Inline function 'kotlin.apply' call
        var this_3 = new RoomGameObject();
        this_3.x_1 = reader.readInt32_ir40a0_k$();
        this_3.y_1 = reader.readInt32_ir40a0_k$();
        this_3.objectDefinition_1 = reader.readInt32_ir40a0_k$();
        this_3.instanceID_1 = reader.readInt32_ir40a0_k$();
        this_3.creationCode_1 = reader.readInt32_ir40a0_k$();
        this_3.scaleX_1 = reader.readFloat32_owjs1n_k$();
        this_3.scaleY_1 = reader.readFloat32_owjs1n_k$();
        if (dw.isVersionAtLeast_s3r2dk_k$(2, 2, 2, 302)) {
          this_3.imageSpeed_1 = reader.readFloat32_owjs1n_k$();
          this_3.imageIndex_1 = reader.readInt32_ir40a0_k$();
        }
        this_3.color_1 = reader.readInt32_ir40a0_k$();
        this_3.rotation_1 = reader.readFloat32_owjs1n_k$();
        if (dw.gen8__1.bytecodeVersion_1 >= 16) {
          this_3.preCreateCode_1 = reader.readInt32_ir40a0_k$();
        }
        destination_0.add_utx5q5_k$(this_3);
      }
      tmp_2.gameObjects_1 = destination_0;
      reader.set_position_h4ktwi_k$(tilesPtr);
      var tilePtrs = reader.readPointerTable_gyrryf_k$();
      var tmp_3 = this_0;
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList_init_$Create$(tilePtrs.length);
      var inductionVariable_5 = 0;
      var last_5 = tilePtrs.length;
      while (inductionVariable_5 < last_5) {
        var item_1 = tilePtrs[inductionVariable_5];
        inductionVariable_5 = inductionVariable_5 + 1 | 0;
        reader.set_position_h4ktwi_k$(item_1);
        var tmp$ret$10 = readRoomTile(Companion_getInstance(), reader, dw);
        destination_1.add_utx5q5_k$(tmp$ret$10);
      }
      tmp_3.tiles_1 = destination_1;
      if (dw.isVersionAtLeast_s3r2dk_k$(2, 0, 0, 0) && !(layersPtr_0 === 0)) {
        reader.set_position_h4ktwi_k$(layersPtr_0);
        var layerPtrs = reader.readPointerTable_gyrryf_k$();
        var tmp_4 = this_0;
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_2 = ArrayList_init_$Create$(layerPtrs.length);
        var inductionVariable_6 = 0;
        var last_6 = layerPtrs.length;
        while (inductionVariable_6 < last_6) {
          var item_2 = layerPtrs[inductionVariable_6];
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          reader.set_position_h4ktwi_k$(item_2);
          // Inline function 'kotlin.apply' call
          var this_4 = new RoomLayer();
          this_4.name_1 = reader.readStringPtr_yp6n6h_k$();
          this_4.id_1 = reader.readInt32_ir40a0_k$();
          this_4.type_1 = reader.readInt32_ir40a0_k$();
          this_4.depth_1 = reader.readInt32_ir40a0_k$();
          this_4.xOffset_1 = reader.readFloat32_owjs1n_k$();
          this_4.yOffset_1 = reader.readFloat32_owjs1n_k$();
          this_4.hSpeed_1 = reader.readFloat32_owjs1n_k$();
          this_4.vSpeed_1 = reader.readFloat32_owjs1n_k$();
          this_4.visible_1 = reader.readBool32_geddkx_k$();
          if (dw.isVersionAtLeast_s3r2dk_k$(2022, 1, 0, 0)) {
            reader.skip_tkj2uh_k$(4);
            reader.skip_tkj2uh_k$(4);
            var effectPropCount = reader.readInt32_ir40a0_k$();
            reader.skip_tkj2uh_k$(imul(effectPropCount, 12));
          }
          switch (this_4.type_1) {
            case 0:
            case 7:
              break;
            case 6:
              if (!dw.isVersionAtLeast_s3r2dk_k$(2022, 1, 0, 0)) {
                reader.skip_tkj2uh_k$(4);
                var propCount = reader.readInt32_ir40a0_k$();
                reader.skip_tkj2uh_k$(imul(propCount, 12));
              }

              break;
            case 3:
              var legacyTilesPtr = reader.readInt32_ir40a0_k$();
              var spritesPtr = reader.readInt32_ir40a0_k$();
              reader.set_position_h4ktwi_k$(legacyTilesPtr);
              var assetTilePtrs = reader.readPointerTable_gyrryf_k$();
              // Inline function 'kotlin.collections.map' call

              // Inline function 'kotlin.collections.mapTo' call

              var destination_3 = ArrayList_init_$Create$(assetTilePtrs.length);
              var inductionVariable_7 = 0;
              var last_7 = assetTilePtrs.length;
              while (inductionVariable_7 < last_7) {
                var item_3 = assetTilePtrs[inductionVariable_7];
                inductionVariable_7 = inductionVariable_7 + 1 | 0;
                reader.set_position_h4ktwi_k$(item_3);
                var tmp$ret$13 = readRoomTile(Companion_getInstance(), reader, dw);
                destination_3.add_utx5q5_k$(tmp$ret$13);
              }

              var assetTiles = destination_3;
              reader.set_position_h4ktwi_k$(spritesPtr);
              var spritePtrs = reader.readPointerTable_gyrryf_k$();
              // Inline function 'kotlin.collections.map' call

              // Inline function 'kotlin.collections.mapTo' call

              var destination_4 = ArrayList_init_$Create$(spritePtrs.length);
              var inductionVariable_8 = 0;
              var last_8 = spritePtrs.length;
              while (inductionVariable_8 < last_8) {
                var item_4 = spritePtrs[inductionVariable_8];
                inductionVariable_8 = inductionVariable_8 + 1 | 0;
                reader.set_position_h4ktwi_k$(item_4);
                // Inline function 'kotlin.apply' call
                var this_5 = new SpriteInstance();
                this_5.name_1 = reader.readStringPtr_yp6n6h_k$();
                this_5.spriteIndex_1 = reader.readInt32_ir40a0_k$();
                this_5.x_1 = reader.readInt32_ir40a0_k$();
                this_5.y_1 = reader.readInt32_ir40a0_k$();
                this_5.scaleX_1 = reader.readFloat32_owjs1n_k$();
                this_5.scaleY_1 = reader.readFloat32_owjs1n_k$();
                this_5.color_1 = reader.readInt32_ir40a0_k$();
                this_5.animationSpeed_1 = reader.readFloat32_owjs1n_k$();
                this_5.animationSpeedType_1 = reader.readInt32_ir40a0_k$();
                this_5.frameIndex_1 = reader.readFloat32_owjs1n_k$();
                this_5.rotation_1 = reader.readFloat32_owjs1n_k$();
                destination_4.add_utx5q5_k$(this_5);
              }

              var spriteInstances = destination_4;
              var tmp_5 = this_4;
              // Inline function 'kotlin.apply' call

              var this_6 = new RoomLayerAssetsData();
              this_6.legacyTiles_1 = assetTiles;
              this_6.sprites_1 = spriteInstances;
              tmp_5.assetsData_1 = this_6;
              break;
            case 1:
              var tmp_6 = this_4;
              // Inline function 'kotlin.apply' call

              var this_7 = new RoomLayerBackgroundData();
              this_7.visible_1 = reader.readBool32_geddkx_k$();
              this_7.foreground_1 = reader.readBool32_geddkx_k$();
              this_7.spriteIndex_1 = reader.readInt32_ir40a0_k$();
              this_7.hTiled_1 = reader.readBool32_geddkx_k$();
              this_7.vTiled_1 = reader.readBool32_geddkx_k$();
              this_7.stretch_1 = reader.readBool32_geddkx_k$();
              this_7.color_1 = reader.readInt32_ir40a0_k$();
              this_7.firstFrame_1 = reader.readFloat32_owjs1n_k$();
              this_7.animSpeed_1 = reader.readFloat32_owjs1n_k$();
              this_7.animSpeedType_1 = reader.readInt32_ir40a0_k$();
              tmp_6.backgroundData_1 = this_7;
              break;
            case 2:
              var instanceCount_0 = reader.readInt32_ir40a0_k$();
              var tmp_7 = this_4;
              // Inline function 'kotlin.apply' call

              var this_8 = new RoomLayerInstancesData();
              var tmp_8 = this_8;
              var tmp_9 = 0;
              var tmp_10 = new Int32Array(instanceCount_0);
              while (tmp_9 < instanceCount_0) {
                tmp_10[tmp_9] = reader.readInt32_ir40a0_k$();
                tmp_9 = tmp_9 + 1 | 0;
              }

              tmp_8.instanceIds_1 = tmp_10;
              tmp_7.instancesData_1 = this_8;
              break;
            case 4:
              var bgIdx = reader.readInt32_ir40a0_k$();
              var tx = reader.readInt32_ir40a0_k$();
              var ty = reader.readInt32_ir40a0_k$();
              var totalTiles = imul(tx, ty);
              var tmp_11 = this_4;
              // Inline function 'kotlin.apply' call

              var this_9 = new RoomLayerTilesData();
              this_9.backgroundIndex_1 = bgIdx;
              this_9.tilesX_1 = tx;
              this_9.tilesY_1 = ty;
              var tmp_12 = this_9;
              var tmp_13 = 0;
              var tmp_14 = new Int32Array(totalTiles);
              while (tmp_13 < totalTiles) {
                tmp_14[tmp_13] = reader.readInt32_ir40a0_k$();
                tmp_13 = tmp_13 + 1 | 0;
              }

              tmp_12.tileData_1 = tmp_14;
              tmp_11.tilesData_1 = this_9;
              break;
            default:
              // Inline function 'kotlin.error' call

              var message = 'Unsupported Room Layer Type ' + this_4.type_1;
              throw IllegalStateException_init_$Create$(toString(message));
          }
          destination_2.add_utx5q5_k$(this_4);
        }
        tmp_4.layers_1 = destination_2;
      }
      destination.add_utx5q5_k$(this_0);
    }
    tmp.rooms_1 = destination;
  }
  function readRoomTile($this, reader, dw) {
    // Inline function 'kotlin.apply' call
    var this_0 = new RoomTile();
    this_0.x_1 = reader.readInt32_ir40a0_k$();
    this_0.y_1 = reader.readInt32_ir40a0_k$();
    this_0.useSpriteDefinition_1 = dw.isVersionAtLeast_s3r2dk_k$(2, 0, 0, 0);
    this_0.backgroundDefinition_1 = reader.readInt32_ir40a0_k$();
    this_0.sourceX_1 = reader.readInt32_ir40a0_k$();
    this_0.sourceY_1 = reader.readInt32_ir40a0_k$();
    this_0.width_1 = reader.readInt32_ir40a0_k$();
    this_0.height_1 = reader.readInt32_ir40a0_k$();
    this_0.tileDepth_1 = reader.readInt32_ir40a0_k$();
    this_0.instanceID_1 = reader.readInt32_ir40a0_k$();
    this_0.scaleX_1 = reader.readFloat32_owjs1n_k$();
    this_0.scaleY_1 = reader.readFloat32_owjs1n_k$();
    this_0.color_1 = reader.readInt32_ir40a0_k$();
    return this_0;
  }
  function parseTPAG($this, reader, dw) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    var tmp = dw.tpag_1;
    // Inline function 'kotlin.collections.mapIndexed' call
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var index = 0;
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      index = index + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      // Inline function 'kotlin.apply' call
      var this_0 = new TexturePageItem();
      this_0.sourceX_1 = reader.readUint16_7htsqz_k$();
      this_0.sourceY_1 = reader.readUint16_7htsqz_k$();
      this_0.sourceWidth_1 = reader.readUint16_7htsqz_k$();
      this_0.sourceHeight_1 = reader.readUint16_7htsqz_k$();
      this_0.targetX_1 = reader.readUint16_7htsqz_k$();
      this_0.targetY_1 = reader.readUint16_7htsqz_k$();
      this_0.targetWidth_1 = reader.readUint16_7htsqz_k$();
      this_0.targetHeight_1 = reader.readUint16_7htsqz_k$();
      this_0.boundingWidth_1 = reader.readUint16_7htsqz_k$();
      this_0.boundingHeight_1 = reader.readUint16_7htsqz_k$();
      this_0.texturePageId_1 = reader.readInt16_ir40bm_k$();
      destination.add_utx5q5_k$(this_0);
    }
    tmp.items_1 = destination;
    var inductionVariable_0 = 0;
    var last_0 = ptrs.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp0 = dw.tpagOffsetMap_1;
        // Inline function 'kotlin.collections.set' call
        var key = ptrs[i];
        tmp0.put_4fpzoq_k$(key, i);
      }
       while (inductionVariable_0 <= last_0);
  }
  function parseCODE($this, reader, dw, chunkLength, chunkDataStart) {
    if (chunkLength === 0)
      return Unit_getInstance();
    var oldFormat = 14 >= dw.gen8__1.bytecodeVersion_1;
    var codePtrs = reader.readPointerTable_gyrryf_k$();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(codePtrs.length);
    var inductionVariable = 0;
    var last = codePtrs.length;
    while (inductionVariable < last) {
      var item = codePtrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      var name = reader.readStringPtr_yp6n6h_k$();
      var length = reader.readInt32_ir40a0_k$();
      var tmp;
      if (oldFormat) {
        var bytecodeAbsoluteOffset = reader.get_position_jfponi_k$();
        reader.skip_tkj2uh_k$(length);
        tmp = new CodeEntry(name, length, 0, 0, bytecodeAbsoluteOffset, 0);
      } else {
        var localsCount = reader.readUint16_7htsqz_k$();
        var argumentsCount = reader.readUint16_7htsqz_k$();
        var relAddrFieldPos = reader.get_position_jfponi_k$();
        var bytecodeRelAddr = reader.readInt32_ir40a0_k$();
        var bytecodeAbsoluteOffset_0 = relAddrFieldPos + bytecodeRelAddr | 0;
        var offset = reader.readInt32_ir40a0_k$();
        tmp = new CodeEntry(name, length, localsCount, argumentsCount, bytecodeAbsoluteOffset_0, offset);
      }
      var tmp$ret$0 = tmp;
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var entries = destination;
    dw.code_1.entries_1 = entries;
    var chunkEnd = chunkDataStart + chunkLength | 0;
    if (oldFormat) {
      dw.bytecodeBufferBase_1 = chunkDataStart;
      dw.bytecodeBuffer_1 = reader.readBytesAt_xyxyfc_k$(chunkDataStart, chunkLength);
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!entries.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlin.collections.minOf' call
      var iterator = entries.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$())
        throw NoSuchElementException_init_$Create$();
      var minValue = iterator.next_20eer_k$().bytecodeAbsoluteOffset_1;
      while (iterator.hasNext_bitz1p_k$()) {
        var v = iterator.next_20eer_k$().bytecodeAbsoluteOffset_1;
        if (compareTo(minValue, v) > 0) {
          minValue = v;
        }
      }
      var blobStart = minValue;
      var blobSize = chunkEnd - blobStart | 0;
      dw.bytecodeBufferBase_1 = blobStart;
      dw.bytecodeBuffer_1 = reader.readBytesAt_xyxyfc_k$(blobStart, blobSize);
    }
  }
  function parseVARI($this, reader, dw, chunkLength) {
    var v = dw.vari_1;
    var oldFormat = dw.gen8__1.bytecodeVersion_1 <= 14;
    var variableCount;
    if (oldFormat) {
      v.varCount1__1 = 0;
      v.varCount2__1 = 0;
      v.maxLocalVarCount_1 = 0;
      variableCount = chunkLength / 12 | 0;
    } else {
      v.varCount1__1 = reader.readInt32_ir40a0_k$();
      v.varCount2__1 = reader.readInt32_ir40a0_k$();
      v.maxLocalVarCount_1 = reader.readInt32_ir40a0_k$();
      variableCount = (chunkLength - 12 | 0) / 20 | 0;
    }
    var tmp = v;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = variableCount;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = reader.readStringPtr_yp6n6h_k$();
        var instanceType = oldFormat ? 0 : reader.readInt32_ir40a0_k$();
        var varID = oldFormat ? 0 : reader.readInt32_ir40a0_k$();
        var tmp$ret$0 = new Variable(name, instanceType, varID, reader.readInt32_ir40a0_k$(), reader.readInt32_ir40a0_k$());
        list.add_utx5q5_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
    tmp.variables_1 = list;
  }
  function parseFUNC($this, reader, dw, chunkLength) {
    var f = dw.func_1;
    if (dw.gen8__1.bytecodeVersion_1 <= 14) {
      var funcCount = chunkLength / 12 | 0;
      var tmp = f;
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$(funcCount);
      // Inline function 'kotlin.repeat' call
      var inductionVariable = 0;
      if (inductionVariable < funcCount)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0 = new Function(reader.readStringPtr_yp6n6h_k$(), reader.readInt32_ir40a0_k$(), reader.readInt32_ir40a0_k$());
          list.add_utx5q5_k$(tmp$ret$0);
        }
         while (inductionVariable < funcCount);
      tmp.functions_1 = list;
      f.codeLocals_1 = emptyList();
      return Unit_getInstance();
    }
    var funcCount_0 = reader.readInt32_ir40a0_k$();
    var tmp_0 = f;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var list_0 = ArrayList_init_$Create$(funcCount_0);
    // Inline function 'kotlin.repeat' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < funcCount_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var name = reader.readStringPtr_yp6n6h_k$();
        var occurrences = reader.readInt32_ir40a0_k$();
        var rawAddr = reader.readInt32_ir40a0_k$();
        if (dw.isVersionAtLeast_s3r2dk_k$(2, 3, 0, 0) && !(rawAddr === -1)) {
          rawAddr = rawAddr - 4 | 0;
        }
        var tmp$ret$5 = new Function(name, occurrences, rawAddr);
        list_0.add_utx5q5_k$(tmp$ret$5);
      }
       while (inductionVariable_0 < funcCount_0);
    tmp_0.functions_1 = list_0;
    var codeLocalsCount = reader.readInt32_ir40a0_k$();
    var tmp_1 = f;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var list_1 = ArrayList_init_$Create$(codeLocalsCount);
    // Inline function 'kotlin.repeat' call
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < codeLocalsCount)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var localVarCount = reader.readInt32_ir40a0_k$();
        var name_0 = reader.readStringPtr_yp6n6h_k$();
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var list_2 = ArrayList_init_$Create$(localVarCount);
        // Inline function 'kotlin.repeat' call
        var inductionVariable_2 = 0;
        if (inductionVariable_2 < localVarCount)
          do {
            var index_2 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var tmp$ret$10 = new LocalVar(reader.readInt32_ir40a0_k$(), reader.readStringPtr_yp6n6h_k$());
            list_2.add_utx5q5_k$(tmp$ret$10);
          }
           while (inductionVariable_2 < localVarCount);
        var tmp$ret$15 = new CodeLocals(name_0, list_2);
        list_1.add_utx5q5_k$(tmp$ret$15);
      }
       while (inductionVariable_1 < codeLocalsCount);
    tmp_1.codeLocals_1 = list_1;
  }
  function parseSTRG($this, reader, dw) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    var tmp = dw.strg_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var saved = reader.get_position_jfponi_k$();
      reader.set_position_h4ktwi_k$(item);
      var length = reader.readInt32_ir40a0_k$();
      var bytes = reader.readBytes_do0jwd_k$(length);
      reader.set_position_h4ktwi_k$(saved);
      var tmp$ret$0 = decodeToString(bytes);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.strings_1 = destination;
  }
  function parseTXTR($this, reader, dw, chunkEnd) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    // Inline function 'kotlin.collections.isEmpty' call
    if (ptrs.length === 0)
      return Unit_getInstance();
    var hasGeneratedMips = dw.isVersionAtLeast_s3r2dk_k$(2, 0, 0, 0);
    var has2022_3 = dw.isVersionAtLeast_s3r2dk_k$(2022, 3, 0, 0);
    var has2022_9 = dw.isVersionAtLeast_s3r2dk_k$(2022, 9, 0, 0);
    if (ptrs.length >= 2 && hasGeneratedMips && !has2022_9) {
      var diff = ptrs[1] - ptrs[0] | 0;
      if (diff === 28) {
        dw.bumpVersionTo_z9pmr7_k$(2022, 9, 0, 0);
        has2022_3 = true;
        has2022_9 = true;
      } else if (diff === 16 && !has2022_3) {
        dw.bumpVersionTo_z9pmr7_k$(2022, 3, 0, 0);
        has2022_3 = true;
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      var scaled = reader.readInt32_ir40a0_k$();
      var generatedMips = hasGeneratedMips ? reader.readInt32_ir40a0_k$() : 0;
      var textureBlockSize = has2022_3 ? reader.readInt32_ir40a0_k$() : 0;
      var textureWidth;
      var textureHeight;
      var indexInGroup;
      if (has2022_9) {
        textureWidth = reader.readInt32_ir40a0_k$();
        textureHeight = reader.readInt32_ir40a0_k$();
        indexInGroup = reader.readInt32_ir40a0_k$();
      } else {
        textureWidth = 0;
        textureHeight = 0;
        indexInGroup = 0;
      }
      var blobOffset = reader.readInt32_ir40a0_k$();
      var tmp$ret$1 = new DataWin$Companion$parseTXTR$TexMeta(scaled, generatedMips, textureBlockSize, textureWidth, textureHeight, indexInGroup, blobOffset);
      destination.add_utx5q5_k$(tmp$ret$1);
    }
    var metas = destination;
    var tmp = dw.txtr_1;
    // Inline function 'kotlin.collections.mapIndexed' call
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(metas, 10));
    var index = 0;
    var _iterator__ex2g4s = metas.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item_0 = _iterator__ex2g4s.next_20eer_k$();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var i = checkIndexOverflow(_unary__edvuaz);
      var tmp_0;
      if (item_0.blobOffset_1 === 0) {
        tmp_0 = new Texture(item_0.scaled_1, 0, 0, null, item_0.generatedMips_1, item_0.textureBlockSize_1, item_0.textureWidth_1, item_0.textureHeight_1, item_0.indexInGroup_1);
      } else {
        var tmp_1;
        if (metas.get_size_woubt6_k$() > (i + 1 | 0) && !(metas.get_c1px32_k$(i + 1 | 0).blobOffset_1 === 0)) {
          tmp_1 = metas.get_c1px32_k$(i + 1 | 0).blobOffset_1 - item_0.blobOffset_1 | 0;
        } else {
          tmp_1 = chunkEnd - item_0.blobOffset_1 | 0;
        }
        var blobSize = tmp_1;
        var blobData = blobSize > 0 ? reader.readBytesAt_xyxyfc_k$(item_0.blobOffset_1, blobSize) : null;
        tmp_0 = new Texture(item_0.scaled_1, item_0.blobOffset_1, blobSize, blobData, item_0.generatedMips_1, item_0.textureBlockSize_1, item_0.textureWidth_1, item_0.textureHeight_1, item_0.indexInGroup_1);
      }
      var tmp$ret$4 = tmp_0;
      destination_0.add_utx5q5_k$(tmp$ret$4);
    }
    tmp.textures_1 = destination_0;
  }
  function parseAUDO($this, reader, dw) {
    var ptrs = reader.readPointerTable_gyrryf_k$();
    var tmp = dw.audo_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.set_position_h4ktwi_k$(item);
      var dataSize = reader.readInt32_ir40a0_k$();
      var dataOffset = reader.get_position_jfponi_k$();
      var data = dataSize > 0 ? reader.readBytes_do0jwd_k$(dataSize) : null;
      var tmp$ret$0 = new AudioEntry(dataSize, dataOffset, data);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.entries_1 = destination;
  }
  function DataWin$Companion$parseTXTR$TexMeta(scaled, generatedMips, textureBlockSize, textureWidth, textureHeight, indexInGroup, blobOffset) {
    this.scaled_1 = scaled;
    this.generatedMips_1 = generatedMips;
    this.textureBlockSize_1 = textureBlockSize;
    this.textureWidth_1 = textureWidth;
    this.textureHeight_1 = textureHeight;
    this.indexInGroup_1 = indexInGroup;
    this.blobOffset_1 = blobOffset;
  }
  protoOf(DataWin$Companion$parseTXTR$TexMeta).get_scaled_je2hyb_k$ = function () {
    return this.scaled_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).get_generatedMips_ropn6t_k$ = function () {
    return this.generatedMips_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).get_textureBlockSize_ci91pg_k$ = function () {
    return this.textureBlockSize_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).get_textureWidth_kg5b9o_k$ = function () {
    return this.textureWidth_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).get_textureHeight_1scsg7_k$ = function () {
    return this.textureHeight_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).get_indexInGroup_p6rixb_k$ = function () {
    return this.indexInGroup_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).get_blobOffset_qqbv8n_k$ = function () {
    return this.blobOffset_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).component1_7eebsc_k$ = function () {
    return this.scaled_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).component2_7eebsb_k$ = function () {
    return this.generatedMips_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).component3_7eebsa_k$ = function () {
    return this.textureBlockSize_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).component4_7eebs9_k$ = function () {
    return this.textureWidth_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).component5_7eebs8_k$ = function () {
    return this.textureHeight_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).component6_7eebs7_k$ = function () {
    return this.indexInGroup_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).component7_7eebs6_k$ = function () {
    return this.blobOffset_1;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).copy_sfx94z_k$ = function (scaled, generatedMips, textureBlockSize, textureWidth, textureHeight, indexInGroup, blobOffset) {
    return new DataWin$Companion$parseTXTR$TexMeta(scaled, generatedMips, textureBlockSize, textureWidth, textureHeight, indexInGroup, blobOffset);
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).copy$default_a4iecb_k$ = function (scaled, generatedMips, textureBlockSize, textureWidth, textureHeight, indexInGroup, blobOffset, $super) {
    scaled = scaled === VOID ? this.scaled_1 : scaled;
    generatedMips = generatedMips === VOID ? this.generatedMips_1 : generatedMips;
    textureBlockSize = textureBlockSize === VOID ? this.textureBlockSize_1 : textureBlockSize;
    textureWidth = textureWidth === VOID ? this.textureWidth_1 : textureWidth;
    textureHeight = textureHeight === VOID ? this.textureHeight_1 : textureHeight;
    indexInGroup = indexInGroup === VOID ? this.indexInGroup_1 : indexInGroup;
    blobOffset = blobOffset === VOID ? this.blobOffset_1 : blobOffset;
    return $super === VOID ? this.copy_sfx94z_k$(scaled, generatedMips, textureBlockSize, textureWidth, textureHeight, indexInGroup, blobOffset) : $super.copy_sfx94z_k$.call(this, scaled, generatedMips, textureBlockSize, textureWidth, textureHeight, indexInGroup, blobOffset);
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).toString = function () {
    return 'TexMeta(scaled=' + this.scaled_1 + ', generatedMips=' + this.generatedMips_1 + ', textureBlockSize=' + this.textureBlockSize_1 + ', textureWidth=' + this.textureWidth_1 + ', textureHeight=' + this.textureHeight_1 + ', indexInGroup=' + this.indexInGroup_1 + ', blobOffset=' + this.blobOffset_1 + ')';
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).hashCode = function () {
    var result = this.scaled_1;
    result = imul(result, 31) + this.generatedMips_1 | 0;
    result = imul(result, 31) + this.textureBlockSize_1 | 0;
    result = imul(result, 31) + this.textureWidth_1 | 0;
    result = imul(result, 31) + this.textureHeight_1 | 0;
    result = imul(result, 31) + this.indexInGroup_1 | 0;
    result = imul(result, 31) + this.blobOffset_1 | 0;
    return result;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DataWin$Companion$parseTXTR$TexMeta))
      return false;
    if (!(this.scaled_1 === other.scaled_1))
      return false;
    if (!(this.generatedMips_1 === other.generatedMips_1))
      return false;
    if (!(this.textureBlockSize_1 === other.textureBlockSize_1))
      return false;
    if (!(this.textureWidth_1 === other.textureWidth_1))
      return false;
    if (!(this.textureHeight_1 === other.textureHeight_1))
      return false;
    if (!(this.indexInGroup_1 === other.indexInGroup_1))
      return false;
    if (!(this.blobOffset_1 === other.blobOffset_1))
      return false;
    return true;
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).parse_jw1qtn_k$ = function (bytes, options) {
    var reader = new BinaryReader(bytes);
    var dw = new DataWin();
    var magic = reader.readChunkName_1z7vdu_k$();
    // Inline function 'kotlin.require' call
    if (!(magic === 'FORM')) {
      var message = "Invalid file: expected FORM magic, got '" + magic + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    reader.readInt32_ir40a0_k$();
    var passOnePosition = reader.get_position_jfponi_k$();
    $l$loop: while (reader.get_size_woubt6_k$() > reader.get_position_jfponi_k$() && (reader.get_position_jfponi_k$() + 8 | 0) <= reader.get_size_woubt6_k$()) {
      var name = reader.readChunkName_1z7vdu_k$();
      var len = reader.readInt32_ir40a0_k$();
      switch (name) {
        case 'FEDS':
        case 'ACRV':
        case 'SEQN':
        case 'TAGS':
        case 'EMBI':
          dw.bumpVersionTo_z9pmr7_k$(2, 3, 0, 0);
          break;
        case 'FEAT':
          dw.bumpVersionTo_z9pmr7_k$(2022, 8, 0, 0);
          break;
        case 'PSEM':
        case 'PSYS':
          dw.bumpVersionTo_z9pmr7_k$(2023, 4, 0, 0);
          break;
        case 'UILR':
          dw.bumpVersionTo_z9pmr7_k$(2024, 13, 0, 0);
          break;
      }
      reader.set_position_h4ktwi_k$(reader.get_position_jfponi_k$() + len | 0);
    }
    reader.set_position_h4ktwi_k$(passOnePosition);
    $l$loop_0: while (reader.get_size_woubt6_k$() > reader.get_position_jfponi_k$() && (reader.get_position_jfponi_k$() + 8 | 0) <= reader.get_size_woubt6_k$()) {
      var chunkName = reader.readChunkName_1z7vdu_k$();
      var chunkLength = reader.readInt32_ir40a0_k$();
      var chunkDataStart = reader.get_position_jfponi_k$();
      var chunkEnd = chunkDataStart + chunkLength | 0;
      if (options.parseGen8__1 && chunkName === 'GEN8') {
        parseGEN8(this, reader, dw);
      } else if (options.parseOptn_1 && chunkName === 'OPTN') {
        parseOPTN(this, reader, dw);
      } else if (options.parseLang_1 && chunkName === 'LANG') {
        parseLANG(this, reader, dw);
      } else if (options.parseExtn_1 && chunkName === 'EXTN') {
        parseEXTN(this, reader, dw);
      } else if (options.parseSond_1 && chunkName === 'SOND') {
        parseSOND(this, reader, dw);
      } else if (options.parseAgrp_1 && chunkName === 'AGRP') {
        parseAGRP(this, reader, dw);
      } else if (options.parseSprt_1 && chunkName === 'SPRT') {
        parseSPRT(this, reader, dw, options.skipLoadingPreciseMasksForNonPreciseSprites_1);
      } else if (options.parseBgnd_1 && chunkName === 'BGND') {
        parseBGND(this, reader, dw);
      } else if (options.parsePath_1 && chunkName === 'PATH') {
        parsePATH(this, reader, dw);
      } else if (options.parseScpt_1 && chunkName === 'SCPT') {
        parseSCPT(this, reader, dw);
      } else if (options.parseGlob_1 && chunkName === 'GLOB') {
        parseGLOB(this, reader, dw);
      } else if (options.parseShdr_1 && chunkName === 'SHDR') {
        parseSHDR(this, reader, dw);
      } else if (options.parseFont_1 && chunkName === 'FONT') {
        parseFONT(this, reader, dw);
      } else if (options.parseTmln_1 && chunkName === 'TMLN') {
        parseTMLN(this, reader, dw);
      } else if (options.parseObjt_1 && chunkName === 'OBJT') {
        parseOBJT(this, reader, dw);
      } else if (options.parseRoom_1 && chunkName === 'ROOM') {
        parseROOM(this, reader, dw);
      } else if (chunkName !== 'DAFL')
        if (options.parseTpag_1 && chunkName === 'TPAG') {
          parseTPAG(this, reader, dw);
        } else if (options.parseCode_1 && chunkName === 'CODE') {
          parseCODE(this, reader, dw, chunkLength, chunkDataStart);
        } else if (options.parseVari_1 && chunkName === 'VARI') {
          parseVARI(this, reader, dw, chunkLength);
        } else if (options.parseFunc_1 && chunkName === 'FUNC') {
          parseFUNC(this, reader, dw, chunkLength);
        } else if (options.parseStrg_1 && chunkName === 'STRG') {
          parseSTRG(this, reader, dw);
        } else if (options.parseTxtr_1 && chunkName === 'TXTR') {
          parseTXTR(this, reader, dw, chunkEnd);
        } else if (options.parseAudo_1 && chunkName === 'AUDO') {
          parseAUDO(this, reader, dw);
        } else {
          println('Unknown chunk: ' + chunkName + ' (length ' + chunkLength + ' at offset 0x' + toString_1(chunkDataStart - 8 | 0, 16) + ')');
        }
      reader.set_position_h4ktwi_k$(chunkEnd);
    }
    println('Done!');
    return dw;
  };
  protoOf(Companion).parse$default_xrhyjx_k$ = function (bytes, options, $super) {
    options = options === VOID ? new DataWinParserOptions() : options;
    return $super === VOID ? this.parse_jw1qtn_k$(bytes, options) : $super.parse_jw1qtn_k$.call(this, bytes, options);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function DataWin() {
    Companion_getInstance();
    this.gen8__1 = new Gen8();
    this.optn_1 = new Optn();
    this.lang_1 = new Lang();
    this.extn_1 = new Extn();
    this.sond_1 = new Sond();
    this.agrp_1 = new Agrp();
    this.sprt_1 = new Sprt();
    this.bgnd_1 = new Bgnd();
    this.path_1 = new PathChunk();
    this.scpt_1 = new Scpt();
    this.glob_1 = new Glob();
    this.shdr_1 = new Shdr();
    this.font_1 = new FontChunk();
    this.tmln_1 = new Tmln();
    this.objt_1 = new Objt();
    this.room_1 = new RoomChunk();
    this.tpag_1 = new Tpag();
    this.code_1 = new Code();
    this.vari_1 = new Vari();
    this.func_1 = new Func();
    this.strg_1 = new Strg();
    this.txtr_1 = new Txtr();
    this.audo_1 = new Audo();
    this.bytecodeBuffer_1 = null;
    this.bytecodeBufferBase_1 = 0;
    this.tpagOffsetMap_1 = HashMap_init_$Create$_0();
    this.sprtOffsetMap_1 = HashMap_init_$Create$_0();
    this.detectedMajor_1 = 0;
    this.detectedMinor_1 = 0;
    this.detectedRelease_1 = 0;
    this.detectedBuild_1 = 0;
  }
  protoOf(DataWin).set_gen8_nt51l0_k$ = function (_set____db54di) {
    this.gen8__1 = _set____db54di;
  };
  protoOf(DataWin).get_gen8_womkoh_k$ = function () {
    return this.gen8__1;
  };
  protoOf(DataWin).set_optn_7znuxo_k$ = function (_set____db54di) {
    this.optn_1 = _set____db54di;
  };
  protoOf(DataWin).get_optn_worwx0_k$ = function () {
    return this.optn_1;
  };
  protoOf(DataWin).set_lang_p4kqv8_k$ = function (_set____db54di) {
    this.lang_1 = _set____db54di;
  };
  protoOf(DataWin).get_lang_wopoon_k$ = function () {
    return this.lang_1;
  };
  protoOf(DataWin).set_extn_96wsmc_k$ = function (_set____db54di) {
    this.extn_1 = _set____db54di;
  };
  protoOf(DataWin).get_extn_woloza_k$ = function () {
    return this.extn_1;
  };
  protoOf(DataWin).set_sond_88yop0_k$ = function (_set____db54di) {
    this.sond_1 = _set____db54di;
  };
  protoOf(DataWin).get_sond_woufyz_k$ = function () {
    return this.sond_1;
  };
  protoOf(DataWin).set_agrp_5b60n8_k$ = function (_set____db54di) {
    this.agrp_1 = _set____db54di;
  };
  protoOf(DataWin).get_agrp_woisdp_k$ = function () {
    return this.agrp_1;
  };
  protoOf(DataWin).set_sprt_3pa7rw_k$ = function (_set____db54di) {
    this.sprt_1 = _set____db54di;
  };
  protoOf(DataWin).get_sprt_wougtk_k$ = function () {
    return this.sprt_1;
  };
  protoOf(DataWin).set_bgnd_you5r8_k$ = function (_set____db54di) {
    this.bgnd_1 = _set____db54di;
  };
  protoOf(DataWin).get_bgnd_wojf9g_k$ = function () {
    return this.bgnd_1;
  };
  protoOf(DataWin).set_path_syh3er_k$ = function (_set____db54di) {
    this.path_1 = _set____db54di;
  };
  protoOf(DataWin).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(DataWin).set_scpt_9o916k_k$ = function (_set____db54di) {
    this.scpt_1 = _set____db54di;
  };
  protoOf(DataWin).get_scpt_wou74t_k$ = function () {
    return this.scpt_1;
  };
  protoOf(DataWin).set_glob_fo6r0k_k$ = function (_set____db54di) {
    this.glob_1 = _set____db54di;
  };
  protoOf(DataWin).get_glob_wompxd_k$ = function () {
    return this.glob_1;
  };
  protoOf(DataWin).set_shdr_ksz718_k$ = function (_set____db54di) {
    this.shdr_1 = _set____db54di;
  };
  protoOf(DataWin).get_shdr_wouajw_k$ = function () {
    return this.shdr_1;
  };
  protoOf(DataWin).set_font_b8ugn1_k$ = function (_set____db54di) {
    this.font_1 = _set____db54di;
  };
  protoOf(DataWin).get_font_wom55k_k$ = function () {
    return this.font_1;
  };
  protoOf(DataWin).set_tmln_lwit9g_k$ = function (_set____db54di) {
    this.tmln_1 = _set____db54di;
  };
  protoOf(DataWin).get_tmln_wov1fo_k$ = function () {
    return this.tmln_1;
  };
  protoOf(DataWin).set_objt_hafjz8_k$ = function (_set____db54di) {
    this.objt_1 = _set____db54di;
  };
  protoOf(DataWin).get_objt_wormau_k$ = function () {
    return this.objt_1;
  };
  protoOf(DataWin).set_room_sp698d_k$ = function (_set____db54di) {
    this.room_1 = _set____db54di;
  };
  protoOf(DataWin).get_room_wott0k_k$ = function () {
    return this.room_1;
  };
  protoOf(DataWin).set_tpag_n85j7g_k$ = function (_set____db54di) {
    this.tpag_1 = _set____db54di;
  };
  protoOf(DataWin).get_tpag_wov3e3_k$ = function () {
    return this.tpag_1;
  };
  protoOf(DataWin).set_code_45feos_k$ = function (_set____db54di) {
    this.code_1 = _set____db54di;
  };
  protoOf(DataWin).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  protoOf(DataWin).set_vari_41ebuk_k$ = function (_set____db54di) {
    this.vari_1 = _set____db54di;
  };
  protoOf(DataWin).get_vari_wow2nf_k$ = function () {
    return this.vari_1;
  };
  protoOf(DataWin).set_func_euonno_k$ = function (_set____db54di) {
    this.func_1 = _set____db54di;
  };
  protoOf(DataWin).get_func_wom9l9_k$ = function () {
    return this.func_1;
  };
  protoOf(DataWin).set_strg_6rxhj8_k$ = function (_set____db54di) {
    this.strg_1 = _set____db54di;
  };
  protoOf(DataWin).get_strg_woujrz_k$ = function () {
    return this.strg_1;
  };
  protoOf(DataWin).set_txtr_8szm9w_k$ = function (_set____db54di) {
    this.txtr_1 = _set____db54di;
  };
  protoOf(DataWin).get_txtr_wov9sb_k$ = function () {
    return this.txtr_1;
  };
  protoOf(DataWin).set_audo_fem2p0_k$ = function (_set____db54di) {
    this.audo_1 = _set____db54di;
  };
  protoOf(DataWin).get_audo_woj2fc_k$ = function () {
    return this.audo_1;
  };
  protoOf(DataWin).set_bytecodeBuffer_emt4e3_k$ = function (_set____db54di) {
    this.bytecodeBuffer_1 = _set____db54di;
  };
  protoOf(DataWin).get_bytecodeBuffer_ujoaxu_k$ = function () {
    return this.bytecodeBuffer_1;
  };
  protoOf(DataWin).set_bytecodeBufferBase_qha2at_k$ = function (_set____db54di) {
    this.bytecodeBufferBase_1 = _set____db54di;
  };
  protoOf(DataWin).get_bytecodeBufferBase_bwaz5d_k$ = function () {
    return this.bytecodeBufferBase_1;
  };
  protoOf(DataWin).get_tpagOffsetMap_9ujm72_k$ = function () {
    return this.tpagOffsetMap_1;
  };
  protoOf(DataWin).get_sprtOffsetMap_zhjrpd_k$ = function () {
    return this.sprtOffsetMap_1;
  };
  protoOf(DataWin).set_detectedMajor_yfkem_k$ = function (_set____db54di) {
    this.detectedMajor_1 = _set____db54di;
  };
  protoOf(DataWin).get_detectedMajor_b5d5e_k$ = function () {
    return this.detectedMajor_1;
  };
  protoOf(DataWin).set_detectedMinor_2yfhqq_k$ = function (_set____db54di) {
    this.detectedMinor_1 = _set____db54di;
  };
  protoOf(DataWin).get_detectedMinor_b06ae_k$ = function () {
    return this.detectedMinor_1;
  };
  protoOf(DataWin).set_detectedRelease_drzeww_k$ = function (_set____db54di) {
    this.detectedRelease_1 = _set____db54di;
  };
  protoOf(DataWin).get_detectedRelease_97t0p0_k$ = function () {
    return this.detectedRelease_1;
  };
  protoOf(DataWin).set_detectedBuild_ov2laf_k$ = function (_set____db54di) {
    this.detectedBuild_1 = _set____db54di;
  };
  protoOf(DataWin).get_detectedBuild_gucrh_k$ = function () {
    return this.detectedBuild_1;
  };
  protoOf(DataWin).resolveTPAG_p0cf7u_k$ = function (offset) {
    var tmp0_elvis_lhs = this.tpagOffsetMap_1.get_wei43m_k$(offset);
    return tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
  };
  protoOf(DataWin).resolveSPRT_b3ebtf_k$ = function (offset) {
    var tmp0_elvis_lhs = this.sprtOffsetMap_1.get_wei43m_k$(offset);
    return tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
  };
  protoOf(DataWin).isVersionAtLeast_s3r2dk_k$ = function (major, minor, release, build) {
    if (!(this.detectedMajor_1 === major))
      return this.detectedMajor_1 > major;
    if (!(this.detectedMinor_1 === minor))
      return this.detectedMinor_1 > minor;
    if (!(this.detectedRelease_1 === release))
      return this.detectedRelease_1 > release;
    return this.detectedBuild_1 >= build;
  };
  protoOf(DataWin).bumpVersionTo_z9pmr7_k$ = function (major, minor, release, build) {
    if (this.isVersionAtLeast_s3r2dk_k$(major, minor, release, build))
      return Unit_getInstance();
    this.detectedMajor_1 = major;
    this.detectedMinor_1 = minor;
    this.detectedRelease_1 = release;
    this.detectedBuild_1 = build;
  };
  function Gen8() {
    this.isDebuggerDisabled_1 = 0;
    this.bytecodeVersion_1 = 0;
    this.fileName_1 = null;
    this.config_1 = null;
    this.lastObj_1 = 0;
    this.lastTile_1 = 0;
    this.gameID_1 = 0;
    this.directPlayGuid_1 = new Int8Array(16);
    this.name_1 = null;
    this.major_1 = 0;
    this.minor_1 = 0;
    this.release_1 = 0;
    this.build_1 = 0;
    this.defaultWindowWidth_1 = 0;
    this.defaultWindowHeight_1 = 0;
    this.info_1 = 0;
    this.licenseCRC32__1 = 0;
    this.licenseMD5__1 = new Int8Array(16);
    this.timestamp_1 = new Long(0, 0);
    this.displayName_1 = null;
    this.activeTargets_1 = new Long(0, 0);
    this.functionClassifications_1 = new Long(0, 0);
    this.steamAppID_1 = 0;
    this.debuggerPort_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.roomOrder_1 = new Int32Array([]);
    this.gms2FPS_1 = 0.0;
  }
  protoOf(Gen8).set_isDebuggerDisabled_lbl2x0_k$ = function (_set____db54di) {
    this.isDebuggerDisabled_1 = _set____db54di;
  };
  protoOf(Gen8).get_isDebuggerDisabled_vds2nk_k$ = function () {
    return this.isDebuggerDisabled_1;
  };
  protoOf(Gen8).set_bytecodeVersion_a1y9ha_k$ = function (_set____db54di) {
    this.bytecodeVersion_1 = _set____db54di;
  };
  protoOf(Gen8).get_bytecodeVersion_lhva9y_k$ = function () {
    return this.bytecodeVersion_1;
  };
  protoOf(Gen8).set_fileName_8wc1sd_k$ = function (_set____db54di) {
    this.fileName_1 = _set____db54di;
  };
  protoOf(Gen8).get_fileName_r258mo_k$ = function () {
    return this.fileName_1;
  };
  protoOf(Gen8).set_config_7h8elk_k$ = function (_set____db54di) {
    this.config_1 = _set____db54di;
  };
  protoOf(Gen8).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(Gen8).set_lastObj_wq27j0_k$ = function (_set____db54di) {
    this.lastObj_1 = _set____db54di;
  };
  protoOf(Gen8).get_lastObj_hisns_k$ = function () {
    return this.lastObj_1;
  };
  protoOf(Gen8).set_lastTile_g83i6f_k$ = function (_set____db54di) {
    this.lastTile_1 = _set____db54di;
  };
  protoOf(Gen8).get_lastTile_f3a0q5_k$ = function () {
    return this.lastTile_1;
  };
  protoOf(Gen8).set_gameID_s1kr0i_k$ = function (_set____db54di) {
    this.gameID_1 = _set____db54di;
  };
  protoOf(Gen8).get_gameID_domxzq_k$ = function () {
    return this.gameID_1;
  };
  protoOf(Gen8).set_directPlayGuid_mttgqb_k$ = function (_set____db54di) {
    this.directPlayGuid_1 = _set____db54di;
  };
  protoOf(Gen8).get_directPlayGuid_e3qaz5_k$ = function () {
    return this.directPlayGuid_1;
  };
  protoOf(Gen8).set_name_wkmnld_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(Gen8).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Gen8).set_major_o1whw4_k$ = function (_set____db54di) {
    this.major_1 = _set____db54di;
  };
  protoOf(Gen8).get_major_iv37gw_k$ = function () {
    return this.major_1;
  };
  protoOf(Gen8).set_minor_m1wkk0_k$ = function (_set____db54di) {
    this.minor_1 = _set____db54di;
  };
  protoOf(Gen8).get_minor_iv8ebw_k$ = function () {
    return this.minor_1;
  };
  protoOf(Gen8).set_release_bpzdnm_k$ = function (_set____db54di) {
    this.release_1 = _set____db54di;
  };
  protoOf(Gen8).get_release_jav6e6_k$ = function () {
    return this.release_1;
  };
  protoOf(Gen8).set_build_l5pedz_k$ = function (_set____db54di) {
    this.build_1 = _set____db54di;
  };
  protoOf(Gen8).get_build_ipe7ut_k$ = function () {
    return this.build_1;
  };
  protoOf(Gen8).set_defaultWindowWidth_6s6uzu_k$ = function (_set____db54di) {
    this.defaultWindowWidth_1 = _set____db54di;
  };
  protoOf(Gen8).get_defaultWindowWidth_5borwe_k$ = function () {
    return this.defaultWindowWidth_1;
  };
  protoOf(Gen8).set_defaultWindowHeight_yc0hgt_k$ = function (_set____db54di) {
    this.defaultWindowHeight_1 = _set____db54di;
  };
  protoOf(Gen8).get_defaultWindowHeight_fubc1b_k$ = function () {
    return this.defaultWindowHeight_1;
  };
  protoOf(Gen8).set_info_bgd35v_k$ = function (_set____db54di) {
    this.info_1 = _set____db54di;
  };
  protoOf(Gen8).get_info_woo16f_k$ = function () {
    return this.info_1;
  };
  protoOf(Gen8).set_licenseCRC32_qa5mrd_k$ = function (_set____db54di) {
    this.licenseCRC32__1 = _set____db54di;
  };
  protoOf(Gen8).get_licenseCRC32_urmqbf_k$ = function () {
    return this.licenseCRC32__1;
  };
  protoOf(Gen8).set_licenseMD5_a38guu_k$ = function (_set____db54di) {
    this.licenseMD5__1 = _set____db54di;
  };
  protoOf(Gen8).get_licenseMD5_rlo2zq_k$ = function () {
    return this.licenseMD5__1;
  };
  protoOf(Gen8).set_timestamp_eha0cb_k$ = function (_set____db54di) {
    this.timestamp_1 = _set____db54di;
  };
  protoOf(Gen8).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(Gen8).set_displayName_wcxxs7_k$ = function (_set____db54di) {
    this.displayName_1 = _set____db54di;
  };
  protoOf(Gen8).get_displayName_sscnb0_k$ = function () {
    return this.displayName_1;
  };
  protoOf(Gen8).set_activeTargets_ognhmn_k$ = function (_set____db54di) {
    this.activeTargets_1 = _set____db54di;
  };
  protoOf(Gen8).get_activeTargets_ovb7jn_k$ = function () {
    return this.activeTargets_1;
  };
  protoOf(Gen8).set_functionClassifications_oe193u_k$ = function (_set____db54di) {
    this.functionClassifications_1 = _set____db54di;
  };
  protoOf(Gen8).get_functionClassifications_y90jn0_k$ = function () {
    return this.functionClassifications_1;
  };
  protoOf(Gen8).set_steamAppID_9b7g0v_k$ = function (_set____db54di) {
    this.steamAppID_1 = _set____db54di;
  };
  protoOf(Gen8).get_steamAppID_swckr9_k$ = function () {
    return this.steamAppID_1;
  };
  protoOf(Gen8).set_debuggerPort_8a9izb_k$ = function (_set____db54di) {
    this.debuggerPort_1 = _set____db54di;
  };
  protoOf(Gen8).get_debuggerPort_9bpqid_k$ = function () {
    return this.debuggerPort_1;
  };
  protoOf(Gen8).set_roomOrder_1apr3v_k$ = function (_set____db54di) {
    this.roomOrder_1 = _set____db54di;
  };
  protoOf(Gen8).get_roomOrder_9dt8qe_k$ = function () {
    return this.roomOrder_1;
  };
  protoOf(Gen8).set_gms2FPS_8ycfsv_k$ = function (_set____db54di) {
    this.gms2FPS_1 = _set____db54di;
  };
  protoOf(Gen8).get_gms2FPS_3s0jzv_k$ = function () {
    return this.gms2FPS_1;
  };
  function DataWinParserOptions(parseGen8, parseOptn, parseLang, parseExtn, parseSond, parseAgrp, parseSprt, parseBgnd, parsePath, parseScpt, parseGlob, parseShdr, parseFont, parseTmln, parseObjt, parseRoom, parseTpag, parseCode, parseVari, parseFunc, parseStrg, parseTxtr, parseAudo, skipLoadingPreciseMasksForNonPreciseSprites) {
    parseGen8 = parseGen8 === VOID ? true : parseGen8;
    parseOptn = parseOptn === VOID ? true : parseOptn;
    parseLang = parseLang === VOID ? true : parseLang;
    parseExtn = parseExtn === VOID ? true : parseExtn;
    parseSond = parseSond === VOID ? true : parseSond;
    parseAgrp = parseAgrp === VOID ? true : parseAgrp;
    parseSprt = parseSprt === VOID ? true : parseSprt;
    parseBgnd = parseBgnd === VOID ? true : parseBgnd;
    parsePath = parsePath === VOID ? true : parsePath;
    parseScpt = parseScpt === VOID ? true : parseScpt;
    parseGlob = parseGlob === VOID ? true : parseGlob;
    parseShdr = parseShdr === VOID ? true : parseShdr;
    parseFont = parseFont === VOID ? true : parseFont;
    parseTmln = parseTmln === VOID ? true : parseTmln;
    parseObjt = parseObjt === VOID ? true : parseObjt;
    parseRoom = parseRoom === VOID ? true : parseRoom;
    parseTpag = parseTpag === VOID ? true : parseTpag;
    parseCode = parseCode === VOID ? true : parseCode;
    parseVari = parseVari === VOID ? true : parseVari;
    parseFunc = parseFunc === VOID ? true : parseFunc;
    parseStrg = parseStrg === VOID ? true : parseStrg;
    parseTxtr = parseTxtr === VOID ? true : parseTxtr;
    parseAudo = parseAudo === VOID ? true : parseAudo;
    skipLoadingPreciseMasksForNonPreciseSprites = skipLoadingPreciseMasksForNonPreciseSprites === VOID ? false : skipLoadingPreciseMasksForNonPreciseSprites;
    this.parseGen8__1 = parseGen8;
    this.parseOptn_1 = parseOptn;
    this.parseLang_1 = parseLang;
    this.parseExtn_1 = parseExtn;
    this.parseSond_1 = parseSond;
    this.parseAgrp_1 = parseAgrp;
    this.parseSprt_1 = parseSprt;
    this.parseBgnd_1 = parseBgnd;
    this.parsePath_1 = parsePath;
    this.parseScpt_1 = parseScpt;
    this.parseGlob_1 = parseGlob;
    this.parseShdr_1 = parseShdr;
    this.parseFont_1 = parseFont;
    this.parseTmln_1 = parseTmln;
    this.parseObjt_1 = parseObjt;
    this.parseRoom_1 = parseRoom;
    this.parseTpag_1 = parseTpag;
    this.parseCode_1 = parseCode;
    this.parseVari_1 = parseVari;
    this.parseFunc_1 = parseFunc;
    this.parseStrg_1 = parseStrg;
    this.parseTxtr_1 = parseTxtr;
    this.parseAudo_1 = parseAudo;
    this.skipLoadingPreciseMasksForNonPreciseSprites_1 = skipLoadingPreciseMasksForNonPreciseSprites;
  }
  protoOf(DataWinParserOptions).get_parseGen8_lt2zji_k$ = function () {
    return this.parseGen8__1;
  };
  protoOf(DataWinParserOptions).get_parseOptn_lsxnaz_k$ = function () {
    return this.parseOptn_1;
  };
  protoOf(DataWinParserOptions).get_parseLang_lszvjc_k$ = function () {
    return this.parseLang_1;
  };
  protoOf(DataWinParserOptions).get_parseExtn_lt3v8p_k$ = function () {
    return this.parseExtn_1;
  };
  protoOf(DataWinParserOptions).get_parseSond_lsv490_k$ = function () {
    return this.parseSond_1;
  };
  protoOf(DataWinParserOptions).get_parseAgrp_lt6rua_k$ = function () {
    return this.parseAgrp_1;
  };
  protoOf(DataWinParserOptions).get_parseSprt_lsv3ef_k$ = function () {
    return this.parseSprt_1;
  };
  protoOf(DataWinParserOptions).get_parseBgnd_lt64yj_k$ = function () {
    return this.parseBgnd_1;
  };
  protoOf(DataWinParserOptions).get_parsePath_lsxbg1_k$ = function () {
    return this.parsePath_1;
  };
  protoOf(DataWinParserOptions).get_parseScpt_lsvd36_k$ = function () {
    return this.parseScpt_1;
  };
  protoOf(DataWinParserOptions).get_parseGlob_lt2uam_k$ = function () {
    return this.parseGlob_1;
  };
  protoOf(DataWinParserOptions).get_parseShdr_lsv9o3_k$ = function () {
    return this.parseShdr_1;
  };
  protoOf(DataWinParserOptions).get_parseFont_lt3f2f_k$ = function () {
    return this.parseFont_1;
  };
  protoOf(DataWinParserOptions).get_parseTmln_lsuisb_k$ = function () {
    return this.parseTmln_1;
  };
  protoOf(DataWinParserOptions).get_parseObjt_lsxxx5_k$ = function () {
    return this.parseObjt_1;
  };
  protoOf(DataWinParserOptions).get_parseRoom_lsvr7f_k$ = function () {
    return this.parseRoom_1;
  };
  protoOf(DataWinParserOptions).get_parseTpag_lsugtw_k$ = function () {
    return this.parseTpag_1;
  };
  protoOf(DataWinParserOptions).get_parseCode_lt5ca1_k$ = function () {
    return this.parseCode_1;
  };
  protoOf(DataWinParserOptions).get_parseVari_lsthkk_k$ = function () {
    return this.parseVari_1;
  };
  protoOf(DataWinParserOptions).get_parseFunc_lt3amq_k$ = function () {
    return this.parseFunc_1;
  };
  protoOf(DataWinParserOptions).get_parseStrg_lsv0g0_k$ = function () {
    return this.parseStrg_1;
  };
  protoOf(DataWinParserOptions).get_parseTxtr_lsuafo_k$ = function () {
    return this.parseTxtr_1;
  };
  protoOf(DataWinParserOptions).get_parseAudo_lt6hsn_k$ = function () {
    return this.parseAudo_1;
  };
  protoOf(DataWinParserOptions).get_skipLoadingPreciseMasksForNonPreciseSprites_zbakev_k$ = function () {
    return this.skipLoadingPreciseMasksForNonPreciseSprites_1;
  };
  protoOf(DataWinParserOptions).component1_7eebsc_k$ = function () {
    return this.parseGen8__1;
  };
  protoOf(DataWinParserOptions).component2_7eebsb_k$ = function () {
    return this.parseOptn_1;
  };
  protoOf(DataWinParserOptions).component3_7eebsa_k$ = function () {
    return this.parseLang_1;
  };
  protoOf(DataWinParserOptions).component4_7eebs9_k$ = function () {
    return this.parseExtn_1;
  };
  protoOf(DataWinParserOptions).component5_7eebs8_k$ = function () {
    return this.parseSond_1;
  };
  protoOf(DataWinParserOptions).component6_7eebs7_k$ = function () {
    return this.parseAgrp_1;
  };
  protoOf(DataWinParserOptions).component7_7eebs6_k$ = function () {
    return this.parseSprt_1;
  };
  protoOf(DataWinParserOptions).component8_7eebs5_k$ = function () {
    return this.parseBgnd_1;
  };
  protoOf(DataWinParserOptions).component9_7eebs4_k$ = function () {
    return this.parsePath_1;
  };
  protoOf(DataWinParserOptions).component10_gazzfo_k$ = function () {
    return this.parseScpt_1;
  };
  protoOf(DataWinParserOptions).component11_gazzfn_k$ = function () {
    return this.parseGlob_1;
  };
  protoOf(DataWinParserOptions).component12_gazzfm_k$ = function () {
    return this.parseShdr_1;
  };
  protoOf(DataWinParserOptions).component13_gazzfl_k$ = function () {
    return this.parseFont_1;
  };
  protoOf(DataWinParserOptions).component14_gazzfk_k$ = function () {
    return this.parseTmln_1;
  };
  protoOf(DataWinParserOptions).component15_gazzfj_k$ = function () {
    return this.parseObjt_1;
  };
  protoOf(DataWinParserOptions).component16_gazzfi_k$ = function () {
    return this.parseRoom_1;
  };
  protoOf(DataWinParserOptions).component17_gazzfh_k$ = function () {
    return this.parseTpag_1;
  };
  protoOf(DataWinParserOptions).component18_gazzfg_k$ = function () {
    return this.parseCode_1;
  };
  protoOf(DataWinParserOptions).component19_gazzff_k$ = function () {
    return this.parseVari_1;
  };
  protoOf(DataWinParserOptions).component20_gazzet_k$ = function () {
    return this.parseFunc_1;
  };
  protoOf(DataWinParserOptions).component21_gazzes_k$ = function () {
    return this.parseStrg_1;
  };
  protoOf(DataWinParserOptions).component22_gazzer_k$ = function () {
    return this.parseTxtr_1;
  };
  protoOf(DataWinParserOptions).component23_gazzeq_k$ = function () {
    return this.parseAudo_1;
  };
  protoOf(DataWinParserOptions).component24_gazzep_k$ = function () {
    return this.skipLoadingPreciseMasksForNonPreciseSprites_1;
  };
  protoOf(DataWinParserOptions).copy_j74a9h_k$ = function (parseGen8, parseOptn, parseLang, parseExtn, parseSond, parseAgrp, parseSprt, parseBgnd, parsePath, parseScpt, parseGlob, parseShdr, parseFont, parseTmln, parseObjt, parseRoom, parseTpag, parseCode, parseVari, parseFunc, parseStrg, parseTxtr, parseAudo, skipLoadingPreciseMasksForNonPreciseSprites) {
    return new DataWinParserOptions(parseGen8, parseOptn, parseLang, parseExtn, parseSond, parseAgrp, parseSprt, parseBgnd, parsePath, parseScpt, parseGlob, parseShdr, parseFont, parseTmln, parseObjt, parseRoom, parseTpag, parseCode, parseVari, parseFunc, parseStrg, parseTxtr, parseAudo, skipLoadingPreciseMasksForNonPreciseSprites);
  };
  protoOf(DataWinParserOptions).copy$default_byniot_k$ = function (parseGen8, parseOptn, parseLang, parseExtn, parseSond, parseAgrp, parseSprt, parseBgnd, parsePath, parseScpt, parseGlob, parseShdr, parseFont, parseTmln, parseObjt, parseRoom, parseTpag, parseCode, parseVari, parseFunc, parseStrg, parseTxtr, parseAudo, skipLoadingPreciseMasksForNonPreciseSprites, $super) {
    parseGen8 = parseGen8 === VOID ? this.parseGen8__1 : parseGen8;
    parseOptn = parseOptn === VOID ? this.parseOptn_1 : parseOptn;
    parseLang = parseLang === VOID ? this.parseLang_1 : parseLang;
    parseExtn = parseExtn === VOID ? this.parseExtn_1 : parseExtn;
    parseSond = parseSond === VOID ? this.parseSond_1 : parseSond;
    parseAgrp = parseAgrp === VOID ? this.parseAgrp_1 : parseAgrp;
    parseSprt = parseSprt === VOID ? this.parseSprt_1 : parseSprt;
    parseBgnd = parseBgnd === VOID ? this.parseBgnd_1 : parseBgnd;
    parsePath = parsePath === VOID ? this.parsePath_1 : parsePath;
    parseScpt = parseScpt === VOID ? this.parseScpt_1 : parseScpt;
    parseGlob = parseGlob === VOID ? this.parseGlob_1 : parseGlob;
    parseShdr = parseShdr === VOID ? this.parseShdr_1 : parseShdr;
    parseFont = parseFont === VOID ? this.parseFont_1 : parseFont;
    parseTmln = parseTmln === VOID ? this.parseTmln_1 : parseTmln;
    parseObjt = parseObjt === VOID ? this.parseObjt_1 : parseObjt;
    parseRoom = parseRoom === VOID ? this.parseRoom_1 : parseRoom;
    parseTpag = parseTpag === VOID ? this.parseTpag_1 : parseTpag;
    parseCode = parseCode === VOID ? this.parseCode_1 : parseCode;
    parseVari = parseVari === VOID ? this.parseVari_1 : parseVari;
    parseFunc = parseFunc === VOID ? this.parseFunc_1 : parseFunc;
    parseStrg = parseStrg === VOID ? this.parseStrg_1 : parseStrg;
    parseTxtr = parseTxtr === VOID ? this.parseTxtr_1 : parseTxtr;
    parseAudo = parseAudo === VOID ? this.parseAudo_1 : parseAudo;
    skipLoadingPreciseMasksForNonPreciseSprites = skipLoadingPreciseMasksForNonPreciseSprites === VOID ? this.skipLoadingPreciseMasksForNonPreciseSprites_1 : skipLoadingPreciseMasksForNonPreciseSprites;
    return $super === VOID ? this.copy_j74a9h_k$(parseGen8, parseOptn, parseLang, parseExtn, parseSond, parseAgrp, parseSprt, parseBgnd, parsePath, parseScpt, parseGlob, parseShdr, parseFont, parseTmln, parseObjt, parseRoom, parseTpag, parseCode, parseVari, parseFunc, parseStrg, parseTxtr, parseAudo, skipLoadingPreciseMasksForNonPreciseSprites) : $super.copy_j74a9h_k$.call(this, parseGen8, parseOptn, parseLang, parseExtn, parseSond, parseAgrp, parseSprt, parseBgnd, parsePath, parseScpt, parseGlob, parseShdr, parseFont, parseTmln, parseObjt, parseRoom, parseTpag, parseCode, parseVari, parseFunc, parseStrg, parseTxtr, parseAudo, skipLoadingPreciseMasksForNonPreciseSprites);
  };
  protoOf(DataWinParserOptions).toString = function () {
    return 'DataWinParserOptions(parseGen8=' + this.parseGen8__1 + ', parseOptn=' + this.parseOptn_1 + ', parseLang=' + this.parseLang_1 + ', parseExtn=' + this.parseExtn_1 + ', parseSond=' + this.parseSond_1 + ', parseAgrp=' + this.parseAgrp_1 + ', parseSprt=' + this.parseSprt_1 + ', parseBgnd=' + this.parseBgnd_1 + ', parsePath=' + this.parsePath_1 + ', parseScpt=' + this.parseScpt_1 + ', parseGlob=' + this.parseGlob_1 + ', parseShdr=' + this.parseShdr_1 + ', parseFont=' + this.parseFont_1 + ', parseTmln=' + this.parseTmln_1 + ', parseObjt=' + this.parseObjt_1 + ', parseRoom=' + this.parseRoom_1 + ', parseTpag=' + this.parseTpag_1 + ', parseCode=' + this.parseCode_1 + ', parseVari=' + this.parseVari_1 + ', parseFunc=' + this.parseFunc_1 + ', parseStrg=' + this.parseStrg_1 + ', parseTxtr=' + this.parseTxtr_1 + ', parseAudo=' + this.parseAudo_1 + ', skipLoadingPreciseMasksForNonPreciseSprites=' + this.skipLoadingPreciseMasksForNonPreciseSprites_1 + ')';
  };
  protoOf(DataWinParserOptions).hashCode = function () {
    var result = getBooleanHashCode(this.parseGen8__1);
    result = imul(result, 31) + getBooleanHashCode(this.parseOptn_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseLang_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseExtn_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseSond_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseAgrp_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseSprt_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseBgnd_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parsePath_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseScpt_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseGlob_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseShdr_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseFont_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseTmln_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseObjt_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseRoom_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseTpag_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseCode_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseVari_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseFunc_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseStrg_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseTxtr_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.parseAudo_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.skipLoadingPreciseMasksForNonPreciseSprites_1) | 0;
    return result;
  };
  protoOf(DataWinParserOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DataWinParserOptions))
      return false;
    if (!(this.parseGen8__1 === other.parseGen8__1))
      return false;
    if (!(this.parseOptn_1 === other.parseOptn_1))
      return false;
    if (!(this.parseLang_1 === other.parseLang_1))
      return false;
    if (!(this.parseExtn_1 === other.parseExtn_1))
      return false;
    if (!(this.parseSond_1 === other.parseSond_1))
      return false;
    if (!(this.parseAgrp_1 === other.parseAgrp_1))
      return false;
    if (!(this.parseSprt_1 === other.parseSprt_1))
      return false;
    if (!(this.parseBgnd_1 === other.parseBgnd_1))
      return false;
    if (!(this.parsePath_1 === other.parsePath_1))
      return false;
    if (!(this.parseScpt_1 === other.parseScpt_1))
      return false;
    if (!(this.parseGlob_1 === other.parseGlob_1))
      return false;
    if (!(this.parseShdr_1 === other.parseShdr_1))
      return false;
    if (!(this.parseFont_1 === other.parseFont_1))
      return false;
    if (!(this.parseTmln_1 === other.parseTmln_1))
      return false;
    if (!(this.parseObjt_1 === other.parseObjt_1))
      return false;
    if (!(this.parseRoom_1 === other.parseRoom_1))
      return false;
    if (!(this.parseTpag_1 === other.parseTpag_1))
      return false;
    if (!(this.parseCode_1 === other.parseCode_1))
      return false;
    if (!(this.parseVari_1 === other.parseVari_1))
      return false;
    if (!(this.parseFunc_1 === other.parseFunc_1))
      return false;
    if (!(this.parseStrg_1 === other.parseStrg_1))
      return false;
    if (!(this.parseTxtr_1 === other.parseTxtr_1))
      return false;
    if (!(this.parseAudo_1 === other.parseAudo_1))
      return false;
    if (!(this.skipLoadingPreciseMasksForNonPreciseSprites_1 === other.skipLoadingPreciseMasksForNonPreciseSprites_1))
      return false;
    return true;
  };
  function Sprite() {
    this.name_1 = null;
    this.width_1 = 0;
    this.height_1 = 0;
    this.marginLeft_1 = 0;
    this.marginRight_1 = 0;
    this.marginBottom_1 = 0;
    this.marginTop_1 = 0;
    this.transparent_1 = false;
    this.smooth_1 = false;
    this.preload_1 = false;
    this.bboxMode_1 = 0;
    this.sepMasks_1 = 0;
    this.originX_1 = 0;
    this.originY_1 = 0;
    this.sVersion_1 = 0;
    this.sSpriteType_1 = 0;
    this.gms2PlaybackSpeed_1 = 0.0;
    this.gms2PlaybackSpeedType_1 = false;
    this.specialType_1 = false;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.textureOffsets_1 = new Int32Array([]);
    this.masks_1 = null;
  }
  protoOf(Sprite).set_name_wkmnld_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(Sprite).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Sprite).set_width_2l5qrj_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(Sprite).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(Sprite).set_height_ubp1uk_k$ = function (_set____db54di) {
    this.height_1 = _set____db54di;
  };
  protoOf(Sprite).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(Sprite).set_marginLeft_xohoqy_k$ = function (_set____db54di) {
    this.marginLeft_1 = _set____db54di;
  };
  protoOf(Sprite).get_marginLeft_cf6w66_k$ = function () {
    return this.marginLeft_1;
  };
  protoOf(Sprite).set_marginRight_ket3nb_k$ = function (_set____db54di) {
    this.marginRight_1 = _set____db54di;
  };
  protoOf(Sprite).get_marginRight_u0qrhh_k$ = function () {
    return this.marginRight_1;
  };
  protoOf(Sprite).set_marginBottom_mxfnu6_k$ = function (_set____db54di) {
    this.marginBottom_1 = _set____db54di;
  };
  protoOf(Sprite).get_marginBottom_8loou_k$ = function () {
    return this.marginBottom_1;
  };
  protoOf(Sprite).set_marginTop_pey8ta_k$ = function (_set____db54di) {
    this.marginTop_1 = _set____db54di;
  };
  protoOf(Sprite).get_marginTop_8ripk2_k$ = function () {
    return this.marginTop_1;
  };
  protoOf(Sprite).set_transparent_g9rzpc_k$ = function (_set____db54di) {
    this.transparent_1 = _set____db54di;
  };
  protoOf(Sprite).get_transparent_enj387_k$ = function () {
    return this.transparent_1;
  };
  protoOf(Sprite).set_smooth_k3e2y_k$ = function (_set____db54di) {
    this.smooth_1 = _set____db54di;
  };
  protoOf(Sprite).get_smooth_jjtgaf_k$ = function () {
    return this.smooth_1;
  };
  protoOf(Sprite).set_preload_k1sund_k$ = function (_set____db54di) {
    this.preload_1 = _set____db54di;
  };
  protoOf(Sprite).get_preload_402480_k$ = function () {
    return this.preload_1;
  };
  protoOf(Sprite).set_bboxMode_3r6dhb_k$ = function (_set____db54di) {
    this.bboxMode_1 = _set____db54di;
  };
  protoOf(Sprite).get_bboxMode_nts4dx_k$ = function () {
    return this.bboxMode_1;
  };
  protoOf(Sprite).set_sepMasks_ibnmbi_k$ = function (_set____db54di) {
    this.sepMasks_1 = _set____db54di;
  };
  protoOf(Sprite).get_sepMasks_akk2y6_k$ = function () {
    return this.sepMasks_1;
  };
  protoOf(Sprite).set_originX_x2h4x9_k$ = function (_set____db54di) {
    this.originX_1 = _set____db54di;
  };
  protoOf(Sprite).get_originX_imcj5j_k$ = function () {
    return this.originX_1;
  };
  protoOf(Sprite).set_originY_32z0ky_k$ = function (_set____db54di) {
    this.originY_1 = _set____db54di;
  };
  protoOf(Sprite).get_originY_imcj5i_k$ = function () {
    return this.originY_1;
  };
  protoOf(Sprite).set_sVersion_2sou6y_k$ = function (_set____db54di) {
    this.sVersion_1 = _set____db54di;
  };
  protoOf(Sprite).get_sVersion_ma0cb6_k$ = function () {
    return this.sVersion_1;
  };
  protoOf(Sprite).set_sSpriteType_djxb8t_k$ = function (_set____db54di) {
    this.sSpriteType_1 = _set____db54di;
  };
  protoOf(Sprite).get_sSpriteType_6yfawn_k$ = function () {
    return this.sSpriteType_1;
  };
  protoOf(Sprite).set_gms2PlaybackSpeed_ixpbvm_k$ = function (_set____db54di) {
    this.gms2PlaybackSpeed_1 = _set____db54di;
  };
  protoOf(Sprite).get_gms2PlaybackSpeed_wo9qo2_k$ = function () {
    return this.gms2PlaybackSpeed_1;
  };
  protoOf(Sprite).set_gms2PlaybackSpeedType_jpi241_k$ = function (_set____db54di) {
    this.gms2PlaybackSpeedType_1 = _set____db54di;
  };
  protoOf(Sprite).get_gms2PlaybackSpeedType_f5obu0_k$ = function () {
    return this.gms2PlaybackSpeedType_1;
  };
  protoOf(Sprite).set_specialType_6k150h_k$ = function (_set____db54di) {
    this.specialType_1 = _set____db54di;
  };
  protoOf(Sprite).get_specialType_j7ahi_k$ = function () {
    return this.specialType_1;
  };
  protoOf(Sprite).set_textureOffsets_yjdr47_k$ = function (_set____db54di) {
    this.textureOffsets_1 = _set____db54di;
  };
  protoOf(Sprite).get_textureOffsets_n9qq1e_k$ = function () {
    return this.textureOffsets_1;
  };
  protoOf(Sprite).set_masks_k1bdhz_k$ = function (_set____db54di) {
    this.masks_1 = _set____db54di;
  };
  protoOf(Sprite).get_masks_iv3e1q_k$ = function () {
    return this.masks_1;
  };
  function Sprt() {
    this.sprites_1 = emptyList();
  }
  protoOf(Sprt).set_sprites_q6sl6l_k$ = function (_set____db54di) {
    this.sprites_1 = _set____db54di;
  };
  protoOf(Sprt).get_sprites_vqz1qz_k$ = function () {
    return this.sprites_1;
  };
  function Background() {
    this.name_1 = null;
    this.transparent_1 = false;
    this.smooth_1 = false;
    this.preload_1 = false;
    this.textureOffset_1 = 0;
    this.gms2UnknownAlways2__1 = 0;
    this.gms2TileWidth_1 = 0;
    this.gms2TileHeight_1 = 0;
    this.gms2TileSeparationX_1 = 0;
    this.gms2TileSeparationY_1 = 0;
    this.gms2OutputBorderX_1 = 0;
    this.gms2OutputBorderY_1 = 0;
    this.gms2TileColumns_1 = 0;
    this.gms2ItemsPerTileCount_1 = 0;
    this.gms2TileCount_1 = 0;
    this.gms2ExportedSpriteIndex_1 = 0;
    this.gms2FrameLength_1 = new Long(0, 0);
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.gms2TileIds_1 = new Int32Array([]);
  }
  protoOf(Background).set_name_wkmnld_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(Background).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Background).set_transparent_g9rzpc_k$ = function (_set____db54di) {
    this.transparent_1 = _set____db54di;
  };
  protoOf(Background).get_transparent_enj387_k$ = function () {
    return this.transparent_1;
  };
  protoOf(Background).set_smooth_k3e2y_k$ = function (_set____db54di) {
    this.smooth_1 = _set____db54di;
  };
  protoOf(Background).get_smooth_jjtgaf_k$ = function () {
    return this.smooth_1;
  };
  protoOf(Background).set_preload_k1sund_k$ = function (_set____db54di) {
    this.preload_1 = _set____db54di;
  };
  protoOf(Background).get_preload_402480_k$ = function () {
    return this.preload_1;
  };
  protoOf(Background).set_textureOffset_yflhc9_k$ = function (_set____db54di) {
    this.textureOffset_1 = _set____db54di;
  };
  protoOf(Background).get_textureOffset_1jgorp_k$ = function () {
    return this.textureOffset_1;
  };
  protoOf(Background).set_gms2UnknownAlways2_f3mqz7_k$ = function (_set____db54di) {
    this.gms2UnknownAlways2__1 = _set____db54di;
  };
  protoOf(Background).get_gms2UnknownAlways2_18lr5z_k$ = function () {
    return this.gms2UnknownAlways2__1;
  };
  protoOf(Background).set_gms2TileWidth_4czjym_k$ = function (_set____db54di) {
    this.gms2TileWidth_1 = _set____db54di;
  };
  protoOf(Background).get_gms2TileWidth_670qru_k$ = function () {
    return this.gms2TileWidth_1;
  };
  protoOf(Background).set_gms2TileHeight_wmx4fj_k$ = function (_set____db54di) {
    this.gms2TileHeight_1 = _set____db54di;
  };
  protoOf(Background).get_gms2TileHeight_s7hov1_k$ = function () {
    return this.gms2TileHeight_1;
  };
  protoOf(Background).set_gms2TileSeparationX_kcict6_k$ = function (_set____db54di) {
    this.gms2TileSeparationX_1 = _set____db54di;
  };
  protoOf(Background).get_gms2TileSeparationX_fi73iu_k$ = function () {
    return this.gms2TileSeparationX_1;
  };
  protoOf(Background).set_gms2TileSeparationY_fsxsp1_k$ = function (_set____db54di) {
    this.gms2TileSeparationY_1 = _set____db54di;
  };
  protoOf(Background).get_gms2TileSeparationY_fi73iv_k$ = function () {
    return this.gms2TileSeparationY_1;
  };
  protoOf(Background).set_gms2OutputBorderX_3ko6cf_k$ = function (_set____db54di) {
    this.gms2OutputBorderX_1 = _set____db54di;
  };
  protoOf(Background).get_gms2OutputBorderX_j544zh_k$ = function () {
    return this.gms2OutputBorderX_1;
  };
  protoOf(Background).set_gms2OutputBorderY_vazq4i_k$ = function (_set____db54di) {
    this.gms2OutputBorderY_1 = _set____db54di;
  };
  protoOf(Background).get_gms2OutputBorderY_j544zi_k$ = function () {
    return this.gms2OutputBorderY_1;
  };
  protoOf(Background).set_gms2TileColumns_72mat7_k$ = function (_set____db54di) {
    this.gms2TileColumns_1 = _set____db54di;
  };
  protoOf(Background).get_gms2TileColumns_jnegyn_k$ = function () {
    return this.gms2TileColumns_1;
  };
  protoOf(Background).set_gms2ItemsPerTileCount_i4nz8m_k$ = function (_set____db54di) {
    this.gms2ItemsPerTileCount_1 = _set____db54di;
  };
  protoOf(Background).get_gms2ItemsPerTileCount_eivyzu_k$ = function () {
    return this.gms2ItemsPerTileCount_1;
  };
  protoOf(Background).set_gms2TileCount_d49jux_k$ = function (_set____db54di) {
    this.gms2TileCount_1 = _set____db54di;
  };
  protoOf(Background).get_gms2TileCount_5w51ar_k$ = function () {
    return this.gms2TileCount_1;
  };
  protoOf(Background).set_gms2ExportedSpriteIndex_qxc3u8_k$ = function (_set____db54di) {
    this.gms2ExportedSpriteIndex_1 = _set____db54di;
  };
  protoOf(Background).get_gms2ExportedSpriteIndex_d9fegk_k$ = function () {
    return this.gms2ExportedSpriteIndex_1;
  };
  protoOf(Background).set_gms2FrameLength_4ir0h9_k$ = function (_set____db54di) {
    this.gms2FrameLength_1 = _set____db54di;
  };
  protoOf(Background).get_gms2FrameLength_bpguez_k$ = function () {
    return this.gms2FrameLength_1;
  };
  protoOf(Background).set_gms2TileIds_nespcj_k$ = function (_set____db54di) {
    this.gms2TileIds_1 = _set____db54di;
  };
  protoOf(Background).get_gms2TileIds_6d264c_k$ = function () {
    return this.gms2TileIds_1;
  };
  function Bgnd() {
    this.backgrounds_1 = emptyList();
  }
  protoOf(Bgnd).set_backgrounds_137y1h_k$ = function (_set____db54di) {
    this.backgrounds_1 = _set____db54di;
  };
  protoOf(Bgnd).get_backgrounds_ttk0v8_k$ = function () {
    return this.backgrounds_1;
  };
  function Font() {
    this.name_1 = null;
    this.displayName_1 = null;
    this.emSize_1 = 0;
    this.bold_1 = false;
    this.italic_1 = false;
    this.rangeStart_1 = 0;
    this.charset_1 = 0;
    this.antiAliasing_1 = 0;
    this.rangeEnd_1 = 0;
    this.textureOffset_1 = 0;
    this.scaleX_1 = 0.0;
    this.scaleY_1 = 0.0;
    this.ascenderOffset_1 = 0;
    this.ascender_1 = 0;
    this.sdfSpread_1 = 0;
    this.lineHeight_1 = 0;
    this.hasAscender_1 = false;
    this.hasSDFSpread_1 = false;
    this.hasLineHeight_1 = false;
    this.glyphs_1 = emptyList();
    this.maxGlyphHeight_1 = 0;
    this.isSpriteFont_1 = false;
    this.spriteIndex_1 = -1;
  }
  protoOf(Font).set_name_wkmnld_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(Font).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Font).set_displayName_wcxxs7_k$ = function (_set____db54di) {
    this.displayName_1 = _set____db54di;
  };
  protoOf(Font).get_displayName_sscnb0_k$ = function () {
    return this.displayName_1;
  };
  protoOf(Font).set_emSize_hdfiwu_k$ = function (_set____db54di) {
    this.emSize_1 = _set____db54di;
  };
  protoOf(Font).get_emSize_cwoqtu_k$ = function () {
    return this.emSize_1;
  };
  protoOf(Font).set_bold_q46tkd_k$ = function (_set____db54di) {
    this.bold_1 = _set____db54di;
  };
  protoOf(Font).get_bold_wojl5a_k$ = function () {
    return this.bold_1;
  };
  protoOf(Font).set_italic_a42pjc_k$ = function (_set____db54di) {
    this.italic_1 = _set____db54di;
  };
  protoOf(Font).get_italic_ewys6x_k$ = function () {
    return this.italic_1;
  };
  protoOf(Font).set_rangeStart_don1lm_k$ = function (_set____db54di) {
    this.rangeStart_1 = _set____db54di;
  };
  protoOf(Font).get_rangeStart_knlt4e_k$ = function () {
    return this.rangeStart_1;
  };
  protoOf(Font).set_charset_g76vuv_k$ = function (_set____db54di) {
    this.charset_1 = _set____db54di;
  };
  protoOf(Font).get_charset_dhkvhf_k$ = function () {
    return this.charset_1;
  };
  protoOf(Font).set_antiAliasing_kkea95_k$ = function (_set____db54di) {
    this.antiAliasing_1 = _set____db54di;
  };
  protoOf(Font).get_antiAliasing_8scotf_k$ = function () {
    return this.antiAliasing_1;
  };
  protoOf(Font).set_rangeEnd_fcc4mr_k$ = function (_set____db54di) {
    this.rangeEnd_1 = _set____db54di;
  };
  protoOf(Font).get_rangeEnd_rmeme1_k$ = function () {
    return this.rangeEnd_1;
  };
  protoOf(Font).set_textureOffset_yflhc9_k$ = function (_set____db54di) {
    this.textureOffset_1 = _set____db54di;
  };
  protoOf(Font).get_textureOffset_1jgorp_k$ = function () {
    return this.textureOffset_1;
  };
  protoOf(Font).set_scaleX_ykjjzx_k$ = function (_set____db54di) {
    this.scaleX_1 = _set____db54di;
  };
  protoOf(Font).get_scaleX_je2hxz_k$ = function () {
    return this.scaleX_1;
  };
  protoOf(Font).set_scaleY_i4eqp0_k$ = function (_set____db54di) {
    this.scaleY_1 = _set____db54di;
  };
  protoOf(Font).get_scaleY_je2hy0_k$ = function () {
    return this.scaleY_1;
  };
  protoOf(Font).set_ascenderOffset_97oy7z_k$ = function (_set____db54di) {
    this.ascenderOffset_1 = _set____db54di;
  };
  protoOf(Font).get_ascenderOffset_7yhgul_k$ = function () {
    return this.ascenderOffset_1;
  };
  protoOf(Font).set_ascender_o01h64_k$ = function (_set____db54di) {
    this.ascender_1 = _set____db54di;
  };
  protoOf(Font).get_ascender_ph5lmo_k$ = function () {
    return this.ascender_1;
  };
  protoOf(Font).set_sdfSpread_f6gi0z_k$ = function (_set____db54di) {
    this.sdfSpread_1 = _set____db54di;
  };
  protoOf(Font).get_sdfSpread_30llep_k$ = function () {
    return this.sdfSpread_1;
  };
  protoOf(Font).set_lineHeight_x4ch8w_k$ = function (_set____db54di) {
    this.lineHeight_1 = _set____db54di;
  };
  protoOf(Font).get_lineHeight_spcmd8_k$ = function () {
    return this.lineHeight_1;
  };
  protoOf(Font).set_hasAscender_11fpj3_k$ = function (_set____db54di) {
    this.hasAscender_1 = _set____db54di;
  };
  protoOf(Font).get_hasAscender_ncjxdk_k$ = function () {
    return this.hasAscender_1;
  };
  protoOf(Font).set_hasSDFSpread_ttmo6i_k$ = function (_set____db54di) {
    this.hasSDFSpread_1 = _set____db54di;
  };
  protoOf(Font).get_hasSDFSpread_3nd1av_k$ = function () {
    return this.hasSDFSpread_1;
  };
  protoOf(Font).set_hasLineHeight_3ps0vx_k$ = function (_set____db54di) {
    this.hasLineHeight_1 = _set____db54di;
  };
  protoOf(Font).get_hasLineHeight_1nnado_k$ = function () {
    return this.hasLineHeight_1;
  };
  protoOf(Font).set_glyphs_3qsuu4_k$ = function (_set____db54di) {
    this.glyphs_1 = _set____db54di;
  };
  protoOf(Font).get_glyphs_duwlao_k$ = function () {
    return this.glyphs_1;
  };
  protoOf(Font).set_maxGlyphHeight_763pb8_k$ = function (_set____db54di) {
    this.maxGlyphHeight_1 = _set____db54di;
  };
  protoOf(Font).get_maxGlyphHeight_yylabc_k$ = function () {
    return this.maxGlyphHeight_1;
  };
  protoOf(Font).set_isSpriteFont_wacid6_k$ = function (_set____db54di) {
    this.isSpriteFont_1 = _set____db54di;
  };
  protoOf(Font).get_isSpriteFont_5951kp_k$ = function () {
    return this.isSpriteFont_1;
  };
  protoOf(Font).set_spriteIndex_k6sht4_k$ = function (_set____db54di) {
    this.spriteIndex_1 = _set____db54di;
  };
  protoOf(Font).get_spriteIndex_hnyap0_k$ = function () {
    return this.spriteIndex_1;
  };
  function FontChunk() {
    this.fonts_1 = emptyList();
  }
  protoOf(FontChunk).set_fonts_1mzg7r_k$ = function (_set____db54di) {
    this.fonts_1 = _set____db54di;
  };
  protoOf(FontChunk).get_fonts_irho7v_k$ = function () {
    return this.fonts_1;
  };
  function Texture(scaled, blobOffset, blobSize, blobData, generatedMips, textureBlockSize, textureWidth, textureHeight, indexInGroup) {
    generatedMips = generatedMips === VOID ? 0 : generatedMips;
    textureBlockSize = textureBlockSize === VOID ? 0 : textureBlockSize;
    textureWidth = textureWidth === VOID ? 0 : textureWidth;
    textureHeight = textureHeight === VOID ? 0 : textureHeight;
    indexInGroup = indexInGroup === VOID ? 0 : indexInGroup;
    this.scaled_1 = scaled;
    this.blobOffset_1 = blobOffset;
    this.blobSize_1 = blobSize;
    this.blobData_1 = blobData;
    this.generatedMips_1 = generatedMips;
    this.textureBlockSize_1 = textureBlockSize;
    this.textureWidth_1 = textureWidth;
    this.textureHeight_1 = textureHeight;
    this.indexInGroup_1 = indexInGroup;
  }
  protoOf(Texture).get_scaled_je2hyb_k$ = function () {
    return this.scaled_1;
  };
  protoOf(Texture).get_blobOffset_qqbv8n_k$ = function () {
    return this.blobOffset_1;
  };
  protoOf(Texture).get_blobSize_s7j3lz_k$ = function () {
    return this.blobSize_1;
  };
  protoOf(Texture).get_blobData_s79cq8_k$ = function () {
    return this.blobData_1;
  };
  protoOf(Texture).get_generatedMips_ropn6t_k$ = function () {
    return this.generatedMips_1;
  };
  protoOf(Texture).get_textureBlockSize_ci91pg_k$ = function () {
    return this.textureBlockSize_1;
  };
  protoOf(Texture).get_textureWidth_kg5b9o_k$ = function () {
    return this.textureWidth_1;
  };
  protoOf(Texture).get_textureHeight_1scsg7_k$ = function () {
    return this.textureHeight_1;
  };
  protoOf(Texture).get_indexInGroup_p6rixb_k$ = function () {
    return this.indexInGroup_1;
  };
  function Txtr() {
    this.textures_1 = emptyList();
  }
  protoOf(Txtr).set_textures_tmhkvp_k$ = function (_set____db54di) {
    this.textures_1 = _set____db54di;
  };
  protoOf(Txtr).get_textures_mn839d_k$ = function () {
    return this.textures_1;
  };
  function TexturePageItem() {
    this.sourceX_1 = 0;
    this.sourceY_1 = 0;
    this.sourceWidth_1 = 0;
    this.sourceHeight_1 = 0;
    this.targetX_1 = 0;
    this.targetY_1 = 0;
    this.targetWidth_1 = 0;
    this.targetHeight_1 = 0;
    this.boundingWidth_1 = 0;
    this.boundingHeight_1 = 0;
    this.texturePageId_1 = 0;
  }
  protoOf(TexturePageItem).set_sourceX_r7o0u0_k$ = function (_set____db54di) {
    this.sourceX_1 = _set____db54di;
  };
  protoOf(TexturePageItem).get_sourceX_w67w3w_k$ = function () {
    return this.sourceX_1;
  };
  protoOf(TexturePageItem).set_sourceY_8xs4o7_k$ = function (_set____db54di) {
    this.sourceY_1 = _set____db54di;
  };
  protoOf(TexturePageItem).get_sourceY_w67w3v_k$ = function () {
    return this.sourceY_1;
  };
  protoOf(TexturePageItem).set_sourceWidth_b25qyi_k$ = function (_set____db54di) {
    this.sourceWidth_1 = _set____db54di;
  };
  protoOf(TexturePageItem).get_sourceWidth_cd7mki_k$ = function () {
    return this.sourceWidth_1;
  };
  protoOf(TexturePageItem).set_sourceHeight_j7yy89_k$ = function (_set____db54di) {
    this.sourceHeight_1 = _set____db54di;
  };
  protoOf(TexturePageItem).get_sourceHeight_l27kvf_k$ = function () {
    return this.sourceHeight_1;
  };
  protoOf(TexturePageItem).set_targetX_wc35c2_k$ = function (_set____db54di) {
    this.targetX_1 = _set____db54di;
  };
  protoOf(TexturePageItem).get_targetX_o6ao76_k$ = function () {
    return this.targetX_1;
  };
  protoOf(TexturePageItem).set_targetY_3td065_k$ = function (_set____db54di) {
    this.targetY_1 = _set____db54di;
  };
  protoOf(TexturePageItem).get_targetY_o6ao75_k$ = function () {
    return this.targetY_1;
  };
  protoOf(TexturePageItem).set_targetWidth_s51mpc_k$ = function (_set____db54di) {
    this.targetWidth_1 = _set____db54di;
  };
  protoOf(TexturePageItem).get_targetWidth_kphvw4_k$ = function () {
    return this.targetWidth_1;
  };
  protoOf(TexturePageItem).set_targetHeight_jjh5gt_k$ = function (_set____db54di) {
    this.targetHeight_1 = _set____db54di;
  };
  protoOf(TexturePageItem).get_targetHeight_9u6jrz_k$ = function () {
    return this.targetHeight_1;
  };
  protoOf(TexturePageItem).set_boundingWidth_7sg519_k$ = function (_set____db54di) {
    this.boundingWidth_1 = _set____db54di;
  };
  protoOf(TexturePageItem).get_boundingWidth_seehlz_k$ = function () {
    return this.boundingWidth_1;
  };
  protoOf(TexturePageItem).set_boundingHeight_340u8w_k$ = function (_set____db54di) {
    this.boundingHeight_1 = _set____db54di;
  };
  protoOf(TexturePageItem).get_boundingHeight_z6x34c_k$ = function () {
    return this.boundingHeight_1;
  };
  protoOf(TexturePageItem).set_texturePageId_d2obls_k$ = function (_set____db54di) {
    this.texturePageId_1 = _set____db54di;
  };
  protoOf(TexturePageItem).get_texturePageId_1xro4c_k$ = function () {
    return this.texturePageId_1;
  };
  function Tpag() {
    this.items_1 = emptyList();
  }
  protoOf(Tpag).set_items_mpjnkr_k$ = function (_set____db54di) {
    this.items_1 = _set____db54di;
  };
  protoOf(Tpag).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  function RoomTile() {
    this.x_1 = 0;
    this.y_1 = 0;
    this.useSpriteDefinition_1 = false;
    this.backgroundDefinition_1 = 0;
    this.sourceX_1 = 0;
    this.sourceY_1 = 0;
    this.width_1 = 0;
    this.height_1 = 0;
    this.tileDepth_1 = 0;
    this.instanceID_1 = 0;
    this.scaleX_1 = 0.0;
    this.scaleY_1 = 0.0;
    this.color_1 = 0;
  }
  protoOf(RoomTile).set_x_z5k1bn_k$ = function (_set____db54di) {
    this.x_1 = _set____db54di;
  };
  protoOf(RoomTile).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(RoomTile).set_y_zw46k_k$ = function (_set____db54di) {
    this.y_1 = _set____db54di;
  };
  protoOf(RoomTile).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(RoomTile).set_useSpriteDefinition_utdlwt_k$ = function (_set____db54di) {
    this.useSpriteDefinition_1 = _set____db54di;
  };
  protoOf(RoomTile).get_useSpriteDefinition_1rov92_k$ = function () {
    return this.useSpriteDefinition_1;
  };
  protoOf(RoomTile).set_backgroundDefinition_h9uju2_k$ = function (_set____db54di) {
    this.backgroundDefinition_1 = _set____db54di;
  };
  protoOf(RoomTile).get_backgroundDefinition_2hdx7u_k$ = function () {
    return this.backgroundDefinition_1;
  };
  protoOf(RoomTile).set_sourceX_r7o0u0_k$ = function (_set____db54di) {
    this.sourceX_1 = _set____db54di;
  };
  protoOf(RoomTile).get_sourceX_w67w3w_k$ = function () {
    return this.sourceX_1;
  };
  protoOf(RoomTile).set_sourceY_8xs4o7_k$ = function (_set____db54di) {
    this.sourceY_1 = _set____db54di;
  };
  protoOf(RoomTile).get_sourceY_w67w3v_k$ = function () {
    return this.sourceY_1;
  };
  protoOf(RoomTile).set_width_2l5qrj_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(RoomTile).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(RoomTile).set_height_ubp1uk_k$ = function (_set____db54di) {
    this.height_1 = _set____db54di;
  };
  protoOf(RoomTile).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(RoomTile).set_tileDepth_s7jgxc_k$ = function (_set____db54di) {
    this.tileDepth_1 = _set____db54di;
  };
  protoOf(RoomTile).get_tileDepth_5z5ipg_k$ = function () {
    return this.tileDepth_1;
  };
  protoOf(RoomTile).set_instanceID_g4s70b_k$ = function (_set____db54di) {
    this.instanceID_1 = _set____db54di;
  };
  protoOf(RoomTile).get_instanceID_597k7b_k$ = function () {
    return this.instanceID_1;
  };
  protoOf(RoomTile).set_scaleX_ykjjzx_k$ = function (_set____db54di) {
    this.scaleX_1 = _set____db54di;
  };
  protoOf(RoomTile).get_scaleX_je2hxz_k$ = function () {
    return this.scaleX_1;
  };
  protoOf(RoomTile).set_scaleY_i4eqp0_k$ = function (_set____db54di) {
    this.scaleY_1 = _set____db54di;
  };
  protoOf(RoomTile).get_scaleY_je2hy0_k$ = function () {
    return this.scaleY_1;
  };
  protoOf(RoomTile).set_color_7ztbpe_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(RoomTile).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  function Room() {
    this.name_1 = null;
    this.caption_1 = null;
    this.width_1 = 0;
    this.height_1 = 0;
    this.speed_1 = 0;
    this.persistent_1 = false;
    this.backgroundColor_1 = 0;
    this.drawBackgroundColor_1 = false;
    this.creationCodeId_1 = 0;
    this.flags_1 = 0;
    this.world_1 = false;
    this.top_1 = 0;
    this.left_1 = 0;
    this.right_1 = 0;
    this.bottom_1 = 0;
    this.gravityX_1 = 0.0;
    this.gravityY_1 = 0.0;
    this.metersPerPixel_1 = 0.0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(8);
    while (tmp_0 < 8) {
      tmp_1[tmp_0] = new RoomBackground();
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.backgrounds_1 = tmp_1;
    var tmp_2 = this;
    var tmp_3 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_4 = Array(8);
    while (tmp_3 < 8) {
      tmp_4[tmp_3] = new RoomView();
      tmp_3 = tmp_3 + 1 | 0;
    }
    tmp_2.views_1 = tmp_4;
    this.gameObjects_1 = emptyList();
    this.tiles_1 = emptyList();
    this.layers_1 = emptyList();
  }
  protoOf(Room).set_name_wkmnld_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(Room).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Room).set_caption_drz67m_k$ = function (_set____db54di) {
    this.caption_1 = _set____db54di;
  };
  protoOf(Room).get_caption_aejif1_k$ = function () {
    return this.caption_1;
  };
  protoOf(Room).set_width_2l5qrj_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(Room).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(Room).set_height_ubp1uk_k$ = function (_set____db54di) {
    this.height_1 = _set____db54di;
  };
  protoOf(Room).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(Room).set_speed_cog92a_k$ = function (_set____db54di) {
    this.speed_1 = _set____db54di;
  };
  protoOf(Room).get_speed_iynfvi_k$ = function () {
    return this.speed_1;
  };
  protoOf(Room).set_persistent_7ykjsv_k$ = function (_set____db54di) {
    this.persistent_1 = _set____db54di;
  };
  protoOf(Room).get_persistent_bp580w_k$ = function () {
    return this.persistent_1;
  };
  protoOf(Room).set_backgroundColor_anqjjk_k$ = function (_set____db54di) {
    this.backgroundColor_1 = _set____db54di;
  };
  protoOf(Room).get_backgroundColor_a0bggk_k$ = function () {
    return this.backgroundColor_1;
  };
  protoOf(Room).set_drawBackgroundColor_zde91b_k$ = function (_set____db54di) {
    this.drawBackgroundColor_1 = _set____db54di;
  };
  protoOf(Room).get_drawBackgroundColor_3l8dx4_k$ = function () {
    return this.drawBackgroundColor_1;
  };
  protoOf(Room).set_creationCodeId_rki0bg_k$ = function (_set____db54di) {
    this.creationCodeId_1 = _set____db54di;
  };
  protoOf(Room).get_creationCodeId_g9l3u8_k$ = function () {
    return this.creationCodeId_1;
  };
  protoOf(Room).set_flags_utuiu6_k$ = function (_set____db54di) {
    this.flags_1 = _set____db54di;
  };
  protoOf(Room).get_flags_irfhb2_k$ = function () {
    return this.flags_1;
  };
  protoOf(Room).set_world_34718g_k$ = function (_set____db54di) {
    this.world_1 = _set____db54di;
  };
  protoOf(Room).get_world_j0u92h_k$ = function () {
    return this.world_1;
  };
  protoOf(Room).set_top_xifsls_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(Room).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(Room).set_left_48a6v8_k$ = function (_set____db54di) {
    this.left_1 = _set____db54di;
  };
  protoOf(Room).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(Room).set_right_bw3luf_k$ = function (_set____db54di) {
    this.right_1 = _set____db54di;
  };
  protoOf(Room).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  protoOf(Room).set_bottom_tw0ug0_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(Room).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(Room).set_gravityX_pfw6yp_k$ = function (_set____db54di) {
    this.gravityX_1 = _set____db54di;
  };
  protoOf(Room).get_gravityX_u1nlgt_k$ = function () {
    return this.gravityX_1;
  };
  protoOf(Room).set_gravityY_r923q8_k$ = function (_set____db54di) {
    this.gravityY_1 = _set____db54di;
  };
  protoOf(Room).get_gravityY_u1nlgs_k$ = function () {
    return this.gravityY_1;
  };
  protoOf(Room).set_metersPerPixel_u7tsig_k$ = function (_set____db54di) {
    this.metersPerPixel_1 = _set____db54di;
  };
  protoOf(Room).get_metersPerPixel_x9995o_k$ = function () {
    return this.metersPerPixel_1;
  };
  protoOf(Room).set_backgrounds_st9e4s_k$ = function (_set____db54di) {
    this.backgrounds_1 = _set____db54di;
  };
  protoOf(Room).get_backgrounds_ttk0v8_k$ = function () {
    return this.backgrounds_1;
  };
  protoOf(Room).set_views_he0tbg_k$ = function (_set____db54di) {
    this.views_1 = _set____db54di;
  };
  protoOf(Room).get_views_j06d6t_k$ = function () {
    return this.views_1;
  };
  protoOf(Room).set_gameObjects_c1awbu_k$ = function (_set____db54di) {
    this.gameObjects_1 = _set____db54di;
  };
  protoOf(Room).get_gameObjects_frf0dj_k$ = function () {
    return this.gameObjects_1;
  };
  protoOf(Room).set_tiles_msf2mo_k$ = function (_set____db54di) {
    this.tiles_1 = _set____db54di;
  };
  protoOf(Room).get_tiles_iz2wrg_k$ = function () {
    return this.tiles_1;
  };
  protoOf(Room).set_layers_8hyxlc_k$ = function (_set____db54di) {
    this.layers_1 = _set____db54di;
  };
  protoOf(Room).get_layers_g22qtn_k$ = function () {
    return this.layers_1;
  };
  function RoomChunk() {
    this.rooms_1 = emptyList();
  }
  protoOf(RoomChunk).set_rooms_f2b0gh_k$ = function (_set____db54di) {
    this.rooms_1 = _set____db54di;
  };
  protoOf(RoomChunk).get_rooms_iy37wv_k$ = function () {
    return this.rooms_1;
  };
  function RoomLayer() {
    this.name_1 = null;
    this.id_1 = 0;
    this.type_1 = 0;
    this.depth_1 = 0;
    this.xOffset_1 = 0.0;
    this.yOffset_1 = 0.0;
    this.hSpeed_1 = 0.0;
    this.vSpeed_1 = 0.0;
    this.visible_1 = false;
    this.assetsData_1 = null;
    this.backgroundData_1 = null;
    this.instancesData_1 = null;
    this.tilesData_1 = null;
  }
  protoOf(RoomLayer).set_name_wkmnld_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(RoomLayer).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(RoomLayer).set_id_kpjn9s_k$ = function (_set____db54di) {
    this.id_1 = _set____db54di;
  };
  protoOf(RoomLayer).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(RoomLayer).set_type_8fmzpr_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(RoomLayer).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(RoomLayer).set_depth_v0xlni_k$ = function (_set____db54di) {
    this.depth_1 = _set____db54di;
  };
  protoOf(RoomLayer).get_depth_iq7qmy_k$ = function () {
    return this.depth_1;
  };
  protoOf(RoomLayer).set_xOffset_btkpye_k$ = function (_set____db54di) {
    this.xOffset_1 = _set____db54di;
  };
  protoOf(RoomLayer).get_xOffset_ptvdj6_k$ = function () {
    return this.xOffset_1;
  };
  protoOf(RoomLayer).set_yOffset_14tt4p_k$ = function (_set____db54di) {
    this.yOffset_1 = _set____db54di;
  };
  protoOf(RoomLayer).get_yOffset_uiue7x_k$ = function () {
    return this.yOffset_1;
  };
  protoOf(RoomLayer).set_hSpeed_dza8lw_k$ = function (_set____db54di) {
    this.hSpeed_1 = _set____db54di;
  };
  protoOf(RoomLayer).get_hSpeed_dy1dqg_k$ = function () {
    return this.hSpeed_1;
  };
  protoOf(RoomLayer).set_vSpeed_5m9vqy_k$ = function (_set____db54di) {
    this.vSpeed_1 = _set____db54di;
  };
  protoOf(RoomLayer).get_vSpeed_kko396_k$ = function () {
    return this.vSpeed_1;
  };
  protoOf(RoomLayer).set_visible_w9mvj4_k$ = function (_set____db54di) {
    this.visible_1 = _set____db54di;
  };
  protoOf(RoomLayer).get_visible_8zfvk9_k$ = function () {
    return this.visible_1;
  };
  protoOf(RoomLayer).set_assetsData_k3ch83_k$ = function (_set____db54di) {
    this.assetsData_1 = _set____db54di;
  };
  protoOf(RoomLayer).get_assetsData_fbw0nq_k$ = function () {
    return this.assetsData_1;
  };
  protoOf(RoomLayer).set_backgroundData_9y3rj7_k$ = function (_set____db54di) {
    this.backgroundData_1 = _set____db54di;
  };
  protoOf(RoomLayer).get_backgroundData_e2jdof_k$ = function () {
    return this.backgroundData_1;
  };
  protoOf(RoomLayer).set_instancesData_bzg0ep_k$ = function (_set____db54di) {
    this.instancesData_1 = _set____db54di;
  };
  protoOf(RoomLayer).get_instancesData_nsp49t_k$ = function () {
    return this.instancesData_1;
  };
  protoOf(RoomLayer).set_tilesData_xouo6p_k$ = function (_set____db54di) {
    this.tilesData_1 = _set____db54di;
  };
  protoOf(RoomLayer).get_tilesData_59wkii_k$ = function () {
    return this.tilesData_1;
  };
  function RoomLayerAssetsData() {
    this.legacyTiles_1 = emptyList();
    this.sprites_1 = emptyList();
  }
  protoOf(RoomLayerAssetsData).set_legacyTiles_1iw1tz_k$ = function (_set____db54di) {
    this.legacyTiles_1 = _set____db54di;
  };
  protoOf(RoomLayerAssetsData).get_legacyTiles_m9x2y5_k$ = function () {
    return this.legacyTiles_1;
  };
  protoOf(RoomLayerAssetsData).set_sprites_80gcso_k$ = function (_set____db54di) {
    this.sprites_1 = _set____db54di;
  };
  protoOf(RoomLayerAssetsData).get_sprites_vqz1qz_k$ = function () {
    return this.sprites_1;
  };
  function Audo() {
    this.entries_1 = emptyList();
  }
  protoOf(Audo).set_entries_15vwu0_k$ = function (_set____db54di) {
    this.entries_1 = _set____db54di;
  };
  protoOf(Audo).get_entries_p20ztl_k$ = function () {
    return this.entries_1;
  };
  function AudioEntry(dataSize, dataOffset, data) {
    this.dataSize_1 = dataSize;
    this.dataOffset_1 = dataOffset;
    this.data_1 = data;
  }
  protoOf(AudioEntry).get_dataSize_27spd8_k$ = function () {
    return this.dataSize_1;
  };
  protoOf(AudioEntry).get_dataOffset_161swq_k$ = function () {
    return this.dataOffset_1;
  };
  protoOf(AudioEntry).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  function Sound(name, flags, type, file, effects, volume, pitch, audioGroup, audioFile) {
    this.name_1 = name;
    this.flags_1 = flags;
    this.type_1 = type;
    this.file_1 = file;
    this.effects_1 = effects;
    this.volume_1 = volume;
    this.pitch_1 = pitch;
    this.audioGroup_1 = audioGroup;
    this.audioFile_1 = audioFile;
  }
  protoOf(Sound).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Sound).get_flags_irfhb2_k$ = function () {
    return this.flags_1;
  };
  protoOf(Sound).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(Sound).get_file_wom0n9_k$ = function () {
    return this.file_1;
  };
  protoOf(Sound).get_effects_t2bi7b_k$ = function () {
    return this.effects_1;
  };
  protoOf(Sound).get_volume_l003z7_k$ = function () {
    return this.volume_1;
  };
  protoOf(Sound).get_pitch_iwvw9j_k$ = function () {
    return this.pitch_1;
  };
  protoOf(Sound).get_audioGroup_52yxn6_k$ = function () {
    return this.audioGroup_1;
  };
  protoOf(Sound).get_audioFile_bmbemh_k$ = function () {
    return this.audioFile_1;
  };
  function Sond() {
    this.sounds_1 = emptyList();
  }
  protoOf(Sond).set_sounds_13v0qd_k$ = function (_set____db54di) {
    this.sounds_1 = _set____db54di;
  };
  protoOf(Sond).get_sounds_jl0ua5_k$ = function () {
    return this.sounds_1;
  };
  function Optn() {
    this.info_1 = new Long(0, 0);
    this.scale_1 = 0;
    this.windowColor_1 = 0;
    this.colorDepth_1 = 0;
    this.resolution_1 = 0;
    this.frequency_1 = 0;
    this.vertexSync_1 = 0;
    this.priority_1 = 0;
    this.backImage_1 = 0;
    this.frontImage_1 = 0;
    this.loadImage_1 = 0;
    this.loadAlpha_1 = 0;
    this.constants_1 = emptyList();
  }
  protoOf(Optn).set_info_8r766r_k$ = function (_set____db54di) {
    this.info_1 = _set____db54di;
  };
  protoOf(Optn).get_info_woo16f_k$ = function () {
    return this.info_1;
  };
  protoOf(Optn).set_scale_is4ked_k$ = function (_set____db54di) {
    this.scale_1 = _set____db54di;
  };
  protoOf(Optn).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Optn).set_windowColor_xab6xe_k$ = function (_set____db54di) {
    this.windowColor_1 = _set____db54di;
  };
  protoOf(Optn).get_windowColor_pwdwk6_k$ = function () {
    return this.windowColor_1;
  };
  protoOf(Optn).set_colorDepth_ohmud1_k$ = function (_set____db54di) {
    this.colorDepth_1 = _set____db54di;
  };
  protoOf(Optn).get_colorDepth_qhg2x_k$ = function () {
    return this.colorDepth_1;
  };
  protoOf(Optn).set_resolution_uzm8cf_k$ = function (_set____db54di) {
    this.resolution_1 = _set____db54di;
  };
  protoOf(Optn).get_resolution_oe8rw5_k$ = function () {
    return this.resolution_1;
  };
  protoOf(Optn).set_frequency_i9mn13_k$ = function (_set____db54di) {
    this.frequency_1 = _set____db54di;
  };
  protoOf(Optn).get_frequency_7ctygj_k$ = function () {
    return this.frequency_1;
  };
  protoOf(Optn).set_vertexSync_g924wk_k$ = function (_set____db54di) {
    this.vertexSync_1 = _set____db54di;
  };
  protoOf(Optn).get_vertexSync_icqwwo_k$ = function () {
    return this.vertexSync_1;
  };
  protoOf(Optn).set_priority_9imq2v_k$ = function (_set____db54di) {
    this.priority_1 = _set____db54di;
  };
  protoOf(Optn).get_priority_jyafsd_k$ = function () {
    return this.priority_1;
  };
  protoOf(Optn).set_backImage_uhfclt_k$ = function (_set____db54di) {
    this.backImage_1 = _set____db54di;
  };
  protoOf(Optn).get_backImage_u97wuj_k$ = function () {
    return this.backImage_1;
  };
  protoOf(Optn).set_frontImage_sbwjyf_k$ = function (_set____db54di) {
    this.frontImage_1 = _set____db54di;
  };
  protoOf(Optn).get_frontImage_pvedhh_k$ = function () {
    return this.frontImage_1;
  };
  protoOf(Optn).set_loadImage_jequq8_k$ = function (_set____db54di) {
    this.loadImage_1 = _set____db54di;
  };
  protoOf(Optn).get_loadImage_v5mcmk_k$ = function () {
    return this.loadImage_1;
  };
  protoOf(Optn).set_loadAlpha_l3m94d_k$ = function (_set____db54di) {
    this.loadAlpha_1 = _set____db54di;
  };
  protoOf(Optn).get_loadAlpha_v17o1b_k$ = function () {
    return this.loadAlpha_1;
  };
  protoOf(Optn).set_constants_c18724_k$ = function (_set____db54di) {
    this.constants_1 = _set____db54di;
  };
  protoOf(Optn).get_constants_1j3ycm_k$ = function () {
    return this.constants_1;
  };
  function Lang() {
    this.unknown1__1 = 0;
    this.entryIds_1 = emptyList();
    this.languages_1 = emptyList();
  }
  protoOf(Lang).set_unknown1_bi0yw4_k$ = function (_set____db54di) {
    this.unknown1__1 = _set____db54di;
  };
  protoOf(Lang).get_unknown1_z97fn4_k$ = function () {
    return this.unknown1__1;
  };
  protoOf(Lang).set_entryIds_2w81rs_k$ = function (_set____db54di) {
    this.entryIds_1 = _set____db54di;
  };
  protoOf(Lang).get_entryIds_4lne0f_k$ = function () {
    return this.entryIds_1;
  };
  protoOf(Lang).set_languages_uci5av_k$ = function (_set____db54di) {
    this.languages_1 = _set____db54di;
  };
  protoOf(Lang).get_languages_xmhugi_k$ = function () {
    return this.languages_1;
  };
  function Extn() {
    this.extensions_1 = emptyList();
  }
  protoOf(Extn).set_extensions_qbwz1x_k$ = function (_set____db54di) {
    this.extensions_1 = _set____db54di;
  };
  protoOf(Extn).get_extensions_kxksyl_k$ = function () {
    return this.extensions_1;
  };
  function Agrp() {
    this.audioGroups_1 = emptyList();
  }
  protoOf(Agrp).set_audioGroups_6ioeqa_k$ = function (_set____db54di) {
    this.audioGroups_1 = _set____db54di;
  };
  protoOf(Agrp).get_audioGroups_fhuv35_k$ = function () {
    return this.audioGroups_1;
  };
  function PathChunk() {
    this.paths_1 = emptyList();
  }
  protoOf(PathChunk).set_paths_17tk2z_k$ = function (_set____db54di) {
    this.paths_1 = _set____db54di;
  };
  protoOf(PathChunk).get_paths_iwqshx_k$ = function () {
    return this.paths_1;
  };
  function Scpt() {
    this.scripts_1 = emptyList();
  }
  protoOf(Scpt).set_scripts_rk6l2p_k$ = function (_set____db54di) {
    this.scripts_1 = _set____db54di;
  };
  protoOf(Scpt).get_scripts_x4juhr_k$ = function () {
    return this.scripts_1;
  };
  function Glob() {
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.codeIds_1 = new Int32Array([]);
  }
  protoOf(Glob).set_codeIds_yd6l5f_k$ = function (_set____db54di) {
    this.codeIds_1 = _set____db54di;
  };
  protoOf(Glob).get_codeIds_guag0y_k$ = function () {
    return this.codeIds_1;
  };
  function Shdr() {
    this.shaders_1 = emptyList();
  }
  protoOf(Shdr).set_shaders_mve325_k$ = function (_set____db54di) {
    this.shaders_1 = _set____db54di;
  };
  protoOf(Shdr).get_shaders_z8c18l_k$ = function () {
    return this.shaders_1;
  };
  function Tmln() {
    this.timelines_1 = emptyList();
  }
  protoOf(Tmln).set_timelines_7pbf3v_k$ = function (_set____db54di) {
    this.timelines_1 = _set____db54di;
  };
  protoOf(Tmln).get_timelines_9bb1d5_k$ = function () {
    return this.timelines_1;
  };
  function Objt() {
    this.objects_1 = emptyList();
  }
  protoOf(Objt).set_objects_g561mf_k$ = function (_set____db54di) {
    this.objects_1 = _set____db54di;
  };
  protoOf(Objt).get_objects_q6k34l_k$ = function () {
    return this.objects_1;
  };
  function Code() {
    this.entries_1 = emptyList();
  }
  protoOf(Code).set_entries_sf53w3_k$ = function (_set____db54di) {
    this.entries_1 = _set____db54di;
  };
  protoOf(Code).get_entries_p20ztl_k$ = function () {
    return this.entries_1;
  };
  function Vari() {
    this.varCount1__1 = 0;
    this.varCount2__1 = 0;
    this.maxLocalVarCount_1 = 0;
    this.variables_1 = emptyList();
  }
  protoOf(Vari).set_varCount1_y760ys_k$ = function (_set____db54di) {
    this.varCount1__1 = _set____db54di;
  };
  protoOf(Vari).get_varCount1_am9b4w_k$ = function () {
    return this.varCount1__1;
  };
  protoOf(Vari).set_varCount2_1ya4jf_k$ = function (_set____db54di) {
    this.varCount2__1 = _set____db54di;
  };
  protoOf(Vari).get_varCount2_am9b4v_k$ = function () {
    return this.varCount2__1;
  };
  protoOf(Vari).set_maxLocalVarCount_ml5dd0_k$ = function (_set____db54di) {
    this.maxLocalVarCount_1 = _set____db54di;
  };
  protoOf(Vari).get_maxLocalVarCount_9z23rc_k$ = function () {
    return this.maxLocalVarCount_1;
  };
  protoOf(Vari).set_variables_e29ixb_k$ = function (_set____db54di) {
    this.variables_1 = _set____db54di;
  };
  protoOf(Vari).get_variables_75f0zy_k$ = function () {
    return this.variables_1;
  };
  function Func() {
    this.functions_1 = emptyList();
    this.codeLocals_1 = emptyList();
  }
  protoOf(Func).set_functions_um5mc7_k$ = function (_set____db54di) {
    this.functions_1 = _set____db54di;
  };
  protoOf(Func).get_functions_66tuk2_k$ = function () {
    return this.functions_1;
  };
  protoOf(Func).set_codeLocals_yplb0y_k$ = function (_set____db54di) {
    this.codeLocals_1 = _set____db54di;
  };
  protoOf(Func).get_codeLocals_w832gu_k$ = function () {
    return this.codeLocals_1;
  };
  function Strg() {
    this.strings_1 = emptyList();
  }
  protoOf(Strg).set_strings_nfa1n7_k$ = function (_set____db54di) {
    this.strings_1 = _set____db54di;
  };
  protoOf(Strg).get_strings_tusokn_k$ = function () {
    return this.strings_1;
  };
  function EventAction() {
    this.libID_1 = 0;
    this.id_1 = 0;
    this.kind_1 = 0;
    this.useRelative_1 = false;
    this.isQuestion_1 = false;
    this.useApplyTo_1 = false;
    this.exeType_1 = 0;
    this.actionName_1 = null;
    this.codeId_1 = 0;
    this.argumentCount_1 = 0;
    this.who_1 = 0;
    this.relative_1 = false;
    this.isNot_1 = false;
    this.unknownAlwaysZero_1 = 0;
  }
  protoOf(EventAction).set_libID_gmr6xx_k$ = function (_set____db54di) {
    this.libID_1 = _set____db54di;
  };
  protoOf(EventAction).get_libID_iuobw7_k$ = function () {
    return this.libID_1;
  };
  protoOf(EventAction).set_id_kpjn9s_k$ = function (_set____db54di) {
    this.id_1 = _set____db54di;
  };
  protoOf(EventAction).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(EventAction).set_kind_opbsbb_k$ = function (_set____db54di) {
    this.kind_1 = _set____db54di;
  };
  protoOf(EventAction).get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  protoOf(EventAction).set_useRelative_q5o22p_k$ = function (_set____db54di) {
    this.useRelative_1 = _set____db54di;
  };
  protoOf(EventAction).get_useRelative_pwwikq_k$ = function () {
    return this.useRelative_1;
  };
  protoOf(EventAction).set_isQuestion_wc5igo_k$ = function (_set____db54di) {
    this.isQuestion_1 = _set____db54di;
  };
  protoOf(EventAction).get_isQuestion_igfsu1_k$ = function () {
    return this.isQuestion_1;
  };
  protoOf(EventAction).set_useApplyTo_qzne4q_k$ = function (_set____db54di) {
    this.useApplyTo_1 = _set____db54di;
  };
  protoOf(EventAction).get_useApplyTo_axcqrv_k$ = function () {
    return this.useApplyTo_1;
  };
  protoOf(EventAction).set_exeType_x7zylj_k$ = function (_set____db54di) {
    this.exeType_1 = _set____db54di;
  };
  protoOf(EventAction).get_exeType_kkci9p_k$ = function () {
    return this.exeType_1;
  };
  protoOf(EventAction).set_actionName_nlrudj_k$ = function (_set____db54di) {
    this.actionName_1 = _set____db54di;
  };
  protoOf(EventAction).get_actionName_ag6u7e_k$ = function () {
    return this.actionName_1;
  };
  protoOf(EventAction).set_codeId_mz7wcd_k$ = function (_set____db54di) {
    this.codeId_1 = _set____db54di;
  };
  protoOf(EventAction).get_codeId_bzztv5_k$ = function () {
    return this.codeId_1;
  };
  protoOf(EventAction).set_argumentCount_9jjmb7_k$ = function (_set____db54di) {
    this.argumentCount_1 = _set____db54di;
  };
  protoOf(EventAction).get_argumentCount_2axlg7_k$ = function () {
    return this.argumentCount_1;
  };
  protoOf(EventAction).set_who_c2n3zt_k$ = function (_set____db54di) {
    this.who_1 = _set____db54di;
  };
  protoOf(EventAction).get_who_18it9n_k$ = function () {
    return this.who_1;
  };
  protoOf(EventAction).set_relative_bw5td8_k$ = function (_set____db54di) {
    this.relative_1 = _set____db54di;
  };
  protoOf(EventAction).get_relative_u22tud_k$ = function () {
    return this.relative_1;
  };
  protoOf(EventAction).set_isNot_5toudz_k$ = function (_set____db54di) {
    this.isNot_1 = _set____db54di;
  };
  protoOf(EventAction).get_isNot_it6y3k_k$ = function () {
    return this.isNot_1;
  };
  protoOf(EventAction).set_unknownAlwaysZero_5nf71g_k$ = function (_set____db54di) {
    this.unknownAlwaysZero_1 = _set____db54di;
  };
  protoOf(EventAction).get_unknownAlwaysZero_l21l60_k$ = function () {
    return this.unknownAlwaysZero_1;
  };
  function OptnConstant(name, value) {
    this.name_1 = name;
    this.value_1 = value;
  }
  protoOf(OptnConstant).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(OptnConstant).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Language(name, region, entries) {
    this.name_1 = name;
    this.region_1 = region;
    this.entries_1 = entries;
  }
  protoOf(Language).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Language).get_region_iy88ot_k$ = function () {
    return this.region_1;
  };
  protoOf(Language).get_entries_p20ztl_k$ = function () {
    return this.entries_1;
  };
  function Extension(folderName, name, className, files) {
    this.folderName_1 = folderName;
    this.name_1 = name;
    this.className_1 = className;
    this.files_1 = files;
  }
  protoOf(Extension).get_folderName_xvd0m6_k$ = function () {
    return this.folderName_1;
  };
  protoOf(Extension).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Extension).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  protoOf(Extension).get_files_irdsge_k$ = function () {
    return this.files_1;
  };
  function ExtensionFile(filename, cleanupScript, initScript, kind, functions) {
    this.filename_1 = filename;
    this.cleanupScript_1 = cleanupScript;
    this.initScript_1 = initScript;
    this.kind_1 = kind;
    this.functions_1 = functions;
  }
  protoOf(ExtensionFile).get_filename_r2po7k_k$ = function () {
    return this.filename_1;
  };
  protoOf(ExtensionFile).get_cleanupScript_n4sn8a_k$ = function () {
    return this.cleanupScript_1;
  };
  protoOf(ExtensionFile).get_initScript_g5eu7w_k$ = function () {
    return this.initScript_1;
  };
  protoOf(ExtensionFile).get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  protoOf(ExtensionFile).get_functions_66tuk2_k$ = function () {
    return this.functions_1;
  };
  function ExtensionFunction(name, id, kind, retType, extName, arguments_0) {
    this.name_1 = name;
    this.id_1 = id;
    this.kind_1 = kind;
    this.retType_1 = retType;
    this.extName_1 = extName;
    this.arguments_1 = arguments_0;
  }
  protoOf(ExtensionFunction).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(ExtensionFunction).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(ExtensionFunction).get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  protoOf(ExtensionFunction).get_retType_jez636_k$ = function () {
    return this.retType_1;
  };
  protoOf(ExtensionFunction).get_extName_kc7x5p_k$ = function () {
    return this.extName_1;
  };
  protoOf(ExtensionFunction).get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  function computeInternal$addPoint(temp, x, y, speed) {
    temp.add_utx5q5_k$(new InternalPathPoint(x, y, speed));
  }
  function computeInternal$handlePiece(temp, depth, x1, y1, s1, x2, y2, s2, x3, y3, s3) {
    if (depth === 0)
      return Unit_getInstance();
    var mx = (x1 + x2 + x2 + x3) / 4.0;
    var my = (y1 + y2 + y2 + y3) / 4.0;
    var ms = (s1 + s2 + s2 + s3) / 4.0;
    if ((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) > 16.0) {
      computeInternal$handlePiece(temp, depth - 1 | 0, x1, y1, s1, (x2 + x1) / 2.0, (y2 + y1) / 2.0, (s2 + s1) / 2.0, mx, my, ms);
    }
    computeInternal$addPoint(temp, mx, my, ms);
    if ((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3) > 16.0) {
      computeInternal$handlePiece(temp, depth - 1 | 0, mx, my, ms, (x3 + x2) / 2.0, (y3 + y2) / 2.0, (s3 + s2) / 2.0, x3, y3, s3);
    }
  }
  function GamePath() {
    this.name_1 = null;
    this.isSmooth_1 = false;
    this.isClosed_1 = false;
    this.precision_1 = 0;
    this.points_1 = emptyList();
    this.internalPoints_1 = emptyList();
    this.length_1 = 0.0;
  }
  protoOf(GamePath).set_name_wkmnld_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(GamePath).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(GamePath).set_isSmooth_i9dk8w_k$ = function (_set____db54di) {
    this.isSmooth_1 = _set____db54di;
  };
  protoOf(GamePath).get_isSmooth_ziii4h_k$ = function () {
    return this.isSmooth_1;
  };
  protoOf(GamePath).set_isClosed_i2u14u_k$ = function (_set____db54di) {
    this.isClosed_1 = _set____db54di;
  };
  protoOf(GamePath).get_isClosed_rx8ttr_k$ = function () {
    return this.isClosed_1;
  };
  protoOf(GamePath).set_precision_m6oa6f_k$ = function (_set____db54di) {
    this.precision_1 = _set____db54di;
  };
  protoOf(GamePath).get_precision_e8tfsb_k$ = function () {
    return this.precision_1;
  };
  protoOf(GamePath).set_points_1wq13a_k$ = function (_set____db54di) {
    this.points_1 = _set____db54di;
  };
  protoOf(GamePath).get_points_i5obn0_k$ = function () {
    return this.points_1;
  };
  protoOf(GamePath).set_internalPoints_6ofc9m_k$ = function (_set____db54di) {
    this.internalPoints_1 = _set____db54di;
  };
  protoOf(GamePath).get_internalPoints_vqp7uf_k$ = function () {
    return this.internalPoints_1;
  };
  protoOf(GamePath).set_length_xczefh_k$ = function (_set____db54di) {
    this.length_1 = _set____db54di;
  };
  protoOf(GamePath).get_length_g42xv3_k$ = function () {
    return this.length_1;
  };
  protoOf(GamePath).computeInternal_dwr264_k$ = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var temp = ArrayList_init_$Create$_0();
    if (this.points_1.isEmpty_y1axqb_k$()) {
      this.internalPoints_1 = emptyList();
      this.length_1 = 0.0;
      return Unit_getInstance();
    }
    if (this.isSmooth_1) {
      if (!this.isClosed_1) {
        computeInternal$addPoint(temp, this.points_1.get_c1px32_k$(0).x_1, this.points_1.get_c1px32_k$(0).y_1, this.points_1.get_c1px32_k$(0).speed_1);
      }
      var n = this.isClosed_1 ? this.points_1.get_size_woubt6_k$() - 1 | 0 : this.points_1.get_size_woubt6_k$() - 3 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var p1 = this.points_1.get_c1px32_k$(i % this.points_1.get_size_woubt6_k$() | 0);
          var p2 = this.points_1.get_c1px32_k$((i + 1 | 0) % this.points_1.get_size_woubt6_k$() | 0);
          var p3 = this.points_1.get_c1px32_k$((i + 2 | 0) % this.points_1.get_size_woubt6_k$() | 0);
          computeInternal$handlePiece(temp, this.precision_1, (p1.x_1 + p2.x_1) / 2.0, (p1.y_1 + p2.y_1) / 2.0, (p1.speed_1 + p2.speed_1) / 2.0, p2.x_1, p2.y_1, p2.speed_1, (p2.x_1 + p3.x_1) / 2.0, (p2.y_1 + p3.y_1) / 2.0, (p2.speed_1 + p3.speed_1) / 2.0);
        }
         while (!(i === n));
      if (!this.isClosed_1) {
        var last_0 = last(this.points_1);
        computeInternal$addPoint(temp, last_0.x_1, last_0.y_1, last_0.speed_1);
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!temp.isEmpty_y1axqb_k$()) {
          computeInternal$addPoint(temp, temp.get_c1px32_k$(0).x_1, temp.get_c1px32_k$(0).y_1, temp.get_c1px32_k$(0).speed_1);
        }
      }
    } else {
      var _iterator__ex2g4s = this.points_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var p = _iterator__ex2g4s.next_20eer_k$();
        computeInternal$addPoint(temp, p.x_1, p.y_1, p.speed_1);
      }
      if (this.isClosed_1) {
        computeInternal$addPoint(temp, this.points_1.get_c1px32_k$(0).x_1, this.points_1.get_c1px32_k$(0).y_1, this.points_1.get_c1px32_k$(0).speed_1);
      }
    }
    this.internalPoints_1 = temp;
    this.length_1 = 0.0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.internalPoints_1.isEmpty_y1axqb_k$()) {
      this.internalPoints_1.get_c1px32_k$(0).l_1 = 0.0;
      var inductionVariable_0 = 1;
      var last_1 = this.internalPoints_1.get_size_woubt6_k$();
      if (inductionVariable_0 < last_1)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var dx = this.internalPoints_1.get_c1px32_k$(i_0).x_1 - this.internalPoints_1.get_c1px32_k$(i_0 - 1 | 0).x_1;
          var dy = this.internalPoints_1.get_c1px32_k$(i_0).y_1 - this.internalPoints_1.get_c1px32_k$(i_0 - 1 | 0).y_1;
          var tmp = this;
          var tmp_0 = this.length_1;
          // Inline function 'kotlin.math.sqrt' call
          var x = dx * dx + dy * dy;
          tmp.length_1 = tmp_0 + Math.sqrt(x);
          this.internalPoints_1.get_c1px32_k$(i_0).l_1 = this.length_1;
        }
         while (inductionVariable_0 < last_1);
    }
  };
  protoOf(GamePath).getPosition_csff09_k$ = function (t) {
    if (this.internalPoints_1.isEmpty_y1axqb_k$())
      return new PathPositionResult(0.0, 0.0, 0.0);
    if (this.internalPoints_1.get_size_woubt6_k$() === 1 || this.length_1 === 0.0 || 0.0 >= t) {
      var p = this.internalPoints_1.get_c1px32_k$(0);
      return new PathPositionResult(p.x_1, p.y_1, p.speed_1);
    }
    if (t >= 1.0) {
      var p_0 = last(this.internalPoints_1);
      return new PathPositionResult(p_0.x_1, p_0.y_1, p_0.speed_1);
    }
    var l = this.length_1 * t;
    var pos = 0;
    while ((this.internalPoints_1.get_size_woubt6_k$() - 2 | 0) > pos && l >= this.internalPoints_1.get_c1px32_k$(pos + 1 | 0).l_1) {
      pos = pos + 1 | 0;
    }
    var node = this.internalPoints_1.get_c1px32_k$(pos);
    var lRem = l - node.l_1;
    var w = this.internalPoints_1.get_c1px32_k$(pos + 1 | 0).l_1 - node.l_1;
    if (!(w === 0.0)) {
      var next = this.internalPoints_1.get_c1px32_k$(pos + 1 | 0);
      return new PathPositionResult(node.x_1 + lRem * (next.x_1 - node.x_1) / w, node.y_1 + lRem * (next.y_1 - node.y_1) / w, node.speed_1 + lRem * (next.speed_1 - node.speed_1) / w);
    }
    return new PathPositionResult(node.x_1, node.y_1, node.speed_1);
  };
  function PathPoint(x, y, speed) {
    this.x_1 = x;
    this.y_1 = y;
    this.speed_1 = speed;
  }
  protoOf(PathPoint).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(PathPoint).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(PathPoint).get_speed_iynfvi_k$ = function () {
    return this.speed_1;
  };
  function Script(name, codeId) {
    this.name_1 = name;
    this.codeId_1 = codeId;
  }
  protoOf(Script).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Script).get_codeId_bzztv5_k$ = function () {
    return this.codeId_1;
  };
  function Shader() {
    this.name_1 = null;
    this.type_1 = 0;
    this.glslES_Vertex_1 = null;
    this.glslES_Fragment_1 = null;
    this.glsl_Vertex_1 = null;
    this.glsl_Fragment_1 = null;
    this.hlsl9_Vertex_1 = null;
    this.hlsl9_Fragment_1 = null;
    this.hlsl11_VertexOffset_1 = 0;
    this.hlsl11_PixelOffset_1 = 0;
    this.vertexAttributes_1 = emptyList();
    this.version_1 = 0;
    this.pssl_VertexOffset_1 = 0;
    this.pssl_VertexLen_1 = 0;
    this.pssl_PixelOffset_1 = 0;
    this.pssl_PixelLen_1 = 0;
    this.cgVita_VertexOffset_1 = 0;
    this.cgVita_VertexLen_1 = 0;
    this.cgVita_PixelOffset_1 = 0;
    this.cgVita_PixelLen_1 = 0;
    this.cgPS3_VertexOffset_1 = 0;
    this.cgPS3_VertexLen_1 = 0;
    this.cgPS3_PixelOffset_1 = 0;
    this.cgPS3_PixelLen_1 = 0;
  }
  protoOf(Shader).set_name_wkmnld_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(Shader).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Shader).set_type_8fmzpr_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(Shader).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(Shader).set_glslES_Vertex_hahsjn_k$ = function (_set____db54di) {
    this.glslES_Vertex_1 = _set____db54di;
  };
  protoOf(Shader).get_glslES_Vertex_e3i8e_k$ = function () {
    return this.glslES_Vertex_1;
  };
  protoOf(Shader).set_glslES_Fragment_o1ljan_k$ = function (_set____db54di) {
    this.glslES_Fragment_1 = _set____db54di;
  };
  protoOf(Shader).get_glslES_Fragment_qovnzu_k$ = function () {
    return this.glslES_Fragment_1;
  };
  protoOf(Shader).set_glsl_Vertex_ldv04x_k$ = function (_set____db54di) {
    this.glsl_Vertex_1 = _set____db54di;
  };
  protoOf(Shader).get_glsl_Vertex_d3qvd0_k$ = function () {
    return this.glsl_Vertex_1;
  };
  protoOf(Shader).set_glsl_Fragment_jt1wbn_k$ = function (_set____db54di) {
    this.glsl_Fragment_1 = _set____db54di;
  };
  protoOf(Shader).get_glsl_Fragment_f0j8go_k$ = function () {
    return this.glsl_Fragment_1;
  };
  protoOf(Shader).set_hlsl9_Vertex_xdt8s3_k$ = function (_set____db54di) {
    this.hlsl9_Vertex_1 = _set____db54di;
  };
  protoOf(Shader).get_hlsl9_Vertex_oz5cy8_k$ = function () {
    return this.hlsl9_Vertex_1;
  };
  protoOf(Shader).set_hlsl9_Fragment_imv9jb_k$ = function (_set____db54di) {
    this.hlsl9_Fragment_1 = _set____db54di;
  };
  protoOf(Shader).get_hlsl9_Fragment_bou21o_k$ = function () {
    return this.hlsl9_Fragment_1;
  };
  protoOf(Shader).set_hlsl11_VertexOffset_5jmyp8_k$ = function (_set____db54di) {
    this.hlsl11_VertexOffset_1 = _set____db54di;
  };
  protoOf(Shader).get_hlsl11_VertexOffset_2ff0sw_k$ = function () {
    return this.hlsl11_VertexOffset_1;
  };
  protoOf(Shader).set_hlsl11_PixelOffset_5zloy4_k$ = function (_set____db54di) {
    this.hlsl11_PixelOffset_1 = _set____db54di;
  };
  protoOf(Shader).get_hlsl11_PixelOffset_mbf9r4_k$ = function () {
    return this.hlsl11_PixelOffset_1;
  };
  protoOf(Shader).set_vertexAttributes_4jahyb_k$ = function (_set____db54di) {
    this.vertexAttributes_1 = _set____db54di;
  };
  protoOf(Shader).get_vertexAttributes_degh0c_k$ = function () {
    return this.vertexAttributes_1;
  };
  protoOf(Shader).set_version_79kic3_k$ = function (_set____db54di) {
    this.version_1 = _set____db54di;
  };
  protoOf(Shader).get_version_72w4j3_k$ = function () {
    return this.version_1;
  };
  protoOf(Shader).set_pssl_VertexOffset_f4omgl_k$ = function (_set____db54di) {
    this.pssl_VertexOffset_1 = _set____db54di;
  };
  protoOf(Shader).get_pssl_VertexOffset_37btd_k$ = function () {
    return this.pssl_VertexOffset_1;
  };
  protoOf(Shader).set_pssl_VertexLen_yq0s9v_k$ = function (_set____db54di) {
    this.pssl_VertexLen_1 = _set____db54di;
  };
  protoOf(Shader).get_pssl_VertexLen_zfxpzr_k$ = function () {
    return this.pssl_VertexLen_1;
  };
  protoOf(Shader).set_pssl_PixelOffset_boac1h_k$ = function (_set____db54di) {
    this.pssl_PixelOffset_1 = _set____db54di;
  };
  protoOf(Shader).get_pssl_PixelOffset_t464hr_k$ = function () {
    return this.pssl_PixelOffset_1;
  };
  protoOf(Shader).set_pssl_PixelLen_ryebx_k$ = function (_set____db54di) {
    this.pssl_PixelLen_1 = _set____db54di;
  };
  protoOf(Shader).get_pssl_PixelLen_itdkif_k$ = function () {
    return this.pssl_PixelLen_1;
  };
  protoOf(Shader).set_cgVita_VertexOffset_kvigml_k$ = function (_set____db54di) {
    this.cgVita_VertexOffset_1 = _set____db54di;
  };
  protoOf(Shader).get_cgVita_VertexOffset_irk9zd_k$ = function () {
    return this.cgVita_VertexOffset_1;
  };
  protoOf(Shader).set_cgVita_VertexLen_e3p9lh_k$ = function (_set____db54di) {
    this.cgVita_VertexLen_1 = _set____db54di;
  };
  protoOf(Shader).get_cgVita_VertexLen_9ejylb_k$ = function () {
    return this.cgVita_VertexLen_1;
  };
  protoOf(Shader).set_cgVita_PixelOffset_iaq07n_k$ = function (_set____db54di) {
    this.cgVita_PixelOffset_1 = _set____db54di;
  };
  protoOf(Shader).get_cgVita_PixelOffset_93gz7r_k$ = function () {
    return this.cgVita_PixelOffset_1;
  };
  protoOf(Shader).set_cgVita_PixelLen_oem805_k$ = function (_set____db54di) {
    this.cgVita_PixelLen_1 = _set____db54di;
  };
  protoOf(Shader).get_cgVita_PixelLen_zc3275_k$ = function () {
    return this.cgVita_PixelLen_1;
  };
  protoOf(Shader).set_cgPS3_VertexOffset_vjzt6p_k$ = function (_set____db54di) {
    this.cgPS3_VertexOffset_1 = _set____db54di;
  };
  protoOf(Shader).get_cgPS3_VertexOffset_saxcgd_k$ = function () {
    return this.cgPS3_VertexOffset_1;
  };
  protoOf(Shader).set_cgPS3_VertexLen_2tun3b_k$ = function (_set____db54di) {
    this.cgPS3_VertexLen_1 = _set____db54di;
  };
  protoOf(Shader).get_cgPS3_VertexLen_n3s00b_k$ = function () {
    return this.cgPS3_VertexLen_1;
  };
  protoOf(Shader).set_cgPS3_PixelOffset_fgzn27_k$ = function (_set____db54di) {
    this.cgPS3_PixelOffset_1 = _set____db54di;
  };
  protoOf(Shader).get_cgPS3_PixelOffset_lbqhgd_k$ = function () {
    return this.cgPS3_PixelOffset_1;
  };
  protoOf(Shader).set_cgPS3_PixelLen_mh7zdj_k$ = function (_set____db54di) {
    this.cgPS3_PixelLen_1 = _set____db54di;
  };
  protoOf(Shader).get_cgPS3_PixelLen_92ywwb_k$ = function () {
    return this.cgPS3_PixelLen_1;
  };
  function FontGlyph() {
    this.character_1 = 0;
    this.sourceX_1 = 0;
    this.sourceY_1 = 0;
    this.sourceWidth_1 = 0;
    this.sourceHeight_1 = 0;
    this.shift_1 = 0;
    this.offset_1 = 0;
    this.kerning_1 = emptyList();
  }
  protoOf(FontGlyph).set_character_y4cnes_k$ = function (_set____db54di) {
    this.character_1 = _set____db54di;
  };
  protoOf(FontGlyph).get_character_ydsy9s_k$ = function () {
    return this.character_1;
  };
  protoOf(FontGlyph).set_sourceX_r7o0u0_k$ = function (_set____db54di) {
    this.sourceX_1 = _set____db54di;
  };
  protoOf(FontGlyph).get_sourceX_w67w3w_k$ = function () {
    return this.sourceX_1;
  };
  protoOf(FontGlyph).set_sourceY_8xs4o7_k$ = function (_set____db54di) {
    this.sourceY_1 = _set____db54di;
  };
  protoOf(FontGlyph).get_sourceY_w67w3v_k$ = function () {
    return this.sourceY_1;
  };
  protoOf(FontGlyph).set_sourceWidth_b25qyi_k$ = function (_set____db54di) {
    this.sourceWidth_1 = _set____db54di;
  };
  protoOf(FontGlyph).get_sourceWidth_cd7mki_k$ = function () {
    return this.sourceWidth_1;
  };
  protoOf(FontGlyph).set_sourceHeight_j7yy89_k$ = function (_set____db54di) {
    this.sourceHeight_1 = _set____db54di;
  };
  protoOf(FontGlyph).get_sourceHeight_l27kvf_k$ = function () {
    return this.sourceHeight_1;
  };
  protoOf(FontGlyph).set_shift_xlauxv_k$ = function (_set____db54di) {
    this.shift_1 = _set____db54di;
  };
  protoOf(FontGlyph).get_shift_iyiezd_k$ = function () {
    return this.shift_1;
  };
  protoOf(FontGlyph).set_offset_czuwyw_k$ = function (_set____db54di) {
    this.offset_1 = _set____db54di;
  };
  protoOf(FontGlyph).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(FontGlyph).set_kerning_28wej4_k$ = function (_set____db54di) {
    this.kerning_1 = _set____db54di;
  };
  protoOf(FontGlyph).get_kerning_cbc2xp_k$ = function () {
    return this.kerning_1;
  };
  function KerningPair(character, shiftModifier) {
    this.character_1 = character;
    this.shiftModifier_1 = shiftModifier;
  }
  protoOf(KerningPair).get_character_ydsy9s_k$ = function () {
    return this.character_1;
  };
  protoOf(KerningPair).get_shiftModifier_kkanxs_k$ = function () {
    return this.shiftModifier_1;
  };
  function Timeline(name, moments) {
    this.name_1 = name;
    this.moments_1 = moments;
  }
  protoOf(Timeline).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Timeline).get_moments_lp03gq_k$ = function () {
    return this.moments_1;
  };
  function TimelineMoment(step, actions) {
    this.step_1 = step;
    this.actions_1 = actions;
  }
  protoOf(TimelineMoment).get_step_woujh1_k$ = function () {
    return this.step_1;
  };
  protoOf(TimelineMoment).get_actions_hy5jak_k$ = function () {
    return this.actions_1;
  };
  function GameObject() {
    this.name_1 = null;
    this.spriteId_1 = 0;
    this.visible_1 = false;
    this.managed_1 = false;
    this.solid_1 = false;
    this.depth_1 = 0;
    this.persistent_1 = false;
    this.parentId_1 = 0;
    this.textureMaskId_1 = 0;
    this.usesPhysics_1 = false;
    this.isSensor_1 = false;
    this.collisionShape_1 = 0;
    this.density_1 = 0.0;
    this.restitution_1 = 0.0;
    this.group_1 = 0;
    this.linearDamping_1 = 0.0;
    this.angularDamping_1 = 0.0;
    this.physicsVertexCount_1 = 0;
    this.friction_1 = 0.0;
    this.awake_1 = false;
    this.kinematic_1 = false;
    this.physicsVertices_1 = emptyList();
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(15);
    while (tmp_0 < 15) {
      tmp_1[tmp_0] = new ObjectEventList();
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.eventLists_1 = tmp_1;
  }
  protoOf(GameObject).set_name_wkmnld_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(GameObject).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(GameObject).set_spriteId_qch817_k$ = function (_set____db54di) {
    this.spriteId_1 = _set____db54di;
  };
  protoOf(GameObject).get_spriteId_a7e8i1_k$ = function () {
    return this.spriteId_1;
  };
  protoOf(GameObject).set_visible_w9mvj4_k$ = function (_set____db54di) {
    this.visible_1 = _set____db54di;
  };
  protoOf(GameObject).get_visible_8zfvk9_k$ = function () {
    return this.visible_1;
  };
  protoOf(GameObject).set_managed_az0hil_k$ = function (_set____db54di) {
    this.managed_1 = _set____db54di;
  };
  protoOf(GameObject).get_managed_f2uh12_k$ = function () {
    return this.managed_1;
  };
  protoOf(GameObject).set_solid_64xt6h_k$ = function (_set____db54di) {
    this.solid_1 = _set____db54di;
  };
  protoOf(GameObject).get_solid_iymy6a_k$ = function () {
    return this.solid_1;
  };
  protoOf(GameObject).set_depth_v0xlni_k$ = function (_set____db54di) {
    this.depth_1 = _set____db54di;
  };
  protoOf(GameObject).get_depth_iq7qmy_k$ = function () {
    return this.depth_1;
  };
  protoOf(GameObject).set_persistent_7ykjsv_k$ = function (_set____db54di) {
    this.persistent_1 = _set____db54di;
  };
  protoOf(GameObject).get_persistent_bp580w_k$ = function () {
    return this.persistent_1;
  };
  protoOf(GameObject).set_parentId_91ddie_k$ = function (_set____db54di) {
    this.parentId_1 = _set____db54di;
  };
  protoOf(GameObject).get_parentId_cd9xaq_k$ = function () {
    return this.parentId_1;
  };
  protoOf(GameObject).set_textureMaskId_79h9er_k$ = function (_set____db54di) {
    this.textureMaskId_1 = _set____db54di;
  };
  protoOf(GameObject).get_textureMaskId_iul89_k$ = function () {
    return this.textureMaskId_1;
  };
  protoOf(GameObject).set_usesPhysics_4brgmh_k$ = function (_set____db54di) {
    this.usesPhysics_1 = _set____db54di;
  };
  protoOf(GameObject).get_usesPhysics_s15mcy_k$ = function () {
    return this.usesPhysics_1;
  };
  protoOf(GameObject).set_isSensor_bkr26k_k$ = function (_set____db54di) {
    this.isSensor_1 = _set____db54di;
  };
  protoOf(GameObject).get_isSensor_ze3l8t_k$ = function () {
    return this.isSensor_1;
  };
  protoOf(GameObject).set_collisionShape_vesiyk_k$ = function (_set____db54di) {
    this.collisionShape_1 = _set____db54di;
  };
  protoOf(GameObject).get_collisionShape_rofc7s_k$ = function () {
    return this.collisionShape_1;
  };
  protoOf(GameObject).set_density_9r1jnh_k$ = function (_set____db54di) {
    this.density_1 = _set____db54di;
  };
  protoOf(GameObject).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(GameObject).set_restitution_jw5pq3_k$ = function (_set____db54di) {
    this.restitution_1 = _set____db54di;
  };
  protoOf(GameObject).get_restitution_3itybl_k$ = function () {
    return this.restitution_1;
  };
  protoOf(GameObject).set_group_kqsk62_k$ = function (_set____db54di) {
    this.group_1 = _set____db54di;
  };
  protoOf(GameObject).get_group_is3eja_k$ = function () {
    return this.group_1;
  };
  protoOf(GameObject).set_linearDamping_pb3f6w_k$ = function (_set____db54di) {
    this.linearDamping_1 = _set____db54di;
  };
  protoOf(GameObject).get_linearDamping_jq3rp0_k$ = function () {
    return this.linearDamping_1;
  };
  protoOf(GameObject).set_angularDamping_i5cf9n_k$ = function (_set____db54di) {
    this.angularDamping_1 = _set____db54di;
  };
  protoOf(GameObject).get_angularDamping_71ceuv_k$ = function () {
    return this.angularDamping_1;
  };
  protoOf(GameObject).set_physicsVertexCount_ga37o9_k$ = function (_set____db54di) {
    this.physicsVertexCount_1 = _set____db54di;
  };
  protoOf(GameObject).get_physicsVertexCount_ppxmyb_k$ = function () {
    return this.physicsVertexCount_1;
  };
  protoOf(GameObject).set_friction_9190r5_k$ = function (_set____db54di) {
    this.friction_1 = _set____db54di;
  };
  protoOf(GameObject).get_friction_fnxnsz_k$ = function () {
    return this.friction_1;
  };
  protoOf(GameObject).set_awake_9jd5sj_k$ = function (_set____db54di) {
    this.awake_1 = _set____db54di;
  };
  protoOf(GameObject).get_awake_iovja4_k$ = function () {
    return this.awake_1;
  };
  protoOf(GameObject).set_kinematic_694cj1_k$ = function (_set____db54di) {
    this.kinematic_1 = _set____db54di;
  };
  protoOf(GameObject).get_kinematic_8wo40s_k$ = function () {
    return this.kinematic_1;
  };
  protoOf(GameObject).set_physicsVertices_uffbpl_k$ = function (_set____db54di) {
    this.physicsVertices_1 = _set____db54di;
  };
  protoOf(GameObject).get_physicsVertices_y8wmtl_k$ = function () {
    return this.physicsVertices_1;
  };
  protoOf(GameObject).set_eventLists_2e8tgw_k$ = function (_set____db54di) {
    this.eventLists_1 = _set____db54di;
  };
  protoOf(GameObject).get_eventLists_46tp3w_k$ = function () {
    return this.eventLists_1;
  };
  function PhysicsVertex(x, y) {
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(PhysicsVertex).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(PhysicsVertex).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  function ObjectEventList(events) {
    events = events === VOID ? emptyList() : events;
    this.events_1 = events;
  }
  protoOf(ObjectEventList).get_events_d1yhia_k$ = function () {
    return this.events_1;
  };
  function ObjectEvent(eventSubtype, actions) {
    this.eventSubtype_1 = eventSubtype;
    this.actions_1 = actions;
  }
  protoOf(ObjectEvent).get_eventSubtype_bbl2rb_k$ = function () {
    return this.eventSubtype_1;
  };
  protoOf(ObjectEvent).get_actions_hy5jak_k$ = function () {
    return this.actions_1;
  };
  function RoomBackground() {
    this.enabled_1 = false;
    this.foreground_1 = false;
    this.backgroundDefinition_1 = 0;
    this.x_1 = 0;
    this.y_1 = 0;
    this.tileX_1 = 0;
    this.tileY_1 = 0;
    this.speedX_1 = 0;
    this.speedY_1 = 0;
    this.stretch_1 = false;
  }
  protoOf(RoomBackground).set_enabled_tswf75_k$ = function (_set____db54di) {
    this.enabled_1 = _set____db54di;
  };
  protoOf(RoomBackground).get_enabled_pcr8o8_k$ = function () {
    return this.enabled_1;
  };
  protoOf(RoomBackground).set_foreground_eooal1_k$ = function (_set____db54di) {
    this.foreground_1 = _set____db54di;
  };
  protoOf(RoomBackground).get_foreground_cn8q8c_k$ = function () {
    return this.foreground_1;
  };
  protoOf(RoomBackground).set_backgroundDefinition_h9uju2_k$ = function (_set____db54di) {
    this.backgroundDefinition_1 = _set____db54di;
  };
  protoOf(RoomBackground).get_backgroundDefinition_2hdx7u_k$ = function () {
    return this.backgroundDefinition_1;
  };
  protoOf(RoomBackground).set_x_z5k1bn_k$ = function (_set____db54di) {
    this.x_1 = _set____db54di;
  };
  protoOf(RoomBackground).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(RoomBackground).set_y_zw46k_k$ = function (_set____db54di) {
    this.y_1 = _set____db54di;
  };
  protoOf(RoomBackground).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(RoomBackground).set_tileX_k1devv_k$ = function (_set____db54di) {
    this.tileX_1 = _set____db54di;
  };
  protoOf(RoomBackground).get_tileX_iz2wqp_k$ = function () {
    return this.tileX_1;
  };
  protoOf(RoomBackground).set_tileY_euahl2_k$ = function (_set____db54di) {
    this.tileY_1 = _set____db54di;
  };
  protoOf(RoomBackground).get_tileY_iz2wqq_k$ = function () {
    return this.tileY_1;
  };
  protoOf(RoomBackground).set_speedX_55xsnu_k$ = function (_set____db54di) {
    this.speedX_1 = _set____db54di;
  };
  protoOf(RoomBackground).get_speedX_jla8e2_k$ = function () {
    return this.speedX_1;
  };
  protoOf(RoomBackground).set_speedY_tpq3t3_k$ = function (_set____db54di) {
    this.speedY_1 = _set____db54di;
  };
  protoOf(RoomBackground).get_speedY_jla8e3_k$ = function () {
    return this.speedY_1;
  };
  protoOf(RoomBackground).set_stretch_lnkhpp_k$ = function (_set____db54di) {
    this.stretch_1 = _set____db54di;
  };
  protoOf(RoomBackground).get_stretch_tuv46c_k$ = function () {
    return this.stretch_1;
  };
  function RoomView() {
    this.enabled_1 = false;
    this.viewX_1 = 0;
    this.viewY_1 = 0;
    this.viewWidth_1 = 0;
    this.viewHeight_1 = 0;
    this.portX_1 = 0;
    this.portY_1 = 0;
    this.portWidth_1 = 0;
    this.portHeight_1 = 0;
    this.borderX_1 = 0;
    this.borderY_1 = 0;
    this.speedX_1 = 0;
    this.speedY_1 = 0;
    this.objectId_1 = 0;
  }
  protoOf(RoomView).set_enabled_tswf75_k$ = function (_set____db54di) {
    this.enabled_1 = _set____db54di;
  };
  protoOf(RoomView).get_enabled_pcr8o8_k$ = function () {
    return this.enabled_1;
  };
  protoOf(RoomView).set_viewX_519r4i_k$ = function (_set____db54di) {
    this.viewX_1 = _set____db54di;
  };
  protoOf(RoomView).get_viewX_j06d62_k$ = function () {
    return this.viewX_1;
  };
  protoOf(RoomView).set_viewY_tue5cf_k$ = function (_set____db54di) {
    this.viewY_1 = _set____db54di;
  };
  protoOf(RoomView).get_viewY_j06d63_k$ = function () {
    return this.viewY_1;
  };
  protoOf(RoomView).set_viewWidth_1lxwfw_k$ = function (_set____db54di) {
    this.viewWidth_1 = _set____db54di;
  };
  protoOf(RoomView).get_viewWidth_hmluh4_k$ = function () {
    return this.viewWidth_1;
  };
  protoOf(RoomView).set_viewHeight_idlxa9_k$ = function (_set____db54di) {
    this.viewHeight_1 = _set____db54di;
  };
  protoOf(RoomView).get_viewHeight_emam5x_k$ = function () {
    return this.viewHeight_1;
  };
  protoOf(RoomView).set_portX_i8f53m_k$ = function (_set____db54di) {
    this.portX_1 = _set____db54di;
  };
  protoOf(RoomView).get_portX_iwzp3i_k$ = function () {
    return this.portX_1;
  };
  protoOf(RoomView).set_portY_hx10el_k$ = function (_set____db54di) {
    this.portY_1 = _set____db54di;
  };
  protoOf(RoomView).get_portY_iwzp3j_k$ = function () {
    return this.portY_1;
  };
  protoOf(RoomView).set_portWidth_egeu74_k$ = function (_set____db54di) {
    this.portWidth_1 = _set____db54di;
  };
  protoOf(RoomView).get_portWidth_qu1kik_k$ = function () {
    return this.portWidth_1;
  };
  protoOf(RoomView).set_portHeight_hkfdb1_k$ = function (_set____db54di) {
    this.portHeight_1 = _set____db54di;
  };
  protoOf(RoomView).get_portHeight_rnskmn_k$ = function () {
    return this.portHeight_1;
  };
  protoOf(RoomView).set_borderX_nfsftz_k$ = function (_set____db54di) {
    this.borderX_1 = _set____db54di;
  };
  protoOf(RoomView).get_borderX_2dl877_k$ = function () {
    return this.borderX_1;
  };
  protoOf(RoomView).set_borderY_cpnpo8_k$ = function (_set____db54di) {
    this.borderY_1 = _set____db54di;
  };
  protoOf(RoomView).get_borderY_2dl878_k$ = function () {
    return this.borderY_1;
  };
  protoOf(RoomView).set_speedX_55xsnu_k$ = function (_set____db54di) {
    this.speedX_1 = _set____db54di;
  };
  protoOf(RoomView).get_speedX_jla8e2_k$ = function () {
    return this.speedX_1;
  };
  protoOf(RoomView).set_speedY_tpq3t3_k$ = function (_set____db54di) {
    this.speedY_1 = _set____db54di;
  };
  protoOf(RoomView).get_speedY_jla8e3_k$ = function () {
    return this.speedY_1;
  };
  protoOf(RoomView).set_objectId_3h15qn_k$ = function (_set____db54di) {
    this.objectId_1 = _set____db54di;
  };
  protoOf(RoomView).get_objectId_ub2459_k$ = function () {
    return this.objectId_1;
  };
  function RoomGameObject() {
    this.x_1 = 0;
    this.y_1 = 0;
    this.objectDefinition_1 = 0;
    this.instanceID_1 = 0;
    this.creationCode_1 = 0;
    this.scaleX_1 = 0.0;
    this.scaleY_1 = 0.0;
    this.imageSpeed_1 = 1.0;
    this.imageIndex_1 = 0;
    this.color_1 = 0;
    this.rotation_1 = 0.0;
    this.preCreateCode_1 = -1;
  }
  protoOf(RoomGameObject).set_x_z5k1bn_k$ = function (_set____db54di) {
    this.x_1 = _set____db54di;
  };
  protoOf(RoomGameObject).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(RoomGameObject).set_y_zw46k_k$ = function (_set____db54di) {
    this.y_1 = _set____db54di;
  };
  protoOf(RoomGameObject).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(RoomGameObject).set_objectDefinition_4gkayh_k$ = function (_set____db54di) {
    this.objectDefinition_1 = _set____db54di;
  };
  protoOf(RoomGameObject).get_objectDefinition_be96px_k$ = function () {
    return this.objectDefinition_1;
  };
  protoOf(RoomGameObject).set_instanceID_g4s70b_k$ = function (_set____db54di) {
    this.instanceID_1 = _set____db54di;
  };
  protoOf(RoomGameObject).get_instanceID_597k7b_k$ = function () {
    return this.instanceID_1;
  };
  protoOf(RoomGameObject).set_creationCode_ln0lrz_k$ = function (_set____db54di) {
    this.creationCode_1 = _set____db54di;
  };
  protoOf(RoomGameObject).get_creationCode_urjdth_k$ = function () {
    return this.creationCode_1;
  };
  protoOf(RoomGameObject).set_scaleX_ykjjzx_k$ = function (_set____db54di) {
    this.scaleX_1 = _set____db54di;
  };
  protoOf(RoomGameObject).get_scaleX_je2hxz_k$ = function () {
    return this.scaleX_1;
  };
  protoOf(RoomGameObject).set_scaleY_i4eqp0_k$ = function (_set____db54di) {
    this.scaleY_1 = _set____db54di;
  };
  protoOf(RoomGameObject).get_scaleY_je2hy0_k$ = function () {
    return this.scaleY_1;
  };
  protoOf(RoomGameObject).set_imageSpeed_n3fmox_k$ = function (_set____db54di) {
    this.imageSpeed_1 = _set____db54di;
  };
  protoOf(RoomGameObject).get_imageSpeed_qt75f9_k$ = function () {
    return this.imageSpeed_1;
  };
  protoOf(RoomGameObject).set_imageIndex_shbavo_k$ = function (_set____db54di) {
    this.imageIndex_1 = _set____db54di;
  };
  protoOf(RoomGameObject).get_imageIndex_qnnwsg_k$ = function () {
    return this.imageIndex_1;
  };
  protoOf(RoomGameObject).set_color_7ztbpe_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(RoomGameObject).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(RoomGameObject).set_rotation_ob0jkd_k$ = function (_set____db54di) {
    this.rotation_1 = _set____db54di;
  };
  protoOf(RoomGameObject).get_rotation_wgxiux_k$ = function () {
    return this.rotation_1;
  };
  protoOf(RoomGameObject).set_preCreateCode_5fwbll_k$ = function (_set____db54di) {
    this.preCreateCode_1 = _set____db54di;
  };
  protoOf(RoomGameObject).get_preCreateCode_k6006b_k$ = function () {
    return this.preCreateCode_1;
  };
  function SpriteInstance() {
    this.name_1 = null;
    this.spriteIndex_1 = 0;
    this.x_1 = 0;
    this.y_1 = 0;
    this.scaleX_1 = 0.0;
    this.scaleY_1 = 0.0;
    this.color_1 = 0;
    this.animationSpeed_1 = 0.0;
    this.animationSpeedType_1 = 0;
    this.frameIndex_1 = 0.0;
    this.rotation_1 = 0.0;
  }
  protoOf(SpriteInstance).set_name_wkmnld_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(SpriteInstance).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(SpriteInstance).set_spriteIndex_k6sht4_k$ = function (_set____db54di) {
    this.spriteIndex_1 = _set____db54di;
  };
  protoOf(SpriteInstance).get_spriteIndex_hnyap0_k$ = function () {
    return this.spriteIndex_1;
  };
  protoOf(SpriteInstance).set_x_z5k1bn_k$ = function (_set____db54di) {
    this.x_1 = _set____db54di;
  };
  protoOf(SpriteInstance).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(SpriteInstance).set_y_zw46k_k$ = function (_set____db54di) {
    this.y_1 = _set____db54di;
  };
  protoOf(SpriteInstance).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(SpriteInstance).set_scaleX_ykjjzx_k$ = function (_set____db54di) {
    this.scaleX_1 = _set____db54di;
  };
  protoOf(SpriteInstance).get_scaleX_je2hxz_k$ = function () {
    return this.scaleX_1;
  };
  protoOf(SpriteInstance).set_scaleY_i4eqp0_k$ = function (_set____db54di) {
    this.scaleY_1 = _set____db54di;
  };
  protoOf(SpriteInstance).get_scaleY_je2hy0_k$ = function () {
    return this.scaleY_1;
  };
  protoOf(SpriteInstance).set_color_7ztbpe_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(SpriteInstance).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(SpriteInstance).set_animationSpeed_5j6yw_k$ = function (_set____db54di) {
    this.animationSpeed_1 = _set____db54di;
  };
  protoOf(SpriteInstance).get_animationSpeed_98pnho_k$ = function () {
    return this.animationSpeed_1;
  };
  protoOf(SpriteInstance).set_animationSpeedType_cp5nbi_k$ = function (_set____db54di) {
    this.animationSpeedType_1 = _set____db54di;
  };
  protoOf(SpriteInstance).get_animationSpeedType_k1jla2_k$ = function () {
    return this.animationSpeedType_1;
  };
  protoOf(SpriteInstance).set_frameIndex_pk4gzq_k$ = function (_set____db54di) {
    this.frameIndex_1 = _set____db54di;
  };
  protoOf(SpriteInstance).get_frameIndex_ozilg2_k$ = function () {
    return this.frameIndex_1;
  };
  protoOf(SpriteInstance).set_rotation_ob0jkd_k$ = function (_set____db54di) {
    this.rotation_1 = _set____db54di;
  };
  protoOf(SpriteInstance).get_rotation_wgxiux_k$ = function () {
    return this.rotation_1;
  };
  function RoomLayerBackgroundData() {
    this.visible_1 = false;
    this.foreground_1 = false;
    this.spriteIndex_1 = -1;
    this.hTiled_1 = false;
    this.vTiled_1 = false;
    this.stretch_1 = false;
    this.color_1 = 0;
    this.firstFrame_1 = 0.0;
    this.animSpeed_1 = 0.0;
    this.animSpeedType_1 = 0;
  }
  protoOf(RoomLayerBackgroundData).set_visible_w9mvj4_k$ = function (_set____db54di) {
    this.visible_1 = _set____db54di;
  };
  protoOf(RoomLayerBackgroundData).get_visible_8zfvk9_k$ = function () {
    return this.visible_1;
  };
  protoOf(RoomLayerBackgroundData).set_foreground_eooal1_k$ = function (_set____db54di) {
    this.foreground_1 = _set____db54di;
  };
  protoOf(RoomLayerBackgroundData).get_foreground_cn8q8c_k$ = function () {
    return this.foreground_1;
  };
  protoOf(RoomLayerBackgroundData).set_spriteIndex_k6sht4_k$ = function (_set____db54di) {
    this.spriteIndex_1 = _set____db54di;
  };
  protoOf(RoomLayerBackgroundData).get_spriteIndex_hnyap0_k$ = function () {
    return this.spriteIndex_1;
  };
  protoOf(RoomLayerBackgroundData).set_hTiled_nlmc6u_k$ = function (_set____db54di) {
    this.hTiled_1 = _set____db54di;
  };
  protoOf(RoomLayerBackgroundData).get_hTiled_dygulz_k$ = function () {
    return this.hTiled_1;
  };
  protoOf(RoomLayerBackgroundData).set_vTiled_6h1zyw_k$ = function (_set____db54di) {
    this.vTiled_1 = _set____db54di;
  };
  protoOf(RoomLayerBackgroundData).get_vTiled_kl3k4p_k$ = function () {
    return this.vTiled_1;
  };
  protoOf(RoomLayerBackgroundData).set_stretch_lnkhpp_k$ = function (_set____db54di) {
    this.stretch_1 = _set____db54di;
  };
  protoOf(RoomLayerBackgroundData).get_stretch_tuv46c_k$ = function () {
    return this.stretch_1;
  };
  protoOf(RoomLayerBackgroundData).set_color_7ztbpe_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(RoomLayerBackgroundData).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(RoomLayerBackgroundData).set_firstFrame_wzbc4y_k$ = function (_set____db54di) {
    this.firstFrame_1 = _set____db54di;
  };
  protoOf(RoomLayerBackgroundData).get_firstFrame_n7rumy_k$ = function () {
    return this.firstFrame_1;
  };
  protoOf(RoomLayerBackgroundData).set_animSpeed_4rifpt_k$ = function (_set____db54di) {
    this.animSpeed_1 = _set____db54di;
  };
  protoOf(RoomLayerBackgroundData).get_animSpeed_qsoljh_k$ = function () {
    return this.animSpeed_1;
  };
  protoOf(RoomLayerBackgroundData).set_animSpeedType_7s40mt_k$ = function (_set____db54di) {
    this.animSpeedType_1 = _set____db54di;
  };
  protoOf(RoomLayerBackgroundData).get_animSpeedType_c5c74p_k$ = function () {
    return this.animSpeedType_1;
  };
  function RoomLayerInstancesData() {
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.instanceIds_1 = new Int32Array([]);
  }
  protoOf(RoomLayerInstancesData).set_instanceIds_j6l17v_k$ = function (_set____db54di) {
    this.instanceIds_1 = _set____db54di;
  };
  protoOf(RoomLayerInstancesData).get_instanceIds_kva9hi_k$ = function () {
    return this.instanceIds_1;
  };
  function RoomLayerTilesData() {
    this.backgroundIndex_1 = 0;
    this.tilesX_1 = 0;
    this.tilesY_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.tileData_1 = new Int32Array([]);
  }
  protoOf(RoomLayerTilesData).set_backgroundIndex_owz16n_k$ = function (_set____db54di) {
    this.backgroundIndex_1 = _set____db54di;
  };
  protoOf(RoomLayerTilesData).get_backgroundIndex_9x1i1x_k$ = function () {
    return this.backgroundIndex_1;
  };
  protoOf(RoomLayerTilesData).set_tilesX_ohh9y0_k$ = function (_set____db54di) {
    this.tilesX_1 = _set____db54di;
  };
  protoOf(RoomLayerTilesData).get_tilesX_jylrwc_k$ = function () {
    return this.tilesX_1;
  };
  protoOf(RoomLayerTilesData).set_tilesY_ae6mix_k$ = function (_set____db54di) {
    this.tilesY_1 = _set____db54di;
  };
  protoOf(RoomLayerTilesData).get_tilesY_jylrwd_k$ = function () {
    return this.tilesY_1;
  };
  protoOf(RoomLayerTilesData).set_tileData_doyx2y_k$ = function (_set____db54di) {
    this.tileData_1 = _set____db54di;
  };
  protoOf(RoomLayerTilesData).get_tileData_4e15xd_k$ = function () {
    return this.tileData_1;
  };
  function CodeEntry(name, length, localsCount, argumentsCount, bytecodeAbsoluteOffset, offset) {
    this.name_1 = name;
    this.length_1 = length;
    this.localsCount_1 = localsCount;
    this.argumentsCount_1 = argumentsCount;
    this.bytecodeAbsoluteOffset_1 = bytecodeAbsoluteOffset;
    this.offset_1 = offset;
  }
  protoOf(CodeEntry).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(CodeEntry).get_length_g42xv3_k$ = function () {
    return this.length_1;
  };
  protoOf(CodeEntry).get_localsCount_jaqh9e_k$ = function () {
    return this.localsCount_1;
  };
  protoOf(CodeEntry).get_argumentsCount_lo1t2a_k$ = function () {
    return this.argumentsCount_1;
  };
  protoOf(CodeEntry).get_bytecodeAbsoluteOffset_koserc_k$ = function () {
    return this.bytecodeAbsoluteOffset_1;
  };
  protoOf(CodeEntry).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  function Variable(name, instanceType, varID, occurrences, firstAddress, builtinVarId) {
    builtinVarId = builtinVarId === VOID ? -1 : builtinVarId;
    this.name_1 = name;
    this.instanceType_1 = instanceType;
    this.varID_1 = varID;
    this.occurrences_1 = occurrences;
    this.firstAddress_1 = firstAddress;
    this.builtinVarId_1 = builtinVarId;
  }
  protoOf(Variable).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Variable).get_instanceType_7nm7uw_k$ = function () {
    return this.instanceType_1;
  };
  protoOf(Variable).get_varID_j01hsp_k$ = function () {
    return this.varID_1;
  };
  protoOf(Variable).get_occurrences_qv9il5_k$ = function () {
    return this.occurrences_1;
  };
  protoOf(Variable).get_firstAddress_fqv1cj_k$ = function () {
    return this.firstAddress_1;
  };
  protoOf(Variable).set_builtinVarId_wyw0yc_k$ = function (_set____db54di) {
    this.builtinVarId_1 = _set____db54di;
  };
  protoOf(Variable).get_builtinVarId_n0upvs_k$ = function () {
    return this.builtinVarId_1;
  };
  function Function(name, occurrences, firstAddress) {
    this.name_1 = name;
    this.occurrences_1 = occurrences;
    this.firstAddress_1 = firstAddress;
  }
  protoOf(Function).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Function).get_occurrences_qv9il5_k$ = function () {
    return this.occurrences_1;
  };
  protoOf(Function).get_firstAddress_fqv1cj_k$ = function () {
    return this.firstAddress_1;
  };
  function CodeLocals(name, locals) {
    this.name_1 = name;
    this.locals_1 = locals;
  }
  protoOf(CodeLocals).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(CodeLocals).get_locals_g9dqb5_k$ = function () {
    return this.locals_1;
  };
  function LocalVar(varID, name) {
    this.varID_1 = varID;
    this.name_1 = name;
  }
  protoOf(LocalVar).get_varID_j01hsp_k$ = function () {
    return this.varID_1;
  };
  protoOf(LocalVar).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  function InternalPathPoint(x, y, speed, l) {
    l = l === VOID ? 0.0 : l;
    this.x_1 = x;
    this.y_1 = y;
    this.speed_1 = speed;
    this.l_1 = l;
  }
  protoOf(InternalPathPoint).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(InternalPathPoint).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(InternalPathPoint).get_speed_iynfvi_k$ = function () {
    return this.speed_1;
  };
  protoOf(InternalPathPoint).set_l_ugmeyv_k$ = function (_set____db54di) {
    this.l_1 = _set____db54di;
  };
  protoOf(InternalPathPoint).get_l_1mhr5v_k$ = function () {
    return this.l_1;
  };
  function PathPositionResult(x, y, speed) {
    this.x_1 = x;
    this.y_1 = y;
    this.speed_1 = speed;
  }
  protoOf(PathPositionResult).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(PathPositionResult).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(PathPositionResult).get_speed_iynfvi_k$ = function () {
    return this.speed_1;
  };
  protoOf(PathPositionResult).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(PathPositionResult).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(PathPositionResult).component3_7eebsa_k$ = function () {
    return this.speed_1;
  };
  protoOf(PathPositionResult).copy_jri375_k$ = function (x, y, speed) {
    return new PathPositionResult(x, y, speed);
  };
  protoOf(PathPositionResult).copy$default_p55j6u_k$ = function (x, y, speed, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    speed = speed === VOID ? this.speed_1 : speed;
    return $super === VOID ? this.copy_jri375_k$(x, y, speed) : $super.copy_jri375_k$.call(this, x, y, speed);
  };
  protoOf(PathPositionResult).toString = function () {
    return 'PathPositionResult(x=' + this.x_1 + ', y=' + this.y_1 + ', speed=' + this.speed_1 + ')';
  };
  protoOf(PathPositionResult).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.speed_1) | 0;
    return result;
  };
  protoOf(PathPositionResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathPositionResult))
      return false;
    if (!equals(this.x_1, other.x_1))
      return false;
    if (!equals(this.y_1, other.y_1))
      return false;
    if (!equals(this.speed_1, other.speed_1))
      return false;
    return true;
  };
  function decodeImageBytes(blob, gm2022_5, $completion) {
    // Inline function 'kotlin.require' call
    if (!(blob.length >= 4)) {
      var message = 'ImageDecoder: blob too small';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = blob[0];
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(102);
    var tmp$ret$2 = Char__toInt_impl_vasixd(this_0);
    if (tmp_2 === toByte(tmp$ret$2)) {
      var tmp_3 = blob[1];
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(105);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_1);
      tmp_1 = tmp_3 === toByte(tmp$ret$3);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = blob[2];
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(111);
      var tmp$ret$4 = Char__toInt_impl_vasixd(this_2);
      tmp_0 = tmp_4 === toByte(tmp$ret$4);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = blob[3];
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(113);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_3);
      tmp = tmp_5 === toByte(tmp$ret$5);
    } else {
      tmp = false;
    }
    if (tmp) {
      return decodeQoi(blob);
    }
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp_9 = blob[0];
    // Inline function 'kotlin.code' call
    var this_4 = _Char___init__impl__6a9atx(50);
    var tmp$ret$6 = Char__toInt_impl_vasixd(this_4);
    if (tmp_9 === toByte(tmp$ret$6)) {
      var tmp_10 = blob[1];
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(122);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_5);
      tmp_8 = tmp_10 === toByte(tmp$ret$7);
    } else {
      tmp_8 = false;
    }
    if (tmp_8) {
      var tmp_11 = blob[2];
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(111);
      var tmp$ret$8 = Char__toInt_impl_vasixd(this_6);
      tmp_7 = tmp_11 === toByte(tmp$ret$8);
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      var tmp_12 = blob[3];
      // Inline function 'kotlin.code' call
      var this_7 = _Char___init__impl__6a9atx(113);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_7);
      tmp_6 = tmp_12 === toByte(tmp$ret$9);
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      return decodeBz2Qoi(blob, gm2022_5);
    }
    return decodePngBytes(blob, $completion);
  }
  function decodeBz2Qoi(blob, gm2022_5) {
    var headerSize = gm2022_5 ? 12 : 8;
    // Inline function 'kotlin.require' call
    if (!(blob.length >= headerSize)) {
      var message = 'BZ2-QOI: blob too small';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var width = blob[4] & 255 | (blob[5] & 255) << 8;
    var height = blob[6] & 255 | (blob[7] & 255) << 8;
    // Inline function 'kotlin.require' call
    if (!(width > 0 && height > 0)) {
      var message_0 = 'BZ2-QOI: bad dimensions';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var bz2Stream = copyOfRange(blob, headerSize, blob.length);
    var uncompressed = bzip2Decompress(bz2Stream);
    return decodeQoi(uncompressed);
  }
  function _get_SECTOR_SIZE__hmv6af($this) {
    return $this.SECTOR_SIZE_1;
  }
  function _get_SYSTEM_AREA_SECTORS__9lwpwa($this) {
    return $this.SYSTEM_AREA_SECTORS_1;
  }
  function File(name, isoFile, sector, sectorCount) {
    sector = sector === VOID ? 0 : sector;
    sectorCount = sectorCount === VOID ? 0 : sectorCount;
    DirEntryInfo.call(this, name);
    this.isoFile_1 = isoFile;
    this.sector_1 = sector;
    this.sectorCount_1 = sectorCount;
  }
  protoOf(File).get_isoFile_z3uv60_k$ = function () {
    return this.isoFile_1;
  };
  protoOf(File).set_sector_bnajid_k$ = function (_set____db54di) {
    this.sector_1 = _set____db54di;
  };
  protoOf(File).get_sector_jf7jan_k$ = function () {
    return this.sector_1;
  };
  protoOf(File).set_sectorCount_l1uq70_k$ = function (_set____db54di) {
    this.sectorCount_1 = _set____db54di;
  };
  protoOf(File).get_sectorCount_ttf8kg_k$ = function () {
    return this.sectorCount_1;
  };
  function Subdirectory(name, dirIndex) {
    DirEntryInfo.call(this, name);
    this.dirIndex_1 = dirIndex;
  }
  protoOf(Subdirectory).get_dirIndex_s5nq42_k$ = function () {
    return this.dirIndex_1;
  };
  function _get_volumeId__aow31m($this) {
    return $this.volumeId_1;
  }
  function _get_systemId__rumjkv($this) {
    return $this.systemId_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.SECTOR_SIZE_1 = 2048;
    this.SYSTEM_AREA_SECTORS_1 = 16;
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function IsoFile(name, data) {
    this.name_1 = name;
    this.data_1 = data;
  }
  protoOf(IsoFile).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(IsoFile).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  function DirInfo(name, parentIndex, entries, sector, sizeInBytes) {
    var tmp;
    if (entries === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$_0();
    } else {
      tmp = entries;
    }
    entries = tmp;
    sector = sector === VOID ? 0 : sector;
    sizeInBytes = sizeInBytes === VOID ? 0 : sizeInBytes;
    this.name_1 = name;
    this.parentIndex_1 = parentIndex;
    this.entries_1 = entries;
    this.sector_1 = sector;
    this.sizeInBytes_1 = sizeInBytes;
  }
  protoOf(DirInfo).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(DirInfo).get_parentIndex_ucfahr_k$ = function () {
    return this.parentIndex_1;
  };
  protoOf(DirInfo).get_entries_p20ztl_k$ = function () {
    return this.entries_1;
  };
  protoOf(DirInfo).set_sector_bnajid_k$ = function (_set____db54di) {
    this.sector_1 = _set____db54di;
  };
  protoOf(DirInfo).get_sector_jf7jan_k$ = function () {
    return this.sector_1;
  };
  protoOf(DirInfo).set_sizeInBytes_hni1pc_k$ = function (_set____db54di) {
    this.sizeInBytes_1 = _set____db54di;
  };
  protoOf(DirInfo).get_sizeInBytes_hla44k_k$ = function () {
    return this.sizeInBytes_1;
  };
  protoOf(DirInfo).get_sectorCount_ttf8kg_k$ = function () {
    return ((this.sizeInBytes_1 + 2048 | 0) - 1 | 0) / 2048 | 0;
  };
  function DirEntryInfo(name) {
    this.name_1 = name;
  }
  protoOf(DirEntryInfo).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  function calculateDirectorySize($this, dir) {
    var size = 0;
    size = size + 34 | 0;
    size = size + 34 | 0;
    var _iterator__ex2g4s = dir.entries_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var entry = _iterator__ex2g4s.next_20eer_k$();
      var tmp;
      if (entry instanceof Subdirectory) {
        tmp = encodeToByteArray(entry.name_1);
      } else {
        if (entry instanceof File) {
          tmp = encodeToByteArray(entry.name_1 + ';1');
        } else {
          noWhenBranchMatchedException();
        }
      }
      var identifier = tmp;
      var baseLength = 33 + identifier.length | 0;
      var paddingByte = !((baseLength % 2 | 0) === 0) ? 1 : 0;
      var recordLength = baseLength + paddingByte | 0;
      var sectorOffset = size % 2048 | 0;
      if ((sectorOffset + recordLength | 0) > 2048) {
        size = size + (2048 - sectorOffset | 0) | 0;
      }
      size = size + recordLength | 0;
    }
    return imul(((size + 2048 | 0) - 1 | 0) / 2048 | 0, 2048);
  }
  function calculatePathTableSize($this, directories) {
    var size = 0;
    var _iterator__ex2g4s = directories.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var dir = _iterator__ex2g4s.next_20eer_k$();
      var tmp;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = dir.name_1;
      if (charSequenceLength(this_0) === 0) {
        tmp = 1;
      } else {
        tmp = dir.name_1.length;
      }
      var nameLength = tmp;
      size = size + ((8 + nameLength | 0) + (!((nameLength % 2 | 0) === 0) ? 1 : 0) | 0) | 0;
    }
    return size;
  }
  function writePathTable($this, writer, directories, littleEndian) {
    var _iterator__ex2g4s = directories.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var dir = _iterator__ex2g4s.next_20eer_k$();
      var nameBytes;
      var nameLength;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = dir.name_1;
      if (charSequenceLength(this_0) === 0) {
        // Inline function 'kotlin.byteArrayOf' call
        nameBytes = new Int8Array([0]);
        nameLength = 1;
      } else {
        nameBytes = encodeToByteArray(dir.name_1);
        nameLength = nameBytes.length;
      }
      writer.writeByte_1arzrz_k$(nameLength);
      writer.writeByte_1arzrz_k$(0);
      if (littleEndian) {
        writeInt32LE($this, writer, dir.sector_1);
        writeInt16LE($this, writer, dir.parentIndex_1 + 1 | 0);
      } else {
        writeInt32BE($this, writer, dir.sector_1);
        writeInt16BE($this, writer, dir.parentIndex_1 + 1 | 0);
      }
      writer.writeByteArray_uu44pq_k$(nameBytes);
      if (!((nameLength % 2 | 0) === 0)) {
        writer.writeByte_1arzrz_k$(0);
      }
    }
  }
  function writeDirectoryRecord($this, writer, extentSector, dataLength, flags, identifier) {
    var baseLength = 33 + identifier.length | 0;
    var paddingByte = !((baseLength % 2 | 0) === 0) ? 1 : 0;
    var recordLength = baseLength + paddingByte | 0;
    writer.writeByte_1arzrz_k$(recordLength);
    writer.writeByte_1arzrz_k$(0);
    writeBothEndian32($this, writer, extentSector);
    writeBothEndian32($this, writer, dataLength);
    writeDirectoryDateTime($this, writer);
    writer.writeByte_1arzrz_k$(flags);
    writer.writeByte_1arzrz_k$(0);
    writer.writeByte_1arzrz_k$(0);
    writeBothEndian16($this, writer, 1);
    writer.writeByte_1arzrz_k$(identifier.length);
    writer.writeByteArray_uu44pq_k$(identifier);
    if (paddingByte > 0) {
      writer.writeByte_1arzrz_k$(0);
    }
  }
  function writeBothEndian32($this, writer, value) {
    writeInt32LE($this, writer, value);
    writeInt32BE($this, writer, value);
  }
  function writeBothEndian16($this, writer, value) {
    writeInt16LE($this, writer, value);
    writeInt16BE($this, writer, value);
  }
  function writeInt32LE($this, writer, value) {
    writer.writeByte_1arzrz_k$(value & 255);
    writer.writeByte_1arzrz_k$(value >> 8 & 255);
    writer.writeByte_1arzrz_k$(value >> 16 & 255);
    writer.writeByte_1arzrz_k$(value >> 24 & 255);
  }
  function writeInt32BE($this, writer, value) {
    writer.writeByte_1arzrz_k$(value >> 24 & 255);
    writer.writeByte_1arzrz_k$(value >> 16 & 255);
    writer.writeByte_1arzrz_k$(value >> 8 & 255);
    writer.writeByte_1arzrz_k$(value & 255);
  }
  function writeInt16LE($this, writer, value) {
    writer.writeByte_1arzrz_k$(value & 255);
    writer.writeByte_1arzrz_k$(value >> 8 & 255);
  }
  function writeInt16BE($this, writer, value) {
    writer.writeByte_1arzrz_k$(value >> 8 & 255);
    writer.writeByte_1arzrz_k$(value & 255);
  }
  function writeAscii($this, writer, str) {
    writer.writeByteArray_uu44pq_k$(encodeToByteArray(str));
  }
  function writePaddedString($this, writer, str, length) {
    var bytes = encodeToByteArray(str);
    var toCopy = coerceAtMost(bytes.length, length);
    var inductionVariable = 0;
    if (inductionVariable < toCopy)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        writer.writeByte_1arzrz_k$(bytes[i]);
      }
       while (inductionVariable < toCopy);
    var inductionVariable_0 = toCopy;
    if (inductionVariable_0 < length)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        writer.writeByte_1arzrz_k$(32);
      }
       while (inductionVariable_0 < length);
  }
  function writePvdDateTime($this, writer) {
    writeAscii($this, writer, '2026031500000000');
    writer.writeByte_1arzrz_k$(0);
  }
  function writeEmptyPvdDateTime($this, writer) {
    var inductionVariable = 0;
    if (inductionVariable < 17)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        writer.writeByte_1arzrz_k$(48);
      }
       while (inductionVariable < 17);
  }
  function writeDirectoryDateTime($this, writer) {
    writer.writeByte_1arzrz_k$(126);
    writer.writeByte_1arzrz_k$(3);
    writer.writeByte_1arzrz_k$(15);
    writer.writeByte_1arzrz_k$(0);
    writer.writeByte_1arzrz_k$(0);
    writer.writeByte_1arzrz_k$(0);
    writer.writeByte_1arzrz_k$(0);
  }
  function Iso9660Creator(volumeId, systemId) {
    Companion_getInstance_0();
    volumeId = volumeId === VOID ? 'UNDERTALE' : volumeId;
    systemId = systemId === VOID ? 'PLAYSTATION' : systemId;
    this.volumeId_1 = volumeId;
    this.systemId_1 = systemId;
  }
  protoOf(Iso9660Creator).create_8dkvdm_k$ = function (files) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var directories = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dirsByPath = LinkedHashMap_init_$Create$();
    directories.add_utx5q5_k$(new DirInfo('', 0));
    // Inline function 'kotlin.collections.set' call
    dirsByPath.put_4fpzoq_k$('', 0);
    var _iterator__ex2g4s = files.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var file = _iterator__ex2g4s.next_20eer_k$();
      var slashIndex = lastIndexOf(file.name_1, _Char___init__impl__6a9atx(47));
      var dirPath;
      var fileName;
      if (slashIndex >= 0) {
        dirPath = substring(file.name_1, 0, slashIndex);
        fileName = substring_0(file.name_1, slashIndex + 1 | 0);
      } else {
        dirPath = '';
        fileName = file.name_1;
      }
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = dirPath;
      if (charSequenceLength(this_0) > 0) {
        tmp = !dirsByPath.containsKey_aw81wo_k$(dirPath);
      } else {
        tmp = false;
      }
      if (tmp) {
        var parts = split(dirPath, ['/']);
        var currentPath = '';
        var _iterator__ex2g4s_0 = parts.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var part = _iterator__ex2g4s_0.next_20eer_k$();
          var parentPath = currentPath;
          var tmp_0;
          // Inline function 'kotlin.text.isEmpty' call
          var this_1 = currentPath;
          if (charSequenceLength(this_1) === 0) {
            tmp_0 = part;
          } else {
            tmp_0 = currentPath + '/' + part;
          }
          currentPath = tmp_0;
          if (!dirsByPath.containsKey_aw81wo_k$(currentPath)) {
            var parentIndex = ensureNotNull(dirsByPath.get_wei43m_k$(parentPath));
            var newIndex = directories.get_size_woubt6_k$();
            directories.add_utx5q5_k$(new DirInfo(part, parentIndex));
            // Inline function 'kotlin.collections.set' call
            var key = currentPath;
            dirsByPath.put_4fpzoq_k$(key, newIndex);
            directories.get_c1px32_k$(parentIndex).entries_1.add_utx5q5_k$(new Subdirectory(part, newIndex));
          }
        }
      }
      var dirIndex = ensureNotNull(dirsByPath.get_wei43m_k$(dirPath));
      directories.get_c1px32_k$(dirIndex).entries_1.add_utx5q5_k$(new File(fileName, file));
    }
    var _iterator__ex2g4s_1 = directories.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
      var dir = _iterator__ex2g4s_1.next_20eer_k$();
      dir.sizeInBytes_1 = calculateDirectorySize(this, dir);
    }
    var lPathTableSector = 18;
    var mPathTableSector = 19;
    var nextSector = 20;
    var _iterator__ex2g4s_2 = directories.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
      var dir_0 = _iterator__ex2g4s_2.next_20eer_k$();
      dir_0.sector_1 = nextSector;
      nextSector = nextSector + dir_0.get_sectorCount_ttf8kg_k$() | 0;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var allFiles = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_3 = directories.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
      var dir_1 = _iterator__ex2g4s_3.next_20eer_k$();
      var _iterator__ex2g4s_4 = dir_1.entries_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
        var entry = _iterator__ex2g4s_4.next_20eer_k$();
        if (entry instanceof File) {
          var sectorCount = coerceAtLeast(((entry.isoFile_1.data_1.length + 2048 | 0) - 1 | 0) / 2048 | 0, 1);
          entry.sector_1 = nextSector;
          entry.sectorCount_1 = sectorCount;
          nextSector = nextSector + sectorCount | 0;
          allFiles.add_utx5q5_k$(entry);
        }
      }
    }
    var totalSectors = nextSector;
    var pathTableSize = calculatePathTableSize(this, directories);
    var rootDir = directories.get_c1px32_k$(0);
    var writer = new ByteWriter(imul(totalSectors, 2048));
    writer.writeZeroPadding_9cl7s2_k$(32768);
    var pvdStart = writer.get_size_woubt6_k$();
    writer.writeByte_1arzrz_k$(1);
    writeAscii(this, writer, 'CD001');
    writer.writeByte_1arzrz_k$(1);
    writer.writeByte_1arzrz_k$(0);
    writePaddedString(this, writer, this.systemId_1, 32);
    writePaddedString(this, writer, this.volumeId_1, 32);
    writer.writeZeroPadding_9cl7s2_k$(8);
    writeBothEndian32(this, writer, totalSectors);
    writer.writeZeroPadding_9cl7s2_k$(32);
    writeBothEndian16(this, writer, 1);
    writeBothEndian16(this, writer, 1);
    writeBothEndian16(this, writer, 2048);
    writeBothEndian32(this, writer, pathTableSize);
    writeInt32LE(this, writer, lPathTableSector);
    writeInt32LE(this, writer, 0);
    writeInt32BE(this, writer, mPathTableSector);
    writeInt32BE(this, writer, 0);
    var tmp_1 = rootDir.sector_1;
    var tmp_2 = rootDir.sizeInBytes_1;
    // Inline function 'kotlin.byteArrayOf' call
    var tmp$ret$7 = new Int8Array([0]);
    writeDirectoryRecord(this, writer, tmp_1, tmp_2, 2, tmp$ret$7);
    writePaddedString(this, writer, '', 128);
    writePaddedString(this, writer, '', 128);
    writePaddedString(this, writer, '', 128);
    writePaddedString(this, writer, 'BUTTERSCOTCH PREPROCESSOR', 128);
    writePaddedString(this, writer, '', 37);
    writePaddedString(this, writer, '', 37);
    writePaddedString(this, writer, '', 37);
    writePvdDateTime(this, writer);
    writePvdDateTime(this, writer);
    writeEmptyPvdDateTime(this, writer);
    writePvdDateTime(this, writer);
    writer.writeByte_1arzrz_k$(1);
    writer.writeByte_1arzrz_k$(0);
    writer.writeZeroPadding_9cl7s2_k$(2048 - (writer.get_size_woubt6_k$() - pvdStart | 0) | 0);
    var termStart = writer.get_size_woubt6_k$();
    writer.writeByte_1arzrz_k$(255);
    writeAscii(this, writer, 'CD001');
    writer.writeByte_1arzrz_k$(1);
    writer.writeZeroPadding_9cl7s2_k$(2048 - (writer.get_size_woubt6_k$() - termStart | 0) | 0);
    var lptStart = writer.get_size_woubt6_k$();
    writePathTable(this, writer, directories, true);
    writer.writeZeroPadding_9cl7s2_k$(2048 - (writer.get_size_woubt6_k$() - lptStart | 0) | 0);
    var mptStart = writer.get_size_woubt6_k$();
    writePathTable(this, writer, directories, false);
    writer.writeZeroPadding_9cl7s2_k$(2048 - (writer.get_size_woubt6_k$() - mptStart | 0) | 0);
    var _iterator__ex2g4s_5 = directories.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_5.hasNext_bitz1p_k$()) {
      var dir_2 = _iterator__ex2g4s_5.next_20eer_k$();
      var dirStart = writer.get_size_woubt6_k$();
      var parentDir = directories.get_c1px32_k$(dir_2.parentIndex_1);
      var tmp_3 = dir_2.sector_1;
      var tmp_4 = dir_2.sizeInBytes_1;
      // Inline function 'kotlin.byteArrayOf' call
      var tmp$ret$8 = new Int8Array([0]);
      writeDirectoryRecord(this, writer, tmp_3, tmp_4, 2, tmp$ret$8);
      var tmp_5 = parentDir.sector_1;
      var tmp_6 = parentDir.sizeInBytes_1;
      // Inline function 'kotlin.byteArrayOf' call
      var tmp$ret$9 = new Int8Array([1]);
      writeDirectoryRecord(this, writer, tmp_5, tmp_6, 2, tmp$ret$9);
      var _iterator__ex2g4s_6 = dir_2.entries_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_6.hasNext_bitz1p_k$()) {
        var entry_0 = _iterator__ex2g4s_6.next_20eer_k$();
        var identifier;
        var entrySector;
        var dataLength;
        var flags;
        if (entry_0 instanceof Subdirectory) {
          var childDir = directories.get_c1px32_k$(entry_0.dirIndex_1);
          identifier = encodeToByteArray(entry_0.name_1);
          entrySector = childDir.sector_1;
          dataLength = childDir.sizeInBytes_1;
          flags = 2;
        } else {
          if (entry_0 instanceof File) {
            identifier = encodeToByteArray(entry_0.name_1 + ';1');
            entrySector = entry_0.sector_1;
            dataLength = entry_0.isoFile_1.data_1.length;
            flags = 0;
          } else {
            noWhenBranchMatchedException();
          }
        }
        var baseLength = 33 + identifier.length | 0;
        var paddingByte = !((baseLength % 2 | 0) === 0) ? 1 : 0;
        var recordLength = baseLength + paddingByte | 0;
        var sectorOffset = (writer.get_size_woubt6_k$() - dirStart | 0) % 2048 | 0;
        if ((sectorOffset + recordLength | 0) > 2048) {
          writer.writeZeroPadding_9cl7s2_k$(2048 - sectorOffset | 0);
        }
        writeDirectoryRecord(this, writer, entrySector, dataLength, flags, identifier);
      }
      var written = writer.get_size_woubt6_k$() - dirStart | 0;
      var totalDirSize = imul(dir_2.get_sectorCount_ttf8kg_k$(), 2048);
      if (totalDirSize > written) {
        writer.writeZeroPadding_9cl7s2_k$(totalDirSize - written | 0);
      }
    }
    var _iterator__ex2g4s_7 = allFiles.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_7.hasNext_bitz1p_k$()) {
      var entry_1 = _iterator__ex2g4s_7.next_20eer_k$();
      writer.writeByteArray_uu44pq_k$(entry_1.isoFile_1.data_1);
      var targetSize = imul(entry_1.sectorCount_1, 2048);
      var padding = targetSize - entry_1.isoFile_1.data_1.length | 0;
      if (padding > 0) {
        writer.writeZeroPadding_9cl7s2_k$(padding);
      }
    }
    return writer.getAsByteArray_tshzr_k$();
  };
  function sam$kotlin_Comparator$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_2).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0_2).equals = function (other) {
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
  protoOf(sam$kotlin_Comparator$0_2).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function MedianCut$Box$split$lambda(p) {
    return p >> 16 & 255;
  }
  function MedianCut$Box$split$lambda_0(p) {
    return p >> 8 & 255;
  }
  function MedianCut$Box$split$lambda_1(p) {
    return p & 255;
  }
  function MedianCut$Box$split$lambda_2(p) {
    return (p >>> 24 | 0) & 255;
  }
  function MedianCut$Box$split$lambda_3($selector) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      return compareValues($selector(a), $selector(b));
    };
  }
  function Box(pixels) {
    this.pixels_1 = pixels;
    this.rMin_1 = 255;
    this.rMax_1 = 0;
    this.gMin_1 = 255;
    this.gMax_1 = 0;
    this.bMin_1 = 255;
    this.bMax_1 = 0;
    this.aMin_1 = 255;
    this.aMax_1 = 0;
    this.unsplittable_1 = false;
    var indexedObject = this.pixels_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var p = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var a = (p >>> 24 | 0) & 255;
      var r = p >> 16 & 255;
      var g = p >> 8 & 255;
      var b = p & 255;
      if (this.rMin_1 > r)
        this.rMin_1 = r;
      if (r > this.rMax_1)
        this.rMax_1 = r;
      if (this.gMin_1 > g)
        this.gMin_1 = g;
      if (g > this.gMax_1)
        this.gMax_1 = g;
      if (this.bMin_1 > b)
        this.bMin_1 = b;
      if (b > this.bMax_1)
        this.bMax_1 = b;
      if (this.aMin_1 > a)
        this.aMin_1 = a;
      if (a > this.aMax_1)
        this.aMax_1 = a;
    }
  }
  protoOf(Box).get_pixels_i2my0m_k$ = function () {
    return this.pixels_1;
  };
  protoOf(Box).set_rMin_511l7v_k$ = function (_set____db54di) {
    this.rMin_1 = _set____db54di;
  };
  protoOf(Box).get_rMin_wot3nt_k$ = function () {
    return this.rMin_1;
  };
  protoOf(Box).set_rMax_49461z_k$ = function (_set____db54di) {
    this.rMax_1 = _set____db54di;
  };
  protoOf(Box).get_rMax_wot3h7_k$ = function () {
    return this.rMax_1;
  };
  protoOf(Box).set_gMin_an5me8_k$ = function (_set____db54di) {
    this.gMin_1 = _set____db54di;
  };
  protoOf(Box).get_gMin_wom2t0_k$ = function () {
    return this.gMin_1;
  };
  protoOf(Box).set_gMax_jxbdo2_k$ = function (_set____db54di) {
    this.gMax_1 = _set____db54di;
  };
  protoOf(Box).get_gMax_wom2me_k$ = function () {
    return this.gMax_1;
  };
  protoOf(Box).set_bMin_bb59b9_k$ = function (_set____db54di) {
    this.bMin_1 = _set____db54di;
  };
  protoOf(Box).get_bMin_woivvd_k$ = function () {
    return this.bMin_1;
  };
  protoOf(Box).set_bMax_klb0l3_k$ = function (_set____db54di) {
    this.bMax_1 = _set____db54di;
  };
  protoOf(Box).get_bMax_woivor_k$ = function () {
    return this.bMax_1;
  };
  protoOf(Box).set_aMin_pnd73a_k$ = function (_set____db54di) {
    this.aMin_1 = _set____db54di;
  };
  protoOf(Box).get_aMin_woi8vu_k$ = function () {
    return this.aMin_1;
  };
  protoOf(Box).set_aMax_yxiyd4_k$ = function (_set____db54di) {
    this.aMax_1 = _set____db54di;
  };
  protoOf(Box).get_aMax_woi8p8_k$ = function () {
    return this.aMax_1;
  };
  protoOf(Box).set_unsplittable_786pkl_k$ = function (_set____db54di) {
    this.unsplittable_1 = _set____db54di;
  };
  protoOf(Box).get_unsplittable_yblzme_k$ = function () {
    return this.unsplittable_1;
  };
  protoOf(Box).get_rRange_inof04_k$ = function () {
    return this.rMax_1 - this.rMin_1 | 0;
  };
  protoOf(Box).get_gRange_dg6knz_k$ = function () {
    return this.gMax_1 - this.gMin_1 | 0;
  };
  protoOf(Box).get_bRange_b2ygp0_k$ = function () {
    return this.bMax_1 - this.bMin_1 | 0;
  };
  protoOf(Box).get_aRange_alwuat_k$ = function () {
    return this.aMax_1 - this.aMin_1 | 0;
  };
  protoOf(Box).get_longestRange_22nhuk_k$ = function () {
    var tmp;
    if (this.unsplittable_1) {
      tmp = 0;
    } else {
      var tmp0 = this.get_rRange_inof04_k$();
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = this.get_gRange_dg6knz_k$();
      var tmp0_0 = Math.max(tmp0, b);
      var tmp0_1 = this.get_bRange_b2ygp0_k$();
      // Inline function 'kotlin.comparisons.maxOf' call
      var b_0 = this.get_aRange_alwuat_k$();
      // Inline function 'kotlin.comparisons.maxOf' call
      var b_1 = Math.max(tmp0_1, b_0);
      tmp = Math.max(tmp0_0, b_1);
    }
    return tmp;
  };
  protoOf(Box).average_afy4f7_k$ = function () {
    var rSum = new Long(0, 0);
    var gSum = new Long(0, 0);
    var bSum = new Long(0, 0);
    var aSum = new Long(0, 0);
    var indexedObject = this.pixels_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var p = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp0 = aSum;
      // Inline function 'kotlin.Long.plus' call
      var other = (p >>> 24 | 0) & 255;
      aSum = add(tmp0, fromInt(other));
      var tmp0_0 = rSum;
      // Inline function 'kotlin.Long.plus' call
      var other_0 = p >> 16 & 255;
      rSum = add(tmp0_0, fromInt(other_0));
      var tmp0_1 = gSum;
      // Inline function 'kotlin.Long.plus' call
      var other_1 = p >> 8 & 255;
      gSum = add(tmp0_1, fromInt(other_1));
      var tmp0_2 = bSum;
      // Inline function 'kotlin.Long.plus' call
      var other_2 = p & 255;
      bSum = add(tmp0_2, fromInt(other_2));
    }
    var n = this.pixels_1.length;
    // Inline function 'kotlin.Long.div' call
    var this_0 = aSum;
    var tmp$ret$4 = divide(this_0, fromInt(n));
    var a = convertToInt(tmp$ret$4);
    // Inline function 'kotlin.Long.div' call
    var this_1 = rSum;
    var tmp$ret$5 = divide(this_1, fromInt(n));
    var r = convertToInt(tmp$ret$5);
    // Inline function 'kotlin.Long.div' call
    var this_2 = gSum;
    var tmp$ret$6 = divide(this_2, fromInt(n));
    var g = convertToInt(tmp$ret$6);
    // Inline function 'kotlin.Long.div' call
    var this_3 = bSum;
    var tmp$ret$7 = divide(this_3, fromInt(n));
    var b = convertToInt(tmp$ret$7);
    return a << 24 | r << 16 | g << 8 | b;
  };
  protoOf(Box).split_1ta5ga_k$ = function () {
    var tmp;
    if (this.get_rRange_inof04_k$() >= this.get_gRange_dg6knz_k$() && this.get_rRange_inof04_k$() >= this.get_bRange_b2ygp0_k$() && this.get_rRange_inof04_k$() >= this.get_aRange_alwuat_k$()) {
      tmp = MedianCut$Box$split$lambda;
    } else if (this.get_gRange_dg6knz_k$() >= this.get_bRange_b2ygp0_k$() && this.get_gRange_dg6knz_k$() >= this.get_aRange_alwuat_k$()) {
      tmp = MedianCut$Box$split$lambda_0;
    } else if (this.get_bRange_b2ygp0_k$() >= this.get_aRange_alwuat_k$()) {
      tmp = MedianCut$Box$split$lambda_1;
    } else {
      tmp = MedianCut$Box$split$lambda_2;
    }
    var keyOf = tmp;
    // Inline function 'kotlin.also' call
    var this_0 = toTypedArray(this.pixels_1);
    // Inline function 'kotlin.collections.sortBy' call
    if (this_0.length > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = MedianCut$Box$split$lambda_3(keyOf);
      var tmp$ret$0 = new sam$kotlin_Comparator$0_2(tmp_0);
      sortWith(this_0, tmp$ret$0);
    }
    var sorted = toIntArray_0(this_0);
    var targetIdx = sorted.length / 2 | 0;
    var targetKey = keyOf(sorted[targetIdx]);
    var fwd = targetIdx;
    while (sorted.length > fwd && keyOf(sorted[fwd]) === targetKey) {
      fwd = fwd + 1 | 0;
    }
    var bwd = targetIdx;
    while (bwd > 0 && keyOf(sorted[bwd - 1 | 0]) === targetKey) {
      bwd = bwd - 1 | 0;
    }
    var tmp_1;
    if (bwd > 0 && sorted.length > fwd) {
      tmp_1 = (targetIdx - bwd | 0) <= (fwd - targetIdx | 0) ? bwd : fwd;
    } else if (bwd > 0) {
      tmp_1 = bwd;
    } else if (sorted.length > fwd) {
      tmp_1 = fwd;
    } else {
      return null;
    }
    var splitIdx = tmp_1;
    return to(new Box(copyOfRange_0(sorted, 0, splitIdx)), new Box(copyOfRange_0(sorted, splitIdx, sorted.length)));
  };
  function MedianCut() {
    MedianCut_instance = this;
  }
  protoOf(MedianCut).quantize_llvirm_k$ = function (pixels, maxColors) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pixels.length === 0) {
      tmp = true;
    } else {
      tmp = maxColors <= 0;
    }
    if (tmp)
      return new Int32Array(0);
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = pixels.slice();
    var initial = new Box(tmp$ret$2);
    var boxes = mutableListOf([initial]);
    $l$loop_1: while (maxColors > boxes.get_size_woubt6_k$()) {
      var target = null;
      var bestScore = new Long(0, 0);
      var _iterator__ex2g4s = boxes.iterator_jk1svi_k$();
      $l$loop: while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var b = _iterator__ex2g4s.next_20eer_k$();
        if (2 > b.pixels_1.length || b.get_longestRange_22nhuk_k$() === 0)
          continue $l$loop;
        var tmp0 = fromInt(b.pixels_1.length);
        // Inline function 'kotlin.Long.times' call
        var other = b.get_longestRange_22nhuk_k$();
        var score = multiply(tmp0, fromInt(other));
        if (compare(score, bestScore) > 0) {
          bestScore = score;
          target = b;
        }
      }
      if (target == null)
        break $l$loop_1;
      var tmp0_elvis_lhs = target.split_1ta5ga_k$();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.run' call
        target.unsplittable_1 = true;
        continue $l$loop_1;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var split = tmp_0;
      boxes.remove_cedx0m_k$(target);
      boxes.add_utx5q5_k$(split.get_first_irdx8n_k$());
      boxes.add_utx5q5_k$(split.get_second_jf7fjx_k$());
    }
    var tmp_1 = 0;
    var tmp_2 = boxes.get_size_woubt6_k$();
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      tmp_3[tmp_4] = boxes.get_c1px32_k$(tmp_4).average_afy4f7_k$();
      tmp_1 = tmp_1 + 1 | 0;
    }
    return tmp_3;
  };
  var MedianCut_instance;
  function MedianCut_getInstance() {
    if (MedianCut_instance == null)
      new MedianCut();
    return MedianCut_instance;
  }
  function PixelImage(width, height, pixels) {
    this.width_1 = width;
    this.height_1 = height;
    this.pixels_1 = pixels;
  }
  protoOf(PixelImage).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(PixelImage).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(PixelImage).get_pixels_i2my0m_k$ = function () {
    return this.pixels_1;
  };
  protoOf(PixelImage).getPixel_jlycs0_k$ = function (x, y) {
    return this.pixels_1[imul(y, this.width_1) + x | 0];
  };
  protoOf(PixelImage).setPixel_l96tvo_k$ = function (x, y, argb) {
    this.pixels_1[imul(y, this.width_1) + x | 0] = argb;
  };
  function CropResult(image, offsetX, offsetY) {
    this.image_1 = image;
    this.offsetX_1 = offsetX;
    this.offsetY_1 = offsetY;
  }
  protoOf(CropResult).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(CropResult).get_offsetX_ocbsn8_k$ = function () {
    return this.offsetX_1;
  };
  protoOf(CropResult).get_offsetY_ocbsn7_k$ = function () {
    return this.offsetY_1;
  };
  protoOf(CropResult).component1_7eebsc_k$ = function () {
    return this.image_1;
  };
  protoOf(CropResult).component2_7eebsb_k$ = function () {
    return this.offsetX_1;
  };
  protoOf(CropResult).component3_7eebsa_k$ = function () {
    return this.offsetY_1;
  };
  protoOf(CropResult).copy_csbia9_k$ = function (image, offsetX, offsetY) {
    return new CropResult(image, offsetX, offsetY);
  };
  protoOf(CropResult).copy$default_uivu2s_k$ = function (image, offsetX, offsetY, $super) {
    image = image === VOID ? this.image_1 : image;
    offsetX = offsetX === VOID ? this.offsetX_1 : offsetX;
    offsetY = offsetY === VOID ? this.offsetY_1 : offsetY;
    return $super === VOID ? this.copy_csbia9_k$(image, offsetX, offsetY) : $super.copy_csbia9_k$.call(this, image, offsetX, offsetY);
  };
  protoOf(CropResult).toString = function () {
    return 'CropResult(image=' + toString(this.image_1) + ', offsetX=' + this.offsetX_1 + ', offsetY=' + this.offsetY_1 + ')';
  };
  protoOf(CropResult).hashCode = function () {
    var result = hashCode(this.image_1);
    result = imul(result, 31) + this.offsetX_1 | 0;
    result = imul(result, 31) + this.offsetY_1 | 0;
    return result;
  };
  protoOf(CropResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CropResult))
      return false;
    if (!equals(this.image_1, other.image_1))
      return false;
    if (!(this.offsetX_1 === other.offsetX_1))
      return false;
    if (!(this.offsetY_1 === other.offsetY_1))
      return false;
    return true;
  };
  function cropTransparentBorders(img) {
    var minY = -1;
    var inductionVariable = 0;
    var last = img.height_1;
    if (inductionVariable < last)
      $l$loop_0: do {
        var y = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = img.width_1;
        if (inductionVariable_0 < last_0)
          $l$loop: do {
            var x = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!((img.pixels_1[imul(y, img.width_1) + x | 0] >>> 24 | 0) === 0)) {
              minY = y;
              break $l$loop;
            }
          }
           while (inductionVariable_0 < last_0);
      }
       while (0 > minY && inductionVariable < last);
    if (0 > minY) {
      return new CropResult(new PixelImage(1, 1, new Int32Array(1)), 0, 0);
    }
    var maxY = minY;
    var inductionVariable_1 = img.height_1 - 1 | 0;
    var last_1 = minY;
    if (last_1 <= inductionVariable_1)
      $l$loop_2: do {
        var y_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + -1 | 0;
        var found = false;
        var inductionVariable_2 = 0;
        var last_2 = img.width_1;
        if (inductionVariable_2 < last_2)
          $l$loop_1: do {
            var x_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            if (!((img.pixels_1[imul(y_0, img.width_1) + x_0 | 0] >>> 24 | 0) === 0)) {
              maxY = y_0;
              found = true;
              break $l$loop_1;
            }
          }
           while (inductionVariable_2 < last_2);
      }
       while (!found && !(y_0 === last_1));
    var minX = img.width_1;
    var inductionVariable_3 = minY;
    var last_3 = maxY;
    if (inductionVariable_3 <= last_3)
      do {
        var y_1 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        var inductionVariable_4 = 0;
        var last_4 = minX;
        if (inductionVariable_4 < last_4)
          $l$loop_3: do {
            var x_1 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            if (!((img.pixels_1[imul(y_1, img.width_1) + x_1 | 0] >>> 24 | 0) === 0)) {
              minX = x_1;
              break $l$loop_3;
            }
          }
           while (inductionVariable_4 < last_4);
      }
       while (!(y_1 === last_3));
    var maxX = minX;
    var inductionVariable_5 = minY;
    var last_5 = maxY;
    if (inductionVariable_5 <= last_5)
      do {
        var y_2 = inductionVariable_5;
        inductionVariable_5 = inductionVariable_5 + 1 | 0;
        var inductionVariable_6 = img.width_1 - 1 | 0;
        var last_6 = maxX + 1 | 0;
        if (last_6 <= inductionVariable_6)
          $l$loop_4: do {
            var x_2 = inductionVariable_6;
            inductionVariable_6 = inductionVariable_6 + -1 | 0;
            if (!((img.pixels_1[imul(y_2, img.width_1) + x_2 | 0] >>> 24 | 0) === 0)) {
              maxX = x_2;
              break $l$loop_4;
            }
          }
           while (!(x_2 === last_6));
      }
       while (!(y_2 === last_5));
    var cropW = (maxX - minX | 0) + 1 | 0;
    var cropH = (maxY - minY | 0) + 1 | 0;
    var croppedPixels = new Int32Array(imul(cropW, cropH));
    var inductionVariable_7 = 0;
    if (inductionVariable_7 < cropH)
      do {
        var y_3 = inductionVariable_7;
        inductionVariable_7 = inductionVariable_7 + 1 | 0;
        var inductionVariable_8 = 0;
        if (inductionVariable_8 < cropW)
          do {
            var x_3 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            croppedPixels[imul(y_3, cropW) + x_3 | 0] = img.pixels_1[imul(minY + y_3 | 0, img.width_1) + (minX + x_3 | 0) | 0];
          }
           while (inductionVariable_8 < cropW);
      }
       while (inductionVariable_7 < cropH);
    return new CropResult(new PixelImage(cropW, cropH, croppedPixels), minX, minY);
  }
  function get_IMA_STEP_TABLE() {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    return IMA_STEP_TABLE;
  }
  var IMA_STEP_TABLE;
  function get_IMA_INDEX_TABLE() {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    return IMA_INDEX_TABLE;
  }
  var IMA_INDEX_TABLE;
  function get_OMEGA_FLOWEY_PREFIXES() {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    return OMEGA_FLOWEY_PREFIXES;
  }
  var OMEGA_FLOWEY_PREFIXES;
  function AudioData(format, sampleRate, channels, bitsPerSample, data, sampleCount) {
    this.format_1 = format;
    this.sampleRate_1 = sampleRate;
    this.channels_1 = channels;
    this.bitsPerSample_1 = bitsPerSample;
    this.data_1 = data;
    this.sampleCount_1 = sampleCount;
  }
  protoOf(AudioData).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(AudioData).get_sampleRate_ht28r1_k$ = function () {
    return this.sampleRate_1;
  };
  protoOf(AudioData).get_channels_83zl9j_k$ = function () {
    return this.channels_1;
  };
  protoOf(AudioData).get_bitsPerSample_6zk13s_k$ = function () {
    return this.bitsPerSample_1;
  };
  protoOf(AudioData).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(AudioData).get_sampleCount_fzyyho_k$ = function () {
    return this.sampleCount_1;
  };
  protoOf(AudioData).component1_7eebsc_k$ = function () {
    return this.format_1;
  };
  protoOf(AudioData).component2_7eebsb_k$ = function () {
    return this.sampleRate_1;
  };
  protoOf(AudioData).component3_7eebsa_k$ = function () {
    return this.channels_1;
  };
  protoOf(AudioData).component4_7eebs9_k$ = function () {
    return this.bitsPerSample_1;
  };
  protoOf(AudioData).component5_7eebs8_k$ = function () {
    return this.data_1;
  };
  protoOf(AudioData).component6_7eebs7_k$ = function () {
    return this.sampleCount_1;
  };
  protoOf(AudioData).copy_wpbnod_k$ = function (format, sampleRate, channels, bitsPerSample, data, sampleCount) {
    return new AudioData(format, sampleRate, channels, bitsPerSample, data, sampleCount);
  };
  protoOf(AudioData).copy$default_kdzzo8_k$ = function (format, sampleRate, channels, bitsPerSample, data, sampleCount, $super) {
    format = format === VOID ? this.format_1 : format;
    sampleRate = sampleRate === VOID ? this.sampleRate_1 : sampleRate;
    channels = channels === VOID ? this.channels_1 : channels;
    bitsPerSample = bitsPerSample === VOID ? this.bitsPerSample_1 : bitsPerSample;
    data = data === VOID ? this.data_1 : data;
    sampleCount = sampleCount === VOID ? this.sampleCount_1 : sampleCount;
    return $super === VOID ? this.copy_wpbnod_k$(format, sampleRate, channels, bitsPerSample, data, sampleCount) : $super.copy_wpbnod_k$.call(this, format, sampleRate, channels, bitsPerSample, data, sampleCount);
  };
  protoOf(AudioData).toString = function () {
    return 'AudioData(format=' + this.format_1 + ', sampleRate=' + this.sampleRate_1 + ', channels=' + this.channels_1 + ', bitsPerSample=' + this.bitsPerSample_1 + ', data=' + toString(this.data_1) + ', sampleCount=' + this.sampleCount_1 + ')';
  };
  protoOf(AudioData).hashCode = function () {
    var result = this.format_1;
    result = imul(result, 31) + this.sampleRate_1 | 0;
    result = imul(result, 31) + this.channels_1 | 0;
    result = imul(result, 31) + this.bitsPerSample_1 | 0;
    result = imul(result, 31) + hashCode(this.data_1) | 0;
    result = imul(result, 31) + this.sampleCount_1 | 0;
    return result;
  };
  protoOf(AudioData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AudioData))
      return false;
    if (!(this.format_1 === other.format_1))
      return false;
    if (!(this.sampleRate_1 === other.sampleRate_1))
      return false;
    if (!(this.channels_1 === other.channels_1))
      return false;
    if (!(this.bitsPerSample_1 === other.bitsPerSample_1))
      return false;
    if (!equals(this.data_1, other.data_1))
      return false;
    if (!(this.sampleCount_1 === other.sampleCount_1))
      return false;
    return true;
  };
  function parseWav(data) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    if (4 > data.length)
      return null;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = data[0];
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(82);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    if (!(tmp_2 === toByte(tmp$ret$0))) {
      tmp_1 = true;
    } else {
      var tmp_3 = data[1];
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(73);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp_1 = !(tmp_3 === toByte(tmp$ret$1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      var tmp_4 = data[2];
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(70);
      var tmp$ret$2 = Char__toInt_impl_vasixd(this_2);
      tmp_0 = !(tmp_4 === toByte(tmp$ret$2));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      var tmp_5 = data[3];
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(70);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_3);
      tmp = !(tmp_5 === toByte(tmp$ret$3));
    }
    if (tmp)
      return null;
    if (12 > data.length)
      return null;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp_9 = data[8];
    // Inline function 'kotlin.code' call
    var this_4 = _Char___init__impl__6a9atx(87);
    var tmp$ret$4 = Char__toInt_impl_vasixd(this_4);
    if (!(tmp_9 === toByte(tmp$ret$4))) {
      tmp_8 = true;
    } else {
      var tmp_10 = data[9];
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(65);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_5);
      tmp_8 = !(tmp_10 === toByte(tmp$ret$5));
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      var tmp_11 = data[10];
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(86);
      var tmp$ret$6 = Char__toInt_impl_vasixd(this_6);
      tmp_7 = !(tmp_11 === toByte(tmp$ret$6));
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      var tmp_12 = data[11];
      // Inline function 'kotlin.code' call
      var this_7 = _Char___init__impl__6a9atx(69);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_7);
      tmp_6 = !(tmp_12 === toByte(tmp$ret$7));
    }
    if (tmp_6)
      return null;
    var pos = {_v: 12};
    var sampleRate = 0;
    var channels = 0;
    var bitsPerSample = 0;
    var pcmData = {_v: null};
    var foundFmt = false;
    while (data.length >= (pos._v + 8 | 0)) {
      var tmp_13 = 0;
      var tmp_14 = new Int8Array(4);
      while (tmp_13 < 4) {
        var tmp_15 = tmp_13;
        tmp_14[tmp_15] = data[pos._v + tmp_15 | 0];
        tmp_13 = tmp_13 + 1 | 0;
      }
      var chunkId = decodeToString(tmp_14);
      var chunkSize = readIntLE(data, pos._v + 4 | 0);
      pos._v = pos._v + 8 | 0;
      if (chunkId === 'fmt ') {
        if ((pos._v + 16 | 0) > data.length)
          return null;
        var audioFormat = readShortLE(data, pos._v);
        if (!(audioFormat === 1))
          return null;
        channels = readShortLE(data, pos._v + 2 | 0);
        sampleRate = readIntLE(data, pos._v + 4 | 0);
        bitsPerSample = readShortLE(data, pos._v + 14 | 0);
        foundFmt = true;
      } else if (chunkId === 'data') {
        var tmp0 = pos._v + chunkSize | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = data.length;
        var dataEnd = Math.min(tmp0, b);
        pcmData._v = copyOfRange(data, pos._v, dataEnd);
      }
      pos._v = pos._v + chunkSize | 0;
      if (!((pos._v % 2 | 0) === 0)) {
        pos._v = pos._v + 1 | 0;
      }
    }
    if (!foundFmt || pcmData._v == null)
      return null;
    var tmp_16;
    switch (bitsPerSample) {
      case 16:
        var tmp_17 = 0;
        var tmp_18 = pcmData._v.length / 2 | 0;
        var tmp_19 = new Int16Array(tmp_18);
        while (tmp_17 < tmp_18) {
          var tmp_20 = tmp_17;
          tmp_19[tmp_20] = toShort(pcmData._v[imul(tmp_20, 2)] & 255 | (pcmData._v[imul(tmp_20, 2) + 1 | 0] & 255) << 8);
          tmp_17 = tmp_17 + 1 | 0;
        }

        tmp_16 = tmp_19;
        break;
      case 8:
        var tmp_21 = 0;
        var tmp_22 = pcmData._v.length;
        var tmp_23 = new Int16Array(tmp_22);
        while (tmp_21 < tmp_22) {
          var tmp_24 = tmp_21;
          // Inline function 'kotlin.let' call
          var it = (pcmData._v[tmp_24] & 255) - 128 | 0;
          tmp_23[tmp_24] = toShort(imul(it, 257));
          tmp_21 = tmp_21 + 1 | 0;
        }

        tmp_16 = tmp_23;
        break;
      default:
        return null;
    }
    var pcmSamples = tmp_16;
    var _destruct__k2r9zo = downsampleTo22050(pcmSamples, sampleRate, channels);
    var downsampledSamples = _destruct__k2r9zo.component1_7eebsc_k$();
    var finalRate = _destruct__k2r9zo.component2_7eebsb_k$();
    var finalSamples = downmixToMono(downsampledSamples, channels);
    var adpcmData = imaAdpcmEncode(finalSamples, 1);
    return new AudioData(1, finalRate, 1, 4, adpcmData, finalSamples.length);
  }
  function parseOgg(data) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    var vorbis = Companion_getInstance_1().openMemory_i9ugfp_k$(data).component1_7eebsc_k$();
    if (vorbis == null)
      return null;
    var info = vorbis.getInfo_18x1p8_k$();
    var totalSamples = vorbis.streamLengthInSamples_cm65ha_k$();
    if (totalSamples === 0) {
      vorbis.close_yn9xrc_k$();
      return null;
    }
    var floatBuf = new Float32Array(imul(totalSamples, info.get_channels_83zl9j_k$()));
    var decoded = vorbis.getSamplesFloatInterleaved_r705a0_k$(info.get_channels_83zl9j_k$(), floatBuf, floatBuf.length);
    vorbis.close_yn9xrc_k$();
    if (decoded === 0)
      return null;
    var totalFloats = imul(decoded, info.get_channels_83zl9j_k$());
    var pcmSamples = new Int16Array(totalFloats);
    var inductionVariable = 0;
    if (inductionVariable < totalFloats)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var clamped = coerceIn(floatBuf[i], -1.0, 1.0);
        pcmSamples[i] = toShort(numberToInt(clamped * 32767.0));
      }
       while (inductionVariable < totalFloats);
    var _destruct__k2r9zo = downsampleTo22050(pcmSamples, info.get_sampleRate_ht28r1_k$(), info.get_channels_83zl9j_k$());
    var downsampledSamples = _destruct__k2r9zo.component1_7eebsc_k$();
    var finalRate = _destruct__k2r9zo.component2_7eebsb_k$();
    var finalSamples = downmixToMono(downsampledSamples, info.get_channels_83zl9j_k$());
    var adpcmData = imaAdpcmEncode(finalSamples, 1);
    return new AudioData(1, finalRate, 1, 4, adpcmData, finalSamples.length);
  }
  function ProcessingResult(gameName, clut4Bin, clut8Bin, texturesBin, atlasBin, soundBnkBin, soundsBin, atlases) {
    atlases = atlases === VOID ? emptyList() : atlases;
    this.gameName_1 = gameName;
    this.clut4Bin_1 = clut4Bin;
    this.clut8Bin_1 = clut8Bin;
    this.texturesBin_1 = texturesBin;
    this.atlasBin_1 = atlasBin;
    this.soundBnkBin_1 = soundBnkBin;
    this.soundsBin_1 = soundsBin;
    this.atlases_1 = atlases;
  }
  protoOf(ProcessingResult).get_gameName_9yr49y_k$ = function () {
    return this.gameName_1;
  };
  protoOf(ProcessingResult).get_clut4Bin_awd264_k$ = function () {
    return this.clut4Bin_1;
  };
  protoOf(ProcessingResult).get_clut8Bin_awai80_k$ = function () {
    return this.clut8Bin_1;
  };
  protoOf(ProcessingResult).get_texturesBin_uflyd6_k$ = function () {
    return this.texturesBin_1;
  };
  protoOf(ProcessingResult).get_atlasBin_qoa94r_k$ = function () {
    return this.atlasBin_1;
  };
  protoOf(ProcessingResult).get_soundBnkBin_xfov4i_k$ = function () {
    return this.soundBnkBin_1;
  };
  protoOf(ProcessingResult).get_soundsBin_lg2dfq_k$ = function () {
    return this.soundsBin_1;
  };
  protoOf(ProcessingResult).get_atlases_a0xchc_k$ = function () {
    return this.atlases_1;
  };
  function processDataWin(dataWinBytes, externalAudioFiles, audioGroupFiles, musFiles, force4bppPatterns, atlasSize, audioDecoder, progressCallback, $completion) {
    externalAudioFiles = externalAudioFiles === VOID ? emptyMap() : externalAudioFiles;
    audioGroupFiles = audioGroupFiles === VOID ? emptyMap() : audioGroupFiles;
    musFiles = musFiles === VOID ? emptyMap() : musFiles;
    force4bppPatterns = force4bppPatterns === VOID ? emptyList() : force4bppPatterns;
    atlasSize = atlasSize === VOID ? 512 : atlasSize;
    progressCallback = progressCallback === VOID ? null : progressCallback;
    var tmp = new $processDataWinCOROUTINE$(dataWinBytes, externalAudioFiles, audioGroupFiles, musFiles, force4bppPatterns, atlasSize, audioDecoder, progressCallback, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function readIntLE(data, offset) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    return data[offset] & 255 | (data[offset + 1 | 0] & 255) << 8 | (data[offset + 2 | 0] & 255) << 16 | (data[offset + 3 | 0] & 255) << 24;
  }
  function readShortLE(data, offset) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    return data[offset] & 255 | (data[offset + 1 | 0] & 255) << 8;
  }
  function downsampleTo22050(samples, sampleRate, channels) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    var targetRate = 22050;
    if (targetRate >= sampleRate)
      return new Pair(samples, sampleRate);
    var frameCount = samples.length / channels | 0;
    var ratio = sampleRate / targetRate;
    var newFrameCount = numberToInt(frameCount / ratio);
    var output = new Int16Array(imul(newFrameCount, channels));
    var inductionVariable = 0;
    if (inductionVariable < newFrameCount)
      do {
        var f = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var srcPos = f * ratio;
        var srcIdx = numberToInt(srcPos);
        var frac = srcPos - srcIdx;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < channels)
          do {
            var ch = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var s0 = samples[imul(srcIdx, channels) + ch | 0];
            var s1 = frameCount > (srcIdx + 1 | 0) ? samples[imul(srcIdx + 1 | 0, channels) + ch | 0] : s0;
            output[imul(f, channels) + ch | 0] = toShort(coerceIn_0(numberToInt(s0 + (s1 - s0 | 0) * frac), -32768, 32767));
          }
           while (inductionVariable_0 < channels);
      }
       while (inductionVariable < newFrameCount);
    return new Pair(output, targetRate);
  }
  function downmixToMono(samples, channels) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    if (1 >= channels)
      return samples;
    var frameCount = samples.length / channels | 0;
    var output = new Int16Array(frameCount);
    var inductionVariable = 0;
    if (inductionVariable < frameCount)
      do {
        var f = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var sum = 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < channels)
          do {
            var ch = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            sum = sum + samples[imul(f, channels) + ch | 0] | 0;
          }
           while (inductionVariable_0 < channels);
        output[f] = toShort(coerceIn_0(sum / channels | 0, -32768, 32767));
      }
       while (inductionVariable < frameCount);
    return output;
  }
  function imaAdpcmEncode(pcmSamples, channels) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    var totalSamples = pcmSamples.length;
    var adpcmSize = (totalSamples + 1 | 0) / 2 | 0;
    var output = new Int8Array(adpcmSize);
    var predictor = new Int32Array(channels);
    var stepIndex = new Int32Array(channels);
    var outPos = 0;
    var nibbleHigh = false;
    var inductionVariable = 0;
    if (inductionVariable < totalSamples)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = i % channels | 0;
        var sample = pcmSamples[i];
        var step = get_IMA_STEP_TABLE()[stepIndex[ch]];
        var diff = sample - predictor[ch] | 0;
        var nibble = 0;
        if (0 > diff) {
          nibble = 8;
          diff = -diff | 0;
        }
        if (diff >= step) {
          nibble = nibble | 4;
          diff = diff - step | 0;
        }
        if (diff >= (step / 2 | 0)) {
          nibble = nibble | 2;
          diff = diff - (step / 2 | 0) | 0;
        }
        if (diff >= (step / 4 | 0)) {
          nibble = nibble | 1;
        }
        var decodedDiff = step >> 3;
        if (!((nibble & 4) === 0))
          decodedDiff = decodedDiff + step | 0;
        if (!((nibble & 2) === 0))
          decodedDiff = decodedDiff + (step >> 1) | 0;
        if (!((nibble & 1) === 0))
          decodedDiff = decodedDiff + (step >> 2) | 0;
        if (!((nibble & 8) === 0))
          decodedDiff = -decodedDiff | 0;
        predictor[ch] = coerceIn_0(predictor[ch] + decodedDiff | 0, -32768, 32767);
        stepIndex[ch] = coerceIn_0(stepIndex[ch] + get_IMA_INDEX_TABLE()[nibble] | 0, 0, 88);
        if (!nibbleHigh) {
          output[outPos] = toByte(nibble & 15);
          nibbleHigh = true;
        } else {
          output[outPos] = toByte(output[outPos] | (nibble & 15) << 4);
          outPos = outPos + 1 | 0;
          nibbleHigh = false;
        }
      }
       while (inductionVariable < totalSamples);
    return output;
  }
  function getAtlasGroupKey(spriteName) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    var _iterator__ex2g4s = get_OMEGA_FLOWEY_PREFIXES().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var prefix = _iterator__ex2g4s.next_20eer_k$();
      if (startsWith(spriteName, prefix))
        return 'spr/_omega_flowey';
    }
    return 'spr/' + spriteName;
  }
  function extractFromTPAG(tpag, texturePages) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = tpag.get_boundingWidth_seehlz_k$();
    var w = Math.max(a, 1);
    // Inline function 'kotlin.comparisons.maxOf' call
    var a_0 = tpag.get_boundingHeight_z6x34c_k$();
    var h = Math.max(a_0, 1);
    var pixels = new Int32Array(imul(w, h));
    if (tpag.get_texturePageId_1xro4c_k$() < 0)
      return new PixelImage(w, h, pixels);
    var tmp0_elvis_lhs = getOrNull(texturePages, tpag.get_texturePageId_1xro4c_k$());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new PixelImage(w, h, pixels);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var texPage = tmp;
    if (tpag.get_targetWidth_kphvw4_k$() === 0 || tpag.get_targetHeight_9u6jrz_k$() === 0)
      return new PixelImage(w, h, pixels);
    var inductionVariable = 0;
    var last = tpag.get_targetHeight_9u6jrz_k$();
    if (inductionVariable < last)
      $l$loop: do {
        var dy = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var srcY = tpag.get_sourceY_w67w3v_k$() + dy | 0;
        var dstY = tpag.get_targetY_o6ao75_k$() + dy | 0;
        if (srcY >= texPage.get_height_e7t92o_k$() || dstY >= h)
          continue $l$loop;
        var inductionVariable_0 = 0;
        var last_0 = tpag.get_targetWidth_kphvw4_k$();
        if (inductionVariable_0 < last_0)
          $l$loop_0: do {
            var dx = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var srcX = tpag.get_sourceX_w67w3w_k$() + dx | 0;
            var dstX = tpag.get_targetX_o6ao76_k$() + dx | 0;
            if (srcX >= texPage.get_width_j0q4yl_k$() || dstX >= w)
              continue $l$loop_0;
            pixels[imul(dstY, w) + dstX | 0] = texPage.get_pixels_i2my0m_k$()[imul(srcY, texPage.get_width_j0q4yl_k$()) + srcX | 0];
          }
           while (inductionVariable_0 < last_0);
      }
       while (inductionVariable < last);
    return new PixelImage(w, h, pixels);
  }
  function TileKey(useSpriteDefinition, bgDef, srcX, srcY, w, h) {
    this.useSpriteDefinition_1 = useSpriteDefinition;
    this.bgDef_1 = bgDef;
    this.srcX_1 = srcX;
    this.srcY_1 = srcY;
    this.w_1 = w;
    this.h_1 = h;
  }
  protoOf(TileKey).get_useSpriteDefinition_1rov92_k$ = function () {
    return this.useSpriteDefinition_1;
  };
  protoOf(TileKey).get_bgDef_ip4ifr_k$ = function () {
    return this.bgDef_1;
  };
  protoOf(TileKey).get_srcX_wouhx9_k$ = function () {
    return this.srcX_1;
  };
  protoOf(TileKey).get_srcY_wouhxa_k$ = function () {
    return this.srcY_1;
  };
  protoOf(TileKey).get_w_1mhr66_k$ = function () {
    return this.w_1;
  };
  protoOf(TileKey).get_h_1mhr5r_k$ = function () {
    return this.h_1;
  };
  protoOf(TileKey).component1_7eebsc_k$ = function () {
    return this.useSpriteDefinition_1;
  };
  protoOf(TileKey).component2_7eebsb_k$ = function () {
    return this.bgDef_1;
  };
  protoOf(TileKey).component3_7eebsa_k$ = function () {
    return this.srcX_1;
  };
  protoOf(TileKey).component4_7eebs9_k$ = function () {
    return this.srcY_1;
  };
  protoOf(TileKey).component5_7eebs8_k$ = function () {
    return this.w_1;
  };
  protoOf(TileKey).component6_7eebs7_k$ = function () {
    return this.h_1;
  };
  protoOf(TileKey).copy_b3xgfs_k$ = function (useSpriteDefinition, bgDef, srcX, srcY, w, h) {
    return new TileKey(useSpriteDefinition, bgDef, srcX, srcY, w, h);
  };
  protoOf(TileKey).copy$default_o7xff4_k$ = function (useSpriteDefinition, bgDef, srcX, srcY, w, h, $super) {
    useSpriteDefinition = useSpriteDefinition === VOID ? this.useSpriteDefinition_1 : useSpriteDefinition;
    bgDef = bgDef === VOID ? this.bgDef_1 : bgDef;
    srcX = srcX === VOID ? this.srcX_1 : srcX;
    srcY = srcY === VOID ? this.srcY_1 : srcY;
    w = w === VOID ? this.w_1 : w;
    h = h === VOID ? this.h_1 : h;
    return $super === VOID ? this.copy_b3xgfs_k$(useSpriteDefinition, bgDef, srcX, srcY, w, h) : $super.copy_b3xgfs_k$.call(this, useSpriteDefinition, bgDef, srcX, srcY, w, h);
  };
  protoOf(TileKey).toString = function () {
    return 'TileKey(useSpriteDefinition=' + this.useSpriteDefinition_1 + ', bgDef=' + this.bgDef_1 + ', srcX=' + this.srcX_1 + ', srcY=' + this.srcY_1 + ', w=' + this.w_1 + ', h=' + this.h_1 + ')';
  };
  protoOf(TileKey).hashCode = function () {
    var result = getBooleanHashCode(this.useSpriteDefinition_1);
    result = imul(result, 31) + this.bgDef_1 | 0;
    result = imul(result, 31) + this.srcX_1 | 0;
    result = imul(result, 31) + this.srcY_1 | 0;
    result = imul(result, 31) + this.w_1 | 0;
    result = imul(result, 31) + this.h_1 | 0;
    return result;
  };
  protoOf(TileKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TileKey))
      return false;
    if (!(this.useSpriteDefinition_1 === other.useSpriteDefinition_1))
      return false;
    if (!(this.bgDef_1 === other.bgDef_1))
      return false;
    if (!(this.srcX_1 === other.srcX_1))
      return false;
    if (!(this.srcY_1 === other.srcY_1))
      return false;
    if (!(this.w_1 === other.w_1))
      return false;
    if (!(this.h_1 === other.h_1))
      return false;
    return true;
  };
  function extractSubImage(src, srcX, srcY, w, h) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    var pixels = new Int32Array(imul(w, h));
    var inductionVariable = 0;
    if (inductionVariable < h)
      do {
        var y = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < w)
          do {
            var x = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            pixels[imul(y, w) + x | 0] = src.get_pixels_i2my0m_k$()[imul(srcY + y | 0, src.get_width_j0q4yl_k$()) + (srcX + x | 0) | 0];
          }
           while (inductionVariable_0 < w);
      }
       while (inductionVariable < h);
    return new PixelImage(w, h, pixels);
  }
  function CropInfo(offsetX, offsetY, croppedWidth, croppedHeight) {
    this.offsetX_1 = offsetX;
    this.offsetY_1 = offsetY;
    this.croppedWidth_1 = croppedWidth;
    this.croppedHeight_1 = croppedHeight;
  }
  protoOf(CropInfo).get_offsetX_ocbsn8_k$ = function () {
    return this.offsetX_1;
  };
  protoOf(CropInfo).get_offsetY_ocbsn7_k$ = function () {
    return this.offsetY_1;
  };
  protoOf(CropInfo).get_croppedWidth_9mbsgg_k$ = function () {
    return this.croppedWidth_1;
  };
  protoOf(CropInfo).get_croppedHeight_6xwpct_k$ = function () {
    return this.croppedHeight_1;
  };
  protoOf(CropInfo).component1_7eebsc_k$ = function () {
    return this.offsetX_1;
  };
  protoOf(CropInfo).component2_7eebsb_k$ = function () {
    return this.offsetY_1;
  };
  protoOf(CropInfo).component3_7eebsa_k$ = function () {
    return this.croppedWidth_1;
  };
  protoOf(CropInfo).component4_7eebs9_k$ = function () {
    return this.croppedHeight_1;
  };
  protoOf(CropInfo).copy_my5h57_k$ = function (offsetX, offsetY, croppedWidth, croppedHeight) {
    return new CropInfo(offsetX, offsetY, croppedWidth, croppedHeight);
  };
  protoOf(CropInfo).copy$default_3uq5mw_k$ = function (offsetX, offsetY, croppedWidth, croppedHeight, $super) {
    offsetX = offsetX === VOID ? this.offsetX_1 : offsetX;
    offsetY = offsetY === VOID ? this.offsetY_1 : offsetY;
    croppedWidth = croppedWidth === VOID ? this.croppedWidth_1 : croppedWidth;
    croppedHeight = croppedHeight === VOID ? this.croppedHeight_1 : croppedHeight;
    return $super === VOID ? this.copy_my5h57_k$(offsetX, offsetY, croppedWidth, croppedHeight) : $super.copy_my5h57_k$.call(this, offsetX, offsetY, croppedWidth, croppedHeight);
  };
  protoOf(CropInfo).toString = function () {
    return 'CropInfo(offsetX=' + this.offsetX_1 + ', offsetY=' + this.offsetY_1 + ', croppedWidth=' + this.croppedWidth_1 + ', croppedHeight=' + this.croppedHeight_1 + ')';
  };
  protoOf(CropInfo).hashCode = function () {
    var result = this.offsetX_1;
    result = imul(result, 31) + this.offsetY_1 | 0;
    result = imul(result, 31) + this.croppedWidth_1 | 0;
    result = imul(result, 31) + this.croppedHeight_1 | 0;
    return result;
  };
  protoOf(CropInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CropInfo))
      return false;
    if (!(this.offsetX_1 === other.offsetX_1))
      return false;
    if (!(this.offsetY_1 === other.offsetY_1))
      return false;
    if (!(this.croppedWidth_1 === other.croppedWidth_1))
      return false;
    if (!(this.croppedHeight_1 === other.croppedHeight_1))
      return false;
    return true;
  };
  function writeClutBinary(groups, paletteSize) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    if (groups.isEmpty_y1axqb_k$())
      return new Int8Array(0);
    var writer = new ByteWriter(imul(imul(groups.get_size_woubt6_k$(), paletteSize), 4));
    var _iterator__ex2g4s = groups.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var group = _iterator__ex2g4s.next_20eer_k$();
      var palette = new Int32Array(paletteSize);
      var tmp0 = group.get_palette_by3him_k$();
      // Inline function 'kotlin.comparisons.minOf' call
      var a = group.get_palette_by3him_k$().length;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = Math.min(a, paletteSize);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, palette, 0, 0, endIndex);
      var inductionVariable = 0;
      var last = palette.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          palette[i] = convertARGBtoPS2RGBA(palette[i]);
        }
         while (inductionVariable <= last);
      var finalPalette = paletteSize === 256 ? swizzlePalette8bpp(palette) : palette;
      var inductionVariable_0 = 0;
      var last_0 = finalPalette.length;
      while (inductionVariable_0 < last_0) {
        var color = finalPalette[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        writer.writeIntLE_y9sr6p_k$(color);
      }
    }
    return writer.getAsByteArray_tshzr_k$();
  }
  function AtlasPayloadMetadata(offset, width, height, bpp, pixelDataSize, compressionType) {
    this.offset_1 = offset;
    this.width_1 = width;
    this.height_1 = height;
    this.bpp_1 = bpp;
    this.pixelDataSize_1 = pixelDataSize;
    this.compressionType_1 = compressionType;
  }
  protoOf(AtlasPayloadMetadata).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(AtlasPayloadMetadata).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(AtlasPayloadMetadata).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(AtlasPayloadMetadata).get_bpp_18j8nb_k$ = function () {
    return this.bpp_1;
  };
  protoOf(AtlasPayloadMetadata).get_pixelDataSize_pfjq2g_k$ = function () {
    return this.pixelDataSize_1;
  };
  protoOf(AtlasPayloadMetadata).get_compressionType_u3qyp5_k$ = function () {
    return this.compressionType_1;
  };
  protoOf(AtlasPayloadMetadata).component1_7eebsc_k$ = function () {
    return this.offset_1;
  };
  protoOf(AtlasPayloadMetadata).component2_7eebsb_k$ = function () {
    return this.width_1;
  };
  protoOf(AtlasPayloadMetadata).component3_7eebsa_k$ = function () {
    return this.height_1;
  };
  protoOf(AtlasPayloadMetadata).component4_7eebs9_k$ = function () {
    return this.bpp_1;
  };
  protoOf(AtlasPayloadMetadata).component5_7eebs8_k$ = function () {
    return this.pixelDataSize_1;
  };
  protoOf(AtlasPayloadMetadata).component6_7eebs7_k$ = function () {
    return this.compressionType_1;
  };
  protoOf(AtlasPayloadMetadata).copy_d2rogv_k$ = function (offset, width, height, bpp, pixelDataSize, compressionType) {
    return new AtlasPayloadMetadata(offset, width, height, bpp, pixelDataSize, compressionType);
  };
  protoOf(AtlasPayloadMetadata).copy$default_bnhdks_k$ = function (offset, width, height, bpp, pixelDataSize, compressionType, $super) {
    offset = offset === VOID ? this.offset_1 : offset;
    width = width === VOID ? this.width_1 : width;
    height = height === VOID ? this.height_1 : height;
    bpp = bpp === VOID ? this.bpp_1 : bpp;
    pixelDataSize = pixelDataSize === VOID ? this.pixelDataSize_1 : pixelDataSize;
    compressionType = compressionType === VOID ? this.compressionType_1 : compressionType;
    return $super === VOID ? this.copy_d2rogv_k$(offset, width, height, bpp, pixelDataSize, compressionType) : $super.copy_d2rogv_k$.call(this, offset, width, height, bpp, pixelDataSize, compressionType);
  };
  protoOf(AtlasPayloadMetadata).toString = function () {
    return 'AtlasPayloadMetadata(offset=' + this.offset_1.toString() + ', width=' + this.width_1 + ', height=' + this.height_1 + ', bpp=' + this.bpp_1 + ', pixelDataSize=' + this.pixelDataSize_1 + ', compressionType=' + this.compressionType_1 + ')';
  };
  protoOf(AtlasPayloadMetadata).hashCode = function () {
    var result = this.offset_1.hashCode();
    result = imul(result, 31) + this.width_1 | 0;
    result = imul(result, 31) + this.height_1 | 0;
    result = imul(result, 31) + this.bpp_1 | 0;
    result = imul(result, 31) + this.pixelDataSize_1 | 0;
    result = imul(result, 31) + this.compressionType_1 | 0;
    return result;
  };
  protoOf(AtlasPayloadMetadata).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AtlasPayloadMetadata))
      return false;
    if (!equalsLong(this.offset_1, other.offset_1))
      return false;
    if (!(this.width_1 === other.width_1))
      return false;
    if (!(this.height_1 === other.height_1))
      return false;
    if (!(this.bpp_1 === other.bpp_1))
      return false;
    if (!(this.pixelDataSize_1 === other.pixelDataSize_1))
      return false;
    if (!(this.compressionType_1 === other.compressionType_1))
      return false;
    return true;
  };
  function writeTexturePagesBytes(atlases, log) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    var atlasMetadata = HashMap_init_$Create$_0();
    var currentOffset = new Long(0, 0);
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = writeTexturePagesBytes$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0_4(tmp);
    var sortedAtlases = sortedWith(atlases, tmp$ret$0);
    var writer = new ByteWriter();
    var _iterator__ex2g4s = sortedAtlases.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var atlas = _iterator__ex2g4s.next_20eer_k$();
      var canvas = new Int8Array(imul(atlas.get_width_j0q4yl_k$(), atlas.get_height_e7t92o_k$()));
      var _iterator__ex2g4s_0 = atlas.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var entry = _iterator__ex2g4s_0.next_20eer_k$();
        var img = entry.get_image_it3i2a_k$();
        var inductionVariable = 0;
        var last = img.get_height_e7t92o_k$();
        if (inductionVariable < last)
          do {
            var y = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var inductionVariable_0 = 0;
            var last_0 = img.get_width_j0q4yl_k$();
            if (inductionVariable_0 < last_0)
              do {
                var x = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                canvas[imul(entry.get_y_1mhr68_k$() + y | 0, atlas.get_width_j0q4yl_k$()) + (entry.get_x_1mhr67_k$() + x | 0) | 0] = img.get_indices_xelk8u_k$()[imul(y, img.get_width_j0q4yl_k$()) + x | 0];
              }
               while (inductionVariable_0 < last_0);
          }
           while (inductionVariable < last);
      }
      var uncompressedPixelData;
      if (atlas.get_bpp_18j8nb_k$() === 4) {
        var packedSize = (imul(atlas.get_width_j0q4yl_k$(), atlas.get_height_e7t92o_k$()) + 1 | 0) / 2 | 0;
        uncompressedPixelData = new Int8Array(packedSize);
        var nestedLast = canvas.length - 1 | 0;
        var inductionVariable_1 = 0;
        var last_1 = getProgressionLastElement(0, nestedLast, 2);
        if (inductionVariable_1 <= last_1)
          do {
            var i = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 2 | 0;
            var lo = canvas[i] & 15;
            var hi = (i + 1 | 0) < canvas.length ? (canvas[i + 1 | 0] & 15) << 4 : 0;
            uncompressedPixelData[i / 2 | 0] = toByte(lo | hi);
          }
           while (!(i === last_1));
      } else {
        uncompressedPixelData = canvas;
      }
      var rleData = rleCompress(uncompressedPixelData);
      var useRle = uncompressedPixelData.length > rleData.length;
      var compressionType;
      var pixelData;
      if (useRle) {
        compressionType = 1;
        pixelData = rleData;
        log('  Atlas ' + atlas.get_id_kntnx8_k$() + ' (' + atlas.get_bpp_18j8nb_k$() + 'bpp): RLE compressed ' + uncompressedPixelData.length + ' -> ' + rleData.length + ' bytes (saved ' + (uncompressedPixelData.length - rleData.length | 0) + ' bytes, ' + numberToInt(100.0 * (uncompressedPixelData.length - rleData.length | 0) / uncompressedPixelData.length) + '%)');
      } else {
        compressionType = 0;
        pixelData = uncompressedPixelData;
        log('  Atlas ' + atlas.get_id_kntnx8_k$() + ' (' + atlas.get_bpp_18j8nb_k$() + 'bpp): RLE not beneficial (' + uncompressedPixelData.length + ' -> ' + rleData.length + ' bytes), keeping uncompressed');
      }
      var tmp2 = atlas.get_id_kntnx8_k$();
      // Inline function 'kotlin.collections.set' call
      var value = new AtlasPayloadMetadata(currentOffset, atlas.get_width_j0q4yl_k$(), atlas.get_height_e7t92o_k$(), atlas.get_bpp_18j8nb_k$(), pixelData.length, compressionType);
      atlasMetadata.put_4fpzoq_k$(tmp2, value);
      writer.writeByteArray_uu44pq_k$(pixelData);
      var tmp0 = currentOffset;
      // Inline function 'kotlin.Long.plus' call
      var other = pixelData.length;
      currentOffset = add(tmp0, fromInt(other));
    }
    return to(writer.getAsByteArray_tshzr_k$(), atlasMetadata);
  }
  function writeAtlasMetadataBytes(dw, uniqueTiles, tpagIdxToImageName, atlasEntryMap, clutIndexMap, atlasMetadata, cropInfoMap) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    var tpagCount = dw.get_tpag_wov3e3_k$().get_items_it823b_k$().get_size_woubt6_k$();
    var tileCount = uniqueTiles.get_size_woubt6_k$();
    var atlasCount = atlasMetadata.get_size_woubt6_k$();
    var writer = new ByteWriter();
    writer.writeByte_1arzrz_k$(0);
    writer.writeShortLE_62so5q_k$(tpagCount);
    writer.writeShortLE_62so5q_k$(tileCount);
    writer.writeShortLE_62so5q_k$(atlasCount);
    var _iterator__ex2g4s = sorted(atlasMetadata.get_keys_wop4xp_k$()).iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var id = _iterator__ex2g4s.next_20eer_k$();
      var meta = ensureNotNull(atlasMetadata.get_wei43m_k$(id));
      writer.writeIntLE_y9sr6p_k$(convertToInt(meta.offset_1));
      writer.writeShortLE_62so5q_k$(meta.width_1);
      writer.writeShortLE_62so5q_k$(meta.height_1);
      writer.writeByte_1arzrz_k$(meta.bpp_1);
      writer.writeIntLE_y9sr6p_k$(meta.pixelDataSize_1);
      writer.writeByte_1arzrz_k$(meta.compressionType_1);
    }
    var inductionVariable = 0;
    if (inductionVariable < tpagCount)
      $l$loop: do {
        var tpagIdx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var imgName = tpagIdxToImageName.get_wei43m_k$(tpagIdx);
        if (!(imgName == null)) {
          var pair = atlasEntryMap.get_wei43m_k$(imgName);
          if (!(pair == null)) {
            var atlas = pair.component1_7eebsc_k$();
            var entry = pair.component2_7eebsb_k$();
            writer.writeShortLE_62so5q_k$(atlas.get_id_kntnx8_k$());
            writer.writeShortLE_62so5q_k$(entry.get_x_1mhr67_k$());
            writer.writeShortLE_62so5q_k$(entry.get_y_1mhr68_k$());
            writer.writeShortLE_62so5q_k$(entry.get_image_it3i2a_k$().get_width_j0q4yl_k$());
            writer.writeShortLE_62so5q_k$(entry.get_image_it3i2a_k$().get_height_e7t92o_k$());
            var crop = cropInfoMap.get_wei43m_k$(imgName);
            var tmp1_elvis_lhs = crop == null ? null : crop.offsetX_1;
            writer.writeShortLE_62so5q_k$(tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
            var tmp3_elvis_lhs = crop == null ? null : crop.offsetY_1;
            writer.writeShortLE_62so5q_k$(tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs);
            var tmp5_elvis_lhs = crop == null ? null : crop.croppedWidth_1;
            writer.writeShortLE_62so5q_k$(tmp5_elvis_lhs == null ? entry.get_image_it3i2a_k$().get_width_j0q4yl_k$() : tmp5_elvis_lhs);
            var tmp7_elvis_lhs = crop == null ? null : crop.croppedHeight_1;
            writer.writeShortLE_62so5q_k$(tmp7_elvis_lhs == null ? entry.get_image_it3i2a_k$().get_height_e7t92o_k$() : tmp7_elvis_lhs);
            var tmp8_elvis_lhs = clutIndexMap.get_wei43m_k$(imgName);
            writer.writeShortLE_62so5q_k$(tmp8_elvis_lhs == null ? 0 : tmp8_elvis_lhs);
            continue $l$loop;
          }
        }
        writer.writeShortLE_62so5q_k$(65535);
        writer.writeShortLE_62so5q_k$(0);
        writer.writeShortLE_62so5q_k$(0);
        writer.writeShortLE_62so5q_k$(0);
        writer.writeShortLE_62so5q_k$(0);
        writer.writeShortLE_62so5q_k$(0);
        writer.writeShortLE_62so5q_k$(0);
        writer.writeShortLE_62so5q_k$(0);
        writer.writeShortLE_62so5q_k$(0);
        writer.writeShortLE_62so5q_k$(0);
      }
       while (inductionVariable < tpagCount);
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = uniqueTiles.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      // Inline function 'kotlin.collections.component1' call
      var key = _iterator__ex2g4s_0.next_20eer_k$().get_key_18j28a_k$();
      var tmp;
      if (key.useSpriteDefinition_1) {
        var tmp9_elvis_lhs = dw.get_sprt_wougtk_k$().get_sprites_vqz1qz_k$().get_c1px32_k$(key.bgDef_1).get_name_woqyms_k$();
        tmp = tmp9_elvis_lhs == null ? 'spr' + key.bgDef_1 : tmp9_elvis_lhs;
      } else {
        var tmp10_elvis_lhs = dw.get_bgnd_wojf9g_k$().get_backgrounds_ttk0v8_k$().get_c1px32_k$(key.bgDef_1).get_name_woqyms_k$();
        tmp = tmp10_elvis_lhs == null ? 'bg' + key.bgDef_1 : tmp10_elvis_lhs;
      }
      var defName = tmp;
      var imgName_0 = 'tile/' + defName + '_' + key.srcX_1 + '_' + key.srcY_1 + '_' + key.w_1 + 'x' + key.h_1;
      var pair_0 = atlasEntryMap.get_wei43m_k$(imgName_0);
      var atlas_0 = pair_0 == null ? null : pair_0.get_first_irdx8n_k$();
      var entry_0 = pair_0 == null ? null : pair_0.get_second_jf7fjx_k$();
      writer.writeShortLE_62so5q_k$(key.bgDef_1);
      writer.writeShortLE_62so5q_k$(key.srcX_1);
      writer.writeShortLE_62so5q_k$(key.srcY_1);
      writer.writeShortLE_62so5q_k$(key.w_1);
      writer.writeShortLE_62so5q_k$(key.h_1);
      var tmp14_elvis_lhs = atlas_0 == null ? null : atlas_0.get_id_kntnx8_k$();
      writer.writeShortLE_62so5q_k$(tmp14_elvis_lhs == null ? 65535 : tmp14_elvis_lhs);
      var tmp16_elvis_lhs = entry_0 == null ? null : entry_0.get_x_1mhr67_k$();
      writer.writeShortLE_62so5q_k$(tmp16_elvis_lhs == null ? 0 : tmp16_elvis_lhs);
      var tmp18_elvis_lhs = entry_0 == null ? null : entry_0.get_y_1mhr68_k$();
      writer.writeShortLE_62so5q_k$(tmp18_elvis_lhs == null ? 0 : tmp18_elvis_lhs);
      var tmp20_safe_receiver = entry_0 == null ? null : entry_0.get_image_it3i2a_k$();
      var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.get_width_j0q4yl_k$();
      writer.writeShortLE_62so5q_k$(tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs);
      var tmp23_safe_receiver = entry_0 == null ? null : entry_0.get_image_it3i2a_k$();
      var tmp24_elvis_lhs = tmp23_safe_receiver == null ? null : tmp23_safe_receiver.get_height_e7t92o_k$();
      writer.writeShortLE_62so5q_k$(tmp24_elvis_lhs == null ? 0 : tmp24_elvis_lhs);
      var crop_0 = cropInfoMap.get_wei43m_k$(imgName_0);
      var tmp26_elvis_lhs = crop_0 == null ? null : crop_0.offsetX_1;
      writer.writeShortLE_62so5q_k$(tmp26_elvis_lhs == null ? 0 : tmp26_elvis_lhs);
      var tmp28_elvis_lhs = crop_0 == null ? null : crop_0.offsetY_1;
      writer.writeShortLE_62so5q_k$(tmp28_elvis_lhs == null ? 0 : tmp28_elvis_lhs);
      var tmp30_elvis_lhs = crop_0 == null ? null : crop_0.croppedWidth_1;
      var tmp_0;
      if (tmp30_elvis_lhs == null) {
        var tmp32_safe_receiver = entry_0 == null ? null : entry_0.get_image_it3i2a_k$();
        var tmp33_elvis_lhs = tmp32_safe_receiver == null ? null : tmp32_safe_receiver.get_width_j0q4yl_k$();
        tmp_0 = tmp33_elvis_lhs == null ? 0 : tmp33_elvis_lhs;
      } else {
        tmp_0 = tmp30_elvis_lhs;
      }
      writer.writeShortLE_62so5q_k$(tmp_0);
      var tmp35_elvis_lhs = crop_0 == null ? null : crop_0.croppedHeight_1;
      var tmp_1;
      if (tmp35_elvis_lhs == null) {
        var tmp37_safe_receiver = entry_0 == null ? null : entry_0.get_image_it3i2a_k$();
        var tmp38_elvis_lhs = tmp37_safe_receiver == null ? null : tmp37_safe_receiver.get_height_e7t92o_k$();
        tmp_1 = tmp38_elvis_lhs == null ? 0 : tmp38_elvis_lhs;
      } else {
        tmp_1 = tmp35_elvis_lhs;
      }
      writer.writeShortLE_62so5q_k$(tmp_1);
      var tmp39_elvis_lhs = clutIndexMap.get_wei43m_k$(imgName_0);
      writer.writeShortLE_62so5q_k$(tmp39_elvis_lhs == null ? 0 : tmp39_elvis_lhs);
    }
    return writer.getAsByteArray_tshzr_k$();
  }
  function convertARGBtoPS2RGBA(argb) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    var a = (argb >>> 24 | 0) & 255;
    var r = (argb >>> 16 | 0) & 255;
    var g = (argb >>> 8 | 0) & 255;
    var b = argb & 255;
    var ps2Alpha = (a + 1 | 0) >>> 1 | 0;
    return ps2Alpha << 24 | b << 16 | g << 8 | r;
  }
  function swizzlePalette8bpp(palette) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var swizzled = palette.slice();
    var inductionVariable = 0;
    var last = swizzled.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if ((i & 24) === 8) {
          var tmp = swizzled[i];
          swizzled[i] = swizzled[i + 8 | 0];
          swizzled[i + 8 | 0] = tmp;
        }
      }
       while (inductionVariable <= last);
    return swizzled;
  }
  function rleCompress(data) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    // Inline function 'kotlin.collections.isEmpty' call
    if (data.length === 0)
      return new Int8Array(0);
    var writer = new ByteWriter(data.length);
    var i = 0;
    while (data.length > i) {
      var current = data[i];
      var runLength = 1;
      while (data.length > (i + runLength | 0) && runLength < 255 && data[i + runLength | 0] === current) {
        runLength = runLength + 1 | 0;
      }
      writer.writeByte_1arzrz_k$(runLength);
      writer.writeByte_1arzrz_k$(current & 255);
      i = i + runLength | 0;
    }
    return writer.getAsByteArray_tshzr_k$();
  }
  function sam$kotlin_Comparator$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_3).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0_3).equals = function (other) {
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
  protoOf(sam$kotlin_Comparator$0_3).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$kotlin_Comparator$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_4).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0_4).equals = function (other) {
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
  protoOf(sam$kotlin_Comparator$0_4).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function processDataWin$lambda(it) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    return Unit_getInstance();
  }
  function processDataWin$collectTile(dw, uniqueTiles, tile) {
    var defCount = tile.get_useSpriteDefinition_1rov92_k$() ? dw.get_sprt_wougtk_k$().get_sprites_vqz1qz_k$().get_size_woubt6_k$() : dw.get_bgnd_wojf9g_k$().get_backgrounds_ttk0v8_k$().get_size_woubt6_k$();
    if (0 > tile.get_backgroundDefinition_2hdx7u_k$() || tile.get_backgroundDefinition_2hdx7u_k$() >= defCount)
      return Unit_getInstance();
    var key = new TileKey(tile.get_useSpriteDefinition_1rov92_k$(), tile.get_backgroundDefinition_2hdx7u_k$(), tile.get_sourceX_w67w3w_k$(), tile.get_sourceY_w67w3v_k$(), tile.get_width_j0q4yl_k$(), tile.get_height_e7t92o_k$());
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if (!(isInterface(uniqueTiles, KtMap) ? uniqueTiles : THROW_CCE()).containsKey_aw81wo_k$(key)) {
      // Inline function 'kotlin.collections.set' call
      uniqueTiles.put_4fpzoq_k$(key, tile);
    }
  }
  function processDataWin$TileSourceKey(useSpriteDefinition, defIndex) {
    this.useSpriteDefinition_1 = useSpriteDefinition;
    this.defIndex_1 = defIndex;
  }
  protoOf(processDataWin$TileSourceKey).get_useSpriteDefinition_1rov92_k$ = function () {
    return this.useSpriteDefinition_1;
  };
  protoOf(processDataWin$TileSourceKey).get_defIndex_lio9re_k$ = function () {
    return this.defIndex_1;
  };
  protoOf(processDataWin$TileSourceKey).component1_7eebsc_k$ = function () {
    return this.useSpriteDefinition_1;
  };
  protoOf(processDataWin$TileSourceKey).component2_7eebsb_k$ = function () {
    return this.defIndex_1;
  };
  protoOf(processDataWin$TileSourceKey).copy_xajy4o_k$ = function (useSpriteDefinition, defIndex) {
    return new processDataWin$TileSourceKey(useSpriteDefinition, defIndex);
  };
  protoOf(processDataWin$TileSourceKey).copy$default_1vxybp_k$ = function (useSpriteDefinition, defIndex, $super) {
    useSpriteDefinition = useSpriteDefinition === VOID ? this.useSpriteDefinition_1 : useSpriteDefinition;
    defIndex = defIndex === VOID ? this.defIndex_1 : defIndex;
    return $super === VOID ? this.copy_xajy4o_k$(useSpriteDefinition, defIndex) : $super.copy_xajy4o_k$.call(this, useSpriteDefinition, defIndex);
  };
  protoOf(processDataWin$TileSourceKey).toString = function () {
    return 'TileSourceKey(useSpriteDefinition=' + this.useSpriteDefinition_1 + ', defIndex=' + this.defIndex_1 + ')';
  };
  protoOf(processDataWin$TileSourceKey).hashCode = function () {
    var result = getBooleanHashCode(this.useSpriteDefinition_1);
    result = imul(result, 31) + this.defIndex_1 | 0;
    return result;
  };
  protoOf(processDataWin$TileSourceKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof processDataWin$TileSourceKey))
      return false;
    if (!(this.useSpriteDefinition_1 === other.useSpriteDefinition_1))
      return false;
    if (!(this.defIndex_1 === other.defIndex_1))
      return false;
    return true;
  };
  function processDataWin$lambda_0(a, b) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.get_id_kntnx8_k$();
    var tmp$ret$1 = b.get_id_kntnx8_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function processDataWin$lambda_1(a, b) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.get_id_kntnx8_k$();
    var tmp$ret$1 = b.get_id_kntnx8_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function processDataWin$lambda_2(a, b) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.get_id_kntnx8_k$();
    var tmp$ret$1 = b.get_id_kntnx8_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function processDataWin$slambda$slambda($entry, $audioDecoder, $log, $idx, resultContinuation) {
    this.$entry_1 = $entry;
    this.$audioDecoder_1 = $audioDecoder;
    this.$log_1 = $log;
    this.$idx_1 = $idx;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda$slambda).invoke_gr7yiz_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(processDataWin$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_gr7yiz_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            if (this.$entry_1.get_data_wokkxf_k$() == null)
              return null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$audioDecoder_1(this.$entry_1.get_data_wokkxf_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var decoded = suspendResult;
            this.$log_1('  Decoded embedded audio #' + this.$idx_1 + (decoded == null ? ' (FAILED)' : ''));
            return decoded;
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
  protoOf(processDataWin$slambda$slambda).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new processDataWin$slambda$slambda(this.$entry_1, this.$audioDecoder_1, this.$log_1, this.$idx_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(processDataWin$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function processDataWin$slambda$slambda_0($entry, $audioDecoder, $log, $idx, resultContinuation) {
    var i = new processDataWin$slambda$slambda($entry, $audioDecoder, $log, $idx, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_gr7yiz_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$slambda($dw, $audioDecoder, $log, resultContinuation) {
    this.$dw_1 = $dw;
    this.$audioDecoder_1 = $audioDecoder;
    this.$log_1 = $log;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda).invoke_5cd91j_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(processDataWin$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_5cd91j_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var this_0 = this.$dw_1.get_audo_woj2fc_k$().get_entries_p20ztl_k$();
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var index = 0;
            var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
            while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
              var item = _iterator__ex2g4s.next_20eer_k$();
              var _unary__edvuaz = index;
              index = _unary__edvuaz + 1 | 0;
              var idx = checkIndexOverflow(_unary__edvuaz);
              var tmp_0 = Dispatchers_getInstance().get_Default_goqax4_k$();
              destination.add_utx5q5_k$(async(this.$this$coroutineScope_1, tmp_0, VOID, processDataWin$slambda$slambda_0(item, this.$audioDecoder_1, this.$log_1, idx, null)));
            }

            suspendResult = awaitAll(destination, this);
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
  protoOf(processDataWin$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new processDataWin$slambda(this.$dw_1, this.$audioDecoder_1, this.$log_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(processDataWin$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function processDataWin$slambda_0($dw, $audioDecoder, $log, resultContinuation) {
    var i = new processDataWin$slambda($dw, $audioDecoder, $log, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_5cd91j_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$slambda$slambda_1($audioDecoder, $entry, $log, $label, resultContinuation) {
    this.$audioDecoder_1 = $audioDecoder;
    this.$entry_1 = $entry;
    this.$log_1 = $log;
    this.$label_1 = $label;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda$slambda_1).invoke_gr7yiz_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(processDataWin$slambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_gr7yiz_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$audioDecoder_1(this.$entry_1.get_data_wokkxf_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var decoded = suspendResult;
            this.$log_1('  Decoded ' + this.$label_1 + (decoded == null ? ' (FAILED)' : ''));
            return decoded;
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
  protoOf(processDataWin$slambda$slambda_1).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new processDataWin$slambda$slambda_1(this.$audioDecoder_1, this.$entry_1, this.$log_1, this.$label_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(processDataWin$slambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function processDataWin$slambda$slambda_2($audioDecoder, $entry, $log, $label, resultContinuation) {
    var i = new processDataWin$slambda$slambda_1($audioDecoder, $entry, $log, $label, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_gr7yiz_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$slambda_1($dw, $audioGroupAudo, $audioDecoder, $log, resultContinuation) {
    this.$dw_1 = $dw;
    this.$audioGroupAudo_1 = $audioGroupAudo;
    this.$audioDecoder_1 = $audioDecoder;
    this.$log_1 = $log;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda_1).invoke_lv1989_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(processDataWin$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_lv1989_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var tmp0 = withIndex(this.$dw_1.get_sond_woufyz_k$().get_sounds_jl0ua5_k$());
            var destination = ArrayList_init_$Create$_0();
            var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
            while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
              var element = _iterator__ex2g4s.next_20eer_k$();
              var tmp$ret$0 = Unit_getInstance();
              l$ret$1: do {
                var sondIdx = element.component1_7eebsc_k$();
                var sound = element.component2_7eebsb_k$();
                if (sound.get_audioGroup_52yxn6_k$() === 0) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                }
                var tmp0_elvis_lhs = this.$audioGroupAudo_1.get_wei43m_k$(sound.get_audioGroup_52yxn6_k$());
                var tmp_0;
                if (tmp0_elvis_lhs == null) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                } else {
                  tmp_0 = tmp0_elvis_lhs;
                }
                var groupAudo = tmp_0;
                if (0 > sound.get_audioFile_bmbemh_k$() || sound.get_audioFile_bmbemh_k$() >= groupAudo.get_entries_p20ztl_k$().get_size_woubt6_k$()) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                }
                var entry = groupAudo.get_entries_p20ztl_k$().get_c1px32_k$(sound.get_audioFile_bmbemh_k$());
                if (entry.get_data_wokkxf_k$() == null) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                }
                var tmp1_elvis_lhs = sound.get_file_wom0n9_k$();
                var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? sound.get_name_woqyms_k$() : tmp1_elvis_lhs;
                var label = tmp2_elvis_lhs == null ? 'audiogroup' + sound.get_audioGroup_52yxn6_k$() + '/' + sound.get_audioFile_bmbemh_k$() : tmp2_elvis_lhs;
                var tmp_1 = Dispatchers_getInstance().get_Default_goqax4_k$();
                tmp$ret$0 = to(sondIdx, async(this.$this$coroutineScope_1, tmp_1, VOID, processDataWin$slambda$slambda_2(this.$audioDecoder_1, entry, this.$log_1, label, null)));
              }
               while (false);
              var tmp0_safe_receiver = tmp$ret$0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination.add_utx5q5_k$(tmp0_safe_receiver);
              }
            }

            this.destination0__1 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
            this._iterator_2_yqohr2__1 = destination.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._iterator_2_yqohr2__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            var item = this._iterator_2_yqohr2__1.next_20eer_k$();
            this.sondIdx1__1 = item.component1_7eebsc_k$();
            var def = item.component2_7eebsb_k$();
            this.set_state_rjd8d0_k$(2);
            suspendResult = def.await_4rdzbx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = to(this.sondIdx1__1, ARGUMENT);
            this.destination0__1.add_utx5q5_k$(ARGUMENT_0);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return this.destination0__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(processDataWin$slambda_1).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new processDataWin$slambda_1(this.$dw_1, this.$audioGroupAudo_1, this.$audioDecoder_1, this.$log_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(processDataWin$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function processDataWin$slambda_2($dw, $audioGroupAudo, $audioDecoder, $log, resultContinuation) {
    var i = new processDataWin$slambda_1($dw, $audioGroupAudo, $audioDecoder, $log, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_lv1989_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$slambda$slambda_3($audioDecoder, $fileData, $log, $sound, resultContinuation) {
    this.$audioDecoder_1 = $audioDecoder;
    this.$fileData_1 = $fileData;
    this.$log_1 = $log;
    this.$sound_1 = $sound;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda$slambda_3).invoke_gr7yiz_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(processDataWin$slambda$slambda_3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_gr7yiz_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$audioDecoder_1(this.$fileData_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var decoded = suspendResult;
            this.$log_1('  Decoded ' + this.$sound_1.get_file_wom0n9_k$() + (decoded == null ? ' (FAILED)' : ''));
            return decoded;
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
  protoOf(processDataWin$slambda$slambda_3).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new processDataWin$slambda$slambda_3(this.$audioDecoder_1, this.$fileData_1, this.$log_1, this.$sound_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(processDataWin$slambda$slambda_3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function processDataWin$slambda$slambda_4($audioDecoder, $fileData, $log, $sound, resultContinuation) {
    var i = new processDataWin$slambda$slambda_3($audioDecoder, $fileData, $log, $sound, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_gr7yiz_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$slambda_3($dw, $externalAudoMap, $externalAudioFiles, $audioDecoder, $log, resultContinuation) {
    this.$dw_1 = $dw;
    this.$externalAudoMap_1 = $externalAudoMap;
    this.$externalAudioFiles_1 = $externalAudioFiles;
    this.$audioDecoder_1 = $audioDecoder;
    this.$log_1 = $log;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda_3).invoke_lv1989_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(processDataWin$slambda_3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_lv1989_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var tmp0 = withIndex(this.$dw_1.get_sond_woufyz_k$().get_sounds_jl0ua5_k$());
            var destination = ArrayList_init_$Create$_0();
            var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
            while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
              var element = _iterator__ex2g4s.next_20eer_k$();
              var tmp$ret$0 = Unit_getInstance();
              l$ret$1: do {
                var sondIdx = element.component1_7eebsc_k$();
                var sound = element.component2_7eebsb_k$();
                var isEmbedded = !((sound.get_flags_irfhb2_k$() & 1) === 0);
                if (isEmbedded) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                }
                if (this.$externalAudoMap_1.containsKey_aw81wo_k$(sondIdx)) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                }
                var tmp0_elvis_lhs = sound.get_file_wom0n9_k$();
                var tmp_0;
                if (tmp0_elvis_lhs == null) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                } else {
                  tmp_0 = tmp0_elvis_lhs;
                }
                var fileName = tmp_0;
                var tmp1_elvis_lhs = this.$externalAudioFiles_1.get_wei43m_k$(fileName);
                var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? this.$externalAudioFiles_1.get_wei43m_k$(fileName + '.ogg') : tmp1_elvis_lhs;
                var tmp3_elvis_lhs = tmp2_elvis_lhs == null ? this.$externalAudioFiles_1.get_wei43m_k$(fileName + '.wav') : tmp2_elvis_lhs;
                var tmp_1;
                if (tmp3_elvis_lhs == null) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                } else {
                  tmp_1 = tmp3_elvis_lhs;
                }
                var fileData = tmp_1;
                var tmp_2 = Dispatchers_getInstance().get_Default_goqax4_k$();
                tmp$ret$0 = to(sondIdx, async(this.$this$coroutineScope_1, tmp_2, VOID, processDataWin$slambda$slambda_4(this.$audioDecoder_1, fileData, this.$log_1, sound, null)));
              }
               while (false);
              var tmp0_safe_receiver = tmp$ret$0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination.add_utx5q5_k$(tmp0_safe_receiver);
              }
            }

            this.destination0__1 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
            this._iterator_2_yqohr2__1 = destination.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._iterator_2_yqohr2__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            var item = this._iterator_2_yqohr2__1.next_20eer_k$();
            this.sondIdx1__1 = item.component1_7eebsc_k$();
            var def = item.component2_7eebsb_k$();
            this.set_state_rjd8d0_k$(2);
            suspendResult = def.await_4rdzbx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = to(this.sondIdx1__1, ARGUMENT);
            this.destination0__1.add_utx5q5_k$(ARGUMENT_0);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return this.destination0__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(processDataWin$slambda_3).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new processDataWin$slambda_3(this.$dw_1, this.$externalAudoMap_1, this.$externalAudioFiles_1, this.$audioDecoder_1, this.$log_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(processDataWin$slambda_3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function processDataWin$slambda_4($dw, $externalAudoMap, $externalAudioFiles, $audioDecoder, $log, resultContinuation) {
    var i = new processDataWin$slambda_3($dw, $externalAudoMap, $externalAudioFiles, $audioDecoder, $log, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_lv1989_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$MusEntry(path, audio) {
    this.path_1 = path;
    this.audio_1 = audio;
  }
  protoOf(processDataWin$MusEntry).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(processDataWin$MusEntry).get_audio_ioubhp_k$ = function () {
    return this.audio_1;
  };
  protoOf(processDataWin$MusEntry).component1_7eebsc_k$ = function () {
    return this.path_1;
  };
  protoOf(processDataWin$MusEntry).component2_7eebsb_k$ = function () {
    return this.audio_1;
  };
  protoOf(processDataWin$MusEntry).copy_5tfsk2_k$ = function (path, audio) {
    return new processDataWin$MusEntry(path, audio);
  };
  protoOf(processDataWin$MusEntry).copy$default_jj1fbo_k$ = function (path, audio, $super) {
    path = path === VOID ? this.path_1 : path;
    audio = audio === VOID ? this.audio_1 : audio;
    return $super === VOID ? this.copy_5tfsk2_k$(path, audio) : $super.copy_5tfsk2_k$.call(this, path, audio);
  };
  protoOf(processDataWin$MusEntry).toString = function () {
    return 'MusEntry(path=' + this.path_1 + ', audio=' + this.audio_1.toString() + ')';
  };
  protoOf(processDataWin$MusEntry).hashCode = function () {
    var result = getStringHashCode(this.path_1);
    result = imul(result, 31) + this.audio_1.hashCode() | 0;
    return result;
  };
  protoOf(processDataWin$MusEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof processDataWin$MusEntry))
      return false;
    if (!(this.path_1 === other.path_1))
      return false;
    if (!this.audio_1.equals(other.audio_1))
      return false;
    return true;
  };
  function processDataWin$slambda$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.get_key_18j28a_k$();
    var tmp$ret$1 = b.get_key_18j28a_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function processDataWin$slambda$slambda_5($audioDecoder, $fileData, $log, $path, resultContinuation) {
    this.$audioDecoder_1 = $audioDecoder;
    this.$fileData_1 = $fileData;
    this.$log_1 = $log;
    this.$path_1 = $path;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda$slambda_5).invoke_gr7yiz_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(processDataWin$slambda$slambda_5).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_gr7yiz_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda$slambda_5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$audioDecoder_1(this.$fileData_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var decoded = suspendResult;
            if (!(decoded == null)) {
              this.$log_1('  ' + this.$path_1 + ': ' + decoded.sampleRate_1 + 'Hz ' + decoded.channels_1 + 'ch -> ADPCM (' + decoded.data_1.length + ' bytes)');
            } else {
              this.$log_1('  ' + this.$path_1 + ': FAILED to decode');
            }

            return decoded;
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
  protoOf(processDataWin$slambda$slambda_5).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new processDataWin$slambda$slambda_5(this.$audioDecoder_1, this.$fileData_1, this.$log_1, this.$path_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(processDataWin$slambda$slambda_5).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function processDataWin$slambda$slambda_6($audioDecoder, $fileData, $log, $path, resultContinuation) {
    var i = new processDataWin$slambda$slambda_5($audioDecoder, $fileData, $log, $path, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_gr7yiz_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$slambda_5($musFiles, $audioDecoder, $log, resultContinuation) {
    this.$musFiles_1 = $musFiles;
    this.$audioDecoder_1 = $audioDecoder;
    this.$log_1 = $log;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda_5).invoke_yy7vq5_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(processDataWin$slambda_5).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_yy7vq5_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda_5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var this_0 = this.$musFiles_1.get_entries_p20ztl_k$();
            var tmp_0 = processDataWin$slambda$lambda;
            var this_1 = sortedWith(this_0, new sam$kotlin_Comparator$0_3(tmp_0));
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
            var _iterator__ex2g4s = this_1.iterator_jk1svi_k$();
            while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
              var item = _iterator__ex2g4s.next_20eer_k$();
              var path = item.get_key_18j28a_k$();
              var fileData = item.get_value_j01efc_k$();
              var tmp_1 = Dispatchers_getInstance().get_Default_goqax4_k$();
              destination.add_utx5q5_k$(to(path, async(this.$this$coroutineScope_1, tmp_1, VOID, processDataWin$slambda$slambda_6(this.$audioDecoder_1, fileData, this.$log_1, path, null))));
            }

            this.destination0__1 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
            this._iterator_2_yqohr2__1 = destination.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._iterator_2_yqohr2__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            var item_0 = this._iterator_2_yqohr2__1.next_20eer_k$();
            this.path1__1 = item_0.component1_7eebsc_k$();
            var def = item_0.component2_7eebsb_k$();
            this.set_state_rjd8d0_k$(2);
            suspendResult = def.await_4rdzbx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = to(this.path1__1, ARGUMENT);
            this.destination0__1.add_utx5q5_k$(ARGUMENT_0);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return this.destination0__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(processDataWin$slambda_5).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new processDataWin$slambda_5(this.$musFiles_1, this.$audioDecoder_1, this.$log_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(processDataWin$slambda_5).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function processDataWin$slambda_6($musFiles, $audioDecoder, $log, resultContinuation) {
    var i = new processDataWin$slambda_5($musFiles, $audioDecoder, $log, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_yy7vq5_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function writeTexturePagesBytes$lambda(a, b) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.get_id_kntnx8_k$();
    var tmp$ret$1 = b.get_id_kntnx8_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function $processDataWinCOROUTINE$(dataWinBytes, externalAudioFiles, audioGroupFiles, musFiles, force4bppPatterns, atlasSize, audioDecoder, progressCallback, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dataWinBytes_1 = dataWinBytes;
    this.externalAudioFiles_1 = externalAudioFiles;
    this.audioGroupFiles_1 = audioGroupFiles;
    this.musFiles_1 = musFiles;
    this.force4bppPatterns_1 = force4bppPatterns;
    this.atlasSize_1 = atlasSize;
    this.audioDecoder_1 = audioDecoder;
    this.progressCallback_1 = progressCallback;
  }
  protoOf($processDataWinCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(10);
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.progressCallback_1;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              tmp_1 = processDataWin$lambda;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.log6__1 = tmp_1;
            this.log6__1('Parsing data.win...');
            this.dw5__1 = Companion_getInstance().parse_jw1qtn_k$(this.dataWinBytes_1, new DataWinParserOptions(true, false, false, false, true, false, true, true, false, false, false, false, true, false, false, true, true, false, false, false, true, true, true, true));
            this.log6__1('Parsed: ' + this.dw5__1.get_sprt_wougtk_k$().get_sprites_vqz1qz_k$().get_size_woubt6_k$() + ' sprites, ' + this.dw5__1.get_bgnd_wojf9g_k$().get_backgrounds_ttk0v8_k$().get_size_woubt6_k$() + ' backgrounds, ' + this.dw5__1.get_font_wom55k_k$().get_fonts_irho7v_k$().get_size_woubt6_k$() + ' fonts, ' + this.dw5__1.get_txtr_wov9sb_k$().get_textures_mn839d_k$().get_size_woubt6_k$() + ' textures, ' + this.dw5__1.get_tpag_wov3e3_k$().get_items_it823b_k$().get_size_woubt6_k$() + ' TPAG items');
            this.log6__1('Loading texture pages...');
            var tmp_2 = this;
            tmp_2.texturePages14__1 = ArrayList_init_$Create$_0();
            this.gm2022_516__1 = this.dw5__1.isVersionAtLeast_s3r2dk_k$(2022, 5, 0, 0);
            this._iterator_17_biegoq_1 = this.dw5__1.get_txtr_wov9sb_k$().get_textures_mn839d_k$().iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._iterator_17_biegoq_1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            var tex = this._iterator_17_biegoq_1.next_20eer_k$();
            if (!(tex.get_blobData_s79cq8_k$() == null)) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = decodeImageBytes(tex.get_blobData_s79cq8_k$(), this.gm2022_516__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_3 = this;
              tmp_3.WHEN_RESULT15__1 = this.texturePages14__1.add_utx5q5_k$(null);
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 2:
            var ARGUMENT = suspendResult;
            this.WHEN_RESULT15__1 = this.texturePages14__1.add_utx5q5_k$(ARGUMENT);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            var tmp0 = this.texturePages14__1;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp_4;
              if (isInterface(tmp0, Collection)) {
                tmp_4 = tmp0.isEmpty_y1axqb_k$();
              } else {
                tmp_4 = false;
              }
              if (tmp_4) {
                tmp$ret$0 = 0;
                break l$ret$1;
              }
              var count = 0;
              var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
              while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
                var element = _iterator__ex2g4s.next_20eer_k$();
                if (!(element == null)) {
                  count = count + 1 | 0;
                  checkCountOverflow(count);
                }
              }
              tmp$ret$0 = count;
            }
             while (false);
            this.log6__1('Loaded ' + tmp$ret$0 + ' texture pages');
            var allImages = ArrayList_init_$Create$_0();
            var atlasGroupKeys = HashMap_init_$Create$_0();
            var tpagIndexMap = HashMap_init_$Create$_0();
            var iterator = this.dw5__1.get_sprt_wougtk_k$().get_sprites_vqz1qz_k$().iterator_jk1svi_k$();
            var index = 0;
            while (iterator.hasNext_bitz1p_k$()) {
              var sprIdx = index;
              index = index + 1 | 0;
              var sprite = iterator.next_20eer_k$();
              var tmp1_elvis_lhs = sprite.get_name_woqyms_k$();
              var name = tmp1_elvis_lhs == null ? 'sprite_' + sprIdx : tmp1_elvis_lhs;
              var groupKey = getAtlasGroupKey(name);
              var indexedObject = sprite.get_textureOffsets_n9qq1e_k$();
              var inductionVariable = 0;
              var last = indexedObject.length;
              $l$loop: while (inductionVariable < last) {
                var frameIdx = inductionVariable;
                var texOffset = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                var tpagIdx = this.dw5__1.resolveTPAG_p0cf7u_k$(texOffset);
                if (0 > tpagIdx)
                  continue $l$loop;
                var img = extractFromTPAG(this.dw5__1.get_tpag_wov3e3_k$().get_items_it823b_k$().get_c1px32_k$(tpagIdx), this.texturePages14__1);
                var imgName = sprite.get_textureOffsets_n9qq1e_k$().length > 1 ? 'spr/' + name + '_' + frameIdx : 'spr/' + name;
                allImages.add_utx5q5_k$(to(imgName, img));
                atlasGroupKeys.put_4fpzoq_k$(imgName, groupKey);
                tpagIndexMap.put_4fpzoq_k$(imgName, tpagIdx);
              }
            }

            var iterator_0 = this.dw5__1.get_bgnd_wojf9g_k$().get_backgrounds_ttk0v8_k$().iterator_jk1svi_k$();
            var index_0 = 0;
            $l$loop_0: while (iterator_0.hasNext_bitz1p_k$()) {
              var bgIdx = index_0;
              index_0 = index_0 + 1 | 0;
              var bg = iterator_0.next_20eer_k$();
              var tmp2_elvis_lhs = bg.get_name_woqyms_k$();
              var name_0 = tmp2_elvis_lhs == null ? 'bg_' + bgIdx : tmp2_elvis_lhs;
              var tpagIdx_0 = this.dw5__1.resolveTPAG_p0cf7u_k$(bg.get_textureOffset_1jgorp_k$());
              if (0 > tpagIdx_0)
                continue $l$loop_0;
              var imgName_0 = 'bg/' + name_0;
              allImages.add_utx5q5_k$(to(imgName_0, extractFromTPAG(this.dw5__1.get_tpag_wov3e3_k$().get_items_it823b_k$().get_c1px32_k$(tpagIdx_0), this.texturePages14__1)));
              atlasGroupKeys.put_4fpzoq_k$(imgName_0, imgName_0);
              tpagIndexMap.put_4fpzoq_k$(imgName_0, tpagIdx_0);
            }

            var iterator_1 = this.dw5__1.get_font_wom55k_k$().get_fonts_irho7v_k$().iterator_jk1svi_k$();
            var index_1 = 0;
            $l$loop_1: while (iterator_1.hasNext_bitz1p_k$()) {
              var fontIdx = index_1;
              index_1 = index_1 + 1 | 0;
              var font = iterator_1.next_20eer_k$();
              var tmp3_elvis_lhs = font.get_name_woqyms_k$();
              var name_1 = tmp3_elvis_lhs == null ? 'font_' + fontIdx : tmp3_elvis_lhs;
              var tpagIdx_1 = this.dw5__1.resolveTPAG_p0cf7u_k$(font.get_textureOffset_1jgorp_k$());
              if (0 > tpagIdx_1)
                continue $l$loop_1;
              var imgName_1 = 'font/' + name_1;
              allImages.add_utx5q5_k$(to(imgName_1, extractFromTPAG(this.dw5__1.get_tpag_wov3e3_k$().get_items_it823b_k$().get_c1px32_k$(tpagIdx_1), this.texturePages14__1)));
              atlasGroupKeys.put_4fpzoq_k$(imgName_1, imgName_1);
              tpagIndexMap.put_4fpzoq_k$(imgName_1, tpagIdx_1);
            }

            var uniqueTiles = LinkedHashMap_init_$Create$();
            var _iterator__ex2g4s_0 = this.dw5__1.get_room_wott0k_k$().get_rooms_iy37wv_k$().iterator_jk1svi_k$();
            while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
              var room = _iterator__ex2g4s_0.next_20eer_k$();
              var _iterator__ex2g4s_1 = room.get_tiles_iz2wrg_k$().iterator_jk1svi_k$();
              while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
                var tile = _iterator__ex2g4s_1.next_20eer_k$();
                processDataWin$collectTile(this.dw5__1, uniqueTiles, tile);
              }
              var _iterator__ex2g4s_2 = room.get_layers_g22qtn_k$().iterator_jk1svi_k$();
              $l$loop_2: while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
                var layer = _iterator__ex2g4s_2.next_20eer_k$();
                var tmp4_elvis_lhs = layer.get_assetsData_fbw0nq_k$();
                var tmp_5;
                if (tmp4_elvis_lhs == null) {
                  continue $l$loop_2;
                } else {
                  tmp_5 = tmp4_elvis_lhs;
                }
                var assets = tmp_5;
                var _iterator__ex2g4s_3 = assets.get_legacyTiles_m9x2y5_k$().iterator_jk1svi_k$();
                while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
                  var tile_0 = _iterator__ex2g4s_3.next_20eer_k$();
                  processDataWin$collectTile(this.dw5__1, uniqueTiles, tile_0);
                }
              }
            }

            var tileSourceImages = HashMap_init_$Create$_0();
            var _iterator__ex2g4s_4 = uniqueTiles.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            $l$loop_5: while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
              var key = _iterator__ex2g4s_4.next_20eer_k$().get_key_18j28a_k$();
              var srcKey = new processDataWin$TileSourceKey(key.useSpriteDefinition_1, key.bgDef_1);
              if (tileSourceImages.containsKey_aw81wo_k$(srcKey))
                continue $l$loop_5;
              var tmp_6;
              if (key.useSpriteDefinition_1) {
                var sprite_0 = this.dw5__1.get_sprt_wougtk_k$().get_sprites_vqz1qz_k$().get_c1px32_k$(key.bgDef_1);
                if (sprite_0.get_textureOffsets_n9qq1e_k$().length === 0)
                  continue $l$loop_5;
                tmp_6 = this.dw5__1.resolveTPAG_p0cf7u_k$(sprite_0.get_textureOffsets_n9qq1e_k$()[0]);
              } else {
                var bg_0 = this.dw5__1.get_bgnd_wojf9g_k$().get_backgrounds_ttk0v8_k$().get_c1px32_k$(key.bgDef_1);
                tmp_6 = this.dw5__1.resolveTPAG_p0cf7u_k$(bg_0.get_textureOffset_1jgorp_k$());
              }
              var tpagIdx_2 = tmp_6;
              if (0 > tpagIdx_2)
                continue $l$loop_5;
              var value = extractFromTPAG(this.dw5__1.get_tpag_wov3e3_k$().get_items_it823b_k$().get_c1px32_k$(tpagIdx_2), this.texturePages14__1);
              tileSourceImages.put_4fpzoq_k$(srcKey, value);
            }

            var clampedTileCount = 0;
            var _iterator__ex2g4s_5 = uniqueTiles.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            $l$loop_9: while (_iterator__ex2g4s_5.hasNext_bitz1p_k$()) {
              var key_0 = _iterator__ex2g4s_5.next_20eer_k$().get_key_18j28a_k$();
              var srcKey_0 = new processDataWin$TileSourceKey(key_0.useSpriteDefinition_1, key_0.bgDef_1);
              var tmp5_elvis_lhs = tileSourceImages.get_wei43m_k$(srcKey_0);
              var tmp_7;
              if (tmp5_elvis_lhs == null) {
                continue $l$loop_9;
              } else {
                tmp_7 = tmp5_elvis_lhs;
              }
              var srcImg = tmp_7;
              if (0 > key_0.srcX_1 || 0 > key_0.srcY_1)
                continue $l$loop_9;
              if (key_0.srcX_1 >= srcImg.get_width_j0q4yl_k$() || key_0.srcY_1 >= srcImg.get_height_e7t92o_k$())
                continue $l$loop_9;
              if (key_0.w_1 === 0 || key_0.h_1 === 0)
                continue $l$loop_9;
              var tmp0_0 = key_0.w_1;
              var b = srcImg.get_width_j0q4yl_k$() - key_0.srcX_1 | 0;
              var effW = Math.min(tmp0_0, b);
              var tmp0_1 = key_0.h_1;
              var b_0 = srcImg.get_height_e7t92o_k$() - key_0.srcY_1 | 0;
              var effH = Math.min(tmp0_1, b_0);
              if (!(effW === key_0.w_1) || !(effH === key_0.h_1)) {
                clampedTileCount = clampedTileCount + 1 | 0;
              }
              var tileImg = extractSubImage(srcImg, key_0.srcX_1, key_0.srcY_1, effW, effH);
              var tmp_8;
              if (key_0.useSpriteDefinition_1) {
                var tmp6_elvis_lhs = this.dw5__1.get_sprt_wougtk_k$().get_sprites_vqz1qz_k$().get_c1px32_k$(key_0.bgDef_1).get_name_woqyms_k$();
                tmp_8 = tmp6_elvis_lhs == null ? 'spr' + key_0.bgDef_1 : tmp6_elvis_lhs;
              } else {
                var tmp7_elvis_lhs = this.dw5__1.get_bgnd_wojf9g_k$().get_backgrounds_ttk0v8_k$().get_c1px32_k$(key_0.bgDef_1).get_name_woqyms_k$();
                tmp_8 = tmp7_elvis_lhs == null ? 'bg' + key_0.bgDef_1 : tmp7_elvis_lhs;
              }
              var defName = tmp_8;
              var imgName_2 = 'tile/' + defName + '_' + key_0.srcX_1 + '_' + key_0.srcY_1 + '_' + key_0.w_1 + 'x' + key_0.h_1;
              allImages.add_utx5q5_k$(to(imgName_2, tileImg));
              var value_0 = 'tile/' + defName;
              atlasGroupKeys.put_4fpzoq_k$(imgName_2, value_0);
            }

            if (clampedTileCount > 0) {
              this.log6__1('Clamped ' + clampedTileCount + ' tiles whose source rect exceeded the background');
            }

            var cropInfoMap = HashMap_init_$Create$_0();
            var croppedCount = 0;
            var inductionVariable_0 = 0;
            var last_0 = allImages.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable_0 <= last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var _destruct__k2r9zo = allImages.get_c1px32_k$(i);
                var name_2 = _destruct__k2r9zo.component1_7eebsc_k$();
                var img_0 = _destruct__k2r9zo.component2_7eebsb_k$();
                if (startsWith(name_2, 'spr/')) {
                  var crop = cropTransparentBorders(img_0);
                  var value_1 = new CropInfo(crop.get_offsetX_ocbsn8_k$(), crop.get_offsetY_ocbsn7_k$(), crop.get_image_it3i2a_k$().get_width_j0q4yl_k$(), crop.get_image_it3i2a_k$().get_height_e7t92o_k$());
                  cropInfoMap.put_4fpzoq_k$(name_2, value_1);
                  if (!(crop.get_image_it3i2a_k$().get_width_j0q4yl_k$() === img_0.get_width_j0q4yl_k$()) || !(crop.get_image_it3i2a_k$().get_height_e7t92o_k$() === img_0.get_height_e7t92o_k$())) {
                    croppedCount = croppedCount + 1 | 0;
                  }
                  allImages.set_82063s_k$(i, to(name_2, crop.get_image_it3i2a_k$()));
                } else {
                  var value_2 = new CropInfo(0, 0, img_0.get_width_j0q4yl_k$(), img_0.get_height_e7t92o_k$());
                  cropInfoMap.put_4fpzoq_k$(name_2, value_2);
                }
              }
               while (inductionVariable_0 <= last_0);
            if (croppedCount > 0) {
              this.log6__1('Cropped transparent borders from ' + croppedCount + ' sprite images');
            }

            var resizedCount = 0;
            var inductionVariable_1 = 0;
            var last_1 = allImages.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable_1 <= last_1)
              $l$loop_10: do {
                var i_0 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                var _destruct__k2r9zo_0 = allImages.get_c1px32_k$(i_0);
                var name_3 = _destruct__k2r9zo_0.component1_7eebsc_k$();
                var img_1 = _destruct__k2r9zo_0.component2_7eebsb_k$();
                var tmp_9;
                if (startsWith(name_3, 'font/')) {
                  tmp_9 = this.atlasSize_1;
                } else if (startsWith(name_3, 'spr/spr_sidestalk')) {
                  tmp_9 = 16;
                } else if (startsWith(name_3, 'spr/spr_mouthball_')) {
                  tmp_9 = 32;
                } else if (startsWith(name_3, 'spr/spr_fa_seq_b_') || startsWith(name_3, 'spr/spr_floweyarm')) {
                  tmp_9 = 64;
                } else if (startsWith(name_3, 'spr/spr_fa_stemunder_')) {
                  tmp_9 = 64;
                } else if (startsWith(name_3, 'spr/spr_floweynuke_explosion')) {
                  tmp_9 = 16;
                } else if (startsWith(name_3, 'spr/spr_floweyx_flame_move_')) {
                  tmp_9 = 16;
                } else if (startsWith(name_3, 'spr/spr_venus_placeholder')) {
                  tmp_9 = 32;
                } else if (startsWith(name_3, 'spr/spr_f_handgun_neo_')) {
                  tmp_9 = 32;
                } else if (startsWith(name_3, 'spr/spr_vines_flowey')) {
                  tmp_9 = 32;
                } else if (startsWith(name_3, 'spr/spr_floweyx_flamethrower')) {
                  tmp_9 = 64;
                } else if (startsWith(name_3, 'spr/spr_floweynuke')) {
                  tmp_9 = 32;
                } else if (startsWith(name_3, 'spr/spr_bgpipe')) {
                  tmp_9 = 64;
                } else if (startsWith(name_3, 'spr/spr_tvinside_old')) {
                  tmp_9 = 64;
                } else if (startsWith(name_3, 'spr/spr_floweyx_tv')) {
                  tmp_9 = 128;
                } else if (startsWith(name_3, 'spr/spr_floweyx_fleshmound')) {
                  tmp_9 = 64;
                } else if (startsWith(name_3, 'spr/spr_tv_floweyx_laugh')) {
                  tmp_9 = 64;
                } else if (startsWith(name_3, 'spr/spr_floweyx_mouthedge')) {
                  tmp_9 = 64;
                } else {
                  tmp_9 = this.atlasSize_1;
                }
                var maxDim = tmp_9;
                if (maxDim >= img_1.get_width_j0q4yl_k$() && maxDim >= img_1.get_height_e7t92o_k$())
                  continue $l$loop_10;
                var tmp0_2 = maxDim / img_1.get_width_j0q4yl_k$();
                var b_1 = maxDim / img_1.get_height_e7t92o_k$();
                var scale = Math.min(tmp0_2, b_1);
                var a = numberToInt(img_1.get_width_j0q4yl_k$() * scale);
                var newW = Math.max(a, 1);
                var a_0 = numberToInt(img_1.get_height_e7t92o_k$() * scale);
                var newH = Math.max(a_0, 1);
                var resizedPixels = new Int32Array(imul(newW, newH));
                var inductionVariable_2 = 0;
                if (inductionVariable_2 < newH)
                  do {
                    var y = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var srcY = imul(y, img_1.get_height_e7t92o_k$()) / newH | 0;
                    var inductionVariable_3 = 0;
                    if (inductionVariable_3 < newW)
                      do {
                        var x = inductionVariable_3;
                        inductionVariable_3 = inductionVariable_3 + 1 | 0;
                        var srcX = imul(x, img_1.get_width_j0q4yl_k$()) / newW | 0;
                        resizedPixels[imul(y, newW) + x | 0] = img_1.get_pixels_i2my0m_k$()[imul(srcY, img_1.get_width_j0q4yl_k$()) + srcX | 0];
                      }
                       while (inductionVariable_3 < newW);
                  }
                   while (inductionVariable_2 < newH);
                allImages.set_82063s_k$(i_0, to(name_3, new PixelImage(newW, newH, resizedPixels)));
                resizedCount = resizedCount + 1 | 0;
              }
               while (inductionVariable_1 <= last_1);
            if (resizedCount > 0) {
              this.log6__1('Resized ' + resizedCount + ' images to fit');
            }

            this.log6__1('Total images to process: ' + allImages.get_size_woubt6_k$());
            this.log6__1('Creating CLUTs...');
            var this_0 = this.force4bppPatterns_1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var _iterator__ex2g4s_6 = this_0.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_6.hasNext_bitz1p_k$()) {
              var item = _iterator__ex2g4s_6.next_20eer_k$();
              destination.add_utx5q5_k$(Regex_init_$Create$(item));
            }

            var force4bppMatchers = destination;
            var clutImages = ArrayList_init_$Create$_0();
            var forced4bppCount = 0;
            var _iterator__ex2g4s_7 = allImages.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_7.hasNext_bitz1p_k$()) {
              var _destruct__k2r9zo_1 = _iterator__ex2g4s_7.next_20eer_k$();
              var name_4 = _destruct__k2r9zo_1.component1_7eebsc_k$();
              var img_2 = _destruct__k2r9zo_1.component2_7eebsb_k$();
              var tmp$ret$2;
              l$ret$3: do {
                var tmp_10;
                if (isInterface(force4bppMatchers, Collection)) {
                  tmp_10 = force4bppMatchers.isEmpty_y1axqb_k$();
                } else {
                  tmp_10 = false;
                }
                if (tmp_10) {
                  tmp$ret$2 = false;
                  break l$ret$3;
                }
                var _iterator__ex2g4s_8 = force4bppMatchers.iterator_jk1svi_k$();
                while (_iterator__ex2g4s_8.hasNext_bitz1p_k$()) {
                  var element_0 = _iterator__ex2g4s_8.next_20eer_k$();
                  if (element_0.matches_evli6i_k$(name_4)) {
                    tmp$ret$2 = true;
                    break l$ret$3;
                  }
                }
                tmp$ret$2 = false;
              }
               while (false);
              var force4bpp = tmp$ret$2;
              if (force4bpp) {
                forced4bppCount = forced4bppCount + 1 | 0;
              }
              var clutImage = ClutProcessor_getInstance().createClutImage_d4xog8_k$(name_4, img_2, force4bpp);
              clutImages.add_utx5q5_k$(clutImage);
            }

            if (!force4bppMatchers.isEmpty_y1axqb_k$()) {
              this.log6__1('  Forced ' + forced4bppCount + ' images to 4bpp via ' + force4bppMatchers.get_size_woubt6_k$() + ' pattern(s)');
            }

            var tmp$ret$4;
            l$ret$5: do {
              var tmp_11;
              if (isInterface(clutImages, Collection)) {
                tmp_11 = clutImages.isEmpty_y1axqb_k$();
              } else {
                tmp_11 = false;
              }
              if (tmp_11) {
                tmp$ret$4 = 0;
                break l$ret$5;
              }
              var count_0 = 0;
              var _iterator__ex2g4s_9 = clutImages.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_9.hasNext_bitz1p_k$()) {
                var element_1 = _iterator__ex2g4s_9.next_20eer_k$();
                if (element_1.get_bpp_18j8nb_k$() === 4) {
                  count_0 = count_0 + 1 | 0;
                  checkCountOverflow(count_0);
                }
              }
              tmp$ret$4 = count_0;
            }
             while (false);
            var bpp4Count = tmp$ret$4;
            var tmp$ret$6;
            l$ret$7: do {
              var tmp_12;
              if (isInterface(clutImages, Collection)) {
                tmp_12 = clutImages.isEmpty_y1axqb_k$();
              } else {
                tmp_12 = false;
              }
              if (tmp_12) {
                tmp$ret$6 = 0;
                break l$ret$7;
              }
              var count_1 = 0;
              var _iterator__ex2g4s_10 = clutImages.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_10.hasNext_bitz1p_k$()) {
                var element_2 = _iterator__ex2g4s_10.next_20eer_k$();
                if (element_2.get_bpp_18j8nb_k$() === 8) {
                  count_1 = count_1 + 1 | 0;
                  checkCountOverflow(count_1);
                }
              }
              tmp$ret$6 = count_1;
            }
             while (false);
            var bpp8Count = tmp$ret$6;
            this.log6__1('  4bpp: ' + bpp4Count + ' images, 8bpp: ' + bpp8Count + ' images');
            this.log6__1('Deduplicating CLUTs...');
            var dedupGroups = ClutProcessor_getInstance().deduplicateCluts_jlxaxr_k$(clutImages);
            this.log6__1('  After dedup: ' + dedupGroups.get_size_woubt6_k$() + ' unique CLUTs (from ' + clutImages.get_size_woubt6_k$() + ' images)');
            this.log6__1('Merging CLUTs...');
            var mergedGroups = ClutProcessor_getInstance().mergeCluts_yxhoy5_k$(clutImages, dedupGroups);
            var tmp$ret$8;
            l$ret$9: do {
              var tmp_13;
              if (isInterface(mergedGroups, Collection)) {
                tmp_13 = mergedGroups.isEmpty_y1axqb_k$();
              } else {
                tmp_13 = false;
              }
              if (tmp_13) {
                tmp$ret$8 = 0;
                break l$ret$9;
              }
              var count_2 = 0;
              var _iterator__ex2g4s_11 = mergedGroups.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_11.hasNext_bitz1p_k$()) {
                var element_3 = _iterator__ex2g4s_11.next_20eer_k$();
                if (element_3.get_bpp_18j8nb_k$() === 4) {
                  count_2 = count_2 + 1 | 0;
                  checkCountOverflow(count_2);
                }
              }
              tmp$ret$8 = count_2;
            }
             while (false);
            var merged4 = tmp$ret$8;
            var tmp$ret$10;
            l$ret$11: do {
              var tmp_14;
              if (isInterface(mergedGroups, Collection)) {
                tmp_14 = mergedGroups.isEmpty_y1axqb_k$();
              } else {
                tmp_14 = false;
              }
              if (tmp_14) {
                tmp$ret$10 = 0;
                break l$ret$11;
              }
              var count_3 = 0;
              var _iterator__ex2g4s_12 = mergedGroups.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_12.hasNext_bitz1p_k$()) {
                var element_4 = _iterator__ex2g4s_12.next_20eer_k$();
                if (element_4.get_bpp_18j8nb_k$() === 8) {
                  count_3 = count_3 + 1 | 0;
                  checkCountOverflow(count_3);
                }
              }
              tmp$ret$10 = count_3;
            }
             while (false);
            var merged8 = tmp$ret$10;
            this.log6__1('  After merge: ' + merged4 + ' merged 4bpp CLUTs, ' + merged8 + ' merged 8bpp CLUTs (' + mergedGroups.get_size_woubt6_k$() + ' total)');
            this.log6__1('Packing texture atlases...');
            this.atlases0__1 = TextureAtlasPacker_getInstance().packAtlases_nsl246_k$(clutImages, atlasGroupKeys, this.atlasSize_1);
            var tmp0_3 = this.atlases0__1;
            var tmp$ret$12;
            l$ret$13: do {
              var tmp_15;
              if (isInterface(tmp0_3, Collection)) {
                tmp_15 = tmp0_3.isEmpty_y1axqb_k$();
              } else {
                tmp_15 = false;
              }
              if (tmp_15) {
                tmp$ret$12 = 0;
                break l$ret$13;
              }
              var count_4 = 0;
              var _iterator__ex2g4s_13 = tmp0_3.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_13.hasNext_bitz1p_k$()) {
                var element_5 = _iterator__ex2g4s_13.next_20eer_k$();
                if (element_5.get_bpp_18j8nb_k$() === 4) {
                  count_4 = count_4 + 1 | 0;
                  checkCountOverflow(count_4);
                }
              }
              tmp$ret$12 = count_4;
            }
             while (false);
            var tmp_16 = tmp$ret$12;
            var tmp0_4 = this.atlases0__1;
            var tmp$ret$14;
            l$ret$15: do {
              var tmp_17;
              if (isInterface(tmp0_4, Collection)) {
                tmp_17 = tmp0_4.isEmpty_y1axqb_k$();
              } else {
                tmp_17 = false;
              }
              if (tmp_17) {
                tmp$ret$14 = 0;
                break l$ret$15;
              }
              var count_5 = 0;
              var _iterator__ex2g4s_14 = tmp0_4.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_14.hasNext_bitz1p_k$()) {
                var element_6 = _iterator__ex2g4s_14.next_20eer_k$();
                if (element_6.get_bpp_18j8nb_k$() === 8) {
                  count_5 = count_5 + 1 | 0;
                  checkCountOverflow(count_5);
                }
              }
              tmp$ret$14 = count_5;
            }
             while (false);
            this.log6__1('  ' + tmp_16 + ' 4bpp atlases, ' + tmp$ret$14 + ' 8bpp atlases (' + this.atlases0__1.get_size_woubt6_k$() + ' total)');
            this.log6__1('Writing CLUT binaries...');
            var tmp_18 = this;
            var destination_0 = ArrayList_init_$Create$_0();
            var _iterator__ex2g4s_15 = mergedGroups.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_15.hasNext_bitz1p_k$()) {
              var element_7 = _iterator__ex2g4s_15.next_20eer_k$();
              if (element_7.get_bpp_18j8nb_k$() === 4) {
                destination_0.add_utx5q5_k$(element_7);
              }
            }

            var tmp_19 = processDataWin$lambda_0;
            tmp_18.clut4Bin4__1 = writeClutBinary(sortedWith(destination_0, new sam$kotlin_Comparator$0_3(tmp_19)), 16);
            var tmp_20 = this;
            var destination_1 = ArrayList_init_$Create$_0();
            var _iterator__ex2g4s_16 = mergedGroups.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_16.hasNext_bitz1p_k$()) {
              var element_8 = _iterator__ex2g4s_16.next_20eer_k$();
              if (element_8.get_bpp_18j8nb_k$() === 8) {
                destination_1.add_utx5q5_k$(element_8);
              }
            }

            var tmp_21 = processDataWin$lambda_1;
            tmp_20.clut8Bin3__1 = writeClutBinary(sortedWith(destination_1, new sam$kotlin_Comparator$0_3(tmp_21)), 256);
            this.log6__1('Writing texture pages...');
            var _destruct__k2r9zo_2 = writeTexturePagesBytes(this.atlases0__1, this.log6__1);
            this.texturesBin2__1 = _destruct__k2r9zo_2.component1_7eebsc_k$();
            var atlasMetadata = _destruct__k2r9zo_2.component2_7eebsb_k$();
            this.log6__1('Writing ATLAS.BIN...');
            var clutIndexMap = HashMap_init_$Create$_0();
            var clut4Idx = 0;
            var clut8Idx = 0;
            var tmp_22 = processDataWin$lambda_2;
            var _iterator__ex2g4s_17 = sortedWith(mergedGroups, new sam$kotlin_Comparator$0_3(tmp_22)).iterator_jk1svi_k$();
            while (_iterator__ex2g4s_17.hasNext_bitz1p_k$()) {
              var group = _iterator__ex2g4s_17.next_20eer_k$();
              var tmp_23;
              if (group.get_bpp_18j8nb_k$() === 4) {
                var _unary__edvuaz = clut4Idx;
                clut4Idx = _unary__edvuaz + 1 | 0;
                tmp_23 = _unary__edvuaz;
              } else {
                var _unary__edvuaz_0 = clut8Idx;
                clut8Idx = _unary__edvuaz_0 + 1 | 0;
                tmp_23 = _unary__edvuaz_0;
              }
              var idx = tmp_23;
              var _iterator__ex2g4s_18 = group.get_imageNames_qq6rli_k$().iterator_jk1svi_k$();
              while (_iterator__ex2g4s_18.hasNext_bitz1p_k$()) {
                var name_5 = _iterator__ex2g4s_18.next_20eer_k$();
                clutIndexMap.put_4fpzoq_k$(name_5, idx);
              }
            }

            var atlasEntryMap = HashMap_init_$Create$_0();
            var _iterator__ex2g4s_19 = this.atlases0__1.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_19.hasNext_bitz1p_k$()) {
              var atlas = _iterator__ex2g4s_19.next_20eer_k$();
              var _iterator__ex2g4s_20 = atlas.get_entries_p20ztl_k$().iterator_jk1svi_k$();
              while (_iterator__ex2g4s_20.hasNext_bitz1p_k$()) {
                var entry = _iterator__ex2g4s_20.next_20eer_k$();
                var tmp2 = entry.get_image_it3i2a_k$().get_name_woqyms_k$();
                var value_3 = to(atlas, entry);
                atlasEntryMap.put_4fpzoq_k$(tmp2, value_3);
              }
            }

            var tpagIdxToImageName = HashMap_init_$Create$_0();
            var _iterator__ex2g4s_21 = tpagIndexMap.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            while (_iterator__ex2g4s_21.hasNext_bitz1p_k$()) {
              var _destruct__k2r9zo_3 = _iterator__ex2g4s_21.next_20eer_k$();
              var imgName_3 = _destruct__k2r9zo_3.get_key_18j28a_k$();
              var tpagIdx_3 = _destruct__k2r9zo_3.get_value_j01efc_k$();
              tpagIdxToImageName.put_4fpzoq_k$(tpagIdx_3, imgName_3);
            }

            this.atlasBin1__1 = writeAtlasMetadataBytes(this.dw5__1, uniqueTiles, tpagIdxToImageName, atlasEntryMap, clutIndexMap, atlasMetadata, cropInfoMap);
            this.log6__1('Processing sounds...');
            this.audioGroupAudo13__1 = HashMap_init_$Create$_0();
            var _iterator__ex2g4s_22 = this.audioGroupFiles_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            while (_iterator__ex2g4s_22.hasNext_bitz1p_k$()) {
              var _destruct__k2r9zo_4 = _iterator__ex2g4s_22.next_20eer_k$();
              var groupId = _destruct__k2r9zo_4.get_key_18j28a_k$();
              var groupBytes = _destruct__k2r9zo_4.get_value_j01efc_k$();
              this.log6__1('Parsing audiogroup' + groupId + '.dat...');
              var agDw = Companion_getInstance().parse_jw1qtn_k$(groupBytes, new DataWinParserOptions(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true));
              var tmp0_5 = this.audioGroupAudo13__1;
              var value_4 = agDw.get_audo_woj2fc_k$();
              tmp0_5.put_4fpzoq_k$(groupId, value_4);
              this.log6__1('  audiogroup' + groupId + '.dat: ' + agDw.get_audo_woj2fc_k$().get_entries_p20ztl_k$().get_size_woubt6_k$() + ' audio entries');
            }

            this.log6__1('Decoding embedded audio files...');
            this.set_state_rjd8d0_k$(5);
            suspendResult = coroutineScope(processDataWin$slambda_0(this.dw5__1, this.audioDecoder_1, this.log6__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var ARGUMENT_0 = suspendResult;
            this.parsedAudio8__1 = toMutableList(ARGUMENT_0);
            var tmp_24 = this;
            var tmp0_6 = this.parsedAudio8__1;
            var tmp$ret$16;
            l$ret$17: do {
              var tmp_25;
              if (isInterface(tmp0_6, Collection)) {
                tmp_25 = tmp0_6.isEmpty_y1axqb_k$();
              } else {
                tmp_25 = false;
              }
              if (tmp_25) {
                tmp$ret$16 = 0;
                break l$ret$17;
              }
              var count_6 = 0;
              var _iterator__ex2g4s_23 = tmp0_6.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_23.hasNext_bitz1p_k$()) {
                var element_9 = _iterator__ex2g4s_23.next_20eer_k$();
                if (!(element_9 == null)) {
                  count_6 = count_6 + 1 | 0;
                  checkCountOverflow(count_6);
                }
              }
              tmp$ret$16 = count_6;
            }
             while (false);
            tmp_24.embeddedCount12__1 = tmp$ret$16;
            this.externalAudoMap9__1 = HashMap_init_$Create$_0();
            this.audioGroupCount11__1 = 0;
            this.set_state_rjd8d0_k$(6);
            suspendResult = coroutineScope(processDataWin$slambda_2(this.dw5__1, this.audioGroupAudo13__1, this.audioDecoder_1, this.log6__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var audioGroupDecodes = suspendResult;
            var _iterator__ex2g4s_24 = audioGroupDecodes.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_24.hasNext_bitz1p_k$()) {
              var _destruct__k2r9zo_5 = _iterator__ex2g4s_24.next_20eer_k$();
              var sondIdx = _destruct__k2r9zo_5.component1_7eebsc_k$();
              var decoded = _destruct__k2r9zo_5.component2_7eebsb_k$();
              if (!(decoded == null)) {
                var tmp0_7 = this.externalAudoMap9__1;
                var value_5 = this.parsedAudio8__1.get_size_woubt6_k$();
                tmp0_7.put_4fpzoq_k$(sondIdx, value_5);
                this.parsedAudio8__1.add_utx5q5_k$(decoded);
                this.audioGroupCount11__1 = this.audioGroupCount11__1 + 1 | 0;
              }
            }

            this.externalCount10__1 = 0;
            this.log6__1('Decoding non-embedded audio files...');
            this.set_state_rjd8d0_k$(7);
            suspendResult = coroutineScope(processDataWin$slambda_4(this.dw5__1, this.externalAudoMap9__1, this.externalAudioFiles_1, this.audioDecoder_1, this.log6__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var externalDecodes = suspendResult;
            var _iterator__ex2g4s_25 = externalDecodes.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_25.hasNext_bitz1p_k$()) {
              var _destruct__k2r9zo_6 = _iterator__ex2g4s_25.next_20eer_k$();
              var sondIdx_0 = _destruct__k2r9zo_6.component1_7eebsc_k$();
              var decoded_0 = _destruct__k2r9zo_6.component2_7eebsb_k$();
              if (!(decoded_0 == null)) {
                var tmp0_8 = this.externalAudoMap9__1;
                var value_6 = this.parsedAudio8__1.get_size_woubt6_k$();
                tmp0_8.put_4fpzoq_k$(sondIdx_0, value_6);
                this.parsedAudio8__1.add_utx5q5_k$(decoded_0);
                this.externalCount10__1 = this.externalCount10__1 + 1 | 0;
              }
            }

            var tmp0_9 = this.parsedAudio8__1;
            var tmp$ret$18;
            l$ret$19: do {
              var tmp_26;
              if (isInterface(tmp0_9, Collection)) {
                tmp_26 = tmp0_9.isEmpty_y1axqb_k$();
              } else {
                tmp_26 = false;
              }
              if (tmp_26) {
                tmp$ret$18 = 0;
                break l$ret$19;
              }
              var count_7 = 0;
              var _iterator__ex2g4s_26 = tmp0_9.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_26.hasNext_bitz1p_k$()) {
                var element_10 = _iterator__ex2g4s_26.next_20eer_k$();
                if (!(element_10 == null)) {
                  count_7 = count_7 + 1 | 0;
                  checkCountOverflow(count_7);
                }
              }
              tmp$ret$18 = count_7;
            }
             while (false);
            var totalDecoded = tmp$ret$18;
            var failedCount = this.parsedAudio8__1.get_size_woubt6_k$() - totalDecoded | 0;
            this.log6__1('  ' + this.embeddedCount12__1 + ' embedded + ' + this.audioGroupCount11__1 + ' from audiogroups + ' + this.externalCount10__1 + ' external = ' + totalDecoded + ' decoded sounds, ' + failedCount + ' failed or empty');
            var tmp_27 = this;
            tmp_27.musEntries7__1 = ArrayList_init_$Create$_0();
            if (!this.musFiles_1.isEmpty_y1axqb_k$()) {
              this.log6__1('Decoding ' + this.musFiles_1.get_size_woubt6_k$() + ' streamed music files...');
              this.set_state_rjd8d0_k$(8);
              suspendResult = coroutineScope(processDataWin$slambda_6(this.musFiles_1, this.audioDecoder_1, this.log6__1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            }

          case 8:
            var musDecodes = suspendResult;
            var _iterator__ex2g4s_27 = musDecodes.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_27.hasNext_bitz1p_k$()) {
              var _destruct__k2r9zo_7 = _iterator__ex2g4s_27.next_20eer_k$();
              var path = _destruct__k2r9zo_7.component1_7eebsc_k$();
              var decoded_1 = _destruct__k2r9zo_7.component2_7eebsb_k$();
              if (!(decoded_1 == null)) {
                this.musEntries7__1.add_utx5q5_k$(new processDataWin$MusEntry(path, decoded_1));
              }
            }

            this.log6__1('  ' + this.musEntries7__1.get_size_woubt6_k$() + '/' + this.musFiles_1.get_size_woubt6_k$() + ' music files decoded');
            this.set_state_rjd8d0_k$(9);
            continue $sm;
          case 9:
            var soundsWriter = new ByteWriter();
            var audioOffsets = new Int32Array(this.parsedAudio8__1.get_size_woubt6_k$());
            var audioSizes = new Int32Array(this.parsedAudio8__1.get_size_woubt6_k$());
            var iterator_2 = this.parsedAudio8__1.iterator_jk1svi_k$();
            var index_2 = 0;
            while (iterator_2.hasNext_bitz1p_k$()) {
              var i_1 = index_2;
              index_2 = index_2 + 1 | 0;
              var audio = iterator_2.next_20eer_k$();
              if (!(audio == null)) {
                audioOffsets[i_1] = soundsWriter.get_size_woubt6_k$();
                audioSizes[i_1] = audio.data_1.length;
                soundsWriter.writeByteArray_uu44pq_k$(audio.data_1);
              }
            }

            var musOffsets = new Int32Array(this.musEntries7__1.get_size_woubt6_k$());
            var musSizes = new Int32Array(this.musEntries7__1.get_size_woubt6_k$());
            var iterator_3 = this.musEntries7__1.iterator_jk1svi_k$();
            var index_3 = 0;
            while (iterator_3.hasNext_bitz1p_k$()) {
              var i_2 = index_3;
              index_3 = index_3 + 1 | 0;
              var entry_0 = iterator_3.next_20eer_k$();
              musOffsets[i_2] = soundsWriter.get_size_woubt6_k$();
              musSizes[i_2] = entry_0.audio_1.data_1.length;
              soundsWriter.writeByteArray_uu44pq_k$(entry_0.audio_1.data_1);
            }

            var soundsBin = soundsWriter.getAsByteArray_tshzr_k$();
            var tmp0_10 = this.parsedAudio8__1;
            var tmp$ret$20;
            l$ret$21: do {
              var tmp_28;
              if (isInterface(tmp0_10, Collection)) {
                tmp_28 = tmp0_10.isEmpty_y1axqb_k$();
              } else {
                tmp_28 = false;
              }
              if (tmp_28) {
                tmp$ret$20 = 0;
                break l$ret$21;
              }
              var count_8 = 0;
              var _iterator__ex2g4s_28 = tmp0_10.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_28.hasNext_bitz1p_k$()) {
                var element_11 = _iterator__ex2g4s_28.next_20eer_k$();
                if (!(element_11 == null) && element_11.format_1 === 0) {
                  count_8 = count_8 + 1 | 0;
                  checkCountOverflow(count_8);
                }
              }
              tmp$ret$20 = count_8;
            }
             while (false);
            var pcmCount = tmp$ret$20;
            var tmp0_11 = this.parsedAudio8__1;
            var tmp$ret$22;
            l$ret$23: do {
              var tmp_29;
              if (isInterface(tmp0_11, Collection)) {
                tmp_29 = tmp0_11.isEmpty_y1axqb_k$();
              } else {
                tmp_29 = false;
              }
              if (tmp_29) {
                tmp$ret$22 = 0;
                break l$ret$23;
              }
              var count_9 = 0;
              var _iterator__ex2g4s_29 = tmp0_11.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_29.hasNext_bitz1p_k$()) {
                var element_12 = _iterator__ex2g4s_29.next_20eer_k$();
                if (!(element_12 == null) && element_12.format_1 === 1) {
                  count_9 = count_9 + 1 | 0;
                  checkCountOverflow(count_9);
                }
              }
              tmp$ret$22 = count_9;
            }
             while (false);
            var adpcmCount = tmp$ret$22;
            this.log6__1('  SOUNDS.BIN: ' + soundsBin.length + ' bytes (' + pcmCount + ' PCM, ' + adpcmCount + ' ADPCM, ' + this.musEntries7__1.get_size_woubt6_k$() + ' music tracks)');
            var soundBnkWriter = new ByteWriter();
            soundBnkWriter.writeByte_1arzrz_k$(0);
            soundBnkWriter.writeShortLE_62so5q_k$(this.dw5__1.get_sond_woufyz_k$().get_sounds_jl0ua5_k$().get_size_woubt6_k$());
            soundBnkWriter.writeShortLE_62so5q_k$(this.parsedAudio8__1.get_size_woubt6_k$());
            soundBnkWriter.writeShortLE_62so5q_k$(this.musEntries7__1.get_size_woubt6_k$());
            var iterator_4 = this.dw5__1.get_sond_woufyz_k$().get_sounds_jl0ua5_k$().iterator_jk1svi_k$();
            var index_4 = 0;
            while (iterator_4.hasNext_bitz1p_k$()) {
              var sondIdx_1 = index_4;
              index_4 = index_4 + 1 | 0;
              var sound = iterator_4.next_20eer_k$();
              var tmp8_elvis_lhs = this.externalAudoMap9__1.get_wei43m_k$(sondIdx_1);
              var audoIndex = tmp8_elvis_lhs == null ? 0 > sound.get_audioFile_bmbemh_k$() || sound.get_audioFile_bmbemh_k$() >= this.parsedAudio8__1.get_size_woubt6_k$() ? 65535 : sound.get_audioFile_bmbemh_k$() : tmp8_elvis_lhs;
              soundBnkWriter.writeShortLE_62so5q_k$(audoIndex);
              soundBnkWriter.writeIntLE_y9sr6p_k$(sound.get_flags_irfhb2_k$());
              soundBnkWriter.writeShortLE_62so5q_k$(numberToInt(sound.get_volume_l003z7_k$() * 256));
              soundBnkWriter.writeShortLE_62so5q_k$(numberToInt(sound.get_pitch_iwvw9j_k$() * 256));
              soundBnkWriter.writeShortLE_62so5q_k$(0);
            }

            var iterator_5 = this.parsedAudio8__1.iterator_jk1svi_k$();
            var index_5 = 0;
            while (iterator_5.hasNext_bitz1p_k$()) {
              var i_3 = index_5;
              index_5 = index_5 + 1 | 0;
              var audio_0 = iterator_5.next_20eer_k$();
              if (!(audio_0 == null)) {
                soundBnkWriter.writeIntLE_y9sr6p_k$(audioOffsets[i_3]);
                soundBnkWriter.writeIntLE_y9sr6p_k$(audioSizes[i_3]);
                soundBnkWriter.writeShortLE_62so5q_k$(audio_0.sampleRate_1);
                soundBnkWriter.writeByte_1arzrz_k$(audio_0.channels_1);
                soundBnkWriter.writeByte_1arzrz_k$(audio_0.bitsPerSample_1);
                soundBnkWriter.writeByte_1arzrz_k$(audio_0.format_1);
                soundBnkWriter.writeByte_1arzrz_k$(0);
                soundBnkWriter.writeShortLE_62so5q_k$(0);
                soundBnkWriter.writeIntLE_y9sr6p_k$(audio_0.sampleCount_1);
              } else {
                soundBnkWriter.writeIntLE_y9sr6p_k$(0);
                soundBnkWriter.writeIntLE_y9sr6p_k$(0);
                soundBnkWriter.writeShortLE_62so5q_k$(0);
                soundBnkWriter.writeByte_1arzrz_k$(0);
                soundBnkWriter.writeByte_1arzrz_k$(0);
                soundBnkWriter.writeByte_1arzrz_k$(0);
                soundBnkWriter.writeByte_1arzrz_k$(0);
                soundBnkWriter.writeShortLE_62so5q_k$(0);
                soundBnkWriter.writeIntLE_y9sr6p_k$(0);
              }
            }

            var _iterator__ex2g4s_30 = this.musEntries7__1.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_30.hasNext_bitz1p_k$()) {
              var entry_1 = _iterator__ex2g4s_30.next_20eer_k$();
              var nameBytes = encodeToByteArray(entry_1.path_1);
              soundBnkWriter.writeByte_1arzrz_k$(nameBytes.length);
              soundBnkWriter.writeByteArray_uu44pq_k$(nameBytes);
            }

            var iterator_6 = this.musEntries7__1.iterator_jk1svi_k$();
            var index_6 = 0;
            while (iterator_6.hasNext_bitz1p_k$()) {
              var i_4 = index_6;
              index_6 = index_6 + 1 | 0;
              var entry_2 = iterator_6.next_20eer_k$();
              soundBnkWriter.writeIntLE_y9sr6p_k$(musOffsets[i_4]);
              soundBnkWriter.writeIntLE_y9sr6p_k$(musSizes[i_4]);
              soundBnkWriter.writeShortLE_62so5q_k$(entry_2.audio_1.sampleRate_1);
              soundBnkWriter.writeByte_1arzrz_k$(entry_2.audio_1.channels_1);
              soundBnkWriter.writeByte_1arzrz_k$(entry_2.audio_1.format_1);
              soundBnkWriter.writeIntLE_y9sr6p_k$(entry_2.audio_1.sampleCount_1);
            }

            var soundBnkBin = soundBnkWriter.getAsByteArray_tshzr_k$();
            this.log6__1('Done!');
            var tmp9_elvis_lhs = this.dw5__1.get_gen8_womkoh_k$().get_displayName_sscnb0_k$();
            var tmp10_elvis_lhs = tmp9_elvis_lhs == null ? this.dw5__1.get_gen8_womkoh_k$().get_name_woqyms_k$() : tmp9_elvis_lhs;
            return new ProcessingResult(tmp10_elvis_lhs == null ? 'GAME' : tmp10_elvis_lhs, this.clut4Bin4__1, this.clut8Bin3__1, this.texturesBin2__1, this.atlasBin1__1, soundBnkBin, soundsBin, this.atlases0__1);
          case 10:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 10) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  var properties_initialized_ProcessingPipeline_kt_b1hybb;
  function _init_properties_ProcessingPipeline_kt__6atp9x() {
    if (!properties_initialized_ProcessingPipeline_kt_b1hybb) {
      properties_initialized_ProcessingPipeline_kt_b1hybb = true;
      // Inline function 'kotlin.intArrayOf' call
      IMA_STEP_TABLE = new Int32Array([7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 21, 23, 25, 28, 31, 34, 37, 41, 45, 50, 55, 60, 66, 73, 80, 88, 97, 107, 118, 130, 143, 157, 173, 190, 209, 230, 253, 279, 307, 337, 371, 408, 449, 494, 544, 598, 658, 724, 796, 876, 963, 1060, 1166, 1282, 1411, 1552, 1707, 1878, 2066, 2272, 2499, 2749, 3024, 3327, 3660, 4026, 4428, 4871, 5358, 5894, 6484, 7132, 7845, 8630, 9493, 10442, 11487, 12635, 13899, 15289, 16818, 18500, 20350, 22385, 24623, 27086, 29794, 32767]);
      // Inline function 'kotlin.intArrayOf' call
      IMA_INDEX_TABLE = new Int32Array([-1, -1, -1, -1, 2, 4, 6, 8, -1, -1, -1, -1, 2, 4, 6, 8]);
      OMEGA_FLOWEY_PREFIXES = listOf(['spr_floweyx_tv', 'spr_tvinside', 'spr_lefteye_', 'spr_flipeye_', 'spr_floweyx_mouth', 'spr_floweyx_dimple', 'spr_mouthball', 'spr_mouthbeam', 'spr_mouthflash', 'spr_floweyx_fleshmound', 'spr_fleshmound', 'spr_nostrils', 'spr_dentata_', 'spr_halfdentata_', 'spr_floweyx_flame', 'spr_floweynuke', 'spr_venus_placeholder', 'spr_bgpipe', 'spr_pipepart', 'spr_sidestalk', 'spr_vines_flowey', 'spr_floweyarm', 'spr_tv_warning', 'spr_tv_exface', 'spr_tv_floweyface', 'spr_tv_floweyx_', 'spr_noise']);
    }
  }
  function decodeQoi(data) {
    // Inline function 'kotlin.require' call
    if (!(data.length >= 12)) {
      var message = 'QOI: blob too small';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = data[0];
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(102);
    var tmp$ret$2 = Char__toInt_impl_vasixd(this_0);
    if (tmp_2 === toByte(tmp$ret$2)) {
      var tmp_3 = data[1];
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(105);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_1);
      tmp_1 = tmp_3 === toByte(tmp$ret$3);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = data[2];
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(111);
      var tmp$ret$4 = Char__toInt_impl_vasixd(this_2);
      tmp_0 = tmp_4 === toByte(tmp$ret$4);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = data[3];
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(113);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_3);
      tmp = tmp_5 === toByte(tmp$ret$5);
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message_0 = 'QOI: bad magic';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var width = data[4] & 255 | (data[5] & 255) << 8;
    var height = data[6] & 255 | (data[7] & 255) << 8;
    var length = data[8] & 255 | (data[9] & 255) << 8 | (data[10] & 255) << 16 | (data[11] & 255) << 24;
    // Inline function 'kotlin.require' call
    if (!(width > 0 && height > 0)) {
      var message_1 = 'QOI: bad dimensions';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    if (!((12 + length | 0) <= data.length)) {
      var message_2 = 'QOI: truncated payload';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    var pixelDataSize = length;
    var pixelDataBase = 12;
    var pixelCount = imul(width, height);
    var pixels = new Int32Array(pixelCount);
    var index = new Int32Array(64);
    var pos = 0;
    var run = 0;
    var r = 0;
    var g = 0;
    var b = 0;
    var a = 255;
    var rawPos = 0;
    while (pixelCount > rawPos) {
      if (run > 0) {
        run = run - 1 | 0;
      } else if (pixelDataSize > pos) {
        var b1 = data[pixelDataBase + pos | 0] & 255;
        pos = pos + 1 | 0;
        if ((b1 & 192) === 0) {
          var argb = index[b1 & 63];
          a = (argb >>> 24 | 0) & 255;
          r = (argb >>> 16 | 0) & 255;
          g = (argb >>> 8 | 0) & 255;
          b = argb & 255;
        } else if ((b1 & 224) === 64) {
          run = b1 & 31;
        } else if ((b1 & 224) === 96) {
          // Inline function 'kotlin.require' call
          if (!(pixelDataSize > pos)) {
            var message_3 = 'QOI: truncated RUN_16';
            throw IllegalArgumentException_init_$Create$(toString(message_3));
          }
          var b2 = data[pixelDataBase + pos | 0] & 255;
          pos = pos + 1 | 0;
          run = ((b1 & 31) << 8 | b2) + 32 | 0;
        } else if ((b1 & 192) === 128) {
          r = (r + signExtend((b1 >>> 4 | 0) & 3, 2) | 0) & 255;
          g = (g + signExtend((b1 >>> 2 | 0) & 3, 2) | 0) & 255;
          b = (b + signExtend(b1 & 3, 2) | 0) & 255;
        } else if ((b1 & 224) === 192) {
          // Inline function 'kotlin.require' call
          if (!(pixelDataSize > pos)) {
            var message_4 = 'QOI: truncated DIFF_16';
            throw IllegalArgumentException_init_$Create$(toString(message_4));
          }
          var b2_0 = data[pixelDataBase + pos | 0] & 255;
          pos = pos + 1 | 0;
          var merged = b1 << 8 | b2_0;
          r = (r + signExtend((merged >>> 8 | 0) & 31, 5) | 0) & 255;
          g = (g + signExtend((merged >>> 4 | 0) & 15, 4) | 0) & 255;
          b = (b + signExtend(merged & 15, 4) | 0) & 255;
        } else if ((b1 & 240) === 224) {
          // Inline function 'kotlin.require' call
          if (!(pixelDataSize > (pos + 1 | 0))) {
            var message_5 = 'QOI: truncated DIFF_24';
            throw IllegalArgumentException_init_$Create$(toString(message_5));
          }
          var b2_1 = data[pixelDataBase + pos | 0] & 255;
          var b3 = data[(pixelDataBase + pos | 0) + 1 | 0] & 255;
          pos = pos + 2 | 0;
          var merged_0 = b1 << 16 | b2_1 << 8 | b3;
          r = (r + signExtend((merged_0 >>> 15 | 0) & 31, 5) | 0) & 255;
          g = (g + signExtend((merged_0 >>> 10 | 0) & 31, 5) | 0) & 255;
          b = (b + signExtend((merged_0 >>> 5 | 0) & 31, 5) | 0) & 255;
          a = (a + signExtend(merged_0 & 31, 5) | 0) & 255;
        } else if ((b1 & 240) === 240) {
          if (!((b1 & 8) === 0)) {
            // Inline function 'kotlin.require' call
            // Inline function 'kotlin.require' call
            if (!(pixelDataSize > pos)) {
              var message_6 = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message_6));
            }
            r = data[pixelDataBase + pos | 0] & 255;
            pos = pos + 1 | 0;
          }
          if (!((b1 & 4) === 0)) {
            // Inline function 'kotlin.require' call
            // Inline function 'kotlin.require' call
            if (!(pixelDataSize > pos)) {
              var message_7 = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message_7));
            }
            g = data[pixelDataBase + pos | 0] & 255;
            pos = pos + 1 | 0;
          }
          if (!((b1 & 2) === 0)) {
            // Inline function 'kotlin.require' call
            // Inline function 'kotlin.require' call
            if (!(pixelDataSize > pos)) {
              var message_8 = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message_8));
            }
            b = data[pixelDataBase + pos | 0] & 255;
            pos = pos + 1 | 0;
          }
          if (!((b1 & 1) === 0)) {
            // Inline function 'kotlin.require' call
            // Inline function 'kotlin.require' call
            if (!(pixelDataSize > pos)) {
              var message_9 = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message_9));
            }
            a = data[pixelDataBase + pos | 0] & 255;
            pos = pos + 1 | 0;
          }
        }
        var indexPos = (r ^ g ^ b ^ a) & 63;
        index[indexPos] = a << 24 | r << 16 | g << 8 | b;
      }
      pixels[rawPos] = a << 24 | r << 16 | g << 8 | b;
      rawPos = rawPos + 1 | 0;
    }
    return new PixelImage(width, height, pixels);
  }
  function signExtend(value, bits) {
    var mask = 1 << (bits - 1 | 0);
    return ((value ^ mask) - mask | 0) & 255;
  }
  function _get_MAX_BLOCKSIZE_LOG__drwfuv($this) {
    return $this.MAX_BLOCKSIZE_LOG_1;
  }
  function _get_MAX_BLOCKSIZE__4qruki($this) {
    return $this.MAX_BLOCKSIZE_1;
  }
  function _get_STB_VORBIS_MAX_CHANNELS__zhlck8($this) {
    return $this.STB_VORBIS_MAX_CHANNELS_1;
  }
  function _get_STB_VORBIS_FAST_HUFFMAN_LENGTH__530m66($this) {
    return $this.STB_VORBIS_FAST_HUFFMAN_LENGTH_1;
  }
  function _get_FAST_HUFFMAN_TABLE_SIZE__mk0qq2($this) {
    return $this.FAST_HUFFMAN_TABLE_SIZE_1;
  }
  function _get_FAST_HUFFMAN_TABLE_MASK__mgkq7z($this) {
    return $this.FAST_HUFFMAN_TABLE_MASK_1;
  }
  function _get_NO_CODE__8eupja($this) {
    return $this.NO_CODE_1;
  }
  function _get_EOP__e5mqgb($this) {
    return $this.EOP_1;
  }
  function _get_INVALID_BITS__mqvwbn($this) {
    return $this.INVALID_BITS_1;
  }
  function _get_PAGEFLAG_CONTINUED_PACKET__fmcvr1($this) {
    return $this.PAGEFLAG_CONTINUED_PACKET_1;
  }
  function _get_PAGEFLAG_FIRST_PAGE__4388k1($this) {
    return $this.PAGEFLAG_FIRST_PAGE_1;
  }
  function _get_PAGEFLAG_LAST_PAGE__dn1kc7($this) {
    return $this.PAGEFLAG_LAST_PAGE_1;
  }
  function _get_VORBIS_PACKET_ID__pkybk5($this) {
    return $this.VORBIS_PACKET_ID_1;
  }
  function _get_VORBIS_PACKET_COMMENT__gaf8gt($this) {
    return $this.VORBIS_PACKET_COMMENT_1;
  }
  function _get_VORBIS_PACKET_SETUP__snmwn3($this) {
    return $this.VORBIS_PACKET_SETUP_1;
  }
  function _get_SAMPLE_UNKNOWN__rmeyui($this) {
    return $this.SAMPLE_UNKNOWN_1;
  }
  function _get_M_PI__csl11c($this) {
    return $this.M_PI_1;
  }
  function _get_CRC32_POLY__ieodub($this) {
    return $this.CRC32_POLY_1;
  }
  function _get_crcTable__1edftb($this) {
    return $this.crcTable_1;
  }
  function _set_crcInitialized__3x4tvt($this, _set____db54di) {
    $this.crcInitialized_1 = _set____db54di;
  }
  function _get_crcInitialized__llym5n($this) {
    return $this.crcInitialized_1;
  }
  function crc32Init($this) {
    if ($this.crcInitialized_1)
      return Unit_getInstance();
    var inductionVariable = 0;
    if (inductionVariable < 256)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var s = i << 24;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 8)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            s = s << 1 ^ (compare(bitwiseAnd(fromInt(s), new Long(-1, 0)), new Long(-2147483648, 0)) >= 0 ? 79764919 : 0);
          }
           while (inductionVariable_0 < 8);
        $this.crcTable_1[i] = s;
      }
       while (inductionVariable < 256);
    $this.crcInitialized_1 = true;
  }
  function crc32Update($this, crc, byte) {
    return crc << 8 ^ $this.crcTable_1[(byte ^ (crc >>> 24 | 0)) & 255];
  }
  function _get_inverseDbTable__psam51($this) {
    return $this.inverseDbTable_1;
  }
  function _get_oggPageHeader__tof1hi($this) {
    return $this.oggPageHeader_1;
  }
  function bitReverse($this, n) {
    var x = n;
    x = (x & -1431655766) >>> 1 | 0 | (x & 1431655765) << 1;
    x = (x & -858993460) >>> 2 | 0 | (x & 858993459) << 2;
    x = (x & -252645136) >>> 4 | 0 | (x & 252645135) << 4;
    x = (x & -16711936) >>> 8 | 0 | (x & 16711935) << 8;
    return x >>> 16 | 0 | x << 16;
  }
  function ilog($this, n) {
    // Inline function 'kotlin.intArrayOf' call
    var log2_4 = new Int32Array([0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4]);
    if (0 > n)
      return 0;
    if (16384 > n) {
      if (16 > n)
        return 0 + log2_4[n] | 0;
      else if (512 > n)
        return 5 + log2_4[n >>> 5 | 0] | 0;
      else
        return 10 + log2_4[n >>> 10 | 0] | 0;
    } else if (16777216 > n) {
      if (524288 > n)
        return 15 + log2_4[n >>> 15 | 0] | 0;
      else
        return 20 + log2_4[n >>> 20 | 0] | 0;
    } else {
      if (536870912 > n)
        return 25 + log2_4[n >>> 25 | 0] | 0;
      else
        return 30 + log2_4[n >>> 30 | 0] | 0;
    }
  }
  function float32Unpack($this, x) {
    var mantissa = x & 2097151;
    var sign = x & -2147483648;
    var exp = (x & 2145386496) >>> 21 | 0;
    var res = !(sign === 0) ? -mantissa : mantissa;
    // Inline function 'kotlin.math.pow' call
    var n = exp - 788 | 0;
    return res * Math.pow(2.0, n);
  }
  function lookup1Values($this, entries, dim) {
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.exp' call
    var x = Math.log(entries) / dim;
    // Inline function 'kotlin.math.floor' call
    var x_0 = Math.exp(x);
    var tmp$ret$2 = Math.floor(x_0);
    var r = numberToInt(tmp$ret$2);
    // Inline function 'kotlin.math.pow' call
    var this_0 = r + 1 | 0;
    // Inline function 'kotlin.math.floor' call
    var x_1 = Math.pow(this_0, dim);
    var tmp$ret$4 = Math.floor(x_1);
    if (numberToInt(tmp$ret$4) <= entries) {
      r = r + 1 | 0;
    }
    // Inline function 'kotlin.math.pow' call
    var this_1 = r + 1 | 0;
    if (Math.pow(this_1, dim) <= entries)
      return -1;
    // Inline function 'kotlin.math.pow' call
    var this_2 = r;
    // Inline function 'kotlin.math.floor' call
    var x_2 = Math.pow(this_2, dim);
    var tmp$ret$7 = Math.floor(x_2);
    if (numberToInt(tmp$ret$7) > entries)
      return -1;
    return r;
  }
  function findNeighbors($this, x, n, plow, phigh) {
    var low = -1;
    var high = 65536;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var xi = x[i] & 65535;
        var xn = x[n] & 65535;
        if (xi > low && xi < xn) {
          plow[0] = i;
          low = xi;
        }
        if (xi < high && xi > xn) {
          phigh[0] = i;
          high = xi;
        }
      }
       while (inductionVariable < n);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.MAX_BLOCKSIZE_LOG_1 = 13;
    this.MAX_BLOCKSIZE_1 = 8192;
    this.STB_VORBIS_MAX_CHANNELS_1 = 16;
    this.STB_VORBIS_FAST_HUFFMAN_LENGTH_1 = 10;
    this.FAST_HUFFMAN_TABLE_SIZE_1 = 1024;
    this.FAST_HUFFMAN_TABLE_MASK_1 = 1023;
    this.NO_CODE_1 = 255;
    this.EOP_1 = -1;
    this.INVALID_BITS_1 = -1;
    this.PAGEFLAG_CONTINUED_PACKET_1 = 1;
    this.PAGEFLAG_FIRST_PAGE_1 = 2;
    this.PAGEFLAG_LAST_PAGE_1 = 4;
    this.VORBIS_PACKET_ID_1 = 1;
    this.VORBIS_PACKET_COMMENT_1 = 3;
    this.VORBIS_PACKET_SETUP_1 = 5;
    this.SAMPLE_UNKNOWN_1 = _UInt___init__impl__l7qpdl(-1);
    this.M_PI_1 = 3.1415927;
    this.CRC32_POLY_1 = 79764919;
    this.crcTable_1 = new Int32Array(256);
    this.crcInitialized_1 = false;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.inverseDbTable_1 = new Float32Array([1.0649863E-7, 1.1341951E-7, 1.2079015E-7, 1.2863978E-7, 1.369995E-7, 1.459025E-7, 1.5538409E-7, 1.6548181E-7, 1.7623574E-7, 1.8768856E-7, 1.998856E-7, 2.128753E-7, 2.2670913E-7, 2.4144197E-7, 2.5713223E-7, 2.7384212E-7, 2.9163792E-7, 3.1059022E-7, 3.307741E-7, 3.5226967E-7, 3.7516213E-7, 3.995423E-7, 4.255068E-7, 4.5315863E-7, 4.8260745E-7, 5.1397E-7, 5.4737063E-7, 5.829419E-7, 6.208247E-7, 6.611694E-7, 7.041359E-7, 7.4989464E-7, 7.98627E-7, 8.505263E-7, 9.057983E-7, 9.646621E-7, 1.0273513E-6, 1.0941144E-6, 1.1652161E-6, 1.2409384E-6, 1.3215816E-6, 1.4074654E-6, 1.4989305E-6, 1.5963394E-6, 1.7000785E-6, 1.8105592E-6, 1.9282195E-6, 2.053526E-6, 2.1869757E-6, 2.3290977E-6, 2.4804558E-6, 2.6416496E-6, 2.813319E-6, 2.9961443E-6, 3.1908505E-6, 3.39821E-6, 3.619045E-6, 3.8542307E-6, 4.1047006E-6, 4.371447E-6, 4.6555283E-6, 4.958071E-6, 5.280274E-6, 5.623416E-6, 5.988857E-6, 6.3780467E-6, 6.7925284E-6, 7.2339453E-6, 7.704048E-6, 8.2047E-6, 8.737888E-6, 9.305725E-6, 9.910464E-6, 1.0554501E-5, 1.1240392E-5, 1.1970856E-5, 1.2748789E-5, 1.3577278E-5, 1.4459606E-5, 1.5399271E-5, 1.6400005E-5, 1.7465769E-5, 1.8600793E-5, 1.9809577E-5, 2.1096914E-5, 2.2467912E-5, 2.3928002E-5, 2.5482977E-5, 2.7139005E-5, 2.890265E-5, 3.078091E-5, 3.2781227E-5, 3.4911533E-5, 3.718028E-5, 3.9596467E-5, 4.2169668E-5, 4.491009E-5, 4.7828602E-5, 5.0936775E-5, 5.424693E-5, 5.7772202E-5, 6.152657E-5, 6.552491E-5, 6.9783084E-5, 7.4317984E-5, 7.914758E-5, 8.429104E-5, 8.976875E-5, 9.560242E-5, 1.0181521E-4, 1.0843174E-4, 1.1547824E-4, 1.2298267E-4, 1.3097477E-4, 1.3948625E-4, 1.4855085E-4, 1.5820454E-4, 1.6848555E-4, 1.7943469E-4, 1.9109536E-4, 2.0351382E-4, 2.167393E-4, 2.3082423E-4, 2.4582449E-4, 2.6179955E-4, 2.7881275E-4, 2.9693157E-4, 3.1622787E-4, 3.3677815E-4, 3.5866388E-4, 3.8197188E-4, 4.0679457E-4, 4.3323037E-4, 4.613841E-4, 4.913675E-4, 5.2329927E-4, 5.573062E-4, 5.935231E-4, 6.320936E-4, 6.731706E-4, 7.16917E-4, 7.635063E-4, 8.1312325E-4, 8.6596457E-4, 9.2223985E-4, 9.821722E-4, 0.0010459992, 0.0011139743, 0.0011863665, 0.0012634633, 0.0013455702, 0.0014330129, 0.0015261382, 0.0016253153, 0.0017309374, 0.0018434235, 0.0019632196, 0.0020908006, 0.0022266726, 0.0023713743, 0.0025254795, 0.0026895993, 0.0028643848, 0.0030505287, 0.003248769, 0.0034598925, 0.0036847359, 0.0039241905, 0.0041792067, 0.004450795, 0.004740033, 0.005048067, 0.0053761187, 0.005725489, 0.0060975635, 0.0064938175, 0.0069158226, 0.0073652514, 0.007843887, 0.008353627, 0.008896492, 0.009474637, 0.010090352, 0.01074608, 0.011444421, 0.012188144, 0.012980198, 0.013823725, 0.014722068, 0.015678791, 0.016697686, 0.017782796, 0.018938422, 0.020169148, 0.021479854, 0.022875736, 0.02436233, 0.025945531, 0.027631618, 0.029427277, 0.031339627, 0.03337625, 0.035545226, 0.037855156, 0.0403152, 0.042935107, 0.045725275, 0.048696756, 0.05186135, 0.05523159, 0.05882085, 0.062643364, 0.06671428, 0.07104975, 0.075666964, 0.08058423, 0.08582105, 0.09139818, 0.097337745, 0.1036633, 0.11039993, 0.11757434, 0.12521498, 0.13335215, 0.14201812, 0.15124726, 0.16107617, 0.1715438, 0.18269168, 0.19456401, 0.20720787, 0.22067343, 0.23501402, 0.25028655, 0.26655158, 0.28387362, 0.3023213, 0.32196787, 0.34289113, 0.36517414, 0.3889052, 0.41417846, 0.44109413, 0.4697589, 0.50028646, 0.53279793, 0.5674221, 0.6042964, 0.64356697, 0.6853896, 0.72993004, 0.777365, 0.8278826, 0.88168305, 0.9389798, 1.0]);
    var tmp_0 = this;
    // Inline function 'kotlin.byteArrayOf' call
    tmp_0.oggPageHeader_1 = new Int8Array([79, 103, 103, 83]);
  }
  protoOf(Companion_1).openMemory_i9ugfp_k$ = function (data) {
    var p = new StbVorbis();
    vorbisInit(p);
    p.stream_1 = data;
    p.streamPosition_1 = 0;
    p.streamEnd_1 = data.length;
    p.streamLen_1 = data.length;
    if (startDecoder(p)) {
      vorbisPumpFirstFrame(p);
      return new Pair(p, STBVorbisError_NO_ERROR_getInstance());
    }
    var err = p.lastError_1;
    return new Pair(null, err);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Codebook() {
    this.dimensions_1 = 0;
    this.entries_1 = 0;
    this.codewordLengths_1 = null;
    this.minimumValue_1 = 0.0;
    this.deltaValue_1 = 0.0;
    this.valueBits_1 = 0;
    this.lookupType_1 = 0;
    this.sequenceP_1 = 0;
    this.sparse_1 = 0;
    this.lookupValues_1 = 0;
    this.multiplicands_1 = null;
    this.codewords_1 = null;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int16Array(1024);
    while (tmp_0 < 1024) {
      tmp_1[tmp_0] = -1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.fastHuffman_1 = tmp_1;
    this.sortedCodewords_1 = null;
    this.sortedValues_1 = null;
    this.sortedValuesSentinel_1 = -1;
    this.sortedEntries_1 = 0;
  }
  protoOf(Codebook).set_dimensions_9y50n2_k$ = function (_set____db54di) {
    this.dimensions_1 = _set____db54di;
  };
  protoOf(Codebook).get_dimensions_dbkfqi_k$ = function () {
    return this.dimensions_1;
  };
  protoOf(Codebook).set_entries_otslth_k$ = function (_set____db54di) {
    this.entries_1 = _set____db54di;
  };
  protoOf(Codebook).get_entries_p20ztl_k$ = function () {
    return this.entries_1;
  };
  protoOf(Codebook).set_codewordLengths_vmlwqq_k$ = function (_set____db54di) {
    this.codewordLengths_1 = _set____db54di;
  };
  protoOf(Codebook).get_codewordLengths_tejoyb_k$ = function () {
    return this.codewordLengths_1;
  };
  protoOf(Codebook).set_minimumValue_93rc2w_k$ = function (_set____db54di) {
    this.minimumValue_1 = _set____db54di;
  };
  protoOf(Codebook).get_minimumValue_o9jfws_k$ = function () {
    return this.minimumValue_1;
  };
  protoOf(Codebook).set_deltaValue_4qp5ci_k$ = function (_set____db54di) {
    this.deltaValue_1 = _set____db54di;
  };
  protoOf(Codebook).get_deltaValue_6v2xia_k$ = function () {
    return this.deltaValue_1;
  };
  protoOf(Codebook).set_valueBits_ke4gr2_k$ = function (_set____db54di) {
    this.valueBits_1 = _set____db54di;
  };
  protoOf(Codebook).get_valueBits_45ogpe_k$ = function () {
    return this.valueBits_1;
  };
  protoOf(Codebook).set_lookupType_xcqhef_k$ = function (_set____db54di) {
    this.lookupType_1 = _set____db54di;
  };
  protoOf(Codebook).get_lookupType_1bt6cd_k$ = function () {
    return this.lookupType_1;
  };
  protoOf(Codebook).set_sequenceP_56mh4m_k$ = function (_set____db54di) {
    this.sequenceP_1 = _set____db54di;
  };
  protoOf(Codebook).get_sequenceP_9wjcai_k$ = function () {
    return this.sequenceP_1;
  };
  protoOf(Codebook).set_sparse_80giwl_k$ = function (_set____db54di) {
    this.sparse_1 = _set____db54di;
  };
  protoOf(Codebook).get_sparse_jl7yg9_k$ = function () {
    return this.sparse_1;
  };
  protoOf(Codebook).set_lookupValues_bdxg8f_k$ = function (_set____db54di) {
    this.lookupValues_1 = _set____db54di;
  };
  protoOf(Codebook).get_lookupValues_1pcmm3_k$ = function () {
    return this.lookupValues_1;
  };
  protoOf(Codebook).set_multiplicands_xme2ib_k$ = function (_set____db54di) {
    this.multiplicands_1 = _set____db54di;
  };
  protoOf(Codebook).get_multiplicands_a0urfi_k$ = function () {
    return this.multiplicands_1;
  };
  protoOf(Codebook).set_codewords_4bpu8l_k$ = function (_set____db54di) {
    this.codewords_1 = _set____db54di;
  };
  protoOf(Codebook).get_codewords_9rd39p_k$ = function () {
    return this.codewords_1;
  };
  protoOf(Codebook).set_fastHuffman_y8y7zg_k$ = function (_set____db54di) {
    this.fastHuffman_1 = _set____db54di;
  };
  protoOf(Codebook).get_fastHuffman_v2t8w8_k$ = function () {
    return this.fastHuffman_1;
  };
  protoOf(Codebook).set_sortedCodewords_xf3kgi_k$ = function (_set____db54di) {
    this.sortedCodewords_1 = _set____db54di;
  };
  protoOf(Codebook).get_sortedCodewords_4mzex6_k$ = function () {
    return this.sortedCodewords_1;
  };
  protoOf(Codebook).set_sortedValues_h9ym7c_k$ = function (_set____db54di) {
    this.sortedValues_1 = _set____db54di;
  };
  protoOf(Codebook).get_sortedValues_kkbtzc_k$ = function () {
    return this.sortedValues_1;
  };
  protoOf(Codebook).set_sortedValuesSentinel_s7392w_k$ = function (_set____db54di) {
    this.sortedValuesSentinel_1 = _set____db54di;
  };
  protoOf(Codebook).get_sortedValuesSentinel_witzjo_k$ = function () {
    return this.sortedValuesSentinel_1;
  };
  protoOf(Codebook).set_sortedEntries_84nl7y_k$ = function (_set____db54di) {
    this.sortedEntries_1 = _set____db54di;
  };
  protoOf(Codebook).get_sortedEntries_vxaql2_k$ = function () {
    return this.sortedEntries_1;
  };
  function Floor1() {
    this.partitions_1 = 0;
    this.partitionClassList_1 = new Int32Array(32);
    this.classDimensions_1 = new Int32Array(16);
    this.classSubclasses_1 = new Int32Array(16);
    this.classMasterbooks_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(16);
    while (tmp_0 < 16) {
      tmp_1[tmp_0] = new Int16Array(8);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.subclassBooks_1 = tmp_1;
    this.xList_1 = new Int16Array(250);
    this.sortedOrder_1 = new Int32Array(250);
    var tmp_2 = this;
    var tmp_3 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_4 = Array(250);
    while (tmp_3 < 250) {
      tmp_4[tmp_3] = new Int32Array(2);
      tmp_3 = tmp_3 + 1 | 0;
    }
    tmp_2.neighbors_1 = tmp_4;
    this.floor1Multiplier_1 = 0;
    this.rangebits_1 = 0;
    this.values_1 = 0;
  }
  protoOf(Floor1).set_partitions_ua2txa_k$ = function (_set____db54di) {
    this.partitions_1 = _set____db54di;
  };
  protoOf(Floor1).get_partitions_ji5zfy_k$ = function () {
    return this.partitions_1;
  };
  protoOf(Floor1).set_partitionClassList_1ckz72_k$ = function (_set____db54di) {
    this.partitionClassList_1 = _set____db54di;
  };
  protoOf(Floor1).get_partitionClassList_2hdjpn_k$ = function () {
    return this.partitionClassList_1;
  };
  protoOf(Floor1).set_classDimensions_coo1ub_k$ = function (_set____db54di) {
    this.classDimensions_1 = _set____db54di;
  };
  protoOf(Floor1).get_classDimensions_92cww4_k$ = function () {
    return this.classDimensions_1;
  };
  protoOf(Floor1).set_classSubclasses_dypc9y_k$ = function (_set____db54di) {
    this.classSubclasses_1 = _set____db54di;
  };
  protoOf(Floor1).get_classSubclasses_h732j9_k$ = function () {
    return this.classSubclasses_1;
  };
  protoOf(Floor1).set_classMasterbooks_wlmmj2_k$ = function (_set____db54di) {
    this.classMasterbooks_1 = _set____db54di;
  };
  protoOf(Floor1).get_classMasterbooks_o01uwp_k$ = function () {
    return this.classMasterbooks_1;
  };
  protoOf(Floor1).set_subclassBooks_68nmmf_k$ = function (_set____db54di) {
    this.subclassBooks_1 = _set____db54di;
  };
  protoOf(Floor1).get_subclassBooks_upnbh3_k$ = function () {
    return this.subclassBooks_1;
  };
  protoOf(Floor1).set_xList_cpnt75_k$ = function (_set____db54di) {
    this.xList_1 = _set____db54di;
  };
  protoOf(Floor1).get_xList_j0riml_k$ = function () {
    return this.xList_1;
  };
  protoOf(Floor1).set_sortedOrder_gaiimx_k$ = function (_set____db54di) {
    this.sortedOrder_1 = _set____db54di;
  };
  protoOf(Floor1).get_sortedOrder_on1714_k$ = function () {
    return this.sortedOrder_1;
  };
  protoOf(Floor1).set_neighbors_7ssmnd_k$ = function (_set____db54di) {
    this.neighbors_1 = _set____db54di;
  };
  protoOf(Floor1).get_neighbors_fjnriw_k$ = function () {
    return this.neighbors_1;
  };
  protoOf(Floor1).set_floor1Multiplier_nyzelh_k$ = function (_set____db54di) {
    this.floor1Multiplier_1 = _set____db54di;
  };
  protoOf(Floor1).get_floor1Multiplier_bfyx3j_k$ = function () {
    return this.floor1Multiplier_1;
  };
  protoOf(Floor1).set_rangebits_ukkbs2_k$ = function (_set____db54di) {
    this.rangebits_1 = _set____db54di;
  };
  protoOf(Floor1).get_rangebits_3wq6zq_k$ = function () {
    return this.rangebits_1;
  };
  protoOf(Floor1).set_values_el5fxz_k$ = function (_set____db54di) {
    this.values_1 = _set____db54di;
  };
  protoOf(Floor1).get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  function Residue() {
    this.begin_1 = 0;
    this.end_1 = 0;
    this.partSize_1 = 0;
    this.classifications_1 = 0;
    this.classbook_1 = 0;
    this.classdata_1 = null;
    this.residueBooks_1 = null;
  }
  protoOf(Residue).set_begin_r483no_k$ = function (_set____db54di) {
    this.begin_1 = _set____db54di;
  };
  protoOf(Residue).get_begin_ip3yio_k$ = function () {
    return this.begin_1;
  };
  protoOf(Residue).set_end_2o0hu2_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  protoOf(Residue).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(Residue).set_partSize_1gq3kn_k$ = function (_set____db54di) {
    this.partSize_1 = _set____db54di;
  };
  protoOf(Residue).get_partSize_c5ig0z_k$ = function () {
    return this.partSize_1;
  };
  protoOf(Residue).set_classifications_htzk7s_k$ = function (_set____db54di) {
    this.classifications_1 = _set____db54di;
  };
  protoOf(Residue).get_classifications_mo0sx0_k$ = function () {
    return this.classifications_1;
  };
  protoOf(Residue).set_classbook_fwzjjw_k$ = function (_set____db54di) {
    this.classbook_1 = _set____db54di;
  };
  protoOf(Residue).get_classbook_8czx6g_k$ = function () {
    return this.classbook_1;
  };
  protoOf(Residue).set_classdata_mmg7h_k$ = function (_set____db54di) {
    this.classdata_1 = _set____db54di;
  };
  protoOf(Residue).get_classdata_8d0wvt_k$ = function () {
    return this.classdata_1;
  };
  protoOf(Residue).set_residueBooks_3fk4hf_k$ = function (_set____db54di) {
    this.residueBooks_1 = _set____db54di;
  };
  protoOf(Residue).get_residueBooks_g4qnmw_k$ = function () {
    return this.residueBooks_1;
  };
  function MappingChannel() {
    this.magnitude_1 = 0;
    this.angle_1 = 0;
    this.mux_1 = 0;
  }
  protoOf(MappingChannel).set_magnitude_g28bij_k$ = function (_set____db54di) {
    this.magnitude_1 = _set____db54di;
  };
  protoOf(MappingChannel).get_magnitude_ou7v6h_k$ = function () {
    return this.magnitude_1;
  };
  protoOf(MappingChannel).set_angle_51nze6_k$ = function (_set____db54di) {
    this.angle_1 = _set____db54di;
  };
  protoOf(MappingChannel).get_angle_iopwve_k$ = function () {
    return this.angle_1;
  };
  protoOf(MappingChannel).set_mux_yhn5px_k$ = function (_set____db54di) {
    this.mux_1 = _set____db54di;
  };
  protoOf(MappingChannel).get_mux_18j0d5_k$ = function () {
    return this.mux_1;
  };
  function Mapping() {
    this.couplingSteps_1 = 0;
    this.chan_1 = null;
    this.submaps_1 = 0;
    this.submapFloor_1 = new Int32Array(15);
    this.submapResidue_1 = new Int32Array(15);
  }
  protoOf(Mapping).set_couplingSteps_picazp_k$ = function (_set____db54di) {
    this.couplingSteps_1 = _set____db54di;
  };
  protoOf(Mapping).get_couplingSteps_56gubl_k$ = function () {
    return this.couplingSteps_1;
  };
  protoOf(Mapping).set_chan_6cigxe_k$ = function (_set____db54di) {
    this.chan_1 = _set____db54di;
  };
  protoOf(Mapping).get_chan_wok2or_k$ = function () {
    return this.chan_1;
  };
  protoOf(Mapping).set_submaps_djypbm_k$ = function (_set____db54di) {
    this.submaps_1 = _set____db54di;
  };
  protoOf(Mapping).get_submaps_tmhh5e_k$ = function () {
    return this.submaps_1;
  };
  protoOf(Mapping).set_submapFloor_ejy96g_k$ = function (_set____db54di) {
    this.submapFloor_1 = _set____db54di;
  };
  protoOf(Mapping).get_submapFloor_xw1jix_k$ = function () {
    return this.submapFloor_1;
  };
  protoOf(Mapping).set_submapResidue_c30zxl_k$ = function (_set____db54di) {
    this.submapResidue_1 = _set____db54di;
  };
  protoOf(Mapping).get_submapResidue_5ea0d6_k$ = function () {
    return this.submapResidue_1;
  };
  function Mode() {
    this.blockflag_1 = 0;
    this.mapping_1 = 0;
    this.windowtype_1 = 0;
    this.transformtype_1 = 0;
  }
  protoOf(Mode).set_blockflag_io65lg_k$ = function (_set____db54di) {
    this.blockflag_1 = _set____db54di;
  };
  protoOf(Mode).get_blockflag_my9xhs_k$ = function () {
    return this.blockflag_1;
  };
  protoOf(Mode).set_mapping_wee16x_k$ = function (_set____db54di) {
    this.mapping_1 = _set____db54di;
  };
  protoOf(Mode).get_mapping_f47opx_k$ = function () {
    return this.mapping_1;
  };
  protoOf(Mode).set_windowtype_vxkpdt_k$ = function (_set____db54di) {
    this.windowtype_1 = _set____db54di;
  };
  protoOf(Mode).get_windowtype_an8h4j_k$ = function () {
    return this.windowtype_1;
  };
  protoOf(Mode).set_transformtype_hj6335_k$ = function (_set____db54di) {
    this.transformtype_1 = _set____db54di;
  };
  protoOf(Mode).get_transformtype_tlcn0j_k$ = function () {
    return this.transformtype_1;
  };
  function ProbedPage() {
    this.pageStart_1 = 0;
    this.pageEnd_1 = 0;
    this.lastDecodedSample_1 = 0;
  }
  protoOf(ProbedPage).set_pageStart_8ksrpu_k$ = function (_set____db54di) {
    this.pageStart_1 = _set____db54di;
  };
  protoOf(ProbedPage).get_pageStart_my5pbe_k$ = function () {
    return this.pageStart_1;
  };
  protoOf(ProbedPage).set_pageEnd_3dp96h_k$ = function (_set____db54di) {
    this.pageEnd_1 = _set____db54di;
  };
  protoOf(ProbedPage).get_pageEnd_c0vfh9_k$ = function () {
    return this.pageEnd_1;
  };
  protoOf(ProbedPage).set_lastDecodedSample_ie8mpn_k$ = function (_set____db54di) {
    this.lastDecodedSample_1 = _set____db54di;
  };
  protoOf(ProbedPage).get_lastDecodedSample_brp2xr_k$ = function () {
    return this.lastDecodedSample_1;
  };
  function _set_sampleRate__dt1r6b($this, _set____db54di) {
    $this.sampleRate_1 = _set____db54di;
  }
  function _set_channels__9jos8p($this, _set____db54di) {
    $this.channels_1 = _set____db54di;
  }
  function _set_stream__57gplj($this, _set____db54di) {
    $this.stream_1 = _set____db54di;
  }
  function _get_stream__6o7a8b($this) {
    return $this.stream_1;
  }
  function _set_streamPosition__meiqhe($this, _set____db54di) {
    $this.streamPosition_1 = _set____db54di;
  }
  function _get_streamPosition__34kpk2($this) {
    return $this.streamPosition_1;
  }
  function _set_streamEnd__c20oa($this, _set____db54di) {
    $this.streamEnd_1 = _set____db54di;
  }
  function _get_streamEnd__tmwh2u($this) {
    return $this.streamEnd_1;
  }
  function _set_streamLen__c6b5c($this, _set____db54di) {
    $this.streamLen_1 = _set____db54di;
  }
  function _get_streamLen__tn0rjw($this) {
    return $this.streamLen_1;
  }
  function _set_firstAudioPageOffset__wj50of($this, _set____db54di) {
    $this.firstAudioPageOffset_1 = _set____db54di;
  }
  function _get_firstAudioPageOffset__il2co3($this) {
    return $this.firstAudioPageOffset_1;
  }
  function _set_pFirst__aaltrr($this, _set____db54di) {
    $this.pFirst_1 = _set____db54di;
  }
  function _get_pFirst__brceej($this) {
    return $this.pFirst_1;
  }
  function _set_pLast__ir0gkf($this, _set____db54di) {
    $this.pLast_1 = _set____db54di;
  }
  function _get_pLast__da3zx1($this) {
    return $this.pLast_1;
  }
  function _set_eof__4w5955($this, _set____db54di) {
    $this.eof_1 = _set____db54di;
  }
  function _get_eof__e67uad($this) {
    return $this.eof_1;
  }
  function _set_lastError__pibeod($this, _set____db54di) {
    $this.lastError_1 = _set____db54di;
  }
  function _set_blocksize__tcob61($this, _set____db54di) {
    $this.blocksize_1 = _set____db54di;
  }
  function _get_blocksize__1turh($this) {
    return $this.blocksize_1;
  }
  function _set_blocksize0__dhj379($this, _set____db54di) {
    $this.blocksize0__1 = _set____db54di;
  }
  function _get_blocksize0__1kphxz($this) {
    return $this.blocksize0__1;
  }
  function _set_blocksize1__dhj384($this, _set____db54di) {
    $this.blocksize1__1 = _set____db54di;
  }
  function _get_blocksize1__1kphx4($this) {
    return $this.blocksize1__1;
  }
  function _set_codebookCount__jlsefg($this, _set____db54di) {
    $this.codebookCount_1 = _set____db54di;
  }
  function _get_codebookCount__4e0vx4($this) {
    return $this.codebookCount_1;
  }
  function _set_codebooks__bw33ig($this, _set____db54di) {
    $this.codebooks_1 = _set____db54di;
  }
  function _get_codebooks__tu6i24($this) {
    return $this.codebooks_1;
  }
  function _set_floorCount__yk56jw($this, _set____db54di) {
    $this.floorCount_1 = _set____db54di;
  }
  function _get_floorCount__leqaa0($this) {
    return $this.floorCount_1;
  }
  function _set_floorTypes__qcz1jq($this, _set____db54di) {
    $this.floorTypes_1 = _set____db54di;
  }
  function _get_floorTypes__tlwfa6($this) {
    return $this.floorTypes_1;
  }
  function _set_floorConfig__5zroo9($this, _set____db54di) {
    $this.floorConfig_1 = _set____db54di;
  }
  function _get_floorConfig__oamhnn($this) {
    return $this.floorConfig_1;
  }
  function _set_residueCount__fak9rh($this, _set____db54di) {
    $this.residueCount_1 = _set____db54di;
  }
  function _get_residueCount__96gsn($this) {
    return $this.residueCount_1;
  }
  function _set_residueTypes__73e4rb($this, _set____db54di) {
    $this.residueTypes_1 = _set____db54di;
  }
  function _get_residueTypes__8gclst($this) {
    return $this.residueTypes_1;
  }
  function _set_residueConfig__n0c3zs($this, _set____db54di) {
    $this.residueConfig_1 = _set____db54di;
  }
  function _get_residueConfig__7sklhg($this) {
    return $this.residueConfig_1;
  }
  function _set_mappingCount__t3chw6($this, _set____db54di) {
    $this.mappingCount_1 = _set____db54di;
  }
  function _get_mappingCount__qe0tiu($this) {
    return $this.mappingCount_1;
  }
  function _set_mappings__529xbi($this, _set____db54di) {
    $this.mappings_1 = _set____db54di;
  }
  function _get_mappings__hv68sa($this) {
    return $this.mappings_1;
  }
  function _set_modeCount__za6yg7($this, _set____db54di) {
    $this.modeCount_1 = _set____db54di;
  }
  function _get_modeCount__5zci1n($this) {
    return $this.modeCount_1;
  }
  function _set_modeConfig__sfaphq($this, _set____db54di) {
    $this.modeConfig_1 = _set____db54di;
  }
  function _get_modeConfig__rjkrc6($this) {
    return $this.modeConfig_1;
  }
  function _set_totalSamples__d9bq36($this, _set____db54di) {
    $this.totalSamples_1 = _set____db54di;
  }
  function _get_totalSamples__st2gna($this) {
    return $this.totalSamples_1;
  }
  function _set_channelBuffers__d9m3c7($this, _set____db54di) {
    $this.channelBuffers_1 = _set____db54di;
  }
  function _get_channelBuffers__w8eilh($this) {
    return $this.channelBuffers_1;
  }
  function _set_outputs__93bowd($this, _set____db54di) {
    $this.outputs_1 = _set____db54di;
  }
  function _get_outputs__ypjz9d($this) {
    return $this.outputs_1;
  }
  function _set_outputOffsets__u7lv4q($this, _set____db54di) {
    $this.outputOffsets_1 = _set____db54di;
  }
  function _get_outputOffsets__plqoc2($this) {
    return $this.outputOffsets_1;
  }
  function _set_previousWindow__6ks7qo($this, _set____db54di) {
    $this.previousWindow_1 = _set____db54di;
  }
  function _get_previousWindow__w3vns4($this) {
    return $this.previousWindow_1;
  }
  function _set_previousLength__epha12($this, _set____db54di) {
    $this.previousLength_1 = _set____db54di;
  }
  function _get_previousLength__atm60e($this) {
    return $this.previousLength_1;
  }
  function _set_finalY__m7vtn8($this, _set____db54di) {
    $this.finalY_1 = _set____db54di;
  }
  function _get_finalY__nomea0($this) {
    return $this.finalY_1;
  }
  function _set_currentLoc__66zuds($this, _set____db54di) {
    $this.currentLoc_1 = _set____db54di;
  }
  function _get_currentLoc__l98fj0($this) {
    return $this.currentLoc_1;
  }
  function _set_currentLocValid__lrkd0w($this, _set____db54di) {
    $this.currentLocValid_1 = _set____db54di;
  }
  function _get_currentLocValid__vvakjg($this) {
    return $this.currentLocValid_1;
  }
  function _set_tA__dl8gt2($this, _set____db54di) {
    $this.tA_1 = _set____db54di;
  }
  function _get_tA__ndcafy($this) {
    return $this.tA_1;
  }
  function _set_tB__dl8gs7($this, _set____db54di) {
    $this.tB_1 = _set____db54di;
  }
  function _get_tB__ndcagt($this) {
    return $this.tB_1;
  }
  function _set_tC__dl8grc($this, _set____db54di) {
    $this.tC_1 = _set____db54di;
  }
  function _get_tC__ndcaho($this) {
    return $this.tC_1;
  }
  function _set_windowData__f40hzx($this, _set____db54di) {
    $this.windowData_1 = _set____db54di;
  }
  function _get_windowData__1rwup($this) {
    return $this.windowData_1;
  }
  function _set_bitReverseData__v3it7s($this, _set____db54di) {
    $this.bitReverseData_1 = _set____db54di;
  }
  function _get_bitReverseData__5kfd6c($this) {
    return $this.bitReverseData_1;
  }
  function _set_serial__1w52e5($this, _set____db54di) {
    $this.serial_1 = _set____db54di;
  }
  function _get_serial__fehrd($this) {
    return $this.serial_1;
  }
  function _set_lastPage__nvs9a($this, _set____db54di) {
    $this.lastPage_1 = _set____db54di;
  }
  function _get_lastPage__dgs3q2($this) {
    return $this.lastPage_1;
  }
  function _set_segmentCount__rv2rln($this, _set____db54di) {
    $this.segmentCount_1 = _set____db54di;
  }
  function _get_segmentCount__rmajtd($this) {
    return $this.segmentCount_1;
  }
  function _set_segments__adzo6v($this, _set____db54di) {
    $this.segments_1 = _set____db54di;
  }
  function _get_segments__2ewn9x($this) {
    return $this.segments_1;
  }
  function _set_pageFlag__jhmfl0($this, _set____db54di) {
    $this.pageFlag_1 = _set____db54di;
  }
  function _get_pageFlag__wair1s($this) {
    return $this.pageFlag_1;
  }
  function _set_bytesInSeg__mzfdvy($this, _set____db54di) {
    $this.bytesInSeg_1 = _set____db54di;
  }
  function _get_bytesInSeg__wzg2xy($this) {
    return $this.bytesInSeg_1;
  }
  function _set_firstDecode__l9nyfb($this, _set____db54di) {
    $this.firstDecode_1 = _set____db54di;
  }
  function _get_firstDecode__jh1x7x($this) {
    return $this.firstDecode_1;
  }
  function _set_nextSeg__dax5cz($this, _set____db54di) {
    $this.nextSeg_1 = _set____db54di;
  }
  function _get_nextSeg__cbb501($this) {
    return $this.nextSeg_1;
  }
  function _set_lastSeg__ye0zne($this, _set____db54di) {
    $this.lastSeg_1 = _set____db54di;
  }
  function _get_lastSeg__b0uryq($this) {
    return $this.lastSeg_1;
  }
  function _set_lastSegWhich__fsfiav($this, _set____db54di) {
    $this.lastSegWhich_1 = _set____db54di;
  }
  function _get_lastSegWhich__8orqr($this) {
    return $this.lastSegWhich_1;
  }
  function _set_acc__4w2g84($this, _set____db54di) {
    $this.acc_1 = _set____db54di;
  }
  function _get_acc__e651dc($this) {
    return $this.acc_1;
  }
  function _set_validBits__iwhbz7($this, _set____db54di) {
    $this.validBits_1 = _set____db54di;
  }
  function _get_validBits__mts9ld($this) {
    return $this.validBits_1;
  }
  function _set_packetBytes__s64g2m($this, _set____db54di) {
    $this.packetBytes_1 = _set____db54di;
  }
  function _get_packetBytes__249q9a($this) {
    return $this.packetBytes_1;
  }
  function _set_endSegWithKnownLoc__fc0x4q($this, _set____db54di) {
    $this.endSegWithKnownLoc_1 = _set____db54di;
  }
  function _get_endSegWithKnownLoc__iludzm($this) {
    return $this.endSegWithKnownLoc_1;
  }
  function _set_knownLocForPacket__rdgkj3($this, _set____db54di) {
    $this.knownLocForPacket_1 = _set____db54di;
  }
  function _get_knownLocForPacket__lxul5p($this) {
    return $this.knownLocForPacket_1;
  }
  function _set_discardSamplesDeferred__3i9qkt($this, _set____db54di) {
    $this.discardSamplesDeferred_1 = _set____db54di;
  }
  function _get_discardSamplesDeferred__prd70h($this) {
    return $this.discardSamplesDeferred_1;
  }
  function _set_samplesOutput__4acijp($this, _set____db54di) {
    $this.samplesOutput_1 = _set____db54di;
  }
  function _get_samplesOutput__ji4121($this) {
    return $this.samplesOutput_1;
  }
  function _set_channelBufferStart__n2rkw8($this, _set____db54di) {
    $this.channelBufferStart_1 = _set____db54di;
  }
  function _get_channelBufferStart__e0h5yk($this) {
    return $this.channelBufferStart_1;
  }
  function _set_channelBufferEnd__z2szkv($this, _set____db54di) {
    $this.channelBufferEnd_1 = _set____db54di;
  }
  function _get_channelBufferEnd__6v6tbh($this) {
    return $this.channelBufferEnd_1;
  }
  function vorbisInit($this) {
    $this.eof_1 = false;
    $this.lastError_1 = STBVorbisError_NO_ERROR_getInstance();
    $this.codebooks_1 = null;
  }
  function get8($this) {
    if ($this.streamPosition_1 >= $this.streamEnd_1) {
      $this.eof_1 = true;
      return 0;
    }
    var tmp = $this.stream_1;
    var _unary__edvuaz = $this.streamPosition_1;
    $this.streamPosition_1 = _unary__edvuaz + 1 | 0;
    return tmp[_unary__edvuaz] & 255;
  }
  function get32($this) {
    var x = get8($this);
    x = x + (get8($this) << 8) | 0;
    x = x + (get8($this) << 16) | 0;
    x = x + (get8($this) << 24) | 0;
    return x;
  }
  function getn($this, data, offset, n) {
    if (($this.streamPosition_1 + n | 0) > $this.streamEnd_1) {
      $this.eof_1 = true;
      return false;
    }
    var tmp0 = $this.stream_1;
    var tmp6 = $this.streamPosition_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = $this.streamPosition_1 + n | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, data, offset, tmp6, endIndex);
    $this.streamPosition_1 = $this.streamPosition_1 + n | 0;
    return true;
  }
  function getn_0($this, data, offset, n) {
    if (($this.streamPosition_1 + n | 0) > $this.streamEnd_1) {
      $this.eof_1 = true;
      return false;
    }
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = offset + i | 0;
        var tmp_0 = $this.stream_1;
        var _unary__edvuaz = $this.streamPosition_1;
        $this.streamPosition_1 = _unary__edvuaz + 1 | 0;
        data[tmp] = tmp_0[_unary__edvuaz] & 255;
      }
       while (inductionVariable < n);
    return true;
  }
  function skip($this, n) {
    $this.streamPosition_1 = $this.streamPosition_1 + n | 0;
    if ($this.streamPosition_1 >= $this.streamEnd_1)
      $this.eof_1 = true;
  }
  function setFileOffset($this, loc) {
    $this.eof_1 = false;
    if (loc >= $this.streamEnd_1 || 0 > loc) {
      $this.streamPosition_1 = $this.streamEnd_1;
      $this.eof_1 = true;
      return false;
    } else {
      $this.streamPosition_1 = loc;
      return true;
    }
  }
  function getFileOffset($this) {
    return $this.streamPosition_1;
  }
  function setError($this, e) {
    $this.lastError_1 = e;
    return false;
  }
  function capturePattern($this) {
    if (!(79 === get8($this)))
      return false;
    if (!(103 === get8($this)))
      return false;
    if (!(103 === get8($this)))
      return false;
    if (!(83 === get8($this)))
      return false;
    return true;
  }
  function startPageNoCapturePattern($this) {
    if ($this.firstDecode_1) {
      $this.pFirst_1.pageStart_1 = getFileOffset($this) - 4 | 0;
    }
    if (!(0 === get8($this)))
      return setError($this, STBVorbisError_INVALID_STREAM_STRUCTURE_VERSION_getInstance());
    $this.pageFlag_1 = get8($this);
    var loc0 = get32($this);
    var loc1 = get32($this);
    get32($this);
    var n = get32($this);
    $this.lastPage_1 = n;
    get32($this);
    $this.segmentCount_1 = get8($this);
    if (!getn_0($this, $this.segments_1, 0, $this.segmentCount_1))
      return setError($this, STBVorbisError_UNEXPECTED_EOF_getInstance());
    $this.endSegWithKnownLoc_1 = -2;
    if (!(loc0 === -1) || !(loc1 === -1)) {
      var i = $this.segmentCount_1 - 1 | 0;
      $l$loop: while (i >= 0 && 255 <= $this.segments_1[i]) {
        i = i - 1 | 0;
      }
      if (i >= 0) {
        $this.endSegWithKnownLoc_1 = i;
        $this.knownLocForPacket_1 = loc0;
      }
    }
    if ($this.firstDecode_1) {
      var len = 0;
      var inductionVariable = 0;
      var last = $this.segmentCount_1;
      if (inductionVariable < last)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          len = len + $this.segments_1[i_0] | 0;
        }
         while (inductionVariable < last);
      len = len + (27 + $this.segmentCount_1 | 0) | 0;
      $this.pFirst_1.pageEnd_1 = $this.pFirst_1.pageStart_1 + len | 0;
      $this.pFirst_1.lastDecodedSample_1 = loc0;
    }
    $this.nextSeg_1 = 0;
    return true;
  }
  function startPage($this) {
    if (!capturePattern($this))
      return setError($this, STBVorbisError_MISSING_CAPTURE_PATTERN_getInstance());
    return startPageNoCapturePattern($this);
  }
  function startPacket($this) {
    while ($this.nextSeg_1 === -1) {
      if (!startPage($this))
        return false;
      if (!(($this.pageFlag_1 & 1) === 0))
        return setError($this, STBVorbisError_CONTINUED_PACKET_FLAG_INVALID_getInstance());
    }
    $this.lastSeg_1 = false;
    $this.validBits_1 = 0;
    $this.packetBytes_1 = 0;
    $this.bytesInSeg_1 = 0;
    return true;
  }
  function maybeStartPacket($this) {
    if ($this.nextSeg_1 === -1) {
      var x = get8($this);
      if ($this.eof_1)
        return false;
      if (!(79 === x))
        return setError($this, STBVorbisError_MISSING_CAPTURE_PATTERN_getInstance());
      if (!(103 === get8($this)))
        return setError($this, STBVorbisError_MISSING_CAPTURE_PATTERN_getInstance());
      if (!(103 === get8($this)))
        return setError($this, STBVorbisError_MISSING_CAPTURE_PATTERN_getInstance());
      if (!(83 === get8($this)))
        return setError($this, STBVorbisError_MISSING_CAPTURE_PATTERN_getInstance());
      if (!startPageNoCapturePattern($this))
        return false;
      if (!(($this.pageFlag_1 & 1) === 0)) {
        $this.lastSeg_1 = false;
        $this.bytesInSeg_1 = 0;
        return setError($this, STBVorbisError_CONTINUED_PACKET_FLAG_INVALID_getInstance());
      }
    }
    return startPacket($this);
  }
  function nextSegment($this) {
    if ($this.lastSeg_1)
      return 0;
    if ($this.nextSeg_1 === -1) {
      $this.lastSegWhich_1 = $this.segmentCount_1 - 1 | 0;
      if (!startPage($this)) {
        $this.lastSeg_1 = true;
        return 0;
      }
      if (($this.pageFlag_1 & 1) === 0) {
        setError($this, STBVorbisError_CONTINUED_PACKET_FLAG_INVALID_getInstance());
        return 0;
      }
    }
    var tmp = $this.segments_1;
    var _unary__edvuaz = $this.nextSeg_1;
    $this.nextSeg_1 = _unary__edvuaz + 1 | 0;
    var len = tmp[_unary__edvuaz];
    if (255 > len) {
      $this.lastSeg_1 = true;
      $this.lastSegWhich_1 = $this.nextSeg_1 - 1 | 0;
    }
    if ($this.nextSeg_1 >= $this.segmentCount_1)
      $this.nextSeg_1 = -1;
    $this.bytesInSeg_1 = len;
    return len;
  }
  function get8PacketRaw($this) {
    if ($this.bytesInSeg_1 === 0) {
      if ($this.lastSeg_1)
        return -1;
      else if (nextSegment($this) === 0)
        return -1;
    }
    $this.bytesInSeg_1 = $this.bytesInSeg_1 - 1 | 0;
    $this.packetBytes_1 = $this.packetBytes_1 + 1 | 0;
    return get8($this);
  }
  function get8Packet($this) {
    var x = get8PacketRaw($this);
    $this.validBits_1 = 0;
    return x;
  }
  function get32Packet($this) {
    var x = get8Packet($this);
    x = x + (get8Packet($this) << 8) | 0;
    x = x + (get8Packet($this) << 16) | 0;
    x = x + (get8Packet($this) << 24) | 0;
    return x;
  }
  function flushPacket($this) {
    while (!(get8PacketRaw($this) === -1)) {
    }
  }
  function getBits($this, n) {
    if (0 > $this.validBits_1)
      return 0;
    if (n > $this.validBits_1) {
      if (24 < n) {
        var z = getBits($this, 24);
        return z + (getBits($this, n - 24 | 0) << 24) | 0;
      }
      if ($this.validBits_1 === 0)
        $this.acc_1 = 0;
      while (n > $this.validBits_1) {
        var z_0 = get8PacketRaw($this);
        if (z_0 === -1) {
          $this.validBits_1 = -1;
          return 0;
        }
        $this.acc_1 = $this.acc_1 + (z_0 << $this.validBits_1) | 0;
        $this.validBits_1 = $this.validBits_1 + 8 | 0;
      }
    }
    var z_1 = $this.acc_1 & ((1 << n) - 1 | 0);
    $this.acc_1 = $this.acc_1 >>> n | 0;
    $this.validBits_1 = $this.validBits_1 - n | 0;
    return z_1;
  }
  function prepHuffman($this) {
    if (24 >= $this.validBits_1) {
      if ($this.validBits_1 === 0)
        $this.acc_1 = 0;
      do {
        if ($this.lastSeg_1 && $this.bytesInSeg_1 === 0)
          return Unit_getInstance();
        var z = get8PacketRaw($this);
        if (z === -1)
          return Unit_getInstance();
        $this.acc_1 = $this.acc_1 + (z << $this.validBits_1) | 0;
        $this.validBits_1 = $this.validBits_1 + 8 | 0;
      }
       while (24 >= $this.validBits_1);
    }
  }
  function addEntry($this, c, huffCode, symbol, count, len, values) {
    if (c.sparse_1 === 0) {
      ensureNotNull(c.codewords_1)[symbol] = huffCode;
    } else {
      ensureNotNull(c.codewords_1)[count] = huffCode;
      ensureNotNull(c.codewordLengths_1)[count] = toByte(len);
      ensureNotNull(values)[count] = symbol;
    }
  }
  function computeCodewords($this, c, len, n, values) {
    var m = 0;
    var available = new Int32Array(32);
    var k = 0;
    $l$loop: while (k < n && (len[k] & 255) >= 255) {
      k = k + 1 | 0;
    }
    if (k === n)
      return true;
    var tmp = k;
    var _unary__edvuaz = m;
    m = _unary__edvuaz + 1 | 0;
    addEntry($this, c, 0, tmp, _unary__edvuaz, len[k] & 255, values);
    var inductionVariable = 1;
    var last = len[k] & 255;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        available[i] = 1 << (32 - i | 0);
      }
       while (!(i === last));
    var inductionVariable_0 = k + 1 | 0;
    if (inductionVariable_0 < n)
      $l$loop_0: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var z0 = len[i_0] & 255;
        if (z0 === 255)
          continue $l$loop_0;
        var z = z0;
        while (z > 0 && available[z] === 0) {
          z = z - 1 | 0;
        }
        if (z === 0)
          return false;
        var res = available[z];
        available[z] = 0;
        var tmp_0 = bitReverse(Companion_getInstance_1(), res);
        var _unary__edvuaz_0 = m;
        m = _unary__edvuaz_0 + 1 | 0;
        addEntry($this, c, tmp_0, i_0, _unary__edvuaz_0, len[i_0] & 255, values);
        if (!(z === z0)) {
          var y = z0;
          while (y > z) {
            available[y] = res + (1 << (32 - y | 0)) | 0;
            y = y - 1 | 0;
          }
        }
      }
       while (inductionVariable_0 < n);
    return true;
  }
  function computeAcceleratedHuffman($this, c) {
    var inductionVariable = 0;
    if (inductionVariable < 1024)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        c.fastHuffman_1[i] = -1;
      }
       while (inductionVariable < 1024);
    var len = !(c.sparse_1 === 0) ? c.sortedEntries_1 : c.entries_1;
    if (32767 < len)
      len = 32767;
    var inductionVariable_0 = 0;
    var last = len;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if ((ensureNotNull(c.codewordLengths_1)[i_0] & 255) <= 10) {
          var z = !(c.sparse_1 === 0) ? bitReverse(Companion_getInstance_1(), ensureNotNull(c.sortedCodewords_1)[i_0]) : ensureNotNull(c.codewords_1)[i_0];
          while (1024 > z) {
            c.fastHuffman_1[z] = toShort(i_0);
            z = z + (1 << (ensureNotNull(c.codewordLengths_1)[i_0] & 255)) | 0;
          }
        }
      }
       while (inductionVariable_0 < last);
  }
  function includeInSort($this, c, len) {
    if (!(c.sparse_1 === 0))
      return true;
    if (len === 255)
      return false;
    if (10 < len)
      return true;
    return false;
  }
  function computeSortedHuffman($this, c, lengths, values) {
    if (c.sparse_1 === 0) {
      var k = 0;
      var inductionVariable = 0;
      var last = c.entries_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (includeInSort($this, c, lengths[i] & 255)) {
            var tmp = ensureNotNull(c.sortedCodewords_1);
            var _unary__edvuaz = k;
            k = _unary__edvuaz + 1 | 0;
            tmp[_unary__edvuaz] = bitReverse(Companion_getInstance_1(), ensureNotNull(c.codewords_1)[i]);
          }
        }
         while (inductionVariable < last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = c.sortedEntries_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          ensureNotNull(c.sortedCodewords_1)[i_0] = bitReverse(Companion_getInstance_1(), ensureNotNull(c.codewords_1)[i_0]);
        }
         while (inductionVariable_0 < last_0);
    }
    var sc = ensureNotNull(c.sortedCodewords_1);
    var sortedPart = copyOfRange_0(sc, 0, c.sortedEntries_1);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = sortedArray(sortedPart);
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, sc, 0, 0, endIndex);
    var tmp_1 = until(0, c.sortedEntries_1);
    var tmp_2 = StbVorbis$computeSortedHuffman$lambda(sortedPart);
    var indices = sortedWith(tmp_1, new sam$kotlin_Comparator$0_5(tmp_2));
    var tmp_3 = 0;
    var tmp_4 = c.sortedEntries_1;
    var tmp_5 = new Int32Array(tmp_4);
    while (tmp_3 < tmp_4) {
      var tmp_6 = tmp_3;
      tmp_5[tmp_6] = sortedPart[indices.get_c1px32_k$(tmp_6)];
      tmp_3 = tmp_3 + 1 | 0;
    }
    var sorted = tmp_5;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = sorted.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = sorted;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_7, sc, 0, 0, endIndex_0);
    sc[c.sortedEntries_1] = -1;
    var len2 = !(c.sparse_1 === 0) ? c.sortedEntries_1 : c.entries_1;
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < len2)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var huffLen = !(c.sparse_1 === 0) ? lengths[ensureNotNull(values)[i_1]] & 255 : lengths[i_1] & 255;
        if (includeInSort($this, c, huffLen)) {
          var code = bitReverse(Companion_getInstance_1(), ensureNotNull(c.codewords_1)[i_1]);
          var x = 0;
          var n = c.sortedEntries_1;
          while (1 < n) {
            var m = x + (n >> 1) | 0;
            if (compare(bitwiseAnd(fromInt(sc[m]), new Long(-1, 0)), bitwiseAnd(fromInt(code), new Long(-1, 0))) <= 0) {
              x = m;
              n = n - (n >> 1) | 0;
            } else {
              n = n >> 1;
            }
          }
          if (!(c.sparse_1 === 0)) {
            ensureNotNull(c.sortedValues_1)[x] = ensureNotNull(values)[i_1];
            ensureNotNull(c.codewordLengths_1)[x] = toByte(huffLen);
          } else {
            ensureNotNull(c.sortedValues_1)[x] = i_1;
          }
        }
      }
       while (inductionVariable_1 < len2);
  }
  function vorbisValidate($this, data, offset) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4 = data[offset + 0 | 0];
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(118);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    if (tmp_4 === toByte(tmp$ret$0)) {
      var tmp_5 = data[offset + 1 | 0];
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(111);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp_3 = tmp_5 === toByte(tmp$ret$1);
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      var tmp_6 = data[offset + 2 | 0];
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(114);
      var tmp$ret$2 = Char__toInt_impl_vasixd(this_2);
      tmp_2 = tmp_6 === toByte(tmp$ret$2);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      var tmp_7 = data[offset + 3 | 0];
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(98);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_3);
      tmp_1 = tmp_7 === toByte(tmp$ret$3);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_8 = data[offset + 4 | 0];
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(105);
      var tmp$ret$4 = Char__toInt_impl_vasixd(this_4);
      tmp_0 = tmp_8 === toByte(tmp$ret$4);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_9 = data[offset + 5 | 0];
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(115);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_5);
      tmp = tmp_9 === toByte(tmp$ret$5);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function vorbisValidateInts($this, data, offset) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4 = data[offset + 0 | 0];
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(118);
    if (tmp_4 === Char__toInt_impl_vasixd(this_0)) {
      var tmp_5 = data[offset + 1 | 0];
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(111);
      tmp_3 = tmp_5 === Char__toInt_impl_vasixd(this_1);
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      var tmp_6 = data[offset + 2 | 0];
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(114);
      tmp_2 = tmp_6 === Char__toInt_impl_vasixd(this_2);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      var tmp_7 = data[offset + 3 | 0];
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(98);
      tmp_1 = tmp_7 === Char__toInt_impl_vasixd(this_3);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_8 = data[offset + 4 | 0];
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(105);
      tmp_0 = tmp_8 === Char__toInt_impl_vasixd(this_4);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_9 = data[offset + 5 | 0];
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(115);
      tmp = tmp_9 === Char__toInt_impl_vasixd(this_5);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function computeTwiddleFactors($this, n, a, b, c) {
    var n4 = n >> 2;
    var n8 = n >> 3;
    var k2 = 0;
    var inductionVariable = 0;
    if (inductionVariable < n4)
      do {
        var k = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = k2;
        // Inline function 'kotlin.math.cos' call
        var x = 4.0 * k * 3.1415927 / n;
        a[tmp] = Math.cos(x);
        var tmp_0 = k2 + 1 | 0;
        // Inline function 'kotlin.math.sin' call
        var x_0 = 4.0 * k * 3.1415927 / n;
        a[tmp_0] = -Math.sin(x_0);
        var tmp_1 = k2;
        // Inline function 'kotlin.math.cos' call
        var x_1 = (k2 + 1 | 0) * 3.1415927 / n / 2;
        b[tmp_1] = Math.cos(x_1) * 0.5;
        var tmp_2 = k2 + 1 | 0;
        // Inline function 'kotlin.math.sin' call
        var x_2 = (k2 + 1 | 0) * 3.1415927 / n / 2;
        b[tmp_2] = Math.sin(x_2) * 0.5;
        k2 = k2 + 2 | 0;
      }
       while (inductionVariable < n4);
    k2 = 0;
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < n8)
      do {
        var k_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_3 = k2;
        // Inline function 'kotlin.math.cos' call
        var x_3 = 2.0 * (k2 + 1 | 0) * 3.1415927 / n;
        c[tmp_3] = Math.cos(x_3);
        var tmp_4 = k2 + 1 | 0;
        // Inline function 'kotlin.math.sin' call
        var x_4 = 2.0 * (k2 + 1 | 0) * 3.1415927 / n;
        c[tmp_4] = -Math.sin(x_4);
        k2 = k2 + 2 | 0;
      }
       while (inductionVariable_0 < n8);
  }
  function computeWindow($this, n, window_0) {
    var n2 = n >> 1;
    var inductionVariable = 0;
    if (inductionVariable < n2)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = 0.5 * 3.1415927;
        // Inline function 'kotlin.math.sin' call
        var x = (i + 0.5) / n2 * 0.5 * 3.1415927;
        // Inline function 'kotlin.let' call
        var it = Math.sin(x);
        // Inline function 'kotlin.math.sin' call
        var x_0 = tmp * (it * it);
        window_0[i] = Math.sin(x_0);
      }
       while (inductionVariable < n2);
  }
  function computeBitreverse($this, n, rev) {
    var ld = ilog(Companion_getInstance_1(), n) - 1 | 0;
    var n8 = n >> 3;
    var inductionVariable = 0;
    if (inductionVariable < n8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        rev[i] = (bitReverse(Companion_getInstance_1(), i) >>> ((32 - ld | 0) + 3 | 0) | 0) << 2;
      }
       while (inductionVariable < n8);
  }
  function initBlocksize($this, b, n) {
    var n2 = n >> 1;
    var n4 = n >> 2;
    var n8 = n >> 3;
    $this.tA_1[b] = new Float32Array(n2);
    $this.tB_1[b] = new Float32Array(n2);
    $this.tC_1[b] = new Float32Array(n4);
    computeTwiddleFactors($this, n, ensureNotNull($this.tA_1[b]), ensureNotNull($this.tB_1[b]), ensureNotNull($this.tC_1[b]));
    $this.windowData_1[b] = new Float32Array(n2);
    computeWindow($this, n, ensureNotNull($this.windowData_1[b]));
    $this.bitReverseData_1[b] = new Int32Array(n8);
    computeBitreverse($this, n, ensureNotNull($this.bitReverseData_1[b]));
    return true;
  }
  function codebookDecodeScalarRaw($this, c) {
    prepHuffman($this);
    if (c.codewords_1 == null && c.sortedCodewords_1 == null)
      return -1;
    if (8 < c.entries_1 ? !(c.sortedCodewords_1 == null) : c.codewords_1 == null) {
      var code = bitReverse(Companion_getInstance_1(), $this.acc_1);
      var x = 0;
      var n = c.sortedEntries_1;
      while (1 < n) {
        var m = x + (n >> 1) | 0;
        if (compare(bitwiseAnd(fromInt(ensureNotNull(c.sortedCodewords_1)[m]), new Long(-1, 0)), bitwiseAnd(fromInt(code), new Long(-1, 0))) <= 0) {
          x = m;
          n = n - (n >> 1) | 0;
        } else {
          n = n >> 1;
        }
      }
      if (c.sparse_1 === 0)
        x = ensureNotNull(c.sortedValues_1)[x];
      var len = ensureNotNull(c.codewordLengths_1)[x] & 255;
      if ($this.validBits_1 >= len) {
        $this.acc_1 = $this.acc_1 >>> len | 0;
        $this.validBits_1 = $this.validBits_1 - len | 0;
        return x;
      }
      $this.validBits_1 = 0;
      return -1;
    }
    var inductionVariable = 0;
    var last = c.entries_1;
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if ((ensureNotNull(c.codewordLengths_1)[i] & 255) === 255)
          continue $l$loop;
        if (ensureNotNull(c.codewords_1)[i] === ($this.acc_1 & ((1 << (ensureNotNull(c.codewordLengths_1)[i] & 255)) - 1 | 0))) {
          var cwl = ensureNotNull(c.codewordLengths_1)[i] & 255;
          if ($this.validBits_1 >= cwl) {
            $this.acc_1 = $this.acc_1 >>> cwl | 0;
            $this.validBits_1 = $this.validBits_1 - cwl | 0;
            return i;
          }
          $this.validBits_1 = 0;
          return -1;
        }
      }
       while (inductionVariable < last);
    setError($this, STBVorbisError_INVALID_STREAM_getInstance());
    $this.validBits_1 = 0;
    return -1;
  }
  function decodeRaw($this, c) {
    if (10 > $this.validBits_1) {
      prepHuffman($this);
    }
    var i = $this.acc_1 & 1023;
    i = c.fastHuffman_1[i];
    if (i >= 0) {
      var n = ensureNotNull(c.codewordLengths_1)[i] & 255;
      $this.acc_1 = $this.acc_1 >>> n | 0;
      $this.validBits_1 = $this.validBits_1 - n | 0;
      if (0 > $this.validBits_1) {
        $this.validBits_1 = 0;
        return -1;
      }
    } else {
      i = codebookDecodeScalarRaw($this, c);
    }
    return i;
  }
  function decode($this, c) {
    var v = decodeRaw($this, c);
    if (!(c.sparse_1 === 0) && v >= 0)
      v = ensureNotNull(c.sortedValues_1)[v];
    return v;
  }
  function decodeVQ($this, c) {
    return decodeRaw($this, c);
  }
  function codebookDecodeStart($this, c) {
    if (c.lookupType_1 === 0) {
      setError($this, STBVorbisError_INVALID_STREAM_getInstance());
      return -1;
    }
    var z = decodeVQ($this, c);
    if (0 > z) {
      if ($this.bytesInSeg_1 === 0)
        if ($this.lastSeg_1)
          return z;
      setError($this, STBVorbisError_INVALID_STREAM_getInstance());
    }
    return z;
  }
  function codebookDecode($this, c, output, outputOffset, len0) {
    var z = codebookDecodeStart($this, c);
    if (0 > z)
      return false;
    var len = len0;
    if (c.dimensions_1 < len)
      len = c.dimensions_1;
    var zOff = imul(z, c.dimensions_1);
    var mults = ensureNotNull(c.multiplicands_1);
    if (!(c.sequenceP_1 === 0)) {
      var last = 0.0;
      var inductionVariable = 0;
      var last_0 = len;
      if (inductionVariable < last_0)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var v = mults[zOff + i | 0] + last;
          var _index_0__fvwizt = outputOffset + i | 0;
          output[_index_0__fvwizt] = output[_index_0__fvwizt] + v;
          last = v + c.minimumValue_1;
        }
         while (inductionVariable < last_0);
    } else {
      var inductionVariable_0 = 0;
      var last_1 = len;
      if (inductionVariable_0 < last_1)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var _index_0__fvwizt_0 = outputOffset + i_0 | 0;
          output[_index_0__fvwizt_0] = output[_index_0__fvwizt_0] + mults[zOff + i_0 | 0];
        }
         while (inductionVariable_0 < last_1);
    }
    return true;
  }
  function codebookDecodeStep($this, c, output, outputOffset, len0, step) {
    var z = codebookDecodeStart($this, c);
    if (0 > z)
      return false;
    var len = len0;
    if (c.dimensions_1 < len)
      len = c.dimensions_1;
    var zOff = imul(z, c.dimensions_1);
    var mults = ensureNotNull(c.multiplicands_1);
    var last = 0.0;
    var inductionVariable = 0;
    var last_0 = len;
    if (inductionVariable < last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = mults[zOff + i | 0] + last;
        var _index_0__fvwizt = outputOffset + imul(i, step) | 0;
        output[_index_0__fvwizt] = output[_index_0__fvwizt] + v;
        if (!(c.sequenceP_1 === 0))
          last = v;
      }
       while (inductionVariable < last_0);
    return true;
  }
  function codebookDecodeDeinterleaveRepeat($this, c, outputs, ch, cInterP, pInterP, len, totalDecode0) {
    var cInter = cInterP[0];
    var pInter = pInterP[0];
    var totalDecode = totalDecode0;
    if (c.lookupType_1 === 0)
      return setError($this, STBVorbisError_INVALID_STREAM_getInstance());
    while (0 < totalDecode) {
      var z0 = decodeVQ($this, c);
      if (0 > z0) {
        if ($this.bytesInSeg_1 === 0 && $this.lastSeg_1)
          return false;
        return setError($this, STBVorbisError_INVALID_STREAM_getInstance());
      }
      var effective = c.dimensions_1;
      if (((cInter + imul(pInter, ch) | 0) + effective | 0) > imul(len, ch)) {
        effective = imul(len, ch) - (imul(pInter, ch) - cInter | 0) | 0;
      }
      var z = imul(z0, c.dimensions_1);
      var mults = ensureNotNull(c.multiplicands_1);
      if (!(c.sequenceP_1 === 0)) {
        var last = 0.0;
        var inductionVariable = 0;
        var last_0 = effective;
        if (inductionVariable < last_0)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var v = mults[z + i | 0] + last;
            var tmp0_safe_receiver = outputs[cInter];
            if (tmp0_safe_receiver == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              var _index_0__fvwizt = pInter;
              tmp0_safe_receiver[_index_0__fvwizt] = tmp0_safe_receiver[_index_0__fvwizt] + v;
            }
            cInter = cInter + 1 | 0;
            if (cInter === ch) {
              cInter = 0;
              pInter = pInter + 1 | 0;
            }
            last = v;
          }
           while (inductionVariable < last_0);
      } else {
        var inductionVariable_0 = 0;
        var last_1 = effective;
        if (inductionVariable_0 < last_1)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var v_0 = mults[z + i_0 | 0];
            var tmp1_safe_receiver = outputs[cInter];
            if (tmp1_safe_receiver == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              var _index_0__fvwizt_0 = pInter;
              tmp1_safe_receiver[_index_0__fvwizt_0] = tmp1_safe_receiver[_index_0__fvwizt_0] + v_0;
            }
            cInter = cInter + 1 | 0;
            if (cInter === ch) {
              cInter = 0;
              pInter = pInter + 1 | 0;
            }
          }
           while (inductionVariable_0 < last_1);
      }
      totalDecode = totalDecode - effective | 0;
    }
    cInterP[0] = cInter;
    pInterP[0] = pInter;
    return true;
  }
  function predictPoint($this, x, x0, x1, y0, y1) {
    var dy = y1 - y0 | 0;
    var adx = x1 - x0 | 0;
    var err = imul(abs(dy), x - x0 | 0);
    var off = err / adx | 0;
    return 0 > dy ? y0 - off | 0 : y0 + off | 0;
  }
  function drawLine($this, output, x0, y0, x1, y1, n) {
    var dy = y1 - y0 | 0;
    var adx = x1 - x0 | 0;
    var ady = abs(dy);
    var base = dy / adx | 0;
    var sy = 0 > dy ? base - 1 | 0 : base + 1 | 0;
    ady = ady - imul(abs(base), adx) | 0;
    var x = x0;
    var y = y0;
    var err = 0;
    var ex1 = n < x1 ? n : x1;
    if (ex1 > x) {
      var _index_0__fvwizt = x;
      output[_index_0__fvwizt] = output[_index_0__fvwizt] * Companion_getInstance_1().inverseDbTable_1[y & 255];
      x = x + 1 | 0;
      while (ex1 > x) {
        err = err + ady | 0;
        if (err >= adx) {
          err = err - adx | 0;
          y = y + sy | 0;
        } else {
          y = y + base | 0;
        }
        var _index_0__fvwizt_0 = x;
        output[_index_0__fvwizt_0] = output[_index_0__fvwizt_0] * Companion_getInstance_1().inverseDbTable_1[y & 255];
        x = x + 1 | 0;
      }
    }
  }
  function residueDecode($this, book, target, offset, n, rtype) {
    if (rtype === 0) {
      var step = n / book.dimensions_1 | 0;
      var inductionVariable = 0;
      if (inductionVariable < step)
        do {
          var k = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!codebookDecodeStep($this, book, target, offset + k | 0, (n - offset | 0) - k | 0, step))
            return false;
        }
         while (inductionVariable < step);
    } else {
      var k_0 = 0;
      var off = offset;
      while (n > k_0) {
        if (!codebookDecode($this, book, target, off, n - k_0 | 0))
          return false;
        k_0 = k_0 + book.dimensions_1 | 0;
        off = off + book.dimensions_1 | 0;
      }
    }
    return true;
  }
  function decodeResidue($this, residueBuffers, ch, n, rn, doNotDecode) {
    var r = ensureNotNull($this.residueConfig_1)[rn];
    var rtype = $this.residueTypes_1[rn];
    var c = r.classbook_1;
    var classwords = ensureNotNull($this.codebooks_1)[c].dimensions_1;
    var actualSize = rtype === 2 ? imul(n, 2) : n;
    var limitRBegin = actualSize > r.begin_1 ? r.begin_1 : actualSize;
    var limitREnd = actualSize > r.end_1 ? r.end_1 : actualSize;
    var nRead = limitREnd - limitRBegin | 0;
    var partRead = nRead / r.partSize_1 | 0;
    var tmp = 0;
    var tmp_0 = $this.channels_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1[tmp] = Array(partRead);
      tmp = tmp + 1 | 0;
    }
    var partClassdata = tmp_1;
    var inductionVariable = 0;
    if (inductionVariable < ch)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!doNotDecode[i]) {
          var tmp0_safe_receiver = residueBuffers[i];
          if (tmp0_safe_receiver == null)
            null;
          else {
            fill(tmp0_safe_receiver, 0.0, 0, n);
          }
        }
      }
       while (inductionVariable < ch);
    if (rtype === 2 && !(ch === 1)) {
      var j = 0;
      $l$loop: while (j < ch && doNotDecode[j]) {
        j = j + 1 | 0;
      }
      if (j === ch)
        return Unit_getInstance();
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < 8)
        do {
          var pass = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var pcount = 0;
          var classSet = 0;
          if (ch === 2) {
            while (partRead > pcount) {
              var z = r.begin_1 + imul(pcount, r.partSize_1) | 0;
              var cInter = z & 1;
              var pInter = z >> 1;
              if (pass === 0) {
                var cb = ensureNotNull($this.codebooks_1)[r.classbook_1];
                var q = decode($this, cb);
                if (q === -1)
                  return Unit_getInstance();
                partClassdata[0][classSet] = ensureNotNull(r.classdata_1)[q];
              }
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < classwords)
                $l$loop_0: do {
                  var i_0 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  if (partRead <= pcount)
                    break $l$loop_0;
                  z = r.begin_1 + imul(pcount, r.partSize_1) | 0;
                  var ci = ensureNotNull(partClassdata[0][classSet])[i_0] & 255;
                  var b = ensureNotNull(r.residueBooks_1)[ci][pass];
                  if (b >= 0) {
                    var book = ensureNotNull($this.codebooks_1)[b];
                    // Inline function 'kotlin.intArrayOf' call
                    var cInterArr = new Int32Array([cInter]);
                    // Inline function 'kotlin.intArrayOf' call
                    var pInterArr = new Int32Array([pInter]);
                    if (!codebookDecodeDeinterleaveRepeat($this, book, residueBuffers, ch, cInterArr, pInterArr, n, r.partSize_1))
                      return Unit_getInstance();
                    cInter = cInterArr[0];
                    pInter = pInterArr[0];
                  } else {
                    z = z + r.partSize_1 | 0;
                    cInter = z & 1;
                    pInter = z >> 1;
                  }
                  pcount = pcount + 1 | 0;
                }
                 while (inductionVariable_1 < classwords);
              classSet = classSet + 1 | 0;
            }
          } else if (2 < ch) {
            while (partRead > pcount) {
              var z_0 = r.begin_1 + imul(pcount, r.partSize_1) | 0;
              var cInter_0 = z_0 % ch | 0;
              var pInter_0 = z_0 / ch | 0;
              if (pass === 0) {
                var cb_0 = ensureNotNull($this.codebooks_1)[r.classbook_1];
                var q_0 = decode($this, cb_0);
                if (q_0 === -1)
                  return Unit_getInstance();
                partClassdata[0][classSet] = ensureNotNull(r.classdata_1)[q_0];
              }
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < classwords)
                $l$loop_1: do {
                  var i_1 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  if (partRead <= pcount)
                    break $l$loop_1;
                  z_0 = r.begin_1 + imul(pcount, r.partSize_1) | 0;
                  var ci_0 = ensureNotNull(partClassdata[0][classSet])[i_1] & 255;
                  var b_0 = ensureNotNull(r.residueBooks_1)[ci_0][pass];
                  if (b_0 >= 0) {
                    var book_0 = ensureNotNull($this.codebooks_1)[b_0];
                    // Inline function 'kotlin.intArrayOf' call
                    var cInterArr_0 = new Int32Array([cInter_0]);
                    // Inline function 'kotlin.intArrayOf' call
                    var pInterArr_0 = new Int32Array([pInter_0]);
                    if (!codebookDecodeDeinterleaveRepeat($this, book_0, residueBuffers, ch, cInterArr_0, pInterArr_0, n, r.partSize_1))
                      return Unit_getInstance();
                    cInter_0 = cInterArr_0[0];
                    pInter_0 = pInterArr_0[0];
                  } else {
                    z_0 = z_0 + r.partSize_1 | 0;
                    cInter_0 = z_0 % ch | 0;
                    pInter_0 = z_0 / ch | 0;
                  }
                  pcount = pcount + 1 | 0;
                }
                 while (inductionVariable_2 < classwords);
              classSet = classSet + 1 | 0;
            }
          }
        }
         while (inductionVariable_0 < 8);
      return Unit_getInstance();
    }
    var inductionVariable_3 = 0;
    if (inductionVariable_3 < 8)
      do {
        var pass_0 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        var pcount_0 = 0;
        var classSet_0 = 0;
        while (partRead > pcount_0) {
          if (pass_0 === 0) {
            var inductionVariable_4 = 0;
            if (inductionVariable_4 < ch)
              do {
                var j_0 = inductionVariable_4;
                inductionVariable_4 = inductionVariable_4 + 1 | 0;
                if (!doNotDecode[j_0]) {
                  var cb_1 = ensureNotNull($this.codebooks_1)[r.classbook_1];
                  var temp = decode($this, cb_1);
                  if (temp === -1)
                    return Unit_getInstance();
                  partClassdata[j_0][classSet_0] = ensureNotNull(r.classdata_1)[temp];
                }
              }
               while (inductionVariable_4 < ch);
          }
          var inductionVariable_5 = 0;
          if (inductionVariable_5 < classwords)
            $l$loop_2: do {
              var i_2 = inductionVariable_5;
              inductionVariable_5 = inductionVariable_5 + 1 | 0;
              if (partRead <= pcount_0)
                break $l$loop_2;
              var inductionVariable_6 = 0;
              if (inductionVariable_6 < ch)
                do {
                  var j_1 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  if (!doNotDecode[j_1]) {
                    var ci_1 = ensureNotNull(partClassdata[j_1][classSet_0])[i_2] & 255;
                    var b_1 = ensureNotNull(r.residueBooks_1)[ci_1][pass_0];
                    if (b_1 >= 0) {
                      var target = ensureNotNull(residueBuffers[j_1]);
                      var offset = r.begin_1 + imul(pcount_0, r.partSize_1) | 0;
                      var nn = r.partSize_1;
                      var book_1 = ensureNotNull($this.codebooks_1)[b_1];
                      if (!residueDecode($this, book_1, target, offset, nn, rtype))
                        return Unit_getInstance();
                    }
                  }
                }
                 while (inductionVariable_6 < ch);
              pcount_0 = pcount_0 + 1 | 0;
            }
             while (inductionVariable_5 < classwords);
          classSet_0 = classSet_0 + 1 | 0;
        }
      }
       while (inductionVariable_3 < 8);
  }
  function imdctStep3Iter0Loop($this, n, e, iOff, kOff, a) {
    var ee0 = iOff;
    var ee2 = ee0 + kOff | 0;
    var aIdx = 0;
    var inductionVariable = 0;
    var last = n >> 2;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k00_20 = e[ee0] - e[ee2];
        var k01_21 = e[ee0 - 1 | 0] - e[ee2 - 1 | 0];
        var _index_0__fvwizt = ee0;
        e[_index_0__fvwizt] = e[_index_0__fvwizt] + e[ee2];
        var _index_0__fvwizt_0 = ee0 - 1 | 0;
        e[_index_0__fvwizt_0] = e[_index_0__fvwizt_0] + e[ee2 - 1 | 0];
        e[ee2] = k00_20 * a[aIdx] - k01_21 * a[aIdx + 1 | 0];
        e[ee2 - 1 | 0] = k01_21 * a[aIdx] + k00_20 * a[aIdx + 1 | 0];
        aIdx = aIdx + 8 | 0;
        k00_20 = e[ee0 - 2 | 0] - e[ee2 - 2 | 0];
        k01_21 = e[ee0 - 3 | 0] - e[ee2 - 3 | 0];
        var _index_0__fvwizt_1 = ee0 - 2 | 0;
        e[_index_0__fvwizt_1] = e[_index_0__fvwizt_1] + e[ee2 - 2 | 0];
        var _index_0__fvwizt_2 = ee0 - 3 | 0;
        e[_index_0__fvwizt_2] = e[_index_0__fvwizt_2] + e[ee2 - 3 | 0];
        e[ee2 - 2 | 0] = k00_20 * a[aIdx] - k01_21 * a[aIdx + 1 | 0];
        e[ee2 - 3 | 0] = k01_21 * a[aIdx] + k00_20 * a[aIdx + 1 | 0];
        aIdx = aIdx + 8 | 0;
        k00_20 = e[ee0 - 4 | 0] - e[ee2 - 4 | 0];
        k01_21 = e[ee0 - 5 | 0] - e[ee2 - 5 | 0];
        var _index_0__fvwizt_3 = ee0 - 4 | 0;
        e[_index_0__fvwizt_3] = e[_index_0__fvwizt_3] + e[ee2 - 4 | 0];
        var _index_0__fvwizt_4 = ee0 - 5 | 0;
        e[_index_0__fvwizt_4] = e[_index_0__fvwizt_4] + e[ee2 - 5 | 0];
        e[ee2 - 4 | 0] = k00_20 * a[aIdx] - k01_21 * a[aIdx + 1 | 0];
        e[ee2 - 5 | 0] = k01_21 * a[aIdx] + k00_20 * a[aIdx + 1 | 0];
        aIdx = aIdx + 8 | 0;
        k00_20 = e[ee0 - 6 | 0] - e[ee2 - 6 | 0];
        k01_21 = e[ee0 - 7 | 0] - e[ee2 - 7 | 0];
        var _index_0__fvwizt_5 = ee0 - 6 | 0;
        e[_index_0__fvwizt_5] = e[_index_0__fvwizt_5] + e[ee2 - 6 | 0];
        var _index_0__fvwizt_6 = ee0 - 7 | 0;
        e[_index_0__fvwizt_6] = e[_index_0__fvwizt_6] + e[ee2 - 7 | 0];
        e[ee2 - 6 | 0] = k00_20 * a[aIdx] - k01_21 * a[aIdx + 1 | 0];
        e[ee2 - 7 | 0] = k01_21 * a[aIdx] + k00_20 * a[aIdx + 1 | 0];
        aIdx = aIdx + 8 | 0;
        ee0 = ee0 - 8 | 0;
        ee2 = ee2 - 8 | 0;
      }
       while (inductionVariable < last);
  }
  function imdctStep3InnerRLoop($this, lim, e, d0, kOff, a, k1) {
    var e0 = d0;
    var e2 = e0 + kOff | 0;
    var aIdx = 0;
    var inductionVariable = 0;
    var last = lim >> 2;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k00_20 = e[e0] - e[e2];
        var k01_21 = e[e0 - 1 | 0] - e[e2 - 1 | 0];
        var _index_0__fvwizt = e0;
        e[_index_0__fvwizt] = e[_index_0__fvwizt] + e[e2];
        var _index_0__fvwizt_0 = e0 - 1 | 0;
        e[_index_0__fvwizt_0] = e[_index_0__fvwizt_0] + e[e2 - 1 | 0];
        e[e2] = k00_20 * a[aIdx] - k01_21 * a[aIdx + 1 | 0];
        e[e2 - 1 | 0] = k01_21 * a[aIdx] + k00_20 * a[aIdx + 1 | 0];
        aIdx = aIdx + k1 | 0;
        k00_20 = e[e0 - 2 | 0] - e[e2 - 2 | 0];
        k01_21 = e[e0 - 3 | 0] - e[e2 - 3 | 0];
        var _index_0__fvwizt_1 = e0 - 2 | 0;
        e[_index_0__fvwizt_1] = e[_index_0__fvwizt_1] + e[e2 - 2 | 0];
        var _index_0__fvwizt_2 = e0 - 3 | 0;
        e[_index_0__fvwizt_2] = e[_index_0__fvwizt_2] + e[e2 - 3 | 0];
        e[e2 - 2 | 0] = k00_20 * a[aIdx] - k01_21 * a[aIdx + 1 | 0];
        e[e2 - 3 | 0] = k01_21 * a[aIdx] + k00_20 * a[aIdx + 1 | 0];
        aIdx = aIdx + k1 | 0;
        k00_20 = e[e0 - 4 | 0] - e[e2 - 4 | 0];
        k01_21 = e[e0 - 5 | 0] - e[e2 - 5 | 0];
        var _index_0__fvwizt_3 = e0 - 4 | 0;
        e[_index_0__fvwizt_3] = e[_index_0__fvwizt_3] + e[e2 - 4 | 0];
        var _index_0__fvwizt_4 = e0 - 5 | 0;
        e[_index_0__fvwizt_4] = e[_index_0__fvwizt_4] + e[e2 - 5 | 0];
        e[e2 - 4 | 0] = k00_20 * a[aIdx] - k01_21 * a[aIdx + 1 | 0];
        e[e2 - 5 | 0] = k01_21 * a[aIdx] + k00_20 * a[aIdx + 1 | 0];
        aIdx = aIdx + k1 | 0;
        k00_20 = e[e0 - 6 | 0] - e[e2 - 6 | 0];
        k01_21 = e[e0 - 7 | 0] - e[e2 - 7 | 0];
        var _index_0__fvwizt_5 = e0 - 6 | 0;
        e[_index_0__fvwizt_5] = e[_index_0__fvwizt_5] + e[e2 - 6 | 0];
        var _index_0__fvwizt_6 = e0 - 7 | 0;
        e[_index_0__fvwizt_6] = e[_index_0__fvwizt_6] + e[e2 - 7 | 0];
        e[e2 - 6 | 0] = k00_20 * a[aIdx] - k01_21 * a[aIdx + 1 | 0];
        e[e2 - 7 | 0] = k01_21 * a[aIdx] + k00_20 * a[aIdx + 1 | 0];
        e0 = e0 - 8 | 0;
        e2 = e2 - 8 | 0;
        aIdx = aIdx + k1 | 0;
      }
       while (inductionVariable < last);
  }
  function imdctStep3InnerSLoop($this, n, e, iOff, kOff, a, aOff, k0) {
    var a0 = a[0];
    var a1 = a[1];
    var a2 = a[aOff];
    var a3 = a[aOff + 1 | 0];
    var a4 = a[imul(aOff, 2)];
    var a5 = a[imul(aOff, 2) + 1 | 0];
    var a6 = a[imul(aOff, 3)];
    var a7 = a[imul(aOff, 3) + 1 | 0];
    var ee0 = iOff;
    var ee2 = ee0 + kOff | 0;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k00 = e[ee0] - e[ee2];
        var k11 = e[ee0 - 1 | 0] - e[ee2 - 1 | 0];
        e[ee0] = e[ee0] + e[ee2];
        e[ee0 - 1 | 0] = e[ee0 - 1 | 0] + e[ee2 - 1 | 0];
        e[ee2] = k00 * a0 - k11 * a1;
        e[ee2 - 1 | 0] = k11 * a0 + k00 * a1;
        k00 = e[ee0 - 2 | 0] - e[ee2 - 2 | 0];
        k11 = e[ee0 - 3 | 0] - e[ee2 - 3 | 0];
        e[ee0 - 2 | 0] = e[ee0 - 2 | 0] + e[ee2 - 2 | 0];
        e[ee0 - 3 | 0] = e[ee0 - 3 | 0] + e[ee2 - 3 | 0];
        e[ee2 - 2 | 0] = k00 * a2 - k11 * a3;
        e[ee2 - 3 | 0] = k11 * a2 + k00 * a3;
        k00 = e[ee0 - 4 | 0] - e[ee2 - 4 | 0];
        k11 = e[ee0 - 5 | 0] - e[ee2 - 5 | 0];
        e[ee0 - 4 | 0] = e[ee0 - 4 | 0] + e[ee2 - 4 | 0];
        e[ee0 - 5 | 0] = e[ee0 - 5 | 0] + e[ee2 - 5 | 0];
        e[ee2 - 4 | 0] = k00 * a4 - k11 * a5;
        e[ee2 - 5 | 0] = k11 * a4 + k00 * a5;
        k00 = e[ee0 - 6 | 0] - e[ee2 - 6 | 0];
        k11 = e[ee0 - 7 | 0] - e[ee2 - 7 | 0];
        e[ee0 - 6 | 0] = e[ee0 - 6 | 0] + e[ee2 - 6 | 0];
        e[ee0 - 7 | 0] = e[ee0 - 7 | 0] + e[ee2 - 7 | 0];
        e[ee2 - 6 | 0] = k00 * a6 - k11 * a7;
        e[ee2 - 7 | 0] = k11 * a6 + k00 * a7;
        ee0 = ee0 - k0 | 0;
        ee2 = ee2 - k0 | 0;
      }
       while (inductionVariable < n);
  }
  function iter54($this, z, zOff) {
    var k00 = z[zOff] - z[zOff - 4 | 0];
    var y0 = z[zOff] + z[zOff - 4 | 0];
    var y2 = z[zOff - 2 | 0] + z[zOff - 6 | 0];
    var k22 = z[zOff - 2 | 0] - z[zOff - 6 | 0];
    z[zOff] = y0 + y2;
    z[zOff - 2 | 0] = y0 - y2;
    var k33 = z[zOff - 3 | 0] - z[zOff - 7 | 0];
    z[zOff - 4 | 0] = k00 + k33;
    z[zOff - 6 | 0] = k00 - k33;
    var k11 = z[zOff - 1 | 0] - z[zOff - 5 | 0];
    var y1 = z[zOff - 1 | 0] + z[zOff - 5 | 0];
    var y3 = z[zOff - 3 | 0] + z[zOff - 7 | 0];
    z[zOff - 1 | 0] = y1 + y3;
    z[zOff - 3 | 0] = y1 - y3;
    z[zOff - 5 | 0] = k11 - k22;
    z[zOff - 7 | 0] = k11 + k22;
  }
  function imdctStep3InnerSLoopLd654($this, n, e, iOff, a, baseN) {
    var aOff = baseN >> 3;
    var a2 = a[aOff];
    var z = iOff;
    var base = z - imul(16, n) | 0;
    while (z > base) {
      var k00 = e[z] - e[z - 8 | 0];
      var k11 = e[z - 1 | 0] - e[z - 9 | 0];
      var l00 = e[z - 2 | 0] - e[z - 10 | 0];
      var l11 = e[z - 3 | 0] - e[z - 11 | 0];
      e[z] = e[z] + e[z - 8 | 0];
      e[z - 1 | 0] = e[z - 1 | 0] + e[z - 9 | 0];
      e[z - 2 | 0] = e[z - 2 | 0] + e[z - 10 | 0];
      e[z - 3 | 0] = e[z - 3 | 0] + e[z - 11 | 0];
      e[z - 8 | 0] = k00;
      e[z - 9 | 0] = k11;
      e[z - 10 | 0] = (l00 + l11) * a2;
      e[z - 11 | 0] = (l11 - l00) * a2;
      k00 = e[z - 4 | 0] - e[z - 12 | 0];
      k11 = e[z - 5 | 0] - e[z - 13 | 0];
      l00 = e[z - 6 | 0] - e[z - 14 | 0];
      l11 = e[z - 7 | 0] - e[z - 15 | 0];
      e[z - 4 | 0] = e[z - 4 | 0] + e[z - 12 | 0];
      e[z - 5 | 0] = e[z - 5 | 0] + e[z - 13 | 0];
      e[z - 6 | 0] = e[z - 6 | 0] + e[z - 14 | 0];
      e[z - 7 | 0] = e[z - 7 | 0] + e[z - 15 | 0];
      e[z - 12 | 0] = k11;
      e[z - 13 | 0] = -k00;
      e[z - 14 | 0] = (l11 - l00) * a2;
      e[z - 15 | 0] = (l00 + l11) * -a2;
      iter54($this, e, z);
      iter54($this, e, z - 8 | 0);
      z = z - 16 | 0;
    }
  }
  function inverseMdct($this, buffer, n, blocktype) {
    var n2 = n >> 1;
    var n4 = n >> 2;
    var n8 = n >> 3;
    var buf2 = new Float32Array(n2);
    var a = ensureNotNull($this.tA_1[blocktype]);
    // Inline function 'kotlin.run' call
    var d = n2 - 2 | 0;
    var aaIdx = 0;
    var eIdx = 0;
    var eStop = n2;
    while (!(eIdx === eStop)) {
      buf2[d + 1 | 0] = buffer[eIdx] * a[aaIdx] - buffer[eIdx + 2 | 0] * a[aaIdx + 1 | 0];
      buf2[d] = buffer[eIdx] * a[aaIdx + 1 | 0] + buffer[eIdx + 2 | 0] * a[aaIdx];
      d = d - 2 | 0;
      aaIdx = aaIdx + 2 | 0;
      eIdx = eIdx + 4 | 0;
    }
    var e2 = n2 - 3 | 0;
    while (d >= 0) {
      buf2[d + 1 | 0] = -buffer[e2 + 2 | 0] * a[aaIdx] - -buffer[e2] * a[aaIdx + 1 | 0];
      buf2[d] = -buffer[e2 + 2 | 0] * a[aaIdx + 1 | 0] + -buffer[e2] * a[aaIdx];
      d = d - 2 | 0;
      aaIdx = aaIdx + 2 | 0;
      e2 = e2 - 4 | 0;
    }
    var u = buffer;
    var v = buf2;
    // Inline function 'kotlin.run' call
    var aaIdx_0 = n2 - 8 | 0;
    var e0 = n4;
    var e1 = 0;
    var d0 = n4;
    var d1 = 0;
    while (aaIdx_0 >= 0) {
      var v41_21 = v[e0 + 1 | 0] - v[e1 + 1 | 0];
      var v40_20 = v[e0] - v[e1];
      u[d0 + 1 | 0] = v[e0 + 1 | 0] + v[e1 + 1 | 0];
      u[d0] = v[e0] + v[e1];
      u[d1 + 1 | 0] = v41_21 * a[aaIdx_0 + 4 | 0] - v40_20 * a[aaIdx_0 + 5 | 0];
      u[d1] = v40_20 * a[aaIdx_0 + 4 | 0] + v41_21 * a[aaIdx_0 + 5 | 0];
      v41_21 = v[e0 + 3 | 0] - v[e1 + 3 | 0];
      v40_20 = v[e0 + 2 | 0] - v[e1 + 2 | 0];
      u[d0 + 3 | 0] = v[e0 + 3 | 0] + v[e1 + 3 | 0];
      u[d0 + 2 | 0] = v[e0 + 2 | 0] + v[e1 + 2 | 0];
      u[d1 + 3 | 0] = v41_21 * a[aaIdx_0] - v40_20 * a[aaIdx_0 + 1 | 0];
      u[d1 + 2 | 0] = v40_20 * a[aaIdx_0] + v41_21 * a[aaIdx_0 + 1 | 0];
      aaIdx_0 = aaIdx_0 - 8 | 0;
      d0 = d0 + 4 | 0;
      d1 = d1 + 4 | 0;
      e0 = e0 + 4 | 0;
      e1 = e1 + 4 | 0;
    }
    var ld = ilog(Companion_getInstance_1(), n) - 1 | 0;
    imdctStep3Iter0Loop($this, n >> 4, u, (n2 - 1 | 0) - imul(n4, 0) | 0, -(n >> 3) | 0, a);
    imdctStep3Iter0Loop($this, n >> 4, u, (n2 - 1 | 0) - imul(n4, 1) | 0, -(n >> 3) | 0, a);
    imdctStep3InnerRLoop($this, n >> 5, u, (n2 - 1 | 0) - imul(n8, 0) | 0, -(n >> 4) | 0, a, 16);
    imdctStep3InnerRLoop($this, n >> 5, u, (n2 - 1 | 0) - imul(n8, 1) | 0, -(n >> 4) | 0, a, 16);
    imdctStep3InnerRLoop($this, n >> 5, u, (n2 - 1 | 0) - imul(n8, 2) | 0, -(n >> 4) | 0, a, 16);
    imdctStep3InnerRLoop($this, n >> 5, u, (n2 - 1 | 0) - imul(n8, 3) | 0, -(n >> 4) | 0, a, 16);
    var l = 2;
    while ((ld - 3 | 0) >> 1 > l) {
      var k0 = n >> (l + 2 | 0);
      var lim = 1 << (l + 1 | 0);
      var inductionVariable = 0;
      if (inductionVariable < lim)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          imdctStep3InnerRLoop($this, n >> (l + 4 | 0), u, (n2 - 1 | 0) - imul(k0, i) | 0, -(k0 >> 1) | 0, a, 1 << (l + 3 | 0));
        }
         while (inductionVariable < lim);
      l = l + 1 | 0;
    }
    while ((ld - 6 | 0) > l) {
      var k0_0 = n >> (l + 2 | 0);
      var k1 = 1 << (l + 3 | 0);
      var k0_2 = k0_0 >> 1;
      var rlim = n >> (l + 6 | 0);
      var lim_0 = 1 << (l + 1 | 0);
      var a0Off = 0;
      var iOff = n2 - 1 | 0;
      var inductionVariable_0 = rlim;
      if (1 <= inductionVariable_0)
        do {
          var r = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          imdctStep3InnerSLoop_0($this, lim_0, u, iOff, -k0_2 | 0, a, a0Off, k1, k0_0);
          a0Off = a0Off + imul(k1, 4) | 0;
          iOff = iOff - 8 | 0;
        }
         while (1 <= inductionVariable_0);
      l = l + 1 | 0;
    }
    imdctStep3InnerSLoopLd654($this, n >> 5, u, n2 - 1 | 0, a, n);
    // Inline function 'kotlin.run' call
    var bitrev = ensureNotNull($this.bitReverseData_1[blocktype]);
    var d0_0 = n4 - 4 | 0;
    var d1_0 = n2 - 4 | 0;
    var brIdx = 0;
    while (d0_0 >= 0) {
      var k4 = bitrev[brIdx];
      v[d1_0 + 3 | 0] = u[k4];
      v[d1_0 + 2 | 0] = u[k4 + 1 | 0];
      v[d0_0 + 3 | 0] = u[k4 + 2 | 0];
      v[d0_0 + 2 | 0] = u[k4 + 3 | 0];
      k4 = bitrev[brIdx + 1 | 0];
      v[d1_0 + 1 | 0] = u[k4];
      v[d1_0] = u[k4 + 1 | 0];
      v[d0_0 + 1 | 0] = u[k4 + 2 | 0];
      v[d0_0] = u[k4 + 3 | 0];
      d0_0 = d0_0 - 4 | 0;
      d1_0 = d1_0 - 4 | 0;
      brIdx = brIdx + 2 | 0;
    }
    // Inline function 'kotlin.run' call
    var c = ensureNotNull($this.tC_1[blocktype]);
    var cIdx = 0;
    var d_0 = 0;
    var e = n2 - 4 | 0;
    while (e > d_0) {
      var a02 = v[d_0] - v[e + 2 | 0];
      var a11 = v[d_0 + 1 | 0] + v[e + 3 | 0];
      var b0 = c[cIdx + 1 | 0] * a02 + c[cIdx] * a11;
      var b1 = c[cIdx + 1 | 0] * a11 - c[cIdx] * a02;
      var b2 = v[d_0] + v[e + 2 | 0];
      var b3 = v[d_0 + 1 | 0] - v[e + 3 | 0];
      v[d_0] = b2 + b0;
      v[d_0 + 1 | 0] = b3 + b1;
      v[e + 2 | 0] = b2 - b0;
      v[e + 3 | 0] = b1 - b3;
      a02 = v[d_0 + 2 | 0] - v[e];
      a11 = v[d_0 + 3 | 0] + v[e + 1 | 0];
      b0 = c[cIdx + 3 | 0] * a02 + c[cIdx + 2 | 0] * a11;
      b1 = c[cIdx + 3 | 0] * a11 - c[cIdx + 2 | 0] * a02;
      b2 = v[d_0 + 2 | 0] + v[e];
      b3 = v[d_0 + 3 | 0] - v[e + 1 | 0];
      v[d_0 + 2 | 0] = b2 + b0;
      v[d_0 + 3 | 0] = b3 + b1;
      v[e] = b2 - b0;
      v[e + 1 | 0] = b1 - b3;
      cIdx = cIdx + 4 | 0;
      d_0 = d_0 + 4 | 0;
      e = e - 4 | 0;
    }
    // Inline function 'kotlin.run' call
    var bArr = ensureNotNull($this.tB_1[blocktype]);
    var bIdx = n2 - 8 | 0;
    var eIdx_0 = n2 - 8 | 0;
    var d0_1 = 0;
    var d1_1 = n2 - 4 | 0;
    var d2 = n2;
    var d3 = n - 4 | 0;
    while (eIdx_0 >= 0) {
      var p3 = v[eIdx_0 + 6 | 0] * bArr[bIdx + 7 | 0] - v[eIdx_0 + 7 | 0] * bArr[bIdx + 6 | 0];
      var p2 = -v[eIdx_0 + 6 | 0] * bArr[bIdx + 6 | 0] - v[eIdx_0 + 7 | 0] * bArr[bIdx + 7 | 0];
      buffer[d0_1] = p3;
      buffer[d1_1 + 3 | 0] = -p3;
      buffer[d2] = p2;
      buffer[d3 + 3 | 0] = p2;
      var p1 = v[eIdx_0 + 4 | 0] * bArr[bIdx + 5 | 0] - v[eIdx_0 + 5 | 0] * bArr[bIdx + 4 | 0];
      var p0 = -v[eIdx_0 + 4 | 0] * bArr[bIdx + 4 | 0] - v[eIdx_0 + 5 | 0] * bArr[bIdx + 5 | 0];
      buffer[d0_1 + 1 | 0] = p1;
      buffer[d1_1 + 2 | 0] = -p1;
      buffer[d2 + 1 | 0] = p0;
      buffer[d3 + 2 | 0] = p0;
      p3 = v[eIdx_0 + 2 | 0] * bArr[bIdx + 3 | 0] - v[eIdx_0 + 3 | 0] * bArr[bIdx + 2 | 0];
      p2 = -v[eIdx_0 + 2 | 0] * bArr[bIdx + 2 | 0] - v[eIdx_0 + 3 | 0] * bArr[bIdx + 3 | 0];
      buffer[d0_1 + 2 | 0] = p3;
      buffer[d1_1 + 1 | 0] = -p3;
      buffer[d2 + 2 | 0] = p2;
      buffer[d3 + 1 | 0] = p2;
      p1 = v[eIdx_0] * bArr[bIdx + 1 | 0] - v[eIdx_0 + 1 | 0] * bArr[bIdx];
      p0 = -v[eIdx_0] * bArr[bIdx] - v[eIdx_0 + 1 | 0] * bArr[bIdx + 1 | 0];
      buffer[d0_1 + 3 | 0] = p1;
      buffer[d1_1] = -p1;
      buffer[d2 + 3 | 0] = p0;
      buffer[d3] = p0;
      bIdx = bIdx - 8 | 0;
      eIdx_0 = eIdx_0 - 8 | 0;
      d0_1 = d0_1 + 4 | 0;
      d2 = d2 + 4 | 0;
      d1_1 = d1_1 - 4 | 0;
      d3 = d3 - 4 | 0;
    }
  }
  function imdctStep3InnerSLoop_0($this, n, e, iOff, kOff, aBase, a0Off, k1, k0) {
    var a0 = aBase[a0Off];
    var a1 = aBase[a0Off + 1 | 0];
    var a2 = aBase[a0Off + k1 | 0];
    var a3 = aBase[(a0Off + k1 | 0) + 1 | 0];
    var a4 = aBase[a0Off + imul(k1, 2) | 0];
    var a5 = aBase[(a0Off + imul(k1, 2) | 0) + 1 | 0];
    var a6 = aBase[a0Off + imul(k1, 3) | 0];
    var a7 = aBase[(a0Off + imul(k1, 3) | 0) + 1 | 0];
    var ee0 = iOff;
    var ee2 = ee0 + kOff | 0;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k00 = e[ee0] - e[ee2];
        var k11 = e[ee0 - 1 | 0] - e[ee2 - 1 | 0];
        e[ee0] = e[ee0] + e[ee2];
        e[ee0 - 1 | 0] = e[ee0 - 1 | 0] + e[ee2 - 1 | 0];
        e[ee2] = k00 * a0 - k11 * a1;
        e[ee2 - 1 | 0] = k11 * a0 + k00 * a1;
        k00 = e[ee0 - 2 | 0] - e[ee2 - 2 | 0];
        k11 = e[ee0 - 3 | 0] - e[ee2 - 3 | 0];
        e[ee0 - 2 | 0] = e[ee0 - 2 | 0] + e[ee2 - 2 | 0];
        e[ee0 - 3 | 0] = e[ee0 - 3 | 0] + e[ee2 - 3 | 0];
        e[ee2 - 2 | 0] = k00 * a2 - k11 * a3;
        e[ee2 - 3 | 0] = k11 * a2 + k00 * a3;
        k00 = e[ee0 - 4 | 0] - e[ee2 - 4 | 0];
        k11 = e[ee0 - 5 | 0] - e[ee2 - 5 | 0];
        e[ee0 - 4 | 0] = e[ee0 - 4 | 0] + e[ee2 - 4 | 0];
        e[ee0 - 5 | 0] = e[ee0 - 5 | 0] + e[ee2 - 5 | 0];
        e[ee2 - 4 | 0] = k00 * a4 - k11 * a5;
        e[ee2 - 5 | 0] = k11 * a4 + k00 * a5;
        k00 = e[ee0 - 6 | 0] - e[ee2 - 6 | 0];
        k11 = e[ee0 - 7 | 0] - e[ee2 - 7 | 0];
        e[ee0 - 6 | 0] = e[ee0 - 6 | 0] + e[ee2 - 6 | 0];
        e[ee0 - 7 | 0] = e[ee0 - 7 | 0] + e[ee2 - 7 | 0];
        e[ee2 - 6 | 0] = k00 * a6 - k11 * a7;
        e[ee2 - 7 | 0] = k11 * a6 + k00 * a7;
        ee0 = ee0 - k0 | 0;
        ee2 = ee2 - k0 | 0;
      }
       while (inductionVariable < n);
  }
  function getWindow($this, len) {
    var l = len << 1;
    if (l === $this.blocksize0__1)
      return $this.windowData_1[0];
    if (l === $this.blocksize1__1)
      return $this.windowData_1[1];
    return null;
  }
  function doFloor($this, map, i, n, target, finalYArr) {
    var n2 = n >> 1;
    var s = ensureNotNull(map.chan_1)[i].mux_1;
    var floor = map.submapFloor_1[s];
    if ($this.floorTypes_1[floor] === 0) {
      return setError($this, STBVorbisError_INVALID_STREAM_getInstance());
    } else {
      var g = ensureNotNull(ensureNotNull($this.floorConfig_1)[floor]);
      var lx0 = 0;
      var ly = imul(finalYArr[0] & 65535, g.floor1Multiplier_1);
      var lx = lx0;
      var inductionVariable = 1;
      var last = g.values_1;
      if (inductionVariable < last)
        do {
          var q = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var j = g.sortedOrder_1[q];
          if (finalYArr[j] >= 0) {
            var hy = imul(finalYArr[j] & 65535, g.floor1Multiplier_1);
            var hx = g.xList_1[j] & 65535;
            if (!(lx === hx)) {
              drawLine($this, target, lx, ly, hx, hy, n2);
            }
            lx = hx;
            ly = hy;
          }
        }
         while (inductionVariable < last);
      if (n2 > lx) {
        var dbVal = Companion_getInstance_1().inverseDbTable_1[ly & 255];
        var inductionVariable_0 = lx;
        if (inductionVariable_0 < n2)
          do {
            var j_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            target[j_0] = target[j_0] * dbVal;
          }
           while (inductionVariable_0 < n2);
      }
    }
    return true;
  }
  function vorbisDecodeInitial($this, pLeftStart, pLeftEnd, pRightStart, pRightEnd, mode) {
    $this.channelBufferStart_1 = 0;
    $this.channelBufferEnd_1 = 0;
    $l$loop: while (true) {
      if ($this.eof_1)
        return false;
      if (!maybeStartPacket($this))
        return false;
      if (!(getBits($this, 1) === 0)) {
        while (!(-1 === get8Packet($this))) {
        }
        continue $l$loop;
      }
      var i = getBits($this, ilog(Companion_getInstance_1(), $this.modeCount_1 - 1 | 0));
      if (i === -1)
        return false;
      if (i >= $this.modeCount_1)
        return false;
      mode[0] = i;
      var m = $this.modeConfig_1[i];
      var n;
      var prev;
      var next;
      if (!(m.blockflag_1 === 0)) {
        n = $this.blocksize1__1;
        prev = getBits($this, 1);
        next = getBits($this, 1);
      } else {
        n = $this.blocksize0__1;
        prev = 0;
        next = 0;
      }
      var windowCenter = n >> 1;
      if (!(m.blockflag_1 === 0) && prev === 0) {
        pLeftStart[0] = (n - $this.blocksize0__1 | 0) >> 2;
        pLeftEnd[0] = (n + $this.blocksize0__1 | 0) >> 2;
      } else {
        pLeftStart[0] = 0;
        pLeftEnd[0] = windowCenter;
      }
      if (!(m.blockflag_1 === 0) && next === 0) {
        pRightStart[0] = (imul(n, 3) - $this.blocksize0__1 | 0) >> 2;
        pRightEnd[0] = (imul(n, 3) + $this.blocksize0__1 | 0) >> 2;
      } else {
        pRightStart[0] = windowCenter;
        pRightEnd[0] = n;
      }
      return true;
    }
  }
  function vorbisDecodePacketRest($this, lenArr, m, leftStart0, leftEnd, rightStart, rightEnd, pLeft) {
    var leftStart = leftStart0;
    var n = $this.blocksize_1[m.blockflag_1];
    var map = ensureNotNull($this.mappings_1)[m.mapping_1];
    var n2 = n >> 1;
    var zeroChannel = booleanArray(256);
    var reallyZeroChannel = booleanArray(256);
    var inductionVariable = 0;
    var last = $this.channels_1;
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var s = ensureNotNull(map.chan_1)[i].mux_1;
        zeroChannel[i] = false;
        var floor = map.submapFloor_1[s];
        if ($this.floorTypes_1[floor] === 0) {
          return setError($this, STBVorbisError_INVALID_STREAM_getInstance());
        } else {
          var g = ensureNotNull(ensureNotNull($this.floorConfig_1)[floor]);
          if (!(getBits($this, 1) === 0)) {
            // Inline function 'kotlin.intArrayOf' call
            var rangeList = new Int32Array([256, 128, 86, 64]);
            var range = rangeList[g.floor1Multiplier_1 - 1 | 0];
            var offset = 2;
            var fy = ensureNotNull($this.finalY_1[i]);
            fy[0] = toShort(getBits($this, ilog(Companion_getInstance_1(), range) - 1 | 0));
            fy[1] = toShort(getBits($this, ilog(Companion_getInstance_1(), range) - 1 | 0));
            var inductionVariable_0 = 0;
            var last_0 = g.partitions_1;
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var pclass = g.partitionClassList_1[j];
                var cdim = g.classDimensions_1[pclass];
                var cbits = g.classSubclasses_1[pclass];
                var csub = (1 << cbits) - 1 | 0;
                var cval = 0;
                if (!(cbits === 0)) {
                  var cb = ensureNotNull($this.codebooks_1)[g.classMasterbooks_1[pclass]];
                  cval = decode($this, cb);
                }
                var inductionVariable_1 = 0;
                if (inductionVariable_1 < cdim)
                  do {
                    var k = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var book = g.subclassBooks_1[pclass][cval & csub];
                    cval = cval >> cbits;
                    if (book >= 0) {
                      var cb_0 = ensureNotNull($this.codebooks_1)[book];
                      var temp = decode($this, cb_0);
                      var _unary__edvuaz = offset;
                      offset = _unary__edvuaz + 1 | 0;
                      fy[_unary__edvuaz] = toShort(temp);
                    } else {
                      var _unary__edvuaz_0 = offset;
                      offset = _unary__edvuaz_0 + 1 | 0;
                      fy[_unary__edvuaz_0] = 0;
                    }
                  }
                   while (inductionVariable_1 < cdim);
              }
               while (inductionVariable_0 < last_0);
            if ($this.validBits_1 === -1) {
              zeroChannel[i] = true;
              continue $l$loop;
            }
            var step2Flag = booleanArray(256);
            step2Flag[0] = true;
            step2Flag[1] = true;
            var inductionVariable_2 = 2;
            var last_1 = g.values_1;
            if (inductionVariable_2 < last_1)
              do {
                var j_0 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                var low = g.neighbors_1[j_0][0];
                var high = g.neighbors_1[j_0][1];
                var pred = predictPoint($this, g.xList_1[j_0] & 65535, g.xList_1[low] & 65535, g.xList_1[high] & 65535, fy[low], fy[high]);
                var v = fy[j_0];
                var highroom = range - pred | 0;
                var lowroom = pred;
                var room = lowroom > highroom ? imul(highroom, 2) : imul(lowroom, 2);
                if (!(v === 0)) {
                  step2Flag[low] = true;
                  step2Flag[high] = true;
                  step2Flag[j_0] = true;
                  if (v >= room) {
                    if (lowroom < highroom) {
                      fy[j_0] = toShort((v - lowroom | 0) + pred | 0);
                    } else {
                      fy[j_0] = toShort(((pred - v | 0) + highroom | 0) - 1 | 0);
                    }
                  } else {
                    if (!((v & 1) === 0)) {
                      fy[j_0] = toShort(pred - ((v + 1 | 0) >> 1) | 0);
                    } else {
                      fy[j_0] = toShort(pred + (v >> 1) | 0);
                    }
                  }
                } else {
                  step2Flag[j_0] = false;
                  fy[j_0] = toShort(pred);
                }
              }
               while (inductionVariable_2 < last_1);
            var inductionVariable_3 = 0;
            var last_2 = g.values_1;
            if (inductionVariable_3 < last_2)
              do {
                var j_1 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                if (!step2Flag[j_1]) {
                  fy[j_1] = -1;
                }
              }
               while (inductionVariable_3 < last_2);
          } else {
            zeroChannel[i] = true;
          }
        }
      }
       while (inductionVariable < last);
    var inductionVariable_4 = 0;
    var last_3 = $this.channels_1;
    if (inductionVariable_4 < last_3)
      do {
        var i_0 = inductionVariable_4;
        inductionVariable_4 = inductionVariable_4 + 1 | 0;
        reallyZeroChannel[i_0] = zeroChannel[i_0];
      }
       while (inductionVariable_4 < last_3);
    var inductionVariable_5 = 0;
    var last_4 = map.couplingSteps_1;
    if (inductionVariable_5 < last_4)
      do {
        var i_1 = inductionVariable_5;
        inductionVariable_5 = inductionVariable_5 + 1 | 0;
        if (!zeroChannel[ensureNotNull(map.chan_1)[i_1].magnitude_1] || !zeroChannel[ensureNotNull(map.chan_1)[i_1].angle_1]) {
          zeroChannel[ensureNotNull(map.chan_1)[i_1].magnitude_1] = false;
          zeroChannel[ensureNotNull(map.chan_1)[i_1].angle_1] = false;
        }
      }
       while (inductionVariable_5 < last_4);
    var inductionVariable_6 = 0;
    var last_5 = map.submaps_1;
    if (inductionVariable_6 < last_5)
      do {
        var i_2 = inductionVariable_6;
        inductionVariable_6 = inductionVariable_6 + 1 | 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var residueBuffers = Array(16);
        var doNotDecode = booleanArray(256);
        var ch = 0;
        var inductionVariable_7 = 0;
        var last_6 = $this.channels_1;
        if (inductionVariable_7 < last_6)
          do {
            var j_2 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            if (ensureNotNull(map.chan_1)[j_2].mux_1 === i_2) {
              if (zeroChannel[j_2]) {
                doNotDecode[ch] = true;
                residueBuffers[ch] = null;
              } else {
                doNotDecode[ch] = false;
                residueBuffers[ch] = $this.channelBuffers_1[j_2];
              }
              ch = ch + 1 | 0;
            }
          }
           while (inductionVariable_7 < last_6);
        var r = map.submapResidue_1[i_2];
        decodeResidue($this, residueBuffers, ch, n2, r, doNotDecode);
      }
       while (inductionVariable_6 < last_5);
    var inductionVariable_8 = map.couplingSteps_1 - 1 | 0;
    if (0 <= inductionVariable_8)
      do {
        var i_3 = inductionVariable_8;
        inductionVariable_8 = inductionVariable_8 + -1 | 0;
        var mag = ensureNotNull($this.channelBuffers_1[ensureNotNull(map.chan_1)[i_3].magnitude_1]);
        var ang = ensureNotNull($this.channelBuffers_1[ensureNotNull(map.chan_1)[i_3].angle_1]);
        var inductionVariable_9 = 0;
        if (inductionVariable_9 < n2)
          do {
            var j_3 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            var m2;
            var a2;
            if (mag[j_3] > 0) {
              if (ang[j_3] > 0) {
                m2 = mag[j_3];
                a2 = mag[j_3] - ang[j_3];
              } else {
                a2 = mag[j_3];
                m2 = mag[j_3] + ang[j_3];
              }
            } else {
              if (ang[j_3] > 0) {
                m2 = mag[j_3];
                a2 = mag[j_3] + ang[j_3];
              } else {
                a2 = mag[j_3];
                m2 = mag[j_3] - ang[j_3];
              }
            }
            mag[j_3] = m2;
            ang[j_3] = a2;
          }
           while (inductionVariable_9 < n2);
      }
       while (0 <= inductionVariable_8);
    var inductionVariable_10 = 0;
    var last_7 = $this.channels_1;
    if (inductionVariable_10 < last_7)
      do {
        var i_4 = inductionVariable_10;
        inductionVariable_10 = inductionVariable_10 + 1 | 0;
        if (reallyZeroChannel[i_4]) {
          fill(ensureNotNull($this.channelBuffers_1[i_4]), 0.0, 0, n2);
        } else {
          doFloor($this, map, i_4, n, ensureNotNull($this.channelBuffers_1[i_4]), ensureNotNull($this.finalY_1[i_4]));
        }
      }
       while (inductionVariable_10 < last_7);
    var inductionVariable_11 = 0;
    var last_8 = $this.channels_1;
    if (inductionVariable_11 < last_8)
      do {
        var i_5 = inductionVariable_11;
        inductionVariable_11 = inductionVariable_11 + 1 | 0;
        inverseMdct($this, ensureNotNull($this.channelBuffers_1[i_5]), n, m.blockflag_1);
      }
       while (inductionVariable_11 < last_8);
    flushPacket($this);
    if ($this.firstDecode_1) {
      $this.currentLoc_1 = -n2 | 0;
      $this.discardSamplesDeferred_1 = n - rightEnd | 0;
      $this.currentLocValid_1 = true;
      $this.firstDecode_1 = false;
    } else if (!($this.discardSamplesDeferred_1 === 0)) {
      if ($this.discardSamplesDeferred_1 >= (rightStart - leftStart | 0)) {
        $this.discardSamplesDeferred_1 = $this.discardSamplesDeferred_1 - (rightStart - leftStart | 0) | 0;
        leftStart = rightStart;
        pLeft[0] = leftStart;
      } else {
        leftStart = leftStart + $this.discardSamplesDeferred_1 | 0;
        pLeft[0] = leftStart;
        $this.discardSamplesDeferred_1 = 0;
      }
    }
    if ($this.lastSegWhich_1 === $this.endSegWithKnownLoc_1) {
      if ($this.currentLocValid_1 && !(($this.pageFlag_1 & 4) === 0)) {
        var currentEnd = $this.knownLocForPacket_1;
        var tmp = bitwiseAnd(fromInt(currentEnd), new Long(-1, 0));
        var tmp0 = bitwiseAnd(fromInt($this.currentLoc_1), new Long(-1, 0));
        // Inline function 'kotlin.Long.plus' call
        var other = rightEnd - leftStart | 0;
        var tmp$ret$2 = add(tmp0, fromInt(other));
        if (compare(tmp, tmp$ret$2) < 0) {
          if (compare(bitwiseAnd(fromInt(currentEnd), new Long(-1, 0)), bitwiseAnd(fromInt($this.currentLoc_1), new Long(-1, 0))) < 0) {
            lenArr[0] = 0;
          } else {
            lenArr[0] = currentEnd - $this.currentLoc_1 | 0;
          }
          lenArr[0] = lenArr[0] + leftStart | 0;
          if (rightEnd < lenArr[0]) {
            lenArr[0] = rightEnd;
          }
          $this.currentLoc_1 = $this.currentLoc_1 + lenArr[0] | 0;
          return true;
        }
      }
      $this.currentLoc_1 = $this.knownLocForPacket_1 - (n2 - leftStart | 0) | 0;
      $this.currentLocValid_1 = true;
    }
    if ($this.currentLocValid_1)
      $this.currentLoc_1 = $this.currentLoc_1 + (rightStart - leftStart | 0) | 0;
    lenArr[0] = rightEnd;
    return true;
  }
  function vorbisDecodePacket($this, lenArr, pLeft, pRight) {
    var mode = new Int32Array(1);
    var leftEnd = new Int32Array(1);
    var rightEnd = new Int32Array(1);
    if (!vorbisDecodeInitial($this, pLeft, leftEnd, pRight, rightEnd, mode))
      return false;
    return vorbisDecodePacketRest($this, lenArr, $this.modeConfig_1[mode[0]], pLeft[0], leftEnd[0], pRight[0], rightEnd[0], pLeft);
  }
  function vorbisFinishFrame($this, len0, left, right) {
    var len = len0;
    if (!($this.previousLength_1 === 0)) {
      var n = $this.previousLength_1;
      var tmp0_elvis_lhs = getWindow($this, n);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return 0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var w = tmp;
      var inductionVariable = 0;
      var last = $this.channels_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < n)
            do {
              var j = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              ensureNotNull($this.channelBuffers_1[i])[left + j | 0] = ensureNotNull($this.channelBuffers_1[i])[left + j | 0] * w[j] + ensureNotNull($this.previousWindow_1[i])[j] * w[(n - 1 | 0) - j | 0];
            }
             while (inductionVariable_0 < n);
        }
         while (inductionVariable < last);
    }
    var prev = $this.previousLength_1;
    $this.previousLength_1 = len - right | 0;
    var inductionVariable_1 = 0;
    var last_0 = $this.channels_1;
    if (inductionVariable_1 < last_0)
      do {
        var i_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var j_0 = 0;
        while ((right + j_0 | 0) < len) {
          ensureNotNull($this.previousWindow_1[i_0])[j_0] = ensureNotNull($this.channelBuffers_1[i_0])[right + j_0 | 0];
          j_0 = j_0 + 1 | 0;
        }
      }
       while (inductionVariable_1 < last_0);
    if (prev === 0)
      return 0;
    if (right > len)
      len = len;
    var actualRight = right > len ? len : right;
    $this.samplesOutput_1 = $this.samplesOutput_1 + (actualRight - left | 0) | 0;
    return actualRight - left | 0;
  }
  function vorbisPumpFirstFrame($this) {
    var lenArr = new Int32Array(1);
    var leftArr = new Int32Array(1);
    var rightArr = new Int32Array(1);
    var res = vorbisDecodePacket($this, lenArr, leftArr, rightArr);
    if (res) {
      vorbisFinishFrame($this, lenArr[0], leftArr[0], rightArr[0]);
    }
    return res;
  }
  function startDecoder($this) {
    var header = new Int8Array(6);
    var longestFloorlist = 0;
    $this.firstDecode_1 = true;
    if (!startPage($this))
      return false;
    if (($this.pageFlag_1 & 2) === 0)
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    if (!(($this.pageFlag_1 & 4) === 0))
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    if (!(($this.pageFlag_1 & 1) === 0))
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    if (!($this.segmentCount_1 === 1))
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    if (!($this.segments_1[0] === 30)) {
      if ($this.segments_1[0] === 64) {
        var h = new Int8Array(6);
        var tmp;
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        var tmp_5;
        var tmp_6;
        if (getn($this, h, 0, 6)) {
          var tmp_7 = h[0];
          // Inline function 'kotlin.code' call
          var this_0 = _Char___init__impl__6a9atx(102);
          var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
          tmp_6 = tmp_7 === toByte(tmp$ret$0);
        } else {
          tmp_6 = false;
        }
        if (tmp_6) {
          var tmp_8 = h[1];
          // Inline function 'kotlin.code' call
          var this_1 = _Char___init__impl__6a9atx(105);
          var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
          tmp_5 = tmp_8 === toByte(tmp$ret$1);
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          var tmp_9 = h[2];
          // Inline function 'kotlin.code' call
          var this_2 = _Char___init__impl__6a9atx(115);
          var tmp$ret$2 = Char__toInt_impl_vasixd(this_2);
          tmp_4 = tmp_9 === toByte(tmp$ret$2);
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          var tmp_10 = h[3];
          // Inline function 'kotlin.code' call
          var this_3 = _Char___init__impl__6a9atx(104);
          var tmp$ret$3 = Char__toInt_impl_vasixd(this_3);
          tmp_3 = tmp_10 === toByte(tmp$ret$3);
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          var tmp_11 = h[4];
          // Inline function 'kotlin.code' call
          var this_4 = _Char___init__impl__6a9atx(101);
          var tmp$ret$4 = Char__toInt_impl_vasixd(this_4);
          tmp_2 = tmp_11 === toByte(tmp$ret$4);
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          var tmp_12 = h[5];
          // Inline function 'kotlin.code' call
          var this_5 = _Char___init__impl__6a9atx(97);
          var tmp$ret$5 = Char__toInt_impl_vasixd(this_5);
          tmp_1 = tmp_12 === toByte(tmp$ret$5);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var tmp_13 = get8($this);
          // Inline function 'kotlin.code' call
          var this_6 = _Char___init__impl__6a9atx(100);
          tmp_0 = tmp_13 === Char__toInt_impl_vasixd(this_6);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = get8($this) === 0;
        } else {
          tmp = false;
        }
        if (tmp)
          return setError($this, STBVorbisError_OGG_SKELETON_NOT_SUPPORTED_getInstance());
      }
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    }
    if (!(get8($this) === 1))
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    if (!getn($this, header, 0, 6))
      return setError($this, STBVorbisError_UNEXPECTED_EOF_getInstance());
    if (!vorbisValidate($this, header, 0))
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    if (!(get32($this) === 0))
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    $this.channels_1 = get8($this);
    if ($this.channels_1 === 0)
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    if (16 < $this.channels_1)
      return setError($this, STBVorbisError_TOO_MANY_CHANNELS_getInstance());
    $this.sampleRate_1 = get32($this);
    if ($this.sampleRate_1 === 0)
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    get32($this);
    get32($this);
    get32($this);
    var x = get8($this);
    var log0 = x & 15;
    var log1 = x >> 4;
    $this.blocksize0__1 = 1 << log0;
    $this.blocksize1__1 = 1 << log1;
    if (6 > log0 || 13 < log0)
      return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
    if (6 > log1 || 13 < log1)
      return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
    if (log0 > log1)
      return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
    var ff = get8($this);
    if ((ff & 1) === 0)
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    if (!startPage($this))
      return false;
    if (!startPacket($this))
      return false;
    if (nextSegment($this) === 0)
      return false;
    if (!(get8Packet($this) === 3))
      return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
    var header2 = new Int32Array(6);
    var inductionVariable = 0;
    if (inductionVariable < 6)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        header2[i] = get8Packet($this);
      }
       while (inductionVariable < 6);
    if (!vorbisValidateInts($this, header2, 0))
      return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
    var vendorLen = get32Packet($this);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < vendorLen)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        get8Packet($this);
      }
       while (inductionVariable_0 < vendorLen);
    var commentCount = get32Packet($this);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < commentCount)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var commentLen = get32Packet($this);
        var inductionVariable_2 = 0;
        if (inductionVariable_2 < commentLen)
          do {
            var j = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            get8Packet($this);
          }
           while (inductionVariable_2 < commentLen);
      }
       while (inductionVariable_1 < commentCount);
    var ff2 = get8Packet($this);
    if ((ff2 & 1) === 0)
      return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
    skip($this, $this.bytesInSeg_1);
    $this.bytesInSeg_1 = 0;
    var segLen;
    do {
      segLen = nextSegment($this);
      skip($this, segLen);
      $this.bytesInSeg_1 = 0;
    }
     while (!(segLen === 0));
    if (!startPacket($this))
      return false;
    crc32Init(Companion_getInstance_1());
    if (!(get8Packet($this) === 5))
      return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
    var header3 = new Int32Array(6);
    var inductionVariable_3 = 0;
    if (inductionVariable_3 < 6)
      do {
        var i_2 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        header3[i_2] = get8Packet($this);
      }
       while (inductionVariable_3 < 6);
    if (!vorbisValidateInts($this, header3, 0))
      return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
    $this.codebookCount_1 = getBits($this, 8) + 1 | 0;
    var tmp_14 = $this;
    var tmp_15 = 0;
    var tmp_16 = $this.codebookCount_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_17 = Array(tmp_16);
    while (tmp_15 < tmp_16) {
      tmp_17[tmp_15] = new Codebook();
      tmp_15 = tmp_15 + 1 | 0;
    }
    tmp_14.codebooks_1 = tmp_17;
    var inductionVariable_4 = 0;
    var last = $this.codebookCount_1;
    if (inductionVariable_4 < last)
      do {
        var i_3 = inductionVariable_4;
        inductionVariable_4 = inductionVariable_4 + 1 | 0;
        var c = ensureNotNull($this.codebooks_1)[i_3];
        if (!(getBits($this, 8) === 66))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if (!(getBits($this, 8) === 67))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if (!(getBits($this, 8) === 86))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        var xb = getBits($this, 8);
        c.dimensions_1 = (getBits($this, 8) << 8) + xb | 0;
        xb = getBits($this, 8);
        var yb = getBits($this, 8);
        c.entries_1 = ((getBits($this, 8) << 16) + (yb << 8) | 0) + xb | 0;
        var ordered = getBits($this, 1);
        c.sparse_1 = !(ordered === 0) ? 0 : getBits($this, 1);
        if (c.dimensions_1 === 0 && !(c.entries_1 === 0))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        var lengths;
        if (!(c.sparse_1 === 0)) {
          lengths = new Int8Array(c.entries_1);
        } else {
          lengths = new Int8Array(c.entries_1);
          c.codewordLengths_1 = lengths;
        }
        var total = 0;
        if (!(ordered === 0)) {
          var currentEntry = 0;
          var currentLength = getBits($this, 5) + 1 | 0;
          while (currentEntry < c.entries_1) {
            var limit = c.entries_1 - currentEntry | 0;
            var n = getBits($this, ilog(Companion_getInstance_1(), limit));
            if (currentLength >= 32)
              return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
            if ((currentEntry + n | 0) > c.entries_1)
              return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
            var inductionVariable_5 = currentEntry;
            var last_0 = currentEntry + n | 0;
            if (inductionVariable_5 < last_0)
              do {
                var idx = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                lengths[idx] = toByte(currentLength);
              }
               while (inductionVariable_5 < last_0);
            currentEntry = currentEntry + n | 0;
            currentLength = currentLength + 1 | 0;
          }
        } else {
          var inductionVariable_6 = 0;
          var last_1 = c.entries_1;
          if (inductionVariable_6 < last_1)
            do {
              var j_0 = inductionVariable_6;
              inductionVariable_6 = inductionVariable_6 + 1 | 0;
              var present = !(c.sparse_1 === 0) ? getBits($this, 1) : 1;
              if (!(present === 0)) {
                lengths[j_0] = toByte(getBits($this, 5) + 1 | 0);
                total = total + 1 | 0;
                if ((lengths[j_0] & 255) === 32)
                  return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
              } else {
                lengths[j_0] = -1;
              }
            }
             while (inductionVariable_6 < last_1);
        }
        if (!(c.sparse_1 === 0) && total >= c.entries_1 >> 2) {
          var tmp_18 = c;
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_18.codewordLengths_1 = lengths.slice();
          c.sparse_1 = 0;
        }
        var sortedCount;
        if (!(c.sparse_1 === 0)) {
          sortedCount = total;
        } else {
          var sc = 0;
          var inductionVariable_7 = 0;
          var last_2 = c.entries_1;
          if (inductionVariable_7 < last_2)
            do {
              var j_1 = inductionVariable_7;
              inductionVariable_7 = inductionVariable_7 + 1 | 0;
              if ((lengths[j_1] & 255) > 10 && !((lengths[j_1] & 255) === 255)) {
                sc = sc + 1 | 0;
              }
            }
             while (inductionVariable_7 < last_2);
          sortedCount = sc;
        }
        c.sortedEntries_1 = sortedCount;
        var values = null;
        if (c.sparse_1 === 0) {
          c.codewords_1 = new Int32Array(c.entries_1);
        } else {
          if (!(c.sortedEntries_1 === 0)) {
            c.codewordLengths_1 = new Int8Array(c.sortedEntries_1);
            c.codewords_1 = new Int32Array(c.sortedEntries_1);
            values = new Int32Array(c.sortedEntries_1);
          }
        }
        var finalLengths = !(c.sparse_1 === 0) ? lengths : ensureNotNull(c.codewordLengths_1);
        if (!computeCodewords($this, c, finalLengths, c.entries_1, values)) {
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        }
        if (!(c.sortedEntries_1 === 0)) {
          c.sortedCodewords_1 = new Int32Array(c.sortedEntries_1 + 1 | 0);
          c.sortedValues_1 = new Int32Array(c.sortedEntries_1);
          computeSortedHuffman($this, c, finalLengths, values);
        }
        if (!(c.sparse_1 === 0)) {
          c.codewords_1 = null;
        }
        computeAcceleratedHuffman($this, c);
        c.lookupType_1 = getBits($this, 4);
        if (2 < c.lookupType_1)
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if (0 < c.lookupType_1) {
          c.minimumValue_1 = float32Unpack(Companion_getInstance_1(), getBits($this, 32));
          c.deltaValue_1 = float32Unpack(Companion_getInstance_1(), getBits($this, 32));
          c.valueBits_1 = getBits($this, 4) + 1 | 0;
          c.sequenceP_1 = getBits($this, 1);
          if (c.lookupType_1 === 1) {
            var lv = lookup1Values(Companion_getInstance_1(), c.entries_1, c.dimensions_1);
            if (0 > lv)
              return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
            c.lookupValues_1 = lv;
          } else {
            c.lookupValues_1 = imul(c.entries_1, c.dimensions_1);
          }
          if (c.lookupValues_1 === 0)
            return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
          var mults = new Int32Array(c.lookupValues_1);
          var inductionVariable_8 = 0;
          var last_3 = c.lookupValues_1;
          if (inductionVariable_8 < last_3)
            do {
              var j_2 = inductionVariable_8;
              inductionVariable_8 = inductionVariable_8 + 1 | 0;
              var q = getBits($this, c.valueBits_1);
              if (q === -1)
                return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
              mults[j_2] = q;
            }
             while (inductionVariable_8 < last_3);
          if (c.lookupType_1 === 1) {
            var last_4 = 0.0;
            var isSparse = !(c.sparse_1 === 0);
            if (!isSparse || c.sortedEntries_1 !== 0) {
              var expandLen = isSparse ? c.sortedEntries_1 : c.entries_1;
              c.multiplicands_1 = new Float32Array(imul(expandLen, c.dimensions_1));
              var inductionVariable_9 = 0;
              if (inductionVariable_9 < expandLen)
                do {
                  var j_3 = inductionVariable_9;
                  inductionVariable_9 = inductionVariable_9 + 1 | 0;
                  var z = isSparse ? ensureNotNull(c.sortedValues_1)[j_3] : j_3;
                  var div = 1;
                  var inductionVariable_10 = 0;
                  var last_5 = c.dimensions_1;
                  if (inductionVariable_10 < last_5)
                    do {
                      var k = inductionVariable_10;
                      inductionVariable_10 = inductionVariable_10 + 1 | 0;
                      var off = (z / div | 0) % c.lookupValues_1 | 0;
                      var v = mults[off] * c.deltaValue_1 + c.minimumValue_1 + last_4;
                      ensureNotNull(c.multiplicands_1)[imul(j_3, c.dimensions_1) + k | 0] = v;
                      if (!(c.sequenceP_1 === 0))
                        last_4 = v;
                      if ((k + 1 | 0) < c.dimensions_1) {
                        if (compare(bitwiseAnd(fromInt(div), new Long(-1, 0)), divide(new Long(-1, 0), bitwiseAnd(fromInt(c.lookupValues_1), new Long(-1, 0)))) > 0) {
                          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
                        }
                        div = imul(div, c.lookupValues_1);
                      }
                    }
                     while (inductionVariable_10 < last_5);
                }
                 while (inductionVariable_9 < expandLen);
              c.lookupType_1 = 2;
            }
          } else {
            var last_6 = 0.0;
            c.multiplicands_1 = new Float32Array(c.lookupValues_1);
            var inductionVariable_11 = 0;
            var last_7 = c.lookupValues_1;
            if (inductionVariable_11 < last_7)
              do {
                var j_4 = inductionVariable_11;
                inductionVariable_11 = inductionVariable_11 + 1 | 0;
                var v_0 = mults[j_4] * c.deltaValue_1 + c.minimumValue_1 + last_6;
                ensureNotNull(c.multiplicands_1)[j_4] = v_0;
                if (!(c.sequenceP_1 === 0))
                  last_6 = v_0;
              }
               while (inductionVariable_11 < last_7);
          }
        }
      }
       while (inductionVariable_4 < last);
    var tdCount = getBits($this, 6) + 1 | 0;
    var inductionVariable_12 = 0;
    if (inductionVariable_12 < tdCount)
      do {
        var i_4 = inductionVariable_12;
        inductionVariable_12 = inductionVariable_12 + 1 | 0;
        var z_0 = getBits($this, 16);
        if (!(z_0 === 0))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
      }
       while (inductionVariable_12 < tdCount);
    $this.floorCount_1 = getBits($this, 6) + 1 | 0;
    var tmp_19 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = $this.floorCount_1;
    tmp_19.floorConfig_1 = Array(size);
    var inductionVariable_13 = 0;
    var last_8 = $this.floorCount_1;
    if (inductionVariable_13 < last_8)
      do {
        var i_5 = inductionVariable_13;
        inductionVariable_13 = inductionVariable_13 + 1 | 0;
        $this.floorTypes_1[i_5] = getBits($this, 16);
        if (1 < $this.floorTypes_1[i_5])
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if ($this.floorTypes_1[i_5] === 0) {
          getBits($this, 8);
          getBits($this, 16);
          getBits($this, 16);
          getBits($this, 6);
          getBits($this, 8);
          var nBooks = getBits($this, 4) + 1 | 0;
          var inductionVariable_14 = 0;
          if (inductionVariable_14 < nBooks)
            do {
              var j_5 = inductionVariable_14;
              inductionVariable_14 = inductionVariable_14 + 1 | 0;
              getBits($this, 8);
            }
             while (inductionVariable_14 < nBooks);
          return setError($this, STBVorbisError_FEATURE_NOT_SUPPORTED_getInstance());
        } else {
          var g = new Floor1();
          ensureNotNull($this.floorConfig_1)[i_5] = g;
          var maxClass = -1;
          g.partitions_1 = getBits($this, 5);
          var inductionVariable_15 = 0;
          var last_9 = g.partitions_1;
          if (inductionVariable_15 < last_9)
            do {
              var j_6 = inductionVariable_15;
              inductionVariable_15 = inductionVariable_15 + 1 | 0;
              g.partitionClassList_1[j_6] = getBits($this, 4);
              if (g.partitionClassList_1[j_6] > maxClass)
                maxClass = g.partitionClassList_1[j_6];
            }
             while (inductionVariable_15 < last_9);
          var inductionVariable_16 = 0;
          var last_10 = maxClass;
          if (inductionVariable_16 <= last_10)
            do {
              var j_7 = inductionVariable_16;
              inductionVariable_16 = inductionVariable_16 + 1 | 0;
              g.classDimensions_1[j_7] = getBits($this, 3) + 1 | 0;
              g.classSubclasses_1[j_7] = getBits($this, 2);
              if (!(g.classSubclasses_1[j_7] === 0)) {
                g.classMasterbooks_1[j_7] = getBits($this, 8);
                if (g.classMasterbooks_1[j_7] >= $this.codebookCount_1)
                  return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
              }
              var inductionVariable_17 = 0;
              var last_11 = 1 << g.classSubclasses_1[j_7];
              if (inductionVariable_17 < last_11)
                do {
                  var k_0 = inductionVariable_17;
                  inductionVariable_17 = inductionVariable_17 + 1 | 0;
                  g.subclassBooks_1[j_7][k_0] = toShort(getBits($this, 8) - 1 | 0);
                  if (g.subclassBooks_1[j_7][k_0] >= $this.codebookCount_1)
                    return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
                }
                 while (inductionVariable_17 < last_11);
            }
             while (!(j_7 === last_10));
          g.floor1Multiplier_1 = getBits($this, 2) + 1 | 0;
          g.rangebits_1 = getBits($this, 4);
          g.xList_1[0] = 0;
          g.xList_1[1] = toShort(1 << g.rangebits_1);
          g.values_1 = 2;
          var inductionVariable_18 = 0;
          var last_12 = g.partitions_1;
          if (inductionVariable_18 < last_12)
            do {
              var j_8 = inductionVariable_18;
              inductionVariable_18 = inductionVariable_18 + 1 | 0;
              var c_0 = g.partitionClassList_1[j_8];
              var inductionVariable_19 = 0;
              var last_13 = g.classDimensions_1[c_0];
              if (inductionVariable_19 < last_13)
                do {
                  var k_1 = inductionVariable_19;
                  inductionVariable_19 = inductionVariable_19 + 1 | 0;
                  g.xList_1[g.values_1] = toShort(getBits($this, g.rangebits_1));
                  g.values_1 = g.values_1 + 1 | 0;
                }
                 while (inductionVariable_19 < last_13);
            }
             while (inductionVariable_18 < last_12);
          var tmp_20 = 0;
          var tmp_21 = g.values_1;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_22 = Array(tmp_21);
          while (tmp_20 < tmp_21) {
            var tmp_23 = tmp_20;
            tmp_22[tmp_23] = new StbVorbis$startDecoder$FloorOrdering(g.xList_1[tmp_23] & 65535, tmp_23);
            tmp_20 = tmp_20 + 1 | 0;
          }
          var p = tmp_22;
          // Inline function 'kotlin.collections.sortedBy' call
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_24 = StbVorbis$startDecoder$lambda;
          var tmp$ret$14 = new sam$kotlin_Comparator$0_6(tmp_24);
          var sorted = sortedWith_0(p, tmp$ret$14);
          var inductionVariable_20 = 0;
          var last_14 = g.values_1 - 1 | 0;
          if (inductionVariable_20 < last_14)
            do {
              var j_9 = inductionVariable_20;
              inductionVariable_20 = inductionVariable_20 + 1 | 0;
              if (sorted.get_c1px32_k$(j_9).x_1 === sorted.get_c1px32_k$(j_9 + 1 | 0).x_1)
                return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
            }
             while (inductionVariable_20 < last_14);
          var inductionVariable_21 = 0;
          var last_15 = g.values_1;
          if (inductionVariable_21 < last_15)
            do {
              var j_10 = inductionVariable_21;
              inductionVariable_21 = inductionVariable_21 + 1 | 0;
              g.sortedOrder_1[j_10] = sorted.get_c1px32_k$(j_10).id_1;
            }
             while (inductionVariable_21 < last_15);
          var inductionVariable_22 = 2;
          var last_16 = g.values_1;
          if (inductionVariable_22 < last_16)
            do {
              var j_11 = inductionVariable_22;
              inductionVariable_22 = inductionVariable_22 + 1 | 0;
              var lowArr = new Int32Array(1);
              var highArr = new Int32Array(1);
              findNeighbors(Companion_getInstance_1(), g.xList_1, j_11, lowArr, highArr);
              g.neighbors_1[j_11][0] = lowArr[0];
              g.neighbors_1[j_11][1] = highArr[0];
            }
             while (inductionVariable_22 < last_16);
          if (g.values_1 > longestFloorlist)
            longestFloorlist = g.values_1;
        }
      }
       while (inductionVariable_13 < last_8);
    $this.residueCount_1 = getBits($this, 6) + 1 | 0;
    var tmp_25 = $this;
    var tmp_26 = 0;
    var tmp_27 = $this.residueCount_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_28 = Array(tmp_27);
    while (tmp_26 < tmp_27) {
      tmp_28[tmp_26] = new Residue();
      tmp_26 = tmp_26 + 1 | 0;
    }
    tmp_25.residueConfig_1 = tmp_28;
    var inductionVariable_23 = 0;
    var last_17 = $this.residueCount_1;
    if (inductionVariable_23 < last_17)
      do {
        var i_6 = inductionVariable_23;
        inductionVariable_23 = inductionVariable_23 + 1 | 0;
        var r = ensureNotNull($this.residueConfig_1)[i_6];
        $this.residueTypes_1[i_6] = getBits($this, 16);
        if (2 < $this.residueTypes_1[i_6])
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        r.begin_1 = getBits($this, 24);
        r.end_1 = getBits($this, 24);
        if (r.begin_1 > r.end_1)
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        r.partSize_1 = getBits($this, 24) + 1 | 0;
        r.classifications_1 = getBits($this, 6) + 1 | 0;
        r.classbook_1 = getBits($this, 8);
        if (r.classbook_1 >= $this.codebookCount_1)
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        var residueCascade = new Int32Array(64);
        var inductionVariable_24 = 0;
        var last_18 = r.classifications_1;
        if (inductionVariable_24 < last_18)
          do {
            var j_12 = inductionVariable_24;
            inductionVariable_24 = inductionVariable_24 + 1 | 0;
            var lowBits = getBits($this, 3);
            var highBits = !(getBits($this, 1) === 0) ? getBits($this, 5) : 0;
            residueCascade[j_12] = imul(highBits, 8) + lowBits | 0;
          }
           while (inductionVariable_24 < last_18);
        var tmp_29 = r;
        var tmp_30 = 0;
        var tmp_31 = r.classifications_1;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_32 = Array(tmp_31);
        while (tmp_30 < tmp_31) {
          tmp_32[tmp_30] = new Int16Array(8);
          tmp_30 = tmp_30 + 1 | 0;
        }
        tmp_29.residueBooks_1 = tmp_32;
        var inductionVariable_25 = 0;
        var last_19 = r.classifications_1;
        if (inductionVariable_25 < last_19)
          do {
            var j_13 = inductionVariable_25;
            inductionVariable_25 = inductionVariable_25 + 1 | 0;
            var inductionVariable_26 = 0;
            if (inductionVariable_26 < 8)
              do {
                var k_2 = inductionVariable_26;
                inductionVariable_26 = inductionVariable_26 + 1 | 0;
                if (!((residueCascade[j_13] & 1 << k_2) === 0)) {
                  ensureNotNull(r.residueBooks_1)[j_13][k_2] = toShort(getBits($this, 8));
                  if (ensureNotNull(r.residueBooks_1)[j_13][k_2] >= $this.codebookCount_1)
                    return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
                } else {
                  ensureNotNull(r.residueBooks_1)[j_13][k_2] = -1;
                }
              }
               while (inductionVariable_26 < 8);
          }
           while (inductionVariable_25 < last_19);
        var cbEntries = ensureNotNull($this.codebooks_1)[r.classbook_1].entries_1;
        var tmp_33 = r;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp_33.classdata_1 = Array(cbEntries);
        var inductionVariable_27 = 0;
        if (inductionVariable_27 < cbEntries)
          do {
            var j_14 = inductionVariable_27;
            inductionVariable_27 = inductionVariable_27 + 1 | 0;
            var classwordsCount = ensureNotNull($this.codebooks_1)[r.classbook_1].dimensions_1;
            var temp = j_14;
            ensureNotNull(r.classdata_1)[j_14] = new Int8Array(classwordsCount);
            var inductionVariable_28 = classwordsCount - 1 | 0;
            if (0 <= inductionVariable_28)
              do {
                var k_3 = inductionVariable_28;
                inductionVariable_28 = inductionVariable_28 + -1 | 0;
                ensureNotNull(ensureNotNull(r.classdata_1)[j_14])[k_3] = toByte(temp % r.classifications_1 | 0);
                temp = temp / r.classifications_1 | 0;
              }
               while (0 <= inductionVariable_28);
          }
           while (inductionVariable_27 < cbEntries);
      }
       while (inductionVariable_23 < last_17);
    $this.mappingCount_1 = getBits($this, 6) + 1 | 0;
    var tmp_34 = $this;
    var tmp_35 = 0;
    var tmp_36 = $this.mappingCount_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_37 = Array(tmp_36);
    while (tmp_35 < tmp_36) {
      tmp_37[tmp_35] = new Mapping();
      tmp_35 = tmp_35 + 1 | 0;
    }
    tmp_34.mappings_1 = tmp_37;
    var inductionVariable_29 = 0;
    var last_20 = $this.mappingCount_1;
    if (inductionVariable_29 < last_20)
      do {
        var i_7 = inductionVariable_29;
        inductionVariable_29 = inductionVariable_29 + 1 | 0;
        var map = ensureNotNull($this.mappings_1)[i_7];
        var mappingType = getBits($this, 16);
        if (!(mappingType === 0))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        var tmp_38 = map;
        var tmp_39 = 0;
        var tmp_40 = $this.channels_1;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_41 = Array(tmp_40);
        while (tmp_39 < tmp_40) {
          tmp_41[tmp_39] = new MappingChannel();
          tmp_39 = tmp_39 + 1 | 0;
        }
        tmp_38.chan_1 = tmp_41;
        if (!(getBits($this, 1) === 0))
          map.submaps_1 = getBits($this, 4) + 1 | 0;
        else
          map.submaps_1 = 1;
        if (!(getBits($this, 1) === 0)) {
          map.couplingSteps_1 = getBits($this, 8) + 1 | 0;
          if (map.couplingSteps_1 > $this.channels_1)
            return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
          var inductionVariable_30 = 0;
          var last_21 = map.couplingSteps_1;
          if (inductionVariable_30 < last_21)
            do {
              var k_4 = inductionVariable_30;
              inductionVariable_30 = inductionVariable_30 + 1 | 0;
              ensureNotNull(map.chan_1)[k_4].magnitude_1 = getBits($this, ilog(Companion_getInstance_1(), $this.channels_1 - 1 | 0));
              ensureNotNull(map.chan_1)[k_4].angle_1 = getBits($this, ilog(Companion_getInstance_1(), $this.channels_1 - 1 | 0));
              if (ensureNotNull(map.chan_1)[k_4].magnitude_1 >= $this.channels_1)
                return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
              if (ensureNotNull(map.chan_1)[k_4].angle_1 >= $this.channels_1)
                return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
              if (ensureNotNull(map.chan_1)[k_4].magnitude_1 === ensureNotNull(map.chan_1)[k_4].angle_1)
                return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
            }
             while (inductionVariable_30 < last_21);
        } else {
          map.couplingSteps_1 = 0;
        }
        if (!(getBits($this, 2) === 0))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if (1 < map.submaps_1) {
          var inductionVariable_31 = 0;
          var last_22 = $this.channels_1;
          if (inductionVariable_31 < last_22)
            do {
              var j_15 = inductionVariable_31;
              inductionVariable_31 = inductionVariable_31 + 1 | 0;
              ensureNotNull(map.chan_1)[j_15].mux_1 = getBits($this, 4);
              if (ensureNotNull(map.chan_1)[j_15].mux_1 >= map.submaps_1)
                return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
            }
             while (inductionVariable_31 < last_22);
        } else {
          var inductionVariable_32 = 0;
          var last_23 = $this.channels_1;
          if (inductionVariable_32 < last_23)
            do {
              var j_16 = inductionVariable_32;
              inductionVariable_32 = inductionVariable_32 + 1 | 0;
              ensureNotNull(map.chan_1)[j_16].mux_1 = 0;
            }
             while (inductionVariable_32 < last_23);
        }
        var inductionVariable_33 = 0;
        var last_24 = map.submaps_1;
        if (inductionVariable_33 < last_24)
          do {
            var j_17 = inductionVariable_33;
            inductionVariable_33 = inductionVariable_33 + 1 | 0;
            getBits($this, 8);
            map.submapFloor_1[j_17] = getBits($this, 8);
            map.submapResidue_1[j_17] = getBits($this, 8);
            if (map.submapFloor_1[j_17] >= $this.floorCount_1)
              return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
            if (map.submapResidue_1[j_17] >= $this.residueCount_1)
              return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
          }
           while (inductionVariable_33 < last_24);
      }
       while (inductionVariable_29 < last_20);
    $this.modeCount_1 = getBits($this, 6) + 1 | 0;
    var inductionVariable_34 = 0;
    var last_25 = $this.modeCount_1;
    if (inductionVariable_34 < last_25)
      do {
        var i_8 = inductionVariable_34;
        inductionVariable_34 = inductionVariable_34 + 1 | 0;
        var m = $this.modeConfig_1[i_8];
        m.blockflag_1 = getBits($this, 1);
        m.windowtype_1 = getBits($this, 16);
        m.transformtype_1 = getBits($this, 16);
        m.mapping_1 = getBits($this, 8);
        if (!(m.windowtype_1 === 0))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if (!(m.transformtype_1 === 0))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if (m.mapping_1 >= $this.mappingCount_1)
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
      }
       while (inductionVariable_34 < last_25);
    flushPacket($this);
    $this.previousLength_1 = 0;
    var inductionVariable_35 = 0;
    var last_26 = $this.channels_1;
    if (inductionVariable_35 < last_26)
      do {
        var i_9 = inductionVariable_35;
        inductionVariable_35 = inductionVariable_35 + 1 | 0;
        $this.channelBuffers_1[i_9] = new Float32Array($this.blocksize1__1);
        $this.previousWindow_1[i_9] = new Float32Array($this.blocksize1__1 / 2 | 0);
        $this.finalY_1[i_9] = new Int16Array(longestFloorlist);
      }
       while (inductionVariable_35 < last_26);
    if (!initBlocksize($this, 0, $this.blocksize0__1))
      return false;
    if (!initBlocksize($this, 1, $this.blocksize1__1))
      return false;
    $this.blocksize_1[0] = $this.blocksize0__1;
    $this.blocksize_1[1] = $this.blocksize1__1;
    if ($this.nextSeg_1 === -1) {
      $this.firstAudioPageOffset_1 = getFileOffset($this);
    } else {
      $this.firstAudioPageOffset_1 = 0;
    }
    return true;
  }
  function vorbisFindPage($this, endArr, lastArr) {
    $l$loop_0: while (true) {
      if ($this.eof_1)
        return false;
      var n = get8($this);
      if (n === 79) {
        var retryLoc = getFileOffset($this);
        // Inline function 'kotlin.Long.minus' call
        var this_0 = bitwiseAnd(fromInt(retryLoc), new Long(-1, 0));
        var tmp$ret$0 = subtract(this_0, fromInt(25));
        if (compare(tmp$ret$0, bitwiseAnd(fromInt($this.streamLen_1), new Long(-1, 0))) > 0)
          return false;
        var matched = true;
        var inductionVariable = 1;
        if (inductionVariable < 4)
          $l$loop: do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (!(get8($this) === (Companion_getInstance_1().oggPageHeader_1[i] & 255))) {
              matched = false;
              break $l$loop;
            }
          }
           while (inductionVariable < 4);
        if ($this.eof_1)
          return false;
        if (matched) {
          var headerBuf = new Int8Array(27);
          headerBuf[0] = 79;
          headerBuf[1] = 103;
          headerBuf[2] = 103;
          headerBuf[3] = 83;
          var inductionVariable_0 = 4;
          if (inductionVariable_0 < 27)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              headerBuf[i_0] = toByte(get8($this));
            }
             while (inductionVariable_0 < 27);
          if ($this.eof_1)
            return false;
          if (!(headerBuf[4] === 0)) {
            setFileOffset($this, retryLoc);
            continue $l$loop_0;
          }
          var goal = (((headerBuf[22] & 255) + ((headerBuf[23] & 255) << 8) | 0) + ((headerBuf[24] & 255) << 16) | 0) + ((headerBuf[25] & 255) << 24) | 0;
          var inductionVariable_1 = 22;
          if (inductionVariable_1 < 26)
            do {
              var i_1 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              headerBuf[i_1] = 0;
            }
             while (inductionVariable_1 < 26);
          var crc = 0;
          var inductionVariable_2 = 0;
          if (inductionVariable_2 < 27)
            do {
              var i_2 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              crc = crc32Update(Companion_getInstance_1(), crc, headerBuf[i_2] & 255);
            }
             while (inductionVariable_2 < 27);
          var len = 0;
          var nSegments = headerBuf[26] & 255;
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < nSegments)
            do {
              var i_3 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              var s = get8($this);
              crc = crc32Update(Companion_getInstance_1(), crc, s);
              len = len + s | 0;
            }
             while (inductionVariable_3 < nSegments);
          if (!(len === 0) && $this.eof_1)
            return false;
          var inductionVariable_4 = 0;
          var last = len;
          if (inductionVariable_4 < last)
            do {
              var i_4 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              crc = crc32Update(Companion_getInstance_1(), crc, get8($this));
            }
             while (inductionVariable_4 < last);
          if (crc === goal) {
            if (!(endArr == null)) {
              endArr[0] = getFileOffset($this);
            }
            if (!(lastArr == null)) {
              lastArr[0] = !((headerBuf[5] & 255 & 4) === 0) ? 1 : 0;
            }
            setFileOffset($this, retryLoc - 1 | 0);
            return true;
          }
        }
        setFileOffset($this, retryLoc);
      }
    }
  }
  function getSeekPageInfo($this, z) {
    z.pageStart_1 = getFileOffset($this);
    var headerBuf = new Int8Array(27);
    if (!getn($this, headerBuf, 0, 27))
      return false;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = headerBuf[0];
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(79);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    if (!(tmp_2 === toByte(tmp$ret$0))) {
      tmp_1 = true;
    } else {
      var tmp_3 = headerBuf[1];
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(103);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp_1 = !(tmp_3 === toByte(tmp$ret$1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      var tmp_4 = headerBuf[2];
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(103);
      var tmp$ret$2 = Char__toInt_impl_vasixd(this_2);
      tmp_0 = !(tmp_4 === toByte(tmp$ret$2));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      var tmp_5 = headerBuf[3];
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(83);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_3);
      tmp = !(tmp_5 === toByte(tmp$ret$3));
    }
    if (tmp)
      return false;
    var nSegments = headerBuf[26] & 255;
    var lacing = new Int8Array(nSegments);
    if (!getn($this, lacing, 0, nSegments))
      return false;
    var len = 0;
    var inductionVariable = 0;
    if (inductionVariable < nSegments)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        len = len + (lacing[i] & 255) | 0;
      }
       while (inductionVariable < nSegments);
    z.pageEnd_1 = ((z.pageStart_1 + 27 | 0) + nSegments | 0) + len | 0;
    z.lastDecodedSample_1 = (((headerBuf[6] & 255) + ((headerBuf[7] & 255) << 8) | 0) + ((headerBuf[8] & 255) << 16) | 0) + ((headerBuf[9] & 255) << 24) | 0;
    setFileOffset($this, z.pageStart_1);
    return true;
  }
  function goToPageBefore($this, limitOffset) {
    var previousSafe;
    if (limitOffset >= 65536 && (limitOffset - 65536 | 0) >= $this.firstAudioPageOffset_1)
      previousSafe = limitOffset - 65536 | 0;
    else
      previousSafe = $this.firstAudioPageOffset_1;
    setFileOffset($this, previousSafe);
    var endArr = new Int32Array(1);
    while (vorbisFindPage($this, endArr, null)) {
      if (endArr[0] >= limitOffset && getFileOffset($this) < limitOffset)
        return true;
      setFileOffset($this, endArr[0]);
    }
    return false;
  }
  function seekToSampleCoarse($this, sampleNumber) {
    var left = new ProbedPage();
    var right = new ProbedPage();
    var mid = new ProbedPage();
    var streamLength = $this.streamLengthInSamples_cm65ha_k$();
    if (streamLength === 0)
      return setError($this, STBVorbisError_SEEK_WITHOUT_LENGTH_getInstance());
    if (compare(bitwiseAnd(fromInt(sampleNumber), new Long(-1, 0)), bitwiseAnd(fromInt(streamLength), new Long(-1, 0))) > 0)
      return setError($this, STBVorbisError_SEEK_INVALID_getInstance());
    var padding = ($this.blocksize1__1 - $this.blocksize0__1 | 0) >> 2;
    var lastSampleLimit;
    if (compare(bitwiseAnd(fromInt(sampleNumber), new Long(-1, 0)), fromInt(padding)) < 0)
      lastSampleLimit = 0;
    else
      lastSampleLimit = sampleNumber - padding | 0;
    left.pageStart_1 = $this.pFirst_1.pageStart_1;
    left.pageEnd_1 = $this.pFirst_1.pageEnd_1;
    left.lastDecodedSample_1 = $this.pFirst_1.lastDecodedSample_1;
    while (left.lastDecodedSample_1 === -1) {
      setFileOffset($this, left.pageEnd_1);
      if (!getSeekPageInfo($this, left)) {
        $this.seekStart_dj9vwq_k$();
        return setError($this, STBVorbisError_SEEK_FAILED_getInstance());
      }
    }
    right.pageStart_1 = $this.pLast_1.pageStart_1;
    right.pageEnd_1 = $this.pLast_1.pageEnd_1;
    right.lastDecodedSample_1 = $this.pLast_1.lastDecodedSample_1;
    if (compare(bitwiseAnd(fromInt(lastSampleLimit), new Long(-1, 0)), bitwiseAnd(fromInt(left.lastDecodedSample_1), new Long(-1, 0))) <= 0) {
      if ($this.seekStart_dj9vwq_k$()) {
        if (compare(bitwiseAnd(fromInt($this.currentLoc_1), new Long(-1, 0)), bitwiseAnd(fromInt(sampleNumber), new Long(-1, 0))) > 0)
          return setError($this, STBVorbisError_SEEK_FAILED_getInstance());
        return true;
      }
      return false;
    }
    var probe = 0;
    var bytesPerSample = 0.0;
    var offset = 0.0;
    $l$loop_0: while (!(left.pageEnd_1 === right.pageStart_1)) {
      var delta = right.pageStart_1 - left.pageEnd_1 | 0;
      if (65536 >= delta) {
        setFileOffset($this, left.pageEnd_1);
      } else {
        if (2 > probe) {
          if (probe === 0) {
            var dataBytes = right.pageEnd_1 - left.pageStart_1 | 0;
            bytesPerSample = dataBytes / toNumber(bitwiseAnd(fromInt(right.lastDecodedSample_1), new Long(-1, 0)));
            offset = left.pageStart_1 + bytesPerSample * toNumber(subtract(bitwiseAnd(fromInt(lastSampleLimit), new Long(-1, 0)), bitwiseAnd(fromInt(left.lastDecodedSample_1), new Long(-1, 0))));
          } else {
            var err = toNumber(subtract(bitwiseAnd(fromInt(lastSampleLimit), new Long(-1, 0)), bitwiseAnd(fromInt(mid.lastDecodedSample_1), new Long(-1, 0)))) * bytesPerSample;
            if (err >= 0 && 8000.0 > err)
              err = 8000.0;
            if (0.0 > err && err > -8000.0)
              err = -8000.0;
            offset = offset + err * 2;
          }
          if (left.pageEnd_1 > offset)
            offset = left.pageEnd_1;
          if (offset > (right.pageStart_1 - 65536 | 0))
            offset = right.pageStart_1 - 65536 | 0;
          setFileOffset($this, numberToInt(offset));
        } else {
          setFileOffset($this, (left.pageEnd_1 + (delta / 2 | 0) | 0) - 32768 | 0);
        }
        if (!vorbisFindPage($this, null, null)) {
          $this.seekStart_dj9vwq_k$();
          return setError($this, STBVorbisError_SEEK_FAILED_getInstance());
        }
      }
      $l$loop: while (true) {
        if (!getSeekPageInfo($this, mid)) {
          $this.seekStart_dj9vwq_k$();
          return setError($this, STBVorbisError_SEEK_FAILED_getInstance());
        }
        if (!(mid.lastDecodedSample_1 === -1))
          break $l$loop;
        setFileOffset($this, mid.pageEnd_1);
      }
      if (mid.pageStart_1 === right.pageStart_1) {
        if (probe >= 2 || 65536 >= delta)
          break $l$loop_0;
      } else {
        if (compare(bitwiseAnd(fromInt(lastSampleLimit), new Long(-1, 0)), bitwiseAnd(fromInt(mid.lastDecodedSample_1), new Long(-1, 0))) < 0) {
          // Inline function 'kotlin.also' call
          right.pageStart_1 = mid.pageStart_1;
          right.pageEnd_1 = mid.pageEnd_1;
          right.lastDecodedSample_1 = mid.lastDecodedSample_1;
        } else {
          // Inline function 'kotlin.also' call
          left.pageStart_1 = mid.pageStart_1;
          left.pageEnd_1 = mid.pageEnd_1;
          left.lastDecodedSample_1 = mid.lastDecodedSample_1;
        }
      }
      probe = probe + 1 | 0;
    }
    var pageStart = left.pageStart_1;
    setFileOffset($this, pageStart);
    if (!startPage($this))
      return setError($this, STBVorbisError_SEEK_FAILED_getInstance());
    var endPos = $this.endSegWithKnownLoc_1;
    $l$loop_2: while (true) {
      var i = endPos;
      $l$loop_1: while (i > 0 && $this.segments_1[i - 1 | 0] === 255) {
        i = i - 1 | 0;
      }
      var startSegWithKnownLoc = i;
      if (startSegWithKnownLoc > 0 || ($this.pageFlag_1 & 1) === 0)
        break $l$loop_2;
      if (!goToPageBefore($this, pageStart)) {
        $this.seekStart_dj9vwq_k$();
        return setError($this, STBVorbisError_SEEK_FAILED_getInstance());
      }
      var ps = getFileOffset($this);
      if (!startPage($this)) {
        $this.seekStart_dj9vwq_k$();
        return setError($this, STBVorbisError_SEEK_FAILED_getInstance());
      }
      endPos = $this.segmentCount_1 - 1 | 0;
    }
    $this.currentLocValid_1 = false;
    $this.lastSeg_1 = false;
    $this.validBits_1 = 0;
    $this.packetBytes_1 = 0;
    $this.bytesInSeg_1 = 0;
    $this.previousLength_1 = 0;
    var startSegWithKnownLoc2 = endPos;
    // Inline function 'kotlin.run' call
    var i_0 = endPos;
    $l$loop_3: while (i_0 > 0 && $this.segments_1[i_0 - 1 | 0] === 255) {
      i_0 = i_0 - 1 | 0;
    }
    startSegWithKnownLoc2 = i_0;
    $this.nextSeg_1 = startSegWithKnownLoc2;
    var inductionVariable = 0;
    var last = startSegWithKnownLoc2;
    if (inductionVariable < last)
      do {
        var i_1 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        skip($this, $this.segments_1[i_1]);
      }
       while (inductionVariable < last);
    if (!vorbisPumpFirstFrame($this))
      return false;
    if (compare(bitwiseAnd(fromInt($this.currentLoc_1), new Long(-1, 0)), bitwiseAnd(fromInt(sampleNumber), new Long(-1, 0))) > 0)
      return setError($this, STBVorbisError_SEEK_FAILED_getInstance());
    return true;
  }
  function peekDecodeInitial($this, pLeftStart, pLeftEnd, pRightStart, pRightEnd, mode) {
    if (!vorbisDecodeInitial($this, pLeftStart, pLeftEnd, pRightStart, pRightEnd, mode))
      return false;
    var bitsRead = 1 + ilog(Companion_getInstance_1(), $this.modeCount_1 - 1 | 0) | 0;
    if (!($this.modeConfig_1[mode[0]].blockflag_1 === 0))
      bitsRead = bitsRead + 2 | 0;
    var bytesRead = (bitsRead + 7 | 0) / 8 | 0;
    $this.bytesInSeg_1 = $this.bytesInSeg_1 + bytesRead | 0;
    $this.packetBytes_1 = $this.packetBytes_1 - bytesRead | 0;
    skip($this, -bytesRead | 0);
    if ($this.nextSeg_1 === -1) {
      $this.nextSeg_1 = $this.segmentCount_1 - 1 | 0;
    } else {
      $this.nextSeg_1 = $this.nextSeg_1 - 1 | 0;
    }
    $this.validBits_1 = 0;
    return true;
  }
  function sam$kotlin_Comparator$0_5(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_5).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0_5).equals = function (other) {
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
  protoOf(sam$kotlin_Comparator$0_5).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$kotlin_Comparator$0_6(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_6).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_6).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_6).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0_6).equals = function (other) {
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
  protoOf(sam$kotlin_Comparator$0_6).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function StbVorbis$computeSortedHuffman$lambda($sortedPart) {
    return function (a, b) {
      var ua = bitwiseAnd(fromInt($sortedPart[a]), new Long(-1, 0));
      var ub = bitwiseAnd(fromInt($sortedPart[b]), new Long(-1, 0));
      return ua.compareTo_9jj042_k$(ub);
    };
  }
  function StbVorbis$startDecoder$FloorOrdering(x, id) {
    this.x_1 = x;
    this.id_1 = id;
  }
  protoOf(StbVorbis$startDecoder$FloorOrdering).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(StbVorbis$startDecoder$FloorOrdering).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(StbVorbis$startDecoder$FloorOrdering).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(StbVorbis$startDecoder$FloorOrdering).component2_7eebsb_k$ = function () {
    return this.id_1;
  };
  protoOf(StbVorbis$startDecoder$FloorOrdering).copy_fhtu3_k$ = function (x, id) {
    return new StbVorbis$startDecoder$FloorOrdering(x, id);
  };
  protoOf(StbVorbis$startDecoder$FloorOrdering).copy$default_yfl38v_k$ = function (x, id, $super) {
    x = x === VOID ? this.x_1 : x;
    id = id === VOID ? this.id_1 : id;
    return $super === VOID ? this.copy_fhtu3_k$(x, id) : $super.copy_fhtu3_k$.call(this, x, id);
  };
  protoOf(StbVorbis$startDecoder$FloorOrdering).toString = function () {
    return 'FloorOrdering(x=' + this.x_1 + ', id=' + this.id_1 + ')';
  };
  protoOf(StbVorbis$startDecoder$FloorOrdering).hashCode = function () {
    var result = this.x_1;
    result = imul(result, 31) + this.id_1 | 0;
    return result;
  };
  protoOf(StbVorbis$startDecoder$FloorOrdering).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StbVorbis$startDecoder$FloorOrdering))
      return false;
    if (!(this.x_1 === other.x_1))
      return false;
    if (!(this.id_1 === other.id_1))
      return false;
    return true;
  };
  function StbVorbis$startDecoder$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.x_1;
    var tmp$ret$1 = b.x_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function StbVorbis() {
    Companion_getInstance_1();
    this.sampleRate_1 = 0;
    this.channels_1 = 0;
    this.stream_1 = new Int8Array(0);
    this.streamPosition_1 = 0;
    this.streamEnd_1 = 0;
    this.streamLen_1 = 0;
    this.firstAudioPageOffset_1 = 0;
    this.pFirst_1 = new ProbedPage();
    this.pLast_1 = new ProbedPage();
    this.eof_1 = false;
    this.lastError_1 = STBVorbisError_NO_ERROR_getInstance();
    this.blocksize_1 = new Int32Array(2);
    this.blocksize0__1 = 0;
    this.blocksize1__1 = 0;
    this.codebookCount_1 = 0;
    this.codebooks_1 = null;
    this.floorCount_1 = 0;
    this.floorTypes_1 = new Int32Array(64);
    this.floorConfig_1 = null;
    this.residueCount_1 = 0;
    this.residueTypes_1 = new Int32Array(64);
    this.residueConfig_1 = null;
    this.mappingCount_1 = 0;
    this.mappings_1 = null;
    this.modeCount_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(64);
    while (tmp_0 < 64) {
      tmp_1[tmp_0] = new Mode();
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.modeConfig_1 = tmp_1;
    this.totalSamples_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_2.channelBuffers_1 = Array(16);
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_3.outputs_1 = Array(16);
    this.outputOffsets_1 = new Int32Array(16);
    var tmp_4 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_4.previousWindow_1 = Array(16);
    this.previousLength_1 = 0;
    var tmp_5 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_5.finalY_1 = Array(16);
    this.currentLoc_1 = 0;
    this.currentLocValid_1 = false;
    var tmp_6 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_6.tA_1 = Array(2);
    var tmp_7 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_7.tB_1 = Array(2);
    var tmp_8 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_8.tC_1 = Array(2);
    var tmp_9 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_9.windowData_1 = Array(2);
    var tmp_10 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_10.bitReverseData_1 = Array(2);
    this.serial_1 = 0;
    this.lastPage_1 = 0;
    this.segmentCount_1 = 0;
    this.segments_1 = new Int32Array(255);
    this.pageFlag_1 = 0;
    this.bytesInSeg_1 = 0;
    this.firstDecode_1 = false;
    this.nextSeg_1 = 0;
    this.lastSeg_1 = false;
    this.lastSegWhich_1 = 0;
    this.acc_1 = 0;
    this.validBits_1 = 0;
    this.packetBytes_1 = 0;
    this.endSegWithKnownLoc_1 = 0;
    this.knownLocForPacket_1 = 0;
    this.discardSamplesDeferred_1 = 0;
    this.samplesOutput_1 = 0;
    this.channelBufferStart_1 = 0;
    this.channelBufferEnd_1 = 0;
  }
  protoOf(StbVorbis).get_sampleRate_ht28r1_k$ = function () {
    return this.sampleRate_1;
  };
  protoOf(StbVorbis).get_channels_83zl9j_k$ = function () {
    return this.channels_1;
  };
  protoOf(StbVorbis).get_lastError_tm8sk7_k$ = function () {
    return this.lastError_1;
  };
  protoOf(StbVorbis).getInfo_18x1p8_k$ = function () {
    return new StbVorbisInfo(this.sampleRate_1, this.channels_1, this.blocksize1__1 >> 1);
  };
  protoOf(StbVorbis).getError_waj7te_k$ = function () {
    var e = this.lastError_1;
    this.lastError_1 = STBVorbisError_NO_ERROR_getInstance();
    return e;
  };
  protoOf(StbVorbis).getSampleOffset_qnglsj_k$ = function () {
    return this.currentLocValid_1 ? this.currentLoc_1 : -1;
  };
  protoOf(StbVorbis).getFrameFloat_9s7qqj_k$ = function () {
    var lenArr = new Int32Array(1);
    var leftArr = new Int32Array(1);
    var rightArr = new Int32Array(1);
    if (!vorbisDecodePacket(this, lenArr, leftArr, rightArr)) {
      this.channelBufferStart_1 = 0;
      this.channelBufferEnd_1 = 0;
      return null;
    }
    var len = vorbisFinishFrame(this, lenArr[0], leftArr[0], rightArr[0]);
    var tmp = 0;
    var tmp_0 = this.channels_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = ensureNotNull(this.channelBuffers_1[tmp_2]);
      tmp = tmp + 1 | 0;
    }
    var result = tmp_1;
    var offset = leftArr[0];
    this.channelBufferStart_1 = leftArr[0];
    this.channelBufferEnd_1 = leftArr[0] + len | 0;
    return new Triple(len, offset, result);
  };
  protoOf(StbVorbis).getSamplesFloatInterleaved_r705a0_k$ = function (requestedChannels, buffer, numFloats) {
    var len = numFloats / requestedChannels | 0;
    var n = 0;
    var z = requestedChannels < this.channels_1 ? requestedChannels : this.channels_1;
    $l$loop_0: while (len > n) {
      var k = this.channelBufferEnd_1 - this.channelBufferStart_1 | 0;
      if ((n + k | 0) >= len)
        k = len - n | 0;
      var inductionVariable = 0;
      var last = k;
      if (inductionVariable < last)
        do {
          var j = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < z)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              buffer[imul(n + j | 0, requestedChannels) + i | 0] = ensureNotNull(this.channelBuffers_1[i])[this.channelBufferStart_1 + j | 0];
            }
             while (inductionVariable_0 < z);
          var inductionVariable_1 = z;
          if (inductionVariable_1 < requestedChannels)
            do {
              var i_0 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              buffer[imul(n + j | 0, requestedChannels) + i_0 | 0] = 0.0;
            }
             while (inductionVariable_1 < requestedChannels);
        }
         while (inductionVariable < last);
      n = n + k | 0;
      this.channelBufferStart_1 = this.channelBufferStart_1 + k | 0;
      if (n === len)
        break $l$loop_0;
      if (this.getFrameFloat_9s7qqj_k$() == null)
        break $l$loop_0;
    }
    return n;
  };
  protoOf(StbVorbis).getSamplesFloat_ub1jzj_k$ = function (requestedChannels, buffers, bufferOffset, numSamples) {
    var n = 0;
    var z = requestedChannels < this.channels_1 ? requestedChannels : this.channels_1;
    $l$loop_0: while (numSamples > n) {
      var k = this.channelBufferEnd_1 - this.channelBufferStart_1 | 0;
      if ((n + k | 0) >= numSamples)
        k = numSamples - n | 0;
      if (0 < k) {
        var inductionVariable = 0;
        if (inductionVariable < z)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp0 = ensureNotNull(this.channelBuffers_1[i]);
            var tmp2 = buffers[i];
            var tmp4 = bufferOffset + n | 0;
            var tmp6 = this.channelBufferStart_1;
            // Inline function 'kotlin.collections.copyInto' call
            var endIndex = this.channelBufferStart_1 + k | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp = tmp0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp, tmp2, tmp4, tmp6, endIndex);
          }
           while (inductionVariable < z);
        var inductionVariable_0 = z;
        if (inductionVariable_0 < requestedChannels)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            fill(buffers[i_0], 0.0, bufferOffset + n | 0, (bufferOffset + n | 0) + k | 0);
          }
           while (inductionVariable_0 < requestedChannels);
      }
      n = n + k | 0;
      this.channelBufferStart_1 = this.channelBufferStart_1 + k | 0;
      if (n === numSamples)
        break $l$loop_0;
      if (this.getFrameFloat_9s7qqj_k$() == null)
        break $l$loop_0;
    }
    return n;
  };
  protoOf(StbVorbis).seekFrame_4lo83_k$ = function (sampleNumber) {
    if (!seekToSampleCoarse(this, sampleNumber))
      return false;
    var maxFrameSamples = (imul(this.blocksize1__1, 3) - this.blocksize0__1 | 0) >> 2;
    while (compare(bitwiseAnd(fromInt(this.currentLoc_1), new Long(-1, 0)), bitwiseAnd(fromInt(sampleNumber), new Long(-1, 0))) < 0) {
      var leftStart = new Int32Array(1);
      var leftEnd = new Int32Array(1);
      var rightStart = new Int32Array(1);
      var rightEnd = new Int32Array(1);
      var mode = new Int32Array(1);
      if (!peekDecodeInitial(this, leftStart, leftEnd, rightStart, rightEnd, mode))
        return setError(this, STBVorbisError_SEEK_FAILED_getInstance());
      var frameSamples = rightStart[0] - leftStart[0] | 0;
      if (compare(bitwiseAnd(fromInt(this.currentLoc_1 + frameSamples | 0), new Long(-1, 0)), bitwiseAnd(fromInt(sampleNumber), new Long(-1, 0))) > 0) {
        return true;
      } else if (compare(bitwiseAnd(fromInt((this.currentLoc_1 + frameSamples | 0) + maxFrameSamples | 0), new Long(-1, 0)), bitwiseAnd(fromInt(sampleNumber), new Long(-1, 0))) > 0) {
        vorbisPumpFirstFrame(this);
      } else {
        this.currentLoc_1 = this.currentLoc_1 + frameSamples | 0;
        this.previousLength_1 = 0;
        maybeStartPacket(this);
        flushPacket(this);
      }
    }
    if (!(this.currentLoc_1 === sampleNumber))
      return setError(this, STBVorbisError_SEEK_FAILED_getInstance());
    return true;
  };
  protoOf(StbVorbis).seek_dqag2o_k$ = function (sampleNumber) {
    if (!this.seekFrame_4lo83_k$(sampleNumber))
      return false;
    if (!(sampleNumber === this.currentLoc_1)) {
      var frameStart = this.currentLoc_1;
      this.getFrameFloat_9s7qqj_k$();
      this.channelBufferStart_1 = this.channelBufferStart_1 + (sampleNumber - frameStart | 0) | 0;
    }
    return true;
  };
  protoOf(StbVorbis).seekStart_dj9vwq_k$ = function () {
    setFileOffset(this, this.firstAudioPageOffset_1);
    this.previousLength_1 = 0;
    this.firstDecode_1 = true;
    this.nextSeg_1 = -1;
    return vorbisPumpFirstFrame(this);
  };
  protoOf(StbVorbis).streamLengthInSamples_cm65ha_k$ = function () {
    if (this.totalSamples_1 === 0) {
      var restoreOffset = getFileOffset(this);
      var previousSafe;
      if (this.streamLen_1 >= 65536 && (this.streamLen_1 - 65536 | 0) >= this.firstAudioPageOffset_1)
        previousSafe = this.streamLen_1 - 65536 | 0;
      else
        previousSafe = this.firstAudioPageOffset_1;
      setFileOffset(this, previousSafe);
      var endArr = new Int32Array(1);
      var lastArr = new Int32Array(1);
      if (!vorbisFindPage(this, endArr, lastArr)) {
        this.lastError_1 = STBVorbisError_CANT_FIND_LAST_PAGE_getInstance();
        this.totalSamples_1 = -1;
        setFileOffset(this, restoreOffset);
        return 0;
      }
      var lastPageLoc = getFileOffset(this);
      $l$loop: while (lastArr[0] === 0) {
        setFileOffset(this, endArr[0]);
        if (!vorbisFindPage(this, endArr, lastArr)) {
          break $l$loop;
        }
        lastPageLoc = getFileOffset(this);
      }
      setFileOffset(this, lastPageLoc);
      var headerSkip = new Int8Array(6);
      getn(this, headerSkip, 0, 6);
      var lo = get32(this);
      var hi = get32(this);
      if (lo === -1 && hi === -1) {
        this.lastError_1 = STBVorbisError_CANT_FIND_LAST_PAGE_getInstance();
        this.totalSamples_1 = -1;
        setFileOffset(this, restoreOffset);
        return 0;
      }
      if (!(hi === 0)) {
        this.totalSamples_1 = -2;
      } else {
        this.totalSamples_1 = lo;
      }
      this.pLast_1.pageStart_1 = lastPageLoc;
      this.pLast_1.pageEnd_1 = endArr[0];
      this.pLast_1.lastDecodedSample_1 = lo;
      setFileOffset(this, restoreOffset);
    }
    return this.totalSamples_1 === -1 ? 0 : this.totalSamples_1;
  };
  protoOf(StbVorbis).streamLengthInSeconds_ecu3lg_k$ = function () {
    return this.streamLengthInSamples_cm65ha_k$() / this.sampleRate_1;
  };
  protoOf(StbVorbis).close_yn9xrc_k$ = function () {
    this.codebooks_1 = null;
    this.floorConfig_1 = null;
    this.residueConfig_1 = null;
    this.mappings_1 = null;
    var inductionVariable = 0;
    if (inductionVariable < 16)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.channelBuffers_1[i] = null;
        this.previousWindow_1[i] = null;
        this.finalY_1[i] = null;
        this.outputs_1[i] = null;
      }
       while (inductionVariable < 16);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < 2)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.tA_1[i_0] = null;
        this.tB_1[i_0] = null;
        this.tC_1[i_0] = null;
        this.windowData_1[i_0] = null;
        this.bitReverseData_1[i_0] = null;
      }
       while (inductionVariable_0 < 2);
  };
  var STBVorbisError_NO_ERROR_instance;
  var STBVorbisError_NEED_MORE_DATA_instance;
  var STBVorbisError_INVALID_API_MIXING_instance;
  var STBVorbisError_OUT_OF_MEM_instance;
  var STBVorbisError_FEATURE_NOT_SUPPORTED_instance;
  var STBVorbisError_TOO_MANY_CHANNELS_instance;
  var STBVorbisError_FILE_OPEN_FAILURE_instance;
  var STBVorbisError_SEEK_WITHOUT_LENGTH_instance;
  var STBVorbisError_UNEXPECTED_EOF_instance;
  var STBVorbisError_SEEK_INVALID_instance;
  var STBVorbisError_INVALID_SETUP_instance;
  var STBVorbisError_INVALID_STREAM_instance;
  var STBVorbisError_MISSING_CAPTURE_PATTERN_instance;
  var STBVorbisError_INVALID_STREAM_STRUCTURE_VERSION_instance;
  var STBVorbisError_CONTINUED_PACKET_FLAG_INVALID_instance;
  var STBVorbisError_INCORRECT_STREAM_SERIAL_NUMBER_instance;
  var STBVorbisError_INVALID_FIRST_PAGE_instance;
  var STBVorbisError_BAD_PACKET_TYPE_instance;
  var STBVorbisError_CANT_FIND_LAST_PAGE_instance;
  var STBVorbisError_SEEK_FAILED_instance;
  var STBVorbisError_OGG_SKELETON_NOT_SUPPORTED_instance;
  function values() {
    return [STBVorbisError_NO_ERROR_getInstance(), STBVorbisError_NEED_MORE_DATA_getInstance(), STBVorbisError_INVALID_API_MIXING_getInstance(), STBVorbisError_OUT_OF_MEM_getInstance(), STBVorbisError_FEATURE_NOT_SUPPORTED_getInstance(), STBVorbisError_TOO_MANY_CHANNELS_getInstance(), STBVorbisError_FILE_OPEN_FAILURE_getInstance(), STBVorbisError_SEEK_WITHOUT_LENGTH_getInstance(), STBVorbisError_UNEXPECTED_EOF_getInstance(), STBVorbisError_SEEK_INVALID_getInstance(), STBVorbisError_INVALID_SETUP_getInstance(), STBVorbisError_INVALID_STREAM_getInstance(), STBVorbisError_MISSING_CAPTURE_PATTERN_getInstance(), STBVorbisError_INVALID_STREAM_STRUCTURE_VERSION_getInstance(), STBVorbisError_CONTINUED_PACKET_FLAG_INVALID_getInstance(), STBVorbisError_INCORRECT_STREAM_SERIAL_NUMBER_getInstance(), STBVorbisError_INVALID_FIRST_PAGE_getInstance(), STBVorbisError_BAD_PACKET_TYPE_getInstance(), STBVorbisError_CANT_FIND_LAST_PAGE_getInstance(), STBVorbisError_SEEK_FAILED_getInstance(), STBVorbisError_OGG_SKELETON_NOT_SUPPORTED_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'NO_ERROR':
        return STBVorbisError_NO_ERROR_getInstance();
      case 'NEED_MORE_DATA':
        return STBVorbisError_NEED_MORE_DATA_getInstance();
      case 'INVALID_API_MIXING':
        return STBVorbisError_INVALID_API_MIXING_getInstance();
      case 'OUT_OF_MEM':
        return STBVorbisError_OUT_OF_MEM_getInstance();
      case 'FEATURE_NOT_SUPPORTED':
        return STBVorbisError_FEATURE_NOT_SUPPORTED_getInstance();
      case 'TOO_MANY_CHANNELS':
        return STBVorbisError_TOO_MANY_CHANNELS_getInstance();
      case 'FILE_OPEN_FAILURE':
        return STBVorbisError_FILE_OPEN_FAILURE_getInstance();
      case 'SEEK_WITHOUT_LENGTH':
        return STBVorbisError_SEEK_WITHOUT_LENGTH_getInstance();
      case 'UNEXPECTED_EOF':
        return STBVorbisError_UNEXPECTED_EOF_getInstance();
      case 'SEEK_INVALID':
        return STBVorbisError_SEEK_INVALID_getInstance();
      case 'INVALID_SETUP':
        return STBVorbisError_INVALID_SETUP_getInstance();
      case 'INVALID_STREAM':
        return STBVorbisError_INVALID_STREAM_getInstance();
      case 'MISSING_CAPTURE_PATTERN':
        return STBVorbisError_MISSING_CAPTURE_PATTERN_getInstance();
      case 'INVALID_STREAM_STRUCTURE_VERSION':
        return STBVorbisError_INVALID_STREAM_STRUCTURE_VERSION_getInstance();
      case 'CONTINUED_PACKET_FLAG_INVALID':
        return STBVorbisError_CONTINUED_PACKET_FLAG_INVALID_getInstance();
      case 'INCORRECT_STREAM_SERIAL_NUMBER':
        return STBVorbisError_INCORRECT_STREAM_SERIAL_NUMBER_getInstance();
      case 'INVALID_FIRST_PAGE':
        return STBVorbisError_INVALID_FIRST_PAGE_getInstance();
      case 'BAD_PACKET_TYPE':
        return STBVorbisError_BAD_PACKET_TYPE_getInstance();
      case 'CANT_FIND_LAST_PAGE':
        return STBVorbisError_CANT_FIND_LAST_PAGE_getInstance();
      case 'SEEK_FAILED':
        return STBVorbisError_SEEK_FAILED_getInstance();
      case 'OGG_SKELETON_NOT_SUPPORTED':
        return STBVorbisError_OGG_SKELETON_NOT_SUPPORTED_getInstance();
      default:
        STBVorbisError_initEntries();
        THROW_IAE('No enum constant com.mrpowergamerbr.butterscotchpreprocessor.STBVorbisError.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var STBVorbisError_entriesInitialized;
  function STBVorbisError_initEntries() {
    if (STBVorbisError_entriesInitialized)
      return Unit_getInstance();
    STBVorbisError_entriesInitialized = true;
    STBVorbisError_NO_ERROR_instance = new STBVorbisError('NO_ERROR', 0, 0);
    STBVorbisError_NEED_MORE_DATA_instance = new STBVorbisError('NEED_MORE_DATA', 1, 1);
    STBVorbisError_INVALID_API_MIXING_instance = new STBVorbisError('INVALID_API_MIXING', 2, 2);
    STBVorbisError_OUT_OF_MEM_instance = new STBVorbisError('OUT_OF_MEM', 3, 3);
    STBVorbisError_FEATURE_NOT_SUPPORTED_instance = new STBVorbisError('FEATURE_NOT_SUPPORTED', 4, 4);
    STBVorbisError_TOO_MANY_CHANNELS_instance = new STBVorbisError('TOO_MANY_CHANNELS', 5, 5);
    STBVorbisError_FILE_OPEN_FAILURE_instance = new STBVorbisError('FILE_OPEN_FAILURE', 6, 6);
    STBVorbisError_SEEK_WITHOUT_LENGTH_instance = new STBVorbisError('SEEK_WITHOUT_LENGTH', 7, 7);
    STBVorbisError_UNEXPECTED_EOF_instance = new STBVorbisError('UNEXPECTED_EOF', 8, 10);
    STBVorbisError_SEEK_INVALID_instance = new STBVorbisError('SEEK_INVALID', 9, 11);
    STBVorbisError_INVALID_SETUP_instance = new STBVorbisError('INVALID_SETUP', 10, 20);
    STBVorbisError_INVALID_STREAM_instance = new STBVorbisError('INVALID_STREAM', 11, 21);
    STBVorbisError_MISSING_CAPTURE_PATTERN_instance = new STBVorbisError('MISSING_CAPTURE_PATTERN', 12, 30);
    STBVorbisError_INVALID_STREAM_STRUCTURE_VERSION_instance = new STBVorbisError('INVALID_STREAM_STRUCTURE_VERSION', 13, 31);
    STBVorbisError_CONTINUED_PACKET_FLAG_INVALID_instance = new STBVorbisError('CONTINUED_PACKET_FLAG_INVALID', 14, 32);
    STBVorbisError_INCORRECT_STREAM_SERIAL_NUMBER_instance = new STBVorbisError('INCORRECT_STREAM_SERIAL_NUMBER', 15, 33);
    STBVorbisError_INVALID_FIRST_PAGE_instance = new STBVorbisError('INVALID_FIRST_PAGE', 16, 34);
    STBVorbisError_BAD_PACKET_TYPE_instance = new STBVorbisError('BAD_PACKET_TYPE', 17, 35);
    STBVorbisError_CANT_FIND_LAST_PAGE_instance = new STBVorbisError('CANT_FIND_LAST_PAGE', 18, 36);
    STBVorbisError_SEEK_FAILED_instance = new STBVorbisError('SEEK_FAILED', 19, 37);
    STBVorbisError_OGG_SKELETON_NOT_SUPPORTED_instance = new STBVorbisError('OGG_SKELETON_NOT_SUPPORTED', 20, 38);
  }
  var $ENTRIES;
  function STBVorbisError(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.code_1 = code;
  }
  protoOf(STBVorbisError).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  function StbVorbisInfo(sampleRate, channels, maxFrameSize) {
    this.sampleRate_1 = sampleRate;
    this.channels_1 = channels;
    this.maxFrameSize_1 = maxFrameSize;
  }
  protoOf(StbVorbisInfo).get_sampleRate_ht28r1_k$ = function () {
    return this.sampleRate_1;
  };
  protoOf(StbVorbisInfo).get_channels_83zl9j_k$ = function () {
    return this.channels_1;
  };
  protoOf(StbVorbisInfo).get_maxFrameSize_9zaht9_k$ = function () {
    return this.maxFrameSize_1;
  };
  protoOf(StbVorbisInfo).component1_7eebsc_k$ = function () {
    return this.sampleRate_1;
  };
  protoOf(StbVorbisInfo).component2_7eebsb_k$ = function () {
    return this.channels_1;
  };
  protoOf(StbVorbisInfo).component3_7eebsa_k$ = function () {
    return this.maxFrameSize_1;
  };
  protoOf(StbVorbisInfo).copy_6of2tf_k$ = function (sampleRate, channels, maxFrameSize) {
    return new StbVorbisInfo(sampleRate, channels, maxFrameSize);
  };
  protoOf(StbVorbisInfo).copy$default_q54elj_k$ = function (sampleRate, channels, maxFrameSize, $super) {
    sampleRate = sampleRate === VOID ? this.sampleRate_1 : sampleRate;
    channels = channels === VOID ? this.channels_1 : channels;
    maxFrameSize = maxFrameSize === VOID ? this.maxFrameSize_1 : maxFrameSize;
    return $super === VOID ? this.copy_6of2tf_k$(sampleRate, channels, maxFrameSize) : $super.copy_6of2tf_k$.call(this, sampleRate, channels, maxFrameSize);
  };
  protoOf(StbVorbisInfo).toString = function () {
    return 'StbVorbisInfo(sampleRate=' + this.sampleRate_1 + ', channels=' + this.channels_1 + ', maxFrameSize=' + this.maxFrameSize_1 + ')';
  };
  protoOf(StbVorbisInfo).hashCode = function () {
    var result = this.sampleRate_1;
    result = imul(result, 31) + this.channels_1 | 0;
    result = imul(result, 31) + this.maxFrameSize_1 | 0;
    return result;
  };
  protoOf(StbVorbisInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StbVorbisInfo))
      return false;
    if (!(this.sampleRate_1 === other.sampleRate_1))
      return false;
    if (!(this.channels_1 === other.channels_1))
      return false;
    if (!(this.maxFrameSize_1 === other.maxFrameSize_1))
      return false;
    return true;
  };
  function STBVorbisError_NO_ERROR_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_NO_ERROR_instance;
  }
  function STBVorbisError_NEED_MORE_DATA_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_NEED_MORE_DATA_instance;
  }
  function STBVorbisError_INVALID_API_MIXING_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_INVALID_API_MIXING_instance;
  }
  function STBVorbisError_OUT_OF_MEM_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_OUT_OF_MEM_instance;
  }
  function STBVorbisError_FEATURE_NOT_SUPPORTED_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_FEATURE_NOT_SUPPORTED_instance;
  }
  function STBVorbisError_TOO_MANY_CHANNELS_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_TOO_MANY_CHANNELS_instance;
  }
  function STBVorbisError_FILE_OPEN_FAILURE_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_FILE_OPEN_FAILURE_instance;
  }
  function STBVorbisError_SEEK_WITHOUT_LENGTH_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_SEEK_WITHOUT_LENGTH_instance;
  }
  function STBVorbisError_UNEXPECTED_EOF_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_UNEXPECTED_EOF_instance;
  }
  function STBVorbisError_SEEK_INVALID_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_SEEK_INVALID_instance;
  }
  function STBVorbisError_INVALID_SETUP_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_INVALID_SETUP_instance;
  }
  function STBVorbisError_INVALID_STREAM_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_INVALID_STREAM_instance;
  }
  function STBVorbisError_MISSING_CAPTURE_PATTERN_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_MISSING_CAPTURE_PATTERN_instance;
  }
  function STBVorbisError_INVALID_STREAM_STRUCTURE_VERSION_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_INVALID_STREAM_STRUCTURE_VERSION_instance;
  }
  function STBVorbisError_CONTINUED_PACKET_FLAG_INVALID_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_CONTINUED_PACKET_FLAG_INVALID_instance;
  }
  function STBVorbisError_INCORRECT_STREAM_SERIAL_NUMBER_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_INCORRECT_STREAM_SERIAL_NUMBER_instance;
  }
  function STBVorbisError_INVALID_FIRST_PAGE_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_INVALID_FIRST_PAGE_instance;
  }
  function STBVorbisError_BAD_PACKET_TYPE_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_BAD_PACKET_TYPE_instance;
  }
  function STBVorbisError_CANT_FIND_LAST_PAGE_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_CANT_FIND_LAST_PAGE_instance;
  }
  function STBVorbisError_SEEK_FAILED_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_SEEK_FAILED_instance;
  }
  function STBVorbisError_OGG_SKELETON_NOT_SUPPORTED_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_OGG_SKELETON_NOT_SUPPORTED_instance;
  }
  function TextureAtlas(id, bpp, width, height, entries) {
    var tmp;
    if (entries === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$_0();
    } else {
      tmp = entries;
    }
    entries = tmp;
    this.id_1 = id;
    this.bpp_1 = bpp;
    this.width_1 = width;
    this.height_1 = height;
    this.entries_1 = entries;
  }
  protoOf(TextureAtlas).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(TextureAtlas).get_bpp_18j8nb_k$ = function () {
    return this.bpp_1;
  };
  protoOf(TextureAtlas).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(TextureAtlas).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(TextureAtlas).get_entries_p20ztl_k$ = function () {
    return this.entries_1;
  };
  function packByBpp($this, images, bpp, groupKeys, atlases, packers, atlasSize) {
    if (images.isEmpty_y1axqb_k$())
      return Unit_getInstance();
    var groups = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = images.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var img = _iterator__ex2g4s.next_20eer_k$();
      var tmp0_elvis_lhs = groupKeys.get_wei43m_k$(img.get_name_woqyms_k$());
      var key = tmp0_elvis_lhs == null ? img.get_name_woqyms_k$() : tmp0_elvis_lhs;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = groups.get_wei43m_k$(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$_0();
        groups.put_4fpzoq_k$(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      tmp.add_utx5q5_k$(img);
    }
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = groups.get_entries_p20ztl_k$();
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_0 = TextureAtlasPacker$packByBpp$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0_7(tmp_0);
    var sortedGroups = sortedWith(this_0, tmp$ret$3);
    var iterator = sortedGroups.iterator_jk1svi_k$();
    var index = 0;
    while (iterator.hasNext_bitz1p_k$()) {
      var groupIdx = index;
      index = index + 1 | 0;
      var entry = iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.component2' call
      var groupImages = entry.get_value_j01efc_k$();
      if ((groupIdx % 100 | 0) === 0) {
        println('    Group ' + groupIdx + '/' + sortedGroups.get_size_woubt6_k$() + ' (' + groupImages.get_size_woubt6_k$() + ' images, ' + atlases.get_size_woubt6_k$() + ' atlases so far)');
      }
      // Inline function 'kotlin.collections.sortedByDescending' call
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp_1 = TextureAtlasPacker$packByBpp$lambda_0;
      var tmp$ret$6 = new sam$kotlin_Comparator$0_7(tmp_1);
      var sorted = sortedWith(groupImages, tmp$ret$6);
      var packed = false;
      var inductionVariable = 0;
      var last = atlases.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        $l$loop_1: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var atlas = atlases.get_c1px32_k$(i);
          if (!(atlas.bpp_1 === bpp))
            continue $l$loop_1;
          var packer = packers.get_c1px32_k$(i);
          var clonedPacker = packer.clone_1keycd_k$();
          // Inline function 'kotlin.collections.mutableListOf' call
          var placements = ArrayList_init_$Create$_0();
          var allFit = true;
          var _iterator__ex2g4s_0 = sorted.iterator_jk1svi_k$();
          $l$loop_0: while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
            var img_0 = _iterator__ex2g4s_0.next_20eer_k$();
            var pos = clonedPacker.insert_5z02kn_k$(img_0.get_width_j0q4yl_k$(), img_0.get_height_e7t92o_k$());
            if (pos == null) {
              allFit = false;
              break $l$loop_0;
            }
            placements.add_utx5q5_k$(to(img_0, pos));
          }
          if (allFit) {
            packers.set_82063s_k$(i, clonedPacker);
            var _iterator__ex2g4s_1 = placements.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
              var _destruct__k2r9zo = _iterator__ex2g4s_1.next_20eer_k$();
              var img_1 = _destruct__k2r9zo.component1_7eebsc_k$();
              var pos_0 = _destruct__k2r9zo.component2_7eebsb_k$();
              atlas.entries_1.add_utx5q5_k$(new AtlasEntry(img_1, pos_0.get_first_irdx8n_k$(), pos_0.get_second_jf7fjx_k$()));
            }
            packed = true;
            break $l$loop_1;
          }
        }
         while (inductionVariable <= last);
      if (!packed) {
        var remaining = toMutableList(sorted);
        $l$loop_3: while (true) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!!remaining.isEmpty_y1axqb_k$()) {
            break $l$loop_3;
          }
          var atlas_0 = new TextureAtlas(atlases.get_size_woubt6_k$(), bpp, atlasSize, atlasSize);
          var packer_0 = new MaxRectsPacker(atlasSize, atlasSize);
          var iterator_0 = remaining.iterator_jk1svi_k$();
          while (iterator_0.hasNext_bitz1p_k$()) {
            var img_2 = iterator_0.next_20eer_k$();
            var pos_1 = packer_0.insert_5z02kn_k$(img_2.get_width_j0q4yl_k$(), img_2.get_height_e7t92o_k$());
            if (!(pos_1 == null)) {
              atlas_0.entries_1.add_utx5q5_k$(new AtlasEntry(img_2, pos_1.get_first_irdx8n_k$(), pos_1.get_second_jf7fjx_k$()));
              iterator_0.remove_ldkf9o_k$();
            }
          }
          if (atlas_0.entries_1.isEmpty_y1axqb_k$()) {
            break $l$loop_3;
          }
          atlases.add_utx5q5_k$(atlas_0);
          packers.add_utx5q5_k$(packer_0);
        }
      }
    }
  }
  function sam$kotlin_Comparator$0_7(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_7).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_7).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_7).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0_7).equals = function (other) {
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
  protoOf(sam$kotlin_Comparator$0_7).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function TextureAtlasPacker$packByBpp$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = b.get_value_j01efc_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp = sum;
      sum = tmp + imul(element.get_width_j0q4yl_k$(), element.get_height_e7t92o_k$()) | 0;
    }
    var tmp_0 = sum;
    // Inline function 'kotlin.collections.sumOf' call
    var sum_0 = 0;
    var _iterator__ex2g4s_0 = a.get_value_j01efc_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      var tmp_1 = sum_0;
      sum_0 = tmp_1 + imul(element_0.get_width_j0q4yl_k$(), element_0.get_height_e7t92o_k$()) | 0;
    }
    var tmp$ret$5 = sum_0;
    return compareValues(tmp_0, tmp$ret$5);
  }
  function TextureAtlasPacker$packByBpp$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp0 = b.get_width_j0q4yl_k$();
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_0 = b.get_height_e7t92o_k$();
    var tmp = Math.max(tmp0, b_0);
    var tmp0_0 = a.get_width_j0q4yl_k$();
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_1 = a.get_height_e7t92o_k$();
    var tmp$ret$3 = Math.max(tmp0_0, b_1);
    return compareValues(tmp, tmp$ret$3);
  }
  function TextureAtlasPacker() {
    TextureAtlasPacker_instance = this;
    this.DEFAULT_ATLAS_SIZE_1 = 512;
  }
  protoOf(TextureAtlasPacker).get_DEFAULT_ATLAS_SIZE_5a5d8k_k$ = function () {
    return this.DEFAULT_ATLAS_SIZE_1;
  };
  protoOf(TextureAtlasPacker).packAtlases_nsl246_k$ = function (images, groupKeys, atlasSize) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = images.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      if (element.get_bpp_18j8nb_k$() === 4) {
        destination.add_utx5q5_k$(element);
      }
    }
    var by4bpp = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = images.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      if (element_0.get_bpp_18j8nb_k$() === 8) {
        destination_0.add_utx5q5_k$(element_0);
      }
    }
    var by8bpp = destination_0;
    println('  packAtlases: ' + by4bpp.get_size_woubt6_k$() + ' 4bpp images, ' + by8bpp.get_size_woubt6_k$() + ' 8bpp images');
    // Inline function 'kotlin.collections.mutableListOf' call
    var atlases = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var packers = ArrayList_init_$Create$_0();
    println('  Packing 4bpp...');
    packByBpp(this, by4bpp, 4, groupKeys, atlases, packers, atlasSize);
    println('  Packing 8bpp...');
    packByBpp(this, by8bpp, 8, groupKeys, atlases, packers, atlasSize);
    println('  Packing done.');
    return atlases;
  };
  var TextureAtlasPacker_instance;
  function TextureAtlasPacker_getInstance() {
    if (TextureAtlasPacker_instance == null)
      new TextureAtlasPacker();
    return TextureAtlasPacker_instance;
  }
  function AtlasEntry(image, x, y) {
    this.image_1 = image;
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(AtlasEntry).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(AtlasEntry).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(AtlasEntry).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(AtlasEntry).component1_7eebsc_k$ = function () {
    return this.image_1;
  };
  protoOf(AtlasEntry).component2_7eebsb_k$ = function () {
    return this.x_1;
  };
  protoOf(AtlasEntry).component3_7eebsa_k$ = function () {
    return this.y_1;
  };
  protoOf(AtlasEntry).copy_vor1zj_k$ = function (image, x, y) {
    return new AtlasEntry(image, x, y);
  };
  protoOf(AtlasEntry).copy$default_h2i6jo_k$ = function (image, x, y, $super) {
    image = image === VOID ? this.image_1 : image;
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_vor1zj_k$(image, x, y) : $super.copy_vor1zj_k$.call(this, image, x, y);
  };
  protoOf(AtlasEntry).toString = function () {
    return 'AtlasEntry(image=' + toString(this.image_1) + ', x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(AtlasEntry).hashCode = function () {
    var result = hashCode(this.image_1);
    result = imul(result, 31) + this.x_1 | 0;
    result = imul(result, 31) + this.y_1 | 0;
    return result;
  };
  protoOf(AtlasEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AtlasEntry))
      return false;
    if (!equals(this.image_1, other.image_1))
      return false;
    if (!(this.x_1 === other.x_1))
      return false;
    if (!(this.y_1 === other.y_1))
      return false;
    return true;
  };
  function _get_binWidth__3465rg($this) {
    return $this.binWidth_1;
  }
  function _get_binHeight__gnx14z($this) {
    return $this.binHeight_1;
  }
  function _get_freeRects__xvwqsu($this) {
    return $this.freeRects_1;
  }
  function Rect(x, y, width, height) {
    this.x_1 = x;
    this.y_1 = y;
    this.width_1 = width;
    this.height_1 = height;
  }
  protoOf(Rect).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(Rect).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(Rect).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(Rect).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(Rect).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(Rect).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(Rect).component3_7eebsa_k$ = function () {
    return this.width_1;
  };
  protoOf(Rect).component4_7eebs9_k$ = function () {
    return this.height_1;
  };
  protoOf(Rect).copy_my5h57_k$ = function (x, y, width, height) {
    return new Rect(x, y, width, height);
  };
  protoOf(Rect).copy$default_fprav5_k$ = function (x, y, width, height, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    width = width === VOID ? this.width_1 : width;
    height = height === VOID ? this.height_1 : height;
    return $super === VOID ? this.copy_my5h57_k$(x, y, width, height) : $super.copy_my5h57_k$.call(this, x, y, width, height);
  };
  protoOf(Rect).toString = function () {
    return 'Rect(x=' + this.x_1 + ', y=' + this.y_1 + ', width=' + this.width_1 + ', height=' + this.height_1 + ')';
  };
  protoOf(Rect).hashCode = function () {
    var result = this.x_1;
    result = imul(result, 31) + this.y_1 | 0;
    result = imul(result, 31) + this.width_1 | 0;
    result = imul(result, 31) + this.height_1 | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!(this.x_1 === other.x_1))
      return false;
    if (!(this.y_1 === other.y_1))
      return false;
    if (!(this.width_1 === other.width_1))
      return false;
    if (!(this.height_1 === other.height_1))
      return false;
    return true;
  };
  function MaxRectsPacker_init_$Init$(binWidth, binHeight, freeRects, $this) {
    MaxRectsPacker.call($this, binWidth, binHeight);
    $this.freeRects_1.clear_j9egeb_k$();
    $this.freeRects_1.addAll_4lagoh_k$(freeRects);
    return $this;
  }
  function MaxRectsPacker_init_$Create$(binWidth, binHeight, freeRects) {
    return MaxRectsPacker_init_$Init$(binWidth, binHeight, freeRects, objectCreate(protoOf(MaxRectsPacker)));
  }
  function splitFreeRects($this, used) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var newRects = ArrayList_init_$Create$_0();
    var iterator = $this.freeRects_1.iterator_jk1svi_k$();
    $l$loop: while (iterator.hasNext_bitz1p_k$()) {
      var free = iterator.next_20eer_k$();
      if (!overlaps($this, free, used))
        continue $l$loop;
      iterator.remove_ldkf9o_k$();
      if (free.x_1 < used.x_1) {
        newRects.add_utx5q5_k$(new Rect(free.x_1, free.y_1, used.x_1 - free.x_1 | 0, free.height_1));
      }
      if ((free.x_1 + free.width_1 | 0) > (used.x_1 + used.width_1 | 0)) {
        newRects.add_utx5q5_k$(new Rect(used.x_1 + used.width_1 | 0, free.y_1, ((free.x_1 + free.width_1 | 0) - used.x_1 | 0) - used.width_1 | 0, free.height_1));
      }
      if (free.y_1 < used.y_1) {
        newRects.add_utx5q5_k$(new Rect(free.x_1, free.y_1, free.width_1, used.y_1 - free.y_1 | 0));
      }
      if ((free.y_1 + free.height_1 | 0) > (used.y_1 + used.height_1 | 0)) {
        newRects.add_utx5q5_k$(new Rect(free.x_1, used.y_1 + used.height_1 | 0, free.width_1, ((free.y_1 + free.height_1 | 0) - used.y_1 | 0) - used.height_1 | 0));
      }
    }
    $this.freeRects_1.addAll_4lagoh_k$(newRects);
  }
  function overlaps($this, a, b) {
    return a.x_1 < (b.x_1 + b.width_1 | 0) && (a.x_1 + a.width_1 | 0) > b.x_1 && a.y_1 < (b.y_1 + b.height_1 | 0) && (a.y_1 + a.height_1 | 0) > b.y_1;
  }
  function pruneFreeRects($this) {
    var size = $this.freeRects_1.get_size_woubt6_k$();
    var writeIdx = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      outer: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var rectI = $this.freeRects_1.get_c1px32_k$(i);
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!(i === j) && contains($this, $this.freeRects_1.get_c1px32_k$(j), rectI)) {
              continue outer;
            }
          }
           while (inductionVariable_0 < size);
        var _unary__edvuaz = writeIdx;
        writeIdx = _unary__edvuaz + 1 | 0;
        $this.freeRects_1.set_82063s_k$(_unary__edvuaz, rectI);
      }
       while (inductionVariable < size);
    while ($this.freeRects_1.get_size_woubt6_k$() > writeIdx) {
      $this.freeRects_1.removeAt_6niowx_k$(get_lastIndex($this.freeRects_1));
    }
  }
  function contains($this, outer, inner) {
    return outer.x_1 <= inner.x_1 && outer.y_1 <= inner.y_1 && (outer.x_1 + outer.width_1 | 0) >= (inner.x_1 + inner.width_1 | 0) && (outer.y_1 + outer.height_1 | 0) >= (inner.y_1 + inner.height_1 | 0);
  }
  function MaxRectsPacker(binWidth, binHeight) {
    this.binWidth_1 = binWidth;
    this.binHeight_1 = binHeight;
    this.freeRects_1 = mutableListOf([new Rect(0, 0, this.binWidth_1, this.binHeight_1)]);
  }
  protoOf(MaxRectsPacker).clone_1keycd_k$ = function () {
    return MaxRectsPacker_init_$Create$(this.binWidth_1, this.binHeight_1, this.freeRects_1);
  };
  protoOf(MaxRectsPacker).insert_5z02kn_k$ = function (w, h) {
    var bestX = -1;
    var bestY = -1;
    var bestShortSide = 2147483647;
    var bestLongSide = 2147483647;
    var _iterator__ex2g4s = this.freeRects_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var rect = _iterator__ex2g4s.next_20eer_k$();
      if (rect.width_1 >= w && rect.height_1 >= h) {
        var leftoverHoriz = rect.width_1 - w | 0;
        var leftoverVert = rect.height_1 - h | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var shortSide = Math.min(leftoverHoriz, leftoverVert);
        // Inline function 'kotlin.comparisons.maxOf' call
        var longSide = Math.max(leftoverHoriz, leftoverVert);
        if (shortSide < bestShortSide || (shortSide === bestShortSide && bestLongSide > longSide)) {
          bestX = rect.x_1;
          bestY = rect.y_1;
          bestShortSide = shortSide;
          bestLongSide = longSide;
        }
      }
    }
    if (bestX === -1)
      return null;
    var placed = new Rect(bestX, bestY, w, h);
    splitFreeRects(this, placed);
    pruneFreeRects(this);
    return to(bestX, bestY);
  };
  function decodePngBytes(bytes, $completion) {
    var tmp = new $decodePngBytesCOROUTINE$(bytes, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $decodePngBytesCOROUTINE$(bytes, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bytes_1 = bytes;
  }
  protoOf($decodePngBytesCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var this_0 = [this.bytes_1];
            var type = 'image/png';
            var o = {};
            o['type'] = type;
            var blob = new Blob(this_0, o);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = createImageBitmap(blob);
            suspendResult = await_0(tmp_0 instanceof Promise ? tmp_0 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bitmap = suspendResult;
            var w = bitmap.width;
            var h = bitmap.height;
            var canvas = new OffscreenCanvas(w, h);
            var ctx = canvas.getContext('2d');
            ctx.drawImage(bitmap, 0, 0);
            bitmap.close();
            var imageData = ctx.getImageData(0, 0, w, h);
            var rgbaData = imageData.data;
            var pixelCount = imul(w, h);
            var pixels = new Int32Array(pixelCount);
            var uint32View = new Uint32Array(rgbaData.buffer, rgbaData.byteOffset, rgbaData.length / 4);
            var inductionVariable = 0;
            if (inductionVariable < pixelCount)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var tmp_1 = uint32View[i];
                var abgr = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
                var r = abgr & 255;
                var g = (abgr >>> 8 | 0) & 255;
                var b = (abgr >>> 16 | 0) & 255;
                var a = (abgr >>> 24 | 0) & 255;
                pixels[i] = a << 24 | r << 16 | g << 8 | b;
              }
               while (inductionVariable < pixelCount);
            return new PixelImage(w, h, pixels);
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
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AudioData;
  _.$_$.b = DataWinParserOptions;
  _.$_$.c = IsoFile;
  _.$_$.d = Iso9660Creator;
  _.$_$.e = parseOgg;
  _.$_$.f = parseWav;
  _.$_$.g = processDataWin;
  _.$_$.h = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=ButterscotchPreprocessor-processor-common.js.map
