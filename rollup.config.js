import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { uglify } from 'rollup-plugin-uglify'

const pkg = require('./package.json')

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'calendar-graph-plus',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [
    resolve({ extensions: ['.js'] }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'],
      exclude: 'node_modules/',
    }),
    uglify(),
    postcss({
      plugins: [],
      extract: 'style/main.css',
      minimize: true,
      sourceMap: true,
    }),
  ],
}
