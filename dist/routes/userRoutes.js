'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {
    // get Routes for Restaurants
    app.route('/users/auth0').post(_controller.loginWithAuth0);
};

var _controller = require('../modules/users/controller');