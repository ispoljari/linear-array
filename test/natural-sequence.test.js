const assert = require('assert');

const lineArr = require('../dist/linear-array');
const {
  notNumberErrorMsgPairs,
  notIntegerErrorMsgPairs,
  notSafeIntegerErrorMsgPairs,
  notNaturalNumberErrorMsgPairs,
  notBooleanErrorMsgPairs,
  notArrayErrorMsgPairs,
} = require('./helpers');

const throwsFirstArgumentAsserter = (assertList, fn) => {
  for (let i = 0; i < assertList.length; i++) {
    assert.throws(() => fn(assertList[i].input), assertList[i].expected);
  }
};

const throwsSecondArgumentAsserter = (assertList, fn, fixedArg) => {
  for (let i = 0; i < assertList.length; i++) {
    assert.throws(
      () => fn(fixedArg, assertList[i].input),
      assertList[i].expected
    );
  }
};

const deepEqualsAsserter = (assertList, fn) => {
  for (let i = 0; i < assertList.length; i++) {
    assert.deepStrictEqual(fn(...assertList[i].input), assertList[i].expected);
  }
};

describe('lineArr > natural-sequence', function () {
  describe('fillSeqNaturalNumbers', function () {
    describe('type error > limiter (first argument)', function () {
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

    describe('type error > includeLast (second argument)', function () {
      const FIXED_LIMITER = 10;

      it('should throw an error if includeLast is not a boolean', function () {
        throwsSecondArgumentAsserter(
          notBooleanErrorMsgPairs,
          lineArr.fillSeqNaturalNumbers,
          FIXED_LIMITER
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
        deepEqualsAsserter(
          validInputResultPairs,
          lineArr.fillSeqNaturalNumbers
        );
      });
    });
  });

  describe('isSeqNaturalNumbers', function () {
    describe('type error > arr (only argument)', function () {
      it('should throw an error if arr is not of type Array', function () {
        throwsFirstArgumentAsserter(
          notArrayErrorMsgPairs,
          lineArr.isSeqNaturalNumbers
        );
      });
    });

    describe('results (given a valid argument)', function () {
      const validInputFalseResultPairs = [
        {
          input: [[Infinity, 0, 1, 2, 3, 4]],
          expected: false,
        },
        {
          input: [[1, 2, 3, 4]],
          expected: false,
        },
        {
          input: [[0, 1, true, 3, 'dkdk', 5]],
          expected: false,
        },
        {
          input: [[0, 1, 2, 3, 4, 5, 7]],
          expected: false,
        },
        {
          input: [[1, 2, 3, 4, 5]],
          expected: false,
        },
        {
          input: [[-1, 0, 1, 2, 3, 4, 5]],
          expected: false,
        },
        {
          input: [[NaN, false, 'true', 2]],
          expected: false,
        },
        {
          input: [[5, 5, 5, 5]],
          expected: false,
        },
        {
          input: [[5, 4, 3, 2, 1, 0]],
          expected: false,
        },
      ];

      const validInputTrueResultPairs = [
        {
          input: [[0]],
          expected: true,
        },
        {
          input: [[0, 1, 2, 3, 4]],
          expected: true,
        },
        {
          input: [[0, 1, 2, 3, 4, 5, 6, 7, 8]],
          expected: true,
        },
        // {
        //   input: lineArr.fillSeqNaturalNumbers(10000),
        //   expected: true,
        // }
      ];

      it('should return false', function () {
        deepEqualsAsserter(
          validInputFalseResultPairs,
          lineArr.isSeqNaturalNumbers
        );
      });

      it('should return true', function () {
        deepEqualsAsserter(
          validInputTrueResultPairs,
          lineArr.isSeqNaturalNumbers
        );
      });
    });
  });
});
