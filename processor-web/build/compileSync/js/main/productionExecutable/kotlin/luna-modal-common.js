(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['luna-modal-common'] = factory(typeof globalThis['luna-modal-common'] === 'undefined' ? {} : globalThis['luna-modal-common']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=luna-modal-common.js.map
