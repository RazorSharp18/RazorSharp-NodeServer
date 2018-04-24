'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controller = require('../modules/users/controller');

var razorlive = _interopRequireWildcard(_controller);

var _express = require('express');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import * as UserController from './controller';

const routes = new _express.Router();
routes.post('/users/auth0', razorlive.loginWithAuth0);

exports.default = routes;
// module.exports = function(app) {
//   // get Routes for Restaurants
//   app.post('/users/auth0', function(req, res){
//     (razorlive)
//   });

// };