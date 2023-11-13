import h from '../h';

const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function Months({
  styles, values, size, space, padX, padY, customMonths, monthsPosition
}) {
  if (customMonths.length > 0 && customMonths.length < MONTH.length) {
    customMonths = [];
    console.info('`customMonths` should include 12 months.');
  }

  const s = size + space * 2;
  const s2 = s * 2;
  const months = [];
  let y = padY / 2;
  values.forEach((group, i) => {
    group.forEach((d, j) => {
      if (j === 0 && d.day === 0) {
        const month = d.date.getMonth();
        const x = i * s + padX + space;
        const last = months.slice(-1).pop();
        if (!last || (month !== last.month && (x - last.x) > s2)) {
          months.push({ month, x });
        }
      }
    });
  });
  
  if (monthsPosition === 'bottom') {
    y = 7 * s + padY - space;
  }
  return (
    <g>
      {months.map((v, i) => <text key={i} x={v.x} y={y} style={styles.text}>{customMonths.length > 0 ? customMonths[v.month] : MONTH[v.month]}</text>)}
    </g>
  );
}
