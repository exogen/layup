module.exports = {
  presets: [
    [
      'env',
      {
        targets: {
          node: '6'
        },
        modules: process.env.BABEL_ENV === 'esm' ? false : 'commonjs',
        // Support UglifyJS 2.
        forceAllTransforms: true
      }
    ],
    'react'
  ],
  plugins: [
    'transform-object-rest-spread',
    ['styled-components', { ssr: true }]
  ]
}
