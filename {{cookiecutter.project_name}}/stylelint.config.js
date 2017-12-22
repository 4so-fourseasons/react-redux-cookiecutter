module.exports = {
  'extends': [
    './stylelint-4so-order.js'
  ],
  'ignoreFiles': [
    'src/sass/vendor/**/*.scss',
    'src/sass/_svg-sprite.scss',
    'src/sass/components/_svg-sprite.scss'
  ],
  'plugins': [
    'stylelint-scss'
  ],
  'rules': {
        // indentation after fourseasons guideline
    'indentation': [4],
        // empty lines after fourseasons guideline
    'declaration-empty-line-before': [
      'always',
      {
        'except': ['after-comment', 'after-declaration', 'first-nested'],
        'ignore': ['after-comment', 'after-declaration']
      }
    ],
        // block-no-empty is disabled because sass won't render those anyway
    'block-no-empty': null,
        // enforce double quotes
    'string-quotes': ['double'],
    'at-rule-no-unknown': null
  }
}
