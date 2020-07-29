const ERR_EXPECTED_NUMBER = /expected a number/;
const ERR_EXPECTED_INTEGER = /expected an integer/;
const ERR_EXPECTED_SAFE_INTEGER = /value above safe integer/;
const ERR_EXPECTED_NATURAL_NUMBER = /expected a number greater or equal to 0/;
const ERR_EXPECTED_BOOLEAN = /expected a boolean/;
const ERR_EXPECTED_ARRAY = /expected an array/;

const createBasePairs = (errMsg) => [
  {
    input: 'random string',
    expected: errMsg,
  },
  {
    input: 23,
    expected: errMsg,
  },
  {
    input: true,
    expected: errMsg,
  },
  {
    input: {},
    expected: errMsg,
  },
  {
    input: { demo: 'stuff' },
    expected: errMsg,
  },
  {
    input: [],
    expected: errMsg,
  },
  {
    input: [1, 2, 3],
    expected: errMsg,
  },
  {
    input: NaN,
    expected: errMsg,
  },
  {
    input: Infinity,
    expected: errMsg,
  },
];

const notArrayErrorMsgPairs = [
  ...createBasePairs(ERR_EXPECTED_ARRAY).filter(
    (item) => !Array.isArray(item.input)
  ),
];

const notBooleanErrorMsgPairs = [
  ...createBasePairs(ERR_EXPECTED_BOOLEAN).filter(
    (item) => typeof item.input !== 'boolean'
  ),
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
  ...createBasePairs(ERR_EXPECTED_NUMBER).filter(
    (item) => !Number.isFinite(item.input)
  ),
];

module.exports = {
  notNumberErrorMsgPairs,
  notIntegerErrorMsgPairs,
  notSafeIntegerErrorMsgPairs,
  notNaturalNumberErrorMsgPairs,
  notBooleanErrorMsgPairs,
  notArrayErrorMsgPairs,
};
