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
  calculateDepth(arr) {
    let s = 1;
    let smax = 1;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            s += this.calculateDepth(arr[i]);
        }
        smax = Math.max(s, smax);
        s = 1;
    }
    return smax;
  }
}

module.exports = {
  DepthCalculator
};
