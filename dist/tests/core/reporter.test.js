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
var ava_1 = require('ava');
var reporter_1 = require('../../core/reporter');
ava_1.default('triggers recipe callbacks', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var stat, reporter;
    return __generator(this, function (_a) {
      stat = {
        onBegin: 0,
        onEnd: 0,
        onNote: 0,
        onSpecStartNote: 0,
        onSpecEndNote: 0,
        onTestStartNote: 0,
        onTestEndNote: 0,
        onAssertionNote: 0,
      };
      reporter = new reporter_1.Reporter({
        onBegin: function () {
          return stat.onBegin++;
        },
        onEnd: function () {
          return stat.onEnd++;
        },
        onNote: function () {
          return stat.onNote++;
        },
        onSpecStartNote: function () {
          return stat.onSpecStartNote++;
        },
        onSpecEndNote: function () {
          return stat.onSpecEndNote++;
        },
        onTestStartNote: function () {
          return stat.onTestStartNote++;
        },
        onTestEndNote: function () {
          return stat.onTestEndNote++;
        },
        onAssertionNote: function () {
          return stat.onAssertionNote++;
        },
      });
      reporter.begin();
      reporter.note({
        type: 'SpecStartNote',
        message: 'foo',
      });
      reporter.note({
        type: 'SpecEndNote',
        duration: 0,
      });
      reporter.note({
        type: 'TestStartNote',
        message: 'foo',
        perform: true,
      });
      reporter.note({
        type: 'TestEndNote',
        duration: 0,
      });
      reporter.note({
        type: 'AssertionNote',
        message: 'foo',
        assertion: 'is',
        success: true,
      });
      reporter.end();
      t.deepEqual(stat, {
        onBegin: 1,
        onEnd: 1,
        onNote: 5,
        onSpecStartNote: 1,
        onSpecEndNote: 1,
        onTestStartNote: 1,
        onTestEndNote: 1,
        onAssertionNote: 1,
      });
      return [2];
    });
  });
});
ava_1.default('memorizes spec block level', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var reporter;
    return __generator(this, function (_a) {
      reporter = new reporter_1.Reporter();
      reporter.note({
        type: 'SpecStartNote',
        message: 'foo',
      });
      reporter.note({
        type: 'TestStartNote',
        message: 'foo',
        perform: true,
      });
      reporter.note({
        type: 'SpecEndNote',
        duration: 0,
      });
      t.is(reporter.level, 1);
      return [2];
    });
  });
});
//# sourceMappingURL=reporter.test.js.map
