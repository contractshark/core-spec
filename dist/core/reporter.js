'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Reporter = void 0;
var Reporter = (function () {
  function Reporter(recipe) {
    this.level = 0;
    this.recipe = recipe || {};
  }
  Reporter.prototype.begin = function () {
    this.onBegin();
  };
  Reporter.prototype.end = function () {
    this.onEnd();
  };
  Reporter.prototype.note = function (note) {
    var level = this.level;
    if (note.type === 'SpecStartNote') {
      this.level++;
      this.onSpecStartNote(note);
    } else if (note.type === 'SpecEndNote') {
      this.level--;
      this.onSpecEndNote(note);
    } else if (note.type === 'TestStartNote') {
      this.level++;
      this.onTestStartNote(note);
    } else if (note.type === 'TestEndNote') {
      this.level--;
      this.onTestEndNote(note);
    } else if (note.type === 'AssertionNote') {
      this.onAssertionNote(note);
    }
    var change = level - this.level;
    this.onNote(note, change);
  };
  Reporter.prototype.reset = function () {
    this.level = 0;
  };
  Reporter.prototype.onBegin = function () {
    if (typeof this.recipe.onBegin === 'function') {
      this.recipe.onBegin();
    }
  };
  Reporter.prototype.onEnd = function () {
    if (typeof this.recipe.onEnd === 'function') {
      this.recipe.onEnd();
    }
  };
  Reporter.prototype.onSpecStartNote = function (note) {
    if (typeof this.recipe.onSpecStartNote === 'function') {
      this.recipe.onSpecStartNote(note);
    }
  };
  Reporter.prototype.onSpecEndNote = function (note) {
    if (typeof this.recipe.onSpecEndNote === 'function') {
      this.recipe.onSpecEndNote(note);
    }
  };
  Reporter.prototype.onTestStartNote = function (note) {
    if (typeof this.recipe.onTestStartNote === 'function') {
      this.recipe.onTestStartNote(note);
    }
  };
  Reporter.prototype.onTestEndNote = function (note) {
    if (typeof this.recipe.onTestEndNote === 'function') {
      this.recipe.onTestEndNote(note);
    }
  };
  Reporter.prototype.onAssertionNote = function (note) {
    if (typeof this.recipe.onAssertionNote === 'function') {
      this.recipe.onAssertionNote(note);
    }
  };
  Reporter.prototype.onNote = function (note, change) {
    if (typeof this.recipe.onNote === 'function') {
      this.recipe.onNote(note, change);
    }
  };
  return Reporter;
})();
exports.Reporter = Reporter;
//# sourceMappingURL=reporter.js.map
