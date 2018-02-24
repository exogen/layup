module.exports = {
  semi: false,
  singleQuote: true,
  proseWrap: 'always',
  overrides: [
    {
      files: ['.*rc'],
      options: {
        parser: 'json'
      }
    }
  ]
}
