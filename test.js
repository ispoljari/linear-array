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
    assert.throws(
      () => linearArray(-3),
      /expected a number greater or equal to 0/
    );
  });
});
