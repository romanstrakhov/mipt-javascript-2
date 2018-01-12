/* eslint-env mocha */
'use strict';

var assert = require('assert');
var addTime = require('./index');

describe('Добавление интервала ко времени', function () {
    it('', function () {
        assert.strictEqual(addTime(12, 30, 30), '13:00');
    });



});

