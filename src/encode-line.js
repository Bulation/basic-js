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
    if (!str)
        return '';
    let s = '';
    let i = 1;
    let count = 1;
    while (i < str.length) {
        if (str[i] == str[i-1])
            count++;
        else {
            if (count != 1)
                s += count + str[i-1];
            else
                s += str[i-1]
            count = 1;
        }
        i++;
    }
    if (count != 1) 
        s += count + str[i - 1];
    else 
        s += str[i - 1];
    return s;
}

module.exports = {
  encodeLine
};
