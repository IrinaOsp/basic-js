const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = []
  let arr = str.split('')

  arr.forEach((el, ind, array) => {
    if (array[ind+1] !== el) { //next !==el
      // if (array[ind-1] === el) {
      //   res[res.length-1] = num
      // }
      res.push(el)
    } else { //next === el

      if (res.length!==0 && (typeof (res[res.length-1]) === 'number')) {
        res[res.length-1]++
        //res[res.length-1] = num
      } else {
        res.push(2)
      }
    }
  })
  return res.join('')
}

module.exports = {
  encodeLine
};
