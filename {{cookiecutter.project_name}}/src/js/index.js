// @flow

// $FlowFixMe
import 'normalize.css'
// $FlowFixMe
import '../sass/main.scss'

const double = (n: number): number => {
  return n * 2
}

export function testMe (name: string) {
  console.log(double(12))
  return `Hi ${name}`
}
