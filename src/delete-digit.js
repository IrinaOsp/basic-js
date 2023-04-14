const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('')
  let res = []
  arr.forEach((el, i) => {
    arr[i] = ''
    res.push(arr.join(''))
    arr = n.toString().split('')
  })
  return Math.max(...res);
}

module.exports = {
  deleteDigit
};
