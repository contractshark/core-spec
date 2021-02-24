'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function throws(fn) {
  try {
    var res = fn();
    if (res instanceof Promise) {
      return res
        .then(function () {
          return false;
        })
        .catch(function () {
          return true;
        });
    } else {
      return false;
    }
  } catch (e) {
    return true;
  }
}
exports.default = throws;
//# sourceMappingURL=throws.js.map
