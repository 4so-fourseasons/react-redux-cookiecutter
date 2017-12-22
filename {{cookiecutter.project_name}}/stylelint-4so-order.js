function trbl (prefix) {
  const rules = []

  if (prefix) {
    rules.push(prefix)
    prefix = prefix + '-'
  } else {
    prefix = ''
  }

  return rules.concat([
    prefix + 'top',
    prefix + 'right',
    prefix + 'bottom',
    prefix + 'left'
  ])
}

function minMax (suffix) {
  return [suffix, 'min-' + suffix, 'max-' + suffix]
}

const content = [].concat([
  'content'
])

const layout = []
  .concat([
    'display',
    'visibility',
    'float',
    'position',
    'z-index'
  ])
  .concat(trbl())

const flex = []
  .concat([
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'align-content',
    'align-items',
    'align-self',
    'justify-content',
    'order'
  ])

const boxModel = []
  .concat([
    'box-sizing'
  ])
  .concat(trbl('margin'))
  .concat(trbl('border'))
  .concat(trbl('padding'))
  .concat(minMax('width'))
  .concat(minMax('height'))

const visual = []
  .concat([
    'background',
    'background-position',
    'background-size',
    'background-repeat',
    'background-origin',
    'background-clip',
    'background-attachment',
    'background-color',
    'color',
    'box-shadow',
    'opacity'
  ])

const typography = []
  .concat([
    'font',
    'font-style',
    'font-weight',
    'font-stretch',
    'font-size',
    'line-height',
    'font-family',
    'text-align'
  ])

module.exports = {
  'plugins': 'stylelint-order',
  'extends': 'stylelint-config-standard',
  'rules': {
    'order/properties-order': [
      content
        .concat(layout)
        .concat(flex)
        .concat(boxModel)
        .concat(visual)
        .concat(typography),
      { 'unspecified': 'bottomAlphabetical' }
    ]
  }
}
