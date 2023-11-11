"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = render;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function attrEscape(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;');
}
function escape(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
}
function render(vnode, ctx) {
  var tag = vnode.tag,
    props = vnode.props,
    children = vnode.children;
  var tokens = [];
  tokens.push("<".concat(tag));
  Object.keys(props || {}).forEach(function (k) {
    var v = props[k];
    if (k === 'onClick') return;
    if (k === 'style' && _typeof(v) === 'object') {
      v = Object.keys(v).map(function (i) {
        return "".concat(i, ":").concat(v[i], ";");
      }).join('');
    }
    tokens.push(" ".concat(k, "=\"").concat(attrEscape(v), "\""));
  });
  if (!children || !children.length) {
    tokens.push(' />');
    return tokens.join('');
  }
  tokens.push('>');
  children.forEach(function (v) {
    if (typeof v === 'string') {
      tokens.push(escape(v));
    } else {
      tokens.push(render(v, ctx));
    }
  });
  tokens.push("</".concat(tag, ">"));
  return tokens.join('');
}