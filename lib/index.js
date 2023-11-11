"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CanvasGraph", {
  enumerable: true,
  get: function get() {
    return _CanvasGraph["default"];
  }
});
Object.defineProperty(exports, "SVGGraph", {
  enumerable: true,
  get: function get() {
    return _SVGGraph["default"];
  }
});
Object.defineProperty(exports, "StrGraph", {
  enumerable: true,
  get: function get() {
    return _StrGraph["default"];
  }
});
exports["default"] = void 0;
var _SVGGraph = _interopRequireDefault(require("./SVGGraph"));
var _CanvasGraph = _interopRequireDefault(require("./CanvasGraph"));
var _StrGraph = _interopRequireDefault(require("./StrGraph"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _CanvasGraph["default"];