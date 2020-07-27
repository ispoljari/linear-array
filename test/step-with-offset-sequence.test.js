const lineArr = require('../dist/linear-array');

const {
  notNumberErrorMsgPairs,
  notIntegerErrorMsgPairs,
  notSafeIntegerErrorMsgPairs,
  notNaturalNumberErrorMsgPairs,
  notBooleanErrorMsgPairs,
  notArrayErrorMsgPairs,
} = require('./utils/input-expected-pairs');

const {
  throwsArgumentAsserter,
  deepEqualsAsserter,
} = require('./utils/asserters');

const FIXED_LIMITER = 10;
const FIXED_STEP = 10;

describe('lineArr > step-with-offset-sequence', function () {
  describe('fillStepSequenceWithOffset', function () {
    describe('type error > argument not a number', function () {
      it('should throw an error if the limiter (first argument) is not valid', function () {
        throwsArgumentAsserter(
          notNumberErrorMsgPairs,
          lineArr.fillStepSequenceWithOffset
        );
      });

      it('should throw an error if the step (second argument) is not valid', function () {
        throwsArgumentAsserter(
          notNumberErrorMsgPairs,
          lineArr.fillStepSequenceWithOffset,
          FIXED_LIMITER
        );
      });

      it('should throw an error if the offset (third argument) is not valid', function () {
        throwsArgumentAsserter(
          notNumberErrorMsgPairs,
          lineArr.fillStepSequenceWithOffset,
          FIXED_LIMITER,
          FIXED_STEP
        );
      });
    });

    describe('type error > argument not an integer', function () {
      it('should throw an error if the limiter (first argument) is not valid', function () {
        throwsArgumentAsserter(
          notIntegerErrorMsgPairs,
          lineArr.fillStepSequenceWithOffset
        );
      });

      it('should throw an error if the step (second argument) is not valid', function () {
        throwsArgumentAsserter(
          notIntegerErrorMsgPairs,
          lineArr.fillStepSequenceWithOffset,
          FIXED_LIMITER
        );
      });

      it('should throw an error if the offset (third argument) is not valid', function () {
        throwsArgumentAsserter(
          notIntegerErrorMsgPairs,
          lineArr.fillStepSequenceWithOffset,
          FIXED_LIMITER,
          FIXED_STEP
        );
      });
    });

    describe('type error > argument not a safe integer', function () {
      it('should throw an error if the limiter (first argument) is not valid', function () {
        throwsArgumentAsserter(
          notSafeIntegerErrorMsgPairs,
          lineArr.fillStepSequenceWithOffset
        );
      });

      it('should throw an error if the step (second argument) is not valid', function () {
        throwsArgumentAsserter(
          notSafeIntegerErrorMsgPairs,
          lineArr.fillStepSequenceWithOffset,
          FIXED_LIMITER
        );
      });

      it('should throw an error if the offset (third argument) is not valid', function () {
        throwsArgumentAsserter(
          notSafeIntegerErrorMsgPairs,
          lineArr.fillStepSequenceWithOffset,
          FIXED_LIMITER,
          FIXED_STEP
        );
      });
    });

    describe('type error > argument is not equal to or bigger than 0', function () {
      it('should throw an error if the limiter (first argument) is not valid', function () {
        throwsArgumentAsserter(
          notNaturalNumberErrorMsgPairs,
          lineArr.fillStepSequenceWithOffset
        );
      });

      it('should throw an error if the step (second argument) is not valid', function () {
        throwsArgumentAsserter(
          notNaturalNumberErrorMsgPairs,
          lineArr.fillStepSequenceWithOffset,
          FIXED_LIMITER
        );
      });

      it('should throw an error if the offset (third argument) is not valid', function () {
        throwsArgumentAsserter(
          notNaturalNumberErrorMsgPairs,
          lineArr.fillStepSequenceWithOffset,
          FIXED_LIMITER,
          FIXED_STEP
        );
      });
    });

    describe('results (given valid arguments)', function () {
      const validInputResultPairs = [
        {
          input: [5],
          expected: [0, 1, 2, 3, 4],
        },
        {
          input: [5, 1, 3],
          expected: [3, 4, 5, 6, 7],
        },
        {
          input: [5, 3],
          expected: [0, 3, 6, 9, 12],
        },
        {
          input: [5, 2, 2],
          expected: [2, 4, 6, 8, 10],
        },
      ];

      it('should return correct results', function () {
        deepEqualsAsserter(
          validInputResultPairs,
          lineArr.fillStepSequenceWithOffset
        );
      });
    });
  });
});
