# Calendar Graph Plus

> Calendar graph plus library fork from [calendar-graph](https://github.com/d-band/calendar-graph)

[![NPM version](https://img.shields.io/npm/v/calendar-graph-plus.svg)](https://www.npmjs.com/package/calendar-graph-plus)
[![NPM downloads](https://img.shields.io/npm/dm/calendar-graph-plus.svg)](https://www.npmjs.com/package/calendar-graph-plus)
[![Greenkeeper badge](https://badges.greenkeeper.io/d-band/calendar-graph-plus.svg)](https://greenkeeper.io/)

## Plus

- Integrated powerful tooltip [Tippy.js](https://tippyjs.bootcss.com/all-props/)
- `monthsPosition` [String] now supports the option to position the months widget at the bottom of graph
- `styleOptions.background` [String] now allows for a custom background to be applied
- `showMonths` [Boolean] now allows the months widget to be hidden
- `customMonths` [Array<String>] now allows for custom months content to be displayed

## Install

```bash
$ yarn add calendar-graph-plus
```

## Usage

[View demo online](https://plus1byte.github.io/calendar-graph-plus/)

```javascript
import { SVGGraph, CanvasGraph, StrGraph, Tooltip } from 'calendar-graph-plus';

const data = [
  { date: '2016-01-01', count: 1 },
  { date: '2016-01-03', count: 4 },
  { date: '2016-01-06', count: 2 },
  // ...and so on
];

new SVGGraph('#svg-root', data, {
  showMonths: true,
  monthsPosition: 'bottom'
  customMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  startDate: new Date('2016-01-01'),
  endDate: new Date('2016-04-01'),
  styleOptions: {
    background: 'transparent'
  }
  colorFun: (v) => {
    return '#d6e685';
  }
});

new CanvasGraph('#canvas-root', data, {
  showMonths: true,
  monthsPosition: 'bottom'
  customMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  startDate: new Date('2016-01-01'),
  endDate: new Date('2016-04-01'),
  styleOptions: {
    background: 'transparent'
  }
  colorFun: (v) => {
    return '#d6e685';
  }
});

const strGraph = new StrGraph(data, {
  startDate: new Date('2016-01-01'),
  endDate: new Date('2016-04-01'),
  colorFun: (v) => {
    return '#d6e685';
  }
});

this.body = strGraph.render();

// Tippy.js
Tooltip('.node', {
  ignoreAttributes: true,
  allowHTML: true,
  content(ref) {
    const count = ref.getAttribute('data-count')
    const date = ref.getAttribute('data-date')
    return `${date}<br/>${count}`
  }
})

```

![image](./demo/static/image.png)

## Options

```javascript
{
  showMonths: true,
  monthsPosition: 'bottom',
  customMonths: [],
  onClick: v => {},
  colorFun: v => {},
  startDate: oneYearAgo,
  endDate: today,
  size: 12,
  space: 1,
  padX: 20,
  padY: 20,
  styleOptions: {
    background: 'transparent'
    textColor: '#959494',
    fontSize: '12px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  }
}
```

## Report a issue

- [All issues](https://github.com/plus1byte/calendar-graph-plus/issues)
- [New issue](https://github.com/plus1byte/calendar-graph-plus/issues/new)

## License

Graph is available under the terms of the MIT License.
