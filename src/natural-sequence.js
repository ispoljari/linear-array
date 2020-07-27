import * as util from '../utils';

/**
 * (arr: number[]) => boolean.
 *
 * examples:
 *
 * [0,1,2,3,4] -> true
 *
 * [2,3,4,5,6] -> false
 *
 * [0,1,2,3,5] -> false
 */

export function isSeqNaturalNumbers(arr) {
  util.areValidArrays(...[arr]);

  try {
    util.areValidNumbers(...arr);

    if (arr[0] !== 0) {
      return false;
    }

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== 1) {
        return false;
      }
    }

    return true;
  } catch (error) {
    return false;
  }
}

/**
 * (limiter: number, [includeLast = false]: boolean) => number[]
 *
 * Returns the following array:
 *
 * [0, 1, 2, 3, ... , includeLast ? limiter : (limiter - 1)]
 *
 * examples:
 *
 * (7) - > [0, 1, 2, 3, 4, 5, 6]
 *
 * (7, true) - > [0, 1, 2, 3, 4, 5, 6, 7]
 *
 *
 */

export function fillSeqNaturalNumbers(limiter, includeLast = false) {
  util.areValidNumbers(limiter);
  util.areValidBooleans(includeLast);

  const output = new Array(limiter);

  for (let index = 0; index < (includeLast ? limiter + 1 : limiter); index++) {
    output[index] = index;
  }

  return output;
}
