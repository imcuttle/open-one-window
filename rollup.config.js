// import babel from 'rollup-plugin-babel';
import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        name: 'Open One Window',
        file: pkg.browser,
        format: 'umd'
      },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      // babel({
      //   babelrc: true,
      //   presets: [['@babel/preset-env', { targets: {ie: '11'}, modules: false }]],
      // })
    ]
  }
]
