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
var __1 = require('../..');
var reporter_1 = require('../../core/reporter');
var reporter = new reporter_1.Reporter();
ava_1.default('methods `set()` and `get()` manages values', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var stage, id, name;
    return __generator(this, function (_a) {
      stage = new __1.Stage(reporter);
      stage.set('id', 100);
      stage.set('name', 'foo');
      id = stage.get('id');
      name = stage.get('name');
      t.is(id, 100);
      t.is(name, 'foo');
      return [2];
    });
  });
});
ava_1.default('method `sleep()` continues with timeout', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var times, stage;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          times = [0, 0, 0];
          stage = new __1.Stage(reporter);
          times[0] = Date.now();
          return [4, stage.sleep(2000)];
        case 1:
          _a.sent();
          times[1] = Date.now();
          return [4, stage.sleep(2000)];
        case 2:
          _a.sent();
          times[2] = Date.now();
          t.true(times[1] >= times[0] + 2000);
          t.true(times[2] >= times[0] + 4000);
          return [2];
      }
    });
  });
});
ava_1.default('methods `request()` returns supertest instance', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var stage, res;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          stage = new __1.Stage(reporter);
          return [
            4,
            stage.request({ method: 'get', url: 'http://google.com' }),
          ];
        case 1:
          res = _a.sent();
          t.is(res.status, 200);
          return [2];
      }
    });
  });
});
ava_1.default('methods `exec()` returns terminal command result', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var stage, _a, stdout, stderr;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          stage = new __1.Stage(reporter);
          return [4, stage.exec('echo "foo"')];
        case 1:
          (_a = _b.sent()), (stdout = _a.stdout), (stderr = _a.stderr);
          t.true(stdout.indexOf('foo') !== -1);
          t.true(stderr === '');
          return [2];
      }
    });
  });
});
//# sourceMappingURL=stage.test.js.map
