const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let number = 0
    matrix.forEach((item) => {
      number = number + item.reduce((acc, el) => {
         if (el === "^^") {
           return acc+1
         }
        return acc
      }, 0)

      })
  return number
}

module.exports = {
  countCats
};
