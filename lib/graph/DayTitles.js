"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DayTitles;
var _h = _interopRequireDefault(require("../h"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function DayTitles(_ref) {
  var styles = _ref.styles,
    size = _ref.size,
    space = _ref.space,
    padX = _ref.padX,
    padY = _ref.padY;
  var s = size + space * 2;
  var half = s / 2;
  var days = [{
    v: 'M',
    y: padY + s * 1 + half
  }, {
    v: 'W',
    y: padY + s * 3 + half
  }, {
    v: 'F',
    y: padY + s * 5 + half
  }];
  return (0, _h["default"])("g", null, days.map(function (d, i) {
    return (0, _h["default"])("text", {
      key: i,
      x: padX / 2,
      y: d.y,
      style: styles.text2
    }, d.v);
  }));
}