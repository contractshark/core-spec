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
exports.Spec = void 0;
var stage_1 = require('./stage');
var context_1 = require('./context');
var reporter_1 = require('./reporter');
var Spec = (function () {
  function Spec(stage, parent) {
    this.beforeHandlers = [];
    this.beforeEachHandlers = [];
    this.afterHandlers = [];
    this.afterEachHandlers = [];
    this.performRecipes = [];
    this.onlyEnabled = false;
    this.parent = parent || null;
    this.stage = stage || this.createStage();
  }
  Object.defineProperty(Spec.prototype, 'stage', {
    get: function () {
      if (this.parent) {
        return this.parent.stage;
      } else {
        return this._stage;
      }
    },
    set: function (s) {
      if (this.parent) {
        this.parent.stage = s;
      } else {
        this._stage = s;
      }
    },
    enumerable: false,
    configurable: true,
  });
  Spec.prototype.hasOnly = function () {
    return this.onlyEnabled;
  };
  Spec.prototype.isRoot = function () {
    return !this.parent;
  };
  Spec.prototype.before = function (handler, append) {
    if (append === void 0) {
      append = true;
    }
    if (append) {
      this.beforeHandlers.push(handler);
    } else {
      this.beforeHandlers.unshift(handler);
    }
    return this;
  };
  Spec.prototype.beforeEach = function (handler, append) {
    if (append === void 0) {
      append = true;
    }
    if (append) {
      this.beforeEachHandlers.push(handler);
    } else {
      this.beforeEachHandlers.unshift(handler);
    }
    return this;
  };
  Spec.prototype.after = function (handler, append) {
    if (append === void 0) {
      append = true;
    }
    if (append) {
      this.afterHandlers.push(handler);
    } else {
      this.afterHandlers.unshift(handler);
    }
    return this;
  };
  Spec.prototype.afterEach = function (handler, append) {
    if (append === void 0) {
      append = true;
    }
    if (append) {
      this.afterEachHandlers.push(handler);
    } else {
      this.afterEachHandlers.unshift(handler);
    }
    return this;
  };
  Spec.prototype.spec = function (message, spec) {
    var known =
      this.performRecipes.filter(function (r) {
        return r.spec === spec;
      }).length > 0;
    if (!known) {
      spec.parent = this;
      spec.stage = this.stage;
      []
        .concat(this.beforeEachHandlers)
        .reverse()
        .forEach(function (h) {
          return spec.beforeEach(h, false);
        });
      this.afterEachHandlers.forEach(function (h) {
        return spec.afterEach(h);
      });
    }
    this.performRecipes.push({ message: message, spec: spec });
    return this;
  };
  Spec.prototype.test = function (message, handler) {
    if (!this.onlyEnabled) {
      this.performRecipes.push({ message: message, handler: handler });
    }
    return this;
  };
  Spec.prototype.skip = function (message, handler) {
    this.performRecipes.push({ message: message, handler: null });
    return this;
  };
  Spec.prototype.only = function (message, handler) {
    if (!this.onlyEnabled) {
      this.performRecipes = this.performRecipes.filter(function (r) {
        return !r.handler;
      });
      this.onlyEnabled = true;
    }
    this.performRecipes.push({ message: message, handler: handler });
    return this;
  };
  Spec.prototype.perform = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _i, _a, recipe;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4, this.performBegin()];
          case 1:
            _b.sent();
            return [4, this.performBefore()];
          case 2:
            _b.sent();
            (_i = 0), (_a = this.performRecipes);
            _b.label = 3;
          case 3:
            if (!(_i < _a.length)) return [3, 8];
            recipe = _a[_i];
            if (!recipe.spec) return [3, 5];
            return [4, this.performSpec(recipe)];
          case 4:
            _b.sent();
            return [3, 7];
          case 5:
            return [4, this.performTest(recipe)];
          case 6:
            _b.sent();
            _b.label = 7;
          case 7:
            _i++;
            return [3, 3];
          case 8:
            return [4, this.performAfter()];
          case 9:
            _b.sent();
            return [4, this.performEnd()];
          case 10:
            _b.sent();
            return [2];
        }
      });
    });
  };
  Spec.prototype.performBegin = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (this.isRoot()) {
          this.stage.reporter.begin();
        }
        return [2];
      });
    });
  };
  Spec.prototype.performEnd = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (this.isRoot()) {
          this.stage.reporter.end();
        }
        return [2];
      });
    });
  };
  Spec.prototype.performSpec = function (recipe) {
    return __awaiter(this, void 0, void 0, function () {
      var start;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            start = Date.now();
            this.stage.reporter.note({
              type: 'SpecStartNote',
              message: recipe.message,
            });
            return [4, recipe.spec.perform()];
          case 1:
            _a.sent();
            this.stage.reporter.note({
              type: 'SpecEndNote',
              duration: Date.now() - start,
            });
            return [2];
        }
      });
    });
  };
  Spec.prototype.performTest = function (recipe) {
    return __awaiter(this, void 0, void 0, function () {
      var start, context;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            start = Date.now();
            this.stage.reporter.note({
              type: 'TestStartNote',
              message: recipe.message,
              perform: !!recipe.handler,
            });
            if (!recipe.handler) return [3, 4];
            context = this.createContext();
            return [4, this.performBeforeEach(context)];
          case 1:
            _a.sent();
            return [4, recipe.handler(context, this.stage)];
          case 2:
            _a.sent();
            return [4, this.performAfterEach(context)];
          case 3:
            _a.sent();
            _a.label = 4;
          case 4:
            this.stage.reporter.note({
              type: 'TestEndNote',
              duration: Date.now() - start,
            });
            return [2];
        }
      });
    });
  };
  Spec.prototype.performBefore = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _i, _a, handler;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            (_i = 0), (_a = this.beforeHandlers);
            _b.label = 1;
          case 1:
            if (!(_i < _a.length)) return [3, 4];
            handler = _a[_i];
            return [4, handler(this.stage)];
          case 2:
            _b.sent();
            _b.label = 3;
          case 3:
            _i++;
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  };
  Spec.prototype.performAfter = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _i, _a, handler;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            (_i = 0), (_a = this.afterHandlers);
            _b.label = 1;
          case 1:
            if (!(_i < _a.length)) return [3, 4];
            handler = _a[_i];
            return [4, handler(this.stage)];
          case 2:
            _b.sent();
            _b.label = 3;
          case 3:
            _i++;
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  };
  Spec.prototype.performBeforeEach = function (context) {
    return __awaiter(this, void 0, void 0, function () {
      var _i, _a, handler;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            (_i = 0), (_a = this.beforeEachHandlers);
            _b.label = 1;
          case 1:
            if (!(_i < _a.length)) return [3, 4];
            handler = _a[_i];
            return [4, handler(context, this.stage)];
          case 2:
            _b.sent();
            _b.label = 3;
          case 3:
            _i++;
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  };
  Spec.prototype.performAfterEach = function (context) {
    return __awaiter(this, void 0, void 0, function () {
      var _i, _a, handler;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            (_i = 0), (_a = this.afterEachHandlers);
            _b.label = 1;
          case 1:
            if (!(_i < _a.length)) return [3, 4];
            handler = _a[_i];
            return [4, handler(context, this.stage)];
          case 2:
            _b.sent();
            _b.label = 3;
          case 3:
            _i++;
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  };
  Spec.prototype.createStage = function () {
    var reporter = new reporter_1.Reporter();
    return new stage_1.Stage(reporter);
  };
  Spec.prototype.createContext = function () {
    return new context_1.Context(this.stage);
  };
  return Spec;
})();
exports.Spec = Spec;
//# sourceMappingURL=spec.js.map
