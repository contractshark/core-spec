'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.exec = void 0;
var cproc = require('child_process');
var util = require('util');
exports.exec = util.promisify(cproc.exec);
//# sourceMappingURL=exec.js.map
