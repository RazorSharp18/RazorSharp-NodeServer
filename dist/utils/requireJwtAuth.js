'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requireJwtAuth = undefined;

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import '../modules/users/utils/passport';

const requireJwtAuth = exports.requireJwtAuth = _passport2.default.authenticate('jwt', { session: false });