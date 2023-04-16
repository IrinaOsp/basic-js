const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const count = n.split('').reduce((acc, val) => val === "-" ? acc + 1 : acc, 0);
  if (count !== 5) {
    return false
  } else {
    let res = []
    n.split('-').forEach(el => {
      el.split('').forEach(el => {
        res.push(parseInt(el, 16))
      })
    })
    if (res.findIndex(el => isNaN(el)) === -1) {
      return true
    } else {
      return false
    }
  }
}

module.exports = {
  isMAC48Address
};
