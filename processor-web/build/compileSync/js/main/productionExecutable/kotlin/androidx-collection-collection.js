(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-collection-collection'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-collection-collection'.");
    }
    globalThis['androidx-collection-collection'] = factory(typeof globalThis['androidx-collection-collection'] === 'undefined' ? {} : globalThis['androidx-collection-collection'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var clz32 = Math.clz32;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.l2;
  var protoOf = kotlin_kotlin.$_$.s8;
  var arrayCopy = kotlin_kotlin.$_$.f3;
  var copyOf = kotlin_kotlin.$_$.s3;
  var initMetadataForClass = kotlin_kotlin.$_$.a8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y;
  var getNumberHashCode = kotlin_kotlin.$_$.w7;
  var until = kotlin_kotlin.$_$.f9;
  var longArray = kotlin_kotlin.$_$.l8;
  var Long = kotlin_kotlin.$_$.xa;
  var fill = kotlin_kotlin.$_$.b4;
  var shiftLeft = kotlin_kotlin.$_$.c7;
  var invert = kotlin_kotlin.$_$.z6;
  var bitwiseAnd = kotlin_kotlin.$_$.r6;
  var bitwiseOr = kotlin_kotlin.$_$.s6;
  var shiftRightUnsigned = kotlin_kotlin.$_$.d7;
  var fromInt = kotlin_kotlin.$_$.y6;
  var negate = kotlin_kotlin.$_$.b7;
  var shiftRight = kotlin_kotlin.$_$.e7;
  var multiply = kotlin_kotlin.$_$.a7;
  var bitwiseXor = kotlin_kotlin.$_$.t6;
  var subtract = kotlin_kotlin.$_$.f7;
  var equalsLong = kotlin_kotlin.$_$.x6;
  var countTrailingZeroBits = kotlin_kotlin.$_$.gb;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.d2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.e2;
  var ulongCompare = kotlin_kotlin.$_$.tb;
  var add = kotlin_kotlin.$_$.q6;
  var get_lastIndex = kotlin_kotlin.$_$.j4;
  var compare = kotlin_kotlin.$_$.u6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v1;
  var copyOf_0 = kotlin_kotlin.$_$.u3;
  var THROW_CCE = kotlin_kotlin.$_$.ab;
  var hashCode = kotlin_kotlin.$_$.z7;
  var equals = kotlin_kotlin.$_$.s7;
  var KtMutableList = kotlin_kotlin.$_$.y2;
  var fill_0 = kotlin_kotlin.$_$.d4;
  var toString = kotlin_kotlin.$_$.qb;
  var longArrayOf = kotlin_kotlin.$_$.k8;
  var CoroutineImpl = kotlin_kotlin.$_$.j6;
  var SequenceScope = kotlin_kotlin.$_$.k9;
  var numberRangeToNumber = kotlin_kotlin.$_$.n8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u5;
  var initMetadataForLambda = kotlin_kotlin.$_$.e8;
  var iterator = kotlin_kotlin.$_$.l9;
  var getKClassFromExpression = kotlin_kotlin.$_$.g9;
  var KtSet = kotlin_kotlin.$_$.c3;
  var MutableCollection = kotlin_kotlin.$_$.x2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.m1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DoubleList, 'DoubleList');
  initMetadataForClass(MutableDoubleList, 'MutableDoubleList', MutableDoubleList, DoubleList);
  initMetadataForClass(IntIntMap, 'IntIntMap');
  initMetadataForClass(MutableIntIntMap, 'MutableIntIntMap', MutableIntIntMap, IntIntMap);
  initMetadataForClass(IntList, 'IntList');
  initMetadataForClass(MutableIntList, 'MutableIntList', MutableIntList, IntList);
  initMetadataForClass(IntObjectMap, 'IntObjectMap');
  initMetadataForClass(MutableIntObjectMap, 'MutableIntObjectMap', MutableIntObjectMap, IntObjectMap);
  initMetadataForClass(IntSet, 'IntSet');
  initMetadataForClass(MutableIntSet, 'MutableIntSet', MutableIntSet, IntSet);
  initMetadataForClass(ObjectIntMap, 'ObjectIntMap');
  initMetadataForClass(MutableObjectIntMap, 'MutableObjectIntMap', MutableObjectIntMap, ObjectIntMap);
  initMetadataForClass(MutableObjectListIterator, 'MutableObjectListIterator');
  initMetadataForClass(ObjectListMutableList, 'ObjectListMutableList', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ObjectList, 'ObjectList');
  initMetadataForClass(MutableObjectList, 'MutableObjectList', MutableObjectList, ObjectList);
  initMetadataForClass(ScatterMap, 'ScatterMap');
  initMetadataForClass(MutableScatterMap, 'MutableScatterMap', MutableScatterMap, ScatterMap);
  initMetadataForClass(ScatterSet, 'ScatterSet');
  initMetadataForClass(MutableScatterSet, 'MutableScatterSet', MutableScatterSet, ScatterSet);
  initMetadataForLambda(SetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SetWrapper, 'SetWrapper', VOID, VOID, [KtSet]);
  initMetadataForLambda(MutableSetWrapper$iterator$o$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutableSetWrapper$iterator$1);
  initMetadataForClass(MutableSetWrapper, 'MutableSetWrapper', VOID, SetWrapper, [SetWrapper, MutableCollection, KtSet]);
  //endregion
  function MutableDoubleList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    DoubleList.call(this, initialCapacity);
  }
  protoOf(MutableDoubleList).p1w = function (element) {
    this.s1w(this.r1w_1 + 1 | 0);
    this.q1w_1[this.r1w_1] = element;
    this.r1w_1 = this.r1w_1 + 1 | 0;
    return true;
  };
  protoOf(MutableDoubleList).t1w = function (index, elements) {
    if (!(0 <= index ? index <= this.r1w_1 : false)) {
      throwIndexOutOfBoundsException('');
    }
    // Inline function 'kotlin.collections.isEmpty' call
    if (elements.length === 0)
      return false;
    this.s1w(this.r1w_1 + elements.length | 0);
    var content = this.q1w_1;
    if (!(index === this.r1w_1)) {
      var tmp4 = index + elements.length | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.r1w_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, tmp4, index, endIndex);
    }
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = elements.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = elements;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, content, index, 0, endIndex_0);
    this.r1w_1 = this.r1w_1 + elements.length | 0;
    return true;
  };
  protoOf(MutableDoubleList).s1w = function (capacity) {
    var oldContent = this.q1w_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.q1w_1 = copyOf(oldContent, newSize);
    }
  };
  function DoubleList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyDoubleArray();
    } else {
      tmp_0 = new Float64Array(initialCapacity);
    }
    tmp.q1w_1 = tmp_0;
    this.r1w_1 = 0;
  }
  protoOf(DoubleList).u1w = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.h(prefix);
      // Inline function 'androidx.collection.DoubleList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.q1w_1;
      var inductionVariable = 0;
      var last = this.r1w_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.h(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.h(separator);
          }
          this_0.ra(element);
        }
         while (inductionVariable < last);
      this_0.h(postfix);
    }
    return this_0.toString();
  };
  protoOf(DoubleList).v1w = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.u1w(separator, prefix, postfix, limit, truncated) : $super.u1w.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(DoubleList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.DoubleList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.q1w_1;
    var inductionVariable = 0;
    var last = this.r1w_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = content[i];
        hashCode = hashCode + imul(31, getNumberHashCode(element)) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(DoubleList).equals = function (other) {
    var tmp;
    if (!(other instanceof DoubleList)) {
      tmp = true;
    } else {
      tmp = !(other.r1w_1 === this.r1w_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.q1w_1;
    var otherContent = other.q1w_1;
    // Inline function 'androidx.collection.DoubleList.indices' call
    var progression = until(0, this.r1w_1);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(DoubleList).toString = function () {
    return this.v1w(VOID, '[', ']');
  };
  function get_EmptyDoubleArray() {
    _init_properties_DoubleSet_kt__4b4k9t();
    return EmptyDoubleArray;
  }
  var EmptyDoubleArray;
  var properties_initialized_DoubleSet_kt_kcrj8h;
  function _init_properties_DoubleSet_kt__4b4k9t() {
    if (!properties_initialized_DoubleSet_kt_kcrj8h) {
      properties_initialized_DoubleSet_kt_kcrj8h = true;
      EmptyDoubleArray = new Float64Array(0);
    }
  }
  function initializeStorage($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.z1w_1 = newCapacity;
    initializeMetadata($this, newCapacity);
    $this.x1w_1 = new Int32Array(newCapacity);
    $this.y1w_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.w1w_1 = tmp_0;
    var tmp0 = $this.w1w_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth($this);
  }
  function initializeGrowth($this) {
    $this.g1x_1 = loadedCapacity($this.h1x()) - $this.a1x_1 | 0;
  }
  function findInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.z1w_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.w1w_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$4 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$4);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if ($this.x1w_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot($this, hash1);
    var tmp_0;
    if ($this.g1x_1 === 0) {
      var tmp0_0 = $this.w1w_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$11 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$11, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.i1x();
      index_0 = findFirstAvailableSlot($this, hash1);
    }
    $this.a1x_1 = $this.a1x_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.g1x_1;
    var tmp_3;
    var tmp0_1 = $this.w1w_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$13, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.g1x_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.w1w_1;
    var tmp2 = $this.z1w_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot($this, hash1) {
    var probeMask = $this.z1w_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.w1w_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntIntMap.call(this);
    this.g1x_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntIntMap).j1x = function (key, value) {
    var index = findInsertIndex(this, key);
    if (index < 0)
      index = ~index;
    this.x1w_1[index] = key;
    this.y1w_1[index] = value;
  };
  protoOf(MutableIntIntMap).i1x = function () {
    var tmp;
    if (this.z1w_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.a1x_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.z1w_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.l1x();
    } else {
      this.k1x(nextCapacity(this.z1w_1));
    }
  };
  protoOf(MutableIntIntMap).l1x = function () {
    var metadata = this.w1w_1;
    var capacity = this.z1w_1;
    var keys = this.x1w_1;
    var values = this.y1w_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = 0;
        values[targetIndex] = values[index];
        values[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth(this);
  };
  protoOf(MutableIntIntMap).k1x = function (newCapacity) {
    var previousMetadata = this.w1w_1;
    var previousKeys = this.x1w_1;
    var previousValues = this.y1w_1;
    var previousCapacity = this.z1w_1;
    initializeStorage(this, newCapacity);
    var newMetadata = this.w1w_1;
    var newKeys = this.x1w_1;
    var newValues = this.y1w_1;
    var capacity = this.z1w_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$0 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$0, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function IntIntMap() {
    this.w1w_1 = get_EmptyGroup();
    this.x1w_1 = get_EmptyIntArray();
    this.y1w_1 = get_EmptyIntArray();
    this.z1w_1 = 0;
    this.a1x_1 = 0;
  }
  protoOf(IntIntMap).h1x = function () {
    return this.z1w_1;
  };
  protoOf(IntIntMap).o = function () {
    return this.a1x_1;
  };
  protoOf(IntIntMap).t = function () {
    return this.a1x_1 === 0;
  };
  protoOf(IntIntMap).r = function (key) {
    var index = this.n1x(key);
    if (index < 0) {
      throwNoSuchElementException('Cannot find value for key ' + key);
    }
    return this.y1w_1[index];
  };
  protoOf(IntIntMap).m1x = function (key) {
    return this.n1x(key) >= 0;
  };
  protoOf(IntIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.x1w_1;
    var v = this.y1w_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.w1w_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  hash = hash + (k[index] ^ v[index]) | 0;
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntIntMap)) {
      return false;
    }
    if (!(other.o() === this.o())) {
      return false;
    }
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.x1w_1;
    var v = this.y1w_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.w1w_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  var index_0 = other.n1x(tmp0);
                  if (index_0 < 0 || !(value_0 === other.y1w_1[index_0])) {
                    return false;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntIntMap).toString = function () {
    if (this.t()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().f7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.x1w_1;
    var v = this.y1w_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.w1w_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  s.pa(tmp0);
                  s.e7('=');
                  s.pa(value_0);
                  i = i + 1 | 0;
                  if (i < this.a1x_1) {
                    s.f7(_Char___init__impl__6a9atx(44)).f7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.f7(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(IntIntMap).n1x = function (key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.z1w_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.w1w_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$4 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$4);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (this.x1w_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function MutableIntList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    IntList.call(this, initialCapacity);
  }
  protoOf(MutableIntList).q1x = function (element) {
    this.s1w(this.s1x_1 + 1 | 0);
    this.r1x_1[this.s1x_1] = element;
    this.s1x_1 = this.s1x_1 + 1 | 0;
    return true;
  };
  protoOf(MutableIntList).s1w = function (capacity) {
    var oldContent = this.r1x_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.r1x_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableIntList).i2 = function (index) {
    if (!(0 <= index ? index < this.s1x_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.r1x_1;
    var item = content[index];
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (!(index === (this.s1x_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.s1x_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, tmp6, endIndex);
    }
    this.s1x_1 = this.s1x_1 - 1 | 0;
    return item;
  };
  protoOf(MutableIntList).f4 = function (start, end) {
    if (!(0 <= start ? start <= this.s1x_1 : false) || !(0 <= end ? end <= this.s1x_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    if (end < start) {
      throwIllegalArgumentException('The end index must be < start index');
    }
    if (!(end === start)) {
      if (end < this.s1x_1) {
        var tmp0 = this.r1x_1;
        var tmp2 = this.r1x_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = this.s1x_1;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = tmp0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, tmp2, start, end, endIndex);
      }
      this.s1x_1 = this.s1x_1 - (end - start | 0) | 0;
    }
  };
  protoOf(MutableIntList).t1x = function (index, element) {
    if (!(0 <= index ? index < this.s1x_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.r1x_1;
    var old = content[index];
    content[index] = element;
    return old;
  };
  function IntList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyIntArray();
    } else {
      tmp_0 = new Int32Array(initialCapacity);
    }
    tmp.r1x_1 = tmp_0;
    this.s1x_1 = 0;
  }
  protoOf(IntList).u1x = function () {
    // Inline function 'androidx.collection.IntList.isEmpty' call
    if (this.s1x_1 === 0) {
      throwNoSuchElementException('IntList is empty.');
    }
    return this.r1x_1[0];
  };
  protoOf(IntList).r = function (index) {
    if (!(0 <= index ? index < this.s1x_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    return this.r1x_1[index];
  };
  protoOf(IntList).v1x = function () {
    // Inline function 'androidx.collection.IntList.isEmpty' call
    if (this.s1x_1 === 0) {
      throwNoSuchElementException('IntList is empty.');
    }
    var tmp = this.r1x_1;
    // Inline function 'androidx.collection.IntList.lastIndex' call
    return tmp[this.s1x_1 - 1 | 0];
  };
  protoOf(IntList).u1w = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.h(prefix);
      // Inline function 'androidx.collection.IntList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.r1x_1;
      var inductionVariable = 0;
      var last = this.s1x_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.h(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.h(separator);
          }
          this_0.pa(element);
        }
         while (inductionVariable < last);
      this_0.h(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntList).w1x = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.u1w(separator, prefix, postfix, limit, truncated) : $super.u1w.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.IntList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.r1x_1;
    var inductionVariable = 0;
    var last = this.s1x_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = content[i];
        hashCode = hashCode + imul(31, element) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(IntList).equals = function (other) {
    var tmp;
    if (!(other instanceof IntList)) {
      tmp = true;
    } else {
      tmp = !(other.s1x_1 === this.s1x_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.r1x_1;
    var otherContent = other.r1x_1;
    // Inline function 'androidx.collection.IntList.indices' call
    var progression = until(0, this.s1x_1);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(IntList).toString = function () {
    return this.w1x(VOID, '[', ']');
  };
  function initializeStorage_0($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.a1y_1 = newCapacity;
    initializeMetadata_0($this, newCapacity);
    $this.y1x_1 = new Int32Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.z1x_1 = Array(newCapacity);
  }
  function initializeMetadata_0($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.x1x_1 = tmp_0;
    var tmp0 = $this.x1x_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_0($this);
  }
  function initializeGrowth_0($this) {
    $this.h1y_1 = loadedCapacity($this.h1x()) - $this.b1y_1 | 0;
  }
  function findAbsoluteInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.a1y_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.x1x_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$4 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$4);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if ($this.y1x_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_0($this, hash1);
    var tmp_0;
    if ($this.h1y_1 === 0) {
      var tmp0_0 = $this.x1x_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$11 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$11, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.i1x();
      index_0 = findFirstAvailableSlot_0($this, hash1);
    }
    $this.b1y_1 = $this.b1y_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.h1y_1;
    var tmp_3;
    var tmp0_1 = $this.x1x_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$13, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.h1y_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.x1x_1;
    var tmp2 = $this.a1y_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_0($this, hash1) {
    var probeMask = $this.a1y_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.x1x_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntObjectMap.call(this);
    this.h1y_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_0(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntObjectMap).i1y = function (key, value) {
    var index = findAbsoluteInsertIndex(this, key);
    this.y1x_1[index] = key;
    this.z1x_1[index] = value;
  };
  protoOf(MutableIntObjectMap).j1y = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.a1y_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.x1x_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$4 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$4);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.y1x_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    if (index_0 >= 0) {
      return this.k1y(index_0);
    }
    return null;
  };
  protoOf(MutableIntObjectMap).k1y = function (index) {
    this.b1y_1 = this.b1y_1 - 1 | 0;
    var tmp0 = this.x1x_1;
    var tmp2 = this.a1y_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    var oldValue = this.z1x_1[index];
    this.z1x_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableIntObjectMap).i1x = function () {
    var tmp;
    if (this.a1y_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.b1y_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.a1y_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.l1x();
    } else {
      this.k1x(nextCapacity(this.a1y_1));
    }
  };
  protoOf(MutableIntObjectMap).l1x = function () {
    var metadata = this.x1x_1;
    var capacity = this.a1y_1;
    var keys = this.y1x_1;
    var values = this.z1x_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_0(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = 0;
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_0(this);
  };
  protoOf(MutableIntObjectMap).k1x = function (newCapacity) {
    var previousMetadata = this.x1x_1;
    var previousKeys = this.y1x_1;
    var previousValues = this.z1x_1;
    var previousCapacity = this.a1y_1;
    initializeStorage_0(this, newCapacity);
    var newMetadata = this.x1x_1;
    var newKeys = this.y1x_1;
    var newValues = this.z1x_1;
    var capacity = this.a1y_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$0 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$0, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_0(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function IntObjectMap() {
    this.x1x_1 = get_EmptyGroup();
    this.y1x_1 = get_EmptyIntArray();
    this.z1x_1 = get_EMPTY_OBJECTS();
    this.a1y_1 = 0;
    this.b1y_1 = 0;
  }
  protoOf(IntObjectMap).h1x = function () {
    return this.a1y_1;
  };
  protoOf(IntObjectMap).o = function () {
    return this.b1y_1;
  };
  protoOf(IntObjectMap).t = function () {
    return this.b1y_1 === 0;
  };
  protoOf(IntObjectMap).r = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.a1y_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.x1x_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$4 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$4);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.y1x_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.z1x_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(IntObjectMap).m1x = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.a1y_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.x1x_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$4 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$4);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.y1x_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.y1x_1;
    var v = this.z1x_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.x1x_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp0 = k[index];
                  var tmp = v[index];
                  var tmp_0 = hash;
                  var tmp_1 = tmp0;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_0 + (tmp_1 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntObjectMap)) {
      return false;
    }
    if (!(other.o() === this.o())) {
      return false;
    }
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.y1x_1;
    var v = this.z1x_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.x1x_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp0 = k[index];
                  var tmp = v[index];
                  var value_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (value_0 == null) {
                    if (!(other.r(tmp0) == null) || !other.m1x(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value_0, other.r(tmp0))) {
                    return false;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntObjectMap).toString = function () {
    if (this.t()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().f7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.y1x_1;
    var v = this.z1x_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.x1x_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var tmp = v[index];
                  var value_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  s.pa(tmp0);
                  s.e7('=');
                  s.d7(value_0 === this ? '(this)' : value_0);
                  i = i + 1 | 0;
                  if (i < this.b1y_1) {
                    s.f7(_Char___init__impl__6a9atx(44)).f7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.f7(_Char___init__impl__6a9atx(125)).toString();
  };
  var EmptyIntSet;
  function get_EmptyIntArray() {
    _init_properties_IntSet_kt__km4dgt();
    return EmptyIntArray;
  }
  var EmptyIntArray;
  function initializeStorage_1($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.n1y_1 = newCapacity;
    initializeMetadata_1($this, newCapacity);
    $this.m1y_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_1($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.l1y_1 = tmp_0;
    var tmp0 = $this.l1y_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_1($this);
  }
  function initializeGrowth_1($this) {
    $this.t1y_1 = loadedCapacity($this.h1x()) - $this.o1y_1 | 0;
  }
  function removeElementAt($this, index) {
    $this.o1y_1 = $this.o1y_1 - 1 | 0;
    var tmp0 = $this.l1y_1;
    var tmp2 = $this.n1y_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
  }
  function findAbsoluteInsertIndex_0($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.n1y_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.l1y_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$4 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$4);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if ($this.m1y_1[index] === element) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_1($this, hash1);
    var tmp_0;
    if ($this.t1y_1 === 0) {
      var tmp0_0 = $this.l1y_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$11 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$11, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.i1x();
      index_0 = findFirstAvailableSlot_1($this, hash1);
    }
    $this.o1y_1 = $this.o1y_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.t1y_1;
    var tmp_3;
    var tmp0_1 = $this.l1y_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$13, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.t1y_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.l1y_1;
    var tmp2 = $this.n1y_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_1($this, hash1) {
    var probeMask = $this.n1y_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.l1y_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntSet.call(this);
    this.t1y_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_1(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntSet).q1x = function (element) {
    var oldSize = this.o1y_1;
    var index = findAbsoluteInsertIndex_0(this, element);
    this.m1y_1[index] = element;
    return !(this.o1y_1 === oldSize);
  };
  protoOf(MutableIntSet).j1y = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.n1y_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.l1y_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$4 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$4);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.m1y_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var exists = index_0 >= 0;
    if (exists) {
      removeElementAt(this, index_0);
    }
    return exists;
  };
  protoOf(MutableIntSet).i1x = function () {
    var tmp;
    if (this.n1y_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.o1y_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.n1y_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.l1x();
    } else {
      this.k1x(nextCapacity(this.n1y_1));
    }
  };
  protoOf(MutableIntSet).l1x = function () {
    var metadata = this.l1y_1;
    var capacity = this.n1y_1;
    var elements = this.m1y_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = elements[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_1(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        elements[targetIndex] = elements[index];
        elements[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_1(this);
  };
  protoOf(MutableIntSet).k1x = function (newCapacity) {
    var previousMetadata = this.l1y_1;
    var previousElements = this.m1y_1;
    var previousCapacity = this.n1y_1;
    initializeStorage_1(this, newCapacity);
    var newMetadata = this.l1y_1;
    var newElements = this.m1y_1;
    var capacity = this.n1y_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$0 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$0, new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_1(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function mutableIntSetOf() {
    _init_properties_IntSet_kt__km4dgt();
    return new MutableIntSet();
  }
  function IntSet() {
    this.l1y_1 = get_EmptyGroup();
    this.m1y_1 = get_EmptyIntArray();
    this.n1y_1 = 0;
    this.o1y_1 = 0;
  }
  protoOf(IntSet).h1x = function () {
    return this.n1y_1;
  };
  protoOf(IntSet).u1y = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.n1y_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.l1y_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$4 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$4);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.m1y_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntSet).u1w = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.h(prefix);
      var index = 0;
      // Inline function 'androidx.collection.IntSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.m1y_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.l1y_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value = bitwiseAnd(slot, new Long(255, 0));
                  if (compare(value, new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.h(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.h(separator);
                    }
                    this_0.pa(element);
                    index = index + 1 | 0;
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.h(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntSet).v1y = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.u1w(separator, prefix, postfix, limit, truncated) : $super.u1w.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.m1y_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.l1y_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  hash = hash + k[index] | 0;
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntSet)) {
      return false;
    }
    if (!(other.o1y_1 === this.o1y_1)) {
      return false;
    }
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.m1y_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.l1y_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var element = k[index];
                  if (!other.u1y(element)) {
                    return false;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntSet).toString = function () {
    return this.v1y(VOID, '[', ']');
  };
  var properties_initialized_IntSet_kt_za7tcl;
  function _init_properties_IntSet_kt__km4dgt() {
    if (!properties_initialized_IntSet_kt_za7tcl) {
      properties_initialized_IntSet_kt_za7tcl = true;
      EmptyIntSet = new MutableIntSet(0);
      EmptyIntArray = new Int32Array(0);
    }
  }
  function ObjectIntMap() {
    this.w1y_1 = get_EmptyGroup();
    this.x1y_1 = get_EMPTY_OBJECTS();
    this.y1y_1 = get_EmptyIntArray();
    this.z1y_1 = 0;
    this.a1z_1 = 0;
  }
  protoOf(ObjectIntMap).h1x = function () {
    return this.z1y_1;
  };
  protoOf(ObjectIntMap).o = function () {
    return this.a1z_1;
  };
  protoOf(ObjectIntMap).t = function () {
    return this.a1z_1 === 0;
  };
  protoOf(ObjectIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.x1y_1;
    var v = this.y1y_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.w1y_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp0 == null ? null : hashCode(tmp0);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ v[index]) | 0;
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ObjectIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectIntMap)) {
      return false;
    }
    if (!(other.o() === this.o())) {
      return false;
    }
    var o = other instanceof ObjectIntMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.x1y_1;
    var v = this.y1y_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.w1y_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value_0 = v[index];
                  var index_0 = o.b1z(tmp0);
                  if (index_0 < 0 || !(value_0 === o.y1y_1[index_0])) {
                    return false;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ObjectIntMap).toString = function () {
    if (this.t()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().f7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.x1y_1;
    var v = this.y1y_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.w1y_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value_0 = v[index];
                  s.d7(tmp0 === this ? '(this)' : tmp0);
                  s.e7('=');
                  s.pa(value_0);
                  i = i + 1 | 0;
                  if (i < this.a1z_1) {
                    s.f7(_Char___init__impl__6a9atx(44)).f7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.f7(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectIntMap).b1z = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.z1y_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.w1y_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals(this.x1y_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function initializeStorage_2($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.z1y_1 = newCapacity;
    initializeMetadata_2($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.x1y_1 = Array(newCapacity);
    $this.y1y_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_2($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.w1y_1 = tmp_0;
    var tmp0 = $this.w1y_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_2($this);
  }
  function initializeGrowth_2($this) {
    $this.h1z_1 = loadedCapacity($this.h1x()) - $this.a1z_1 | 0;
  }
  function findIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.z1y_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.w1y_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals($this.x1y_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_2($this, hash1);
    var tmp_0;
    if ($this.h1z_1 === 0) {
      var tmp0_0 = $this.w1y_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.i1x();
      index_0 = findFirstAvailableSlot_2($this, hash1);
    }
    $this.a1z_1 = $this.a1z_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.h1z_1;
    var tmp_3;
    var tmp0_1 = $this.w1y_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.h1z_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.w1y_1;
    var tmp2 = $this.z1y_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot_2($this, hash1) {
    var probeMask = $this.z1y_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.w1y_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableObjectIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectIntMap.call(this);
    this.h1z_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_2(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectIntMap).i1z = function (key, value, default_0) {
    var index = findIndex(this, key);
    var previous = default_0;
    if (index < 0) {
      index = ~index;
    } else {
      previous = this.y1y_1[index];
    }
    this.x1y_1[index] = key;
    this.y1y_1[index] = value;
    return previous;
  };
  protoOf(MutableObjectIntMap).j1z = function (index) {
    this.a1z_1 = this.a1z_1 - 1 | 0;
    var tmp0 = this.w1y_1;
    var tmp2 = this.z1y_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.x1y_1[index] = null;
  };
  protoOf(MutableObjectIntMap).i1x = function () {
    var tmp;
    if (this.z1y_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.a1z_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.z1y_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.l1x();
    } else {
      this.k1x(nextCapacity(this.z1y_1));
    }
  };
  protoOf(MutableObjectIntMap).l1x = function () {
    var metadata = this.w1y_1;
    var capacity = this.z1y_1;
    var keys = this.x1y_1;
    var values = this.y1y_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = keys[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_2(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = null;
        values[targetIndex] = values[index];
        values[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_2(this);
  };
  protoOf(MutableObjectIntMap).k1x = function (newCapacity) {
    var previousMetadata = this.w1y_1;
    var previousKeys = this.x1y_1;
    var previousValues = this.y1y_1;
    var previousCapacity = this.z1y_1;
    initializeStorage_2(this, newCapacity);
    var newMetadata = this.w1y_1;
    var newKeys = this.x1y_1;
    var newValues = this.y1y_1;
    var capacity = this.z1y_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$0 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$0, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_2(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function get_EmptyArray() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyArray;
  }
  var EmptyArray;
  function get_EmptyObjectList() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyObjectList;
  }
  var EmptyObjectList;
  function throwIndexOutOfBoundsInclusiveException($this, index) {
    throwIndexOutOfBoundsException('Index ' + index + ' must be in 0..' + $this.l1z_1);
  }
  function MutableObjectListIterator(list, index) {
    this.m1z_1 = list;
    this.n1z_1 = index - 1 | 0;
  }
  protoOf(MutableObjectListIterator).m = function () {
    return this.n1z_1 < (this.m1z_1.o() - 1 | 0);
  };
  protoOf(MutableObjectListIterator).n = function () {
    this.n1z_1 = this.n1z_1 + 1 | 0;
    return this.m1z_1.r(this.n1z_1);
  };
  protoOf(MutableObjectListIterator).o3 = function () {
    this.m1z_1.i2(this.n1z_1);
    this.n1z_1 = this.n1z_1 - 1 | 0;
  };
  protoOf(MutableObjectListIterator).y3 = function () {
    return this.n1z_1 >= 0;
  };
  protoOf(MutableObjectListIterator).z3 = function () {
    var tmp1 = this.n1z_1;
    this.n1z_1 = tmp1 - 1 | 0;
    return this.m1z_1.r(tmp1);
  };
  function ObjectListMutableList(objectList) {
    this.o1z_1 = objectList;
  }
  protoOf(ObjectListMutableList).o = function () {
    return this.o1z_1.o();
  };
  protoOf(ObjectListMutableList).dd = function (element) {
    return this.o1z_1.s(element);
  };
  protoOf(ObjectListMutableList).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.dd((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).r = function (index) {
    checkIndex(this, index);
    return this.o1z_1.r(index);
  };
  protoOf(ObjectListMutableList).p1z = function (element) {
    return this.o1z_1.u(element);
  };
  protoOf(ObjectListMutableList).u = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.p1z((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).t = function () {
    return this.o1z_1.t();
  };
  protoOf(ObjectListMutableList).l = function () {
    return new MutableObjectListIterator(this, 0);
  };
  protoOf(ObjectListMutableList).q1z = function (element) {
    return this.o1z_1.g(element);
  };
  protoOf(ObjectListMutableList).g = function (element) {
    return this.q1z((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).u1z = function (index, element) {
    return this.o1z_1.h2(index, element);
  };
  protoOf(ObjectListMutableList).h2 = function (index, element) {
    return this.u1z(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).v1z = function (elements) {
    return this.o1z_1.w1z(elements);
  };
  protoOf(ObjectListMutableList).p = function (elements) {
    return this.v1z(elements);
  };
  protoOf(ObjectListMutableList).f2 = function () {
    return this.o1z_1.f2();
  };
  protoOf(ObjectListMutableList).q = function (index) {
    return new MutableObjectListIterator(this, index);
  };
  protoOf(ObjectListMutableList).x1z = function (element) {
    return this.o1z_1.e2(element);
  };
  protoOf(ObjectListMutableList).e2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.x1z((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).i2 = function (index) {
    checkIndex(this, index);
    return this.o1z_1.i2(index);
  };
  protoOf(ObjectListMutableList).y1z = function (index, element) {
    checkIndex(this, index);
    return this.o1z_1.g2(index, element);
  };
  protoOf(ObjectListMutableList).g2 = function (index, element) {
    return this.y1z(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function MutableObjectList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    ObjectList.call(this, initialCapacity);
    this.t1z_1 = null;
  }
  protoOf(MutableObjectList).g = function (element) {
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.l1z_1 + 1 | 0;
    var oldContent = this.k1z_1;
    if (oldContent.length < capacity) {
      this.z1z(capacity, oldContent);
    }
    this.k1z_1[this.l1z_1] = element;
    this.l1z_1 = this.l1z_1 + 1 | 0;
    return true;
  };
  protoOf(MutableObjectList).h2 = function (index, element) {
    if (!(0 <= index ? index <= this.l1z_1 : false)) {
      throwIndexOutOfBoundsInclusiveException(this, index);
    }
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.l1z_1 + 1 | 0;
    var oldContent = this.k1z_1;
    if (oldContent.length < capacity) {
      this.z1z(capacity, oldContent);
    }
    var content = this.k1z_1;
    if (!(index === this.l1z_1)) {
      var tmp4 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.l1z_1;
      arrayCopy(content, content, tmp4, index, endIndex);
    }
    content[index] = element;
    this.l1z_1 = this.l1z_1 + 1 | 0;
  };
  protoOf(MutableObjectList).a20 = function (elements) {
    var oldSize = this.l1z_1;
    this.b20(elements);
    return !(oldSize === this.l1z_1);
  };
  protoOf(MutableObjectList).w1z = function (elements) {
    var oldSize = this.l1z_1;
    this.c20(elements);
    return !(oldSize === this.l1z_1);
  };
  protoOf(MutableObjectList).b20 = function (elements) {
    if (elements.t())
      return Unit_instance;
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.l1z_1 + elements.l1z_1 | 0;
    var oldContent = this.k1z_1;
    if (oldContent.length < capacity) {
      this.z1z(capacity, oldContent);
    }
    var content = this.k1z_1;
    var tmp0 = elements.k1z_1;
    var tmp4 = this.l1z_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = elements.l1z_1;
    arrayCopy(tmp0, content, tmp4, 0, endIndex);
    this.l1z_1 = this.l1z_1 + elements.l1z_1 | 0;
  };
  protoOf(MutableObjectList).c20 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.l();
    while (_iterator__ex2g4s.m()) {
      var element = _iterator__ex2g4s.n();
      // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
      this.g(element);
    }
  };
  protoOf(MutableObjectList).f2 = function () {
    fill_0(this.k1z_1, null, 0, this.l1z_1);
    this.l1z_1 = 0;
  };
  protoOf(MutableObjectList).z1z = function (capacity, oldContent) {
    var oldSize = oldContent.length;
    // Inline function 'kotlin.math.max' call
    var b = imul(oldSize, 3) / 2 | 0;
    var newSize = Math.max(capacity, b);
    // Inline function 'kotlin.arrayOfNulls' call
    var newContent = Array(newSize);
    var tmp = this;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(oldContent, newContent, 0, 0, oldSize);
    tmp.k1z_1 = newContent;
  };
  protoOf(MutableObjectList).e2 = function (element) {
    var index = this.u(element);
    if (index >= 0) {
      this.i2(index);
      return true;
    }
    return false;
  };
  protoOf(MutableObjectList).i2 = function (index) {
    if (!(0 <= index ? index < this.l1z_1 : false)) {
      this.d20(index);
    }
    var content = this.k1z_1;
    var element = content[index];
    // Inline function 'androidx.collection.ObjectList.lastIndex' call
    if (!(index === (this.l1z_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.l1z_1;
      arrayCopy(content, content, index, tmp6, endIndex);
    }
    this.l1z_1 = this.l1z_1 - 1 | 0;
    content[this.l1z_1] = null;
    return (element == null ? true : !(element == null)) ? element : THROW_CCE();
  };
  protoOf(MutableObjectList).g2 = function (index, element) {
    if (!(0 <= index ? index < this.l1z_1 : false)) {
      this.d20(index);
    }
    var content = this.k1z_1;
    var old = content[index];
    content[index] = element;
    return (old == null ? true : !(old == null)) ? old : THROW_CCE();
  };
  protoOf(MutableObjectList).e20 = function () {
    var tmp0_elvis_lhs = this.t1z_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ObjectListMutableList(this);
      this.t1z_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function ObjectList$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString(element);
      }
      return tmp;
    };
  }
  function ObjectList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyArray();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_0 = Array(initialCapacity);
    }
    tmp.k1z_1 = tmp_0;
    this.l1z_1 = 0;
  }
  protoOf(ObjectList).o = function () {
    return this.l1z_1;
  };
  protoOf(ObjectList).s = function (element) {
    return this.u(element) >= 0;
  };
  protoOf(ObjectList).u1x = function () {
    if (this.t()) {
      throwNoSuchElementException('ObjectList is empty.');
    }
    var tmp = this.k1z_1[0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ObjectList).r = function (index) {
    if (!(0 <= index ? index < this.l1z_1 : false)) {
      this.d20(index);
    }
    var tmp = this.k1z_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ObjectList).d20 = function (index) {
    // Inline function 'androidx.collection.ObjectList.lastIndex' call
    var tmp$ret$0 = this.l1z_1 - 1 | 0;
    throwIndexOutOfBoundsException('Index ' + index + ' must be in 0..' + tmp$ret$0);
  };
  protoOf(ObjectList).u = function (element) {
    if (element == null) {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.k1z_1;
      var inductionVariable = 0;
      var last = this.l1z_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          if (((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()) == null) {
            return i;
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content_0 = this.k1z_1;
      var inductionVariable_0 = 0;
      var last_0 = this.l1z_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp_0 = content_0[i_0];
          var item = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          if (equals(element, item)) {
            return i_0;
          }
        }
         while (inductionVariable_0 < last_0);
    }
    return -1;
  };
  protoOf(ObjectList).t = function () {
    return this.l1z_1 === 0;
  };
  protoOf(ObjectList).f20 = function () {
    return !(this.l1z_1 === 0);
  };
  protoOf(ObjectList).g20 = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.h(prefix);
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.k1z_1;
      var inductionVariable = 0;
      var last = this.l1z_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          if (i === limit) {
            this_0.h(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.h(separator);
          }
          if (transform == null) {
            this_0.d7(element);
          } else {
            this_0.h(transform(element));
          }
        }
         while (inductionVariable < last);
      this_0.h(postfix);
    }
    return this_0.toString();
  };
  protoOf(ObjectList).h20 = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.g20(separator, prefix, postfix, limit, truncated, transform) : $super.g20.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ObjectList).hashCode = function () {
    var hashCode_0 = 0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.k1z_1;
    var inductionVariable = 0;
    var last = this.l1z_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = content[i];
        var tmp_0 = hashCode_0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        hashCode_0 = tmp_0 + imul(31, tmp$ret$1) | 0;
      }
       while (inductionVariable < last);
    return hashCode_0;
  };
  protoOf(ObjectList).equals = function (other) {
    var tmp;
    if (!(other instanceof ObjectList)) {
      tmp = true;
    } else {
      tmp = !(other.l1z_1 === this.l1z_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.k1z_1;
    var otherContent = other.k1z_1;
    // Inline function 'androidx.collection.ObjectList.indices' call
    var progression = until(0, this.l1z_1);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(content[i], otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(ObjectList).toString = function () {
    return this.h20(VOID, '[', ']', VOID, VOID, ObjectList$toString$lambda(this));
  };
  function emptyObjectList() {
    _init_properties_ObjectList_kt__fnapct();
    var tmp = get_EmptyObjectList();
    return tmp instanceof ObjectList ? tmp : THROW_CCE();
  }
  function mutableObjectListOf(element1, element2) {
    _init_properties_ObjectList_kt__fnapct();
    var list = new MutableObjectList(2);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.g(element1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.g(element2);
    return list;
  }
  function objectListOf(element1) {
    _init_properties_ObjectList_kt__fnapct();
    return mutableObjectListOf_0(element1);
  }
  function checkIndex(_this__u8e3s4, index) {
    _init_properties_ObjectList_kt__fnapct();
    var size = _this__u8e3s4.o();
    if (index < 0 || index >= size) {
      throwIndexOutOfBoundsException('Index ' + index + ' is out of bounds. The list has ' + size + ' elements.');
    }
  }
  function mutableObjectListOf_0(element1) {
    _init_properties_ObjectList_kt__fnapct();
    var list = new MutableObjectList(1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.g(element1);
    return list;
  }
  var properties_initialized_ObjectList_kt_7isazj;
  function _init_properties_ObjectList_kt__fnapct() {
    if (!properties_initialized_ObjectList_kt_7isazj) {
      properties_initialized_ObjectList_kt_7isazj = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EmptyArray = Array(0);
      EmptyObjectList = new MutableObjectList(0);
    }
  }
  function get_EmptyGroup() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyGroup;
  }
  var EmptyGroup;
  function get_EmptyScatterMap() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyScatterMap;
  }
  var EmptyScatterMap;
  function initializeStorage_3($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.math.max' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.l20_1 = newCapacity;
    initializeMetadata_3($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = Array(newCapacity);
    }
    tmp_0.j20_1 = tmp_1;
    var tmp_2 = $this;
    var tmp_3;
    if (newCapacity === 0) {
      tmp_3 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_3 = Array(newCapacity);
    }
    tmp_2.k20_1 = tmp_3;
  }
  function initializeMetadata_3($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = capacity >> 3;
      var b = (capacity & 7) << 3;
      this_0[i] = bitwiseOr(bitwiseAnd(this_0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
      tmp_0 = this_0;
    }
    tmp.i20_1 = tmp_0;
    initializeGrowth_3($this);
  }
  function initializeGrowth_3($this) {
    $this.s20_1 = loadedCapacity($this.h1x()) - $this.m20_1 | 0;
  }
  function findFirstAvailableSlot_3($this, hash1) {
    var probeMask = $this.l20_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.i20_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableScatterMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterMap.call(this);
    this.s20_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_3(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterMap).t20 = function (key, value) {
    // Inline function 'kotlin.let' call
    var index = this.u20(key);
    var index_0 = index < 0 ? ~index : index;
    this.j20_1[index_0] = key;
    this.k20_1[index_0] = value;
  };
  protoOf(MutableScatterMap).x1 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.l20_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.i20_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$5 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$5);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.j20_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    if (index_0 >= 0) {
      return this.k1y(index_0);
    }
    return null;
  };
  protoOf(MutableScatterMap).k1y = function (index) {
    this.m20_1 = this.m20_1 - 1 | 0;
    var tmp0 = this.i20_1;
    var tmp2 = this.l20_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.j20_1[index] = null;
    var oldValue = this.k20_1[index];
    this.k20_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableScatterMap).f2 = function () {
    this.m20_1 = 0;
    if (!(this.i20_1 === get_EmptyGroup())) {
      fill(this.i20_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.i20_1;
      var tmp2 = this.l20_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.k20_1, null, 0, this.l20_1);
    fill_0(this.j20_1, null, 0, this.l20_1);
    initializeGrowth_3(this);
  };
  protoOf(MutableScatterMap).u20 = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.l20_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.i20_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals(this.j20_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_3(this, hash1);
    var tmp_0;
    if (this.s20_1 === 0) {
      var tmp0_0 = this.i20_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.i1x();
      index_0 = findFirstAvailableSlot_3(this, hash1);
    }
    this.m20_1 = this.m20_1 + 1 | 0;
    var tmp_1 = this;
    var tmp_2 = this.s20_1;
    var tmp_3;
    var tmp0_1 = this.i20_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.s20_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = this.i20_1;
    var tmp2 = this.l20_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return ~index_0;
  };
  protoOf(MutableScatterMap).i1x = function () {
    var tmp;
    if (this.l20_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.m20_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.l20_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.l1x();
    } else {
      this.k1x(nextCapacity(this.l20_1));
    }
  };
  protoOf(MutableScatterMap).l1x = function () {
    var metadata = this.i20_1;
    var capacity = this.l20_1;
    var keys = this.j20_1;
    var values = this.k20_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = keys[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_3(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = metadata[0];
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = null;
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = metadata[0];
      index = index + 1 | 0;
    }
    initializeGrowth_3(this);
  };
  protoOf(MutableScatterMap).k1x = function (newCapacity) {
    var previousMetadata = this.i20_1;
    var previousKeys = this.j20_1;
    var previousValues = this.k20_1;
    var previousCapacity = this.l20_1;
    initializeStorage_3(this, newCapacity);
    var newMetadata = this.i20_1;
    var newKeys = this.j20_1;
    var newValues = this.k20_1;
    var capacity = this.l20_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$0 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$0, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_3(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function ScatterMap() {
    this.i20_1 = get_EmptyGroup();
    this.j20_1 = get_EMPTY_OBJECTS();
    this.k20_1 = get_EMPTY_OBJECTS();
    this.l20_1 = 0;
    this.m20_1 = 0;
  }
  protoOf(ScatterMap).h1x = function () {
    return this.l20_1;
  };
  protoOf(ScatterMap).o = function () {
    return this.m20_1;
  };
  protoOf(ScatterMap).t = function () {
    return this.m20_1 === 0;
  };
  protoOf(ScatterMap).f20 = function () {
    return !(this.m20_1 === 0);
  };
  protoOf(ScatterMap).d2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.l20_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.i20_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$5 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$5);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.j20_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.k20_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(ScatterMap).c5 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.l20_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.i20_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$5 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$5);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.j20_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterMap).b2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.l20_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.i20_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$5 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$5);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.j20_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.j20_1;
    var v = this.k20_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.i20_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp0 == null ? null : hashCode(tmp0);
                  var tmp_2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs_0 = value_0 == null ? null : hashCode(value_0);
                  hash = tmp_1 + (tmp_2 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0)) | 0;
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ScatterMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterMap)) {
      return false;
    }
    if (!(other.o() === this.o())) {
      return false;
    }
    var o = other instanceof ScatterMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.j20_1;
    var v = this.k20_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.i20_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  if (value_0 == null) {
                    if (!(o.d2(tmp0) == null) || !o.b2(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value_0, o.d2(tmp0))) {
                    return false;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ScatterMap).toString = function () {
    if (this.t()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().f7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.j20_1;
    var v = this.k20_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.i20_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  s.d7(tmp0 === this ? '(this)' : tmp0);
                  s.e7('=');
                  s.d7(value_0 === this ? '(this)' : value_0);
                  i = i + 1 | 0;
                  if (i < this.m20_1) {
                    s.f7(_Char___init__impl__6a9atx(44)).f7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.f7(_Char___init__impl__6a9atx(125)).toString();
  };
  function emptyScatterMap() {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp = get_EmptyScatterMap();
    return tmp instanceof ScatterMap ? tmp : THROW_CCE();
  }
  function mutableScatterMapOf() {
    _init_properties_ScatterMap_kt__cygxb2();
    return new MutableScatterMap();
  }
  function unloadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 8;
    }
    return capacity + ((capacity - 1 | 0) / 7 | 0) | 0;
  }
  function normalizeCapacity(n) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (n > 0) {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = -1 >>> clz32(n) | 0;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function loadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 6;
    }
    return capacity - (capacity / 8 | 0) | 0;
  }
  function nextCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (capacity === 0) {
      tmp = 6;
    } else {
      tmp = imul(capacity, 2) + 1 | 0;
    }
    return tmp;
  }
  var properties_initialized_ScatterMap_kt_apzngg;
  function _init_properties_ScatterMap_kt__cygxb2() {
    if (!properties_initialized_ScatterMap_kt_apzngg) {
      properties_initialized_ScatterMap_kt_apzngg = true;
      // Inline function 'kotlin.longArrayOf' call
      EmptyGroup = longArrayOf([new Long(-2139062017, -2139062144), new Long(-1, -1)]);
      EmptyScatterMap = new MutableScatterMap(0);
    }
  }
  var EmptyScatterSet;
  function ScatterSet$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString(element);
      }
      return tmp;
    };
  }
  function ScatterSet() {
    this.v20_1 = get_EmptyGroup();
    this.w20_1 = get_EMPTY_OBJECTS();
    this.x20_1 = 0;
    this.y20_1 = 0;
  }
  protoOf(ScatterSet).h1x = function () {
    return this.x20_1;
  };
  protoOf(ScatterSet).o = function () {
    return this.y20_1;
  };
  protoOf(ScatterSet).t = function () {
    return this.y20_1 === 0;
  };
  protoOf(ScatterSet).f20 = function () {
    return !(this.y20_1 === 0);
  };
  protoOf(ScatterSet).s = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.x20_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.v20_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$5 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$5);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.w20_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterSet).g20 = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.h(prefix);
      var index = 0;
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var elements = this.w20_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.v20_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value = bitwiseAnd(slot, new Long(255, 0));
                  if (compare(value, new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    var tmp = elements[index_0];
                    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    if (index === limit) {
                      this_0.h(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.h(separator);
                    }
                    if (transform == null) {
                      this_0.d7(element);
                    } else {
                      this_0.h(transform(element));
                    }
                    index = index + 1 | 0;
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.h(postfix);
    }
    return this_0.toString();
  };
  protoOf(ScatterSet).z20 = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.g20(separator, prefix, postfix, limit, truncated, transform) : $super.g20.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ScatterSet).hashCode = function () {
    var hash = this.x20_1;
    hash = imul(31, hash) + this.y20_1 | 0;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.w20_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.v20_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = elements[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!equals(element, this)) {
                    var tmp_0 = hash;
                    // Inline function 'kotlin.hashCode' call
                    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
                    hash = tmp_0 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ScatterSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterSet)) {
      return false;
    }
    if (!(other.o() === this.o())) {
      return false;
    }
    var o = other instanceof ScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.w20_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.v20_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = elements[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!o.s(element)) {
                    return false;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ScatterSet).toString = function () {
    return this.z20(VOID, '[', ']', VOID, VOID, ScatterSet$toString$lambda(this));
  };
  function initializeStorage_4($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.x20_1 = newCapacity;
    initializeMetadata_4($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = Array(newCapacity);
    }
    tmp_0.w20_1 = tmp_1;
  }
  function initializeMetadata_4($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.v20_1 = tmp_0;
    var tmp0 = $this.v20_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_4($this);
  }
  function initializeGrowth_4($this) {
    $this.e21_1 = loadedCapacity($this.h1x()) - $this.y20_1 | 0;
  }
  function findAbsoluteInsertIndex_1($this, element) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.x20_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.v20_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals($this.w20_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_4($this, hash1);
    var tmp_0;
    if ($this.e21_1 === 0) {
      var tmp0_0 = $this.v20_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.i1x();
      index_0 = findFirstAvailableSlot_4($this, hash1);
    }
    $this.y20_1 = $this.y20_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.e21_1;
    var tmp_3;
    var tmp0_1 = $this.v20_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.e21_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.v20_1;
    var tmp2 = $this.x20_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_4($this, hash1) {
    var probeMask = $this.x20_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.v20_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableScatterSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterSet.call(this);
    this.e21_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_4(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterSet).g = function (element) {
    var oldSize = this.o();
    var index = findAbsoluteInsertIndex_1(this, element);
    this.w20_1[index] = element;
    return !(this.o() === oldSize);
  };
  protoOf(MutableScatterSet).f21 = function (element) {
    var index = findAbsoluteInsertIndex_1(this, element);
    this.w20_1[index] = element;
  };
  protoOf(MutableScatterSet).w1z = function (elements) {
    var oldSize = this.o();
    this.c20(elements);
    return !(oldSize === this.o());
  };
  protoOf(MutableScatterSet).g21 = function (elements) {
    var oldSize = this.o();
    this.h21(elements);
    return !(oldSize === this.o());
  };
  protoOf(MutableScatterSet).c20 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.l();
    while (_iterator__ex2g4s.m()) {
      var element = _iterator__ex2g4s.n();
      this.f21(element);
    }
  };
  protoOf(MutableScatterSet).h21 = function (elements) {
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements_0 = elements.w20_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = elements.v20_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = elements_0[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  this.f21(element);
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  protoOf(MutableScatterSet).e2 = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.x20_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.v20_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$5 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$5);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.w20_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var exists = index_0 >= 0;
    if (exists) {
      this.i21(index_0);
    }
    return exists;
  };
  protoOf(MutableScatterSet).i21 = function (index) {
    this.y20_1 = this.y20_1 - 1 | 0;
    var tmp0 = this.v20_1;
    var tmp2 = this.x20_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.w20_1[index] = null;
  };
  protoOf(MutableScatterSet).f2 = function () {
    this.y20_1 = 0;
    if (!(this.v20_1 === get_EmptyGroup())) {
      fill(this.v20_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.v20_1;
      var tmp2 = this.x20_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.w20_1, null, 0, this.x20_1);
    initializeGrowth_4(this);
  };
  protoOf(MutableScatterSet).i1x = function () {
    var tmp;
    if (this.x20_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.y20_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.x20_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.l1x();
    } else {
      this.k1x(nextCapacity(this.x20_1));
    }
  };
  protoOf(MutableScatterSet).l1x = function () {
    var metadata = this.v20_1;
    var capacity = this.x20_1;
    var elements = this.w20_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = elements[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_4(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        elements[targetIndex] = elements[index];
        elements[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_4(this);
  };
  protoOf(MutableScatterSet).k1x = function (newCapacity) {
    var previousMetadata = this.v20_1;
    var previousElements = this.w20_1;
    var previousCapacity = this.x20_1;
    initializeStorage_4(this, newCapacity);
    var newMetadata = this.v20_1;
    var newElements = this.w20_1;
    var capacity = this.x20_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$0 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$0, new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousElement == null ? null : hashCode(previousElement);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_4(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  protoOf(MutableScatterSet).j21 = function () {
    return new MutableSetWrapper(this);
  };
  function mutableScatterSetOf() {
    _init_properties_ScatterSet_kt__vy48mc();
    return new MutableScatterSet();
  }
  function mutableScatterSetOf_0(element1, element2) {
    _init_properties_ScatterSet_kt__vy48mc();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterSet(2);
    this_0.f21(element1);
    this_0.f21(element2);
    return this_0;
  }
  function SetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.s21_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetWrapper$iterator$slambda).d22 = function ($this$iterator, $completion) {
    var tmp = this.e22($this$iterator, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(SetWrapper$iterator$slambda).r8 = function (p1, $completion) {
    return this.d22(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetWrapper$iterator$slambda).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 11;
            var this_0 = this.s21_1.f22_1;
            this.w21_1 = this_0.w20_1;
            this.c22_1 = this_0;
            this.x7_1 = 1;
            continue $sm;
          case 1:
            this.a22_1 = this.c22_1.v20_1;
            this.z21_1 = this.a22_1.length - 2 | 0;
            this.b22_1 = numberRangeToNumber(0, this.z21_1).l();
            this.x7_1 = 2;
            continue $sm;
          case 2:
            if (!this.b22_1.m()) {
              this.x7_1 = 9;
              continue $sm;
            }

            this.x21_1 = this.b22_1.n();
            this.v21_1 = this.a22_1[this.x21_1];
            var this_1 = this.v21_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.u21_1 = 8 - (~(this.x21_1 - this.z21_1 | 0) >>> 31 | 0) | 0;
              this.y21_1 = until(0, this.u21_1).l();
              this.x7_1 = 3;
              continue $sm;
            } else {
              this.x7_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.y21_1.m()) {
              this.x7_1 = 6;
              continue $sm;
            }

            var j = this.y21_1.n();
            var value = bitwiseAnd(this.v21_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.x21_1 << 3) + j | 0;
              var tmp_0 = this.w21_1[index];
              var element = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
              this.x7_1 = 4;
              suspendResult = this.t21_1.vd(element, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.x7_1 = 5;
              continue $sm;
            }

          case 4:
            this.x7_1 = 5;
            continue $sm;
          case 5:
            this.v21_1 = shiftRight(this.v21_1, 8);
            this.x7_1 = 3;
            continue $sm;
          case 6:
            if (!(this.u21_1 === 8)) {
              this.x7_1 = 10;
              continue $sm;
            } else {
              this.x7_1 = 7;
              continue $sm;
            }

          case 7:
            this.x7_1 = 8;
            continue $sm;
          case 8:
            this.x7_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.x7_1 = 1;
              continue $sm;
            }

            this.x7_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.a8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.y7_1 === 11) {
          throw e;
        } else {
          this.x7_1 = this.y7_1;
          this.a8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SetWrapper$iterator$slambda).e22 = function ($this$iterator, completion) {
    var i = new SetWrapper$iterator$slambda(this.s21_1, completion);
    i.t21_1 = $this$iterator;
    return i;
  };
  function SetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.d22($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetWrapper(parent) {
    this.f22_1 = parent;
  }
  protoOf(SetWrapper).o = function () {
    return this.f22_1.y20_1;
  };
  protoOf(SetWrapper).t1 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.l();
    while (_iterator__ex2g4s.m()) {
      var element = _iterator__ex2g4s.n();
      if (!this.f22_1.s(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SetWrapper).s = function (element) {
    return this.f22_1.s(element);
  };
  protoOf(SetWrapper).t = function () {
    return this.f22_1.t();
  };
  protoOf(SetWrapper).l = function () {
    return iterator(SetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(SetWrapper).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof SetWrapper))
      THROW_CCE();
    return this.f22_1.equals(other.f22_1);
  };
  protoOf(SetWrapper).hashCode = function () {
    return this.f22_1.hashCode();
  };
  protoOf(SetWrapper).toString = function () {
    return this.f22_1.toString();
  };
  function MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation) {
    this.o22_1 = this$0;
    this.p22_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).d22 = function ($this$iterator, $completion) {
    var tmp = this.e22($this$iterator, $completion);
    tmp.z7_1 = Unit_instance;
    tmp.a8_1 = null;
    return tmp.f8();
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).r8 = function (p1, $completion) {
    return this.d22(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).f8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 11;
            this.y22_1 = this.o22_1.a23_1;
            this.x7_1 = 1;
            continue $sm;
          case 1:
            this.w22_1 = this.y22_1.v20_1;
            this.v22_1 = this.w22_1.length - 2 | 0;
            this.x22_1 = numberRangeToNumber(0, this.v22_1).l();
            this.x7_1 = 2;
            continue $sm;
          case 2:
            if (!this.x22_1.m()) {
              this.x7_1 = 9;
              continue $sm;
            }

            this.t22_1 = this.x22_1.n();
            this.s22_1 = this.w22_1[this.t22_1];
            var this_0 = this.s22_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.r22_1 = 8 - (~(this.t22_1 - this.v22_1 | 0) >>> 31 | 0) | 0;
              this.u22_1 = until(0, this.r22_1).l();
              this.x7_1 = 3;
              continue $sm;
            } else {
              this.x7_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.u22_1.m()) {
              this.x7_1 = 6;
              continue $sm;
            }

            var j = this.u22_1.n();
            var value = bitwiseAnd(this.s22_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.t22_1 << 3) + j | 0;
              this.p22_1.b23_1 = index;
              this.x7_1 = 4;
              var tmp_0 = this.o22_1.a23_1.w20_1[index];
              suspendResult = this.q22_1.vd((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.x7_1 = 5;
              continue $sm;
            }

          case 4:
            this.x7_1 = 5;
            continue $sm;
          case 5:
            this.s22_1 = shiftRight(this.s22_1, 8);
            this.x7_1 = 3;
            continue $sm;
          case 6:
            if (!(this.r22_1 === 8)) {
              this.x7_1 = 10;
              continue $sm;
            } else {
              this.x7_1 = 7;
              continue $sm;
            }

          case 7:
            this.x7_1 = 8;
            continue $sm;
          case 8:
            this.x7_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.x7_1 = 1;
              continue $sm;
            }

            this.x7_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.a8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.y7_1 === 11) {
          throw e;
        } else {
          this.x7_1 = this.y7_1;
          this.a8_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).e22 = function ($this$iterator, completion) {
    var i = new MutableSetWrapper$iterator$o$iterator$slambda(this.o22_1, this.p22_1, completion);
    i.q22_1 = $this$iterator;
    return i;
  };
  function MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this$1, resultContinuation) {
    var i = new MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.d22($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableSetWrapper$iterator$1(this$0) {
    this.d23_1 = this$0;
    this.b23_1 = -1;
    var tmp = this;
    tmp.c23_1 = iterator(MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this, null));
  }
  protoOf(MutableSetWrapper$iterator$1).m = function () {
    return this.c23_1.m();
  };
  protoOf(MutableSetWrapper$iterator$1).n = function () {
    return this.c23_1.n();
  };
  protoOf(MutableSetWrapper$iterator$1).o3 = function () {
    if (!(this.b23_1 === -1)) {
      this.d23_1.a23_1.i21(this.b23_1);
      this.b23_1 = -1;
    }
  };
  function MutableSetWrapper(parent) {
    SetWrapper.call(this, parent);
    this.a23_1 = parent;
  }
  protoOf(MutableSetWrapper).g = function (element) {
    return this.a23_1.g(element);
  };
  protoOf(MutableSetWrapper).p = function (elements) {
    return this.a23_1.w1z(elements);
  };
  protoOf(MutableSetWrapper).l = function () {
    return new MutableSetWrapper$iterator$1(this);
  };
  protoOf(MutableSetWrapper).e2 = function (element) {
    return this.a23_1.e2(element);
  };
  var properties_initialized_ScatterSet_kt_dmj456;
  function _init_properties_ScatterSet_kt__vy48mc() {
    if (!properties_initialized_ScatterSet_kt_dmj456) {
      properties_initialized_ScatterSet_kt_dmj456 = true;
      EmptyScatterSet = new MutableScatterSet(0);
    }
  }
  var EMPTY_INTS;
  var EMPTY_LONGS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      EMPTY_LONGS = longArray(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = Array(0);
    }
  }
  function throwIndexOutOfBoundsException(message) {
    throw IndexOutOfBoundsException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function throwNoSuchElementException(message) {
    throw NoSuchElementException_init_$Create$(message);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MutableDoubleList;
  _.$_$.b = MutableIntIntMap;
  _.$_$.c = MutableIntList;
  _.$_$.d = MutableIntObjectMap;
  _.$_$.e = MutableIntSet;
  _.$_$.f = MutableObjectIntMap;
  _.$_$.g = MutableObjectList;
  _.$_$.h = MutableScatterMap;
  _.$_$.i = MutableScatterSet;
  _.$_$.j = ObjectList;
  _.$_$.k = ScatterSet;
  _.$_$.l = emptyObjectList;
  _.$_$.m = emptyScatterMap;
  _.$_$.n = mutableIntSetOf;
  _.$_$.o = mutableObjectListOf;
  _.$_$.p = mutableScatterMapOf;
  _.$_$.q = mutableScatterSetOf_0;
  _.$_$.r = mutableScatterSetOf;
  _.$_$.s = objectListOf;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-collection-collection.js.map
