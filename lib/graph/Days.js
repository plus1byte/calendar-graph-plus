"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Days;
var _h = _interopRequireDefault(require("../h"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Days(_ref) {
  var values = _ref.values,
    size = _ref.size,
    space = _ref.space,
    padX = _ref.padX,
    padY = _ref.padY,
    colorFun = _ref.colorFun,
    _onClick = _ref.onClick,
    onHover = _ref.onHover,
    monthsPosition = _ref.monthsPosition;
  var s = size + space * 2;
  var y0 = padY + space;
  if (monthsPosition === 'bottom') {
    y0 = padY / 2;
  }
  return (0, _h["default"])("g", null, values.map(function (v, i) {
    var x = padX + i * s + space;
    return (0, _h["default"])("g", null, v.map(function (d) {
      return (0, _h["default"])("rect", {
        "class": "node",
        x: x,
        y: d.day * s + y0,
        rx: "2",
        ry: "2",
        width: size,
        height: size,
        fill: colorFun(d),
        "data-count": d.count,
        "data-date": (0, _utils.formatDate)(d.date),
        onClick: function onClick() {
          return _onClick(d);
        },
        onMouseOver: function onMouseOver() {
          return onHover(d);
        }
      });
    }), new Array(7 - v.length).fill('block').map(function (_, index) {
      return (0, _h["default"])("rect", {
        "class": "node",
        x: x,
        y: (v.length + index) * s + y0,
        rx: "2",
        ry: "2",
        width: size,
        height: size,
        fill: "#fff",
        stroke: "#f4f5f5",
        "stroke-width": "1px"
      });
    }));
  }));
}