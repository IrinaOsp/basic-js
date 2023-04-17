const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let res = []
    for (let i=0; i<arr.length; i++) {
      if (arr[i] === -1) {
        res.push(arr[i])
        arr[i] = Infinity
      } else {
        console.log('else')
        let min = arr.reduce((x, y) => Math.min(x, y));
        let newArr = [...arr]
        while (min === -1) {
          let ind = newArr.findIndex(el => el === min);
          newArr[ind] = Infinity
          min = newArr.reduce((x, y) => Math.min(x, y));  
        }
        res.push(min)
        arr[newArr.findIndex(el => el === min)] = Infinity
    }
  }
    return res
  }

module.exports = {
  sortByHeight
};
