const assert = require('assert');

const lineArr = require('../dist/linear-array');
const {
  notNumberErrorMsgPairs,
  notIntegerErrorMsgPairs,
  notSafeIntegerErrorMsgPairs,
  notNaturalNumberErrorMsgPairs,
  notBooleanErrorMsgPairs,
} = require('./helpers');

const throwsFirstArgumentAsserter = (assertList, fn) => {
  for (let i = 0; i < assertList.length; i++) {
    assert.throws(() => fn(assertList[i].input), assertList[i].expected);
  }
};

const throwsSecondArgumentAsserter = (assertList, fn) => {
  const FIXED_LIMITER = 10;
  for (let i = 0; i < assertList.length; i++) {
    assert.throws(
      () => fn(FIXED_LIMITER, assertList[i].input),
      assertList[i].expected
    );
  }
};

describe('lineArr > fillSeqNaturalNumbers', function () {
  describe('type error > limiter [first argument]', function () {
    it('should throw an error if the limiter value is not a number', function () {
      throwsFirstArgumentAsserter(
        notNumberErrorMsgPairs,
        lineArr.fillSeqNaturalNumbers
      );
    });

    it('should throw an error if the limiter is not an integer', function () {
      throwsFirstArgumentAsserter(
        notIntegerErrorMsgPairs,
        lineArr.fillSeqNaturalNumbers
      );
    });

    it('should throw an error if the limiter is not a safe integer', function () {
      throwsFirstArgumentAsserter(
        notSafeIntegerErrorMsgPairs,
        lineArr.fillSeqNaturalNumbers
      );
    });

    it('should throw an error if the limiter is not equal to or bigger than 0', function () {
      throwsFirstArgumentAsserter(
        notNaturalNumberErrorMsgPairs,
        lineArr.fillSeqNaturalNumbers
      );
    });
  });

  describe('type error > includeLast [second argument]', function () {
    it('should throw an error if includeLast is not a boolean', function () {
      throwsSecondArgumentAsserter(
        notBooleanErrorMsgPairs,
        lineArr.fillSeqNaturalNumbers
      );
    });
  });

  describe('results (given valid arguments)', function () {
    const validInputResultPairs = [
      {
        input: [0],
        expected: [],
      },
      {
        input: [1],
        expected: [0],
      },
      {
        input: [3],
        expected: [0, 1, 2],
      },
      {
        input: [5],
        expected: [0, 1, 2, 3, 4],
      },
      {
        input: [0, true],
        expected: [0],
      },
      {
        input: [1, true],
        expected: [0, 1],
      },
      {
        input: [3, true],
        expected: [0, 1, 2, 3],
      },
      {
        input: [5, true],
        expected: [0, 1, 2, 3, 4, 5],
      },
    ];

    it('should return correct results', function () {
      for (let i = 0; i < validInputResultPairs.length; i++) {
        assert.deepStrictEqual(
          lineArr.fillSeqNaturalNumbers(...validInputResultPairs[i].input),
          validInputResultPairs[i].expected
        );
      }
    });
  });
});
