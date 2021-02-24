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
    var stage, context, id, name;
    return __generator(this, function (_a) {
      stage = new __1.Stage(reporter);
      context = new __1.Context(stage);
      context.set('id', 100);
      context.set('name', 'foo');
      id = context.get('id');
      name = context.get('name');
      t.is(id, 100);
      t.is(name, 'foo');
      return [2];
    });
  });
});
ava_1.default('methods `get()` inherits values from stage', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var stage, context, id, name;
    return __generator(this, function (_a) {
      stage = new __1.Stage(reporter);
      context = new __1.Context(stage);
      stage.set('id', 100);
      context.set('name', 'foo');
      id = context.get('id');
      name = context.get('name');
      t.is(id, 100);
      t.is(name, 'foo');
      return [2];
    });
  });
});
ava_1.default('method `pass()` passes the test', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var stage, context, results;
    return __generator(this, function (_a) {
      stage = new __1.Stage(reporter);
      context = new __1.Context(stage);
      results = [context.pass(), context.pass('foo')];
      t.deepEqual(results, [
        {
          type: 'AssertionNote',
          message: null,
          assertion: 'pass',
          success: true,
        },
        {
          type: 'AssertionNote',
          message: 'foo',
          assertion: 'pass',
          success: true,
        },
      ]);
      return [2];
    });
  });
});
ava_1.default('method `fail()` fails the test', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var stage, context, results;
    return __generator(this, function (_a) {
      stage = new __1.Stage(reporter);
      context = new __1.Context(stage);
      results = [context.fail(), context.fail('foo')];
      t.deepEqual(results, [
        {
          type: 'AssertionNote',
          message: null,
          assertion: 'fail',
          success: false,
        },
        {
          type: 'AssertionNote',
          message: 'foo',
          assertion: 'fail',
          success: false,
        },
      ]);
      return [2];
    });
  });
});
ava_1.default('method `truthy()` asserts that value is truthy', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var stage, context, results;
    return __generator(this, function (_a) {
      stage = new __1.Stage(reporter);
      context = new __1.Context(stage);
      results = [context.truthy(true), context.truthy(false, 'foo')];
      t.deepEqual(results, [
        {
          type: 'AssertionNote',
          message: null,
          assertion: 'truthy',
          success: true,
        },
        {
          type: 'AssertionNote',
          message: 'foo',
          assertion: 'truthy',
          success: false,
        },
      ]);
      return [2];
    });
  });
});
ava_1.default('method `falsy()` asserts that value is falsy', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var stage, context, results;
    return __generator(this, function (_a) {
      stage = new __1.Stage(reporter);
      context = new __1.Context(stage);
      results = [context.falsy('false'), context.falsy('true', 'foo')];
      t.deepEqual(results, [
        {
          type: 'AssertionNote',
          message: null,
          assertion: 'falsy',
          success: true,
        },
        {
          type: 'AssertionNote',
          message: 'foo',
          assertion: 'falsy',
          success: false,
        },
      ]);
      return [2];
    });
  });
});
ava_1.default('method `true()` asserts that value is true', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var stage, context, results;
    return __generator(this, function (_a) {
      stage = new __1.Stage(reporter);
      context = new __1.Context(stage);
      results = [context.true(true), context.true(false, 'foo')];
      t.deepEqual(results, [
        {
          type: 'AssertionNote',
          message: null,
          assertion: 'true',
          success: true,
        },
        {
          type: 'AssertionNote',
          message: 'foo',
          assertion: 'true',
          success: false,
        },
      ]);
      return [2];
    });
  });
});
ava_1.default('method `false()` asserts that value is false', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var stage, context, results;
    return __generator(this, function (_a) {
      stage = new __1.Stage(reporter);
      context = new __1.Context(stage);
      results = [context.false(false), context.false(true, 'foo')];
      t.deepEqual(results, [
        {
          type: 'AssertionNote',
          message: null,
          assertion: 'false',
          success: true,
        },
        {
          type: 'AssertionNote',
          message: 'foo',
          assertion: 'false',
          success: false,
        },
      ]);
      return [2];
    });
  });
});
ava_1.default('method `is()` asserts that two values are equal', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var stage, context, results;
    return __generator(this, function (_a) {
      stage = new __1.Stage(reporter);
      context = new __1.Context(stage);
      results = [context.is('foo', 'foo'), context.is(100, 200, 'foo')];
      t.deepEqual(results, [
        {
          type: 'AssertionNote',
          message: null,
          assertion: 'is',
          success: true,
        },
        {
          type: 'AssertionNote',
          message: 'foo',
          assertion: 'is',
          success: false,
        },
      ]);
      return [2];
    });
  });
});
ava_1.default(
  'method `not()` asserts that two values are not equal',
  function (t) {
    return __awaiter(void 0, void 0, void 0, function () {
      var stage, context, results;
      return __generator(this, function (_a) {
        stage = new __1.Stage(reporter);
        context = new __1.Context(stage);
        results = [context.not('foo', 'bar'), context.not(100, 100, 'foo')];
        t.deepEqual(results, [
          {
            type: 'AssertionNote',
            message: null,
            assertion: 'not',
            success: true,
          },
          {
            type: 'AssertionNote',
            message: 'foo',
            assertion: 'not',
            success: false,
          },
        ]);
        return [2];
      });
    });
  }
);
ava_1.default(
  'method `throws()` asserts that function throws an error',
  function (t) {
    return __awaiter(void 0, void 0, void 0, function () {
      var stage, context, results, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            stage = new __1.Stage(reporter);
            context = new __1.Context(stage);
            _a = [
              context.throws(function () {
                throw new Error();
              }),
            ];
            return [
              4,
              context.throws(function () {
                return Promise.reject();
              }, 'foo'),
            ];
          case 1:
            _a = _a.concat([
              _b.sent(),
              context.throws(function () {
                return;
              }, 'foo'),
            ]);
            return [
              4,
              context.throws(function () {
                return Promise.resolve();
              }),
            ];
          case 2:
            results = _a.concat([_b.sent()]);
            t.deepEqual(results, [
              {
                type: 'AssertionNote',
                message: null,
                assertion: 'throws',
                success: true,
              },
              {
                type: 'AssertionNote',
                message: 'foo',
                assertion: 'throws',
                success: true,
              },
              {
                type: 'AssertionNote',
                message: 'foo',
                assertion: 'throws',
                success: false,
              },
              {
                type: 'AssertionNote',
                message: null,
                assertion: 'throws',
                success: false,
              },
            ]);
            return [2];
        }
      });
    });
  }
);
ava_1.default(
  'method `notThrows()` asserts that function does not throw an error',
  function (t) {
    return __awaiter(void 0, void 0, void 0, function () {
      var stage, context, results, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            stage = new __1.Stage(reporter);
            context = new __1.Context(stage);
            _a = [
              context.notThrows(function () {
                return;
              }),
            ];
            return [
              4,
              context.notThrows(function () {
                return Promise.resolve();
              }, 'foo'),
            ];
          case 1:
            _a = _a.concat([
              _b.sent(),
              context.notThrows(function () {
                throw new Error();
              }, 'foo'),
            ]);
            return [
              4,
              context.notThrows(function () {
                return Promise.reject();
              }),
            ];
          case 2:
            results = _a.concat([_b.sent()]);
            t.deepEqual(results, [
              {
                type: 'AssertionNote',
                message: null,
                assertion: 'notThrows',
                success: true,
              },
              {
                type: 'AssertionNote',
                message: 'foo',
                assertion: 'notThrows',
                success: true,
              },
              {
                type: 'AssertionNote',
                message: 'foo',
                assertion: 'notThrows',
                success: false,
              },
              {
                type: 'AssertionNote',
                message: null,
                assertion: 'notThrows',
                success: false,
              },
            ]);
            return [2];
        }
      });
    });
  }
);
ava_1.default(
  'method `regex()` asserts that string maches regular expression',
  function (t) {
    return __awaiter(void 0, void 0, void 0, function () {
      var stage, context, results;
      return __generator(this, function (_a) {
        stage = new __1.Stage(reporter);
        context = new __1.Context(stage);
        results = [
          context.regex(/bar/, 'foo bar baz'),
          context.regex(/zed/, 'foo bar baz', 'zed'),
        ];
        t.deepEqual(results, [
          {
            type: 'AssertionNote',
            message: null,
            assertion: 'regex',
            success: true,
          },
          {
            type: 'AssertionNote',
            message: 'zed',
            assertion: 'regex',
            success: false,
          },
        ]);
        return [2];
      });
    });
  }
);
ava_1.default(
  'method `notRegex()` asserts that string does not maches regular expression',
  function (t) {
    return __awaiter(void 0, void 0, void 0, function () {
      var stage, context, results;
      return __generator(this, function (_a) {
        stage = new __1.Stage(reporter);
        context = new __1.Context(stage);
        results = [
          context.notRegex(/bar/, 'foo bar baz'),
          context.notRegex(/zed/, 'foo bar baz', 'zed'),
        ];
        t.deepEqual(results, [
          {
            type: 'AssertionNote',
            message: null,
            assertion: 'notRegex',
            success: false,
          },
          {
            type: 'AssertionNote',
            message: 'zed',
            assertion: 'notRegex',
            success: true,
          },
        ]);
        return [2];
      });
    });
  }
);
ava_1.default(
  'method `deepEqual()` asserts that two objects are equal',
  function (t) {
    return __awaiter(void 0, void 0, void 0, function () {
      var stage, context, results;
      return __generator(this, function (_a) {
        stage = new __1.Stage(reporter);
        context = new __1.Context(stage);
        results = [
          context.deepEqual({ a: 1 }, { a: 1 }),
          context.deepEqual({ a: 1 }, { a: 2 }, 'foo'),
        ];
        t.deepEqual(results, [
          {
            type: 'AssertionNote',
            message: null,
            assertion: 'deepEqual',
            success: true,
          },
          {
            type: 'AssertionNote',
            message: 'foo',
            assertion: 'deepEqual',
            success: false,
          },
        ]);
        return [2];
      });
    });
  }
);
ava_1.default(
  'method `notDeepEqual()` asserts that two objects are equal',
  function (t) {
    return __awaiter(void 0, void 0, void 0, function () {
      var stage, context, results;
      return __generator(this, function (_a) {
        stage = new __1.Stage(reporter);
        context = new __1.Context(stage);
        results = [
          context.notDeepEqual({ a: 1 }, { a: 2 }),
          context.notDeepEqual({ a: 1 }, { a: 1 }, 'foo'),
        ];
        t.deepEqual(results, [
          {
            type: 'AssertionNote',
            message: null,
            assertion: 'notDeepEqual',
            success: true,
          },
          {
            type: 'AssertionNote',
            message: 'foo',
            assertion: 'notDeepEqual',
            success: false,
          },
        ]);
        return [2];
      });
    });
  }
);
ava_1.default('method `sleep()` continues with timeout', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var times, stage, context;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          times = [0, 0, 0];
          stage = new __1.Stage(reporter);
          context = new __1.Context(stage);
          times[0] = Date.now();
          return [4, stage.sleep(2000)];
        case 1:
          _a.sent();
          times[1] = Date.now();
          return [4, context.sleep(2000)];
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
    var stage, context, res;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          stage = new __1.Stage(reporter);
          context = new __1.Context(stage);
          return [
            4,
            context.request({
              url: 'https://jsonplaceholder.typicode.com/todos/1',
            }),
          ];
        case 1:
          res = _a.sent();
          t.is(res.status, 200);
          t.is(res.data.userId, 1);
          return [2];
      }
    });
  });
});
ava_1.default('methods `exec()` returns terminal command result', function (t) {
  return __awaiter(void 0, void 0, void 0, function () {
    var stage, context, _a, stdout, stderr;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          stage = new __1.Stage(reporter);
          context = new __1.Context(stage);
          return [4, context.exec('echo "foo"')];
        case 1:
          (_a = _b.sent()), (stdout = _a.stdout), (stderr = _a.stderr);
          t.true(stdout.indexOf('foo') !== -1);
          t.true(stderr === '');
          return [2];
      }
    });
  });
});
//# sourceMappingURL=context.test.js.map
