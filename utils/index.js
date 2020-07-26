export function isValidType(...num) {
  for (let i = 0; i < num; i++) {
    if (!Number.isFinite(num[i])) {
      throw new TypeError('expected a number');
    }

    if (!Number.isInteger(num[i])) {
      throw new Error('expected an integer');
    }

    if (!Number.isSafeInteger(num[i])) {
      throw new Error('value above safe integer');
    }
  }
}
