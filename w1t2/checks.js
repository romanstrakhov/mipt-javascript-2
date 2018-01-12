// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var isValidTime = require('./index.js');

assert.equal(isValidTime(12, 30), true, 'Время 12:30 валидное.');
assert.equal(isValidTime(12, 61), false, 'Время 12:61 невалидное');
assert.equal(isValidTime(24, 11), false, 'Время 24:11 невалидное');
assert.equal(isValidTime(0, 11), true, 'Время 0:11 валидное');
assert.equal(isValidTime(11, 0), true, 'Время 0:11 валидное');
assert.equal(isValidTime(-1, 15), false, 'Время -1:15 невалидное');
assert.equal(isValidTime(15, -5), false, 'Время 15:-5 невалидное');

console.info('OK!');
