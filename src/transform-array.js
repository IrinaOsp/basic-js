const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  } else {
    let resArr = [...arr]
  arr.forEach((item, index) => {
        if (item === '--discard-next') {
          if (index>0 && index<arr.length-1) {
            resArr.splice(index, 2)
          } else if (index === 0) {
            resArr.shift(item)
          } else if (index === arr.length-1) {
            resArr.pop(item)
          }
        } else if (item === '--discard-prev') {
            if (index>0 && index<arr.length-1) {

              if (arr[index-2] !== '--discard-next') {
                resArr.splice(index-1, 2)
              } else {
                   resArr.splice(index-2, 1)
              }

            } else if (index === 0) {
              resArr.shift(item)
            } else if (index === arr.length-1) {
              resArr.pop(item)
            }
        } else if (item === '--double-next') {
            if (index>0 && index<arr.length-1) {
              resArr.splice(index, 1, resArr[index+1])
            } else if (index === 0) {
              resArr.shift(item)
            } else if (index === arr.length-1) {
              resArr.pop(item)
            }
        } else if (item === '--double-prev') {
            if (index>0 && index<arr.length-1) {
              if (arr[index-2] !== '--discard-next') {
                resArr.splice(index, 1, resArr[index-1])
              } else {
                   resArr.splice(index-2, 1)
              }
            } else if (index === 0) {
              resArr.shift(item)
            } else if (index === arr.length-1) {
              resArr.pop(item)
            }
        }
      })
      return resArr
  }
}

module.exports = {
  transform
};
