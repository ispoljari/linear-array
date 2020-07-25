/*!
 * linear-array <https://github.com/ispoljari/linear-array>
 *
 * Copyright (c) 2020, Ivan Spoljaric.
 * Released under the MIT License.
 */

import { isValid } from '../utils';

export function fixedStep(n, offset = 0) {
  isValid(n);
  !!offset && isValid(offset);

  const output = new Array(n);

  for (let index = 0; index < n; index++) {
    output[index] = index + offset;
  }

  return output;
}
