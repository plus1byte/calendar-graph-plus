"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Months;
var _h = _interopRequireDefault(require("../h"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function Months(_ref) {
  var styles = _ref.styles,
    values = _ref.values,
    size = _ref.size,
    space = _ref.space,
    padX = _ref.padX,
    padY = _ref.padY,
    customMonths = _ref.customMonths;
  if (customMonths.length !== MONTH.length) {
    customMonths = [];
    throw new Error('`customMonths` should include 12 months.');
  }
  var s = size + space * 2;
  var s2 = s * 2;
  var months = [];
  values.forEach(function (group, i) {
    group.forEach(function (d, j) {
      if (j === 0 && d.day === 0) {
        var month = d.date.getMonth();
        var x = i * s + padX + space;
        var last = months.slice(-1).pop();
        if (!last || month !== last.month && x - last.x > s2) {
          months.push({
            month: month,
            x: x
          });
        }
      }
    });
  });
  return (0, _h["default"])("g", null, months.map(function (v, i) {
    return (0, _h["default"])("text", {
      key: i,
      x: v.x,
      y: padY / 2,
      style: styles.text
    }, customMonths.length > 0 ? customMonths[v.month] : MONTH[v.month]);
  }));
}