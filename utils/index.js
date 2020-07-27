export function areValidNumbers(...values) {
  for (let i = 0; i < values.length; i++) {
    if (!Number.isFinite(values[i])) {
      throw new TypeError('expected a number');
    }

    if (!Number.isInteger(values[i])) {
      throw new Error('expected an integer');
    }

    if (!Number.isSafeInteger(values[i])) {
      throw new Error('value above safe integer');
    }

    if (values[i] < 0) {
      throw new Error('expected a number greater or equal to 0');
    }
  }
}

export function areValidBooleans(...values) {
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'boolean') {
      throw new Error('expected a boolean');
    }
  }
}

export function areValidArrays(...values) {
  for (let i = 0; i < values.length; i++) {
    if (!Array.isArray(values[i])) {
      throw new Error('expected an array');
    }
  }
}
