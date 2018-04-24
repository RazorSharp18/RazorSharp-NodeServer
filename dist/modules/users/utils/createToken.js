'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _confg = require('../../../config/confg');

var _confg2 = _interopRequireDefault(_confg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createToken = exports.createToken = args => _jsonwebtoken2.default.sign({ id: args._id }, _confg2.default.JWT_SECRET);