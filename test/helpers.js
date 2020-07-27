const ERR_EXPECTED_NUMBER = /expected a number/;
const ERR_EXPECTED_INTEGER = /expected an integer/;
const ERR_EXPECTED_SAFE_INTEGER = /value above safe integer/;
const ERR_EXPECTED_NATURAL_NUMBER = /expected a number greater or equal to 0/;
const ERR_EXPECTED_BOOLEAN = /expected a boolean/;

const notBooleanErrorMsgPairs = [
  {
    input: 'random string',
    expected: ERR_EXPECTED_BOOLEAN,
  },
  {
    input: 23,
    expected: ERR_EXPECTED_BOOLEAN,
  },
  {
    input: {},
    expected: ERR_EXPECTED_BOOLEAN,
  },
  {
    input: { demo: 'stuff' },
    expected: ERR_EXPECTED_BOOLEAN,
  },
  {
    input: [],
    expected: ERR_EXPECTED_BOOLEAN,
  },
  {
    input: [1, 2, 3],
    expected: ERR_EXPECTED_BOOLEAN,
  },
  {
    input: NaN,
    expected: ERR_EXPECTED_BOOLEAN,
  },
  {
    input: Infinity,
    expected: ERR_EXPECTED_BOOLEAN,
  },
];

const notNaturalNumberErrorMsgPairs = [
  {
    input: -2393920,
    expected: ERR_EXPECTED_NATURAL_NUMBER,
  },
  {
    input: -1,
    expected: ERR_EXPECTED_NATURAL_NUMBER,
  },
];

const notSafeIntegerErrorMsgPairs = [
  {
    input: 9999999999999999,
    expected: ERR_EXPECTED_SAFE_INTEGER,
  },
];

const notIntegerErrorMsgPairs = [
  {
    input: 3.14,
    expected: ERR_EXPECTED_INTEGER,
  },
  {
    input: 2.67,
    expected: ERR_EXPECTED_INTEGER,
  },
];

const notNumberErrorMsgPairs = [
  {
    input: 'random string',
    expected: ERR_EXPECTED_NUMBER,
  },
  {
    input: true,
    expected: ERR_EXPECTED_NUMBER,
  },
  {
    input: {},
    expected: ERR_EXPECTED_NUMBER,
  },
  {
    input: { demo: 'stuff' },
    expected: ERR_EXPECTED_NUMBER,
  },
  {
    input: [],
    expected: ERR_EXPECTED_NUMBER,
  },
  {
    input: [1, 2, 3],
    expected: ERR_EXPECTED_NUMBER,
  },
  {
    input: NaN,
    expected: ERR_EXPECTED_NUMBER,
  },
  {
    input: Infinity,
    expected: ERR_EXPECTED_NUMBER,
  },
];

module.exports = {
  notNumberErrorMsgPairs,
  notIntegerErrorMsgPairs,
  notSafeIntegerErrorMsgPairs,
  notNaturalNumberErrorMsgPairs,
  notBooleanErrorMsgPairs,
};
