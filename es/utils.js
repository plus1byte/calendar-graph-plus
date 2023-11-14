export var DAY = 24 * 3600 * 1000;
export function diffDays(a, b) {
  var date1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var date2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((date2 - date1) / DAY);
}
export function noop() {}
export function today() {
  var d = new Date();
  d.setHours(0, 0, 0, 0, 0);
  return d;
}
export function oneYearAgo() {
  var day = 24 * 60 * 60 * 1000;
  var d = today();
  d.setFullYear(d.getFullYear() - 1);
  return new Date((7 - d.getDay()) * day + d.getTime());
}
var colors = ['#f4f5f5', '#daf6ea', '#c7f0df', '#82edc0', '#0bd07d'];
export function rectColor(v) {
  if (!v.count) {
    return colors[0];
  }
  if (v.count > 45) {
    return colors[4];
  }
  if (v.count > 30) {
    return colors[3];
  }
  if (v.count > 15) {
    return colors[2];
  }
  return colors[1];
}
export function pad(n) {
  return n > 9 ? "".concat(n) : "0".concat(n);
}
export function formatDate(dt) {
  var y = dt.getFullYear();
  var m = dt.getMonth() + 1;
  var d = dt.getDate();
  return "".concat(y, "-").concat(pad(m), "-").concat(pad(d));
}