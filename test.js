'use strict';

require('mocha');

const assert = require('assert');
const linearArray = require('./');

describe('linearArray', function () {
  it('should throw an error if an invalid value is passed', function () {
    assert.throws(() => linearArray(), /expected a number/);
    assert.throws(() => linearArray('random string'), /expected a number/);
    assert.throws(() => linearArray(true), /expected a number/);
    assert.throws(
      () => linearArray(999999999999999999999),
      /value above safe integer/
    );
    assert.throws(() => linearArray(0), /expected a number greater than 0/);
    assert.throws(() => linearArray(-3), /expected a number greater than 0/);
  });

  it('should return correct results given a valid n without offset', function () {
    assert.deepStrictEqual(linearArray(1), [0]);
    assert.deepStrictEqual(linearArray(5), [0, 1, 2, 3, 4]);
    assert.deepStrictEqual(linearArray(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should return correct results given a valid n with offset', function () {
    assert.deepStrictEqual(linearArray(1, true), [1]);
    assert.deepStrictEqual(linearArray(5, true), [1, 2, 3, 4, 5]);
    assert.deepStrictEqual(linearArray(10, true), [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ]);
  });
});
