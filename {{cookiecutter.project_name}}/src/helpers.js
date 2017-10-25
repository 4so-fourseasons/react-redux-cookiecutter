// @flow

/**
 * Given a string containing markup renders the markup into a
 * React component. This needs to be called inside the
 * 'dangerouslySetInnerHTML' prop to work.
 * @param {string} markup - String containing HTML
 * @return {object} Object which is transformed to innerHTML by
 * dangerouslySetInnerHTML
  */
const generateMarkup = (markup: string): Object => {
  return {
    __html: markup
  }
}

/**
 * Given an array of objects sorts the array by the given property of
 * each object in either ascending or descending order.
 * @param {string} property - Property to sort by
 * @param {number} order - Should be either 1 or -1
 * @param {array} list - list of objects to sort
 * @return {array} Sorted list
  */
const sortByProperty = (
  property: string,
  order: number,
  list: Array<Object>
): Array<Object> => list.sort((a, b) => {
  if (a[property] < b[property]) return -order
  if (a[property] > b[property]) return order
  return 0
})

/**
 * Pipes the output of functions as arguments into the next function
 * (from left to right).
 * @example
 * const splitString = str => str.split('')
 * const getLength = arr => arr.length
 * pipe(splitString, getLength)('Hello world') // => 11
 *
 * @param {function} f1 - first function to call
 * @param {array} ...fns - Additional functions to pipe through
 * @return {function} Composed function
  */
const pipe = (f1: Function, ...fns: Array<Function>): Function =>
  (...args: Array<mixed>): Function => {
    return fns.reduce((res, fn) => fn(res), f1.apply(null, args))
  }

/**
  * Creates an array containing a range of numbers.
  * @param {number} start - First number of the range, array index 0
  * @param {number} end - Endindex, not included inside the resulting array
  * @return {array} array of numbers
  * @example
  * range(2, 6) // => [2, 3, 4, 5]
  */
const range = (start: number, end: number): Array<number> => {
  return Array.from({length: (end - start)}, (v, k) => k + start)
}

/**
  * Returns the first element of an array
  * @param {array} arr - Array
  * @return {element} First element of the array
  */
const first = <T>(arr: Array<T>): T => arr[0]

/**
  * Returns the last element of an array
  * @param {array} arr - Array
  * @return {element} Last element of the array
  */
const last = <T>(arr: Array<T>): T => first(arr.slice(-1))

/**
  * Toggles the class on a DOM node by a given condition
  * @param {Node} node - Domnode to add/remove class to/from
  * @param {string} className - Class to add/remove
  * @param {bool} condition - Expression that resolves to true/false
  * @return {undefined}
  */
const toggleClass = (
  node: HTMLElement,
  className: string,
  condition: boolean
): void => {
  condition
    ? node.classList.add(className)
    : node.classList.remove(className)
}

/**
 * Reduces multiple function calls, which are fired in quick succession to
 * a single function call (i.e. to reduce function calls on scroll events.
 * @param {function} fn - Function to debounce
 * @param {number} time - Time to wait until function is called - will be reset
 * on every invocation of the debounced function in the given timeframe.
 * @return {function} Debounced function
  */
const debounce = (fn: Function, time: number): Function => {
  let timeout

  // Has to be a 'real' function, not an arrow function, to preserve
  // context of 'this'
  return function (...args) {
    const callback = () => fn.apply(this, args)

    clearTimeout(timeout)
    timeout = setTimeout(callback, time)
  }
}

/**
 * Makes sure that a given function is only called once in a specified
 * timeframe.
 * @param {function} fn - Function to call after timeout
 * @param {number} time - Timeout in ms
 * @param {object} context - Useful for throttling object methods
 * @return {function} Throttled function
  */
const throttle = (fn: Function, time: number, context: Object = this): Function => {
  let timeout
  let callbackArgs

  const callback = () => {
    fn.apply(context, callbackArgs)
    clearTimeout(timeout)
    timeout = undefined
  }

  // Has to be a 'real' function, not an arrow function, to preserve
  // context of 'this'
  return function (...args) {
    if (timeout) return

    callbackArgs = args
    timeout = setTimeout(callback, time)
  }
}

/**
  * Function partially apply arguments to a function. (Left to right)
  * @param {function} fn - Function to apply to.
  * @param {array} ...args - Arguments to apply
  * @return {function} Partially applied function
  */
const partial = (fn: Function, ...args: Array<mixed>): Function => {
  return (...otherArgs) => {
    return fn(...args, ...otherArgs)
  }
}

export {
  debounce,
  first,
  last,
  partial,
  pipe,
  range,
  throttle,
  toggleClass,
  generateMarkup,
  sortByProperty
}
