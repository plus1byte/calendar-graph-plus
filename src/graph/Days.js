import h from '../h';
import { formatDate } from '../utils';

export default function Days({
  values, size, space, padX, padY, colorFun, onClick, onHover, monthsPosition
}) {
  const s = size + space * 2;
  let y0 = padY + space;
  if (monthsPosition === 'bottom') {
    y0 = padY / 2;
  }

  return (
    <g>
      {values.map((v, i) => {
        const x = padX + i * s + space;
        return (
          <g>
            {v.map((d) => (
              <rect
                class="node"
                x={x}
                y={d.day * s + y0}
                rx="2"
                ry="2"
                width={size}
                height={size}
                fill={colorFun(d)}
                data-count={d.count}
                data-date={formatDate(d.date)}
                onClick={() => onClick(d)}
                onMouseOver={() => onHover(d)}
              />
            ))}
            {new Array(7 - v.length).fill('block').map((_, index) => (
              <rect class="node" x={x} y={(v.length + index) * s + y0} rx="2" ry="2" width={size} height={size} fill="#fff" stroke="#f4f5f5" stroke-width="1px" />
            ))}
          </g>
        )
      })}
    </g>
  )
}
