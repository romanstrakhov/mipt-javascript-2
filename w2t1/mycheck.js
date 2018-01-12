// Встроенный в Node.JS модуль для проверок
// var assert = require('assert');

// Подключаем свою функцию
var getHashTags = require('./index.js');

var a = getHashTags('Прохожу курс на #coursera по #javascript на #coursera');


console.info(a);
