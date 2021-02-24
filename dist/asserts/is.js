'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
exports.default = is;
//# sourceMappingURL=is.js.map
