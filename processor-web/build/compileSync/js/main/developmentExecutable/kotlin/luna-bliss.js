(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['luna-bliss'] = factory(typeof globalThis['luna-bliss'] === 'undefined' ? {} : globalThis['luna-bliss']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=luna-bliss.js.map
