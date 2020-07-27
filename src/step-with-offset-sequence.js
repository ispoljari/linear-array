import * as util from './utils';

/**
 * (arr: number[], [step = 1]: number, [offset = 0]: number) => boolean.
 *
 * examples:
 *
 * ([0,1,2,3,4]) -> true
 *
 * ([0,1,2,3,4], 2) -> false
 *
 * ([0,1,2,3,4], 1, 1) -> false
 *
 * ([1,2,3,4,5], 1, 1) -> true
 *
 * ([6,9,12,15,18], 3, 6) -> true
 *
 * ([5,9,12,15,19], 3, 6) -> false
 */

export function isStepSequenceWithOffset(arr, step = 1, offset = 0) {
  util.areValidArrays(...[arr]);
  util.areValidNumbers(step, offset);

  try {
    util.areValidNumbers(...[...arr]);

    if (arr[0] !== offset) {
      return false;
    }

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== step) {
        return false;
      }
    }

    return true;
  } catch (error) {
    return false;
  }
}

/**
 * (limiter: number, ([step = 1]: number, [offset = 0]: number) => number[].
 *
 * Returns the following array:
 *
 * [0+offset, step + offset, 2*step + offset, ..., (limiter - 1)*step + offset]
 *
 * examples:
 *
 * (5) - > [0, 1, 2, 3, 4]
 *
 * (5,1,3) -> [3, 4, 5, 6, 7]
 *
 * (5,3) -> [0, 3, 6, 9, 12]
 *
 * (5,2,2) -> [2, 4, 6, 8, 10]
 */

export function fillStepSequenceWithOffset(limiter, step = 1, offset = 0) {
  util.areValidNumbers(limiter, step, offset);

  const output = new Array(limiter);

  for (let index = 0; index < limiter; index++) {
    output[index] = index * step + offset;
  }

  return output;
}
