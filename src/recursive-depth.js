const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
  this.depth = 1;
}
calculateDepth(arr) {
  let res = this.depth
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      const elDepth = this.calculateDepth(el) + 1;
      res = Math.max(res, elDepth);
    }
  })
  return res;
 }
}

module.exports = {
  DepthCalculator
};
