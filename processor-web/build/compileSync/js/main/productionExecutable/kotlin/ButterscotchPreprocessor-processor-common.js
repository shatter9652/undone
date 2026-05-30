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
  var protoOf = kotlin_kotlin.$_$.s8;
  var toShort = kotlin_kotlin.$_$.u8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.h2;
  var floatFromBits = kotlin_kotlin.$_$.t7;
  var fromInt = kotlin_kotlin.$_$.y6;
  var Long = kotlin_kotlin.$_$.xa;
  var bitwiseAnd = kotlin_kotlin.$_$.r6;
  var shiftLeft = kotlin_kotlin.$_$.c7;
  var bitwiseOr = kotlin_kotlin.$_$.s6;
  var copyOfRange = kotlin_kotlin.$_$.q3;
  var decodeToString = kotlin_kotlin.$_$.q9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var numberToChar = kotlin_kotlin.$_$.o8;
  var Char = kotlin_kotlin.$_$.ra;
  var Unit_instance = kotlin_kotlin.$_$.l2;
  var toCharArray = kotlin_kotlin.$_$.h5;
  var concatToString = kotlin_kotlin.$_$.n9;
  var initMetadataForClass = kotlin_kotlin.$_$.a8;
  var numberToInt = kotlin_kotlin.$_$.q8;
  var coerceAtLeast = kotlin_kotlin.$_$.x8;
  var copyOf = kotlin_kotlin.$_$.r3;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var toByte = kotlin_kotlin.$_$.t8;
  var arrayCopy = kotlin_kotlin.$_$.f3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.w1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var equalsLong = kotlin_kotlin.$_$.x6;
  var toString_0 = kotlin_kotlin.$_$.oa;
  var sortedWith = kotlin_kotlin.$_$.d5;
  var toIntArray = kotlin_kotlin.$_$.i5;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var ensureNotNull = kotlin_kotlin.$_$.ib;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.b2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.c2;
  var uintCompare = kotlin_kotlin.$_$.sb;
  var copyOf_0 = kotlin_kotlin.$_$.u3;
  var equals = kotlin_kotlin.$_$.s7;
  var FunctionAdapter = kotlin_kotlin.$_$.h7;
  var isInterface = kotlin_kotlin.$_$.j8;
  var Comparator = kotlin_kotlin.$_$.sa;
  var hashCode = kotlin_kotlin.$_$.z7;
  var UInt = kotlin_kotlin.$_$.cb;
  var compareValues = kotlin_kotlin.$_$.s5;
  var plus = kotlin_kotlin.$_$.u4;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.k3;
  var toMutableList = kotlin_kotlin.$_$.n5;
  var mapCapacity = kotlin_kotlin.$_$.p4;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var take = kotlin_kotlin.$_$.g5;
  var toSet = kotlin_kotlin.$_$.p5;
  var initMetadataForObject = kotlin_kotlin.$_$.f8;
  var emptyList = kotlin_kotlin.$_$.x3;
  var Pair = kotlin_kotlin.$_$.ya;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var compareTo = kotlin_kotlin.$_$.p7;
  var checkIndexOverflow = kotlin_kotlin.$_$.j3;
  var toString_1 = kotlin_kotlin.$_$.na;
  var println = kotlin_kotlin.$_$.o6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.b8;
  var getBooleanHashCode = kotlin_kotlin.$_$.u7;
  var last = kotlin_kotlin.$_$.m4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.lb;
  var encodeToByteArray = kotlin_kotlin.$_$.r9;
  var charSequenceLength = kotlin_kotlin.$_$.o7;
  var coerceAtMost = kotlin_kotlin.$_$.y8;
  var lastIndexOf = kotlin_kotlin.$_$.x9;
  var substring = kotlin_kotlin.$_$.ga;
  var substring_0 = kotlin_kotlin.$_$.fa;
  var split = kotlin_kotlin.$_$.ca;
  var add = kotlin_kotlin.$_$.q6;
  var divide = kotlin_kotlin.$_$.w6;
  var convertToInt = kotlin_kotlin.$_$.v6;
  var toTypedArray = kotlin_kotlin.$_$.q5;
  var sortWith = kotlin_kotlin.$_$.b5;
  var toIntArray_0 = kotlin_kotlin.$_$.j5;
  var copyOfRange_0 = kotlin_kotlin.$_$.p3;
  var to = kotlin_kotlin.$_$.rb;
  var mutableListOf = kotlin_kotlin.$_$.s4;
  var multiply = kotlin_kotlin.$_$.a7;
  var compare = kotlin_kotlin.$_$.u6;
  var coerceIn = kotlin_kotlin.$_$.z8;
  var emptyMap = kotlin_kotlin.$_$.y3;
  var coerceIn_0 = kotlin_kotlin.$_$.a9;
  var startsWith = kotlin_kotlin.$_$.da;
  var getOrNull = kotlin_kotlin.$_$.f4;
  var getProgressionLastElement = kotlin_kotlin.$_$.m6;
  var sorted = kotlin_kotlin.$_$.f5;
  var THROW_CCE = kotlin_kotlin.$_$.ab;
  var KtMap = kotlin_kotlin.$_$.w2;
  var CoroutineImpl = kotlin_kotlin.$_$.j6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u5;
  var initMetadataForLambda = kotlin_kotlin.$_$.e8;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var awaitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var withIndex = kotlin_kotlin.$_$.r5;
  var getStringHashCode = kotlin_kotlin.$_$.y7;
  var Collection = kotlin_kotlin.$_$.t2;
  var checkCountOverflow = kotlin_kotlin.$_$.i3;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.w;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.c8;
  var listOf = kotlin_kotlin.$_$.o4;
  var sortedArray = kotlin_kotlin.$_$.c5;
  var until = kotlin_kotlin.$_$.f9;
  var abs = kotlin_kotlin.$_$.w8;
  var fill = kotlin_kotlin.$_$.c4;
  var booleanArray = kotlin_kotlin.$_$.k7;
  var sortedWith_0 = kotlin_kotlin.$_$.e5;
  var subtract = kotlin_kotlin.$_$.f7;
  var Triple = kotlin_kotlin.$_$.bb;
  var Enum = kotlin_kotlin.$_$.ta;
  var objectCreate = kotlin_kotlin.$_$.r8;
  var get_lastIndex = kotlin_kotlin.$_$.k4;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
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
  initMetadataForLambda(processDataWin$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(processDataWin$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(processDataWin$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(processDataWin$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(processDataWin$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(processDataWin$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForClass(processDataWin$MusEntry, 'MusEntry');
  initMetadataForLambda(processDataWin$slambda$slambda_5, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(processDataWin$slambda_5, CoroutineImpl, VOID, [1]);
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
  function BinaryReader(data) {
    this.hw_1 = data;
    this.iw_1 = 0;
  }
  protoOf(BinaryReader).o = function () {
    return this.hw_1.length;
  };
  protoOf(BinaryReader).jw = function () {
    var _unary__edvuaz = this.iw_1;
    this.iw_1 = _unary__edvuaz + 1 | 0;
    return this.hw_1[_unary__edvuaz] & 255;
  };
  protoOf(BinaryReader).kw = function () {
    var _unary__edvuaz = this.iw_1;
    this.iw_1 = _unary__edvuaz + 1 | 0;
    var lo = this.hw_1[_unary__edvuaz] & 255;
    var _unary__edvuaz_0 = this.iw_1;
    this.iw_1 = _unary__edvuaz_0 + 1 | 0;
    var hi = this.hw_1[_unary__edvuaz_0] & 255;
    return toShort(hi << 8 | lo);
  };
  protoOf(BinaryReader).lw = function () {
    return this.kw() & 65535;
  };
  protoOf(BinaryReader).mw = function () {
    var _unary__edvuaz = this.iw_1;
    this.iw_1 = _unary__edvuaz + 1 | 0;
    var b0 = this.hw_1[_unary__edvuaz] & 255;
    var _unary__edvuaz_0 = this.iw_1;
    this.iw_1 = _unary__edvuaz_0 + 1 | 0;
    var b1 = this.hw_1[_unary__edvuaz_0] & 255;
    var _unary__edvuaz_1 = this.iw_1;
    this.iw_1 = _unary__edvuaz_1 + 1 | 0;
    var b2 = this.hw_1[_unary__edvuaz_1] & 255;
    var _unary__edvuaz_2 = this.iw_1;
    this.iw_1 = _unary__edvuaz_2 + 1 | 0;
    var b3 = this.hw_1[_unary__edvuaz_2] & 255;
    return b3 << 24 | b2 << 16 | b1 << 8 | b0;
  };
  protoOf(BinaryReader).nw = function () {
    // Inline function 'kotlin.fromBits' call
    var bits = this.mw();
    return floatFromBits(bits);
  };
  protoOf(BinaryReader).ow = function () {
    var lo = bitwiseAnd(fromInt(this.mw()), new Long(-1, 0));
    var hi = bitwiseAnd(fromInt(this.mw()), new Long(-1, 0));
    return bitwiseOr(shiftLeft(hi, 32), lo);
  };
  protoOf(BinaryReader).pw = function () {
    return !(this.mw() === 0);
  };
  protoOf(BinaryReader).qw = function (count) {
    var bytes = copyOfRange(this.hw_1, this.iw_1, this.iw_1 + count | 0);
    this.iw_1 = this.iw_1 + count | 0;
    return bytes;
  };
  protoOf(BinaryReader).rw = function (offset, count) {
    var saved = this.iw_1;
    this.iw_1 = offset;
    var bytes = this.qw(count);
    this.iw_1 = saved;
    return bytes;
  };
  protoOf(BinaryReader).sw = function (count) {
    this.iw_1 = this.iw_1 + count | 0;
  };
  protoOf(BinaryReader).tw = function () {
    var offset = this.mw();
    if (offset === 0)
      return null;
    var saved = this.iw_1;
    this.iw_1 = offset - 4 | 0;
    var length = this.mw();
    var bytes = this.qw(length);
    this.iw_1 = saved;
    return decodeToString(bytes);
  };
  protoOf(BinaryReader).uw = function () {
    var count = this.mw();
    if (count === 0) {
      // Inline function 'kotlin.intArrayOf' call
      return new Int32Array([]);
    }
    var tmp = 0;
    var tmp_0 = new Int32Array(count);
    while (tmp < count) {
      tmp_0[tmp] = this.mw();
      tmp = tmp + 1 | 0;
    }
    return tmp_0;
  };
  protoOf(BinaryReader).vw = function () {
    var bytes = this.qw(4);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(bytes.length);
    var inductionVariable = 0;
    var last = bytes.length;
    while (inductionVariable < last) {
      var item = bytes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0 = new Char(numberToChar(item));
      destination.g(tmp$ret$0);
    }
    return concatToString(toCharArray(destination));
  };
  function resizeBufferIfNeeded($this, requiredCapacity) {
    if (requiredCapacity > $this.ww_1.length) {
      var newSize = coerceAtLeast(numberToInt(requiredCapacity * 1.5), requiredCapacity + 1 | 0);
      $this.ww_1 = copyOf($this.ww_1, newSize);
    }
  }
  function ByteWriter(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 256 : initialCapacity;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity > 0)) {
      var message = 'Initial capacity must be greater than 0!';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.ww_1 = new Int8Array(initialCapacity);
    this.xw_1 = 0;
  }
  protoOf(ByteWriter).yw = function (value) {
    resizeBufferIfNeeded(this, this.xw_1 + 1 | 0);
    var tmp = this.ww_1;
    var _unary__edvuaz = this.xw_1;
    this.xw_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = toByte(value);
  };
  protoOf(ByteWriter).zw = function (value) {
    resizeBufferIfNeeded(this, this.xw_1 + 2 | 0);
    var tmp = this.ww_1;
    var _unary__edvuaz = this.xw_1;
    this.xw_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = toByte(value & 255);
    var tmp_0 = this.ww_1;
    var _unary__edvuaz_0 = this.xw_1;
    this.xw_1 = _unary__edvuaz_0 + 1 | 0;
    tmp_0[_unary__edvuaz_0] = toByte(value >> 8 & 255);
  };
  protoOf(ByteWriter).ax = function (value) {
    resizeBufferIfNeeded(this, this.xw_1 + 4 | 0);
    var tmp = this.ww_1;
    var _unary__edvuaz = this.xw_1;
    this.xw_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = toByte(value & 255);
    var tmp_0 = this.ww_1;
    var _unary__edvuaz_0 = this.xw_1;
    this.xw_1 = _unary__edvuaz_0 + 1 | 0;
    tmp_0[_unary__edvuaz_0] = toByte(value >> 8 & 255);
    var tmp_1 = this.ww_1;
    var _unary__edvuaz_1 = this.xw_1;
    this.xw_1 = _unary__edvuaz_1 + 1 | 0;
    tmp_1[_unary__edvuaz_1] = toByte(value >> 16 & 255);
    var tmp_2 = this.ww_1;
    var _unary__edvuaz_2 = this.xw_1;
    this.xw_1 = _unary__edvuaz_2 + 1 | 0;
    tmp_2[_unary__edvuaz_2] = toByte(value >> 24 & 255);
  };
  protoOf(ByteWriter).bx = function (array) {
    resizeBufferIfNeeded(this, this.xw_1 + array.length | 0);
    var tmp2 = this.ww_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.xw_1;
    var endIndex = array.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = array;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, 0, endIndex);
    this.xw_1 = this.xw_1 + array.length | 0;
  };
  protoOf(ByteWriter).cx = function (count) {
    resizeBufferIfNeeded(this, this.xw_1 + count | 0);
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.ww_1;
        var _unary__edvuaz = this.xw_1;
        this.xw_1 = _unary__edvuaz + 1 | 0;
        tmp[_unary__edvuaz] = 0;
      }
       while (inductionVariable < count);
  };
  protoOf(ByteWriter).dx = function () {
    var result = new Int8Array(this.xw_1);
    var tmp0 = this.ww_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.xw_1;
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
    var tmp = br.ix(8);
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(66);
    if (!(tmp === Char__toInt_impl_vasixd(this_0)))
      throw IllegalStateException_init_$Create$("Not a bzip2 stream: missing 'B'");
    var tmp_0 = br.ix(8);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(90);
    if (!(tmp_0 === Char__toInt_impl_vasixd(this_1)))
      throw IllegalStateException_init_$Create$("Not a bzip2 stream: missing 'Z'");
    var tmp_1 = br.ix(8);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(104);
    if (!(tmp_1 === Char__toInt_impl_vasixd(this_2)))
      throw IllegalStateException_init_$Create$("Not a bzip2 stream: missing 'h'");
    var tmp_2 = br.ix(8);
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
      var magicHi = br.ix(24);
      var magicLo = br.ix(24);
      var magic = bitwiseOr(shiftLeft(fromInt(magicHi), 24), bitwiseAnd(fromInt(magicLo), new Long(16777215, 0)));
      if (equalsLong(magic, new Long(1161318544, 6002))) {
        br.ix(32);
        break $l$loop;
      }
      if (!equalsLong(magic, new Long(1495683929, 12609)))
        throw IllegalStateException_init_$Create$('Invalid block magic: ' + toString_0(magic, 16));
      br.ix(32);
      var randomised = br.ix(1);
      var origPtr = br.ix(24);
      var mapL1 = br.ix(16);
      var seqToUnseq = new Int32Array(256);
      var numInUse = 0;
      var inductionVariable = 0;
      if (inductionVariable < 16)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!((mapL1 & 1 << (15 - i | 0)) === 0)) {
            var sub = br.ix(16);
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
      var numTrees = br.ix(3);
      if (!(2 <= numTrees ? numTrees <= 6 : false))
        throw IllegalStateException_init_$Create$('Invalid numTrees: ' + numTrees);
      var numSelectors = br.ix(15);
      if (numSelectors < 1)
        throw IllegalStateException_init_$Create$('Invalid numSelectors: ' + numSelectors);
      var selectorsMtf = new Int32Array(numSelectors);
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < numSelectors)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var j_0 = 0;
          while (br.ix(1) === 1) {
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
          var curr = br.ix(5);
          var inductionVariable_4 = 0;
          if (inductionVariable_4 < alphaSize)
            do {
              var s = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              $l$loop_0: while (true) {
                if (!(1 <= curr ? curr <= 20 : false))
                  throw IllegalStateException_init_$Create$('Invalid code length: ' + curr);
                if (br.ix(1) === 0)
                  break $l$loop_0;
                if (br.ix(1) === 1) {
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
        var code_0 = br.ix(len);
        while (code_0 > limit_0[len]) {
          len = len + 1 | 0;
          if (len >= limit_0.length)
            throw IllegalStateException_init_$Create$('Huffman decode overflow');
          code_0 = code_0 << 1 | br.ix(1);
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
  function BitReader(data) {
    this.ex_1 = data;
    this.fx_1 = 0;
    this.gx_1 = 0;
    this.hx_1 = 0;
  }
  protoOf(BitReader).ix = function (n) {
    if (n === 0)
      return 0;
    if (n > 24) {
      var hi = this.ix(n - 16 | 0);
      var lo = this.ix(16);
      return hi << 16 | lo;
    }
    while (this.hx_1 < n) {
      if (this.fx_1 >= this.ex_1.length)
        throw IllegalStateException_init_$Create$('Unexpected end of bzip2 stream');
      this.gx_1 = this.gx_1 << 8 | this.ex_1[this.fx_1] & 255;
      this.fx_1 = this.fx_1 + 1 | 0;
      this.hx_1 = this.hx_1 + 8 | 0;
    }
    var result = (this.gx_1 >>> (this.hx_1 - n | 0) | 0) & ((1 << n) - 1 | 0);
    this.hx_1 = this.hx_1 - n | 0;
    var tmp = this;
    var tmp_0 = this.gx_1;
    // Inline function 'kotlin.let' call
    var it = (1 << this.hx_1) - 1 | 0;
    tmp.gx_1 = tmp_0 & (this.hx_1 >= 31 ? -1 : it);
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
    this.jx_1 = name;
    this.kx_1 = width;
    this.lx_1 = height;
    this.mx_1 = bpp;
    this.nx_1 = palette;
    this.ox_1 = usedColors;
    this.px_1 = indices;
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
      colorToIndex.w1(c, i);
    }
    var tmp_1 = 0;
    var tmp_2 = pixels.length;
    var tmp_3 = new Int8Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      tmp_3[tmp_4] = toByte(ensureNotNull(colorToIndex.d2(pixels[tmp_4])));
      tmp_1 = tmp_1 + 1 | 0;
    }
    var indices = tmp_3;
    return new ClutImage(name, w, h, bpp, palette, sorted.length, indices);
  }
  function buildQuantizedClut($this, name, w, h, pixels, uniqueColors, targetBpp) {
    var paletteSlots = targetBpp === 4 ? 16 : 256;
    var hasTransparent = uniqueColors.s(0);
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
          destination.g(element);
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
    var quantPalette = MedianCut_instance.qx(visiblePixels, maxQuantColors);
    // Inline function 'kotlin.collections.mutableListOf' call
    var unsortedPalette = ArrayList_init_$Create$_0();
    if (hasTransparent) {
      unsortedPalette.g(0);
    }
    var inductionVariable_0 = 0;
    var last_0 = quantPalette.length;
    while (inductionVariable_0 < last_0) {
      var c = quantPalette[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      unsortedPalette.g(c);
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
        var cached = cache.d2(argb);
        var tmp_7;
        if (!(cached == null)) {
          tmp_7 = toByte(cached);
        } else {
          var n = ClutProcessor_instance.sx(argb, sortedColors, hasTransparent);
          // Inline function 'kotlin.collections.set' call
          cache.w1(argb, n);
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
    this.tx_1 = palette;
    this.ux_1 = usedColors;
    var tmp = this;
    // Inline function 'kotlin.run' call
    var h = this.ux_1;
    var inductionVariable = 0;
    var last = this.ux_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        h = imul(h, 31) + this.tx_1[i] | 0;
      }
       while (inductionVariable < last);
    tmp.vx_1 = h;
  }
  protoOf(PaletteKey).hashCode = function () {
    return this.vx_1;
  };
  protoOf(PaletteKey).equals = function (other) {
    if (!(other instanceof PaletteKey))
      return false;
    if (!(this.ux_1 === other.ux_1))
      return false;
    var inductionVariable = 0;
    var last = this.ux_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(this.tx_1[i] === other.tx_1[i]))
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
    var oldPalette = img.nx_1;
    var oldUsed = img.ox_1;
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
    var last = img.px_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var oldIdx = img.px_1[i] & 255;
        if (oldUsed > oldIdx) {
          img.px_1[i] = toByte(remapTable[oldIdx]);
        }
      }
       while (inductionVariable <= last);
    img.nx_1 = newPalette;
    img.ox_1 = newUsedColors;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.wx_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).wb = function (a, b) {
    return this.wx_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.wb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).u2 = function () {
    return this.wx_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
  };
  function sam$kotlin_Comparator$0_0(function_0) {
    this.xx_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).wb = function (a, b) {
    return this.xx_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.wb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).u2 = function () {
    return this.xx_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
  };
  function sam$kotlin_Comparator$0_1(function_0) {
    this.yx_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).wb = function (a, b) {
    return this.yx_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.wb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).u2 = function () {
    return this.yx_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
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
    var tmp = a.cy_1;
    var tmp$ret$1 = b.cy_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function ClutProcessor$mergeCluts$MergeableClut(id, bpp, colors, colorCount, imageNames, alive) {
    alive = alive === VOID ? true : alive;
    this.zx_1 = id;
    this.ay_1 = bpp;
    this.by_1 = colors;
    this.cy_1 = colorCount;
    this.dy_1 = imageNames;
    this.ey_1 = alive;
  }
  function mergeCluts$toSortedColors(colors) {
    var arr = toIntArray(colors);
    sortUnsigned(ClutProcessor_instance, arr, arr.length);
    return arr;
  }
  function mergeCluts$mergeByBpp(imageByName, cluts, maxSlots) {
    var changed = true;
    while (changed) {
      changed = false;
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s = cluts.l();
      while (_iterator__ex2g4s.m()) {
        var element = _iterator__ex2g4s.n();
        if (element.ey_1) {
          destination.g(element);
        }
      }
      // Inline function 'kotlin.collections.sortedBy' call
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = ClutProcessor$mergeCluts$mergeByBpp$lambda;
      var tmp$ret$3 = new sam$kotlin_Comparator$0_1(tmp);
      var aliveCluts = sortedWith(destination, tmp$ret$3);
      var inductionVariable = 0;
      var last = aliveCluts.o() - 1 | 0;
      if (inductionVariable <= last)
        $l$loop_0: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var clutA = aliveCluts.r(i);
          if (!clutA.ey_1)
            continue $l$loop_0;
          if (clutA.cy_1 >= maxSlots)
            continue $l$loop_0;
          var bestPartner = null;
          var bestUnionSize = 2147483647;
          var inductionVariable_0 = 0;
          var last_0 = aliveCluts.o() - 1 | 0;
          if (inductionVariable_0 <= last_0)
            $l$loop_3: do {
              var j = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (i === j)
                continue $l$loop_3;
              var clutB = aliveCluts.r(j);
              if (!clutB.ey_1)
                continue $l$loop_3;
              var tmp_0 = ClutProcessor_instance;
              var tmp_1 = clutA.by_1;
              var tmp_2 = clutA.cy_1;
              var tmp_3 = clutB.by_1;
              var tmp_4 = clutB.cy_1;
              // Inline function 'kotlin.comparisons.minOf' call
              var b = bestUnionSize - 1 | 0;
              var tmp$ret$5 = Math.min(maxSlots, b);
              var unionSize = sortedUnionSize(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp$ret$5);
              if (maxSlots >= unionSize && bestUnionSize > unionSize) {
                bestUnionSize = unionSize;
                bestPartner = clutB;
                var tmp0 = clutA.cy_1;
                // Inline function 'kotlin.comparisons.maxOf' call
                var b_0 = clutB.cy_1;
                if (unionSize === Math.max(tmp0, b_0))
                  break $l$loop_3;
              }
            }
             while (inductionVariable_0 <= last_0);
          if (!(bestPartner == null)) {
            var merged = sortedUnion(ClutProcessor_instance, bestPartner.by_1, bestPartner.cy_1, clutA.by_1, clutA.cy_1);
            var newPalette = new Int32Array(maxSlots);
            // Inline function 'kotlin.collections.copyInto' call
            var endIndex = merged.length;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_5 = merged;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_5, newPalette, 0, 0, endIndex);
            var _iterator__ex2g4s_0 = plus(bestPartner.dy_1, clutA.dy_1).l();
            $l$loop_4: while (_iterator__ex2g4s_0.m()) {
              var imgName = _iterator__ex2g4s_0.n();
              var tmp0_elvis_lhs = imageByName.d2(imgName);
              var tmp_6;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_4;
              } else {
                tmp_6 = tmp0_elvis_lhs;
              }
              var img = tmp_6;
              remapIndices(ClutProcessor_instance, img, newPalette, merged.length);
            }
            bestPartner.by_1 = merged;
            bestPartner.cy_1 = merged.length;
            bestPartner.dy_1.p(clutA.dy_1);
            clutA.ey_1 = false;
            changed = true;
          }
        }
         while (inductionVariable <= last);
    }
  }
  function ClutProcessor() {
    this.rx_1 = 1509;
  }
  protoOf(ClutProcessor).fy = function (name, img, force4bpp) {
    var w = img.gy_1;
    var h = img.hy_1;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var pixels = img.iy_1.slice();
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
      uniqueColors.g(p);
    }
    if (force4bpp) {
      var tmp;
      if (16 >= uniqueColors.o()) {
        tmp = buildDirectClut(this, name, w, h, pixels, uniqueColors, 4);
      } else {
        tmp = buildQuantizedClut(this, name, w, h, pixels, uniqueColors, 4);
      }
      return tmp;
    }
    return 16 >= uniqueColors.o() ? buildDirectClut(this, name, w, h, pixels, uniqueColors, 4) : 256 >= uniqueColors.o() ? buildDirectClut(this, name, w, h, pixels, uniqueColors, 8) : buildQuantizedClut(this, name, w, h, pixels, uniqueColors, 8);
  };
  protoOf(ClutProcessor).sx = function (argb, sortedColors, hasTransparent) {
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
  protoOf(ClutProcessor).jy = function (img) {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var colors = LinkedHashSet_init_$Create$();
    var inductionVariable = 0;
    var last = img.ox_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        colors.g(img.nx_1[i]);
      }
       while (inductionVariable < last);
    return colors;
  };
  protoOf(ClutProcessor).ky = function (images) {
    var groups = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = images.l();
    while (_iterator__ex2g4s.m()) {
      var img = _iterator__ex2g4s.n();
      var key = new PaletteKey(img.nx_1, img.ox_1);
      // Inline function 'kotlin.collections.getOrPut' call
      var value = groups.d2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$_0();
        groups.w1(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      tmp.g(img);
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var clutGroups = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = groups.a2().l();
    while (_iterator__ex2g4s_0.m()) {
      // Inline function 'kotlin.collections.component2' call
      var groupImages = _iterator__ex2g4s_0.n().v1();
      var representative = groupImages.r(0);
      var tmp_0 = clutGroups.o();
      var tmp_1 = representative.mx_1;
      var tmp_2 = this.jy(representative);
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = representative.nx_1.slice();
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(groupImages, 10));
      var _iterator__ex2g4s_1 = groupImages.l();
      while (_iterator__ex2g4s_1.m()) {
        var item = _iterator__ex2g4s_1.n();
        var tmp$ret$8 = item.jx_1;
        destination.g(tmp$ret$8);
      }
      var group = new ClutGroup(tmp_0, tmp_1, tmp_2, tmp_3, toMutableList(destination));
      var _iterator__ex2g4s_2 = groupImages.l();
      while (_iterator__ex2g4s_2.m()) {
        var img_0 = _iterator__ex2g4s_2.n();
        img_0.nx_1 = group.oy_1;
      }
      clutGroups.g(group);
    }
    return clutGroups;
  };
  protoOf(ClutProcessor).qy = function (images, initialGroups) {
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(images, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = images.l();
    while (_iterator__ex2g4s.m()) {
      var element = _iterator__ex2g4s.n();
      var tmp$ret$0 = element.jx_1;
      destination.w1(tmp$ret$0, element);
    }
    var imageByName = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = initialGroups.l();
    while (_iterator__ex2g4s_0.m()) {
      var element_0 = _iterator__ex2g4s_0.n();
      if (element_0.my_1 === 4) {
        destination_0.g(element_0);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_0, 10));
    var _iterator__ex2g4s_1 = destination_0.l();
    while (_iterator__ex2g4s_1.m()) {
      var item = _iterator__ex2g4s_1.n();
      var tmp$ret$6 = new ClutProcessor$mergeCluts$MergeableClut(item.ly_1, item.my_1, mergeCluts$toSortedColors(item.ny_1), item.ny_1.o(), toMutableList(item.py_1));
      destination_1.g(tmp$ret$6);
    }
    var groups4 = destination_1;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_2 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_2 = initialGroups.l();
    while (_iterator__ex2g4s_2.m()) {
      var element_1 = _iterator__ex2g4s_2.n();
      if (element_1.my_1 === 8) {
        destination_2.g(element_1);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_2, 10));
    var _iterator__ex2g4s_3 = destination_2.l();
    while (_iterator__ex2g4s_3.m()) {
      var item_0 = _iterator__ex2g4s_3.n();
      var tmp$ret$12 = new ClutProcessor$mergeCluts$MergeableClut(item_0.ly_1, item_0.my_1, mergeCluts$toSortedColors(item_0.ny_1), item_0.ny_1.o(), toMutableList(item_0.py_1));
      destination_3.g(tmp$ret$12);
    }
    var groups8 = destination_3;
    mergeCluts$mergeByBpp(imageByName, groups4, 16);
    mergeCluts$mergeByBpp(imageByName, groups8, 256);
    // Inline function 'kotlin.collections.mutableListOf' call
    var finalGroups = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_4 = plus(groups4, groups8).l();
    $l$loop: while (_iterator__ex2g4s_4.m()) {
      var clut = _iterator__ex2g4s_4.n();
      if (!clut.ey_1)
        continue $l$loop;
      var palette = new Int32Array(clut.ay_1 === 4 ? 16 : 256);
      var tmp0 = clut.by_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = clut.cy_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, palette, 0, 0, endIndex);
      finalGroups.g(new ClutGroup(finalGroups.o(), clut.ay_1, toSet(take(clut.by_1, clut.cy_1)), palette, clut.dy_1));
    }
    return finalGroups;
  };
  var ClutProcessor_instance;
  function ClutProcessor_getInstance() {
    return ClutProcessor_instance;
  }
  function ClutGroup(id, bpp, colors, palette, imageNames) {
    this.ly_1 = id;
    this.my_1 = bpp;
    this.ny_1 = colors;
    this.oy_1 = palette;
    this.py_1 = imageNames;
  }
  function readEventActions($this, reader) {
    var ptrs = reader.uw();
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
      reader.iw_1 = item;
      // Inline function 'kotlin.apply' call
      var this_0 = new EventAction();
      this_0.ry_1 = reader.mw();
      this_0.sy_1 = reader.mw();
      this_0.ty_1 = reader.mw();
      this_0.uy_1 = reader.pw();
      this_0.vy_1 = reader.pw();
      this_0.wy_1 = reader.pw();
      this_0.xy_1 = reader.mw();
      this_0.yy_1 = reader.tw();
      this_0.zy_1 = reader.mw();
      this_0.az_1 = reader.mw();
      this_0.bz_1 = reader.mw();
      this_0.cz_1 = reader.pw();
      this_0.dz_1 = reader.pw();
      this_0.ez_1 = reader.mw();
      destination.g(this_0);
    }
    return destination;
  }
  function parseGEN8($this, reader, dw) {
    var g = dw.fz_1;
    g.k10_1 = reader.jw();
    g.l10_1 = reader.jw();
    reader.sw(2);
    g.m10_1 = reader.tw();
    g.n10_1 = reader.tw();
    g.o10_1 = reader.mw();
    g.p10_1 = reader.mw();
    g.q10_1 = reader.mw();
    g.r10_1 = reader.qw(16);
    g.s10_1 = reader.tw();
    g.t10_1 = reader.mw();
    g.u10_1 = reader.mw();
    g.v10_1 = reader.mw();
    g.w10_1 = reader.mw();
    g.x10_1 = reader.mw();
    g.y10_1 = reader.mw();
    g.z10_1 = reader.mw();
    g.a11_1 = reader.mw();
    g.b11_1 = reader.qw(16);
    g.c11_1 = reader.ow();
    g.d11_1 = reader.tw();
    g.e11_1 = reader.ow();
    g.f11_1 = reader.ow();
    g.g11_1 = reader.mw();
    if (g.l10_1 >= 14) {
      g.h11_1 = reader.mw();
    }
    var roomOrderCount = reader.mw();
    var tmp = g;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(roomOrderCount);
    while (tmp_0 < roomOrderCount) {
      tmp_1[tmp_0] = reader.mw();
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.i11_1 = tmp_1;
    if (g.t10_1 >= 2) {
      reader.sw(8);
      reader.sw(32);
      g.j11_1 = reader.nw();
      reader.sw(4);
      reader.sw(16);
    }
    dw.k11(g.t10_1, g.u10_1, g.v10_1, g.w10_1);
  }
  function parseOPTN($this, reader, dw) {
    var o = dw.gz_1;
    var marker = reader.mw();
    var newFormat = marker === -2147483648;
    if (newFormat) {
      reader.mw();
      o.l11_1 = reader.ow();
      o.m11_1 = reader.mw();
      o.n11_1 = reader.mw();
      o.o11_1 = reader.mw();
      o.p11_1 = reader.mw();
      o.q11_1 = reader.mw();
      o.r11_1 = reader.mw();
      o.s11_1 = reader.mw();
      o.t11_1 = reader.mw();
      o.u11_1 = reader.mw();
      o.v11_1 = reader.mw();
      o.w11_1 = reader.mw();
    } else {
      reader.iw_1 = reader.iw_1 - 4 | 0;
      o.l11_1 = new Long(0, 0);
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(1, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(2, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(4, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(8, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(16, 0));
      o.m11_1 = reader.mw();
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(32, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(64, 0));
      o.n11_1 = reader.mw();
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(128, 0));
      o.o11_1 = reader.mw();
      o.p11_1 = reader.mw();
      o.q11_1 = reader.mw();
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(256, 0));
      o.r11_1 = reader.mw();
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(512, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(1024, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(2048, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(4096, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(8192, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(16384, 0));
      o.s11_1 = reader.mw();
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(32768, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(65536, 0));
      o.t11_1 = reader.mw();
      o.u11_1 = reader.mw();
      o.v11_1 = reader.mw();
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(131072, 0));
      o.w11_1 = reader.mw();
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(262144, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(524288, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(1048576, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(2097152, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(4194304, 0));
      if (reader.pw())
        o.l11_1 = bitwiseOr(o.l11_1, new Long(8388608, 0));
    }
    var constantCount = reader.mw();
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
        var tmp$ret$0 = new OptnConstant(reader.tw(), reader.tw());
        list.g(tmp$ret$0);
      }
       while (inductionVariable < constantCount);
    tmp.x11_1 = list;
  }
  function parseLANG($this, reader, dw) {
    var l = dw.hz_1;
    l.y11_1 = reader.mw();
    var languageCount = reader.mw();
    var entryCount = reader.mw();
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
        var tmp$ret$0 = reader.tw();
        list.g(tmp$ret$0);
      }
       while (inductionVariable < entryCount);
    tmp.z11_1 = list;
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
        var name = reader.tw();
        var region = reader.tw();
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var list_1 = ArrayList_init_$Create$(entryCount);
        // Inline function 'kotlin.repeat' call
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < entryCount)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var tmp$ret$5 = reader.tw();
            list_1.g(tmp$ret$5);
          }
           while (inductionVariable_1 < entryCount);
        var tmp$ret$10 = new Language(name, region, list_1);
        list_0.g(tmp$ret$10);
      }
       while (inductionVariable_0 < languageCount);
    tmp_0.a12_1 = list_0;
  }
  function parseEXTN($this, reader, dw) {
    var extPtrs = reader.uw();
    var tmp = dw.iz_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(extPtrs.length);
    var inductionVariable = 0;
    var last = extPtrs.length;
    while (inductionVariable < last) {
      var item = extPtrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.iw_1 = item;
      var folderName = reader.tw();
      var name = reader.tw();
      var className = reader.tw();
      var filePtrs = reader.uw();
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(filePtrs.length);
      var inductionVariable_0 = 0;
      var last_0 = filePtrs.length;
      while (inductionVariable_0 < last_0) {
        var item_0 = filePtrs[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        reader.iw_1 = item_0;
        var filename = reader.tw();
        var cleanupScript = reader.tw();
        var initScript = reader.tw();
        var kind = reader.mw();
        var funcPtrs = reader.uw();
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_1 = ArrayList_init_$Create$(funcPtrs.length);
        var inductionVariable_1 = 0;
        var last_1 = funcPtrs.length;
        while (inductionVariable_1 < last_1) {
          var item_1 = funcPtrs[inductionVariable_1];
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          reader.iw_1 = item_1;
          var fName = reader.tw();
          var id = reader.mw();
          var fKind = reader.mw();
          var retType = reader.mw();
          var extName = reader.tw();
          var argCount = reader.mw();
          var tmp_0 = 0;
          var tmp_1 = new Int32Array(argCount);
          while (tmp_0 < argCount) {
            tmp_1[tmp_0] = reader.mw();
            tmp_0 = tmp_0 + 1 | 0;
          }
          var arguments_0 = tmp_1;
          var tmp$ret$1 = new ExtensionFunction(fName, id, fKind, retType, extName, arguments_0);
          destination_1.g(tmp$ret$1);
        }
        var functions = destination_1;
        var tmp$ret$4 = new ExtensionFile(filename, cleanupScript, initScript, kind, functions);
        destination_0.g(tmp$ret$4);
      }
      var files = destination_0;
      var tmp$ret$7 = new Extension(folderName, name, className, files);
      destination.g(tmp$ret$7);
    }
    tmp.b12_1 = destination;
  }
  function parseSOND($this, reader, dw) {
    var ptrs = reader.uw();
    var tmp = dw.jz_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.iw_1 = item;
      var name = reader.tw();
      var flags = reader.mw();
      var type = reader.tw();
      var file = reader.tw();
      var effects = reader.mw();
      var volume = reader.nw();
      var pitch = reader.nw();
      var tmp_0;
      if ((flags & 100) === 100) {
        tmp_0 = reader.mw();
      } else {
        reader.mw();
        tmp_0 = 0;
      }
      var audioGroup = tmp_0;
      var audioFile = reader.mw();
      var tmp$ret$0 = new Sound(name, flags, type, file, effects, volume, pitch, audioGroup, audioFile);
      destination.g(tmp$ret$0);
    }
    tmp.c12_1 = destination;
  }
  function parseAGRP($this, reader, dw) {
    var ptrs = reader.uw();
    var tmp = dw.kz_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.iw_1 = item;
      var tmp$ret$0 = reader.tw();
      destination.g(tmp$ret$0);
    }
    tmp.d12_1 = destination;
  }
  function parseSPRT($this, reader, dw, skipNonPrecise) {
    var ptrs = reader.uw();
    var tmp = dw.lz_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.iw_1 = item;
      // Inline function 'kotlin.apply' call
      var this_0 = new Sprite();
      this_0.e12_1 = reader.tw();
      this_0.f12_1 = reader.mw();
      this_0.g12_1 = reader.mw();
      this_0.h12_1 = reader.mw();
      this_0.i12_1 = reader.mw();
      this_0.j12_1 = reader.mw();
      this_0.k12_1 = reader.mw();
      this_0.l12_1 = reader.pw();
      this_0.m12_1 = reader.pw();
      this_0.n12_1 = reader.pw();
      this_0.o12_1 = reader.mw();
      this_0.p12_1 = reader.mw();
      this_0.q12_1 = reader.mw();
      this_0.r12_1 = reader.mw();
      var textureCount = reader.mw();
      if (textureCount === -1) {
        this_0.w12_1 = true;
        this_0.s12_1 = reader.mw();
        this_0.t12_1 = reader.mw();
        if (dw.z12(2, 0, 0, 0)) {
          this_0.u12_1 = reader.nw();
          this_0.v12_1 = reader.pw();
          if (this_0.s12_1 >= 2) {
            reader.sw(4);
            if (this_0.s12_1 >= 3) {
              reader.sw(4);
            }
          }
          textureCount = reader.mw();
        }
      }
      var tmp_0 = this_0;
      var tmp_1 = 0;
      var tmp_2 = textureCount;
      var tmp_3 = new Int32Array(tmp_2);
      while (tmp_1 < tmp_2) {
        tmp_3[tmp_1] = reader.mw();
        tmp_1 = tmp_1 + 1 | 0;
      }
      tmp_0.x12_1 = tmp_3;
      var maskDataCount = reader.mw();
      if (maskDataCount > 0 && this_0.f12_1 > 0 && this_0.g12_1 > 0) {
        var bytesPerRow = (this_0.f12_1 + 7 | 0) / 8 | 0;
        var bytesPerMask = imul(bytesPerRow, this_0.g12_1);
        if (this_0.p12_1 === 1 || !skipNonPrecise) {
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
              var tmp$ret$1 = reader.qw(bytesPerMask);
              list.g(tmp$ret$1);
            }
             while (inductionVariable_0 < maskDataCount);
          tmp_4.y12_1 = list;
        } else {
          reader.sw(imul(bytesPerMask, maskDataCount));
        }
        var totalMaskBytes = imul(bytesPerMask, maskDataCount);
        var remainder = totalMaskBytes % 4 | 0;
        if (!(remainder === 0)) {
          reader.sw(4 - remainder | 0);
        }
      }
      destination.g(this_0);
    }
    tmp.a13_1 = destination;
    var inductionVariable_1 = 0;
    var last_0 = ptrs.length - 1 | 0;
    if (inductionVariable_1 <= last_0)
      do {
        var i = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var tmp0 = dw.f10_1;
        // Inline function 'kotlin.collections.set' call
        var key = ptrs[i];
        tmp0.w1(key, i);
      }
       while (inductionVariable_1 <= last_0);
  }
  function parseBGND($this, reader, dw) {
    var ptrs = reader.uw();
    var tmp = dw.mz_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.iw_1 = item;
      // Inline function 'kotlin.apply' call
      var this_0 = new Background();
      this_0.b13_1 = reader.tw();
      this_0.c13_1 = reader.pw();
      this_0.d13_1 = reader.pw();
      this_0.e13_1 = reader.pw();
      this_0.f13_1 = reader.mw();
      if (dw.z12(2, 0, 0, 0)) {
        this_0.g13_1 = reader.mw();
        this_0.h13_1 = reader.mw();
        this_0.i13_1 = reader.mw();
        if (dw.z12(2024, 14, 0, 1)) {
          this_0.j13_1 = reader.mw();
          this_0.k13_1 = reader.mw();
        }
        this_0.l13_1 = reader.mw();
        this_0.m13_1 = reader.mw();
        this_0.n13_1 = reader.mw();
        this_0.o13_1 = reader.mw();
        this_0.p13_1 = reader.mw();
        this_0.q13_1 = reader.mw();
        this_0.r13_1 = reader.ow();
        var tileIdCount = imul(this_0.p13_1, this_0.o13_1);
        var tmp_0 = this_0;
        var tmp_1 = 0;
        var tmp_2 = new Int32Array(tileIdCount);
        while (tmp_1 < tileIdCount) {
          tmp_2[tmp_1] = reader.mw();
          tmp_1 = tmp_1 + 1 | 0;
        }
        tmp_0.s13_1 = tmp_2;
      }
      destination.g(this_0);
    }
    tmp.t13_1 = destination;
  }
  function parsePATH($this, reader, dw) {
    var ptrs = reader.uw();
    var tmp = dw.nz_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.iw_1 = item;
      // Inline function 'kotlin.apply' call
      var this_0 = new GamePath();
      this_0.u13_1 = reader.tw();
      this_0.v13_1 = reader.pw();
      this_0.w13_1 = reader.pw();
      this_0.x13_1 = reader.mw();
      var pointCount = reader.mw();
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
          var tmp$ret$0 = new PathPoint(reader.nw(), reader.nw(), reader.nw());
          list.g(tmp$ret$0);
        }
         while (inductionVariable_0 < pointCount);
      tmp_0.y13_1 = list;
      this_0.b14();
      destination.g(this_0);
    }
    tmp.c14_1 = destination;
  }
  function parseSCPT($this, reader, dw) {
    var ptrs = reader.uw();
    var tmp = dw.oz_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.iw_1 = item;
      var tmp$ret$0 = new Script(reader.tw(), reader.mw());
      destination.g(tmp$ret$0);
    }
    tmp.d14_1 = destination;
  }
  function parseGLOB($this, reader, dw) {
    var count = reader.mw();
    var tmp = dw.pz_1;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(count);
    while (tmp_0 < count) {
      tmp_1[tmp_0] = reader.mw();
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.e14_1 = tmp_1;
  }
  function parseSHDR($this, reader, dw) {
    var ptrs = reader.uw();
    var tmp = dw.qz_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.iw_1 = item;
      // Inline function 'kotlin.apply' call
      var this_0 = new Shader();
      this_0.f14_1 = reader.tw();
      this_0.g14_1 = reader.mw() & 2147483647;
      this_0.h14_1 = reader.tw();
      this_0.i14_1 = reader.tw();
      this_0.j14_1 = reader.tw();
      this_0.k14_1 = reader.tw();
      this_0.l14_1 = reader.tw();
      this_0.m14_1 = reader.tw();
      this_0.n14_1 = reader.mw();
      this_0.o14_1 = reader.mw();
      var attrCount = reader.mw();
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
          var tmp$ret$0 = reader.tw();
          list.g(tmp$ret$0);
        }
         while (inductionVariable_0 < attrCount);
      tmp_0.p14_1 = list;
      if (dw.fz_1.l10_1 > 13) {
        this_0.q14_1 = reader.mw();
        this_0.r14_1 = reader.mw();
        this_0.s14_1 = reader.mw();
        this_0.t14_1 = reader.mw();
        this_0.u14_1 = reader.mw();
        this_0.v14_1 = reader.mw();
        this_0.w14_1 = reader.mw();
        this_0.x14_1 = reader.mw();
        this_0.y14_1 = reader.mw();
        if (this_0.q14_1 >= 2) {
          this_0.z14_1 = reader.mw();
          this_0.a15_1 = reader.mw();
          this_0.b15_1 = reader.mw();
          this_0.c15_1 = reader.mw();
        }
      }
      destination.g(this_0);
    }
    tmp.d15_1 = destination;
  }
  function parseFONT($this, reader, dw) {
    var ptrs = reader.uw();
    // Inline function 'kotlin.collections.isEmpty' call
    if (ptrs.length === 0)
      return Unit_instance;
    var fontOptionalCount = dw.fz_1.l10_1 >= 17 ? 1 : 0;
    // Inline function 'kotlin.run' call
    var baseAfterScaleY = ptrs[0] + 40 | 0;
    var trial = fontOptionalCount;
    $l$loop_0: while (4 >= trial) {
      var listStart = baseAfterScaleY + imul(4, trial) | 0;
      reader.iw_1 = listStart;
      var probedGlyphCount = reader.mw();
      if (probedGlyphCount === 0 || probedGlyphCount > 65536) {
        trial = trial + 1 | 0;
        continue $l$loop_0;
      }
      var probedFirstPtr = reader.mw();
      var expectedFirstPtr = (listStart + 4 | 0) + imul(4, probedGlyphCount) | 0;
      if (probedFirstPtr === expectedFirstPtr) {
        fontOptionalCount = trial;
        break $l$loop_0;
      }
      trial = trial + 1 | 0;
    }
    var tmp = dw.rz_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.iw_1 = item;
      // Inline function 'kotlin.apply' call
      var this_0 = new Font();
      this_0.e15_1 = reader.tw();
      this_0.f15_1 = reader.tw();
      this_0.g15_1 = reader.mw();
      this_0.h15_1 = reader.pw();
      this_0.i15_1 = reader.pw();
      this_0.j15_1 = reader.lw();
      this_0.k15_1 = reader.jw();
      this_0.l15_1 = reader.jw();
      this_0.m15_1 = reader.mw();
      this_0.n15_1 = reader.mw();
      this_0.o15_1 = reader.nw();
      this_0.p15_1 = reader.nw();
      var readSoFar = 0;
      if (dw.fz_1.l10_1 >= 17 && fontOptionalCount > readSoFar) {
        this_0.q15_1 = reader.mw();
        readSoFar = readSoFar + 1 | 0;
      }
      if (fontOptionalCount > readSoFar) {
        this_0.r15_1 = reader.mw();
        this_0.u15_1 = true;
        readSoFar = readSoFar + 1 | 0;
      }
      if (fontOptionalCount > readSoFar) {
        this_0.s15_1 = reader.mw();
        this_0.v15_1 = true;
        readSoFar = readSoFar + 1 | 0;
      }
      if (fontOptionalCount > readSoFar) {
        this_0.t15_1 = reader.mw();
        this_0.w15_1 = true;
        readSoFar = readSoFar + 1 | 0;
      }
      var glyphPtrs = reader.uw();
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
        reader.iw_1 = item_0;
        // Inline function 'kotlin.apply' call
        var this_1 = new FontGlyph();
        this_1.b16_1 = reader.lw();
        this_1.c16_1 = reader.lw();
        this_1.d16_1 = reader.lw();
        this_1.e16_1 = reader.lw();
        this_1.f16_1 = reader.lw();
        this_1.g16_1 = reader.kw();
        this_1.h16_1 = reader.kw();
        if (this_1.f16_1 > maxH)
          maxH = this_1.f16_1;
        var kerningCount = reader.lw();
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
            var tmp$ret$3 = new KerningPair(reader.kw(), reader.kw());
            list.g(tmp$ret$3);
          }
           while (inductionVariable_1 < kerningCount);
        tmp_1.i16_1 = list;
        destination_0.g(this_1);
      }
      tmp_0.x15_1 = destination_0;
      this_0.y15_1 = maxH;
      destination.g(this_0);
    }
    tmp.j16_1 = destination;
  }
  function parseTMLN($this, reader, dw) {
    var ptrs = reader.uw();
    var tmp = dw.sz_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.iw_1 = item;
      var name = reader.tw();
      var momentCount = reader.mw();
      var tmp_0;
      if (momentCount > 0) {
        var tmp_1 = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_2 = Array(momentCount);
        while (tmp_1 < momentCount) {
          tmp_2[tmp_1] = new Pair(reader.mw(), reader.mw());
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
          var step = item_0.gd();
          var eventPtr = item_0.hd();
          reader.iw_1 = eventPtr;
          var tmp$ret$2 = new TimelineMoment(step, readEventActions(Companion_instance, reader));
          destination_0.g(tmp$ret$2);
        }
        tmp_0 = new Timeline(name, destination_0);
      } else {
        tmp_0 = new Timeline(name, emptyList());
      }
      var tmp$ret$5 = tmp_0;
      destination.g(tmp$ret$5);
    }
    tmp.k16_1 = destination;
  }
  function parseOBJT($this, reader, dw) {
    var ptrs = reader.uw();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(ptrs.length === 0)) {
      tmp_0 = dw.z12(2, 3, 0, 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !dw.z12(2022, 5, 0, 0);
    } else {
      tmp = false;
    }
    if (tmp) {
      reader.iw_1 = ptrs[0] + 64 | 0;
      var vertexCount = reader.mw();
      if (vertexCount >= 0) {
        reader.sw(12 + imul(vertexCount, 8) | 0);
        var eventTypeCount = reader.mw();
        var isOldFormat = false;
        if (eventTypeCount === 15) {
          var firstSubEventPtr = reader.mw();
          var currentAbsPos = reader.iw_1;
          if (firstSubEventPtr === (currentAbsPos + 56 | 0)) {
            isOldFormat = true;
          }
        }
        if (!isOldFormat) {
          dw.k11(2022, 5, 0, 0);
        }
      }
    }
    var tmp_1 = dw.tz_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.iw_1 = item;
      // Inline function 'kotlin.apply' call
      var this_0 = new GameObject();
      this_0.l16_1 = reader.tw();
      this_0.m16_1 = reader.mw();
      this_0.n16_1 = reader.pw();
      if (dw.z12(2022, 5, 0, 0)) {
        this_0.o16_1 = reader.pw();
      }
      this_0.p16_1 = reader.pw();
      this_0.q16_1 = reader.mw();
      this_0.r16_1 = reader.pw();
      this_0.s16_1 = reader.mw();
      this_0.t16_1 = reader.mw();
      this_0.u16_1 = reader.pw();
      this_0.v16_1 = reader.pw();
      this_0.w16_1 = reader.mw();
      this_0.x16_1 = reader.nw();
      this_0.y16_1 = reader.nw();
      this_0.z16_1 = reader.mw();
      this_0.a17_1 = reader.nw();
      this_0.b17_1 = reader.nw();
      this_0.c17_1 = reader.mw();
      this_0.d17_1 = reader.nw();
      this_0.e17_1 = reader.pw();
      this_0.f17_1 = reader.pw();
      if (this_0.c17_1 > 0) {
        var tmp_2 = this_0;
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size = this_0.c17_1;
        var list = ArrayList_init_$Create$(size);
        // Inline function 'kotlin.repeat' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size)
          do {
            var index = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp$ret$2 = new PhysicsVertex(reader.nw(), reader.nw());
            list.g(tmp$ret$2);
          }
           while (inductionVariable_0 < size);
        tmp_2.g17_1 = list;
      }
      var eventTypePtrs = reader.uw();
      var inductionVariable_1 = 0;
      var last_0 = eventTypePtrs.length - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var eventType = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (15 > eventType) {
            reader.iw_1 = eventTypePtrs[eventType];
            var eventPtrs = reader.uw();
            var tmp_3 = this_0.h17_1;
            // Inline function 'kotlin.collections.map' call
            // Inline function 'kotlin.collections.mapTo' call
            var destination_0 = ArrayList_init_$Create$(eventPtrs.length);
            var inductionVariable_2 = 0;
            var last_1 = eventPtrs.length;
            while (inductionVariable_2 < last_1) {
              var item_0 = eventPtrs[inductionVariable_2];
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              reader.iw_1 = item_0;
              var tmp$ret$7 = new ObjectEvent(reader.mw(), readEventActions(Companion_instance, reader));
              destination_0.g(tmp$ret$7);
            }
            tmp_3[eventType] = new ObjectEventList(destination_0);
          }
        }
         while (inductionVariable_1 <= last_0);
      destination.g(this_0);
    }
    tmp_1.i17_1 = destination;
  }
  function parseROOM($this, reader, dw) {
    var ptrs = reader.uw();
    // Inline function 'kotlin.collections.isEmpty' call
    if (ptrs.length === 0)
      return Unit_instance;
    if (dw.z12(2, 0, 0, 0) && !dw.z12(2, 2, 2, 302)) {
      var inductionVariable = 0;
      var last = ptrs.length - 1 | 0;
      if (inductionVariable <= last)
        $l$loop: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          reader.iw_1 = ptrs[i];
          reader.sw(48);
          var gameObjectsPtr = reader.mw();
          reader.iw_1 = gameObjectsPtr;
          var objCount = reader.mw();
          if (objCount >= 2) {
            var firstPtr = reader.mw();
            var secondPtr = reader.mw();
            if ((secondPtr - firstPtr | 0) === 48) {
              dw.k11(2, 2, 2, 302);
            }
            break $l$loop;
          }
        }
         while (inductionVariable <= last);
    }
    if (dw.z12(2, 3, 0, 0) && !dw.z12(2022, 1, 0, 0)) {
      var inductionVariable_0 = 0;
      var last_0 = ptrs.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        $l$loop_1: do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          reader.iw_1 = ptrs[i_0];
          reader.sw(88);
          var layersPtr = reader.mw();
          var seqnPtr = reader.mw();
          reader.iw_1 = layersPtr;
          var layerCount = reader.mw();
          if (layerCount === 0)
            continue $l$loop_1;
          var jumpOffset = reader.mw();
          var nextOffset = layerCount === 1 ? seqnPtr : reader.mw();
          reader.iw_1 = jumpOffset + 8 | 0;
          var layerType = reader.mw();
          if (layerType === 0 || layerType === 7)
            continue $l$loop_1;
          var detected = false;
          switch (layerType) {
            case 1:
              var absPos = reader.iw_1;
              if ((nextOffset - absPos | 0) > 64)
                detected = true;
              break;
            case 2:
              reader.sw(24);
              var instanceCount = reader.mw();
              var absPos_0 = reader.iw_1;
              if (!((nextOffset - absPos_0 | 0) === imul(instanceCount, 4)))
                detected = true;
              break;
            case 3:
              reader.sw(24);
              var tileOffset = reader.mw();
              var absPos_1 = reader.iw_1;
              if (!(tileOffset === (absPos_1 + 8 | 0)) && !(tileOffset === (absPos_1 + 12 | 0)))
                detected = true;
              break;
            case 4:
              reader.sw(28);
              var tileMapWidth = reader.mw();
              var tileMapHeight = reader.mw();
              var absPos_2 = reader.iw_1;
              if (!((nextOffset - absPos_2 | 0) === imul(imul(tileMapWidth, tileMapHeight), 4)))
                detected = true;
              break;
            case 6:
              reader.sw(28);
              var propertyCount = reader.mw();
              var absPos_3 = reader.iw_1;
              if (!((nextOffset - absPos_3 | 0) === imul(imul(propertyCount, 3), 4)))
                detected = true;
              break;
          }
          if (detected) {
            dw.k11(2022, 1, 0, 0);
          }
          break $l$loop_1;
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp = dw.uz_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable_1 = 0;
    var last_1 = ptrs.length;
    while (inductionVariable_1 < last_1) {
      var item = ptrs[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      reader.iw_1 = item;
      // Inline function 'kotlin.apply' call
      var this_0 = new Room();
      this_0.j17_1 = reader.tw();
      this_0.k17_1 = reader.tw();
      this_0.l17_1 = reader.mw();
      this_0.m17_1 = reader.mw();
      this_0.n17_1 = reader.mw();
      this_0.o17_1 = reader.pw();
      this_0.p17_1 = reader.mw();
      this_0.q17_1 = reader.pw();
      this_0.r17_1 = reader.mw();
      this_0.s17_1 = reader.mw();
      var backgroundsPtr = reader.mw();
      var viewsPtr = reader.mw();
      var gameObjectsPtr_0 = reader.mw();
      var tilesPtr = reader.mw();
      this_0.t17_1 = reader.pw();
      this_0.u17_1 = reader.mw();
      this_0.v17_1 = reader.mw();
      this_0.w17_1 = reader.mw();
      this_0.x17_1 = reader.mw();
      this_0.y17_1 = reader.nw();
      this_0.z17_1 = reader.nw();
      this_0.a18_1 = reader.nw();
      if (dw.z12(2024, 13, 0, 0)) {
        var icCount = reader.mw();
        reader.sw(imul(4, icCount));
      }
      var layersPtr_0 = 0;
      if (dw.z12(2, 0, 0, 0)) {
        layersPtr_0 = reader.mw();
        if (dw.z12(2, 3, 0, 0)) {
          reader.sw(4);
        }
      }
      reader.iw_1 = backgroundsPtr;
      var bgPtrs = reader.uw();
      var inductionVariable_2 = 0;
      var last_2 = bgPtrs.length - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var j = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          if (8 > j) {
            reader.iw_1 = bgPtrs[j];
            var tmp_0 = this_0.b18_1;
            // Inline function 'kotlin.apply' call
            var this_1 = new RoomBackground();
            this_1.g18_1 = reader.pw();
            this_1.h18_1 = reader.pw();
            this_1.i18_1 = reader.mw();
            this_1.j18_1 = reader.mw();
            this_1.k18_1 = reader.mw();
            this_1.l18_1 = reader.mw();
            this_1.m18_1 = reader.mw();
            this_1.n18_1 = reader.mw();
            this_1.o18_1 = reader.mw();
            this_1.p18_1 = reader.pw();
            tmp_0[j] = this_1;
          }
        }
         while (inductionVariable_2 <= last_2);
      reader.iw_1 = viewsPtr;
      var viewPtrs = reader.uw();
      var inductionVariable_3 = 0;
      var last_3 = viewPtrs.length - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var j_0 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          if (8 > j_0) {
            reader.iw_1 = viewPtrs[j_0];
            var tmp_1 = this_0.c18_1;
            // Inline function 'kotlin.apply' call
            var this_2 = new RoomView();
            this_2.q18_1 = reader.pw();
            this_2.r18_1 = reader.mw();
            this_2.s18_1 = reader.mw();
            this_2.t18_1 = reader.mw();
            this_2.u18_1 = reader.mw();
            this_2.v18_1 = reader.mw();
            this_2.w18_1 = reader.mw();
            this_2.x18_1 = reader.mw();
            this_2.y18_1 = reader.mw();
            this_2.z18_1 = reader.mw();
            this_2.a19_1 = reader.mw();
            this_2.b19_1 = reader.mw();
            this_2.c19_1 = reader.mw();
            this_2.d19_1 = reader.mw();
            tmp_1[j_0] = this_2;
          }
        }
         while (inductionVariable_3 <= last_3);
      reader.iw_1 = gameObjectsPtr_0;
      var objPtrs = reader.uw();
      var tmp_2 = this_0;
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(objPtrs.length);
      var inductionVariable_4 = 0;
      var last_4 = objPtrs.length;
      while (inductionVariable_4 < last_4) {
        var item_0 = objPtrs[inductionVariable_4];
        inductionVariable_4 = inductionVariable_4 + 1 | 0;
        reader.iw_1 = item_0;
        // Inline function 'kotlin.apply' call
        var this_3 = new RoomGameObject();
        this_3.e19_1 = reader.mw();
        this_3.f19_1 = reader.mw();
        this_3.g19_1 = reader.mw();
        this_3.h19_1 = reader.mw();
        this_3.i19_1 = reader.mw();
        this_3.j19_1 = reader.nw();
        this_3.k19_1 = reader.nw();
        if (dw.z12(2, 2, 2, 302)) {
          this_3.l19_1 = reader.nw();
          this_3.m19_1 = reader.mw();
        }
        this_3.n19_1 = reader.mw();
        this_3.o19_1 = reader.nw();
        if (dw.fz_1.l10_1 >= 16) {
          this_3.p19_1 = reader.mw();
        }
        destination_0.g(this_3);
      }
      tmp_2.d18_1 = destination_0;
      reader.iw_1 = tilesPtr;
      var tilePtrs = reader.uw();
      var tmp_3 = this_0;
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList_init_$Create$(tilePtrs.length);
      var inductionVariable_5 = 0;
      var last_5 = tilePtrs.length;
      while (inductionVariable_5 < last_5) {
        var item_1 = tilePtrs[inductionVariable_5];
        inductionVariable_5 = inductionVariable_5 + 1 | 0;
        reader.iw_1 = item_1;
        var tmp$ret$10 = readRoomTile(Companion_instance, reader, dw);
        destination_1.g(tmp$ret$10);
      }
      tmp_3.e18_1 = destination_1;
      if (dw.z12(2, 0, 0, 0) && !(layersPtr_0 === 0)) {
        reader.iw_1 = layersPtr_0;
        var layerPtrs = reader.uw();
        var tmp_4 = this_0;
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_2 = ArrayList_init_$Create$(layerPtrs.length);
        var inductionVariable_6 = 0;
        var last_6 = layerPtrs.length;
        while (inductionVariable_6 < last_6) {
          var item_2 = layerPtrs[inductionVariable_6];
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          reader.iw_1 = item_2;
          // Inline function 'kotlin.apply' call
          var this_4 = new RoomLayer();
          this_4.q19_1 = reader.tw();
          this_4.r19_1 = reader.mw();
          this_4.s19_1 = reader.mw();
          this_4.t19_1 = reader.mw();
          this_4.u19_1 = reader.nw();
          this_4.v19_1 = reader.nw();
          this_4.w19_1 = reader.nw();
          this_4.x19_1 = reader.nw();
          this_4.y19_1 = reader.pw();
          if (dw.z12(2022, 1, 0, 0)) {
            reader.sw(4);
            reader.sw(4);
            var effectPropCount = reader.mw();
            reader.sw(imul(effectPropCount, 12));
          }
          switch (this_4.s19_1) {
            case 0:
            case 7:
              break;
            case 6:
              if (!dw.z12(2022, 1, 0, 0)) {
                reader.sw(4);
                var propCount = reader.mw();
                reader.sw(imul(propCount, 12));
              }

              break;
            case 3:
              var legacyTilesPtr = reader.mw();
              var spritesPtr = reader.mw();
              reader.iw_1 = legacyTilesPtr;
              var assetTilePtrs = reader.uw();
              // Inline function 'kotlin.collections.map' call

              // Inline function 'kotlin.collections.mapTo' call

              var destination_3 = ArrayList_init_$Create$(assetTilePtrs.length);
              var inductionVariable_7 = 0;
              var last_7 = assetTilePtrs.length;
              while (inductionVariable_7 < last_7) {
                var item_3 = assetTilePtrs[inductionVariable_7];
                inductionVariable_7 = inductionVariable_7 + 1 | 0;
                reader.iw_1 = item_3;
                var tmp$ret$13 = readRoomTile(Companion_instance, reader, dw);
                destination_3.g(tmp$ret$13);
              }

              var assetTiles = destination_3;
              reader.iw_1 = spritesPtr;
              var spritePtrs = reader.uw();
              // Inline function 'kotlin.collections.map' call

              // Inline function 'kotlin.collections.mapTo' call

              var destination_4 = ArrayList_init_$Create$(spritePtrs.length);
              var inductionVariable_8 = 0;
              var last_8 = spritePtrs.length;
              while (inductionVariable_8 < last_8) {
                var item_4 = spritePtrs[inductionVariable_8];
                inductionVariable_8 = inductionVariable_8 + 1 | 0;
                reader.iw_1 = item_4;
                // Inline function 'kotlin.apply' call
                var this_5 = new SpriteInstance();
                this_5.d1a_1 = reader.tw();
                this_5.e1a_1 = reader.mw();
                this_5.f1a_1 = reader.mw();
                this_5.g1a_1 = reader.mw();
                this_5.h1a_1 = reader.nw();
                this_5.i1a_1 = reader.nw();
                this_5.j1a_1 = reader.mw();
                this_5.k1a_1 = reader.nw();
                this_5.l1a_1 = reader.mw();
                this_5.m1a_1 = reader.nw();
                this_5.n1a_1 = reader.nw();
                destination_4.g(this_5);
              }

              var spriteInstances = destination_4;
              var tmp_5 = this_4;
              // Inline function 'kotlin.apply' call

              var this_6 = new RoomLayerAssetsData();
              this_6.o1a_1 = assetTiles;
              this_6.p1a_1 = spriteInstances;
              tmp_5.z19_1 = this_6;
              break;
            case 1:
              var tmp_6 = this_4;
              // Inline function 'kotlin.apply' call

              var this_7 = new RoomLayerBackgroundData();
              this_7.q1a_1 = reader.pw();
              this_7.r1a_1 = reader.pw();
              this_7.s1a_1 = reader.mw();
              this_7.t1a_1 = reader.pw();
              this_7.u1a_1 = reader.pw();
              this_7.v1a_1 = reader.pw();
              this_7.w1a_1 = reader.mw();
              this_7.x1a_1 = reader.nw();
              this_7.y1a_1 = reader.nw();
              this_7.z1a_1 = reader.mw();
              tmp_6.a1a_1 = this_7;
              break;
            case 2:
              var instanceCount_0 = reader.mw();
              var tmp_7 = this_4;
              // Inline function 'kotlin.apply' call

              var this_8 = new RoomLayerInstancesData();
              var tmp_8 = this_8;
              var tmp_9 = 0;
              var tmp_10 = new Int32Array(instanceCount_0);
              while (tmp_9 < instanceCount_0) {
                tmp_10[tmp_9] = reader.mw();
                tmp_9 = tmp_9 + 1 | 0;
              }

              tmp_8.a1b_1 = tmp_10;
              tmp_7.b1a_1 = this_8;
              break;
            case 4:
              var bgIdx = reader.mw();
              var tx = reader.mw();
              var ty = reader.mw();
              var totalTiles = imul(tx, ty);
              var tmp_11 = this_4;
              // Inline function 'kotlin.apply' call

              var this_9 = new RoomLayerTilesData();
              this_9.b1b_1 = bgIdx;
              this_9.c1b_1 = tx;
              this_9.d1b_1 = ty;
              var tmp_12 = this_9;
              var tmp_13 = 0;
              var tmp_14 = new Int32Array(totalTiles);
              while (tmp_13 < totalTiles) {
                tmp_14[tmp_13] = reader.mw();
                tmp_13 = tmp_13 + 1 | 0;
              }

              tmp_12.e1b_1 = tmp_14;
              tmp_11.c1a_1 = this_9;
              break;
            default:
              // Inline function 'kotlin.error' call

              var message = 'Unsupported Room Layer Type ' + this_4.s19_1;
              throw IllegalStateException_init_$Create$(toString(message));
          }
          destination_2.g(this_4);
        }
        tmp_4.f18_1 = destination_2;
      }
      destination.g(this_0);
    }
    tmp.f1b_1 = destination;
  }
  function readRoomTile($this, reader, dw) {
    // Inline function 'kotlin.apply' call
    var this_0 = new RoomTile();
    this_0.g1b_1 = reader.mw();
    this_0.h1b_1 = reader.mw();
    this_0.i1b_1 = dw.z12(2, 0, 0, 0);
    this_0.j1b_1 = reader.mw();
    this_0.k1b_1 = reader.mw();
    this_0.l1b_1 = reader.mw();
    this_0.m1b_1 = reader.mw();
    this_0.n1b_1 = reader.mw();
    this_0.o1b_1 = reader.mw();
    this_0.p1b_1 = reader.mw();
    this_0.q1b_1 = reader.nw();
    this_0.r1b_1 = reader.nw();
    this_0.s1b_1 = reader.mw();
    return this_0;
  }
  function parseTPAG($this, reader, dw) {
    var ptrs = reader.uw();
    var tmp = dw.vz_1;
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
      reader.iw_1 = item;
      // Inline function 'kotlin.apply' call
      var this_0 = new TexturePageItem();
      this_0.t1b_1 = reader.lw();
      this_0.u1b_1 = reader.lw();
      this_0.v1b_1 = reader.lw();
      this_0.w1b_1 = reader.lw();
      this_0.x1b_1 = reader.lw();
      this_0.y1b_1 = reader.lw();
      this_0.z1b_1 = reader.lw();
      this_0.a1c_1 = reader.lw();
      this_0.b1c_1 = reader.lw();
      this_0.c1c_1 = reader.lw();
      this_0.d1c_1 = reader.kw();
      destination.g(this_0);
    }
    tmp.e1c_1 = destination;
    var inductionVariable_0 = 0;
    var last_0 = ptrs.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp0 = dw.e10_1;
        // Inline function 'kotlin.collections.set' call
        var key = ptrs[i];
        tmp0.w1(key, i);
      }
       while (inductionVariable_0 <= last_0);
  }
  function parseCODE($this, reader, dw, chunkLength, chunkDataStart) {
    if (chunkLength === 0)
      return Unit_instance;
    var oldFormat = 14 >= dw.fz_1.l10_1;
    var codePtrs = reader.uw();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(codePtrs.length);
    var inductionVariable = 0;
    var last = codePtrs.length;
    while (inductionVariable < last) {
      var item = codePtrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.iw_1 = item;
      var name = reader.tw();
      var length = reader.mw();
      var tmp;
      if (oldFormat) {
        var bytecodeAbsoluteOffset = reader.iw_1;
        reader.sw(length);
        tmp = new CodeEntry(name, length, 0, 0, bytecodeAbsoluteOffset, 0);
      } else {
        var localsCount = reader.lw();
        var argumentsCount = reader.lw();
        var relAddrFieldPos = reader.iw_1;
        var bytecodeRelAddr = reader.mw();
        var bytecodeAbsoluteOffset_0 = relAddrFieldPos + bytecodeRelAddr | 0;
        var offset = reader.mw();
        tmp = new CodeEntry(name, length, localsCount, argumentsCount, bytecodeAbsoluteOffset_0, offset);
      }
      var tmp$ret$0 = tmp;
      destination.g(tmp$ret$0);
    }
    var entries = destination;
    dw.wz_1.f1c_1 = entries;
    var chunkEnd = chunkDataStart + chunkLength | 0;
    if (oldFormat) {
      dw.d10_1 = chunkDataStart;
      dw.c10_1 = reader.rw(chunkDataStart, chunkLength);
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!entries.t()) {
      // Inline function 'kotlin.collections.minOf' call
      var iterator = entries.l();
      if (!iterator.m())
        throw NoSuchElementException_init_$Create$();
      var minValue = iterator.n().k1c_1;
      while (iterator.m()) {
        var v = iterator.n().k1c_1;
        if (compareTo(minValue, v) > 0) {
          minValue = v;
        }
      }
      var blobStart = minValue;
      var blobSize = chunkEnd - blobStart | 0;
      dw.d10_1 = blobStart;
      dw.c10_1 = reader.rw(blobStart, blobSize);
    }
  }
  function parseVARI($this, reader, dw, chunkLength) {
    var v = dw.xz_1;
    var oldFormat = dw.fz_1.l10_1 <= 14;
    var variableCount;
    if (oldFormat) {
      v.m1c_1 = 0;
      v.n1c_1 = 0;
      v.o1c_1 = 0;
      variableCount = chunkLength / 12 | 0;
    } else {
      v.m1c_1 = reader.mw();
      v.n1c_1 = reader.mw();
      v.o1c_1 = reader.mw();
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
        var name = reader.tw();
        var instanceType = oldFormat ? 0 : reader.mw();
        var varID = oldFormat ? 0 : reader.mw();
        var tmp$ret$0 = new Variable(name, instanceType, varID, reader.mw(), reader.mw());
        list.g(tmp$ret$0);
      }
       while (inductionVariable < size);
    tmp.p1c_1 = list;
  }
  function parseFUNC($this, reader, dw, chunkLength) {
    var f = dw.yz_1;
    if (dw.fz_1.l10_1 <= 14) {
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
          var tmp$ret$0 = new Function(reader.tw(), reader.mw(), reader.mw());
          list.g(tmp$ret$0);
        }
         while (inductionVariable < funcCount);
      tmp.q1c_1 = list;
      f.r1c_1 = emptyList();
      return Unit_instance;
    }
    var funcCount_0 = reader.mw();
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
        var name = reader.tw();
        var occurrences = reader.mw();
        var rawAddr = reader.mw();
        if (dw.z12(2, 3, 0, 0) && !(rawAddr === -1)) {
          rawAddr = rawAddr - 4 | 0;
        }
        var tmp$ret$5 = new Function(name, occurrences, rawAddr);
        list_0.g(tmp$ret$5);
      }
       while (inductionVariable_0 < funcCount_0);
    tmp_0.q1c_1 = list_0;
    var codeLocalsCount = reader.mw();
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
        var localVarCount = reader.mw();
        var name_0 = reader.tw();
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var list_2 = ArrayList_init_$Create$(localVarCount);
        // Inline function 'kotlin.repeat' call
        var inductionVariable_2 = 0;
        if (inductionVariable_2 < localVarCount)
          do {
            var index_2 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var tmp$ret$10 = new LocalVar(reader.mw(), reader.tw());
            list_2.g(tmp$ret$10);
          }
           while (inductionVariable_2 < localVarCount);
        var tmp$ret$15 = new CodeLocals(name_0, list_2);
        list_1.g(tmp$ret$15);
      }
       while (inductionVariable_1 < codeLocalsCount);
    tmp_1.r1c_1 = list_1;
  }
  function parseSTRG($this, reader, dw) {
    var ptrs = reader.uw();
    var tmp = dw.zz_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var saved = reader.iw_1;
      reader.iw_1 = item;
      var length = reader.mw();
      var bytes = reader.qw(length);
      reader.iw_1 = saved;
      var tmp$ret$0 = decodeToString(bytes);
      destination.g(tmp$ret$0);
    }
    tmp.s1c_1 = destination;
  }
  function parseTXTR($this, reader, dw, chunkEnd) {
    var ptrs = reader.uw();
    // Inline function 'kotlin.collections.isEmpty' call
    if (ptrs.length === 0)
      return Unit_instance;
    var hasGeneratedMips = dw.z12(2, 0, 0, 0);
    var has2022_3 = dw.z12(2022, 3, 0, 0);
    var has2022_9 = dw.z12(2022, 9, 0, 0);
    if (ptrs.length >= 2 && hasGeneratedMips && !has2022_9) {
      var diff = ptrs[1] - ptrs[0] | 0;
      if (diff === 28) {
        dw.k11(2022, 9, 0, 0);
        has2022_3 = true;
        has2022_9 = true;
      } else if (diff === 16 && !has2022_3) {
        dw.k11(2022, 3, 0, 0);
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
      reader.iw_1 = item;
      var scaled = reader.mw();
      var generatedMips = hasGeneratedMips ? reader.mw() : 0;
      var textureBlockSize = has2022_3 ? reader.mw() : 0;
      var textureWidth;
      var textureHeight;
      var indexInGroup;
      if (has2022_9) {
        textureWidth = reader.mw();
        textureHeight = reader.mw();
        indexInGroup = reader.mw();
      } else {
        textureWidth = 0;
        textureHeight = 0;
        indexInGroup = 0;
      }
      var blobOffset = reader.mw();
      var tmp$ret$1 = new DataWin$Companion$parseTXTR$TexMeta(scaled, generatedMips, textureBlockSize, textureWidth, textureHeight, indexInGroup, blobOffset);
      destination.g(tmp$ret$1);
    }
    var metas = destination;
    var tmp = dw.a10_1;
    // Inline function 'kotlin.collections.mapIndexed' call
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(metas, 10));
    var index = 0;
    var _iterator__ex2g4s = metas.l();
    while (_iterator__ex2g4s.m()) {
      var item_0 = _iterator__ex2g4s.n();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var i = checkIndexOverflow(_unary__edvuaz);
      var tmp_0;
      if (item_0.z1c_1 === 0) {
        tmp_0 = new Texture(item_0.t1c_1, 0, 0, null, item_0.u1c_1, item_0.v1c_1, item_0.w1c_1, item_0.x1c_1, item_0.y1c_1);
      } else {
        var tmp_1;
        if (metas.o() > (i + 1 | 0) && !(metas.r(i + 1 | 0).z1c_1 === 0)) {
          tmp_1 = metas.r(i + 1 | 0).z1c_1 - item_0.z1c_1 | 0;
        } else {
          tmp_1 = chunkEnd - item_0.z1c_1 | 0;
        }
        var blobSize = tmp_1;
        var blobData = blobSize > 0 ? reader.rw(item_0.z1c_1, blobSize) : null;
        tmp_0 = new Texture(item_0.t1c_1, item_0.z1c_1, blobSize, blobData, item_0.u1c_1, item_0.v1c_1, item_0.w1c_1, item_0.x1c_1, item_0.y1c_1);
      }
      var tmp$ret$4 = tmp_0;
      destination_0.g(tmp$ret$4);
    }
    tmp.a1d_1 = destination_0;
  }
  function parseAUDO($this, reader, dw) {
    var ptrs = reader.uw();
    var tmp = dw.b10_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(ptrs.length);
    var inductionVariable = 0;
    var last = ptrs.length;
    while (inductionVariable < last) {
      var item = ptrs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      reader.iw_1 = item;
      var dataSize = reader.mw();
      var dataOffset = reader.iw_1;
      var data = dataSize > 0 ? reader.qw(dataSize) : null;
      var tmp$ret$0 = new AudioEntry(dataSize, dataOffset, data);
      destination.g(tmp$ret$0);
    }
    tmp.b1d_1 = destination;
  }
  function DataWin$Companion$parseTXTR$TexMeta(scaled, generatedMips, textureBlockSize, textureWidth, textureHeight, indexInGroup, blobOffset) {
    this.t1c_1 = scaled;
    this.u1c_1 = generatedMips;
    this.v1c_1 = textureBlockSize;
    this.w1c_1 = textureWidth;
    this.x1c_1 = textureHeight;
    this.y1c_1 = indexInGroup;
    this.z1c_1 = blobOffset;
  }
  protoOf(DataWin$Companion$parseTXTR$TexMeta).toString = function () {
    return 'TexMeta(scaled=' + this.t1c_1 + ', generatedMips=' + this.u1c_1 + ', textureBlockSize=' + this.v1c_1 + ', textureWidth=' + this.w1c_1 + ', textureHeight=' + this.x1c_1 + ', indexInGroup=' + this.y1c_1 + ', blobOffset=' + this.z1c_1 + ')';
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).hashCode = function () {
    var result = this.t1c_1;
    result = imul(result, 31) + this.u1c_1 | 0;
    result = imul(result, 31) + this.v1c_1 | 0;
    result = imul(result, 31) + this.w1c_1 | 0;
    result = imul(result, 31) + this.x1c_1 | 0;
    result = imul(result, 31) + this.y1c_1 | 0;
    result = imul(result, 31) + this.z1c_1 | 0;
    return result;
  };
  protoOf(DataWin$Companion$parseTXTR$TexMeta).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DataWin$Companion$parseTXTR$TexMeta))
      return false;
    if (!(this.t1c_1 === other.t1c_1))
      return false;
    if (!(this.u1c_1 === other.u1c_1))
      return false;
    if (!(this.v1c_1 === other.v1c_1))
      return false;
    if (!(this.w1c_1 === other.w1c_1))
      return false;
    if (!(this.x1c_1 === other.x1c_1))
      return false;
    if (!(this.y1c_1 === other.y1c_1))
      return false;
    if (!(this.z1c_1 === other.z1c_1))
      return false;
    return true;
  };
  function Companion() {
  }
  protoOf(Companion).c1d = function (bytes, options) {
    var reader = new BinaryReader(bytes);
    var dw = new DataWin();
    var magic = reader.vw();
    // Inline function 'kotlin.require' call
    if (!(magic === 'FORM')) {
      var message = "Invalid file: expected FORM magic, got '" + magic + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    reader.mw();
    var passOnePosition = reader.iw_1;
    $l$loop: while (reader.o() > reader.iw_1 && (reader.iw_1 + 8 | 0) <= reader.o()) {
      var name = reader.vw();
      var len = reader.mw();
      switch (name) {
        case 'FEDS':
        case 'ACRV':
        case 'SEQN':
        case 'TAGS':
        case 'EMBI':
          dw.k11(2, 3, 0, 0);
          break;
        case 'FEAT':
          dw.k11(2022, 8, 0, 0);
          break;
        case 'PSEM':
        case 'PSYS':
          dw.k11(2023, 4, 0, 0);
          break;
        case 'UILR':
          dw.k11(2024, 13, 0, 0);
          break;
      }
      reader.iw_1 = reader.iw_1 + len | 0;
    }
    reader.iw_1 = passOnePosition;
    $l$loop_0: while (reader.o() > reader.iw_1 && (reader.iw_1 + 8 | 0) <= reader.o()) {
      var chunkName = reader.vw();
      var chunkLength = reader.mw();
      var chunkDataStart = reader.iw_1;
      var chunkEnd = chunkDataStart + chunkLength | 0;
      if (options.d1d_1 && chunkName === 'GEN8') {
        parseGEN8(this, reader, dw);
      } else if (options.e1d_1 && chunkName === 'OPTN') {
        parseOPTN(this, reader, dw);
      } else if (options.f1d_1 && chunkName === 'LANG') {
        parseLANG(this, reader, dw);
      } else if (options.g1d_1 && chunkName === 'EXTN') {
        parseEXTN(this, reader, dw);
      } else if (options.h1d_1 && chunkName === 'SOND') {
        parseSOND(this, reader, dw);
      } else if (options.i1d_1 && chunkName === 'AGRP') {
        parseAGRP(this, reader, dw);
      } else if (options.j1d_1 && chunkName === 'SPRT') {
        parseSPRT(this, reader, dw, options.a1e_1);
      } else if (options.k1d_1 && chunkName === 'BGND') {
        parseBGND(this, reader, dw);
      } else if (options.l1d_1 && chunkName === 'PATH') {
        parsePATH(this, reader, dw);
      } else if (options.m1d_1 && chunkName === 'SCPT') {
        parseSCPT(this, reader, dw);
      } else if (options.n1d_1 && chunkName === 'GLOB') {
        parseGLOB(this, reader, dw);
      } else if (options.o1d_1 && chunkName === 'SHDR') {
        parseSHDR(this, reader, dw);
      } else if (options.p1d_1 && chunkName === 'FONT') {
        parseFONT(this, reader, dw);
      } else if (options.q1d_1 && chunkName === 'TMLN') {
        parseTMLN(this, reader, dw);
      } else if (options.r1d_1 && chunkName === 'OBJT') {
        parseOBJT(this, reader, dw);
      } else if (options.s1d_1 && chunkName === 'ROOM') {
        parseROOM(this, reader, dw);
      } else if (chunkName !== 'DAFL')
        if (options.t1d_1 && chunkName === 'TPAG') {
          parseTPAG(this, reader, dw);
        } else if (options.u1d_1 && chunkName === 'CODE') {
          parseCODE(this, reader, dw, chunkLength, chunkDataStart);
        } else if (options.v1d_1 && chunkName === 'VARI') {
          parseVARI(this, reader, dw, chunkLength);
        } else if (options.w1d_1 && chunkName === 'FUNC') {
          parseFUNC(this, reader, dw, chunkLength);
        } else if (options.x1d_1 && chunkName === 'STRG') {
          parseSTRG(this, reader, dw);
        } else if (options.y1d_1 && chunkName === 'TXTR') {
          parseTXTR(this, reader, dw, chunkEnd);
        } else if (options.z1d_1 && chunkName === 'AUDO') {
          parseAUDO(this, reader, dw);
        } else {
          println('Unknown chunk: ' + chunkName + ' (length ' + chunkLength + ' at offset 0x' + toString_1(chunkDataStart - 8 | 0, 16) + ')');
        }
      reader.iw_1 = chunkEnd;
    }
    println('Done!');
    return dw;
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function DataWin() {
    this.fz_1 = new Gen8();
    this.gz_1 = new Optn();
    this.hz_1 = new Lang();
    this.iz_1 = new Extn();
    this.jz_1 = new Sond();
    this.kz_1 = new Agrp();
    this.lz_1 = new Sprt();
    this.mz_1 = new Bgnd();
    this.nz_1 = new PathChunk();
    this.oz_1 = new Scpt();
    this.pz_1 = new Glob();
    this.qz_1 = new Shdr();
    this.rz_1 = new FontChunk();
    this.sz_1 = new Tmln();
    this.tz_1 = new Objt();
    this.uz_1 = new RoomChunk();
    this.vz_1 = new Tpag();
    this.wz_1 = new Code();
    this.xz_1 = new Vari();
    this.yz_1 = new Func();
    this.zz_1 = new Strg();
    this.a10_1 = new Txtr();
    this.b10_1 = new Audo();
    this.c10_1 = null;
    this.d10_1 = 0;
    this.e10_1 = HashMap_init_$Create$_0();
    this.f10_1 = HashMap_init_$Create$_0();
    this.g10_1 = 0;
    this.h10_1 = 0;
    this.i10_1 = 0;
    this.j10_1 = 0;
  }
  protoOf(DataWin).b1e = function (offset) {
    var tmp0_elvis_lhs = this.e10_1.d2(offset);
    return tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
  };
  protoOf(DataWin).z12 = function (major, minor, release, build) {
    if (!(this.g10_1 === major))
      return this.g10_1 > major;
    if (!(this.h10_1 === minor))
      return this.h10_1 > minor;
    if (!(this.i10_1 === release))
      return this.i10_1 > release;
    return this.j10_1 >= build;
  };
  protoOf(DataWin).k11 = function (major, minor, release, build) {
    if (this.z12(major, minor, release, build))
      return Unit_instance;
    this.g10_1 = major;
    this.h10_1 = minor;
    this.i10_1 = release;
    this.j10_1 = build;
  };
  function Gen8() {
    this.k10_1 = 0;
    this.l10_1 = 0;
    this.m10_1 = null;
    this.n10_1 = null;
    this.o10_1 = 0;
    this.p10_1 = 0;
    this.q10_1 = 0;
    this.r10_1 = new Int8Array(16);
    this.s10_1 = null;
    this.t10_1 = 0;
    this.u10_1 = 0;
    this.v10_1 = 0;
    this.w10_1 = 0;
    this.x10_1 = 0;
    this.y10_1 = 0;
    this.z10_1 = 0;
    this.a11_1 = 0;
    this.b11_1 = new Int8Array(16);
    this.c11_1 = new Long(0, 0);
    this.d11_1 = null;
    this.e11_1 = new Long(0, 0);
    this.f11_1 = new Long(0, 0);
    this.g11_1 = 0;
    this.h11_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.i11_1 = new Int32Array([]);
    this.j11_1 = 0.0;
  }
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
    this.d1d_1 = parseGen8;
    this.e1d_1 = parseOptn;
    this.f1d_1 = parseLang;
    this.g1d_1 = parseExtn;
    this.h1d_1 = parseSond;
    this.i1d_1 = parseAgrp;
    this.j1d_1 = parseSprt;
    this.k1d_1 = parseBgnd;
    this.l1d_1 = parsePath;
    this.m1d_1 = parseScpt;
    this.n1d_1 = parseGlob;
    this.o1d_1 = parseShdr;
    this.p1d_1 = parseFont;
    this.q1d_1 = parseTmln;
    this.r1d_1 = parseObjt;
    this.s1d_1 = parseRoom;
    this.t1d_1 = parseTpag;
    this.u1d_1 = parseCode;
    this.v1d_1 = parseVari;
    this.w1d_1 = parseFunc;
    this.x1d_1 = parseStrg;
    this.y1d_1 = parseTxtr;
    this.z1d_1 = parseAudo;
    this.a1e_1 = skipLoadingPreciseMasksForNonPreciseSprites;
  }
  protoOf(DataWinParserOptions).toString = function () {
    return 'DataWinParserOptions(parseGen8=' + this.d1d_1 + ', parseOptn=' + this.e1d_1 + ', parseLang=' + this.f1d_1 + ', parseExtn=' + this.g1d_1 + ', parseSond=' + this.h1d_1 + ', parseAgrp=' + this.i1d_1 + ', parseSprt=' + this.j1d_1 + ', parseBgnd=' + this.k1d_1 + ', parsePath=' + this.l1d_1 + ', parseScpt=' + this.m1d_1 + ', parseGlob=' + this.n1d_1 + ', parseShdr=' + this.o1d_1 + ', parseFont=' + this.p1d_1 + ', parseTmln=' + this.q1d_1 + ', parseObjt=' + this.r1d_1 + ', parseRoom=' + this.s1d_1 + ', parseTpag=' + this.t1d_1 + ', parseCode=' + this.u1d_1 + ', parseVari=' + this.v1d_1 + ', parseFunc=' + this.w1d_1 + ', parseStrg=' + this.x1d_1 + ', parseTxtr=' + this.y1d_1 + ', parseAudo=' + this.z1d_1 + ', skipLoadingPreciseMasksForNonPreciseSprites=' + this.a1e_1 + ')';
  };
  protoOf(DataWinParserOptions).hashCode = function () {
    var result = getBooleanHashCode(this.d1d_1);
    result = imul(result, 31) + getBooleanHashCode(this.e1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.f1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.h1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.i1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.j1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.k1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.l1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.m1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.n1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.o1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.p1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.q1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.r1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.s1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.t1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.u1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.v1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.w1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.x1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.y1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.z1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.a1e_1) | 0;
    return result;
  };
  protoOf(DataWinParserOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DataWinParserOptions))
      return false;
    if (!(this.d1d_1 === other.d1d_1))
      return false;
    if (!(this.e1d_1 === other.e1d_1))
      return false;
    if (!(this.f1d_1 === other.f1d_1))
      return false;
    if (!(this.g1d_1 === other.g1d_1))
      return false;
    if (!(this.h1d_1 === other.h1d_1))
      return false;
    if (!(this.i1d_1 === other.i1d_1))
      return false;
    if (!(this.j1d_1 === other.j1d_1))
      return false;
    if (!(this.k1d_1 === other.k1d_1))
      return false;
    if (!(this.l1d_1 === other.l1d_1))
      return false;
    if (!(this.m1d_1 === other.m1d_1))
      return false;
    if (!(this.n1d_1 === other.n1d_1))
      return false;
    if (!(this.o1d_1 === other.o1d_1))
      return false;
    if (!(this.p1d_1 === other.p1d_1))
      return false;
    if (!(this.q1d_1 === other.q1d_1))
      return false;
    if (!(this.r1d_1 === other.r1d_1))
      return false;
    if (!(this.s1d_1 === other.s1d_1))
      return false;
    if (!(this.t1d_1 === other.t1d_1))
      return false;
    if (!(this.u1d_1 === other.u1d_1))
      return false;
    if (!(this.v1d_1 === other.v1d_1))
      return false;
    if (!(this.w1d_1 === other.w1d_1))
      return false;
    if (!(this.x1d_1 === other.x1d_1))
      return false;
    if (!(this.y1d_1 === other.y1d_1))
      return false;
    if (!(this.z1d_1 === other.z1d_1))
      return false;
    if (!(this.a1e_1 === other.a1e_1))
      return false;
    return true;
  };
  function Sprite() {
    this.e12_1 = null;
    this.f12_1 = 0;
    this.g12_1 = 0;
    this.h12_1 = 0;
    this.i12_1 = 0;
    this.j12_1 = 0;
    this.k12_1 = 0;
    this.l12_1 = false;
    this.m12_1 = false;
    this.n12_1 = false;
    this.o12_1 = 0;
    this.p12_1 = 0;
    this.q12_1 = 0;
    this.r12_1 = 0;
    this.s12_1 = 0;
    this.t12_1 = 0;
    this.u12_1 = 0.0;
    this.v12_1 = false;
    this.w12_1 = false;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.x12_1 = new Int32Array([]);
    this.y12_1 = null;
  }
  function Sprt() {
    this.a13_1 = emptyList();
  }
  function Background() {
    this.b13_1 = null;
    this.c13_1 = false;
    this.d13_1 = false;
    this.e13_1 = false;
    this.f13_1 = 0;
    this.g13_1 = 0;
    this.h13_1 = 0;
    this.i13_1 = 0;
    this.j13_1 = 0;
    this.k13_1 = 0;
    this.l13_1 = 0;
    this.m13_1 = 0;
    this.n13_1 = 0;
    this.o13_1 = 0;
    this.p13_1 = 0;
    this.q13_1 = 0;
    this.r13_1 = new Long(0, 0);
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.s13_1 = new Int32Array([]);
  }
  function Bgnd() {
    this.t13_1 = emptyList();
  }
  function Font() {
    this.e15_1 = null;
    this.f15_1 = null;
    this.g15_1 = 0;
    this.h15_1 = false;
    this.i15_1 = false;
    this.j15_1 = 0;
    this.k15_1 = 0;
    this.l15_1 = 0;
    this.m15_1 = 0;
    this.n15_1 = 0;
    this.o15_1 = 0.0;
    this.p15_1 = 0.0;
    this.q15_1 = 0;
    this.r15_1 = 0;
    this.s15_1 = 0;
    this.t15_1 = 0;
    this.u15_1 = false;
    this.v15_1 = false;
    this.w15_1 = false;
    this.x15_1 = emptyList();
    this.y15_1 = 0;
    this.z15_1 = false;
    this.a16_1 = -1;
  }
  function FontChunk() {
    this.j16_1 = emptyList();
  }
  function Texture(scaled, blobOffset, blobSize, blobData, generatedMips, textureBlockSize, textureWidth, textureHeight, indexInGroup) {
    generatedMips = generatedMips === VOID ? 0 : generatedMips;
    textureBlockSize = textureBlockSize === VOID ? 0 : textureBlockSize;
    textureWidth = textureWidth === VOID ? 0 : textureWidth;
    textureHeight = textureHeight === VOID ? 0 : textureHeight;
    indexInGroup = indexInGroup === VOID ? 0 : indexInGroup;
    this.c1e_1 = scaled;
    this.d1e_1 = blobOffset;
    this.e1e_1 = blobSize;
    this.f1e_1 = blobData;
    this.g1e_1 = generatedMips;
    this.h1e_1 = textureBlockSize;
    this.i1e_1 = textureWidth;
    this.j1e_1 = textureHeight;
    this.k1e_1 = indexInGroup;
  }
  function Txtr() {
    this.a1d_1 = emptyList();
  }
  function TexturePageItem() {
    this.t1b_1 = 0;
    this.u1b_1 = 0;
    this.v1b_1 = 0;
    this.w1b_1 = 0;
    this.x1b_1 = 0;
    this.y1b_1 = 0;
    this.z1b_1 = 0;
    this.a1c_1 = 0;
    this.b1c_1 = 0;
    this.c1c_1 = 0;
    this.d1c_1 = 0;
  }
  function Tpag() {
    this.e1c_1 = emptyList();
  }
  function RoomTile() {
    this.g1b_1 = 0;
    this.h1b_1 = 0;
    this.i1b_1 = false;
    this.j1b_1 = 0;
    this.k1b_1 = 0;
    this.l1b_1 = 0;
    this.m1b_1 = 0;
    this.n1b_1 = 0;
    this.o1b_1 = 0;
    this.p1b_1 = 0;
    this.q1b_1 = 0.0;
    this.r1b_1 = 0.0;
    this.s1b_1 = 0;
  }
  function Room() {
    this.j17_1 = null;
    this.k17_1 = null;
    this.l17_1 = 0;
    this.m17_1 = 0;
    this.n17_1 = 0;
    this.o17_1 = false;
    this.p17_1 = 0;
    this.q17_1 = false;
    this.r17_1 = 0;
    this.s17_1 = 0;
    this.t17_1 = false;
    this.u17_1 = 0;
    this.v17_1 = 0;
    this.w17_1 = 0;
    this.x17_1 = 0;
    this.y17_1 = 0.0;
    this.z17_1 = 0.0;
    this.a18_1 = 0.0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(8);
    while (tmp_0 < 8) {
      tmp_1[tmp_0] = new RoomBackground();
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.b18_1 = tmp_1;
    var tmp_2 = this;
    var tmp_3 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_4 = Array(8);
    while (tmp_3 < 8) {
      tmp_4[tmp_3] = new RoomView();
      tmp_3 = tmp_3 + 1 | 0;
    }
    tmp_2.c18_1 = tmp_4;
    this.d18_1 = emptyList();
    this.e18_1 = emptyList();
    this.f18_1 = emptyList();
  }
  function RoomChunk() {
    this.f1b_1 = emptyList();
  }
  function RoomLayer() {
    this.q19_1 = null;
    this.r19_1 = 0;
    this.s19_1 = 0;
    this.t19_1 = 0;
    this.u19_1 = 0.0;
    this.v19_1 = 0.0;
    this.w19_1 = 0.0;
    this.x19_1 = 0.0;
    this.y19_1 = false;
    this.z19_1 = null;
    this.a1a_1 = null;
    this.b1a_1 = null;
    this.c1a_1 = null;
  }
  function RoomLayerAssetsData() {
    this.o1a_1 = emptyList();
    this.p1a_1 = emptyList();
  }
  function Audo() {
    this.b1d_1 = emptyList();
  }
  function AudioEntry(dataSize, dataOffset, data) {
    this.l1e_1 = dataSize;
    this.m1e_1 = dataOffset;
    this.n1e_1 = data;
  }
  function Sound(name, flags, type, file, effects, volume, pitch, audioGroup, audioFile) {
    this.o1e_1 = name;
    this.p1e_1 = flags;
    this.q1e_1 = type;
    this.r1e_1 = file;
    this.s1e_1 = effects;
    this.t1e_1 = volume;
    this.u1e_1 = pitch;
    this.v1e_1 = audioGroup;
    this.w1e_1 = audioFile;
  }
  function Sond() {
    this.c12_1 = emptyList();
  }
  function Optn() {
    this.l11_1 = new Long(0, 0);
    this.m11_1 = 0;
    this.n11_1 = 0;
    this.o11_1 = 0;
    this.p11_1 = 0;
    this.q11_1 = 0;
    this.r11_1 = 0;
    this.s11_1 = 0;
    this.t11_1 = 0;
    this.u11_1 = 0;
    this.v11_1 = 0;
    this.w11_1 = 0;
    this.x11_1 = emptyList();
  }
  function Lang() {
    this.y11_1 = 0;
    this.z11_1 = emptyList();
    this.a12_1 = emptyList();
  }
  function Extn() {
    this.b12_1 = emptyList();
  }
  function Agrp() {
    this.d12_1 = emptyList();
  }
  function PathChunk() {
    this.c14_1 = emptyList();
  }
  function Scpt() {
    this.d14_1 = emptyList();
  }
  function Glob() {
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.e14_1 = new Int32Array([]);
  }
  function Shdr() {
    this.d15_1 = emptyList();
  }
  function Tmln() {
    this.k16_1 = emptyList();
  }
  function Objt() {
    this.i17_1 = emptyList();
  }
  function Code() {
    this.f1c_1 = emptyList();
  }
  function Vari() {
    this.m1c_1 = 0;
    this.n1c_1 = 0;
    this.o1c_1 = 0;
    this.p1c_1 = emptyList();
  }
  function Func() {
    this.q1c_1 = emptyList();
    this.r1c_1 = emptyList();
  }
  function Strg() {
    this.s1c_1 = emptyList();
  }
  function EventAction() {
    this.ry_1 = 0;
    this.sy_1 = 0;
    this.ty_1 = 0;
    this.uy_1 = false;
    this.vy_1 = false;
    this.wy_1 = false;
    this.xy_1 = 0;
    this.yy_1 = null;
    this.zy_1 = 0;
    this.az_1 = 0;
    this.bz_1 = 0;
    this.cz_1 = false;
    this.dz_1 = false;
    this.ez_1 = 0;
  }
  function OptnConstant(name, value) {
    this.x1e_1 = name;
    this.y1e_1 = value;
  }
  function Language(name, region, entries) {
    this.z1e_1 = name;
    this.a1f_1 = region;
    this.b1f_1 = entries;
  }
  function Extension(folderName, name, className, files) {
    this.c1f_1 = folderName;
    this.d1f_1 = name;
    this.e1f_1 = className;
    this.f1f_1 = files;
  }
  function ExtensionFile(filename, cleanupScript, initScript, kind, functions) {
    this.g1f_1 = filename;
    this.h1f_1 = cleanupScript;
    this.i1f_1 = initScript;
    this.j1f_1 = kind;
    this.k1f_1 = functions;
  }
  function ExtensionFunction(name, id, kind, retType, extName, arguments_0) {
    this.l1f_1 = name;
    this.m1f_1 = id;
    this.n1f_1 = kind;
    this.o1f_1 = retType;
    this.p1f_1 = extName;
    this.q1f_1 = arguments_0;
  }
  function computeInternal$addPoint(temp, x, y, speed) {
    temp.g(new InternalPathPoint(x, y, speed));
  }
  function computeInternal$handlePiece(temp, depth, x1, y1, s1, x2, y2, s2, x3, y3, s3) {
    if (depth === 0)
      return Unit_instance;
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
    this.u13_1 = null;
    this.v13_1 = false;
    this.w13_1 = false;
    this.x13_1 = 0;
    this.y13_1 = emptyList();
    this.z13_1 = emptyList();
    this.a14_1 = 0.0;
  }
  protoOf(GamePath).b14 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var temp = ArrayList_init_$Create$_0();
    if (this.y13_1.t()) {
      this.z13_1 = emptyList();
      this.a14_1 = 0.0;
      return Unit_instance;
    }
    if (this.v13_1) {
      if (!this.w13_1) {
        computeInternal$addPoint(temp, this.y13_1.r(0).r1f_1, this.y13_1.r(0).s1f_1, this.y13_1.r(0).t1f_1);
      }
      var n = this.w13_1 ? this.y13_1.o() - 1 | 0 : this.y13_1.o() - 3 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var p1 = this.y13_1.r(i % this.y13_1.o() | 0);
          var p2 = this.y13_1.r((i + 1 | 0) % this.y13_1.o() | 0);
          var p3 = this.y13_1.r((i + 2 | 0) % this.y13_1.o() | 0);
          computeInternal$handlePiece(temp, this.x13_1, (p1.r1f_1 + p2.r1f_1) / 2.0, (p1.s1f_1 + p2.s1f_1) / 2.0, (p1.t1f_1 + p2.t1f_1) / 2.0, p2.r1f_1, p2.s1f_1, p2.t1f_1, (p2.r1f_1 + p3.r1f_1) / 2.0, (p2.s1f_1 + p3.s1f_1) / 2.0, (p2.t1f_1 + p3.t1f_1) / 2.0);
        }
         while (!(i === n));
      if (!this.w13_1) {
        var last_0 = last(this.y13_1);
        computeInternal$addPoint(temp, last_0.r1f_1, last_0.s1f_1, last_0.t1f_1);
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!temp.t()) {
          computeInternal$addPoint(temp, temp.r(0).u1f_1, temp.r(0).v1f_1, temp.r(0).w1f_1);
        }
      }
    } else {
      var _iterator__ex2g4s = this.y13_1.l();
      while (_iterator__ex2g4s.m()) {
        var p = _iterator__ex2g4s.n();
        computeInternal$addPoint(temp, p.r1f_1, p.s1f_1, p.t1f_1);
      }
      if (this.w13_1) {
        computeInternal$addPoint(temp, this.y13_1.r(0).r1f_1, this.y13_1.r(0).s1f_1, this.y13_1.r(0).t1f_1);
      }
    }
    this.z13_1 = temp;
    this.a14_1 = 0.0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.z13_1.t()) {
      this.z13_1.r(0).x1f_1 = 0.0;
      var inductionVariable_0 = 1;
      var last_1 = this.z13_1.o();
      if (inductionVariable_0 < last_1)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var dx = this.z13_1.r(i_0).u1f_1 - this.z13_1.r(i_0 - 1 | 0).u1f_1;
          var dy = this.z13_1.r(i_0).v1f_1 - this.z13_1.r(i_0 - 1 | 0).v1f_1;
          var tmp = this;
          var tmp_0 = this.a14_1;
          // Inline function 'kotlin.math.sqrt' call
          var x = dx * dx + dy * dy;
          tmp.a14_1 = tmp_0 + Math.sqrt(x);
          this.z13_1.r(i_0).x1f_1 = this.a14_1;
        }
         while (inductionVariable_0 < last_1);
    }
  };
  function PathPoint(x, y, speed) {
    this.r1f_1 = x;
    this.s1f_1 = y;
    this.t1f_1 = speed;
  }
  function Script(name, codeId) {
    this.y1f_1 = name;
    this.z1f_1 = codeId;
  }
  function Shader() {
    this.f14_1 = null;
    this.g14_1 = 0;
    this.h14_1 = null;
    this.i14_1 = null;
    this.j14_1 = null;
    this.k14_1 = null;
    this.l14_1 = null;
    this.m14_1 = null;
    this.n14_1 = 0;
    this.o14_1 = 0;
    this.p14_1 = emptyList();
    this.q14_1 = 0;
    this.r14_1 = 0;
    this.s14_1 = 0;
    this.t14_1 = 0;
    this.u14_1 = 0;
    this.v14_1 = 0;
    this.w14_1 = 0;
    this.x14_1 = 0;
    this.y14_1 = 0;
    this.z14_1 = 0;
    this.a15_1 = 0;
    this.b15_1 = 0;
    this.c15_1 = 0;
  }
  function FontGlyph() {
    this.b16_1 = 0;
    this.c16_1 = 0;
    this.d16_1 = 0;
    this.e16_1 = 0;
    this.f16_1 = 0;
    this.g16_1 = 0;
    this.h16_1 = 0;
    this.i16_1 = emptyList();
  }
  function KerningPair(character, shiftModifier) {
    this.a1g_1 = character;
    this.b1g_1 = shiftModifier;
  }
  function Timeline(name, moments) {
    this.c1g_1 = name;
    this.d1g_1 = moments;
  }
  function TimelineMoment(step, actions) {
    this.e1g_1 = step;
    this.f1g_1 = actions;
  }
  function GameObject() {
    this.l16_1 = null;
    this.m16_1 = 0;
    this.n16_1 = false;
    this.o16_1 = false;
    this.p16_1 = false;
    this.q16_1 = 0;
    this.r16_1 = false;
    this.s16_1 = 0;
    this.t16_1 = 0;
    this.u16_1 = false;
    this.v16_1 = false;
    this.w16_1 = 0;
    this.x16_1 = 0.0;
    this.y16_1 = 0.0;
    this.z16_1 = 0;
    this.a17_1 = 0.0;
    this.b17_1 = 0.0;
    this.c17_1 = 0;
    this.d17_1 = 0.0;
    this.e17_1 = false;
    this.f17_1 = false;
    this.g17_1 = emptyList();
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(15);
    while (tmp_0 < 15) {
      tmp_1[tmp_0] = new ObjectEventList();
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.h17_1 = tmp_1;
  }
  function PhysicsVertex(x, y) {
    this.g1g_1 = x;
    this.h1g_1 = y;
  }
  function ObjectEventList(events) {
    events = events === VOID ? emptyList() : events;
    this.i1g_1 = events;
  }
  function ObjectEvent(eventSubtype, actions) {
    this.j1g_1 = eventSubtype;
    this.k1g_1 = actions;
  }
  function RoomBackground() {
    this.g18_1 = false;
    this.h18_1 = false;
    this.i18_1 = 0;
    this.j18_1 = 0;
    this.k18_1 = 0;
    this.l18_1 = 0;
    this.m18_1 = 0;
    this.n18_1 = 0;
    this.o18_1 = 0;
    this.p18_1 = false;
  }
  function RoomView() {
    this.q18_1 = false;
    this.r18_1 = 0;
    this.s18_1 = 0;
    this.t18_1 = 0;
    this.u18_1 = 0;
    this.v18_1 = 0;
    this.w18_1 = 0;
    this.x18_1 = 0;
    this.y18_1 = 0;
    this.z18_1 = 0;
    this.a19_1 = 0;
    this.b19_1 = 0;
    this.c19_1 = 0;
    this.d19_1 = 0;
  }
  function RoomGameObject() {
    this.e19_1 = 0;
    this.f19_1 = 0;
    this.g19_1 = 0;
    this.h19_1 = 0;
    this.i19_1 = 0;
    this.j19_1 = 0.0;
    this.k19_1 = 0.0;
    this.l19_1 = 1.0;
    this.m19_1 = 0;
    this.n19_1 = 0;
    this.o19_1 = 0.0;
    this.p19_1 = -1;
  }
  function SpriteInstance() {
    this.d1a_1 = null;
    this.e1a_1 = 0;
    this.f1a_1 = 0;
    this.g1a_1 = 0;
    this.h1a_1 = 0.0;
    this.i1a_1 = 0.0;
    this.j1a_1 = 0;
    this.k1a_1 = 0.0;
    this.l1a_1 = 0;
    this.m1a_1 = 0.0;
    this.n1a_1 = 0.0;
  }
  function RoomLayerBackgroundData() {
    this.q1a_1 = false;
    this.r1a_1 = false;
    this.s1a_1 = -1;
    this.t1a_1 = false;
    this.u1a_1 = false;
    this.v1a_1 = false;
    this.w1a_1 = 0;
    this.x1a_1 = 0.0;
    this.y1a_1 = 0.0;
    this.z1a_1 = 0;
  }
  function RoomLayerInstancesData() {
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.a1b_1 = new Int32Array([]);
  }
  function RoomLayerTilesData() {
    this.b1b_1 = 0;
    this.c1b_1 = 0;
    this.d1b_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.e1b_1 = new Int32Array([]);
  }
  function CodeEntry(name, length, localsCount, argumentsCount, bytecodeAbsoluteOffset, offset) {
    this.g1c_1 = name;
    this.h1c_1 = length;
    this.i1c_1 = localsCount;
    this.j1c_1 = argumentsCount;
    this.k1c_1 = bytecodeAbsoluteOffset;
    this.l1c_1 = offset;
  }
  function Variable(name, instanceType, varID, occurrences, firstAddress, builtinVarId) {
    builtinVarId = builtinVarId === VOID ? -1 : builtinVarId;
    this.l1g_1 = name;
    this.m1g_1 = instanceType;
    this.n1g_1 = varID;
    this.o1g_1 = occurrences;
    this.p1g_1 = firstAddress;
    this.q1g_1 = builtinVarId;
  }
  function Function(name, occurrences, firstAddress) {
    this.r1g_1 = name;
    this.s1g_1 = occurrences;
    this.t1g_1 = firstAddress;
  }
  function CodeLocals(name, locals) {
    this.u1g_1 = name;
    this.v1g_1 = locals;
  }
  function LocalVar(varID, name) {
    this.w1g_1 = varID;
    this.x1g_1 = name;
  }
  function InternalPathPoint(x, y, speed, l) {
    l = l === VOID ? 0.0 : l;
    this.u1f_1 = x;
    this.v1f_1 = y;
    this.w1f_1 = speed;
    this.x1f_1 = l;
  }
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
  function File(name, isoFile, sector, sectorCount) {
    sector = sector === VOID ? 0 : sector;
    sectorCount = sectorCount === VOID ? 0 : sectorCount;
    DirEntryInfo.call(this, name);
    this.z1g_1 = isoFile;
    this.a1h_1 = sector;
    this.b1h_1 = sectorCount;
  }
  function Subdirectory(name, dirIndex) {
    DirEntryInfo.call(this, name);
    this.d1h_1 = dirIndex;
  }
  function Companion_0() {
    this.e1h_1 = 2048;
    this.f1h_1 = 16;
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function IsoFile(name, data) {
    this.g1h_1 = name;
    this.h1h_1 = data;
  }
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
    this.i1h_1 = name;
    this.j1h_1 = parentIndex;
    this.k1h_1 = entries;
    this.l1h_1 = sector;
    this.m1h_1 = sizeInBytes;
  }
  protoOf(DirInfo).n1h = function () {
    return ((this.m1h_1 + 2048 | 0) - 1 | 0) / 2048 | 0;
  };
  function DirEntryInfo(name) {
    this.o1h_1 = name;
  }
  function calculateDirectorySize($this, dir) {
    var size = 0;
    size = size + 34 | 0;
    size = size + 34 | 0;
    var _iterator__ex2g4s = dir.k1h_1.l();
    while (_iterator__ex2g4s.m()) {
      var entry = _iterator__ex2g4s.n();
      var tmp;
      if (entry instanceof Subdirectory) {
        tmp = encodeToByteArray(entry.o1h_1);
      } else {
        if (entry instanceof File) {
          tmp = encodeToByteArray(entry.o1h_1 + ';1');
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
    var _iterator__ex2g4s = directories.l();
    while (_iterator__ex2g4s.m()) {
      var dir = _iterator__ex2g4s.n();
      var tmp;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = dir.i1h_1;
      if (charSequenceLength(this_0) === 0) {
        tmp = 1;
      } else {
        tmp = dir.i1h_1.length;
      }
      var nameLength = tmp;
      size = size + ((8 + nameLength | 0) + (!((nameLength % 2 | 0) === 0) ? 1 : 0) | 0) | 0;
    }
    return size;
  }
  function writePathTable($this, writer, directories, littleEndian) {
    var _iterator__ex2g4s = directories.l();
    while (_iterator__ex2g4s.m()) {
      var dir = _iterator__ex2g4s.n();
      var nameBytes;
      var nameLength;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = dir.i1h_1;
      if (charSequenceLength(this_0) === 0) {
        // Inline function 'kotlin.byteArrayOf' call
        nameBytes = new Int8Array([0]);
        nameLength = 1;
      } else {
        nameBytes = encodeToByteArray(dir.i1h_1);
        nameLength = nameBytes.length;
      }
      writer.yw(nameLength);
      writer.yw(0);
      if (littleEndian) {
        writeInt32LE($this, writer, dir.l1h_1);
        writeInt16LE($this, writer, dir.j1h_1 + 1 | 0);
      } else {
        writeInt32BE($this, writer, dir.l1h_1);
        writeInt16BE($this, writer, dir.j1h_1 + 1 | 0);
      }
      writer.bx(nameBytes);
      if (!((nameLength % 2 | 0) === 0)) {
        writer.yw(0);
      }
    }
  }
  function writeDirectoryRecord($this, writer, extentSector, dataLength, flags, identifier) {
    var baseLength = 33 + identifier.length | 0;
    var paddingByte = !((baseLength % 2 | 0) === 0) ? 1 : 0;
    var recordLength = baseLength + paddingByte | 0;
    writer.yw(recordLength);
    writer.yw(0);
    writeBothEndian32($this, writer, extentSector);
    writeBothEndian32($this, writer, dataLength);
    writeDirectoryDateTime($this, writer);
    writer.yw(flags);
    writer.yw(0);
    writer.yw(0);
    writeBothEndian16($this, writer, 1);
    writer.yw(identifier.length);
    writer.bx(identifier);
    if (paddingByte > 0) {
      writer.yw(0);
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
    writer.yw(value & 255);
    writer.yw(value >> 8 & 255);
    writer.yw(value >> 16 & 255);
    writer.yw(value >> 24 & 255);
  }
  function writeInt32BE($this, writer, value) {
    writer.yw(value >> 24 & 255);
    writer.yw(value >> 16 & 255);
    writer.yw(value >> 8 & 255);
    writer.yw(value & 255);
  }
  function writeInt16LE($this, writer, value) {
    writer.yw(value & 255);
    writer.yw(value >> 8 & 255);
  }
  function writeInt16BE($this, writer, value) {
    writer.yw(value >> 8 & 255);
    writer.yw(value & 255);
  }
  function writeAscii($this, writer, str) {
    writer.bx(encodeToByteArray(str));
  }
  function writePaddedString($this, writer, str, length) {
    var bytes = encodeToByteArray(str);
    var toCopy = coerceAtMost(bytes.length, length);
    var inductionVariable = 0;
    if (inductionVariable < toCopy)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        writer.yw(bytes[i]);
      }
       while (inductionVariable < toCopy);
    var inductionVariable_0 = toCopy;
    if (inductionVariable_0 < length)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        writer.yw(32);
      }
       while (inductionVariable_0 < length);
  }
  function writePvdDateTime($this, writer) {
    writeAscii($this, writer, '2026031500000000');
    writer.yw(0);
  }
  function writeEmptyPvdDateTime($this, writer) {
    var inductionVariable = 0;
    if (inductionVariable < 17)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        writer.yw(48);
      }
       while (inductionVariable < 17);
  }
  function writeDirectoryDateTime($this, writer) {
    writer.yw(126);
    writer.yw(3);
    writer.yw(15);
    writer.yw(0);
    writer.yw(0);
    writer.yw(0);
    writer.yw(0);
  }
  function Iso9660Creator(volumeId, systemId) {
    volumeId = volumeId === VOID ? 'UNDERTALE' : volumeId;
    systemId = systemId === VOID ? 'PLAYSTATION' : systemId;
    this.p1h_1 = volumeId;
    this.q1h_1 = systemId;
  }
  protoOf(Iso9660Creator).r1h = function (files) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var directories = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dirsByPath = LinkedHashMap_init_$Create$();
    directories.g(new DirInfo('', 0));
    // Inline function 'kotlin.collections.set' call
    dirsByPath.w1('', 0);
    var _iterator__ex2g4s = files.l();
    while (_iterator__ex2g4s.m()) {
      var file = _iterator__ex2g4s.n();
      var slashIndex = lastIndexOf(file.g1h_1, _Char___init__impl__6a9atx(47));
      var dirPath;
      var fileName;
      if (slashIndex >= 0) {
        dirPath = substring(file.g1h_1, 0, slashIndex);
        fileName = substring_0(file.g1h_1, slashIndex + 1 | 0);
      } else {
        dirPath = '';
        fileName = file.g1h_1;
      }
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = dirPath;
      if (charSequenceLength(this_0) > 0) {
        tmp = !dirsByPath.b2(dirPath);
      } else {
        tmp = false;
      }
      if (tmp) {
        var parts = split(dirPath, ['/']);
        var currentPath = '';
        var _iterator__ex2g4s_0 = parts.l();
        while (_iterator__ex2g4s_0.m()) {
          var part = _iterator__ex2g4s_0.n();
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
          if (!dirsByPath.b2(currentPath)) {
            var parentIndex = ensureNotNull(dirsByPath.d2(parentPath));
            var newIndex = directories.o();
            directories.g(new DirInfo(part, parentIndex));
            // Inline function 'kotlin.collections.set' call
            var key = currentPath;
            dirsByPath.w1(key, newIndex);
            directories.r(parentIndex).k1h_1.g(new Subdirectory(part, newIndex));
          }
        }
      }
      var dirIndex = ensureNotNull(dirsByPath.d2(dirPath));
      directories.r(dirIndex).k1h_1.g(new File(fileName, file));
    }
    var _iterator__ex2g4s_1 = directories.l();
    while (_iterator__ex2g4s_1.m()) {
      var dir = _iterator__ex2g4s_1.n();
      dir.m1h_1 = calculateDirectorySize(this, dir);
    }
    var lPathTableSector = 18;
    var mPathTableSector = 19;
    var nextSector = 20;
    var _iterator__ex2g4s_2 = directories.l();
    while (_iterator__ex2g4s_2.m()) {
      var dir_0 = _iterator__ex2g4s_2.n();
      dir_0.l1h_1 = nextSector;
      nextSector = nextSector + dir_0.n1h() | 0;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var allFiles = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_3 = directories.l();
    while (_iterator__ex2g4s_3.m()) {
      var dir_1 = _iterator__ex2g4s_3.n();
      var _iterator__ex2g4s_4 = dir_1.k1h_1.l();
      while (_iterator__ex2g4s_4.m()) {
        var entry = _iterator__ex2g4s_4.n();
        if (entry instanceof File) {
          var sectorCount = coerceAtLeast(((entry.z1g_1.h1h_1.length + 2048 | 0) - 1 | 0) / 2048 | 0, 1);
          entry.a1h_1 = nextSector;
          entry.b1h_1 = sectorCount;
          nextSector = nextSector + sectorCount | 0;
          allFiles.g(entry);
        }
      }
    }
    var totalSectors = nextSector;
    var pathTableSize = calculatePathTableSize(this, directories);
    var rootDir = directories.r(0);
    var writer = new ByteWriter(imul(totalSectors, 2048));
    writer.cx(32768);
    var pvdStart = writer.xw_1;
    writer.yw(1);
    writeAscii(this, writer, 'CD001');
    writer.yw(1);
    writer.yw(0);
    writePaddedString(this, writer, this.q1h_1, 32);
    writePaddedString(this, writer, this.p1h_1, 32);
    writer.cx(8);
    writeBothEndian32(this, writer, totalSectors);
    writer.cx(32);
    writeBothEndian16(this, writer, 1);
    writeBothEndian16(this, writer, 1);
    writeBothEndian16(this, writer, 2048);
    writeBothEndian32(this, writer, pathTableSize);
    writeInt32LE(this, writer, lPathTableSector);
    writeInt32LE(this, writer, 0);
    writeInt32BE(this, writer, mPathTableSector);
    writeInt32BE(this, writer, 0);
    var tmp_1 = rootDir.l1h_1;
    var tmp_2 = rootDir.m1h_1;
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
    writer.yw(1);
    writer.yw(0);
    writer.cx(2048 - (writer.xw_1 - pvdStart | 0) | 0);
    var termStart = writer.xw_1;
    writer.yw(255);
    writeAscii(this, writer, 'CD001');
    writer.yw(1);
    writer.cx(2048 - (writer.xw_1 - termStart | 0) | 0);
    var lptStart = writer.xw_1;
    writePathTable(this, writer, directories, true);
    writer.cx(2048 - (writer.xw_1 - lptStart | 0) | 0);
    var mptStart = writer.xw_1;
    writePathTable(this, writer, directories, false);
    writer.cx(2048 - (writer.xw_1 - mptStart | 0) | 0);
    var _iterator__ex2g4s_5 = directories.l();
    while (_iterator__ex2g4s_5.m()) {
      var dir_2 = _iterator__ex2g4s_5.n();
      var dirStart = writer.xw_1;
      var parentDir = directories.r(dir_2.j1h_1);
      var tmp_3 = dir_2.l1h_1;
      var tmp_4 = dir_2.m1h_1;
      // Inline function 'kotlin.byteArrayOf' call
      var tmp$ret$8 = new Int8Array([0]);
      writeDirectoryRecord(this, writer, tmp_3, tmp_4, 2, tmp$ret$8);
      var tmp_5 = parentDir.l1h_1;
      var tmp_6 = parentDir.m1h_1;
      // Inline function 'kotlin.byteArrayOf' call
      var tmp$ret$9 = new Int8Array([1]);
      writeDirectoryRecord(this, writer, tmp_5, tmp_6, 2, tmp$ret$9);
      var _iterator__ex2g4s_6 = dir_2.k1h_1.l();
      while (_iterator__ex2g4s_6.m()) {
        var entry_0 = _iterator__ex2g4s_6.n();
        var identifier;
        var entrySector;
        var dataLength;
        var flags;
        if (entry_0 instanceof Subdirectory) {
          var childDir = directories.r(entry_0.d1h_1);
          identifier = encodeToByteArray(entry_0.o1h_1);
          entrySector = childDir.l1h_1;
          dataLength = childDir.m1h_1;
          flags = 2;
        } else {
          if (entry_0 instanceof File) {
            identifier = encodeToByteArray(entry_0.o1h_1 + ';1');
            entrySector = entry_0.a1h_1;
            dataLength = entry_0.z1g_1.h1h_1.length;
            flags = 0;
          } else {
            noWhenBranchMatchedException();
          }
        }
        var baseLength = 33 + identifier.length | 0;
        var paddingByte = !((baseLength % 2 | 0) === 0) ? 1 : 0;
        var recordLength = baseLength + paddingByte | 0;
        var sectorOffset = (writer.xw_1 - dirStart | 0) % 2048 | 0;
        if ((sectorOffset + recordLength | 0) > 2048) {
          writer.cx(2048 - sectorOffset | 0);
        }
        writeDirectoryRecord(this, writer, entrySector, dataLength, flags, identifier);
      }
      var written = writer.xw_1 - dirStart | 0;
      var totalDirSize = imul(dir_2.n1h(), 2048);
      if (totalDirSize > written) {
        writer.cx(totalDirSize - written | 0);
      }
    }
    var _iterator__ex2g4s_7 = allFiles.l();
    while (_iterator__ex2g4s_7.m()) {
      var entry_1 = _iterator__ex2g4s_7.n();
      writer.bx(entry_1.z1g_1.h1h_1);
      var targetSize = imul(entry_1.b1h_1, 2048);
      var padding = targetSize - entry_1.z1g_1.h1h_1.length | 0;
      if (padding > 0) {
        writer.cx(padding);
      }
    }
    return writer.dx();
  };
  function sam$kotlin_Comparator$0_2(function_0) {
    this.s1h_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_2).wb = function (a, b) {
    return this.s1h_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
    return this.wb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).u2 = function () {
    return this.s1h_1;
  };
  protoOf(sam$kotlin_Comparator$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
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
    this.t1h_1 = pixels;
    this.u1h_1 = 255;
    this.v1h_1 = 0;
    this.w1h_1 = 255;
    this.x1h_1 = 0;
    this.y1h_1 = 255;
    this.z1h_1 = 0;
    this.a1i_1 = 255;
    this.b1i_1 = 0;
    this.c1i_1 = false;
    var indexedObject = this.t1h_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var p = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var a = (p >>> 24 | 0) & 255;
      var r = p >> 16 & 255;
      var g = p >> 8 & 255;
      var b = p & 255;
      if (this.u1h_1 > r)
        this.u1h_1 = r;
      if (r > this.v1h_1)
        this.v1h_1 = r;
      if (this.w1h_1 > g)
        this.w1h_1 = g;
      if (g > this.x1h_1)
        this.x1h_1 = g;
      if (this.y1h_1 > b)
        this.y1h_1 = b;
      if (b > this.z1h_1)
        this.z1h_1 = b;
      if (this.a1i_1 > a)
        this.a1i_1 = a;
      if (a > this.b1i_1)
        this.b1i_1 = a;
    }
  }
  protoOf(Box).d1i = function () {
    return this.v1h_1 - this.u1h_1 | 0;
  };
  protoOf(Box).e1i = function () {
    return this.x1h_1 - this.w1h_1 | 0;
  };
  protoOf(Box).f1i = function () {
    return this.z1h_1 - this.y1h_1 | 0;
  };
  protoOf(Box).g1i = function () {
    return this.b1i_1 - this.a1i_1 | 0;
  };
  protoOf(Box).h1i = function () {
    var tmp;
    if (this.c1i_1) {
      tmp = 0;
    } else {
      var tmp0 = this.d1i();
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = this.e1i();
      var tmp0_0 = Math.max(tmp0, b);
      var tmp0_1 = this.f1i();
      // Inline function 'kotlin.comparisons.maxOf' call
      var b_0 = this.g1i();
      // Inline function 'kotlin.comparisons.maxOf' call
      var b_1 = Math.max(tmp0_1, b_0);
      tmp = Math.max(tmp0_0, b_1);
    }
    return tmp;
  };
  protoOf(Box).i1i = function () {
    var rSum = new Long(0, 0);
    var gSum = new Long(0, 0);
    var bSum = new Long(0, 0);
    var aSum = new Long(0, 0);
    var indexedObject = this.t1h_1;
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
    var n = this.t1h_1.length;
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
  protoOf(Box).j1i = function () {
    var tmp;
    if (this.d1i() >= this.e1i() && this.d1i() >= this.f1i() && this.d1i() >= this.g1i()) {
      tmp = MedianCut$Box$split$lambda;
    } else if (this.e1i() >= this.f1i() && this.e1i() >= this.g1i()) {
      tmp = MedianCut$Box$split$lambda_0;
    } else if (this.f1i() >= this.g1i()) {
      tmp = MedianCut$Box$split$lambda_1;
    } else {
      tmp = MedianCut$Box$split$lambda_2;
    }
    var keyOf = tmp;
    // Inline function 'kotlin.also' call
    var this_0 = toTypedArray(this.t1h_1);
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
  }
  protoOf(MedianCut).qx = function (pixels, maxColors) {
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
    $l$loop_1: while (maxColors > boxes.o()) {
      var target = null;
      var bestScore = new Long(0, 0);
      var _iterator__ex2g4s = boxes.l();
      $l$loop: while (_iterator__ex2g4s.m()) {
        var b = _iterator__ex2g4s.n();
        if (2 > b.t1h_1.length || b.h1i() === 0)
          continue $l$loop;
        var tmp0 = fromInt(b.t1h_1.length);
        // Inline function 'kotlin.Long.times' call
        var other = b.h1i();
        var score = multiply(tmp0, fromInt(other));
        if (compare(score, bestScore) > 0) {
          bestScore = score;
          target = b;
        }
      }
      if (target == null)
        break $l$loop_1;
      var tmp0_elvis_lhs = target.j1i();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.run' call
        target.c1i_1 = true;
        continue $l$loop_1;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var split = tmp_0;
      boxes.e2(target);
      boxes.g(split.pd_1);
      boxes.g(split.qd_1);
    }
    var tmp_1 = 0;
    var tmp_2 = boxes.o();
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      tmp_3[tmp_4] = boxes.r(tmp_4).i1i();
      tmp_1 = tmp_1 + 1 | 0;
    }
    return tmp_3;
  };
  var MedianCut_instance;
  function MedianCut_getInstance() {
    return MedianCut_instance;
  }
  function PixelImage(width, height, pixels) {
    this.gy_1 = width;
    this.hy_1 = height;
    this.iy_1 = pixels;
  }
  function CropResult(image, offsetX, offsetY) {
    this.k1i_1 = image;
    this.l1i_1 = offsetX;
    this.m1i_1 = offsetY;
  }
  protoOf(CropResult).toString = function () {
    return 'CropResult(image=' + toString(this.k1i_1) + ', offsetX=' + this.l1i_1 + ', offsetY=' + this.m1i_1 + ')';
  };
  protoOf(CropResult).hashCode = function () {
    var result = hashCode(this.k1i_1);
    result = imul(result, 31) + this.l1i_1 | 0;
    result = imul(result, 31) + this.m1i_1 | 0;
    return result;
  };
  protoOf(CropResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CropResult))
      return false;
    if (!equals(this.k1i_1, other.k1i_1))
      return false;
    if (!(this.l1i_1 === other.l1i_1))
      return false;
    if (!(this.m1i_1 === other.m1i_1))
      return false;
    return true;
  };
  function cropTransparentBorders(img) {
    var minY = -1;
    var inductionVariable = 0;
    var last = img.hy_1;
    if (inductionVariable < last)
      $l$loop_0: do {
        var y = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = img.gy_1;
        if (inductionVariable_0 < last_0)
          $l$loop: do {
            var x = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!((img.iy_1[imul(y, img.gy_1) + x | 0] >>> 24 | 0) === 0)) {
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
    var inductionVariable_1 = img.hy_1 - 1 | 0;
    var last_1 = minY;
    if (last_1 <= inductionVariable_1)
      $l$loop_2: do {
        var y_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + -1 | 0;
        var found = false;
        var inductionVariable_2 = 0;
        var last_2 = img.gy_1;
        if (inductionVariable_2 < last_2)
          $l$loop_1: do {
            var x_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            if (!((img.iy_1[imul(y_0, img.gy_1) + x_0 | 0] >>> 24 | 0) === 0)) {
              maxY = y_0;
              found = true;
              break $l$loop_1;
            }
          }
           while (inductionVariable_2 < last_2);
      }
       while (!found && !(y_0 === last_1));
    var minX = img.gy_1;
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
            if (!((img.iy_1[imul(y_1, img.gy_1) + x_1 | 0] >>> 24 | 0) === 0)) {
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
        var inductionVariable_6 = img.gy_1 - 1 | 0;
        var last_6 = maxX + 1 | 0;
        if (last_6 <= inductionVariable_6)
          $l$loop_4: do {
            var x_2 = inductionVariable_6;
            inductionVariable_6 = inductionVariable_6 + -1 | 0;
            if (!((img.iy_1[imul(y_2, img.gy_1) + x_2 | 0] >>> 24 | 0) === 0)) {
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
            croppedPixels[imul(y_3, cropW) + x_3 | 0] = img.iy_1[imul(minY + y_3 | 0, img.gy_1) + (minX + x_3 | 0) | 0];
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
    this.n1i_1 = format;
    this.o1i_1 = sampleRate;
    this.p1i_1 = channels;
    this.q1i_1 = bitsPerSample;
    this.r1i_1 = data;
    this.s1i_1 = sampleCount;
  }
  protoOf(AudioData).toString = function () {
    return 'AudioData(format=' + this.n1i_1 + ', sampleRate=' + this.o1i_1 + ', channels=' + this.p1i_1 + ', bitsPerSample=' + this.q1i_1 + ', data=' + toString(this.r1i_1) + ', sampleCount=' + this.s1i_1 + ')';
  };
  protoOf(AudioData).hashCode = function () {
    var result = this.n1i_1;
    result = imul(result, 31) + this.o1i_1 | 0;
    result = imul(result, 31) + this.p1i_1 | 0;
    result = imul(result, 31) + this.q1i_1 | 0;
    result = imul(result, 31) + hashCode(this.r1i_1) | 0;
    result = imul(result, 31) + this.s1i_1 | 0;
    return result;
  };
  protoOf(AudioData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AudioData))
      return false;
    if (!(this.n1i_1 === other.n1i_1))
      return false;
    if (!(this.o1i_1 === other.o1i_1))
      return false;
    if (!(this.p1i_1 === other.p1i_1))
      return false;
    if (!(this.q1i_1 === other.q1i_1))
      return false;
    if (!equals(this.r1i_1, other.r1i_1))
      return false;
    if (!(this.s1i_1 === other.s1i_1))
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
    var downsampledSamples = _destruct__k2r9zo.gd();
    var finalRate = _destruct__k2r9zo.hd();
    var finalSamples = downmixToMono(downsampledSamples, channels);
    var adpcmData = imaAdpcmEncode(finalSamples, 1);
    return new AudioData(1, finalRate, 1, 4, adpcmData, finalSamples.length);
  }
  function parseOgg(data) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    var vorbis = Companion_getInstance_1().p1j(data).gd();
    if (vorbis == null)
      return null;
    var info = vorbis.x1l();
    var totalSamples = vorbis.y1l();
    if (totalSamples === 0) {
      vorbis.z1l();
      return null;
    }
    var floatBuf = new Float32Array(imul(totalSamples, info.b1m_1));
    var decoded = vorbis.d1m(info.b1m_1, floatBuf, floatBuf.length);
    vorbis.z1l();
    if (decoded === 0)
      return null;
    var totalFloats = imul(decoded, info.b1m_1);
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
    var _destruct__k2r9zo = downsampleTo22050(pcmSamples, info.a1m_1, info.b1m_1);
    var downsampledSamples = _destruct__k2r9zo.gd();
    var finalRate = _destruct__k2r9zo.hd();
    var finalSamples = downmixToMono(downsampledSamples, info.b1m_1);
    var adpcmData = imaAdpcmEncode(finalSamples, 1);
    return new AudioData(1, finalRate, 1, 4, adpcmData, finalSamples.length);
  }
  function ProcessingResult(gameName, clut4Bin, clut8Bin, texturesBin, atlasBin, soundBnkBin, soundsBin, atlases) {
    atlases = atlases === VOID ? emptyList() : atlases;
    this.e1m_1 = gameName;
    this.f1m_1 = clut4Bin;
    this.g1m_1 = clut8Bin;
    this.h1m_1 = texturesBin;
    this.i1m_1 = atlasBin;
    this.j1m_1 = soundBnkBin;
    this.k1m_1 = soundsBin;
    this.l1m_1 = atlases;
  }
  function processDataWin(dataWinBytes, externalAudioFiles, audioGroupFiles, musFiles, force4bppPatterns, atlasSize, audioDecoder, progressCallback, $completion) {
    externalAudioFiles = externalAudioFiles === VOID ? emptyMap() : externalAudioFiles;
    audioGroupFiles = audioGroupFiles === VOID ? emptyMap() : audioGroupFiles;
    musFiles = musFiles === VOID ? emptyMap() : musFiles;
    force4bppPatterns = force4bppPatterns === VOID ? emptyList() : force4bppPatterns;
    atlasSize = atlasSize === VOID ? 512 : atlasSize;
    progressCallback = progressCallback === VOID ? null : progressCallback;
    var tmp = new $processDataWinCOROUTINE$(dataWinBytes, externalAudioFiles, audioGroupFiles, musFiles, force4bppPatterns, atlasSize, audioDecoder, progressCallback, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
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
    var _iterator__ex2g4s = get_OMEGA_FLOWEY_PREFIXES().l();
    while (_iterator__ex2g4s.m()) {
      var prefix = _iterator__ex2g4s.n();
      if (startsWith(spriteName, prefix))
        return 'spr/_omega_flowey';
    }
    return 'spr/' + spriteName;
  }
  function extractFromTPAG(tpag, texturePages) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = tpag.b1c_1;
    var w = Math.max(a, 1);
    // Inline function 'kotlin.comparisons.maxOf' call
    var a_0 = tpag.c1c_1;
    var h = Math.max(a_0, 1);
    var pixels = new Int32Array(imul(w, h));
    if (tpag.d1c_1 < 0)
      return new PixelImage(w, h, pixels);
    var tmp0_elvis_lhs = getOrNull(texturePages, tpag.d1c_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new PixelImage(w, h, pixels);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var texPage = tmp;
    if (tpag.z1b_1 === 0 || tpag.a1c_1 === 0)
      return new PixelImage(w, h, pixels);
    var inductionVariable = 0;
    var last = tpag.a1c_1;
    if (inductionVariable < last)
      $l$loop: do {
        var dy = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var srcY = tpag.u1b_1 + dy | 0;
        var dstY = tpag.y1b_1 + dy | 0;
        if (srcY >= texPage.hy_1 || dstY >= h)
          continue $l$loop;
        var inductionVariable_0 = 0;
        var last_0 = tpag.z1b_1;
        if (inductionVariable_0 < last_0)
          $l$loop_0: do {
            var dx = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var srcX = tpag.t1b_1 + dx | 0;
            var dstX = tpag.x1b_1 + dx | 0;
            if (srcX >= texPage.gy_1 || dstX >= w)
              continue $l$loop_0;
            pixels[imul(dstY, w) + dstX | 0] = texPage.iy_1[imul(srcY, texPage.gy_1) + srcX | 0];
          }
           while (inductionVariable_0 < last_0);
      }
       while (inductionVariable < last);
    return new PixelImage(w, h, pixels);
  }
  function TileKey(useSpriteDefinition, bgDef, srcX, srcY, w, h) {
    this.u1n_1 = useSpriteDefinition;
    this.v1n_1 = bgDef;
    this.w1n_1 = srcX;
    this.x1n_1 = srcY;
    this.y1n_1 = w;
    this.z1n_1 = h;
  }
  protoOf(TileKey).toString = function () {
    return 'TileKey(useSpriteDefinition=' + this.u1n_1 + ', bgDef=' + this.v1n_1 + ', srcX=' + this.w1n_1 + ', srcY=' + this.x1n_1 + ', w=' + this.y1n_1 + ', h=' + this.z1n_1 + ')';
  };
  protoOf(TileKey).hashCode = function () {
    var result = getBooleanHashCode(this.u1n_1);
    result = imul(result, 31) + this.v1n_1 | 0;
    result = imul(result, 31) + this.w1n_1 | 0;
    result = imul(result, 31) + this.x1n_1 | 0;
    result = imul(result, 31) + this.y1n_1 | 0;
    result = imul(result, 31) + this.z1n_1 | 0;
    return result;
  };
  protoOf(TileKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TileKey))
      return false;
    if (!(this.u1n_1 === other.u1n_1))
      return false;
    if (!(this.v1n_1 === other.v1n_1))
      return false;
    if (!(this.w1n_1 === other.w1n_1))
      return false;
    if (!(this.x1n_1 === other.x1n_1))
      return false;
    if (!(this.y1n_1 === other.y1n_1))
      return false;
    if (!(this.z1n_1 === other.z1n_1))
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
            pixels[imul(y, w) + x | 0] = src.iy_1[imul(srcY + y | 0, src.gy_1) + (srcX + x | 0) | 0];
          }
           while (inductionVariable_0 < w);
      }
       while (inductionVariable < h);
    return new PixelImage(w, h, pixels);
  }
  function CropInfo(offsetX, offsetY, croppedWidth, croppedHeight) {
    this.a1o_1 = offsetX;
    this.b1o_1 = offsetY;
    this.c1o_1 = croppedWidth;
    this.d1o_1 = croppedHeight;
  }
  protoOf(CropInfo).toString = function () {
    return 'CropInfo(offsetX=' + this.a1o_1 + ', offsetY=' + this.b1o_1 + ', croppedWidth=' + this.c1o_1 + ', croppedHeight=' + this.d1o_1 + ')';
  };
  protoOf(CropInfo).hashCode = function () {
    var result = this.a1o_1;
    result = imul(result, 31) + this.b1o_1 | 0;
    result = imul(result, 31) + this.c1o_1 | 0;
    result = imul(result, 31) + this.d1o_1 | 0;
    return result;
  };
  protoOf(CropInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CropInfo))
      return false;
    if (!(this.a1o_1 === other.a1o_1))
      return false;
    if (!(this.b1o_1 === other.b1o_1))
      return false;
    if (!(this.c1o_1 === other.c1o_1))
      return false;
    if (!(this.d1o_1 === other.d1o_1))
      return false;
    return true;
  };
  function writeClutBinary(groups, paletteSize) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    if (groups.t())
      return new Int8Array(0);
    var writer = new ByteWriter(imul(imul(groups.o(), paletteSize), 4));
    var _iterator__ex2g4s = groups.l();
    while (_iterator__ex2g4s.m()) {
      var group = _iterator__ex2g4s.n();
      var palette = new Int32Array(paletteSize);
      var tmp0 = group.oy_1;
      // Inline function 'kotlin.comparisons.minOf' call
      var a = group.oy_1.length;
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
        writer.ax(color);
      }
    }
    return writer.dx();
  }
  function AtlasPayloadMetadata(offset, width, height, bpp, pixelDataSize, compressionType) {
    this.e1o_1 = offset;
    this.f1o_1 = width;
    this.g1o_1 = height;
    this.h1o_1 = bpp;
    this.i1o_1 = pixelDataSize;
    this.j1o_1 = compressionType;
  }
  protoOf(AtlasPayloadMetadata).toString = function () {
    return 'AtlasPayloadMetadata(offset=' + this.e1o_1.toString() + ', width=' + this.f1o_1 + ', height=' + this.g1o_1 + ', bpp=' + this.h1o_1 + ', pixelDataSize=' + this.i1o_1 + ', compressionType=' + this.j1o_1 + ')';
  };
  protoOf(AtlasPayloadMetadata).hashCode = function () {
    var result = this.e1o_1.hashCode();
    result = imul(result, 31) + this.f1o_1 | 0;
    result = imul(result, 31) + this.g1o_1 | 0;
    result = imul(result, 31) + this.h1o_1 | 0;
    result = imul(result, 31) + this.i1o_1 | 0;
    result = imul(result, 31) + this.j1o_1 | 0;
    return result;
  };
  protoOf(AtlasPayloadMetadata).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AtlasPayloadMetadata))
      return false;
    if (!equalsLong(this.e1o_1, other.e1o_1))
      return false;
    if (!(this.f1o_1 === other.f1o_1))
      return false;
    if (!(this.g1o_1 === other.g1o_1))
      return false;
    if (!(this.h1o_1 === other.h1o_1))
      return false;
    if (!(this.i1o_1 === other.i1o_1))
      return false;
    if (!(this.j1o_1 === other.j1o_1))
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
    var _iterator__ex2g4s = sortedAtlases.l();
    while (_iterator__ex2g4s.m()) {
      var atlas = _iterator__ex2g4s.n();
      var canvas = new Int8Array(imul(atlas.m1o_1, atlas.n1o_1));
      var _iterator__ex2g4s_0 = atlas.o1o_1.l();
      while (_iterator__ex2g4s_0.m()) {
        var entry = _iterator__ex2g4s_0.n();
        var img = entry.p1o_1;
        var inductionVariable = 0;
        var last = img.lx_1;
        if (inductionVariable < last)
          do {
            var y = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var inductionVariable_0 = 0;
            var last_0 = img.kx_1;
            if (inductionVariable_0 < last_0)
              do {
                var x = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                canvas[imul(entry.r1o_1 + y | 0, atlas.m1o_1) + (entry.q1o_1 + x | 0) | 0] = img.px_1[imul(y, img.kx_1) + x | 0];
              }
               while (inductionVariable_0 < last_0);
          }
           while (inductionVariable < last);
      }
      var uncompressedPixelData;
      if (atlas.l1o_1 === 4) {
        var packedSize = (imul(atlas.m1o_1, atlas.n1o_1) + 1 | 0) / 2 | 0;
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
        log('  Atlas ' + atlas.k1o_1 + ' (' + atlas.l1o_1 + 'bpp): RLE compressed ' + uncompressedPixelData.length + ' -> ' + rleData.length + ' bytes (saved ' + (uncompressedPixelData.length - rleData.length | 0) + ' bytes, ' + numberToInt(100.0 * (uncompressedPixelData.length - rleData.length | 0) / uncompressedPixelData.length) + '%)');
      } else {
        compressionType = 0;
        pixelData = uncompressedPixelData;
        log('  Atlas ' + atlas.k1o_1 + ' (' + atlas.l1o_1 + 'bpp): RLE not beneficial (' + uncompressedPixelData.length + ' -> ' + rleData.length + ' bytes), keeping uncompressed');
      }
      var tmp2 = atlas.k1o_1;
      // Inline function 'kotlin.collections.set' call
      var value = new AtlasPayloadMetadata(currentOffset, atlas.m1o_1, atlas.n1o_1, atlas.l1o_1, pixelData.length, compressionType);
      atlasMetadata.w1(tmp2, value);
      writer.bx(pixelData);
      var tmp0 = currentOffset;
      // Inline function 'kotlin.Long.plus' call
      var other = pixelData.length;
      currentOffset = add(tmp0, fromInt(other));
    }
    return to(writer.dx(), atlasMetadata);
  }
  function writeAtlasMetadataBytes(dw, uniqueTiles, tpagIdxToImageName, atlasEntryMap, clutIndexMap, atlasMetadata, cropInfoMap) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    var tpagCount = dw.vz_1.e1c_1.o();
    var tileCount = uniqueTiles.o();
    var atlasCount = atlasMetadata.o();
    var writer = new ByteWriter();
    writer.yw(0);
    writer.zw(tpagCount);
    writer.zw(tileCount);
    writer.zw(atlasCount);
    var _iterator__ex2g4s = sorted(atlasMetadata.z1()).l();
    while (_iterator__ex2g4s.m()) {
      var id = _iterator__ex2g4s.n();
      var meta = ensureNotNull(atlasMetadata.d2(id));
      writer.ax(convertToInt(meta.e1o_1));
      writer.zw(meta.f1o_1);
      writer.zw(meta.g1o_1);
      writer.yw(meta.h1o_1);
      writer.ax(meta.i1o_1);
      writer.yw(meta.j1o_1);
    }
    var inductionVariable = 0;
    if (inductionVariable < tpagCount)
      $l$loop: do {
        var tpagIdx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var imgName = tpagIdxToImageName.d2(tpagIdx);
        if (!(imgName == null)) {
          var pair = atlasEntryMap.d2(imgName);
          if (!(pair == null)) {
            var atlas = pair.gd();
            var entry = pair.hd();
            writer.zw(atlas.k1o_1);
            writer.zw(entry.q1o_1);
            writer.zw(entry.r1o_1);
            writer.zw(entry.p1o_1.kx_1);
            writer.zw(entry.p1o_1.lx_1);
            var crop = cropInfoMap.d2(imgName);
            var tmp1_elvis_lhs = crop == null ? null : crop.a1o_1;
            writer.zw(tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
            var tmp3_elvis_lhs = crop == null ? null : crop.b1o_1;
            writer.zw(tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs);
            var tmp5_elvis_lhs = crop == null ? null : crop.c1o_1;
            writer.zw(tmp5_elvis_lhs == null ? entry.p1o_1.kx_1 : tmp5_elvis_lhs);
            var tmp7_elvis_lhs = crop == null ? null : crop.d1o_1;
            writer.zw(tmp7_elvis_lhs == null ? entry.p1o_1.lx_1 : tmp7_elvis_lhs);
            var tmp8_elvis_lhs = clutIndexMap.d2(imgName);
            writer.zw(tmp8_elvis_lhs == null ? 0 : tmp8_elvis_lhs);
            continue $l$loop;
          }
        }
        writer.zw(65535);
        writer.zw(0);
        writer.zw(0);
        writer.zw(0);
        writer.zw(0);
        writer.zw(0);
        writer.zw(0);
        writer.zw(0);
        writer.zw(0);
        writer.zw(0);
      }
       while (inductionVariable < tpagCount);
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = uniqueTiles.a2().l();
    while (_iterator__ex2g4s_0.m()) {
      // Inline function 'kotlin.collections.component1' call
      var key = _iterator__ex2g4s_0.n().u1();
      var tmp;
      if (key.u1n_1) {
        var tmp9_elvis_lhs = dw.lz_1.a13_1.r(key.v1n_1).e12_1;
        tmp = tmp9_elvis_lhs == null ? 'spr' + key.v1n_1 : tmp9_elvis_lhs;
      } else {
        var tmp10_elvis_lhs = dw.mz_1.t13_1.r(key.v1n_1).b13_1;
        tmp = tmp10_elvis_lhs == null ? 'bg' + key.v1n_1 : tmp10_elvis_lhs;
      }
      var defName = tmp;
      var imgName_0 = 'tile/' + defName + '_' + key.w1n_1 + '_' + key.x1n_1 + '_' + key.y1n_1 + 'x' + key.z1n_1;
      var pair_0 = atlasEntryMap.d2(imgName_0);
      var atlas_0 = pair_0 == null ? null : pair_0.pd_1;
      var entry_0 = pair_0 == null ? null : pair_0.qd_1;
      writer.zw(key.v1n_1);
      writer.zw(key.w1n_1);
      writer.zw(key.x1n_1);
      writer.zw(key.y1n_1);
      writer.zw(key.z1n_1);
      var tmp14_elvis_lhs = atlas_0 == null ? null : atlas_0.k1o_1;
      writer.zw(tmp14_elvis_lhs == null ? 65535 : tmp14_elvis_lhs);
      var tmp16_elvis_lhs = entry_0 == null ? null : entry_0.q1o_1;
      writer.zw(tmp16_elvis_lhs == null ? 0 : tmp16_elvis_lhs);
      var tmp18_elvis_lhs = entry_0 == null ? null : entry_0.r1o_1;
      writer.zw(tmp18_elvis_lhs == null ? 0 : tmp18_elvis_lhs);
      var tmp20_safe_receiver = entry_0 == null ? null : entry_0.p1o_1;
      var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.kx_1;
      writer.zw(tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs);
      var tmp23_safe_receiver = entry_0 == null ? null : entry_0.p1o_1;
      var tmp24_elvis_lhs = tmp23_safe_receiver == null ? null : tmp23_safe_receiver.lx_1;
      writer.zw(tmp24_elvis_lhs == null ? 0 : tmp24_elvis_lhs);
      var crop_0 = cropInfoMap.d2(imgName_0);
      var tmp26_elvis_lhs = crop_0 == null ? null : crop_0.a1o_1;
      writer.zw(tmp26_elvis_lhs == null ? 0 : tmp26_elvis_lhs);
      var tmp28_elvis_lhs = crop_0 == null ? null : crop_0.b1o_1;
      writer.zw(tmp28_elvis_lhs == null ? 0 : tmp28_elvis_lhs);
      var tmp30_elvis_lhs = crop_0 == null ? null : crop_0.c1o_1;
      var tmp_0;
      if (tmp30_elvis_lhs == null) {
        var tmp32_safe_receiver = entry_0 == null ? null : entry_0.p1o_1;
        var tmp33_elvis_lhs = tmp32_safe_receiver == null ? null : tmp32_safe_receiver.kx_1;
        tmp_0 = tmp33_elvis_lhs == null ? 0 : tmp33_elvis_lhs;
      } else {
        tmp_0 = tmp30_elvis_lhs;
      }
      writer.zw(tmp_0);
      var tmp35_elvis_lhs = crop_0 == null ? null : crop_0.d1o_1;
      var tmp_1;
      if (tmp35_elvis_lhs == null) {
        var tmp37_safe_receiver = entry_0 == null ? null : entry_0.p1o_1;
        var tmp38_elvis_lhs = tmp37_safe_receiver == null ? null : tmp37_safe_receiver.lx_1;
        tmp_1 = tmp38_elvis_lhs == null ? 0 : tmp38_elvis_lhs;
      } else {
        tmp_1 = tmp35_elvis_lhs;
      }
      writer.zw(tmp_1);
      var tmp39_elvis_lhs = clutIndexMap.d2(imgName_0);
      writer.zw(tmp39_elvis_lhs == null ? 0 : tmp39_elvis_lhs);
    }
    return writer.dx();
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
      writer.yw(runLength);
      writer.yw(current & 255);
      i = i + runLength | 0;
    }
    return writer.dx();
  }
  function sam$kotlin_Comparator$0_3(function_0) {
    this.s1o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_3).wb = function (a, b) {
    return this.s1o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).compare = function (a, b) {
    return this.wb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).u2 = function () {
    return this.s1o_1;
  };
  protoOf(sam$kotlin_Comparator$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
  };
  function sam$kotlin_Comparator$0_4(function_0) {
    this.t1o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_4).wb = function (a, b) {
    return this.t1o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).compare = function (a, b) {
    return this.wb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).u2 = function () {
    return this.t1o_1;
  };
  protoOf(sam$kotlin_Comparator$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
  };
  function processDataWin$lambda(it) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    return Unit_instance;
  }
  function processDataWin$collectTile(dw, uniqueTiles, tile) {
    var defCount = tile.i1b_1 ? dw.lz_1.a13_1.o() : dw.mz_1.t13_1.o();
    if (0 > tile.j1b_1 || tile.j1b_1 >= defCount)
      return Unit_instance;
    var key = new TileKey(tile.i1b_1, tile.j1b_1, tile.k1b_1, tile.l1b_1, tile.m1b_1, tile.n1b_1);
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if (!(isInterface(uniqueTiles, KtMap) ? uniqueTiles : THROW_CCE()).b2(key)) {
      // Inline function 'kotlin.collections.set' call
      uniqueTiles.w1(key, tile);
    }
  }
  function processDataWin$TileSourceKey(useSpriteDefinition, defIndex) {
    this.u1o_1 = useSpriteDefinition;
    this.v1o_1 = defIndex;
  }
  protoOf(processDataWin$TileSourceKey).toString = function () {
    return 'TileSourceKey(useSpriteDefinition=' + this.u1o_1 + ', defIndex=' + this.v1o_1 + ')';
  };
  protoOf(processDataWin$TileSourceKey).hashCode = function () {
    var result = getBooleanHashCode(this.u1o_1);
    result = imul(result, 31) + this.v1o_1 | 0;
    return result;
  };
  protoOf(processDataWin$TileSourceKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof processDataWin$TileSourceKey))
      return false;
    if (!(this.u1o_1 === other.u1o_1))
      return false;
    if (!(this.v1o_1 === other.v1o_1))
      return false;
    return true;
  };
  function processDataWin$lambda_0(a, b) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.ly_1;
    var tmp$ret$1 = b.ly_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function processDataWin$lambda_1(a, b) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.ly_1;
    var tmp$ret$1 = b.ly_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function processDataWin$lambda_2(a, b) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.ly_1;
    var tmp$ret$1 = b.ly_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function processDataWin$slambda$slambda($entry, $audioDecoder, $log, $idx, resultContinuation) {
    this.e1p_1 = $entry;
    this.f1p_1 = $audioDecoder;
    this.g1p_1 = $log;
    this.h1p_1 = $idx;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda$slambda).j1p = function ($this$async, $completion) {
    var tmp = this.k1p($this$async, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(processDataWin$slambda$slambda).r8 = function (p1, $completion) {
    return this.j1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda$slambda).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 2;
            if (this.e1p_1.n1e_1 == null)
              return null;
            this.x7_1 = 1;
            suspendResult = this.f1p_1(this.e1p_1.n1e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var decoded = suspendResult;
            this.g1p_1('  Decoded embedded audio #' + this.h1p_1 + (decoded == null ? ' (FAILED)' : ''));
            return decoded;
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
  protoOf(processDataWin$slambda$slambda).k1p = function ($this$async, completion) {
    var i = new processDataWin$slambda$slambda(this.e1p_1, this.f1p_1, this.g1p_1, this.h1p_1, completion);
    i.i1p_1 = $this$async;
    return i;
  };
  function processDataWin$slambda$slambda_0($entry, $audioDecoder, $log, $idx, resultContinuation) {
    var i = new processDataWin$slambda$slambda($entry, $audioDecoder, $log, $idx, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.j1p($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$slambda($dw, $audioDecoder, $log, resultContinuation) {
    this.t1p_1 = $dw;
    this.u1p_1 = $audioDecoder;
    this.v1p_1 = $log;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda).x1p = function ($this$coroutineScope, $completion) {
    var tmp = this.k1p($this$coroutineScope, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(processDataWin$slambda).r8 = function (p1, $completion) {
    return this.x1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 2;
            this.x7_1 = 1;
            var this_0 = this.t1p_1.b10_1.b1d_1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var index = 0;
            var _iterator__ex2g4s = this_0.l();
            while (_iterator__ex2g4s.m()) {
              var item = _iterator__ex2g4s.n();
              var _unary__edvuaz = index;
              index = _unary__edvuaz + 1 | 0;
              var idx = checkIndexOverflow(_unary__edvuaz);
              var tmp_0 = Dispatchers_getInstance().dt_1;
              destination.g(async(this.w1p_1, tmp_0, VOID, processDataWin$slambda$slambda_0(item, this.u1p_1, this.v1p_1, idx, null)));
            }

            suspendResult = awaitAll(destination, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(processDataWin$slambda).k1p = function ($this$coroutineScope, completion) {
    var i = new processDataWin$slambda(this.t1p_1, this.u1p_1, this.v1p_1, completion);
    i.w1p_1 = $this$coroutineScope;
    return i;
  };
  function processDataWin$slambda_0($dw, $audioDecoder, $log, resultContinuation) {
    var i = new processDataWin$slambda($dw, $audioDecoder, $log, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.x1p($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$slambda$slambda_1($audioDecoder, $entry, $log, $label, resultContinuation) {
    this.g1q_1 = $audioDecoder;
    this.h1q_1 = $entry;
    this.i1q_1 = $log;
    this.j1q_1 = $label;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda$slambda_1).j1p = function ($this$async, $completion) {
    var tmp = this.k1p($this$async, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(processDataWin$slambda$slambda_1).r8 = function (p1, $completion) {
    return this.j1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda$slambda_1).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 2;
            this.x7_1 = 1;
            suspendResult = this.g1q_1(this.h1q_1.n1e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var decoded = suspendResult;
            this.i1q_1('  Decoded ' + this.j1q_1 + (decoded == null ? ' (FAILED)' : ''));
            return decoded;
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
  protoOf(processDataWin$slambda$slambda_1).k1p = function ($this$async, completion) {
    var i = new processDataWin$slambda$slambda_1(this.g1q_1, this.h1q_1, this.i1q_1, this.j1q_1, completion);
    i.k1q_1 = $this$async;
    return i;
  };
  function processDataWin$slambda$slambda_2($audioDecoder, $entry, $log, $label, resultContinuation) {
    var i = new processDataWin$slambda$slambda_1($audioDecoder, $entry, $log, $label, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.j1p($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$slambda_1($dw, $audioGroupAudo, $audioDecoder, $log, resultContinuation) {
    this.t1q_1 = $dw;
    this.u1q_1 = $audioGroupAudo;
    this.v1q_1 = $audioDecoder;
    this.w1q_1 = $log;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda_1).b1r = function ($this$coroutineScope, $completion) {
    var tmp = this.k1p($this$coroutineScope, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(processDataWin$slambda_1).r8 = function (p1, $completion) {
    return this.b1r((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda_1).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 4;
            var tmp0 = withIndex(this.t1q_1.jz_1.c12_1);
            var destination = ArrayList_init_$Create$_0();
            var _iterator__ex2g4s = tmp0.l();
            while (_iterator__ex2g4s.m()) {
              var element = _iterator__ex2g4s.n();
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                var sondIdx = element.gd();
                var sound = element.hd();
                if (sound.v1e_1 === 0) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                }
                var tmp0_elvis_lhs = this.u1q_1.d2(sound.v1e_1);
                var tmp_0;
                if (tmp0_elvis_lhs == null) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                } else {
                  tmp_0 = tmp0_elvis_lhs;
                }
                var groupAudo = tmp_0;
                if (0 > sound.w1e_1 || sound.w1e_1 >= groupAudo.b1d_1.o()) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                }
                var entry = groupAudo.b1d_1.r(sound.w1e_1);
                if (entry.n1e_1 == null) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                }
                var tmp1_elvis_lhs = sound.r1e_1;
                var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? sound.o1e_1 : tmp1_elvis_lhs;
                var label = tmp2_elvis_lhs == null ? 'audiogroup' + sound.v1e_1 + '/' + sound.w1e_1 : tmp2_elvis_lhs;
                var tmp_1 = Dispatchers_getInstance().dt_1;
                tmp$ret$0 = to(sondIdx, async(this.x1q_1, tmp_1, VOID, processDataWin$slambda$slambda_2(this.v1q_1, entry, this.w1q_1, label, null)));
              }
               while (false);
              var tmp0_safe_receiver = tmp$ret$0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination.g(tmp0_safe_receiver);
              }
            }

            this.y1q_1 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
            this.a1r_1 = destination.l();
            this.x7_1 = 1;
            continue $sm;
          case 1:
            if (!this.a1r_1.m()) {
              this.x7_1 = 3;
              continue $sm;
            }

            var item = this.a1r_1.n();
            this.z1q_1 = item.gd();
            var def = item.hd();
            this.x7_1 = 2;
            suspendResult = def.qm(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = to(this.z1q_1, ARGUMENT);
            this.y1q_1.g(ARGUMENT_0);
            this.x7_1 = 1;
            continue $sm;
          case 3:
            return this.y1q_1;
          case 4:
            throw this.a8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.y7_1 === 4) {
          throw e;
        } else {
          this.x7_1 = this.y7_1;
          this.a8_1 = e;
        }
      }
     while (true);
  };
  protoOf(processDataWin$slambda_1).k1p = function ($this$coroutineScope, completion) {
    var i = new processDataWin$slambda_1(this.t1q_1, this.u1q_1, this.v1q_1, this.w1q_1, completion);
    i.x1q_1 = $this$coroutineScope;
    return i;
  };
  function processDataWin$slambda_2($dw, $audioGroupAudo, $audioDecoder, $log, resultContinuation) {
    var i = new processDataWin$slambda_1($dw, $audioGroupAudo, $audioDecoder, $log, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.b1r($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$slambda$slambda_3($audioDecoder, $fileData, $log, $sound, resultContinuation) {
    this.k1r_1 = $audioDecoder;
    this.l1r_1 = $fileData;
    this.m1r_1 = $log;
    this.n1r_1 = $sound;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda$slambda_3).j1p = function ($this$async, $completion) {
    var tmp = this.k1p($this$async, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(processDataWin$slambda$slambda_3).r8 = function (p1, $completion) {
    return this.j1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda$slambda_3).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 2;
            this.x7_1 = 1;
            suspendResult = this.k1r_1(this.l1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var decoded = suspendResult;
            this.m1r_1('  Decoded ' + this.n1r_1.r1e_1 + (decoded == null ? ' (FAILED)' : ''));
            return decoded;
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
  protoOf(processDataWin$slambda$slambda_3).k1p = function ($this$async, completion) {
    var i = new processDataWin$slambda$slambda_3(this.k1r_1, this.l1r_1, this.m1r_1, this.n1r_1, completion);
    i.o1r_1 = $this$async;
    return i;
  };
  function processDataWin$slambda$slambda_4($audioDecoder, $fileData, $log, $sound, resultContinuation) {
    var i = new processDataWin$slambda$slambda_3($audioDecoder, $fileData, $log, $sound, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.j1p($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$slambda_3($dw, $externalAudoMap, $externalAudioFiles, $audioDecoder, $log, resultContinuation) {
    this.x1r_1 = $dw;
    this.y1r_1 = $externalAudoMap;
    this.z1r_1 = $externalAudioFiles;
    this.a1s_1 = $audioDecoder;
    this.b1s_1 = $log;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda_3).b1r = function ($this$coroutineScope, $completion) {
    var tmp = this.k1p($this$coroutineScope, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(processDataWin$slambda_3).r8 = function (p1, $completion) {
    return this.b1r((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda_3).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 4;
            var tmp0 = withIndex(this.x1r_1.jz_1.c12_1);
            var destination = ArrayList_init_$Create$_0();
            var _iterator__ex2g4s = tmp0.l();
            while (_iterator__ex2g4s.m()) {
              var element = _iterator__ex2g4s.n();
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                var sondIdx = element.gd();
                var sound = element.hd();
                var isEmbedded = !((sound.p1e_1 & 1) === 0);
                if (isEmbedded) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                }
                if (this.y1r_1.b2(sondIdx)) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                }
                var tmp0_elvis_lhs = sound.r1e_1;
                var tmp_0;
                if (tmp0_elvis_lhs == null) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                } else {
                  tmp_0 = tmp0_elvis_lhs;
                }
                var fileName = tmp_0;
                var tmp1_elvis_lhs = this.z1r_1.d2(fileName);
                var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? this.z1r_1.d2(fileName + '.ogg') : tmp1_elvis_lhs;
                var tmp3_elvis_lhs = tmp2_elvis_lhs == null ? this.z1r_1.d2(fileName + '.wav') : tmp2_elvis_lhs;
                var tmp_1;
                if (tmp3_elvis_lhs == null) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                } else {
                  tmp_1 = tmp3_elvis_lhs;
                }
                var fileData = tmp_1;
                var tmp_2 = Dispatchers_getInstance().dt_1;
                tmp$ret$0 = to(sondIdx, async(this.c1s_1, tmp_2, VOID, processDataWin$slambda$slambda_4(this.a1s_1, fileData, this.b1s_1, sound, null)));
              }
               while (false);
              var tmp0_safe_receiver = tmp$ret$0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination.g(tmp0_safe_receiver);
              }
            }

            this.d1s_1 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
            this.f1s_1 = destination.l();
            this.x7_1 = 1;
            continue $sm;
          case 1:
            if (!this.f1s_1.m()) {
              this.x7_1 = 3;
              continue $sm;
            }

            var item = this.f1s_1.n();
            this.e1s_1 = item.gd();
            var def = item.hd();
            this.x7_1 = 2;
            suspendResult = def.qm(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = to(this.e1s_1, ARGUMENT);
            this.d1s_1.g(ARGUMENT_0);
            this.x7_1 = 1;
            continue $sm;
          case 3:
            return this.d1s_1;
          case 4:
            throw this.a8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.y7_1 === 4) {
          throw e;
        } else {
          this.x7_1 = this.y7_1;
          this.a8_1 = e;
        }
      }
     while (true);
  };
  protoOf(processDataWin$slambda_3).k1p = function ($this$coroutineScope, completion) {
    var i = new processDataWin$slambda_3(this.x1r_1, this.y1r_1, this.z1r_1, this.a1s_1, this.b1s_1, completion);
    i.c1s_1 = $this$coroutineScope;
    return i;
  };
  function processDataWin$slambda_4($dw, $externalAudoMap, $externalAudioFiles, $audioDecoder, $log, resultContinuation) {
    var i = new processDataWin$slambda_3($dw, $externalAudoMap, $externalAudioFiles, $audioDecoder, $log, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.b1r($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$MusEntry(path, audio) {
    this.g1s_1 = path;
    this.h1s_1 = audio;
  }
  protoOf(processDataWin$MusEntry).toString = function () {
    return 'MusEntry(path=' + this.g1s_1 + ', audio=' + this.h1s_1.toString() + ')';
  };
  protoOf(processDataWin$MusEntry).hashCode = function () {
    var result = getStringHashCode(this.g1s_1);
    result = imul(result, 31) + this.h1s_1.hashCode() | 0;
    return result;
  };
  protoOf(processDataWin$MusEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof processDataWin$MusEntry))
      return false;
    if (!(this.g1s_1 === other.g1s_1))
      return false;
    if (!this.h1s_1.equals(other.h1s_1))
      return false;
    return true;
  };
  function processDataWin$slambda$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.u1();
    var tmp$ret$1 = b.u1();
    return compareValues(tmp, tmp$ret$1);
  }
  function processDataWin$slambda$slambda_5($audioDecoder, $fileData, $log, $path, resultContinuation) {
    this.q1s_1 = $audioDecoder;
    this.r1s_1 = $fileData;
    this.s1s_1 = $log;
    this.t1s_1 = $path;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda$slambda_5).j1p = function ($this$async, $completion) {
    var tmp = this.k1p($this$async, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(processDataWin$slambda$slambda_5).r8 = function (p1, $completion) {
    return this.j1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda$slambda_5).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 2;
            this.x7_1 = 1;
            suspendResult = this.q1s_1(this.r1s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var decoded = suspendResult;
            if (!(decoded == null)) {
              this.s1s_1('  ' + this.t1s_1 + ': ' + decoded.o1i_1 + 'Hz ' + decoded.p1i_1 + 'ch -> ADPCM (' + decoded.r1i_1.length + ' bytes)');
            } else {
              this.s1s_1('  ' + this.t1s_1 + ': FAILED to decode');
            }

            return decoded;
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
  protoOf(processDataWin$slambda$slambda_5).k1p = function ($this$async, completion) {
    var i = new processDataWin$slambda$slambda_5(this.q1s_1, this.r1s_1, this.s1s_1, this.t1s_1, completion);
    i.u1s_1 = $this$async;
    return i;
  };
  function processDataWin$slambda$slambda_6($audioDecoder, $fileData, $log, $path, resultContinuation) {
    var i = new processDataWin$slambda$slambda_5($audioDecoder, $fileData, $log, $path, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.j1p($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function processDataWin$slambda_5($musFiles, $audioDecoder, $log, resultContinuation) {
    this.d1t_1 = $musFiles;
    this.e1t_1 = $audioDecoder;
    this.f1t_1 = $log;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(processDataWin$slambda_5).k1t = function ($this$coroutineScope, $completion) {
    var tmp = this.k1p($this$coroutineScope, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(processDataWin$slambda_5).r8 = function (p1, $completion) {
    return this.k1t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(processDataWin$slambda_5).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 4;
            var this_0 = this.d1t_1.a2();
            var tmp_0 = processDataWin$slambda$lambda;
            var this_1 = sortedWith(this_0, new sam$kotlin_Comparator$0_3(tmp_0));
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
            var _iterator__ex2g4s = this_1.l();
            while (_iterator__ex2g4s.m()) {
              var item = _iterator__ex2g4s.n();
              var path = item.u1();
              var fileData = item.v1();
              var tmp_1 = Dispatchers_getInstance().dt_1;
              destination.g(to(path, async(this.g1t_1, tmp_1, VOID, processDataWin$slambda$slambda_6(this.e1t_1, fileData, this.f1t_1, path, null))));
            }

            this.h1t_1 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
            this.j1t_1 = destination.l();
            this.x7_1 = 1;
            continue $sm;
          case 1:
            if (!this.j1t_1.m()) {
              this.x7_1 = 3;
              continue $sm;
            }

            var item_0 = this.j1t_1.n();
            this.i1t_1 = item_0.gd();
            var def = item_0.hd();
            this.x7_1 = 2;
            suspendResult = def.qm(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = to(this.i1t_1, ARGUMENT);
            this.h1t_1.g(ARGUMENT_0);
            this.x7_1 = 1;
            continue $sm;
          case 3:
            return this.h1t_1;
          case 4:
            throw this.a8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.y7_1 === 4) {
          throw e;
        } else {
          this.x7_1 = this.y7_1;
          this.a8_1 = e;
        }
      }
     while (true);
  };
  protoOf(processDataWin$slambda_5).k1p = function ($this$coroutineScope, completion) {
    var i = new processDataWin$slambda_5(this.d1t_1, this.e1t_1, this.f1t_1, completion);
    i.g1t_1 = $this$coroutineScope;
    return i;
  };
  function processDataWin$slambda_6($musFiles, $audioDecoder, $log, resultContinuation) {
    var i = new processDataWin$slambda_5($musFiles, $audioDecoder, $log, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.k1t($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function writeTexturePagesBytes$lambda(a, b) {
    _init_properties_ProcessingPipeline_kt__6atp9x();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.k1o_1;
    var tmp$ret$1 = b.k1o_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function $processDataWinCOROUTINE$(dataWinBytes, externalAudioFiles, audioGroupFiles, musFiles, force4bppPatterns, atlasSize, audioDecoder, progressCallback, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1m_1 = dataWinBytes;
    this.v1m_1 = externalAudioFiles;
    this.w1m_1 = audioGroupFiles;
    this.x1m_1 = musFiles;
    this.y1m_1 = force4bppPatterns;
    this.z1m_1 = atlasSize;
    this.a1n_1 = audioDecoder;
    this.b1n_1 = progressCallback;
  }
  protoOf($processDataWinCOROUTINE$).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 10;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.b1n_1;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              tmp_1 = processDataWin$lambda;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.i1n_1 = tmp_1;
            this.i1n_1('Parsing data.win...');
            this.h1n_1 = Companion_instance.c1d(this.u1m_1, new DataWinParserOptions(true, false, false, false, true, false, true, true, false, false, false, false, true, false, false, true, true, false, false, false, true, true, true, true));
            this.i1n_1('Parsed: ' + this.h1n_1.lz_1.a13_1.o() + ' sprites, ' + this.h1n_1.mz_1.t13_1.o() + ' backgrounds, ' + this.h1n_1.rz_1.j16_1.o() + ' fonts, ' + this.h1n_1.a10_1.a1d_1.o() + ' textures, ' + this.h1n_1.vz_1.e1c_1.o() + ' TPAG items');
            this.i1n_1('Loading texture pages...');
            var tmp_2 = this;
            tmp_2.q1n_1 = ArrayList_init_$Create$_0();
            this.s1n_1 = this.h1n_1.z12(2022, 5, 0, 0);
            this.t1n_1 = this.h1n_1.a10_1.a1d_1.l();
            this.x7_1 = 1;
            continue $sm;
          case 1:
            if (!this.t1n_1.m()) {
              this.x7_1 = 4;
              continue $sm;
            }

            var tex = this.t1n_1.n();
            if (!(tex.f1e_1 == null)) {
              this.x7_1 = 2;
              suspendResult = decodeImageBytes(tex.f1e_1, this.s1n_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_3 = this;
              tmp_3.r1n_1 = this.q1n_1.g(null);
              this.x7_1 = 3;
              continue $sm;
            }

          case 2:
            var ARGUMENT = suspendResult;
            this.r1n_1 = this.q1n_1.g(ARGUMENT);
            this.x7_1 = 3;
            continue $sm;
          case 3:
            this.x7_1 = 1;
            continue $sm;
          case 4:
            var tmp0 = this.q1n_1;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp_4;
              if (isInterface(tmp0, Collection)) {
                tmp_4 = tmp0.t();
              } else {
                tmp_4 = false;
              }
              if (tmp_4) {
                tmp$ret$0 = 0;
                break l$ret$1;
              }
              var count = 0;
              var _iterator__ex2g4s = tmp0.l();
              while (_iterator__ex2g4s.m()) {
                var element = _iterator__ex2g4s.n();
                if (!(element == null)) {
                  count = count + 1 | 0;
                  checkCountOverflow(count);
                }
              }
              tmp$ret$0 = count;
            }
             while (false);
            this.i1n_1('Loaded ' + tmp$ret$0 + ' texture pages');
            var allImages = ArrayList_init_$Create$_0();
            var atlasGroupKeys = HashMap_init_$Create$_0();
            var tpagIndexMap = HashMap_init_$Create$_0();
            var iterator = this.h1n_1.lz_1.a13_1.l();
            var index = 0;
            while (iterator.m()) {
              var sprIdx = index;
              index = index + 1 | 0;
              var sprite = iterator.n();
              var tmp1_elvis_lhs = sprite.e12_1;
              var name = tmp1_elvis_lhs == null ? 'sprite_' + sprIdx : tmp1_elvis_lhs;
              var groupKey = getAtlasGroupKey(name);
              var indexedObject = sprite.x12_1;
              var inductionVariable = 0;
              var last = indexedObject.length;
              $l$loop: while (inductionVariable < last) {
                var frameIdx = inductionVariable;
                var texOffset = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                var tpagIdx = this.h1n_1.b1e(texOffset);
                if (0 > tpagIdx)
                  continue $l$loop;
                var img = extractFromTPAG(this.h1n_1.vz_1.e1c_1.r(tpagIdx), this.q1n_1);
                var imgName = sprite.x12_1.length > 1 ? 'spr/' + name + '_' + frameIdx : 'spr/' + name;
                allImages.g(to(imgName, img));
                atlasGroupKeys.w1(imgName, groupKey);
                tpagIndexMap.w1(imgName, tpagIdx);
              }
            }

            var iterator_0 = this.h1n_1.mz_1.t13_1.l();
            var index_0 = 0;
            $l$loop_0: while (iterator_0.m()) {
              var bgIdx = index_0;
              index_0 = index_0 + 1 | 0;
              var bg = iterator_0.n();
              var tmp2_elvis_lhs = bg.b13_1;
              var name_0 = tmp2_elvis_lhs == null ? 'bg_' + bgIdx : tmp2_elvis_lhs;
              var tpagIdx_0 = this.h1n_1.b1e(bg.f13_1);
              if (0 > tpagIdx_0)
                continue $l$loop_0;
              var imgName_0 = 'bg/' + name_0;
              allImages.g(to(imgName_0, extractFromTPAG(this.h1n_1.vz_1.e1c_1.r(tpagIdx_0), this.q1n_1)));
              atlasGroupKeys.w1(imgName_0, imgName_0);
              tpagIndexMap.w1(imgName_0, tpagIdx_0);
            }

            var iterator_1 = this.h1n_1.rz_1.j16_1.l();
            var index_1 = 0;
            $l$loop_1: while (iterator_1.m()) {
              var fontIdx = index_1;
              index_1 = index_1 + 1 | 0;
              var font = iterator_1.n();
              var tmp3_elvis_lhs = font.e15_1;
              var name_1 = tmp3_elvis_lhs == null ? 'font_' + fontIdx : tmp3_elvis_lhs;
              var tpagIdx_1 = this.h1n_1.b1e(font.n15_1);
              if (0 > tpagIdx_1)
                continue $l$loop_1;
              var imgName_1 = 'font/' + name_1;
              allImages.g(to(imgName_1, extractFromTPAG(this.h1n_1.vz_1.e1c_1.r(tpagIdx_1), this.q1n_1)));
              atlasGroupKeys.w1(imgName_1, imgName_1);
              tpagIndexMap.w1(imgName_1, tpagIdx_1);
            }

            var uniqueTiles = LinkedHashMap_init_$Create$();
            var _iterator__ex2g4s_0 = this.h1n_1.uz_1.f1b_1.l();
            while (_iterator__ex2g4s_0.m()) {
              var room = _iterator__ex2g4s_0.n();
              var _iterator__ex2g4s_1 = room.e18_1.l();
              while (_iterator__ex2g4s_1.m()) {
                var tile = _iterator__ex2g4s_1.n();
                processDataWin$collectTile(this.h1n_1, uniqueTiles, tile);
              }
              var _iterator__ex2g4s_2 = room.f18_1.l();
              $l$loop_2: while (_iterator__ex2g4s_2.m()) {
                var layer = _iterator__ex2g4s_2.n();
                var tmp4_elvis_lhs = layer.z19_1;
                var tmp_5;
                if (tmp4_elvis_lhs == null) {
                  continue $l$loop_2;
                } else {
                  tmp_5 = tmp4_elvis_lhs;
                }
                var assets = tmp_5;
                var _iterator__ex2g4s_3 = assets.o1a_1.l();
                while (_iterator__ex2g4s_3.m()) {
                  var tile_0 = _iterator__ex2g4s_3.n();
                  processDataWin$collectTile(this.h1n_1, uniqueTiles, tile_0);
                }
              }
            }

            var tileSourceImages = HashMap_init_$Create$_0();
            var _iterator__ex2g4s_4 = uniqueTiles.a2().l();
            $l$loop_5: while (_iterator__ex2g4s_4.m()) {
              var key = _iterator__ex2g4s_4.n().u1();
              var srcKey = new processDataWin$TileSourceKey(key.u1n_1, key.v1n_1);
              if (tileSourceImages.b2(srcKey))
                continue $l$loop_5;
              var tmp_6;
              if (key.u1n_1) {
                var sprite_0 = this.h1n_1.lz_1.a13_1.r(key.v1n_1);
                if (sprite_0.x12_1.length === 0)
                  continue $l$loop_5;
                tmp_6 = this.h1n_1.b1e(sprite_0.x12_1[0]);
              } else {
                var bg_0 = this.h1n_1.mz_1.t13_1.r(key.v1n_1);
                tmp_6 = this.h1n_1.b1e(bg_0.f13_1);
              }
              var tpagIdx_2 = tmp_6;
              if (0 > tpagIdx_2)
                continue $l$loop_5;
              var value = extractFromTPAG(this.h1n_1.vz_1.e1c_1.r(tpagIdx_2), this.q1n_1);
              tileSourceImages.w1(srcKey, value);
            }

            var clampedTileCount = 0;
            var _iterator__ex2g4s_5 = uniqueTiles.a2().l();
            $l$loop_9: while (_iterator__ex2g4s_5.m()) {
              var key_0 = _iterator__ex2g4s_5.n().u1();
              var srcKey_0 = new processDataWin$TileSourceKey(key_0.u1n_1, key_0.v1n_1);
              var tmp5_elvis_lhs = tileSourceImages.d2(srcKey_0);
              var tmp_7;
              if (tmp5_elvis_lhs == null) {
                continue $l$loop_9;
              } else {
                tmp_7 = tmp5_elvis_lhs;
              }
              var srcImg = tmp_7;
              if (0 > key_0.w1n_1 || 0 > key_0.x1n_1)
                continue $l$loop_9;
              if (key_0.w1n_1 >= srcImg.gy_1 || key_0.x1n_1 >= srcImg.hy_1)
                continue $l$loop_9;
              if (key_0.y1n_1 === 0 || key_0.z1n_1 === 0)
                continue $l$loop_9;
              var tmp0_0 = key_0.y1n_1;
              var b = srcImg.gy_1 - key_0.w1n_1 | 0;
              var effW = Math.min(tmp0_0, b);
              var tmp0_1 = key_0.z1n_1;
              var b_0 = srcImg.hy_1 - key_0.x1n_1 | 0;
              var effH = Math.min(tmp0_1, b_0);
              if (!(effW === key_0.y1n_1) || !(effH === key_0.z1n_1)) {
                clampedTileCount = clampedTileCount + 1 | 0;
              }
              var tileImg = extractSubImage(srcImg, key_0.w1n_1, key_0.x1n_1, effW, effH);
              var tmp_8;
              if (key_0.u1n_1) {
                var tmp6_elvis_lhs = this.h1n_1.lz_1.a13_1.r(key_0.v1n_1).e12_1;
                tmp_8 = tmp6_elvis_lhs == null ? 'spr' + key_0.v1n_1 : tmp6_elvis_lhs;
              } else {
                var tmp7_elvis_lhs = this.h1n_1.mz_1.t13_1.r(key_0.v1n_1).b13_1;
                tmp_8 = tmp7_elvis_lhs == null ? 'bg' + key_0.v1n_1 : tmp7_elvis_lhs;
              }
              var defName = tmp_8;
              var imgName_2 = 'tile/' + defName + '_' + key_0.w1n_1 + '_' + key_0.x1n_1 + '_' + key_0.y1n_1 + 'x' + key_0.z1n_1;
              allImages.g(to(imgName_2, tileImg));
              var value_0 = 'tile/' + defName;
              atlasGroupKeys.w1(imgName_2, value_0);
            }

            if (clampedTileCount > 0) {
              this.i1n_1('Clamped ' + clampedTileCount + ' tiles whose source rect exceeded the background');
            }

            var cropInfoMap = HashMap_init_$Create$_0();
            var croppedCount = 0;
            var inductionVariable_0 = 0;
            var last_0 = allImages.o() - 1 | 0;
            if (inductionVariable_0 <= last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var _destruct__k2r9zo = allImages.r(i);
                var name_2 = _destruct__k2r9zo.gd();
                var img_0 = _destruct__k2r9zo.hd();
                if (startsWith(name_2, 'spr/')) {
                  var crop = cropTransparentBorders(img_0);
                  var value_1 = new CropInfo(crop.l1i_1, crop.m1i_1, crop.k1i_1.gy_1, crop.k1i_1.hy_1);
                  cropInfoMap.w1(name_2, value_1);
                  if (!(crop.k1i_1.gy_1 === img_0.gy_1) || !(crop.k1i_1.hy_1 === img_0.hy_1)) {
                    croppedCount = croppedCount + 1 | 0;
                  }
                  allImages.g2(i, to(name_2, crop.k1i_1));
                } else {
                  var value_2 = new CropInfo(0, 0, img_0.gy_1, img_0.hy_1);
                  cropInfoMap.w1(name_2, value_2);
                }
              }
               while (inductionVariable_0 <= last_0);
            if (croppedCount > 0) {
              this.i1n_1('Cropped transparent borders from ' + croppedCount + ' sprite images');
            }

            var resizedCount = 0;
            var inductionVariable_1 = 0;
            var last_1 = allImages.o() - 1 | 0;
            if (inductionVariable_1 <= last_1)
              $l$loop_10: do {
                var i_0 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                var _destruct__k2r9zo_0 = allImages.r(i_0);
                var name_3 = _destruct__k2r9zo_0.gd();
                var img_1 = _destruct__k2r9zo_0.hd();
                var tmp_9;
                if (startsWith(name_3, 'font/')) {
                  tmp_9 = this.z1m_1;
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
                  tmp_9 = this.z1m_1;
                }
                var maxDim = tmp_9;
                if (maxDim >= img_1.gy_1 && maxDim >= img_1.hy_1)
                  continue $l$loop_10;
                var tmp0_2 = maxDim / img_1.gy_1;
                var b_1 = maxDim / img_1.hy_1;
                var scale = Math.min(tmp0_2, b_1);
                var a = numberToInt(img_1.gy_1 * scale);
                var newW = Math.max(a, 1);
                var a_0 = numberToInt(img_1.hy_1 * scale);
                var newH = Math.max(a_0, 1);
                var resizedPixels = new Int32Array(imul(newW, newH));
                var inductionVariable_2 = 0;
                if (inductionVariable_2 < newH)
                  do {
                    var y = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var srcY = imul(y, img_1.hy_1) / newH | 0;
                    var inductionVariable_3 = 0;
                    if (inductionVariable_3 < newW)
                      do {
                        var x = inductionVariable_3;
                        inductionVariable_3 = inductionVariable_3 + 1 | 0;
                        var srcX = imul(x, img_1.gy_1) / newW | 0;
                        resizedPixels[imul(y, newW) + x | 0] = img_1.iy_1[imul(srcY, img_1.gy_1) + srcX | 0];
                      }
                       while (inductionVariable_3 < newW);
                  }
                   while (inductionVariable_2 < newH);
                allImages.g2(i_0, to(name_3, new PixelImage(newW, newH, resizedPixels)));
                resizedCount = resizedCount + 1 | 0;
              }
               while (inductionVariable_1 <= last_1);
            if (resizedCount > 0) {
              this.i1n_1('Resized ' + resizedCount + ' images to fit');
            }

            this.i1n_1('Total images to process: ' + allImages.o());
            this.i1n_1('Creating CLUTs...');
            var this_0 = this.y1m_1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var _iterator__ex2g4s_6 = this_0.l();
            while (_iterator__ex2g4s_6.m()) {
              var item = _iterator__ex2g4s_6.n();
              destination.g(Regex_init_$Create$(item));
            }

            var force4bppMatchers = destination;
            var clutImages = ArrayList_init_$Create$_0();
            var forced4bppCount = 0;
            var _iterator__ex2g4s_7 = allImages.l();
            while (_iterator__ex2g4s_7.m()) {
              var _destruct__k2r9zo_1 = _iterator__ex2g4s_7.n();
              var name_4 = _destruct__k2r9zo_1.gd();
              var img_2 = _destruct__k2r9zo_1.hd();
              var tmp$ret$2;
              l$ret$3: do {
                var tmp_10;
                if (isInterface(force4bppMatchers, Collection)) {
                  tmp_10 = force4bppMatchers.t();
                } else {
                  tmp_10 = false;
                }
                if (tmp_10) {
                  tmp$ret$2 = false;
                  break l$ret$3;
                }
                var _iterator__ex2g4s_8 = force4bppMatchers.l();
                while (_iterator__ex2g4s_8.m()) {
                  var element_0 = _iterator__ex2g4s_8.n();
                  if (element_0.eb(name_4)) {
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
              var clutImage = ClutProcessor_instance.fy(name_4, img_2, force4bpp);
              clutImages.g(clutImage);
            }

            if (!force4bppMatchers.t()) {
              this.i1n_1('  Forced ' + forced4bppCount + ' images to 4bpp via ' + force4bppMatchers.o() + ' pattern(s)');
            }

            var tmp$ret$4;
            l$ret$5: do {
              var tmp_11;
              if (isInterface(clutImages, Collection)) {
                tmp_11 = clutImages.t();
              } else {
                tmp_11 = false;
              }
              if (tmp_11) {
                tmp$ret$4 = 0;
                break l$ret$5;
              }
              var count_0 = 0;
              var _iterator__ex2g4s_9 = clutImages.l();
              while (_iterator__ex2g4s_9.m()) {
                var element_1 = _iterator__ex2g4s_9.n();
                if (element_1.mx_1 === 4) {
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
                tmp_12 = clutImages.t();
              } else {
                tmp_12 = false;
              }
              if (tmp_12) {
                tmp$ret$6 = 0;
                break l$ret$7;
              }
              var count_1 = 0;
              var _iterator__ex2g4s_10 = clutImages.l();
              while (_iterator__ex2g4s_10.m()) {
                var element_2 = _iterator__ex2g4s_10.n();
                if (element_2.mx_1 === 8) {
                  count_1 = count_1 + 1 | 0;
                  checkCountOverflow(count_1);
                }
              }
              tmp$ret$6 = count_1;
            }
             while (false);
            var bpp8Count = tmp$ret$6;
            this.i1n_1('  4bpp: ' + bpp4Count + ' images, 8bpp: ' + bpp8Count + ' images');
            this.i1n_1('Deduplicating CLUTs...');
            var dedupGroups = ClutProcessor_instance.ky(clutImages);
            this.i1n_1('  After dedup: ' + dedupGroups.o() + ' unique CLUTs (from ' + clutImages.o() + ' images)');
            this.i1n_1('Merging CLUTs...');
            var mergedGroups = ClutProcessor_instance.qy(clutImages, dedupGroups);
            var tmp$ret$8;
            l$ret$9: do {
              var tmp_13;
              if (isInterface(mergedGroups, Collection)) {
                tmp_13 = mergedGroups.t();
              } else {
                tmp_13 = false;
              }
              if (tmp_13) {
                tmp$ret$8 = 0;
                break l$ret$9;
              }
              var count_2 = 0;
              var _iterator__ex2g4s_11 = mergedGroups.l();
              while (_iterator__ex2g4s_11.m()) {
                var element_3 = _iterator__ex2g4s_11.n();
                if (element_3.my_1 === 4) {
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
                tmp_14 = mergedGroups.t();
              } else {
                tmp_14 = false;
              }
              if (tmp_14) {
                tmp$ret$10 = 0;
                break l$ret$11;
              }
              var count_3 = 0;
              var _iterator__ex2g4s_12 = mergedGroups.l();
              while (_iterator__ex2g4s_12.m()) {
                var element_4 = _iterator__ex2g4s_12.n();
                if (element_4.my_1 === 8) {
                  count_3 = count_3 + 1 | 0;
                  checkCountOverflow(count_3);
                }
              }
              tmp$ret$10 = count_3;
            }
             while (false);
            var merged8 = tmp$ret$10;
            this.i1n_1('  After merge: ' + merged4 + ' merged 4bpp CLUTs, ' + merged8 + ' merged 8bpp CLUTs (' + mergedGroups.o() + ' total)');
            this.i1n_1('Packing texture atlases...');
            this.c1n_1 = TextureAtlasPacker_instance.m1t(clutImages, atlasGroupKeys, this.z1m_1);
            var tmp0_3 = this.c1n_1;
            var tmp$ret$12;
            l$ret$13: do {
              var tmp_15;
              if (isInterface(tmp0_3, Collection)) {
                tmp_15 = tmp0_3.t();
              } else {
                tmp_15 = false;
              }
              if (tmp_15) {
                tmp$ret$12 = 0;
                break l$ret$13;
              }
              var count_4 = 0;
              var _iterator__ex2g4s_13 = tmp0_3.l();
              while (_iterator__ex2g4s_13.m()) {
                var element_5 = _iterator__ex2g4s_13.n();
                if (element_5.l1o_1 === 4) {
                  count_4 = count_4 + 1 | 0;
                  checkCountOverflow(count_4);
                }
              }
              tmp$ret$12 = count_4;
            }
             while (false);
            var tmp_16 = tmp$ret$12;
            var tmp0_4 = this.c1n_1;
            var tmp$ret$14;
            l$ret$15: do {
              var tmp_17;
              if (isInterface(tmp0_4, Collection)) {
                tmp_17 = tmp0_4.t();
              } else {
                tmp_17 = false;
              }
              if (tmp_17) {
                tmp$ret$14 = 0;
                break l$ret$15;
              }
              var count_5 = 0;
              var _iterator__ex2g4s_14 = tmp0_4.l();
              while (_iterator__ex2g4s_14.m()) {
                var element_6 = _iterator__ex2g4s_14.n();
                if (element_6.l1o_1 === 8) {
                  count_5 = count_5 + 1 | 0;
                  checkCountOverflow(count_5);
                }
              }
              tmp$ret$14 = count_5;
            }
             while (false);
            this.i1n_1('  ' + tmp_16 + ' 4bpp atlases, ' + tmp$ret$14 + ' 8bpp atlases (' + this.c1n_1.o() + ' total)');
            this.i1n_1('Writing CLUT binaries...');
            var tmp_18 = this;
            var destination_0 = ArrayList_init_$Create$_0();
            var _iterator__ex2g4s_15 = mergedGroups.l();
            while (_iterator__ex2g4s_15.m()) {
              var element_7 = _iterator__ex2g4s_15.n();
              if (element_7.my_1 === 4) {
                destination_0.g(element_7);
              }
            }

            var tmp_19 = processDataWin$lambda_0;
            tmp_18.g1n_1 = writeClutBinary(sortedWith(destination_0, new sam$kotlin_Comparator$0_3(tmp_19)), 16);
            var tmp_20 = this;
            var destination_1 = ArrayList_init_$Create$_0();
            var _iterator__ex2g4s_16 = mergedGroups.l();
            while (_iterator__ex2g4s_16.m()) {
              var element_8 = _iterator__ex2g4s_16.n();
              if (element_8.my_1 === 8) {
                destination_1.g(element_8);
              }
            }

            var tmp_21 = processDataWin$lambda_1;
            tmp_20.f1n_1 = writeClutBinary(sortedWith(destination_1, new sam$kotlin_Comparator$0_3(tmp_21)), 256);
            this.i1n_1('Writing texture pages...');
            var _destruct__k2r9zo_2 = writeTexturePagesBytes(this.c1n_1, this.i1n_1);
            this.e1n_1 = _destruct__k2r9zo_2.gd();
            var atlasMetadata = _destruct__k2r9zo_2.hd();
            this.i1n_1('Writing ATLAS.BIN...');
            var clutIndexMap = HashMap_init_$Create$_0();
            var clut4Idx = 0;
            var clut8Idx = 0;
            var tmp_22 = processDataWin$lambda_2;
            var _iterator__ex2g4s_17 = sortedWith(mergedGroups, new sam$kotlin_Comparator$0_3(tmp_22)).l();
            while (_iterator__ex2g4s_17.m()) {
              var group = _iterator__ex2g4s_17.n();
              var tmp_23;
              if (group.my_1 === 4) {
                var _unary__edvuaz = clut4Idx;
                clut4Idx = _unary__edvuaz + 1 | 0;
                tmp_23 = _unary__edvuaz;
              } else {
                var _unary__edvuaz_0 = clut8Idx;
                clut8Idx = _unary__edvuaz_0 + 1 | 0;
                tmp_23 = _unary__edvuaz_0;
              }
              var idx = tmp_23;
              var _iterator__ex2g4s_18 = group.py_1.l();
              while (_iterator__ex2g4s_18.m()) {
                var name_5 = _iterator__ex2g4s_18.n();
                clutIndexMap.w1(name_5, idx);
              }
            }

            var atlasEntryMap = HashMap_init_$Create$_0();
            var _iterator__ex2g4s_19 = this.c1n_1.l();
            while (_iterator__ex2g4s_19.m()) {
              var atlas = _iterator__ex2g4s_19.n();
              var _iterator__ex2g4s_20 = atlas.o1o_1.l();
              while (_iterator__ex2g4s_20.m()) {
                var entry = _iterator__ex2g4s_20.n();
                var tmp2 = entry.p1o_1.jx_1;
                var value_3 = to(atlas, entry);
                atlasEntryMap.w1(tmp2, value_3);
              }
            }

            var tpagIdxToImageName = HashMap_init_$Create$_0();
            var _iterator__ex2g4s_21 = tpagIndexMap.a2().l();
            while (_iterator__ex2g4s_21.m()) {
              var _destruct__k2r9zo_3 = _iterator__ex2g4s_21.n();
              var imgName_3 = _destruct__k2r9zo_3.u1();
              var tpagIdx_3 = _destruct__k2r9zo_3.v1();
              tpagIdxToImageName.w1(tpagIdx_3, imgName_3);
            }

            this.d1n_1 = writeAtlasMetadataBytes(this.h1n_1, uniqueTiles, tpagIdxToImageName, atlasEntryMap, clutIndexMap, atlasMetadata, cropInfoMap);
            this.i1n_1('Processing sounds...');
            this.p1n_1 = HashMap_init_$Create$_0();
            var _iterator__ex2g4s_22 = this.w1m_1.a2().l();
            while (_iterator__ex2g4s_22.m()) {
              var _destruct__k2r9zo_4 = _iterator__ex2g4s_22.n();
              var groupId = _destruct__k2r9zo_4.u1();
              var groupBytes = _destruct__k2r9zo_4.v1();
              this.i1n_1('Parsing audiogroup' + groupId + '.dat...');
              var agDw = Companion_instance.c1d(groupBytes, new DataWinParserOptions(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true));
              var tmp0_5 = this.p1n_1;
              var value_4 = agDw.b10_1;
              tmp0_5.w1(groupId, value_4);
              this.i1n_1('  audiogroup' + groupId + '.dat: ' + agDw.b10_1.b1d_1.o() + ' audio entries');
            }

            this.i1n_1('Decoding embedded audio files...');
            this.x7_1 = 5;
            suspendResult = coroutineScope(processDataWin$slambda_0(this.h1n_1, this.a1n_1, this.i1n_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var ARGUMENT_0 = suspendResult;
            this.k1n_1 = toMutableList(ARGUMENT_0);
            var tmp_24 = this;
            var tmp0_6 = this.k1n_1;
            var tmp$ret$16;
            l$ret$17: do {
              var tmp_25;
              if (isInterface(tmp0_6, Collection)) {
                tmp_25 = tmp0_6.t();
              } else {
                tmp_25 = false;
              }
              if (tmp_25) {
                tmp$ret$16 = 0;
                break l$ret$17;
              }
              var count_6 = 0;
              var _iterator__ex2g4s_23 = tmp0_6.l();
              while (_iterator__ex2g4s_23.m()) {
                var element_9 = _iterator__ex2g4s_23.n();
                if (!(element_9 == null)) {
                  count_6 = count_6 + 1 | 0;
                  checkCountOverflow(count_6);
                }
              }
              tmp$ret$16 = count_6;
            }
             while (false);
            tmp_24.o1n_1 = tmp$ret$16;
            this.l1n_1 = HashMap_init_$Create$_0();
            this.n1n_1 = 0;
            this.x7_1 = 6;
            suspendResult = coroutineScope(processDataWin$slambda_2(this.h1n_1, this.p1n_1, this.a1n_1, this.i1n_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var audioGroupDecodes = suspendResult;
            var _iterator__ex2g4s_24 = audioGroupDecodes.l();
            while (_iterator__ex2g4s_24.m()) {
              var _destruct__k2r9zo_5 = _iterator__ex2g4s_24.n();
              var sondIdx = _destruct__k2r9zo_5.gd();
              var decoded = _destruct__k2r9zo_5.hd();
              if (!(decoded == null)) {
                var tmp0_7 = this.l1n_1;
                var value_5 = this.k1n_1.o();
                tmp0_7.w1(sondIdx, value_5);
                this.k1n_1.g(decoded);
                this.n1n_1 = this.n1n_1 + 1 | 0;
              }
            }

            this.m1n_1 = 0;
            this.i1n_1('Decoding non-embedded audio files...');
            this.x7_1 = 7;
            suspendResult = coroutineScope(processDataWin$slambda_4(this.h1n_1, this.l1n_1, this.v1m_1, this.a1n_1, this.i1n_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var externalDecodes = suspendResult;
            var _iterator__ex2g4s_25 = externalDecodes.l();
            while (_iterator__ex2g4s_25.m()) {
              var _destruct__k2r9zo_6 = _iterator__ex2g4s_25.n();
              var sondIdx_0 = _destruct__k2r9zo_6.gd();
              var decoded_0 = _destruct__k2r9zo_6.hd();
              if (!(decoded_0 == null)) {
                var tmp0_8 = this.l1n_1;
                var value_6 = this.k1n_1.o();
                tmp0_8.w1(sondIdx_0, value_6);
                this.k1n_1.g(decoded_0);
                this.m1n_1 = this.m1n_1 + 1 | 0;
              }
            }

            var tmp0_9 = this.k1n_1;
            var tmp$ret$18;
            l$ret$19: do {
              var tmp_26;
              if (isInterface(tmp0_9, Collection)) {
                tmp_26 = tmp0_9.t();
              } else {
                tmp_26 = false;
              }
              if (tmp_26) {
                tmp$ret$18 = 0;
                break l$ret$19;
              }
              var count_7 = 0;
              var _iterator__ex2g4s_26 = tmp0_9.l();
              while (_iterator__ex2g4s_26.m()) {
                var element_10 = _iterator__ex2g4s_26.n();
                if (!(element_10 == null)) {
                  count_7 = count_7 + 1 | 0;
                  checkCountOverflow(count_7);
                }
              }
              tmp$ret$18 = count_7;
            }
             while (false);
            var totalDecoded = tmp$ret$18;
            var failedCount = this.k1n_1.o() - totalDecoded | 0;
            this.i1n_1('  ' + this.o1n_1 + ' embedded + ' + this.n1n_1 + ' from audiogroups + ' + this.m1n_1 + ' external = ' + totalDecoded + ' decoded sounds, ' + failedCount + ' failed or empty');
            var tmp_27 = this;
            tmp_27.j1n_1 = ArrayList_init_$Create$_0();
            if (!this.x1m_1.t()) {
              this.i1n_1('Decoding ' + this.x1m_1.o() + ' streamed music files...');
              this.x7_1 = 8;
              suspendResult = coroutineScope(processDataWin$slambda_6(this.x1m_1, this.a1n_1, this.i1n_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.x7_1 = 9;
              continue $sm;
            }

          case 8:
            var musDecodes = suspendResult;
            var _iterator__ex2g4s_27 = musDecodes.l();
            while (_iterator__ex2g4s_27.m()) {
              var _destruct__k2r9zo_7 = _iterator__ex2g4s_27.n();
              var path = _destruct__k2r9zo_7.gd();
              var decoded_1 = _destruct__k2r9zo_7.hd();
              if (!(decoded_1 == null)) {
                this.j1n_1.g(new processDataWin$MusEntry(path, decoded_1));
              }
            }

            this.i1n_1('  ' + this.j1n_1.o() + '/' + this.x1m_1.o() + ' music files decoded');
            this.x7_1 = 9;
            continue $sm;
          case 9:
            var soundsWriter = new ByteWriter();
            var audioOffsets = new Int32Array(this.k1n_1.o());
            var audioSizes = new Int32Array(this.k1n_1.o());
            var iterator_2 = this.k1n_1.l();
            var index_2 = 0;
            while (iterator_2.m()) {
              var i_1 = index_2;
              index_2 = index_2 + 1 | 0;
              var audio = iterator_2.n();
              if (!(audio == null)) {
                audioOffsets[i_1] = soundsWriter.xw_1;
                audioSizes[i_1] = audio.r1i_1.length;
                soundsWriter.bx(audio.r1i_1);
              }
            }

            var musOffsets = new Int32Array(this.j1n_1.o());
            var musSizes = new Int32Array(this.j1n_1.o());
            var iterator_3 = this.j1n_1.l();
            var index_3 = 0;
            while (iterator_3.m()) {
              var i_2 = index_3;
              index_3 = index_3 + 1 | 0;
              var entry_0 = iterator_3.n();
              musOffsets[i_2] = soundsWriter.xw_1;
              musSizes[i_2] = entry_0.h1s_1.r1i_1.length;
              soundsWriter.bx(entry_0.h1s_1.r1i_1);
            }

            var soundsBin = soundsWriter.dx();
            var tmp0_10 = this.k1n_1;
            var tmp$ret$20;
            l$ret$21: do {
              var tmp_28;
              if (isInterface(tmp0_10, Collection)) {
                tmp_28 = tmp0_10.t();
              } else {
                tmp_28 = false;
              }
              if (tmp_28) {
                tmp$ret$20 = 0;
                break l$ret$21;
              }
              var count_8 = 0;
              var _iterator__ex2g4s_28 = tmp0_10.l();
              while (_iterator__ex2g4s_28.m()) {
                var element_11 = _iterator__ex2g4s_28.n();
                if (!(element_11 == null) && element_11.n1i_1 === 0) {
                  count_8 = count_8 + 1 | 0;
                  checkCountOverflow(count_8);
                }
              }
              tmp$ret$20 = count_8;
            }
             while (false);
            var pcmCount = tmp$ret$20;
            var tmp0_11 = this.k1n_1;
            var tmp$ret$22;
            l$ret$23: do {
              var tmp_29;
              if (isInterface(tmp0_11, Collection)) {
                tmp_29 = tmp0_11.t();
              } else {
                tmp_29 = false;
              }
              if (tmp_29) {
                tmp$ret$22 = 0;
                break l$ret$23;
              }
              var count_9 = 0;
              var _iterator__ex2g4s_29 = tmp0_11.l();
              while (_iterator__ex2g4s_29.m()) {
                var element_12 = _iterator__ex2g4s_29.n();
                if (!(element_12 == null) && element_12.n1i_1 === 1) {
                  count_9 = count_9 + 1 | 0;
                  checkCountOverflow(count_9);
                }
              }
              tmp$ret$22 = count_9;
            }
             while (false);
            var adpcmCount = tmp$ret$22;
            this.i1n_1('  SOUNDS.BIN: ' + soundsBin.length + ' bytes (' + pcmCount + ' PCM, ' + adpcmCount + ' ADPCM, ' + this.j1n_1.o() + ' music tracks)');
            var soundBnkWriter = new ByteWriter();
            soundBnkWriter.yw(0);
            soundBnkWriter.zw(this.h1n_1.jz_1.c12_1.o());
            soundBnkWriter.zw(this.k1n_1.o());
            soundBnkWriter.zw(this.j1n_1.o());
            var iterator_4 = this.h1n_1.jz_1.c12_1.l();
            var index_4 = 0;
            while (iterator_4.m()) {
              var sondIdx_1 = index_4;
              index_4 = index_4 + 1 | 0;
              var sound = iterator_4.n();
              var tmp8_elvis_lhs = this.l1n_1.d2(sondIdx_1);
              var audoIndex = tmp8_elvis_lhs == null ? 0 > sound.w1e_1 || sound.w1e_1 >= this.k1n_1.o() ? 65535 : sound.w1e_1 : tmp8_elvis_lhs;
              soundBnkWriter.zw(audoIndex);
              soundBnkWriter.ax(sound.p1e_1);
              soundBnkWriter.zw(numberToInt(sound.t1e_1 * 256));
              soundBnkWriter.zw(numberToInt(sound.u1e_1 * 256));
              soundBnkWriter.zw(0);
            }

            var iterator_5 = this.k1n_1.l();
            var index_5 = 0;
            while (iterator_5.m()) {
              var i_3 = index_5;
              index_5 = index_5 + 1 | 0;
              var audio_0 = iterator_5.n();
              if (!(audio_0 == null)) {
                soundBnkWriter.ax(audioOffsets[i_3]);
                soundBnkWriter.ax(audioSizes[i_3]);
                soundBnkWriter.zw(audio_0.o1i_1);
                soundBnkWriter.yw(audio_0.p1i_1);
                soundBnkWriter.yw(audio_0.q1i_1);
                soundBnkWriter.yw(audio_0.n1i_1);
                soundBnkWriter.yw(0);
                soundBnkWriter.zw(0);
                soundBnkWriter.ax(audio_0.s1i_1);
              } else {
                soundBnkWriter.ax(0);
                soundBnkWriter.ax(0);
                soundBnkWriter.zw(0);
                soundBnkWriter.yw(0);
                soundBnkWriter.yw(0);
                soundBnkWriter.yw(0);
                soundBnkWriter.yw(0);
                soundBnkWriter.zw(0);
                soundBnkWriter.ax(0);
              }
            }

            var _iterator__ex2g4s_30 = this.j1n_1.l();
            while (_iterator__ex2g4s_30.m()) {
              var entry_1 = _iterator__ex2g4s_30.n();
              var nameBytes = encodeToByteArray(entry_1.g1s_1);
              soundBnkWriter.yw(nameBytes.length);
              soundBnkWriter.bx(nameBytes);
            }

            var iterator_6 = this.j1n_1.l();
            var index_6 = 0;
            while (iterator_6.m()) {
              var i_4 = index_6;
              index_6 = index_6 + 1 | 0;
              var entry_2 = iterator_6.n();
              soundBnkWriter.ax(musOffsets[i_4]);
              soundBnkWriter.ax(musSizes[i_4]);
              soundBnkWriter.zw(entry_2.h1s_1.o1i_1);
              soundBnkWriter.yw(entry_2.h1s_1.p1i_1);
              soundBnkWriter.yw(entry_2.h1s_1.n1i_1);
              soundBnkWriter.ax(entry_2.h1s_1.s1i_1);
            }

            var soundBnkBin = soundBnkWriter.dx();
            this.i1n_1('Done!');
            var tmp9_elvis_lhs = this.h1n_1.fz_1.d11_1;
            var tmp10_elvis_lhs = tmp9_elvis_lhs == null ? this.h1n_1.fz_1.s10_1 : tmp9_elvis_lhs;
            return new ProcessingResult(tmp10_elvis_lhs == null ? 'GAME' : tmp10_elvis_lhs, this.g1n_1, this.f1n_1, this.e1n_1, this.d1n_1, soundBnkBin, soundsBin, this.c1n_1);
          case 10:
            throw this.a8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.y7_1 === 10) {
          throw e;
        } else {
          this.x7_1 = this.y7_1;
          this.a8_1 = e;
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
  function crc32Init($this) {
    if ($this.m1j_1)
      return Unit_instance;
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
        $this.l1j_1[i] = s;
      }
       while (inductionVariable < 256);
    $this.m1j_1 = true;
  }
  function crc32Update($this, crc, byte) {
    return crc << 8 ^ $this.l1j_1[(byte ^ (crc >>> 24 | 0)) & 255];
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
    this.t1i_1 = 13;
    this.u1i_1 = 8192;
    this.v1i_1 = 16;
    this.w1i_1 = 10;
    this.x1i_1 = 1024;
    this.y1i_1 = 1023;
    this.z1i_1 = 255;
    this.a1j_1 = -1;
    this.b1j_1 = -1;
    this.c1j_1 = 1;
    this.d1j_1 = 2;
    this.e1j_1 = 4;
    this.f1j_1 = 1;
    this.g1j_1 = 3;
    this.h1j_1 = 5;
    this.i1j_1 = _UInt___init__impl__l7qpdl(-1);
    this.j1j_1 = 3.1415927;
    this.k1j_1 = 79764919;
    this.l1j_1 = new Int32Array(256);
    this.m1j_1 = false;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.n1j_1 = new Float32Array([1.0649863E-7, 1.1341951E-7, 1.2079015E-7, 1.2863978E-7, 1.369995E-7, 1.459025E-7, 1.5538409E-7, 1.6548181E-7, 1.7623574E-7, 1.8768856E-7, 1.998856E-7, 2.128753E-7, 2.2670913E-7, 2.4144197E-7, 2.5713223E-7, 2.7384212E-7, 2.9163792E-7, 3.1059022E-7, 3.307741E-7, 3.5226967E-7, 3.7516213E-7, 3.995423E-7, 4.255068E-7, 4.5315863E-7, 4.8260745E-7, 5.1397E-7, 5.4737063E-7, 5.829419E-7, 6.208247E-7, 6.611694E-7, 7.041359E-7, 7.4989464E-7, 7.98627E-7, 8.505263E-7, 9.057983E-7, 9.646621E-7, 1.0273513E-6, 1.0941144E-6, 1.1652161E-6, 1.2409384E-6, 1.3215816E-6, 1.4074654E-6, 1.4989305E-6, 1.5963394E-6, 1.7000785E-6, 1.8105592E-6, 1.9282195E-6, 2.053526E-6, 2.1869757E-6, 2.3290977E-6, 2.4804558E-6, 2.6416496E-6, 2.813319E-6, 2.9961443E-6, 3.1908505E-6, 3.39821E-6, 3.619045E-6, 3.8542307E-6, 4.1047006E-6, 4.371447E-6, 4.6555283E-6, 4.958071E-6, 5.280274E-6, 5.623416E-6, 5.988857E-6, 6.3780467E-6, 6.7925284E-6, 7.2339453E-6, 7.704048E-6, 8.2047E-6, 8.737888E-6, 9.305725E-6, 9.910464E-6, 1.0554501E-5, 1.1240392E-5, 1.1970856E-5, 1.2748789E-5, 1.3577278E-5, 1.4459606E-5, 1.5399271E-5, 1.6400005E-5, 1.7465769E-5, 1.8600793E-5, 1.9809577E-5, 2.1096914E-5, 2.2467912E-5, 2.3928002E-5, 2.5482977E-5, 2.7139005E-5, 2.890265E-5, 3.078091E-5, 3.2781227E-5, 3.4911533E-5, 3.718028E-5, 3.9596467E-5, 4.2169668E-5, 4.491009E-5, 4.7828602E-5, 5.0936775E-5, 5.424693E-5, 5.7772202E-5, 6.152657E-5, 6.552491E-5, 6.9783084E-5, 7.4317984E-5, 7.914758E-5, 8.429104E-5, 8.976875E-5, 9.560242E-5, 1.0181521E-4, 1.0843174E-4, 1.1547824E-4, 1.2298267E-4, 1.3097477E-4, 1.3948625E-4, 1.4855085E-4, 1.5820454E-4, 1.6848555E-4, 1.7943469E-4, 1.9109536E-4, 2.0351382E-4, 2.167393E-4, 2.3082423E-4, 2.4582449E-4, 2.6179955E-4, 2.7881275E-4, 2.9693157E-4, 3.1622787E-4, 3.3677815E-4, 3.5866388E-4, 3.8197188E-4, 4.0679457E-4, 4.3323037E-4, 4.613841E-4, 4.913675E-4, 5.2329927E-4, 5.573062E-4, 5.935231E-4, 6.320936E-4, 6.731706E-4, 7.16917E-4, 7.635063E-4, 8.1312325E-4, 8.6596457E-4, 9.2223985E-4, 9.821722E-4, 0.0010459992, 0.0011139743, 0.0011863665, 0.0012634633, 0.0013455702, 0.0014330129, 0.0015261382, 0.0016253153, 0.0017309374, 0.0018434235, 0.0019632196, 0.0020908006, 0.0022266726, 0.0023713743, 0.0025254795, 0.0026895993, 0.0028643848, 0.0030505287, 0.003248769, 0.0034598925, 0.0036847359, 0.0039241905, 0.0041792067, 0.004450795, 0.004740033, 0.005048067, 0.0053761187, 0.005725489, 0.0060975635, 0.0064938175, 0.0069158226, 0.0073652514, 0.007843887, 0.008353627, 0.008896492, 0.009474637, 0.010090352, 0.01074608, 0.011444421, 0.012188144, 0.012980198, 0.013823725, 0.014722068, 0.015678791, 0.016697686, 0.017782796, 0.018938422, 0.020169148, 0.021479854, 0.022875736, 0.02436233, 0.025945531, 0.027631618, 0.029427277, 0.031339627, 0.03337625, 0.035545226, 0.037855156, 0.0403152, 0.042935107, 0.045725275, 0.048696756, 0.05186135, 0.05523159, 0.05882085, 0.062643364, 0.06671428, 0.07104975, 0.075666964, 0.08058423, 0.08582105, 0.09139818, 0.097337745, 0.1036633, 0.11039993, 0.11757434, 0.12521498, 0.13335215, 0.14201812, 0.15124726, 0.16107617, 0.1715438, 0.18269168, 0.19456401, 0.20720787, 0.22067343, 0.23501402, 0.25028655, 0.26655158, 0.28387362, 0.3023213, 0.32196787, 0.34289113, 0.36517414, 0.3889052, 0.41417846, 0.44109413, 0.4697589, 0.50028646, 0.53279793, 0.5674221, 0.6042964, 0.64356697, 0.6853896, 0.72993004, 0.777365, 0.8278826, 0.88168305, 0.9389798, 1.0]);
    var tmp_0 = this;
    // Inline function 'kotlin.byteArrayOf' call
    tmp_0.o1j_1 = new Int8Array([79, 103, 103, 83]);
  }
  protoOf(Companion_1).p1j = function (data) {
    var p = new StbVorbis();
    vorbisInit(p);
    p.s1j_1 = data;
    p.t1j_1 = 0;
    p.u1j_1 = data.length;
    p.v1j_1 = data.length;
    if (startDecoder(p)) {
      vorbisPumpFirstFrame(p);
      return new Pair(p, STBVorbisError_NO_ERROR_getInstance());
    }
    var err = p.a1k_1;
    return new Pair(null, err);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Codebook() {
    this.n1t_1 = 0;
    this.o1t_1 = 0;
    this.p1t_1 = null;
    this.q1t_1 = 0.0;
    this.r1t_1 = 0.0;
    this.s1t_1 = 0;
    this.t1t_1 = 0;
    this.u1t_1 = 0;
    this.v1t_1 = 0;
    this.w1t_1 = 0;
    this.x1t_1 = null;
    this.y1t_1 = null;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int16Array(1024);
    while (tmp_0 < 1024) {
      tmp_1[tmp_0] = -1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.z1t_1 = tmp_1;
    this.a1u_1 = null;
    this.b1u_1 = null;
    this.c1u_1 = -1;
    this.d1u_1 = 0;
  }
  function Floor1() {
    this.e1u_1 = 0;
    this.f1u_1 = new Int32Array(32);
    this.g1u_1 = new Int32Array(16);
    this.h1u_1 = new Int32Array(16);
    this.i1u_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(16);
    while (tmp_0 < 16) {
      tmp_1[tmp_0] = new Int16Array(8);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.j1u_1 = tmp_1;
    this.k1u_1 = new Int16Array(250);
    this.l1u_1 = new Int32Array(250);
    var tmp_2 = this;
    var tmp_3 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_4 = Array(250);
    while (tmp_3 < 250) {
      tmp_4[tmp_3] = new Int32Array(2);
      tmp_3 = tmp_3 + 1 | 0;
    }
    tmp_2.m1u_1 = tmp_4;
    this.n1u_1 = 0;
    this.o1u_1 = 0;
    this.p1u_1 = 0;
  }
  function Residue() {
    this.q1u_1 = 0;
    this.r1u_1 = 0;
    this.s1u_1 = 0;
    this.t1u_1 = 0;
    this.u1u_1 = 0;
    this.v1u_1 = null;
    this.w1u_1 = null;
  }
  function MappingChannel() {
    this.x1u_1 = 0;
    this.y1u_1 = 0;
    this.z1u_1 = 0;
  }
  function Mapping() {
    this.a1v_1 = 0;
    this.b1v_1 = null;
    this.c1v_1 = 0;
    this.d1v_1 = new Int32Array(15);
    this.e1v_1 = new Int32Array(15);
  }
  function Mode() {
    this.f1v_1 = 0;
    this.g1v_1 = 0;
    this.h1v_1 = 0;
    this.i1v_1 = 0;
  }
  function ProbedPage() {
    this.j1v_1 = 0;
    this.k1v_1 = 0;
    this.l1v_1 = 0;
  }
  function vorbisInit($this) {
    $this.z1j_1 = false;
    $this.a1k_1 = STBVorbisError_NO_ERROR_getInstance();
    $this.f1k_1 = null;
  }
  function get8($this) {
    if ($this.t1j_1 >= $this.u1j_1) {
      $this.z1j_1 = true;
      return 0;
    }
    var tmp = $this.s1j_1;
    var _unary__edvuaz = $this.t1j_1;
    $this.t1j_1 = _unary__edvuaz + 1 | 0;
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
    if (($this.t1j_1 + n | 0) > $this.u1j_1) {
      $this.z1j_1 = true;
      return false;
    }
    var tmp0 = $this.s1j_1;
    var tmp6 = $this.t1j_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = $this.t1j_1 + n | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, data, offset, tmp6, endIndex);
    $this.t1j_1 = $this.t1j_1 + n | 0;
    return true;
  }
  function getn_0($this, data, offset, n) {
    if (($this.t1j_1 + n | 0) > $this.u1j_1) {
      $this.z1j_1 = true;
      return false;
    }
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = offset + i | 0;
        var tmp_0 = $this.s1j_1;
        var _unary__edvuaz = $this.t1j_1;
        $this.t1j_1 = _unary__edvuaz + 1 | 0;
        data[tmp] = tmp_0[_unary__edvuaz] & 255;
      }
       while (inductionVariable < n);
    return true;
  }
  function skip($this, n) {
    $this.t1j_1 = $this.t1j_1 + n | 0;
    if ($this.t1j_1 >= $this.u1j_1)
      $this.z1j_1 = true;
  }
  function setFileOffset($this, loc) {
    $this.z1j_1 = false;
    if (loc >= $this.u1j_1 || 0 > loc) {
      $this.t1j_1 = $this.u1j_1;
      $this.z1j_1 = true;
      return false;
    } else {
      $this.t1j_1 = loc;
      return true;
    }
  }
  function getFileOffset($this) {
    return $this.t1j_1;
  }
  function setError($this, e) {
    $this.a1k_1 = e;
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
    if ($this.k1l_1) {
      $this.x1j_1.j1v_1 = getFileOffset($this) - 4 | 0;
    }
    if (!(0 === get8($this)))
      return setError($this, STBVorbisError_INVALID_STREAM_STRUCTURE_VERSION_getInstance());
    $this.i1l_1 = get8($this);
    var loc0 = get32($this);
    var loc1 = get32($this);
    get32($this);
    var n = get32($this);
    $this.f1l_1 = n;
    get32($this);
    $this.g1l_1 = get8($this);
    if (!getn_0($this, $this.h1l_1, 0, $this.g1l_1))
      return setError($this, STBVorbisError_UNEXPECTED_EOF_getInstance());
    $this.r1l_1 = -2;
    if (!(loc0 === -1) || !(loc1 === -1)) {
      var i = $this.g1l_1 - 1 | 0;
      $l$loop: while (i >= 0 && 255 <= $this.h1l_1[i]) {
        i = i - 1 | 0;
      }
      if (i >= 0) {
        $this.r1l_1 = i;
        $this.s1l_1 = loc0;
      }
    }
    if ($this.k1l_1) {
      var len = 0;
      var inductionVariable = 0;
      var last = $this.g1l_1;
      if (inductionVariable < last)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          len = len + $this.h1l_1[i_0] | 0;
        }
         while (inductionVariable < last);
      len = len + (27 + $this.g1l_1 | 0) | 0;
      $this.x1j_1.k1v_1 = $this.x1j_1.j1v_1 + len | 0;
      $this.x1j_1.l1v_1 = loc0;
    }
    $this.l1l_1 = 0;
    return true;
  }
  function startPage($this) {
    if (!capturePattern($this))
      return setError($this, STBVorbisError_MISSING_CAPTURE_PATTERN_getInstance());
    return startPageNoCapturePattern($this);
  }
  function startPacket($this) {
    while ($this.l1l_1 === -1) {
      if (!startPage($this))
        return false;
      if (!(($this.i1l_1 & 1) === 0))
        return setError($this, STBVorbisError_CONTINUED_PACKET_FLAG_INVALID_getInstance());
    }
    $this.m1l_1 = false;
    $this.p1l_1 = 0;
    $this.q1l_1 = 0;
    $this.j1l_1 = 0;
    return true;
  }
  function maybeStartPacket($this) {
    if ($this.l1l_1 === -1) {
      var x = get8($this);
      if ($this.z1j_1)
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
      if (!(($this.i1l_1 & 1) === 0)) {
        $this.m1l_1 = false;
        $this.j1l_1 = 0;
        return setError($this, STBVorbisError_CONTINUED_PACKET_FLAG_INVALID_getInstance());
      }
    }
    return startPacket($this);
  }
  function nextSegment($this) {
    if ($this.m1l_1)
      return 0;
    if ($this.l1l_1 === -1) {
      $this.n1l_1 = $this.g1l_1 - 1 | 0;
      if (!startPage($this)) {
        $this.m1l_1 = true;
        return 0;
      }
      if (($this.i1l_1 & 1) === 0) {
        setError($this, STBVorbisError_CONTINUED_PACKET_FLAG_INVALID_getInstance());
        return 0;
      }
    }
    var tmp = $this.h1l_1;
    var _unary__edvuaz = $this.l1l_1;
    $this.l1l_1 = _unary__edvuaz + 1 | 0;
    var len = tmp[_unary__edvuaz];
    if (255 > len) {
      $this.m1l_1 = true;
      $this.n1l_1 = $this.l1l_1 - 1 | 0;
    }
    if ($this.l1l_1 >= $this.g1l_1)
      $this.l1l_1 = -1;
    $this.j1l_1 = len;
    return len;
  }
  function get8PacketRaw($this) {
    if ($this.j1l_1 === 0) {
      if ($this.m1l_1)
        return -1;
      else if (nextSegment($this) === 0)
        return -1;
    }
    $this.j1l_1 = $this.j1l_1 - 1 | 0;
    $this.q1l_1 = $this.q1l_1 + 1 | 0;
    return get8($this);
  }
  function get8Packet($this) {
    var x = get8PacketRaw($this);
    $this.p1l_1 = 0;
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
    if (0 > $this.p1l_1)
      return 0;
    if (n > $this.p1l_1) {
      if (24 < n) {
        var z = getBits($this, 24);
        return z + (getBits($this, n - 24 | 0) << 24) | 0;
      }
      if ($this.p1l_1 === 0)
        $this.o1l_1 = 0;
      while (n > $this.p1l_1) {
        var z_0 = get8PacketRaw($this);
        if (z_0 === -1) {
          $this.p1l_1 = -1;
          return 0;
        }
        $this.o1l_1 = $this.o1l_1 + (z_0 << $this.p1l_1) | 0;
        $this.p1l_1 = $this.p1l_1 + 8 | 0;
      }
    }
    var z_1 = $this.o1l_1 & ((1 << n) - 1 | 0);
    $this.o1l_1 = $this.o1l_1 >>> n | 0;
    $this.p1l_1 = $this.p1l_1 - n | 0;
    return z_1;
  }
  function prepHuffman($this) {
    if (24 >= $this.p1l_1) {
      if ($this.p1l_1 === 0)
        $this.o1l_1 = 0;
      do {
        if ($this.m1l_1 && $this.j1l_1 === 0)
          return Unit_instance;
        var z = get8PacketRaw($this);
        if (z === -1)
          return Unit_instance;
        $this.o1l_1 = $this.o1l_1 + (z << $this.p1l_1) | 0;
        $this.p1l_1 = $this.p1l_1 + 8 | 0;
      }
       while (24 >= $this.p1l_1);
    }
  }
  function addEntry($this, c, huffCode, symbol, count, len, values) {
    if (c.v1t_1 === 0) {
      ensureNotNull(c.y1t_1)[symbol] = huffCode;
    } else {
      ensureNotNull(c.y1t_1)[count] = huffCode;
      ensureNotNull(c.p1t_1)[count] = toByte(len);
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
        c.z1t_1[i] = -1;
      }
       while (inductionVariable < 1024);
    var len = !(c.v1t_1 === 0) ? c.d1u_1 : c.o1t_1;
    if (32767 < len)
      len = 32767;
    var inductionVariable_0 = 0;
    var last = len;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if ((ensureNotNull(c.p1t_1)[i_0] & 255) <= 10) {
          var z = !(c.v1t_1 === 0) ? bitReverse(Companion_getInstance_1(), ensureNotNull(c.a1u_1)[i_0]) : ensureNotNull(c.y1t_1)[i_0];
          while (1024 > z) {
            c.z1t_1[z] = toShort(i_0);
            z = z + (1 << (ensureNotNull(c.p1t_1)[i_0] & 255)) | 0;
          }
        }
      }
       while (inductionVariable_0 < last);
  }
  function includeInSort($this, c, len) {
    if (!(c.v1t_1 === 0))
      return true;
    if (len === 255)
      return false;
    if (10 < len)
      return true;
    return false;
  }
  function computeSortedHuffman($this, c, lengths, values) {
    if (c.v1t_1 === 0) {
      var k = 0;
      var inductionVariable = 0;
      var last = c.o1t_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (includeInSort($this, c, lengths[i] & 255)) {
            var tmp = ensureNotNull(c.a1u_1);
            var _unary__edvuaz = k;
            k = _unary__edvuaz + 1 | 0;
            tmp[_unary__edvuaz] = bitReverse(Companion_getInstance_1(), ensureNotNull(c.y1t_1)[i]);
          }
        }
         while (inductionVariable < last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = c.d1u_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          ensureNotNull(c.a1u_1)[i_0] = bitReverse(Companion_getInstance_1(), ensureNotNull(c.y1t_1)[i_0]);
        }
         while (inductionVariable_0 < last_0);
    }
    var sc = ensureNotNull(c.a1u_1);
    var sortedPart = copyOfRange_0(sc, 0, c.d1u_1);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = sortedArray(sortedPart);
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, sc, 0, 0, endIndex);
    var tmp_1 = until(0, c.d1u_1);
    var tmp_2 = StbVorbis$computeSortedHuffman$lambda(sortedPart);
    var indices = sortedWith(tmp_1, new sam$kotlin_Comparator$0_5(tmp_2));
    var tmp_3 = 0;
    var tmp_4 = c.d1u_1;
    var tmp_5 = new Int32Array(tmp_4);
    while (tmp_3 < tmp_4) {
      var tmp_6 = tmp_3;
      tmp_5[tmp_6] = sortedPart[indices.r(tmp_6)];
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
    sc[c.d1u_1] = -1;
    var len2 = !(c.v1t_1 === 0) ? c.d1u_1 : c.o1t_1;
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < len2)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var huffLen = !(c.v1t_1 === 0) ? lengths[ensureNotNull(values)[i_1]] & 255 : lengths[i_1] & 255;
        if (includeInSort($this, c, huffLen)) {
          var code = bitReverse(Companion_getInstance_1(), ensureNotNull(c.y1t_1)[i_1]);
          var x = 0;
          var n = c.d1u_1;
          while (1 < n) {
            var m = x + (n >> 1) | 0;
            if (compare(bitwiseAnd(fromInt(sc[m]), new Long(-1, 0)), bitwiseAnd(fromInt(code), new Long(-1, 0))) <= 0) {
              x = m;
              n = n - (n >> 1) | 0;
            } else {
              n = n >> 1;
            }
          }
          if (!(c.v1t_1 === 0)) {
            ensureNotNull(c.b1u_1)[x] = ensureNotNull(values)[i_1];
            ensureNotNull(c.p1t_1)[x] = toByte(huffLen);
          } else {
            ensureNotNull(c.b1u_1)[x] = i_1;
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
    $this.z1k_1[b] = new Float32Array(n2);
    $this.a1l_1[b] = new Float32Array(n2);
    $this.b1l_1[b] = new Float32Array(n4);
    computeTwiddleFactors($this, n, ensureNotNull($this.z1k_1[b]), ensureNotNull($this.a1l_1[b]), ensureNotNull($this.b1l_1[b]));
    $this.c1l_1[b] = new Float32Array(n2);
    computeWindow($this, n, ensureNotNull($this.c1l_1[b]));
    $this.d1l_1[b] = new Int32Array(n8);
    computeBitreverse($this, n, ensureNotNull($this.d1l_1[b]));
    return true;
  }
  function codebookDecodeScalarRaw($this, c) {
    prepHuffman($this);
    if (c.y1t_1 == null && c.a1u_1 == null)
      return -1;
    if (8 < c.o1t_1 ? !(c.a1u_1 == null) : c.y1t_1 == null) {
      var code = bitReverse(Companion_getInstance_1(), $this.o1l_1);
      var x = 0;
      var n = c.d1u_1;
      while (1 < n) {
        var m = x + (n >> 1) | 0;
        if (compare(bitwiseAnd(fromInt(ensureNotNull(c.a1u_1)[m]), new Long(-1, 0)), bitwiseAnd(fromInt(code), new Long(-1, 0))) <= 0) {
          x = m;
          n = n - (n >> 1) | 0;
        } else {
          n = n >> 1;
        }
      }
      if (c.v1t_1 === 0)
        x = ensureNotNull(c.b1u_1)[x];
      var len = ensureNotNull(c.p1t_1)[x] & 255;
      if ($this.p1l_1 >= len) {
        $this.o1l_1 = $this.o1l_1 >>> len | 0;
        $this.p1l_1 = $this.p1l_1 - len | 0;
        return x;
      }
      $this.p1l_1 = 0;
      return -1;
    }
    var inductionVariable = 0;
    var last = c.o1t_1;
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if ((ensureNotNull(c.p1t_1)[i] & 255) === 255)
          continue $l$loop;
        if (ensureNotNull(c.y1t_1)[i] === ($this.o1l_1 & ((1 << (ensureNotNull(c.p1t_1)[i] & 255)) - 1 | 0))) {
          var cwl = ensureNotNull(c.p1t_1)[i] & 255;
          if ($this.p1l_1 >= cwl) {
            $this.o1l_1 = $this.o1l_1 >>> cwl | 0;
            $this.p1l_1 = $this.p1l_1 - cwl | 0;
            return i;
          }
          $this.p1l_1 = 0;
          return -1;
        }
      }
       while (inductionVariable < last);
    setError($this, STBVorbisError_INVALID_STREAM_getInstance());
    $this.p1l_1 = 0;
    return -1;
  }
  function decodeRaw($this, c) {
    if (10 > $this.p1l_1) {
      prepHuffman($this);
    }
    var i = $this.o1l_1 & 1023;
    i = c.z1t_1[i];
    if (i >= 0) {
      var n = ensureNotNull(c.p1t_1)[i] & 255;
      $this.o1l_1 = $this.o1l_1 >>> n | 0;
      $this.p1l_1 = $this.p1l_1 - n | 0;
      if (0 > $this.p1l_1) {
        $this.p1l_1 = 0;
        return -1;
      }
    } else {
      i = codebookDecodeScalarRaw($this, c);
    }
    return i;
  }
  function decode($this, c) {
    var v = decodeRaw($this, c);
    if (!(c.v1t_1 === 0) && v >= 0)
      v = ensureNotNull(c.b1u_1)[v];
    return v;
  }
  function decodeVQ($this, c) {
    return decodeRaw($this, c);
  }
  function codebookDecodeStart($this, c) {
    if (c.t1t_1 === 0) {
      setError($this, STBVorbisError_INVALID_STREAM_getInstance());
      return -1;
    }
    var z = decodeVQ($this, c);
    if (0 > z) {
      if ($this.j1l_1 === 0)
        if ($this.m1l_1)
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
    if (c.n1t_1 < len)
      len = c.n1t_1;
    var zOff = imul(z, c.n1t_1);
    var mults = ensureNotNull(c.x1t_1);
    if (!(c.u1t_1 === 0)) {
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
          last = v + c.q1t_1;
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
    if (c.n1t_1 < len)
      len = c.n1t_1;
    var zOff = imul(z, c.n1t_1);
    var mults = ensureNotNull(c.x1t_1);
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
        if (!(c.u1t_1 === 0))
          last = v;
      }
       while (inductionVariable < last_0);
    return true;
  }
  function codebookDecodeDeinterleaveRepeat($this, c, outputs, ch, cInterP, pInterP, len, totalDecode0) {
    var cInter = cInterP[0];
    var pInter = pInterP[0];
    var totalDecode = totalDecode0;
    if (c.t1t_1 === 0)
      return setError($this, STBVorbisError_INVALID_STREAM_getInstance());
    while (0 < totalDecode) {
      var z0 = decodeVQ($this, c);
      if (0 > z0) {
        if ($this.j1l_1 === 0 && $this.m1l_1)
          return false;
        return setError($this, STBVorbisError_INVALID_STREAM_getInstance());
      }
      var effective = c.n1t_1;
      if (((cInter + imul(pInter, ch) | 0) + effective | 0) > imul(len, ch)) {
        effective = imul(len, ch) - (imul(pInter, ch) - cInter | 0) | 0;
      }
      var z = imul(z0, c.n1t_1);
      var mults = ensureNotNull(c.x1t_1);
      if (!(c.u1t_1 === 0)) {
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
      output[_index_0__fvwizt] = output[_index_0__fvwizt] * Companion_getInstance_1().n1j_1[y & 255];
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
        output[_index_0__fvwizt_0] = output[_index_0__fvwizt_0] * Companion_getInstance_1().n1j_1[y & 255];
        x = x + 1 | 0;
      }
    }
  }
  function residueDecode($this, book, target, offset, n, rtype) {
    if (rtype === 0) {
      var step = n / book.n1t_1 | 0;
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
        k_0 = k_0 + book.n1t_1 | 0;
        off = off + book.n1t_1 | 0;
      }
    }
    return true;
  }
  function decodeResidue($this, residueBuffers, ch, n, rn, doNotDecode) {
    var r = ensureNotNull($this.l1k_1)[rn];
    var rtype = $this.k1k_1[rn];
    var c = r.u1u_1;
    var classwords = ensureNotNull($this.f1k_1)[c].n1t_1;
    var actualSize = rtype === 2 ? imul(n, 2) : n;
    var limitRBegin = actualSize > r.q1u_1 ? r.q1u_1 : actualSize;
    var limitREnd = actualSize > r.r1u_1 ? r.r1u_1 : actualSize;
    var nRead = limitREnd - limitRBegin | 0;
    var partRead = nRead / r.s1u_1 | 0;
    var tmp = 0;
    var tmp_0 = $this.r1j_1;
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
        return Unit_instance;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < 8)
        do {
          var pass = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var pcount = 0;
          var classSet = 0;
          if (ch === 2) {
            while (partRead > pcount) {
              var z = r.q1u_1 + imul(pcount, r.s1u_1) | 0;
              var cInter = z & 1;
              var pInter = z >> 1;
              if (pass === 0) {
                var cb = ensureNotNull($this.f1k_1)[r.u1u_1];
                var q = decode($this, cb);
                if (q === -1)
                  return Unit_instance;
                partClassdata[0][classSet] = ensureNotNull(r.v1u_1)[q];
              }
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < classwords)
                $l$loop_0: do {
                  var i_0 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  if (partRead <= pcount)
                    break $l$loop_0;
                  z = r.q1u_1 + imul(pcount, r.s1u_1) | 0;
                  var ci = ensureNotNull(partClassdata[0][classSet])[i_0] & 255;
                  var b = ensureNotNull(r.w1u_1)[ci][pass];
                  if (b >= 0) {
                    var book = ensureNotNull($this.f1k_1)[b];
                    // Inline function 'kotlin.intArrayOf' call
                    var cInterArr = new Int32Array([cInter]);
                    // Inline function 'kotlin.intArrayOf' call
                    var pInterArr = new Int32Array([pInter]);
                    if (!codebookDecodeDeinterleaveRepeat($this, book, residueBuffers, ch, cInterArr, pInterArr, n, r.s1u_1))
                      return Unit_instance;
                    cInter = cInterArr[0];
                    pInter = pInterArr[0];
                  } else {
                    z = z + r.s1u_1 | 0;
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
              var z_0 = r.q1u_1 + imul(pcount, r.s1u_1) | 0;
              var cInter_0 = z_0 % ch | 0;
              var pInter_0 = z_0 / ch | 0;
              if (pass === 0) {
                var cb_0 = ensureNotNull($this.f1k_1)[r.u1u_1];
                var q_0 = decode($this, cb_0);
                if (q_0 === -1)
                  return Unit_instance;
                partClassdata[0][classSet] = ensureNotNull(r.v1u_1)[q_0];
              }
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < classwords)
                $l$loop_1: do {
                  var i_1 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  if (partRead <= pcount)
                    break $l$loop_1;
                  z_0 = r.q1u_1 + imul(pcount, r.s1u_1) | 0;
                  var ci_0 = ensureNotNull(partClassdata[0][classSet])[i_1] & 255;
                  var b_0 = ensureNotNull(r.w1u_1)[ci_0][pass];
                  if (b_0 >= 0) {
                    var book_0 = ensureNotNull($this.f1k_1)[b_0];
                    // Inline function 'kotlin.intArrayOf' call
                    var cInterArr_0 = new Int32Array([cInter_0]);
                    // Inline function 'kotlin.intArrayOf' call
                    var pInterArr_0 = new Int32Array([pInter_0]);
                    if (!codebookDecodeDeinterleaveRepeat($this, book_0, residueBuffers, ch, cInterArr_0, pInterArr_0, n, r.s1u_1))
                      return Unit_instance;
                    cInter_0 = cInterArr_0[0];
                    pInter_0 = pInterArr_0[0];
                  } else {
                    z_0 = z_0 + r.s1u_1 | 0;
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
      return Unit_instance;
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
                  var cb_1 = ensureNotNull($this.f1k_1)[r.u1u_1];
                  var temp = decode($this, cb_1);
                  if (temp === -1)
                    return Unit_instance;
                  partClassdata[j_0][classSet_0] = ensureNotNull(r.v1u_1)[temp];
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
                    var b_1 = ensureNotNull(r.w1u_1)[ci_1][pass_0];
                    if (b_1 >= 0) {
                      var target = ensureNotNull(residueBuffers[j_1]);
                      var offset = r.q1u_1 + imul(pcount_0, r.s1u_1) | 0;
                      var nn = r.s1u_1;
                      var book_1 = ensureNotNull($this.f1k_1)[b_1];
                      if (!residueDecode($this, book_1, target, offset, nn, rtype))
                        return Unit_instance;
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
    var a = ensureNotNull($this.z1k_1[blocktype]);
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
          imdctStep3InnerSLoop($this, lim_0, u, iOff, -k0_2 | 0, a, a0Off, k1, k0_0);
          a0Off = a0Off + imul(k1, 4) | 0;
          iOff = iOff - 8 | 0;
        }
         while (1 <= inductionVariable_0);
      l = l + 1 | 0;
    }
    imdctStep3InnerSLoopLd654($this, n >> 5, u, n2 - 1 | 0, a, n);
    // Inline function 'kotlin.run' call
    var bitrev = ensureNotNull($this.d1l_1[blocktype]);
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
    var c = ensureNotNull($this.b1l_1[blocktype]);
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
    var bArr = ensureNotNull($this.a1l_1[blocktype]);
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
  function imdctStep3InnerSLoop($this, n, e, iOff, kOff, aBase, a0Off, k1, k0) {
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
    if (l === $this.c1k_1)
      return $this.c1l_1[0];
    if (l === $this.d1k_1)
      return $this.c1l_1[1];
    return null;
  }
  function doFloor($this, map, i, n, target, finalYArr) {
    var n2 = n >> 1;
    var s = ensureNotNull(map.b1v_1)[i].z1u_1;
    var floor = map.d1v_1[s];
    if ($this.h1k_1[floor] === 0) {
      return setError($this, STBVorbisError_INVALID_STREAM_getInstance());
    } else {
      var g = ensureNotNull(ensureNotNull($this.i1k_1)[floor]);
      var lx0 = 0;
      var ly = imul(finalYArr[0] & 65535, g.n1u_1);
      var lx = lx0;
      var inductionVariable = 1;
      var last = g.p1u_1;
      if (inductionVariable < last)
        do {
          var q = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var j = g.l1u_1[q];
          if (finalYArr[j] >= 0) {
            var hy = imul(finalYArr[j] & 65535, g.n1u_1);
            var hx = g.k1u_1[j] & 65535;
            if (!(lx === hx)) {
              drawLine($this, target, lx, ly, hx, hy, n2);
            }
            lx = hx;
            ly = hy;
          }
        }
         while (inductionVariable < last);
      if (n2 > lx) {
        var dbVal = Companion_getInstance_1().n1j_1[ly & 255];
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
    $this.v1l_1 = 0;
    $this.w1l_1 = 0;
    $l$loop: while (true) {
      if ($this.z1j_1)
        return false;
      if (!maybeStartPacket($this))
        return false;
      if (!(getBits($this, 1) === 0)) {
        while (!(-1 === get8Packet($this))) {
        }
        continue $l$loop;
      }
      var i = getBits($this, ilog(Companion_getInstance_1(), $this.o1k_1 - 1 | 0));
      if (i === -1)
        return false;
      if (i >= $this.o1k_1)
        return false;
      mode[0] = i;
      var m = $this.p1k_1[i];
      var n;
      var prev;
      var next;
      if (!(m.f1v_1 === 0)) {
        n = $this.d1k_1;
        prev = getBits($this, 1);
        next = getBits($this, 1);
      } else {
        n = $this.c1k_1;
        prev = 0;
        next = 0;
      }
      var windowCenter = n >> 1;
      if (!(m.f1v_1 === 0) && prev === 0) {
        pLeftStart[0] = (n - $this.c1k_1 | 0) >> 2;
        pLeftEnd[0] = (n + $this.c1k_1 | 0) >> 2;
      } else {
        pLeftStart[0] = 0;
        pLeftEnd[0] = windowCenter;
      }
      if (!(m.f1v_1 === 0) && next === 0) {
        pRightStart[0] = (imul(n, 3) - $this.c1k_1 | 0) >> 2;
        pRightEnd[0] = (imul(n, 3) + $this.c1k_1 | 0) >> 2;
      } else {
        pRightStart[0] = windowCenter;
        pRightEnd[0] = n;
      }
      return true;
    }
  }
  function vorbisDecodePacketRest($this, lenArr, m, leftStart0, leftEnd, rightStart, rightEnd, pLeft) {
    var leftStart = leftStart0;
    var n = $this.b1k_1[m.f1v_1];
    var map = ensureNotNull($this.n1k_1)[m.g1v_1];
    var n2 = n >> 1;
    var zeroChannel = booleanArray(256);
    var reallyZeroChannel = booleanArray(256);
    var inductionVariable = 0;
    var last = $this.r1j_1;
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var s = ensureNotNull(map.b1v_1)[i].z1u_1;
        zeroChannel[i] = false;
        var floor = map.d1v_1[s];
        if ($this.h1k_1[floor] === 0) {
          return setError($this, STBVorbisError_INVALID_STREAM_getInstance());
        } else {
          var g = ensureNotNull(ensureNotNull($this.i1k_1)[floor]);
          if (!(getBits($this, 1) === 0)) {
            // Inline function 'kotlin.intArrayOf' call
            var rangeList = new Int32Array([256, 128, 86, 64]);
            var range = rangeList[g.n1u_1 - 1 | 0];
            var offset = 2;
            var fy = ensureNotNull($this.w1k_1[i]);
            fy[0] = toShort(getBits($this, ilog(Companion_getInstance_1(), range) - 1 | 0));
            fy[1] = toShort(getBits($this, ilog(Companion_getInstance_1(), range) - 1 | 0));
            var inductionVariable_0 = 0;
            var last_0 = g.e1u_1;
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var pclass = g.f1u_1[j];
                var cdim = g.g1u_1[pclass];
                var cbits = g.h1u_1[pclass];
                var csub = (1 << cbits) - 1 | 0;
                var cval = 0;
                if (!(cbits === 0)) {
                  var cb = ensureNotNull($this.f1k_1)[g.i1u_1[pclass]];
                  cval = decode($this, cb);
                }
                var inductionVariable_1 = 0;
                if (inductionVariable_1 < cdim)
                  do {
                    var k = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var book = g.j1u_1[pclass][cval & csub];
                    cval = cval >> cbits;
                    if (book >= 0) {
                      var cb_0 = ensureNotNull($this.f1k_1)[book];
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
            if ($this.p1l_1 === -1) {
              zeroChannel[i] = true;
              continue $l$loop;
            }
            var step2Flag = booleanArray(256);
            step2Flag[0] = true;
            step2Flag[1] = true;
            var inductionVariable_2 = 2;
            var last_1 = g.p1u_1;
            if (inductionVariable_2 < last_1)
              do {
                var j_0 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                var low = g.m1u_1[j_0][0];
                var high = g.m1u_1[j_0][1];
                var pred = predictPoint($this, g.k1u_1[j_0] & 65535, g.k1u_1[low] & 65535, g.k1u_1[high] & 65535, fy[low], fy[high]);
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
            var last_2 = g.p1u_1;
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
    var last_3 = $this.r1j_1;
    if (inductionVariable_4 < last_3)
      do {
        var i_0 = inductionVariable_4;
        inductionVariable_4 = inductionVariable_4 + 1 | 0;
        reallyZeroChannel[i_0] = zeroChannel[i_0];
      }
       while (inductionVariable_4 < last_3);
    var inductionVariable_5 = 0;
    var last_4 = map.a1v_1;
    if (inductionVariable_5 < last_4)
      do {
        var i_1 = inductionVariable_5;
        inductionVariable_5 = inductionVariable_5 + 1 | 0;
        if (!zeroChannel[ensureNotNull(map.b1v_1)[i_1].x1u_1] || !zeroChannel[ensureNotNull(map.b1v_1)[i_1].y1u_1]) {
          zeroChannel[ensureNotNull(map.b1v_1)[i_1].x1u_1] = false;
          zeroChannel[ensureNotNull(map.b1v_1)[i_1].y1u_1] = false;
        }
      }
       while (inductionVariable_5 < last_4);
    var inductionVariable_6 = 0;
    var last_5 = map.c1v_1;
    if (inductionVariable_6 < last_5)
      do {
        var i_2 = inductionVariable_6;
        inductionVariable_6 = inductionVariable_6 + 1 | 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var residueBuffers = Array(16);
        var doNotDecode = booleanArray(256);
        var ch = 0;
        var inductionVariable_7 = 0;
        var last_6 = $this.r1j_1;
        if (inductionVariable_7 < last_6)
          do {
            var j_2 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            if (ensureNotNull(map.b1v_1)[j_2].z1u_1 === i_2) {
              if (zeroChannel[j_2]) {
                doNotDecode[ch] = true;
                residueBuffers[ch] = null;
              } else {
                doNotDecode[ch] = false;
                residueBuffers[ch] = $this.r1k_1[j_2];
              }
              ch = ch + 1 | 0;
            }
          }
           while (inductionVariable_7 < last_6);
        var r = map.e1v_1[i_2];
        decodeResidue($this, residueBuffers, ch, n2, r, doNotDecode);
      }
       while (inductionVariable_6 < last_5);
    var inductionVariable_8 = map.a1v_1 - 1 | 0;
    if (0 <= inductionVariable_8)
      do {
        var i_3 = inductionVariable_8;
        inductionVariable_8 = inductionVariable_8 + -1 | 0;
        var mag = ensureNotNull($this.r1k_1[ensureNotNull(map.b1v_1)[i_3].x1u_1]);
        var ang = ensureNotNull($this.r1k_1[ensureNotNull(map.b1v_1)[i_3].y1u_1]);
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
    var last_7 = $this.r1j_1;
    if (inductionVariable_10 < last_7)
      do {
        var i_4 = inductionVariable_10;
        inductionVariable_10 = inductionVariable_10 + 1 | 0;
        if (reallyZeroChannel[i_4]) {
          fill(ensureNotNull($this.r1k_1[i_4]), 0.0, 0, n2);
        } else {
          doFloor($this, map, i_4, n, ensureNotNull($this.r1k_1[i_4]), ensureNotNull($this.w1k_1[i_4]));
        }
      }
       while (inductionVariable_10 < last_7);
    var inductionVariable_11 = 0;
    var last_8 = $this.r1j_1;
    if (inductionVariable_11 < last_8)
      do {
        var i_5 = inductionVariable_11;
        inductionVariable_11 = inductionVariable_11 + 1 | 0;
        inverseMdct($this, ensureNotNull($this.r1k_1[i_5]), n, m.f1v_1);
      }
       while (inductionVariable_11 < last_8);
    flushPacket($this);
    if ($this.k1l_1) {
      $this.x1k_1 = -n2 | 0;
      $this.t1l_1 = n - rightEnd | 0;
      $this.y1k_1 = true;
      $this.k1l_1 = false;
    } else if (!($this.t1l_1 === 0)) {
      if ($this.t1l_1 >= (rightStart - leftStart | 0)) {
        $this.t1l_1 = $this.t1l_1 - (rightStart - leftStart | 0) | 0;
        leftStart = rightStart;
        pLeft[0] = leftStart;
      } else {
        leftStart = leftStart + $this.t1l_1 | 0;
        pLeft[0] = leftStart;
        $this.t1l_1 = 0;
      }
    }
    if ($this.n1l_1 === $this.r1l_1) {
      if ($this.y1k_1 && !(($this.i1l_1 & 4) === 0)) {
        var currentEnd = $this.s1l_1;
        var tmp = bitwiseAnd(fromInt(currentEnd), new Long(-1, 0));
        var tmp0 = bitwiseAnd(fromInt($this.x1k_1), new Long(-1, 0));
        // Inline function 'kotlin.Long.plus' call
        var other = rightEnd - leftStart | 0;
        var tmp$ret$2 = add(tmp0, fromInt(other));
        if (compare(tmp, tmp$ret$2) < 0) {
          if (compare(bitwiseAnd(fromInt(currentEnd), new Long(-1, 0)), bitwiseAnd(fromInt($this.x1k_1), new Long(-1, 0))) < 0) {
            lenArr[0] = 0;
          } else {
            lenArr[0] = currentEnd - $this.x1k_1 | 0;
          }
          lenArr[0] = lenArr[0] + leftStart | 0;
          if (rightEnd < lenArr[0]) {
            lenArr[0] = rightEnd;
          }
          $this.x1k_1 = $this.x1k_1 + lenArr[0] | 0;
          return true;
        }
      }
      $this.x1k_1 = $this.s1l_1 - (n2 - leftStart | 0) | 0;
      $this.y1k_1 = true;
    }
    if ($this.y1k_1)
      $this.x1k_1 = $this.x1k_1 + (rightStart - leftStart | 0) | 0;
    lenArr[0] = rightEnd;
    return true;
  }
  function vorbisDecodePacket($this, lenArr, pLeft, pRight) {
    var mode = new Int32Array(1);
    var leftEnd = new Int32Array(1);
    var rightEnd = new Int32Array(1);
    if (!vorbisDecodeInitial($this, pLeft, leftEnd, pRight, rightEnd, mode))
      return false;
    return vorbisDecodePacketRest($this, lenArr, $this.p1k_1[mode[0]], pLeft[0], leftEnd[0], pRight[0], rightEnd[0], pLeft);
  }
  function vorbisFinishFrame($this, len0, left, right) {
    var len = len0;
    if (!($this.v1k_1 === 0)) {
      var n = $this.v1k_1;
      var tmp0_elvis_lhs = getWindow($this, n);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return 0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var w = tmp;
      var inductionVariable = 0;
      var last = $this.r1j_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < n)
            do {
              var j = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              ensureNotNull($this.r1k_1[i])[left + j | 0] = ensureNotNull($this.r1k_1[i])[left + j | 0] * w[j] + ensureNotNull($this.u1k_1[i])[j] * w[(n - 1 | 0) - j | 0];
            }
             while (inductionVariable_0 < n);
        }
         while (inductionVariable < last);
    }
    var prev = $this.v1k_1;
    $this.v1k_1 = len - right | 0;
    var inductionVariable_1 = 0;
    var last_0 = $this.r1j_1;
    if (inductionVariable_1 < last_0)
      do {
        var i_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var j_0 = 0;
        while ((right + j_0 | 0) < len) {
          ensureNotNull($this.u1k_1[i_0])[j_0] = ensureNotNull($this.r1k_1[i_0])[right + j_0 | 0];
          j_0 = j_0 + 1 | 0;
        }
      }
       while (inductionVariable_1 < last_0);
    if (prev === 0)
      return 0;
    if (right > len)
      len = len;
    var actualRight = right > len ? len : right;
    $this.u1l_1 = $this.u1l_1 + (actualRight - left | 0) | 0;
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
    $this.k1l_1 = true;
    if (!startPage($this))
      return false;
    if (($this.i1l_1 & 2) === 0)
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    if (!(($this.i1l_1 & 4) === 0))
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    if (!(($this.i1l_1 & 1) === 0))
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    if (!($this.g1l_1 === 1))
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    if (!($this.h1l_1[0] === 30)) {
      if ($this.h1l_1[0] === 64) {
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
    $this.r1j_1 = get8($this);
    if ($this.r1j_1 === 0)
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    if (16 < $this.r1j_1)
      return setError($this, STBVorbisError_TOO_MANY_CHANNELS_getInstance());
    $this.q1j_1 = get32($this);
    if ($this.q1j_1 === 0)
      return setError($this, STBVorbisError_INVALID_FIRST_PAGE_getInstance());
    get32($this);
    get32($this);
    get32($this);
    var x = get8($this);
    var log0 = x & 15;
    var log1 = x >> 4;
    $this.c1k_1 = 1 << log0;
    $this.d1k_1 = 1 << log1;
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
    skip($this, $this.j1l_1);
    $this.j1l_1 = 0;
    var segLen;
    do {
      segLen = nextSegment($this);
      skip($this, segLen);
      $this.j1l_1 = 0;
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
    $this.e1k_1 = getBits($this, 8) + 1 | 0;
    var tmp_14 = $this;
    var tmp_15 = 0;
    var tmp_16 = $this.e1k_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_17 = Array(tmp_16);
    while (tmp_15 < tmp_16) {
      tmp_17[tmp_15] = new Codebook();
      tmp_15 = tmp_15 + 1 | 0;
    }
    tmp_14.f1k_1 = tmp_17;
    var inductionVariable_4 = 0;
    var last = $this.e1k_1;
    if (inductionVariable_4 < last)
      do {
        var i_3 = inductionVariable_4;
        inductionVariable_4 = inductionVariable_4 + 1 | 0;
        var c = ensureNotNull($this.f1k_1)[i_3];
        if (!(getBits($this, 8) === 66))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if (!(getBits($this, 8) === 67))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if (!(getBits($this, 8) === 86))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        var xb = getBits($this, 8);
        c.n1t_1 = (getBits($this, 8) << 8) + xb | 0;
        xb = getBits($this, 8);
        var yb = getBits($this, 8);
        c.o1t_1 = ((getBits($this, 8) << 16) + (yb << 8) | 0) + xb | 0;
        var ordered = getBits($this, 1);
        c.v1t_1 = !(ordered === 0) ? 0 : getBits($this, 1);
        if (c.n1t_1 === 0 && !(c.o1t_1 === 0))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        var lengths;
        if (!(c.v1t_1 === 0)) {
          lengths = new Int8Array(c.o1t_1);
        } else {
          lengths = new Int8Array(c.o1t_1);
          c.p1t_1 = lengths;
        }
        var total = 0;
        if (!(ordered === 0)) {
          var currentEntry = 0;
          var currentLength = getBits($this, 5) + 1 | 0;
          while (currentEntry < c.o1t_1) {
            var limit = c.o1t_1 - currentEntry | 0;
            var n = getBits($this, ilog(Companion_getInstance_1(), limit));
            if (currentLength >= 32)
              return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
            if ((currentEntry + n | 0) > c.o1t_1)
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
          var last_1 = c.o1t_1;
          if (inductionVariable_6 < last_1)
            do {
              var j_0 = inductionVariable_6;
              inductionVariable_6 = inductionVariable_6 + 1 | 0;
              var present = !(c.v1t_1 === 0) ? getBits($this, 1) : 1;
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
        if (!(c.v1t_1 === 0) && total >= c.o1t_1 >> 2) {
          var tmp_18 = c;
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_18.p1t_1 = lengths.slice();
          c.v1t_1 = 0;
        }
        var sortedCount;
        if (!(c.v1t_1 === 0)) {
          sortedCount = total;
        } else {
          var sc = 0;
          var inductionVariable_7 = 0;
          var last_2 = c.o1t_1;
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
        c.d1u_1 = sortedCount;
        var values = null;
        if (c.v1t_1 === 0) {
          c.y1t_1 = new Int32Array(c.o1t_1);
        } else {
          if (!(c.d1u_1 === 0)) {
            c.p1t_1 = new Int8Array(c.d1u_1);
            c.y1t_1 = new Int32Array(c.d1u_1);
            values = new Int32Array(c.d1u_1);
          }
        }
        var finalLengths = !(c.v1t_1 === 0) ? lengths : ensureNotNull(c.p1t_1);
        if (!computeCodewords($this, c, finalLengths, c.o1t_1, values)) {
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        }
        if (!(c.d1u_1 === 0)) {
          c.a1u_1 = new Int32Array(c.d1u_1 + 1 | 0);
          c.b1u_1 = new Int32Array(c.d1u_1);
          computeSortedHuffman($this, c, finalLengths, values);
        }
        if (!(c.v1t_1 === 0)) {
          c.y1t_1 = null;
        }
        computeAcceleratedHuffman($this, c);
        c.t1t_1 = getBits($this, 4);
        if (2 < c.t1t_1)
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if (0 < c.t1t_1) {
          c.q1t_1 = float32Unpack(Companion_getInstance_1(), getBits($this, 32));
          c.r1t_1 = float32Unpack(Companion_getInstance_1(), getBits($this, 32));
          c.s1t_1 = getBits($this, 4) + 1 | 0;
          c.u1t_1 = getBits($this, 1);
          if (c.t1t_1 === 1) {
            var lv = lookup1Values(Companion_getInstance_1(), c.o1t_1, c.n1t_1);
            if (0 > lv)
              return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
            c.w1t_1 = lv;
          } else {
            c.w1t_1 = imul(c.o1t_1, c.n1t_1);
          }
          if (c.w1t_1 === 0)
            return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
          var mults = new Int32Array(c.w1t_1);
          var inductionVariable_8 = 0;
          var last_3 = c.w1t_1;
          if (inductionVariable_8 < last_3)
            do {
              var j_2 = inductionVariable_8;
              inductionVariable_8 = inductionVariable_8 + 1 | 0;
              var q = getBits($this, c.s1t_1);
              if (q === -1)
                return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
              mults[j_2] = q;
            }
             while (inductionVariable_8 < last_3);
          if (c.t1t_1 === 1) {
            var last_4 = 0.0;
            var isSparse = !(c.v1t_1 === 0);
            if (!isSparse || c.d1u_1 !== 0) {
              var expandLen = isSparse ? c.d1u_1 : c.o1t_1;
              c.x1t_1 = new Float32Array(imul(expandLen, c.n1t_1));
              var inductionVariable_9 = 0;
              if (inductionVariable_9 < expandLen)
                do {
                  var j_3 = inductionVariable_9;
                  inductionVariable_9 = inductionVariable_9 + 1 | 0;
                  var z = isSparse ? ensureNotNull(c.b1u_1)[j_3] : j_3;
                  var div = 1;
                  var inductionVariable_10 = 0;
                  var last_5 = c.n1t_1;
                  if (inductionVariable_10 < last_5)
                    do {
                      var k = inductionVariable_10;
                      inductionVariable_10 = inductionVariable_10 + 1 | 0;
                      var off = (z / div | 0) % c.w1t_1 | 0;
                      var v = mults[off] * c.r1t_1 + c.q1t_1 + last_4;
                      ensureNotNull(c.x1t_1)[imul(j_3, c.n1t_1) + k | 0] = v;
                      if (!(c.u1t_1 === 0))
                        last_4 = v;
                      if ((k + 1 | 0) < c.n1t_1) {
                        if (compare(bitwiseAnd(fromInt(div), new Long(-1, 0)), divide(new Long(-1, 0), bitwiseAnd(fromInt(c.w1t_1), new Long(-1, 0)))) > 0) {
                          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
                        }
                        div = imul(div, c.w1t_1);
                      }
                    }
                     while (inductionVariable_10 < last_5);
                }
                 while (inductionVariable_9 < expandLen);
              c.t1t_1 = 2;
            }
          } else {
            var last_6 = 0.0;
            c.x1t_1 = new Float32Array(c.w1t_1);
            var inductionVariable_11 = 0;
            var last_7 = c.w1t_1;
            if (inductionVariable_11 < last_7)
              do {
                var j_4 = inductionVariable_11;
                inductionVariable_11 = inductionVariable_11 + 1 | 0;
                var v_0 = mults[j_4] * c.r1t_1 + c.q1t_1 + last_6;
                ensureNotNull(c.x1t_1)[j_4] = v_0;
                if (!(c.u1t_1 === 0))
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
    $this.g1k_1 = getBits($this, 6) + 1 | 0;
    var tmp_19 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = $this.g1k_1;
    tmp_19.i1k_1 = Array(size);
    var inductionVariable_13 = 0;
    var last_8 = $this.g1k_1;
    if (inductionVariable_13 < last_8)
      do {
        var i_5 = inductionVariable_13;
        inductionVariable_13 = inductionVariable_13 + 1 | 0;
        $this.h1k_1[i_5] = getBits($this, 16);
        if (1 < $this.h1k_1[i_5])
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if ($this.h1k_1[i_5] === 0) {
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
          ensureNotNull($this.i1k_1)[i_5] = g;
          var maxClass = -1;
          g.e1u_1 = getBits($this, 5);
          var inductionVariable_15 = 0;
          var last_9 = g.e1u_1;
          if (inductionVariable_15 < last_9)
            do {
              var j_6 = inductionVariable_15;
              inductionVariable_15 = inductionVariable_15 + 1 | 0;
              g.f1u_1[j_6] = getBits($this, 4);
              if (g.f1u_1[j_6] > maxClass)
                maxClass = g.f1u_1[j_6];
            }
             while (inductionVariable_15 < last_9);
          var inductionVariable_16 = 0;
          var last_10 = maxClass;
          if (inductionVariable_16 <= last_10)
            do {
              var j_7 = inductionVariable_16;
              inductionVariable_16 = inductionVariable_16 + 1 | 0;
              g.g1u_1[j_7] = getBits($this, 3) + 1 | 0;
              g.h1u_1[j_7] = getBits($this, 2);
              if (!(g.h1u_1[j_7] === 0)) {
                g.i1u_1[j_7] = getBits($this, 8);
                if (g.i1u_1[j_7] >= $this.e1k_1)
                  return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
              }
              var inductionVariable_17 = 0;
              var last_11 = 1 << g.h1u_1[j_7];
              if (inductionVariable_17 < last_11)
                do {
                  var k_0 = inductionVariable_17;
                  inductionVariable_17 = inductionVariable_17 + 1 | 0;
                  g.j1u_1[j_7][k_0] = toShort(getBits($this, 8) - 1 | 0);
                  if (g.j1u_1[j_7][k_0] >= $this.e1k_1)
                    return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
                }
                 while (inductionVariable_17 < last_11);
            }
             while (!(j_7 === last_10));
          g.n1u_1 = getBits($this, 2) + 1 | 0;
          g.o1u_1 = getBits($this, 4);
          g.k1u_1[0] = 0;
          g.k1u_1[1] = toShort(1 << g.o1u_1);
          g.p1u_1 = 2;
          var inductionVariable_18 = 0;
          var last_12 = g.e1u_1;
          if (inductionVariable_18 < last_12)
            do {
              var j_8 = inductionVariable_18;
              inductionVariable_18 = inductionVariable_18 + 1 | 0;
              var c_0 = g.f1u_1[j_8];
              var inductionVariable_19 = 0;
              var last_13 = g.g1u_1[c_0];
              if (inductionVariable_19 < last_13)
                do {
                  var k_1 = inductionVariable_19;
                  inductionVariable_19 = inductionVariable_19 + 1 | 0;
                  g.k1u_1[g.p1u_1] = toShort(getBits($this, g.o1u_1));
                  g.p1u_1 = g.p1u_1 + 1 | 0;
                }
                 while (inductionVariable_19 < last_13);
            }
             while (inductionVariable_18 < last_12);
          var tmp_20 = 0;
          var tmp_21 = g.p1u_1;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_22 = Array(tmp_21);
          while (tmp_20 < tmp_21) {
            var tmp_23 = tmp_20;
            tmp_22[tmp_23] = new StbVorbis$startDecoder$FloorOrdering(g.k1u_1[tmp_23] & 65535, tmp_23);
            tmp_20 = tmp_20 + 1 | 0;
          }
          var p = tmp_22;
          // Inline function 'kotlin.collections.sortedBy' call
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_24 = StbVorbis$startDecoder$lambda;
          var tmp$ret$14 = new sam$kotlin_Comparator$0_6(tmp_24);
          var sorted = sortedWith_0(p, tmp$ret$14);
          var inductionVariable_20 = 0;
          var last_14 = g.p1u_1 - 1 | 0;
          if (inductionVariable_20 < last_14)
            do {
              var j_9 = inductionVariable_20;
              inductionVariable_20 = inductionVariable_20 + 1 | 0;
              if (sorted.r(j_9).m1v_1 === sorted.r(j_9 + 1 | 0).m1v_1)
                return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
            }
             while (inductionVariable_20 < last_14);
          var inductionVariable_21 = 0;
          var last_15 = g.p1u_1;
          if (inductionVariable_21 < last_15)
            do {
              var j_10 = inductionVariable_21;
              inductionVariable_21 = inductionVariable_21 + 1 | 0;
              g.l1u_1[j_10] = sorted.r(j_10).n1v_1;
            }
             while (inductionVariable_21 < last_15);
          var inductionVariable_22 = 2;
          var last_16 = g.p1u_1;
          if (inductionVariable_22 < last_16)
            do {
              var j_11 = inductionVariable_22;
              inductionVariable_22 = inductionVariable_22 + 1 | 0;
              var lowArr = new Int32Array(1);
              var highArr = new Int32Array(1);
              findNeighbors(Companion_getInstance_1(), g.k1u_1, j_11, lowArr, highArr);
              g.m1u_1[j_11][0] = lowArr[0];
              g.m1u_1[j_11][1] = highArr[0];
            }
             while (inductionVariable_22 < last_16);
          if (g.p1u_1 > longestFloorlist)
            longestFloorlist = g.p1u_1;
        }
      }
       while (inductionVariable_13 < last_8);
    $this.j1k_1 = getBits($this, 6) + 1 | 0;
    var tmp_25 = $this;
    var tmp_26 = 0;
    var tmp_27 = $this.j1k_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_28 = Array(tmp_27);
    while (tmp_26 < tmp_27) {
      tmp_28[tmp_26] = new Residue();
      tmp_26 = tmp_26 + 1 | 0;
    }
    tmp_25.l1k_1 = tmp_28;
    var inductionVariable_23 = 0;
    var last_17 = $this.j1k_1;
    if (inductionVariable_23 < last_17)
      do {
        var i_6 = inductionVariable_23;
        inductionVariable_23 = inductionVariable_23 + 1 | 0;
        var r = ensureNotNull($this.l1k_1)[i_6];
        $this.k1k_1[i_6] = getBits($this, 16);
        if (2 < $this.k1k_1[i_6])
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        r.q1u_1 = getBits($this, 24);
        r.r1u_1 = getBits($this, 24);
        if (r.q1u_1 > r.r1u_1)
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        r.s1u_1 = getBits($this, 24) + 1 | 0;
        r.t1u_1 = getBits($this, 6) + 1 | 0;
        r.u1u_1 = getBits($this, 8);
        if (r.u1u_1 >= $this.e1k_1)
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        var residueCascade = new Int32Array(64);
        var inductionVariable_24 = 0;
        var last_18 = r.t1u_1;
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
        var tmp_31 = r.t1u_1;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_32 = Array(tmp_31);
        while (tmp_30 < tmp_31) {
          tmp_32[tmp_30] = new Int16Array(8);
          tmp_30 = tmp_30 + 1 | 0;
        }
        tmp_29.w1u_1 = tmp_32;
        var inductionVariable_25 = 0;
        var last_19 = r.t1u_1;
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
                  ensureNotNull(r.w1u_1)[j_13][k_2] = toShort(getBits($this, 8));
                  if (ensureNotNull(r.w1u_1)[j_13][k_2] >= $this.e1k_1)
                    return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
                } else {
                  ensureNotNull(r.w1u_1)[j_13][k_2] = -1;
                }
              }
               while (inductionVariable_26 < 8);
          }
           while (inductionVariable_25 < last_19);
        var cbEntries = ensureNotNull($this.f1k_1)[r.u1u_1].o1t_1;
        var tmp_33 = r;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp_33.v1u_1 = Array(cbEntries);
        var inductionVariable_27 = 0;
        if (inductionVariable_27 < cbEntries)
          do {
            var j_14 = inductionVariable_27;
            inductionVariable_27 = inductionVariable_27 + 1 | 0;
            var classwordsCount = ensureNotNull($this.f1k_1)[r.u1u_1].n1t_1;
            var temp = j_14;
            ensureNotNull(r.v1u_1)[j_14] = new Int8Array(classwordsCount);
            var inductionVariable_28 = classwordsCount - 1 | 0;
            if (0 <= inductionVariable_28)
              do {
                var k_3 = inductionVariable_28;
                inductionVariable_28 = inductionVariable_28 + -1 | 0;
                ensureNotNull(ensureNotNull(r.v1u_1)[j_14])[k_3] = toByte(temp % r.t1u_1 | 0);
                temp = temp / r.t1u_1 | 0;
              }
               while (0 <= inductionVariable_28);
          }
           while (inductionVariable_27 < cbEntries);
      }
       while (inductionVariable_23 < last_17);
    $this.m1k_1 = getBits($this, 6) + 1 | 0;
    var tmp_34 = $this;
    var tmp_35 = 0;
    var tmp_36 = $this.m1k_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_37 = Array(tmp_36);
    while (tmp_35 < tmp_36) {
      tmp_37[tmp_35] = new Mapping();
      tmp_35 = tmp_35 + 1 | 0;
    }
    tmp_34.n1k_1 = tmp_37;
    var inductionVariable_29 = 0;
    var last_20 = $this.m1k_1;
    if (inductionVariable_29 < last_20)
      do {
        var i_7 = inductionVariable_29;
        inductionVariable_29 = inductionVariable_29 + 1 | 0;
        var map = ensureNotNull($this.n1k_1)[i_7];
        var mappingType = getBits($this, 16);
        if (!(mappingType === 0))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        var tmp_38 = map;
        var tmp_39 = 0;
        var tmp_40 = $this.r1j_1;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_41 = Array(tmp_40);
        while (tmp_39 < tmp_40) {
          tmp_41[tmp_39] = new MappingChannel();
          tmp_39 = tmp_39 + 1 | 0;
        }
        tmp_38.b1v_1 = tmp_41;
        if (!(getBits($this, 1) === 0))
          map.c1v_1 = getBits($this, 4) + 1 | 0;
        else
          map.c1v_1 = 1;
        if (!(getBits($this, 1) === 0)) {
          map.a1v_1 = getBits($this, 8) + 1 | 0;
          if (map.a1v_1 > $this.r1j_1)
            return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
          var inductionVariable_30 = 0;
          var last_21 = map.a1v_1;
          if (inductionVariable_30 < last_21)
            do {
              var k_4 = inductionVariable_30;
              inductionVariable_30 = inductionVariable_30 + 1 | 0;
              ensureNotNull(map.b1v_1)[k_4].x1u_1 = getBits($this, ilog(Companion_getInstance_1(), $this.r1j_1 - 1 | 0));
              ensureNotNull(map.b1v_1)[k_4].y1u_1 = getBits($this, ilog(Companion_getInstance_1(), $this.r1j_1 - 1 | 0));
              if (ensureNotNull(map.b1v_1)[k_4].x1u_1 >= $this.r1j_1)
                return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
              if (ensureNotNull(map.b1v_1)[k_4].y1u_1 >= $this.r1j_1)
                return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
              if (ensureNotNull(map.b1v_1)[k_4].x1u_1 === ensureNotNull(map.b1v_1)[k_4].y1u_1)
                return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
            }
             while (inductionVariable_30 < last_21);
        } else {
          map.a1v_1 = 0;
        }
        if (!(getBits($this, 2) === 0))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if (1 < map.c1v_1) {
          var inductionVariable_31 = 0;
          var last_22 = $this.r1j_1;
          if (inductionVariable_31 < last_22)
            do {
              var j_15 = inductionVariable_31;
              inductionVariable_31 = inductionVariable_31 + 1 | 0;
              ensureNotNull(map.b1v_1)[j_15].z1u_1 = getBits($this, 4);
              if (ensureNotNull(map.b1v_1)[j_15].z1u_1 >= map.c1v_1)
                return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
            }
             while (inductionVariable_31 < last_22);
        } else {
          var inductionVariable_32 = 0;
          var last_23 = $this.r1j_1;
          if (inductionVariable_32 < last_23)
            do {
              var j_16 = inductionVariable_32;
              inductionVariable_32 = inductionVariable_32 + 1 | 0;
              ensureNotNull(map.b1v_1)[j_16].z1u_1 = 0;
            }
             while (inductionVariable_32 < last_23);
        }
        var inductionVariable_33 = 0;
        var last_24 = map.c1v_1;
        if (inductionVariable_33 < last_24)
          do {
            var j_17 = inductionVariable_33;
            inductionVariable_33 = inductionVariable_33 + 1 | 0;
            getBits($this, 8);
            map.d1v_1[j_17] = getBits($this, 8);
            map.e1v_1[j_17] = getBits($this, 8);
            if (map.d1v_1[j_17] >= $this.g1k_1)
              return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
            if (map.e1v_1[j_17] >= $this.j1k_1)
              return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
          }
           while (inductionVariable_33 < last_24);
      }
       while (inductionVariable_29 < last_20);
    $this.o1k_1 = getBits($this, 6) + 1 | 0;
    var inductionVariable_34 = 0;
    var last_25 = $this.o1k_1;
    if (inductionVariable_34 < last_25)
      do {
        var i_8 = inductionVariable_34;
        inductionVariable_34 = inductionVariable_34 + 1 | 0;
        var m = $this.p1k_1[i_8];
        m.f1v_1 = getBits($this, 1);
        m.h1v_1 = getBits($this, 16);
        m.i1v_1 = getBits($this, 16);
        m.g1v_1 = getBits($this, 8);
        if (!(m.h1v_1 === 0))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if (!(m.i1v_1 === 0))
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
        if (m.g1v_1 >= $this.m1k_1)
          return setError($this, STBVorbisError_INVALID_SETUP_getInstance());
      }
       while (inductionVariable_34 < last_25);
    flushPacket($this);
    $this.v1k_1 = 0;
    var inductionVariable_35 = 0;
    var last_26 = $this.r1j_1;
    if (inductionVariable_35 < last_26)
      do {
        var i_9 = inductionVariable_35;
        inductionVariable_35 = inductionVariable_35 + 1 | 0;
        $this.r1k_1[i_9] = new Float32Array($this.d1k_1);
        $this.u1k_1[i_9] = new Float32Array($this.d1k_1 / 2 | 0);
        $this.w1k_1[i_9] = new Int16Array(longestFloorlist);
      }
       while (inductionVariable_35 < last_26);
    if (!initBlocksize($this, 0, $this.c1k_1))
      return false;
    if (!initBlocksize($this, 1, $this.d1k_1))
      return false;
    $this.b1k_1[0] = $this.c1k_1;
    $this.b1k_1[1] = $this.d1k_1;
    if ($this.l1l_1 === -1) {
      $this.w1j_1 = getFileOffset($this);
    } else {
      $this.w1j_1 = 0;
    }
    return true;
  }
  function vorbisFindPage($this, endArr, lastArr) {
    $l$loop_0: while (true) {
      if ($this.z1j_1)
        return false;
      var n = get8($this);
      if (n === 79) {
        var retryLoc = getFileOffset($this);
        // Inline function 'kotlin.Long.minus' call
        var this_0 = bitwiseAnd(fromInt(retryLoc), new Long(-1, 0));
        var tmp$ret$0 = subtract(this_0, fromInt(25));
        if (compare(tmp$ret$0, bitwiseAnd(fromInt($this.v1j_1), new Long(-1, 0))) > 0)
          return false;
        var matched = true;
        var inductionVariable = 1;
        if (inductionVariable < 4)
          $l$loop: do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (!(get8($this) === (Companion_getInstance_1().o1j_1[i] & 255))) {
              matched = false;
              break $l$loop;
            }
          }
           while (inductionVariable < 4);
        if ($this.z1j_1)
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
          if ($this.z1j_1)
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
          if (!(len === 0) && $this.z1j_1)
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
  function sam$kotlin_Comparator$0_5(function_0) {
    this.o1v_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_5).wb = function (a, b) {
    return this.o1v_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).compare = function (a, b) {
    return this.wb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).u2 = function () {
    return this.o1v_1;
  };
  protoOf(sam$kotlin_Comparator$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
  };
  function sam$kotlin_Comparator$0_6(function_0) {
    this.p1v_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_6).wb = function (a, b) {
    return this.p1v_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_6).compare = function (a, b) {
    return this.wb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_6).u2 = function () {
    return this.p1v_1;
  };
  protoOf(sam$kotlin_Comparator$0_6).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
  };
  function StbVorbis$computeSortedHuffman$lambda($sortedPart) {
    return function (a, b) {
      var ua = bitwiseAnd(fromInt($sortedPart[a]), new Long(-1, 0));
      var ub = bitwiseAnd(fromInt($sortedPart[b]), new Long(-1, 0));
      return ua.t2(ub);
    };
  }
  function StbVorbis$startDecoder$FloorOrdering(x, id) {
    this.m1v_1 = x;
    this.n1v_1 = id;
  }
  protoOf(StbVorbis$startDecoder$FloorOrdering).toString = function () {
    return 'FloorOrdering(x=' + this.m1v_1 + ', id=' + this.n1v_1 + ')';
  };
  protoOf(StbVorbis$startDecoder$FloorOrdering).hashCode = function () {
    var result = this.m1v_1;
    result = imul(result, 31) + this.n1v_1 | 0;
    return result;
  };
  protoOf(StbVorbis$startDecoder$FloorOrdering).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StbVorbis$startDecoder$FloorOrdering))
      return false;
    if (!(this.m1v_1 === other.m1v_1))
      return false;
    if (!(this.n1v_1 === other.n1v_1))
      return false;
    return true;
  };
  function StbVorbis$startDecoder$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.m1v_1;
    var tmp$ret$1 = b.m1v_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function StbVorbis() {
    Companion_getInstance_1();
    this.q1j_1 = 0;
    this.r1j_1 = 0;
    this.s1j_1 = new Int8Array(0);
    this.t1j_1 = 0;
    this.u1j_1 = 0;
    this.v1j_1 = 0;
    this.w1j_1 = 0;
    this.x1j_1 = new ProbedPage();
    this.y1j_1 = new ProbedPage();
    this.z1j_1 = false;
    this.a1k_1 = STBVorbisError_NO_ERROR_getInstance();
    this.b1k_1 = new Int32Array(2);
    this.c1k_1 = 0;
    this.d1k_1 = 0;
    this.e1k_1 = 0;
    this.f1k_1 = null;
    this.g1k_1 = 0;
    this.h1k_1 = new Int32Array(64);
    this.i1k_1 = null;
    this.j1k_1 = 0;
    this.k1k_1 = new Int32Array(64);
    this.l1k_1 = null;
    this.m1k_1 = 0;
    this.n1k_1 = null;
    this.o1k_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(64);
    while (tmp_0 < 64) {
      tmp_1[tmp_0] = new Mode();
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.p1k_1 = tmp_1;
    this.q1k_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_2.r1k_1 = Array(16);
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_3.s1k_1 = Array(16);
    this.t1k_1 = new Int32Array(16);
    var tmp_4 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_4.u1k_1 = Array(16);
    this.v1k_1 = 0;
    var tmp_5 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_5.w1k_1 = Array(16);
    this.x1k_1 = 0;
    this.y1k_1 = false;
    var tmp_6 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_6.z1k_1 = Array(2);
    var tmp_7 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_7.a1l_1 = Array(2);
    var tmp_8 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_8.b1l_1 = Array(2);
    var tmp_9 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_9.c1l_1 = Array(2);
    var tmp_10 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_10.d1l_1 = Array(2);
    this.e1l_1 = 0;
    this.f1l_1 = 0;
    this.g1l_1 = 0;
    this.h1l_1 = new Int32Array(255);
    this.i1l_1 = 0;
    this.j1l_1 = 0;
    this.k1l_1 = false;
    this.l1l_1 = 0;
    this.m1l_1 = false;
    this.n1l_1 = 0;
    this.o1l_1 = 0;
    this.p1l_1 = 0;
    this.q1l_1 = 0;
    this.r1l_1 = 0;
    this.s1l_1 = 0;
    this.t1l_1 = 0;
    this.u1l_1 = 0;
    this.v1l_1 = 0;
    this.w1l_1 = 0;
  }
  protoOf(StbVorbis).x1l = function () {
    return new StbVorbisInfo(this.q1j_1, this.r1j_1, this.d1k_1 >> 1);
  };
  protoOf(StbVorbis).q1v = function () {
    var lenArr = new Int32Array(1);
    var leftArr = new Int32Array(1);
    var rightArr = new Int32Array(1);
    if (!vorbisDecodePacket(this, lenArr, leftArr, rightArr)) {
      this.v1l_1 = 0;
      this.w1l_1 = 0;
      return null;
    }
    var len = vorbisFinishFrame(this, lenArr[0], leftArr[0], rightArr[0]);
    var tmp = 0;
    var tmp_0 = this.r1j_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = ensureNotNull(this.r1k_1[tmp_2]);
      tmp = tmp + 1 | 0;
    }
    var result = tmp_1;
    var offset = leftArr[0];
    this.v1l_1 = leftArr[0];
    this.w1l_1 = leftArr[0] + len | 0;
    return new Triple(len, offset, result);
  };
  protoOf(StbVorbis).d1m = function (requestedChannels, buffer, numFloats) {
    var len = numFloats / requestedChannels | 0;
    var n = 0;
    var z = requestedChannels < this.r1j_1 ? requestedChannels : this.r1j_1;
    $l$loop_0: while (len > n) {
      var k = this.w1l_1 - this.v1l_1 | 0;
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
              buffer[imul(n + j | 0, requestedChannels) + i | 0] = ensureNotNull(this.r1k_1[i])[this.v1l_1 + j | 0];
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
      this.v1l_1 = this.v1l_1 + k | 0;
      if (n === len)
        break $l$loop_0;
      if (this.q1v() == null)
        break $l$loop_0;
    }
    return n;
  };
  protoOf(StbVorbis).y1l = function () {
    if (this.q1k_1 === 0) {
      var restoreOffset = getFileOffset(this);
      var previousSafe;
      if (this.v1j_1 >= 65536 && (this.v1j_1 - 65536 | 0) >= this.w1j_1)
        previousSafe = this.v1j_1 - 65536 | 0;
      else
        previousSafe = this.w1j_1;
      setFileOffset(this, previousSafe);
      var endArr = new Int32Array(1);
      var lastArr = new Int32Array(1);
      if (!vorbisFindPage(this, endArr, lastArr)) {
        this.a1k_1 = STBVorbisError_CANT_FIND_LAST_PAGE_getInstance();
        this.q1k_1 = -1;
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
        this.a1k_1 = STBVorbisError_CANT_FIND_LAST_PAGE_getInstance();
        this.q1k_1 = -1;
        setFileOffset(this, restoreOffset);
        return 0;
      }
      if (!(hi === 0)) {
        this.q1k_1 = -2;
      } else {
        this.q1k_1 = lo;
      }
      this.y1j_1.j1v_1 = lastPageLoc;
      this.y1j_1.k1v_1 = endArr[0];
      this.y1j_1.l1v_1 = lo;
      setFileOffset(this, restoreOffset);
    }
    return this.q1k_1 === -1 ? 0 : this.q1k_1;
  };
  protoOf(StbVorbis).z1l = function () {
    this.f1k_1 = null;
    this.i1k_1 = null;
    this.l1k_1 = null;
    this.n1k_1 = null;
    var inductionVariable = 0;
    if (inductionVariable < 16)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.r1k_1[i] = null;
        this.u1k_1[i] = null;
        this.w1k_1[i] = null;
        this.s1k_1[i] = null;
      }
       while (inductionVariable < 16);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < 2)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.z1k_1[i_0] = null;
        this.a1l_1[i_0] = null;
        this.b1l_1[i_0] = null;
        this.c1l_1[i_0] = null;
        this.d1l_1[i_0] = null;
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
  var STBVorbisError_entriesInitialized;
  function STBVorbisError_initEntries() {
    if (STBVorbisError_entriesInitialized)
      return Unit_instance;
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
  function STBVorbisError(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.t1v_1 = code;
  }
  function StbVorbisInfo(sampleRate, channels, maxFrameSize) {
    this.a1m_1 = sampleRate;
    this.b1m_1 = channels;
    this.c1m_1 = maxFrameSize;
  }
  protoOf(StbVorbisInfo).toString = function () {
    return 'StbVorbisInfo(sampleRate=' + this.a1m_1 + ', channels=' + this.b1m_1 + ', maxFrameSize=' + this.c1m_1 + ')';
  };
  protoOf(StbVorbisInfo).hashCode = function () {
    var result = this.a1m_1;
    result = imul(result, 31) + this.b1m_1 | 0;
    result = imul(result, 31) + this.c1m_1 | 0;
    return result;
  };
  protoOf(StbVorbisInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StbVorbisInfo))
      return false;
    if (!(this.a1m_1 === other.a1m_1))
      return false;
    if (!(this.b1m_1 === other.b1m_1))
      return false;
    if (!(this.c1m_1 === other.c1m_1))
      return false;
    return true;
  };
  function STBVorbisError_NO_ERROR_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_NO_ERROR_instance;
  }
  function STBVorbisError_FEATURE_NOT_SUPPORTED_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_FEATURE_NOT_SUPPORTED_instance;
  }
  function STBVorbisError_TOO_MANY_CHANNELS_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_TOO_MANY_CHANNELS_instance;
  }
  function STBVorbisError_UNEXPECTED_EOF_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_UNEXPECTED_EOF_instance;
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
  function STBVorbisError_INVALID_FIRST_PAGE_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_INVALID_FIRST_PAGE_instance;
  }
  function STBVorbisError_CANT_FIND_LAST_PAGE_getInstance() {
    STBVorbisError_initEntries();
    return STBVorbisError_CANT_FIND_LAST_PAGE_instance;
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
    this.k1o_1 = id;
    this.l1o_1 = bpp;
    this.m1o_1 = width;
    this.n1o_1 = height;
    this.o1o_1 = entries;
  }
  function packByBpp($this, images, bpp, groupKeys, atlases, packers, atlasSize) {
    if (images.t())
      return Unit_instance;
    var groups = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = images.l();
    while (_iterator__ex2g4s.m()) {
      var img = _iterator__ex2g4s.n();
      var tmp0_elvis_lhs = groupKeys.d2(img.jx_1);
      var key = tmp0_elvis_lhs == null ? img.jx_1 : tmp0_elvis_lhs;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = groups.d2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$_0();
        groups.w1(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      tmp.g(img);
    }
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = groups.a2();
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_0 = TextureAtlasPacker$packByBpp$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0_7(tmp_0);
    var sortedGroups = sortedWith(this_0, tmp$ret$3);
    var iterator = sortedGroups.l();
    var index = 0;
    while (iterator.m()) {
      var groupIdx = index;
      index = index + 1 | 0;
      var entry = iterator.n();
      // Inline function 'kotlin.collections.component2' call
      var groupImages = entry.v1();
      if ((groupIdx % 100 | 0) === 0) {
        println('    Group ' + groupIdx + '/' + sortedGroups.o() + ' (' + groupImages.o() + ' images, ' + atlases.o() + ' atlases so far)');
      }
      // Inline function 'kotlin.collections.sortedByDescending' call
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp_1 = TextureAtlasPacker$packByBpp$lambda_0;
      var tmp$ret$6 = new sam$kotlin_Comparator$0_7(tmp_1);
      var sorted = sortedWith(groupImages, tmp$ret$6);
      var packed = false;
      var inductionVariable = 0;
      var last = atlases.o() - 1 | 0;
      if (inductionVariable <= last)
        $l$loop_1: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var atlas = atlases.r(i);
          if (!(atlas.l1o_1 === bpp))
            continue $l$loop_1;
          var packer = packers.r(i);
          var clonedPacker = packer.x1v();
          // Inline function 'kotlin.collections.mutableListOf' call
          var placements = ArrayList_init_$Create$_0();
          var allFit = true;
          var _iterator__ex2g4s_0 = sorted.l();
          $l$loop_0: while (_iterator__ex2g4s_0.m()) {
            var img_0 = _iterator__ex2g4s_0.n();
            var pos = clonedPacker.y1v(img_0.kx_1, img_0.lx_1);
            if (pos == null) {
              allFit = false;
              break $l$loop_0;
            }
            placements.g(to(img_0, pos));
          }
          if (allFit) {
            packers.g2(i, clonedPacker);
            var _iterator__ex2g4s_1 = placements.l();
            while (_iterator__ex2g4s_1.m()) {
              var _destruct__k2r9zo = _iterator__ex2g4s_1.n();
              var img_1 = _destruct__k2r9zo.gd();
              var pos_0 = _destruct__k2r9zo.hd();
              atlas.o1o_1.g(new AtlasEntry(img_1, pos_0.pd_1, pos_0.qd_1));
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
          if (!!remaining.t()) {
            break $l$loop_3;
          }
          var atlas_0 = new TextureAtlas(atlases.o(), bpp, atlasSize, atlasSize);
          var packer_0 = new MaxRectsPacker(atlasSize, atlasSize);
          var iterator_0 = remaining.l();
          while (iterator_0.m()) {
            var img_2 = iterator_0.n();
            var pos_1 = packer_0.y1v(img_2.kx_1, img_2.lx_1);
            if (!(pos_1 == null)) {
              atlas_0.o1o_1.g(new AtlasEntry(img_2, pos_1.pd_1, pos_1.qd_1));
              iterator_0.o3();
            }
          }
          if (atlas_0.o1o_1.t()) {
            break $l$loop_3;
          }
          atlases.g(atlas_0);
          packers.g(packer_0);
        }
      }
    }
  }
  function sam$kotlin_Comparator$0_7(function_0) {
    this.z1v_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_7).wb = function (a, b) {
    return this.z1v_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_7).compare = function (a, b) {
    return this.wb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_7).u2 = function () {
    return this.z1v_1;
  };
  protoOf(sam$kotlin_Comparator$0_7).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
  };
  function TextureAtlasPacker$packByBpp$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = b.v1().l();
    while (_iterator__ex2g4s.m()) {
      var element = _iterator__ex2g4s.n();
      var tmp = sum;
      sum = tmp + imul(element.kx_1, element.lx_1) | 0;
    }
    var tmp_0 = sum;
    // Inline function 'kotlin.collections.sumOf' call
    var sum_0 = 0;
    var _iterator__ex2g4s_0 = a.v1().l();
    while (_iterator__ex2g4s_0.m()) {
      var element_0 = _iterator__ex2g4s_0.n();
      var tmp_1 = sum_0;
      sum_0 = tmp_1 + imul(element_0.kx_1, element_0.lx_1) | 0;
    }
    var tmp$ret$5 = sum_0;
    return compareValues(tmp_0, tmp$ret$5);
  }
  function TextureAtlasPacker$packByBpp$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp0 = b.kx_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_0 = b.lx_1;
    var tmp = Math.max(tmp0, b_0);
    var tmp0_0 = a.kx_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_1 = a.lx_1;
    var tmp$ret$3 = Math.max(tmp0_0, b_1);
    return compareValues(tmp, tmp$ret$3);
  }
  function TextureAtlasPacker() {
    this.l1t_1 = 512;
  }
  protoOf(TextureAtlasPacker).m1t = function (images, groupKeys, atlasSize) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = images.l();
    while (_iterator__ex2g4s.m()) {
      var element = _iterator__ex2g4s.n();
      if (element.mx_1 === 4) {
        destination.g(element);
      }
    }
    var by4bpp = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = images.l();
    while (_iterator__ex2g4s_0.m()) {
      var element_0 = _iterator__ex2g4s_0.n();
      if (element_0.mx_1 === 8) {
        destination_0.g(element_0);
      }
    }
    var by8bpp = destination_0;
    println('  packAtlases: ' + by4bpp.o() + ' 4bpp images, ' + by8bpp.o() + ' 8bpp images');
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
    return TextureAtlasPacker_instance;
  }
  function AtlasEntry(image, x, y) {
    this.p1o_1 = image;
    this.q1o_1 = x;
    this.r1o_1 = y;
  }
  protoOf(AtlasEntry).toString = function () {
    return 'AtlasEntry(image=' + toString(this.p1o_1) + ', x=' + this.q1o_1 + ', y=' + this.r1o_1 + ')';
  };
  protoOf(AtlasEntry).hashCode = function () {
    var result = hashCode(this.p1o_1);
    result = imul(result, 31) + this.q1o_1 | 0;
    result = imul(result, 31) + this.r1o_1 | 0;
    return result;
  };
  protoOf(AtlasEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AtlasEntry))
      return false;
    if (!equals(this.p1o_1, other.p1o_1))
      return false;
    if (!(this.q1o_1 === other.q1o_1))
      return false;
    if (!(this.r1o_1 === other.r1o_1))
      return false;
    return true;
  };
  function Rect(x, y, width, height) {
    this.a1w_1 = x;
    this.b1w_1 = y;
    this.c1w_1 = width;
    this.d1w_1 = height;
  }
  protoOf(Rect).toString = function () {
    return 'Rect(x=' + this.a1w_1 + ', y=' + this.b1w_1 + ', width=' + this.c1w_1 + ', height=' + this.d1w_1 + ')';
  };
  protoOf(Rect).hashCode = function () {
    var result = this.a1w_1;
    result = imul(result, 31) + this.b1w_1 | 0;
    result = imul(result, 31) + this.c1w_1 | 0;
    result = imul(result, 31) + this.d1w_1 | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!(this.a1w_1 === other.a1w_1))
      return false;
    if (!(this.b1w_1 === other.b1w_1))
      return false;
    if (!(this.c1w_1 === other.c1w_1))
      return false;
    if (!(this.d1w_1 === other.d1w_1))
      return false;
    return true;
  };
  function MaxRectsPacker_init_$Init$(binWidth, binHeight, freeRects, $this) {
    MaxRectsPacker.call($this, binWidth, binHeight);
    $this.w1v_1.f2();
    $this.w1v_1.p(freeRects);
    return $this;
  }
  function MaxRectsPacker_init_$Create$(binWidth, binHeight, freeRects) {
    return MaxRectsPacker_init_$Init$(binWidth, binHeight, freeRects, objectCreate(protoOf(MaxRectsPacker)));
  }
  function splitFreeRects($this, used) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var newRects = ArrayList_init_$Create$_0();
    var iterator = $this.w1v_1.l();
    $l$loop: while (iterator.m()) {
      var free = iterator.n();
      if (!overlaps($this, free, used))
        continue $l$loop;
      iterator.o3();
      if (free.a1w_1 < used.a1w_1) {
        newRects.g(new Rect(free.a1w_1, free.b1w_1, used.a1w_1 - free.a1w_1 | 0, free.d1w_1));
      }
      if ((free.a1w_1 + free.c1w_1 | 0) > (used.a1w_1 + used.c1w_1 | 0)) {
        newRects.g(new Rect(used.a1w_1 + used.c1w_1 | 0, free.b1w_1, ((free.a1w_1 + free.c1w_1 | 0) - used.a1w_1 | 0) - used.c1w_1 | 0, free.d1w_1));
      }
      if (free.b1w_1 < used.b1w_1) {
        newRects.g(new Rect(free.a1w_1, free.b1w_1, free.c1w_1, used.b1w_1 - free.b1w_1 | 0));
      }
      if ((free.b1w_1 + free.d1w_1 | 0) > (used.b1w_1 + used.d1w_1 | 0)) {
        newRects.g(new Rect(free.a1w_1, used.b1w_1 + used.d1w_1 | 0, free.c1w_1, ((free.b1w_1 + free.d1w_1 | 0) - used.b1w_1 | 0) - used.d1w_1 | 0));
      }
    }
    $this.w1v_1.p(newRects);
  }
  function overlaps($this, a, b) {
    return a.a1w_1 < (b.a1w_1 + b.c1w_1 | 0) && (a.a1w_1 + a.c1w_1 | 0) > b.a1w_1 && a.b1w_1 < (b.b1w_1 + b.d1w_1 | 0) && (a.b1w_1 + a.d1w_1 | 0) > b.b1w_1;
  }
  function pruneFreeRects($this) {
    var size = $this.w1v_1.o();
    var writeIdx = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      outer: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var rectI = $this.w1v_1.r(i);
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!(i === j) && contains($this, $this.w1v_1.r(j), rectI)) {
              continue outer;
            }
          }
           while (inductionVariable_0 < size);
        var _unary__edvuaz = writeIdx;
        writeIdx = _unary__edvuaz + 1 | 0;
        $this.w1v_1.g2(_unary__edvuaz, rectI);
      }
       while (inductionVariable < size);
    while ($this.w1v_1.o() > writeIdx) {
      $this.w1v_1.i2(get_lastIndex($this.w1v_1));
    }
  }
  function contains($this, outer, inner) {
    return outer.a1w_1 <= inner.a1w_1 && outer.b1w_1 <= inner.b1w_1 && (outer.a1w_1 + outer.c1w_1 | 0) >= (inner.a1w_1 + inner.c1w_1 | 0) && (outer.b1w_1 + outer.d1w_1 | 0) >= (inner.b1w_1 + inner.d1w_1 | 0);
  }
  function MaxRectsPacker(binWidth, binHeight) {
    this.u1v_1 = binWidth;
    this.v1v_1 = binHeight;
    this.w1v_1 = mutableListOf([new Rect(0, 0, this.u1v_1, this.v1v_1)]);
  }
  protoOf(MaxRectsPacker).x1v = function () {
    return MaxRectsPacker_init_$Create$(this.u1v_1, this.v1v_1, this.w1v_1);
  };
  protoOf(MaxRectsPacker).y1v = function (w, h) {
    var bestX = -1;
    var bestY = -1;
    var bestShortSide = 2147483647;
    var bestLongSide = 2147483647;
    var _iterator__ex2g4s = this.w1v_1.l();
    while (_iterator__ex2g4s.m()) {
      var rect = _iterator__ex2g4s.n();
      if (rect.c1w_1 >= w && rect.d1w_1 >= h) {
        var leftoverHoriz = rect.c1w_1 - w | 0;
        var leftoverVert = rect.d1w_1 - h | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var shortSide = Math.min(leftoverHoriz, leftoverVert);
        // Inline function 'kotlin.comparisons.maxOf' call
        var longSide = Math.max(leftoverHoriz, leftoverVert);
        if (shortSide < bestShortSide || (shortSide === bestShortSide && bestLongSide > longSide)) {
          bestX = rect.a1w_1;
          bestY = rect.b1w_1;
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
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  }
  function $decodePngBytesCOROUTINE$(bytes, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1w_1 = bytes;
  }
  protoOf($decodePngBytesCOROUTINE$).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 2;
            var this_0 = [this.m1w_1];
            var type = 'image/png';
            var o = {};
            o['type'] = type;
            var blob = new Blob(this_0, o);
            this.x7_1 = 1;
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
  //region block: init
  ClutProcessor_instance = new ClutProcessor();
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  MedianCut_instance = new MedianCut();
  TextureAtlasPacker_instance = new TextureAtlasPacker();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AudioData;
  _.$_$.b = DataWinParserOptions;
  _.$_$.c = IsoFile;
  _.$_$.d = Iso9660Creator;
  _.$_$.e = parseOgg;
  _.$_$.f = parseWav;
  _.$_$.g = processDataWin;
  _.$_$.h = Companion_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=ButterscotchPreprocessor-processor-common.js.map
