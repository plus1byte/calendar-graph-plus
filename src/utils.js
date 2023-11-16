export const DAY = 24 * 3600 * 1000
export const WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const colors = ['#f4f5f5', '#daf6ea', '#c7f0df', '#82edc0', '#0bd07d']

export function diffDays(a, b) {
  const date1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
  const date2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())
  return Math.floor((date2 - date1) / DAY)
}

export function noop() { }

export function today() {
  const d = new Date()
  d.setHours(0, 0, 0, 0, 0)
  return d
}

export function oneYearAgo() {
  const d = today()
  d.setFullYear(d.getFullYear() - 1)
  return new Date((7 - d.getDay()) * DAY + d.getTime())
}

export function rectColor(v) {
  if (!v.count) {
    return colors[0]
  }
  if (v.count > 45) {
    return colors[4]
  }
  if (v.count > 30) {
    return colors[3]
  }
  if (v.count > 15) {
    return colors[2]
  }
  return colors[1]
}

export function pad(n) {
  return n > 9 ? `${n}` : `0${n}`
}

export function formatDate(dt) {
  const y = dt.getFullYear()
  const m = dt.getMonth() + 1
  const d = dt.getDate()
  return `${y}-${pad(m)}-${pad(d)}`
}
