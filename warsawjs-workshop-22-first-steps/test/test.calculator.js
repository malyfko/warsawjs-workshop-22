const test = require('tape');
const Calculator = require('../src/calculator');

test('test add function', (assert) => {
    assert.equal(Calculator.add(1, 2), 3);
});
