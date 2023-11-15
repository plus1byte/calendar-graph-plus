export default function render(vnode, ctx, e) {
  const { tag, props, children } = vnode
  if (tag === 'svg') {
    const { width, height } = props
    ctx.width = width
    ctx.height = height
  }
  if (tag === 'rect') {
    const { x, y, width, height, fill, stroke, onClick } = props

    // From https://github.com/canvg/canvg
    ctx.beginPath()
    ctx.moveTo(x + 2, y)
    ctx.lineTo(x + width - 2, y)
    ctx.arc(x + width - 2, y + 2, 2, Math.PI * 1.5, Math.PI * 2)
    ctx.lineTo(x + width, y + height - 2)
    ctx.arc(x + width - 2, y + height - 2, 2, 0, Math.PI * 0.5)
    ctx.lineTo(x + 2, y + height)
    ctx.arc(x + 2, y + height - 2, 2, Math.PI * 0.5, Math.PI)
    ctx.lineTo(x, y + 2)
    ctx.arc(x + 2, y + 2, 2, Math.PI, Math.PI * 1.5)

    if (e && onClick && ctx.isPointInPath(e.x, e.y)) {
      onClick()
    }

    ctx.closePath()

    if (fill) {
      ctx.fillStyle = fill
      ctx.fill()
    }

    if (stroke) {
      ctx.strokeStyle = stroke
      ctx.lineWidth = 1
      ctx.stroke()
    }
  }
  if (tag === 'text') {
    const { x, y, style } = props
    if (style) {
      ctx.fillStyle = style.fill
      const BL = {
        central: 'middle',
        middle: 'middle',
        hanging: 'hanging',
        alphabetic: 'alphabetic',
        ideographic: 'ideographic'
      }
      const AL = {
        start: 'start',
        middle: 'center',
        end: 'end'
      }
      ctx.textBaseline = BL[style['dominant-baseline']] || 'alphabetic'
      ctx.textAlign = AL[style['text-anchor']] || 'start'
      ctx.font = `${style['font-weight'] || ''} ${style['font-size']} ${style['font-family']}`
    }
    ctx.fillText(children.join(''), x, y)
  }

  children.forEach(v => {
    if (typeof v !== 'string') {
      render(v, ctx, e)
    }
  })
}
