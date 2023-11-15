import Tooltip from 'tippy.js';
import SVGGraph from './SVGGraph';
import CanvasGraph from './CanvasGraph';
import StrGraph from './StrGraph';
import {
  today, oneYearAgo, diffDays, formatDate,
} from './utils';
import './style/main.css';

export default SVGGraph;

export { SVGGraph, CanvasGraph, StrGraph };

export {
  today, oneYearAgo, diffDays, formatDate,
};

export { Tooltip };
