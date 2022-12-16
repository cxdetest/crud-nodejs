const { assert } = require('chai');

function addValue(n1, n2) {
  return n1 + n2;
}

describe('test suite for our API', () => {
  it('waiting 10', () => {
    let data = addValue(5, 5);
    assert.equal(data, 10);
  });
});
