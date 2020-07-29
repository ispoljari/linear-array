const assert = require('assert');

const throwsArgumentAsserter = (assertList, fn, ...fixedArgs) => {
  for (let i = 0; i < assertList.length; i++) {
    assert.throws(
      () =>
        fixedArgs.length > 0
          ? fn(...fixedArgs, assertList[i].input)
          : fn(assertList[i].input),
      assertList[i].expected
    );
  }
};

const deepEqualsAsserter = (assertList, fn) => {
  for (let i = 0; i < assertList.length; i++) {
    assert.deepStrictEqual(fn(...assertList[i].input), assertList[i].expected);
  }
};

module.exports = {
  throwsArgumentAsserter,
  deepEqualsAsserter,
};
