import h from '../h';
export default function DayTitles(_ref) {
  var styles = _ref.styles,
    size = _ref.size,
    space = _ref.space,
    padX = _ref.padX,
    padY = _ref.padY,
    monthsPosition = _ref.monthsPosition;
  var s = size + space * 2;
  var gap = s / 2;
  if (monthsPosition === 'bottom') {
    gap -= space + padY / 2;
  }
  var days = [{
    v: 'M',
    y: padY + s * 1 + gap
  }, {
    v: 'W',
    y: padY + s * 3 + gap
  }, {
    v: 'F',
    y: padY + s * 5 + gap
  }];
  return h("g", null, days.map(function (d, i) {
    return h("text", {
      key: i,
      x: padX / 2,
      y: d.y,
      style: styles.text2
    }, d.v);
  }));
}