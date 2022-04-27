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
  let s = String(n).split("").map((e) => +e);
  s.splice(s.indexOf(Math.min(...s)), 1)
  return Number(s.join(''));
}

module.exports = {
  deleteDigit
};
