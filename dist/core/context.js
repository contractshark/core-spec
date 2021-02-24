'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Context = void 0;
var truthy_1 = require('../asserts/truthy');
var is_1 = require('../asserts/is');
var throws_1 = require('../asserts/throws');
var deep_equal_1 = require('../asserts/deep-equal');
var exec_1 = require('../methods/exec');
var sleep_1 = require('../methods/sleep');
var request_1 = require('../methods/request');
var Context = (function () {
  function Context(stage) {
    this.data = {};
    this.stage = stage;
  }
  Context.prototype.get = function (k) {
    return this.data[k] || this.stage.get(k);
  };
  Context.prototype.set = function (k, v) {
    this.data[k] = v;
  };
  Context.prototype.pass = function (message) {
    return this.assert({
      assertion: 'pass',
      handler: function () {
        return true;
      },
      message: message,
    });
  };
  Context.prototype.fail = function (message) {
    return this.assert({
      assertion: 'fail',
      handler: function () {
        return false;
      },
      message: message,
    });
  };
  Context.prototype.truthy = function (value, message) {
    return this.assert({
      assertion: 'truthy',
      handler: function () {
        return truthy_1.default(value);
      },
      message: message,
    });
  };
  Context.prototype.falsy = function (value, message) {
    return this.assert({
      assertion: 'falsy',
      handler: function () {
        return !truthy_1.default(value);
      },
      message: message,
    });
  };
  Context.prototype.true = function (value, message) {
    return this.assert({
      assertion: 'true',
      handler: function () {
        return !!value;
      },
      message: message,
    });
  };
  Context.prototype.false = function (value, message) {
    return this.assert({
      assertion: 'false',
      handler: function () {
        return !value;
      },
      message: message,
    });
  };
  Context.prototype.is = function (value, expected, message) {
    return this.assert({
      assertion: 'is',
      handler: function () {
        return is_1.default(value, expected);
      },
      message: message,
    });
  };
  Context.prototype.not = function (value, expected, message) {
    return this.assert({
      assertion: 'not',
      handler: function () {
        return !is_1.default(value, expected);
      },
      message: message,
    });
  };
  Context.prototype.throws = function (fn, message) {
    return this.assert({
      assertion: 'throws',
      handler: function () {
        return throws_1.default(fn);
      },
      message: message,
    });
  };
  Context.prototype.notThrows = function (fn, message) {
    return this.assert({
      assertion: 'notThrows',
      handler: function () {
        var res = throws_1.default(fn);
        if (res instanceof Promise) {
          return res.then(function (res) {
            return !res;
          });
        } else {
          return !res;
        }
      },
      message: message,
    });
  };
  Context.prototype.regex = function (exp, value, message) {
    return this.assert({
      assertion: 'regex',
      handler: function () {
        return exp.test(value);
      },
      message: message,
    });
  };
  Context.prototype.notRegex = function (exp, value, message) {
    return this.assert({
      assertion: 'notRegex',
      handler: function () {
        return !exp.test(value);
      },
      message: message,
    });
  };
  Context.prototype.deepEqual = function (value, expected, message) {
    return this.assert({
      assertion: 'deepEqual',
      handler: function () {
        return deep_equal_1.default(value, expected);
      },
      message: message,
    });
  };
  Context.prototype.notDeepEqual = function (value, expected, message) {
    return this.assert({
      assertion: 'notDeepEqual',
      handler: function () {
        return !deep_equal_1.default(value, expected);
      },
      message: message,
    });
  };
  Context.prototype.sleep = function (time) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2, sleep_1.sleep(time)];
      });
    });
  };
  Context.prototype.request = function (config) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2, request_1.request(config)];
      });
    });
  };
  Context.prototype.exec = function (command) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2, exec_1.exec(command)];
      });
    });
  };
  Context.prototype.assert = function (recipe) {
    var _this = this;
    var success = recipe.handler();
    var buildResult = function (success) {
      return {
        type: 'AssertionNote',
        message: recipe.message || null,
        assertion: recipe.assertion || null,
        success: !!success,
      };
    };
    var printResult = function (result) {
      _this.stage.reporter.note(result);
      return result;
    };
    if (success instanceof Promise) {
      return success.then(function (success) {
        var result = buildResult(success);
        return printResult(result);
      });
    } else {
      var result = buildResult(success);
      return printResult(result);
    }
  };
  return Context;
})();
exports.Context = Context;
//# sourceMappingURL=context.js.map
