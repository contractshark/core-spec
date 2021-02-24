'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function truthy(value) {
  return (
    value === true ||
    value === 'true' ||
    value === 'TRUE' ||
    value === 1 ||
    value === '1' ||
    value === 'yes' ||
    value === 'YES' ||
    value === 'ok' ||
    value === 'OK' ||
    value === 'correct' ||
    value === 'CORRECT'
  );
}
exports.default = truthy;
//# sourceMappingURL=truthy.js.map
