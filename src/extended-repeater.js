const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr = []
  str = String(str)
    if (options.hasOwnProperty('addition')) {
      arr.push(String(options['addition']))
      if (options.hasOwnProperty('additionRepeatTimes')) {
          for (i=2; i<=options['additionRepeatTimes']; i++) {
            if (options.hasOwnProperty('additionSeparator')) {
               arr.push(options['additionSeparator'])
            } else {
              arr.push('|')
            }
            arr.push(String(options['addition']))
          }
      }
    }

  if (options.hasOwnProperty('repeatTimes')) {

    arr.unshift(str)
    let el = arr.join('')
    arr = []
    arr.push(el)
    for (i=2; i<=options['repeatTimes']; i++) {
      if (options.hasOwnProperty('separator')) {
      arr.push(options['separator'])
    } else {
      arr.push('+')
    }
      arr.push(el)
    }

  } else { arr.unshift(str)}
  return arr.join('')
}

module.exports = {
  repeater
};
