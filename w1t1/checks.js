// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var sum = require('./index.js');

assert.equal(sum(12, 33), 45, 'При сложении 12 и 33 получится 45');
assert.equal(sum(101, '17'), 118, 'При сложении 101 и 17 получится 118');
// my tests
assert.ok(isNaN(sum('38 попугаев', '17'), 'Строка 38 попугаев должно быть NaN'));

console.info('OK!');
