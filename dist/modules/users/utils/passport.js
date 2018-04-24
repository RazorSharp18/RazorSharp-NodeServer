'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = require('passport-jwt');

var _model = require('../model');

var _model2 = _interopRequireDefault(_model);

var _config = require('../../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * JWT STRATEGY
 */

const jwtOpts = {
  // Tell passport to take the jwt token from the Authorization headers
  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeader('Authorization'),
  secretOrKey: _config2.default.JWT_SECRET
};

const jwtStrategy = new _passportJwt.Strategy(jwtOpts, async (payload, done) => {
  try {
    const user = await _model2.default.findById(payload.id);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (e) {
    return done(e, false);
  }
});

_passport2.default.use(jwtStrategy);