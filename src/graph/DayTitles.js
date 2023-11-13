import h from '../h';

export default function DayTitles({
  styles, size, space, padX, padY, monthsPosition
}) {
  const s = size + space * 2;
  let gap = s / 2;

  if (monthsPosition === 'bottom') {
    gap -= space + padY / 2
  }
  const days = [{
    v: 'M',
    y: padY + (s * 1) + gap,
  }, {
    v: 'W',
    y: padY + (s * 3) + gap,
  }, {
    v: 'F',
    y: padY + (s * 5) + gap,
  }];
  return (
    <g>
      {days.map((d, i) => <text key={i} x={padX / 2} y={d.y} style={styles.text2}>{d.v}</text>)}
    </g>
  );
}
