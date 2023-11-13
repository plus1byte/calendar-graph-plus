"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = render;
function render(vnode, ctx, e) {
  var tag = vnode.tag,
    props = vnode.props,
    children = vnode.children;
  if (tag === 'svg') {
    var width = props.width,
      height = props.height;
    ctx.width = width;
    ctx.height = height;
  }
  if (tag === 'rect') {
    var x = props.x,
      y = props.y,
      _width = props.width,
      _height = props.height,
      fill = props.fill,
      stroke = props.stroke,
      onClick = props.onClick;

    // From https://github.com/canvg/canvg
    ctx.beginPath();
    ctx.moveTo(x + 2, y);
    ctx.lineTo(x + _width - 2, y);
    ctx.arc(x + _width - 2, y + 2, 2, Math.PI * 1.5, Math.PI * 2);
    ctx.lineTo(x + _width, y + _height - 2);
    ctx.arc(x + _width - 2, y + _height - 2, 2, 0, Math.PI * 0.5);
    ctx.lineTo(x + 2, y + _height);
    ctx.arc(x + 2, y + _height - 2, 2, Math.PI * 0.5, Math.PI);
    ctx.lineTo(x, y + 2);
    ctx.arc(x + 2, y + 2, 2, Math.PI, Math.PI * 1.5);
    if (e && onClick && ctx.isPointInPath(e.x, e.y)) {
      onClick();
    }
    ctx.closePath();
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill();
    }
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
  if (tag === 'text') {
    var _x = props.x,
      _y = props.y,
      style = props.style;
    if (style) {
      ctx.fillStyle = style.fill;
      var BL = {
        central: 'middle',
        middle: 'middle',
        hanging: 'hanging',
        alphabetic: 'alphabetic',
        ideographic: 'ideographic'
      };
      var AL = {
        start: 'start',
        middle: 'center',
        end: 'end'
      };
      ctx.textBaseline = BL[style['dominant-baseline']] || 'alphabetic';
      ctx.textAlign = AL[style['text-anchor']] || 'start';
      ctx.font = "".concat(style['font-weight'] || '', " ").concat(style['font-size'], " ").concat(style['font-family']);
    }
    ctx.fillText(children.join(''), _x, _y);
  }
  children.forEach(function (v) {
    if (typeof v !== 'string') {
      render(v, ctx, e);
    }
  });
}