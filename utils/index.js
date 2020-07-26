export function isValid(n) {
  if (!Number.isFinite(n)) {
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
}
