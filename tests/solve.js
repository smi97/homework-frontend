'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
		assert.strictEqual(solve('x', 3), 3);
		assert.strictEqual(solve('3', 3), 3);
		assert.strictEqual(solve('x+1', 2), 3);
		assert.strictEqual(solve('( x + 1 )/3', 2), 1);
		assert.strictEqual(solve('xxx', 3), 'error: variable wrong name');
		assert.strictEqual(solve('xx', 3), 'error: variable wrong name');
		assert.strictEqual(solve('1 - a - x', 3), 'error: equation wrong');
		assert.strictEqual(solve('1 - a - a', 3), 'error: equation wrong');
		assert.strictEqual(solve('a', 3), 'error: equation wrong');
		assert.strictEqual(solve('xa', 3), 'error: equation wrong');
		assert.strictEqual(solve(2322, 3), 'error: equation wrong type');
		assert.strictEqual(solve('x', '2'), 2);
		assert.strictEqual(solve({equation: "test", x: 30 }, 3), 'error: equation wrong type');
		assert.strictEqual(solve(null, 3), 'error: equation wrong type');
		assert.strictEqual(solve('x', 'x'), 'error: x wrong');
		assert.strictEqual(solve('x', null), 'error: x wrong type');
		assert.strictEqual(solve('x', 2.3), 'error: x is not integer');
	});
});
