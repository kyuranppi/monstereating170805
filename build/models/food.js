'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// model


var Schema = _mongoose2.default.Schema;

var Food = new Schema({
    name: String,
    ingredients: String,
    created: { type: Date, default: Date.now }
});

exports.default = _mongoose2.default.model('food', Food);