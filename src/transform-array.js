import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
    if (!Array.isArray(arr))
        throw Error(`'arr' parameter must be an instance of the Array!`);
    let res = [];
    let strings = [
      "--double-next",
      "--double-prev",
      "--discard-prev",
      "--discard-next",
    ];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--double-next' && i != arr.length - 1)
            res.push(arr[i+1])
        else if (arr[i] == "--double-prev" && i >= 1) 
            res.push(arr[i-1]);
        else if (arr[i] == '--discard-prev')
            res.pop();
        else if (arr[i] == '--discard-next')
            i = i+2;
        else if (!strings.includes(arr[i]))
            res.push(arr[i]);
    }
    return res;
}
