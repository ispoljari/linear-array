/*!
 * linear-array <https://github.com/ispoljari/linear-array>
 *
 * Copyright (c) 2020, Ivan Spoljaric.
 * Released under the MIT License.
 */

'use strict';

const isNumber = require('is-number');

module.exports = function linearArray(n, offset = false) {
  if (!isNumber(n)) {
    throw new TypeError('expected a number');
  }

  if (!Number.isInteger(n)) {
    throw new Error('expected an integer');
  }

  if (!Number.isSafeInteger(n)) {
    throw new Error('value above safe integer');
  }

  if (n <= 0) {
    throw new Error('expected a number greater than 0');
  }

  const offsetValue = offset | 0;
  const output = new Array(n);

  for (let index = 0; index < n; index++) {
    output[index] = index + offsetValue;
  }

  return output;
};
